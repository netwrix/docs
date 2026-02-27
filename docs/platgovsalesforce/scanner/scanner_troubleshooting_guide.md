# Scanner Troubleshooting Guide

## Overview
This guide helps you troubleshoot the Strongpoint scanner system in your Salesforce org. You'll find verification methods, scanner limits, duration estimates, and best practices for running initial scans—especially useful for large organizations.

---

## Table of Contents
1. [Understanding Scanner Performance](#1-understanding-scanner-performance)
2. [Scanner Status](#2-scanner-status)
3. [Initial Scan Recommendations](#3-initial-scan-recommendations)

---

## 1. Understanding Scanner Performance

### 1.1 Estimating Scan Duration

Understanding how long a scan will take helps you plan accordingly:

| Org Size | Metadata Count | Estimated Duration | Characteristics |
|----------|----------------|-------------------|-----------------|
| **Small** | < 20,000 | 1 - 3 days | Standard objects, minimal customization |
| **Medium** | 20,000 - 70,000 | 4 - 6 days | Multiple custom objects, moderate automation |
| **Large** | 70,000 - 100,000 | 7 - 10 days | Extensive customization, complex integrations |

**Factors Affecting Duration:**

*Accelerating Factors:*
- Fewer dependencies between components
- Standard objects vs. custom objects
- Inactive metadata excluded

*Slowing Factors:*
- Complex Flow conditions requiring separate processing
- Deep folder hierarchies (Reports/Dashboards)
- Large number of picklist values
- API rate limiting during peak hours

### 1.2 Scanner Limits

**Salesforce Governor Limits:**

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

**Scanner-Specific Limits:**

Due to Salesforce governor limit constraints, the scanner processes metadata in batches with configurable size limits. Each batch run has a processing limit that typically ranges between 1,000 and 7,000 records per batch, depending on the metadata type and complexity. These limits ensure the scanner operates within Salesforce API call limits and governor thresholds while optimizing performance.

### 1.3 Verifying Complete Metadata Documentation

To confirm that all metadata has been successfully documented, verify the scanner completion status in the [Scanner Status](/docs/platgovsalesforce/installingstrongpoint/config_and_stats.md#scanner-status) section of **Configuration and Stats**:

1. Navigate to **Netwrix Dashboard** > **Settings** > **Configuration and Stats**
2. Open the **Scanner Status** tab
3. Review the **Scanner Logs** section

For each Salesforce Type listed, verify the following:

- **Retrieved Stage**: Must show **Verified** for all metadata types
- **Total Customization**: Must match the **Scanner Count** value exactly

When the **Retrieved Stage** shows **Verified** and both count values match, it confirms that the scanner has successfully processed all metadata for that type. If any type shows a different status or mismatched counts, the scan is still in progress.

---

## 2. Scanner Status

You can monitor the scanner execution status in real-time through the Strongpoint UI. For detailed instructions on how to view scanner progress, check the status of running batches, and interpret the Scanner Status page, see the [Scanner Status documentation](../navigate_strongpoint#scanner-status).

You can also create your own Salesforce view to monitor scanner jobs directly in Salesforce. For step-by-step instructions on creating a custom view for the scanners, see the [Running Scanner documentation](/docs/platgovsalesforce/installingstrongpoint/running_scanner.md#creating-a-custom-view-for-scanners).

## 3. Initial Scan Recommendations

### 3.1 Running the Full Scan

Before setting up incremental or scheduled scans, you must complete an initial full scan of your Salesforce org. This full scan documents all existing metadata and establishes the baseline for future change detection.

**To configure and run the full scan:**

1. Navigate to the Strongpoint Scanner configuration
2. Configure the automated scan settings following the [Scanner Scheduler documentation](./scheduler)
3. Start the full scan and monitor its progress using the [Scanner Status page](../navigate_strongpoint#scanner-status)

**Important:** Wait for the full scan to complete before configuring incremental scans. You can verify completion by checking the information in [section 1.3](#13-verifying-complete-metadata-documentation).

### 3.2 Configuring Metadata Types to Document

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

### 3.3 Best Practices

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