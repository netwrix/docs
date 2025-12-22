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

![Active Directory App for QRadar - Top Ribbon](/images/threatprevention/7.5/siemdashboard/qradar/topribbon.webp)

The User Investigation and Host Investigation dashboards only appear when a search is conducted.
This can be done by clicking a hyperlink in the Perpetrator, Affected Object (when it is a user
account), Source IP, or Destination IP columns of a table card. Alternatively, type the complete
user name or host IP address in the Search box on the right side of the navigation bar.

## Progress Bar

When a search using a time interval longer than twelve (12) hours is initiated, the database query
is broken into multiple mini-queries. A progress bar will appear in the bottom left of the screen
that fills up as each query is completed. The progress bar will automatically reappear if it is
clicked on.

## Table Card Features

Dashboards have several cards with a tabular format. Each of these cards have the following
features:

- Only five (5) pages of data will be loaded at a time. Applying the Search or Sort features or
  moving beyond the five ‘loaded’ pages will result in a “Processing” banner being temporarily
  displayed over the table while the server is directly queried for the necessary data.
- Search data entries for all columns (except the Timestamp and Event Count columns) by typing in
  the Search box in the upper-right corner of the card.

  - Any entries with a match will remain in the table while all non-matching entries will be
    filtered out.
  - Total number of entries “Showing” will adjust for the filtered total.

- Sort can be applied to one column at a time by clicking on the desired column header.
- Show 10, 25, 100, or All entries in the table. Only visible entries can be exported.
- Result data currently visible in the table can be exported from the dashboard:

  - Copy – Copy to clipboard in order to paste to another application
  - CSV – Export to a Comma Separated Value file
  - Excel – Export to an Excel Workbook file
  - Print – Send currently displayed table to printer

## Graph Card Features

Dashboards have several cards with a graphical format. Each of these cards have the following
features:

- Graph parts can be toggled on and off by clicking on individual elements in the legend
