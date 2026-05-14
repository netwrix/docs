---
title: "Netwrix Password Policy Enforcer v11.2"
description: "Netwrix Password Policy Enforcer Introduction"
sidebar_position: 1
---

# Netwrix Password Policy Enforcer v11.2
Netwrix Password Policy Enforcer (PPE) helps you secure your network by ensuring users choose strong passwords. Password Policy Enforcer rejects new passwords that don't comply with your password policy. If you install the optional Password Policy Client, users can also see which rules their password didn't comply with.

A typical Windows network has both domain and local user accounts. Password Policy Enforcer can enforce password policies for both account types, but you will most likely use it for domain accounts in Active Directory.


## System Requirements
- Windows Server 2016, 2019, 2022, and 2025
- Windows 10 and 11
- 50 megabytes free disk space
- 10 megabytes free RAM (75 megabytes if using [Argon2](admin/manage-policies/rules/history_rule.md) hashes)

:::note
The disk space requirement doesn't include the compromised database. If you want to block known compromised passwords, then add 30 gigabytes of disk space. You can keep the database locally or on a network share. The initial download and extraction temporarily requires approximately 100 gigabytes. Subsequent updates are significantly smaller as they only contain new records. These estimates will increase over time as the database grows.
:::


## System Components

### Password Policy Server (PPS)
The Password Policy Server is the component that enforces the password policy. Install it on all the domain controllers to enforce a password policy for Active Directory user accounts. You can also install the PPS on individual servers and workstations to enforce a password policy for local user accounts on those computers.

### Configuration Console
The Configuration Console configures PPE. You will typically install this on your own computer or a management server, but you can also install it on the domain controllers. The Configuration Console also includes some PowerShell cmdlets. Use of the cmdlets is optional.

The Configuration Console has some additional requirements:
- [.NET Desktop Runtime 10.0 or later](https://aka.ms/dotnet/10.0/windowsdesktop-runtime-win-x64.exe)
- [PowerShell 7.4 or later](https://github.com/powershell/powershell/releases) if you intend to use the cmdlets

### Mailer Service
This component sends email from Password Policy Enforcer to your mail server. Although not required, this component supports several PPE features, so you'll most likely want to install it on one server in the domain. This component requires the [.NET Desktop Runtime 10.0 or later](https://aka.ms/dotnet/10.0/windowsdesktop-runtime-win-x64.exe).

### Password Policy Client (PPC)
The Password Policy Client helps users to choose a compliant password by showing them the password policy rules, and also which rules they don't comply with. This component is optional, but very beneficial. It works on all operating systems listed in the System Requirements section, but you'll typically only install it on users' computers, virtual desktops, and Remote Desktop Session Hosts.

### Password Policy Enforcer Web
Password Policy Enforcer Web is an optional component that runs on Microsoft Internet Information Services (IIS). It has similar features to the Password Policy Client, but via a web interface. Use Password Policy Enforcer Web if you prefer not to install the Password Policy Client, or if you want to integrate Active Directory password changes into your own applications.

:::note
The [Similarity rule](admin/manage-policies/rules/similarity_rule.md) only works when users change passwords from the Password Policy Client, Password Policy Enforcer Web, or Netwrix Password Reset.
:::
