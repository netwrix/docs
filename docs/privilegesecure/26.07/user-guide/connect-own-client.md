---
title: "Connect with your own RDP or SSH client"
description: "Connect to a resource through the Privilege Secure proxy with PuTTY, MobaXterm, or Remote Desktop by using a connection string as the user name."
sidebar_position: 70
---

# Connect with your own RDP or SSH client

You can connect to a resource with a client you already use instead of the **connect** icon. The client connects to the Privilege Secure proxy and sends a connection string as the user name. The proxy creates the session, applies the access policy, and connects you to the resource. This method is called DirectConnect.

## Before you begin

- You need membership in an access policy that includes the activity and the resource. See [Request a session](/docs/privilegesecure/26.07/user-guide/request-session.md).
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
| `<ticket>` | No | A ticket number for the session. RDP and SSH connections both read it. If the connection profile requires a ticket and the string leaves it out, the proxy asks for it: the proxy shows a ticket prompt in the RDP session, and an SSH client shows a keyboard-interactive prompt. Add the ticket to the string when your client can't show that prompt. |

The format is:

`<username>+<activity>+<resource>+<access-policy>+<notes>+<ticket>`

Example, with the activity and resource only:

`CONTOSO\jsmith+Add_Requester_to_Local_Administrators+sql01.contoso.com`

Keep the plus signs for fields you skip. This example sets notes and leaves the access policy empty:

`CONTOSO\jsmith+Add_Requester_to_Local_Administrators+sql01.contoso.com++Server Maintenance`

This example sets notes and a ticket number:

`CONTOSO\jsmith+Add_Requester_to_Local_Administrators+sql01.contoso.com++Server Maintenance+INC0012345`

The `user@domain` form of the user name works in a connection string. The proxy splits the string on whichever of `+` or `@` occurs more often, and a string with an activity and a resource has more plus signs than the one `@` in the user name.

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

`sbpam-url.exe` is in the `Extras` folder of the product package. See [Installation package contents](/docs/privilegesecure/26.07/install/components.md). Copy it to a permanent folder on the computer, because the registration points to that location.

The command takes the command line of your SSH client. Here are two examples, written for PowerShell. In a `cmd.exe` prompt, wrap the replacement strings in double quotes instead of single quotes. Change the path to match where the client is installed.

PuTTY:

`sbpam-url handle -p ssh -- "C:\Program Files\PuTTY\putty.exe" -ssh -P '{{port}}' '{{user}}@{{hostname}}'`

MobaXterm:

`sbpam-url handle -p ssh -- "C:\Program Files (x86)\Mobatek\MobaXterm\MobaXterm.exe" -newtab 'ssh -o PasswordAuthentication=no -l {{user_esc}} -p {{port}} {{hostname}}'`

`{{user_esc}}` is the user name with special characters escaped. Change the MobaXterm path to match where you installed it.

{/* TODO verify: run each example against a current PuTTY and MobaXterm build. The examples come from the sbpam-url documentation in the proxy source, not from a test run. The `-newtab` option is a MobaXterm option that isn't confirmed against Mobatek's documentation. */}

## More client guidance

- [Invoke a desktop SSH client automatically](/docs/kb/privilegesecure/client-tools-and-integrations/invoking-desktop-ssh-client-automatically)
- [Register and use the sbpam-url SSH protocol handler](/docs/kb/privilegesecure/client-tools-and-integrations/registering-and-using-the-sbpam-url-ssh-protocol-handler)
- [Enable the session extension countdown tab for SSH sessions in MobaXterm](/docs/kb/privilegesecure/client-tools-and-integrations/enable-session-extension-countdown-tab-display-for-sbpam-ssh-sessions-in-mobaxterm)

For the access flow in a browser, see [Connect to a session](/docs/privilegesecure/26.07/user-guide/connect-session.md).
