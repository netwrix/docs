---
title: "How do I change the default icon for user-created shortcuts for my default browser?"
description: "How do I change the default icon for user-created shortcuts for my default browser?"
sidebar_position: 90
---

# How do I change the default icon for user-created shortcuts for my default browser?

For a good general overview of the topic, please watch this video:
[Set the links to icons to actually show the default browser.](/docs/endpointpolicymanager/components/browserrouter/videolearningcenter/tipsandtricks/browsericon.md)

The most common concern is that the FireFox default icon appears like this:

![835_1_hfkb-1127-img-01_950x761](/images/endpointpolicymanager/browserrouter/835_1_hfkb-1127-img-01_950x761.webp)

When you typically want user shortcuts to look like this:

![835_2_hfkb-1127-img-02](/images/endpointpolicymanager/browserrouter/835_2_hfkb-1127-img-02.webp)

Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router's DEFAULT BROWSER function uses
the registered icon for the default browser as the icon.

![835_3_hfkb-1127-img-03_950x747](/images/endpointpolicymanager/browserrouter/835_3_hfkb-1127-img-03_950x747.webp)

This might be required, either per user or per machine, depending on which browsers you actually
have installed on the machine and how they were installed.

The REGISTRY values for the browsers are:

`Computer\HKEY_CLASSES_ROOT\MSEdgeHTM\DefaultIcon`

`Computer\HKEY_CLASSES_ROOT\MSEdgeBHTML\DefaultIcon`

`Computer\HKEY_CLASSES_ROOT\FirefoxURL-***\DefaultIcon` ← Note that each user could have a UNIQUE
one, making changing this much harder en-mass.

`Computer\HKEY_CLASSES_ROOT\ChromeHTML\DefaultIcon`

`Computer\HKEY_CLASSES_ROOT\IE.HTTP\DefaultIcon`

`Computer\HKEY_CLASSES_ROOT\IE.HTTPS\DefaultIcon`

So if you wanted to change Firefox's default icon you could change it from this…

![835_4_hfkb-1127-img-04_950x499](/images/endpointpolicymanager/browserrouter/835_4_hfkb-1127-img-04_950x499.webp)

To this…

![835_5_hfkb-1127-img-05_950x643](/images/endpointpolicymanager/browserrouter/835_5_hfkb-1127-img-05_950x643.webp)

A second example could be with Google Chrome and setting it as the Default Browser.

![835_6_hfkb-1127-img-06_950x684](/images/endpointpolicymanager/browserrouter/835_6_hfkb-1127-img-06_950x684.webp)

The default icons will be from ChromeHTML Index 0.

![835_7_hfkb-1127-img-07_950x496](/images/endpointpolicymanager/browserrouter/835_7_hfkb-1127-img-07_950x496.webp)

But if you change it to 4 and run GPupdate, you will see updated icons.

![835_8_hfkb-1127-img-08_950x467](/images/endpointpolicymanager/browserrouter/835_8_hfkb-1127-img-08_950x467.webp)

The quickest way to mass update this would be a Group Policy Preferences Registry item. An example
can be seen here. You want to do this on the computer side, which will change the value for both
user and computer browsers.

![835_9_hfkb-1127-img-09_950x455](/images/endpointpolicymanager/browserrouter/835_9_hfkb-1127-img-09_950x455.webp)


