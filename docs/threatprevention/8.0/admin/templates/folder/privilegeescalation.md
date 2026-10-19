---
title: "Privilege Escalation Templates"
description: "Privilege Escalation Folder Templates"
sidebar_position: 100
---

# Privilege Escalation Folder Templates

The Privilege Escalation folder contains the following templates:

| Template       | Description       | TAGS        |
| ------------ | ----------- | ------------ |
| AD: Administrator Escalation                | Indicates that an unprivileged account has had its ACLs changed to a value that allows it to obtain administrative privileges (directly or transitively).       | <ul><li>NEW 5.1 TEMPLATES</li><li>Privileged Accounts</li><li>Privilege Escalation</li><li>AD Security</li><li>Unauthorized changes</li></ul>                     |
| AD: Modifications of Administrator Accounts | Uses the built-in Administrator Accounts – Objects Collection. <br />Add accounts with administrative rights to this collection       | <ul><li>NEW 5.1 TEMPLATES</li><li>Privileged Accounts</li><li>Privilege Escalation</li><li>AD Security</li><li>Unauthorized changes</li></ul>                     |
| AD: SID History Tampering                   | SID History is an attribute that supports migration scenarios. Each user account has an associated Security Identifier (SID) that tracks the security principal and the access the account has when connecting to resources. SID History allows one account to effectively replicate another's access. This proves useful for retaining user access when moving accounts from one domain to another. Since the user's SID changes when you create the new account, the old SID must map to the new one. When you migrate a user from Domain A to Domain B, you create a new user account in Domain B and add the Domain A user's SID to Domain B's user account's SID History attribute. This ensures the Domain B user can access resources in Domain A. <br />To detect SID History account escalation, this policy monitors users with data in the SID History attribute and flags those with SIDs in the same domain that have changed | <ul><li>NEW 5.1 TEMPLATES</li><li>Privileged Accounts</li><li>Privilege Escalation</li><li>Persistence</li><li>AD Security</li><li>Unauthorized changes</li></ul> |
| Ntds.dit File Hijacking                     | Protects users from stealing Ntds.dit file which contains the Active Directory database. Attackers can use Volume Shadow Copy to copy this file, but this will prevent and log any activity based on configuration.      | <ul><li>NEW 5.2 TEMPLATES</li><li>Privileged Accounts</li><li>Privilege Escalation</li><li>Persistence</li><li>AD Security</li><li>Unauthorized changes</li></ul> |

