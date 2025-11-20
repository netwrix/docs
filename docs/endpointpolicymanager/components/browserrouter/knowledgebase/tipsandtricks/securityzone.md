---
title: "Is it possible to prevent all Internet websites, but allow just a few? (Blacklist websites, whitelist some?)"
description: "Is it possible to prevent all Internet websites, but allow just a few? (Blacklist websites, whitelist some?)"
sidebar_position: 30
---

# Is it possible to prevent all Internet websites, but allow just a few? (Blacklist websites, whitelist some?)

This is possible, using the Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router.

**Step 1 –** Set up a rule (route as seen in this example. Specify that the Internet Security Zone
is set to BLOCK.

![170_1_image001](/images/endpointpolicymanager/browserrouter/editpolicytemplate/170_1_image001.webp)

**Step 2 –** Then, make other rules which route to the websites you want. Finally, ensure your
blocking policy is last in the list, so all whitelisted items will process before the blockitem.

![170_2_image002](/images/endpointpolicymanager/browserrouter/editpolicytemplate/170_2_image002.webp)


