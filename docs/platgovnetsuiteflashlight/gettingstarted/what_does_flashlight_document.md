---
title: "What Does Flashlight Document?"
description: "What Does Flashlight Document?"
sidebar_position: 50
---

# What Does Flashlight Document?

There are three outcomes for customizations Flashlight finds in the system:

- Captured and Documented
- Partially Documented
- Not Documented

## Captured and Documented in the Customization Record

Flashlight captures the following critical metadata related to your account customizations:

- Custom Records and Custom Record Fields
- Custom Fields (for example, Body, Item, Entity, Column, Item Number and Other Field)
- Mass Updates (except for mass update schedule information)
- Saved Searches (fields, criteria, joins with scripts/workflows and formulas)
- Unlocked and Unencrypted Script Records (for example, Client, User Event, Scheduled, Suitelets and
  Workflow Action)
- Locked Script Records (however related dependencies cannot be established)
- Forms (Entry and Transaction)
- Script Deployments
- Script Library
- User Roles
- Workflows

## Partially Documented in the Customization Record

The following NetSuite objects are partially documented by Flashlight. They are not fully documented
for one or more of the following reasons:

- Record types do not have a NetSuite API that exposes the full customization data to Flashlight's
  spider
- Records are standard objects which cannot be changed

| Object                | Category         | Description                                                                                                                                                                              |
| --------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Custom Report         | Other            | Custom Reports are documented including the report name, type and the date the report was last modified. Changes to the report itself cannot be documented by Flashlight at this time.   |
| Standard Column Field | Standard Objects | Customization records are created only for Standard objects that are in use by scripted objects such as Workflows or Scripts. These are tracked to identify the automation dependencies. |
| Standard Sublist      | Standard Objects | Customization records are created only for Standard objects that are in use by scripted objects such as Workflows or Scripts. These are tracked to identify the automation dependencies. |

## Not Documented in the Customization Record

| Object                 | Category                    | Description                                                                                                                                                                                  |
| ---------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Custom Sublist         | Other                       | This is the sublist that is displayed on the form.                                                                                                                                           |
| HTML File              | Web Related                 | Files that are part of the web site if the customer is using the Netsuite eCommerce modules, SiteBuilder or SuiteCommerce Advanced.                                                          |
| Integration            | External System/Integration | Information relating to integrations to external systems are not documented.                                                                                                                 |
| Item/Category Template | Web Related                 | Applies to companies that use SiteBuilder.                                                                                                                                                   |
| JavaScript File        | Web Related                 | These are JavaScript files in the file cabinet that are often used for automation on websites. Applies to customers using Netsuite eCommerce modules, SiteBuilder or SuiteCommerce Advanced. |
| Layout                 | Web Related                 | Applies to companies that use SiteBuilder                                                                                                                                                    |
| Scorecard Report       | Other                       | Applies to dashboard objects.                                                                                                                                                                |
| Scriptlet              | Deprecated                  | These object types have been deprecated by NetSuite and are no longer in use.                                                                                                                |
| Web Tag                | Web Related                 | Applies to companies that use SiteBuilder                                                                                                                                                    |
| Web Site               | Web Related                 | The metadata that defines the web site for customers using the Netsuite eCommerce modules, SiteBuilder or SuiteCommerce Advanced.                                                            |
