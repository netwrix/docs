---
title: "Install Mailer Service"
description: "Install Mailer Service"
sidebar_position: 60
---

# Install Mailer Service

Netwrix Password Policy Enforcer sends email reminders to domain users before their passwords
expire. This is especially useful for users who logon infrequently, and for remote users who access
the network without logging on to the domain. You must install the Password Policy Enforcer Mailer
and configure the email delivery and email message options to send email reminders to users. See the
[Notifications](/docs/passwordpolicyenforcer/11.1/admin/configconsole.md#notifications) topic for additional information.

Add your email address to a service account, and the Password Policy Enforcer Mailer reminds you to
change the service account password before it expires.

The Password Policy Enforcer Mailer is not installed by default. Only install it on one server in
each domain. The Password Policy Enforcer Mailer can be installed on any server.

The mailer is a feature package included in the server installation **.msi** file:

- PPE Server – enforces password policies. It can be installed on Domain Controllers for domain
  password policy, or on servers and workstations for local account password policy.
- Configuration Console – manages policy configuration. Install where ever needed.
- Mailer Service – sends email reminders. Install on any server.

Follow the procedure in [Install Password Policy Enforcer on a Server](/docs/passwordpolicyenforcer/11.1/installation/installationserver.md),
selecting the **Mailer Service** feature. You can select the other features if appropriate for the
server.

You can also install/uninstall the products using command line
[Silent Installation](/docs/passwordpolicyenforcer/11.1/admin/command_line_interface.md#silent-installation).
