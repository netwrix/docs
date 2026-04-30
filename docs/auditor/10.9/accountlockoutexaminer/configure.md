---
title: "Planning and Preparation"
description: "Planning and Preparation"
sidebar_position: 10
---

# Planning and Preparation

Before you start using Netwrix Account Lockout Examiner, check the prerequisites and set up your
environment, as described in this section.

## System requirements

Make sure that the machine where you plan install the solution meets the system requirements listed
below.

**Hardware:**

| Specification | Requirement |
| ------------- | ----------- |
| CPU           | min 1.5 GHz |
| Memory        | 1 GB RAM    |
| Disk space    | 20 MB       |

**Software:**

| Specification | Requirement                                                                                                                                                                                    |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OS            | Both 32-bit and 64-bit of the following operating systems are supported: - Windows Server 2019 - Windows Server 2016 - Windows Server 2012 R2 - Windows Server 2012 - Windows 10 - Windows 8.1 |

## Accounts and rights

1. The computer where **Account Lockout Examiner** will run must be a member of the domain where
   lockouts happen.
2. The account used to run the application must be a member of the following groups:
    1. **Domain Admins** group (to retrieve the necessary data from domain controllers.)
    2. Local **Administrators** group on the workstation where lockouts happen (to access the
       Security event log.)

In the environments with root/child domains, the account used to run Account Lockout Examiner should
be a member of the local **Administrators** group on the workstations in both root and child
domains.

## Licensing

Account Lockout Examiner is shipped with a free pre-configured license that will be valid until a
newer version becomes available. You will be notified on the new version release by the
corresponding message displayed in the product. Then you will need to download that new version.

## Target infrastructure

For the solution to connect to and retrieve the necessary information from the Windows machines that
may become the potential lockout reasons, your infrastructure should meet the requirements listed
below.

### Target systems and platforms

The following Windows machines are supported as examination targets:

- Windows Server 2019
- Windows Server 2016
- Windows Server 2012 R2
- Windows Server 2012
- Windows 10
- Windows 8.1

The solution can work with the following Exchange Server versions to retrieve information needed for
lockout reason detection:

- Exchange Server 2019
- Exchange Server 2016
- Exchange Server 2013

### Inbound firewall rules

Make sure the following **Inbound** firewall rules are enabled on the Domain Controllers and domain
computers:

- File and Printer Sharing (Echo Request - ICMPv4-In)
- Remote Event Log Management (RPC)
- Remote Service Management (NP-In)
- Remote Scheduled Tasks Management (RPC)
- Remote Volume Management (RPC -EPMAP)
- Windows Management Instrumentation (WMI-In)

### Ports

The following **TCP** ports should be open on the Domain Controllers and domain computers:

- Port **135** — for communication using RPC
- Dynamic ports **1024-65535** — for internal communication

### Recommended network security settings

Security researches revealed that NTLM and NTLMv2 authentication is vulnerable to a variety of
malicious attacks, including SMB replay, man-in-the-middle attacks, and brute force attacks.

To make Windows operating system use more secure protocols (e.g. Kerberos version 5), the outgoing
NTLM authentication traffic should be disabled for the machine where Netwrix Account Lockout
Examiner will run. (See also
[this Microsoft article](https://docs.microsoft.com/en-us/windows/win32/secauthn/microsoft-negotiate).)

For that, you need to set the **Network Security: Restrict NTLM: Outgoing NTLM traffic to remote
servers** policy setting to **Deny All**. This can be done locally on the machine hosting Netwrix
Account Lockout Examiner, or via Group Policy.

To disable outgoing NTLM authentication traffic locally:

1. Run _secpol.msc_.
2. Browse to **Security Settings\Local Policies\Security Options**.
3. Set the **Network Security: Restrict NTLM: Outgoing NTLM traffic to remote servers** setting to
   **Deny All**.

To disable outgoing NTLM authentication traffic via Group Policy:

1. Open _gpmc.msc_.
2. Find the Group Policy Object (GPO) that is applied to the machine where Netwrix Account Lockout
   Examiner runs.
3. Edit this GPO. Browse to **Computer Configuration\Windows Settings\Security Settings\Local
   Policies\Security Options**.
4. Set the **Network Security: Restrict NTLM: Outgoing NTLM traffic to remote servers** setting to
   **Deny All**.
5. On the machine hosting Netwrix Account Lockout Examiner run the following command via the command
   prompt:

    `gpupdate /force`

### Required audit settings

You can configure either **Advanced audit policies** or **Basic audit policies** for the target
machines. See Scenario A or Scenario B, respectively.

Scenario A: Advanced audit policies

Enable the following **Advanced audit policies** for the target machines:

| Audit entry                           | Event ID | Success/Failure |
| ------------------------------------- | -------- | --------------- |
| Account Logon                         |          |                 |
| Audit Credential Validation           | 4776     | Failure         |
| Audit Kerberos Authentication Service | 4771     | Failure         |
| Audit Other Account Logon Events      | 4776     | Failure         |
| Account Management                    |          |                 |
| Audit User Account Management         | 4740     | Success         |
| Logon/Logoff                          |          |                 |
| Audit Logon                           | 4625     | Failure         |
| Audit Account Lockout                 | 4625     | Failure         |

Scenario B: Basic audit policies

Enable the following **basic audit policies** for the target machines:

| Audit entry                | Event ID   | Success/Failure |
| -------------------------- | ---------- | --------------- |
| Audit logon events         | 4625       | Failure         |
| Audit account logon events | 4776, 4771 | Failure         |
| Audit account management   | 4740       | Success         |
