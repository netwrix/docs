# 3. Quarantine Job Group

The 3. Quarantine job group is designed to report on and quarantine files that are pending cleanup.

![3. Quarantine Job Group in the Jobs Tree](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.webp)

This job group includes the following jobs:

- [FS_QuarantineData Job](fs_quarantinedata.md) – Designed to quarantine files subject to be cleaned
  up
- [FS_QuarantineData_Status Job](fs_quarantinedata_status.md) – Designed to report on the
  FS_QuarantineData job
- [FS_RestoreInheritance Job](fs_restoreinheritance.md) – Designed to restore inheritance to
  previously quarantined files
- [FS_RestoreInheritance_Status Job](fs_restoreinheritance_status.md) – Designed to report on
  inheritance that was restored to previously quarantined files

Workflow

The following is the recommended workflow for using the job group:

**Step 1 –** **Prerequisite:** Successfully execute the following job groups:

- .Active Directory Inventory
- File System > 0.Collection
- File System > Cleanup > 1. Cleanup Assessment

**Step 2 –** Schedule the 3. Quarantine job group to run as desired after the prerequisites have
completed.

**Step 3 –** Review the reports generated by the 3. Quarantine job group.
