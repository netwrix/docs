---
title: "LDAP Dashboard"
description: "LDAP Dashboard"
sidebar_position: 60
---

# LDAP Dashboard

The Lightweight Directory Access Protocol (LDAP) dashboard contains the following cards:

![LDAP Dashboard](/images/threatprevention/7.5/siemdashboard/qradar/dashboard/ldap.webp)

- Top Users – Shows the top five users associated with LDAP events in the specified timeframe. See [Graph Card Features](/docs/threatprevention/7.5/siemdashboard/qradar/navigate/navigate.md#graph-card-features) for details.
- Top Source Hosts – Shows the top five client IP addresses associated with LDAP events in the specified timeframe. See [Graph Card Features](/docs/threatprevention/7.5/siemdashboard/qradar/navigate/navigate.md#graph-card-features) for details.
- LDAP Query Details – Tabular format of all non-trivial LDAP events in the specified timeframe. See [Table Card Features](/docs/threatprevention/7.5/siemdashboard/qradar/navigate/navigate.md#table-card-features) for details.

The time interval is identified in the upper-right corner in the _Start_ and _End_ boxes, which default to the past three hours. To search a different timeframe, enter the start and end dates and times, or use the calendar buttons to select them. Click **Search** to refresh the card data.

Searches using a time interval longer than 12 hours split the database query into multiple mini-queries. The dashboard display resets at the end of each mini-query until all data for the selected timeframe is retrieved.
