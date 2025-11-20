---
title: "Why does Windows 8 and 10 ask me \"How do you want to open this?\" and how do I make it go away?"
description: "Why does Windows 8 and 10 ask me \"How do you want to open this?\" and how do I make it go away?"
sidebar_position: 10
---

# Why does Windows 8 and 10 ask me "How do you want to open this?" and how do I make it go away?

Immediately after installing the Netwrix Endpoint Policy Manager (formerly PolicyPak) CSE on an
endpoint, you might see something like this.

![531_1_image001](/images/endpointpolicymanager/troubleshooting/browserrouter/install/531_1_image001.webp)

This scenario is common when:

1. You hand-install the CSE and immediately start to try Endpoint Policy Manager Browser Router or
   launch your browsers.
2. You deploy the CSE using a software deployment tool and users are currently still logged on to
   their machines.

So, the Endpoint Policy Manager CSE itself doesn't require a reboot to start working.

However, for Endpoint Policy Manager Browser Router to solidify itself as the default browser (to
then perform the routing) you must logoff and log on to pick up this new setting.


