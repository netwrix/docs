---
title: "Maintenance and Troubleshooting"
description: "Maintenance and Troubleshooting"
sidebar_position: 40
---

# Maintenance and Troubleshooting

Splunk records service logs to the `_internal` index. Follow the steps to troubleshoot data input
from Netwrix Auditor API:

**Step 1 –** Navigate to the **Search** page of the add-on or **Search & Reporting** Splunk app.

**Step 2 –** Enter the search command:

```
index=_internal <data_input_name>
```

For example:

```
index=_internal netwrix_data_input
```

**Step 3 –** Press the **Last 24 hours** button and choose **All time** time range.

**Step 4 –** Press the search button; you should see list of the events with Splunk service
information.

When the add-on operates normally there should be no errors and the following types of events should
appear regularly:

- Regular events from `*splunk\netwrix_auditor_api_input_*` source with POST requests to Netwrix Auditor API and checkpoint update with new Continuation Marks received from Netwrix Auditor API.
- Events from `*splunk\metrics.log` source with information about indexed volumes.
