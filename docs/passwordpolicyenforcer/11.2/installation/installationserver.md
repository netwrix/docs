---
title: "Install the Server Components"
description: "Install the PPE Server, Configuration Console, and Mailer Service components on domain controllers, servers, or workstations using the Setup wizard or the command line."
sidebar_position: 20
---

# Install the Server Components

The Password Policy Enforcer (PPE) server installer includes the following components:
- **Password Policy Server (PPS)** — also known as the _PPE Service for DCs_. This component is typically installed on all the domain controllers in a domain. See [Domain and Local Policies](/docs/passwordpolicyenforcer/11.2/installation/domain_and_local_policies.md) for more information if your domain includes read-only domain controllers, or if you intend to enforce password policies for local user accounts.
- **Configuration Console** — Graphical and command-line tools to configure PPE. Install this component on any computer that you want to configure Password Policy Enforcer from. This could be a domain controller, a management server, or your computer.
- **Mailer Service** — Sends email on behalf of PPE. It is typically installed on one server in the domain.

:::note
The [introduction](/docs/passwordpolicyenforcer/11.2/index.md) has more information about these components, including their system requirements.
:::

## Manual Installation

To manually install one or more server components:

1. Run **Netwrix_PPE_Server_11.2.0.148_x64.msi**. The Setup wizard opens.

   ![Server Setup](/images/passwordpolicyenforcer/11.2/install/serversetup1.webp)

2. Click **Next**.

   ![Server Setup](/images/passwordpolicyenforcer/11.2/install/serversetup2.webp)

3. Review the End-User License Agreement, select the check box to accept the Agreement, then click **Next**.

   ![Server Setup](/images/passwordpolicyenforcer/11.2/install/serversetup3.webp)

4. Select one or more components to install, then click **Next**.

   ![Server Setup](/images/passwordpolicyenforcer/11.2/install/serversetup4.webp)

5. Review your selections, then click **Install**.

   ![Server Setup](/images/passwordpolicyenforcer/11.2/install/serversetup5.webp)

6. Click **Finish** when installation is complete. If prompted to restart the computer, then restart before using the installed components.

## Automated Deployment

If you have many domain controllers, use a software deployment tool or [Group Policy](/docs/passwordpolicyenforcer/11.2/installation/installationgpm.md) to automate the deployment. You can also run msiexec to install from the command line. For example, run this command with elevated permissions to silently install only the PPS component and immediately restart the computer:

 ```batch
msiexec /i Netwrix_PPE_Server_11.2.0.148_x64.msi ADDLOCAL=FeatureServerPPE /q
```

The ADDLOCAL argument tells msiexec which components to install. `ADDLOCAL=FeatureServerPPE,FeatureConsole,FeaturePPEMailerServer` installs all the server components.

:::tip
Add an exclusion for `%ProgramFiles%\Netwrix\Password Policy Enforcer\PPE.DLL` to exclude PPE from antivirus or other security software. This is optional.
:::

## Uninstalling

You can uninstall, repair or change the installed server components from the **Installed apps** page in Windows Settings, or the **Uninstall or change a program** page in Control Panel. You can also run msiexec to uninstall from the command line. For example, run this command with elevated permissions to silently uninstall all the PPE server components without restarting the computer:

```batch
msiexec /x Netwrix_PPE_Server_11.2.0.148_x64.msi /q /norestart
```
Use the REMOVE argument to remove individual components. For example, `REMOVE=FeaturePPEMailerServer`
