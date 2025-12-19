---
description: >-
  Netwrix Auditor may report excessive file read attempts when Windows thumbnail
  previews cause the icons cache to be overwritten. This article explains why
  this happens and shows the Group Policy settings you can enable to reduce
  those read attempts.
keywords:
  - Netwrix Auditor
  - file read attempts
  - thumbnails
  - File Explorer
  - gpedit.msc
  - thumbs.db
  - thumbnail cache
  - Group Policy
products:
  - auditor
sidebar_label: Netwrix Auditor for File Servers reports excessive
tags: []
title: "Netwrix Auditor for File Servers reports excessive file read attempts that did not actually occur"
knowledge_article_id: kA00g000000H9WqCAK
---

# Netwrix Auditor for File Servers reports excessive file read attempts that did not actually occur

Netwrix Auditor search, alerts and/or summary emails contain excessive file read attempts.

If the thumbnail previews option is enabled for an account in File Explorer, each time the user opens a folder, internal icons cache is overwritten.

---

## Resolution

In order to reduce the number of such read attempts, you should configure the following policies:

1. Open the Local Group Policy Editor snap-in on any domain controller in the target domain: navigate to **Start** > **Run** and type `gpedit.msc`.
2. In the Local Group Policy Editor snap-in, navigate to **User Configuration** > **Administrative Templates** > **Windows Components** > **File Explorer**.
3. Enable the following policies:

- **Turn off the display of thumbnails and only display icons**
- **Turn off the display of thumbnails and only display icons on network folders**
- **Turn off the caching of thumbnails in hidden thumbs.db files**
- **Turn off caching of thumbnail pictures**

Note: You should be signed in as an administrator to perform this operation.
