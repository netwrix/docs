---
title: "How do I revert to \"Legacy File Associations Methods & Features\" if directed (especially for LTSB/LTSC)?"
description: "How do I revert to \"Legacy File Associations Methods & Features\" if directed (especially for LTSB/LTSC)?"
sidebar_position: 50
---

# How do I revert to "Legacy File Associations Methods & Features" if directed (especially for LTSB/LTSC)?

If you are having a problem with Netwrix PolicyPak File
Associations Manager (PPFAM) not working as expected, you may be asked by tech support to "Revert to
Legacy File Assoc Method & Features".

This might be required if you are attempting to use PolicyPak File Associations
Manager on an older version of Windows 10, say, LTSB or LTSC. You can still get PolicyPak File Associations Manager to work, but you must utilize the Legacy behavior.

First, be sure you are eligible to use this function by copying the latest PolicyPak
ADMX files to your Central Store or using PolicyPak Cloud.

Directions for Central Store:
[Troubleshooting with ADMX files](/docs/policypak/deliverymethods/cloud/videos/gettingstarted/admxfiles.md)

Directions for PolicyPak Cloud (if they are not already pre-placed there):
[PolicyPak Cloud: Upload and use your own ADMX files to PolicyPak Cloud](/docs/policypak/deliverymethods/cloud/videos/gettingstarted/admxfiles.md)

Then, the setting you should use if directed by support is entitled:

`Computer Configuration | Policies | Admin Templates | PolicyPak ADMX Settings | Client-side Extensions | File Associations Manager | Revert to Legacy File Assoc Method & Features`
and set to Enabled to return back to the legacy behavior.

![837_1_image-20201027212337-3](/images/policypak/troubleshooting/fileassociations/837_1_image-20201027212337-3.webp)

## What does "Revert to Legacy File Assoc Method & Features" mean?

By establishing to use Legacy File Assoc Method & Features the following occurs:

- PolicyPak File Associations Manager policies will ONLY apply on the COMPUTER side.

  :::note
  The MMC and/or Cloud editors cannot know you've enabled this setting; and as such
  those editors will still work, but the CSE will then ignore the USER side directives.
  :::


- PolicyPak File Associations Manager policies can only take effect on DOMAIN JOINED
  machines.
- PolicyPak File Associations Manager policies can only take effect when you log out
  and back in.


