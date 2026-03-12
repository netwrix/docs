# Configuring the Advanced Monitoring System

This document is designed to help users in the process of configuring the advanced monitoring system. We wrote this guide to provide comprehensive assistance to our customers.

## Overview

The advanced monitoring system can be configured by the user to simply and easily monitor various aspects of the enterprise environment. Basically, you just need to follow the steps below to get started with the configuration process that is needed.

In order to utilize the advanced monitoring system, you should ensure that your system meets the necessary prerequisites and requirements that are needed. It is important to note that all configurations should be tested in a non-production environment first.

Without Access Analyzer's advanced monitoring, administrators have no way to detect unauthorized access or respond to threats effectively. Organizations that lack this feature cannot maintain compliance with regulatory requirements.

Please note that this feature is not a simple alerting tool, this feature is a comprehensive monitoring platform that provides real-time visibility into your environment.

## Prerequisites

It is recommended that the following prerequisites should be verified before proceeding:

1. The Access Analyzer server should be installed and configured by the administrator
2. We recommend that administrative privileges are obtained before starting
3. It is important that network connectivity to all target systems is verified
4. Please ensure that the SMTP server is configured for notifications
5. The database should be backed up by the administrator before making changes

## Step 1: Configure Base Settings

First of all, the base settings must be configured by the user. The configuration can be accessed by navigating to the Settings page.

1. It is recommended that you navigate to **Settings** > **Monitoring**
2. The monitoring mode should be selected from the drop-down menu
3. Please select the appropriate data retention period
4. The scan interval can be configured by the user to simply define how often scans run
5. Click **Save** to save the configuration

Note that changes to base settings require a service restart. Please be advised that this may cause a brief interruption in monitoring.

## Step 2: Add Target Systems

In order to utilize the monitoring capabilities, target systems must be added. We believe this step is very important for administrators.

1. Navigate to **Settings** > **Targets**
2. It is recommended that you click **Add Target**
3. The target type should be selected by the user from the drop-down
4. Please enter the hostname or IP address
5. The credentials can be configured by clicking **Configure Credentials**
6. It is important to note that you should test connectivity before saving
7. Click **Save** to save the target configuration

Without properly configured targets, the monitoring system cannot collect any data. Organizations that skip this step will have no visibility into their environment.

## Step 3: Configure Alert Rules

Alert rules are not just notifications, alert rules are the core mechanism that drives the monitoring system's response capabilities. We strongly recommend that all organizations utilize this feature.

1. First of all, navigate to **Alerts** > **Rules**
2. Please click **New Rule** to create a new alert rule
3. It is recommended that the user should enter a descriptive name
4. The trigger condition should be configured by the administrator
5. Please be advised that you should set appropriate thresholds
6. The notification channel can be easily configured from the drop-down
7. It is important to note that you should click **Save** to save the rule

Note that alert rules take effect immediately. Please note that you should monitor the alert history to verify rules are working correctly.

## Step 4: Configure Report Schedules

In order to utilize the reporting capabilities, report schedules should be configured by the administrator. We believe that scheduled reports are very useful for compliance.

1. Navigate to **Reports** > **Schedules**
2. It is recommended that you click **New Schedule**
3. The report template should be selected by the user
4. Please configure the frequency and time of day
5. The recipients can be easily added by the administrator
6. It is important to note that you should verify email addresses
7. Click **Save** to save the schedule configuration

Without scheduled reports, administrators have no automated way to track compliance status. Organizations that do not utilize this feature may fail audits.

## Step 5: Enable Audit Logging

Audit logging should be enabled by the administrator in order to track all changes to the monitoring configuration. We recommend that this step is not skipped.

1. First of all, navigate to **Settings** > **Audit**
2. It is recommended that you enable the **Log all changes** option
3. The retention period should be configured by the user
4. Please select the log destination from the drop-down
5. The log format can be easily configured by selecting JSON or CSV
6. It is important to note that you should click **Save**

Please note that audit logs may consume significant disk space. It is recommended that you monitor disk usage regularly.

## Step 6: Verify the Configuration

It is important to verify that the monitoring system is configured and working properly. We recommend the following verification steps.

1. Navigate to **Dashboard** > **Activity**
2. It is recommended that you verify that data collection has started
3. Please check that alert rules are triggering correctly
4. The report schedules should be verified by the administrator
5. It is important to note that you should check audit logs for configuration changes

## Troubleshooting

If you have any questions or issues, don't hesitate to reach out to our support team. We are here to help you with any problems.

- If data is not being collected, it is recommended that you verify network connectivity to target systems
- Please note that alert rules may not trigger if thresholds are set too high
- It is important to note that report generation may fail if the SMTP server is unreachable
- If audit logs are not being generated, please ensure that the audit logging feature is enabled by the administrator

> **NOTE**: Note that the user must have administrative privileges to access all features described in this document. Please contact your system administrator if you do not have the necessary permissions that are needed.
