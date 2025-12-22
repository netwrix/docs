---
title: "Configure an SMTP Server"
description: "Configure an SMTP Server"
sidebar_position: 10
---

# Configure an SMTP Server

An identity store requires an SMTP server for sending email notifications. It can be an Exchange
server deployed in your environment or an external SMTP server; for example, Gmail or Office 365.

When configuring a provider that supports modern authentication, such as Exchange Online and Office
365, you have the option to use OAuth for modern authentication.

:::note
With Microsoft Entra ID's mandatory multifactor authentication policy, basic authentication
cannot be used for an Office 365 SMTP server. You can only use OAuth for modern authentication.
:::


You can also specify notification recipients, that can be:

- individual recipients
- the user who makes a change to a directory object
- the directory object being modified
- group owners and user managers—a practice that does not require update when role assignments
  change
- owners of a public group on membership changes
- an object that is added to the membership of a group
- an object that is removed from the membership of a group

**What do you want to do?**

- Configure an SMTP Server
- Specify Notification Recipients
- Specify a Portal URL for Password Expiry Group Notifications
- Manage Membership Life Cycle Notifications
- Manage Managed by Life Cycle Notifications

## Configure an SMTP Server

Follow the steps to configure an SMTP Server.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under **Settings** in the left pane. Then click **Notifications**.
The **Notifications** page is displayed.

Step 4 – In the **SMTP Server** section, enter the fully qualified domain name or IP address of the
SMTP server in the **SMTP Server** box. Email notifications will be routed through this server.

Step 5 – Enter the email address to use for sending notifications in the **From email address** box.

Step 6 – Enter a port for communicating with the SMTP server in the **Port** box.

Step 7 – Select the **SSL enabled** check box if the SMTP server is SSL-enabled.

**Set up user authentication**

By default, the credentials of the user logged into Admin Center are used to connect to the SMTP
server. Hence, each user connects to the server in the context of the identity store and credentials
he or she has currently used to sign into Admin Center.  
However, you may choose to specify a single account for connecting, in case your user accounts do
not have rights on the SMTP server or you want to use a dedicated account. Select the **Use SMTP
user authentication** check box. This enables the credentials options, where you can choose _basic
authentication_ or _OAuth_; then provide the credentials of an authorized user account on the SMTP
server.

- **For basic authentication**

    1. Select the **Basic** tile.
    2. Enter the username and password of an authorized user account on the SMTP server in the
       **SMTP username** and **SMTP password** boxes.

- **For modern authentication**

    OAuth settings are available when you specify a provider that supports modern authentication,
    such as Exchange Online and Office 365.

    :::note
    For OAuth to work, you must enable the Graph API’s ‘SMTP.Send’ permission for the
    Directory Manager app in Microsoft Entra Admin Center:
    :::


    1. Click the **OAuth 2.0** tile.
    2. In the **Token Endpoint** box, provide the following URL:  
       https://login.microsoftonline.com/organizations/oauth2/v2.0/token

        :::note
        In case of Office 365 provider, you need to provide Graph Endpoint of your CloudType
        in the **Token Endpoint** box, for example, https://graph.microsoft.com/v1.0
        :::


    3. In the **Client ID** box, provide the client ID assigned to the Directory Manager application
       when you registered it in Microsoft Entra Admin Center.
    4. In the **Client Secret** box, provide the client secret value generated against the
       certificate uploaded to Microsoft Entra Admin Center while registering the Directory Manager
       application.
    5. In the **Scope** box, provide the following URL:  
       https://outlook.office365.com/SMTP.Send

        :::note
        In case of Office 365 provider, provide name of the tenant the **Scope** box, for
        example, abcd.onmicrosoft.com
        :::


    6. In the **Username** and **Password** boxes, provide the credentials to connect to the SMTP
       server.

    :::note
    The user account used for SMTP Authentication for OAuth should have no MFA applied to it
    or have a conditional bypass for GraphAPI requests.
    :::


**Test the connection**

Step 8 – Click **Test Server** to check the server settings. In the **Test Notification** dialog
box, enter an email address to receive the test notification, and click **OK**. A test email is sent
to the provided email address using the configured SMTP settings.

Step 9 – Click **Save** on the **Notifications** page.

## Specify Notification Recipients

Follow the steps to specify notfication recipients.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under **Settings** in the left pane. Then click **Notifications**.
The **Notifications** page is displayed.

Step 4 – In the **To:** and **CC:** boxes in the **Recipients** section, enter the email addresses
of one or more notification recipients, separating multiple addresses with a semicolon (;). All
email notifications generated for the identity store are sent to these recipients.

Step 5 – You can also select other recipients to send email notifications for different events. In
the **Also Notify** area, select the required check boxes.

- Logged in users for their actions – To send email notifications to the logged-on user for changes
  they make to directory objects using Admin Center, Directory Manager portal, and Management Shell.
  This setting applies to mail-enabled users only.
- Object being modified – To send email notifications to the object (group, user, contact) being
  modified. In case of a group, all members are notified.
- Group ownser(s) for their groups To send email notifications to the primary and additional owners
  of groups about changes made to their respective groups.
- Manager(s) for their direct reports – To send email notifications to managers about changes made
  to their respective direct reports.
- Newly added group members on addition – To send email notifications to objects when they are added
  to the membership of a group.
- Removed group member on removal – To send email notifications to objects when they are removed
  from the membership of a group.
- Public group owner for membership – To send email notifications to the primary and additional
  owners of a public group on membership change. See the
  [Group Security Types](/docs/directorymanager/11.1/admincenter/general/concepts.md#group-security-types) topic.

Step 6 – Click **Save** on the **Notifications** page.

## Specify a Portal URL for Password Expiry Group Notifications

A password expiry Smart Group can be created using the Directory Manager portal. Its membership is
limited to users whose identity store account passwords are approaching their expiry dates.

The administrator can apply a setting to send a password expiry warning email to group members every
time group membership is updated. This email includes the URL of a Directory Manager portal to
redirect users there for changing their passwords.

Users who change their passwords are removed from group membership.

Follow the steps to specify the portal URL.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Store page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **Notifications**. The
Notifications page is displayed.

Step 4 – In the Password Expiry Group Notifications section, select the URL of a Directory Manager
portal in the **GroupID Portal URL** drop-down list. This URL will be included in password expiry
warning emails to redirect users to the portal, where they can change their identity store account
passwords.  
The list contains URLs of all Directory Manager portals linked with the identity store.

Step 5 – Click **Save** on the **Notifications** page.

:::note
Password expiry Smart Groups cannot be created in a Microsoft Entra ID identity store.
:::


## Manage Membership Life Cycle Notifications

Membership lifecycle notifications are triggered on the following events:

- When the Membership Life Cycle schedule temporarily adds or removes a user from the membership of
  a semi-private or public group, the respective user is notified.
- Peers and managers can temporarily join or leave a group on behalf of another user (User A).
  Membership lifecycle notifications are sent to User A when the Membership Life Cycle schedule adds
  or removes him or her from group membership.
- Users are also notified when they are temporarily added or removed from group membership according
  to membership lifecycle policies. See the
  [Manage Membership Life Cycle Policies](/docs/directorymanager/11.1/admincenter/identitystore/configure/membershiplifecycle.md) topic.

You can choose to send notification when users are temporarily added to groups, removed from groups,
or on both events.

Follow the steps to set Membership Life Cycle notifications.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **Notifications**. The
page is displayed.

Step 4 – In the Membership Lifecycle Notifications section, select your desired options.

- On joining group – Sends email notifications to users when the Membership Life Cycle schedule
  temporarily adds them to group membership.
- On leaving group – ends email notifications to users when the Membership Life Cycle schedule
  temporarily removes them from group membership.
- X days before user is going to leave the group – Select this check box and specify a certain
  number of days, say 2. The user receives a notification 2 days before he or she is removed from
  group membership by the Membership Life Cycle schedule. This setting also applies to users who
  have been marked for removal from group membership in the group attestation process. (See the
  **Specify member inactive period** setting in the
  [Enable Group Attestation](/docs/directorymanager/11.1/admincenter/identitystore/configure/grouplifecycle.md#enable-group-attestation) topic.

Step 5 – Click **Save** on the **Notifications** page.

## Manage Managed by Life Cycle Notifications

You can set up email notifications for objects when the Managed By Life Cycle schedule adds or
removes them as temporary additional owners for groups and temporary additional managers for users.

When a group is set or removed as a temporary additional owner, all its members are notified.

Follow the steps to set up Managed By Life Cycle notifications.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **Notifications**. The
**Notifications** page is displayed.

Step 4 – In the **Managed By Notifications** section, select your desired options.

- Same as membership life cycle – Applies the membership lifecycle notification settings to the
  managed by life cycle and disables the **Managed By Notifications** section. For example, if _On
  joining group_ is selected for Membership life cycle, it has the same behavior as discussed for
  _Object is added as additional owner/manager_.
- Object is added as additional owner/manager – **Object is added as additional owner/manager** -
  Sends an email notification to an object when the Managed By Life Cycle schedule adds it as the
  temporary additional owner of a group or the temporary additional manager of a user. The primary
  owner or primary manager is also notified accordingly.
- Object is removed as additional owner/manager – Sends an email notification to an object when the
  Managed By Life Cycle schedule removes it as the temporary additional owner of a group or the
  temporary additional manager of a user. The primary owner or primary manager is also notified
  accordingly.
- X Days before object is removed as additional owner/manager – Select this check box and specify a
  certain number of days, say 2. The temporary additional manager/owner receives a notification 2
  days before the Managed By Life Cycle schedule removes him or her as additional manager/owner.

Step 5 – Click **Save** on the Notifications page.