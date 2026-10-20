---
title: "EventLog Data Collector"
description: "EventLog Data Collector"
sidebar_position: 140
---

# EventLog Data Collector

The EventLog Data Collector provides search and extraction of details from event logs on target
systems. This data collector is a core component of Access Analyzer and is available with all Access
Analyzer licenses.

**Protocols**

- RPC
- WMI

**Ports**

- TCP 135
- Randomly allocated high TCP ports

**Permissions**

- Member of the Local Administrators group
- Member of the Domain Administrators group (if targeting domain controllers)

## EventLog Query Configuration

You configure the EventLog Data Collector through the Event Log Browser window.

![Event Log Browser window](/images/accessanalyzer/12.0/admin/datacollector/eventlogbrowser.webp)

**Sample**

In the Sample section, select from the following options:

- From log

    - Host – Enter a sample host that contains a log with the type of events desired for the query.
      Click **Connect** to generate a list of logs available for extraction.
    - Log name – Select a log from the dropdown list. Events from the selected log populate the
      table.

- From file

    - Click the folder icon next to the File name box to open the Log sample browser window and
      select a log, or manually enter the log path in the box

- Show – Click to preview the elements in the event log file for log paths manually entered in the
  File path box

    :::note
    A preview displays automatically if you use the folder icon to navigate to the log.
    :::


- Lookup user name – Select this checkbox to resolve SID or GUID values to friendly display values

**Search Criteria**

In the Search Criteria section, add a search filter to the table by configuring the following
criteria:

- Event Source – Select the event source from the dropdown list. Typically, select **Any Source**.
- Even Type – Select the event type from the dropdown list. Typically, select **Any Type**.
- Event ID – Enter the event ID for the type of event to search

After you enter the preceding information, click **Add** to add the configured event to the query.
Add as many events as desired.

- Latest event only – Select this checkbox to only search the latest event

Click the **Add** button to add the search filters to the table. Click the **Remove** button to
remove search criteria from the filters.

- Event Date/Time – Enter the last number of hours the event time must be in. A value of `0`
  specifies any time.
- Retrieve oldest event – Select this checkbox to retrieve the oldest event
- Retrieve latest event – Select this checkbox to retrieve the latest event

Click **Apply Filter** to filter the list of sample events to the search criteria.

**Options**

In the Options section, select the processing options you want:

- Process offline logs only – Select this checkbox to process only offline logs
- Process offline logs if required – Select this checkbox to process offline logs if needed
- Specify explicit path\mask for archives – Available if you select the **Process offline logs
  only** or **Process offline logs if required** checkbox. Specify the path and name of the
  archive.

**Available Properties**

In the Available Properties section, select which properties the browser collects.

- Add Icon – Add properties from the available list to the search

    - The Description properties let you extract the bracketed pieces of information
      found within the description and display each bracketed piece of information in its own column

- Remove Icon – Use to remove properties from the search

After you configure all options, click **OK** to save changes and exit the browser. Click
**Cancel** to exit without saving.
