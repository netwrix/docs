---
title: "Google Workspace Subscription"
description: "Google Workspace Subscription"
sidebar_position: 20
---

# Google Workspace Subscription

While creating or editing mail enabled objects through a Synchronize job, Directory Manager provides
you the facility to sync or deprovision subscriptions from Google Workspace messaging provider.

## Sync Google Workspace subscriptions

While creating or editing a Synchronize job (mailbox-enabled user) you can sync subscriptions from G
Suite messaging provider.

On the **Object, Fields and Mapping** page:

Step 1 – Click **Add Messaging Provider** and select Google Workspace from the drop down list.

Step 2 – Enter service account name in the **Service Account** box.

Step 3 – Enter admin username in the **Admin Username** box.

Step 4 – Specify the location of .P12 key file in the **P12 Certificate Path** box.

Step 5 – Click **Sync Again**

The name of mail server populates in the **Server Name** list.

Step 6 – Click **Save.**

Step 7 – On the **Select Fields** page, the following Google Workspace specific fields are selected
by default in the **Selected Fields** box:

- First Name
- familyName
- Email
- LicenseAssignemnt
- Password
- AppName
- Sam Account Name
- Common Name(CN)
- Display Name

Step 8 – Click **Next**.

You have to transform all the above fields to work them properly with Google Workspace messaging
provide.

Step 9 – On the **Field Map(s)** page, click the **Transform** button against:

1. the **familyName** field.

    1. On the **Transform** dialog box, select _Join - combine two source fields together_ from the
       **Set the destination field to** box.
    2. Select an attribute from the **First field** list to form a value for the family name field.
    3. Provide a separator of your choice in the **Separator** box to separate value of **First
       field** and **Second field**. It is an optional field.
    4. Select an attribute from the **Second field** list to form a value for the family name field.
    5. Click **Transform**

2. the **Email** field.

    1. On the **Transform** dialog box, select _Script -write a Visual Baisc.Net script to assign a
       value programmatically_ from the **Set the destination field to** box.
    2. Click **Edit Script** to edit the script to append the user logon name with Google
       Workspace domain name.

**By default, it displays: DTM.Result = ""**

        Modify it with the attributes you want to form email address of the mailbox-enabled user.
        For example:

        ```
         DTM.Result = DTM.Source("First") & "_go_" & DTM.Source("Last")&"@theasp.net"
        ```

    3. To test the script, click **Test Script** from **Field Options** dropdown.
    4. On the **Script Tester** window click Run Script button to populate the test results in the
       **Test Result** box. Close the **Script Editor** to return to the **Transform** dialog box.
    5. Click **Transform**.

3. the **LicenseAssignment** field.

    1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set the
       destination field to** box.
    2. Select check box(es) of the required subscription(s) from the list of subscriptions
       displayed.
    3. Click **Transform**

4. the **AppName** field.

    1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set the
       destination field to** box.
    2. In the **Static text** box, enter G Suite.
    3. Click **Transform**.

Step 10 – Continue with the rest of the pages of the wizard to complete the job.

## Deprovision existing Google Workspace subscriptions

To delete a subscription in an existing job, double click the required job. **Edit job** wizard
opens.

Step 1 – Click **Next** until you reach on the **Filed Map(s)** page of the **Edit job** wizard.

Step 2 – Click the **Transform** button against the **LicenseAssignment** field.

1. On the **Transform** dialog box, select _Static - assign a static value_ from the **Set the
   destination field to** box.
2. Select check box(es) of the required subscription(s) you want to remove from the list of
   subscriptions displayed.
3. Select the **Deprovisioning** check box.
4. Click **OK**.

Step 3 – Click **Finish** or click **Next** if you want to modify a setting on any rest of the pages
of the **Edit Job** wizard.
