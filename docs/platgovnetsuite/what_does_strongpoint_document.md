---
title: "What is Documented?"
description: "What is Documented?"
sidebar_position: 14
---

# What is Documented?

There are four outcomes for customizations Platform Governance for NetSuite finds in the system:

- [Captured and Documented](#captured-and-documented-in-the-customization-record)
- [Partially Documented](#partially-documented-in-the-customization-record)
- [Not Documented](#not-documented-in-the-customization-record)
- [Agent Tracking](#agent-tracking)

## Captured and Documented in the Customization Record

The following critical metadata related to your account customizations is captured:

- Accounting/Setting Lists
- Custom Records and Custom Record Fields
- Custom Fields (for example, Body, Item, Entity, Column, Item Number and Other Field)
- Mass Updates (except for mass update schedule information)
- Saved Searches (fields, criteria, joins with scripts/workflows and formulas)
- Unlocked and Unencrypted Script Records (for example, Client, User Event, Scheduled, Suitelets and
  Workflow Action)
- Locked Script Records (however related dependencies can not be established)
- NetSuite Preferences (Accounting Preferences, Company Preferences etc.)
- Integrations
- Forms (Entry and Transaction)
- Script Deployments
- Script Library
- SuiteCommerce Advanced folder files and all custom SS, SSP and JS files
- User Permission Overrides
- User Roles
- User Role Assignments
- Workflows

## Partially Documented in the Customization Record

The following NetSuite objects are partially documented. They are not fully documented for one or
more of the following reasons:

- Record types do not have a NetSuite API that exposes the full customization data
- Records are standard objects which cannot be changed

| Object                | Category         | Description                                                                                                                                                                              | Change Impact                                                                           | Change Tracking                                                                                                                                                                                                                                                                                                                       |
| --------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Custom Report         | Other            | Custom Reports are documented including the report name, type and the date the report was last modified.                                                                                 | Changing these can impact what data is shown on the report.                             | Example: Change to Report Layout - detects the Date Last Modified in the Analytics Audit Log was changed and creates a change log. - Change Log indicates when the Report was updated. - You need to look at the Custom Report itself: <br />1. Open **Customize the Custom Report** <br />2. Click **More Options** <br />3. Open **Audit Trail** tab. |
| PDF Template          | Other            | PDF Templates are document including the template name, type and the date the template was last modified.                                                                                | Changing these can impact email templates and other areas where PDF templates are used. | TBD                                                                                                                                                                                                                                                                                                                                   |
| Standard Column Field | Standard Objects | Customization records are created only for Standard objects that are in use by scripted objects such as Workflows or Scripts. These are tracked to identify the automation dependencies. | No risk since there is no way to change standard objects in NetSuite.                   | If a standard object is added to or removed from a customization, a change log will be created for that customization.                                                                                                                                                                                                                |
| Standard Report       | Standard Objects | Customization records are created only for Standard objects that are in use by scripted objects such as Workflows or Scripts. These are tracked to identify the automation dependencies. | No risk since there is no way to change standard objects in NetSuite.                   | If a standard object is added to or removed from a customization, a change log will be created for that customization.                                                                                                                                                                                                                |
| Standard Sub List     | Standard Objects | Customization records are created only for Standard objects that are in use by scripted objects such as Workflows or Scripts. These are tracked to identify the automation dependencies. | No risk since there is no way to change standard objects in NetSuite.                   | If a standard object is added to or removed from a customization, a change log will be created for that customization.                                                                                                                                                                                                                |

## Not Documented in the Customization Record

These record types do not have a NetSuite API to enable Platform Governance for NetSuite to capture
customization data.

| Object                 | Category                    | Description                                                                                                                                                                                  | Change Impact                                                               |
| ---------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Custom Sub List        | Other                       | This is the sublist that is displayed on the form.                                                                                                                                           | Changing this can change what appears on a form.                            |
| HTML File              | Web Related                 | Files that are part of the web site if the customer is using the NetSuite eCommerce modules, SiteBuilder or SuiteCommerce Advanced.                                                          | Changing these can change the pages of the website.                         |
| Integration            | External System/Integration | Information relating to integrations to external systems are not documented.                                                                                                                 | Changes to objects in NetSuite could impact functionality in other systems. |
| Item/Category Template | Web Related                 | Applies to companies that use SiteBuilder.                                                                                                                                                   | Changing these can change the functionality of the website.                 |
| JavaScript File        | Web Related                 | These are JavaScript files in the file cabinet that are often used for automation on websites. Applies to customers using NetSuite eCommerce modules, SiteBuilder or SuiteCommerce Advanced. | Changing these can change the functionality of the website.                 |
| Layout                 | Web Related                 | Applies to companies that use SiteBuilder                                                                                                                                                    | Changing these can change the functionality of the website.                 |
| Scorecard Report       | Other                       | Applies to dashboard objects.                                                                                                                                                                | Changing this will change what is displayed on the dashboard.               |
| Scriptlet              | Deprecated                  | These object types have been deprecated by NetSuite and are no longer in use.                                                                                                                | If still in use, changes to these objects can impact system functionality.  |
| Web Tag                | Web Related                 | Applies to companies that use SiteBuilder                                                                                                                                                    | Changing these can change the functionality of the website.                 |
| Web Site               | Web Related                 | The metadata that defines the web site for customers using the NetSuite eCommerce modules, SiteBuilder or SuiteCommerce Advanced.                                                            | Changing this can impact website functionality.                             |

## Agent Tracking

Agent is part of the Enterprise Compliance package. Agent provides controls for financial changes
that do not represent configuration changes, such as changes to item account settings and violations
of standard policies. You can monitor, manage, remedy and block critical changes to financially
relevant fields, records and settings.

Creation or modification of:

- Accounts
- Departments
- Items, item accounts and BOM
- Classes
- Locations
- Subsidiaries
- Vendors
- Tax Codes and Groups
- Recognition and Amortization Templates
- Landed Cost Settings
- many other key records and critical settings

Critical Transaction Events, including:

- Administrator created transactions
- Self-approved transactions (such as estimates, journal entries, vendor payments)
- Transaction modifications out of period
- Incomplete or improperly completed records
- Any other searchable transaction event
