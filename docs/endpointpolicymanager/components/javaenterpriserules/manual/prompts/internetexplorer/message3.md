---
title: "IE Message 3"
description: "IE Message 3"
sidebar_position: 30
---

# IE Message 3

A third IE Java message you may encounter is this:

This program will open outside of Protected mode. Internet Explorer's Protected mode helps protect
your computer. If you do not trust this website, do not open this program.

Name: Java SE Runtime Environment 8 Update…

Publisher: Oracle America, Inc.

![overcoming_java_prompts_11](/images/endpointpolicymanager/javaenterpriserules/prompts/internetexplorer/overcoming_java_prompts_11.webp)

You can also set this message manually, or by usign Group Policy.

![overcoming_java_prompts_12](/images/endpointpolicymanager/javaenterpriserules/prompts/internetexplorer/overcoming_java_prompts_12.webp)

To make this prompt automatically never occur again, use Group Policy Preferences:

```
HKEY_CURRENT_USER\SOFTWARE\Microsoft\Internet Explorer\Low Rights\ElevationPolicy\{GUID}
```

where `{GUID}` is `{GUID}` for @the latest version of Java on your machine. Then set the registry
values as shown in the table below:

| Registry Values | Type      | Description                                  | Notes                                     |
| --------------- | --------- | -------------------------------------------- | ----------------------------------------- |
| AppName         | REG_SZ    | jp2launcher.exe                              |                                           |
| AppPath         | REG_SZ    | C:\Program Files (x86)\Java\jre1.8.0_111\bin | Or the path to the latest version of Java |
| Policy          | REG_DWord | 3                                            |                                           |

![overcoming_java_prompts_13](/images/endpointpolicymanager/javaenterpriserules/prompts/internetexplorer/overcoming_java_prompts_13.webp)

The result is that the Java applet is allowed. Since Endpoint Policy Manager Application Settings
Manager does not yet have a way to set this dynamically, we suggest Group Policy Preferences be used
to deliver these registry values.


