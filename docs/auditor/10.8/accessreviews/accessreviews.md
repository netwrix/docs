---
title: "Access Reviews"
description: "Access Reviews"
sidebar_position: 100
---

# Access Reviews

Netwrix Auditor supports integration with Netwrix Auditor Access Reviews, which enables business
owners to conduct resource and group reviews and recommend changes. The integration is available for
the following data sources:

- Active Directory
- Dell Data Storage (only Unity family)
- NetApp
- Nutanix Files
- Qumulo
- SharePoint Online
- Synology
- Windows File Servers

## Getting Started

This workflow assumes you already have Netwrix Auditor installed with configured monitoring plans
for a supported data source.

**NOTE:** Access Reviews is a separately licensed product and isn't included with Netwrix Auditor.
ensure that you have the Access Reviews license enabled in Auditor.

See the [Licenses](/docs/auditor/10.8/admin/settings/licenses.md) topic for additional information.

_Remember,_ one Access Review license covers all data sources that can send data to the
application.

To use Netwrix Auditor Access Reviews with Auditor, complete the following steps.

**Step 1 –** Install Access Reviews on the same computer where Netwrix Auditor is installed. See the
[Installation Overview](/docs/auditor/10.8/accessreviews/installation/overview.md) topic for prerequisites and
additional information.

**Step 2 –** Configure Access Reviews. The Configuration interface is only available to users with
the Administrator role. See the [Administrator Overview](/docs/auditor/10.8/accessreviews/admin/overview.md) topic
for configuration settings and enabling user access.

**Step 3 –** Use the Access reviews configuration tool to set up the data flow from the Auditor
database to the Access Reviews database. See the
[Select Data Sources](/docs/auditor/10.8/accessreviews/installation/accessreviewsconfiguration.md) topic for additional information.

**NOTE:** Data upload speed depends on the amount of collected data and Auditor collectors
configuration.

**Step 4 –** Configure resource ownership through the Access Reviews Console. The Resource Owners
interface is available to users with either the Security Team or Administrator role. Managing
ownership is core component for the Access Reviews workflow. See the
[Resource Owners Overview](/docs/auditor/10.8/accessreviews/resourceowners/overview.md) topic for additional
information.

**NOTE:** The [Owners & Access Reviews](/docs/auditor/10.8/accessreviews/owneroverview/owneroverview.md) topic and
subtopics are written for the assigned owners. You can distribute the URL to this topic or download
a PDF to be distributed to your assigned resource owners.

**Step 5 –** Configure and run reviews. The Entitlement Reviews interface is available to users with
either the Security Team or Administrator role. See the
[Reviews Overview](/docs/auditor/10.8/accessreviews/entitlementreviews/overview.md) topic for additional
information.

Netwrix Auditor Access Reviews is now configured and ready to use.

## Considerations & Limitations

Review the following considerations:

1. Enabling State-in-Time data collection for your monitoring plans option isn't required for the
   integration works properly.
2. Auditor updates the collected data at least once a day.
3. If you delete a monitoring plan or a data source with enabled integration, Auditor removes all
   collected data from the Access Reviews database.
4. If errors occur during the upload of data to the Access Reviews database, Auditor logs these
   errors in the Netwrix Auditor Health Log and text log files; these errors don't affect the
   status of items and data sources in Auditor.
5. Permissions-related considerations:

    - For Windows File Servers, Auditor sends permission data for all items in this data source to
      the Access Reviews application;
    - Auditor sends only effective top-level permissions (share+NTFS);
    - Auditor sends permission data per file server (entirely for each server);
    - Transfer of permission data to the Access Reviews application starts when you enable the
      integration for a data source.

6. For File Server Auditing (FSA) data sources, the default permission upload limit is **200,000**
   per data collection cycle, with a configurable maximum of **800,000**. Exceeding these limits
   causes upload failures. Before enabling the integration for FSA plans, verify your permission
   count using the
   [AIC Resource Estimation Tool](https://releases.netwrix.com/products/auditor/10.8/auditor-aic-estimation-tool-1.0.7.zip)
   and ensure sufficient system resources. For details on FSA-specific limits, memory requirements,
   and the estimation tool usage, see
   [Managing Access Reviews Integration Limits for File Servers](/docs/kb/auditor/configuration-and-setup/file-server-auditing/managing-access-reviews-integration-limits-for-file-servers).

    ## Initial Configuration

    Next, configure the Access Reviews for your environment:

    - Console Users — Grant users access to the application starting with an Administrator account.
      There are two levels of access: Administrator and Security Team. See the
      [Console Access Page](/docs/auditor/10.8/accessreviews/admin/configuration/consoleaccess.md) topic for
      information.

        - Optionally, disable the Builtin Administrator account. See the
          [Modify the Builtin Administrator Account](/docs/auditor/10.8/accessreviews/admin/configuration/consoleaccess.md#modify-the-builtin-administrator-account)
          topic for additional information.

    - Notification — Configure the Notification settings required in order for the application to
      send email. See the
      [Notifications Page](/docs/auditor/10.8/accessreviews/admin/configuration/notifications.md) topic for
      information.

    ## Enable Console Users

    Notify Access Reviews Console users granted one of the available roles.

    **_RECOMMENDED:_** The notification should include:

    - Why your organization is using Netwrix Auditor Access Reviews.
    - What they will be doing in the Access Reviews Console.
    - How to log into the Access Reviews Console, specifically what URL and credentials to use.

    You should also provide links to the appropriate topics based on the user's role:

    - Security Team — Need topics that align to the work the will be doing in the Access Reviews
      Console:

        - Ownership Administrator — Send the URL link for the
          [Resource Owners Overview](/docs/auditor/10.8/accessreviews/resourceowners/overview.md) topic.
        - Review Administrator — Send the URL link for the
          [Reviews Overview](/docs/auditor/10.8/accessreviews/entitlementreviews/overview.md) topic.

    - Administrator — Send the URL link for the
      [Administrator Overview](/docs/auditor/10.8/accessreviews/admin/overview.md) topic.

    ## Resource Ownership Configuration

    You must assign ownership of resources to use the Access Reviews workflow:

    - Resource Ownership — Assign ownership for resources to be managed through the application. See
      the [Resource Owners Interface](/docs/auditor/10.8/accessreviews/resourceowners/interface/interface.md) topic for
      additional information.
    - Enable Owners — Send a notification to your owners about resource ownership with the
      application. See the
      [Notification to Owners](/docs/auditor/10.8/accessreviews/resourceowners/overview.md#notification-to-owners)
      topic for additional information.

    ## Access Reviews Workflow

    The Access Reviews application runs attestations on resources and groups with the assigned
    owners. The workflow consists of:

    - Reviews — Configure reviews for resource Access or group Membership .
    - Owner Performs Review — Owners process the review, potentially recommending changes
    - Review Administrator Approval — Review and process owner recommended changes

    **_RECOMMENDED:_** Set expectations for response time from owners.

    You can run reviews multiple times, maintaining a historical record for each instance. See the
    [Reviews Overview](/docs/auditor/10.8/accessreviews/entitlementreviews/overview.md) topic for additional
    information.
