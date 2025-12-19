---
title: "Office 365 Subscription"
description: "Office 365 Subscription"
sidebar_position: 30
---

# Office 365 Subscription

While creating or editing mail enabled objects through a Synchronize job, Directory Manager provides
you the facility to sync or deprovision subscriptions from Office 365 messaging provider.

## Sync Office 365 subscription in a Synchronize job

While creating or editing a Synchronize job (mailbox-enabled user) you can sync subscriptions from
Office 365 messaging provider.

On the **Object, Fields and Mapping** page:

1. Click **Add Messaging Provider** and select **Office 365** from the drop down list.
2. Enter domain name in which the mail server resides in the **Domain Name** box.
3. Type the user name of an authorized user account on the mail server in the **User name** box.
4. Type the application id in **Application ID** box.
5. Enter password of the user mentioned in the User name field in the **Password** box.
6. Enter **Tenant ID** in the box. Tenant ID is **a globally unique identifier (GUID)** that is
   different than your organization name or domain.
7. Enter client secret in the **Client Secret** box.
8. Click **Sync Again**.

    The name of mail server(s) in the given environment populates in the **Server Name** list,
    select your required mail server from the list.

9. Click **Save**.
10. On the **Selected Fields** section, the following Office 365 specific fields are selected by
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

11. Select **Field Mapping.** You have to transform the following fields to sync subscriptions of
    Office 365:

    - LicenseAssignment
    - User logon name
    - UsageLocation
    - Password

12. On the **Field Map(s)** section, click the **Transform** button against the:

    1. the **LicenseAssignment** field.

        1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set
           the destination field to** box.
        2. Select check box(es) of the required subscription(s) from the list of subscriptions
           displayed.
        3. Click **Transform**.

    2. the **User Logon Name** field.

        1. On the **Transform** dialog box, select _Script -write a Visual Baisc.Net script to
           assign a value programmatically_ from the **Set the destination field to** box.
        2. Click **Edit Script** to edit the script to append the user logon name with Office 365
           domain name.

            By default, it displays: DTM.Result = DTM.Source("userPrincipalName") script.

            Modify it with the attributes you want for the user logon part and add domain name. For
            example:

            ```
             DTM.Result = DTM.Source("First")&DTM.Source("Last")&"@directorymanager.onmicrosoft.com"
            ```

        3. To test the script, click **Test Script** from **Field Options** dropdown.
        4. On the **Script Tester** window click Run Script button to populate the test results in
           the **Test Result** box. Close the **Script Editor** to return to the **Transform**
           dialog box.
        5. Click **Transform**.

    3. the **UsageLocation** field.

        1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set
           the destination field to** box.
        2. In the **Static text** box, enter 2-letter country name abbreviation such as US for
           United States.
        3. Click **Transform**.

    4. the **Password** field.

        1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set
           the destination field to** box.
        2. Click
           [Auto-Generate Unique, Complex Passwords](/docs/directorymanager/11.1/portal/synchronize/transformation/autogenerateuniquepassword.md).
        3. On the Password Complexity Options dialog box, enter 10 in the **Password Length** box.
        4. Clear the **Special symbols** check box.
        5. Click **Transform.**

    5. Continue with the rest of the pages of the wizard to complete the job.

## Deprovision Office 365 subscription in a Synchronize job

To delete a subscription in an existing job, double click the required job. **Edit job** wizard
opens.

1. Click **Next** until you reach on the **Filed Map(s)** page of the **Edit job** wizard.
2. Click the **Transform** button against the: the **LicenseAssignment** field.

    1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set the
       destination field to** box.
    2. Select check box(es) of the required subscription(s) you want to remove from the list of
       subscriptions displayed.
    3. Select the Deprovisioning check box.
    4. Click **Transform**.

3. Click **Finish** or click **Next** if you want to modify a setting on any rest of the pages of
   the **Edit Job** wizard.
