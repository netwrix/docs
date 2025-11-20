---
title: "IE Message 2"
description: "IE Message 2"
sidebar_position: 20
---

# IE Message 2

Another IE Java message you might encounter is as follows:

This program will open outside of Protected mode. Internet Explorer's Protected mode helps protect
your computer. If you do not trust this website, do not open this program.

_Name:_ `icacls.exe`

Publisher: Microsoft Windows

![overcoming_java_prompts_8](/images/endpointpolicymanager/javaenterpriserules/prompts/internetexplorer/overcoming_java_prompts_8.webp)

This specific prompt is received when the message is set manually or via Group Policy/PolicyPak.

![overcoming_java_prompts_9](/images/endpointpolicymanager/javaenterpriserules/prompts/internetexplorer/overcoming_java_prompts_9.webp)

This prompt can be made to automatically never occur again using Group Policy Preferences:

```
HKEY_CURRENT_USER\SOFTWARE\Microsoft\Internet Explorer\Low Rights\ElevationPolicy\{0F31AF05-4595-4736-BEF3-80ABE79E9211}. 
```

To do this, set the following registry values to the specific types and descriptions shown in the
table below..

| Registry Values | Type      | Description         |
| --------------- | --------- | ------------------- |
| AppName         | REG_SZ    | Icacls.exe          |
| AppPath         | REG_SZ    | C:\Windows\SysWOW64 |
| Policy          | REG_DWord | 3                   |

By creating these registry values, you can make the Java messages automatically never pop-up again.

![overcoming_java_prompts_10](/images/endpointpolicymanager/javaenterpriserules/prompts/internetexplorer/overcoming_java_prompts_10.webp)

The result is that the prompt for iCacls is no longer received, but the Java applet will not run.


