---
title: "Navigate the App"
description: "Navigate the Active Directory App for QRadar"
sidebar_position: 10
---

# Navigate the Active Directory App for QRadar

The Netwrix Active Directory App for QRadar (Active Directory tab) contains several predefined
dashboards:

- About
- Active Directory (Overview)
- AD Changes
- Authentication Attacks
- GPO Monitoring
- Administrator Auditing
- LDAP
- Policy Reporting
- User Investigation
- Host Investigation.

There is also a Settings interface for configuring the QRadar SEC token.

![Active Directory App for QRadar - Top Ribbon](/images/threatprevention/8.1/siemdashboard/qradar/topribbon.webp)

The User Investigation and Host Investigation dashboards only appear when you conduct a search.
You can do this by clicking a hyperlink in the Perpetrator, Affected Object (when it is a user
account), Source IP, or Destination IP columns of a table card. Alternatively, enter the complete
user name or host IP address in the Search box on the right side of the navigation bar.

## Progress Bar

When you instigate a search using a time interval longer than twelve (12) hours, the app breaks the
database query into multiple mini-queries. A progress bar appears in the bottom left of the screen
and fills up as each query completes. The progress bar automatically reappears if you click it.

## Table Card Features

Dashboards have several cards with a tabular format. Each of these cards have the following
features:

- The card loads only five (5) pages of data at a time. Applying the Search or Sort features or
  moving beyond the five ‘loaded’ pages temporarily displays a “Processing” banner over the table
  while the app queries the server directly for the necessary data.
- Search data entries for all columns (except the Timestamp and Event Count columns) by typing in
  the Search box in the upper-right corner of the card.

  - Any entries with a match remain in the table while the card filters out all non-matching
    entries.
  - The total number of entries “Showing” adjusts for the filtered total.

- You can apply Sort to one column at a time by clicking on the column header you want.
- Show 10, 25, 100, or All entries in the table. You can export only visible entries.
- You can export result data visible in the table from the dashboard:

  - Copy – Copy to clipboard to paste to another application
  - CSV – Export to a Comma Separated Value file
  - Excel – Export to an Excel Workbook file
 - Print – Send displayed table to printer

## Graph Card Features

Dashboards have several cards with a graphical format. Each of these cards have the following
features:

- You can toggle graph parts on and off by clicking on individual elements in the legend
