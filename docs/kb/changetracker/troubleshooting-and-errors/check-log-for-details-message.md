---
description: >-
  Shows how to resolve the "Check Log for Details" message by verifying and
  reinstalling the Netwrix Info driver and explains kernel buffer limitations
  that can cause intermittent loss of "who made the change" information.
keywords:
  - Netwrix Change Tracker
  - Netwrix Info
  - fltmc
  - driver
  - NNTInfo
  - Gen7Agent
  - kernel buffer
  - who made the change
products:
  - changetracker
knowledge_article_id: ka0Qk000000Do2DIAS
sidebar_label: Fixing the "Check Log for Details" Message
tags: [kb, troubleshooting-and-errors]
title: Fixing the "Check Log for Details" Message in the Event Details
---

# Fixing the "Check Log for Details" Message in the Event Details

## Overview

This message usually occurs when the "Who made the change" driver, called the **Netwrix Info** driver, is not running. The following steps show how to verify the driver status and reinstall it if necessary.

## Instructions

### Verify the Driver

1. Open an elevated Command Prompt (run as Administrator).
2. Type `fltmc` and press **Enter**.
3. Look for `Netwrix Info` in the listed items. If the driver is running, it appears in the output.

The following screenshot shows `Netwrix Info` in the `fltmc` output:

<!-- Image removed: fltmc command output showing the Netwrix Info driver listed among active filter drivers -->

### If the Driver Is Not Running

If `Netwrix Info` does not appear in the `fltmc` output, reinstall the driver from the agent driver folder:

1. Go to the appropriate folder (see the following paths).
2. Right-click the `Install` file and select **Run as administrator**.

- Gen7 Agent:
  `C:\Program Files\NNT Change Tracker Suite\Gen7Agent\Driver`

- 6.5 Agent:
  `C:\Program Files\NNT Change Tracker Suite\Agent\Driver` <!-- SME: 6.5 Agent path is legacy — confirm whether to keep or remove (only 8.x agents are actively supported) -->

Screenshot of the driver folder and Install file:

<!-- Image removed: Windows Explorer view of the Agent Driver folder highlighting the Install file -->

> **NOTE:** In some cases, the Netwrix Info driver is running but you experience intermittent interruption of "who made the change" information.
>
> - This mainly occurs on extremely busy and noisy systems with a large volume of changes.
> - The kernel buffer used to capture the "who made the change" information may overflow, so the agent may be unable to capture the information in this case.
> - Because the agent is a kernel-level agent, excluding events in **Netwrix Change Tracker** stops the reporting of those events, but the events are still generated at the kernel level. The agent sees them but may choose not to report them to the hub server based on the predefined exclusion.
> - Large volumes of changes impact the agent's ability to capture "who made the change" information depending on the volume.

If you continue to experience issues after reinstalling the driver and confirming the driver appears in `fltmc`, evaluate the event volume on the system and adjust exclusions or system design to reduce the risk of kernel buffer overflow.
