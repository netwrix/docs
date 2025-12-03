---
title: "Log File Options Pages"
description: "Log File Options Pages"
sidebar_position: 10
---

# Log File Options Pages

The log level can be customized for each service. The left of the page lists the configurable
options:

- Action Service
- Email Service
- Proxy Service
- Scheduler Service
- SIEM Service
- Web Service

The right of the page shows details of the selected option.

## Configure Log File Options

Configure the Log File Options for the selected service. The recommended log level is Informational.

![logfileoptionspage](/images/privilegesecure/25.12/accessmanagement/admin/auditreporting/page/logfileoptionspage.webp)

The right of the page shows details of the selected service and has the following features:

- Edit – Click any field to edit the selected service
- Name – Displays the short name of the service
- Minimum Log Level:

    - Verbose – Extremely detailed logging

        :::note
        There are not many Verbose log messages in Privilege Secure so the difference
        between Verbose and Debug is minimal.
        :::


    - Debug – More information for detailed analysis of system behavior. Customer support may ask
      for logs with this log level enabled for troubleshooting purposes
    - Information – Normal operation for the system
    - Warning – Message that indicates an unusual condition that the system can recover from
    - Error – Message that indicates an unrecoverable condition has been reached and may indicate
      data loss
    - Fatal – Error that has caused the service to abort

- Retained File Count Limit - The number of log files to keep before deletion
- File Size Limit Bytes - Maximum size of individual log file
- Save button (only visible when editing) – Saves changes
- Cancel button (only visible when editing) – Discards changes

See the [Log Files Page](/docs/privilegesecure/25.12/admin/AuditReporting/logfiles/logfiles.md) topic for additional information.
