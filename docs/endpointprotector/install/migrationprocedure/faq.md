---
title: "Migration FAQ"
description: "Netwrix Endpoint Protector — Server Migration & Upgrade Guide: Frequently Asked Questions"
sidebar_position: 30
---

# Frequently Asked Questions

This page covers the most common questions and issues encountered during EPP server migrations.

---

## Migrating Directly to 2510 from an Older Version

**No.** 2510 and later versions accept only backups created on version **5.9.4.2**. If you are on any version from 5.7.0.0 to 5.9.4.1, you must first apply the cumulative patch to reach 5.9.4.2, create the backup there, and then deploy 2510.

Attempting to restore a backup from 5.7.x, 5.8.x, 5.9.x, or 5.9.4.1 onto 2510 will fail at the import step.

:::tip
**Consider a fresh deployment instead:** If the source server is on a very old or long-obsolete EPP version, it may be worth evaluating a clean deployment of the 2510/2604 image rather than going through the full migration path. Reconfiguring EPP on a fresh base installation can sometimes be faster and less risky than upgrading through multiple intermediate versions — especially in smaller environments or where historical log data isn't required. Discuss this option with your Netwrix account team or Support before committing to the upgrade path.
:::

---


## Restoring a 2509 Backup onto a 2510 Server

This is supported. Restoring a 2509 configuration backup onto a 2510 server simply migrates the configuration — the OS remains 2510. Once patched to 2604, the result is functionally equivalent to a native 2510-based deployment at 2604. The only practical difference is disk sizing, as the 2509 base image has a smaller default disk allocation than 2510. If disk capacity is sufficient, this path is fully valid.

---

## Backup Import Returns a 500 Error

This most commonly occurs with large backups or under-resourced VMs.

**Steps:**
1. Verify you have at least 2 GB of free disk space on the 2510 VM.
2. Verify the backup file isn't corrupted — re-download from the source server.
3. Verify the backup was created on 5.9.4.2 (not another version).
4. Try increasing PHP upload limits temporarily (see [Backup File Exceeds 200 MB Import Limit](troubleshooting#backup-file-exceeds-200-mb-import-limit)).
5. If none of the above resolves it, contact Netwrix Support with the server logs from `/var/log/epp/`.

---

## Network/IP Settings Not Saving on the New 2510 Server

The IP configuration page fails to save if **only one DNS field is filled**. This is a known product issue affecting 2509 and early 2510 builds.

**Workaround:** Fill both the Primary and Secondary DNS fields. Use `8.8.8.8` (Primary) and `8.8.4.4` (Secondary) if you don't have a secondary internal DNS server.

---

## Email Alerts Not Working After Migration

The backup doesn't always fully restore SMTP credentials, and you typically need to re-enter them manually after migration.

**Steps:**
1. Navigate to **System Configuration → System Settings → Email Configuration**.
2. Re-enter the SMTP server address, port, username, and password.
3. Use the **Send Test Email** function to confirm delivery.
4. Re-verify that alert rules are enabled under **Alerts**.

---

## Active Directory sync is broken after migration. Users/groups are missing.

AD/LDAP connectivity credentials may need re-entry after migration.

**Steps:**
1. Navigate to **System Configuration → Active Directory / LDAP**.
2. Click **Test Connection** — if it fails, re-enter the bind DN and password.
3. Run a manual sync and **verify the imported object count** against your expected directory size.

:::warning
AD Sync can complete without errors but only import a partial set of users or groups. Always cross-check the count, not just the "success" status.
:::

---

## SSO / Entra ID login fails after migration to 2510.

You may need to refresh Entra ID / SSO application registrations after migration.

**Steps:**
1. Navigate to **System Configuration → SSO**.
2. Verify Tenant ID, Client ID, and Client Secret are correctly populated.
3. Test login in an incognito browser window.
4. If the issue persists, re-register the EPP application in your Azure AD / Entra ID tenant.

:::tip
**Alternative — SCIM integration:** Since version **2601**, EPP supports SCIM as an alternative to SSO-based user provisioning. If SSO continues to cause issues post-migration, consider switching to SCIM integration for directory synchronisation and user management.
:::

---

## EPP Clients Not Communicating After Migration

**Checklist:**
1. Confirm the new server's IP/FQDN is reachable from endpoints (firewall, DNS).
2. Confirm client communications are enabled on the server (**System Configuration → System Settings**).
3. Confirm client packages are uploaded to the server — 5.9.4.3 (the required signature bridge) and 2602 (the target version).
4. Check the **Device Control → Computers** page and sort by **Last Seen**.
5. If clients were on 5.9.4.1 or older and you didn't deploy 5.9.4.3 first, they can't receive the 2602 client package directly — deploy 5.9.4.3 first via your software distribution tool before upgrading to 2602. See [Phase 3 — Uploading EPP & EE Client Packages](migrationguide#phase-3--uploading-epp--ee-client-packages) for the full client upgrade path.
6. Verify that firewall rules allow HTTPS connections on the configured EPP communication port.
7. Consider reinstalling the EPP Client if it appears to be corrupted.

---

## Audit Log Backup Running Without Completing

This is a known issue after migration to 2510/2601.

**Steps:**
1. Navigate to **System Maintenance → Audit Log Backups**.
2. If a job has been running more than 4 hours, attempt to cancel it from the UI.
3. If the cancel option is unresponsive, contact Netwrix Support — a backend intervention may be required to reset the job state.
4. Don't start new Audit Log Backup jobs until the stuck job is resolved.

---

## Artifact Logs Unavailable After Migration

This is a known issue. Contact Netwrix Support for the latest fix status and remediation steps.

---

## The Log Report page isn't loading / Export is failing.

This can occur after migration due to backend indexing activity on the newly restored database.

**Steps:**
1. Try a hard browser refresh (Ctrl+Shift+R).
2. Log out and log back in.
3. Try filtering for a smaller date range — very large log queries time out on newly migrated servers.
4. If the issue persists across all filters and date ranges, contact Netwrix Support.

---

## The server isn't sending CAP (Content Aware Protection) reports after migration.

**Steps:**
1. Verify Content Aware Protection policies are active (**Content Aware Protection → Policies**).
2. Check that the CAP Dashboard shows recent activity.
3. Generate a test transfer that should be detected and confirm whether it appears in CAP logs.
4. If policies are active but the server isn't generating or sending reports, contact Netwrix Support — this is a known post-migration defect.

---

## eDiscovery is showing a Token Error after migration.

This is a known product defect that can appear after migration.

**Steps:**
1. Navigate to **eDiscovery** and note the exact error message.
2. Try logging out and back in (token refresh).
3. If the error persists, contact Netwrix Support with the error details.

---

## Backend Security Updates are crashing the server after upgrading to 2601.

This is a known product defect on 2601.

**Steps:**
1. Don't repeatedly attempt to apply backend updates if the server crashes on the first attempt.
2. Take a VM snapshot before any retry.
3. Contact Netwrix Support immediately — a targeted fix is required.

---

## Activating 2510 in an Air-Gapped or Offline Environment

Air-gapped activation requires an **Offline Activation Patch** specific to 2510. This is a separate patch from the EPP software cumulative patch; request it from Netwrix Support in advance.

**Steps:**
1. Contact Netwrix Support or your account team before the migration maintenance window.
2. Request the Offline Activation Patch for 2510 for your specific environment.
3. Also request any offline CAP / eDiscovery activation patches if those modules are licensed.
4. Stage all offline patches and have them ready before taking the server offline for migration.

---

## ELS for PHP Installation Failing

This can occur in some migration paths when the license isn't correctly recognized.

**Steps:**
1. Verify your license file contains the `"php_els":"<value>"` field. If this field is missing, your license doesn't include ELS for PHP entitlement — contact Netwrix Support or your account team to request a refreshed license before proceeding.
2. Re-import the license via **System Configuration → System Licensing → Import License**.
3. After import, navigate to **Appliance → Server Information** and confirm **ELS for PHP = Active**.
4. If ELS still shows as inactive or the installation fails after re-import, contact Netwrix Support — some cases require a manual backend fix.

---

## The Effective Rights Report is empty after migration.

This is a known reporting layer issue that doesn't affect actual policies or enforcement. Contact Netwrix Support for the latest status and available patch.

---

## Complete Migration Process Duration

Approximate time estimates based on real migration experience:

| Activity | Estimated Duration |
|---|---|
| 5.9.4.2 cumulative patch installation | 15–60 minutes |
| Background DB tasks post-patch | Up to 24 hours (scheduled at 9 PM nightly) |
| System backup creation at 5.9.4.2 | 5–30 minutes depending on config size |
| New 2510 VM deployment and network config | 30–60 minutes |
| Backup restore on 2510 | 15–45 minutes |
| License re-import and verification | 5–10 minutes |
| Client package uploads | 10–20 minutes |
| Integration reconfiguration and testing | 30–90 minutes |
| Endpoint check-in verification | 30–60 minutes after re-enabling communications |
| **Total end-to-end** |  **~4–8 hours active work + 24h stabilization window** |

:::tip
Plan for a full business day of active migration work, plus a 24-hour monitoring period before the environment is considered fully stable.
:::

---

## Running the Old 5.9.4.2 Server Alongside the New 2510 Server

**Yes, and it is recommended** — at least temporarily. The old server:
- Retains all historical event logs and file shadows (not migrated to 2510).
- Serves as your rollback if critical issues are discovered post-migration.
- Can be consulted for compliance or forensic purposes if any applicable regulation requires retention of historical data.

:::tip
Keep the old server **offline** after the new 2510/2604 environment is validated. Activate access to it only on demand (e.g. for a compliance review or rollback). Leaving it online unnecessarily increases the attack surface, particularly given that 5.9.4.2 no longer receives security patches.
:::

Decommission the old server only after:
1. All endpoints are successfully communicating with 2510.
2. All integrations are verified.
3. Compliance and retention requirements for historical logs are satisfied (export or confirmed in SIEM).
4. A full post-migration backup has been created on 2510 and stored securely.

---

## Reverting from 2510 or a Later Version to a 5.x Server

The migration from 5.x to 2510 is one-way — there is no supported downgrade path. If critical issues are discovered after migration, the only supported rollback method is restoring the pre-migration VM snapshot of your 5.9.4.2 server. This is why keeping the old server VM alive and taking a snapshot before migration is mandatory.

Contact Netwrix Support before attempting any rollback.

---

*For additional assistance, contact Netwrix Customer Support at [support.netwrix.com](https://support.netwrix.com).*

---
