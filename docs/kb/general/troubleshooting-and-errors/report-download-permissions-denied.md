---
description: >-
  Explains how to resolve "Error: Permissions denied" or "Can't create the file:
  Permission denied" when downloading reports from the Helpdesk portal by
  granting the appropriate Write NTFS permission to the Web folder.
keywords:
  - permissions denied
  - report download
  - Helpdesk portal
  - NTFS permissions
  - Web folder
  - Password Manager
  - Write permission
  - 'C:Program Files (x86)Netwrix Password ManagerWeb'
products:
  - general
sidebar_label: Report download Permissions denied
tags: [troubleshooting-and-errors]
title: "Report download Permissions denied"
knowledge_article_id: kA00g000000H9aWCAS
---

# Report download Permissions denied

You receive `Error: Permissions denied` or `Can't create the file: Permission denied` when trying to download any report from the Helpdesk portal

![User-added](./../0-images/servlet_image_6d5dba18caac.png)

---

To make reports availalbe for downloading Password Manager generates reports and writes the output to a temp file.

The temp file is located in the physical path of the **helpdesk** virtual directory - in the product installation directory. (by default `C:Program Files (x86)Netwrix Password ManagerWeb`).

The reason for this is that the account used to authenticate to the Helpdesk portal (can be the one you are logged in to the system if automatic background user authentication is enabled) does not have **Write** permissions to the folder.

---

To resolve the issue you must grant the appropriate account **Write** NTFS permission to the **Web** folder (by default `C:Program Files (x86)Netwrix Password ManagerWeb`).

To grant permission:
1. Right-click the **Web** folder, go to **Properties**
2. Select **Security** tab, click **Edit**
3. **Add** the account and enable **Write** Allow checkbox
4. Click **Ok**, then **Ok** again

![User-added](./../0-images/servlet_image_6d5dba18caac.png)
