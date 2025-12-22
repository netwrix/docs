---
title: "FS_ResourceBasedGroupAICImport Job"
description: "FS_ResourceBasedGroupAICImport Job"
sidebar_position: 20
---

# FS_ResourceBasedGroupAICImport Job

The FS_ResorceBasedGroupsAICImport Job imports resources and access groups from the
FS_ResoureBasedGroup Job into the Netwrix Access Information Center. This job assigns ownership in
the Access Information Center and then assigns resource groups. This step is required if it is
desired to change access through entitlement reviews, self-service, or for publishing resources to
IAM.

## Recommended Configurations for the FS_ResourceBasedGroupsAICImport Job

**Dependencies**

- The **FS_ResourceBasedGroups** job must be successfully run prior to running this job
- The **.Active Directory Inventory** > **1-AD_Scan** job must be successfully run prior to running
  this job
- The **File System** > **0.Collection** > **1-FSAA System Scans** job must be successfully run
  prior to running this job
- The **File System** > **0.Collection** > **2-FSAA Bulk Import** job must be successfully run prior
  to running this job

**Targeted Hosts**

None

**Schedule Frequency**

This job group can be scheduled to run as desired. Throughout this document reference to executing a
job refers to either manual execution or scheduled execution, according to the needs of the
organization. See the
[Scheduling the Resource Based Groups Job Group](/docs/accessanalyzer/11.6/solutions/filesystem/resourcebasedgroups/overview.md#scheduling-the-resource-based-groups-job-group)
topic for additional information.

**History Retention**

Not supported

**Workflow**

**Step 1 –** Run the following jobs:

- FS_ResourceBasedGroups
- .Active Directory Inventory > 1-AD_Scan
- File System > 0.Collection > 1-FSAA System Scans
- File System > 0.Collection > 2-FSAA Bulk Import

**Step 2 –** Run the FS_ResourceBasedGroupsAICImport job.

- See the [Run the FS_ResourceBasedGroupsAICImportJob](#run-the-fs_resourcebasedgroupsaicimportjob)
  topic for additional information

**Step 3 –** Review the newly-created resource based groups in the AIC.

- See the
  [Review the New Resource Based Groups in the AIC](#review-the-new-resource-based-groups-in-the-aic)
  topic for additional information

## Run the FS_ResourceBasedGroupsAICImportJob

Now that the target environment follows a Resource Based Groups model, the new resources can be
imported into the Access Information Center. Follow the steps to import the new resources into the
AIC Ownership Workflow.

:::warning
It is important to run the .Active Directory Inventory Job Group and **File System** >
**0. Collection** Job Group again so that the AD and permissions changes are captured by Enterprise
Auditor.
:::


**Step 1 –** Run the **.Active Directory Inventory** Job Group and **FileSystem** > **0.Collection**
Job Group again.

**Step 2 –** Right click the **FS_ResourceBasedGroupsAICImport** job and select **Run Job**.

The newly created resource based groups are imported to the AIC. The Owner and Access Groups have
been assigned to the resources by the import process. The AIC can now be used to manage these
resources through Entitlement Reviews, Ad hoc owner changes, and the Self Service access portal.

## Review the New Resource Based Groups in the AIC

Use the Access Information Center **Manage Resource Ownership** to review the imported resources.
These resources with the assigned reviewers will now be in the Manage Owners table on the Resource
Owners interface. The next step is to confirm ownership through the Entitlement Review workflow and
the Self-Service Access Requests workflow. See the Resource Review and Access Requests topics in the
[Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
for additional information.
