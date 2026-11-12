---
title: "eDiscovery policies and scans"
description: "Create and manage eDiscovery scan policies, predefined policies, and scan operations"
sidebar_position: 51
---


# eDiscovery policies and scans

eDiscovery policies are sets of rules that define what sensitive content to scan for on protected endpoints. Each policy specifies the content types to detect, the thresholds for reporting, and the computers or groups the policy applies to.

You can create up to 40 eDiscovery policies. A performance advisory appears when more than five policies are active simultaneously since each additional policy increases scanning workload on endpoints.

## Policy views

Policies can be displayed in two layouts:

- **List view**—displays policies in a table with sortable columns for name, OS type, status, priority, and assigned entities
- **Widget view**—displays policies as cards, providing a visual overview of all configured policies

## Create a custom policy

![Create Custom Policy](edcustompolicy.png)

To create a new eDiscovery policy:

1. Navigate to **eDiscovery** > **Policies and Scans**.
2. Click **Create Custom Policy**.
3. Configure the following settings:

### Policy information

![Policy Information in the eDiscovery policy, with thresholds, severity, and NDC labeling](edpolicyinformation.webp)

- **OS Type**—select the operating system the policy applies to (Windows, macOS, or Linux)
- **Policy Name**—enter a descriptive name for the policy
- **Description**—enter a description of the policy's purpose
- **Action**—select the action to take when sensitive content is detected
- **Scan Type**—select the scan behavior
- **Severity**—select the severity of the events that the policy produces. See [Threshold ranges and severity](#threshold-ranges-and-severity).

### Thresholds

Configure thresholds to control when the policy reports a detection:

- **Threat Threshold Range**—set the lowest and highest number of content matches that cause a file to be reported. See [Threshold ranges and severity](#threshold-ranges-and-severity).
- **File Size Threshold**—set a maximum file size. Files larger than the threshold are skipped.
- **Threshold operator**—select **AND** or **OR** to control how the Threat Threshold Range and File Size Threshold interact:
  - **AND**—both thresholds must be met for a file to be reported
  - **OR**—either threshold being met causes the file to be reported

#### Threshold ranges and severity

Threshold ranges and severity are new in version 2611. A policy can apply to a range of detections, and each policy has a severity. The feature is backward compatible. Clients earlier than 2611 ignore the new values when they receive policies from a 2611 server, and a 2611 Client behaves the old way with a server earlier than 2611. The range and severity apply only when both the server and the Client are version 2611 or later.

The policy has the following fields, shown in the **Policy Information** section:

- **Severity**—the severity of every event the policy produces. Select **Informative**, **Low**, **Medium**, **High**, or **Critical**. The default is **Informative**.
- **Threat Threshold Range**—enter the lowest number of detections in **Min** and the highest in **Max**. The policy applies when the number of detections is between the two values, inclusive.
- **No maximum (∞)**—select this checkbox to leave the range open at the top. The **Max** field is disabled.

The range applies to the policy-level threshold and to the individual threshold of each content type in the Content Detection Summary. The **Max** value can't exceed 100,000. Existing policies keep their threshold as the minimum and get no maximum when you upgrade the server.

For the validation rules and an example, see [Threshold ranges and severity](/docs/endpointprotector/admin/cap_module/cappolicies.md#threshold-ranges-and-severity) in the Content Aware Protection policy page. eDiscovery logs and reports show the severity of each event. The Client keeps the severity when it is offline and uploads it with the logs later.

Unlike Content Aware Protection, eDiscovery scans have no reporting limit that restricts the **Max** value. The only limit is 100,000.

### Policy exit points

Configure where the policy scans for content:

- **Local Disk**—scan files on the endpoint's local storage (enabled by default)
- **Removable Devices**—scan files on connected removable storage devices such as USB drives

### Policy denylists and allowlists

Define the content to detect and the content to ignore:

- **Policy Denylists**—select the content types, file types, MIME types, predefined content patterns, regular expressions, dictionaries, and Fingerprint dictionaries to detect. See [Fingerprinting](#fingerprinting).
- **Policy Allowlists**—define exceptions for content that should be ignored during scanning

For detailed information on configuring denylists and allowlists, see [Denylists and Allowlists](/docs/endpointprotector/admin/denylistsallowlists/overview.md).

### Fingerprinting

The denylists section includes a **Fingerprinting** tab. Select one or more Fingerprint dictionaries in **Fingerprint** to detect copies of whole documents, even when only part of the original is present. Set **Minimum Detection Confidence** for each dictionary. Click **Go to Fingerprinting Denylists** to manage the dictionaries. See [File Fingerprinting](/docs/endpointprotector/admin/denylistsallowlists/fingerprinting.md).

### Apply NDC labels

An eDiscovery policy can apply a Netwrix Data Classification (NDC) label to files that it detects. The **Labeling** section, with the **NDC Labeling** toggle and the **NDC Label(s)** list, works the same way as in Content Aware Protection policies, and it requires Endpoint Protector Client version 2611 or later. See [Apply NDC labels](/docs/endpointprotector/admin/cap_module/cappolicies.md#apply-ndc-labels).


### Last Modified filter

You can configure the policy to target files based on their Last Modified date:

- **Last Modified Date Range**—scan only files modified within a specific date range
- **Last Modified Within Last n Days**—scan only files modified within the specified number of days

### Content Detection Summary

The Content Detection Summary lets you define boolean logic rules for content detection within the policy. This feature works the same way as the Content Detection Summary in Content Aware Protection policies, but each eDiscovery policy has its own independent configuration.

For more information on Content Detection Summary configuration, see [Content detection](/docs/endpointprotector/admin/cap_module/contentdetection.md).

### Contextual detection

Each eDiscovery policy can have its own contextual detection rules, replacing the previous global setting under System Parameters. You can configure up to 15 contextual detection rules per policy.

Contextual detection rules let you require or exclude specific context around detected content. For example, you can require that a social security number is found near a name and address before reporting it as a match. Each rule supports:

- **Included context**—content patterns that must be present near the detected item
- **Excluded context**—content patterns that, if found near the detected item, cause the detection to be ignored
- **AND / OR operators**—control how multiple context items within a rule are evaluated

:::note
Changes to contextual detection in an eDiscovery policy don't affect Content Aware Protection policies, and changes in CAP don't affect eDiscovery.
:::

### Policy entities

Assign the policy to specific departments, groups, or computers. Only endpoints in the selected entities are scanned by this policy.

4. Click **Save** to create the policy.

## Create a predefined policy

![Create Custom Policy](edpredefinedpolicy.png)

Endpoint Protector includes predefined eDiscovery policy templates for common compliance frameworks. Predefined policies provide pre-configured content detection rules and thresholds.

To create a predefined policy:

1. Navigate to **eDiscovery** > **Policies and Scans**.
2. Click **Create Predefined Policy**.
3. Select a predefined policy template from the list. Available templates include:
   - HIPAA
   - PCI DSS
   - GDPR (multiple regional variants)
   - FINRA
   - SOX
   - FERPA
   - ITAR
   - NY Shield Act
4. Review and adjust the policy settings as needed.
5. Click **Save**.

## Manage scan operations

After creating a policy, you can assign scan actions from the **eDiscovery** > **Policies and Scans** page. The following scan actions are available:

| Action | Description |
|--------|-------------|
| **Start clean scan** | Starts a new discovery scan, scanning all files matching the policy criteria |
| **Start incremental scan** | Continues a previous scan, skipping files that were already scanned |
| **Stop scan** | Stops the running scan without affecting the existing scan results |
| **Stop scan and clear logs** | Stops the scan, exports the eDiscovery logs to the Export Log List, and deletes the scan results |

:::note
Use **Global Stop and Clear** to stop all running eDiscovery scans and clear all logs at once.
:::

### Scan progress

The eDiscovery Scans table displays the following information for each active scan:

- **Scanning Status**—a progress bar showing the scan completion percentage
- **Found Objects**—the number of content threats discovered by the scan
- **Command Sent**—the scan action that was most recently sent to the endpoint

eDiscovery policies continue to scan endpoints even when they're disconnected from the network. Scan results are saved locally on the endpoint and sent to the server when the connection is reestablished.

## Duplicate or delete a policy

- To duplicate a policy, select the policy and click **Duplicate**. A copy of the policy is created with the same settings.
- To delete a policy, select the policy and click **Delete**.
