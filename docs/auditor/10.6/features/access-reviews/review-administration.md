# Email Templates

The HTML templates used to format notification email can be customized. These templates are designed
to make the message viewable within an email client. It is recommended to edit text and layout as
desired, but NOT to embed new images or logos. The following table shows the notification email
templates and describes the purpose of each.

| Template Name               | Message Type Description                                                                                                                           |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| EntitlementReviewReminder   | Reminds owners of pending reviews; manually sent by a Review Administrator from the Entitlement Reviews interface                                  |
| OwnershipChangeNotification | Sent to owners when assigned ownership is changed for a resource which already has pending reviews                                                 |
| OwnershipConfirm            | Sent to owners to confirm or decline ownership of a given resource; manually sent by an Ownership Administrator from the Resource Owners interface |
| ReminderDigest              | Weekly reminder configured by Administrators on the Notifications page of the Configuration interface to owners with pending reviews               |

While customizing the template content, take note of the inline Substitution Tokens. These exist to
provide the message with dynamic content, i.e. inserting values and strings from data in line with
the static portion of the message body. These Substitution Tokens begin and end with the “@” symbol,
e.g. @UserName@.

Substitution Tokens are only valid for certain Notification message templates. Below is a table of
the Substitution Tokens, the value or string they represent, and the message templates in which they
may be used.

| Substitution Token    | Description                                                                                                                                       | Applicable Template(s)                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| @LoginUrl@            | URL that allows a user to access the default (login) page                                                                                         | OwnershipChangeNotification ReminderDigest |
| @ResourceDescription@ | Description of resource - To use the resource's description in emails instead of the path, replace @ResourcePath@ with @ResourceDescription@      | OwnershipConfirm ReminderDigest            |
| @ResourcePath@        | Path of the current resource - To use the resources’ description in emails instead of the path, replace @ResourcePath@ with @ResourceDescription@ | OwnershipConfirm ReminderDigest            |
| @ResourceType@        | Type of resource                                                                                                                                  | OwnershipConfirm ReminderDigest            |
| @ResourceUrl@         | URL specifically created to respond to a request                                                                                                  | EntitlementReviewReminder OwnershipConfirm |
| @ResponseCount@       | Numerically formatted count of pending reviews                                                                                                    | ReminderDigest                             |
| @ReviewCount@         | Numerically formatted count of pending reviews                                                                                                    | ReminderDigest                             |

## Customize Email Templates

Email templates are shipped in a ZIP file and stored in the Access Reviews installation directory:

...\Netwrix\Access Reviews

Follow the steps to customize the email templates.

**NOTE:** To successfully modify these Notifications email templates, a familiarity with basic HTML
is necessary.

![Access Reviews installation directory showing the Templates zip file](/img/versioned_docs/auditor_10.6/access/reviews/admin/additionalconfig/emailtemplates.webp)

**Step 1 –** Navigate to the Access Reviews installation directory.

**Step 2 –** Unzip the `Templates.zip` file and save the contents to a folder within this directory
named `Templates`.

**CAUTION:** The customized email templates must be in the `Templates` folder within the
installation directory to be preserved during future application upgrades.

![Templates folder showing email templates](/img/versioned_docs/auditor_10.6/access/reviews/admin/additionalconfig/emailtemplatesfolder.webp)

**Step 3 –** Locate the desired HTML message template.

**Step 4 –** Open the file with a text editor, e.g. Notepad, and customize the email body.

**NOTE:** Using a tool other than a text editor to edit HTML files, such as a WYSIWYG web page
editor which may drastically alter the underlying HTML code, is not supported.

**Step 5 –** Email subject lines can be edited by changing the text between the opening `<title>`
tag and the closing `</title>` tag.

**Step 6 –** After making changes, save the file and view it within a web browser to see what the
changes will look like. The Substitution Tokens will display without supplied values.

**Step 7 –** After making the desired changes, save and close the text editor. Then re-launch the
application.

The modifications to the HTML email templates are in use by the notification emails.

# Additional Configuration Options

In addition to the settings that are available on the Configuration interface, the following
configurations and customizations can be done by Administrators:

- [Email Templates](/docs/auditor/10.6/features/access-reviews/review-administration.md)
- [Timeout Parameter](/docs/auditor/10.6/features/access-reviews/review-administration.md)

# Timeout Parameter

A user session will end when the timeout parameter for inactivity has been reached, and the user
will be logged out. By default this is set to 15 minutes.

The timeout parameter is configured within the `AccessInformationCenter.Service.exe.Config` file in
the Access Reviews installation directory:

...\Netwrix\Access Reviews

Follow the steps to modify the timeout parameter.

**Step 1 –** Open the `AccessInformationCenter.Service.exe.Config` file with a text editor, e.g.
Notepad.

![Notepad showing the AccessInformationCenter.Service.exe.Config file](/img/versioned_docs/auditor_10.6/access/reviews/admin/additionalconfig/timeout.webp)

**Step 2 –** Change the value for the `AuthSessionTimeout` parameter to the desired number of
minutes. For example:

<add key="AuthSessionTimeout" value="20"/>

**Step 3 –** Save and close the file.

A user session times out after the number of minutes specified for inactivity, for example after 20
minutes.

# Active Directory Page

The Access Reviews application needs to be connected to Active Directory for user authentication and
to assign resource ownership in the Resource Owners interface. The Active Directory service account
is configured on the Active Directory page of the Configuration interface. Read access to Active
Directory is required for this purpose.

The Active Directory service account is configured during installation based on the account used for
connecting to the database. If your Database service account uses:

- SQL Server authentication credentials — Active Directory service account is configured to use the
  Local System, or computer account, which typically has Read rights to the domain
- Windows authentication credentials — The same domain credentials are also used for the Active
  Directory service account

![Configuration interface showing the Active Directory page](/img/product_docs/accessanalyzer/11.6/admin/hostdiscovery/wizard/activedirectory.webp)

There are two options for the type of Active Directory service account:

- Use the account running this service — Local System, or computer account (NT AUTHORITY\SYSTEM)
- Use the following Active Directory account — Uses a domain account with the required permissions
  to Active Directory. The supplied User Name [DOMAIN\USERNAME] and Password are used as the Active
  Directory service account.

Multiple Domains

The **Allow authentication from the following domains** option is where additional domains can be
introduced to the Access Reviews Console. By default the domain where the Access Reviews Console
resides is listed. Domains that are in the same forest or have a trust can be added in a
comma-separated list.

- For example: nwxtech.com,example.com

_Remember,_ click **Save** when any changes are made to this page.

## Update the Active Directory Service Account Password

Follow the steps to update the Active Directory service account password. These steps only apply for
the **Use the following Active Directory account** option.

**Step 1 –** On the Active Directory page, enter the new password in the correct field.

**Step 2 –** Click **Save**. Then click **OK** to confirm.

The Active Directory service account password has been updated.

# Console Access Page

Console access is configured through the Configuration > Console Access page. Adding users to the
Access Reviews Console requires the Active Directory service account to be configured.

![Configuration interface showing the Console Access page](/img/product_docs/accessanalyzer/11.6/admin/settings/access/rolebased/consoleaccess.webp)

There are two levels of access, or roles, which can be granted to domain users or groups:

- Administrator – Role allows access to all interfaces including the Configuration interface
- Security Team – Role allows access to all interfaces except for the Configuration interface

  - In the Entitlement Reviews interface, this role can only view reviews that the logged in user
    has created.
  - Access can be limited by resource types (File System, SharePoint, or Active Directory)

**CAUTION:** Before disabling the Builtin Administrator account, it is necessary to first assign at
least one domain user account to the Administrator role. Login with another Administrator account to
disable the Builtin Administrator. Failure to do this could result in being locked-out of the
Configuration interface. As an alternative to disabling this account, the password can be changed.
See the [Modify the Builtin Administrator Account](#modify-the-builtin-administrator-account) topic
for additional information.

Once users have been granted console access, they can login with their domain credentials. Console
access is not a requirement for owners to complete Access Reviews. See the
[URL & Login](/docs/auditor/10.6/features/access-reviews/review-administration.md) topic for information on
how users will log in and where they are directed after login based on their assigned role or lack
of role.

## Add Console Users

Follow the steps to grant domain users or groups console access.

![Console Access Page](/img/product_docs/accessanalyzer/11.6/admin/settings/access/rolebased/consoleaccess.webp)

**Step 1 –** In the Configuration interface on the Console Access page, click Add. The Console
Access wizard opens.

![Console Access wizard showing the Select Trustees page](/img/versioned_docs/auditor_10.6/access/reviews/admin/configuration/consoleaccessselecttrustee.webp)

**Step 2 –** On the Select Trustee page, enter the following information and click Next:

- Domain — If the Access Reviews Console has been configured for multiple domains, use the drop-down
  menu to select the desired domain
- Search — Begin typing the sAMAccountName or display name and the field will auto-populate options
  from Active Directory sAMAccountName

![Console Access wizard showing the Select Access page](/img/versioned_docs/auditor_10.6/access/reviews/admin/configuration/consoleaccessselectaccess.webp)

**Step 3 –** On the Select Access page, enter the following information and click **Finish**:

- Select a role for this trustee – Select a role from the drop down list:

  - Unlimited Access — The Administrator role grants unlimited access
  - Limited Access — All other roles can be granted limited access

- Allow access to the following resource — When enabled, users can be limited to only having
  visibility into data for the selected types of resources. Check the boxes for the type of resource
  data to be made available to this user.
- Access is enabled – A user's account must be enabled in order to log into the console. Unchecking
  this option allows you to configure access to be granted at a future time.

![Console Access Page displaying users with various assigned roles](/img/versioned_docs/auditor_10.6/access/reviews/admin/configuration/consoleaccessadd.webp)

**Step 4 –** The new user displays in the list on the Console Access page. Repeat these steps for
each trustee to be granted console access.

Once the first user with the role of Administrator has been added, the Builtin Administrator account
can be disabled by that user. See the
[Modify the Builtin Administrator Account](#modify-the-builtin-administrator-account) topic for
additional information.

## Modify Console Users

Follow the steps to modify a user’s console access.

**NOTE:** These steps are for modifying domain users with console access roles and do not apply to
the Builtin Administrator account. See the
[Modify the Builtin Administrator Account](#modify-the-builtin-administrator-account) topic for
additional information.

**Step 1 –** In the Configuration interface on the Console Access page, select the user to be
modified and click Modify. The Console Access wizard opens to the Select Access page.

![Console Access wizard showing the Select Access page when modifying](/img/versioned_docs/auditor_10.6/access/reviews/admin/configuration/consoleaccessmodifyselectaccess.webp)

**Step 2 –** Modify the desired settings and click **Finish**:

- Select a role for this trustee – Select a role from the drop down list:

  - Unlimited Access — The Administrator role grants unlimited access
  - Limited Access — All other roles can be granted limited access

- Allow access to the following resource — When enabled, users can be limited to only having
  visibility into data for the selected types of resources. Check the boxes for the type of resource
  data to be made available to this user.
- Allow access to the following servers — When enabled, users can be limited to only having
  visibility into data for specific servers. Begin typing server names and the field will
  auto-populate with known servers from scanned data. A resource type appears in parentheses after
  the host name for quick reference.
- Access is enabled – A user's account must be enabled in order to log into the console. Unchecking
  this option allows you to configure access to be granted at a future time.

Any modifications to the user’s role are visible in the list on the Console Access page.

## Delete Console Users

**CAUTION:** Confirmation is not requested when deleting users. An alternative to deleting a console
user is to disable their access. See the [Modify Console Users](#modify-console-users) topic for
additional information.

Follow the steps to remove a user’s configured console access.

![Console Access Page showing various user accounts, with one selected enabling the Modify and Remove buttons](/img/versioned_docs/auditor_10.6/access/reviews/admin/configuration/consoleaccessremove.webp)

**Step 1 –** In the Configuration interface on the Console Access page, select the user.

**Step 2 –** Click Remove.

The user is removed from the list on the Console Access page.

## Modify the Builtin Administrator Account

The Builtin Administrator account can be disabled or its password can be changed. Follow the steps
to modify this account.

![modifybuiltinadministrator](/img/versioned_docs/auditor_10.6/access/reviews/admin/configuration/modifybuiltinadministrator.webp)

**Step 1 –** In the Configuration interface on the Console Access page, select the Builtin
Administrator account and click **Modify**. The Builtin Administrator window opens.

**Step 2 –** Modify the account as desired and click **OK**:

- Access is enabled — Indicates whether the account can be used to login
- Change Password — Allows you to change the password for this Builtin Administrator account. Check
  the box and enter the new password in both entry fields. The password must be eight or more
  characters long.

The modifications to the Builtin Administrator are processed.

**NOTE:** The new password is encrypted in the `AccessInformationCenter.Service.exe.Config` file, in
the `AuthBuiltinAdminPassword` parameter. If you forget the Admin password, you can clear the
`AuthBuiltinAdminPassword` value in the `AccessInformationCenter.Service.exe.Config` file. Then use
the default first launch login credentials to set a new password.

# Database Page

The Access Reviews application must have access to the SQL Server hosting the database. It is
configured during installation. If it is necessary to modify these setting after installation, that
is done on the Database Page of the Configuration interface.

![Configuration interface showing the Database page](/img/versioned_docs/threatprevention_7.4/threatprevention/install/database.webp)

SQL Server database information:

- Server Name – Host name of the SQL Server serving the database in one of the following formats:

  - No named instance: [SQLHostName]

    - Example: NT-SQL02

  - Named instance: [SQLHostName]\[SQLInstanceName]

    - Example: NT-SQL02\Netwrix

  - No named instance with non-standard port: [SQLHostName],[PortNumber]

    - Example: NT-SQL02,1392

  - Named instance with non-standard port: [SQLHostName]\[SQLInstanceName],[PortNumber]

    - Example: NT-SQL02\Netwrix,1392

- Database – Name of the SQL database

Database service account information:

- Use the windows account running this service — Local System, or computer account (NT
  AUTHORITY\SYSTEM)
- Use the following SQL account – Uses SQL Authentication to the database. Provide the properly
  provisioned SQL credentials for the database

_Remember,_ click **Save** when any changes are made to this page.

## Update the Database Service Account Password

Follow the steps to update the Database service account password. These steps only apply for the SQL
Authentication option.

**Step 1 –** On the Database page, enter the new password in the correct field.

**Step 2 –** Click **Save**. Then click **OK** to confirm.

The Database service account password has been updated.

# Diagnostics Page

Download logs and enable debug log level for troubleshooting with Netwrix Support on the Diagnostics
page of the Configuration interface.

![Configuration interface showing the Diagnostics page](/img/versioned_docs/auditor_10.6/access/reviews/admin/configuration/diagnostics.webp)

When requested by [Netwrix Support](https://www.netwrix.com/support.html), click Download Logs to
download the archive of all application logs.

## Debug Logs

When requested by [Netwrix Support](https://www.netwrix.com/support.html) , follow the steps to
provide debug logs.

**Step 1 –** On the Diagnostics page, check the Enable debug logging box.

**Step 2 –** Click **Save**.

**Step 3 –** Reproduce the issue you are having.

**Step 4 –** On the Diagnostics page, click **Download Logs**.

The downloaded logs have the debug logging information and can be sent to
[Netwrix Support](https://www.netwrix.com/support.html). When your issue is resolved, do not forget
to turn off Debug logs.

# Notifications Page

The Access Reviews application uses the Simple Mail Transfer Protocol (SMTP) to send email messages.
SMTP server information and several messaging options can be set through the Configuration >
Notifications page.

![Notifications Page](/img/versioned_docs/auditor_10.6/access/reviews/admin/configuration/notifications.webp)

At the top, the SMTP server and email security settings are configured. The Notification options is
where you configure the sender information, and other optional settings. The Reminders section is
for configuring weekly reminders for owners with outstanding reviews.

## Configure SMTP Server Settings

SMTP server information is supplied and modified on the Notifications page. Follow the steps to
configure or modify the SMTP settings.

![Notifications page SMTP server settings section](/img/versioned_docs/auditor_10.6/access/reviews/admin/configuration/notificationssmtp.webp)

**Step 1 –** In the Configuration interface, select the Notifications page.

**Step 2 –** Enter the SMTP Server Name in the textbox. This should be the fully qualified domain
name (mail.example.com) or IP Address.

**Step 3 –** If needed, modify the Port used by your SMTP server to listen for new messages.
Historically, the default for SMTP has been port 25. However, if a secure connection is desired
(SSL/TLS), the SMTPS port needs to be changed, traditionally 465. Alternately, environments with
off-premises or outsourced email service, e.g. gmail.com, hotmail.com, etc., may have to supply a
different submission port, traditionally port 587. Ultimately it is an organization’s
email/messaging administrator who will know the proper value for the SMTP port.

**Step 4 –** SMTP security settings:

- Use a secure connection for this server (SSL/TLS) – Allows for the use of a secure transport layer
  for message relay requests (submissions) and authentication requests
- Enforce certificate validation to ensure security — Forces the use of certificate validation
- This server requires authentication – Enable if the identified SMTP server requires
  authentication. Some SMTP servers traditionally have been configured to deny all but anonymous
  relay requests, i.e. an attempt to authenticate results in a denial, while an anonymous request is
  not denied. Select this checkbox, and then select one of the following radio buttons if
  authentication is required:

  - Use the account running this service

    - To use this option, the SMTP server must be configured to use Integrated Windows
      Authentication (IWA).
    - Select this radio button if the configured Active Directory service account will also be
      used to authenticate to the SMTP server.

  - Use the following AD Account

    - To use this option, the SMTP server must be configured to use Integrated Windows
      Authentication (IWA).
    - Select this radio button to specify either domain account or a traditional SMTP account
      and password to authenticate to the SMTP server.

![Test Settings window](/img/versioned_docs/auditor_10.6/access/reviews/admin/configuration/notificationstestsettings.webp)

**Step 5 –** Click **Test Settings** to ensure a connection to the SMTP server. The Test Settings
window opens. Enter a valid email address and click **OK**.

![Testing your settings window](/img/versioned_docs/auditor_10.6/access/reviews/admin/configuration/notificationstestconfirm.webp)

**Step 6 –** If the SMTP settings are configured correctly, you receive a successful message. Click
**OK** to close the Testing your settings window. The test recipient should have recieved a test
email.

**Step 7 –** Click **Save**. Then click **OK** to confirm.

The Access Reviews Console is now configured to send email. See the following topics for additional
Notification options.

## Notification Options

Once the SMTP server is configured, there are additional options. Only the Reply-To field must be
populated:

![Notifications page showing Notification Options section](/img/versioned_docs/auditor_10.6/access/reviews/admin/configuration/notificationsoptions.webp)

- Reply-To — The email address that receives responses to notifications sent by the application.
  This can be a “no reply” address.
- Reply-Display — Optionally enter a display name for the sender
- Carbon-Copy — Optionally set additional email addresses to be CC’d on all email messages sent
- Server Name Alias — Optionally provide an alternate name for the URL link to the Access Reviews
  Console. By default, the URL is the hosting server name and port, e.g. NEWYORKSRV10:81. If you do
  not want the server name visible in the URL, provide an alias here, e.g. AIC.NWXTECH.com.
- Send notifications to all resource owners — This option applies only to resources with multiple
  assigned owners. When unchecked, notifications are only sent to the Primary Owner. Check this
  option to send owner notifications to all assigned owners.

_Remember,_ click **Save** after making modifications to the Notification settings.

## Reminders

Resource Owners receive notification email when there are new pending tasks associated to their
resources. You can also set up automated weekly reminders for outstanding pending tasks. Follow the
steps to configure weekly reminders to resource owners.

![Notifications page showing the Reminders section](/img/versioned_docs/auditor_10.6/access/reviews/admin/configuration/notificationsreminders.webp)

**Step 1 –** In the Configuration interface, select the Notifications page and scroll down to the
Reminders section.

**Step 2 –** Check the Send reminders to owners with pending events option.

**Step 3 –** Set the date and time for when the reminder will be sent:

- Day of the week – Select the day of the week from the drop-down menu
- Time of day – Click on the field to open a clock window. Set the time of day reminders will be
  sent, e.g. 12:00 AM

**Step 4 –** Click **Save**. Then click **OK** to confirm.

Assigned resource owners now receive weekly reminders of pending events. The **Notifications were
last sent on** field will populate with the date timestamp for when the last set of reminders were
sent.

# Configuration Interface Overview

The Configuration interface is available only to users with the Administrator role. It is opened by
the **Configuration** tab.

![Configuration interface showing the Console Access page](/img/product_docs/accessanalyzer/11.6/admin/settings/access/rolebased/consoleaccess.webp)

It has the following pages:

- [Console Access Page](/docs/auditor/10.6/features/access-reviews/review-administration.md)
  – Grant users console access
- [Active Directory Page](/docs/auditor/10.6/features/access-reviews/review-administration.md)
  – Configure the Active Directory service account used to add console users.
- [Notifications Page](/docs/auditor/10.6/features/access-reviews/review-administration.md)
  – Configure the SMTP server, email security settings, notification options, and owner reminder
  settings
- [Database Page](/docs/auditor/10.6/features/access-reviews/review-administration.md) –
  Configure the connection to the database
- [Diagnostics Page](/docs/auditor/10.6/features/access-reviews/review-administration.md)
  – Download logs and enable debug log level for troubleshooting

# First Launch

The installer places the following icon on the desktop which opens the Access Reviews Console:

![desktopicon](/img/versioned_docs/threatprevention_7.4/threatprevention/install/desktopicon.webp)

Use this icon to launch the Access Reviews Console for the first time.

![Set Builtin Administrator Password page](/img/versioned_docs/auditor_10.6/access/reviews/admin/firstlaunchpassword.webp)

The Access Reviews application is installed with a Builtin Administrator account; "admin" is the
User Name. You will be prompted to set the account's password. It must be eight or more characters
long. After setting the password, you will need to login with the "admin" account.

Using the Configuration interface, the Builtin Administrator account can be disabled once a domain
account has been granted the Administrator role. You can also change the password for the Builtin
Administrator account. See the
[Modify the Builtin Administrator Account](/docs/auditor/10.6/features/access-reviews/review-administration.md#modify-the-builtin-administrator-account)
topic for additional information.

![firstlaunchlandingpage](/img/versioned_docs/auditor_10.6/access/reviews/admin/firstlaunchlandingpage.webp)

The Resource Owners interface opens. The first thing that should be done is to configure console
access for domain users and configure notification settings. Select the Configuration tab. See the
[Console Access Page](/docs/auditor/10.6/features/access-reviews/review-administration.md)
and
[Notifications Page](/docs/auditor/10.6/features/access-reviews/review-administration.md)
topics for additional information.

The interfaces available to console users are controlled by the role assigned. Owners do not need to
be assigned console access. See the
[URL & Login](/docs/auditor/10.6/features/access-reviews/review-administration.md) topic for information on
how users will log in and where they are directed after login.

See the [Navigation](/docs/auditor/10.6/features/access-reviews/review-administration.md) topic for
information on each of the interfaces.

# URL & Login

The Access Reviews Console can be accessed through a supported browser from a machine within your
company's network. The URL is the hosting machine's name and the
port, http://[HOSTNAME.DOMAIN.COM]:81. For example, if the application was installed on a server
named NEWYORKSRV10.NWXTech.com with the default port of 81, the URL would be
http://NEWYORKSRV10.NWXTech.com:81.

Administrators

Administrators with access to the server hosting the application can use the desktop icon to launch
the application in their default browser. Alternatively, the localhost URL can be used:

- HTTP URL

  - http://localhost:81

- HTTPS URL

  - https://localhost:481

Remote Access

Since Access Reviews is a browser-based application, it is possible to access the web interface
remotely. It is up to the Administrator to provide users with the correct URL for access.

Depending on your network environment, you may need to use the NetBIOS name, FQDN, or IP Address of
the hosting server in the browser. Also, additional configurations by network and system
administrators may be necessary to make the web server accessible to remote users (firewall
configurations, DNS settings, etc.).

The server name in the URL can be replaced with an alias. See the
[Notification Options](/docs/auditor/10.6/features/access-reviews/review-administration.md#notification-options)
topic for additional information.

## Login Page

Users login with their domain credentials. If only one domain is known to the Access Reviews
Console, the credentials need only be username and password. If multiple domains are known, then the
username needs to be entered in the `domain\username` format.

**NOTE:** The URL may need to be added to the browser’s list of trusted sites.

![Access Information Center Login page](/img/versioned_docs/threatprevention_7.4/threatprevention/eperestsite/login.webp)

The interface a user arrives at depends upon the assigned role or lack of assigned role.

## User Landing Page

Role based access controls what interfaces users can see and where each user is directed upon login.

**_RECOMMENDED:_** Send an email to your users. Let them know why you are implementing use of the
application, provide the URL, and explain how to login with their domain credentials and the
username format. See the
[Enable Console Users](/docs/auditor/10.6/features/access-reviews/index.md#enable-console-users)
topic for additional information.

### Administrator Role

Users granted the Administrator role are directed to the Resource Owners interface upon login.

![Resource Owners interface as the landing page for an Administrator user](/img/versioned_docs/auditor_10.6/access/reviews/admin/landingadmin.webp)

Administrators are the only ones with access to the Configuration interface. The My Reviews
interface is available if the logged in user is also assigned ownership of a resource.

### Security Team Role

Users granted the Security Team role are directed to the Resource Owners interface upon login.

![Resource Owners interface as the landing page for a Security Team user](/img/versioned_docs/auditor_10.6/access/reviews/admin/landingsecurityteam.webp)

Security Team members only lack access to the Configuration interface, which is only available to
Administrators. The My Reviews interface is available if the logged in user is also assigned
ownership of a resource.

### Owners Without Role

Users assigned ownership of a resource but not granted a user role are directed to the My Reviews
interface upon login.

![My Reviews interface as the landing page for an Owner without a user role](/img/versioned_docs/auditor_10.6/access/reviews/admin/landingowner.webp)

Owners can view pending reviews and view historical reviews.

# Navigation

The Access Reviews Console has four interfaces. Upon login, users granted console access are brought
to the Resource Owners interface.

![Access Information Center landing page, Resource Owners interface, with all 4 tabs available to an Administrator who is also an assigned owner](/img/versioned_docs/threatprevention_7.4/threatprevention/reportingmodule/interface.webp)

The signed in user is displayed in the upper-right corner, along with the **Sign out** link. The
available interfaces change according to the role assigned to the user.

For Administrator Only

The Configuration tab opens the Configuration interface. Configure console access, Active Directory
service account, notification settings, database access, and diagnostic logging level.

This interface is available only to users with the Administrator role. See the
[Configuration Interface Overview](/docs/auditor/10.6/features/access-reviews/review-administration.md)
topic for additional information.

For Security Team & Administrator

The Resource Owners tab opens the Resource Owners interface. Manage resource ownership by assigning
owners to resources and requesting ownership confirmation. Resources to be included in the Access
Reviews workflow must first be assigned at least one owner within the Resource Owners interface.
Assigned owners can log in to complete reviews.

This interface is available only to users with either the Security Team or Administrator role. See
the
[Resource Owners Interface](/docs/auditor/10.6/features/access-reviews/resource-owners.md)
topic for additional information.

The Entitlement Reviews tab opens the Entitlement Reviews interface. Create and manage reviews.
There are two types of reviews for resources being managed within the Access Reviews application:
resource Access reviews and group Membership reviews. This does require the Access Reviews
application to be configured to send notifications.

This interface is available only to users with either the Security Team or Administrator role. See
the
[Entitlement Reviews Interface](/docs/auditor/10.6/features/access-reviews/entitlement-reviews.md)
topic for additional information.

For Assigned Owner

The My Reviews tab opens the My Reviews interface. It is only visible if the logged in user is also
an assigned owner of at least one resource. Assigned owners without a user role are directed to the
My Reviews interface at login.

The My Reviews interface is available to any domain user who has been assigned ownership of a
resource. See the
[Owners & Access Reviews](/docs/auditor/10.6/features/access-reviews/resource-owners.md)
topic for additional information.

## Interface Quick Reference

The table below is a quick reference aligning each interface with its purpose, how to access it, and
who has access to it:

| Interface           | Purpose                                                                                                                           | Opened By                                                      | Accessible To                         |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------- |
| Configuration       | Configure console access, Active Directory service account, notification settings, database access, and diagnostic logging level. | **Configuration** tab                                          | Administrator role                    |
| Resource Owners     | Manage resource ownership by assigning owners to resources and requesting ownership confirmation.                                 | **Resource Owners** tab                                        | Administrator role Security Team role |
| Entitlement Reviews | Create and manage reviews.                                                                                                        | **Entitlement Reviews** tab                                    | Administrator role Security Team role |
| My Reviews          | View and process pending reviews. Also view historical reviews.                                                                   | **My Reviews** tab Direct from login for owners without a role | Assigned Resource Owners              |

# Administrator Overview

Access Reviews administrators have access to the Configuration interface where there application
settings reside. This topic includes the following subtopics:

- [Getting Started](/docs/auditor/10.6/features/access-reviews/index.md#getting-started)
- [First Launch](/docs/auditor/10.6/features/access-reviews/review-administration.md)
- [Navigation](/docs/auditor/10.6/features/access-reviews/review-administration.md)
- [Configuration Interface Overview](/docs/auditor/10.6/features/access-reviews/review-administration.md)
- [Additional Configuration Options](/docs/auditor/10.6/features/access-reviews/review-administration.md)
- [URL & Login](/docs/auditor/10.6/features/access-reviews/review-administration.md)
- [Troubleshooting](/docs/auditor/10.6/features/access-reviews/review-administration.md)

# Update Credential Passwords

Credential passwords occasionally need to be updated due to various reasons, such as security
policies that require passwords to be reset on a regular basis. The following types of credentials
may be impacted by password changes or security policies:

- Database service account
- Active Directory service account
- SMTP authentication service account
- Application Service Account
- Bultin Administrator account

## Database Service Account

The Database service account grants access to the SQL Server database. It can be updated on the
Database page of the Configuration interface. See the
[Update the Database Service Account Password](/docs/auditor/10.6/features/access-reviews/review-administration.md#update-the-database-service-account-password)
topic for instructions.

## Active Directory Service Account

The Active Directory service account handles user authentication to the Access Reviews Console. It
can be updated on the Active Directory page of the Configuration interface. See the
[Update the Active Directory Service Account Password](/docs/auditor/10.6/features/access-reviews/review-administration.md#update-the-active-directory-service-account-password)
topic for instructions.

## SMTP Authentication Service Account

An SMTP server is required for the application to send notifications. If the SMTP server requires
authentication, the service account can be updated on the Notifications page of the Configuration
interface. See the
[Configure SMTP Server Settings](/docs/auditor/10.6/features/access-reviews/review-administration.md#configure-smtp-server-settings)
topic for instructions.

## Application Service Account

The account used to run the Netwrix Auditor Access Reviews service can be updated using Services
Control Manager console. See the
[Modify the Service Account via Service Control Manager](/docs/auditor/10.6/features/access-reviews/review-administration.md#modify-the-service-account-via-service-control-manager)
topic for instructions.

## Builtin Administrator Account

The Builtin Administrator account is an application account that is created during the first launch.
It is used to complete the initial configuration steps and to grant console access to domain users.
This account can be disabled after Administrator users are added. However, if it is enabled and a
security policy requires the password to be reset, it can be updated on the Console Access page of
the Configuration interface. See the
[Modify the Builtin Administrator Account](/docs/auditor/10.6/features/access-reviews/review-administration.md#modify-the-builtin-administrator-account)
topic for modification instructions.

# Change Log Level

The `AccessInformationCenter.Service.exe.Config` file is located in the `Logs` folder of the Access
Reviews installation directory:

...\Netwrix\Access Reviews

Follow the steps to modify the log level.

**Step 1 –** Open the `AccessInformationCenter.Service.exe.Config` file in a text editor, e.g.
Notepad.

![AccessInformationCenter.Service.exe.Config file in Notepad](/img/versioned_docs/auditor_10.6/access/reviews/admin/troubleshooting/logvalue.webp)

**Step 2 –** The level value is set in the `LogLevel` parameter, where "2" is the default level. As
the logging level increases from 0 to 3, the types of information and level of detail included
within the log file also increase. Change to the desired log level:

<add key="LogLevel" value="2" />

- Error level is when `value="0"`
- Warning level is when `value="1"`
- Info level is when `value="2"`
- Debug level is when `value="3"`

  - Debug logging can be enabled from the Diagnostics page of the Configuration interface

**Step 3 –** Save and close the `AccessInformationCenter.Service.exe.Config` file.

Once troubleshooting has finished, it is recommended to return the log level to the default level,
Info = 2, to prevent the log file from growing too large.

# Troubleshooting

The following are several troubleshooting tips that can assist with diagnosing trouble with the
Access Reviews application. If engaging with
[Netwrix Support](https://www.netwrix.com/support.html), it will be useful to be aware of these.

Configuration of Permissions on the Installation Directory:

The Windows service account running the Netwrix Auditor Access Reviews service may be used as the
Database service account, the Active Directory service account, and/or the SMTP authentication
account. Check the Database, Active Directory, and Notification pages in the Configuration interface
to confirm where the account is in use before modifying it to ensure these functionality are not
impaired. If this account is changed, a new account must have the **Full Control** permission to
files and folders in the Access Reviews installation directory. See the
[Application Service Account](/docs/auditor/10.6/features/access-reviews/review-administration.md)
topic for additional information.

Log File:

By default the Access Reviews application is configured to log at the Info level. When requested by
Netwrix Support, you can enable Debug level from the Diagnostics page of the Configuration
interface. See the
[Diagnostics Page](/docs/auditor/10.6/features/access-reviews/review-administration.md)
topic for additional information.

If a different log level is needed or desired, the `aic.log` file can be modified. See the
[Change Log Level](/docs/auditor/10.6/features/access-reviews/review-administration.md)
topic for additional information.

Credential Password Changes:

The Access Reviews application uses several different types of service accounts. If a credential
password for one of these accounts is no longer valid, it will impact application functionality.
Additionally, if the Builtin Administrator account remains enabled, it may be necessary to reset the
password. See the
[Update Credential Passwords](/docs/auditor/10.6/features/access-reviews/review-administration.md)
topic for additional information.

# Application Service Account

The Windows service account running the Netwrix Auditor Access Reviews service may be used as the
Database service account, the Active Directory service account, and/or the SMTP authentication
account. Check the Database, Active Directory, and Notification pages in the Configuration interface
to confirm where the account is in use before modifying it to ensure these functionality are not
impaired. If the same account is being used for multiple purposes, it will require the proper
permissions for each purpose.

It may become necessary (for testing purposes, infrastructure changes, etc.) to change the Windows
account set to run the Netwrix Auditor Access Reviews service. The following step-by-step
instructions are for modifying this account within the Services Control Manager console.

**CAUTION:** The account assigned to run the Netwrix Auditor Access Reviews service must have Full
Control over the installation directory:

...\Netwrix\Access Reviews

## Modify the Service Account via Service Control Manager

Follow the steps to enable and/or modify the Windows service account running the Netwrix Auditor
Access Reviews service.

**Step 1 –** Navigate to Service Control Manager (`services.msc`). The Services Control Manager
opens.

![Services Manager Console showing the Netwrix Access Information Center service and the right-click Menu](/img/versioned_docs/auditor_10.6/access/reviews/admin/troubleshooting/servicesmanager.webp)

**Step 2 –** Right-click on the Netwrix Auditor Access Reviews service and select **Properties**.
The service Properties window opens.

![Netwrix Access Information Center service Properties window with Select User browser window](/img/versioned_docs/auditor_10.6/access/reviews/admin/troubleshooting/serviceproperties.webp)

**Step 3 –** On the **Log On** tab, select the **This account** radio button. Enter the account name
using NTAccount format [```DOMAIN\username```]. Optionally, use the **Browse** button to search for
the account. Enter the account's password in both the **Password** and **Confirm password** fields.
Then click **OK**. The Properties window closes.

**Step 4 –** The selected account is displayed in the Log On As column for the service. Either
Restart or Stop and Start the service for this change to take affect.

The Netwrix Auditor Access Reviews service is now running with the supplied Windows account.

# Install

Once the prerequisites have been met, follow the steps to install the Access Reviews application.

**Step 1 –** Run the `AccessReviews.exe` executable, and the Netwrix Auditor Access Reviews Setup
wizard opens.

![Netwrix Auditor Access Reviews Setup wizard Welcome page](/img/versioned_docs/auditor_10.6/access/reviews/installation/installwelcome.webp)

**Step 2 –** On the Welcome page, click the Next button to begin the installation process.

![Netwrix Auditor Access Reviews Setup wizard End-User License Agreement page](/img/versioned_docs/auditor_10.6/access/reviews/installation/installeula.webp)

**Step 3 –** On the End-User License Agreement page, check the **I accept the terms in the License
Agreement** box and click **Next**.

![Netwrix Auditor Access Reviews Setup wizard Destination Folder page](/img/versioned_docs/auditor_10.6/access/reviews/installation/installdestinationfolder.webp)

**Step 4 –** On the Destination Folder page, you can choose between the default destination folder
and a custom folder. Click Change to browse for a different location. When the destination is set as
desired, click **Next**.

**NOTE:** The default location is `C:\Program Files\Netwrix\Access Access Reviews\`. There are no
specific requirements for changing the path.

![Netwrix Auditor Access Reviews Setup wizard SQL Server Connection page](/img/versioned_docs/auditor_10.6/access/reviews/installation/installsql.webp)

**Step 5 –** On the SQL Server Connection page, provide the required database information. Click
Next to test the connection to the SQL Server.

- Server — Enter the database server hostname (NetBIOS name, FQDN, or IP Address) with the instance
  name or non-standard port, if applicable, in one of the following formats:

  - No named instance, use [SQLHostName], e.g. NT-SQL02
  - Named instance, use [SQLHostName]\[SQLInstanceName], e.g. NT-SQL02\Netwrix
  - No named instance with non-standard port, use [SQLHostName],[PortNumber], e.g. NT-SQL02,72
  - Named instance with non-standard port, use [SQLHostName]\[SQLInstanceName],[PortNumber], e.g.
    NT-SQL02\Netwrix,72

- Database — Enter the name of the database. By default, this is set to NetwrixAR.

- Authentication — Select the Database service account type from the drop-down menu. Then enter the
  account information in the **User Name** and **Password** fields.
  - For Windows Authentication — **User Name** format must be [DOMAIN]\[username] , e.g.
    NWXTECH\ad.bruce

**NOTE:** See the
[Database Page](/docs/auditor/10.6/features/access-reviews/review-administration.md) topic
for additional information.

![Database does not exist Confirmation Window](/img/versioned_docs/auditor_10.6/access/reviews/installation/installsqldatabase.webp)

**Step 6 –** If there are no errors, you will be asked to confirm creation of the new database.
Click **Yes**.

![Netwrix Auditor Access Reviews Setup wizard Configure Web Server page](/img/versioned_docs/auditor_10.6/access/reviews/installation/installconfigurewebserver.webp)

**Step 7 –** On the Configure Web Server page, you can choose between the default port and a custom
port on which the application will be accessible. To change the port, enter a new port number in the
field. When the port is set as desired, click **Next**.

**NOTE:** The default port is 81.

![Netwrix Auditor Access Reviews Setup wizard Ready to Install page](/img/versioned_docs/auditor_10.6/access/reviews/installation/installready.webp)

**Step 8 –** On the Ready to install page, click Install to begin the process.

![Netwrix Auditor Access Reviews Setup wizard Completed page](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/install/installcompleted.webp)

**Step 9 –** Once the installation has successfully completed, click Finish to exit the wizard.

The installation wizard placed a Netwrix Auditor Access Reviews icon on the desktop. Now proceed to
the [First Launch](/docs/auditor/10.6/features/access-reviews/review-administration.md) topic for next
steps.

# Secure Console Access

Enable Secure Sockets Layer (SSL) for secure, remote connections to the application web server. In
order to enable SSL, you need to create a certificate and then bind it to the secure port.

**NOTE:** Organizations typically have one or more system administrators responsible for Public Key
Infrastructure (PKI) and certificates. To continue with this configuration, it will first be
necessary to confer with the PKI administrator to determine which certificate method will conform to
the organization’s security policies.

Follow the steps to enable SSL.

**Step 1 –** [Create an SSL Binding](#create-an-ssl-binding).

**Step 2 –**
[Modify the AccessInformationCenter.Service.exe.Config File](#modify-the-accessinformationcenterserviceexeconfig-file).

The Access Reviews application is now configured to use SSL for secure, remote connections.

## Create an SSL Binding

You run a PowerShell command to create an SSL binding. The binding command has several environmental
variables:

- The `$certHash` value is the `Thumbprint` value.
- The `$ip` value of the IP addresses. In the example script below, the value [0.0.0.0] is set for
  all IP addresses.
- The `$port` value must be accurate for your environment. The HTTP default port is 81. The HTTPS
  default is 481. However, it can be customized during installation.
- The `$guid` value is required for specifying a valid GUID value to identify the owning application
  for a binding purpose. It obtained from any valid GUID.

If you need to find the `$certHash` value of a certificate that was already created, run the
PowerShell `dir` command below on the certificate's drive. This will output the Thumbprint (Hash)
value and the certificate name:

dir cert:\localmachine\my

Replace the environmental variables in the example script below. Then Run the PowerShell command to
create an SSL binding:

```powershell
$guid = "1be32670-7644-4dce-9a5d-01643022074e"

$certHash = "03CFD5D51A0DAA2F3DCDA9407486B220449D0E92"

$ip = "0.0.0.0"

$port = "481"

"http add sslcert ipport=$($ip):$port certhash=$certHash appid={$guid}" | netsh
```

The next step is to modify the `AccessInformationCenter.Service.exe.Config` file.

## Modify the AccessInformationCenter.Service.exe.Config File

Follow the steps to modify the Modify the `AccessInformationCenter.Service.exe.Config` file for
HTTPS.

**Step 1 –** Open the `AccessInformationCenter.Service.exe.Config` file in a text editor, e.g.
Notepad. It is located in the installation directory:

...\Netwrix\Access Reviews

![AccessInformationCenter.Service.exe.Config file showing the BindingUrl key](/img/versioned_docs/auditor_10.6/access/reviews/installation/securebindingurlparameter.webp)

**Step 2 –** Change the `BindingUrl` key value to `"https://+:481"` (ensure the port number matches
the port number used in the PowerShell command run to create the SSL Binding.

**Step 3 –** Save and close the file.

**Step 4 –** Restart the Netwrix Auditor Access Reviews service in Services Manager
`(services.msc`).

The URL for the Access Reviews Console is now accessible
`https://[Fully Qualified Domain Name for the Machine]:481` (if port 481 was used when creating the
binding). For example, https://NEWYORKSRV10.NWXTech.com:481.

# Upgrade Procedure

**CAUTION:** If you are upgrading from the Netwrix Access Information Center for Netwrix Auditor to
the Netwrix Auditor Access Reviews application, see the
[Special Considerations ](#special-considerations) topic for upgrade steps.

To upgrade the Access Reviews application to a newer version, simply run the new `AccessReviews.msi`
executable. It is not necessary to uninstall the existing version. See the
[Install](/docs/auditor/10.6/features/access-reviews/review-administration.md) topic for additional
information.

_Remember,_ the Access Reviews version must align to the compatible Netwrix Auditor version.

When the installer is run over an existing version, the following is happening in the backend:

- During the installation process, a Backup folder is created in the Access Reviews installation
  directory

  ...\Netwrix\Access Reviews

  - The Backup folder contains the files where various settings reside listed in the table below

- The backup folder files are copied over the default files laid down by the installer, preserving
  customized settings
- After the installation is complete, the Backup folder is removed

| File                                | Location                     | Guidance                                                                                                               |
| ----------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Email Templates (multiple files)    | Located in the Backup folder | The HTML templates that are used to send notification email. These can be customized with logos or corporate branding. |
| AccessInformationCenter.Service.exe | Located in the Backup folder | Contains custom application settings and logging levels.                                                               |
| Version.txt                         | Located in the Backup folder | Indicates the version number associated with the backup contents.                                                      |

## Special Considerations

The originally released Netwrix Access Information Center has been rebranded to Netwrix Auditor
Access Reviews. This rebranding project included changing the installation directory, the name of
the service, and the default name of the database created by the installer. Follow the steps to
replace Netwrix Access Information Center with Netwrix Auditor Access Reviews.

**Step 1 –** Install the Netwrix Auditor Access Reviews application on the same server where the
Netwrix Access Information Center was installed. See the
[Install](/docs/auditor/10.6/features/access-reviews/review-administration.md) topic for additional
information. On the SQL Server Connection page:

- Supply the information for the existing database. The default name for the original database was
  NetwrixAIC. However, it could have been Customized.
- Use the same credentials for the SQL Server Connection.

**NOTE:** The new destination folder will be `...\Netwrix\Access Reviews`.

**Step 2 –** Launch the application and reset the Builtin Administrator password. See the
[First Launch](/docs/auditor/10.6/features/access-reviews/review-administration.md) topic for
additional information.

**Step 3 –** It will be necessary to add your Console Users again. See the
[Console Access Page](/docs/auditor/10.6/features/access-reviews/review-administration.md)
topic for additional information.

**Step 4 –** It will be necessary to configure the Notification settings. See the
[Notifications Page](/docs/auditor/10.6/features/access-reviews/review-administration.md)
topic for additional information.

**Step 5 –** If you have customized your email templates, it will be necessary to copy the Templates
folder from the old `...\Netwrix\Access Information Center` installation directory to the new
`...\Netwrix\Access Reviews` installation directory.

All of the resources with assigned owners will be visible on the Resource Owners tab. All reviews
will be visible on the Entitlement Reviews tab.

After the upgrade has been confirmed to be successful, you can optionally remove/delete the old
installation directory: `...\Netwrix\Access Information Center`.

# Select Data Sources

_Remember,_ the Access Reviews must already be installed on the Auditor server.

You can configure Netwrix Auditor Access Reviews in two ways:

- [Select Data Sources in the General Settings](#select-data-sources-in-the-general-settings)
- [Select Data Sources in the Monitoring Plan](#select-data-sources-in-the-monitoring-plan)

## Select Data Sources in the General Settings

If you plan to use Access Reviews for multiple data sources, configure the settings to work with the
data sources that you select.

Follow the steps to configure Access Reviews in the Netwrix Auditor.

**Step 1 –** Go to **Settings > General > Access Reviews**.

![senddataar](/img/versioned_docs/auditor_10.6/auditor/senddataar.webp)

**Step 2 –** Click **Manage**.

![manageaccessreviews](/img/versioned_docs/auditor_10.6/auditor/manageaccessreviews.webp)

**Step 3 –** Select the desired data sources to review.

**Step 4 –** Click **Save**.

Netwrix Auditor Access Reviews is configured and ready to use in the Netwrix Auditor.

## Select Data Sources in the Monitoring Plan

If you plan to use Access Reviews for a specific monitoring plan, configure Access Reviews in that
monitoring plan.

Follow the steps to configure Access Reviews in the Netwrix Auditor.

**Step 1 –** Go to **Configuration > Monitoring plans**.

**Step 2 –** Double click the desired monitoring plan.

**Step 3 –** Click **Edit data source** button on the left.

![enablear](/img/versioned_docs/auditor_10.6/auditor/enablear.webp)

**Step 4 –** Navigate to the Send data for Access Reviews and select the checkbox.

**Step 5 –** Click **Save** or **Save & Close**.

Netwrix Auditor Access Reviews is configured and ready to use in the Netwrix Auditor.
