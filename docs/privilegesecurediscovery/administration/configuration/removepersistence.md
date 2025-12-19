---
title: "Remove Persistence on Machines"
description: "Remove Persistence on Machines"
sidebar_position: 290
---

# Remove Persistence on Machines

Remove Persistence on Machines

# Remove Persistence on Machines

## Overview

Once freeze mode has been implemented
([Freeze Mode](/docs/privilegesecurediscovery/requirements/technicalpreparation/freeze_mode.md)),
persistent access needs to be reduced. This should be done
in a risk-based approach, by targeting the groups that convey most access. This activity can be
split by
workstations/laptops and servers, if that suits the organization. The steps described in this
article
explain the steps that should be undertaken group by group to remove persistent access to
eliminate
lateral movement.

### Project Management Steps

The Active Directory group or groups to be targeted for removal of persistence should be decided.
This
could be done by targeting a specific team and hence the group(s) that they use for their access.
Once the group(s) have been decided, the people in those AD groups should be informed that change
is
being made. This communication should include:

- Date of the change
- Details of the change including the impacted AD group(s)
- Justification for the change
- Training information (this can be reference to presentations, in person training, videos etc)
- How users can request help

The organization may also have change managements gates that must be completed to allow the
change to be implemented. A checklist should be created to ensure that the following steps are
carried
out:

- Group(s) members have been informed of need to user Privilege Secure as of date X
- Users have been informed of training
- Users have been trained
- Users have been informed of who to call in the event of any issues
- Groups have been reviewed for any service accounts (including nested groups)
- Service accounts have been applied directly to the necessary machines (via group or individual)
  and set as persistent
- Excel upload created and reviewed
- Approval provided for group persistence to be removed
- Email for persistence removed once completed

### Review Group

The group(s) should now be reviewed for any service accounts that are exist within the group(s).
These
do not need to be removed from the group, but should be applied directly to the same machines that
the group exists on. This will ensure that the software or process that utilizes that service
account will
continue to run.

### Apply Service Accounts Directly to Machine

Applying these service accounts directly to the machines that they exist on as part of the
interactive
group can easily be done by Quickstart. The method for carrying this out is detailed in the
“Applying a
Service Account Directly to a Machine” article
([](https://remediant.zendesk.com/hc/en-us/articles/4995338773655-Applying-a-Service-Account-from-an-existing-AD-group-Directly-to-a-Machine)[Apply a Service Account from an existing AD group Directly to a Machine](/docs/privilegesecurediscovery/administration/configuration/applyserviceaccount.md)).

### Pull Quickstart File

Once the services have been mitigated, a Quickstart file should be obtained for the target
machines.
This should either cover all of the environment, or could be split between servers and
workstations.
Breaking this up too much can involve substantially more work and can lead to confusion during the
rollout (“should I use Privilege Secure or not for this machine”!).
The Excel spreadsheet is pulled using the following command from the Quickstart reporting folder

```
reports211.py --insecure
```

The Quickstart report script is likely to be different for the specific install.

![LScreenshot__3_.webp](/images/privilegesecure/4.2/discovery/admin/configuration/5099864805015_screenshot__3__543x307.webp)

This produces an Excel file with two tabs, Computer Data and Admin List.

### Update Quickstart File

Updating the excel file to remove persistence is easy. Using the Admin List tab, filter for the
group that
needs persistence to be reverted, in this case Domain Admins.

![LScreenshot_2022-03-29_094603.webp](/images/privilegesecure/4.2/discovery/admin/configuration/5099864805015_screenshot_2022-03-29_094603.webp)

Set the persistence column to FALSE.
Remove any formatting or filtering and save the file with a suitable filename to denote the change.

### Run Quickstart File

The file can then be uploaded using the following command from the folder that stores the
Quickstart
report file.

```
reports211.py --insecure -protect-mode-file apply_service_account_DATE.xlsx --dry-run
```

It is recommended to include the date and what the purpose of the excel file is expected to do
within
the file name. Use the --dry-run flag to check that file will make the intended changes. This will
remove the persistence and ensure that users who gain administrative access to machines using this
group must now use Privilege Secure.

## Appendix

Tips

- If Excel is unwieldly slow rows can be deleted for machines that have not been scanned. But,
  instead of filtering and deleting, sort based on the last_scanned column and then delete the
  unwanted rows. Sorting and deleting is many times faster for Excel. This can also resolve issues
  with Excel crashing. Another benefit is the upload back to Privilege Secure will be faster with
  fewer rows.
- Ensure that you remove ALL groups from persistence that have interactive accounts. However, ensure
  that any service accounts that exist in these groups (including nested groups) are applied
  directly to the machine or added to a new group and applied directly to the machine.
- Service accounts do not need to be removed from interactive groups (as long as they are applied
  and persisted separately). However this can be good cleanup.
- Reviewing service accounts to ensure that they are not set to be able to be used interactively
  during the review is time well spent as these can also convey lateral movement.
- Removing a group's persistence across ALL machines makes the change management much easier. i.e.
  As of this date all users of a given group must start using Privilege Secure for access. Breaking
  this into multiple sets of machines can cause confusion and also make the technical steps more
  challenging to track.

Excel Tips

For large Excel files use the following steps to shrink the size of the file allowing it to be
managed easier:

- Sort the Quickstart file on the User column (column D) in the Admin List tab
- Filter based on the same User column, excluding the target group
- Delete all the unfiltered rows (CTRL click the top row to exclude it from being deleted)
- Save the file. This will become the basis for applying service accounts and also the basis for
  removing persistence.

Version Requirements

All
