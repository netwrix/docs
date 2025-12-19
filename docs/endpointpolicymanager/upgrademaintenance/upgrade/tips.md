---
title: "Upgrading Tips"
description: "Upgrading Tips"
sidebar_position: 10
---

# Upgrading Tips

Netwrix Endpoint Policy Manager (formerly PolicyPak) consists of several pieces of software. These
include the following:

- Endpoint Policy Manager Client-Side Extension (CSE), which is on every client machine you want
  Endpoint Policy Manager to do work on.
- Endpoint Policy Manager GPMC snap-in, which provides the Endpoint Policy Manager node within the
  GPMC (for editing policies)
- Endpoint Policy Manager helper tools:

  - Endpoint Policy Manager Exporter and Endpoint Policy Manager GPOTouch utilities
  - Endpoint Policy Manager Admin Approval (for Endpoint Policy Manager Least Privilege Manager)
  - Endpoint Policy Manager DesignStudio, which enables you to create and update Endpoint Policy
    Manager Application Settings Manager AppSets

- Endpoint Policy Manager AppSets (pre-configured or created by you) for Endpoint Policy Manager
  Application Settings Manager

Always remember that the Endpoint Policy Manager CSE acts as part of the operating system. As such,
you should perform small-scale tests for major builds. After you do this, roll out the CSE in a
controlled manner after you confirm success for all applications and scenarios.

You should familiarize yourself with the idea of rings, which is a Microsoft concept dealing with
controlled rollouts. Endpoint Policy Manager aligns with this ring philosophy and as such, getting
familiar with those concepts is well advised. This idea is applicable for all delivery methods:
Group Policy, MDM, SCCM, or Cloud. This manual will examine the concept of rings. See the
[Using Rings to Test and Update the Endpoint Policy Manager Client-Side Extension and/or Cloud Client (And How to Stay Supported)](/docs/endpointpolicymanager/upgrademaintenance/bestpractices/rings.md) topic
for additional information

In general, the best route to take for upgrading from any previous version is the following:

**Step 1 –** Update the GPMC on your Admin Console machines to get the latest MMC editor. You'll use
the Admin Console MSI folder for this.

**Step 2 –** The Admin Console will auto-update the tools that are automatically installed alongside
the Admin Console installation, such as Endpoint Policy Manager Admin Approval Tool and Endpoint
Policy Manager Exporter.

**Step 3 –** If you're using any other Endpoint Policy Manager Extras tools, be sure to update and
distribute those to your admin team. Sometimes the latest helper tool must match what is expected in
the MMC editor.

**Step 4 –** Update the Endpoint Policy Manager ADMX (troubleshooting) files. (Video tip:
[Troubleshooting with ADMX files](/docs/endpointpolicymanager/gettingstarted/misc/videos/troubleshooting/admxfiles.md))

**Step 5 –** Roll out the CSE in a controlled fashion to your endpoints using the ring methodology.

![upgrading_tips_624x267](/images/endpointpolicymanager/install/upgrade/upgrading_tips_624x267.webp)

:::warning
Do not attempt to roll out the CSE to 100% of your computer population at once. If
Endpoint Policy Manager fails to operate in an expected manner and locks up, or otherwise makes your
machine inaccessible or unavailable, we cannot be responsible since you were directed to roll out
the CSE to endpoint machines gradually.
:::


:::note
If you're using Endpoint Policy Manager with Group Policy Objects (GPOs), you should also
be making backups from time to time. Inside the GPMC, find the Group Policy Objects node,
right-click, select Backup, and then follow the prompts. For additional information on how to
preform a Group Policy backup, see the
[Endpoint Policy Manager: Backup and Restore Options to Recover from nearly any problem](/docs/endpointpolicymanager/gettingstarted/misc/videos/upgradingmaintenance/backupoptions.md)
and
[Endpoint Policy Manager Application Settings Manager: Backup, Restore, Export, Import](/docs/endpointpolicymanager/gettingstarted/misc/videos/upgradingmaintenance/backup.md)
video demos.

:::

