---
id: access-analyzer
title: "Access Analyzer"
pagination_label: Access Analyzer
keywords: ['access', 'analyzer', 'dspm']
description: "Netwrix Access Analyzer, an on-premises DSPM product for data security and access analysis"
sidebar_position: 1
---

# Overview

Access Analyzer is an on-premises Data Security Posture Management (DSPM) product that helps organizations discover, classify, and report on sensitive data across enterprise file systems. Deployed on your own infrastructure, it provides visibility into data access patterns, identifies compliance risks, and more, all without sending data to the cloud.

Today, Access Analyzer has three functional components:

- **Discovery** - Connect to file systems, cloud file sources, and your identity systems to collect metadata about your files and employees
- **Classification** - Detect and classify your data using our pattern classifier
- **Reporting** - Visualize your security posture with built-in dashboards

:::note Using an older version?
This documentation covers **Access Analyzer version 26.0**. If you are running a previous Windows-based version, select your version from the following list:

- [Access Analyzer 12.0 documentation](https://docs.netwrix.com/docs/accessanalyzer/12_0)
- [Access Analyzer 11.6 documentation](https://docs.netwrix.com/docs/accessanalyzer/11_6)
:::

## Discovery

One of the three major components to Access Analyzer is discovering the files and other metadata available within your sources. When you add a Service Account & a Source then setup a Scan, Access Analyzer immediately starts pulling in this metadata.

An optional but powerful feature of Access Analyzer is that you can run Access Analyzer Agents anywhere, and these agents can share the load of your scans (or handle them entirely!). This is great to ensure data never leaves certain regions or to improve discovery performance by handling the discovery process close to the source.

:::note
The discovery process is a read-only operation. Access Analyzer does not modify objects on a source. It also does not install persistent agents on file servers or domain controllers.
:::

## Classification

Once you have gotten the metadata about your information and where it lives you can classify that information by reading it in and classifying that information with known patterns. We do this today with our Pattern Classifier.

## Reporting

After each scan, Access Analyzer stores results in a high-performance analytics database and makes them available through embedded dashboards and reports. Security teams can filter by domain, file server, site, classification type, and more to drill into specific findings without having to write queries.

Below are just a few examples of the reports available:

| Report | Description |
| --- | --- |
| **Sensitive Data Discovery** | Classifies file content across file servers and SharePoint Online against built-in detection patterns for PII, PHI, credentials, and financial data. Access Analyzer maps findings to compliance frameworks including GDPR, HIPAA, PCI DSS, and CCPA. |
| **Access Risk Analysis** | Identifies open access, overly permissive ACLs, broken permission inheritance, and stale entitlements across file shares and SharePoint sites. Shows effective permissions for any user or group. |
| **Identity Inventory** | Continuously syncs users, groups, memberships, and roles from Active Directory and Entra ID. Tracks group nesting, stale accounts, and role assignments across your identity providers. |
| **File Activity Monitoring** | Ingests real-time file system and SharePoint activity events from Netwrix Activity Monitor. Powers activity reports and enables anomaly detection and sensitive data activity tracking. Requires a separate Netwrix Activity Monitor deployment. |

# Supported Source Types

Where can you look for information in your environment? Today, Access Analyzer supports connecting to the following sources types:

| Name | Type | Connection Method |
|---|---|---|
| Active Directory | Identity | LDAP/LDAPS |
| Entra ID | Identity | API |
| SMB (generic) | File System | SMB 3.x |
| NetApp | File System | SMB 3.x |
| Dell PowerScale (formerly Isilon) | File System | SMB 3.x |
| Windows File Server | File System | SMB 3.x |
| Nutanix | File System | SMB 3.x |
| Microsoft 365 (M365) | Cloud Storage | API |
