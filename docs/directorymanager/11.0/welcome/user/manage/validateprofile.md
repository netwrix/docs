---
title: "Validate your profile in GroupID"
description: "Verify and update your directory profile, change your primary manager, and transfer or terminate direct reports during profile validation."
keywords:
  - profile validation
  - validate profile
  - primary manager
  - direct reports
  - User Life Cycle job
  - GroupID portal
sidebar_position: 80
---

# Validate your profile in GroupID

The profile validation process in GroupID ensures the accuracy of users' information in
the directory.

When the administrator applies profile validation to a group in an identity store, all group members
must verify and update their profile information in the directory using the GroupID portal. The
administrator also specifies a profile validation life cycle period (for example, 90 days), so that
each member must validate their profile once during each 90-day cycle.

While validating the profile, a user can:

- Update their directory profile.
- Specify or change their primary manager.
- Transfer their direct reports to another manager.
- Terminate their direct reports.

Periodically, users receive reminder emails to validate their profile information. GroupID expires
users who ignore these reminders and don't validate their profiles within the required time.
Expired users get disabled in the directory.

Such users can request the administrator or Helpdesk to unlock their accounts temporarily and grant
an extension period. If they don't validate their profile information within that extension period
either, GroupID expires them again and their managers are informed by email. To reactivate these
accounts, users' managers must send a request to the administrator or Helpdesk. The administrator or
Helpdesk user can extend the profile validation period on the
[View and Manage Disabled Users in GroupID](/docs/directorymanager/11.0/welcome/user/manage/disableduser.md) page of the
portal.

:::note
For notifications to be sent, an SMTP server must be configured for the identity store.
:::

## Profile validation for new users

Apart from the regular profile validation life cycle, the administrator can set a separate profile
validation period for new users by specifying a certain number of days, say 30.

All new users receive a welcome email and a profile validation request, so that users must validate
their profiles for the first time within the given number of days. Once they validate their
profiles, the regular profile validation life cycle settings apply.

## The User Life Cycle job

The profile validation feature in GroupID is monitored by the User Life Cycle job. This is a
scheduled job that runs on a set frequency and does the following:

- Monitors the profile validation dates of users.
- Generates reminder emails.
- Expires users who don't validate their profiles within the given period.

## Validate your profile

If profile validation applies to you, the following message appears on the **My
Account** panel:

![My Account panel showing the number of days left to validate your profile](/images/directorymanager/11.0/portal/user/manage/validateprofile.webp)

The message displays the number of days left to validate your profile.

1. The **My Profile** card on the dashboard indicates your profile validation status. Click it to
   launch the user properties page.
2. The toolbar on the user properties page displays the **Validate your profile** option. Click it
   to launch the profile validation window.
3. Provide or update information in the fields displayed on this window.
4. Your direct reports, if any, are listed in the **My Direct Reports** area. Select one of these
   options for each direct report:

    - **Works for me**
    - **Transfer**
    - **Terminate**

5. After verifying and updating the information, click the **Validate Now** button. Your profile is
   validated and a message is displayed that your changes have been saved.

:::note
You can also manage your direct reports and managers on the **Organization** tab of the
profile window.
:::

## Change your primary manager

The **Manager** field displays the name of your primary manager (if you have one); otherwise, it is blank.

To add or change your primary manager, click the ellipsis button next to the field. This launches
the [Find Users, Groups, and Contacts in GroupID](/docs/directorymanager/11.0/welcome/generalfeatures/find.md), where you can
search and select your primary manager.

When you change your primary manager (Manager A), Manager A is notified by email to accept or
reject the request. If Manager A accepts, your manager is changed. If Manager A rejects the request,
you remain with Manager A and a notification is sent to you and Manager A.

:::note
This is the default flow of the "Workflow to Change Manager" workflow. If the
administrator disables the workflow or changes the approver, the flow changes accordingly. See
[Workflow Requests in the GroupID Portal](/docs/directorymanager/11.0/welcome/request/overview.md).
:::

## Transfer your direct report

When you transfer a direct report, the direct report is notified by email to accept or reject the
transfer. If the direct report accepts the transfer, they must select another primary manager
and validate their profile. If the direct report rejects the transfer, they are transferred back to
the old manager (you).

:::note
This is the default flow of the "Workflow to Transfer a User" workflow, with the direct
report set as the workflow approver. If the administrator disables the workflow or changes the
approver, the flow changes accordingly. See
[Workflow Requests in the GroupID Portal](/docs/directorymanager/11.0/welcome/request/overview.md).
:::

## Terminate your direct report

When you terminate a direct report, it takes effect immediately if the "Workflow to Terminate a
User" workflow is disabled. If enabled, a request is sent to the approver. If the approver accepts
it, the direct report is terminated and if the approver rejects it, the direct report remains with
the manager (you).

**See Also**

- [Manage your GroupID profile](/docs/directorymanager/11.0/welcome/user/manage/viewprofile.md)
- [Organization Tab for Users and Contacts](/docs/directorymanager/11.0/welcome/user/properties/activedirectory/useroverview/organization.md)
- [Workflow Requests in the GroupID Portal](/docs/directorymanager/11.0/welcome/request/overview.md)
- [View and Manage Disabled Users in GroupID](/docs/directorymanager/11.0/welcome/user/manage/disableduser.md)
