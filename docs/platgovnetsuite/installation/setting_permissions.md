---
title: "Setting Role Permissions"
description: "Setting Role Permissions"
sidebar_position: 60
---

# Setting Role Permissions

The **Access Type** for Platform Governance for NetSuite Custom **Record Types** is set to **Use
Permission List**. This controls access using Roles, Permission Lists and Strongpoint License
verification to prevent unauthorized users from changing the records. Users with Roles not included
in the Permission List for a record type are denied access.

:::note
Remember to give your [licensed](/docs/platgovnetsuite/installation/license_manager.md) users access to the
[Strongpoint tab](/docs/platgovnetsuite/installation/setting_strongpoint_tab_access.md).
:::

To use Platform Governance for NetSuite with your custom roles, add the record types to the
permission list for each role. The Strongpoint roles have the correct access levels by default.

1. Open **Setup** > **Users/Roles** > **Manage Roles**
2. Edit each custom role your targeted Users use for their tasks.
3. Open the **Permissions** tab.

    ![Setting Permissions for Custom Roles](/images/platgovnetsuite/installing_strongpoint/permissions_tab.webp)

4. Open the **Custom Record** tab and add the Record Types and access levels to your custom roles.

    Adding permissions to a role affects all employees who have the role assigned to them.

    Refer to the lists of Custom Permissions needed for each role: Change Request Approvers, Manage
    ITGC, Manage SoD, User Access Review (UAR) and Manage Internal Audit - View Only.
    The default settings are shown in the Default Custom Record Types and Permission Lists and
    Default SoD Custom Record Types and Permission Lists tables.

5. **Save** the Permissions.

Here are the Custom Permissions needed for each role.

#### Change Request Approvers

> Assign a [User License](/docs/platgovnetsuite/installation/license_manager.md)

#### Process Issue

> No Permission Required

#### Manage ITGC

> [Strongpoint License](/docs/platgovnetsuite/installation/license_manager.md) +
> Account Role: **Edit**
> Change / Approval Policy: **Full**
> Change Log: **Edit**
> Change Request: **Edit**
> Configuration and Stats: **Full**
> Customization: **Full**
> Environment: **Full**
> Environment Compare Log: **Full**
> Licensed User: **Full**
> Process: **Full**
> Spider Log: **View**
> Test Record: **Full**
> Users and License Manager: **Full**
> Validation Log: **View**
> Warning Log: **Full**

#### Manage SoD

:::note
On the Custom Role, you must check **Do Not Restrict Employee Fields**.
:::

> [Strongpoint License](/docs/platgovnetsuite/installation/license_manager.md) +
> Account Role: **Edit**
> Change / Approval Policy: **Edit**
> Change Log: **Edit**
> Change Request: **Edit**
> Configuration and Stats: **Edit**
> Customization: **View**
> Environment: **View**
> Process: **View**
> Test Record: **View**
> Warning Log: **Edit**
>
> Permission: **Full**
> Permission / Permission Level Map: **Full**
> Permission Level: **Full**
> SoD Rule: **Full**
> SoD Rule Processing Status: **Full**

#### User Access Review (UAR)

> [Strongpoint License](/docs/platgovnetsuite/installation/license_manager.md) +
> Audit Trail: **Full**
> Find Transaction: **Full**

#### Manage Internal Audit - **View** Only

> [Strongpoint License](/docs/platgovnetsuite/installation/license_manager.md) +
> Account Role: **View**
> Change / Approval Policy: **View**
> Change Log: **View**
> Change Request: **View**
> Configuration and Stats: **View**
> Customization: **View**
> Environment: **View**
> Environment Compare Log: **View**
> Licensed User: **View**
> Process: **View**
> Spider Log: **View**
> Test Record: **View**
> Users and License Manager: **View**
> Validation Log: **View**
> Warning Log: **View**

**Default Custom Record Types and Permission Lists**

| Strongpoint Record Type   | _Script ID_/Description                                                                                                                                                                                                     | Permission List                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Account Role (3 records)  | _customrecord_flo_account_roles_ User roles used by Environment Compare Tool, Change Request Sync Tool, Lookup Customization to connect to another account.                                                                 | Administrator: **Full** Advanced Change Manager: **Full** Advanced Internal Auditor: **View** Change Manager: **Full** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Edit** Strongpoint SoD Manager: **Edit**                                                                                                                                                     |
| Change/Approval Policy    | _customrecord_flo_policy_ Defines the Level of change management required for a given change, Level of approval required, and Approvers.                                                                                    | Administrator: **Full** Advanced Change Manager: **View** Advanced Internal Auditor: **View** Change Manager: **View** Strongpoint Developer Role: **View** Strongpoint SoD Manager: **Edit** Strongpoint UAR Admin: **View** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View**                                                 |
| Change Log                | _customrecord_flo_change_log_ Tracks changes made to Customizations.                                                                                                                                                        | Administrator: **Edit** Advanced Change Manager: **Edit** Advanced Internal Auditor: **View** Change Manager: **Edit** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Edit** Strongpoint SoD Manager: **Edit** Strongpoint UAR Admin: **Edit** Strongpoint UAR Owner: **Create** Strongpoint UAR Additional Reviewer: **Create** Strongpoint UAR Auditor: **Edit** |
| Change Request            | _customrecord_flo_change_request_ Used to seek approval for any changes on Customizations, Change Policy, and SoD changes.                                                                                                  | Administrator: **Full** Advanced Change Manager: **Full** Advanced Internal Auditor: **View** Change Manager: **Full** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Edit** Strongpoint SoD Manager: **Edit**Strongpoint UAR Admin: **Edit** Strongpoint UAR Owner: **Edit** Strongpoint UAR Additional Reviewer: **Edit** Strongpoint UAR Auditor: **View**      |
| Configuration and Stats   | _customrecord_flo_spider_configuration_ Strongpoint Installation Settings report provides a comprehensive and live view of the Strongpoint data in the account.                                                             | Administrator: **Full** Advanced Change Manager: **Full** Advanced Internal Auditor: **Edit** Change Manager: **Full** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Full** Strongpoint SoD Manager: **Edit**Strongpoint UAR Admin: **Edit** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View**      |
| Customization             | _customrecord_flo_customization_ The documentation about each customization. Records are automatically built and maintained by the Strongpoint Spiders, enabling you to search customizations and attach them to processes. | Administrator: **Full** Advanced Change Manager: **Full** Advanced Internal Auditor: **View** Change Manager: **Full** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Full** Strongpoint SoD Manager: **View**Strongpoint UAR Admin: **View** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View**      |
| Data Validation Report    | _customrecord_flo_data_validation_ Stores the details on a new data validation report. Data validation checks the searches used to ensure all data has been properly documented.                                            | Administrator: **Full**                                                                                                                                                                                                                                                                                                                                                                       |
| Environment               | _customrecord_flo_environment_ Stores your NetSuite accounts for use by the Environment Compare Tool, Change Request Sync Tool, and Lookup Customization                                                                    | Administrator: **Full** Advanced Change Manager: **Full** Advanced Internal Auditor: **View** Change Manager: **Full** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Full** Strongpoint SoD Manager: **View**                                                                                                                                                     |
| Environment Compare Log   | _customrecord_flo_env_compare_log_ Results of Environment Compare Tool.                                                                                                                                                     | Administrator: **Full** Advanced Change Manager: **Full** Advanced Internal Auditor: **View** Change Manager: **Full** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Full**                                                                                                                                                                                       |
| Licensed User             | _customrecord_flo_license_user_ Users provisioned with a Strongpoint License.                                                                                                                                               | Administrator: **Full** Advanced Change Manager: **View** Advanced Internal Auditor: **View** Change Manager: **View** Strongpoint Developer Role: **Full** Strongpoint UAR Admin: **Edit** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View**                                                                                   |
| Notification Tracker      | _customrecord_flo_notification_tracker_ Links all notifications sent to search owners, users, and, rule owners before and after the automatic search cleanup is executed. Screen reader support enabled.                    | Administrator: **Full**                                                                                                                                                                                                                                                                                                                                                                       |
| Process                   | _customrecord_flo_process_ Process tracking record.                                                                                                                                                                         | Administrator: **Full** Advanced Change Manager: **Full** Advanced Internal Auditor: **View** Change Manager: **Full** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Full** Strongpoint SoD Manager: **View**Strongpoint UAR Admin: **View** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View**      |
| Process Issue             | _customrecord_process_issue_ Optional ticketing system.                                                                                                                                                                     | No permission required                                                                                                                                                                                                                                                                                                                                                                        |
| Review                    | _customrecord_flo_review_report_ Contains all the details of a UAR Review.                                                                                                                                                  | Strongpoint UAR Admin: **Full** Strongpoint UAR Owner: **Edit** Strongpoint UAR Additional Reviewer: **Edit** Strongpoint UAR Auditor: **View**                                                                                                                                                                                                                                               |
| Review Group              | _customrecord_flo_uar_review_group_ Contains the details for a set of UAR reviews.                                                                                                                                          | Strongpoint UAR Admin: **Full** Strongpoint UAR Owner: **Edit** Strongpoint UAR Additional Reviewer: **Edit** Strongpoint UAR Auditor: **View**                                                                                                                                                                                                                                               |
| Search Clean Up Job       | _customrecord_flo_cleanup_request_ Records the status and results of the automated search clean up.                                                                                                                         | Administrator: **Full**                                                                                                                                                                                                                                                                                                                                                                       |
| Search Clean Up Rule      | _customrecord_flo_cleanup_rule_record_ Created by the administrator to locate Saved Searches matching the rule criteria.                                                                                                    | Administrator: **Full**                                                                                                                                                                                                                                                                                                                                                                       |
| Spider Log (49 Records)   | _customrecord_flo_spider_log_ List of Spider Count vs Documented Count per Customization Type. Data found in Spider Status tab of the Installation Settings.                                                                | Administrator: **Full** Advanced Change Manager: **View** Advanced Internal Auditor: **View** Change Manager: **View** Strongpoint Developer Role: **View**                                                                                                                                                                                                                                   |
| Test Record               | _customrecord_flo_test_report_ Tracks tests within the Strongpoint Documentation System.                                                                                                                                    | Administrator: **Full** Advanced Change Manager: **Full** Advanced Internal Auditor: **View** Change Manager: **Full** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Full** Strongpoint SoD Manager: **View**Strongpoint UAR Admin: **View** Strongpoint UAR Auditor: **View**                                                                                    |
| UAR Notification Data     | _customrecord_flo_uar_notification_data_ List of users to receive notifications.                                                                                                                                            | Strongpoint UAR Admin: **Full** Strongpoint UAR Owner: **Create** Strongpoint UAR Additional Reviewer: **Create** Strongpoint UAR Auditor: **View**                                                                                                                                                                                                                                           |
| UAR Notifications         | _customrecord_flo_uar_notifications_ Notifications you see in the UAR Dashboard.                                                                                                                                            | Strongpoint UAR Admin: **Full** Strongpoint UAR Owner: **Create** Strongpoint UAR Additional Reviewer: **Create** Strongpoint UAR Auditor: **View**                                                                                                                                                                                                                                           |
| UAR Owner Notes           | _customrecordflo_uar_owner_notes_ Changes made by an UAR administrator to the Owner List page.                                                                                                                              | Strongpoint UAR Admin: **Full** Strongpoint UAR Owner: **Create** Strongpoint UAR Additional Reviewer: **Create** Strongpoint UAR Auditor: **View**                                                                                                                                                                                                                                           |
| UAR Provisioning Review   | _customrecord_flo_uar_provisioning_review_ Details of Membership Reviews for provisioning/deprovisioning                                                                                                                    | Strongpoint UAR Admin: **Full** Strongpoint UAR Owner: **Create** Strongpoint UAR Additional Reviewer: **Create** Strongpoint UAR Auditor: **View**                                                                                                                                                                                                                                           |
| UAR Review Notes          | _customrecord_flo_uar_perm_review_note_ Changes made to a specific review.                                                                                                                                                  | Strongpoint UAR Admin: **Full** Strongpoint UAR Owner: **Create** Strongpoint UAR Additional Reviewer: **Create** Strongpoint UAR Auditor: **View**                                                                                                                                                                                                                                           |
| Users and License Manager | _customrecord_flo_license_ Stores Strongpoint license information for your account.                                                                                                                                         | Administrator: **Full** Advanced Change Manager: **View** Advanced Internal Auditor: **View** Change Manager: **View** Strongpoint Developer Role: **Full** Strongpoint UAR Admin: **View** Strongpoint UAR Auditor: **View**                                                                                                                                                                 |
| Validation Log            | _customrecord_flo_valid_log_ Records each completed validation test and results.                                                                                                                                            | Administrator: **Full** Advanced Change Manager: **View** Advanced Internal Auditor: **View** Change Manager: **View** Strongpoint Developer Role: **Full**                                                                                                                                                                                                                                   |
| Warning Log               | _customrecord_warning_log_ Stores any errors generated by the Change Request Sync tool.                                                                                                                                     | Administrator: **Full** Advanced Change Manager: **Full** Advanced Internal Auditor: **View** Change Manager: **Full** Strongpoint Data Access Only Role: **Edit** Strongpoint Developer Role: **Edit** Strongpoint SoD Manager: **Edit**                                                                                                                                                     |

**Default SoD Custom Record Types and Permission Lists**

| Strongpoint Record Type           | _Script ID_/Description                                                                                                                                 | Permission List                                                                                                                                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permission                        | _customrecord_flo_permission_ Lists all NetSuite permissions in the account. Example: Transactions Journal Approval. Used when setting up an SoD rule.  | Administrator: **Full** Strongpoint SoD Manager: **Full** Strongpoint UAR Admin: **Edit** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View** |
| Permission / Permission Level Map | _customrecord_flo_permission_level_map_ Permission to permission level map used by the SoD Approval form when adding a proposed global permission.      | Administrator: **Full** Strongpoint SoD Manager: **Full** Strongpoint UAR Admin: **View** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View** |
| Permission Level (5 records)      | _customrecord_flo_permission_level_ Lists NetSuite permission levels such as **Full**, **Edit**, **Create**, and **View**.                              | Administrator: **Full** Strongpoint SoD Manager: **Full** Strongpoint UAR Admin: **View** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View** |
| SoD Rule                          | _customrecord_flo_sod_rule_ Segregation of duties rules for access control.                                                                             | Administrator: **Full** Strongpoint SoD Manager: **Full** Strongpoint UAR Admin: **View** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View** |
| SoD Rule Processing Status        | _customrecord_flo**sod_rule**procstatus_ Lists the status of the SoD rule retroactive run. Status can be **Retroactive** , **In Progress** or **Done**. | Administrator: **Full** Strongpoint SoD Manager: **Full** Strongpoint UAR Admin: **View** Strongpoint UAR Owner: **View** Strongpoint UAR Additional Reviewer: **View** Strongpoint UAR Auditor: **View** |
