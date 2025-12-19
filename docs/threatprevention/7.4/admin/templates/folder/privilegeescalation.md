---
title: "Privilege EscalationFolder Templates"
description: "Privilege Escalation Folder Templates"
sidebar_position: 100
---

# Privilege Escalation Folder Templates

The Privilege Escalation folder contains the following templates:

| Template       | Description       | TAGS        |
| ------------ | ----------- | ------------ |
| AD: Administrator Escalation                | Indicates that an unprivileged account has had its ACLs changed to a value that allows it to obtain administrative privileges (directly or transitively).       | <ul><li>NEW 5.1 TEMPLATES</li><li>Privileged Accounts</li><li>Privilege Escalation</li><li>AD Security</li><li>Unauthorized changes</li></ul>                     |
| AD: Modifications of Administrator Accounts | Utilizes the built-in Administrator Accounts – Objects Collection. <br />Add accounts with administrative rights to be monitored to this collection       | <ul><li>NEW 5.1 TEMPLATES</li><li>Privileged Accounts</li><li>Privilege Escalation</li><li>AD Security</li><li>Unauthorized changes</li></ul>                     |
| AD: SID History Tampering                   | SID History is an attribute that supports migration scenarios. Every user account has an associated Security Identifier (SID) that is used to track the security principal and the access the account has when connecting to resources. SID History enables access for another account to effectively be cloned to another. This is extremely useful to ensure users retain access when moved (migrated) from one domain to another. Since the user's SID changes when the new account is created, the old SID needs to map to the new one. When a user in Domain A is migrated to Domain B, a new user account is created in DomainB and DomainA user's SID is added to DomainB's user account's SID History attribute. This ensures that DomainB user can still access resources in DomainA. <br />To detect SID History account escalation, this policy monitors users with data in the SID History attribute and flag the ones which include SIDs in the same domain that have changed | <ul><li>NEW 5.1 TEMPLATES</li><li>Privileged Accounts</li><li>Privilege Escalation</li><li>Persistence</li><li>AD Security</li><li>Unauthorized changes</li></ul> |
| Ntds.dit File Hijacking                     | Protects users from stealing Ntds.dit file which contains the Active Directory database. Attackers can use Volume Shadow Copy to copy this file, but this will prevent and log any activity based on configuration.      | <ul><li>NEW 5.2 TEMPLATES</li><li>Privileged Accounts</li><li>Privilege Escalation</li><li>Persistence</li><li>AD Security</li><li>Unauthorized changes</li></ul> |

