---
title: "Dashboard"
description: "Dashboard"
sidebar_position: 60
---

# Dashboard

Flashlight comes with a comprehensive dashboard with everything to manage your account at your
fingertips. The dashboard provides key tools and reports to enable you to take full control of your
account and action problematic areas as required.

These are the Dashboard portlets:

- Spider Status
- Reminders
- Resources
- Chart
- Key Tools
- ERD Generator
- Last Spider Run Summary
- Search Form

## Spider Status

Displays the current status of the Spider (Not Started, In Progress, Completed) and the number of
days since the spider was last run. It is recommended to run the Spider every week so your account
documentation is up-to-date.

![Spider Status](/images/platgovnetsuiteflashlight/getting_started/spider_status.webp)

## Reminders

Reminders are key system warnings and metrics that Flashlight has detected in your account over the
last week since the Spider was run last run. You can click on each metric to drill-into the details
and take corrective action where needed.

![Reminders](/images/platgovnetsuiteflashlight/getting_started/reminders_800x88.webp)

The reminders have colors associated with them depending on the nature of the reminder. Reminders
highlighted in green represent new and modified customizations in your account since the spider was
last run.

- **New customizations**: Summarizes the customizations that were documented since the last Spider
  run. Many customizations can be created on a daily basis, this tool helps keep track of what's new
  on your account.
- **Customizations Updated**: Summarizes the customizations that have been modified recently. As you
  tailor your account to meet the business needs of your organization it is very common to generate
  hundreds of changes to Fields, Automations or Records. This tool helps keep track of the changes
  to your customizations.

### Reminders with Red Highlight

Reminders highlighted in red represent a potential security or stability problem in the account
which should be reviewed.

- **Deleted Customizations this Week**: Summarizes Customizations that have been recently deleted
  from the system. This enables you to easily spot undesired removals and resolve them quickly.
- **Script Errors from Yesterday**: Summarizes script errors that occurred in the past day, enabling
  you to take immediate action to resolve any potential operational risks associated with these
  errors.
- **New Critical API Risks**: Summarizes the Scripts and Workflows that can potentially risk sending
  your organization's data to an external system or entity. This includes Scripts and Workflows that
  use the email API, HTTP requests or REST connections.
- **Critical Role Changes**: Summarizes changes to NetSuite Standard roles.
- **Record Deletion Risk Role Changes**: Summarizes changes to NetSuite roles that allow employees
  to delete company data.
- **Undelivered Email Errors**: Summarizes Script errors from the NetSuite logs associated with
  email failures.
- **New Employee Permission Changes**: Summarizes changes to Employee permissions, ensuring you have
  full visibility into who has granted access to the account.
- **Critical Permission Changes**: Summarizes changes to permissions that allow employees to modify
  Business Processes, Workflows, and Scripts. Critical permissions are defined as the ability to
  create, modify or delete customizations and critical configuration within the account such as the
  listed before.
- **Deleted Records**: Summarizes all records that have been deleted from the system.

### Reminders with Yellow Highlight

Reminders highlighted in yellow represent areas of the account that do not adhere to NetSuite best
practices. It is recommended to regularly review these reports and take corrective action so that
your customizations are aligned with NetSuite best practices.

- **New Public Saved Searches used in Scripts**: Summarizes Saved Searches that are actively used by
  one or more Scripts. This tools help you understand new searches that can be seen and potentially
  edited by anyone in the organization and shouldn’t be modified without proper review from IT.
- **New Customizations with Poor Script IDs**: Summarizes recently created customizations with
  default Script IDs. These are customizations that do not follow NetSuite best practices and can
  impact the maintainability of the customizations in your account. This can be a problem when you
  move dependent customizations (for example, a field referenced by script) between your
  environments because referenced Script IDs may not match across the accounts.
- **New Customizations with Missing Descriptions**: Summarizes customizations that do not have any
  associated Description text
- **New Customizations with Missing Help**: Summarizes customizations that do not have any
  associated Help text.
- **New Customizations with Missing Active Owners**: Summarizes customizations that do not have
  active employees as the Owner. This happens when an employee departs from your organization. It is
  a standard best practice to reassign an active employee to these records.

### Reminders with No Highlight

Informational reminders do not have any highlighted color. Flashlight provides these reminders for
added visibility into your account.

- **​New Scripts**: Summarizes new Scripts that have been created. This is a powerful tool to use
  when there are script conflicts, as it helps your developers understand newly introduced scripts
  that are potentially interfering with existing scripts.
- **New Customizations used by Workflows**: Summarizes new customizations that are actively used by
  a one or more Workflows.
- **New Employee Saved Searches**: Summarizes new Saved Searches that query Employee records
- **New Employees with Standard Operational Roles**: When new users are onboarded into NetSuite they
  can be automatically assigned default role permissions. This reminder displays the number of
  Employees with standard operational roles.
- **New Employees Logging In From New IP Address**: Identifies users that have logged into the
  account from a different IP address. This mitigates the risk of your account being unintentionally
  shared with others or hacked.
- **New Workflows**: Summarizes new Workflows that have been created in your account. It is very
  common to have several Workflows associated with a single record. This is a powerful tool to use
  when there are workflow conflicts or bugs in your system due to newly introduced Workflows. This
  helps developers understand the newly introduced workflows that are potentially interfering with
  other customizations in the account.
- **New Customizations Used by Scripts**: Summarizes new critical customizations that are used by
  automations, such as getting/setting field values, creating/modifying records, and reading
  searches. All new scripted Records are displayed in this report.
- **New Public Saved Searches**: Summarizes new Saved Searches that are publicly available in your
  account
- **New Transactions Saved Searches**: Summarizes new Saved Searches that query the Transactions
  (Sales, Purchases, General Ledger).
- **New Customer Saved Searches**: Shows the number of Saved Searches created in the account in the
  past week.
- **New Employees with Unused Logins**: Summarizes the number of Employees in the account that have
  access but have not logged in.

:::note
If a reminder from the list does not have any detected records, it does not appear on the
dashboard.
:::

## Resources

Links to key resources to help you learn to use Flashlight.

![Resources](/images/platgovnetsuiteflashlight/getting_started/resources.webp)

## Chart

Visually displays insights into your customizations. There are 3 visualizations: new customizations
by type, new searches and reports by type, and customizations updated by type. Hover over the
segments in the chart for additional details.

### New Customizations by Type

This chart summarizes the newly created customizations by Object Type. Hover over each segment in
the chart to understand how many customizations have been created for the selected Object Type. This
does not include customizations from Saved Searches and Reports. Click on a segment in the chart to
drill into the details and see the list of specific customizations for the selected Object Type.
This allows you to easily understand what customizations have been created over a given time period.

![New Customizations by Type](/images/platgovnetsuiteflashlight/getting_started/new_customizations_by_type.webp)

### New Searches and Reports by Type

This chart summarizes the newly created Saved Searches and Reports by Object Type. Hover over each
segment in the chart to understand how many Saved Searches and Reports have been created for the
selected Object Type. Click on a segment in the chart to drill into the details and see the list of
specific customizations for the selected Object Type. This allows you to easily understand what
Saved Searches and Reports have been created over a given time period.

![New Searches and Reports by Type](/images/platgovnetsuiteflashlight/getting_started/new_searches_by_type.webp)

### Customizations Updated by Type

This chart summarizes the newly created customizations by Object Type. Hover over each segment in
the chart to understand how many customizations have been created for the selected Object Type. This
does not include customizations from Saved Searches and Reports. Click on a segment in the chart to
drill into the details and see the list of specific customizations for the selected Object Type.
This allows you to easily understand what customizations have been created over a given time period.

![Customizations Updated by Type](/images/platgovnetsuiteflashlight/getting_started/customizations_updated_by_type.webp)

## Key Tools

Links to useful Flashlight tools to give you more value out of your documentation.

![Key Tools](/images/platgovnetsuiteflashlight/getting_started/key_tools.webp)

- **ERD**: Explore your customizations with Flashlight’s visual ERD and understand how
  customizations relate to each other.
- **Customization Impact Search**: Understand how your customizations are impacted by changes to
  other customizations.
- **Standard Field Impact Search**: Understand how your customizations are impacted by changes to
  standard NetSuite fields.
- **SQL Library**: Locate formulas used across the Saved Searches in your account.

## ERD Generator

A shortcut to open the ERD for the entered **Name** or **ScriptID**.

## Last Spider Run Summary

Displays all the key data about your customizations for full visibility and control over your
account. The metrics are organized into two sections: **Documentation Summary** and **Users
Summary**.

![summary_800x207](/images/platgovnetsuiteflashlight/getting_started/summary_800x207.webp)

### Documentation Summary

The Documentation Summary section includes all the metrics related to your account documentation:

**Customizations**: Displays the total number of customizations that exist in the account

**Deleted Customizations**: Displays the total number of deleted customizations from the account

**List dependencies**: Displays the total number of Lists that are used by other customizations in
the account

**Search Dependencies**: Displays the total number of Saved Searches used by other customizations in
the account

**Sourcing Dependencies**: Displays the total number of data sources used by other customizations in
the account.

**Critical API risks**: Displays the total number of Scripts and Workflows that can potentially risk
sending your organization's data to an external system or entity. This includes Scripts and Workflow
that use the email API, HTTP requests or REST connections.

**Customizations with Poor Script IDs**: Displays the total number of customizations with default
Script IDs. These are customizations that do not follow NetSuite best practices and can impact the
maintainability of the customizations in your account. This can also be a problem when you move
dependent customizations (eg. fields referenced by script) between your environments because
referenced Script IDs may not match across the accounts.

**Customizations with Missing Descriptions**: Displays the total number of customizations with no
associated Description text

**Customizations Updated**: Displays the total number of modified customizations. As you tailor your
account to meet the business needs of your organization it is very common to generate hundreds of
changes to Fields, Automations or Records. This tool helps keep track of the changes to your
customizations.

**Total Dependencies**: Displays the total number of customizations used by other customizations in
the account

**Workflow Dependencies**: Displays the total number of Workflows used by other customizations in
the account

**Script dependencies**: Displays the total number of Scripts used by other customizations in the
account

**Form Dependencies**: Displays the total number of Forms used by other customizations in the
account

**Customizations Used by Scripts**: Displays the total number of customizations used by automations,
such as getting/setting field values, creating/modifying records, and reading searches.

**Customizations with Missing Help**: Displays the total number of customizations with no associated
Help text.

**Customizations with Missing Active Owners**: Displays the total number of customizations that do
not have an active employee as the Owner. This happens when an employee departs from your
organization. It is a standard best practice to reassign the underlying record to an active
employee.

### Users Summary

The Users Summary section summarizes key metrics related to your Employees. Flashlight is not just a
solution for Documentation, it also provides key information needed to manage your employee roles
and permissions, thereby enabling you to evaluating security-related risks to your organization. It
contains the following metrics:

**Employees with Standard Operational Roles**: Displays the total number of Employees with standard
operational roles. When new users are onboarded into NetSuite they can be automatically assigned
default role permissions.

**New Employees Logging In From New IP Address**: Identifies users that have logged into the account
from a different IP address. This mitigates the risk of your account being unintentionally shared
with others or hacked.

**Critical Role Changes**: Displays the total number of changes to NetSuite Standard roles.

**Employees with Unused Logins**: Displays the total number of Employees that have access into the
account but they have not logged in.

**Employee Permission Changes**: Displays the total number of changes to Employee permissions,
ensuring you have full visibility into who has granted access to the account.

**Critical Permission Changes**: Displays the total number of changes to permissions that allow
employees to modify Business Processes, Workflows, and Scripts. Critical permissions are defined as
the ability to create, modify or delete customizations and critical configuration within the account
such as the listed before.

## Search Form

A shortcut to the Customization Quick Search. You can search by **Name** or **ScriptID**.
