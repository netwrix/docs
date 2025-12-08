---
description: >-
  Explains how to enable Volume Shadow Copy Service (VSS) support in Netwrix
  Auditor and where Shadow Copy data is stored. Shows the steps in the Netwrix
  Auditor UI and clarifies that snapshot data is stored on the audited file
  server.
keywords:
  - VSS
  - Volume Shadow Copy
  - Shadow Copy
  - Netwrix Auditor
  - file server
  - snapshot
  - file versioning
  - rollback
products:
  - auditor
sidebar_label: Volume Shadow Copy Service support in Netwrix Audi
tags: []
title: "Volume Shadow Copy Service support in Netwrix Auditor for File Servers"
knowledge_article_id: kA00g000000H9TiCAK
---

# Volume Shadow Copy Service support in Netwrix Auditor for File Servers

How do you enable the **Volume Shadow Copy Service support** in **Netwrix Auditor**? Where will the **Shadow Copy** data be stored: on an audited file server or on a computer where **Netwrix Auditor** is installed?

## Enable Volume Shadow Copy Service (VSS) support

The **Volume Shadow Copy Service** (hereafter **VSS**) can be enabled via **Netwrix Auditor**. To do it,

1. Navigate to **Managed Objects -> your_File_Servers_Managed_Object_name -> File Servers.**
2. Click **Configure** next to **Advanced Settings** and select the **Enable file versioning and rollback capabilities (based on Volume Shadow Copy).**

![User-added image]./../0-images/ka04u000000HcNV_0EM700000007LkF.png)

## Where Shadow Copy data is stored

The **Shadow Copy** data is stored on the audited file server. **VSS** is a built-in **Windows** service, and when you enable the VSS support, **Netwrix Auditor** just triggers creation of a snapshot. If you have not configured **VSS**, you may want to turn it off (especially if you do not have enough space on that server). To know precisely where the **Shadow Copy** data is stored, refer to the **Shadow Copy** information on the drive volume.



