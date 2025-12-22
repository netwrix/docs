---
title: "Add Credentials Window"
description: "Add Credentials Window"
sidebar_position: 20
---

# Add Credentials Window

The Add Credentials window provides a list of Credentials that have been onboarded and are not
already present in the collection. Credentials are onboarded in the
[Credentials Page](/docs/privilegesecure/4.2/admin/interface/credentials/credentials.md).

![Add Credentials Window](/images/privilegesecure/4.2/accessmanagement/admin/policy/add/addcredentials.webp)

The window has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Filter — Provides options to filter results based on a chosen criterion: Internal, Standard, and
  Service
- Available Credentials — Shows all accounts available for credential management
- Credentials to Add — Shows selected credentials
- Add button — Closes the window

Both tables have the following columns:

- Checkbox — Check to select one or more items
- Account — Name of the account
- Resource — Name of the resource that the account is on
- Platform — Displays the type of platform, which defines the resource
- Method — Indicates how the account is managed:

    - Automatic — Credential rotation is managed by Privilege Secure according to the change policy
      for that platform type. See the [Platforms Page](/docs/privilegesecure/4.2/admin/interface/platforms/overview.md) topic for
      additional information.
    - Manual — Credential rotation must be initiated manually with the Rotate Service Account
      button, or the credential must be manually updated on both the resource and in Privilege
      Secure. See the [Service Accounts Page](/docs/privilegesecure/4.2/admin/configuration/serviceaccounts/serviceaccounts.md)
      section for information on updating credentials for Internal service accounts.
    - Not Managed — Not currently managed by Privilege Secure and no credentials have ever been
      stored

    :::note
    See the [Rotation Methods](/docs/privilegesecure/4.2/admin/interface/credentials/credentialrotationmethod.md) topic for additional
    information.
    :::


- Managed Type — Type of managed account:

    - Standard — Local or domain user account, including managed users created by activity sessions
    - Internal — Internal service account used by Privilege Secure with no dependencies. See the
      [Service Accounts Page](/docs/privilegesecure/4.2/admin/configuration/serviceaccounts/serviceaccounts.md) topic for additional
      information.
    - Service — Local or domain service account with one or more dependencies. Includes Internal
      service accounts with one or more dependencies.

- Dependents — Number of scheduled tasks or Windows services using this account
- Password Changed — Date timestamp for the last time the password was rotated
- Age — Number of days since the last credential rotation or from when the password was first
  created
- Status — Indicates if the account credentials have been verified by Privilege Secure. See the
  [Platforms Page](/docs/privilegesecure/4.2/admin/interface/platforms/overview.md) topic for additional information on configuring
  a verification schedule.

    - Unspecified — Verification check has not run
    - Verified — Confirmed the credentials match the value stored in Privilege Secure
    - Mismatch — Credentials do not match the value stored in Privilege Secure. This status only
      appears when the Reset on Mismatch option is not enabled.
    - Changed — Credentials were successfully updated to match the value stored in Privilege Secure.
      This status only appears when the Reset on Mismatch option is enabled.
    - Failed — Attempt to update the credentials to match the value stored in Privilege Secure was
      unsuccessful. This status only appears when the Reset on Mismatch option is enabled.

- Last Checked — Date timestamp of the last verification check
- Next Change — Date timestamp for the next credential password rotation

## Add Credentials to a Credential Group

Follow the steps to add credentials to a credential group.

**Step 1 –** Navigate to the **Policy** > **Credentials** > **Credential Groups** page.

**Step 2 –** In the Credential Groups list, select the name of the credential group.

**Step 3 –** In the Credential Groups table, click **Add Credentials**.

**Step 4 –** Filter by **Internal**, **Standard**, or **Service**, and use the Search feature.

**Step 5 –** To add a credential to the group, click the checkbox in the Available Credentials
table.

**Step 6 –** (Optional) Click the checkbox in the Credentials to Add table to move it back to the
Available Credentials table.

**Step 7 –** Click **Add** to add the credential(s) to the group.

The new credentials are added to the applicable group.

## Add Credentials to a Policy Override

Follow the steps to add credentials to a Credential Policy Override. In order for an account to be
added to add credentials window, a credential must be managed with a method of **Automatic**. Only
one account can be added to a Credential Policy Override at a time. See the
[Manage Internal Service Accounts](/docs/privilegesecure/4.2/admin/interface/credentials/manageinternalserviceaccount.md) topic for additional
information.

**Step 1 –** Navigate to the **Policy** > **Credentials** > **Credential Groups** page.

**Step 2 –** In the Credential Groups list, select the name of the credential policy override.

**Step 3 –** In the Credential Policy Override table, click **Add Credentials**.

**Step 4 –** To add a credential to the policy override, click the checkbox in the Available
Credentials table.

**Step 5 –** (Optional) Click the checkbox in the Credentials to Add table to move it back to the
Available Credentials table.

**Step 6 –** Click **Add** to add the credential(s) to the policy override.

The new credentials are added to the applicable Credential Policy Override.
