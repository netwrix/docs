---
description: >-
  Shows how to configure Netwrix Access Analyzer to scan file systems for
  sensitive data using the Sensitive Data Discovery (SDD) module and the SEEK
  jobs.
keywords:
  - sensitive data discovery
  - file system scan
  - SDD
  - SEEK
  - Netwrix Access Analyzer
  - Licensed Features
  - bulk import
products:
  - access-analyzer
sidebar_label: How to Configure File System Scans to Look for Sen
tags:
  - file-system-and-sensitive-data-discovery
title: "How to Configure File System Scans to Look for Sensitive Data Discovery"
knowledge_article_id: kA0Qk0000001Ym1KAE
---

# How to Configure File System Scans to Look for Sensitive Data Discovery

## Question

How do you configure Netwrix Access Analyzer (NEA) to scan File Systems for Sensitive Data?

## Answer

Scanning file systems for sensitive data has the following prerequisites:

1. You have a valid license for the Sensitive Data Discovery (SDD) module.
   - The SDD module is licensed separately, and an active license is required for all Sensitive Data auditing. You can confirm which modules are actively licensed in NEA via **NEA > Help > About**. The SDD module will appear as **Sensitive Data** on the **Licensed Features** list.

2. The SDD Add-On is installed on the NEA Console server (see Sensitive Data Discovery Add-On Installation).
   - If you are using either of the File System Proxy scan modes, the SDD Add-on must also be installed on the server where the proxy service is installed.

Once the prerequisites are in place, SDD scans are found in the NEA Job tree under the FileSystem group. The scan for sensitive data consists of two jobs, which are both found under **Jobs > FileSystem > 0.Collection**:

- **1-SEEK System Scans** – scans files for the sensitive data.
- **2-SEEK Bulk Import** – uploads the results to the database.

A guide to configure the **SEEK System Scans** job can be found here: https://docs.netwrix.com/docs/auditor/10_8

## Additional Information

An overview of the SDD Add-On can be found here: https://docs.netwrix.com/docs/auditor/10_8/admin/settings/sensitivedatadiscovery

You can modify what classifies as Sensitive Data by configuring criteria in the **Global Sensitive Data Settings**. Please refer to the following configuration guides in our Help Center:

- https://docs.netwrix.com/docs/auditor/10_8
- https://docs.netwrix.com/docs/auditor/10_8/admin/settings/sensitivedatadiscovery

> IMPORTANT: If running SDD scans, it will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time, then an extra 16 GB of RAM are required (8x2=16).

## Related Articles

- Sensitive Data Discovery Add-On Installation: https://docs.netwrix.com/docs/auditor/10_8/admin/settings/sensitivedatadiscovery
- 1-SEEK System Scans Job: https://docs.netwrix.com/docs/auditor/10_8
- Sensitive Data Discovery Add-On: https://docs.netwrix.com/docs/auditor/10_8/admin/settings/sensitivedatadiscovery
- Sensitive Data: https://docs.netwrix.com/docs/auditor/10_8
- Sensitive Data Criteria Editor: https://docs.netwrix.com/docs/auditor/10_8/admin/settings/sensitivedatadiscovery
