---
title: "How do I revert to \"Legacy File Associations Methods & Features\" if directed (especially for LTSB/LTSC)?"
description: "How do I revert to \"Legacy File Associations Methods & Features\" if directed (especially for LTSB/LTSC)?"
sidebar_position: 50
---

# How do I revert to "Legacy File Associations Methods & Features" if directed (especially for LTSB/LTSC)?

If you are having a problem with Netwrix Endpoint Policy Manager (formerly PolicyPak) File
Associations Manager (PPFAM) not working as expected, you may be asked by tech support to "Revert to
Legacy File Assoc Method & Features".

This might be required if you are attempting to use Endpoint Policy Manager File Associations
Manager on an older version of Windows 10, say, LTSB or LTSC. You can still get Endpoint Policy
Manager File Associations Manager to work, but you must utilize the Legacy behavior.

First, be sure you are eligible to use this function by copying the latest Endpoint Policy Manager
ADMX files to your Central Store or using Endpoint Policy Manager Cloud.

Directions for Central Store:
[Troubleshooting with ADMX files](/docs/endpointpolicymanager/deliverymethods/cloud/videos/gettingstarted/admxfiles.md)

Directions for Endpoint Policy Manager Cloud (if they are not already pre-placed there):
[PolicyPak Cloud: Upload and use your own ADMX files to PolicyPak Cloud](/docs/endpointpolicymanager/deliverymethods/cloud/videos/gettingstarted/admxfiles.md)

Then, the setting you should use if directed by support is entitled:

`Computer Configuration | Policies | Admin Templates | PolicyPak ADMX Settings | Client-side Extensions | File Associations Manager | Revert to Legacy File Assoc Method & Features`
and set to Enabled to return back to the legacy behavior.

![837_1_image-20201027212337-3](/images/endpointpolicymanager/troubleshooting/fileassociations/837_1_image-20201027212337-3.webp)

## What does "Revert to Legacy File Assoc Method & Features" mean?

By establishing to use Legacy File Assoc Method & Features the following occurs:

- Endpoint Policy Manager File Associations Manager policies will ONLY apply on the COMPUTER side.

  :::note
  The MMC and/or Cloud editors cannot know you've enabled this setting; and as such
  those editors will still work, but the CSE will then ignore the USER side directives.
  :::


- Endpoint Policy Manager File Associations Manager policies can only take effect on DOMAIN JOINED
  machines.
- Endpoint Policy Manager File Associations Manager policies can only take effect when you log out
  and back in.


