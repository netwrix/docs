---
title: "Recommended Configuration for the SharePoint Solution"
description: "Recommended Configuration for the SharePoint Solution"
sidebar_position: 10
---

# Recommended Configuration for the SharePoint Solution

The SharePoint Solution has been configured to inherit down from the **SharePoint** > **Settings**
node. However, it is a best practice to assign the host list and the Connection Profile at the data
collection level, 0.Collection Job Group. Once these are assigned to the job group, it can be run
directly or scheduled.

**Dependencies**

- The **.Active Directory Inventory** Job Group needs to be executed prior to running the SharePoint
  Solution against a SharePoint on-premises environment
- The **.Entra ID Inventory** Job Group needs to be executed prior to running the SharePoint
  Solution against a SharePoint Online environment
- For Agent-based scans, the SharePoint Agent must be installed on the application server (for
  Access Auditing & Sensitive Data Discovery Auditing only)
- The Sensitive Data Discovery Add-on must be installed on the Enterprise Auditor Console server
  (for Sensitive Data Discovery Auditing only)
- The Sensitive Data Discovery Add-on must be installed on the SharePoint application server (for
  Sensitive Data Discovery Auditing with agent-based scans only)

**Targeted Host(s)**

For the 0.Collection Job Group:

- Single SharePoint Application server hosting Central Administration per SharePoint farm

The host list assignment should be assigned under the **SharePoint** > **0.Collection** >
**Settings** > **Host List Assignment** node. The list should be a custom-created list for the
SharePoint environments to be targeted. Select the checkbox for the custom-created host list.

Since SharePoint Online environments can only be targeted for Access Auditing and Sensitive Data
Discovery Auditing, it is best practice to set the host list at the job level.

See the
[Add Hosts](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/add.md)
topic for additional information.

**Connection Profile**

The SPAA Data Collector requires a specific set of permissions. See the
[SharePoint Scan Options](/docs/accessanalyzer/11.6/requirements/sharepoint/scanoptions/scanoptions.md)
and
[SharePoint Support](/docs/accessanalyzer/11.6/requirements/sharepoint/sharepoint/sharepoint.md)
topics for the necessary permissions for both on-premises and online target environments. Then
create a custom Connection Profile containing the appropriate credentials for the targeted
environment. If a single Connection Profile contains both on-premises and online credentials, it is
necessary for the online credentials to be above the on-premises credentialss in the Connection
Profile credentials list.

The Connection Profile should be assigned under the **SharePoint** > **0.Collection** >
**Settings** > **Connection** node. It is set to **Use the Default Profile**, as configured at the
global settings level. However, since this may not be the Connection Profile with the necessary
permissions for the assigned hosts, select the the **Select one of the following user defined
profiles** option and select the appropriate Connection Profile from the drop-down menu.

The jobs within the 5.Effective Access Audits Job Group import CSV files from the jobs’ directories
using the TextSearch Data Collector. Therefore, it is necessary to assign a Connection Profile with
rights on the Enterprise Auditor Console server to access the CSV file saved in the job’s directory.
The Connection Profile can be set at either the **Effective Access Audits** > **Settings** >
**Connection** node (applies to both jobs) or in the job’s Properties window on the Connection tab.

See the
[Connection](/docs/accessanalyzer/11.6/admin/settings/connection/overview.md)
topic for additional information.

**Schedule Frequency**

The jobs in this job group can be scheduled to run as desired.

**Run Order**

The 0.Collection Jobs must be run first and in order. RunSystem Scans jobs and then the Bulk Import
jobs according to the desired workflow. The other SharePoint Solution sub-job groups can be run in
any order, together or individually, after running the 0.Collection Job Group. It is recommended to
run at the sub-job group level. The SP_Overview Job pulls information from both the 0.Collection Job
Group and the other sub-job groups, and the report may contain blank sections if only select sub-job
groups are run.

The Access Information Center requires the execution of the 2-SPAA_BulkImport Job default analysis
tasks in order for permission/access reports to be accessible. For activity reports, the Access
Information Center requires the execution of both the 2-SPAA Bulk Import Job default analysis tasks
and the 2-SPAC Bulk Import Job default analysis tasks.

:::info
If only conducting one or two types of auditing, scope the solution by disabling
the undesired collection jobs. Disabling them allows the solution to run more efficiently. It is not
recommended to delete any jobs. See the
[Disable or Enable a Job](/docs/accessanalyzer/11.6/admin/jobs/job/disableenable.md)
topic for additional information.
:::


**Query Configuration**

This solution can be run with the default query configuration. However, the most common
customizations include:

- If using agent-based scanning, it is necessary to enable the agent services on the SharePoint
  Access Auditor Data Collector Wizard pages:

    - Agent Settings page, enable agent service scans:

        - Set on the **0.Collection** > **1-SPAA_SystemScans** Job for Access Auditing
        - Set on the **0.Collection** > **1-SPSEEK_SystemScans** Job for Sensitive Data Discovery
          Auditing

- SharePoint Access Auditor Data Collector Wizard pages:

    - SharePoint Data Collection Settings page, configure probable owner scanning:

        - Enable **Scan for Document Metadata** for probable owners calculations
        - Set on the:

            - **0.Collection** > **1-SPAA_SystemScans** Job for Access Auditing
            - **0.Collection** > **1-SPSEEK_SystemScans** Job for Sensitive Data Discovery Auditing

    - Scan Scoping Options page (optional):

        - Limit scans to specific Web Applications and site collections
        - Set on the:

            - **0.Collection** > **1-SPAA_SystemScans** Job for Access Auditing
            - **0.Collection** > **1-SPSEEK_SystemScans** Job for Sensitive Data Discovery Auditing

    - Additional Scoping page (optional):

        - Limit scan depth
        - Set on the:

            - **0.Collection** > **1-SPAA_SystemScans** Job for Access Auditing
            - **0.Collection** > **1-SPSEEK_SystemScans** Job for Sensitive Data Discovery Auditing

    - DLP Audit Settings page, scope to not scan files larger than a specific size for Sensitive
      Data Discovery Auditing:

        - Set on the **0.Collection** > **1-SPSEEK_SystemScans** Job

    - Select DLP Criteria page, scope to scan for specific criteria or customizing criteria for
      Sensitive Data Discovery Auditing:

        - Set on the **0.Collection** > **1-SPSEEK_SystemScans** Job

    - Activity Data Scope page:

        - Customize date ranges for activity to be collected
        - Set on the **0.Collection** > **1-SPAC_SystemScans** Job for Activity Auditing

    - Activity Log Locations page (optional):

        - Specify the log locations to avoid requiring remote registry access to locate the activity
          event log files
        - Set on the **0.Collection** > **1-SPAC_SystemScans** Job for Activity Auditing

**Analysis Configuration**

This solution should be run with the default analysis configuration. Most of these analysis tasks
are preconfigured. There are a few which are deselected by default, as they are for troubleshooting
purposes.

Though the analysis tasks should not be deselected, the following parameters can be modified:

- Stale File is defined by default to 365 days

    - Customize within the **4.Content** > **SP_StaleFiles** Job

- Stale Teams is defined by default to 30 days

    - Customize within the **8.M365** > **SP_StaleTeamSites** Job

The .Active Directory Inventory Solution defines large groups, deeply nested groups, stale users,
and users with large tokens. These parameters can be customized and are applicable to any solution,
including SharePoint, which incorporate this analyzed data into further analysis.

- Customize within .Active Directory Inventory > 3-AD_Exceptions Job analysis tasks

**Additional Considerations**

The Effective Access Audits Job Group is designed to work independently of the rest of the solution,
but it is dependent upon the 0.Collection Job Group and the user-modified CSV files.

**Additional Notes**

The jobs contained in the group use custom SQL scripts to render views on collected data. SQL views
are used to populate report element tables and graphs. Changing or modifying the group, job, or
table names results in no data displayed within the reports or the Access Information Center.
