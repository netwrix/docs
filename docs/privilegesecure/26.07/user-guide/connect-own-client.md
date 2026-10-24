---
title: "Connect with your own RDP or SSH client"
description: "Connect to a resource through the Privilege Secure proxy with PuTTY, MobaXterm, or Remote Desktop by using a connection string as the user name."
sidebar_position: 70
---

# Connect with your own RDP or SSH client

You can connect to a resource with a client you already use instead of the **connect** icon. The client connects to the Privilege Secure proxy and sends a connection string as the user name. The proxy creates the session, applies the access policy, and connects you to the resource. This method is called DirectConnect.

## Before you begin

- You need membership in an access policy that includes the activity and the resource. See [Request a session](/docs/privilegesecure/26_07/user-guide/request-session).
- Get the name of the proxy host from your administrator. In the examples, `<nps-server>` stands for the server that runs the Proxy Service.
- Get the proxy ports. The defaults are 4489 for RDP and 4422 for SSH. Your administrator can change them.

:::note
If a SAML or OpenID Connect authentication connector is enabled for your account, you can't use DirectConnect.
:::

## Build the connection string

The connection string joins these values with a plus sign (`+`):

| Value | Required | Description |
|---|---|---|
| `<username>` | Yes | Your sign-in name: `domain\username`, `user@domain`, or `user@domain.suffix`. |
| `<activity>` | Yes | The name of the activity. Replace each space with an underscore (`_`) if your client doesn't accept spaces. |
| `<resource>` | Yes | The fully qualified domain name (FQDN) of the resource. |
| `<access-policy>` | No | The access policy to use, when more than one policy applies. |
| `<notes>` | No | Notes for the session. |
| `<ticket>` | No | A ticket number for the session. {/* TODO verify: that the ticket field works for RDP as well as SSH. The product change describes SSH clients that use password authentication, such as SFTP. */} |

The format is:

`<username>+<activity>+<resource>+<access-policy>+<notes>+<ticket>`

Example, with the activity and resource only:

`CONTOSO\jsmith+Add_Requester_to_Local_Administrators+sql01.contoso.com`

Keep the plus signs for fields you skip. This example sets notes and leaves the access policy empty:

`CONTOSO\jsmith+Add_Requester_to_Local_Administrators+sql01.contoso.com++Server Maintenance`

This example sets notes and a ticket number:

`CONTOSO\jsmith+Add_Requester_to_Local_Administrators+sql01.contoso.com++Server Maintenance+INC0012345`

{/* TODO verify: the proxy treats both + and @ as separators (DirectConnectSeparator "+@"); confirm whether the user@domain username form works in a connection string. */}

## Connect with PuTTY (SSH)

1. In **Host Name (or IP address)**, enter `<connection-string>@<nps-server>`.
2. In **Port**, enter 4422.
3. Click **Open**.

Example host name: `CONTOSO\jsmith+Activity_Token_for_wheel_Group+linux01.contoso.com@<nps-server>`

## Connect with MobaXterm (SSH)

1. Create an SSH session.
2. In **Remote host**, enter `<connection-string>@<nps-server>`.
3. In **Port**, enter 4422.
4. Clear the check boxes under **Advanced SSH settings** and **Bookmark settings**.
5. Click **OK**.

Example remote host: `CONTOSO\jsmith+Activity_Token_for_wheel_Group+linux01.contoso.com@<nps-server>`

## Connect with MobaXterm (RDP)

1. Create an RDP session.
2. In **Remote host**, enter `<nps-server>`.
3. In **Username**, enter the connection string.
4. In **Port**, enter 4489.
5. On the **Advanced RDP settings** tab, select **Redirect clipboard**. This lets you paste a multi-factor authentication (MFA) token.
6. Click **OK**.

Example username: `CONTOSO\jsmith+Add_Requester_to_Local_Administrators+sql01.contoso.com`

## Connect with Remote Desktop Connection (RDP)

1. Open Remote Desktop Connection.
2. In **Computer**, enter `<nps-server>:4489`.
3. In **User name**, enter the connection string.
4. Click **Connect**.

Example user name: `CONTOSO\jsmith+Add_Requester_to_Local_Administrators+sql01.contoso.com`

If the client doesn't ask for a password, an administrator must change the Group Policy setting that prompts for credentials. See [Prompt for a password in Remote Desktop](#prompt-for-a-password-in-remote-desktop).

## Connect with Remote Desktop Connection Manager (RDP)

1. Open the properties of a server in Remote Desktop Connection Manager.
2. In **Server name**, enter `<nps-server>:4489`.
3. In **User name**, enter a backslash followed by the connection string.

Example user name: `\CONTOSO\jsmith+Add_Requester_to_Local_Administrators+sql01.contoso.com`

The user name starts with a backslash. If the client doesn't ask for a password, see [Prompt for a password in Remote Desktop](#prompt-for-a-password-in-remote-desktop).

## Prompt for a password in Remote Desktop

RDP DirectConnect asks for your password inside the session. If you enter the password outside the session, the proxy uses it and doesn't show the prompt again, unless authentication fails.

If a Remote Desktop client opens without a password prompt, an administrator can force the prompt with Group Policy:

1. Open the Group Policy Management Editor.
2. Go to **Computer Configuration** > **Administrative Templates** > **Windows Components** > **Remote Desktop Services** > **Remote Desktop Connection Client**.
3. Open **Prompt for credentials on the client computer**.
4. Select **Enabled**, then click **OK**.

## Launch a local SSH client from the console

Privilege Secure can open a local SSH client when you click an `ssh://` link. On Windows, the `sbpam-url` handler registers a protocol and the command to run. Run the handler once on your computer:

`sbpam-url handle -p ssh -- <command>`

In the command, use `{{user}}` for the user name, `{{host}}` for the host and port, `{{hostname}}` for the host name, and `{{port}}` for the port. To remove the registration for a protocol, run `sbpam-url handle -U -p ssh`.

{/* TODO verify: where users get sbpam-url.exe, whether it ships with the product for end users, and a tested example command for PuTTY. */}
{/* TODO: add an example of an sbpam-url command for a named SSH client. */}

## More client guidance

- [Invoke a desktop SSH client automatically](/docs/kb/privilegesecure/client-tools-and-integrations/invoking-desktop-ssh-client-automatically)
- [Register and use the sbpam-url SSH protocol handler](/docs/kb/privilegesecure/client-tools-and-integrations/registering-and-using-the-sbpam-url-ssh-protocol-handler)
- [Enable the session extension countdown tab for SSH sessions in MobaXterm](/docs/kb/privilegesecure/client-tools-and-integrations/enable-session-extension-countdown-tab-display-for-sbpam-ssh-sessions-in-mobaxterm)

For the access flow in a browser, see [Connect to a session](/docs/privilegesecure/26_07/user-guide/connect-session).
