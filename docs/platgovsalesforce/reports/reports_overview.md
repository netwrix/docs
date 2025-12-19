---
title: "Reports"
description: "Reports"
sidebar_position: 60
---

# Reports

The Netwrix Dashboard **Reports** tab has links to all of the predefined reports and log files.

- Access Reports
- Security Reports
- Data Classification
- Customizations
- Clean Up
- Change Enablement
- Release and Deployment
- Audit Reports

You can define and save your own reports.

- Customization objects have additional data to enable searching with complex queries. For example,
  search for _all objects with script dependencies that have not been used for six months_, _or all
  objects used by workflows_.
- You can filter test scripts from regular scripts. Test scripts can be queried to review test
  coverage and determine if they being used.

:::note
To access all reports, the following setting must be enabled:
Open **Strongpoint**  **Scanner**  **Scheduler**

**PermissionSet Assignment** and **System Permission** must be **Enabled**, and the **Frequency** set to **Daily**.

If you have questions, contact your CSM or Salesforce Specialist.

![Enabling reports](/images/platgovsalesforce/reports/access_reports_enabled.webp)
:::

## Access Reports

These reports are available from **Netwrix Dashboard**  **Reports**  **Access Reports**.

Filters can be used on this report. Use **Save As** for a new version following your company naming
conventions. An elevated access example is to filter **Permissionset/Profile** by the name of the
elevated access profile or permission set, such as **Admin**.

You can focus on sensitive objects by filtering by object name and adding the names of the objects
in the filter using the **contains** keyword plus the name of the object as it appears in object
name. Separate each name with a comma.

- **Permissions by Object**: Displays the permissions on each object for all Permission Sets and
Profiles.

![Permission by object](/images/platgovsalesforce/reports/access_reports_permission_by_object.webp)

- **Object Permission by Profile/PermSet**: Displays the object permissions organized by Permission
Set and Profile.

![Access report by PermissionSet/Profile](/images/platgovsalesforce/reports/access_reports_permission_by_permset.webp)

- **Users to Profiles/PermissionSets**: Displays the Profile, PermissionSet and PermissionSet Group
assigned to each user. You can filter the report information. For example, if you want a list of
users that have Admin profiles, you can set two filters:

    - Customization Name Contains **Admin**
    - Salesforce type Equals Profile

- **Date Assigned** and **Expires on** are only relevant for PermissionSets. They are blank for
Profiles. If your org does not use the **Expires on** feature, you can remove the column from the
report.

![Users to Profile/PermissionSets](/images/platgovsalesforce/reports/access_reports_users_to_profile.webp)

- **Profiles to PermissionsSets Changes**: Displays the changes made to your Profiles,
PermissionSets,and PermissionSet Groups. If there is an active policy, the **Compliance** column
displays whether the change was Compliant or Non-Compliant. If no policy, all changes are
Compliant.

![Access Report Profile Permissions Changes](/images/platgovsalesforce/reports/access_reports_profile_changes.webp)

- **Changes to Users**: Displays the changes to tracked user data fields. Refer to
[Enhanced CPQ Support](/docs/platgovsalesforce/changemanagement/enhanced_cpq_support.md) for more information on
setting up tracking.<br /><br />If you see the message: _--String too long - Skipped lines due to CPU limit reached--_ it simply
means the governor limits have been reached. Profiles and PermissionSets are very data heavy.
Platform Governance for Salesforce skips the record and continues the scan the next day to ensure
there is no impact to your org.

![Changes to Users](/images/platgovsalesforce/reports/accses_reports_user_changes.webp)

- **Record Types and Page Layout Assignments**: Displays the objects, record types and assigned
layouts organized by profile.

![Access Reports Record Types and Layouts](/images/platgovsalesforce/reports/access_reports_record_types.webp)

- **System Permissions**: displays the list of System Permissions, the Profile or Permission set
that has access to it and the list of Users that have this system permission enabled.

![System Permissions](/images/platgovsalesforce/reports/report_systems_permissions.webp)

- **Field Permissions**: Displays the related objects, shows if there is a Read / Edit permission,
the Profile or Permission set that give that field level access and the users related to those
Profiles and permission sets.

![Field Permissions report](/images/platgovsalesforce/reports/report_field_permissions.webp)

To generate this report:

1. Open **Strongpoint Lightning**  **Tools**  **Field-Level security Scanner**.
2. Select the Salesforce object for the fields to add to the report.
3. Click **Search Fields**.
4. Change the checkbox to **True** next to the fields to add. You can add up to 50 fields.
5. Click **Scan**.

This pushes the new list of fields to the report. If you select other fields and repeat the
process, the previous report is overwritten. Export any reports you want to keep.

## Security Reports

These reports are related to the Salesforce Health Check. It tracks if this feature of the health
check is **Enabled** or **Disabled** for your Salesforce Organization. For full detail compare the
report to the health check section in Salesforce Setup.

These reports are available from **Netwrix Dashboard**  **Reports**  **Security Reports**.

-  **Health Check Remote Site Settings**: displays any remote sites with the **Disable Protocol**
security option selected.
-  **Health Check Password Policies**: displays password related Health check security settings.
-  **Health Check Session Settings**: displays session settings, including:
    - Require HttpOnly attribute.
    - Lock sessions to the domain in which they were first used.
    - Let users verify their identity by text (SMS)
    - Enable clickjack protection for Setup pages
    - Enable clickjack protection for non-Setup Salesforce pages
    - Enable clickjack protection for customer Visualforce pages with standard headers
    - Enable clickjack protection for customer Visualforce pages with headers disabled
    - Enable CSRF protection on GET requests on non-setup pages
    - Enable CSRF protection on POST requests on non-setup pages
    - Force relogin after Login-As-User
    - Enforce login IP ranges on every request
    - Enable Content Security Policy protection for email templates
    - Enable XSS protection
    - Enable Content Sniffing protection
    - Force logout on session timeout
    - Require identity verification for email address changes
    - Session Timeout
    - Require identity verification during multi-factor authentication (MFA) registration
    - Allow redirection to untrusted external URLs without warning

- **Health Check Certificates**: tracks CKM Certificate name, Expiration date, expiration status,
CKM Key Size and related Policy if applicable.
- **Health Check Changes**: tracks the changes to the items related to the health check settings.

## Data Classification

These reports are available from **Strongpoint**  **Reports**  **Data Classification**.

-  **Changes related to Data Classification**: displays any changes that have occurred.
-  **Fields with Data Classification**: displays fields with data classification attributes,
including:

    - GDPR
    - PII
    - HIPAA
    - PCI
    - CCPA

## Customizations

These reports are available from **Netwrix Dashboard**  **Reports**  **Customizations**.

-  **All Customizations**: This enables you to use Salesforce functionality to filter searches
quickly for specific customizations.
-  **Customization Impact**: This report shows your customizations and how they impact other objects.

## Clean Up

These reports are available from **Netwrix Dashboard**  **Reports**  **Clean Up**.

- [Default Clean Up List View](/docs/platgovsalesforce/cleanup/cleanup_reports.md#default-clean-up-list-view)
- [Open Clean Up Status](/docs/platgovsalesforce/cleanup/cleanup_reports.md#open-clean-up-status)
- [Clean Up Waiting for Info](/docs/platgovsalesforce/cleanup/cleanup_reports.md#clean-up-waiting-for-info)
- [Customizations Excluded from Clean Up](/docs/platgovsalesforce/cleanup/cleanup_reports.md#customizations-excluded-from-clean-up)
- [Unused Fields](/docs/platgovsalesforce/cleanup/cleanup_reports.md#unused-fields)
- [Unused Apex Code](/docs/platgovsalesforce/cleanup/cleanup_reports.md#unused-apex-code)
- [Unused Reports](/docs/platgovsalesforce/cleanup/cleanup_reports.md#unused-reports)
- [Customizations with Inactive Owners](/docs/platgovsalesforce/cleanup/cleanup_reports.md#customizations-with-inactive-owners)
- [Customizations without Related Processes](/docs/platgovsalesforce/cleanup/cleanup_reports.md#customizations-without-related-processes)
- [Custom Fields without Help Text](/docs/platgovsalesforce/cleanup/cleanup_reports.md#custom-fields-without-help-text)
- [Custom Fields without Description](/docs/platgovsalesforce/cleanup/cleanup_reports.md#custom-fields-without-description)

## Change Enablement

These reports are available from **Netwrix Dashboard**  **Reports**  **Change Enablement**.

-  **Approval Override**: shows all changes approved with an approval override.
-  **What Changed?**: shows all changes that have occurred.
-  **Unresolved Non-Compliant Changes**: displays open non-compliant changes. A non-compliant change
indicates something was changed without the required approvals. By looking at this report, you can
investigate changes and get an understanding of what the impacts are and see if any additional
changes need to be made. This report is used to track changes that require action.
-  **Managed Package Updates**: displays managed package update details for auditing.
-  **Resolved Non-Compliant Changes**: displays resolved non-compliant changes with the change
overview and the difference summary.
-  **Compliant Changes**: displays all compliant changes. Compliant changes are automatically marked
as closed. This report is used to review changes that have been automatically cleared.
-  **Consolidated Change By Type**: displays changes summarized and grouped by Salesforce Type.
-  **Deployed Changes**: displays an end to end summary of deployed changes to enable tracking and
reporting of changes to the system.
-  **Data Tracking Change Logs**: displays changes on objects set for data tracking.
-  **Change/Approval Policy Changes**: this report is based on Field History Tracking. You can track
up to 20 fields from the Policy Record. Salesforce starts tracking field history from the date and
time you turn it on a field.
-  **Fast Scan for Permissions Changes**: displays all changes detected in PermissionSet,
PermissionSetGroup, and Profiles by the Fast Scan.

## Release and Deployment

These reports are available from **Netwrix Dashboard**  **Reports**  **Release and Deployment**.

-  [Success Deployments](/docs/platgovsalesforce/reports/deployment_logs_success.md)
-  [Deployments with Failures](/docs/platgovsalesforce/reports/deployment_logs_failures.md)
-  [Deployments Pending Approval](/docs/platgovsalesforce/reports/deployment_logs_pending_approval.md)
-  [Rollback Logs](/docs/platgovsalesforce/reports/deployment_logs_rollback.md)

## Audit Reports

-  **Unresolved Non-Compliant Changes**: displays open non-compliant changes. A non-compliant change
indicates something was changed without the required approvals. By looking at this report, you can
investigate changes and get an understanding of what the impacts are and see if any additional
changes need to be made. This report is used to track changes that require action.
-  **Managed Package Updates**: displays managed package update details for auditing.
-  **Resolved Non-Compliant Changes**: displays managed package update details for auditing.
-  **Compliant Changes**: displays all compliant changes. Compliant changes are automatically marked as
closed. This report is used to review changes that have been automatically cleared.
-  **Platform Changes**: displays any platform changes that have occurred.
-  **Consolidated Changes By Type**: displays changes summarized and grouped by Salesforce Type.
-  **Deployed Changes**: displays an end to end summary of deployed changes to enable tracking and
reporting of changes to the system.
-  **Unresolved Control Incidents**: Deprecated item
-  **Resolved Control Incidents**: Deprecated item
-  **Pre-Approved Control Incidents**: Deprecated item
