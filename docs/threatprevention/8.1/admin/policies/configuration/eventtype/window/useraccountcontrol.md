---
title: "User Account Control Window"
description: "User Account Control Window"
sidebar_position: 150
---

# User Account Control Window

Use the User Account Control (UAC) window to select specific UAC settings for the policy to monitor.

The User Account Control window is accessible if the policy includes or excludes the
userAccountControl attribute through the AD Attributes filter.

![AD Attributes filter - serAccountControl attribute selected](/images/threatprevention/8.1/admin/policies/eventtype/window/useraccountcontrolattribute.webp)

In the Include Attributes or Exclude Attributes boxes, click the Operation menu that displays **Any
Value** for the userAccountControl attribute to open the User Account Control Window window.

![User Account Control Window](/images/threatprevention/8.1/admin/policies/eventtype/window/useraccountcotrol.webp)

This window displays a list of UAC flags for additional scoping. Select specific userAccountControl
flags using the **Attribute Set** and/or **Attribute Clear** checkboxes. When someone adds or
removes the selected attribute in Active Directory, Threat Prevention creates an event.
