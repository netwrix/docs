---
title: "Operations and Health Dashboards"
description: "Operations and Health Dashboards"
sidebar_position: 60
---

# Operations and Health Dashboards

The Dashboard administration area provides a selection of tools to review application health.

## Dashboard view

The default screen shows a high-level overview of Netwrix Data Classification statistics, displaying
the last active times of each service (with inactive services shown in red). Select the "i" icon
next to each date to view the name of the active server as well as batch processing statistics.
You will also be able to view the average processing throughput.

If you have the [Distributed Query Server](/docs/dataclassification/5.7/introduction/deployment/ndcserverandclient/dqsmode.md) functionality enabled, any instances that are missing their copy of the NDC encryption key will also be displayed here. See [Recovering the Encryption Key in Secondary NDC Instances](/docs/dataclassification/5.7/introduction/deployment/ndcserverandclient/recoveringencryptionkeyindqsenvironment.md) for instructions on remediating missing encryption keys. 

The following statistics are available for each thread type:

- Processing Time—The weighted average time for each thread (total batch time / number of documents
  processed)
- Real Execution Time—The actual execution time of each thread (an average of each thread's run time)

Statistics shown on the Dashboard screen are cached and updated regularly by the Collector service.
If the values aren't being updated ensure that the Collector service is running.

New content will be shown as Awaiting Collection, and progress through to Fully Processed.

Content that has failed to process fully will be indicated under the "Exceptions" section, with the
following meanings:

- Collection Errors—Items that failed to process during collection (typically due to an error from
  the source system)
- Text Extraction Errors—Items that failed text extraction (either partially or fully)—this will
  typically mean that the full text for the affected documents will not be available
- Collection Exclusions—Items that have been excluded due to a configured Collection Exclusion
- Files Skipped—File share items that have been ignored due to the "Files Included" or "Files
  Excluded" configuration
- Deleted Automatically—Items that have been detected as removed from the source system
- Deleted Manually—Items removed manually by an end-user via the administration console

:::note
Deleted documents are retained as a safeguard against accidental deletion. Click the Expunge option located on the Deleted Automatically and Deleted Manually rows to fully remove those documents from the system. Automatic expunging can be enabled via the [Administration configuration settings](/docs/dataclassification/5.7/systemconfigurationoverview/configuration/coreconfiguration/administration.md). The Expunge option is only displayed if there are documents to be expunged.
:::

    ![dashboard_thumb_0_0](/images/dataclassification/5.7/admin/reporting/dashboard_thumb_0_0.webp)

## System Health

The health service provides a traffic light based reporting system. Colour-coded traffic lights will
appear in the top menu bar when issues are detected. The traffic lights provide a quick link to this
page to display more detailed information.

You will then see the list of reported issues, with the ability to view a detailed description of
the problem and suggested resolution steps.

You can also configure notifications of system issues, along with daily reports of
outstanding system issues.

1. Click Dismiss at the bottom.

    ![health_config_notifications](/images/dataclassification/5.7/admin/reporting/health_config_notifications.webp)

2. Select Only dismiss health notifications that are older than one week, if you don't want to be
   notified on outdated issues.
3. Select what you want to dismiss – warnings and all security notifications.

## Netwrix Data Classification Service Viewer

The Netwrix Data Classification Service Viewer displays a live stream of the
current work being processed by the NDC services. As the services progress each document, the
display will change. Once all work is complete, "Idle..." will be displayed.

This functionality may not work in older browsers. In this case the "on-server" application Netwrix
Data Classification Service Viewer should be used.
