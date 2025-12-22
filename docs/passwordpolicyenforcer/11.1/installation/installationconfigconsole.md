---
title: "Install the Configuration Console"
description: "Install the Configuration Console"
sidebar_position: 50
---

# Install the Configuration Console

The Configuration Console is used to configure and manage Netwrix Password Policy Enforcer on your
domain.

The Password Policy Enforcer Configuration Console can be installed on any servers or workstations
where it is convenient for you to use.

The Configuration Console is a feature package included in the server installation **.msi** file:

- PPE Server – enforces password policies. It can be installed on Domain Controllers for domain
  password policy, or on servers and workstations for local account password policy.
- Configuration Console – manages policy configuration. Install where ever needed.
- Mailer Service – sends email reminders. Install on any server.

Follow the procedure in [Install Password Policy Enforcer on a Server](/docs/passwordpolicyenforcer/11.1/installation/installationserver.md),
selecting the **Configuration Console** feature. You can select the other features if appropriate
for the server.

You can also install/uninstall the products using command line
[Silent Installation](/docs/passwordpolicyenforcer/11.1/admin/command_line_interface.md#silent-installation).
