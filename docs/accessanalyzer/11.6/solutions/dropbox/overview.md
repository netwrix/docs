---
title: "Dropbox Solution"
description: "Dropbox Solution"
sidebar_position: 100
---

# Dropbox Solution

The Dropbox Solution is an auditing, compliance, and governance solution for Dropbox for Business.
Key capabilities include effective access calculation, sensitive data discovery, file content
inspection, inactive access and stale data identification, and entitlement collection for
integration with Identity & Access Management (IAM) processes.

The Dropbox Solution is designed to offer an overview of an organization’s Dropbox environment by
scanning the targeted Dropbox site. Key information includes:

- Effective access to Dropbox resources
- Outline of shared Dropbox resources
- Detailed Dropbox group membership
- Breakdown of Dropbox content by size, type, and owner

Dropbox can scan the contents of over 400 file types to discover which files contain sensitive data
using the Sensitive Data Discovery Add-on.

**Supported Platforms**

- Dropbox

**Requirements, Permissions, and Ports**

See the
[Target Dropbox Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/requirements/dropbox/target.md)
topic for additional information.

**Sensitive Data Discovery Considerations**

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time ,
then an extra 16 GB of RAM are required (8x2=16).

:::note
The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.
:::


**Location**

The Dropbox Solution requires a special Enterprise Auditor license. It can be installed from the
Instant Job Wizard. Once it has been installed into the Jobs tree, navigate to the solution:
**Jobs** > **Dropbox**.

The 0.Collection job group collects the data. The other job groups run analyses on the collected
data and generate reports.

## Job Groups

The Dropbox Solution offers an overview of an organization’s Dropbox environment by scanning the
targeted Dropbox site. It is comprised of jobs which collect, analyze, and report on data. The data
collection is conducted by the DropboxAccess Data Collector. See the
[Standard Reference Tables & Views for the DropboxAccess Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/dropboxaccess/standardtables.md)
topic for database table information.

![Dropbox Solution Overview page](/images/accessanalyzer/11.6/solutions/dropbox/overviewpage.webp)

The following jobs comprise the Dropbox Solution:

- [0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/dropbox/collection/overview.md)
  – Scans the targeted Dropbox site and generates the standard reference tables and views
- [1.Access > Dropbox_Access Job](/docs/accessanalyzer/11.6/solutions/dropbox/dropbox_access.md)
  – Reports on effective access to Dropbox resources in the targeted environment
- [2.Sharing > Dropbox_Sharing Job](/docs/accessanalyzer/11.6/solutions/dropbox/dropbox_sharing.md)
  – Reports on the sharing of Dropbox resources in the targeted environment
- [3.Group Membership > Dropbox_GroupMembership Job](/docs/accessanalyzer/11.6/solutions/dropbox/dropbox_groupmembership.md)
  – Reports on Dropbox group membership in the targeted environment
- [4.Content > Dropbox_Content Job](/docs/accessanalyzer/11.6/solutions/dropbox/dropbox_content.md)
  – Reports on Dropbox content by size, type, and owner in the targeted environment
- [5.Sensitive Data > Dropbox_SensitiveData Job](/docs/accessanalyzer/11.6/solutions/dropbox/dropbox_sensitivedata.md)
  – Reports on sensitive data in the targeted Dropbox site
