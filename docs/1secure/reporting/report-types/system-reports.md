---
title: "System Reports In Netwrix 1Secure Guide"
sidebar_label: "System Reports"
description: "Learn how to configure and manage Netwrix 1Secure for hybrid security. This guide covers setup, monitoring, and analytics to help secure cloud and on prem data"
---

# System Reports

A System report named Billable Users is automatically generated and provides insights into your
1Secure tenant.

## Review Billable Users Report

Follow the steps to review the Billable Users report.

**Step 1 –** Navigate to the **Reports** > **System** tab.

![system](/img/product_docs/1secure/admin/searchandreports/system.webp)

**Step 2 –** Select the **Billable Users** report in the left pane to view it.

This report lists the number of Active Directory and Microsoft Entra ID users contributing to the
billing counter.

Filter a Report

You can filter the data displayed in a report. Select a filter, operator, and value from the Filter,
Operator, and Value drop-down menus, then click **Search**.

You can select more than one filter.

For options displayed in the Operator drop-down menu, see the
[Filter Operators ](/docs/1secure/reporting/filtering-and-search/filter-operators.md)topic.

## Filter Descriptions

This table provides a list of filters with their description.

| Filter      | Description                                                                                                                                                                                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Account     | Filters the report based on an account. To apply this filter, select **Account** from the **Filter** drop-down menu and specify an account name in the **Value** field.                                                                                                                                |
| Source Type | Filters the report based on a source type, that represents a platform where :a user currently exists: - AD User - Windows Local User - Microsoft Entra ID user To apply this filter, select **Source Type** from the **Filter** drop-down menu and choose an option from the **Value** drop-down menu. |
| User        | Filters the report based on the name of a user. To apply this filter, select **User** from the **Filter** drop-down menu and specify a user name in the **Value** field.                                                                                                                               |
