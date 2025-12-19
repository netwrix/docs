---
title: "Configure User Profile Validation"
description: "Configure User Profile Validation"
sidebar_position: 110
---

# Configure User Profile Validation

The profile validation process in GroupID is designed to ensure the accuracy of users’ information
in the directory.

When you apply profile validation to a group, all group members must verify and update their profile
information in the directory using the GroupID portal or the GroupID mobile app. You must also
specify a profile validation life cycle period (for example, 90 days), so that each member must
validate his or her profile once during each 90-day cycle.

Additionally, you can choose to specify a different profile validation period for new users. Once a
new user validates his or her profile within this period, the regular profile validation cycle
applies.

By default, a few attributes (fields) are available in the GroupID portal and the mobile app for
profile validation. You can add and remove fields as required. See the
[Manage Property Validation Attributes](/docs/directorymanager/11.0/signin/applications/portal/displaytype/propertyvalidation.md)
topic.

## What can Users do While Validating their Profiles?

When performing profile validation, a user can:

- Update his or her directory profile
- Change his or her primary manager - When a user changes his or her primary manager (Manager A),
  then Manager A and the user’s additional managers are notified through email to accept or reject
  the request. If any of them accepts it, the user’s manager is changed. If any approver rejects it,
  the user remains with Manager A.

    NOTE: This is the default flow of the _change manage_ workflow for the identity store. If the
    administrator disables the workflow or changes the approver, the flow changes accordingly.

- Transfer his or her direct reports to another manager - When a user transfers his or her direct
  report, the new manager is notified by email to accept or reject the transfer. If the manager
  accepts it, the direct report is transferred to him or her. If the manager rejects the transfer,
  the direct report remains with the old manager.

    NOTE: This is the default flow of the _transfer a user_ workflow for the identity store. If the
    administrator disables the workflow or changes the approver, the flow changes accordingly.

- Terminate his or her direct reports - When a user terminates his or her direct report, it takes
  effect immediately when the _terminate a user_ workflow is disabled. If enabled, a request is sent
  to the approver. If the approver accepts it, the direct report is terminated and if the approver
  rejects it, the direct report remains with the manager.

For workflows in an identity store, see the
[System Workflows](/docs/directorymanager/11.0/signin/workflow/overview.md#system-workflows)
topic.

## What Happens When Users do not Validate their Profiles?

Periodically, users receive reminder emails to validate their profile. GroupID expires the users who
ignore these reminders and do not validate their profiles within the required time. Consequently,
their accounts get disabled.

Expired users can request the administrator or helpdesk to unlock their accounts temporarily and
grant an extension period. If they do not validate their profile within that extension period
either, GroupID expires them again and notifies their managers by email. To reactivate these
accounts, users’ managers must send a request to the helpdesk.

To identify user accounts that are disabled for not validating their profiles, see the
[Identify User Accounts Expired due to Non-Profile Validation](#identify-user-accounts-expired-due-to-non-profile-validation)
topic.

## The User Life Cycle Schedule

The User Life Cycle schedule monitors the profile validation function in GroupID. It:

- Monitors the profile validation dates for users.
- Generates reminder emails, if reminder notifications settings are applied.
- Expires (disables) users who do not validate their profiles within the given period.
- Marks user accounts that are disabled due to profile non-validation, provided that the ‘Profile
  Validation Attribute’ setting is applied.
- Deletes the profile validation date if it is x number of days old, provided that the ‘Clear the
  validation data for disabled users, x number of days after they are disabled’ setting is applied.

What do you want to do?

- [Specify a Group for Profile Validation](#specify-a-group-for-profile-validation)
- [Set a Profile Validation Life Cycle Period](#set-a-profile-validation-life-cycle-period)
- [Specify a Profile Validation Period for New Users](#specify-a-profile-validation-period-for-new-users)
- [Specify a Duration for the Extension Period](#specify-a-duration-for-the-extension-period)
- [Specify Reminder Notification Settings](#specify-reminder-notification-settings)
- [Identify User Accounts Expired due to Non-Profile Validation](#identify-user-accounts-expired-due-to-non-profile-validation)
- [Apply Settings to Clear the Validation Date](#apply-settings-to-clear-the-validation-date)

## Specify a Group for Profile Validation

By default, profile validation is not enabled for an identity store, and therefore does not apply to
any user.

You can apply profile validation to a directory group. As a result, all group members will be
required to validate their profiles. Only one group can be specified at a time.

**To specify a group:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Profile Validation**.
4. On the **Profile Validation** page, use the **Search for the Criteria** box to search and specify
   a group.

    - Type a search string in the box. GroupID displays all groups with names that start with the
      string. Click **Select** for a group to select it for profile validation.

        Or

    - Click **Advanced** to search a group by different parameters, such as name, display name, and
      description. Enter a search string and click **Search**. Groups matching the string are
      displayed. Select the required group.

    The selected group is displayed in the **Search for the Criteria** box. Members of this group
    have to validate their profiles according to the settings you configure on the **Profile
    Validation** page.

    **To preview group members:**

    - To view the members of the selected group, click **Preview**.

    **To remove the group:**

    - To remove the selected group, click **Remove** for it.

5. Click **Save**.

## Set a Profile Validation Life Cycle Period

By default, the profile validation life cycle period is set to 90 days, which means that users must
validate their profiles once during each cycle of 90 days. When a user validates his or her profile,
the current cycle ends and the next cycle starts for him or her.

The User Life Cycle schedule monitors the profile validation dates for users; it expires users who
do not validate their profiles within the given period.

**To specify a life cycle period:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Profile Validation**.
4. In the **User Profile Validation Lifecycle** box on the **Profile Validation** page, type the
   number of days to set as the profile validation life cycle period.  
   If this number of days is less than the days set for any of the reminders configured in the
   **Reminder Notification Settings** area, GroupID removes that reminder from the list.
5. Click **Save**.

## Specify a Profile Validation Period for New Users

Apart from the regular profile validation life cycle, GroupID enables you to set a separate profile
validation period for newly found user objects (by way of newly created objects or by way of
disabled object enabled again) in the directory.

For new users, you can specify a certain number of days, say 30, to serve as the first profile
validation life cycle period. New users receive a welcome email and a profile validation request,
directing them to validate their profiles for the first time within the given number of days. Once
they validate their profiles, the regular profile validation life cycle settings would apply to
them.

**To specify a profile validation period for new users:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Profile Validation**.
4. On the **Profile Validation** page, use the toggle button next to the **New Object Profile
   Validation Lifecycle** box to enable a separate profile validation life cycle for new users.
5. In the **New Object Profile Validation Lifecycle** box, specify a certain number of days to set
   as the profile validation period. New users must validate their profiles within this period. If
   they fail to do so, their accounts will be disabled.
6. Click **Save**.

## Specify a Duration for the Extension Period

Using the GroupID portal, the administrator or helpdesk can grant an extension period to users who
have been expired due to non-profile validation. If users do not validate their profile within the
extended period, GroupID disables them again, and an email notification is sent to their managers.

On the **Profile Validation** page, you can specify the duration of the extension period in days.

**To set the extension period:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Profile Validation**.
4. In the **Extension Period** box on the **Profile Validation** page, specify the number of days
   that will be granted as extension period to expired users.  
   By default, the extension period is set to four days. You can extend it to seven days.
5. Click **Save**.

## Specify Reminder Notification Settings

By default, three email notifications are sent to a user, precisely 30, 21 and 14 days before the
profile validation period ends. These notifications serve as reminders, directing users to validate
their profiles. The final reminder is sent to the user and the user’s manager.

You can change the number of reminders to be sent along with their _Before # of Days_ value. The
User Life Cycle schedule sends reminder notifications to users according to the specified settings.

For email notifications, an SMTP Server must be configured for the identity store. See the an
[Configure an SMTP Server](/docs/directorymanager/11.0/signin/identitystore/configure/smtpserver.md)
topic.

**To set a new reminder:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Profile Validation**.
4. In the **Reminder Notification Settings** area, click **Add Reminder**.
5. On the **Add Reminder** dialog box, provide a name for the reminder in the **Reminder Name** box.
6. Enter a value in the **Before Number of Days** box. The reminder is sent to the user when x
   number of days are left for the profile validation period to end. For example, if you enter 5,
   the reminder will be sent five days before the profile validation period ends.
7. Click **Add**.

    **Edit a reminder:**

    1. In the **Reminder Notification Settings** area, click **Edit** for a reminder.
    2. On the **Edit Reminder** dialog box, update the name and _before no. of days_ setting for the
       reminder.
    3. Click **OK**.

    **Remove a reminder**:

    - In the **Reminder Notification Settings** area, click **Remove** for a reminder to remove it.

8. On the **Profile Validation** page, click **Save**.

## Identify User Accounts Expired due to Non-Profile Validation

User accounts in an identity store may get disabled for various reasons, such as when the
administrator disables a user in the directory or when the User Life Cycle schedule expires a user
account because the user did not validate his or her directory profile during a given period.

To identify users that are disabled by the User Life Cycle schedule, the administrator can apply the
**Profile Validation Attribute** setting. This setting requires the administrator to select a schema
attribute and specify a string as its value.

- When the User Life Cycle schedule expires a user, it sets the given string as the attribute’s
  value for the user.
- For active users or those disabled for a different reason, this attribute does not have the
  specified string as value.

When the administrator or a helpdesk user extends the profile validation period for a disabled user,
the string value is cleared and the attribute is empty again.

The administrator can access the directory server to check whether the string value is set for the
attribute. For example, he or she can use a standard Microsoft-based Active Directory tool to view
the attribute’s value either natively in the given propertysheet options or via the ADSI property
sheet shell extension.

**To designate an attribute with a value:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Profile Validation**.
4. On the **Profile Validation** page, use the toggle button for **Set an attribute that will be
   updated with the desired value for users that are expired due to non-profile validation** to
   enable the attribute value setting.
5. Select a schema attribute in the **Attribute** drop-down list and specify a string as value for
   it in the **Desired Value** box.  
   When the User Life Cycle schedule expires a user who does not validate his or her profile within
   the given period, it also sets the attribute’s value to the specified string for that user.
6. Click **Save**.

## Apply Settings to Clear the Validation Date

The administrator can specify an x number of days for the ‘Clear the validation data for disabled
users, x number of days after they are disabled’ setting. The User Life Cycle schedule scans all
disabled users and if x number of days have passed since the last validation date, it clears the
validation date.

This setting is required for a potential rehire scenario, in which case the user will be treated as
a newly created object and the validation process for new users will apply to it.

**To apply the setting:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Profile Validation**.
4. On the **Profile Validation** page, use the toggle button for **Clear the validation data for
   disabled users, x number of days after they are disabled** to enable the clear validation date
   setting.
5. In the **After number of Days** box, specify a certain number of days, say 60. The User Life
   Cycle schedule scans all disabled users and if 60 days have passed since the last validation
   date, it clears the validation date.  
   If you specify zero (0), the schedule clears the validation date as soon as it expires the user.
6. Click **Save**.

**See Also**

- [User Life Cycle Schedule](/docs/directorymanager/11.0/signin/schedule/userlifecycle.md)
- [Manage Property Validation Attributes](/docs/directorymanager/11.0/signin/applications/portal/displaytype/propertyvalidation.md)
  (for the GroupID portal)
- [Manage Property Validation](/docs/directorymanager/11.0/signin/service/mobileservice/design/propertyvalidation.md)
  (for the GroupID mobile app)
