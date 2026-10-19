---
title: "Install the Configuration Console"
description: "Install the Configuration Console"
sidebar_position: 50
---

# Install the Configuration Console

The Configuration Console configures and manages Netwrix Password Policy Enforcer on your domain.

Install the Password Policy Enforcer Configuration Console on any server or workstation where you need it.

The Configuration Console is a feature package included in the server installation **.msi** file:

- PPE Server – enforces password policies. It can be installed on Domain Controllers for domain
  password policy, or on servers and workstations for local account password policy.
- Configuration Console – manages policy configuration. Install wherever needed.
- Mailer Service – sends email reminders. Install on any server.

Follow the procedure in [Install Password Policy Enforcer on a Server](/docs/passwordpolicyenforcer/11.0/installation/installationserver.md),
selecting the **Configuration Console** feature. You can select the other features if appropriate
for the server.

You can also install/uninstall the products using command line
[Silent Installation](/docs/passwordpolicyenforcer/11.0/admin/command_line_interface.md#silent-installation).
