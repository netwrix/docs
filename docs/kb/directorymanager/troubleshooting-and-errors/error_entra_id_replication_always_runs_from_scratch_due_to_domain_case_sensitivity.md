---
description: >-
  This article addresses the issue of Entra ID replication running from scratch due to domain case sensitivity, detailing symptoms, causes, and resolutions.
keywords:
  - Entra ID
  - replication
  - domain case sensitivity
sidebar_label: Entra ID Replication Issue
tags:
  - troubleshooting-and-errors
title: "Error: Entra ID Replication Always Runs from Scratch Due to Domain Case Sensitivity"
knowledge_article_id: kA0Qk000000312nKAA
products:
  - directorymanager
---

# Error: Entra ID Replication Always Runs from Scratch Due to Domain Case Sensitivity

## Related Queries

- "Directory Manager 11 EntraID replication always runs from scratch"
- "Replication does not use stored timestamps to perform delta updates"
- "Getting delta Groups from server. ShouldGetObjectsFromScratch = True"

## Symptoms

- Replication cycles against Microsoft Entra ID stores take many hours (for example, 19 hours for approximately 6,500 groups).
- Replication logs show `ShouldGetObjectsFromScratch = True` on every run.
- Replication does not use stored timestamps and always performs a full sync.

## Cause

This issue occurs due to a case sensitivity mismatch in the **SVC.IdentityStoreReplication** table:

- The database stores the domain as `domain.org` (lowercase "d").
- The replication engine expects `Domain.org` (uppercase "D").

Because the check is case-sensitive, the system fails to find the existing timestamp and assumes it must replicate from scratch.

## Resolution

1. Identify the affected Entra ID store(s):

   ```sql
   SELECT is1.IdentityStoreId, is1.IdentityStoreName, st.StoreTypeName
   FROM SVC.IdentityStore is1
   JOIN SVC.StoreType st ON is1.StoreTypeId = st.StoreTypeId
   WHERE st.StoreTypeName LIKE '%Entra%' OR st.StoreTypeName LIKE '%Azure%';
   ```

   Note the **IdentityStoreId** of the production Entra ID store.

2. Verify current domain values:

   ```sql
   SELECT isr.IdentityStoreId,
          is1.IdentityStoreName,
          isr.Domain,
          isr.TimeStamps
   FROM SVC.IdentityStoreReplication isr
   JOIN SVC.IdentityStore is1 ON isr.IdentityStoreId = is1.IdentityStoreId
   WHERE isr.IdentityStoreId = <IdentityStoreId>;
   ```

   If you see the domain in all lowercase letters (e.g., `domain.org`), this confirms the mismatch.

   If the domain already matches the correct title case (e.g., `Domain.org`), no change is needed.

3. Backup the table (precaution):

   ```sql
   SELECT *
   INTO dbo.IdentityStoreReplication_Backup_<yyyymmdd>
   FROM SVC.IdentityStoreReplication
   WHERE IdentityStoreId = <IdentityStoreId>;
   ```

4. Correct the domain casing:

   ```sql
   UPDATE SVC.IdentityStoreReplication
   SET Domain = 'Domain.org'
   WHERE IdentityStoreId = <IdentityStoreId>
     AND Domain = 'domain.org';
   ```

5. Re-run the verification query from Step 2. The domain should now be stored in the proper case (e.g., `Domain.org`).

6. On the next replication cycle, confirm in the logs:

   - `ShouldGetObjectsFromScratch = False`
   - Replication runtime drops significantly (minutes instead of hours).
   - Only changed groups are processed.

## Risk and Rollback

- Risk level: Low – the update changes only the casing of the domain value.
- Rollback: Restore from the backup table created in Step 3 if needed.

## Additional Notes

- This issue is environment-specific and not widespread.
- If Directory Manager 11 Entra ID replication always runs from scratch, check the domain casing in **SVC.IdentityStoreReplication**. Correcting a single character in the domain field (lowercase “d” → uppercase “D”) restores delta replication and reduces runtime from hours to minutes.
