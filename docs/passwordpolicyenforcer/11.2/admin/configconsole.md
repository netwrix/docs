---
title: "Configuration Console"
description: "Configuration Console"
sidebar_position: 10
---

# Configuration Console

The PPE Configuration Console manages Password Policy Enforcer across your domain. It can be
installed on multiple servers/workstations as convenient.

Open the Configuration Console:

Click **Start** > **Netwrix Password Policy Enforcer** > **PPE Configuration**
or
Double click the **PPE Configuration** desktop shortcut.

![Configuration Console Dashboard](/images/passwordpolicyenforcer/11.2/evaluation/ppedashboard.webp)

## Dashboard Controls

The Configuration Console dashboard has all the tools you need to set up and manage Password Policy
Enforcer.

- Enable/Disable Password Policy Enforcer
- Connected To
- Help
- [Settings](/docs/passwordpolicyenforcer/11.2/admin/settings.md) - General, Notifications, Mail Service, License

In addition, there are tiles to access Password Policy Enforcer major features:

- [Manage Policies](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/manage_policies.md)
- [Compromised Password Check](/docs/passwordpolicyenforcer/11.2/admin/compromisedpasswordcheck.md)
- [System Audit and Support](/docs/passwordpolicyenforcer/11.2/admin/systemaudit.md) - Version Tracker, Support Tools, Property Editor

See the specific topics for details.

### Enable/Disable Password Policy Enforcer

The toggle enables/disables Password Policy Enforcer on all domain controllers. It is enabled by
default.

![Enable/Disable PPE](/images/passwordpolicyenforcer/11.2/administration/enabledisableppeconsole.webp)

Click the toggle to disable PPE:

![Disable PPE](/images/passwordpolicyenforcer/11.2/administration/disable.webp)

If PPE  is disabled, click the toggle to enable:

![Enable PPE](/images/passwordpolicyenforcer/11.2/administration/disabled.webp)

### Connected To

Sets the configuration for **Domain** (default) or **Local**. Password Policy Enforcer's
configuration settings are stored in Active Directory or the registry. An Active Directory
configuration is called a domain configuration, and it defines the password policies for domain user
accounts. A registry configuration is called a local configuration, and it defines the password
policies for local user accounts.

Domain configurations are stored in the **CN=Password Policy Enforcer** _version\*\*_,CN=System
object\*\*.

Local configurations are stored in the **HKLM\SOFTWARE**ANIXIS**\Password Policy Enforcer**
_version\*\*_\ registry key\*\*.

:::note
Users with write permission to these objects can configure Password Policy Enforcer.
:::


**Domain**

- Defines policies for domain user accounts.
- Select a Domain Controller from the list of domain controllers where PPE is installed.
- Configuration is replicated to all the domain controllers in the domain.

![Connect To Domain Configuration](/images/passwordpolicyenforcer/11.2/administration/connecttodomain.webp)

**Local**

- Defines policies for local user accounts.
- Only affects the computer where it is set.
- You can copy a local configuration to another computer by exporting the configuration from the
  registry, and then importing it into the registry of the other computer. You can also use Group
  Policy to distribute a local configuration to many computers. See the
  [Domain and Local Policies](/docs/passwordpolicyenforcer/11.2/installation/domain_and_local_policies.md) topic for additional information.

![Connected To Local Configuration](/images/passwordpolicyenforcer/11.2/administration/connecttolocal.webp)

### Help

Links to documentation and support tools.

- **Netwrix Help Center** launches the Password Policy Enforcer help.
- **About** displays the Configuration Console version.
- **Export Configuration Report** opens an export dialog. You can export the configuration as an
  html or txt file. Browse to the folder where you want the report.
- **Open Property Editor** launches the Property Editor.

    :::note
    Properties should only be changed when advised by Netwrix Support.
    :::


### Settings

See [Settings](/docs/passwordpolicyenforcer/11.2/admin/settings.md) for details on the General, Notifications, Mail Service, and License tabs.
