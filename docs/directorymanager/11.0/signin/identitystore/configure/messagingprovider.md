---
title: "Configure a Messaging Provider"
description: "Configure a Messaging Provider"
sidebar_position: 100
---

# Configure a Messaging Provider

GroupID can create email addresses for mail-enabled objects (groups, users, and contacts) with any
mailing system. It can be an Exchange Server (2013/2016/2019) deployed in your environment or an
external email provider such as Exchange Online and Office 365.

GroupID supports the following messaging providers:

- Microsoft Exchange 2013/2016/2019
- Office 365
- Google Workspace
- Other external providers, such as Exchange Online, Office 365, Yahoo, Gmail, and Google Groups

When a messaging provider is not available in your environment or you want to restrict the creation
of mail-enabled objects in the identity store, select the _None_ option.

## Exchange Server Priority

In environments that run multiple versions of Microsoft Exchange, GroupID enables you to set
Exchange Server priority. All messaging provider-related actions will reiterate on Exchange servers
according to priority.

Let’s assume you have an environment with:

- Active Directory 2012
- Exchange 2013 with two servers: ExchA and ExchB, where you set Exchange server priority as ExchB
  and ExchA

When you create a mail-enabled group using GroupID, it will be created in Active Directory first.
Messaging provider-related configurations will go to ExchB. In case of failure, the system will
reiterate the same action on ExchA.

What do you want to do?

- [Set Microsoft Exchange as Messaging Provider](#set-microsoft-exchange-as-messaging-provider)
- [Set Office 365 as Messaging Provider](#set-office-365-as-messaging-provider)
- [Set Google Workspace as Messaging Provider](#set-google-workspace-as-messaging-provider)
- [Set an External Provider to Create Email Addresses](#set-an-external-provider-to-create-email-addresses)
- [Do Not Set a Messaging Provider](#do-not-set-a-messaging-provider)

## Set Microsoft Exchange as Messaging Provider

Follow the steps to set Microsoft Exchange as a messaging provider.

Step 1 – In the Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settingsin the left pane. Then click **Messaging System**.
The Messaging System page is displayed.

Step 4 – In the Messaging Provider drop-down list, select the **Exchange version** that you want to
use.

Step 5 – Enter the domain name where the mail server resides in the Domain name box.

Step 6 – Enter the username and password of an authorized user account on the mail server in the
Username and Password boxes.

Step 7 – The Server Name column in the Server Status & Priority area lists the mail servers in the
environment. GroupID randomly assigns the highest priority to a server. You can change its priority
level and set the priority for other servers..

Step 8 – If your required server is not listed, click **Sync Again**.

- In the Server Status & Priority section, select the check box for the server you want to specify
  or change the priority for. GroupID checks the availability of the server and displays its status
  as _Online_ (available) or _Offline_ (unavailable) in the **Status** column.
- In the Priority box, select a priority level for the server, with ‘1’ representing the highest
  priority.

Step 9 – Click **Save**.

## Set Office 365 as Messaging Provider

Follow the steps to set Office 365 as a messaging provider.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On theIdentity page, click the ellipsis button for an identity store and select **Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **Messaging System**.

Step 4 – On theMessaging System page, select _Office 365_ in the Messaging Provider drop-down list.

Step 5 – From the Cloud drop-down list, select the cloud where your Microsoft Entra ID tenant
exists.

Step 6 – Enter the domain name configured for Office 365 in the **Domain name** box.

Step 7 – In the ApplicationID box, enter the application ID assigned to the GroupID application when
you registered it in Microsoft Entra Admin Center.

Step 8 – In the Client box, provide the client secret value generated against the certificate
uploaded to Microsoft Entra Admin Center while registering the GroupID application.

Step 9 – Specify the path to the PFX certificate in the PFX Certificate box. For that, click
**Choose File** and browse for the file. Select it and click **Open**.  
As a prerequisite, the PFX certificate must be generated on the GroupID server and exported to this
machine for upload.

Step 10 – In the PFX Certificate Password box, enter the password that was created while exporting
the PFX certificate.

Step 11 – In the Server Status & Priority area, the **Server Name** box displays the name of the
mail server; the priority option does not apply to it. GroupID checks the availability of the server
and displays its status as _Online_ (available) or _Offline_ (unavailable) in theStatus column.  
If the server is not listed, click **Sync Again**.

Step 12 – Click **Save**.

NOTE: When Office 365 is configured as the messaging provider for an Active Directory identity
store, GroupID creates distribution groups but does not populate their membership in Office 365. Use
AD Connect or any directory synchronize tool to replicate information (such as membership info)
between on-premises AD and Office 365.

## Set Google Workspace as Messaging Provider

Follow the steps to set a Google Workspace as a messaging provider.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identify Storespage, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **Messaging System**.

Step 4 – On the Messaging System page, select _Google Workspace_ in the **Messaging Provider**
drop-down list.

Step 5 – In theService Account box, enter the service account name assigned to you when you created
your Google Workspace account.

Step 6 – Enter the username of an authorized user on the messaging provider in the Admin Username
box.

Step 7 – Specify the path to the p12 key file in the P12 Certificate box.  
 Click **Choose File** and browse for the file. Select the file and click **Open**.  
As a prerequisite, you must generate the p12 key file for your account in Google Cloud Console and
download it.

Step 8 – In the Server Status & Priority area, the Server Name box displays the name of the mail
server; the priority option does not apply to it. GroupID checks the availability of the server and
displays its status as _Online_ (available) or _Offline_ (unavailable) in the Status column.  
If the server is not listed, click **Sync Again**.

Step 9 – Click **Save**.

## Set an External Provider to Create Email Addresses

Follow the steps to set an external provider to create email addresses.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **Messaging System**.

Step 4 – On the Messaging System page, select _Other_ in the **Messaging Provider** drop-down list.

Step 5 – In the Domain Name box, enter the domain name of the external email provider, for example,
googlegroups.com.

Step 6 – In the Maximum Length Allowed for Email Alias box, specify the maximum number of characters
that an email alias can contain.

Step 7 – Enter a regular expression in the Email Alias Regular Expression box; the email alias
created in the external provider must satisfy this regular expression.  
Follow these links for information about regular expressions and their syntax:

- [Introduction to Regular Expressions](https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2010/28hw3sce(v%3dvs.100))
- [Regular Expression Syntax Reference](https://msdn.microsoft.com/en-us/library/ms840427.aspx)

Step 8 – In the Enter Example to Validate Regular Expression box, enter an email alias as an
example, and then click **Validate** to verify that the example satisfies the regular expression.

Step 9 – Click **Save**.

## Do Not Set a Messaging Provider

Follow the steps to not set a messaging provider.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** underSettings in the left pane. Then click **Messaging System**.

Step 4 – When no messaging provider is available in your environment or you want to prevent users
from creating mail-enabled objects in the identity store, select _None_ in the Messaging Provider
drop-down list.

Step 5 – Click **Save**.

**See Also**

- [Configure an SMTP Server](/docs/directorymanager/11.0/signin/identitystore/configure/smtpserver.md)
