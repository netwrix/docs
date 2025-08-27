---
title: "Maintenance and Troubleshooting"
description: "Maintenance and Troubleshooting"
sidebar_position: 40
---

# Maintenance and Troubleshooting

Splunk records service logs to the \_internal index. Follow the steps to troubleshoot data input
from Netwrix Auditor API:

**Step 1 –** Navigate to the Search page of the add-on or Search & Reporting Splunk app.

**Step 2 –** Enter the search command:

```
index=_internal "<data_input_name>"
```

For example:

```
index=_internal "<netwrix_data_input>"
```

**Step 3 –** Press the Last 24 hours button and choose Last 15 minutes time range.

**Step 4 –** Press the search button; you should see list of the events with Splunk service
information.

When the add-on operates normally there should be no errors and the following types of events should
appear regularly:

- Regular events from _\*splunk\ta-netwrix-auditor-add-on-for-splunk_netwrix_auditor_api_input_\*\_
  source with POST requests to the Netwrix Auditor API.
- Regular events from _\*splunk\ta-netwrix-auditor-add-on-for-splunk_netwrix_auditor_api_input_\*\_
  source with checkpoint update with new ContinuationMarks received from Netwrix Auditor API.
- Events from _\*\splunk\metrics.log_ source with information about indexed volumes.
