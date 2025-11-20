---
title: "PPBRAgentExeIE_01.DLL error message occurs about Internet Explorer enhanced security. What should I do?"
description: "PPBRAgentExeIE_01.DLL error message occurs about Internet Explorer enhanced security. What should I do?"
sidebar_position: 40
---

# PPBRAgentExeIE_01.DLL error message occurs about Internet Explorer enhanced security. What should I do?

When running IE and Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router, the
following error could occur:

![441_1_image004](/images/endpointpolicymanager/troubleshooting/error/browserrouter/441_1_image004.webp)

This message is caused by IE Enhanced Security mode. To get Endpoint Policy Manager Browser Router
to work properly, set IE specifically to have these two checkboxes unchecked.

![441_2_image0012](/images/endpointpolicymanager/troubleshooting/error/browserrouter/441_2_image0012.webp)

Then, restart IE (a reboot is not required).

Note also that if the top checkbox is checked, the error does not occur, but Endpoint Policy Manager

Browser Router still will not run.


