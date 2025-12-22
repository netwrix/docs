---
title: "Credential Policy Overrides Page"
description: "Credential Policy Overrides Page"
sidebar_position: 70
---

# Credential Policy Overrides Page

The Credential Policy Overrides page is accessible from the Policy Navigation pane under Credentials
and displays the configured Credential Policy Overrides. If a credential is added to a Credential
Policy Override, that credential's scheduled change policy and verification schedule will be
inherited from the Credential Policy Override, rather than being inherited from the credential's
platform.

![Credential Policy Overrides Page](/images/privilegesecure/4.2/accessmanagement/admin/policy/page/credentialpolicyoverridepage.webp)

The pane on the left side of the page displays a list of the configured Credential Policy Overrides.
This pane has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Blue + button — Create a new credential group. See the
  [Add Credential Policy Override](/docs/privilegesecure/4.2/admin/interface/credentials/credentialpolicyover/credentialpolicyoverrides_1.md) topic for additional
  information.
- Trashcan icon — Deletes the policy. Icon appears when policy is hovered over. A confirmation
  window will display.

The selected access policy details display at the top of the main pane:

- Name — Displays the name of the policy
- Description — Description of the policy

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

The table has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Add Credentials — Opens the Add Credentials window. See the
  [Add Credentials Window](/docs/privilegesecure/4.2/admin/interface/credentials/credentialgroups/addcredentials.md) topic for additional
  information.
- Remove — Removes the selected item
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Account — Name of the account. The following icons may also appear in this column:

    - Clipboard icon — Copies the password for the selected account
    - Information icon — Opens the View Password window to view the password and copy it to the
      clipboard. The window stays open for 20 seconds.

- Resource — Name of the resource that the account is on
- Password Changed — Date timestamp for the last time the password was rotated
- Age — Number of days since the last credential rotation or from when the password was first
  created
- Status — Indicates if the account credentials have been verified by Privilege Secure. See the
  [Platforms Page](/docs/privilegesecure/4.2/admin/interface/platforms/overview.md) topic for additional information on configuring a
  verification schedule.

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

The table columns can be resized and sorted in ascending or descending order.
