---
title: "EX_Mailbox_SDD Job"
description: "EX_Mailbox_SDD Job"
sidebar_position: 10
---

# EX_Mailbox_SDD Job

The EX_Mailbox_SDD job locates sensitive data found in mailboxes in the Exchange environment.

## Queries for the EX_Mailbox_SDD Job

The EX_Mailbox_SDD job uses the EWSMailbox Data Collector.

![Queries for the EX_Mailbox_SDD Job](/images/accessanalyzer/12.0/solutions/exchange/sensitivedata/collection/mailboxsddquery.webp)

The following query is included in the EX_Mailbox_SDD job:

- Exchange Sensitive Data Discovery – Collects potentially-sensitive data from mailboxes

    - Set to search all mailboxes. It can be scoped.
    - Default sensitive data criteria includes:

        - Birth Records
        - Credit Cards
        - Passwords
        - Tax Forms
        - US SSN

- See the
  [Configure the EWSMailbox Data Collector for the EX_Mailbox_SDD Job](#configure-the-ewsmailbox-data-collector-for-the-ex_mailbox_sdd-job)
  topic for additional information

### Configure the EWSMailbox Data Collector for the EX_Mailbox_SDD Job

The Exchange Sensitive Data Discovery query has been preconfigured to run with the EWSMailbox Data
Collector to scan for sensitive data.

Follow the steps to configure the scope of the EWSMailbox Data Collector:

**Step 1 –** Navigate to the **Exchange** > **7. Sensitive Data** > **0. Collection** >
**EX_Mailbox_SDD** > **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, select the **Exchange Sensitive Data Discovery** query and
click **Query Properties**. The Query Properties window opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The EWS Mailbox Data Collector
Wizard opens.

:::warning
Do not make changes to other wizard pages as they have been pre-configured for the
purpose of this job.
:::


![EWS Mailbox Data Collector Wizard Mailbox scope settings page](/images/accessanalyzer/12.0/solutions/exchange/sensitivedata/collection/mailboxscopesettings.webp)

**Step 4 –** To scope the query for specific mailboxes, navigate to the Scope page. The query is
configured by default to target **All mailboxes**. Change the Mailboxes to be queried to **Select
mailboxes from list**. See the
[EWSMailbox: Scope](/docs/accessanalyzer/12.0/admin/datacollector/ewsmailbox/scope.md) topic for additional
information.

![EWS Mailbox Data Collector Wizard Scope select page](/images/accessanalyzer/12.0/solutions/exchange/sensitivedata/collection/mailboxscopeselect.webp)

**Step 5 –** To retrieve available mailboxes, click **Retrieve** on the Scope Select page. Select
the desired mailboxes and click **Add**. See the
[EWSMailbox: Scope Select](/docs/accessanalyzer/12.0/admin/datacollector/ewsmailbox/scopeselect.md) topic for
additional information.

![EWS Mailbox Data Collector Wizard SDD Options page](/images/accessanalyzer/12.0/admin/datacollector/ewsmailbox/sddoptions.webp)

**Step 6 –** To enable storage of discovered sensitive data, navigate to the SDD Options page.
Sensitive data matches can be limited to reduce storage space. See the
[EWSMailbox: SDD Options](/docs/accessanalyzer/12.0/admin/datacollector/ewsmailbox/sddoptions.md) topic for
additional information.

:::note
By default, discovered sensitive data strings are not stored in the Access Analyzer
database.
:::


![EWS Mailbox Data Collector Wizard Criteria page](/images/accessanalyzer/12.0/admin/datacollector/ewsmailbox/criteria.webp)

**Step 7 –** To modify criteria, navigate to the Criteria page. Add or remove criteria as desired.
See the [EWSMailbox: Criteria](/docs/accessanalyzer/12.0/admin/datacollector/ewsmailbox/criteria.md) topic for
additional information.

- (Optional) To create custom criteria, see the
  [Sensitive Data Criteria Editor](/docs/accessanalyzer/12.0/sensitivedatadiscovery/criteriaeditor/overview.md)
  topic for additional information

![EWS Mailbox Data Collector Wizard Filter page](/images/accessanalyzer/12.0/solutions/exchange/sensitivedata/collection/mailboxfiltersettings.webp)

**Step 8 –** To filter the scan to specific mailbox folders, navigate to the Filter page. Include or
exclude folders and attachments as desired. See the
[EWSMailbox Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/ewsmailbox/overview.md) topic for
additional information.

- To modify the threshold for message size, set the **Limit message size to** value as desired. The
  default is 2000 KB.
- To modify the threshold for large attachment size, set the **Limit attachment size to** value as
  desired. The default is 2000 KB.

![EWS Mailbox Data Collector Wizard Results page](/images/accessanalyzer/12.0/solutions/exchange/sensitivedata/collection/mailboxresults.webp)

**Step 9 –** Navigate to the Results page to select which properties are gathered based on category.
See the [EWSMailbox: Results](/docs/accessanalyzer/12.0/admin/datacollector/ewsmailbox/results.md) topic for
additional information.

:::note
By default, all categories are selected under sensitive data.
:::


**Step 10 –** Navigate to the Summary page, click **Finish** to save any setting modifications or
click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window

The job now applies the modification to future job executions.

## Analysis Tasks for the EX_Mailbox_SDD Job

View the analysis task by navigating to the **Exchange** > **7.Sensitive Data** >
**EX_Mailbox_SDD** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the EX_Mailbox_SDD Job](/images/accessanalyzer/12.0/solutions/exchange/sensitivedata/collection/mailboxsddanalysis.webp)

The following analysis task is selected by default:

- AIC Import - Exchange SSD – Imports Exchange sensitive data to the Access Information Center
