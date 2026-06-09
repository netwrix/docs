---
title: "Reports and Analysis"
description: "Reports and Analysis"
sidebar_position: 90
---

# Reports and Analysis

This section offers an overview of the System Logs, Device Control Logs and Shadows, Content Aware
Logs and Shadows, Admin Actions, Statistics, and other helpful information.

Details regarding eDiscovery Scans and Enforced Encryption can be viewed in their speciﬁc sections
and not in the Reports and Analysis section.

As an additional security measure, this section may be protected by an additional password set by
the Super Administrator, from **System Conﬁguration** > **System Security**.

## Logs Report

From this section, you can view, sort, and export the main logs in the system. There are several
event types such as User Login, User Logout, AD Import, AD Synchronization, Uninstall Attempt, etc.,
included in this section. Additionally, the main Device Control logs can be viewed in this section.

![Logs Report Settings](logsreport.webp)

:::note
Use the Filters option to view and sort different log types and then export the result
list.
:::


## File Tracing

This section offers an overview of trace ﬁles that have been transferred from a protected computer
to a portable device or another computer on the network, and vice versa.

A special mention is given here to the “File Hash” column. Endpoint Protector computes an MD5 hash
for most of the ﬁles to which the File Tracing feature applies to. This way, mitigating threats
coming from changing the ﬁle content is ensured.

You can export the search results (as an Excel, PDF, or CSV) or Create and Export containing the
entire log report as a .CSV ﬁle.

![File Tracing Reports](filetracingreports.webp)

### File Tracing Events by Direction

The "File Tracing Events Matrix by Direction" table is a valuable reference for understanding how
Endpoint Protector categorizes ﬁle tracing events based on data transfer directions. It offers
insight into event handling and helps users customize data protection policies effectively. Whether
tracking local transfers or interactions with removable devices and network shares, this table
provides a clear overview. It's an essential resource for conﬁguring data protection policies in the
Endpoint Protector environment, ensuring strong security and compliance.

:::note
This matrix refers to clients from the 5.9.0.0 release and higher.
:::


The following table provides a detailed view of the events.

**File Tracing Events Matrix by Direction**

| Direction                            | Windows    | macOS      | Linux      |
| ------------------------------------ | ---------- | ---------- | ---------- |
| Local -> Local (Partition 0)         | N/A        | N/A        | N/A        |
| Local -> Removable                   | Src & Dest | Src & Dest | Src & Dest |
| Local -> Network share               | Src & Dest | Src & Dest | N/A        |
| Local -> Partition 1                 | Src & Dest | N/A        | N/A        |
| Removable -> Local (Partition 0)     | Src & Dest | Src & Dest | Src & Dest |
| Removable -> Removable               | Src & Dest | Dest       | Src & Dest |
| Removable -> Network share           | Src & Dest | Dest       | N/A        |
| Removable -> Partition 1             | Src & Dest | Src & Dest | Src & Dest |
| Network share -> Local (Partition 0) | Src & Dest | Src & Dest | N/A        |
| Network share -> Removable           | Src & Dest | Dest       | N/A        |
| Network share -> Network share       | Src & Dest | Dest       | N/A        |
| Network share -> Partition 1         | Src & Dest | Src & Dest | N/A        |
| Partition 1 -> Local (Partition 0)   | N/A        | N/A        | N/A        |
| Partition 1 -> Removable             | Src & Dest | Src & Dest | Src & Dest |
| Partition 1 -> Network share         | Src & Dest | Src & Dest | N/A        |
| Partition 1 -> Partition 0           | N/A        | N/A        | N/A        |

Legend:

- Partition 0 -> Boot Partition (OS)
- Partition 1 -> 2nd Partition (e.g., 2nd OS or Data Partition)

## Content Aware Report

From this section, you can view Content Aware Logs in the system and detect data incidents
corresponding to the Content Aware Policies applied.

![Content Aware Reports](capreports.webp)

When using the latestEndpoint Protector client, you can view log details structured per ﬁle scanned.

Expand each entry from the log report list to view the Log Details expanded section, providing the
following information:

- Policy – select an active policy from the dropdown list
- Policy name – the name of the selected policy
- Policy type – the type of the selected policy
- Items type – the Policy Denylist category selected
- Matched type – the Policy Denylist type selected
- Matched items – click the link to view a pop-up window with the list of matched items

![A pop-up window with the list of matched items](capmatcheditems.webp)

- Count – the number of matched items

![Count – the number of matched items](matcheditemscount.webp)

Use the **Show/Hide Columns** dropdown to customize which columns are visible in the report. The **Date/Time(Client UTC)** column is available in this dropdown but is hidden by default.

From the Filters section, check the **Include old logs before 5.7** upgrade option from the filter
section to include all logs in your searches. If the option isn't selected, the filters will apply
only to the new structure of logs. The **Date/Time(Client UTC)** field is also available as a filter option.

![Content Aware Protection Filters](capfilters.webp)

For Mac users, when the Deep Packet Inspection feature is enabled on the Endpoint Protector agent
for Mac, there might be certain scenarios where the agent doesn't provide full destination details
for ﬁles being transferred from a network share through monitored applications, such as browsers. In
such cases, the destination information may not be fully captured in the monitoring process

For Linux users, the Endpoint Protector agent doesn't support network share visibility, except when
files are transferred from a network share through Deep Packet Inspection monitored applications,
such as browsers. In other scenarios, network share visibility isn't available.

### Export Content Aware Reports

You can export Content Aware Logs as an Excel, PDF, or CSV or create and export the entire log
report as a CSV or XLSX ﬁle.

Excel/PDF/CSV – situated above the Content Aware Reports list, this will export only the default
columns. The **Date/Time(Client UTC)** column is included in exports when selected via Show/Hide Columns.

![Export Content Aware Reports](exportreports.webp)

Create Export – situated below the Content Aware Reports list, this will create an export containing
all data, including the expanded Logs Details section with columns Policy Type, Policy Name, Item
type, Matched type, Matched items and Count.

![Creating Export ](createexport.webp)

After the message that is displayed that A new export has been made and is available on Export List,
click View Export List to open the list of Reports, where you can download or delete a report.

![Viewing Export List ](viewexportlist.webp)

![Export List Results ](exportlistresults.webp)

## Export List

The Export List shows all exports you have created, regardless of log type. Access it at any time by clicking **View Export List** in any log report section.

From the Export List you can download completed exports or delete entries you no longer need.

### Background processing

When you click **Create Export**, Endpoint Protector queues the request and processes it in the background. The server processes one export at a time. This means:

- You don't need to stay on the page while the export runs.
- If an export is already running, your new request waits in the queue.
- You can't create additional exports while the banner is showing.

When an export is in progress, a banner appears at the top of the page:

<!-- vale Netwrix.TemporalHedges = NO -->
> *A log Report Export is currently running and will be ready soon. Until then, no additional Exports can be created and the displaying Log Report Results may be slower.*
<!-- vale Netwrix.TemporalHedges = YES -->

Wait for the current export to finish before starting a new one. The banner disappears when processing is complete. Large exports may take several minutes depending on the number of records and the load on the server.

:::note
If a system backup is running at the same time as an export, queued exports are cancelled automatically. Create the export again after the backup completes.
:::

### Export retention

Completed exports are automatically deleted after 7 days.

## Admin Actions

This section offers an overview of every important action performed in the interface. From the
Action column, you can view additional information.

![ An overview of every important action performed in the interface](adminactions.webp)

## SCIM Provisioning Logs

The logs display detailed information for each SCIM request, including:

-   Request ID
-   Timestamp
-   HTTP Method
-   Endpoint
-   Status Code
-   Operation type (POST, PATCH, DELETE, BULK)
-   Resource type (User, Group)
-   Actor
-   Request and response bodies

These logs help administrators:

-   Verify successful provisioning
-   Troubleshoot synchronization issues
-   Support audit and compliance requirements

![Provisioning reports list](SCIMProvisioningLogs.png)

![Provisioning reports list expanded](SCIMProvisioningLogsExpanded.png)

## Online Computers

This section offers an overview of computers registered on the system which have an established
connection with the server. If the Refresh Interval for computer X is 1 minute, then computer X was
communicating with the server in the last 1 minute.

![Overview of computers registered on the system](onlinecomputers.webp)

## Online Users

This section offers an overview of users registered on the system which have an established
connection with the server.

![An overview of users registered on the system](onlineusers.webp)

## Online Devices

This section provides an overview of devices registered on the system which have an established
connection with the server.

![An overview of devices registered on the system](onlinedevices.webp)

## Statistics

The Statistics module lets you view system activity related to data traffic and device connections.
The integrated filter makes generating reports quick and easy; simply select the field of interest
and click **Apply Filter**.

![View system activity regarding data traﬃc and device connections](statistics.webp)
