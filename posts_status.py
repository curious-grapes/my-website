#!/usr/bin/env python3

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Dict, List


@dataclass
class PostInfo:
	rel_path: str
	file_name: str
	title: str
	status: str
	frontmatter_date: str
	file_date: str
	tags: List[str]


def parse_frontmatter(md_path: Path) -> Dict[str, object]:
	"""Parse YAML-like front matter from the beginning of a markdown file."""
	lines = md_path.read_text(encoding="utf-8").splitlines()

	if len(lines) < 3 or lines[0].strip() != "---":
		return {}

	end_index = None
	for i in range(1, len(lines)):
		if lines[i].strip() == "---":
			end_index = i
			break

	if end_index is None:
		return {}

	data: Dict[str, object] = {}
	idx = 1
	while idx < end_index:
		raw = lines[idx].rstrip()
		idx += 1

		stripped = raw.strip()
		if not stripped or stripped.startswith("#"):
			continue

		if stripped.startswith("-"):
			continue

		if ":" not in raw:
			continue

		key, value = raw.split(":", 1)
		key = key.strip()
		value = value.strip()

		if " #" in value:
			value = value.split(" #", 1)[0].rstrip()

		if value == "" and key == "tags":
			tags: List[str] = []
			while idx < end_index:
				tag_line = lines[idx].strip()
				if tag_line.startswith("-"):
					tag_value = tag_line[1:].strip().strip('"').strip("'")
					if tag_value:
						tags.append(tag_value)
					idx += 1
				elif not tag_line:
					idx += 1
				else:
					break
			data[key] = tags
			continue

		cleaned = value.strip().strip('"').strip("'")
		data[key] = cleaned

	return data


def collect_markdown_files(src_dir: Path) -> List[Path]:
	return sorted(p for p in src_dir.rglob("*.md") if p.is_file())


def to_post_info(md_path: Path, src_dir: Path) -> PostInfo:
	frontmatter = parse_frontmatter(md_path)

	rel_path = str(md_path.relative_to(src_dir))
	file_name = md_path.name
	title = str(frontmatter.get("title", ""))
	status = str(frontmatter.get("status", ""))
	frontmatter_date = str(frontmatter.get("date", ""))
	tags = frontmatter.get("tags", [])
	if not isinstance(tags, list):
		tags = []

	modified = datetime.fromtimestamp(md_path.stat().st_mtime)
	file_date = modified.strftime("%Y-%m-%d")

	return PostInfo(
		rel_path=rel_path,
		file_name=file_name,
		title=title,
		status=status,
		frontmatter_date=frontmatter_date,
		file_date=file_date,
		tags=[str(tag) for tag in tags],
	)


def group_name_for(rel_path: str) -> str:
	if "/" not in rel_path:
		return "src"
	return rel_path.split("/", 1)[0]


def compute_column_widths(items: List[PostInfo]) -> Dict[str, int]:
	rows = []
	for item in items:
		rows.append(
			{
				"file": item.file_name,
				"title": item.title or "-",
				"status": item.status or "-",
				"frontmatter_date": item.frontmatter_date or "-",
				"file_date": item.file_date,
				"tags": ", ".join(item.tags) if item.tags else "-",
			}
		)

	return {
		"file": max((len(r["file"]) for r in rows), default=1),
		"title": max((len(r["title"]) for r in rows), default=1),
		"status": max((len(r["status"]) for r in rows), default=1),
		"frontmatter_date": max((len(r["frontmatter_date"]) for r in rows), default=1),
		"file_date": max((len(r["file_date"]) for r in rows), default=1),
		"tags": max((len(r["tags"]) for r in rows), default=1),
	}


def print_group(title: str, items: List[PostInfo], widths: Dict[str, int]) -> None:
	print(f"------- [{title}] -------")
	if not items:
		print("(no markdown files)")
		return

	for item in items:
		tags_str = ", ".join(item.tags) if item.tags else "-"
		line = " | ".join(
			[
				(item.file_name).ljust(widths["file"]),
				(item.title or "-").ljust(widths["title"]),
				(item.status or "-").ljust(widths["status"]),
				(item.frontmatter_date or "-").ljust(widths["frontmatter_date"]),
				(item.file_date).ljust(widths["file_date"]),
				tags_str.ljust(widths["tags"]),
			]
		)
		print(line)


def main() -> None:
	script_dir = Path(__file__).resolve().parent
	src_dir = script_dir / "src"

	if not src_dir.exists() or not src_dir.is_dir():
		print(f"Source folder not found: {src_dir}")
		return

	files = collect_markdown_files(src_dir)
	post_infos = [to_post_info(path, src_dir) for path in files]

	grouped: Dict[str, List[PostInfo]] = {}
	for info in post_infos:
		grp = group_name_for(info.rel_path)
		grouped.setdefault(grp, []).append(info)

	widths = compute_column_widths(post_infos)

	ordered_groups = []
	if "posts" in grouped:
		ordered_groups.append("posts")
	if "src" in grouped:
		ordered_groups.append("src")
	ordered_groups.extend(sorted(g for g in grouped.keys() if g not in {"posts", "src"}))

	for group in ordered_groups:
		print_group(group, grouped[group], widths)


if __name__ == "__main__":
	main()
