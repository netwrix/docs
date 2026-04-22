---
title: "Migration Troubleshooting"
description: "Netwrix Endpoint Protector — Server Migration & Upgrade Guide: Troubleshooting"
sidebar_position: 20
---

# Troubleshooting Common Issues

## Backup Restore Fails or Is Rejected by 2510

**Symptom:** The import wizard rejects the backup file or shows an error.

**Root cause:** The backup was created on a version **other than 5.9.4.2**.

**Resolution:**
1. Verify the source server is on 5.9.4.2 (Appliance → Server Information).
2. If not, complete Phase 1 (cumulative patch to 5.9.4.2) first.
3. Create a new backup on the 5.9.4.2 server and retry.

---

## Network Settings Won't Save on 2510

**Symptom:** IP configuration changes don't save; error appears after clicking Save.

**Root cause:** Known bug in 2510 where the settings page requires both DNS fields to be filled.

**Resolution:** Enter a value in **both** DNS fields (use `8.8.8.8` and `8.8.4.4` if no secondary DNS is available).

---

## Backup File Exceeds 200 MB Import Limit

**Symptom:** Backup upload fails due to file size limits.

**Step 1 — Contact Netwrix Support for the backup export fix script (do this first):**

Contact Netwrix Support and request the **5.9.4.2 backup export fix**. This script trims the backup file below 200 MB by dropping unnecessary legacy tables from the export that aren't required for migration. This is the preferred resolution and requires no backend access on your part.

If the fix script doesn't bring the file below 200 MB, contact Netwrix Support for the manual upload limit adjustment procedure.

---

## EE Clients Can't Connect After Migration

**Symptom:** Enforced Encryption clients fail to connect or show as untrusted.

**Most likely cause:** The new server IP/FQDN is different from the old server.

**Resolution:**
- If same IP/FQDN was used: verify that certificates were restored from the backup (check **System Configuration → Certificates**).
- If different IP/FQDN was used: users must decrypt their drives, reconnect to the new server, and re-encrypt. Contact Netwrix Support for mass re-encryption scripts.

---

## SIEM Not Receiving Events After Migration

**Symptom:** SIEM integration stops receiving events after restore.

**Resolution:** SIEM functionality may require reconfiguration after migration. Contact Netwrix Support and provide diagnostic logs — a specialized restoration script may be required.

---

## Endpoints Not Checking In After Migration

**Symptom:** Endpoints show as offline; Last Seen timestamps are old.

**Checklist:**
1. Verify client communications are re-enabled on the new server.
2. Confirm the new server is reachable on the expected IP/FQDN from endpoints.
3. Check that client packages (5.9.4.3) are uploaded to the server.
4. Verify the old server is no longer running on the same IP if using same-IP strategy.
5. Check endpoint firewall rules allow outbound on ports 443 and any other configured EPP ports.

---
