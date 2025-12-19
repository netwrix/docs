---
title: "Administration"
description: "Administration"
sidebar_position: 40
---

# Administration

The navigation header contains the following links on the top left side of the page:

![headerbarleft](/images/threatmanager/3.0/administration/headerbarleft.webp)

- Threat Manager – Opens the Home page for the Threat Manager Console
- Threats – Opens the [Threats Page](/docs/threatmanager/3.0/administration/threats/threats.md)
- Investigate – Opens the [Investigations Interface](/docs/threatmanager/3.0/administration/investigations/overview.md)

:::note
For mobile users, only the icons are displayed for the Threats and Investigate links.
:::


The header bar contains the following links on the top right side of the page:

![This screenshot displays the right header bar.](/images/threatmanager/3.0/administration/headerbarright.webp)

- Search – Enter a user, computer, or group and click the Search icon
- [Configuration Menu](/docs/threatmanager/3.0/administration/configuration/overview.md) – Displays a menu with the configuration pages
- Help – Accesses help
- Logout – Click the person icon and select Logout from the drop-down list to log out of the Threat
  Manager Console. The drop-down list also displays the user logged in.

A magenta alert banner will display below the navigation header if one of the following scenarios
occurs:

![banneragentunresponsive](/images/threatmanager/3.0/administration/banneragentunresponsive.webp)

- Service outage
- Agent outage
- License missing or expired

This banner contains a link to the page relevant to the issue.

## Home Page

The Threat Manager [Home Page](/docs/threatmanager/3.0/administration/home.md) provides an “at a glance” overview of the possible threats
detected in an organization's environment for the past 24 hours. This is displayed with interactive
graphs and a rollup count that will allow easy tracking and response capabilities for new threats,
and users with risky activity.

## Threats Page

The Threat Manager [Threats Page](/docs/threatmanager/3.0/administration/threats/threats.md) is where end users and analysts investigate possible
threats in their environment. This page displays a historical timeline of the detected threats and
advanced filtering that allows users to find threats with ease. An end user can drill down into
threats and view additional details. Threats have a response workflow that enables teams to assign a
user to evaluate the threat, set status updates on the threat, and add any desired comments to the
threat.

## Investigate Page

The Threat Manager allows customers to investigate all data previously sent to Threat Manager
through a series of customizable filters designed to discover threats unique to their organization.
These investigations can be saved so they can be run ad hoc at a later time. Investigations can also
be "saved as a threat" which enables investigation criteria to function as a threat detection
mechanism that will be monitored by Threat Manager like out-of-the-box threats.

## Interactive Chart Elements

The threat types listed for bar charts are interactive.

![excludeathreat](/images/threatmanager/3.0/administration/excludeathreat.webp)

Click a threat to exclude it from the chart. The threat will have a black line through it to show
that it has been excluded. Click the threat again to add it to the chart.

![trendline](/images/threatmanager/3.0/administration/trendline.webp)

Hover over a trend line to see the number of threats detected in the selected time increment.

![bargraphhover](/images/threatmanager/3.0/administration/bargraphhover.webp)

Hover over a bar graph to view the number of each type of threat created in the time frame. Hover
over slices in a pie chart to view the number of threats for each threat type.

## Preview Windows

Anywhere in the Console where a link to a user, group, or host details page is displayed, hover over
the link to display a preview window.

![hover](/images/threatmanager/3.0/administration/hover.webp)

Preview windows display cards that provide information about the selected object without having to
navigate off of the current page. These cards provide information about users, groups, and hosts,
including any associated tags.

## Data Grids

Data grids provide the ability to search for data and also to configure the presentation of data.

![This screenshot displays interactive elements in a grid.](/images/threatmanager/3.0/administration/datagrids.webp)

The top bar in a data grid contains the following options:

- Search Box – Enter text in the search box to filter data in the table
- Results Per Page – Click the drop-down list to select the number of results displayed per page.
  Options include:
    - 10 rows
    - 50 rows
    - 100 rows
    - 1000 rows – Displays up to 1000 rows
- Links – Click a link view the user, group, or host details page
- Export CSV – Click this button to export the current rows displayed on the page into a CSV file
- Export All – Some tables contain an Export All button. Click the button to export all returned
  data into a CSV file

The data grids will display multiple authentication events that occur in quick succession in a
single row. This means that if a user has multiple similar authentication events that occur within a
minute, the data grids will display a single row in the table for those events.

If a data grid displays File System events that contain sensitive data, a Sensitive Data tag will be
displayed in the Description field. The Sensitive Data tag is the only tag that will be displayed in
the Description field.
