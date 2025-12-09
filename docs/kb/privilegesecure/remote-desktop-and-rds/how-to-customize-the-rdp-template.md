---
description: >-
  Modify the rdp_template.txt on a Netwrix Privilege Secure server to change
  default RDP settings such as fullscreen resolution, smart sizing, font
  smoothing, and redirection. Back up the file before editing and restore after
  product upgrades.
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
  - privilege-secure-access-management
sidebar_label: How to Customize the RDP Template
tags: []
title: "How to Customize the RDP Template"
knowledge_article_id: kA04u0000000HiDCAU
---

# How to Customize the RDP Template

## Summary
Additional configuration settings for Netwrix Privilege Secure RDP sessions can be configured by modifying the `rdp_template.txt` file on a Netwrix Privilege Secure server. Modifications to this file will affect the default RDP settings for all Netwrix Privilege Secure users, and the file includes such settings as:

- Fullscreen Resolution (`screen mode id:i:value`)
- Smart Sizing (`smart sizing:i:value`)
- Font Smoothing (`allow font smoothing:i:value`)
- Smart Card Redirection (`redirectsmartcards:i:value`)
- Disable Themes (`disable themes:i:value`)
- Disable Wallpaper (`disable wallpaper:i:1`)
- Audio Mode (`audiomode:i:value`)

A full list of supported RDP settings can be found in the following Microsoft documentation: Supported Remote Desktop RDP file settings | Microsoft Docs (https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/rdp-files).

## Instructions
The `rdp_template.txt` file is located on a Netwrix Privilege Secure server via the following path:

`\Program Files\Stealthbits\PAM\Web\rdp_template.txt`

*IMPORTANT:* **Always back this file up before modifying it.** Also, upgrading Netwrix Privilege Secure will overwrite this file, so perform a backup prior to upgrading and restore it afterward to preserve any custom modifications.

1. Open `rdp_template.txt`.
2. Modify the value for the desired setting, save the file, and then re-download an RDP file from Netwrix Privilege Secure to use the new settings.
3. For example, to enable Fullscreen Resolution change `screen mode id:i:1` to `screen mode id:i:2`.
