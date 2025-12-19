---
title: "Upgrading Password Policy Enforcer"
description: "Upgrading Password Policy Enforcer"
sidebar_position: 110
---

# Upgrading Password Policy Enforcer

Upgrades are supported for versions 9.0 and above. Contact Customer Support at
[https://www.netwrix.com/support.html](https://www.netwrix.com/support.html) if you need assistance
upgrading older versions

You can also install/uninstall the products using command line
[Silent Installation](/docs/passwordpolicyenforcer/11.0/admin/command_line_interface.md#silent-installation).

**Upgrading the Password Policy Server**

The Password Policy Enforcer installer detects existing installations and upgrades them to 11. See
the [Install Password Policy Enforcer on a Server](/docs/passwordpolicyenforcer/11.0/installation/installationserver.md) topic for additional
information. If you are performing an automated installation with Group Policy, then add the new
**.msi** installer files to the same Group Policy Object used to install the older version. See the
[Install with Group Policy Management](/docs/passwordpolicyenforcer/11.0/installation/installationgpm.md) topic for additional information.

:::note
Upgrade all your servers and domain controllers. Configuration changes performed with the
new version do not affect servers running an older version. If you have multiple versions, you must
make configuration changes in both configuration consoles until all domain controllers are upgraded
to 11. Failure to do so may lead to inconsistent enforcement of the password policy.
:::


Open the [License](/docs/passwordpolicyenforcer/11.0/admin/configconsole.md#license) settings on the Configuration Console
after an upgrade to check your license details. Password Policy Enforcer reverts to a 30-day
evaluation license if it cannot import the license key.

**Upgrading the Password Policy Client**

The Password Policy Client installer detects existing installations and upgrades them to 11. See the
[Install Password Policy Enforcer Client](/docs/passwordpolicyenforcer/11.0/installation/installationclient.md)[Install Password Policy Enforcer Client](/docs/passwordpolicyenforcer/11.0/installation/installationclient.md)
topic for additional information. If you are distributing the Password Policy Client with Group
Policy, then add the new client **.msi** file to the same Group Policy Object used to install the
older version. Upgrade and reboot the Password Policy Servers before upgrading the clients.

The Password Policy Enforcer 11 Password Policy Server is backwards compatible with the V10.x and
V9.x Password Policy Client. You are not required to update the Password Policy Clients, but it is
recommended.

**Upgrading the Mailer**

The Password Policy Enforcer installer detects existing installations of the Password Policy
Enforcer Mailer and upgrades them to 11. See the [Install Mailer Service](/docs/passwordpolicyenforcer/11.0/installation/installationmailer.md)
topic for additional information.

**Upgrade Notes**

- Versions 9.x and above do not support perpetual license keys.
