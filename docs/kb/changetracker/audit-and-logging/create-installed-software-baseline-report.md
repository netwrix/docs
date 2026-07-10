---
description: >-
  Shows how to create an Installed Software baseline report by using a
  gold-standard system in Netwrix Change Tracker. The article walks through
  creating a template, enabling baselining, grouping the device, creating the
  baseline report, and running it.
keywords:
  - installed software baseline
  - baseline report
  - Netwrix Change Tracker
  - configuration template
  - compliance reports
  - device groups
  - installed software
  - baselining
products:
  - changetracker
knowledge_article_id: ka0Qk000000DnqvIAC
sidebar_label: Creating an Installed Software Baseline Report
tags: [kb, audit-and-logging]
title: Creating an Installed Software Baseline Report from a Gold-Standard System
---

# Creating an Installed Software Baseline Report from a Gold-Standard System

## Overview

If a system in your environment represents the gold standard of required installed software, you can use Netwrix Change Tracker to build a report that checks whether other systems match the gold-standard machine.

This approach isolates the gold-standard machine within its own group and applies its own templates. This lets you gather the information from the gold-standard system without impacting the templates applied to the wider production environment.

For background on Netwrix Change Tracker's broader baselining and hardened build standard concepts, refer to the [Baseline](pathname:///docs/changetracker/8_2/baseline/overview) overview.

## Instructions

> **NOTE:** Complete the following steps while logged on with an admin account.

### Step 1 — Create a Template

1. Confirm your gold-standard system is registered with Netwrix Change Tracker, then use the **Device** tile to find its applied template. In this example, the template is `CIS Win 8 L1 Base`. <!-- SME: example uses Windows 8 (EOL) — consider refreshing to a currently supported OS/CIS template -->

   <!-- Image removed: Device tile in Netwrix Change Tracker showing the gold-standard system and its applied configuration template -->

2. Go to **Settings > Configuration Template** and locate that same template.

   <!-- Image removed: Configuration Template list with the CIS Win 8 L1 Base template highlighted -->

3. Click **Copy Config** and give the copy a suitable name. In this example, the copy is named `CIS Win 8 L1 Base Gold Standard`.

### Step 2 — Turn on Baselining

Configure the template to collect the baseline information used to build the report.

1. Edit your template.
2. On the **Installed Software and Updates** tab, select the **Send baseline events** check box.
3. Click **Save Changes**.

<!-- Image removed: Installed Software and Updates tab in the template editor with the Send baseline events checkbox enabled -->

### Step 3 — Create a Group Structure and Add Your Device

1. Go to **Settings > Groups** and create a group for your gold-standard systems. This example creates a group for a Windows 8 system.

   <!-- Image removed: Settings > Groups view showing the newly created gold-standard Windows 8 group -->

2. Go to the **Device Templates** tab and click **Add a Template to the Group** to import your gold-standard template.

3. Move your device into the group from **Settings > Agents and Devices** using the **Edit** button.

   <!-- Image removed: Settings > Agents and Devices with the gold-standard device selected and the Edit button used to move it into the new group -->

### Step 4 — Create the Baseline Report

After you add the agent to the group, it begins baseline activities automatically — you can track progress in the **Event** tab using a `Baseline` event type filter.

> **NOTE:** Baselining typically completes within ten minutes.

<!-- Image removed: Event tab filtered by Baseline event type showing Installed Software baseline events -->

1. Go to the **Device** tile and highlight the gold-standard system.

   <!-- Image removed: Device tile for the gold-standard system with the Create Baseline Report button visible -->

2. Click **Create Baseline Report** and accept the defaults in the pop-up window, or change the report name if you prefer.

   <!-- Image removed: Create Baseline Report popup with default settings and a name field -->

The report is now available at **Settings > Compliance Reports Templates**.

<!-- Image removed: Settings > Compliance Reports Templates list showing the newly created baseline report -->

### Step 5 — Run the Report

You can run the report against a group on a schedule, or ad hoc from the **Device** tile. Either method produces a result that compares each device against the gold-standard baseline and shows which devices pass or fail.

- **Option 1:** To schedule the report, add it to a group's **Scheduled Reports** tab.

   <!-- Image removed: Scheduled Reports tab on a group with the new baseline report added to the schedule -->

- **Option 2:** To run it ad hoc, use the report controls on the **Device** tile.

   <!-- Image removed: Device tile ad-hoc report run controls with the baseline report selected -->

<!-- Image removed: Ad-hoc baseline report results showing pass/fail comparison against the gold standard -->
