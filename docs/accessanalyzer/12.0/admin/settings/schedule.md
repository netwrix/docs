---
title: "Schedule"
description: "Schedule"
sidebar_position: 100
---

# Schedule

The Schedule node contains objects called Schedule Service Accounts. A Schedule Service
Account runs scheduled tasks on the Access Analyzer Console server. You can configure multiple Schedule Service Accounts to support different security contexts for scheduled jobs.

![Schedule node](/images/accessanalyzer/12.0/admin/settings/schedule.webp)

Run jobs manually or schedule them to execute at designated times. For example,
you could schedule a job to run during hours when the office is closed and network traffic is low.
Windows uses the Schedule Service Account to access the task folders when launching scheduled tasks.
Configure Schedule Service Accounts at the global level and use this account to schedule jobs in the Schedule Wizard. See the [Schedules](/docs/accessanalyzer/12.0/admin/schedule/overview.md) topic for
additional information.

:::warning
On Windows 2016 servers, the Schedule Service Account can't be signed into an active
session when the time comes for a scheduled task to start. Windows blocks the starting or running of
scheduled tasks using an account that is logged into the server.
:::


**Password Storage Options**

You can store the password for the credential in the Access Analyzer application or the
Access Analyzer Vault.

Choosing between the Access Analyzer application and Access Analyzer Vault is a global setting
in the **Settings** > **Application** node. See the
[Application](/docs/accessanalyzer/12.0/admin/settings/application/overview.md) topic for additional information.

**Permissions**

Regardless of the account type, any account used to schedule tasks must have credentials with at
least the following to meet Least Privileged specifications:

- Create Files/Write Data rights on the following Task folders:

    - Windows Task folder
    - System 32 Task folder
    - Member of **Log on as a Batch Job** local policy

    Otherwise, credentials must have local Administrator privileges on the Access Analyzer Console
    server.

- The following NTFS permissions for **Subfolders and Files Only** in the Access Analyzer Directory:

    - Create Files/Write Data
    - Create Folders/Append Data
    - Write Attributes
    - Write Extended Attributes

- To configure Least Privilege Model Schedule Service Accounts when Role Based Access is enabled,
  see the [Role Based Access](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/overview.md) topic for additional information
- If using Windows authentication for the Storage Profile, the Schedule Service Account must have a
  sufficient level of rights to connect to and interact with the Access Analyzer database. See the
  [Storage](/docs/accessanalyzer/12.0/admin/settings/storage/overview.md) topic for additional information.

The **Cancel** and **Save** buttons are in the lower-right corner of the Schedule view. These
buttons become enabled when you modify the Schedule global settings. When you make changes
at the global level, click **Save** and then **OK** to confirm the changes. Otherwise,
click **Cancel** if no changes were intended.

The Access Analyzer vault provides enhanced security through enhanced encryption to various
credentials stored by the Access Analyzer application. See the [Vault](/docs/accessanalyzer/12.0/admin/settings/application/vault.md) topic
for additional information.

## Schedule Service Account Types

There are two types of accounts that can be used to configure the Schedule Service Account.

![serviceaccounttypes](/images/accessanalyzer/12.0/admin/settings/serviceaccounttypes.webp)

Use one of the following options for the Schedule Service Account:

- Use the local system account to schedule tasks – This option applies the credentials logged into
  the Access Analyzer Console server

    - Credentials must have privileges sufficient for scheduling tasks on the Access Analyzer
      Console server. If not, scheduled tasks fail to start.
    - This option can't be edited or deleted

- User-supplied credentials – Provide credentials for a specific account with sufficient rights to
  schedule tasks on the Access Analyzer Console server

    - The account can be either a domain account or a local Windows account
    - A local Windows account is a specific account and not the default local system account

:::tip
Remember, on Windows 2016 servers, the Schedule Service Account can't be signed into an active
session on the Access Analyzer Console server when a scheduled task starts.
:::


## Create a Schedule Service Account

:::tip
Remember, on Windows 2016 servers, the Schedule Service Account can't be signed into an active
session on the Access Analyzer Console server when a scheduled task starts.
:::


![Add User credential option in the Schedule view](/images/accessanalyzer/12.0/admin/settings/addusercredential.webp)

**Step 1 –** Click **Add User credential** at the top of the Schedule view. The User Credentials
window opens.

![User Credentials window](/images/accessanalyzer/12.0/admin/settings/usercredentialswindow.webp)

**Step 2 –** The window options change according to the value for the **Selected Account Type**
field. Select the appropriate account type and then provide the required information. The account
types are:

- Active Directory Account – Use this option to specify a domain account

    - Domain – Auto-filled with the domain where the Access Analyzer Console server resides, change
      by typing the domain name in the textbox or select a domain from the menu
    - User name – Provide a domain account user name
    - Password Storage – Choose the option for credential password storage:

        - Application – Uses Access Analyzer’s configured Profile Security setting as selected at
          the **Settings** > **Application** node
        - Managed Service Account – Use previously configured MSA and gMSAs for authentication. The
          password fields aren't applicable when this option is selected. See the
          [Group Managed Service Accounts (gMSA) Configuration](/docs/accessanalyzer/12.0/admin/settings/connection/gmsa.md) topic for
          additional information.

    - Password – Type the password
    - Confirm – Re-type the password

- Local Account – Use this option to specify a local account for the Access Analyzer Console server

    - User name – Provide the local account user name
    - Password Storage – Choose the option for credential password storage:

        - Application – Uses Access Analyzer’s configured Profile Security setting as selected at
          the **Settings** > **Application** node

    - Password – Type the password
    - Confirm – Re-type the password

**Step 3 –** Click **OK** to verify the credentials. If the credentials are valid, the User
Credentials window closes. Otherwise, one of the following error messages might appear:

- Passwords Don't Match Error

    ![Passwords Don't Match Error](/images/accessanalyzer/12.0/admin/settings/passwordsdontmatch.webp)

    - This error indicates the two password entries don't match. Click **OK** and reenter the
      passwords.

- Bad User Name or Password Error

    ![Bad User Name or Password Error](/images/accessanalyzer/12.0/admin/settings/incorrectlogondetails.webp)

    - This error indicates either the user account doesn't exist or the username and password do
      not match. Click **OK** and reenter the information.

- Insufficient Rights Error

    ![Insufficient Rights Error](/images/accessanalyzer/12.0/admin/settings/insufficientrights.webp)

    - This error indicates the account supplied doesn't have sufficient rights to create and run
      scheduled tasks. Click **OK** and provide credentials with sufficient rights.

- GPO Network Security Error

    ![GPO Network Security Error](/images/accessanalyzer/12.0/admin/settings/gponetworksecurity.webp)

    - This error indicates that the GPO Network Security settings are configured to not allow
      storage of passwords and credentials for network authentication. Click OK. Disable the
      domain’s GPO Network Security settings or exempt the Access Analyzer Server from GPO.
    - This error will also appear when trying to schedule a task using the domain’s Schedule Service
      Account where GPO Network Security is set to not allow storage of passwords and credentials
      for network authentication

**Step 4 –** The credential information appears in the User Credentials table. Click **Save** and
then **OK** to confirm the changes. To ensure these credentials take effect, exit and restart the
Access Analyzer application before scheduling any tasks.

Access Analyzer can now schedule tasks with this Scheduled Service Account.

## Edit a Schedule Service Account

:::tip
Remember, on Windows 2016 servers, the Schedule Service Account can't be signed into an active
session on the Access Analyzer Console server when a scheduled task starts.
:::


![Edit option in the Schedule view](/images/accessanalyzer/12.0/admin/settings/edit.webp)

**Step 1 –** Select a credential from the User Credentials list and click **Edit**. The User
Credentials window opens.

**Step 2 –** Modify the credential information as needed. See Step 2 of the
[Create a Schedule Service Account](#create-a-schedule-service-account) topic for additional
information.

**Step 3 –** Click **OK** to verify the credentials. If the credentials are valid, the User
Credentials window closes.

Access Analyzer can now schedule tasks with this Scheduled Service Account.

## Delete a Schedule Service Account

![Delete option in the Schedule view](/images/accessanalyzer/12.0/admin/settings/delete.webp)

**Step 1 –** Select the credential from the User Credentials list and click **Delete**. The Delete
Credentials confirmation window appears.

![Delete Credentials confirmation window](/images/accessanalyzer/12.0/admin/settings/deletecredentials.webp)

**Step 2 –** Click **OK** to confirm the deletion or **Cancel** to exit the deletion process.

**Step 3 –** The User Credentials list now reflects the absence of the deleted Schedule Service
Account. Click **Save** and then **OK** to confirm the changes. To ensure these changes take effect,
exit and restart the Access Analyzer application.

If all Schedule Service Accounts are removed and only the local System account remains, Access
Analyzer can't create or run scheduled tasks unless the local system account has adequate
permissions.
