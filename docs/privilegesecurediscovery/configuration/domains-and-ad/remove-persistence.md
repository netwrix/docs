---
title: "Remove persistence on machines"
description: "Remove persistent administrator access for interactive Active Directory groups so users must elevate access through the product."
sidebar_position: 40
---

After you enable [Freeze mode](../onboard-systems/freeze-mode.md), reduce persistent access in a risk-based way. Start with the groups that convey the most access. You can handle workstations and laptops separately from servers if that suits your organization. Removing persistent access for each group in turn limits lateral movement.

## Prerequisites

- Freeze mode is in place. See [Freeze mode](../onboard-systems/freeze-mode.md).
- The service accounts that the group contains work without it. See [Apply a service account to a machine directly](./apply-a-service-account.md).

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
   - You reviewed the groups, including nested groups, for service accounts.
   - You applied the service accounts directly to the necessary machines, either through a group or individually, and set them as persistent.
   - Your change process approved the removal of group persistence.
   - You send a notification when you remove the persistence.

## Remove persistence with Bulk Actions

Remove a group's persistence from all machines at once. A single change date, such as "from this date, all users of this group must use Privilege Secure for Discovery," is easier to manage and communicate than several partial changes.

1. Select **Management** > **Systems**, and then select **Show Filters**.
2. In **Account with access**, enter the group, for example `Domain Admins`, and select it.

   ![The Systems filters with the Account with access filter set to a group](/images/privilegesecurediscovery/domains-and-ad/domains-systems-account-filter.webp)

3. Select the check box in the table header. If the filter matches more than 1,000 systems, select **Select all systems based on this filter**.
4. Select **Bulk Actions**, select **Select Action**, and then select **Add/Update Account**.
5. In **User or Group**, enter the same group. Set **Access Permission** to **Just-In-Time**, and select **Save**.

   ![The Add or Update Account bulk action](/images/privilegesecurediscovery/domains-and-ad/domains-bulk-add-update-account.webp)

6. Select **Execute Bulk Action**, and follow the job on **Monitor** > **Jobs**.

On each selected system that already has the group in its account inventory, the action sets the group to non-persistent. The action applies to Windows systems only. For Linux systems, use the Quickstart tool in the next section. The members of the group must now use Privilege Secure for Discovery on every system that you changed. Tell them that the change is done, and give them the training and the contact information for problems.

## Remove persistence with Quickstart

Use the Quickstart reporting tool for Linux systems or to review the changes in Excel before you apply them. Install it first. See [Install the Quickstart tools](../bulk-onboarding/install-the-quickstart-tools.md).

1. Run the report. It creates an Excel file with the **Computer Data** and **Admin List** sheets.

   ```bash
   python reports.py
   ```

2. On the **Admin List** sheet, filter the **user** column for the group, such as `Domain Admins`.
3. In the **Persistent** column, the upload column at the right of the sheet, enter `FALSE` for each row. The lowercase **persistent** column shows the current value, and the upload ignores it.
4. Save the file with a name that shows the change, such as `remove_persistence_<date>.xlsx`. The upload skips rows that the filter hides, so you can leave the filter on.
5. Preview the upload:

   ```bash
   python reports.py --protect-mode-file remove_persistence_<date>.xlsx --dry-run
   ```

6. When the preview shows the changes that you intend, run the command again without `--dry-run`.

If the tool stops with `Use --insecure option to ignore certificate checks`, the server uses a self-signed certificate. See [Report and update systems](../bulk-onboarding/report-and-update-systems.md#command-line-arguments) before you add `--insecure`.

If Excel is slow, delete the **Admin List** rows for other accounts. A blank **Persistent** cell changes nothing, so you can also leave them.

## Tips

- Remove persistence from all groups that contain interactive accounts. Apply any service accounts in those groups, including nested groups, directly to the machine or add them to a new group and apply that group to the machine.
- Leave service accounts in the interactive groups if you apply and persist them separately. Removing them is optional cleanup.
- During the review, check that the service accounts can't sign in interactively. Interactive service accounts can also convey lateral movement.
- Repeat the process group by group, and keep a record of the groups that you moved away from persistence.
