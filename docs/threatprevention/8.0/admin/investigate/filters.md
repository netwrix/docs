---
title: "Investigate Filters"
description: "Investigate Filters"
sidebar_position: 40
---

# Investigate Filters

On the [Investigate Interface](/docs/threatprevention/8.0/admin/investigate/overview.md), there are six filter categories that can be applied to
the recent events available in the data grid. By default, no filters are applied. For the Policy
filter, all enabled unprotected policies and any protected policies the current user has rights to
view are selected, and the other filter categories are blank. Filters can be applied using any
combination of the filter categories. Use the Refresh button to repopulate the data grid with the
current information for the selected filter(s).

![Investigate Interface - Filter Categories](/images/threatprevention/8.0/admin/investigate/filtercategories.webp)

Filter categories are discussed below.

**Policy**

To filter by Policy, check the checkboxes for the desired policy. Protected policies that the
current user does not have rights to view are grayed-out.

- All policies – Toggles on or off all available policies
- Show Deleted Policies – Displays previously deleted policies in the Policy filter category. They
  are included in the filter. By default, event data from deleted policies is not included with the
  investigation results.

**Who**

To filter by Who, check the Perpetrator box to filter for a particular security principal committing
the change and/or check the Affected Object box to filter for a particular object being affected by
a change.

For the Perpetrator option, select the option button for either:

- Name – Identify a perpetrator by name
- SID – Identify a perpetrator by the Security Identifier

Then enter the who in the textbox or use the ellipsis (…) to open the Available Perpetrators window
that displays perpetrators currently known within the database.

For the Affected Object option, select the option button for either:

- DN / File Path – Identify an object by the distinguished name or file path
- Account – Identify an object by the SAM account name
- GUID – Identify an object by the globally unique identifier

Then enter the who in the textbox. Filter criteria can be a partial match.

**When**

Filtering by When provides several options, including the option between using Local Time or UTC
time.

- To filter from a specified date and time to the present, check the Between box and set the start
  time and date
- To filter for everything before a specified date time, check the And box and set the end time and
  date
- To filter for a specific time frame, check both the Between and And boxes, then set the start and
  end times
- To filter for Events for Last [number] Hours, check this box and set the number of hours to be
  used as the filter

**Where**

To filter by Where, check the box(es) for the desired filter type(s):

- In this Domain – Enter the [domain name] in the textbox or use the ellipsis (…) to open the
  Available Domains window that displays domains currently known within the database.
- Detected on Server – Select the radio button for either Name or IP and then enter the server in
  the textbox. The ellipsis (…) can be used to open the Available Servers window that displays
  servers currently known within the database.
- From This Computer – Select the radio button for either Name or IP and then enter the computer in
  the textbox
- To This Computer – Select the radio button for either Name or IP and then enter the computer in
  the textbox

**Filter criteria can be a partial match**

What

To filter by What, check the box(es) for the desired filter type(s):

- Event – Select the option button for either Success or Fail
- Action Type – Select the option button for either Blocked or Not Blocked

**Other**

To filter by Other, check the box(es) for the desired filter type(s):

- Class
- Perpetrator Protocol
- Event Source
- Event Name
- Attribute Name
- Attribute Value – Select the option button for either Oldor New and then enter the old or new
  value in the box

Filter criteria can be a partial match.

:::warning
The Full Text Search is not driven by indexes. Unless other indexed criteria are
selected, the full text search could result in a scan of the entire SQL database which could be very
slow for large databases.
:::


- Full Text Search – Queries the entire SQL database for the entered attribute. If the attribute
  displays anywhere in the event, it is displayed in the data grid.

Click the arrow on the filter category header ribbon to expand or collapse the category. You can
also clear all filters by clicking the Reset Filters button on the ribbon between the filter
categories and the data grid. Filtered views can also be saved. See the
[Saved Investigations](/docs/threatprevention/8.0/admin/investigate/saved.md) topic for additional information.
