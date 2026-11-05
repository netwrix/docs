---
title: "FS_MIPLabeling Job"
description: "Apply a Microsoft Information Protection sensitivity label to files that contain sensitive data by using the FS_MIPLabeling instant job."
sidebar_position: 42
---

# FS_MIPLabeling Job

The FS_MIPLabeling instant job applies a sensitivity label from Microsoft Purview Information
Protection (referred to in this topic as Microsoft Information Protection, or MIP) to files that
contain sensitive data. It is available through the Instant Job Library under the File System
library. See the
[Instant Job Wizard](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/overview.md) topic for
instructions to add this instant job into the Jobs tree.

Runtime Details:

- Dependencies: Run the [FS_DLPResults Job](/docs/accessanalyzer/12.0/solutions/filesystem/fs_dlpresults.md) successfully before running this job. This job reads the
  `SA_FS_DLPResults_ShareDetails` table
- Target Hosts: None (select Local host)
- Scheduling: Run as needed, after each Sensitive Data Discovery scan and FS_DLPResults run
- History Retention: Not supported
- Multi-console Support: Not supported
- Additional Notes: The job labels files in place on the file server. Access Analyzer doesn't
  overwrite a different label already on a file

:::note
This job applies labels by using the PurviewInformationProtection PowerShell module. The File System
solution scans for labels separately, using the MIP File SDK. See the
[Microsoft Information Protection Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/microsoftinformationprotection.md)
topic for scan prerequisites. Use the [FS_MIPLabels Job](/docs/accessanalyzer/12.0/solutions/filesystem/content/tags/fs_miplabels.md)
to report on the labels after a scan.
:::

## Prerequisites

Complete the following before running the job:

- Run a [Sensitive Data Discovery scan](/docs/accessanalyzer/12.0/solutions/filesystem/collection/1-seek_system_scans.md) and its bulk import, then run the [FS_DLPResults Job](/docs/accessanalyzer/12.0/solutions/filesystem/fs_dlpresults.md) so the
  `SA_FS_DLPResults_ShareDetails` table contains the files to label
- Download and install the
  [Microsoft Purview Information Protection client](https://www.microsoft.com/en-us/download/details.aspx?id=53018)
  on the Access Analyzer console server. It installs the PurviewInformationProtection PowerShell
  module
- Register an application in Microsoft Entra ID for use with the `Set-Authentication` cmdlet. The
  application you created in the
  [Create a Service Principal Account](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/microsoftinformationprotection.md#create-a-service-principal-account)
  section already has the required permissions, and you can reuse it. See the
  [Microsoft documentation](https://learn.microsoft.com/en-us/powershell/azure/aip/setup-information-protection-client-powershell#create-and-configure-microsoft-entra-applications-for-set-authentication)
  for the required configuration.
  - Record the Application (client) ID, Directory (tenant) ID, and a client secret
  - The application needs the `Content.DelegatedReader` and `Content.DelegatedWriter` permissions
    for Azure Rights Management Services and the `UnifiedPolicy.Tenant.Read` permission for
    Microsoft Information Protection Sync Service (all Application permissions)
  - Grant admin consent for the permissions
- Provision a service account in Microsoft Entra ID. The job uses its user name as the delegated
  user. In the Microsoft Purview portal, assign the account a label policy that publishes the label to apply. See the [Microsoft documentation](https://learn.microsoft.com/en-us/purview/create-sensitivity-labels) for publishing sensitivity labels
- Know the ID of the sensitivity label to apply. To find it, authenticate with `Set-Authentication`,
  run the `Get-FileStatus` cmdlet against a file that already has the label, and read the
  `MainLabelId` value. Alternatively, copy the label ID (GUID) from the label's details in the
  Microsoft Purview portal, or run `Get-Label` in Security & Compliance PowerShell

## Queries for the FS_MIPLabeling Job

The job runs the following three queries in order. Configure the query parameters under the job's
**Configure** > **Queries** node, on each query's **Properties** > **PowerShell** page.

| Query                         | Description                                                                                  | Parameters                                                                                                                                             |
| ----------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MIP Authentication            | Authenticates the PowerShell session to Microsoft Purview with the registered application    | `tenantId` – Directory (tenant) ID<br/>`appId` – Application (client) ID<br/>`appSecret` – Client secret<br/>`delegatedUser` – Service account user name, for example `username@tenant.onmicrosoft.com`<br/>`modulePath` – Optional. Path to the PurviewInformationProtection module if it isn't on the default module path |
| Apply MIP Sensitive Data Label | Applies the label to each file listed in `SA_FS_DLPResults_ShareDetails`                    | `labelId` – ID of the label to apply<br/>`modulePath` – Optional                                                                                       |
| Clear Authentication          | Clears the session authentication after labeling is complete                                 | `modulePath` – Optional                                                                                                                                |

:::warning
The job configuration stores the client secret. Restrict access to the job, and don't copy
the configured job to shared locations. When the client secret expires, create a new one and update
the `appSecret` parameter.
:::

### Results

The Apply MIP Sensitive Data Label query writes one row per file to the job's **Results** node with these columns:

| Column   | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| FileName | Full path of the file                                            |
| Status   | `Success` or `Failure`                                           |
| Label    | ID of the label applied, or of the label already on the file     |
| Details  | Outcome for the file, for example `File is already labeled`       |

The query handles each file as follows:

- File has no label – applies the label from `labelId`
- File already has the label from `labelId` – takes no action and reports `Success`
- File has a different label – doesn't change it, and reports `Failure` with the existing label
- The query can't read the label status or can't apply the label – reports `Failure`

The query processes files in batches and pauses briefly after every tenth batch to limit memory use
by the Purview client's child processes. Large file lists take proportionally longer.

## Run the Job

**Step 1 –** Review the FS_DLPResults job's **Results** node, or query the
`SA_FS_DLPResults_ShareDetails` table in the Access Analyzer database, to confirm it contains the
expected files.

**Step 2 –** In the Access Analyzer console, navigate to **Jobs** > **Instant Job Library** >
**File System**. In the Instant Job Wizard, add the FS_MIPLabeling job to the Jobs tree, and select
**Local host** on the Hosts page.

**Step 3 –** Configure the parameters for the MIP Authentication query on its **Properties** >
**PowerShell** page. See the table in the
[Queries for the FS_MIPLabeling Job](#queries-for-the-fs_miplabeling-job) section for parameter
values.

**Step 4 –** Configure the `labelId` parameter for the Apply MIP Sensitive Data Label query.

**Step 5 –** Run the job.

**Step 6 –** Review the Apply MIP Sensitive Data Label results. Run a File System Access Auditing (FSAA) scan with **Enable scanning of
files protected by Microsoft Information Protection** selected, then run the
[FS_MIPLabels Job](/docs/accessanalyzer/12.0/solutions/filesystem/content/tags/fs_miplabels.md) to
confirm that the job applied the labels.
