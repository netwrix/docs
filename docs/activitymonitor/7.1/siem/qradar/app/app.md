---
title: "File Activity Monitor App for QRadar"
description: "File Activity Monitor App for QRadar"
sidebar_position: 10
---

# File Activity Monitor App for QRadar

Stealthbits File Activity Monitor App for QRadar (File Activity Monitor tab) contains several
predefined dashboards: File Activity (Home), Ransomware, Permission Changes, Deletions, User
Investigation, and Host Investigation. There is also an About dashboard with additional information
and a Settings interface for configuring the QRadar SEC token.

![file_activity_monitor_app](/images/activitymonitor/7.1/siem/qradar/file_activity_monitor_app.webp)

The User Investigation and Host Investigation dashboards only appear when a search is conducted.
This can be done by clicking a hyperlink within the Username or Destination IP columns of a table
card. Alternatively, type the complete user name or host IP Address in the Search box on the right
side of the navigation bar.

## Table Card Features

Within the dashboards are several cards with a tabular format. Each of these cards have the
following features:

- Only five pages of data will be loaded at a time. Applying the Search or Sort features or moving
  beyond the five ‘loaded’ pages will result in a “Processing” banner being temporarily displayed
  over the table while the server is directly queried for the necessary data.
- Search data entries for the Username, Destination IP, and File Path columns by typing in the
  Search box in the upper-right corner of the card:

    - Any entries with a match will remain in the table, all non-matching entries will be filtered
      out.
    - Total number of entries “Showing” will adjust for the filtered total.
    - Search can also apply to the Operation column, but only for exact matches.

- Sort can be applied to one column at a time by clicking on the desired column header.
- Show 10, 25, 100, or All entries in the table. Only visible entries can be exported.
- Result data currently visible within the table page displayed can be exported from the dashboard:

    - Copy – Copy to clipboard in order to paste to another application
    - CSV – Export to a Comma Separated Value file
    - Excel – Export to an Excel Workbook file
    - Print – Send currently displayed table to printer
