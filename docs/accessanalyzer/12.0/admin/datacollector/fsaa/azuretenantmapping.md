---
title: "FSAA: Azure Tenant Mapping"
description: "FSAA: Azure Tenant Mapping"
sidebar_position: 70
---

# FSAA: Azure Tenant Mapping

The Azure Tenant Mapping page is where the target domain or Tenant ID are configured for Azure
Information Protection (AIP) scanning. It is a wizard page for the categories of:

- File System Access/Permission Auditing Scan
- File System SDD Scan

Remember, select the **Enable scanning of files protected by Azure Information Protection** checkbox
on the [FSAA: Scan Settings](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/scansettings.md) page to enable this page in the data collector wizard.
In order for FSAA to scan files protected by AIP, ensure that the prerequisites are met and an Azure
Connection Profile is successfully created. See the
[Azure Information Protection Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/azureinformationprotection.md)
topic for additional information on configuring the File System solution to scan for AIP labels.

![FSAA Data Collector Wizard Azure Tenant Mapping page](/images/accessanalyzer/12.0/admin/datacollector/fsaa/azuretenantmapping.webp)

Populate this page with the App ID (created during prerequisites) and a domain name or Tenant ID for
an Azure environment. These values must be associated with each application ID in the Azure
Connection Profile.

Use the **Add** and **Remove** buttons and manually enter or **Paste** into the textbox the required
information.
