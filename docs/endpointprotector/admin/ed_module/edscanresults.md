---
title: "Scan results and actions"
description: "View eDiscovery scan results, inspect found items, and apply remediation actions"
sidebar_position: 53
---


# Scan results and actions

After an eDiscovery scan runs, the results are available in **eDiscovery** > **Scan Results and Actions**. This section lets you view discovered items, inspect detection details, and apply remediation actions to individual files or in bulk.

## View scan results

The scan results page displays one file per row, with the following information for each discovered item:

- Computer name and department
- File name, file path, and file size
- Policy name that triggered the detection
- Matched content type and matched items
- Event timestamp (server and client time)
- Current status (Reported, Encrypted, Decrypted, Pending, and others)

You can expand each row to view detailed detection information, including:

- The specific policy that matched
- The content type that was detected
- The individual matched items and their count

### Filter and sort results

Use the filters at the top of the page to narrow the results by:

- Date range (server time or client time)
- Computer name
- Policy name
- File name
- Status

Click any column header to sort the results. You can also configure the number of records displayed per page.

### Display settings

Configure the following display settings to manage large result sets:

- **Maximum records per page**—set the number of records displayed per report page
- **Maximum records from database**—set the maximum number of records pulled from the database in a single query

These settings are available under the global display settings and help ensure fast page loading on servers with large volumes of scan results.

## Inspect found items

You can navigate directly from a policy scan to its filtered results:

1. Navigate to **eDiscovery** > **Policies and Scans**.
2. In the eDiscovery Scans table, select a computer entry.
3. Click **Inspect found items**.

This opens the Scan Results and Actions page with filters automatically applied to show only the items discovered by that specific scan.

## Apply remediation actions

You can apply remediation actions to individual files or to multiple files at once.

### Single-file remediation

To remediate a single file:

1. In the scan results list, locate the file you want to remediate.
2. Select the remediation action from the action menu.

### Bulk remediation

To remediate multiple files at once:

1. Select the checkboxes next to the files you want to remediate.
2. Click **Choose action** at the top of the results list.
3. Select the remediation action to apply.

The following remediation actions are available:

| Action | Description | Applicable to |
|--------|-------------|---------------|
| **Encrypt on Target** | Encrypts the file on the endpoint | Reported or Decrypted files |
| **Decrypt on Target** | Decrypts a previously encrypted file | Encrypted files only |
| **Delete on Target** | Deletes the file from the endpoint | Reported or Decrypted files |
| **Quarantine on Target** | Quarantines the file on the endpoint | Reported or Decrypted files |
| **Delete from Database** | Removes the log entry from the database without affecting the file on the endpoint | Any status |

### Remediation status tracking

After you apply a remediation action, the status of each affected file progresses through the following states:

1. **Pending**—the action has been queued and is waiting to be sent to the endpoint
2. **Sent**—the action has been sent to the endpoint agent
3. **Completed**—the endpoint agent successfully performed the action
4. **Failed**—the endpoint agent couldn't perform the action

The scan results page refreshes after applying an action to reflect the updated status. Depending on the applied filters, some remediated items might no longer appear in the filtered view.

## Export eDiscovery logs

eDiscovery scan results are included in the **Reports and Analysis** > **Export Logs** section alongside Device Control and Content Aware Protection exports. You can export eDiscovery logs as CSV files with automatic ZIP archiving.

The export supports:

- Filtering by timestamp, computer name, policy name, file name, and status
- Configurable batch sizes (up to 1,000,000 records)
- Automatic splitting into multiple archive files for large exports

## Admin roles

Access to the eDiscovery Scan Results and Actions section is controlled by admin roles. Administrators with restricted roles see only the sections their assigned role permits. The following eDiscovery-specific roles are available:

- eDiscovery Policies and Scans
- Scan Results and Actions
