---
description: >-
  Explains how to troubleshoot LDAP connection and synchronization failures
  between the Netwrix Endpoint Protector Server and Active Directory domain
  controllers, covering credential, addressing, permission, network, and
  configuration causes.
keywords:
  - Active Directory
  - LDAP
  - Directory Services
  - domain controller
  - synchronization
  - service account
  - FQDN
  - LDAPS
  - firewall
  - connection failure
  - Endpoint Protector
products:
  - endpointprotector
sidebar_label: Active Directory LDAP Connection Failures to Domain Controllers
tags:
  - troubleshooting-and-errors
  - kb
title: "Active Directory LDAP Connection Failures to Domain Controllers"
knowledge_article_id: REPLACE_WITH_SALESFORCE_KA_ID
---

# Active Directory LDAP Connection Failures to Domain Controllers

## Symptom

Creating or testing an Active Directory connection under **Directory Services** fails, returns an authentication or connection error, or times out. Synchronization jobs may also complete without errors but import no users, computers, or groups. This can occur when configuring a new connection or after a previously working connection stops functioning.

## Cause

### Invalid or Expired Service Account Credentials

The account configured in the **Username** and **Password** fields no longer authenticates. This happens when the account password was changed on the domain side without updating Endpoint Protector, or when the account was disabled, locked out, or expired.

### Incorrect FQDN, Hostname, or IP Address

The **Server** field points to a domain controller that is unreachable, decommissioned, or was entered incorrectly. This includes cases where an IP address was used instead of a fully qualified domain name (FQDN) and the IP later changed.

### Insufficient Privileges for the Synchronization Account

The account has valid credentials but lacks read access to the organizational units (OUs), users, computers, or groups being synchronized. This happens when delegated permissions on the target OU were removed or never granted.

### Network or Firewall Restrictions Between the EPP Server and Domain Controllers

A firewall, network segmentation change, or VPN configuration blocks the LDAP port (389) or LDAPS port (636) between the Endpoint Protector Server and the domain controller.

### Typos or Misconfiguration in EPP Directory Services Settings

A manual entry error in the **Server**, **Port**, **Connection Type**, or **Base Search Path** fields causes the connection to fail even though the domain controller itself is reachable and healthy.

## Resolution

### Verify Service Account Credentials

1. Confirm the account is enabled and not locked out in Active Directory.
2. Confirm the password has not expired or been changed since it was configured in Endpoint Protector.
3. In **Directory Services** > **Microsoft Active Directory**, update the **Username** field using the format `svc-eppsync@netwrix.com` or `NETWRIX\svc-eppsync`, and re-enter the **Password**.
4. Click **Test** to confirm the connection succeeds.

### Verify FQDN, Hostname, or IP Configuration

1. Confirm the correct FQDN for the target domain controller, for example `dc1.netwrix.com`.
2. From the Endpoint Protector Server, confirm DNS resolves the FQDN correctly:
   ```bash
   nslookup dc1.netwrix.com
   ```
3. Use the FQDN in the **Server** field rather than a static IP address, especially when the connection uses LDAPS with a certificate bound to the FQDN.
4. If a static IP address must be used, confirm it has not changed and is reserved (not subject to DHCP reassignment).

### Verify Synchronization Account Privileges

1. Confirm the synchronization account requires only read access to the target OUs, users, computers, and groups. Domain Administrator rights are not required.
2. In **Active Directory Users and Computers**, review the effective permissions on the target OU and confirm the account (or a group it belongs to) has **Read** access delegated.
3. Re-test the connection and attempt to browse the target OU in the **Directory Browser** section after adjusting delegation.

### Verify Network and Firewall Connectivity

1. From the Endpoint Protector Server, confirm the domain controller is reachable on the required port:
   ```bash
   telnet dc1.netwrix.com 389
   # or, for LDAPS
   telnet dc1.netwrix.com 636
   ```
   On Windows, use `Test-NetConnection -ComputerName dc1.netwrix.com -Port 389` instead.
2. If the connection fails, confirm firewall rules allow outbound traffic from the Endpoint Protector Server to the domain controller on port 389 (LDAP) or 636 (LDAPS).
3. Confirm no proxy, VPN, or network segmentation change has altered the route between the Endpoint Protector Server and the domain controller since the connection last worked.

### Review EPP Directory Services Configuration for Typos

1. Re-enter the **Connection Type**, **Server**, and **Port** fields in **Directory Services** > **Microsoft Active Directory**, confirming the port matches the selected connection type (389 for LDAP, 636 for LDAPS).
2. Confirm the **Base Search Path** syntax is correct, for example `OU=Users,DC=netwrix,DC=com`.
3. Click **Test** after each change to confirm the connection succeeds before saving.

## Related Links

- [Directory Services](/docs/endpointprotector/admin/directoryserv)
