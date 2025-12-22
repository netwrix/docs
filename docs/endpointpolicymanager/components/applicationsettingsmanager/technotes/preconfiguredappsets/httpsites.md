---
title: "Internet Explorer: Why don't HTTP sites get added to the Trusted Site list?"
description: "Internet Explorer: Why don't HTTP sites get added to the Trusted Site list?"
sidebar_position: 360
---

# Internet Explorer: Why don't HTTP sites get added to the Trusted Site list?

IE itself wont allow HTTP sites unless you loosen the security in IE.

Use Netwrix Endpoint Policy Manager (formerly PolicyPak) to do it for you.

On the Security tab, ensure "Trusted: Require server verification https:" and "Intranet: Require
server verification https" are both UNDERLINED and UN-Checked.

This will deliver "un-check" to these settings, allowing for HTTP zones.

![240_1_image002](/images/endpointpolicymanager/troubleshooting/applicationsettings/internetexplorer/240_1_image002.webp)


