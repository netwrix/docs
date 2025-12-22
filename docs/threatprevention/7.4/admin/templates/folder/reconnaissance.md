---
title: "Reconnaissance Folder Templates"
description: "Reconnaissance Folder Templates"
sidebar_position: 120
---

# Reconnaissance Folder Templates

The Reconnaissance folder contains the following templates:

| Template         | Description     | TAGS       |
| --------------- | ------------- | --------- |
| BloodHound Detection                                            | BloodHound is a tool that is used to reveal hidden and often unintended relationships within an Active Directory environment. Attackers can use BloodHound to easily identify highly complex attack paths that would otherwise be impossible to quickly identify. https://github.com/BloodHoundAD/BloodHound <br />This policy will detect the latest BloodHound/Sharphound and Ingestor generated queries in your environment | <ul><li>NEW 5.1 TEMPLATES</li><li>Reconnaissance</li><li>Bloodhound</li><li>LDAP</li></ul>                                           |
| Directory Read: Malicious DPAPI Secret Reveal                   | This secret should only be retrieved by NTAuthority System on a domain controller thus any activity by a user or computer should be considered a threat.        | <ul><li>NEW 7.1 TEMPLATES</li><li>DPAPI</li></ul>                 |
| LDAP: Account Reconnaissance            | This is the recommended policy for detecting signature queries of LDAP reconnaissance tools.     | <ul><li>NEW 7.1 TEMPLATES</li><li>LDAP</li><li>Reconnaissance</li></ul>      |
| LDAP: Admin Accounts       | This Policy will detect LDAP queries targeting sensitive accounts, such as Administrator. You can add and delete to this list under the LDAP Query tab as per your specific requirements         | <ul><li>NEW 5.1 TEMPLATES</li><li>LDAP</li><li>Reconnaissance</li><li>Privileged Accounts</li></ul>         |
| LDAP: GMSA Password            | Detects when the password for a Group Managed Service Account is read <br />\* This policy should exclude the computer accounts used that are allowed to retrieve the password       | <ul><li>NEW 7.1 TEMPLATES</li><li>GMSA</li><li>Password</li></ul>          |
| LDAP: LAPS Security & Active Directory LAPS Configuration Recon | Microsoft’s LAPS is a useful tool for automatically managing Windows computer local Administrator passwords. Since LAPS requires the computer attributes to be present, attackers can check to see if LAPS is “installed” in Active Directory by checking for the presence of the LAPS attributes in AD. This policy will identify attempts to query AD for attributes that associated with the presence of LAPS         | <ul><li>NEW 5.1 TEMPLATES</li><li>LAPS</li><li>Reconnaissance</li></ul>       |
| LDAP: Managed Service Accounts Recon                            | This policy can be configured to detect attempts to discover managed service accounts. It looks for LDAP queries of cn=msDS-ManagedServiceAccount      | <ul><li>NEW 5.1 TEMPLATES</li><li>LDAP</li><li>Reconnaissance</li><li>Privileged Accounts</li><li>Managed Service Accounts</li></ul> |
| LDAP: Service Accounts Recon               | If intruders attack a service that uses a highly privileged System account, they might be able to conduct further exploits under that account's context. Many organizations use common cosmetic naming conventions to denote service accounts or maintain a list of service accounts. This policy can be configured to detect attempts to discover service accounts.               | <ul><li>NEW 5.1 TEMPLATES</li><li>LDAP</li><li>Reconnaissance</li><li>Service Accounts</li></ul>        |
