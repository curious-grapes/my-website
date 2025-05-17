---
title: "Server"
date: "2022-11-14"
tags:
  - server
img: "/posts/materials/featured-img/server.png"
description: "This is how I started my homelab server"
excerpt: "You know, I can control server even if it is off?"
---

## Where it all begun

My homelab journey started from buying an old slim desktop computer and using a 2TB hard drive. As a beginner, the OS of my choice was OpenMediaVault. It was simple and easy to maintain. It worked for quite some time; however, as I gained more experience, I discovered Docker containers and open-source projects. At that time, I hadn’t had a public IP or domain to make my self-hosted apps public, so everything was local. Mainly, I used it as a shared drive, Plex server(that time it was still decent), Home Assistant hub, etc. With each service, the load grew higher and higher, leading to I/O load of >700%.

So upgrade it is.

## Server version 2.0

![](https://cdn.curious-grapes.one/new.jpg)

I found a used set of server motherboard **Supermicro X9SCM-F** and **Intel Xeon E3-1220 V2** CPU with a tower cooler.

![](https://www.servethehome.com/wp-content/uploads/2011/06/Supermicro-X9SCM-F-Overview.jpg)

As for the RAM, it gets tricky. It can **only** work with **unbuffered ECC DDR3** memory that features error correction, which will be very handy in the future. Those were hard to buy, but one by one, I collected **4** sticks, **8GB** each. To power server, I have found a **450W PSU**.  
To allow for the future growth of the server, I selected **Chieftec Mesh** case, that can fit **7** 3.5″ or 2.5″ HDD with individual quick mount sleds.

![](https://www.overclockers.ua/case/chieftec-mesh-cw-01b-op/15-chieftec-mesh-cw-01b.jpg)

### Where do I store my data?

As for the hard disks, I moved a **480GB SSD** and an old **2TB HDD** with data from the old server before selling it.  
I wanted to achieve disk redundancy, so I had to buy one more **2TB HDD**.  
They work together in **RAID 1** (redundant array of independent disks), which means that any data written to the storage is duplicated by two drives. Thanks to that, either of those two drives can die and no data will be lost. Then, I can replace faulty drive with the new one, rebuild the array (copy data from the other drive to the new one) and I’m good to go.

Continuing on the idea of redundancy:  
Like many of the server boards, mine has some cool tricks up its sleeve.  
One is that it has not one, but three Ethernet ports (the one you would be using right now if we hadn’t invented Wi-Fi). Two of them are 1Gbit/s transfer speed, and about a third we’ll talk later (LINK). With some magic on both router and server side (Link Aggregation if you’re interested) and two Ethernet cables coming from the server to the router, I can unplug any one of those and experience no interrupt in work. Not that I’d do this, but if you’re on vacation, you’d definitely be upset with the offline server.

### Backups, backups, backups…

Redundancy is good, but keep in mind that it is not a backup.  
One of the most popular strategies to backup is the **3-2-1 backup rule**. It advises that you have to keep **3** copies of your data, **2** of them on different storage, and **1** of them off-site in a remote location.

That’s how I ended up buying one more **4TB HDD** drive for backups. Add to that one more **2TB HDD** drive for family photos and other stuff, and **120GB SSD** for experiments, and we end up with a total of **6** drives in the server.

I’ll explain more about software later, but what about off-site backup?

Initially, I was planning to back up twice a year to cloud storage. I even decided to go with Blackblaze as they were providing cheap but reliable storage. But the downside to this method was a constant need to pay for it monthly. But I’m working on that.

### Features

3 port of server

ipmi

lsi pci card (MB has 2xSATA3(6Gb/s), 4xSATA2(3Gb/s))

![](https://cdn.curious-grapes.one/ipmi.png)

## Software

proxmox

VMs

trueNAS

server (debian)