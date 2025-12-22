---
title: "Connect Power BI to Usercube"
description: "Connect Power BI to Usercube"
sidebar_position: 10
---

# Connect Power BI to Usercube

This guide shows how to connect Power BI to Usercube.

## Overview

When facing a periodic need for producing specific reports, especially when a visual presentation is
required, Usercube offers the possibility to connect to the
[Power BI](https://powerbi.microsoft.com/en-us/what-is-power-bi) application. This application will
allow you to create customized reports with a vast range of display options (such as graphs, charts,
matrixes, etc.) using Usercube's universes.

## Prerequisites

- Power BI Desktop must be installed on your device.
- Usercube's server must be running.

## Connect Power BI to Usercube

Connect Power BI to Usercube by proceeding as follows:

1. Open Power BI Desktop.
2. Click on **Get data** either in the welcome window or in the home menu.

    ![Get Data](/images/identitymanager/6.1/integration-guide/governance/reporting/how-tos/connect-powerbi/powerbi_getdata.webp)

3. In the opening window, search for **Usercube**, click on its plugin in the right menu, and click
   on **Connect**.

    ![Get Data Window](/images/identitymanager/6.1/integration-guide/governance/reporting/how-tos/connect-powerbi/powerbi_getdatawindow.webp)

4. Enter Usercube's server URL in the opening window.

    ![Server URL](/images/identitymanager/6.1/integration-guide/governance/reporting/how-tos/connect-powerbi/powerbi_url.webp)

5. In the opening window, enter the
   [OpenIdClient](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/access-control/openidclient/index.md)
   of the `Administrator` profile. The `Client Id` expects the concatenation of the identifier of
   `OpenIdClient` with `@` and Usercube's domain name. See the following example.

    ![Client Id / Client Secret](/images/identitymanager/6.1/integration-guide/governance/reporting/how-tos/connect-powerbi/powerbi_clientid.webp)

6. You can now access in the left panel the
   [universes](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/business-intelligence/universe/index.md)
   from Usercube configuration. You can click on the desired universe to expand it, and view and
   pick the desired tables.

    ![Universe Panel](/images/identitymanager/6.1/integration-guide/governance/reporting/how-tos/connect-powerbi/powerbi_universes.webp)

    **Power BI tip:** to view a table, click on its name. To select a table, check the box next to
    the table's name.

7. Once you've selected all the tables you need, click on **Load** to import data to the Power BI
   report. You can also click on **Transform data** to open the query editor and make other changes
   in your tables, rows and columns.

## Clear the Cache

Remember to clear the cache in Power BI to ensure that all changes are considered.

Clear the cache by proceeding as follows:

1. In Power BI, click on **File** > **Options and settings** > **Options**.
2. In the **Data Load** tab, click on **Clear Cache**.

    ![Clear Cache](/images/identitymanager/6.1/integration-guide/governance/reporting/how-tos/connect-powerbi/powerbi_clearcache.webp)
