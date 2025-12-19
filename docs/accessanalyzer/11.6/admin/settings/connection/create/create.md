---
title: "Create a Connection Profile"
description: "Create a Connection Profile"
sidebar_position: 10
---

# Create a Connection Profile

Follow the steps to create a Connection Profile.

![Add Connection Profile](/images/accessanalyzer/11.6/admin/settings/connection/profile/addconnectionprofile.webp)

**Step 1 –** Click Add Connection profile at the top of the Connection view.

![Connection - Add Connection Profile](/images/accessanalyzer/11.6/admin/settings/connection/profile/connectionprofilename.webp)

**Step 2 –** A new profile displays in the list with a generic name. Provide a unique, descriptive
name in the Connection profile name textbox.

:::note
A good profile name should be chosen so that it does not need to be changed at a later
time. If the profile name is changed after being applied to job groups or jobs, it requires the user
to go back through all of those job groups or jobs and re-apply the Connection Profile.
:::


![Add User Credential](/images/accessanalyzer/11.6/admin/settings/connection/profile/addusercredential.webp)

**Step 3 –** Now it is time to add credentials to this profile. Click Add User credential and the
User Credentials window opens.

![User Credentials](/images/accessanalyzer/11.6/admin/settings/connection/profile/activedirectoryaccount.webp)

**Step 4 –** The window options change according to the value for the Selected Account Type field.
Select the appropriate account type and then provide the required information. The account types
are:

- [Active Directory Account for User Credentials ](/docs/accessanalyzer/11.6/admin/settings/connection/create/activedirectory.md)
- [Local Windows Account for User Credentials](/docs/accessanalyzer/11.6/admin/settings/connection/create/localwindows.md)
- [Unix Account for User Credentials](/docs/accessanalyzer/11.6/admin/settings/connection/create/unix.md)
- [SQL Authentication for User Credentials](/docs/accessanalyzer/11.6/admin/settings/connection/create/sql.md)
- [Task for User Credentials](/docs/accessanalyzer/11.6/admin/settings/connection/create/task.md)
- [Azure Active Directory for User Credentials](/docs/accessanalyzer/11.6/admin/settings/connection/create/entraid.md)
- [Dropbox for User Credentials](/docs/accessanalyzer/11.6/admin/settings/connection/create/dropbox.md)
- [Web Services (JWT) for User Credentials](/docs/accessanalyzer/11.6/admin/settings/connection/create/webservices.md)
- [Oracle for User Credentials](/docs/accessanalyzer/11.6/admin/settings/connection/create/oracle.md)
- [Exchange Modern Authentication for User Credentials](/docs/accessanalyzer/11.6/admin/settings/connection/create/exchangemodernauth.md)

See the individual account type sections for information on the fields. Then click OK.

![Error Message for Password](/images/accessanalyzer/11.6/admin/settings/connection/profile/passworddifferserror.webp)

:::note
If the entered passwords are not the same, an error message will pop-up after clicking OK
on the User Credentials window. Click OK on the error message and re-type the passwords.
:::


![User Credentials](/images/accessanalyzer/11.6/admin/settings/connection/profile/usercredentialslist.webp)

**Step 5 –** Repeat Steps 3-4 until the User Credentials list for this profile is complete.

When Enterprise Auditor authenticates to a target host, it looks at the value of the WindowsDomain
field in the Host Inventory for the target host. It then matches the first credential in the
Connection Profile which matches that domain. If authentication fails, it moves consecutively
through the User Credentials list. It will first match to all credentials listed for target host’s
domain, and then proceed through all other credentials until authentication is successful or there
are no more credentials to try.

:::info
Limit the User Credentials list to a minimal number per profile, especially when
considering that a successful authentication does not automatically mean that particular credential
has the appropriate level of permissions in order for the data collection to occur.
:::


![Arrange Priority](/images/accessanalyzer/11.6/admin/settings/connection/profile/moveupdown.webp)

There are Move Up and Move Down buttons for arranging priority within the User Credentials list.

![Apply local login credentials](/images/accessanalyzer/11.6/admin/settings/connection/profile/usewindowsaccountoption.webp)

**Step 6 –** (Optional): At the bottom of the Connection view, is the Use the Windows account that
Enterprise Auditor runs with before trying the user credentials above option. This option is per
Connection Profile. If checked, Enterprise Auditor applies the local login credentials prior to any
of the credentials saved to the Connection Profile.

:::note
If a data collector utilizes an applet, this option must be unchecked.
:::


**Step 7 –** When the user credentials have been added and ordered, click Save and then OK to
confirm the changes to the Connection Profile.

The new Connection Profile is now visible in the Profile list and available for use at the job group
or job level.

## Edit User Credentials within a Connection Profile

Follow the steps to edit user credentials within a Connection Profile.

![Edit Connection Profile](/images/accessanalyzer/11.6/admin/settings/connection/profile/editusercredentials.webp)

**Step 1 –** Select the Connection Profile to be modified from the Profile list. Remember, changing
the Connection Profile name results in breaking job groups or jobs that are assigned this profile.

**Step 2 –** Select the user credential to be edited from the User Credentials list. Click Edit.

![User Credentials](/images/accessanalyzer/11.6/admin/settings/connection/profile/selectaccounttype.webp)

**Step 3 –** Modify the information in the User Credentials window. For the password, choose between
the Use the existing password option or the Specify a new password below option. Click OK.

**Step 4 –** When the Connection Profile’s user credentials have been edited as desired, click Save
and then OK to confirm the changes to the Connection Profile.

The edited user credentials are now used for authentication to target hosts for this Connection
Profile.

## Delete a User Credential from a Connection Profile

Follow the steps to delete a user credential from a Connection Profile.

![Delete User Credentials](/images/accessanalyzer/11.6/admin/settings/connection/profile/deleteusercredentials.webp)

**Step 1 –** Select the Connection Profile to be modified from the Profile list. Remember, changing
the Connection Profile name results in breaking job groups or jobs that are assigned this profile.

**Step 2 –** Select the user credential to be edited from the User Credentials list. Click Delete.

![Confirmation message for deletion](/images/accessanalyzer/11.6/admin/settings/connection/profile/deleteusercredentialsconfirm.webp)

**Step 3 –** Click OK to confirm the deletion.

**Step 4 –** The selected credential is no longer visible in the User Credentials list. Click Save
and then OK to confirm the changes to the Connection Profile.

The deleted user credentials are no longer available for authentication to target hosts for this
Connection Profile.

## Set a Default Connection Profile

The default profile is marked with the green checkmark.

![defaultconnectionprofile](/images/accessanalyzer/11.6/admin/settings/connection/profile/defaultconnectionprofile.webp)

Follow the steps to set a new default Connection Profile.

![Set a Default Connection Profile](/images/accessanalyzer/11.6/admin/settings/connection/profile/setasdefaultconnectionprofile.webp)

**Step 1 –** Select the desired profile in the Connection Profile list and click Set as default.

**Step 2 –** The green checkmark moves. Click Save and then OK to confirm the changes.

This Connection Profile is now used as the default Connection Profile.

## Delete a Connection Profile

Follow the steps to delete a Connection Profile.

![Delete a Connection Profile](/images/accessanalyzer/11.6/admin/settings/connection/profile/deleteconnectionprofile.webp)

**Step 1 –** Select the profile from the Connection Profile list and click Delete.

![Confirmation message for deletion](/images/accessanalyzer/11.6/admin/settings/connection/profile/deleteconnectionprofileconfirm.webp)

**Step 2 –** Click OK to confirm the deletion.

**Step 3 –** The selected profile is no longer visible in the Connection Profiles list. Click Save
and then OK to confirm the changes.

The deleted Connection Profile is no longer available for authentication to target hosts.
