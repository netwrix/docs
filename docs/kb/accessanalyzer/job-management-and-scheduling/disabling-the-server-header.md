---
description: >-
  Shows how to disable the Server HTTP header in Netwrix Access Analyzer by
  setting the Windows registry DisableServerHeader value to prevent banner
  grabbing.
keywords:
  - banner grabbing
  - DisableServerHeader
  - registry
  - server header
  - Netwrix Access Analyzer
  - HTTP header
  - security
  - reboot
products:
  - access-analyzer
  - access_info_center
sidebar_label: Disabling the Server Header
tags:
  - job-management-and-scheduling
title: "Disabling the Server Header"
knowledge_article_id: kA0Qk0000001yerKAA
---

# Disabling the Server Header

## Overview

This article explains how to disable the server header in Netwrix Access Analyzer to prevent banner grabbing, which can expose server information. Banner grabbing can occur if the Windows registry `DisableServerHeader` setting is not configured correctly on the host.

> **NOTE:** Banner grabbing is the process of capturing banner information, such as application type and version, that is transmitted by a remote port when a connection is initiated. For more information, see Banner Grabbing ⸱ NIST 🔗  
> https://csrc.nist.gov/glossary/term/banner_grabbing
>
> ![Screenshot showing server information revealed through banner grabbing](./../0-images/ka0Qk000000E74r_0EMQk00000Brg4P.png)

## Instructions

Follow these steps to disable the server header in Netwrix Access Analyzer:

1. Navigate to the **Windows Registry Editor**.
2. Add or update the following registry key:
   `HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\HTTP\Parameters\DisableServerHeader`
3. Set the value to:
   `DWORD: 000002`
   
   ![Registry editor showing disabled server header](./../0-images/ka0Qk000000E74r_0EMQk00000CHuq5.png)
4. Reboot the server to apply the changes.
5. After the reboot, the result should resemble the Edge example below, in which the Server node is no longer listed.

![Screenshot showing browser developer tools with no server header information displayed](./../0-images/ka0Qk000000E74r_0EMQk00000BrSj0.png)

> **IMPORTANT:** Modifications to this registry setting may occur due to the following reasons:
> - Netwrix Access Analyzer and Netwrix Access Information Center do not modify this setting during patching.
> - Microsoft may release a patch that changes its behavior, or internal configurations may enforce changes to the operating system, altering this setting.
> - Operating system configurations, such as group policy settings, may impact this setting or product functionality. Configuring the operating system is the customer's responsibility.

## Related Article

- Banner Grabbing ⸱ NIST 🔗  
  https://csrc.nist.gov/glossary/term/banner_grabbing
