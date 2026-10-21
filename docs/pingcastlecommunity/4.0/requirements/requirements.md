---
sidebar_position: 1
sidebar_label: Requirements
description: Review the account, permission, server, and client requirements for running PingCastle.
---
# Requirements

## Active Directory Account

PingCastle requires an Active Directory account to connect and perform audits. In most cases, a standard user account with no special privileges is sufficient—the account can even be from a trusted domain and doesn't need to be part of the local administrators group.

## Privileged Mode

PingCastle offers a privileged mode that enhances the reliability and accuracy of specific security checks. While non-privileged mode works for basic operations and many checks, privileged mode provides higher confidence results for certain assessments.

**Running as Administrator**: Most operations don't require running PingCastle as an administrator, though certain checks (such as DNS-related checks) may have limited functionality without administrator privileges.

**Privileged Mode Command**:
```
PingCastle.exe --healthcheck --privileged --server domain.local
```

**Privileged Mode Checks**:

The following table shows which rules benefit from privileged mode and the permissions they require:

| Rule | Description | Permission Required |
|------|-------------|---------------------|
| A-CertTempCustomSubject (ESC1) | Certificate template vulnerability check | Gets and checks CA Enrollment ACL |
| A-CertTempAnyPurpose (ESC2) | Certificate template any purpose check | Gets and checks CA Enrollment ACL |
| S-Vuln-MS14-068 | Kerberos vulnerability check | Checks installed hotfixes on the domain controller |
| S-Vuln-MS17_010 | EternalBlue/SMB vulnerability check | Checks installed hotfixes on the domain controller |

## Server Side

PingCastle has no specific server-side requirements.

For optimal performance, install Active Directory Web Services (ADWS) on your domain controllers. Windows Server 2008 R2 and later install ADWS by default. When available, ADWS can significantly reduce scan times—often by a factor of 10 or more.

## Client Side

Starting with PingCastle 3.5, PingCastle bundles the .NET runtime directly with the application, eliminating the need for any prerequisites or manual .NET framework installation.

**System Requirements**:
- PingCastle runs on any system that supports .NET 8
- No local administrator privileges required
- No need to install additional components or frameworks

**Previous Versions**: PingCastle versions before 3.5 required a separate installation of .NET Framework 4.7.2.
