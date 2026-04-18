---
status: "published" # options: hidden | draft | published
title: "Windows tweaks"
date: "2026-03-27"
tags:
  - windows
  - technology
img: "/posts/materials/featured-img/windows-tweaks.png"
description: "This is a collection of tweaks to improve windows experience."
excerpt: "This is a collection of tweaks to improve your Windows experience."
---

Windows has gotten pretty annoying with tons of weird default settings, ads, and tracking.
This is my collection of registry tweaks, which I apply to fresh Windows installations to make the system more usable.

> [!warning]
> It’s not possible to revert some of these settings! <p> You might need to re-install Windows!
You have been warned!

# Tweaks

<details><summary>Click here to open list of tweaks</summary>

- Disable 5x shift key / Sticky Keys popup
- Use 100% JPEG quality for wallpapers (default 85%)
- Disable lockscreen ads
- Turn off Microsoft consumer experiences
- Disable chat icon in taskbar
- Disable news and interests on the taskbar
- No auto-restart with logged on users for scheduled automatic updates installations
- Disable AI Recall
- Disable Bing In Search
- Disable Cortana In Search
- Disable Chat Taskbar
- Disable Copilot button on taskbar
- Disable Copilot service for current and all user
- Disable DVR
- Disable Lockscreen Tips
- Let Apps use Advertising ID for Relevant Ads in Windows 10
- Disable tailored experiences with diagnostic data
- Disable Online Speech Recognition
- Disable Improve Inking & Typing Recognition
- Send only Required Diagnostic and Usage Data
- Disable Let Windows improve Start and search results by tracking app launches
- Disable Activity History
- Set Feedback Frequency to Never
- Disable widgets taskbar
- Disable widgets service
- Disable Windows suggestions
- Do not show suggestions in Start
- Do not show recommendations for tips, shortcuts, new apps, and more in start
- Disable tips, tricks, and suggestions as you use Windows
- Disable suggested content in the Settings app
- Disable provider ads
- Disable Automatic Installation of Suggested Apps
- Disable "Suggested" app notifications
- Disable Show me suggestions for using my mobile device with Windows
- Disable Show account-related notifications
- Hide 3D Objects Folder
- Hide Gallery from Explorer
- Hide Onedrive Folder
- Hide Search Taskbar
- Show Extensions For Known File Types
- Show Hidden Folders

Other tweaks
- Set Explorer default to This PC
- Remove Learn about this picture desktop icon
- Disable Cortana
- Remove Shortcut Text
- Remove All User Folders From This PC 64-bit
- Remove Documents, Downloads, Music, Pictures, Videos From This PC

</details>

<details><summary>Click here to open source code</summary>

``` windows
Windows Registry Editor Version 5.00

; Disable 5x shift key / Sticky Keys popup
[HKEY_CURRENT_USER\Control Panel\Accessibility\StickyKeys]
"Flags"="510"

; Use 100% JPEG quality for wallpapers (default 85%)
[HKEY_CURRENT_USER\Control Panel\Desktop]
"JPEGImportQuality"=dword:00000064

; Disable lockscreen ads
; from https://winaero.com/how-to-disable-ads-in-windows-11/
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\ContentDeliveryManager]
"RotatingLockScreenEnabled"=dword:00000000

; Turn off Microsoft consumer experiences
[HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\CloudContent]
"DisableWindowsConsumerFeatures"=dword:00000001

; Disable chat icon in taskbar
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\Windows Chat]
"ChatIcon"=dword:00000003

; Disable news and interests on the taskbar
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\Windows Feeds]
"EnableFeeds"=dword:00000000

; No auto-restart with logged on users for scheduled automatic updates installations
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU]
"NoAutoRebootWithLoggedOnUsers"=dword:00000001

; Disable_AI_Recall.reg
[HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\WindowsAI]
"DisableAIDataAnalysis"=dword:00000001
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsAI]
"DisableAIDataAnalysis"=dword:00000001

; Disable_Bing_Cortana_In_Search.reg
; Disable bing in search
[HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\Explorer]
"DisableSearchBoxSuggestions"=dword:00000001

; Disable cortana in search
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\Windows Search]
"AllowCortana"=dword:00000000
"CortanaConsent"=dword:00000000

; Disable_Chat_Taskbar.reg
; Windows 11
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]
"TaskbarMn"=dword:00000000

; Windows 10
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer]
"HideSCAMeetNow"=dword:00000001

; Disable_Copilot.reg
; Disable Copilot button on taskbar
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]
"ShowCopilotButton"=dword:00000000

; Disable Copilot service for current user
[HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\WindowsCopilot]
"TurnOffWindowsCopilot"=dword:00000001

; Disable Copilot service for all users
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsCopilot]
"TurnOffWindowsCopilot"=dword:00000001

; Disable_DVR.reg
[HKEY_CURRENT_USER\System\GameConfigStore]
"GameDVR_Enabled"=dword:00000000
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\GameDVR]
"AllowGameDVR"=dword:00000000

; Disable_Lockscreen_Tips.reg
; Get fun facts, tips and more from Windows and Cortana on your lock screen
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\ContentDeliveryManager]
"SubscribedContent-338387Enabled"=dword:00000000
"RotatingLockScreenOverlayEnabled"=dword:00000000

; Disable_Telemetry.reg
; Let Apps use Advertising ID for Relevant Ads in Windows 10
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\AdvertisingInfo]
"Enabled"=dword:00000000

; Tailored experiences with diagnostic data for Current User
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Privacy]
"TailoredExperiencesWithDiagnosticDataEnabled"=dword:00000000

; Online Speech Recognition
[HKEY_CURRENT_USER\Software\Microsoft\Speech_OneCore\Settings\OnlineSpeechPrivacy]
"HasAccepted"=dword:00000000

; Improve Inking & Typing Recognition
[HKEY_CURRENT_USER\Software\Microsoft\Input\TIPC]
"Enabled"=dword:00000000

; Inking & Typing Personalization
[HKEY_CURRENT_USER\Software\Microsoft\InputPersonalization]
"RestrictImplicitInkCollection"=dword:00000001
"RestrictImplicitTextCollection"=dword:00000001
[HKEY_CURRENT_USER\Software\Microsoft\InputPersonalization\TrainedDataStore]
"HarvestContacts"=dword:00000000
[HKEY_CURRENT_USER\Software\Microsoft\Personalization\Settings]
"AcceptedPrivacyPolicy"=dword:00000000

; Send only Required Diagnostic and Usage Data
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\DataCollection]
"AllowTelemetry"=dword:00000000

; Disable Let Windows improve Start and search results by tracking app launches
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]
"Start_TrackProgs"=dword:00000000

; Disable Activity History
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\System]
"PublishUserActivities"=dword:00000000

; Set Feedback Frequency to Never
[HKEY_CURRENT_USER\SOFTWARE\Microsoft\Siuf\Rules]
"NumberOfSIUFInPeriod"=dword:00000000
"PeriodInNanoSeconds"=-

; Disable_Widgets_Taskbar.reg
; Windows 11
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]
"TaskbarDa"=dword:00000000

; Windows 10
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Feeds]
"ShellFeedsTaskbarViewMode"=dword:00000002

; Disable widgets service
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\PolicyManager\default\NewsAndInterests\AllowNewsAndInterests]
"value"=dword:00000000
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Dsh]
"AllowNewsAndInterests"=dword:00000000

; Disable_Windows_Suggestions.reg
; Show me the Windows welcome experience after updates and occasionally when I sign in to highlight what's new and suggested
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\ContentDeliveryManager]
"SubscribedContent-310093Enabled"=dword:00000000

; Occasionally show suggestions in Start
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\ContentDeliveryManager]
"SubscribedContent-338388Enabled"=dword:00000000
"SystemPaneSuggestionsEnabled"=dword:00000000

; Show recommendations for tips, shortcuts, new apps, and more in start
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]
"Start_IrisRecommendations"=dword:00000000

; Get tips, tricks, and suggestions as you use Windows
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\ContentDeliveryManager]
"SubscribedContent-338389Enabled"=dword:00000000
"SoftLandingEnabled"=dword:00000000

; Show me suggested content in the Settings app
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\ContentDeliveryManager]
"SubscribedContent-338393Enabled"=dword:00000000
"SubscribedContent-353694Enabled"=dword:00000000
"SubscribedContent-353696Enabled"=dword:00000000

; Sync provider ads
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]
"ShowSyncProviderNotifications"=dword:00000000

; Automatic Installation of Suggested Apps
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\ContentDeliveryManager]
"SilentInstalledAppsEnabled"=dword:00000000

; Disable "Suggested" app notifications (Ads for MS services)
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Notifications\Settings\Windows.SystemToast.Suggested]
"Enabled"=dword:00000000

; Disable Show me suggestions for using my mobile device with Windows (Phone Link suggestions)
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Mobility]
"OptedIn"=dword:00000000

; Disable Show account-related notifications
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]
"Start_AccountNotifications"=dword:00000000

; Hide_3D_Objects_Folder.reg
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{0DB7E03F-FC29-4DC6-9020-FF41B59E513A}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{0DB7E03F-FC29-4DC6-9020-FF41B59E513A}]

; Hide_Gallery_from_Explorer.reg
[HKEY_CURRENT_USER\Software\Classes\CLSID\{e88865ea-0e1c-4e20-9aa6-edcd0212c87c}]
"System.IsPinnedToNameSpaceTree"=dword:00000000

; Hide_Onedrive_Folder.reg
[-HKEY_CLASSES_ROOT\CLSID\{018D5C66-4533-4307-9B53-224DE2ED1FE6}]
"System.IsPinnedToNameSpaceTree"=dword:0
[-HKEY_CLASSES_ROOT\Wow6432Node\CLSID\{018D5C66-4533-4307-9B53-224DE2ED1FE6}]
"System.IsPinnedToNameSpaceTree"=dword:0

; Hide_Search_Taskbar.reg
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Search]
"SearchboxTaskbarMode"=dword:00000000

; Show_Extensions_For_Known_File_Types.reg
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]
"HideFileExt"=dword:00000000

; Show_Hidden_Folders.reg
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]
"Hidden"=dword:00000001

; Other tweaks

; Set Explorer default to This PC
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]
"LaunchTo"=dword:00000001

; Remove Learn about this picture desktop icon
[-HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Desktop\NameSpace\{2cc5ca98-6485-489a-920e-b3e88a6ccce3}]
[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel]
"{2cc5ca98-6485-489a-920e-b3e88a6ccce3}"=dword:00000001

; Disable Cortana
[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\Windows Search]
"AllowCortana"=dword:00000000
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{0DB7E03F-FC29-4DC6-9020-FF41B59E513A}]

; Remove Shortcut Text
[HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer]
"link"=hex:00,00,00,00

; Remove All User Folders From This PC 64-bit
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{B4BFCC3A-DB2C-424C-B029-7FE99A87C641}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{B4BFCC3A-DB2C-424C-B029-7FE99A87C641}]

; Remove Documents From This PC
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{A8CDFF1C-4878-43be-B5FD-F8091C1C60D0}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{d3162b92-9365-467a-956b-92703aca08af}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{A8CDFF1C-4878-43be-B5FD-F8091C1C60D0}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{d3162b92-9365-467a-956b-92703aca08af}]

; Remove Downloads From This PC
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{374DE290-123F-4565-9164-39C4925E467B}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{088e3905-0323-4b02-9826-5d99428e115f}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{374DE290-123F-4565-9164-39C4925E467B}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{088e3905-0323-4b02-9826-5d99428e115f}]

; Remove Music From This PC
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{1CF1260C-4DD0-4ebb-811F-33C572699FDE}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{3dfdf296-dbec-4fb4-81d1-6a3438bcf4de}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{1CF1260C-4DD0-4ebb-811F-33C572699FDE}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{3dfdf296-dbec-4fb4-81d1-6a3438bcf4de}]

; Remove Pictures From This PC
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{3ADD1653-EB32-4cb0-BBD7-DFA0ABB5ACCA}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{24ad3ad4-a569-4530-98e1-ab02f9417aa8}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{3ADD1653-EB32-4cb0-BBD7-DFA0ABB5ACCA}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{24ad3ad4-a569-4530-98e1-ab02f9417aa8}]

; Remove Videos From This PC
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{A0953C92-50DC-43bf-BE83-3742FED03C9C}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{f86fa3ab-70d2-4fc7-9c99-fcbf05467f3a}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{A0953C92-50DC-43bf-BE83-3742FED03C9C}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{f86fa3ab-70d2-4fc7-9c99-fcbf05467f3a}]
```

</details>

> [!info]
> If you just want to apply those tweaks, follow the first link below.

# Links
- Download full reg with tweaks [here](/posts/materials/posts/windows-tweaks/full.reg){download}.
- [Win10Privacy](https://www.w10privacy.de/deutsch-start/download/) + [config file](/posts/materials/posts/windows-tweaks/w10priv.ini){download}
- [Winaero Tweaker](https://winaerotweaker.com)
- [Winscript](https://github.com/flick9000/winscript "Not tested")
- [File generations for unattended installations](https://schneegans.de/windows/unattend-generator/)

# Remove Windows AI
Copy command below and run from Powershell console as administrator. [Source](https://github.com/zoicware/RemoveWindowsAI)
``` powershell
& ([scriptblock]::Create((irm "https://raw.githubusercontent.com/zoicware/RemoveWindowsAI/main/RemoveWindowsAi.ps1")))
```

# Microsoft account in Windows

``` windows
vivetool /disable /id:47988717  
Restart your PC. If the command above doesn't work:  
vivetool /disable /id:48433719 vivetool /disable /id:49453572
```
## Windows 11 skip online account
### Method 1
Press Shift + F10 to open up a Command Prompt Window and type:
``` windows
oobe\bypassnro
```
Now, completely disconnect your PC from the Internet.
### Method 2
Press Shift + F10 to open up a Command Prompt Window and type:
``` windows
start ms-cxh:localonly
```
A local account creation dialog will appear.

## Bypass Windows 11 requirements
1. Boot from a Windows 11 USB or ISO.
1. At the language selection screen, press Shift+F10 to open Command Prompt.
1. Type regedit and press Enter.
1. Navigate to HKEY_LOCAL_MACHINE\SYSTEM\Setup.
1. Right-click the Setup key, select New > Key, and name it LabConfig.
1. Inside LabConfig, create these DWORD (32-bit) values:
1. BypassTPMCheck = 1
1. BypassSecureBootCheck = 1
1. BypassRAMCheck = 1 if your system has less than 4 GB
1. Close Registry Editor and Command Prompt.
1. Continue the installation normally.

