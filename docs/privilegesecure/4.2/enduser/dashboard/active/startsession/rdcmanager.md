---
title: "Configure DirectConnect for Remote Desktop Connection"
description: "Configure DirectConnect for Remote Desktop Connection"
sidebar_position: 10
---

# Configure DirectConnect for Remote Desktop Connection

The Netwrix Privilege Secure proxy service can be used to launch DirectConnect sessions via
third-party Remote Desktop Connection Management software. Passing a DirectConnect string to the
proxy server will launch an RDP connection. This topic explains the formatting for the connection
string, with specific examples given for some popular Remote Desktop Connection Management programs.

:::note
If a SAML or OIDC authentication connector is enabled for the requesting user,
DirectConnect functionality cannot be used.
:::


To configure the remote connection client, use a connection string with the following parameters,
separated by “+” to the appropriate port on the proxy:

- Username – The user name used to sign into Active Directory in the following format:
  domain\username, user@domain, user@domain.suffix
- Activity – The activity to perform
- Resource – The DNS host name of the resource to run the activity on
- Access Policy (optional) – The Access Policy to invoke (if more than one)
- Notes (optional) – User notes about the session

Connection String Format:

`<username>+<activity>+<resource>+<access policy>+<notes>`

Connection String Example:

`Netwrix\JonSmith+Local Admin+SQL1.netwrix.com`

`JonSmith@netwrix.com+Local_Admin+SQL1.netwrix.com`

Note that some clients require you to use the _“_”\_ (underscore) character as a replacement for a
space in Activity names that are made up of multiple words, for example:

`Netwrix\JonSmith+Add_to_Local_Administrators+SQL1`

If you wish to add notes, make sure to add the appropriate number of “+” delimiters if you are not
defining an access policy:

`Netwrix\JonSmith+Local Admin+SQL1.netwrix.com++Server Maintenance`

## PuTTY (SSH)

Configuration parameters for PuTTY (SSH).

![appendices_stealthbits_privileged](/images/privilegesecure/4.2/accessmanagement/enduser/configure/appendices_stealthbits_privileged.webp)

Host Name Format:

- `<connection string>@<proxyhostname>`

Host Name Example:

- `Netwrix\JonSmith+rootAccess+centos1.lab.local@sbpamhost`

Port:

- Port – The SSH listening port on the proxy
- Default port – 4422

## MobaXterm (SSH)

Configuration parameters for MobaXterm (SSH).

![MobaXterm SSH configuration](/images/privilegesecure/4.2/accessmanagement/enduser/configure/appendices_stealthbits_privileged_1.webp)

Remote Host Format:

- `<connection string>@<proxyhostname>`

Resource Host Example:

`Netwrix\JonSmith+rootAccess+centos1.lab.local@sbpamhost`

Port:

- Port – The SSH listening port on the proxy
- Default port – 4422

Uncheck the checkboxes under Advanced SSH Settings and Bookmark Settings.

| ![appendices_stealthbits_privileged_2](/images/privilegesecure/4.2/accessmanagement/enduser/configure/appendices_stealthbits_privileged_2.webp) | ![appendices_stealthbits_privileged_3](/images/privilegesecure/4.2/accessmanagement/enduser/configure/appendices_stealthbits_privileged_3.webp) |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## MobaXterm (RDP)

Configuration parameters for MobaXterm (RDP).

![MobaXtermRDP configuration](/images/privilegesecure/4.2/accessmanagement/enduser/configure/appendices_stealthbits_privileged_5.webp)

Remote Host:

- `<proxyhostname>`

Example:

`sbpamhost`

Username:

- `<connection string>`

Example:

`Netwrix\JonSmith+LocalAdmin+sql1`

Port:

- Port – The RDP listening port on the proxy
- Default port – 4489

![appendices_stealthbits_privileged_6](/images/privilegesecure/4.2/accessmanagement/enduser/configure/appendices_stealthbits_privileged_6.webp)

Check the Redirect Clipboard checkbox on the Advanced RDP Settings tab to enable pasting of the 2FA
token.

## Microsoft Remote Desktop Connection (RDP)

Configuration parameters for Microsoft Remote Desktop Connection (RDP).

![appendices_stealthbits_privileged_4](/images/privilegesecure/4.2/accessmanagement/enduser/configure/appendices_stealthbits_privileged_4.webp)

Computer:

`<proxyhostname>:<port>`

**Example:**

`Sbpamhost:4489`

User Name Format:

- `<connection string>`

User Name Example:

- `Netwrix\JonSmith+LocalAdmin+sql1`

If there is no password prompt when executing an RDP shortcut, change the GPO setting. See the
Configure Remote Desktop Connection to Prompt for Password topic for additional information.

## Microsoft Remote Desktop Connection Manager (RDP)

Configure the Microsoft Remote Desktop Connection Manager (RDC Manager).

| ![appendices_stealthbits_privileged_7](/images/privilegesecure/4.2/accessmanagement/enduser/configure/appendices_stealthbits_privileged_7.webp) | ![appendices_stealthbits_privileged_8](/images/privilegesecure/4.2/accessmanagement/enduser/configure/appendices_stealthbits_privileged_8.webp) |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

Server name:

`<proxyhostname>:<port>`

Server name example:

`Sbpamhost:4489`

User Name Format:

`\<connection string>`

:::note
The user name starts with \_\_ (back slash).
:::


User Name Example:

`\Netwrix\JonSmith+LocalAdmin+sql1`

Server Name/Port:

`localhost:4489`

If there is no password prompt when executing an RDP shortcut, change the GPO setting. See the
Configure Remote Desktop Connection to Prompt for Password topic for additional information.

## Configure Remote Desktop Connection to Prompt for Password

Follow the steps to configure the RDP Group Policy to always prompt for user credentials and
password.

**Step 1 –** Open the Group Policy Management Editor.

**Step 2 –** Navigate to Computer Configuration > Administrative Templates > Windows Components >
Remote Desktop Services > Remote Desktop Connection Client

![Configure Remote Desktop Connection to Prompt for Password](/images/privilegesecure/4.2/accessmanagement/enduser/configure/appendices_stealthbits_privileged_9.webp)

**Step 3 –** Right click on Prompt for credentials on the client computer and select Edit from the
context menu.

![appendices_stealthbits_privileged_10](/images/privilegesecure/4.2/accessmanagement/enduser/configure/appendices_stealthbits_privileged_10.webp)

**Step 4 –** In the Prompt for Credentials on the Client Computer window, select Enabled.

**Step 5 –** Click OK to save changes.

The Remote Desktop Connection (RDP) Group Policy is configured to always ask for credentials.
