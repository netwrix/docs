---
title: "Bulk Actions"
description: "Bulk Actions"
sidebar_position: 90
---

# Bulk Actions

Bulk Actions

# Bulk Actions

## Overview

The purpose of this document is to explain how the bulk actions should be utilized within Privilege
Secure.

## Main Document

Bulk actions are launched from the Management, Systems option on the left hand menu:

![screen_shot_2022-06-01_at_8](/images/privilegesecure/4.2/discovery/admin/systemmanagement/screen_shot_2022-06-01_at_8.16.18_am.webp)

This brings up the System Management screen. The System Management screen will show up to one
thousand machines based on the views and filters selected. The filters can be hidden or cleared
using the selection at the top right.

The required set of machines should be searched for using the appropriate filters and views. If more
than one thousand machines are needed, it is expected that this are selected as separate groups of
machines, possibly by OU.

![screen_shot_2022-06-01_at_8](/images/privilegesecure/4.2/discovery/admin/systemmanagement/screen_shot_2022-06-01_at_8.22.45_am.webp)

When filtered, all of the machines can be selected, or just a few as desired.

![screen_shot_2022-06-01_at_8](/images/privilegesecure/4.2/discovery/admin/systemmanagement/screen_shot_2022-06-01_at_8.24.07_am.webp)

Once the machines are selected the Bulk Actions button becomes available.

This takes you to the Bulk Action screen. From here the specific bulk action can be selected.

![screen_shot_2022-10-03_at_12](/images/privilegesecure/4.2/discovery/admin/systemmanagement/screen_shot_2022-10-03_at_12.55.29_pm.webp)

- **2.20** – Finishes out the addition of bulk actions. This now includes Bulk JITA for Linux
  endpoints, Bulk Expire and Extend, Bulk Archive, and Bulk Restore.
- **2.18** – Adds a substantial amount of new bulk actions, Adding and removing Groups/Accounts,
  managing EDR configuration, managing OAM configuration and also additional system management
  improvements. Subsequent releases will be adding to this capability.
- **2.17** – Adds the capability to Set Accounts Persistent.
- **2.16** – The initial 2.16 release of Privilege Secure includes Bulk JITA, Scan Policy and
  Protect Policy.

## Bulk Actions by Filter

Bulk Actions by filter allows bulk actions to be applied on the basis of a filter or combination of
filters on the System Management page. The default configuration for bulk actions limits to 1,000
machines however Bulk Action by filter will execute the given action on all endpoints that meet the
search criteria.

Once the bulk action has been selected the specific configurations for that bulk action are shown.

## Bulk Actions

Please note this is not an exhaustive representation of bulk actions, just a few that are relevant
for getting setup and started. You can also use bulk actions for Linux endpoints, bulk expire and
extend, and bulk archive and bulk restore.

- Bulk JITA
- Scan Policy
- Protect Policy
- Set EDR Configuration
- Set Offline Access
- Set Accounts Persistent
- Add/Update Account
- Remove Account

![screen_shot_2022-06-01_at_8](/images/privilegesecure/4.2/discovery/admin/systemmanagement/screen_shot_2022-06-01_at_8.33.03_am.webp)

## Bulk Action

Once the configurations for the bulk action have been set and saved. The Execute Bulk Action button
becomes available.

![screen_shot_2022-06-01_at_8](/images/privilegesecure/4.2/discovery/admin/systemmanagement/screen_shot_2022-06-01_at_8.37.36_am.webp)

Once the bulk action is executed a pop-up will be displayed

![screen_shot_2022-06-01_at_8](/images/privilegesecure/4.2/discovery/admin/systemmanagement/screen_shot_2022-06-01_at_8.41.53_am.webp)

The screen will also redirect to the Monitor, Jobs screen. From here you are able to see the status
of the bulk action that was executed.

![screen_shot_2022-06-01_at_8](/images/privilegesecure/4.2/discovery/admin/systemmanagement/screen_shot_2022-06-01_at_8.39.56_am.webp)

The Job Monitor screen can be accessed immediately from the left hand Management menu item to review
the status of jobs.

### Bulk Actions - File Upload

**CAUTION:** While not all of the fields are required to have data, the headers must be intact for
Privilege Secure to accurately identify the information in the sheet. CSV files should only be
edited in a text editor or an IDE, editing and saving a CSV in Excel can cause formatting problems.
Optionally, you can save the CSV as a Excel .xlsx file and it will upload fine.

In 2.18 Privilege Secure can support uploading a file to select machines. The file can either be a
copy of a QuickStart report OR it can be exported from the Systems Mgmt screen. The file format
accepted is either .csv OR .xlsx. All of the details do not need to be included for the systems page
export. Minimum viable example files for using "Select By File" have been attached at the bottom of
this article\*. This can be used to ensure the necessary information is included so Privilege Secure
can accurately identify the intended targets.

\*\*Currently bulk actions can only support domain joined machines so if an export is made that
includes any non-domain endpoints you will receive an error during upload indicating there was an
issue when attempting to identify a machine.

### Bulk Action Configuration Parameters

Configuration limits are available for bulk actions in the Configuration, Server screen

![screen_shot_2023-02-14_at_10](/images/privilegesecure/4.2/discovery/admin/systemmanagement/screen_shot_2023-02-14_at_10.03.04_am.webp)

These configurations avoid overloading the system with a large number of bulk actions.

\*\*Not all bulk actions can be completed on endpoints with an OS other than Windows. We intend to
include domain joined Linux and Mac in a future version.
