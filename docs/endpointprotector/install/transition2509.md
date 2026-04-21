---
title: "Transition to Endpoint Protector Server 2509"
description: "Guided upgrade/migration path to Server 2509 (new image-based transition)"
sidebar_position: 25
---

# Transition to Endpoint Protector Server 2509

## Why this transition is different

Server 2509 requires deployment as a new image (not a patch-in-place upgrade).

## Before you start (preflight checklist)

- Confirm your current server version and the required upgrade path (you must reach 5.9.4.2 first).
- Confirm you can create a **System Backup v2 (Migration)** and that you have the **Backup Key** saved. See [Backup and Recovery Solutions](/docs/endpointprotector/admin/systemmaintenance/backup.md).
- Confirm the backup size is within supported limits, or plan a Support-assisted approach.
- Confirm your plan for IP/FQDN cutover (see the decision section below).
- Confirm licensing readiness (new license format and required fields, then re-import post-restore). See [Licensing](/docs/endpointprotector/admin/systemconfiguration/systemlicensing.md).

## At-a-glance transition steps

1. Upgrade your existing server to 5.9.4.2 (offline patch).
2. Create a System Backup v2 (Migration).
3. Deploy the new 2509 VM from the latest image.
4. Restore the 5.9.4.2 backup on the new server.
5. Re-import your license on 2509 and confirm the licensing state.
6. Upload client packages (if you use server-side client upgrade or distribution).
7. Re-enable client communications.
8. Validate functionality (DPI, CAP, certificates, and EE status as applicable).

## Step-by-step guided process

### Step 1 — Upgrade to 5.9.4.2

**Success:** Server version reports 5.9.4.2 and the UI is accessible.

**If it fails:** Rollback occurs automatically. Review the offline patch logs, then retry or contact Support. See [Updates](/docs/endpointprotector/install/updates.md).

### Step 2 — Create migration backup (System Backup v2)

**Success:** Backup created and Backup Key stored securely.

**If it fails:** Check available disk space. If the backup exceeds the size limit, contact Support. See [Backup and Recovery Solutions](/docs/endpointprotector/admin/systemmaintenance/backup.md).

### Step 3 — Deploy the new 2509 VM

**Success:** VM boots and initial setup is complete. See [Setup Wizard](/docs/endpointprotector/install/virtualappliance/setupwizard.md).

### Step 4 — Restore the backup on 2509

**Success:** Import and Restore completes without errors.

**If it fails:** Verify the source is a 5.9.4.2 backup, verify the backup key, and verify available disk space. Contact Support for large or complex restores.

### Step 5 — Re-import license on 2509

**Success:** License imports cleanly and expected entitlements are shown. See [Licensing](/docs/endpointprotector/admin/systemconfiguration/systemlicensing.md).

### Step 6 — Upload client packages (if needed)

This step is only required if you use server-side client distribution or upgrade.

### Step 7 — Re-enable client communications

**Success:** Endpoints check in and start sending pending logs.

## Decision: IP/FQDN strategy

### Reuse same IP/FQDN (Recommended)

Preserves trust and certificate behavior and minimizes endpoint disruption.

### New IP/FQDN (Not recommended)

Requires endpoint-side changes and certificate redeployment, and may disrupt Enforced Encryption trust depending on the scenario.

## Final verification checklist

- Server health is OK.
- Clients check in.
- Policies are visible and enforced.
- DPI, CAP, and EE status is verified (as applicable).

## Common failure modes and fixes

- **Restore fails** — wrong source version, wrong backup key, insufficient disk space, or oversized backup.
- **Clients don't reconnect** — IP/FQDN cutover not complete, or client communications are still blocked.
- **Unexpected license state** — wrong license file imported; re-check entitlements.
