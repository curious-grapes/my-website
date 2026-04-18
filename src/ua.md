---
layout: templates/page.html
title: "Ukrainian page"
eleventyExcludeFromCollections: true
---

Це сторінка на українській!


![](/posts/materials/featured-img/under-construction.png)

---

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules
___

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

==This is highlighted text==

## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Accordion
<details>
<!-- <details open> -->
  <summary>Click here to open list of tweaks</summary>
items inside  

</details>

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

``` bash
sudo rm -rf /
```

``` python
print(hello-world)
```


## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")



> [!note]
> This is a plain note.

> [!abstract]
> This is a abstract note.

> [!info]
> Extra context here.

> [!todo]
> Don't forget to do this.

> [!tip] Custom title
> You can override the label after the type keyword.

> [!success]
> It worked!

> [!question]- Are callouts foldable?
> Yes! This one is collapsed by default.

> [!warning]
> Watch out!

> [!failure]
> Something went wrong.

> [!danger]
> Do **not** do this.

> [!bug]
> Something isn't working.

> [!example]+ Expanded by default
> This one is open by default.

> [!quote]
> This is a quote callout.