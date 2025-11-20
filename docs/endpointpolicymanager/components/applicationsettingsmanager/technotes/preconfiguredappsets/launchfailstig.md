---
title: "Internet Explorer: Why does IE fail to launch after I apply ACL lockdown or all of the IE AppSet STIG settings?"
description: "Internet Explorer: Why does IE fail to launch after I apply ACL lockdown or all of the IE AppSet STIG settings?"
sidebar_position: 370
---

# Internet Explorer: Why does IE fail to launch after I apply ACL lockdown or all of the IE AppSet STIG settings?

There are some settings, which when you use ACL lockdown, will prevent IE from launching.

Removing ACL lockdown on either of these settings permits IE to launch:

![284_1_ghjgdffhykui88dr](/images/endpointpolicymanager/troubleshooting/applicationsettings/internetexplorer/284_1_ghjgdffhykui88dr.webp)

Under the hood, the keys that are edited are in

```
HKEY_Current_UserSoftwareMicrosoftInternet ExplorerMain
```


