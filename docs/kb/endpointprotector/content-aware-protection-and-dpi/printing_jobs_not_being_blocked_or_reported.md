---
description: >-
  This article explains how to ensure that printing jobs are properly blocked or reported by the Endpoint Protector (EPP) agent.
keywords:
  - Endpoint Protector
  - printing jobs
  - Device Control
sidebar_label: Printing Jobs Not Being Blocked or Reported
tags:
  - content-aware-protection-and-dpi
  - kb
title: "Printing Jobs Not Being Blocked or Reported"
knowledge_article_id: kA0Qk0000002B7CKAU
products:
  - endpointprotector
---

# Printing Jobs Not Being Blocked or Reported

## Overview

This article explains how to ensure that printing jobs are properly blocked or reported by the Endpoint Protector (EPP) agent. The **Advanced Printer and MTP Scanning** option must be enabled in Device Control settings, and a Content Aware Policy must include **Printers** as a Policy Exit Point, for this functionality to work.

For the full reference, see [Client Settings](/docs/endpointprotector/admin/dc_module/globalsettings#client-settings).

## Instructions

1. In the Endpoint Protector Management Console, go to **Device Control** > **Global Settings**.
2. Enable the **Advanced Printer and MTP Scanning** option. This feature is available only for Windows.
3. Verify the affected application isn't listed under **Advanced Scanning Exceptions**, in the same section. Endpoint Protector skips DLL injection — and therefore print monitoring — for any application on this list.
4. Confirm a Content Aware Policy includes **Printers** as a Policy Exit Point, and that the policy's Denylist includes the content you expect to be blocked or reported.
5. On the EPP client, click the **Update Policies Now** icon to apply the new settings.
6. Reboot the machine to complete the update process. A reboot is required each time Advanced Printer and MTP Scanning is enabled or disabled.

If the problem persists after following these steps, raise a ticket with Netwrix Technical Support for further assistance.