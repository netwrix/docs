---
title: "Configuration Console"
description: "Overview of the Password Policy Enforcer Configuration Console"
sidebar_position: 10
---

# Configuration Console

The Password Policy Enforcer (PPE) Configuration Console is a graphical user interface for centrally configuring and managing PPE. You can install the Configuration Console on any server or workstation.

Use the **PPE Configuration** desktop shortcut or Start menu item to open the console. If these don't exist, then use the [server components installer](/docs/passwordpolicyenforcer/11.2/installation/installationserver.md) to install the Configuration Console.

![Configuration Console Dashboard](/images/passwordpolicyenforcer/11.2/evaluation/ppedashboard.webp)

When the console is connected to a [domain configuration](/docs/passwordpolicyenforcer/11.2/installation/domain_and_local_policies.md), configuration changes made in the console replicate to all the domain controllers in the domain. Active Directory (AD) replication propagates the changes at normal replication intervals. The console applies configuration changes only to the local computer's registry when connected to a [local configuration](/docs/passwordpolicyenforcer/11.2/installation/domain_and_local_policies.md).

## Enable and Disable Password Policy Enforcer

Use the toggle switch in the upper-left corner of the home page to enable and disable Password Policy Enforcer. PPE is enabled by default, but it doesn't enforce any rules when first installed because you haven't defined any policies yet.

![Enable/Disable PPE](/images/passwordpolicyenforcer/11.2/administration/enabledisableppeconsole.webp)

## Get Help

The Help menu contains the following items:

- **Netwrix Help Center** - displays the help documentation.
- **About** - displays version information.
- **Export Configuration Report** - creates a configuration report in HTML or text format. Netwrix Support may ask you to send a configuration report to help troubleshoot an issue.
- **Open Property Editor** - opens the Property Editor to directly edit the configuration, including settings that aren't exposed in the user interface. Only use the Property Editor when Netwrix Support instructs you to.

## Set Global Settings

Click **Settings** to configure [global configuration settings](/docs/passwordpolicyenforcer/11.2/admin/settings.md).

## Connect to a Configuration

Password Policy Enforcer can enforce password policies for [domain and local](/docs/passwordpolicyenforcer/11.2/installation/domain_and_local_policies.md) user accounts. Domain configurations contain password policies for domain user accounts. Active Directory stores these configurations. The registry stores local configurations, which contain the password policies for local user accounts. Click the **Connected to** selector to connect to a configuration. You can choose which domain controller to connect to when working on a domain configuration. PPE always stores a local configuration in the local computer's registry.

:::note
PPE stores domain configurations in the `CN=Password Policy Enforcer <version>,CN=System` container object. It stores local configurations in the `HKLM\SOFTWARE\ANIXIS\Password Policy Enforcer <version>` registry key. Only users with write permission to these objects can configure Password Policy Enforcer.
:::

:::tip
You can distribute local configurations by exporting the configuration registry key and importing it into other computers. The [Domain and Local Policies](/docs/passwordpolicyenforcer/11.2/installation/domain_and_local_policies.md#distribute-the-local-configuration-with-group-policy) page shows how to distribute a local configuration with Group Policy.
:::

## Add a Policy

Click **Add policy** to create and configure a new [password policy](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/manage_policies.md).

## Check for Compromised and Reused Passwords

Click **Password Scanner** to check for [compromised and reused passwords](/docs/passwordpolicyenforcer/11.2/admin/compromisedpasswordcheck.md).

## Check Your PPE Installation

Click **System Audit and Support** to [review and troubleshoot your PPE deployment](/docs/passwordpolicyenforcer/11.2/admin/systemaudit.md).
