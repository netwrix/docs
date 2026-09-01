---
title: "FSAA: Azure Tenant Mapping"
description: "FSAA: Azure Tenant Mapping"
sidebar_position: 70
---

# FSAA: Azure Tenant Mapping

Use the Azure Tenant Mapping page to configure the target domain or Tenant ID for Azure Information
Protection (AIP) scanning. It is a wizard page for the categories of:

- File System Access/Permission Auditing Scan
- File System SDD Scan

Remember, select the **Enable scanning of files protected by Azure Information Protection** checkbox
on the [FSAA: Scan Settings](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/scansettings.md) page to enable this page in the data collector wizard.
For FSAA to scan files protected by AIP, meet the prerequisites and successfully create an Azure
Connection Profile. See the
[Azure Information Protection Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/azureinformationprotection.md)
topic for additional information on configuring the File System solution to scan for AIP labels.

![FSAA Data Collector Wizard Azure Tenant Mapping page](/images/accessanalyzer/12.0/admin/datacollector/fsaa/azuretenantmapping.webp)

Populate this page with the App ID (created during prerequisites) and a domain name or Tenant ID for
an Azure environment. You must associate these values with each application ID in the Azure
Connection Profile.

Use the **Add** and **Remove** buttons, and manually enter or paste the required information into
the textbox.
