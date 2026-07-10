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

Netwrix Change Tracker uses two types of templates:

1. Configuration templates, which define the file, folder, and registry monitoring policy.
2. Compliance report templates, which map to CIS Benchmarks and score devices against a hardened build standard.

This article describes how to upload a new template of either type, overwrite an existing default template, and assign the template to a device group.

## Instructions

### Configuration Template

1. Go to **Settings** > **Configuration Templates**, then click **Upload Templates**.
2. Browse your local files and select the template you want to upload.

   For example, `Windows Server 2012 R2 CIS Monitoring Template`. <!-- SME: Windows Server 2012 R2 is EOL — consider refreshing example to a currently supported OS (e.g., Server 2022) -->

<!-- Image removed: Upload Templates dialog showing the file browse control and Overwrite existing config checkbox -->

#### Replacing a Default Template

1. Select the **Overwrite any existing config with the same name** check box.
2. Click **Upload files**.

#### Not Replacing a Default Template

1. Click **Upload files**.
2. Go to **Settings** > **Groups**.
3. Select the group of devices and click **Device Templates**.
4. Delete the **Default Template**.
5. Click **Add a Template to the Group**.
6. In the pop-up window, select the template you uploaded and click **Update**.

<!-- Image removed: Device Templates tab on a Group showing Add a Template to the Group control -->

### Compliance Report Template

1. Go to **Settings** > **Compliance Report Templates**, then click **Upload Templates**.
2. Browse your local files and select the template you want to upload.

   For example: `NNT_CIS_Microsoft_Windows_Server_2012_R2_Benchmark_v2.2.1 - Level 1 Member Server`.

<!-- Image removed: Compliance Report Templates upload dialog with the CIS Windows Server benchmark example selected -->

#### Replacing a Default Template

1. Select the **Overwrite any existing config with the same name** check box.
2. Click **Upload files**.

#### Not Replacing a Default Template

1. Click **Upload files**.
2. Go to **Settings** > **Groups**.
3. Select the group of devices and click **Scheduled Reports**.
4. Delete the **Default Report**.
5. Click **Schedule a New Report**.
6. In the pop-up window, select the template you uploaded, enter the information you want, then click **Update**.

<!-- Image removed: Schedule a New Report dialog on a Group with the newly-uploaded compliance report selected -->
