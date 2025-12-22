---
title: "Scheduler Service"
description: "Scheduler Service"
sidebar_position: 40
---

# Scheduler Service

On the Scheduler Service page, view information for scheduled services.

![Scheduler service Page](/images/privilegesecure/4.2/accessmanagement/admin/configuration/servicetype/page.webp)

The Scheduler Service page shows details of the selected service and has the following features:

- Statistics Tab
- Action Queues Tab

## Statistics Tab

The Statistics tab shows an overview of the actions for the past 24 hours.

![statisticstab](/images/privilegesecure/4.2/accessmanagement/admin/configuration/servicetype/statisticstab.webp)

The Statistics tab shows the total number of actions for each of the following statuses:

- Unknown
- Pending
- Queued
- Running
- Complete
- Failed
- Canceled
- Completed With Errors
- Completed Not Run

## Action Queues Tab

The Action Queues tab shows all scheduled services.

![actionqueuestab](/images/privilegesecure/4.2/accessmanagement/admin/configuration/servicetype/actionqueuestab.webp)

The Action Queues table has the following features:

- Search – Searches the columns to match the search string. When matches are found, the table is
  filtered to the matching results.
- Refresh button – Reload the information displayed
- Column headers can be sorted by ascending or descending order:

    - Start Time – Indications when the action started
    - End Time – Indications when the action completed
    - Job Name – Name of the scheduled action
    - AQ Status – Status of the service
    - AQ Status Description – Describes the status type
    - Activity Status – Shows status information for the action:

        - Complete – Action completed successfully
        - Failed – Action failed
