---
title: "Optionally Install the Action Service on Additional Servers"
description: "Install the Action Service on a remote server, connect it to Threat Manager, and run it as a service account."
sidebar_position: 30
---

# Optionally Install the Action Service on Additional Servers

The Action Service is installed with Threat Manager and is configured in the Threat Manager Console.
You can also install it on other servers, which lets you run actions defined in the Console from
different locations within your organization.

The Action Service no longer has a separate installer. Install it with the Advanced Installation
option of the Threat Manager installer, which lets you install remote services individually. Then
connect each remote service to the main Threat Manager installation.

## Install the Action Service on a Remote Server

:::note
The Advanced Installation option is available only when you launch `NetwrixThreatManager.exe`
directly. It isn't available when you launch the installer through the Netwrix Setup Launcher
(`Netwrix_Setup.exe`).
:::


To install the Action Service on a remote server:

**Step 1 –** On the remote server, right-click `NetwrixThreatManager.exe` and select **Run as
administrator**. The Netwrix Threat Manager Setup wizard opens.

**Step 2 –** Select the **Advanced Installation** checkbox and click **Install**.

![Netwrix Threat Manager Setup wizard with the Advanced Installation option selected](/images/threatmanager/3.4/install/advancedinstall.webp)

**Step 3 –** On the **What would you like to install?** page, select **Remote Services Only**,
select the **Action Service** checkbox, and click **Next**.

![Netwrix Threat Manager Setup wizard What would you like to install page](/images/threatmanager/3.4/install/remoteservices.webp)

**Step 4 –** Follow the prompts to complete the installation.

![Netwrix Threat Manager Setup wizard showing the Action Service with a Configure Now link](/images/threatmanager/3.4/install/servicesinstalled.webp)

When the installation completes, the wizard lists each remote service you installed. The Action
Service shows a **Configure Now** link until you connect it to Threat Manager.

## Connect a Remote Action Service to Threat Manager

A remote Action Service must connect to the Threat Manager server before it can run actions. The
connection registers the host as an Action Service server. Once connected, the Action Service
fetches queued actions from Threat Manager and runs them locally.

To connect the Action Service:

**Step 1 –** In the installer, click the **Configure Now** link next to the Action Service. The
Netwrix Threat Manager Action Service Configuration window opens.

![Netwrix Threat Manager Action Service Configuration window](/images/threatmanager/3.4/install/actionserviceconfiguration.webp)

**Step 2 –** Enter the following information:

- **Host** – The protocol, host name, and port of the Threat Manager console (for example,
  `https`, `ThreatManagerServer.Domain.com`, and `8080`).
- **User Name** – The administrator account used to connect to Threat Manager. Netwrix recommends
  that you use the built-in Administrator account.
- **Password** – The password for the specified user name.
- **Ignore certificate errors** – Select this checkbox if you use a self-signed certificate or you
  encounter other issues with the web certificate.

**Step 3 –** Click **Test** to verify the connection, and then click **Save**. The Action Service
restarts automatically.

![Netwrix Threat Manager Setup wizard showing the Action Service with a Configured status](/images/threatmanager/3.4/install/serviceconfigured.webp)

The status changes to **Configured**. Click **Exit** to close the installer.

To change the connection later, run the `<StealthDEFENDDirectory>\ActionService\Configure Action Service`
shortcut. The Action Service Configuration window opens. Enter the Threat Manager URL and
administrator credentials again, and save.

## Frequently Asked Questions

### Action Service shows Connection Broken

If the connection is broken, the status next to the Action Service changes from **Configured** to
**Connection Broken**. Hover over the **Connection Broken** link to see a tooltip that describes
the error.

![Netwrix Threat Manager Setup wizard showing the Action Service with a Connection Broken status](/images/threatmanager/3.4/install/connectionbroken.webp)

First, run the connection process again. If the connection is still broken, check the following:

- The core Threat Manager installation is operational.
- No firewall blocks access from the remote server to the Threat Manager host and port.
- Any certificates required to trust the Threat Manager web certificate are installed on the remote
  host.

For more detail, check the Threat Manager logs and the installer logs.

### Remote service reports a self-signed certificate

Some remote services use their own certificate. The Action Service doesn't. If a remote service
uses a self-signed certificate, the service configuration window detects it and displays a message
that names the certificate. Threat Manager must trust the certificate to connect back to the
service.

![Netwrix Threat Manager Integration Service Configuration window showing the self-signed certificate message](/images/threatmanager/3.4/install/selfsignedcertificate.webp)

Click **Download** to save the public key of the certificate. Then import it into the Trusted Root
Certification Authorities store on the core Threat Manager server. This lets Threat Manager connect
to the remote service without selecting **Ignore certificate errors**, which ignores all certificate
errors.

### Run the Action Service as a service account (optional)

Netwrix doesn't recommend this configuration. The preferred method is to specify a credential
profile on each Action Step. See the
[Credential Profile Page](/docs/threatmanager/3.4/configuration/integrations/credentialprofile.md)
topic for additional information.

You can configure the Action Service to run as a service account. That account then runs every
action that doesn't specify a credential profile. An Action Step that specifies a credential
profile uses those credentials instead.

To configure the Action Service to run as a service account:

**Step 1 –** Open Services (`services.msc`).

![services](/images/threatmanager/3.0/install/services.webp)

**Step 2 –** Double-click the Netwrix Threat Manager Action Service. The Threat Manager Action
Service Properties window opens.

![serviceaccountproperties](/images/threatmanager/3.0/install/serviceaccountproperties.webp)

**Step 3 –** Click the **Log On** tab.

**Step 4 –** Select the **This account** radio button and specify the Active Directory account and
credentials you want. To select an account, click **Browse** to open the Select User window.

**Step 5 –** Click **Apply** and then **OK**. This sets the Action Service to run as the specified
account.

**Step 6 –** Right-click the Netwrix Threat Manager Action Service in the Services window and click
**Restart**.

![servicesrestart](/images/threatmanager/3.0/install/servicesrestart.webp)

Once restarted, the Threat Manager Action Service uses the specified service account.
