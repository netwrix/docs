# Scanner Troubleshooting Guide

## Overview
This guide helps you troubleshoot the Strongpoint scanner system in your Salesforce org. You'll find verification methods, scanner limits, duration estimates, and best practices for running initial scans—especially useful for large organizations.

---

## Table of Contents
1. [Verifying Complete Metadata Documentation](#1-verifying-complete-metadata-documentation)
2. [Scanner Limits and Constraints](#2-scanner-limits-and-constraints)
3. [Estimating Scan Duration](#3-estimating-scan-duration)
4. [Scanner Status](#4-scanner-status)
5. [Initial Scan Recommendations](#5-initial-scan-recommendations)

---

## 1. Verifying Complete Metadata Documentation

You can track which components have been scanned by checking the **Processed__c**, **To_Be_Processed__c**, and **Processing_Failed__c** fields on the **FLO_Customization__c** object.

**Understanding the Fields:**
- **Processed__c = false** AND **To_Be_Processed__c = false** AND **Processing_Failed__c = false**: Component has been fully scanned and processed successfully
- **Processed__c = true**: Component is currently being processed or queued for processing
- **To_Be_Processed__c = true**: Component needs to be processed
- **Processing_Failed__c = true**: Component processing failed when reading metadata from Salesforce API

**Important Note About Active Scans:**

If the scanner is currently running, you may see discrepancies in the field values. The `StrongpointUpdateProcessedBatch` batch runs near the end of the scan process and sets both **Processed__c** and **To_Be_Processed__c** to `false` for successfully processed components.

### Scan Progress Report

To monitor scan progress in real-time, use the **Scanner Progress - By Metadata Type**. This report displays:

- Total components by metadata type
- Processing status (Processed/To Be Processed)
- Last scan date for each component
- Visual progress indicators

**To access the report:**

1. Go to the **Reports** tab in Salesforce
2. Navigate to the **Strongpoint Reports** folder
3. Open **Scanner Progress - By Metadata Type**
4. Click **Run Report** to view current progress

**Interpreting the Results:**
- **Total Components**: All active components of this type
- **Scanned Components**: Components that have been fully scanned (Processed = False AND To Be Processed = False AND Processing Failed = False)
- **Failed Components**: Components where metadata reading failed (Processing Failed = True)
- **Progress**: Percentage of components successfully scanned


## 2. Scanner Limits

### 2.1 Salesforce Governor Limits

The scanner operates within standard Salesforce governor limits:

| Limit Type | Value | Impact |
|------------|-------|--------|
| **Concurrent Batch Jobs** | 5 | Maximum parallel scanners |
| **Batch Size** | 1-2000 records | Configurable per scanner |
| **Heap Size** | 12 MB (sync) / 12 MB (async) | Memory constraint |
| **CPU Time** | 10,000 ms (sync) / 60,000 ms (async) | Processing time limit |
| **SOQL Queries** | 100 (sync) / 200 (async) | Query limit per transaction |
| **DML Statements** | 150 | Insert/Update operations |
| **Callouts** | 100 | API calls per transaction |
| **Batch Job Timeout** | 24 hours | Maximum execution time |

### 2.2 Scanner-Specific Limits

To optimize performance and prevent governor limit issues, the scanner applies processing limits to certain metadata types. These limits control how many records are processed per batch run, ensuring the scanner operates within Salesforce API call limits and governor thresholds.

The following metadata types have configured processing limits:

#### Report Scanner
- **Batch Size**: 10,000 reports per batch

#### Flow Scanners
- **Batch Size**: 10,000 flows per batch
- **Version Handling**: Only active versions processed

#### List View Scanner
- **Batch Size**: 10,000 list views per batch

#### Workflow Scanner
- **Batch Size**: 10,000 workflow components per batch

#### Formula Field Scanner
- **Batch Size**: 10,000 formula fields per batch

#### Custom Object Scanner
- **Batch Size**: 10,000 objects per batch

#### Standard Field Scanner
- **Batch Size**: 10,000 objects per batch
- **Processes**: Standard fields on custom and standard objects

#### Record Type Scanner
- **Batch Size**: 10,000 record types per batch
- **Processes**: RecordType metadata including picklist values

#### User Interface Settings Scanner
- **Batch Size**: 7,000 customizations per batch

#### Permission Set Group Scanner
- **Batch Size**: 20 permission set groups per batch (configurable), if the configuration is turned off process all the PSG in the account

#### Profile Scanners
- **Batch Size**: 20 profiles per batch (configurable), if the configuration is turned off process all the PSG in the account

#### Permission Set Scanners
- **Batch Size**: 20 permission sets per batch (configurable), if the configuration is turned off process all the PSG in the account

#### General Metadata Scanner
- **Batch Size**: 7,000 customizations per batch
- **Threshold Check**: Stops if governor limits approach 80%

## 3. Estimating Scan Duration

| Org Size | Metadata Count | Estimated Duration | Characteristics |
|----------|----------------|-------------------|-----------------|
| **Small** | < 20,000 | 1 - 3 days | Standard objects, minimal customization |
| **Medium** | 20,000 - 70,000 | 4 - 6 days | Multiple custom objects, moderate automation |
| **Large** | 70,000 - 100,000 | 7 - 10 days | Extensive customization, complex integrations |

### Factors Affecting Duration

**Accelerating Factors:**
- Fewer dependencies between components
- Standard objects vs. custom objects
- Inactive metadata excluded

**Slowing Factors:**
- Complex Flow conditions requiring separate processing
- Deep folder hierarchies (Reports/Dashboards)
- Large number of picklist values
- API rate limiting during peak hours

---

## 4. Scanner Status

You can monitor the scanner execution status in real-time through the Strongpoint UI. For detailed instructions on how to view scanner progress, check the status of running batches, and interpret the Scanner Status page, see the [Scanner Status documentation](../navigate_strongpoint#scanner-status).


## 5. Initial Scan Recommendations

### 5.1 Running the Full Scan

Before setting up incremental or scheduled scans, you must complete an initial full scan of your Salesforce org. This full scan documents all existing metadata and establishes the baseline for future change detection.

**To configure and run the full scan:**

1. Navigate to the Strongpoint Scanner configuration
2. Configure the automated scan settings following the [Scanner Scheduler documentation](./scheduler)
3. Start the full scan and monitor its progress using the [Scanner Status page](../navigate_strongpoint#scanner-status)

**Important:** Wait for the full scan to complete before configuring incremental scans. You can verify completion by checking the report shared in [section 1](#1-verifying-complete-metadata-documentation).

### 5.2 Configuring Metadata Types to Document

You can configure which Salesforce metadata types you want to document based on your organization's needs. This allows you to focus on the most relevant components and optimize scan performance.

**To select specific metadata types:**

Follow the instructions in the [Daily Scan Configuration documentation](./daily_scan) to:
- Choose which metadata types to include in your scans
- Configure scan frequency for different metadata types
- Optimize scan performance based on your org size

**Common Configuration Scenarios:**

- **Development-focused orgs**: Prioritize Apex Classes, Triggers, Flows, and Custom Fields
- **Admin-focused orgs**: Focus on Profiles, Permission Sets, Validation Rules, and Workflows
- **Report-heavy orgs**: Include Reports, Dashboards, and List Views
- **Compliance-focused orgs**: Document all metadata types for complete audit trails

### 5.3 Best Practices

**Timing Recommendations:**
- ✅ **DO**: Run initial scan during off-peak hours (evenings/weekends)
- ✅ **DO**: Schedule during maintenance windows if possible
- ❌ **DON'T**: Run during business-critical periods
- ❌ **DON'T**: Run concurrent with data loads or deployments
- ❌ **DON'T**: Interrupt scan mid-process

**Resource Management:**
- Keep other batch jobs to minimum during scan
- Avoid scheduled Apex jobs during scan window
- Monitor API usage to stay within limits
- Review heap size warnings and adjust if needed