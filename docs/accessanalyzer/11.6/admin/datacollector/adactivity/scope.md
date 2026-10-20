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

![Active Directory Activity DC wizard Scoping and Retention page](/images/activitymonitor/7.1/config/activedirectory/scope.webp)

Define the Timespan according to the following two elements:

- Relative Timespan – Number of days AD Activity is collected when the scan is run
- Absolute Timespan – Set the date range for the scan to collect AD Activity

    :::info
    Set the threshold to a time after the Netwrix Activity Monitor collects
    and archives its data, but before it deletes the data at the end of the retention period.
    :::


The Retention section sets which event type Enterprise Auditor collects and how many days it keeps
the collected data in its SQL database. The table has the following columns:

- Event Type – The event type that may be enabled for the scan. The event types are:

    - AD Change
    - AD Replication
    - Authentication
    - LDAP
    - Process Injection

- Days to Store – Specify the number of days to store the collected data for the event type
- Enable Collection – When selected, the corresponding event type is collected
