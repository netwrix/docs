---
title: "Scheduler"
description: "Scheduler"
sidebar_position: 10
---

# Scheduler

Platform Governance for Salesforce's scheduler creates automated scans, manages scripts, uses the
Agent and finds the date last used (DLU). The schedules are validated to prevent scanners from
running concurrently, potentially causing conflicts and incomplete documentation. A warning message
is displayed if you create an overlapping scanner schedule.

To use the scheduler tool:

1. Open **Netwrix Dashboard** > **Scanner** > **Scheduler**
   All categories are initially disabled by default.

    ![scheduler](/images/platgovsalesforce/clean_up/scheduler.webp)

2. Select the category to automate by clicking on **Disabled** to enable it. There is no save
   button, automation is turned on and saved by toggling **Enabled**/**Disabled**.
3. Select the **Frequency** , **Day** and **Time**. Your selections are automatically saved.
4. Click any menu item to close the **Scheduler**.
