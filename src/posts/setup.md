---
status: "published" # options: hidden | draft | published
title: "My setup"
date: "2026-01-29"
tags:
  - setup
  - technology
img: "/posts/materials/featured-img/setup.png"
description: "This is the setup I use every day. The tech, audio, and accessories that help me work better and enjoy my space more."
excerpt: "This is the setup I use every day."
---

Everything here was bought used, on sale, or after an embarrassing amount of research. Sometimes all three.
# Laptops
## Acer Aspire 5
![](/posts/materials/posts/setup/acer-aspire-5.png)
That was my first laptop I got for my birthday. It had an Intel Core i5 10<sup>th</sup> Gen CPU, 16 GB of DDR4 RAM, and an Nvidia GeForce MX250 GPU, which was more than enough for studying and gaming. Since the CPU was very efficient, it could last more than 5–6 hours under light use. While under load, it would get too hot to be comfortably kept on the lap. It was 15.6", had an Ethernet port, a fingerprint reader (with poor Linux support), opened 180°, and had an aluminum top cover, while still being only 17 mm thick. 
However, the charging port was super thin (like in some Nokia phones), and the plug was wobbly. 
Also, either it arrived like that, or it fell on its side at some point, but there was pretty noticeable backlight bleed, which was distracting and sometimes really annoying when watching movies or using it in the dark.

Over time, I wanted something more rigid and powerful, so I put the laptop up for sale and started looking for a new one.
## DELL Precision 5530
![](/posts/materials/posts/setup/dell-precision-5530.png)
I bought this ~~laptop~~ *workstation* used from a local marketplace (but for the rest of this post, I'll call it a laptop anyway).
Being positioned as a workstation, it had professional-level hardware (at the time of release). It felt really solid: both the top and bottom cases were metal, and the palm rest was made of carbon-textured plastic. The BIOS had many advanced settings. The keyboard layout was super convenient (although there were no separate keys for Pg Up, Pg Down, Home, and End), but the keys themselves had rather short travel. 
Other nice features included very good speakers, a calibrated and precise touchpad, one of the fastest SD card readers I have ever used, and USB-C with Thunderbolt 3, which also allowed charging the laptop through the same port.
Although it had an older CPU (Intel Core i7 8<sup>th</sup> Gen), it came with 32 GB of DDR4 RAM and an NVIDIA Quadro P1000 GPU. All of that combined delivered noticeably more performance in games compared to my previous laptop. Cooling was also much better, thanks to two fans instead of one, and they were not nearly as noisy at maximum speed.
To power that beast, it came with a convenient 130W charger, which could also charge a 97 Wh battery.
Somewhat controversial was the screen. Don't get me wrong, a 4K display with a super bright backlight, very small bezels, and touchscreen support is great, and I really miss it. However, being covered with a single large piece of glass made me nervous about shattering it from even a small hit on the side (although the metal case helped there). The glossy surface also required to wipe the screen every week or two to remove the dust, keyboard grease (since the screen inevitably touches the keyboard when closed), and fingerprints. 
Another problem was scaling to 4K. Windows and many of the apps had issues properly scaling the UI. Using the laptop with a second display (most of which are 1080p) often broke the app interface or made it appear four times larger than normal. This usually required relaunching the app or manually adjusting settings. Another limitation was the display assembly itself. It was almost impossible to disassemble the screen. If anything happened to it, the entire unit had to be replaced. 
And remember those small bezels? They had downsides too. To achieve them, Dell moved the webcam to the bottom of the screen. That meant you were always seen from below during video calls, and your fingers were constantly in the frame while typing. The microphone was placed in the bottom part of the chassis, making its quality consistently poor. Also, when I used the laptop in bed, microphone would get covered, making it hard for others to hear me.
On the other hand, I really liked the neat bottom service hatch that hid all the regulatory text usually printed on the underside of laptops, keeping the design clean.

---
I was really happy with it, but over time it stopped feeling as snappy as it used to. After working on many projects, the system probably accumulated too much clutter. Reinstalling Windows might have helped, but reinstalling all the tools, apps, tweaks, and rebuilding my development environment felt like too much work. So I did the reasonable thing and bought a new laptop instead.
Unfortunately, by that point, the newer Dell Precision lineup had removed USB-A ports; in fact, almost all ports except USB-C. Most thumb drives, mice, and adapters still use USB-A, and I know dongles exist, but isn't the whole idea of laptops to be portable? Dongle manufacturers have never had it better.
So I started looking elsewhere. I didn't want a gaming laptop, but I still needed a decent GPU. My first choice was the Lenovo ThinkPad P1 Gen 6, but by the time I was ready to buy, it had quietly disappeared from the store. 
I kept looking, narrowing my search to used ThinkPads with DDR5 RAM. A global memory chip shortage had been pushing SSD and RAM prices up for a while, and the situation was not improving. On top of that, I wanted to avoid the newest ThinkPad generations that replaced the context menu key with a Copilot button. I use that key a lot. I am not giving it up for a button that opens an AI assistant I did not ask for. The latest generation ThinkPad P1 had exactly that problem, plus a front camera bump on the lid and a price that was hard to justify.
In the middle of all that, I somehow found a practically brand new ThinkPad P16S with DDR5 RAM and 1 TB of NVMe storage at a reasonable price, which ended up in unexpectedly long trip just to buy a laptop.
There were two listings: one with a 4K OLED touchscreen and one with a 1080p IPS display. I went with the 1080p model. It was cheaper, and I wasn't willing to deal with scaling issues.



## ThinkPad P16S Gen 2 (current)
![](/posts/materials/posts/setup/thinkpad-p16s.png)
I ended up with the AMD Ryzen 7 Pro 7840U CPU, 32 GB of DDR5 RAM, and an AMD Radeon 780M GPU. Despite being integrated, the 780M is noticeably more powerful than the Quadro P1000 in my old Dell, while consuming significantly less power. The downside of integrated graphics is that it shares system memory, so the actual usable RAM drops to around 27.7 GB.

ThinkPads have a reputation for great keyboards, and this one is no different. The keys have a satisfying feel and good travel. The layout also brings back dedicated Pg Up, Pg Down, Home, and End keys, which I often use. Another iconic ThinkPad feature is the TrackPoint. This is a small red nub in the middle of the keyboard (you move it in the direction you want with some force, and it moves the cursor). You can navigate without ever moving your hands away from the keyboard. It does take some time to get used to, though.

On the privacy side, the webcam has a physical shutter built into the lid, which is a small but satisfying thing to have. Facial recognition and a fingerprint reader are nice features to have as well.

The laptop charges over USB-C, and one of the two USB-C ports supports USB 4, which is a nice upgrade. There is also a slot for an optional WWAN modem, which I haven't used, but it is good to have an option.

> [!info] Random fact
> USB 4 is backward compatible with Thunderbolt 4. The nuance is that Thunderbolt is Intel's trademark, so AMD-based computers use USB 4 instead, which supports the same features but without the Thunderbolt branding. So if you see a USB-C port on an AMD laptop without a lightning icon, it can still be fully Thunderbolt-compatible in practice.

The hinges are sturdy and fully metal, which has historically been one of ThinkPad's signature features. I feel like they will outlast the rest of the laptop.

Not everything is perfect, though. The fan exhaust is on the right side rather than the back, which means hot air blows directly onto your mouse hand, which gets uncomfortable fast. I guess it's Lenovo's way of keeping you warm in a harsh Canadian winter. The speakers might be enough for meetings, but listening to music was outright bad. The screen is 1920×1200px, but has mediocre color accuracy, which is noticeable when editing photos or comparing it with other displays. The RAM is soldered to the motherboard, so what you buy is what you are stuck with forever.

The touchpad is also a step down from the Dell. Tracking feels less precise, and the physical click zones are frustrating. The right-click zone takes up roughly the bottom 50% of the touchpad, making accidental right-clicks easy to trigger. On the Dell, it was closer to 20%. On top of that, the touchpad can only be clicked near the bottom.

The hotkey layout deserves its own paragraph. By default, the function row is set to multimedia keys, which sounds convenient but causes a frustrating issue: pressing Alt+F4 doesn't close a window because F4 in media mode acts as a microphone mute key instead. My Dell handled this better: the F4 key would automatically switch from its media function to a regular F4 when held with Alt. Here, no such logic exists. The other multimedia keys are mostly useless to me personally. Another thing I miss from Dell: play, pause, next, and previous track shortcuts mapped to the arrow keys. Fortunately, I was able to reconfigure the hotkey behavior using the tool called [HotkeyMapper](https://github.com/csavalas/HotkeyMapper). A problem that should not exist, solved by a tool that should not need to exist.

Overall, it is a solid machine that does everything I need without much complaint. The minor issues are present, but some of them can be solved by buying a more expensive configuration with a better screen, more RAM, etc.


# Other Devices
Besides my everyday devices, I also own an iPad Mini 4 and an iPod Classic 6th Gen.
iPad is quite old at this point; it doesn't receive updates anymore, but I still use it for drawing, sketching, and other creative work.
![](/posts/materials/posts/setup/ipad-mini-4.png)
I also use the iPod occasionally, mostly for music on long car trips connected to the stereo. I used to have an iPod Nano 2nd Gen before (hence my love for them), but unfortunately, its battery died. I think that those older iPods were ~~toblerone~~ the pinnacle of consumer design. The scroll wheel, clean UI, satisfying click you could hear without headphones, a real hard drive, and a battery that lasted days — all of it added up to something that has never quite been replicated since. Presumably because nobody could figure out how to put a subscription in it.
![](/posts/materials/posts/setup/ipod-classic.png)

# Screen
Nothing too interesting, just some Asus monitor (here's the model if you're interested: VP279). If you are still reading this sentence, I respect your dedication.
![](/posts/materials/posts/setup/asus-screen.png)
# Input Devices
## Keyboards
I mostly use my laptop keyboard, but if I work on a server or a computer, I use the Logitech Wireless Keyboard K330. Nothing special about it. It types letters, which is all I ask.
![](/posts/materials/posts/setup/logitech-keyboard.png)
I also own a Microsoft Sculpt Ergonomic keyboard; it has a split keyboard layout, but I'm still getting used to it.
![](/posts/materials/posts/setup/microsoft-keyboard.png)
## Mice
For the setup, I primarily use Logitech G502 Hero, which has many features, like infinite scroll, separate buttons for tilting the scroll wheel left and right, back and forward buttons, and the ability to set up macros.
![](/posts/materials/posts/setup/logitech-g502.png)
For other occasions, when I'm not home, or for other laptops, I use Logitech MX Anywhere 2S. This mouse is similar to G502, but it has its ups and downs. It can connect up to three devices simultaneously, connect to unifying dongle (if device doesn't have Bluetooth), but it has fewer buttons overall. The scroll wheel click is reserved for switching between infinite and regular scrolling instead of acting as a middle click.
![](/posts/materials/posts/setup/logitech-mx-anywhere-2s.png)
# Audio
## Headphones
As of now, I have multiple headphones. I'll go in the order I got them.
Wireless in-ear Sony WF-1000XM3. Those are a bit bulky in ear, touch panel is not the most convenient way of controlling them, but overall they are fine.
![](/posts/materials/posts/setup/sony-wf-1000xm3.png)
The wired in-ear AIWAs are nice and well built, but being low-impedance, they play super loud even at low volume on most devices (the only devices that seem to work fine with them are iPod and Thinkpad).
![](/posts/materials/posts/setup/aiwa-headphones.png)
Wireless over-ear Marshall Monitor II A.N.C. I got very lucky when I bought those. Someone was selling a brand new pair on a local marketplace. I hesitated to buy them, as they were still expensive. But I really wanted to hear the details of a song, or whatever I'm listening to, so I bought them. I really like the combination of the metal frame with leather cushions and headband. Even the logo is not plastic, but rubberized, and the ANC microphone is hidden inside the letter. It looks super stylish and eye-catching. On the technical side, it supports multipoint connection, so they can be connected to both laptop and phone and switch automatically, depending on what is playing. It doesn't have AptX for high quality audio, but when needed, I can connect them over wire.
![](/posts/materials/posts/setup/marshall-monitor-ii.png)

## Speakers
Since my current laptop has poor speakers, I needed a good pair of external speakers.
![](/posts/materials/posts/setup/creative-pebble-v3.png)
My choice fell to Creative Pebble V3 for their sound, size, and functionality (it can transfer sound through USB-C cable (along with the power), Bluetooth, or 3.5 minijack).

# Accessories
## Charger
For charging on the go, I use UGREEN Nexode 65W USB-C GaN Charger with 3 ports and a USB-C to USB-C cable from the same manufacturer.
![](/posts/materials/posts/setup/ugreen-charger-cable.png)
## Router
For the router, I went with GL.iNET Opal. It is a bit old and doesn't support many new features, but that's fine. It can be powered through USB-C, can work as a repeater, access point, or just as a router. It has failover (when you have two internet sources, it will automatically switch, if one of them fails), VPN, and you can tether internet from your phone with a cable or connect a modem to it.
![](/posts/materials/posts/setup/glinet-opal.png)

> [!info] Random fact
> Google and Apple regularly collect a list of Wi-Fi near you and save it. They are using this to get a faster and more precise location when you open Google Maps. If you want to opt out of this, add '_nomap' to the end of your Wi-Fi name.

## External storage
UGREEN's 2-in-1 SD Card Reader has been around in my setup for years and has proven its reliability.
![](/posts/materials/posts/setup/ugreen-sd-card-reader.png)
The most recent addition is the Satechi USB4 NVMe SSD Pro Enclosure — speeds of up to 4 GB/s, clean design, and easy drive swapping.
![](/posts/materials/posts/setup/satechi-nvme-ssd-enclosure.png)
Also, check out this fabric sleeve case my girlfriend made.
![](/posts/materials/posts/setup/satechi-nvme-ssd-enclosure-case.png)
And for 2.5" HDD (or SATA SSD), I have a UGREEN USB-C Hard Drive enclosure.
![](/posts/materials/posts/setup/ugreen-hdd-enclosure.png)



<!-- # tools

- flipper zero
- FNIRSI HS-01
- portable flashlight
- klein screwdiver -->
