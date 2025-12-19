---
title: "I launched IE and saw \"PPBRAGENTIExIE_01.dll\" or \"PPBRExplorerExtension.dll\" prompted for the user. What should I do?"
description: "I launched IE and saw \"PPBRAGENTIExIE_01.dll\" or \"PPBRExplorerExtension.dll\" prompted for the user. What should I do?"
sidebar_position: 30
---

# I launched IE and saw "PPBRAGENTIExIE_01.dll" or "PPBRExplorerExtension.dll" prompted for the user. What should I do?

This scenario is common when:

1. You hand-install the CSE and immediately start to tryNetwrix Endpoint Policy Manager (formerly
   PolicyPak) Browser Router or launch your browsers.
2. You deploy the CSE using a software deployment tool and users are currently still logged on to
   their machines.

Endpoint Policy Manager is trying to install a required component into Internet Explorer.

It is named (old version) `PPBRAGENTIExIE_01.DLL` or `PPBRExplorerExtension.dll` (newer versions.)

But if Interenet Explorer is running WHILE the installation of theEndpoint Policy Manager CSE
occurs, you might get this message the next time you launch Internet Explorer.

![524_1_unnamed-1](/images/endpointpolicymanager/troubleshooting/browserrouter/install/524_1_unnamed-1.webp)

Even if users select DON'T ENABLE, theEndpoint Policy Manager CSE will fix it at the next login.

The workaround and recommendation is to install theEndpoint Policy Manager CSE when no users are
logged on at all, and hence, IE wouldn't be open to cause this situation.


