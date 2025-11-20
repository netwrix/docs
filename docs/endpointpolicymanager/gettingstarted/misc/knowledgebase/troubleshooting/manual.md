---
title: "How do I manually collect logs if PPLOGS as User or Admin does not launch?"
description: "How do I manually collect logs if PPLOGS as User or Admin does not launch?"
sidebar_position: 70
---

# How do I manually collect logs if PPLOGS as User or Admin does not launch?

:::note
PPLOGs does not magically stop working, there is always some underlying cause.  Typically
some sort of barrier which prevents it... pplogs or other tools used in the pplogs process (like
reg.exe) from working. If there is something in your environment that is blocking the automated
(pplogs) way of gathering log information you can still fetch this information by hand.
:::


## First, manually collect the information for the ADMIN Logs:

**Step 1 –** Login as an Administrator to the computer where the issue is occurring then gather the
following:

- Copy entire `%programdata%\PolicyPak `folder, this folder includes logs, dumps, policy store, and
  xmldata files.

  :::note
  Some of these files cannot be accessed without elevation. The easiest UI way to get
  them might be to copy the` %programdata%\PolicyPak` folder to Desktop and then approve the
  elevation when prompted.
  :::


**Step 2 –** Run Regedit as Administrator, then export the following registry keys if they are
present, ignore any keys that do not exist.

- `HKLM\Software\PolicyPak\Client-Side Extensions\{1659C456-08FC-4359-B125-BB70EE34DD55}`
- `HKLM\Software\Classes\PPBRURL`
- `HKLM\Software\Classes\PPBRNURL`
- `HKLM\Software\Clients\StartMenuInternet`
- `HKLM\Software\Policies\Google\Chrome`
- `HKLM\Software\Policies\Microsoft\Windows\Explorer`
- `HKLM\Software\Policies\Microsoft\Windows\System`
- `HKLM\Software\Policies\PolicyPak`
- `HKLM\Software\PolicyPak`
- `HKLM\Software\Microsoft\Windows\CurrentVersion\App Paths`
- `HKLM\Software\Microsoft\Windows\CurrentVersion\Policies\Ext\CLSID`
- `HKLM\Software\Microsoft\Internet Explorer\Low Rights\ElevationPolicy \{123AA0DB-7D32-4E82-9CBB-14E096E802AF}`
- `HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon\GPExtensions`
- `HKLM\Software\RegisteredApplications`

**Step 3 –** Launch Event Viewer as Administrator:

1. Expand "Applications and Services Logs", right-click on "Netwrix Endpoint Policy Manager
   (formerly PolicyPak)" event log and choose "Save All Events As…", save the file as

   `"endpointpolicymanager.evtx"`

2. Expand "Applications and Services Logs" > "Microsoft" > "Windows", right-click on "GroupPolicy"
   event log and choose "Save All Events As…", save the file as

   `"GroupPolicy.evtx"`

3. Expand "Windows Logs" then right-click the "Application" log and choose "Save All Events As…"
   save the file as

   `"Application.evtx".`

**Step 4 –** Lastly, zip up everything you have collected on the ADMIN side
as`pplogs_as_admin_SRX#.zip`(substitute your Service request number for "SRX#") then upload to the
SUPPORT INBOX on SHAREFILE:
[https://endpointpolicymanager.sharefile.com/share/getinfo/rc857a57f16b4d4b9](https://endpointpolicymanager.sharefile.com/share/getinfo/rc857a57f16b4d4b9)

## Next, manually collect the information for the USER Logs:

**Step 1 –** Login as a regular (non-admin) user to the computer where the issue is occurring then
gather the following:

- Copy entire `%localappdata%\PolicyPak`, this folder is important for troubleshooting all and any
  CSE issues.
- Locate and gather any Endpoint Policy Manager log files in the `%TEMP%, %USERPROFILE%`,
  `%APPDATA%`, and `%LOCALAPPDATA%` folders.

**Step 2 –** Run Regedit then export the following registry keys if they are present, ignore any
keys that do not exist.

- `HKCU\Software\Mozilla\Firefox\Extensions`
- `HKCU\Software\Microsoft\Internet Explorer\Low Rights\ElevationPolicy\{123AA0DB-7D32-4E82-9CBB-14E096E802AF}`
- `HKCU\Software\Microsoft\Internet Explorer\Main\EnterpriseMode`
- `HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Browser Helper Objects\`
- `HKCU\Software\Microsoft\Windows\Shell\Associations\UrlAssociations\http\UserChoice`
- `HKCU\Software\Microsoft\Windows\Shell\Associations\UrlAssociations\https\UserChoice`
- `HKCU\Software\Policies\Microsoft\Internet Explorer\Main\EnterpriseMode`
- `HKCU\Software\Policies\Microsoft\Windows\Explorer`
- `HKCU\Software\PolicyPak`

**Step 3 –** Lastly, zip up everything you have collected on the USER side as
`pplogs_as_user_SRX#.zip` (substitute your Service request number for "SRX#") then upload to the
SUPPORT INBOX on SHAREFILE:
[https://endpointpolicymanager.sharefile.com/share/getinfo/rc857a57f16b4d4b9](https://endpointpolicymanager.sharefile.com/share/getinfo/rc857a57f16b4d4b9)

