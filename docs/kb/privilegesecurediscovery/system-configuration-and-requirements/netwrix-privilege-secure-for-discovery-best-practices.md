---
title: "Deployment and Management Best Practices"
description: "Best practices for deploying and managing Netwrix Privilege Secure for Discovery: accounts, AD cleanup, GPOs, networking, disaster recovery, and load balancing."
sidebar_label: "Deployment and Management Best Practices"
keywords:
- NPS-D
- SecureONE
- Remediant SecureONE
- best practices
- JITA
- RID 500
- AD cleanup
- GPO
- VPN
- DMZ
- disaster recovery
- Deny mode
products:
- privilegesecurediscovery
tags:
- kb
- system-configuration-and-requirements
knowledge_article_id: kA04u00000110owCAA
---

## Overview

This article describes best practices for deploying and managing Netwrix Privilege Secure for Discovery, including account management, Active Directory (AD) cleanup, Group Policy Object (GPO) changes, networking, disaster recovery (DR), and load balancing.

> **NOTE:** Implementations can vary depending on the needs of your organization.

## Main Accounts

The product uses three main accounts to operate. These accounts are set for the domain being managed. The protect mode account is the most sensitive of these accounts. Rotate its password periodically by updating AD, and then updating the password in the product during a maintenance window.

## Service Accounts

When you roll out the product, make service accounts persistent in the product inventory. Otherwise, the product ingests them as Just-in-Time Access (JITA) accounts and removes them from the local administrators group of the machine. You can update this setting in the UI, but you can also update it in bulk with the Quickstart process.

Keep persistence to a minimum (zero standing privilege). Ideally, only the protect mode account and the local administrator (RID 500) account are persistent. In some cases, local processes or software require a local administrator account, and you must set those accounts as persistent. Review and approve these accounts as part of an AD cleanup to reduce persistence. You can do this during or after the initial rollout.

## Local Administrator (RID 500) Account

Disable the local administrator account on all Windows machines. This account cannot be removed and is a frequent target for compromise. Disabling it removes this vulnerability. Create an alternate account in its place by using the Offline Access Management (OAM) capability. You can randomize the name of the alternate account by using the `?` wildcard.

Decide who has access to the managed passwords: administrators only, or also all users that have JITA access. Access for JITA users can be useful for service desk and workstation support teams.

## AD Cleanup

After you install the product, visibility into AD becomes much clearer. The dashboard shows the number of machines scanned, which can be higher than expected because of old data that still exists in AD, including accounts that no longer exist. A general AD cleanup is highly recommended. The cleanup can include removing defunct data and revisiting access by organizational unit (OU), machine, or another suitable breakdown. You can pull this data with Quickstart and share it across the organization to get review and approval of access to machines.

## Groups for Access

Create one AD group for administrators and one for users. These groups must not be, or include, Domain Admins or Domain Users. The product does not enumerate these groups.

## GPO Changes

Most installations use GPO updates for two purposes:

- Providing scan capabilities on newer Windows operating systems.
- Adding the protect mode account to machines as a local administrator. The product uses this to update the local administrators on endpoints that provide JITA.

Start the GPO process early so that scan details are available early in the setup. GPO changes can require approvals that slow the implementation if you request them late in the rollout.

## Firewall Requirements

For firewall and datacenter requirements, see [Port, Firewall, and Datacenter Requirements](./netwrix-privilege-secure-for-discovery-port-firewall-and-datacenter-requirements.md).

## VPN Access

The product can manage machines over VPN connections if the following items resolve correctly over the VPN:

- IP address
- Fully qualified domain name (FQDN)

If you experience DNS issues, check whether either item is incorrect over the VPN.

## DMZ Access

The product can access machines in a demilitarized zone (DMZ) if the correct access is provided. See the port and firewall requirements. Do not install the product within a DMZ, because that requires firewall changes that defeat the purpose of a DMZ.

## Multiple Domains

A single instance can manage many AD domains. You configure the domains on the server configuration page. The three main accounts are required for each domain.

## DR Instance

Maintain a DR instance that matches the production instance in a separate location. Typically, a nightly backup of the primary database is made and securely copied to the DR instance, and 5 or 7 rolling copies are kept. If you need the DR instance, restore the latest copy to it. Do not run the worker, scanner, expire, and LDAP sync services in the DR environment during daily activity. If they run, they overwrite changes made in the production environment.

## Test Environments

Use test environments for regression testing, and point them to a test AD environment.

## Load Balancing

Docker internally manages and distributes load, so the API entry point can start on any node in the cluster. Basic round-robin load balancing is therefore required. Set the pool with the DNS name and an HTTP response check for status 200, which shows that the node is online and responding.

## JITA vs Deny

The product has two levels of protection: JITA and Deny. Deny provides a higher level of security by removing any administrator accounts that were added to the machine. In JITA mode, those accounts are added to the product inventory. In Deny mode, they are not added to the inventory.

To add accounts to the local inventory of a machine in Deny mode, switch the machine to JITA mode, add the required accounts, and then return the machine to Deny mode. You can also add an account to an endpoint in Deny mode by using the API or the UI.
