---
title: "Sync Office 365 Subscriptions in a Synchronize Job"
description: "Connect Office 365 as a messaging provider, transform fields to sync licenses, and deprovision subscriptions in a Synchronize job."
keywords:
  - Office 365 subscription
  - messaging provider
  - Synchronize job
  - license assignment
  - deprovision subscriptions
sidebar_position: 30
---

# Sync Office 365 Subscriptions in a Synchronize Job

While creating or editing mail-enabled objects through a Synchronize job, you can use
Directory Manager to sync or deprovision subscriptions from the Office 365 messaging provider.

## Sync Office 365 subscriptions in a Synchronize job

While creating or editing a Synchronize job (mailbox-enabled user), you can sync subscriptions from
the Office 365 messaging provider.

On the **Objects, Fields and Mappings** page:

1. Click **Add Messaging Provider** and select **Office 365** from the dropdown list.
2. Enter the domain name in which the mail server resides in the **Domain Name** box.
3. Enter the user name of an authorized user account on the mail server in the **User name** box.
4. Enter the application ID in the **Application ID** box.
5. Enter the password of the user you entered in the **User name** box in the **Password** box.
6. Enter the tenant ID in the **Tenant ID** box. The tenant ID is a globally unique identifier (GUID) that is
   different from your organization name or domain.
7. Enter the client secret in the **Client Secret** box.
8. Click **Sync Again**.

    The names of mail servers in the given environment populate in the **Server Name** list.
    Select your required mail server from the list.

9. Click **Save**.
10. In the **Selected Fields** section, the following Office 365-specific fields are selected by
    default in the **Selected Fields** box:

    - Sam Account Name
    - Display Name
    - First Name
    - Common Name (CN)
    - Last Name
    - Password
    - LicenseAssignment
    - User logon name
    - UsageLocation
    - Alias

11. Select **Field Mapping**. You must transform the following fields to sync subscriptions of
    Office 365:

    - LicenseAssignment
    - User logon name
    - UsageLocation
    - Password

12. In the **Field Maps** section, click the **Transform** button against the:

    1. **LicenseAssignment** field.

        1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set
           the destination field to** box.
        2. Select checkbox(es) of the required subscriptions from the list of subscriptions
           displayed.
        3. Click **Transform**.

    2. **User Logon Name** field.

        1. On the **Transform** dialog box, select _Script - write a Visual Basic.Net script to
           assign a value programmatically_ from the **Set the destination field to** box.
        2. Click **Edit Script** to edit the script to append the user logon name with Office 365
           domain name.

            By default, it displays the script DTM.Result = DTM.Source("userPrincipalName").

            Modify it with the attributes you want for the user logon part and add domain name. For
            example:

            ```
             DTM.Result = DTM.Source("First")&DTM.Source("Last")&"@directorymanager.onmicrosoft.com"
            ```

        3. To test the script, click **Test Script** from **Field Options** dropdown.
        4. On the **Script Tester** window, click the **Run Script** button to populate the test results in
           the **Test Result** box. Close the **Script Editor** to return to the **Transform**
           dialog box.
        5. Click **Transform**.

    3. **UsageLocation** field.

        1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set
           the destination field to** box.
        2. In the **Static text** box, enter a 2-letter country abbreviation, such as `US` for
           United States.
        3. Click **Transform**.

    4. **Password** field.

        1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set
           the destination field to** box.
        2. Click
           [Auto-Generate Unique Passwords in Synchronize Jobs](/docs/directorymanager/11.2/portal/synchronize/transformation/autogenerateuniquepassword.md).
        3. On the **Password Complexity Options** dialog box, enter 10 in the **Password Length** box.
        4. Clear the **Special symbols** checkbox.
        5. Click **Transform**.

    5. Continue with the rest of the pages of the wizard to complete the job.

## Deprovision Office 365 subscription in a Synchronize job

To delete a subscription in an existing job, double-click the required job. The **Edit job** wizard
opens.

1. Click **Next** until you reach the **Field Maps** page of the **Edit job** wizard.
2. Click the **Transform** button against the **LicenseAssignment** field.

    1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set the
       destination field to** box.
    2. Select checkbox(es) of the required subscriptions you want to remove from the list of
       subscriptions displayed.
    3. Select the **Deprovisioning** checkbox.
    4. Click **Transform**.

3. Click **Finish**, or click **Next** if you want to modify a setting on any of the remaining pages of
   the **Edit Job** wizard.
