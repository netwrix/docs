---
title: "Installation"
description: "Installation"
sidebar_position: 20
---

# Installation

Netwrix Password Policy Enforcer 10.2 is compatible with Windows Servers 2016, 2019, and 2022. It
can also be installed on Windows 8, 10, and 11 workstations to enforce local polices. See the
[Domain and Local Policies](/docs/passwordpolicyenforcer/10.2/administration/domain_and_local_policies.md)
topic for additional information.

## Windows 2016, 2019, or 2022

- Windows 8, 8.1, 10, or 11
- Fifteen megabytes free disk space
- Eight megabytes free RAM (72 megabytes if using Argon2 hashes)

:::note
Users do not have to change their password immediately after Password Policy Enforcer is
installed. They can continue using their current password until it expires, even if their current
password does not comply with the password policy. Installing Password Policy Enforcer does not
extend the Active Directory schema.
:::


## Installation Types

Password Policy Enforcer should be installed onto every domain controller to enforce the password
policy for domain user accounts, or onto individual servers and workstations to enforce the password
policy for local user accounts.

If your domain contains some read-only domain controllers, then installation of Password Policy
Enforcer on these servers is only necessary if you are using the following features:

- [Rules](/docs/passwordpolicyenforcer/10.2/administration/rules/rules.md)
- [Password Policy Client](/docs/passwordpolicyenforcer/10.2/administration/passwordpolicyclient/password_policy_client.md)
- [Netwrix Password Reset](https://helpcenter.netwrix.com/category/passwordreset)
- [Password Reset](/docs/passwordpolicyenforcer/10.2/administration/password_reset.md)
- [Web](/docs/passwordpolicyenforcer/10.2/web/web_overview.md)

You can install Password Policy Enforcer manually if you only need to install it on a few computers.
See the
[Manual Installation (Express Setup)](/docs/passwordpolicyenforcer/10.2/administration/installation/manual_installation.md)
topic for additional information.

It is recommended to perform an automated installation with Group Policy if you need to install it
on many computers in a domain. See the
[Automated Installation (Advanced Setup)](/docs/passwordpolicyenforcer/10.2/administration/installation/automated_installation.md)
topic for additional information.
