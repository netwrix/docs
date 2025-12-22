---
title: "Discovering Configuration Data Locations"
description: "Discovering Configuration Data Locations"
sidebar_position: 50
---

# Discovering Configuration Data Locations

Usually, it's quite easy to discover where an application has stored its configuration data. Most
times, applications store their data in` HKEY_Current_User\Software`. In the figure shown, you can see the
data for many popular applications stored in the registry.

![discovering_configuration_624x429](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_624x429.webp)

The figure shown. Many applications store their data in the registry.

Note that although most applications store their information in `HKEY_Current_User\Software`, if
you're trying to do something in Control Panel, those values would be stored in
`HKEY_Current_User\Control Panel`. For this reason, you might need look around to find the right
data store location if the application uses the registry.

If an application's data isn't found in the registry, we suggest you look for other file types
manually. You can look in the following three common key locations for user configuration data:

- `C:\program files\<application vendor>\<application>` for 32-bit and 64-bit machines
- `C:\program files(x86)\<application vendor>\<application>` for 64-bit machines
- `%localappdata%`



