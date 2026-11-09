---
description: "Edit rdp_template.txt on a Privilege Secure server to change default RDP settings such as resolution and redirection. Back up the file before upgrades."
keywords:
  - rdp_template.txt
  - RDP settings
  - Netwrix Privilege Secure
  - Stealthbits
  - fullscreen resolution
  - smart sizing
  - audiomode
  - redirectsmartcards
products:
  - privilegesecure
sidebar_label: Customizing the RDP Template
tags:
  - kb
  - remote-desktop-and-rds
title: "Customizing the RDP Template"
knowledge_article_id: kA04u0000000HiDCAU
---

# Customizing the RDP Template

## Overview

This article describes how to customize the `rdp_template.txt` file on a Netwrix Privilege Secure for Access Management server to configure additional settings for Privilege Secure RDP sessions. Modifications to this file affect the default RDP settings for all Privilege Secure users. The file includes such settings as:

- Fullscreen Resolution (`screen mode id:i:value`)
- Smart Sizing (`smart sizing:i:value`)
- Font Smoothing (`allow font smoothing:i:value`)
- Smart Card Redirection (`redirectsmartcards:i:value`)
- Disable Themes (`disable themes:i:value`)
- Disable Wallpaper (`disable wallpaper:i:1`)
- Audio Mode (`audiomode:i:value`)

For a full list of supported RDP settings, see [Supported Remote Desktop RDP file settings | Microsoft Docs](https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/rdp-files).

## Instructions

The `rdp_template.txt` file is located on a Privilege Secure server in the following path:

`\Program Files\Stealthbits\PAM\Web\rdp_template.txt`

> **IMPORTANT:** **Always back this file up before modifying it.** Also, upgrading Privilege Secure overwrites this file, so perform a backup before upgrading and restore it afterward to preserve any custom modifications.

1. Open `rdp_template.txt`.

2. Modify the value for the setting you want to change and save the file. For example, to enable Fullscreen Resolution, change `screen mode id:i:1` to `screen mode id:i:2`.

3. Re-download an RDP file from Privilege Secure to use the new settings.
