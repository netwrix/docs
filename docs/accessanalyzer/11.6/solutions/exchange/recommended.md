---
title: "Recommended Configurations for the Exchange Solution"
description: "Recommended Configurations for the Exchange Solution"
sidebar_position: 10
---

# Recommended Configurations for the Exchange Solution

Each job group within the Exchange Solution has its own Recommended Configurations topic. See the
relevant topic for specific information on job group settings and recommended schedule frequency.

- [Recommended Configurations for the 1. HUB Metrics Job Group](/docs/accessanalyzer/11.6/solutions/exchange/hubmetrics/recommended.md)
- [Recommended Configurations for the 2. CAS Metrics Job Group](/docs/accessanalyzer/11.6/solutions/exchange/casmetrics/recommended.md)
- [Recommended Configurations for the 3. Databases Job Group](/docs/accessanalyzer/11.6/solutions/exchange/databases/recommended.md)
- [Recommended Configurations for the 4. Mailboxes Job Group](/docs/accessanalyzer/11.6/solutions/exchange/mailboxes/recommended.md)
- [Recommended Configurations for the 5. Public Folders Job Group](/docs/accessanalyzer/11.6/solutions/exchange/publicfolders/recommended.md)
- [Recommended Configurations for the 6. Distribution Lists Job Group](/docs/accessanalyzer/11.6/solutions/exchange/distributionlists/recommended.md)
- [Recommended Configurations for the 7. Sensitive Data Job Group](/docs/accessanalyzer/11.6/solutions/exchange/sensitivedata/recommended.md)
- [Recommended Configurations for the 8. Exchange Online Job Group](/docs/accessanalyzer/11.6/solutions/exchange/online/recommended.md)

## ExchangePS Data Collector & Client Access Server

A Client Access Server (CAS) name is required for the ExchangePS Data Collector. When targeting
Exchange 2013 or 2016, it is possible for the **Settings** > **Exchange** node to have been
configured with a web address instead of a CAS.

- Exchange 2010 Servers – Uses the CAS server set in the global configuration (**Settings** >
  **Exchange** node)
- Exchange 2013 & 2016 – May require a CAS name set in the ExchangePS Data Collector configuration:

    - If the **Settings** > **Exchange** node was configured for **MAPI over HTTP**, then a CAS
      server name was supplied and that is used by the ExchangePS Data Collector
    - If the **Settings** > **Exchange** node was configured for **MAPI over HTTPS**, then the
      global configuration has a web address instead of an actual server. Therefore, each query
      requires the CAS server to be set as the specific server on the Category page.

Follow the steps to supply a CAS name for data collection.

**Step 1 –** Navigate to the job’s **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, click **Query Properties**. The Query Properties window
opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The ExchangePS Data Collector
Wizard opens.

:::warning
Unless otherwise indicated within the job group section, do not make changes to other
wizard pages as they have been pre-configured for the purpose of the job.
:::


![CAS name on ExchangePS Data Collector Wizard Category page](/images/accessanalyzer/11.6/solutions/exchange/exchangepscas.webp)

**Step 4 –** On the Category page, select the **Use specific server** option and enter the CAS name
in the text box. See the
[ExchangePS: Category](/docs/accessanalyzer/11.6/admin/datacollector/exchangeps/category.md) topic
for additional information.

**Step 5 –** Navigate to the Summary page. Click **Finish**.

The job now successfully targets Exchange 2013 and 2016 environments.
