---
title: "Access Risk reports"
description: "Enable the Access Risk screens and use them to measure standing privileged access, find unsegregated accounts, and track how your attack surface changes."
sidebar_position: 20
---

The **Access Risk** screens in Netwrix Privilege Secure for Discovery report on standing privileged access in your environment. Standing privileged access is administrator access that an account holds all the time, instead of only during a just-in-time administration (JITA) session. Use the screens to assess your attack surface and to track how it shrinks as you remove standing privilege.

The screens show the following:

- The number of accounts with privileged access, split by access from group membership and direct access.
- Accounts that have privileged access on more than one tier: the domain, servers, and workstations.
- The total amount of standing privileged access, and the average per system.
- Trends over the last 90 days, one data point for each day.
- Data for a single domain at a time.
- Tables that you can copy or export to CSV, Excel, or PDF.

Access Risk is off by default. The product records data only after you turn it on, so the charts start empty and fill by one point each day.

## Enable Access Risk

1. Select **Configure** > **Server**.
1. In the **Additional Options** section, set **Access Risk: Enable Access Risk** to **Enabled**.
1. Wait for the first calculation, or select **Calculate Next Interval** to request one.

When you enable Access Risk, the **Insight** menu shows an **Access Risk** group with the **Privileged Users**, **Segregation**, and **Cumulative** screens. Until the first calculation completes, each screen shows "Access Risk hasn't been calculated yet".

The analytics engine service calculates the data once a day. It waits until no directory synchronization is running and no scan is in progress, so the numbers reflect a complete picture. A calculation records the data under that day's date. **Calculate Next Interval** asks the engine to calculate again for today at its next opportunity, which is useful after you remove access and want to see the effect without waiting for tomorrow. The product confirms the request with the message "Access Risk will be calculated on next run".

:::note
An administrator can restrict the **Insight** screens to administrators only. The setting is **Restrict Insight pages to Admins only** in the **Web Application Settings** section of **Configure** > **Server**.
:::

## Use the filters

Each screen has the same three filters at the top.

- **Domain**: The domain to report on.
- **Date Range**: **90 Days**, **1 Month**, or **1 Week**. The **1W**, **1M**, and **90D** buttons on the chart do the same.
- **Selected Date**: The day that the tables and breakdowns show. You can also select a point on the chart.

The tables show the access as of the selected date. Each table has **Copy**, **CSV**, **Excel**, and **PDF** buttons to export its rows.

## Read the Privileged Users screen

Open **Insight** > **Access Risk** > **Privileged Users**. The **Instances of Privileged Access** chart stacks two series: **Users With Group Access** and **Users With Direct Access**. The more you reduce them, the smaller your attack surface.

![The Privileged Users screen showing a chart of users with group access and users with direct access over 90 days](/images/privilegesecurediscovery/admin/access-risk-privileged-users.webp)

Two tables show the detail for the selected date:

- **Groups that Provide Access** lists each group path with **Total # Systems**, **Domain Access**, **# Users**, **Servers**, and **Workstations / Laptops**.
- **Users with Direct Access** lists each user with **Total # Systems**, **Domain Access**, **Servers**, and **Workstations / Laptops**.

**Domain Access** is `true` when the account belongs to a Microsoft-designated group that can compromise the whole domain, such as Domain Admins or Enterprise Admins. Select **What is Domain Access?** next to a table to see the full list of groups.

For example, a user with **Total # Systems** of 7, **Servers** of 6, and **Workstations / Laptops** of 1 has direct administrator access on six servers and one workstation. Remove that access, or move it into a JITA workflow, and the user's row disappears from the table after the next calculation.

## Read the Segregation screen

Open **Insight** > **Access Risk** > **Segregation**. The screen shows accounts that have access on more than one tier. A compromised system has a larger impact when an account spans tiers, because an attacker can use the account to move sideways. Reducing these numbers restricts that movement.

The **Unsegregated Access** chart counts accounts in four combinations: **Domain Access and Servers**, **Servers and Workstations**, **Domain Access and Workstations**, and **Domain Access, Servers, and Workstations**. The breakdown chart for the selected date splits each combination into **Users in Groups** and **Direct Users**. The tables **Groups with Access on Multiple System Types** and **Users with Access on Multiple System Types** list the accounts behind the counts. The charts stay empty when no account spans tiers.

## Read the Cumulative screen

Open **Insight** > **Access Risk** > **Cumulative**. The screen shows the total standing privileged access in the domain.

![The Cumulative screen showing total privileged access on servers and workstations over 90 days, and a table of access by type](/images/privilegesecurediscovery/admin/access-risk-cumulative.webp)

- **Instances of Privileged Access** (chart): The total number of privileged access instances on **Workstations** and **Servers**.
- **Average Standing Privileged Access / Total Systems**: The average number of privileged accounts per workstation, per server, and per system overall.
- **Instances of Privileged Access** (table): For the selected date, the instances on servers and on workstations or laptops by type of access: **Users - Direct Access**, **Groups - Direct Access**, **Groups - Nested Access**, and **Groups - Total Access**.

Linux systems and Windows Server systems count as servers. Other Windows systems count as workstations or laptops.

## Related information

- [Privileged access security levels](https://docs.microsoft.com/en-us/security/compass/privileged-access-security-levels) in the Microsoft documentation defines domain-level privileged access.
- [Dashboard reference](./dashboard.md)
