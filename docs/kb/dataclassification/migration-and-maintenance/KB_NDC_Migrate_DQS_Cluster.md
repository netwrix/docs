# How to Migrate a Netwrix Data Classification DQS Cluster to New Servers

**Audience:** Internal Netwrix Support  
**Product:** Netwrix Data Classification (NDC)  
**Applies to:** DQS (Distributed Query Service) cluster deployments  
**Status:** ⚠️ Unverified — test in a lab environment before using with a customer  
**Related doc:** [How to Migrate NDC to Another Server (Netwrix Docs)](https://docs.netwrix.com) *(note: covers single-instance only; this article extends it to DQS clusters)*

---

## Overview

This article describes how to migrate a Netwrix Data Classification DQS cluster from one set of servers to another while preserving the existing index data and configuration. This is more complex than a single-instance migration because the DQS database must be updated to reflect the new server names across all nodes.

> ⚠️ **Warning:** This procedure has not been fully verified end-to-end in a lab environment. Strongly recommended to test before offering to a customer. Depending on environment size, the customer may find it easier to start fresh rather than follow this process.

---

## Prerequisites

- Access to the DQS database (direct SQL access)
- The **NDCRegistryApp** (`NDCRegistryApp.zip`) — the encryption key retrieval and upload tool. Available on the SWAT SharePoint. Contact Ben Hayman if unavailable.
- Administrative access to all current and new NDC servers
- Sufficient storage to copy index files to new servers
- A maintenance window — all NDC sources will be paused during the process

---

## Step 1 — Back Everything Up

Before making any changes:

1. Pause all NDC sources from the NDC UI.
2. Stop all NDC Windows services and IIS sites on every node.
3. Take full backups of:
   - The database server (full SQL backup)
   - Every Windows server hosting an NDC instance
4. Confirm backups are restorable — the goal is to be able to fully revert to the starting state if something goes wrong.

---

## Step 2 — Upgrade All NDC Instances to the Latest Version

Upgrade every NDC instance (all nodes in the cluster) to the latest available version before proceeding.

**Why:** Working from a known, consistent codebase makes troubleshooting easier and ensures any emergency hotfixes can be applied uniformly.

---

## Step 3 — Update Server Names in the DQS Database

Edit the DQS database table and replace the name of each current NDC instance with the name of the corresponding new server.

- Each old server name should map 1-to-1 to its replacement.
- This tells NDC's infrastructure to expect the new server names on next startup.

> 💡 Confirm the exact table name with the NDC development team if unsure — the relevant table tracks registered DQS nodes.

---

## Step 4 — Copy Index Files and Retrieve the Encryption Key

For each NDC instance being replaced:

1. On the **old server**, locate the NDC index files. Replicate the full folder structure leading to the `Index` folder.
2. Copy the entire `Index` folder to the corresponding **new server**, maintaining the same relative path.
3. Run **NDCRegistryApp** on the old instance to **download** the encryption key.
   - You will be prompted to **set a password** when downloading. Record this password — you must enter it exactly when uploading the key to the new server.

---

## Step 5 — Upload the Encryption Key to New Servers (Before Installing NDC)

> ⚠️ **Do this before running the NDC installer.** The installer may inadvertently generate a new encryption key if one is not already present in the registry. Upload the key first to prevent this.

For each new server:

1. Run **NDCRegistryApp** on the new server and upload the encryption key retrieved in Step 4.
   - Enter the **exact same password** used when the key was downloaded.
2. Confirm the key has been written to the Windows Registry at:

   ```
   Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Netwrix\Data Classification
   ```

   The registry entry name must be **`EncryptionKey`**.

---

## Step 6 — Install NDC on the New Servers

1. Run the NDC installer on each new server.
2. The installer should detect the existing entries in the DQS database table and treat the installation as a **reinstall** rather than a fresh install.
3. On the relevant installer page, **ensure NDC services are set to NOT start automatically** after installation completes.

Repeat for each node in the cluster.

---

## Step 7 — Verify the New Instances

Before handing back to the customer, verify the following on each new instance:

| Check | How to verify |
|---|---|
| Index files are accessible | Open a document in the NDC UI and confirm the text is retrievable |
| Search is functional | Run a search using the NDC built-in Search and confirm results are returned |
| Services start cleanly | Start NDC Windows services and check event logs — look specifically for errors related to encryption or index file access |
| Crawling works | Re-index at least one document from a source and confirm it processes without error |

---

## Troubleshooting

| Symptom | Likely cause | Action |
|---|---|---|
| NDC UI cannot retrieve document text | Index files missing or in wrong path | Verify folder structure on new server matches original exactly |
| Encryption errors in service logs | Encryption key not uploaded, wrong registry location, or password mismatch during upload | Verify the key exists at `HKLM\SOFTWARE\Netwrix\Data Classification\EncryptionKey`; re-run NDCRegistryApp using the exact password set during download |
| Installer generated a new key, overwriting the migrated one | Encryption key was uploaded after install instead of before | Stop services, re-upload the correct key via NDCRegistryApp, restart services |
| Services fail to start | Services started before encryption key was in place | Stop services, confirm key is in registry (Step 5), then restart |

---

## Notes & Caveats

- The public Netwrix documentation ([How to Migrate NDC to Another Server](https://docs.netwrix.com)) covers **single-instance** migration only and may be out of date. This article supplements it for DQS cluster scenarios.
- For large environments, evaluate with the customer whether a **clean reinstall** (with fresh crawls) is more practical than this migration path.
- If you cannot locate **NDCRegistryApp**, contact **Ben Hayman**. It is also available on the SWAT SharePoint under Data Classification.

---

*Article drafted from internal guidance by Ben Hayman. Not yet lab-verified. Last updated: May 2026.*
