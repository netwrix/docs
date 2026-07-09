---
description: >-
  Use this article when you have replaced or edited a configuration or
  compliance report template and need to upload it to Netwrix Change Tracker. It
  covers uploading templates, overwriting defaults, and assigning templates to
  device groups.
keywords:
  - netwrix change tracker
  - template upload
  - configuration template
  - compliance report template
  - overwrite template
  - device groups
  - CIS benchmark
  - Windows Server 2012 R2
products:
  - changetracker
knowledge_article_id: ka0Qk000000DligIAC
sidebar_label: Adding or Replacing Compliance Report Templates
tags: [kb, configuration-and-setup]
title: Adding or Replacing Configuration and Compliance Report Templates
---

# Adding or Replacing Configuration and Compliance Report Templates

## Overview

Use this article when a client has replaced or edited a template and needs to upload it to Netwrix Change Tracker.

## Instructions

### Configuration Template

1. Go to **Settings**.
2. Go to **Configuration Templates**.
3. Click **Upload Template(s)**.
4. Browse your local files and select the template you want to upload. For example, `Windows Server 2012 R2 CIS Monitoring Template`. <!-- SME: Windows Server 2012 R2 is EOL — consider refreshing example to a currently supported OS (e.g., Server 2022) -->
5. If you are replacing a default template, select the **Overwrite any existing config with the same name.** check box. (Skip this step if you are not replacing a template.)
6. Click **Upload files**.
7. The following screenshot shows an example.

<!-- Image removed: Upload Templates dialog showing the file browse control and Overwrite existing config checkbox -->

8. If you are not replacing a default template, assign the template to its matching group of devices:

   1. Go to **Settings**.
   2. Go to **Groups**.
   3. Select the group of devices and click **Device Templates**.
   4. Delete the Default Template.
   5. Click **Add a Template to the Group**.
   6. In the pop-up window, select the template you uploaded and click **Update**.

<!-- Image removed: Device Templates tab on a Group showing Add a Template to the Group control -->

### Compliance Report Template

1. Go to **Settings**.
2. Go to **Compliance Report Templates**.
3. Click **Upload Template(s)**.
4. Browse your local files and select the template you want to upload. For example: `NNT_CIS_Microsoft_Windows_Server_2012_R2_Benchmark_v2.2.1 - Level 1 Member Server`.
5. If you are replacing a default template, select the **Overwrite any existing config with the same name.** check box. (Skip this step if you are not replacing a template.)
6. Click **Upload files**.

<!-- Image removed: Compliance Report Templates upload dialog with the CIS Windows Server benchmark example selected -->

7. If you are not replacing a default template, assign the report to its matching group of devices:

   1. Go to **Settings**.
   2. Go to **Groups**.
   3. Select the group of devices and click **Scheduled Reports**.
   4. Delete the Default Report.
   5. Click **Schedule a New Report**.
   6. In the pop-up window, select the template you uploaded, enter the information you want, and click **Update**.

<!-- Image removed: Schedule a New Report dialog on a Group with the newly-uploaded compliance report selected -->
