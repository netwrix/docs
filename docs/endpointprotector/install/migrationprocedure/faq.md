---
title: "Migration FAQ"
description: "Netwrix Endpoint Protector — Server Migration & Upgrade Guide: Frequently Asked Questions"
sidebar_position: 30
---

# Frequently Asked Questions

This page covers the most common questions and issues you may encounter during EPP server migrations.

:::info Temporary — Two Migration Targets Until Late August 2026
This page primarily covers migrating to **2608**. Until Netwrix releases 2608 (expected **late August 2026**), legacy 5.x customers who need to migrate sooner can still follow the temporary [Migrating from a Legacy 5.x Server to 2510/2604](/docs/endpointprotector/install/migrationprocedure/migration-legacy-5x-to-2510) path instead. Entries below that differ between the two targets are marked **2510/2604 path:**. This distinction, and these marked notes, will be removed once 2608 ships.
:::

---

## 1. Can I Migrate Directly from 5.9.4.2 to 2608? {#can-i-migrate-directly-from-5942-to-2608}

**Yes.** Once your server is on exactly 5.9.4.2, you can deploy the 2608 base image directly and restore your backup onto it — there's no need to route through the older 2510/2604 platform first. See [Migrating from a Legacy 5.x Server to 2608](/docs/endpointprotector/install/migrationprocedure/migration-legacy-5x).

If you're on any version older than 5.9.4.2 (5.7.0.0–5.9.4.1), you must first apply the cumulative patch to reach 5.9.4.2, create the backup there, and then deploy 2608. Attempting to restore a backup from 5.7.x, 5.8.x, 5.9.x, or 5.9.4.1 directly onto 2608 will fail at the import step.

:::tip
**Consider a fresh deployment instead:** If the source server is on a very old or long-obsolete EPP version, it may be worth evaluating a clean deployment of the 2608 image rather than going through the full migration path. Reconfiguring EPP on a fresh base installation can sometimes be faster and less risky than upgrading through multiple intermediate versions — especially in smaller environments or where historical log data isn't required. Discuss this option with your Netwrix account team or Support before committing to the upgrade path.
:::

:::note
**2510/2604 path:** The same 5.9.4.2 requirement applies if you need to migrate before 2608 ships — see [Migrating from a Legacy 5.x Server to 2510/2604](/docs/endpointprotector/install/migrationprocedure/migration-legacy-5x-to-2510). The only difference is the deployment target (2510/2604 instead of 2608).
:::

---

## 2. Do I Need to Reach 2604 Before Migrating to 2608? {#do-i-need-to-reach-2604-before-migrating-to-2608}

Not strictly, but Netwrix **recommends it**. If you're currently on 2509, 2510, 2601, or 2602, 2608 accepts a direct backup restore from your current version — but the 2604 → 2608 path is the most thoroughly tested in Netwrix labs. Other source versions in that range are less extensively validated for this specific migration. See [Migrating from the Current Image Platform to 2608](/docs/endpointprotector/install/migrationprocedure/migration-current-image#backup-compatibility).

If you're already on 2604, migrate directly to 2608.

---

## 3. What Happens to My Log Data When Migrating to 2608? {#what-happens-to-my-log-data-when-migrating-to-2608}

:::note
This answer applies to **self-hosted** deployments — on-premises or customer-managed cloud-hosted (AWS, Azure, GCP). **SaaS** is the one exception: since Netwrix migrates SaaS appliances directly, historical log data is carried over as part of that Netwrix-managed migration. After migration, SaaS customers see two tabs in the Reports menu: one for historical data still held in MySQL, and one for current data captured and stored in CrateDB going forward. Everything below applies only to the self-hosted migration paths covered in this guide.
:::

Nothing is migrated automatically, and this isn't new behavior. The System Configuration Backup used for migration has never included log data or file shadows — only policies, users, groups, and device rules.

2608 introduces **CrateDB**, a new database component dedicated to log storage. CrateDB ships **empty** on a freshly deployed 2608 server; MySQL continues to own configuration and EPP objects (Computers, Users, Groups), and CrateDB only stores *new* log data going forward. No historical log data from your old server is converted or copied into it.

If you need historical logs for compliance or forensics, export them via **System Maintenance → Audit Log Backups** before migrating, or keep your old server VM available. See the prerequisites section of either migration article for the full guidance.

:::note
**2510/2604 path:** CrateDB doesn't exist on this platform — this entire question doesn't apply. The System Configuration Backup limitation (no logs or file shadows) still applies the same way, though.
:::

---

## 4. Is a Client Bridge Version Required to Upgrade to the 2608 Client? {#is-a-client-bridge-version-required-to-upgrade-to-the-2608-client}

**No.** Any client currently on **5.9.4.3 Hotfix 1** or on any **2511–2605** client version can upgrade directly to the 2608 client — there's no new intermediate/bridge version for this jump.

The historical CoSoSys-to-Netwrix signature bridge (5.9.4.3 Hotfix 1) still applies only to endpoints that have never been upgraded past an old CoSoSys-signed client (5.9.4.1 or older). See [Client Upgrade Management](/docs/endpointprotector/install/migrationprocedure/clientupgrade#is-a-bridge-client-required-for-2608) for the full compatibility table.

:::note
**2510/2604 path:** The target client here is **2605**, not 2608, but the bridge logic is identical — clients on 5.9.4.1 or older still need 5.9.4.3 Hotfix 1 first before they can receive the 2605 client. See the Certificate Bridge section in [Migrating from a Legacy 5.x Server to 2510/2604](/docs/endpointprotector/install/migrationprocedure/migration-legacy-5x-to-2510#certificate-bridge-and-upgrade-path).
:::

---

## 5. Do EE Clients Need to Be Updated Immediately After Migration? {#do-ee-clients-need-to-be-updated-immediately-after-migration}

**Yes.** Since the **2509** release, Enforced Encryption changed its communication logic with the Endpoint Protector Server. Unlike regular EPP clients, which can remain on an older supported version for a period after migration, EE clients must be updated to the latest version immediately after the server migration completes — don't treat this as a lower-priority, staged rollout.

Delaying the EE client upgrade can cause EE-protected drives to lose synchronization with the server or fail to communicate correctly. See [Enforced Encryption Client Requires Immediate Update](/docs/endpointprotector/install/migrationprocedure/clientupgrade#enforced-encryption-client-requires-immediate-update) in Client Upgrade Management for the full guidance.

---

## 6. Restoring a 2509 Backup onto a 2510 Server {#restoring-a-2509-backup-onto-a-2510-server}

:::note
This entry applies only if you're still deploying on the older 2509/2510 image line. If you're migrating to **2608**, see the questions above instead.
:::

Netwrix supports this. Restoring a 2509 configuration backup onto a 2510 server migrates the configuration — the OS remains 2510. After you patch it to 2604, the result is functionally equivalent to a native 2510-based deployment at 2604. The only practical difference is disk sizing, as the 2509 base image has a smaller default disk allocation than 2510. If disk capacity is sufficient, this path is fully valid.

---

## 7. Backup Import Returns a 500 Error {#backup-import-returns-a-500-error}

This most commonly occurs with large backups or under-resourced VMs, specifically during backup import.

**Steps:**
1. Verify you have sufficient free disk space on the target VM.
2. Verify the backup file isn't corrupted — re-download from the source server.
3. Verify the backup was created on a version your target accepts. **2608:** 5.9.4.2 for the legacy path, or 2509/2510/2601/2602/2604 for the current-image path. **2510/2604 path:** only exactly 5.9.4.2 is accepted.
4. Try increasing PHP upload limits temporarily (see [Backup File Exceeds 200 MB Import Limit](troubleshooting#backup-file-exceeds-200-mb-import-limit)).
5. If none of these steps resolves it, contact Netwrix Support with the server logs from `/var/log/epp/`.

:::note
If 500 errors continue to occur after migration is complete — recurring every few days and resolved only by a full server reboot — see [Recurring HTTP 500 Errors Resolved Only by a Full Reboot](/docs/endpointprotector/install/migrationprocedure/troubleshooting.md#recurring-http-500-errors-resolved-only-by-a-full-reboot) instead. That's a different, ongoing issue rather than a one-time import failure.
:::

---

## 8. Network/IP Settings Not Saving on the New Server {#networkip-settings-not-saving-on-the-new-server}

This is a known product issue that affected 2509 and early 2510 builds, where the IP configuration page fails to save if **you fill only one DNS field**. It was fixed in patch **2604** — this workaround only applies if you're on an unpatched 2509/early 2510 environment.

**Workaround (unpatched 2509/early 2510 only):** Fill both the Primary and Secondary DNS fields. Use `8.8.8.8` (Primary) and `8.8.4.4` (Secondary) if you don't have a secondary internal DNS server.

---

## 9. Email Alerts Not Working After Migration {#email-alerts-not-working-after-migration}

The backup doesn't always fully restore SMTP credentials, and you typically need to re-enter them manually after migration.

**Steps:**
1. Navigate to **System Configuration → System Settings → Email Configuration**.
2. Re-enter the SMTP server address, port, username, and password.
3. Use the **Send Test Email** function to confirm delivery.
4. Re-verify that alert rules are enabled under **Alerts**.

---

## 10. Active Directory Sync Is Broken After Migration. Users/Groups Are Missing. {#active-directory-sync-is-broken-after-migration-usersgroups-are-missing}

AD/LDAP connectivity credentials may need re-entry after migration.

**Steps:**
1. Navigate to **System Configuration → Active Directory / LDAP**.
2. Click **Test Connection** — if it fails, re-enter the bind DN and password.
3. Run a manual sync and **verify the imported object count** against your expected directory size.

:::warning
AD Sync can complete without errors but only import a partial set of users or groups. Always cross-check the count, not just the "success" status.
:::

---

## 11. SSO / Entra ID Login Fails After Migration to 2608. {#sso--entra-id-login-fails-after-migration-to-2608}

You may need to refresh Entra ID / SSO application registrations after migration.

**Steps:**
1. Navigate to **System Configuration → SSO**.
2. Verify Tenant ID, Client ID, and Client Secret are correct.
3. Test login in an incognito browser window.
4. If the issue persists, re-register the EPP application in your Azure AD / Entra ID tenant.

:::tip
**Alternative — SCIM integration:** Since version **2601**, EPP supports SCIM as an alternative to SSO-based user provisioning. If SSO continues to cause issues post-migration, consider switching to SCIM integration for directory synchronisation and user management.
:::

---

## 12. EPP Clients Not Communicating After Migration {#epp-clients-not-communicating-after-migration}

:::note
See also [Endpoints Not Checking In After Migration](/docs/endpointprotector/install/migrationprocedure/troubleshooting.md#endpoints-not-checking-in-after-migration) in Troubleshooting for a same-IP-strategy and firewall-focused checklist for this scenario.
:::

**Checklist:**
1. Confirm the new server's IP/FQDN is reachable from endpoints (firewall, DNS).
2. Confirm client communications are enabled on the server (**System Configuration → System Settings**).
3. Confirm client packages are uploaded to the server — 2608 (the target version), plus 5.9.4.3 Hotfix 1 only if any endpoints are still below that bridge version.
4. Check the **Device Control → Computers** page and sort by **Last Seen**.
5. If clients were on 5.9.4.1 or older and you didn't deploy 5.9.4.3 Hotfix 1 first, they can't receive the 2608 client package directly — deploy 5.9.4.3 Hotfix 1 first via your software distribution tool before upgrading to 2608. See [Client Upgrade Management](/docs/endpointprotector/install/migrationprocedure/clientupgrade) for the full client upgrade path.
6. Verify that firewall rules allow HTTPS connections on the configured EPP communication port.
7. Consider reinstalling the EPP Client if it appears corrupted.

---

## 13. Audit Log Backup Running Without Completing {#audit-log-backup-running-without-completing}

This is a known issue that can occur after migration to the image-based platform.

**Steps:**
1. Navigate to **System Maintenance → Audit Log Backups**.
2. If a job has been running more than 4 hours, attempt to cancel it from the UI.
3. If the cancel option is unresponsive, contact Netwrix Support — you may need a backend intervention to reset the job state.
4. Don't start new Audit Log Backup jobs until you resolve the stuck job.

---

## 14. Artifact Logs Unavailable After Migration {#artifact-logs-unavailable-after-migration}

This is a known issue. Contact Netwrix Support for the latest fix status and remediation steps.

---

## 15. The Log Report Page Isn't Loading / Export Is Failing. {#the-log-report-page-isnt-loading--export-is-failing}

This can occur after migration due to backend indexing activity on the newly restored database.

**Steps:**
1. Try a hard browser refresh (Ctrl+Shift+R).
2. Log out and log back in.
3. Try filtering for a smaller date range — very large log queries time out on newly migrated servers.
4. If the issue persists across all filters and date ranges, contact Netwrix Support.

---

## 16. The Server Isn't Sending CAP (Content Aware Protection) Reports After Migration. {#the-server-isnt-sending-cap-content-aware-protection-reports-after-migration}

**Steps:**
1. Verify Content Aware Protection policies are active (**Content Aware Protection → Policies**).
2. Check that the CAP Dashboard shows recent activity.
3. Generate a test transfer that the system should detect and confirm whether it appears in CAP logs.
4. If policies are active but the server isn't generating or sending reports, contact Netwrix Support — this is a known post-migration defect.

---

## 17. eDiscovery Is Showing a Token Error After Migration. {#ediscovery-is-showing-a-token-error-after-migration}

This is a known product defect that can appear after migration.

**Steps:**
1. Navigate to **eDiscovery** and note the exact error message.
2. Try logging out and back in (token refresh).
3. If the error persists, contact Netwrix Support with the error details.

---

## 18. Backend Security Updates Are Crashing the Server After Upgrading to 2601. {#backend-security-updates-are-crashing-the-server-after-upgrading-to-2601}

This is a known product defect on 2601.

**Steps:**
1. Don't repeatedly attempt to apply backend updates if the server crashes on the first attempt.
2. Take a VM snapshot before any retry.
3. Contact Netwrix Support immediately — you need a targeted fix.

---

## 19. Activating 2608 in an Air-Gapped or Offline Environment {#activating-2608-in-an-air-gapped-or-offline-environment}

Air-gapped activation requires an **Offline Activation Patch** specific to 2608. This is a separate patch from the EPP software cumulative patch; request it from Netwrix Support in advance.

**Steps:**
1. Contact Netwrix Support or your account team before the migration maintenance window.
2. Request the Offline Activation Patch for 2608 for your specific environment.
3. Also request any offline CAP / eDiscovery activation patches if those modules are licensed.
4. Stage all offline patches and have them ready before taking the server offline for migration.

:::note
**2510/2604 path:** Request the Offline Activation Patch for **2510** instead — the rest of the procedure is the same.
:::

---

## 20. ELS for PHP Installation Failing {#els-for-php-installation-failing}

:::note
This applies only when migrating onto the **2509–2604** image line — including the temporary [5.x → 2510/2604 path](/docs/endpointprotector/install/migrationprocedure/migration-legacy-5x-to-2510). **2608 no longer uses the `php_els` entitlement** — if your license still contains that field, 2608 ignores it, and this issue doesn't apply.
:::

This can occur in some migration paths onto 2509–2604 when EPP doesn't correctly recognize the license. See [Verifying the php_els License Entitlement (2509–2604 Only)](/docs/endpointprotector/install/migrationprocedure/troubleshooting.md#verifying-the-php_els-license-entitlement-2509-2604-only) in Troubleshooting for the full verification walkthrough. If ELS still shows as inactive after re-import, contact Netwrix Support — some cases require a manual backend fix.

---

## 21. The Effective Rights Report Is Empty After Migration. {#the-effective-rights-report-is-empty-after-migration}

This is a known reporting layer issue that doesn't affect actual policies or enforcement. It's fixed as of **2608** — migrate to 2608 to resolve it. If you're not yet ready to migrate, contact Netwrix Support for interim guidance.

:::note
**2510/2604 path:** This issue is still present on 2510/2604 — it's only fixed starting with 2608.
:::

---

## 22. Complete Migration Process Duration {#complete-migration-process-duration}

Approximate time estimates based on real migration experience. The legacy 5.x path includes the 5.9.4.2 cumulative patch step; the current-image path (2509–2604) skips it.

| Activity | Estimated Duration | Applies To |
|---|---|---|
| 5.9.4.2 cumulative patch installation | 15–60 minutes | Legacy 5.x path only |
| Background DB tasks post-patch | Up to 24 hours (scheduled at 9 PM nightly) | Legacy 5.x path only |
| System backup creation | 5–30 minutes depending on config size | Both paths |
| New 2608 VM deployment and network config | 30–60 minutes | Both paths |
| Trial license activation on 2608 | 5 minutes | Both paths |
| Upgrade fresh 2608 image to latest patch | 15–30 minutes | Both paths |
| Backup restore on 2608 | 15–45 minutes | Both paths |
| License re-import and verification | 5–10 minutes | Both paths |
| Client package uploads | 10–20 minutes | Both paths |
| Integration reconfiguration and testing | 30–90 minutes | Both paths |
| Endpoint check-in verification | 30–60 minutes after re-enabling communications | Both paths |
| **Total end-to-end (legacy 5.x)** | **~4–8 hours active work + 24h stabilization window** | |
| **Total end-to-end (current-image)** | **~3–6 hours active work** | |

:::tip
Plan for a full business day of active migration work, plus (for the legacy 5.x path) a 24-hour monitoring period before you consider the environment fully stable.
:::

---

## 23. Running the Old Server Alongside the New 2608 Server {#running-the-old-server-alongside-the-new-2608-server}

**Yes, and Netwrix recommends it** — at least temporarily. The old server:
- Retains all historical event logs and file shadows (not migrated to 2608).
- Serves as your rollback if you discover critical issues post-migration.
- Provides a source for compliance or forensic purposes if any applicable regulation requires retention of historical data.

:::tip
Keep the old server **offline** after you validate the new 2608 environment. Activate access to it only on demand (e.g. for a compliance review or rollback). Leaving it online unnecessarily increases the attack surface, particularly if the old server was running 5.9.4.2 or earlier, which no longer receives security patches.
:::

Decommission the old server only after:
1. All endpoints successfully communicate with 2608.
2. You verified all integrations.
3. You satisfied compliance and retention requirements for historical logs (exported or confirmed in SIEM).
4. You created a full post-migration backup on 2608 and stored it securely.

:::note
Keeping two live EPP Server instances in production at the same time can have licensing implications. Reach out to your Netwrix account team to adjust licensing accordingly before running the old and new servers in parallel for an extended period.
:::

:::note
**2510/2604 path:** Everything above applies the same way — substitute "2510/2604" for "2608" until 2608 ships in late August 2026.
:::

---

## 24. Reverting to an Older Version {#reverting-to-an-older-version}

Netwrix doesn't support reverting or downgrading an EPP Server to an older version, on any migration or upgrade path. If you discover critical issues after migrating, you can only rely on your own backups — specifically, the pre-migration VM snapshot of your old server. This is why keeping the old server VM alive and taking a snapshot before migration is mandatory.

Keep in mind that whatever version you roll back to must still be a supported version. Rolling back to a version that's already past its support lifecycle leaves you without security patches or Netwrix Support — see [Netwrix Endpoint Protector Server Supportability](/docs/endpointprotector/supportability/server-supportability) before deciding to roll back.

Contact Netwrix Support before attempting any rollback.

---

*For additional assistance, contact Netwrix Customer Support at [support.netwrix.com](https://support.netwrix.com).*
