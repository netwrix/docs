---
title: "Scheduler Service"
description: "Scheduler Service"
sidebar_position: 50
---

# Scheduler Service

On the Scheduler Service page, view information for scheduled services.

![Scheduler service Page](/images/threatprevention/7.4/reportingmodule/configuration/systemsettings/page.webp)

The Scheduler Service page shows details of the selected service and has the following features:

- [Action Queues Tab](#action-queues-tab)
- [Statistics Tab](#statistics-tab)

## Action Queues Tab

The Action Queues tab shows all scheduled services.

![actionqueuestab](/images/privilegesecure/4.1/accessmanagement/admin/configuration/servicetype/actionqueuestab.webp)

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

    - Total – Number of jobs for the service
    - Pending – Number of pending jobs
    - Queued – Number of queued jobs
    - Completed – Number of completed jobs

## Statistics Tab

The Statistics tab shows an overview of the actions for the past 24 hours.

![statisticstab](/images/privilegesecure/4.1/accessmanagement/admin/configuration/servicetype/statisticstab.webp)

The Statistics tab shows the total number of services for each of the following statuses:

- Unknown
- Pending
- Queued
- Running
- Complete
- Failed
- Canceled
- Completed With Errors
- Completed Not Run
