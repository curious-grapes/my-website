---
title: "Server"
date: "2022-11-14"
tags:
  - server
img: "/posts/materials/featured-img/server.png"
description: "This is how I started my homelab server"
excerpt: "You know, I can control server even if it is off?"
---


В пошуках б/у материнської плати натрапила на очі плата Supermicro з підтримкою IPMI.

> IPMI це технологія яка дозволяє віддалено підключитись до сервера,  переглянути стан обладнання і керувати його роботою. Наприклад, перевіряти температуру окремих складових системи, рівні напруги, керувати швидкістю обертання вентиляторів.
> 
> Є можливість управління навіть вимкненим сервером – досить лише, щоб сервер був підключений до електричної мережі.
> 
> Таким чином віддалено можна налаштувати BIOS чи перевстановити систему без  фізичного доступу.

![](https://cdn.curious-grapes.one/ipmi.png)

## Комплектуючі:

- Материнська плата: Supermicro X9SCM-F
- CPU: Intel Xeon E3-1220 V2
- Cooler: RZTK GI-U4 SRGB
- RAM: Hynix DDR3 4x8GB ECC Unbuffered
- SSD: 120GB Kingston
- HDD: 320GB WD
- HDD: 2TB WD Green
- PSU: 450W
- Case: Chieftec Mesh

![](https://cdn.curious-grapes.one/new.jpg)

Переваги: повний віддалений доступ до системи, 4 слоти для ОЗУ, потужніший процесор, 2xSATA3(6Gb/s), 4xSATA2(3Gb/s), ECC пам’ять, два 1Gbit/s Ethernet роз’єми.

Недоліки: підтримка тільки ECC пам’яті, 8 pin CPU живлення.

## Програмне забезпечення

На моєму сервері працює Proxmox, платформа віртуалізації.  
По суті, це означає, що мій сервер може запускати кілька віртуальних машин одночасно.

Отже, що я запускаю на цих віртуальних машинах?  
Ну, у мене запущено кілька різних речей.  
По-перше, це OpenMediaVault. Це безкоштовна операційна система NAS (мережеве сховище) з відкритим кодом. Він ідеально підходить для зберігання та керування всіма моїми файлами та резервними копіями.

Також я маю Windows 10. Це досить зрозуміло — це віртуальна машина, на якій працює повна версія Windows. Я використовую її для доступу до локальної мережі та завдань які не повинні бути перервані.

І останнє, але не менш важливе: віртуальна машина з Debian на борту, на якій працює Docker. Для тих із вас, хто, можливо, не знайомий, Docker — це платформа, яка дозволяє запускати «контейнери». По суті, це легкі, автономні версії програмного забезпечення, які можуть працювати в будь-якій системі.

Ви можете запитати, що в мене працює в цих контейнерах Docker? Що ж, доволі багато різних речей, проте ключовими є:

OwnCloud: це автономне хмарне сховище. Це чудово для обміну файлами без необхідності загружати їх спершу на Google Drive.  
OnlyOffice: це потужний онлайн-офісний пакет інтегрований в OwnCloud. Це ідеальний варіант для швидкого редагування та спільної роботи над документами.  
Home Assistant: це платформа домашньої автоматизації з відкритим кодом. Вона дозволяє мені керувати всіма моїми розумними домашніми пристроями з одного місця.  
Photoprism: це рішення для керування фотографіями, яке дозволяє мені легко впорядковувати та шукати всі мої фотографії.  
Guacamole: це рішення для віддаленого робочого столу, яке дозволяє мені отримати доступ до всіх моїх віртуальних машин з будь-якого місця.

Загалом, мій сервер має досить вражаюче налаштування, якщо я так скажу. Він працює безперебійно протягом тривалого часу, і я впевнений, що так буде й надалі ще багато років.