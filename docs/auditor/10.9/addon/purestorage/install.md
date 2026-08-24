---
title: "Deploy the Add-On"
description: "Deploy the Add-On"
sidebar_position: 10
---

# Deploy the Add-On

Deploying the add-on involves the following steps:

**Step 1 –** Prepare Auditor for data processing.

**Step 2 –** Configure FlashArray File Auditing and forwarding.

**Step 3 –** Install and configure the Add-On.

## Step 1: Prepare Auditor for Data Processing

In Auditor client, go to the Integrations section and verify Integration API settings:

1. Ensure the **Leverage Integration API** is switched to **ON**.
2. Check the TCP communication port number – default is **9699**.

See the [Prerequisites](/docs/auditor/10.9/api/prerequisites.md) topic for additional information.

By default, Auditor writes activity records to the _Netwrix_Auditor_API_ database, which isn't
associated with a specific monitoring plan.

Optionally, you can create a dedicated monitoring plan in Auditor. In this case, Auditor writes data
to a database linked to this plan. Target it at Netwrix API data source and enable for monitoring.

In such scenario, you will need to specify this monitoring plan in the **Monitoring Plan** field in
the add-on configuration wizard. See **Step 3** below for details.

## Step 2: Configure FlashArray File Auditing and Forwarding

FlashArray File Auditing is a native array feature that must be configured on the array before the
add-on can receive any events. The basic workflow is:

1. Set up a remote syslog log target.
2. Create a File Auditing policy that references the log target.
3. Attach the policy to the Managed Directory (or directories) you want audited.
4. Set a SACL on the audited directories or files.

> **Important:** Until a SACL is set on an audited path, FlashArray does not emit any audit events
> for it — this is the most common reason no data reaches the add-on. Applying a SACL to a path with
> no File Auditing policy attached also silently fails (no error is returned), so complete steps 1–3
> before setting SACLs, and verify the SACL was actually applied afterwards.

Both SMB and NFS are supported. Create a remote syslog log target pointing at the add-on
installation server and the port you plan to use, for example:

```
purelog syslog create --uri tls://<add-on-host>:<port> --services data-audit fa-remote-syslog
```

You can also create the syslog target from the FlashArray web console: **Settings → Monitoring**,
click **+** in the **Syslog Servers** box, and select **Data Audit** as the service.

Reference this target when creating the File Auditing policy, for example:

```
purepolicy audit file create --targets fa-remote-syslog fa-audit-policy
purepolicy audit file add --dir <fs>:<managed_directory> fa-audit-policy
```

### Set the SACL

The SACL must be set through file protocol access by a privileged File user — by default, a member
of the array's **Audit Operators** local group (Domain Admins, and root for AUTH_SYS NFS, are also
implicit privileged users). To delegate this to a domain user:

```
pureds local group add --external "user@domain.example" "Audit Operators"
```

The simplest way to set the SACL is from an SMB client, connected as a user allowed to manage
auditing settings:

1. Open the exported share containing the directory to audit.
2. Right-click the target folder → **Properties** → **Security** tab → **Advanced**.
3. Add or edit an auditing entry for the user or group to monitor, choosing the operations and
   outcomes to audit.
4. Save the change, then perform a test file operation (e.g. rename or delete a file) and confirm an
   audit event reaches the configured target.

Keep SACLs as narrow as possible — auditing has a performance cost, and read-attribute operations in
particular generate a high volume of events on both SMB and NFSv3.

## Step 3: Install and Configure the Add-On

Run the MSI installer and complete the setup. Once installation finishes, the configuration wizard
opens in your default web browser (if it doesn't, launch it manually from the Start menu shortcut).
The wizard guides you through the following configuration steps.

**Step 1 – Specify General settings.**

- **Netwrix Auditor Endpoint** — full endpoint URL that will receive activity records (default:
  `https://localhost:9699/`).
- **Monitoring Plan** — name of the monitoring plan to attribute collected data to. Leave empty to
  use the default API data source.

**Step 2 – Syslog Listener Settings.**

- **Listen Port** — TCP port on which the add-on listens for FlashArray File Auditing syslog events
  (default: `6514`). The port must be open on Windows Firewall for inbound connections, and must
  match the port used when creating the remote syslog target on the array.

**Step 3 – Share and AD access account.** Optionally provide a domain account used to:

- read the audited share's current ACL to populate owner/permissions "after" values, and
- resolve SIDs to friendly names via Active Directory when a syslog event doesn't include one.

Leave **Domain**, **User name**, and **Password** empty to use the Windows Service's own logon
account instead.

**Step 4 – Completing Add-on configuration.** Click **Run** to save the settings and start the
add-on service. You can then close the wizard tab.

To change the configuration later, launch the wizard again from the Start menu.

## Advanced Configuration

The wizard covers the settings needed to get the add-on running. Advanced tuning — such as choosing
which shares or protocols a source should collect, excluding specific users or paths, or turning ACL
enrichment on or off — is available in the add-on's configuration file
(`addonconfiguration.json`) for advanced scenarios.

A couple of behaviors are expected rather than limitations: NFS paths are reported as native Unix
paths rather than converted to a Windows UNC path, and ACL/owner "after" value enrichment is only
available for SMB shares, since NFS has no equivalent concept to query.
