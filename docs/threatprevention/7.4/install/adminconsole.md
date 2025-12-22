---
title: "Administration Console Remote Install"
description: "Administration Console Remote Install"
sidebar_position: 50
---

# Administration Console Remote Install

Threat Prevention v7.4 supports the deployment of remote Administration Console, enabling you to
install additional consoles on standalone machines, like administrator or user workstations. In this
way, users can launch the Administration Console on their workstations, as an alternate to using it
on the Enterprise Manager server only.

Follow the steps to install the Administration Console on a remote machine.

**Step 1 –** From the Threat Prevention Installer package, run the server executable
(threatprevention-server-7.4.0.xxx.msi). The Threat Prevention Server Setup wizard opens.

![Threat Prevention Server Setup wizard - Welcome page](/images/threatprevention/7.4/install/welcome.webp)

**Step 2 –** On the Welcome page, click **Next** to begin the installation. One of the following
happens:

- If the installer detects .NET Framework 4.7 or later version installed on the machine, it proceeds
  with the installation.
- If it does not detect .NET Framework 4.7 or later version, a message is displayed to inform you to
  install it. You can either exit the wizard and install it manually or walk through the wizard
  until its last page and install it as part of the Threat Prevention installation process.

![Threat Prevention Server Setup wizard - End-User License Agreement page](/images/threatprevention/7.4/install/licenseagreement.webp)

**Step 3 –** On the End-User License Agreement page, check the **I accept the terms in the License
Agreement** box and click **Next**.

![Threat Prevention Server Setup wizard - Custom Setup page](/images/threatprevention/7.4/install/customsetupremote.webp)

**Step 4 –** By default, all three components are selected for installation. However, as you only
have to install the Win Console component, do the following to deselect the Enterprise Manager and
EPE Rest Site components:

- Click on the icon next to a component name and select the **Entire feature will be unavailable**
  option. A red cross appears for the component.

**Step 5 –** On selecting the Win Console option, the page displays the location where the
Administration Console will be installed. By default, the Threat Prevention infrastructure
components are installed to the `C:\Program Files\Netwrix\Netwrix Threat Prevention\` directory.

_(Optional)_ Click **Browse…** to change the installation location. The Change destination folder
page opens.

![Threat Prevention Server Setup wizard - Change Destination Folder page](/images/threatprevention/7.4/install/changedestinationfolder.webp)

> - Use the Look in field to select the desired installation folder.
> - When the Folder name box is set as desired, click **OK**.

The wizard returns to the Custom Setup page. You can use the **Reset** button to revert to the
default settings on the Custom Setup page. Click **Next** to proceed.

![Threat Prevention Server Setup wizard - Enterprise Manager Location Information page](/images/threatprevention/7.4/install/emlocationforremoteconsole.webp)

**Step 6 –** On the Enterprise Manager Location Information page, the host name or IP address for
the Enterprise Manager server is pre-populated. Enter the ports for the Enterprise Manager service
to communicate with the other Threat Prevention components.

- Enterprise Manager port for Console and PowerShell API Communications – 3740

:::note
As a prerequisite for using custom managed certificates, you must provide the Enterprise
Manager server DNS name, hostname, or FQDN (instead of the IP address) when installing Threat
Prevention server, remote instance of the Administration Console, and the Agent. See the
[Administration Console and Agent Not Communicating with the Enterprise Manager ](/docs/threatprevention/7.4/troubleshooting/enterprisemanagercommunication.md)topics
for additional information.
:::


Checking the **Create Windows Firewall Rules** box automatically sets the Windows firewall rules
needed to open these ports on the server during the installation process. If using a third party
firewall, uncheck this option and manually create the necessary firewall rules. See the
[Firewall Ports](/docs/threatprevention/7.4/requirements/ports.md) topic
for additional information.

When the settings are configured, click **Next**.

![Threat Prevention Server Setup wizard - Ready to Install page](/images/threatprevention/7.4/install/readytoinstall.webp)

**Step 7 –** On the Ready to Install Netwrix Threat Prevention Server page, click **Install**. When
finished, the Completed the Netwrix Threat Prevention Server Setup Wizard page is displayed.

![Threat Prevention Server Setup wizard – Completed page](/images/threatprevention/7.4/install/complete.webp)

If .NET Framework 4.7 is not installed, the Completed the Netwrix Threat Prevention Server Setup
Wizard page displays the **Run .NET 4.7 installation package** checkbox. Check it and click
**Finish** to install it.

You can also cancel the built-in download of .NET Framework 4.7 and install it manually.

:::note
If the .NET Framework installation does not complete, run the installer through an
Administrative command prompt.
:::


**Step 8 –** Click Finish on the Completed the Netwrix Threat Prevention Server Setup Wizard page.

![Threat Prevention Admin Console desktop icon](/images/threatprevention/7.4/install/winconsoleicon.webp)

The Administration Console has been installed, and the Windows Console icon is now on the desktop.

**Step 9 –** To enable the remote Administration Console to communicate with the Enterprise Manager,
you must manually copy the following files from the CertsInfo folder on the Threat Prevention server
to the CertsInfo folder on the machine where the Administration Console is installed:

- ca-crt.pem
- em-crt.pem

CertsInfo folder path on the Threat Prevention server:

`...\Netwrix\Netwrix Threat Prevention\SIEnterpriseManager\CertsInfo\`

CertsInfo folder path on the remote Administration Console machine:

`…\Netwrix\Netwrix Threat Prevention\SIWinConsole\CertsInfo\`

:::warning
Never copy all files from the Certsinfo folder on the server to a machine where the
Enterprise Manager is not installed. Doing so exposes the Enterprise Manager private keys, which
undermines security.
:::


The remote Administration Console is now ready to be launched.
