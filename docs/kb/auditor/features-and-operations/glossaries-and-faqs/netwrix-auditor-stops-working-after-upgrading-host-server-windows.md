---
description: >-
  Netwrix Auditor may stop working after upgrading the Windows version on the
  host server, disabling monitoring plans and showing the license status as
  Unavailable. This article explains the cause and provides steps to reapply or
  reinstall licenses for both paid/trial and Free Community Edition
  installations.
keywords:
  - Netwrix Auditor
  - license
  - Windows upgrade
  - host server
  - monitoring plans
  - Unavailable
  - reinstall
  - Free Community Edition
products:
  - auditor
sidebar_label: Netwrix Auditor Stops Working After Upgrading Host
tags: []
title: "Netwrix Auditor Stops Working After Upgrading Host Server Windows"
knowledge_article_id: kA04u000000PoKECA0
---

# Netwrix Auditor Stops Working After Upgrading Host Server Windows

## Symptom

- Netwrix Auditor stops working after the Windows version on the Netwrix host server was upgraded.
- Monitoring plans are disabled.
- License status for a product states **Unavailable**.  
  ![1.png]./../0-images/ka04u00000116G7_0EM4u000007ceka.png)

## Cause

Windows Setup suite overwrites license-related settings of Netwrix Auditor during the upgrade procedure.

## Solution

### For trial or normal licenses

Re-apply your license:

1. In the main Netwrix Auditor screen, go to **Settings** > **Licenses** and click **Update**.  
   ![2.png]./../0-images/ka04u00000116G7_0EM4u000007cekk.png)
2. Navigate to your `.lic` file and select the file.
3. Click **Open**.

### For Netwrix Auditor Free Community Edition

Reinstall your Netwrix Auditor instance. For additional information on the Auditor uninstallation process, refer to the following article: https://docs.netwrix.com/docs/auditor/10_8

