---
title: "Optionally Install the Action Service on Additional Servers"
description: "Install the Action Service, the Integration Service, or both on additional servers, and then register each one with Threat Manager."
sidebar_position: 30
---

# Optionally Install the Action Service on Additional Servers

The Action Service and the Integration Service can run on servers other than the Threat Manager server. You install both from the main installer, `NetwrixThreatManager.exe`, as a remote install. The Action Service runs the actions that you define in the console from different locations in your organization.

The Action Service is an optional feature of the main installer. The installer registers it as the service SBTSDACTION with the display name "Netwrix Threat Manager Action Service". The separate Netwrix Threat Manager Action Service installer no longer exists. Installing or upgrading with the main installer removes the old standalone Action Service from the machine, so no orphaned SBTSDACTION service remains.

The installer registers the Integration Service as the service SBTSDINT with the display name "Netwrix Threat Manager Integration Service". It starts automatically.

## Install Remote Services

To install the Action Service, the Integration Service, or both on an additional server:

**Step 1 –** Right-click `NetwrixThreatManager.exe` and select Run as administrator. The Netwrix Threat Manager Setup wizard opens.

**Step 2 –** On the Welcome page, select the **Advanced Installation** checkbox, then click **Install**.

**Step 3 –** Accept the End User License Agreement and click **Next**. The Advanced Settings page opens.

**Step 4 –** Select **Remote Services Only**. The page lists a checkbox for each remote service: **Action Service** and **Integration Service**. Select the services to install, then click **Next**. If you select none, the page shows "Select at least one remote service to install." and you can't continue.

**Step 5 –** Complete the remaining pages of the wizard.

**Step 6 –** Wait for the installation to finish.

The Finish page lists each installed remote service under "Remote services require additional configuration.  Please complete the following:" with the columns **Service Name** and **Status**. The status is one of the following:

- Checking...
- Configure Now
- Configured
- Connection Broken

The status refreshes every 10 seconds. Click **Configure Now** or **Connection Broken** to open the configuration window for that service.

If you click **Exit** or **Reboot now** while a remote service isn't configured, a dialog titled "Warning" asks: "One or more remote services are not yet configured. Are you sure you want to exit?" Click **OK** to exit or **Cancel** to stay.

## Configure a Remote Service to Register with Threat Manager

A remote service must register with the Threat Manager server before it works. You provide the address of the Threat Manager web console and the credentials of a Threat Manager administrator account. The Action Service creates an application token named "`<machine name>` Action Service". The Integration Service registers its own address and token. Threat Manager doesn't save the user name and password on the service.

The Integration Service registers the first host in `AllowedHosts`. When `AllowedHosts` is `*` or contains a wildcard, it registers the fully qualified name of the machine.

To configure a remote service:

**Step 1 –** Open the configuration window in one of these ways:

- Click **Configure Now** or **Connection Broken** on the Finish page.
- Select the Start Menu shortcut **Configure Action Service** or **Configure Integration Service**.
- Run the service executable with the `--config-ui` switch. The Action Service also accepts `-config-ui`.

The window title is **Netwrix Threat Manager Configuration**. Its header reads "Netwrix Threat Manager Action Service Configuration" or "Netwrix Threat Manager Integration Service Configuration". The window explains: "Connect this remote `<service name>` to an installation of Netwrix Threat Manager using administrator credentials."

**Step 2 –** In the **Host** row, set the scheme, host name, and port of the Threat Manager web console:

- Scheme – Select `https` or `http`. The default is `https`.
- Host name – The box shows the fully qualified name of the machine that runs the service. Enter the name of the Threat Manager server. If you paste a full URL or `host:port`, the window fills in the scheme, host, and port and drops any path or query.
- Port – The default is 8080. The box accepts digits only.

For example, enter scheme `https`, host name `threatmanager.contoso.com`, and port `8080`.

{/* TODO: confirm which port to enter when the Web Service uses HTTPS. The window defaults to 8080, and the Web Service HTTPS port defaults to 5000. */}

If you configured the service before, the window shows the saved scheme, host, port, and **Ignore certificate errors** setting.

**Step 3 –** Enter the **User Name** and **Password** of a Threat Manager administrator account, such as `admin`.

**Step 4 –** If the scheme is `https`, decide whether to select the **Ignore certificate errors** checkbox. It appears only for `https` and is clear by default.

:::warning
If you choose `http`, the window warns that the connection isn't encrypted, that someone can intercept the administrator credentials, and that you should configure HTTPS on Threat Manager first. If you select **Ignore certificate errors**, the window warns that it doesn't verify the identity of the Threat Manager server, so someone could steal credentials. The warnings don't block saving.
:::

**Step 5 –** Click **Test**. The test checks the host, user name, and password with the administrator credentials only. The **Save** button stays disabled until a test succeeds. Any change to a field disables it again.

The status line shows "Connecting...", then "Connection successful." or "Connection failed." with the specific error. The window cuts the line to 70 characters. Click it to open the "Connection Status" dialog with the full text or error details. If the user name or password is wrong, the Integration Service shows "Bad user name or password".

The window also shows these validation messages:

- "Threat Manager hostname is required." when the host is empty.
- "User name and password are required." when either field is empty.

**Step 6 –** If the test succeeds and the remote service serves HTTPS with a self-signed certificate, the window shows a notice and a **Download...** button. Click it to save the public certificate as a `.cer` file. The default file name is "`<machine name>` `<service name>` Certificate.cer". Import the file into the Trusted Root Certification Authorities store on the Threat Manager server.

**Step 7 –** Click **Save**. The status line shows "Saving..." and then "Restarting service...".

If the service already has a working configuration, the window asks "This service already has a working configuration. Saving will overwrite it. Continue?" in a dialog titled "Overwrite Existing Configuration".

After the save succeeds, a dialog says one of the following:

- "`<service name>` configured and restarted successfully." when the installer started the window.
- "`<service name>` configured successfully. Restart the service to apply the changes." when the installer didn't start the window.

If saving fails, the status line shows "Failed to save the configuration." If the service can't restart, it shows "Failed to restart the service. Click Save to try again."

If a TLS connection to the remote host fails, the message reads: "A secure (TLS) connection could not be established: `{detail}` The certificate presented by the remote host is probably not trusted by `{machine}`. Import it into the Trusted Root Certification Authorities store (Local Computer) there."

### Configure a Remote Service from a Console

You can also register a service from an administrative command prompt by running the service executable with the `--config` switch.

The prompts use these defaults:

- The default URL is `https://<machine FQDN>:8080`.
- The default user name is `admin`.
- The prompt "Ignore certificate errors (press enter to use false)" appears only for `https` URLs. If you enter `true`, the console asks "Proceed with ignoring certificate errors? (y/n)".

The console shows the same warnings about `http` and **Ignore certificate errors** as the window. If the URL host is `localhost` or `127.0.0.1`, the service replaces it with the fully qualified name of the machine so Threat Manager can reach it.

To register without prompts, pass `-url`, `-username`, and `-password`. The command prints the warning and continues. For example:

```
ActionService.exe -url https://threatmanager.contoso.com:8080 -username admin -password <password>
```

When the service runs a configuration operation, it exits with 0 on success. It exits with 1 when the operation didn't complete, for example when you close the window without saving. It exits with 2 on an unexpected error.

## Check the Status of a Remote Service

To check a remote service without opening a window, run the service executable with the `--check-status` switch.

The command exits with one of these codes:

| Exit code | Meaning |
| --- | --- |
| 0 | The service works with its saved configuration. |
| 1 | The service has no saved configuration. |
| 2 | The service has a saved configuration, but the connection fails. |

On failure, the command prints one line that starts with "check-status-error: " followed by the reason.

The Action Service tests its saved token. The messages are:

- "This service has not been configured."
- "The stored token was rejected or the server could not be reached."

The Integration Service asks Threat Manager to call back to the service. The check passes only when the service reaches Threat Manager and Threat Manager reaches the service. The messages are:

- "No service status token is stored. Register this service again."
- "Threat Manager rejected the service status token. Register this service again."
- "Threat Manager does not have this service registered (HTTP 404)."
- "Could not reach Threat Manager at `<url>`: `<reason>`"

When an Integration Service registers, Threat Manager returns an encrypted status token that the service stores for this check. The service status endpoint `GET api/v1/ServiceStatus` lets a remote service confirm that Threat Manager can reach it and that it accepts its token. It returns 400 with "The token does not name a machine." or "The token does not name a service type." for a bad token, and 404 when no matching service exists. Threat Manager doesn't audit calls to this endpoint.

Threat Manager reports a failed call back with "Threat Manager could not connect to the Integration Service at `<url>`: `<reason>`" or "Threat Manager has no address or token registered for the Integration Service on '`<name>`'."

## Configure a Service Account to Run Actions

You can configure the Action Service that Threat Manager installs to execute as a service
account. In this scenario, Threat Manager runs any actions as the Service
Account. This, typically, is a simple way to ensure that Playbooks that Threat Manager executes have
the proper permissions required to complete successfully.

:::note
If an Action Step has been configured to use a specific Credential Profile, the Action
Step uses those credentials in the Action Step Script. See the
[Credential Profile Page](/docs/threatmanager/3.4/administration/configuration/integrations/credentialprofile.md) topic
for additional information.
:::


To configure the Action Service to run as a service account:

**Step 1 –** Open Services (`services.msc`).

![services](/images/threatmanager/3.0/install/services.webp)

**Step 2 –** Double-click the Netwrix Threat Manager Action Service. The Threat Manager Action
Service Properties window opens.

![serviceaccountproperties](/images/threatmanager/3.0/install/serviceaccountproperties.webp)

**Step 3 –** Click the Log On tab.

**Step 4 –** Select the This account: radio button and specify the Active Directory account
and credentials you want. If desired, select the Browse button to open the Select User window to select an
account.

**Step 5 –** Click Apply and then OK. This sets the Action Service to “run as” the specified
account.

![servicesrestart](/images/threatmanager/3.0/install/servicesrestart.webp)

**Step 6 –** Restart the Threat Manager Action Service by right-clicking on the Netwrix Threat
Manager Action Service in the Services window and clicking Restart.

Once restarted, the Threat Manager Action Service will use the specified service account.

:::note
Only SYSTEM and Administrators can read the registry key `HKLM\SOFTWARE\STEALTHbits Technologies\StealthDEFEND\Security`. If a service runs as another account, grant that account read access to the key manually. Otherwise the service fails to start and logs: "Unable to load the JWT signing key from the registry: \<reason\> The service account needs read access to HKLM\SOFTWARE\STEALTHbits Technologies\StealthDEFEND\Security."
:::
