---
title: "Account Dependencies Window"
description: "Account Dependencies Window"
sidebar_position: 30
---

# Account Dependencies Window

The Account Dependencies window shows all of the dependent services and scheduled tasks for the
selected service account.

![Account Dependencies Window](/images/privilegesecure/4.2/accessmanagement/admin/policy/window/credentials/accountdependencies.webp)

The window has the following details displayed at the top:

- Account Name — Displays the sAMAccountName for the account
- Resource — Name of the resource where the account resides
- Platform — Displays the type of platform, which defines the resource
- Last Changed — Date timestamp for the last time the password was changed
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

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

The window has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Change Now — Initiate credential rotation for each dependent service and scheduled task
- Rollback — Rolls back the credentials to the previous state
- Pause — Puts the scheduled task on pause.
- Resume — Resumes the scheduled task after being paused.
- Undo — Revert changes made to the credentials.
- Rescan Resources — Scans resources for services and scheduled tasks dependent on the selected
  service account
- Ready to Scan — Opens the Select Resources to Scan window. See the topic for additional
  information.
- Cancel — Closes the window
- Refresh — Reload the information displayed

The window has the following columns:

- Checkbox — Check to select one or more items
- Resource — Name of the resource that the account is on
- Type — Type of managed account
- Name — Displays the short name of the service
- Last Scan — Date timestamp for the last time the resource was scanned
- Last Change — Date timestamp for the last time the password was changed
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

The table columns can be resized and sorted in ascending or descending order.

## Rotate Service Account Credentials

Follow the steps to update the service account password and then update all Windows services and
Scheduled tasks that run as the at account with the new password.

**Step 1 –** Navigate to the **Dashboards** > **Credentials** page.

**Step 2 –** In the Credentials table, select the desired account. You can apply the Type filter of
Service to find all service accounts with dependencies.

**Step 3 –** Select the checkbox for the service account for the rotation.

**Step 4 –** Click **Rotate Service Account** to open the Account Dependencies window.

**Step 5 –** Click **Change Now** to initiate credential rotation.

- Privilege Secure will cycle through each dependent service and scheduled task.

Credential rotation for the selected account is complete.
