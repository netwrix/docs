---
title: "Apply a service account to a machine directly"
description: "Apply a service account that belongs to an interactive Active Directory group directly to Windows machines before you remove group persistence."
sidebar_position: 30
---

Interactive accounts shouldn't have standing privilege. They should use Netwrix Privilege Secure for Discovery to request administrator access when needed, and the groups that contain them should be non-persistent. Sometimes interactive accounts and service accounts are members of the same group. If you remove persistence from such a group, you break any process or application that uses the service account. This page shows how to keep the service account working by applying it directly to the machines that need it.

## Approach

When a group contains both interactive and service accounts, apply the service accounts directly to the required machines, or add them to a separate group and apply that group to the machines. You don't need to remove the service account from the original group. You can remove it later to keep the accounts organized.

## Review the groups

1. Review the groups that you plan to remove persistence from, and find any service accounts they contain.
2. Check nested groups for service accounts too.
3. Decide for each service account whether to apply it directly or through a new group of service accounts. Applying it directly is typical.

In the following example, a service account is a member of the Domain Admins group. Domain Admins is an interactive group and should contain only the small set of accounts that administer the domain. Every machine that has Domain Admins in its local Administrators group needs the service account applied directly. If you remove persistence from Domain Admins first, the group leaves the endpoint and the software that uses the service account stops working.

## Apply the account to a single machine

1. Select **Access** > **Grant Access**, and open the machine.
2. In **Administrator Accounts**, select **Add Account**.
3. In **User or Group**, enter the service account. Set **Access Permission** to **Persistent**, and save.

On a system in protect mode, the product adds the account to the local Administrators group during the next scan, or immediately if you select **Rescan**. On a system that isn't in protect mode, the product records the account in its inventory but doesn't add it to the system. If the account is already in the inventory, the product rejects the request with the message `Administrator already exists in inventory`. In that case, select **Action** > **Set Persistent** in the row of the account instead.

## Apply the account to many machines

Bulk Actions apply the account to the Windows systems that you select. For Linux systems, use the Quickstart tool as described in [Apply the account with Quickstart](#apply-the-account-with-quickstart).

1. Select **Management** > **Systems**, and then select **Show Filters**.
2. In **Account with access**, enter the interactive group, for example `Domain Admins`, and select it. The list shows the systems that have the group in their account inventory.

   ![The Systems filters with the Account with access filter set to a group](/images/privilegesecurediscovery/domains-and-ad/domains-systems-account-filter.webp)

3. Select the systems. You can select up to 1,000 systems at a time. To limit the change to servers or to workstations, filter further, for example with **Operating System**.
4. Select **Bulk Actions**, select **Select Action**, and then select **Add/Update Account**.
5. In **User or Group**, enter the service account. Set **Access Permission** to **Persistent**, and select **Save**.

   ![The Add or Update Account bulk action with the Persistent access permission](/images/privilegesecurediscovery/domains-and-ad/domains-bulk-add-update-account.webp)

6. Select **Execute Bulk Action**, and follow the job on **Monitor** > **Jobs**.

On the selected Windows systems that don't have the account, the action adds it to the inventory as a persistent account. The next scan adds it to the local Administrators group of each system in protect mode. On systems that already have the account in their inventory, the action sets it to persistent. To add more than one service account, run the action again for each account.

## Apply the account with Quickstart

Use the Quickstart reporting tool for Linux systems or for more than 1,000 systems. Install it first. See [Install the Quickstart tools](../bulk-onboarding/install-the-quickstart-tools.md), and see [Report on and update systems](../bulk-onboarding/report-and-update-systems.md) for the report options.

1. Run the report. It creates an Excel file with the **Computer Data** and **Admin List** sheets.

   ```bash
   python reports.py --insecure
   ```

2. On the **Computer Data** sheet, fill the **Provision Account** column for the machines that have the interactive group. The following array formula finds every machine that has `Domain Admins` and sets the value `Service Account;true`. Replace `Domain Admins` and `Service Account` with your names. The formula uses the current column positions of the report: **system** in column B and **user** in column D of **Admin List**, and **cn** in column B of **Computer Data**. Check the header row first.

   ```text
   =IF(ISNA(INDEX('Admin List'!D:D,MATCH(1,(B2='Admin List'!B:B)*("Domain Admins"='Admin List'!D:D),0))),"","Service Account;true")
   ```

3. Enter the formula as an array formula with `Ctrl` + `Shift` + `Enter`, and copy it down the column. In Microsoft 365, press `Enter`.
4. Copy the **Provision Account** column and paste it as values. Formulas, extra columns, and formatting can make the upload fail.
5. To add more than one service account, separate the entries with commas, as in `Service Account;true,Service Account2;true`.
6. Save the file, and preview the upload:

   ```bash
   python reports.py --insecure --protect-mode-file apply_service_account_<date>.xlsx --dry-run
   ```

7. When the preview shows the changes that you intend, run the command again without `--dry-run`.

## Next step

After you apply the service accounts, [remove persistence on machines](./remove-persistence.md).
