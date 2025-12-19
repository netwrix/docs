---
description: 'Best practices for deploying and managing Netwrix Privilege Secure for Discovery, including account management, AD cleanup, GPO changes, firewall and VPN considerations, DR, and load balancing.'
keywords:
- Netwrix Privilege Secure for Discovery
- JITA
- RID500
- AD cleanup
- GPO
- VPN
- DMZ
- DR
products:
- privilege-secure-discovery
sfdc_migration:
  article_id: ka0Qk000000DkOPIA0
  article_owner: Anna Evdokimova-Glinskaia
  article_reviewer: null
  article_sme: null
  created_date: '2025-05-09'
  knowledge_article_id: kA04u00000110owCAA
  last_modified_date: '2025-05-09'
  original_categories:
  - privilege_secure_discovery
  visibility: public
sidebar_label: Netwrix Privilege Secure for Discovery Best Practi
tags: []
title: "Netwrix Privilege Secure for Discovery Best Practices"
knowledge_article_id: kA04u00000110owCAA
---

# Netwrix Privilege Secure for Discovery Best Practices

Netwrix Privilege Secure for Discovery (formerly SecureONE)

## Overview
This article will help you to understand Netwrix Privilege Secure for Discovery best practices.

> **NOTE:** Implementations can vary for organizational specifics

- Netwrix Privilege Secure for Discovery Main Accounts
- Service Accounts
- Local Administrator, RID500, Account
- AD Cleanup
- Groups for Access
- GPO Changes
- Firewall Requirements
- VPN Access
- DMZ Access
- Multiple Domains
- DR Instance
- Test Environments
- Load Balancing
- JITA vs Deny

<a id="ma"></a>
## Netwrix Privilege Secure for Discovery Main Accounts
Netwrix Privilege Secure for Discovery utilizes three main accounts to operate. These are set specific to the domain being managed. The protect mode account is the most sensitive of these accounts. It is suggested that the password for this account is rotated periodically (update AD then update through Netwrix Privilege Secure for Discovery during a maintenance window).

<a id="sa"></a>
## Service Accounts
When rolling Netwrix Privilege Secure for Discovery out, attention must be paid to service accounts. These need to be made persistent within the product inventory, otherwise they will be ingested into Netwrix Privilege Secure for Discovery as a JITA account and removed from the machine's local admin group. This can be updated through the UI, but is often updated en-mass using the Quickstart process.  
Persistence should be minimized to a minimum (zero standing privilege), ideally only the protect mode account and the local administrator, RID 500, account. In certain circumstances local processes or software requires the existence of a local administrator account. These specific accounts need to be set as persistent. Review and approval of these accounts, to reduce persistence, should be part of an AD cleanup. This can be performed during or after the initial rollout of the product.

<a id="RID500"></a>
## Local Administrator, RID500, Account
The local administrator account should be disabled on all windows machines. This is account cannot be removed and is a large target for compromise. Disabling the account removes this vulnerability. An alternate should be created in its place using the OAM capability of Netwrix Privilege Secure for Discovery. The name of this account can be randomized using the `?` wildcard. A determination on who should have access to the Netwrix Privilege Secure for Discovery managed passwords needs to be made, either restricted to administrators or also available to all users that have JITA access. Enabling access to JITA users can be especially useful for service desk and workstation support teams.

<a id="adc"></a>
## AD Cleanup
When Netwrix Privilege Secure for Discovery is installed, visibility to Active Directory becomes much clearer. On the dashboard for Netwrix Privilege Secure for Discovery the amount of machines that are scanned is shown. This can often show as much more than would, perhaps, be expected. This can be due to old data that still exists within AD. This can include many accounts that do not exist anymore. A general cleanup of AD is highly advised. This can include the removal of defunct data, as well as revisiting access by OU, machine or other suitable breakdown. This data can be pulled using Quickstart and then disseminated across the organization to get review and approval of access to machines.

<a id="groups"></a>
## Groups for Access
It is recommended to have an AD group for administrators and also a group for users. These should groups should not be (or include) Domain Admins or Domain Users. These groups are not enumerated by Netwrix Privilege Secure for Discovery.

<a id="gpo"></a>
## GPO Changes
GPO updates are used for two purposes with most Netwrix Privilege Secure for Discovery installations:

- Providing scan capabilities on newer Windows operating systems
- Adding the Protect Mode account to machines as a local administrator. This is used to update the local administrators on end points providing JITA, Just In Time Access

It is suggested to start the GPO process early to ensure that scan details are available early in the setup of the environment. This can also require approvals that could slow the implementation if not requested early on in the rollout.

<a id="firewall"></a>
## Firewall Requirements
Read about firewall and datacenter requirements in the Port/Firewall and Datacenter Requirements article.

<a id="vpn"></a>
## VPN Access
Netwrix Privilege Secure for Discovery can manage machines over VPN connections, provided the three following items are updated via VPN:

- IP address
- Fully qualified DNS name

If issues are being experienced via DNS, determining if any of these are incorrect over VPN can help with resolution.

<a id="dmz"></a>
## DMZ Access
Netwrix Privilege Secure for Discovery can access machines with in a DMZ provided the correct access is provided (see port and firewall requirements). The product is not expected to be installed within a DMZ. This would require firewall changes that would defeat the purpose of a DMZ.

<a id="Domains"></a>
## Multiple Domains
A single Netwrix Privilege Secure for Discovery instance can manage many AD domains. The configuration of these domains is done through the server configuration page. The three main accounts that Netwrix Privilege Secure for Discovery relies upon are required for each domain.

<a id="DR"></a>
## DR Instance
It is recommended to have a DR instance that matches that of the production instance in a separate location. Typically a nightly backup is made of the primary database and securely copied over to the DR instance. A rolling copy of 5 or 7 versions are made. In the event of the DR instance being required the latest of these are rehydrated to the DR instance. Avoid the worker, scanner, expire and LDAP sync services from running in the DR environment during daily activity. If these are running they will overwrite changes that have been made in the production environment.

<a id="env"></a>
## Test Environments
Test environments are most usually used for regression testing. These should be pointed to a test AD environment.

<a id="bal"></a>
## Load Balancing
Docker internally manages and distributes load. Due to this the API entry point can start on any of the nodes within the cluster and therefore basic round robin load balancing is required. The pool is set with the DNS name and a HTTP response check of 200 for success. These shows that the node is online and responding.

<a id="jita"></a>
## JITA vs Deny
Netwrix Privilege Secure for Discovery has two levels of protection, JITA and Deny. Deny provides a higher level of security by removing any administrator accounts that added to the machine. In JITA mode these are added to the Netwrix Privilege Secure for Discovery inventory in deny mode these are not added to the inventory. To add additional accounts to the local inventory of a machine in deny mode, an administrator needs to switch the machine to JITA mode, followed by adding the required accounts and returning the machine back to deny mode. You can still add an account to an endpoint with Deny using the API or the UI.