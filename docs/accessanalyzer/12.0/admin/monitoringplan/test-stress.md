# Configuring the Advanced Monitoring System

This document describes how to configure the advanced monitoring system.

## Overview

The advanced monitoring system monitors various aspects of the enterprise environment. Follow the steps below to complete the configuration.

To use the advanced monitoring system, verify that your system meets the prerequisites before proceeding.

:::note
Test all configurations in a non-production environment before applying them to production.
:::

Access Analyzer is a comprehensive monitoring platform that provides real-time visibility into your environment, not just an alerting tool.

## Prerequisites

Verify the following prerequisites before proceeding:

1. Install and configure the Access Analyzer server
2. Obtain administrative privileges
3. Verify network connectivity to all target systems
4. Configure the SMTP server for notifications
5. Back up the database before making changes

## Step 1: Configure Base Settings

Access the base settings by navigating to the Settings page.

1. Navigate to **Settings** > **Monitoring**
2. Select the monitoring mode from the dropdown menu
3. Select the appropriate data retention period
4. Configure the scan interval to define how often scans run
5. Click **Save**

:::note
Changes to base settings require a service restart, which might cause a brief interruption in monitoring.
:::

## Step 2: Add Target Systems

Target systems provide the data source for all monitoring activity.

1. Navigate to **Settings** > **Targets**
2. Click **Add Target**
3. Select the target type from the dropdown
4. Enter the hostname or IP address
5. Click **Configure Credentials** to configure credentials
6. Test connectivity before saving
7. Click **Save**

## Step 3: Configure Alert Rules

Alert rules drive the monitoring system's response capabilities.

1. Navigate to **Alerts** > **Rules**
2. Click **New Rule**
3. Enter a descriptive name for the rule
4. Configure the trigger condition
5. Set appropriate thresholds
6. Select the notification channel from the dropdown
7. Click **Save**

:::note
Alert rules take effect immediately. Monitor the alert history to verify that rules are working correctly.
:::

## Step 4: Configure Report Schedules

Configure report schedules to automate compliance reporting.

1. Navigate to **Reports** > **Schedules**
2. Click **New Schedule**
3. Select the report template
4. Configure the frequency and time of day
5. Add the recipients
6. Verify the email addresses
7. Click **Save**

## Step 5: Enable Audit Logging

Enable audit logging to track all changes to the monitoring configuration.

1. Navigate to **Settings** > **Audit**
2. Enable the **Log all changes** option
3. Configure the retention period
4. Select the log destination from the dropdown
5. Select the log format: JSON or CSV
6. Click **Save**

:::note
Audit logs can consume significant disk space. Monitor disk usage regularly.
:::

## Step 6: Verify the Configuration

Verify that the monitoring system is configured and working properly.

1. Navigate to **Dashboard** > **Activity**
2. Verify that data collection has started
3. Check that alert rules are triggering correctly
4. Verify the report schedules
5. Check audit logs for configuration changes

## Troubleshooting

- If data is not being collected, verify network connectivity to target systems
- Alert rules might not trigger if thresholds are set too high
- Report generation might fail if the SMTP server is unreachable
- If audit logs are not being generated, verify that audit logging is enabled

:::note
Administrative privileges are required to access all features described in this document. Contact your system administrator if you don't have the necessary permissions.
:::
