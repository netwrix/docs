---
title: "Configure User Profile Validation in Directory Manager"
description: "Require group members to verify their directory profiles on a schedule, and set life cycle periods, extension periods, and reminders."
keywords:
  - profile validation
  - Directory Manager
  - User Life Cycle schedule
  - profile validation life cycle
  - reminder notifications
  - extension period
sidebar_position: 110
---

# Configure User Profile Validation in Directory Manager

Profile validation in Directory Manager keeps users' information in the directory accurate.

When you apply profile validation to a group, all group members must verify and update their profile information in the directory with the Directory Manager portal. You must also specify a profile validation life cycle period (for example, 90 days). Each member must validate their profile once during each 90-day cycle.

You can also specify a different profile validation period for new users. After a new user validates their profile within this period, the regular profile validation cycle applies.

By default, a few attributes (fields) are available in the Directory Manager portal for profile validation. You can add and remove fields as required. See the [Manage Property Validation Attributes in Directory Manager](/docs/directorymanager/11.2/admincenter/applications/portal/displaytype/propertyvalidation.md) topic.

## Actions users can perform while validating profiles

When a user validates their profile, the user can:

- Update their directory profile.
- Change their primary manager. When a user changes their primary manager (Manager A), Directory Manager notifies Manager A and the user's additional managers by email to accept or reject the request. If any of them accepts it, the user's manager changes. If any approver rejects it, the user remains with Manager A.

  :::note
  This is the default flow of the change manager workflow for the identity store. If the administrator disables the workflow or changes the approver, the flow changes accordingly.
  :::

- Transfer their direct reports to another manager. When a user transfers a direct report, Directory Manager notifies the new manager by email to accept or reject the transfer. If the manager accepts it, the direct report is transferred to them. If the manager rejects the transfer, the direct report remains with the old manager.

  :::note
  This is the default flow of the transfer a user workflow for the identity store. If the administrator disables the workflow or changes the approver, the flow changes accordingly.
  :::

- Terminate their direct reports. When a user terminates a direct report, the termination takes effect immediately if the terminate a user workflow is disabled. If the workflow is enabled, Directory Manager sends a request to the approver. If the approver accepts it, the direct report is terminated. If the approver rejects it, the direct report remains with the manager.

For workflows in an identity store, see the [System Workflows](/docs/directorymanager/11.2/admincenter/workflow/overview.md#system-workflows) topic.

## When users don't validate their profiles

Users receive reminder emails periodically to validate their profiles. Directory Manager expires the users who ignore these reminders and don't validate their profiles within the required time. Consequently, their accounts are disabled.

Expired users can ask the administrator or helpdesk to unlock their accounts temporarily and grant an extension period. If they don't validate their profile within the extension period, Directory Manager expires them again and notifies their managers by email. To reactivate these accounts, users' managers must send a request to the helpdesk.

To identify user accounts that are disabled for not validating their profiles, see the Identify User Accounts Expired due to Non-Profile Validation topic.

## The User Life Cycle schedule

The [Create a Directory Manager User Life Cycle Schedule](/docs/directorymanager/11.2/admincenter/schedule/userlifecycle.md) monitors the profile validation function in Directory Manager. It:

- Monitors the profile validation dates for users.
- Generates reminder emails, if reminder notification settings are applied.
- Expires (disables) users who don't validate their profiles within the given period.
- Marks user accounts that are disabled due to profile non-validation, provided that the 'Profile Validation Attribute' setting is applied.
- Deletes the profile validation date if it is x number of days old, provided that the 'Clear the validation data for disabled users, x number of days after they are disabled' setting is applied.

## Specify a group for profile validation

By default, profile validation isn't enabled for an identity store, so it doesn't apply to any user.

You can apply profile validation to a directory group. All group members must then validate their profiles. You can specify only one group at a time.

**To specify a group:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Configurations**, and then click **Profile Validation**.
4. On the **Profile Validation** page, use the **Search for the Criteria** box to search for and specify a group.

   - Enter a search string in the box. Directory Manager displays all groups with names that start with the string. Click **Select** for a group to select it for profile validation.

   **Or**

   - Click **Advanced** to search for a group by different parameters, such as name, display name, and description. Enter a search string and click **Search**. Directory Manager displays the groups that match the string. Select the group you want.

   The selected group is displayed in the **Search for the Criteria** box. Members of this group must validate their profiles according to the settings you configure on the **Profile Validation** page.

   **To preview group members:**

   - To view the members of the selected group, click **Preview**.

   **To remove the group:**

   - To remove the selected group, click **Remove** for it.

5. Click **Save**.

## Set a profile validation life cycle period

By default, the profile validation life cycle period is 90 days. Users must validate their profiles once during each 90-day cycle. When a user validates their profile, the current cycle ends and the next cycle starts for them.

The User Life Cycle schedule monitors the profile validation dates for users. It expires users who don't validate their profiles within the given period.

**To specify a life cycle period:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Configurations**, and then click **Profile Validation**.
4. In the **User Profile Validation Lifecycle** box on the **Profile Validation** page, enter the number of days to set as the profile validation life cycle period.

   If this number of days is less than the days set for any of the reminders in the **Reminder Notification Settings** area, Directory Manager removes that reminder from the list.

5. Click **Save**.

## Specify a profile validation period for new users

Apart from the regular profile validation life cycle, you can set a separate profile validation period for newly found user objects. These objects are newly created objects or disabled objects that are enabled again in the directory.

For new users, you can specify a number of days, such as 30, as the first profile validation life cycle period. New users receive a welcome email and a profile validation request. The request directs them to validate their profiles for the first time within the given number of days. After they validate their profiles, the regular profile validation life cycle settings apply to them.

**To specify a profile validation period for new users:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Configurations**, and then click **Profile Validation**.
4. On the **Profile Validation** page, use the toggle button next to the **New Object Profile Validation Lifecycle** box to enable a separate profile validation life cycle for new users.
5. In the **New Object Profile Validation Lifecycle** box, specify the number of days to set as the profile validation period. New users must validate their profiles within this period. If they don't, their accounts are disabled.
6. Click **Save**.

## Specify a duration for the extension period

With the Directory Manager portal, the administrator or helpdesk can grant an extension period to users who expired due to non-profile validation. If users don't validate their profile within the extended period, Directory Manager disables them again and sends an email notification to their managers.

On the **Profile Validation** page, you can specify the duration of the extension period in days.

**To set the extension period:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Configurations**, and then click **Profile Validation**.
4. In the **Extension Period** box on the **Profile Validation** page, specify the number of days that Directory Manager grants as the extension period to expired users.

   By default, the extension period is four days. You can extend it to seven days.

5. Click **Save**.

## Specify reminder notification settings

By default, Directory Manager sends three email notifications to a user, precisely 30, 21, and 14 days before the profile validation period ends. These notifications remind users to validate their profiles. The final reminder is sent to the user and the user's manager.

You can change the number of reminders and their **Before # of Days** value. The User Life Cycle schedule sends reminder notifications to users according to the specified settings.

For email notifications, you must configure an SMTP Server for the identity store. See the [Configure an SMTP Server in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/smtpserver.md) topic.

**To set a new reminder:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Configurations**, and then click **Profile Validation**.
4. In the **Reminder Notification Settings** area, click **Add Reminder**.
5. On the **Add Reminder** dialog box, provide a name for the reminder in the **Reminder Name** box.
6. Enter a value in the **Before Number of Days** box. Directory Manager sends the reminder to the user when x number of days are left before the profile validation period ends. For example, if you enter 5, Directory Manager sends the reminder five days before the period ends.
7. Click **Add**.

   **Edit a reminder:**

   1. In the **Reminder Notification Settings** area, click **Edit** for a reminder.
   2. On the **Edit Reminder** dialog box, update the name and **Before no. of days** setting for the reminder.
   3. Click **OK**.

   **Remove a reminder**:

   - In the **Reminder Notification Settings** area, click **Remove** for a reminder to remove it.

8. On the **Profile Validation** page, click **Save**.

## Identify user accounts expired due to non-profile validation

User accounts in an identity store can be disabled for various reasons. For example, the administrator disables a user in the directory, or the User Life Cycle schedule expires a user account because the user didn't validate their directory profile during a given period.

To identify users that the User Life Cycle schedule disables, the administrator can apply the **Profile Validation Attribute** setting. This setting requires the administrator to select a schema attribute and specify a string as its value.

- When the User Life Cycle schedule expires a user, it sets the given string as the attribute's value for the user.
- For active users or those disabled for a different reason, the attribute doesn't have the specified string as its value.

When the administrator or a helpdesk user extends the profile validation period for a disabled user, Directory Manager clears the string value and the attribute is empty again.

The administrator can access the directory server to check whether the string value is set for the attribute. For example, they can use a standard Microsoft-based Active Directory tool to view the attribute's value, either natively in the given property sheet options or with the ADSI property sheet shell extension.

**To designate an attribute with a value:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Configurations**, and then click **Profile Validation**.
4. On the **Profile Validation** page, use the toggle button for **Set an attribute that will be updated with the value you want for users that are expired due to non-profile validation** to enable the attribute value setting.
5. Select a schema attribute in the **Attribute** dropdown list and specify a string as its value in the **Value You Want** box.

   When the User Life Cycle schedule expires a user who doesn't validate their profile within the given period, it also sets the attribute's value to the specified string for that user.

6. Click **Save**.

## Apply settings to clear the validation date

The administrator can specify x number of days for the 'Clear the validation data for disabled users, x number of days after they are disabled' setting. The User Life Cycle schedule scans all disabled users. If x number of days have passed since the last validation date, it clears the validation date.

This setting is required for a potential rehire scenario. In that case, Directory Manager treats the user as a newly created object, and the validation process for new users applies to it.

**To apply the setting:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Configurations**, and then click **Profile Validation**.
4. On the **Profile Validation** page, use the toggle button for **Clear the validation data for disabled users, x number of days after they are disabled** to enable the clear validation date setting.
5. In the **After number of Days** box, specify a number of days, such as 60. The User Life Cycle schedule scans all disabled users. If 60 days have passed since the last validation date, it clears the validation date.

   If you specify zero (0), the schedule clears the validation date as soon as it expires the user.

6. Click **Save**.
