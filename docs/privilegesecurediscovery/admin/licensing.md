---
title: "View license utilization"
description: "Find out how many systems Netwrix Privilege Secure for Discovery counts toward your license, by operating system, for the last 90 days, month, or week."
sidebar_position: 40
---

The **License Usage** screen in Netwrix Privilege Secure for Discovery shows how many systems the product counted for licensing in a period. The statistics don't override the terms in your software agreement.

## How the product counts license use

The screen states the rule that the count follows: "License use is calculated as: Customer owned, leased or otherwise operated computer systems upon which the Licensed Software has performed at least one function."

In practice, the product counts a system when it scanned the system at least once during the selected date range. A system that you imported from your directory but never scanned doesn't count. A system that you retired from the inventory still counts if the product scanned it during the range.

## View license utilization

1. Select **Configure** > **License Usage**.
1. In **Date Range**, select **90 Days**, **1 Month**, or **1 Week**.
1. Read the chart and its legend.

![The License Usage screen showing a pie chart of systems by operating system for the last 90 days](/images/privilegesecurediscovery/admin/license-usage.webp)

The chart heading shows the number of days, and the chart title shows the first and last date of the range. The legend lists the total and the count for each category:

- **Windows**: Windows workstations and laptops.
- **Windows Servers**: Windows Server systems.
- **Linux Servers**: Linux systems.

For example, a legend of **Total: 27**, **Windows: 8**, **Windows Servers: 14**, and **Linux Servers: 5** means that the product scanned 27 distinct systems in the range.

The screen doesn't require any setup. It reads the scan history that the product already keeps.

## Related information

- [Dashboard reference](./dashboard.md)
