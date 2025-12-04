---
description: >-
  You cannot access the Roles page in the Administrative portals due to an IIS
  ASP setting. This article explains the cause and shows how to enable buffering
  to resolve the error.
keywords:
  - roles page
  - IIS
  - Enable Buffering
  - ASP
  - admin virtual directory
  - roles.asp
  - localhost
  - PM
  - server error
products:
  - auditor
sidebar_label: Cannot access roles page
tags: []
title: "Cannot access roles page"
knowledge_article_id: kA00g000000H9c2CAC
---

# Cannot access roles page

All pages on Administrative portals work except the Roles.

`http://localhost/PM/admin/roles.asp`

An error occurred on the server when processing the URL. Please contact the system administrator.
If you are the system administrator please click here to find out more about this error.

![User-added]./../0-images/servlet_image_3823966b1661.png)

---

This happens because of invalid IIS settings.

---

## Solution

Follow these steps to fix the issue:

1. Open **IIS Manager**.
2. Locate the web-site that is hosting the `PM` virtual directory.
3. Navigate to the **admin** virtual directory.
4. Open **ASP** settings under the **IIS** section.
   ![User-added]./../0-images/servlet_image_3823966b1661.png)
5. Make sure that **Enable Buffering** is set to `True`.

