---
title: "Upgrading"
description: "Upgrading"
sidebar_position: 30
---

# Upgrading

## Upgrading from v9.x

The Password Policy Enforcer 10.2 Password Policy Server is backwards compatible with the V9.x
Password Policy Client. You do not have to upgrade existing V9.x Password Policy Clients to use the
10.2 Password Policy Server.

### Upgrading the Password Policy Server

The Password Policy Enforcer installer detects existing V9.x installations and upgrades them to
10.2. See the
[Installation](/docs/passwordpolicyenforcer/10.2/administration/installation/installation.md)
topic for additional information. If you are performing an automated installation with Group Policy,
then add PPE10.2.msi to the same Group Policy Object used to install the older version. See the
[Automated Installation (Advanced Setup)](/docs/passwordpolicyenforcer/10.2/administration/installation/automated_installation.md)
topic for additional information.

### Upgrading the Password Policy Client

The Password Policy Client installer detects existing V9.x installations and upgrades them to 10.2.
See the
[Password Policy Client](/docs/passwordpolicyenforcer/10.2/administration/passwordpolicyclient/password_policy_client.md)
topic for additional information. If you are distributing the Password Policy Client with Group
Policy, then add PPEClt10.2.msi to the same Group Policy Object used to install the older version.
Upgrade and reboot the Password Policy Servers before upgrading the clients.

### Upgrading the Mailer

The Password Policy Enforcer installer detects existing V9.x installations of the Password Policy
Enforcer Mailer and upgrades them to 10.2. See the
[Installing the Mailer](/docs/passwordpolicyenforcer/10.2/administration/mailer/mailer.md#installing-the-mailer)
topic for additional information.

## Upgrading from v8.x

The Password Policy Enforcer 10.2 Password Policy Server is backwards compatible with the V8.x
Password Policy Client. You can benefit from most of the new features by upgrading the Password
Policy Server on the domain controllers. Do this before deploying the 10.2 Password Policy Client.

### Upgrading the Password Policy Server

The Password Policy Enforcer installer detects existing V8.x installations and upgrades them to
10.2. See the
[Installation](/docs/passwordpolicyenforcer/10.2/administration/installation/installation.md)
topic for additional information. If you are performing an automated installation with Group Policy,
then add PPE10.2.msi to the same Group Policy Object used to install the older version. See the
[Automated Installation (Advanced Setup)](/docs/passwordpolicyenforcer/10.2/administration/installation/automated_installation.md)
topic for additional information.

Open the Password Policy Enforcer 10.2 management console immediately after upgrading to
automatically import the V8.x configuration settings into the new version.

![installing_ppe_4](/images/passwordpolicyenforcer/10.2/administration/installing_ppe_4.webp)

The management console imports valid subscription license keys, but it will not import V8.x
perpetual license keys as they cannot be used with Password Policy Enforcer 10.2. Password Policy
Enforcer will revert to a 30-day evaluation license if it cannot import the license key. Open the
PPS Properties page after an upgrade to check your license details. See the
[Management Console](/docs/passwordpolicyenforcer/10.2/administration/managementconsole/management_console.md)
topic for additional information.

You can run a combination of V8.x and 10.2 Password Policy Servers, but extended use of both
versions is not recommended as it adds administrative overhead. Maintain both versions only for a
short time while you roll out Password Policy Enforcer V9.x.

:::note
Any configuration changes made from the 10.2 management console will only affect 10.2
domain controllers. Likewise, any changes made from the V8.x management console will only affect
V8.x domain controllers. You must make configuration changes in both management consoles until all
domain controllers are upgraded to 10.2. Failure to do so may lead to inconsistent enforcement of
the password policy.
:::


Older versions of the Password Policy Enforcer Client (prior to V6.0) cannot detect passphrases.
Users must comply with the policy's compliance level when these older clients are installed. See the
[Managing Policies](/docs/passwordpolicyenforcer/10.2/administration/managingpolicies/managing_policies.md)
topic for additional information.

Password Policy Enforcer 10.2 accepts passphrases that comply with all enabled rules, irrespective
of the compliance level. Password Policy Enforcer V6.x did not do this, so it was possible to
configure Password Policy Enforcer in a way that would reject all passphrases because they could not
meet the compliance level after some rules were disabled. Password Policy Enforcer V6.x clients will
continue to use the old compliance level calculation until they are upgraded to 10.2. Take this into
consideration when setting the compliance level while Password Policy Enforcer V6.x clients are
still in use. This includes Netwrix Password Reset v2.x and PPE/Web v6.x. See the
[Netwrix Password Reset](https://helpcenter.netwrix.com/category/passwordreset) and
[Web](/docs/passwordpolicyenforcer/10.2/web/web_overview.md)
topics for additional information.

Password Policy Enforcer 10.2 allows the use of longer rule insert in Password Policy Client
messages. Older versions of the Password Policy Enforcer Client (prior to V7.0), including PPE/Web
V6.x and Netwrix Password Reset V2.x may truncate messages with long inserts. See the
[Password Policy Client](/docs/passwordpolicyenforcer/10.2/administration/passwordpolicyclient/password_policy_client.md)
topic for additional information.

PPE/Web V3.x and Netwrix Password Reset V1.x use the Password Policy Enforcer V3.x communication
protocol. These clients are not compatible with the 10.2 server.

:::warning
Do not use the automatic tolerance option with Password Policy Enforcer V4.x clients.
These clients will enforce an extremely restrictive password policy if this option is enabled. They
will reject any password that contains a character found in the comparison parameter. See the
[Rules](/docs/passwordpolicyenforcer/10.2/administration/rules/rules.md)
topic for additional information.
:::


### Upgrading the Password Policy Client

The Password Policy Client installer detects existing V8.x installations and upgrades them to 10.2.
If you are distributing the Password Policy Client with Group Policy, then add PPEClt10.2.msi to the
same Group Policy Object used to install the older version. Upgrade and reboot the Password Policy
Servers before upgrading the clients.

### Upgrading the Mailer

The Password Policy Enforcer installer detects existing V8.x installations of the Password Policy
Enforcer Mailer and upgrades them to 10.2. See the
[Installing the Mailer](/docs/passwordpolicyenforcer/10.2/administration/mailer/mailer.md#installing-the-mailer)
topic for additional information.

## Upgrading from v7.x

The Password Policy Enforcer 10.2 Password Policy Server is backwards compatible with the V7.x
Password Policy Client. You can benefit from most of the new features by upgrading the Password
Policy Server on the domain controllers. Do this before deploying the 10.2 Password Policy Client.

### Upgrading the Password Policy Server

The PPE installer detects existing V7.x installations and upgrades them to V10.2. See the
[Installation](/docs/passwordpolicyenforcer/10.2/administration/installation/installation.md)
topic for complete installation instructions. If you are performing an
[Automated Installation (Advanced Setup)](/docs/passwordpolicyenforcer/10.2/administration/installation/automated_installation.md)
with Group Policy, then add PPE10.2.msi to the same Group Policy Object used to install the older
version.

Open the PPE V10.2 management console immediately after upgrading to automatically import the V7.x
configuration settings into the new version.

![ppe7configurationimport](/images/passwordpolicyenforcer/10.2/administration/ppe7configurationimport.webp)

The management console imports valid subscription license keys, but it will not import V7.x
perpetual license keys as they cannot be used with Password Policy EnforcerV10.2. Password Policy
Enforcerwill revert to a 30-day evaluation license if it cannot import the license key. Refer to the
[PPS Properties Page](/docs/passwordpolicyenforcer/10.2/administration/properties/properties.md)
topic after an upgrade to check your license details.

You can run a combination of V7.x and V9.x Password Policy Servers, but extended use of both
versions is not recommended as it adds administrative overhead. Maintain both versions only for a
short time while you roll out PPE V9.x.

:::note
Any configuration changes made from the V10.2 management console will only affect V10.x
domain controllers. Likewise, any changes made from the V7.x management console will only affect
V7.x domain controllers. You must make configuration changes in both management consoles until all
domain controllers are upgraded to V10.x. Failure to do so may lead to inconsistent enforcement of
the password policy.
:::


Older versions of the PPE Client (prior to V6.0) cannot detect passphrases. Users must comply with
the policy's compliance level when these older clients are installed.

Netwrix Password Policy Enforcer V10.x accepts passphrases that comply with all enabled rules,
irrespective of the compliance level. Password Policy EnforcerV6.x did not do this, so it was
possible to configure Password Policy Enforcer in a way that would reject all passphrases because
they could not meet the compliance level after some rules were disabled. Password Policy Enforcer
V6.x clients will continue to use the old compliance level calculation until they are upgraded to
V10.x. Take this into consideration when setting the compliance level while Password Policy Enforcer
V6.x clients are still in use. This includes Netwrix Password Reset V2.x, and Password Policy
Enforcer Web V6.x.

Netwrix Password Policy Enforcer V10.x allows the use of longer rule inserts in Password Policy
Client messages. Older versions of the PPE Client (prior to V7.0), including PPE/Web V6.x and
Netwrix Password Reset V2.x may truncate messages with long inserts.

Password Policy Enforcer Web V3.x and Netwrix Password Reset V1.x use the Password Policy Enforcer
V3.x communication protocol. These clients are not compatible with the V10.x server.

:::warning
Do not use the automatic tolerance option with Password Policy Enforcer V4.x clients.
These clients will enforce an extremely restrictive password policy if this option is enabled. They
will reject any password that contains a character found in the comparison parameter.
:::


The PPE Client for Windows 8, 10, Server 2012, Server 2016, and Server 2019 displays messages in a
smaller area than previous versions of Windows. Some of the default message components were
shortened to fit the available space. Your existing templates and macros will not change, but some
of the default inserts may be different to the ones your users are familiar with. Any new policies
you create after upgrading to PPE V9.x will use the new templates and macros.

If you would like to use the new templates and macros for your existing policies, create a new
policy and copy the templates from the new policy to your existing policies. See the
[Policy Properties](/docs/passwordpolicyenforcer/10.2/administration/managingpolicies/policy_properties.md)
topic for more information.

### Upgrading the Password Policy Client

The Password Policy Client installer detects existing V7.x installations and upgrades them to V10.2.
Refer to the
[Installing Password Policy Client](/docs/passwordpolicyenforcer/10.2/administration/passwordpolicyclient/installing_password_policy_client.md)
topic for complete installation instructions. If you are distributing the PPC with Group Policy,
then add PPEClt912.msi to the same Group Policy Object used to install the older version. Upgrade
and reboot the Password Policy Servers before upgrading the clients.

### Upgrading the Mailer

The PPE installer detects existing V7.x installations of the PPE Mailer and upgrades them to V10.2.
Refer to the
[Mailer](/docs/passwordpolicyenforcer/10.2/administration/mailer/mailer.md)
topic for complete installation instructions.

## Upgrading from v6.x

The Password Policy Enforcer 10.2 Password Policy Server is backwards compatible with the V6.x
Password Policy Client. You can benefit from most of the new features by upgrading the Password
Policy Server on the domain controllers. Do this before deploying the 10.2 Password Policy Client.

### Upgrading the Password Policy Server

The Password Policy Enforcer installer detects existing V6.x installations and upgrades them to
10.2. See the
[Installation](/docs/passwordpolicyenforcer/10.2/administration/installation/installation.md)
topic for additional information. If you are performing an automated installation with Group Policy,
then add PPE10.2.msi to the same Group Policy Object used to install the older version. See the
[Automated Installation (Advanced Setup)](/docs/passwordpolicyenforcer/10.2/administration/installation/automated_installation.md)
topic for additional information.

Open the Password Policy Enforcer 10.2 management console immediately after upgrading to
automatically import the V6.x configuration settings into the new version.

![installing_ppe_7](/images/passwordpolicyenforcer/10.2/administration/installing_ppe_7.webp)

The management console imports valid subscription license keys, but it will not import V6.x
perpetual license keys as they cannot be used with Password Policy Enforcer 10.2. Password Policy
Enforcer will revert to a 30-day evaluation license if it cannot import the license key. Open the
PPS Properties page after an upgrade to check your license details. See the
[Management Console](/docs/passwordpolicyenforcer/10.2/administration/managementconsole/management_console.md)
topic for additional information.

You can run a combination of V6.x and 10.2 Password Policy Servers, but extended use of both
versions is not recommended as it adds administrative overhead. Maintain both versions only for a
short time while you roll out Password Policy Enforcer V9.x. If you are using Password Policy
Enforcer's Maximum Age rule and would like to enable the new extended maximum age feature for long
passwords, then you must first upgrade the domain controller holding the PDC emulator operations
master role to Password Policy Enforcer V910x. See the
[Rules](/docs/passwordpolicyenforcer/10.2/administration/rules/rules.md)
topic for additional information.

:::note
Any configuration changes made from the 10.2 management console will only affect 10.2
domain controllers. Likewise, any changes made from the V6.x management console will only affect
V6.x domain controllers. You must make configuration changes in both management consoles until all
domain controllers are upgraded to 10.2. Failure to do so may lead to inconsistent enforcement of
the password policy.
:::


The **Do not check admin/helpdesk password resets** property in the PPS Properties page was renamed
to **Enforce policy when password is reset**. The check box value changes after upgrading, but
Password Policy Enforcer enforces the same policy. See the
[Management Console](/docs/passwordpolicyenforcer/10.2/administration/managementconsole/management_console.md)
topic for additional information.

Password Policy Enforcer V6.x included two dictionary files. DICT.TXT, and an optimized version
called DICT_O.TXT. The two files had identical coverage when the tolerance was set below five, but
DICT_O.TXT offered better performance due to its smaller file size. The performance difference is
insignificant on modern servers, so Password Policy Enforcer 10.2 includes only DICT.TXT. If you are
using DICT_O.TXT with the Dictionary rules, then you should reconfigure it to use DICT.TXT after
upgrading. See the
[Rules](/docs/passwordpolicyenforcer/10.2/administration/rules/rules.md)
topic for additional information.

Older versions of the Password Policy Enforcer Client (prior to V6.0) cannot detect passphrases.
Users must comply with the policy's compliance level when these older clients are installed.
Password Policy Enforcer 10.2 accepts passphrases that comply with all enabled rules, irrespective
of the compliance level. See the
[Managing Policies](/docs/passwordpolicyenforcer/10.2/administration/managingpolicies/managing_policies.md)
topic for additional information. Password Policy Enforcer V6.x did not do this, so it was possible
to configure Password Policy Enforcer in a way that would reject all passphrases because they could
not meet the compliance level after some rules were disabled. Password Policy Enforcer V6.x clients
will continue to use the old compliance level calculation until they are upgraded to 10.2. Take this
into consideration when setting the compliance level while Password Policy Enforcer V6.x clients are
still in use. This includes Netwrix Password Reset v2.x and PPE/Web v6.x. See the
[Netwrix Password Reset](https://helpcenter.netwrix.com/category/passwordreset) and
[Web](/docs/passwordpolicyenforcer/10.2/web/web_overview.md)
topics for additional information.

Password Policy Enforcer 10.2 allows the use of longer rule inserts in Password Policy Client
messages. See the
[Rules](/docs/passwordpolicyenforcer/10.2/administration/rules/rules.md)
topic for additional information. Older versions of the Password Policy Enforcer Client (prior to
V7.0), including PPE/Web V6.x and Netwrix Password Reset V2.x may truncate messages with long
inserts.

PPE/Web V3.x and Netwrix Password Reset V1.x use the Password Policy Enforcer V3.x communication
protocol. These clients are not compatible with the 10.2 server.

:::warning
Do not use the automatic tolerance option with Password Policy Enforcer V4.x clients.
These clients will enforce an extremely restrictive password policy if this option is enabled. They
will reject any password that contains a character found in the comparison parameter. See the
[Rules](/docs/passwordpolicyenforcer/10.2/administration/rules/rules.md)
topic for additional information.
:::


The Password Policy Enforcer Client for Windows 2016, 2019, and 2022 displays messages in a smaller
area than previous versions of Windows. Some of the default message components were shortened to fit
the available space. See the
[Password Policy Client](/docs/passwordpolicyenforcer/10.2/administration/passwordpolicyclient/password_policy_client.md)
topic for additional information. Your existing templates and macros will not change, but some of
the default inserts may be different to the ones your users are familiar with. Any new policies you
create after upgrading to Password Policy Enforcer 10.2 will use the new templates and macros.

If you would like to use the new templates and macros for your existing policies, create a new
policy and copy the templates from the new policy to your existing policies. Templates are in the
tab of the Policy Properties page. See
[Password Policy Client](/docs/passwordpolicyenforcer/10.2/administration/passwordpolicyclient/password_policy_client.md)
and
[Managing Policies](/docs/passwordpolicyenforcer/10.2/administration/managingpolicies/managing_policies.md)
topics for additional information.

### Upgrading the Password Policy Client

The Password Policy Client installer detects existing V6.x installations and upgrades them to 10.2.
See the
[Installation](/docs/passwordpolicyenforcer/10.2/administration/installation/installation.md)
topic for additional information. If you are distributing the Password Policy Client with Group
Policy, then add PPEClt10.2.msi to the same Group Policy Object used to install the older version.
Upgrade and reboot the Password Policy Servers before upgrading the clients.

### Upgrading the Mailer

The Password Policy Enforcer installer detects existing V6.x installations of the Password Policy
Enforcer Mailer and upgrades them to 10.2. See the
[Installing the Mailer](/docs/passwordpolicyenforcer/10.2/administration/mailer/mailer.md#installing-the-mailer)
topic for additional information.
