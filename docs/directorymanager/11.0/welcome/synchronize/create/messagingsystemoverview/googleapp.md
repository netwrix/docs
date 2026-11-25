---
title: "Sync Google Workspace Subscriptions in a Synchronize Job"
description: "Connect Google Workspace as a messaging provider, transform fields to sync subscriptions, and deprovision subscriptions in a Synchronize job."
keywords:
  - Google Workspace subscription
  - messaging provider
  - Synchronize job
  - deprovision subscriptions
  - field transformation
sidebar_position: 20
---

# Sync Google Workspace Subscriptions in a Synchronize Job

While creating or editing mail-enabled objects through a Synchronize job, you can use
Directory Manager to sync or deprovision subscriptions from the Google Workspace messaging provider.

## Sync Google Workspace subscriptions

While creating or editing a Synchronize job (mailbox-enabled user), you can sync subscriptions from
the Google Workspace messaging provider.

On the **Object, Fields and Mapping** page:

1. Click **Add Messaging Provider** and select **Google Workspace** from the dropdown list.
2. Enter the service account name in the **Service Account** box.
3. Enter the admin username in the **Admin Username** box.
4. Specify the location of the .P12 key file in the **P12 Certificate Path** box.
5. Click **Sync Again**.

    The name of the mail server populates in the **Server Name** list.

6. Click **Save**.
7. On the **Select Fields** page, the following Google Workspace-specific fields are selected by
   default in the **Selected Fields** box:

    - First Name
    - familyName
    - Email
    - LicenseAssignment
    - Password
    - AppName
    - Sam Account Name
    - Common Name(CN)
    - Display Name

8. Click **Next**.

    You must transform all the preceding fields for them to work properly with the Google Workspace messaging
    provider.

9. On the **Field Map(s)** page, click the **Transform** button against:

    1. the **familyName** field.

        1. On the **Transform** dialog box, select _Join - combine two source fields together_ from
           the **Set the destination field to** box.
        2. Select an attribute from the **First field** list to form a value for the family name
           field.
        3. Provide a separator of your choice in the **Separator** box to separate the values of **First
           field** and **Second field**. This field is optional.
        4. Select an attribute from the **Second field** list to form a value for the family name
           field.
        5. Click **Transform**.

    2. the **Email** field.

        1. On the **Transform** dialog box, select _Script - write a Visual Basic.Net script to
           assign a value programmatically_ from the **Set the destination field to** box.
        2. Click **Edit Script** to edit the script to append the user logon name with Google
           Workspace domain name.

            By default, it displays: DTM.Result = ""

            Modify it with the attributes you want to use to form the email address of the mailbox-enabled
            user. For example:

            ```
             DTM.Result = DTM.Source("First") & "_go_" & DTM.Source("Last")&"@theasp.net"
            ```

        3. To test the script, click **Test Script** from **Field Options** dropdown.
        4. On the **Script Tester** window, click the **Run Script** button to populate the test results in
           the **Test Result** box. Close the **Script Editor** to return to the **Transform**
           dialog box.
        5. Click **Transform**.

    3. the **LicenseAssignment** field.

        1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set
           the destination field to** box.
        2. Select checkboxes of the required subscriptions from the list of subscriptions
           displayed.
        3. Click **Transform**.

    4. the **AppName** field.

        1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set
           the destination field to** box.
        2. In the **Static text** box, enter G Suite.
        3. Click **Transform**.

10. Continue with the rest of the pages of the wizard to complete the job.

## Deprovision existing Google Workspace subscriptions

To delete a subscription in an existing job, double-click the required job. The **Edit job** wizard
opens.

1. Click **Next** until you reach the **Field Map(s)** page of the **Edit job** wizard.
2. Click the **Transform** button against the **LicenseAssignment** field.

    1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set the
       destination field to** box.
    2. Select checkboxes of the required subscriptions you want to remove from the list of
       subscriptions displayed.
    3. Select the **Deprovisioning** checkbox.
    4. Click **OK**.

3. Click **Finish**, or click **Next** if you want to modify a setting on any of the remaining pages of
   the **Edit Job** wizard.

**See Also**

- [Create a Synchronize Job in Directory Manager](/docs/directorymanager/11.0/welcome/synchronize/create/create.md)
- [Create a Job Collection in Directory Manager Synchronize ](/docs/directorymanager/11.0/welcome/synchronize/create/create_1.md)
- [Transform Data in Synchronize Jobs](/docs/directorymanager/11.0/welcome/synchronize/transformation/overview.md)
- [Auto-Generate Unique Passwords in Synchronize Jobs](/docs/directorymanager/11.0/welcome/synchronize/transformation/autogenerateuniquepassword.md)
