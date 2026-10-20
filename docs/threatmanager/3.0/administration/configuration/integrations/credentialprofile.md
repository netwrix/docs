---
title: "Credential Profile Page"
description: "Credential Profile Page"
sidebar_position: 50
---

# Credential Profile Page

The Credential Profile page within the Integrations interface lists all of the credentials used by
the application to complete tasks. These credentials are securely stored.

![Integrations interface on the Credential Profile page](/images/threatmanager/3.0/administration/configuration/integrations/page_2.webp)

The table displays the user name for each profile. To view profile details or make modifications,
select a profile from the table or under Credential Profile in the navigation pane.

See the [Application Server Requirements](/docs/threatmanager/3.0/requirements/server.md) topic for information on
permission requirements for each type of task.

**Best Practice Recommendation**

It is a best practice to:

- Create one Credential Profile per domain for Active Directory Sync purposes
- Create a Credential Profile with Writer permissions to the shared folder where subscription
  exports are stored

## Add a Credential Profile

**Step 1 –** Use the gear icon in the upper right corner of the console to open the Configuration
menu. Then select **Integrations** to open the Integrations interface.

**Step 2 –** On the Integrations interface, click Add New Integration in the navigation pane. The
Add New Integration window opens.

![Add New Integration window with Credential Profile type selected](/images/threatprevention/7.5/reportingmodule/configuration/integrations/credentialprofile.webp)

**Step 3 –** In the Type dropdown menu, select Credential Profile.

**Step 4 –** Enter the following information:

- Name – Provide a unique, descriptive name for the Credential Profile
- Description – Provide a description for the Credential Profile
- Platform – Select the account type for the credential:

    - SQL – For SQL Server accounts
    - Windows – For local and Active Directory accounts

- User Name – Enter the account user name in the required format. For Windows accounts, it is:
  [DOMAIN]\[USERNAME], e.g. NWXTech\svc-netwrix
- Password – Enter the password for the credential

**Step 5 –** Click Add. The Add New Integration window closes.

The Credential Profile is listed in the Integrations navigation pane. Repeat the process to add
additional Credential Profiles.

## Credential Profile Details

**Step 1 –** Use the gear icon in the upper right corner of the console to open the Configuration
menu. Then select **Integrations** to open the Integrations interface.

**Step 2 –** On the Integrations interface, click **Credential Profile** in the navigation pane to
view a list of the already created Credential Profiles, if any.

**Step 3 –** Select a Credential Profile from the table or the navigation pane to view its details.

![Integrations interface displaying the details for a Credenital Profile](/images/threatmanager/3.0/administration/configuration/integrations/details_2.webp)

Select the profile from the list to see details and modification options:

- Name and Description – The box at the top displays the name and description of the profile

    - Edit – The edit button in the upper right corner of the box changes those fields from
      read-only to editable. See the Edit Profile topic for additional information.
    - Delete – The delete button in the upper right corner of the box opens the Delete Profile
      window to confirm the action

- Credentials – This section displays the credentials

    - Edit Credential – The edit button to the right of the credentials opens the Credentials
      Settings window, where you canupdate the Platform, User Name, or Password. See the Edit
      Credential topic for additional information.
    - Delete Credential – The delete button to the right of the credentials opens the Delete
      Credential window to confirm the action
    - Add Credential – Use this button to add additional credentials to this profile. This
      maybe applicable for action tasks. See the Add Additional Credential to a Profile topic for
      additional information.

## Edit Profile

**Step 1 –** Use the gear icon in the upper right corner of the console to open the Configuration
menu. Then select **Integrations** to open the Integrations interface.

**Step 2 –** On the Integrations interface, click **Credential Profile** in the navigation pane to
view a list of the already created Credential Profiles, if any.

**Step 3 –** Select a Credential Profile from the table or the navigation pane.

**Step 4 –** Click the **Edit** button in the upper right corner of the name and description box.

![Name and Description box for a Credential Profile in Edit mode](/images/threatprevention/7.5/reportingmodule/configuration/integrations/editprofile.webp)

**Step 5 –** To modify the profile name, type in the top field.

**Step 6 –** To modify the profile description, type in the bottom field.

**Step 7 –** Click the **Save** button.

The Credential Profile name and/or description have been modified.

## Edit Credential

Use this procedure when the account password needs to be updated.

**Step 1 –** On the Integrations interface, click **Credential Profile** in the navigation pane to
view a list of the already created Credential Profiles, if any. Select a Credential Profile.

**Step 2 –** In the Credentials box, click the edit button to the right of the credential. The
Credential Settings window opens.

![Credential Settings window](/images/threatprevention/7.5/reportingmodule/configuration/integrations/credentialsettingswindow.webp)

**Step 3 –** To edit the platform type, select either SQL or Windows from the **Platform** dropdown
menu.

**Step 4 –** To edit the account user name, enter the account user name in the required format of
[DOMAIN]\[USERNAME], e.g. NWXTech\svc-netwrix.

**Step 5 –** To update the password, enter the account password in the Password field.

**Step 6 –** Click **Save**. The Credential Settings window closes.

The credential within the Credential Profile has been modified.

## Add Additional Credential to a Profile

Multiple credentials can be added to a single profile. Credential stacking is when you add multiple
credentials to a single profile. During certain actions, Threat Manager enumerates these credentials in order until it finds one that can execute the task.

The following areas use stacking:

- Active Directory Sync

    - Enumerate the credentials in order until one can connect to the domain successfully

- Threat Prevention Integration

    - Enumerate the credentials in order until one can connect to the Threat Prevention
      database successfully

- Actions

    - The full list is available to the actions in the $CredentialList parameter
    - The $Credential parameter is populated with the most appropriate credential from the list

        - Threat Manager matches the domain of the event against the domain of the credential
        - If none match, the first credential in the list is used

- Honey Tokens

    - The same logic as $Credential from the Actions section

**Step 1 –** On the Integrations interface, click **Credential Profile** in the navigation pane to
view a list of the already created Credential Profiles, if any.

**Step 2 –** Click Add Credential. The Add Credentials window opens.

![Add Credentials window](/images/threatmanager/3.0/administration/configuration/integrations/addcredentialswindow.webp)

**Step 3 –** Enter the following information:

- Platform – Select the account type for the credential:

    - SQL – For SQL Server accounts
    - Windows – For local and Active Directory accounts

- User Name – Enter the account user name in the required format. For Windows accounts, it is:
  [DOMAIN]\[USERNAME], e.g. NWXTech\svc-netwrix
- Password – Enter the password for the credential

**Step 4 –** Click Save. The Add Credentials window closes.

The Credential Profile now has multiple credentials.
