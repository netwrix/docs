---
title: "ADPermissions: Options"
description: "ADPermissions: Options"
sidebar_position: 50
---

# ADPermissions: Options

The Options page is provides additional options for collecting the Active Directory information. It
is a wizard page for the categories of:

- Scan Active Directory Permissions
- Scan Active Directory Audits

![ADPermissions Data Collector wizard Options page](/images/accessanalyzer/11.6/admin/datacollector/adpermissions/options.webp)

The configurable options are:

- Encrypt communication with Active Directory (SSL) – Enables SSL encryption

    - Ignore Certificate errors – Select to ignore errors for testing only

- Collect only updates since the last scan – Enables differential scanning

    - Target previously scanned domain controller – Select to use the same domain controller as the
      previous scan
    - Track changes into change tracking tables – Enable to track changes
    - Number of days you want to keep changes in the database – Set the number of days to keep
      changes in the database
