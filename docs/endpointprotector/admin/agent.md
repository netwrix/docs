---
title: "Agent"
description: "Agent"
sidebar_position: 160
---

# Agent

The Endpoint Protector Agent enforces the Rights and Settings received from the Endpoint Protector
Server on the protected endpoints (Windows, Mac, and Linux).

You can download the Endpoint Protector Agent directly from the Endpoint Protector UI. For detailed
information about downloading the Endpoint Protector Agent, refer to the
[Client Software](/docs/endpointprotector/admin/systemconfiguration/overview.md#client-software) topic.

:::note
You can use tools like Active Directory or JAMF to deploy the Endpoint Protector Agent in
large networks.
:::


:::note
Starting with Endpoint Protector Server version 5.8.0.0, an additional security feature is
available to protect the integrity of the Agent. This feature, accessible via Device Control on the
Global Settings page, is known as the Tamper Mode setting. It is designed to prevent unauthorized
termination or modification of the Endpoint Protector Agent.
:::


## Agent Installation

For Windows and Mac, your input in installing the Endpoint Protector Agent is minimal. The
Installation folder and Server information are already pre-conﬁgured, and downloadable from the
Endpoint Protector Server.

:::note
For Linux installation instructions, read the readmeLinux.txt ﬁle available under the Read
this before installing link.
:::


:::note
You can also install the Agent from a repository for Endpoint Protector Linux Agents
starting with version 1.4.0.4., as described in the topic below.
:::


The following are several examples of supported distributions:

- Ubuntu 14.04+
- Mint 18.X
- CentOS 7.x
- Fedora 29
- OpenSUSE 42.2 and 42.3

![The Agent enforces the Rights and Settings received from the Endpoint Protector Server on the protected endpoints (Windows, Mac, and Linux)](setupagent.webp)

![The Agent enforces the Rights and Settings received from the Endpoint Protector Server on the protected endpoints (Windows, Mac, and Linux)](setupagenttwo.webp)

### Installation on macOS with Deep Packet Inspection and VPN Traﬃc Intercept Active

Follow the steps to install on macOS with Deep Packet Inspection and VPN Traffic Intercept active.

**Step 1 –** Open the Endpoint Protector Server.

**Step 2 –** Go to the **System conﬁguration** section, select **Client Software** and then download
the macOS Endpoint Protector Agent.

**Step 3 –** Decompress the downloaded ﬁle.

![Installation on macOS with Deep Packet Inspection and VPN Traﬃc Intercept Active](clientinstallationios.webp)

**Step 4 –** Open the **.pkg** ﬁle and follow the installation steps and give the requested
permissions.

**Step 5 –** After the installation is complete, go to **System Preferences** > **Security &
Privacy** > **Privacy tab** > **Full Disk Access**. Search for Endpoint Protector Client, select the
checkbox, and then **save** the changes.

![Grant permission to the Endpoint Protector Client](eppagentpermisions.webp)

**Step 6 –** Open the Endpoint Protector Server and activate Deep Packet Inspection by navigating to
**Device Control** > **Users/Computer/Group/Global Settings** > **Manage Settings** > **Endpoint
Protector Client** > **Deep Packet Inspection**.

![Activating Deep Packet Inspection](dpion.webp)

**Step 7 –** Go to the **System Conﬁguration** section, then **System Settings** > **Deep Packet
Inspection Certiﬁcate**, and download the **CA Certiﬁcate**.

![Download the Client CA Certiﬁcates](dpicertificate.webp)

**Step 8 –** Open the **Keychain Access** application from your macOS and select **System**.

![Open the Keychain Access application from your macOS and select System](keychainaccess.webp)

**Step 9 –** Decompress the downloaded **ClientCerts** ﬁle.

**Step 10 –** Select **cacert.pem** ﬁle and drag and drop it on **System > Keychain Access**.

![Select cacert.pem ﬁle and drag and drop it on Keychain Access, System](clientcerts.webp)

**Step 11 –** Double-click the **X** on the newly added certiﬁcate and on the Trust section, select
**Always Trust**.

![On the newly added certiﬁcate and on the Trust section, select Always Trust.](keychainaccesstwo.webp)

**Step 12 –** **Save** the changes.

**Step 13 –** Activate **Intercept VPN Traﬃc**.

**Step 14 –** Select one option for **EPP behavior when network extension is disabled**.

- Temporarily Disable Deep Packet Inspection – this option will temporary disable Deep Packet
  Inspection
- Block Internet Access – this option will end the Internet connection until the end-user approves
  the Endpoint Protector Proxy Conﬁguration once the computer is rebooted.

![Activate Intercept VPN Traﬃc](interceptvpntraffic.webp)

**Step 15 –** **Save** the changes.

**Step 16 –** The following pop-up will be displayed informing the end-user that a System Extension
is blocked and needs to be allowed.

![System Extension is blocked and needs to be allowed](systemextensionblocked.webp)

**Step 17 –** Go to **System Preferences** > **Security and Privacy** > select the **General tab**
and **allow** the Endpoint Protector Client Extension.

![select the General tab and allow the Endpoint Protector Client Extension](generaltabios.webp)

**Step 18 –** **Allow** the Endpoint Protector Proxy Conﬁguration from the pop-up window.

![proxypop-up](proxypop-up.webp)

At this point, the macOS Endpoint Protector Client installation is completed.

:::note
If EPPNotiﬁer is not visible or notiﬁcations do not display after the installation or
upgrade of the Endpoint Protector Client on macOS, please resolve this issue by restarting your
machine. In situations where the Endpoint Protector Client is installed and then uninstalled on
macOS, you may still see EPPNotiﬁer in the Notiﬁcation settings. To remove it from the list, simply
right-click and select "Reset notiﬁcations."
:::


### Debian Based Distributions

While the installation process is similar, each distribution and version have their own
particularities.

The following are several examples of supported distributions:

- Ubuntu 14.04
- Ubuntu 15.04
- Ubuntu 16.04
- Ubuntu 17.04
- Ubuntu 18.04
- Ubuntu 19.04
- Ubuntu 20.04
- Ubuntu 21.04
- Ubuntu 21.10
- Ubuntu 22.04
- LinuxMint
- Debian

![Debian Based Distributions](debianbaseddistributions.webp)

### RedHat based distributions

While the installation process is similar, each distribution and version have their own
particularities.

The following are several examples of supported distributions:

- CentOS 7.x
- RedHat 8.x
- Fedora 32, 33, 34, 35
- AWS Linux 2

![RedHat based distributions](redhatbaseddistributions.webp)

- OpenSuse 15.2
- SUSE 15+
- SLED Linux Enterprise Server 15 SP1
- SLED Linux Enterprise Server 15 SP2
- SLED Linux Enterprise Server 15 SP3

![RedHat based distributions](redhatbaseddistributionstwo.webp)

### Setting the Server IP

For all RedHat-based distributions, you need to follow an additional step after executing the above
commands in order to set the Endpoint Protector Server IP.

Based on each distribution, follow the corresponding method:

![Setting the Endpoint Protector Server IP](setserverip.webp)

![Setting the Endpoint Protector Server IP](setserveriptwo.webp)

### The Windows Subsystem for Linux

The Windows Subsystem for Linux (WSL) allows you to run native Linux distributions directly within
your Windows environment. However, due to its nature, the Endpoint Protector Client cannot be
directly installed as an application within WSL.

While direct installation is not possible, you can still manage and control the usage of WSL
applications through the Application Denylist feature in Endpoint Protector. This allows you to
define specific applications or processes associated with WSL that you want to restrict and monitor.

Follow the steps to use use Denylists to control WSL applications.

**Step 1 –** Navigate to the [Denylists and Allowlists](/docs/endpointprotector/admin/denylistsallowlists/overview.md)
section within the Endpoint Protector Console.

**Step 2 –** Create a new **Denylist entry**.

**Step 3 –** In the **Application Name field**, specify the WSL application you want to control.
This could be:

- `wsl *` – This wildcard entry will match all WSL applications.
- `wsl.exe` – This entry will specifically target the `wsl.exe` executable.
- `wsl.exe --help` – This entry will target the specific command `wsl.exe --help`.
- `wsl --list`– This entry will target the `wsl --list` command.

:::note
Endpoint Protector Client cannot directly control the usage of WSL Bash command-line tools
on Windows.

:::
