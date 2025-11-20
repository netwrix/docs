---
title: "Managing Windows 7 File Associations with Group Policy Preferences"
description: "Managing Windows 7 File Associations with Group Policy Preferences"
sidebar_position: 10
---

# Managing Windows 7 File Associations with Group Policy Preferences

Several years ago, managing file associations with Group Policy used to be quite easy. Group Policy
Preferences had a specific item type that dynamically set which extensions would open in which
applications. This is still available within the Microsoft Group Policy Editor by going to **User
Configuration** > **Preferences** > **Control Panel Settings** > **Folder Options** > **New** >
**Open With**.

![about_policypak_file_associations](/images/endpointpolicymanager/fileassociations/insouts/about_endpointpolicymanager_file_associations.webp)

This older method of setting file associations is still available in the Microsoft Group Policy
Editor on the User side with Windows 7 and 8.

Next, select the file extension and the associated program. You can also choose to **Set as
Default**.

![about_policypak_file_associations_1](/images/endpointpolicymanager/fileassociations/insouts/about_endpointpolicymanager_file_associations_1.webp)

This method worked well on Windows XP to Windows 8, but stopped working with Windows 8.1.

Endpoint Policy Manager File Associations Manager fills in this gap. If you are already accustomed
to using Group Policy (with Group Policy Preferences) to manage file associations, then Endpoint
Policy Manager File Associations Manager will be a familiar way to perform that work.


