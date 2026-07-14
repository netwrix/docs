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
  - Windows Server 2025
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
2. Compliance Report templates, which map to CIS Benchmarks and score devices against a hardened build standard.

This article describes how to upload a new template of either type, overwrite an existing default template, and assign the template to a device group.

## Instructions

### Configuration Template

1. Go to **Settings** > **Policy Templates**, then click **Upload Templates**.
2. Browse your local files and select the template you want to upload.

   For example, `CIS Windows Server 2025 Base Template`.

<img width="890" height="333" alt="image" src="https://github.com/user-attachments/assets/43009746-a9b4-471d-a820-8518bbdb940a" />

#### Replacing a Default Template

1. Uploading a new template with the same name will overwrite the existing template present within the system.

#### Not Replacing a Default Template

1. Click **Upload files**.
2. Go to **Settings** > **Groups**.
3. Select the group of devices and click **Policy Templates**.
4. Delete the **Default Template**.
5. Click **Add an Existing Template**.
6. In the pop-up window, select the template you uploaded and click **Update**.

<img width="2559" height="1305" alt="image" src="https://github.com/user-attachments/assets/b7d6945d-09c7-4d3b-88c0-6ed9f2a357f0" />

### Compliance Report Template

1. Go to **Settings** > **Policy Templates**, then click **Upload Templates**.
2. Browse your local files and select the template you want to upload.

   For example: `NNT CIS Microsoft Windows Server 2025 Benchmark - Level 1 Member Server`.

<img width="892" height="333" alt="image" src="https://github.com/user-attachments/assets/e38ca75d-d2e2-433e-8111-3ba1c64e8cae" />

#### Replacing a Default Template

1. Uploading a new template with the same name will overwrite the existing template present within the system.

#### Not Replacing a Default Template

1. Click **Upload files**.
2. Go to **Reports** > **Actions** > **Add Compliance Report**
3. Go to **Query Settings** then select the device group and template

<img width="1170" height="777" alt="image" src="https://github.com/user-attachments/assets/b590aea7-a08a-4b7a-af94-96bcfcb4d7e1" />

4. Go to **Schedule & Email** and configure the preferred settings. See Sample Below

<img width="1167" height="778" alt="image" src="https://github.com/user-attachments/assets/02b8080a-c8a9-4e11-bd0f-254ec2bb7267" />


