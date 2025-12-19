---
title: "Firefox: How can I fix Dark Theme / Firefox 56 when using Endpoint Policy Manager?"
description: "Firefox: How can I fix Dark Theme / Firefox 56 when using Endpoint Policy Manager?"
sidebar_position: 250
---

# Firefox: How can I fix Dark Theme / Firefox 56 when using Endpoint Policy Manager?

## Cause:

It seems the Firefox set the following settings in

```
about:config
```

![222_1_mff-about-config](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/222_1_mff-about-config.webp)

This can occur if you're using Netwrix Endpoint Policy Manager (formerly PolicyPak) Application
Settings Manager (and the Firefox 23 and later Pak) to REMOVE all AddOns.

Since THEMES are also AddOns.. Firefox then defaults downward to the DARK theme.

## Resolution:

Choice 1: Use Endpoint Policy Manager to force an Add-on which is a Theme that you want.

Choice 2: In our lab, problem goes away when we set the settings as shown in this screenshot:

![222_2_2017-10-11_1526](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/222_2_2017-10-11_1526.webp)

```
lightweightThemes.SelectedThemeID = empty
lightweightThemes.usedThemes = true
```

To fix this on all your client machines please use Firefox About:Config PAKs and set the above value
as instructed. Here is just a reference screenshot:

![222_3_2017-10-11_1531](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/222_3_2017-10-11_1531.webp)


