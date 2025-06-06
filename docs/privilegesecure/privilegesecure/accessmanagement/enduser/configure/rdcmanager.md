# Configure DirectConnect for Remote Desktop Connection

The Netwrix Privilege Secure proxy service can be used to launch DirectConnect sessions via third-party Remote Desktop Connection Management software. Passing a DirectConnect string to the proxy server will launch an RDP connection. This topic explains the formatting for the connection string, with specific examples given for some popular Remote Desktop Connection Management programs.

__NOTE:__ If a SAML or OIDC authentication connector is enabled for the requesting user, DirectConnect functionality cannot be used.

To configure the remote connection client, use a connection string with the following parameters, separated by “+” to the appropriate port on the proxy:

- Username – The user name used to sign into Active Directory in the following format: domain\username, user@domain, user@domain.suffix
- Activity – The activity to perform
- Resource – The DNS host name of the resource to run the activity on
- __Access Policy (optional)__ – The Access Policy to invoke (if more than one)
- __Notes (optional)__ – User notes about the session

Connection String Format:

<username>+<activity>+<resource>+<access policy>+<notes>

Connection String Example:

Netwrix\JonSmith+Local Admin+SQL1.netwrix.com

JonSmith@netwrix.com+Local\_Admin+SQL1.netwrix.com

Note that some clients require you to use the _“\_”_ (underscore) character as a replacement for a space in Activity names that are made up of multiple words, for example:

Netwrix\JonSmith+Add\_to\_Local\_Administrators+SQL1

If you wish to add notes, make sure to add the appropriate number of “+” delimiters if you are not defining an access policy:

Netwrix\JonSmith+Local Admin+SQL1.netwrix.com++Server Maintenance

## PuTTY (SSH)

Configuration parameters for PuTTY (SSH).

![appendices_stealthbits_privileged](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/enduser/configure/appendices_stealthbits_privileged.png)

Host Name Format:

- <connection string>@<proxyhostname>

Host Name Example:

- Netwrix\JonSmith+rootAccess+centos1.lab.local@sbpamhost

Port:

- Port – The SSH listening port on the proxy
- Default port – 4422

## MobaXterm (SSH)

Configuration parameters for MobaXterm (SSH).

![MobaXterm SSH configuration](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/enduser/configure/appendices_stealthbits_privileged_1.png)

Remote Host Format:

- <connection string>@<proxyhostname>

Resource Host Example:

Netwrix\JonSmith+rootAccess+centos1.lab.local@sbpamhost

Port:

- Port – The SSH listening port on the proxy
- Default port – 4422

Uncheck the checkboxes under Advanced SSH Settings and Bookmark Settings.

| ![appendices_stealthbits_privileged_2](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/enduser/configure/appendices_stealthbits_privileged_2.png) | ![appendices_stealthbits_privileged_3](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/enduser/configure/appendices_stealthbits_privileged_3.png) |
| --- | --- |

## MobaXterm (RDP)

Configuration parameters for MobaXterm (RDP).

![MobaXtermRDP configuration](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/enduser/configure/appendices_stealthbits_privileged_5.png)

Remote Host:

- <proxyhostname>

Example:

sbpamhost

Username:

- <connection string>

Example:

Netwrix\JonSmith+LocalAdmin+sql1

Port:

- Port – The RDP listening port on the proxy
- Default port – 4489

![appendices_stealthbits_privileged_6](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/enduser/configure/appendices_stealthbits_privileged_6.png)

Check the Redirect Clipboard checkbox on the Advanced RDP Settings tab to enable pasting of the 2FA token.

## Microsoft Remote Desktop Connection (RDP)

Configuration parameters for Microsoft Remote Desktop Connection (RDP).

![appendices_stealthbits_privileged_4](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/enduser/configure/appendices_stealthbits_privileged_4.png)

Computer:

<proxyhostname>:<port>

__Example:__

Sbpamhost:4489

User Name Format:

- <connection string>

User Name Example:

- Netwrix\JonSmith+LocalAdmin+sql1

If there is no password prompt when executing an RDP shortcut, change the GPO setting. See the [Configure Remote Desktop Connection to Prompt for Password](#Configure-Remote-Desktop-Connection-to-Prompt-for-Password) topic for additional information.

## Microsoft Remote Desktop Connection Manager (RDP)

Configure the Microsoft Remote Desktop Connection Manager (RDC Manager).

| ![appendices_stealthbits_privileged_7](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/enduser/configure/appendices_stealthbits_privileged_7.png) | ![appendices_stealthbits_privileged_8](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/enduser/configure/appendices_stealthbits_privileged_8.png) |
| --- | --- |

Server name:

<proxyhostname>:<port>

Server name example:

Sbpamhost:4489

User Name Format:

\<connection string>

__NOTE:__ The user name starts with _\_ (back slash).

User Name Example:

\Netwrix\JonSmith+LocalAdmin+sql1

Server Name/Port:

localhost:4489

If there is no password prompt when executing an RDP shortcut, change the GPO setting. See the [Configure Remote Desktop Connection to Prompt for Password](#Configure-Remote-Desktop-Connection-to-Prompt-for-Password) topic for additional information.

## Configure Remote Desktop Connection to Prompt for Password

Follow the steps to configure the RDP Group Policy to always prompt for user credentials and password.

__Step 1 –__ Open the Group Policy Management Editor.

__Step 2 –__ Navigate to Computer Configuration > Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Connection Client

![Configure Remote Desktop Connection to Prompt for Password](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/enduser/configure/appendices_stealthbits_privileged_9.png)

__Step 3 –__ Right click on Prompt for credentials on the client computer and select Edit from the context menu.

![appendices_stealthbits_privileged_10](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/enduser/configure/appendices_stealthbits_privileged_10.png)

__Step 4 –__ In the Prompt for Credentials on the Client Computer window, select Enabled.

__Step 5 –__ Click OK to save changes.

The Remote Desktop Connection (RDP) Group Policy is configured to always ask for credentials.
