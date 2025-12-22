---
title: "How can I make Cortana and other web searches to use system default browser instead of Microsoft Edge?"
description: "How can I make Cortana and other web searches to use system default browser instead of Microsoft Edge?"
sidebar_position: 10
---

# How can I make Cortana and other web searches to use system default browser instead of Microsoft Edge?

Microsoft created a protocol that masks the URLs so that they can be opened in Microsoft Edge in
Windows 10. So instead of https://www.policypak.com, Windows 10 would prepend microsoft-edge: to the
URL i.e. microsoft-edge:https://www.policypak.com.

So no browser but Microsoft Edge supports this protocol, and these URLs are opened in Edge
automatically and not the default system browser you set through Netwrix Endpoint Policy Manager
(formerly PolicyPak) software.

How to solve it?

You will need to install EdgeDeflector before you can send search queries from Cortana to the
default browser, set through Endpoint Policy Manager software. More
info: [What is meant by "Default Browser" within Endpoint Policy Manager Browser router?](/docs/endpointpolicymanager/components/browserrouter/knowledgebase/tipsandtricks/defined.md)

Then set the Policy for PPFAM as shown in the following screenshot:

![730_1_ddfgdsfgfg](/images/endpointpolicymanager/troubleshooting/fileassociations/730_1_ddfgdsfgfg.webp)

:::note
The path for EdgeDeflector. That has to be same on client computers.
Apply the policy on the client computers and reboot.

:::


