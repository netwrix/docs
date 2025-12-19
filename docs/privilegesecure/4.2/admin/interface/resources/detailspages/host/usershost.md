---
title: "Users Tab for Host"
description: "Users Tab for Host"
sidebar_position: 40
---

# Users Tab for Host

The Users tab shows information about the local users on the selected resource.

![Host Users Tab](/images/privilegesecure/4.2/accessmanagement/admin/policy/tab/resources/usershost.webp)

The Users tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Filter — Provides options to filter results based on a chosen criterion: Managed and Not Onboarded
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
  managed accounts. See
  [Password Reset Options Window](/docs/privilegesecure/4.2/admin/interface/resources/passwordresetoptions.md) topic for
  additional information.
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Name — Displays the name of the account
- User Name — Displays the sAMAccountName for the account
- Privilege — Level of privilege the account has on the resource
- Last Login — Date timestamp for the last time the user logged into the application
- Password Changed — Date timestamp for the last time the password was rotated
- Age — Number of days since the last credential rotation or from when the password was first
  created
- Managed — Indicates if the account is managed by Privilege Secure. See the
  [Credentials Page](/docs/privilegesecure/4.2/admin/interface/credentials/credentials.md) topic for additional information.
- Rotate Start | End — Indicates if the account will have a password rotation on session start, end,
  both, or neither
- Dependents — Number of scheduled tasks or Windows services using this account.
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
- Schedule — Shows the schedule policy used to change the password of a manged account, the
  credential rotation. See the [Schedule Policies Page](/docs/privilegesecure/4.2/admin/interface/platforms/schedulepolicies/schedulepolicies.md) topic for
  additional information.
- Complexity — Indicates the password complexity policy used for the account. See the
  [Password Complexity Page](/docs/privilegesecure/4.2/admin/interface/platforms/passwordcomplexity/passwordcomplexity.md) topic for additional information.

The table columns can be resized and sorted in ascending or descending order.
