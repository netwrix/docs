---
title: "What happens if I use MDT, or in-box Group Policy or MDM to set OEMDefaultAssociations.XML BEFORE Endpoint Policy Manager File Associations Manager ?"
description: "What happens if I use MDT, or in-box Group Policy or MDM to set OEMDefaultAssociations.XML BEFORE Endpoint Policy Manager File Associations Manager ?"
sidebar_position: 30
---

# What happens if I use MDT, or in-box Group Policy or MDM to set OEMDefaultAssociations.XML BEFORE Endpoint Policy Manager File Associations Manager ?

If you attempt to:

- Pre-set the file associations in the image or
- Set using Group Policy via the "Set a default associations configuration file" or
- Attempt to set it using MDM…

Then that method will win over Endpoint Policy Manager File Associations Manager, and you will not
get the Endpoint Policy Manager File Associations Manager benefits.

Therefore, use only Endpoint Policy Manager File Associations Manager and not the above methods to
achieve File Associations goals. Remove any in-box Group Policy settings, etc, which are attempting
to set File Associations and use only Endpoint Policy Manager to do it.

![660_1_faq4-img1](/images/endpointpolicymanager/fileassociations/660_1_faq4-img1.webp)


