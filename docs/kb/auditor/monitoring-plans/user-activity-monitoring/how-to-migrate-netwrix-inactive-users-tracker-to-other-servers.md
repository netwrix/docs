---
description: >-
  Shows how to migrate the Inactive Users Tracker component when you install
  Netwrix Auditor on another server, including copying the program data and
  reapplying the license.
keywords:
  - Inactive Users Tracker
  - migration
  - Netwrix Auditor
  - ProgramData
  - server migration
  - copy files
  - license
  - Inactive Users Tracker folder
products:
  - auditor
sidebar_label: How to migrate Netwrix Inactive Users Tracker to o
tags: []
title: "How to migrate Netwrix Inactive Users Tracker to other servers"
knowledge_article_id: kA00g000000H9TjCAK
---

# How to migrate Netwrix Inactive Users Tracker to other servers

How do I migrate Netwrix Inactive Users Tracker to other servers?

On Netwrix Auditor Versions 9.0 and Newer, Inactive Users Tracker is installed alongside the Netwrix Auditor installation.

1. Install Netwrix Auditor on a new server.
2. Copy the following files to the same location on the new server:
   - Contents of `C:\ProgramData\Netwrix Auditor\Inactive Users Tracker`
   - Screenshot all four tabs of the Inactive Users Tracker interface for configuration  
     ![User-added image]./../0-images/ka04u000000HcNW_0EM4u000002QzDA.png)
3. Paste the contents of original `C:\ProgramData\Netwrix Auditor\Inactive Users Tracker` folder to the `C:\ProgramData\Netwrix Auditor\Inactive Users Tracker` folder on the new server
4. Reconfigure Inactive Users Tracker using the screenshots you captured
5. Apply your Netwrix Auditor License to the new instance of Netwrix Auditor.

