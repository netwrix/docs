---
title: "ADActivity: Scope"
description: "ADActivity: Scope"
sidebar_position: 50
---

# ADActivity: Scope

Use the Scoping and Retention page to configure additional settings. This page is a wizard page for
the categories of:

- Import From SAM
- Import From Share

![Active Directory Activity DC wizard Scoping and Retention page](/images/activitymonitor/8.0/config/activedirectory/scope.webp)

Two elements define the Timespan:

- Relative Timespan – Number of days the scan collects AD Activity when it runs
- Absolute Timespan – Set the date range for the scan to collect AD Activity

    :::info
    Set the threshold to a point after the Netwrix Activity Monitor collects
    and archives its data but before the set retention period deletes it.
    :::


The Retention section sets which event types Access Analyzer collects and how many days it keeps the
collected data in its SQL database. The table has the following columns:

- Event Type – The event type you can enable for the scan. The event types are:

    - AD Change
    - AD Replication
    - Authentication
    - LDAP
    - Process Injection

- Days to Store – Specify the number of days to store the collected data for the event type
- Enable Collection – When you select this checkbox, the scan collects the corresponding event type
