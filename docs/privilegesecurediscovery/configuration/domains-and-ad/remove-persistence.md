---
title: "Remove Persistence on Machines"
description: "Remove persistent administrator access for interactive Active Directory groups so users must elevate access through the product."
sidebar_position: 40
---

:::warning[Screenshot needs attention: remove before publishing]
TODO: /images/privilegesecure/4.2/discovery/admin/configuration/5099864805015_screenshot__3__543x307.webp and 5099864805015_screenshot_2022-03-29_094603.webp: 2022 captures from an older UI that may show lab data. Re-capture in the 26.09.1 UI and confirm that no real names appear.
:::

After you enable [Freeze Mode](../onboard-systems/freeze-mode.md), reduce persistent access in a risk-based way. Start with the groups that convey the most access. You can handle workstations and laptops separately from servers if that suits your organization. Removing persistent access for each group in turn limits lateral movement.

## Prerequisites

- Freeze Mode is in place. See [Freeze Mode](../onboard-systems/freeze-mode.md).
- The QuickStart reporting script is installed. See [Install the QuickStart tools](../bulk-onboarding/install-the-quickstart-tools.md).

## Plan the change

1. Decide which Active Directory groups to target. You can target a specific team and the groups that team uses for access.
2. Tell the members of those groups about the change. Include the following:
   - The date of the change.
   - The details of the change, including the affected groups.
   - The justification for the change.
   - Training information, such as presentations, in-person training, or videos.
   - How users can request help.
3. Complete any change management gates that your organization requires.
4. Use the following checklist to track the work:
   - Group members know that they must use Privilege Secure for Discovery from a given date.
   - Users know about the training, and they have completed it.
   - Users know whom to contact if they have problems.
   - The groups, including nested groups, are reviewed for service accounts.
   - Service accounts are applied directly to the necessary machines, either through a group or individually, and set as persistent.
   - The Excel upload file is created and reviewed.
   - Approval is given to remove group persistence.
   - A notification is sent when the persistence is removed.

## Review the groups

Review the groups for service accounts. You don't need to remove the service accounts from the groups. Apply them directly to the same machines that the group applies to, so the software or process that uses each service account keeps running.

## Apply service accounts directly to machines

Use the QuickStart script to apply the service accounts directly to the machines. See [Apply a service account to a machine directly](./apply-a-service-account.md).

## Pull the QuickStart report

After you protect the service accounts, get a QuickStart report for the target machines. The report can cover the whole environment or can be split between servers and workstations. Splitting it into many parts creates more work and can cause confusion during the rollout, such as users wondering whether to use the product for a given machine.

1. In the folder that contains the QuickStart reporting script, run the report:

   ```bash
   reports.py --insecure
   ```

   The script name depends on your installation. The command produces an Excel file with two tabs, **Computer Data** and **Admin List**.

   ![The Computer Data and Admin List tabs of the QuickStart report](/images/privilegesecure/4.2/discovery/admin/configuration/5099864805015_screenshot__3__543x307.webp)

## Update the report

1. On the **Admin List** tab, filter for the group that needs persistence removed, such as Domain Admins.

   ![The Admin List tab filtered to the Domain Admins group](/images/privilegesecure/4.2/discovery/admin/configuration/5099864805015_screenshot_2022-03-29_094603.webp)

2. Set the **persistent** column to `FALSE`.
3. Remove any formatting and filters.
4. Save the file with a name that shows the change, such as `remove_persistence_<date>.xlsx`.

## Upload the report

1. From the folder that contains the QuickStart script, run the upload with `--dry-run` to check the changes:

   ```bash
   reports.py --insecure --protect-mode-file remove_persistence_<date>.xlsx --dry-run
   ```

2. When the dry run shows the changes you intend, run the command again without `--dry-run`.

The upload removes the persistence. Users who gain administrative access to the machines through the group must now use Privilege Secure for Discovery.

## Tips

- Remove persistence from all groups that contain interactive accounts. Apply any service accounts in those groups, including nested groups, directly to the machine or add them to a new group and apply that group to the machine.
- Leave service accounts in the interactive groups if you apply and persist them separately. Removing them is optional cleanup.
- During the review, check that the service accounts can't sign in interactively. Interactive service accounts can also convey lateral movement.
- Remove a group's persistence from all machines at once. A single change date, such as "from this date, all users of this group must use Privilege Secure for Discovery," is easier to manage and communicate than several partial changes.
- If Excel is slow, delete the rows for machines that haven't been scanned. Sort by the `last_scanned` column and delete the unwanted rows. See [Apply a service account to a machine directly](./apply-a-service-account.md) for the steps to shrink a large report.
