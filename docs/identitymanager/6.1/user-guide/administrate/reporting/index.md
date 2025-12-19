---
title: "Generate Reports"
description: "Generate Reports"
sidebar_position: 10
---

# Generate Reports

How to use Usercube's reporting modules to produce IGA reports for auditing and governance purposes.

## Overview

Reporting features help users produce reports for auditing and performance evaluation. The aim is to
be aware of the whole assignment landscape, display it for analysis, and act upon it if needed.
Governance also helps produce audit-ready reports. You can start to set up governance features
relatively early in your Usercube journey and measure your progress from the very start.

A few reporting tools are already available in Usercube, used in other parts of your IGA project,
for example:

- the list of entitlements for a given user in their **View Permissions** tab;

    ![View Permissions Tab](/images/identitymanager/6.1/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

- the list of all requests that you are authorized to see in **Workflow Overview** accessible from
  the home page in the **Administration** section;

    ![Home - Workflow Overview](/images/identitymanager/6.1/user-guide/administrate/reporting/home_workflowoverview_v602.webp)

- the
  [list of orphaned accounts](/docs/identitymanager/6.1/user-guide/administrate/orphan-unused-account-review/index.md).

    ![Orphaned Account List](/images/identitymanager/6.1/user-guide/administrate/reporting/orphan_entitytype_v523.webp)

Usercube puts users in control of their reporting. Rich features help produce customizable reports
that can be used to check the assignment policy results, or gather information for an audit.

Usercube provides several different levels of reporting according to your needs and technical tools.
You can:

- [download predefined reports](#download-predefined-reports) for simple needs;
- add new reports to the predefined ones through XML configuration, for recurring needs that aren't
  met by available reports (this requires XML configuration knowledge);
- [create customized reports](#create-customized-reports) with the Query module and its universes
  configured beforehand, to meet specific needs (this requires certain technical knowledge);
- create customized graphic reports with PowerBI, to meet specific needs (this requires certain
  technical knowledge).

## Participants and Artifacts

This operation can be performed by any user interested in producing IGA reports.

| Input              | Output  |
| ------------------ | ------- |
| Entries (required) | Reports |

## Download Predefined Reports

Usercube provides a selection of predefined reports available in the solution. They represent the
most common use cases.

The accessibility of these predefined reports was configured during
[profile configuration](/docs/identitymanager/6.1/user-guide/set-up/user-profile-configuration/index.md).

Download predefined reports by proceeding as follows:

1. Click on **Reports** on the left of the home page to access the list of predefined reports.

    ![Home Page - Reports](/images/identitymanager/6.1/user-guide/administrate/reporting/home_reports_v602.webp)

    ![Reports](/images/identitymanager/6.1/user-guide/administrate/reporting/reporting_predefinedreports_v602.webp)

2. Choose the appropriate report and click on **Download** to get an Excel report. The
   downward-pointing arrow provides additional report formats.

## Add New Reports to the List

When facing frequent reporting requirements outside the scope of predefined reports, new reports can
be configured with XML via
[`ReportQuery`](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/reporting/reportquery/index.md)
and
[specific query grammar](/docs/identitymanager/6.1/integration-guide/api/squery/index.md).

## Create Customized Reports

When facing a one-time need for producing specific reports, Usercube's Query module helps display
attributes chosen from the data which is already
[synchronized](/docs/identitymanager/6.1/user-guide/set-up/synchronization/index.md) and
[classified](/docs/identitymanager/6.1/user-guide/set-up/categorization/classification/index.md).
This module offers the possibility to customize reports and download them.

The Query module is based on predefined
[universes](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/business-intelligence/universe/index.md)
that can be adjusted later on in
[XML configuration](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/index.md),
just like the list of available query models.

Create a custom report by proceeding as follows:

1. Click on **Query** in the **Administration** section on the home page.

    ![Home Page - Query](/images/identitymanager/6.1/user-guide/administrate/reporting/home_query_v602.webp)

    ![Query Page](/images/identitymanager/6.1/user-guide/administrate/reporting/reporting_querypage_v602.webp)

2. Choose a query model from among the list.
3. Click on **Fields to Display** and select the appropriate fields from among the database
   [universe](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/business-intelligence/universe/index.md)
   and click on **Confirm**.

    ![Fields to Display](/images/identitymanager/6.1/user-guide/administrate/reporting/reporting_fieldstodisplay_v522.webp)

    In cases where Usercube doesn't display correctly the information you need, you must try to
    understand the
    [entity instances](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/business-intelligence/universe/index.md)
    and
    [association instances](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/business-intelligence/universe/index.md)
    that constitute the
    [universe](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/business-intelligence/universe/index.md)
    that you are working with. Perhaps the fields that you chose cannot be properly correlated.

4. Click on **Filters**, write the appropriate condition and click on **Confirm**.

    ![Filters](/images/identitymanager/6.1/user-guide/administrate/reporting/reporting_filters_v602.webp)

    For example, a report could list user names and identifiers � but only those with their
    `Contract end date` less than today's date � so that we will see all the workers who have left
    the organization and are still stored in Usercube.

5. Once all report settings are defined, click on **Download** to get a CSV report.

## Create Customized Graphic Reports with Power BI

When facing a periodic need for producing specific reports, especially when a visual presentation is
required, Usercube offers the possibility to connect to the
[Power BI](https://powerbi.microsoft.com/en-us/what-is-power-bi) application. This application will
allow you to create customized reports with a vast range of display options (such as graphs, charts,
matrixes, etc.) using Usercube's universes.

[See how to analyze Usercube's data with Power BI](/docs/identitymanager/6.1/integration-guide/governance/reporting/how-tos/connect-powerbi/index.md).
