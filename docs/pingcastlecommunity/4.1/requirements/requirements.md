---
sidebar_position: 1
sidebar_label: Requirements
description: Check the computer, Active Directory account, and domain controller requirements for running PingCastle Community, and when to use privileged mode.
---
# Requirements

PingCastle Community is a console application. It has no server component, so you don't install anything on a server. You run `PingCastle.exe` on a workstation or a server, and it connects to your domain controllers.

The requirements fall into three areas: the computer that runs PingCastle, the Active Directory account it uses, and the domain controllers it queries.

## Computer that runs PingCastle

You can run PingCastle on any workstation or server that supports .NET 10.

Starting with PingCastle 3.5, PingCastle bundles the .NET runtime directly with the application. You don't need to install any prerequisites, additional components, or frameworks.

You don't need local administrator privileges to run PingCastle.

## Active Directory account

PingCastle requires an Active Directory account to connect and perform audits. In most cases, a standard user account with no special privileges is sufficient. The account can even be from a trusted domain, and it doesn't need to be part of the local administrators group.

## Domain controllers

PingCastle has no specific requirements for your domain controllers. You don't install anything on them.

For optimal performance, ensure Active Directory Web Services (ADWS) is enabled on your domain controllers. When available, ADWS can significantly reduce scan times, often by a factor of 10 or more.

:::note
Domain controllers running Windows Server 2008 R2 and later enable ADWS by default. The PowerShell Active Directory module also uses ADWS.
:::

## Privileged mode

:::note
To run privileged mode with a least-privilege service account instead of an administrator account, see [Least-Privilege Permissions for Privileged Mode](privileged-mode-permissions.md).
:::

PingCastle offers a privileged mode that enhances the reliability and accuracy of specific security checks. Non-privileged mode works for basic operations and many checks. Privileged mode provides higher confidence results for certain assessments.

Most operations don't require running PingCastle as an administrator. Certain checks, such as DNS-related checks, may have limited functionality without administrator privileges.

To run privileged mode, use the following command:

```
PingCastle.exe --healthcheck --privileged --server domain.local
```

The following table shows which rules benefit from privileged mode and the permissions they require:

| Rule | Description | Permission Required |
|------|-------------|---------------------|
| A-CertTempCustomSubject (ESC1) | Certificate template vulnerability check | Gets and checks CA Enrollment ACL |
| A-CertTempAnyPurpose (ESC2) | Certificate template any purpose check | Gets and checks CA Enrollment ACL |
| S-Vuln-MS14-068 | Kerberos vulnerability check | Checks installed hotfixes on the domain controller |
| S-Vuln-MS17_010 | EternalBlue/SMB vulnerability check | Checks installed hotfixes on the domain controller |
