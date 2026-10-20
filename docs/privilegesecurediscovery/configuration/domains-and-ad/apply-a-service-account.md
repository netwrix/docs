---
title: "Apply a Service Account to a Machine Directly"
description: "Apply a service account that belongs to an interactive Active Directory group directly to machines before you remove group persistence."
sidebar_position: 30
---

:::warning[Screenshot needs attention: remove before publishing]
TODO: /images/privilegesecure/4.2/discovery/admin/configuration/4995338773655_1_452x510.webp: shows a service account in Domain Admins in an older UI. Confirm it contains no customer data and re-capture in the 26.09.1 UI.

TODO: /images/privilegesecure/4.2/discovery/admin/configuration/4995338773655_3.webp and 4995338773655_2.webp: older UI captures. Re-capture in the 26.09.1 UI.
:::

Interactive accounts shouldn't have standing privilege. They should use Netwrix Privilege Secure for Discovery to request administrator access when needed, and the groups that contain them should be non-persistent. Sometimes interactive accounts and service accounts are members of the same group. If you remove persistence from such a group, you break any process or application that uses the service account. This page shows how to keep the service account working by applying it directly to the machines that need it.

## Approach

When a group contains both interactive and service accounts, apply the service accounts directly to the required machines, or add them to a separate group and apply that group to the machines. You don't need to remove the service account from the original group. You can remove it later to keep the accounts organized.

## Prerequisites

- The QuickStart reporting script is installed. See [Install the QuickStart tools](../bulk-onboarding/install-the-quickstart-tools.md).
- Familiarity with the report options in [Report on and update systems](../bulk-onboarding/report-and-update-systems.md).

## Review the groups

1. Review the groups that you plan to remove persistence from and find any service accounts they contain.
2. Check nested groups for service accounts too.
3. Decide for each service account whether to apply it directly or through a new group of service accounts. Applying it directly is typical.

In the following example, a service account is a member of the Domain Admins group. Domain Admins is an interactive group and should contain only the small set of accounts that administer the domain.

![The Administrator Accounts list for a system, showing a service account in the Domain Admins group](/images/privilegesecure/4.2/discovery/admin/configuration/4995338773655_1_452x510.webp)

Every machine that has Domain Admins in its local Administrators group needs the service account applied directly. If you remove persistence from Domain Admins first, the group is removed from the endpoint and the software that uses the service account stops working.

## Apply the account to a single machine

To apply the account to one machine, add it to the machine's account inventory in the UI. The product applies it during the next scan cycle, or immediately if you start a rescan.

![The Administrator Accounts pane with the option to add an account to the inventory](/images/privilegesecure/4.2/discovery/admin/configuration/4995338773655_3.webp)

For many machines, use the QuickStart script.

## Apply the account to many machines

### Pull the QuickStart report

1. In the folder that contains the QuickStart reporting script, run the report:

   ```bash
   reports.py --insecure
   ```

   The script name depends on your installation. The command produces an Excel file with two tabs, **Computer Data** and **Admin List**.

   ![An Excel workbook with the Computer Data and Admin List tabs](/images/privilegesecure/4.2/discovery/admin/configuration/4995338773655_2.webp)

### Update the report

1. On the **Computer Data** tab, fill the **Provision Account** column with a formula that adds the service account to the machines that have the interactive group.

   The following formula finds every machine that has **Domain Admins** in the local Administrators group and sets the value `Service Account;true` for it. Replace `Domain Admins` and `Service Account` with your group and service account names.

   ```text
   =IF(ISNA(INDEX('Admin List'!D:D,MATCH(1,(B2='Admin List'!B:B)*("Domain Admins"='Admin List'!D:D),0))),"","Service Account;true")
   ```

2. Enter the formula as an array formula with `Ctrl` + `Shift` + `Enter`. Curly braces appear around the formula. In Microsoft 365, you can press `Enter`.
3. Copy the formula down the whole column.
4. Copy the **Provision Account** column and paste it as values to remove the formula. Formulas, extra columns, and formatting can cause the upload to fail.
5. Filter and delete rows if you want to target only workstations or only servers.

To add more than one service account, separate the entries with commas, as in `Service Account;true,Service Account2;true`.

### Upload the report

1. Save the file with a name that includes the date and its purpose, such as `apply_service_account_<date>.xlsx`.
2. From the folder that contains the QuickStart script, run the upload with `--dry-run` to check the changes:

   ```bash
   reports.py --insecure --protect-mode-file apply_service_account_<date>.xlsx --dry-run
   ```

3. When the dry run shows the changes you intend, run the command again without `--dry-run`.

## Tips for large reports

If Excel is slow, delete the rows for machines that haven't been scanned. Sort by the `last_scanned` column and delete the unwanted rows. Sorting and deleting is much faster than filtering and deleting, and it can prevent Excel from crashing. A smaller file also uploads faster.

To shrink a large report:

1. On the **Admin List** tab, sort the file by the **User** column (column D).
2. Filter the **User** column to exclude the target group.
3. Delete all the rows that remain visible. Hold `Ctrl` and select the top row to exclude it from the deletion.
4. Save the file. Use it as the basis for applying service accounts and for removing persistence.

To build the upload file from the shrunken report:

1. Add the following formula to the **Provision Account** column (column AD) on the **Computer Data** tab:

   ```text
   =IF(ISNA(INDEX('Admin List'!$D$1:$D$40000,MATCH(1,(B2='Admin List'!$B$1:$B$40000)*("TARGET_GROUP"='Admin List'!$D$1:$D$40000),0))),"","Service Account;true,Service Account2;true")
   ```

2. Replace `TARGET_GROUP` with the group that contains the service accounts.
3. Replace the service account names with the accounts to apply.
4. Change `40000` to cover the number of rows on the **Admin List** tab.
5. Press `Ctrl` + `Shift` + `Enter` to apply the formula as an array formula, and then copy it to the bottom of the **Computer Data** tab.

## Next step

After you apply the service accounts, [remove persistence on machines](./remove-persistence.md).
