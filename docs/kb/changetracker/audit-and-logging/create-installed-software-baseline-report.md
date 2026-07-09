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
title: Creating an Installed Software Baseline Report
---

# Creating an Installed Software Baseline Report

## Overview

If a system in your environment represents the gold standard of required installed software, you can use Netwrix Change Tracker to build a report that checks whether other systems match the gold standard machine.

The approach in the following steps isolates the gold standard machine within its own group and applies its own templates. This lets you gather the information from the gold standard system without impacting the templates applied to the wider production environment.

## Instructions

### Create a Template

Identify the system to be used for the gold standard baseline report and confirm that this system is registered with Netwrix Change Tracker. Use the **Device** tile to find the template applied to the system, because you will copy this template. In this example, the template is `CIS Win 8 L1 Base`. <!-- SME: example uses Windows 8 (EOL) — consider refreshing to a currently supported OS/CIS template -->

<!-- Image removed: Device tile in Netwrix Change Tracker showing the gold-standard system and its applied configuration template -->

While logged on with an admin account, go to **Settings > Configuration Template**.

Find the template applied to the system by default. In the following example, you review a Windows 8 system, and the located template is `CIS Win 8 L1 Base`.

<!-- Image removed: Configuration Template list with the CIS Win 8 L1 Base template highlighted -->

1. Click the **Copy Config** button and give the template a suitable name.
   - In this example, the template is named `CIS Win 8 L1 Base Gold Standard`.

### Turn on Baselining

Within the created gold standard template, configure the template to collect the baseline information used to build the report.

1. Edit your template.
2. On the **Installed Software and Updates** tab, select the **Send baseline events** check box.
3. Click **Save Changes**.

<!-- Image removed: Installed Software and Updates tab in the template editor with the Send baseline events checkbox enabled -->

### Create a Group Structure

While still logged in with the admin account, go to **Settings > Groups** and create a group for your gold standard systems. In the following example, a group is created for a Windows 8 system.

<!-- Image removed: Settings > Groups view showing the newly created gold-standard Windows 8 group -->

With the group created, go to the **Device Templates** tab and click **Add a Template to the Group** to import your gold standard template.

### Add Your Device to the Group

With both the group and the template created, move your device into the group from **Settings > Agents and Devices** using the **Edit** button.

<!-- Image removed: Settings > Agents and Devices with the gold-standard device selected and the Edit button used to move it into the new group -->

### Create the Baseline Report

As soon as the agent is added into the group, the agent begins its baseline activities. You can see the Installed Software baseline event messages through the Netwrix Change Tracker **Event** tab by using a `Baseline` event type within the filter.

<!-- Image removed: Event tab filtered by Baseline event type showing Installed Software baseline events -->

Once baselining completes, which should take no more than ten minutes, go to the **Device** tile and highlight the gold standard system. Under the configuration display, a button labeled **Create Baseline Report** appears.

<!-- Image removed: Device tile for the gold-standard system with the Create Baseline Report button visible -->

1. Click **Create Baseline Report** and accept the defaults in the pop-up windows.
   - Change the name of the report if you prefer.

<!-- Image removed: Create Baseline Report popup with default settings and a name field -->

A baseline report for all software and patches installed on your gold standard system is now created. The report is available at **Settings > Compliance Reports Templates**.

<!-- Image removed: Settings > Compliance Reports Templates list showing the newly created baseline report -->

### Run the Report

With the report created, you can add the report to an existing group to run the report against all members of that group, or run the report ad hoc from the **Device** tile.

Schedule the report within a group:

<!-- Image removed: Scheduled Reports tab on a group with the new baseline report added to the schedule -->

Run the report ad hoc from the **Device** tile:

<!-- Image removed: Device tile ad-hoc report run controls with the baseline report selected -->

<!-- Image removed: Ad-hoc baseline report results showing pass/fail comparison against the gold standard -->
