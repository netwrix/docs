---
title: "SharePoint Solution"
description: "SharePoint Solution"
sidebar_position: 140
---

# SharePoint Solution

The SharePoint Solution is a comprehensive set of audit jobs and reports which provide the
information every administrator needs regarding SharePoint on-premises and SharePoint Online
infrastructure, configuration, performance, permissions, required ports, and effective rights. The
Access Auditing and Sensitive Data Discovery Auditing components of this solution can target both
SharePoint on-premises and SharePoint Online. The Activity Auditing components of this solution can
only target SharePoint on-premises.

**Supported Platforms**

- SharePoint Online® (Agent-less mode scans only)

- OneDrive® for Business (Access Auditing and/or Sensitive Data Discovery Auditing for Agent-less
  mode scans only)

- SharePoint® 2019
- SharePoint® 2016
- SharePoint® 2013

**Requirements, Permissions, and Ports**

- Permissions vary based on the Scan Mode selected and target environment. See the
  [SharePoint Support](/docs/accessanalyzer/12.0/requirements/sharepoint/sharepoint/sharepoint.md) topic for additional information.

- Ports vary based on the Scan Mode selected and target environment. See the
  [SharePoint Scan Options](/docs/accessanalyzer/12.0/requirements/sharepoint/scanoptions/scanoptions.md) topic for
  additional information.

:::note
You can use the **SP_RegisterAzureAppAuth** instant job to make the configuration for
SharePoint Online easier. This job registers the necessary Microsoft Entra ID application and
provisions it with the required permissions. See the
[SP_RegisterAzureAppAuth Job](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/sp_registerazureappauth.md) topic for
additional information.
:::


**Sensitive Data Discovery Considerations**

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job
is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

:::note
The appropriate JDK (Java) version for Sensitive Data Discovery is installed on the
server. The JDK deployed is prepackaged and does not require any configuration; it has been
preconfigured to work with Access Analyzer and should never be customized through Java. It will not
conflict with other JDKs or Java Runtimes in the same environment.
:::


**Location**

The SharePoint Solution requires a special Access Analyzer license. It can be installed from the
Access Analyzer Instant Job Wizard. Once it has been installed into the Jobs tree, navigate to the
solution: **Jobs** > **SharePoint**.

The 0.Collection Job Group collects the data. The other job groups and the SP_Overview Job run
analysis on the collected data and generate reports.

## SharePoint Job Groups

This SharePoint solution offers information on multiple aspects of an organization’s SharePoint
on-premises and SharePoint Online environments. This solution is comprised of 10 sub-job groups and
an overview job which collect, analyze, and report on data. The data collection is conducted by the
SharePointAccess (SPAA) Data Collector. See the corresponding
[Standard Reference Tables & Views for the SPAA Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/spaa/standardtables.md)
topic for database table information.

![SharePoint Job Group](/images/accessanalyzer/12.0/solutions/sharepoint/sharepointjobgroup.webp)

The following types of auditing can be conducted with the SharePoint Solution:

- [SharePoint Access Auditing](collection/overview.md#sharepoint-access-auditing)
- [SharePoint Activity Auditing](collection/overview.md#sharepoint-activity-auditing)
- [SharePoint Sensitive Data Discovery Auditing (SEEK)](collection/overview.md#sharepoint-sensitive-data-discovery-auditing-seek)

Each type of auditing depends on specific jobs within the 0.Collection Job Group to collect the data
and its corresponding analysis/reporting job groups. The Access Auditing components represent the
core of the SharePoint Solution. However, the Sensitive Data Discovery Auditing components also
collect the Access Auditing data; therefore it is not necessary to run both sets of collection jobs.
The data collection query options for each type are explained within the 0.Collection Job Group
section. Additionally, the corresponding analysis/reporting job groups are listed for each auditing
type.

If intending to run two or all auditing types, see each auditing type section within the
0.Collection Job Group section for information on query options and requirements. It is recommended
to first run the 0.Collection Job Group components in the default order for the desired auditing
types to ensure successful data collection, and then to run the desired sub-groups for reports.

See the [Recommended Configuration for the SharePoint Solution](/docs/accessanalyzer/12.0/solutions/sharepoint/recommended.md) topic for additional
information on frequency and job group settings.

The SharePoint Solution is available with the SharePoint Reports license feature and is comprised of
the following job groups and jobs:

- [0.Collection Job Group](/docs/accessanalyzer/12.0/solutions/sharepoint/collection/overview.md) – Designed to collect high level summary
  information from SharePoint servers. This information is used to populate the SMP Reports based
  around the SharePoint and is a requirement for the Access Information Center – SharePoint reports.

    - This job group is available with the SharePoint license feature

- [1.Direct Permissions Job Group](/docs/accessanalyzer/12.0/solutions/sharepoint/directpermissions/overview.md) – Provides insight into how
  directly applied permissions are configured within the SharePoint environment. The group contains
  surface-level configuration settings that can quickly assess the SharePoint permission structure.
- [2.High Risk Sites > SP_OpenAccess Job](/docs/accessanalyzer/12.0/solutions/sharepoint/sp_openaccess.md) – Provides insight into any high-risk
  repositories and high-risk data that may exist within an organization’s SharePoint environment.
  High risk data is effectively open to the entire organization through modification of SharePoint
  permissions to apply well known security principles such as NT AUTHORITY\Authenticated Users,
  Everyone, and Everyone Except External Users. This data must be monitored closely because of its
  exposure.
- [3.Broken Inheritance > SP_BrokenInheritance Job](/docs/accessanalyzer/12.0/solutions/sharepoint/sp_brokeninheritance.md) – Keeping track of
  directly applied permissions at mass is not realistic, this job is responsible for performing data
  analysis and generating SharePoint broken inheritance reports at the site level. This includes
  looking at site broken inheritance and the trustees who are assigned to those sites where
  inheritance is broken so that you can remove that access in favor of providing access via group
  membership.
- [4.Content Job Group](/docs/accessanalyzer/12.0/solutions/sharepoint/content/overview.md) – Provides insight into content stored across
  SharePoint farms in order to help more efficiently manage that content. It will provide
  information on the content taking up the most space, the content that has not been accessed for
  extended periods of time, and additional data describing SharePoint content and the configuration
  of the repositories such as lists and libraries which store that content.
- [5.Probable Owner > SP_ProbableOwner Job](/docs/accessanalyzer/12.0/solutions/sharepoint/sp_probableowner.md) – Provides reports about probable
  ownership. The goal of this report is to help you either identify who most likely owns the
  SharePoint resource or at least someone who can tell you who does.
- [6.Sensitive Data > SP_SensitiveData Job](/docs/accessanalyzer/12.0/solutions/sharepoint/sp_sensitivedata.md) – Highlights sensitive data
  identified across targeted SharePoint farms

    - Requires Sensitive Data Discovery

- [7.Activity Job Group](/docs/accessanalyzer/12.0/solutions/sharepoint/activity/overview.md)– Generates summary and detail reports of SharePoint
  activity on the specified sites. These reports can be used for identifying file, folder, and user
  related activity across your SharePoint environment.
- [8.M365 Job Group](/docs/accessanalyzer/12.0/solutions/sharepoint/m365/overview.md) – Generates summary and detail reports of SharePoint Activity
  on the specified Teams sites. These reports can be used for identifying file, folder, and user
  related activity across your SharePoint environment.
- [Effective Access Audits Job Group](/docs/accessanalyzer/12.0/solutions/sharepoint/effectiveaccessaudits/overview.md) – Returns reports
  identifying specific trustees’ effective access across the entire SharePoint environment

    - Typically, this is run independently from the rest of the solution

- [SP_Overview Job](/docs/accessanalyzer/12.0/solutions/sharepoint/sp_overview.md) – Provides an overview of the SharePoint environment, providing
  a high level view into what makes up your SharePoint environment and the types of security risks
  and toxic permissions found during scans
