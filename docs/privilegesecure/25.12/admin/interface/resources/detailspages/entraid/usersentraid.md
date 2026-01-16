---
title: "Users Tab for Microsoft Entra ID"
description: "Users Tab for Microsoft Entra ID"
sidebar_position: 20
---

# Users Tab for Microsoft Entra ID

The Users tab for Microsoft Entra ID (formerly Azure AD) shows information about the users on the
selected resource.

:::note
Users in hybrid environments will be associated with the on-premises Active Directory
domain resource (if the on-premises domain has been synced by Privilege Secure). This view will show
cloud-only EntraID users.
:::


![Users Tab Entra ID](/images/privilegesecure/25.12/accessmanagement/admin/policy/tab/resources/usersazuread.webp)

The Users tab has the following features:

- Manage — Set the selected account to be managed by Privilege Secure. This button is only available
  when the account Managed Type is Standard or Internal. For an Internal account, a pop up window
  will display.. Password rotation can be set to automatic or manual for managed accounts.
- Unmanage — Remove the account from being managed by Privilege Secure
- Schedule Rotation — Add the credential rotation task to the queue. This button is only available
  when the Method is Automatic managed.
- Verify — Checks that the credentials for the selected account match the credentials set by
  Privilege Secure
- View History — Opens the Password History window to displays the password history for the account
- Password Reset Options — Customize password rotation options. This option is only available for
  managed accounts. 
- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Name — Displays the name of the account
- User Principal Name — Displays the UPN value for the account
- Last Login — Date timestamp for the last time the user logged into the application
- Password Last Set — Date timestamp for the last time the password was set
- Age — Number of days since the last credential rotation or from when the password was first
  created
- Managed — Indicates if the account is managed by Privilege Secure. See the
  [Credentials Page](/docs/privilegesecure/25.12/admin/interface/credentials/credentials.md) topic for additional information.
- Rotate Start | End — Indicates if the account will have a password rotation on session start, end,
  both, or neither
- Status — Indicates if the account credentials have been verified by Privilege Secure. See the
  [Platforms Page](/docs/privilegesecure/25.12/admin/interface/platforms/overview.md) topic for additional information on configuring
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

The table columns can be resized and sorted in ascending or descending order.
