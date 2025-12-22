---
description: >-
  Explains how to resolve the "Could not drop object ... because it is
  referenced by a foreign key constraint" error when running the SP_DropTables
  job by identifying and removing the blocking foreign key constraints.
keywords:
  - foreign key
  - SP_DropTables
  - DROP TABLE
  - SQL Server
  - FKTABLE_NAME
  - constraint
  - SQL Server Management Studio
  - drop object
  - database cleanup
products:
  - access-analyzer
sidebar_label: Could Not Drop Object Referenced by Foreign Key Co
tags:
  - troubleshooting-and-errors
title: "Could Not Drop Object Referenced by Foreign Key Constraint"
knowledge_article_id: kA0Qk0000000IUnKAM
---

# Could Not Drop Object Referenced by Foreign Key Constraint

## Symptom

When you run the **SP_DropTables** job, the job fails and prompts the following error:

```
Could not drop object %table_name% because it is referenced by a foreign key constraint.
```

## Cause

The affected tables reference the foreign key constraint preventing the **SP_DropTables** job from running correctly.

## Resolution

Manually release the constraints for the affected tables.

1. In SQL Server Management Studio, run the following line to output associated foreign key constraints. The example shows the `SA_SPAC_ActivityEvents` table—replace it with the table mentioned in the error message.

```sql
EXEC sp_fkeys 'SA_SPAC_ActivityEvents'
```

2. The results will contain the `FKTABLE_NAME` column—run the following line to release the corresponding constraint. The example shows the `SA_SPAC_ActivityEvents` foreign key. Run the line with each `FKTABLE_NAME` specified in the results.

```sql
DROP TABLE SA_SPAC_GroupMembershipChanges
```

3. After releasing the constraints, rerun the **SP_DropTables** job.
