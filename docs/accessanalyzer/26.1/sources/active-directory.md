---
title: Active Directory
description: Add an Active Directory source to sync the users, groups, and memberships of a domain over LDAP or LDAPS.
sidebar_position: 2
---

An **Active Directory** source points Access Analyzer at one Active Directory domain. Identity syncs read the domain's users, groups, group memberships, and organizational units over the Lightweight Directory Access Protocol (LDAP) and store them for the [Identity reports](../dashboards-reports/reports/identity.md) and the [Active Directory dashboard](../dashboards-reports/dashboards/active-directory.md).

An Active Directory source also completes your file server data. Access scans of File Server sources record who has access as security identifiers (SIDs); syncing the domain those accounts belong to turns the SIDs into names in the reports. See [SMB file servers](smb-file-servers.md).

One source covers one domain. Access Analyzer reads the domain partition of the domain controller you point it at; it doesn't follow trusts or query the Global Catalog. For a forest with several domains, add one source per domain.

For an end-to-end walkthrough, see [Scan Active Directory](../guides/active-directory.md).

## Prerequisites

### Service Account

Active Directory sources use a [Username and password](../service-accounts/username-password.md) service account. The sync only reads, so a regular domain user with the default read access to the domain is enough for a full sync.

When you create the service account, enter the plain username without a domain prefix, for example `svc-access-analyzer`. The domain goes in the source's **Domain** field; Access Analyzer combines the two in the form the domain controller expects for the port you connect on.

### Network

The agent that runs the sync connects to the domain controller on the port you enter in **Port**:

| Port | Protocol | What happens |
|---|---|---|
| 389 | LDAP | Access Analyzer authenticates with DIGEST-MD5 and negotiates encryption, falling back to signing only, then to a simple bind. This satisfies domain controllers that require LDAP signing. Use the domain controller's fully qualified domain name (FQDN) in **Host**; DIGEST-MD5 doesn't work with an IP address. |
| 636 | LDAP over SSL (LDAPS) | Access Analyzer opens a TLS 1.2 connection and performs a simple bind inside it. The certificate the domain controller presents must pass validation unless you select **Ignore SSL errors**. |

Access Analyzer treats any port other than 636 as plain LDAP and uses the 389 behavior.

You choose the agent that runs the sync when you create the scan; see [Agents](../agents/index.md).

## Add an Active Directory Source

1. Go to **Configuration > Sources**.
2. Click **Add source**.
3. In **Source type**, select **Active Directory**.
4. Under **Details**, enter a **Name** and, optionally, a **Description** and **Labels**; see [Labels](labels.md).
5. Under **Connection**, fill in the fields in the following table.
6. Under **Access**, in **Service account**, select the account you set up for this domain.
7. Click **Test connection** and wait for **Connection successful**.
8. Click **Add source**.

![Add source dialog with Active Directory selected](/images/accessanalyzer/26.1/sources/add-active-directory.webp)

| Field | Required | What to enter | Default |
|---|---|---|---|
| **Host** | Yes | The hostname or IP address of a domain controller, for example `dc01.example.com`. Use the FQDN when connecting on port 389. | None |
| **Port** | Yes | The LDAP port: 389, or 636 for LDAPS. | 389 |
| **Ignore SSL errors** | No | Select to skip certificate validation when connecting over LDAPS. Leave clear unless the domain controller uses a certificate the agent doesn't trust, such as a self-signed one. | Clear |
| **Domain** | Yes | The DNS name of the Active Directory domain, for example `corp.example.com`. | None |

:::note

Changing **Host** or **Domain** on an existing source shows the warning **Existing scan data won't follow this change**. Data already synced stays with the previous host and domain. To rename the source, change **Name** instead.

:::

## What Test Connection Checks

**Test connection** connects to the domain controller on the selected port and binds with the service account's credentials, using the same sequence as a real sync. The button becomes available after you've entered **Host**, **Port**, and **Domain** and selected a service account.

Success shows the message **Connection successful**. Failure shows **Connection failed** with the reason. Two failures are common:

- On port 389 with an IP address in **Host**, authentication can fail; the message then asks you to use an FQDN instead of an IP address.
- On port 636, a TLS failure usually means the domain controller isn't offering LDAPS on that port or presents a certificate the agent doesn't trust. Check that the domain controller offers LDAPS on 636 and that its certificate validates, select **Ignore SSL errors** to skip validation, or connect on port 389 instead.

## What the Sync Collects

An **Identity sync** reads three kinds of objects:

| Object | What Access Analyzer records |
|---|---|
| Users: identifiers | Account name, SID, globally unique identifier (GUID), distinguished name, and user principal name |
| Users: profile | Display and contact details, title, department, company, manager, and employee ID |
| Users: security settings | Account control flags, password last set, account expiry, logon hours, allowed workstations, delegation settings, and service principal names |
| Users: activity | Last logon, last logoff, bad password count and time, and lockout time |
| Groups | Name, SID, group type, description, mail, and the member list |
| Organizational units | Distinguished name |

Each sync records group memberships and flags whether each one is direct or inherited through a nested group; a follow-up step runs after the sync to refresh effective memberships for the reports. The sync doesn't read computers, Group Policy objects, or password hashes. The last logon value comes from the domain controller the source points at, so it reflects the logons that controller has seen.

With **Enable differential scan** turned on (the default), each run reads only objects changed since the previous run; turn it off on the scan to read the whole domain every time. See [Scan types](../scans/scan-types.md) for the Identity sync options.
