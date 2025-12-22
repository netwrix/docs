---
title: "Audit Configuration Assistant"
description: "Audit Configuration Assistant"
sidebar_position: 10
---

# Audit Configuration Assistant

Auditor Audit Configuration Assistant utility helps you to assess your environment readiness to
being monitored with the product and automatically adjust the audit settings with the requirements.

It checks current settings of your Active Directory and Group Policies against those required for
monitoring of selected data sources: Group Policy settings, auditing entries for directory
partitions, and admin audit log settings of Exchange server. Assessment results are reported on the
screen and can be downloaded as a PDF file.

You can instruct the utility to automatically apply the required settings.

For that, you should ensure that the account you plan to use for accessing the target domain has the
necessary rights.

**Audit Configuration Assistant** is a part of Netwrix Auditor product setup. It is installed
together with the Auditor client and can be launched from the **Start** **menu** **>\_\_**Netwrix
Auditor\*\*\*\*>**\*\*Netwrix Auditor Audit Configuration Assistant**. Alternatively, you can launch
this utility from the monitoring plan wizard for Active Directory data source. See the Launch Audit
Configuration Assistant section for additional information.

Currently, the utility supports Active Directory and Logon Activity data sources.

## Prerequisites

When working with the utility, you will need to provide an account with the rights required to
access the AD audit entries and other settings. Thus, the account should be a member of the
following groups:

- _Domain Admins_ — to access audit policies and audit entries on the domain controllers
- _Enterprise Admins_ — to configure audit entries for AD partitions
- _Organization Management_ or _Records Management_ (in Exchange organization) — to configure admin
  audit log settings

You can create a dedicated account for the assessment purposes, include it in these groups for the
assessment period, and after finishing, remove it from these privileged groups.

## Usage

To assess and adjust the audit settings with Audit Configuration Assistant, take the following
steps:

1. Launch Audit Configuration Assistant
2. Start Assessment
3. View Results
4. Complete the process

## Launch Audit Configuration Assistant

Audit Configuration Assistant is a part of Netwrix Auditor product setup. It is installed together
with Netwrix Auditor client and can be launched from the **Start** menu.

Select **Netwrix Auditor**→**Netwrix Auditor Audit Configuration Assistant**.

- If the utility is installed on the same machine as Netwrix Auditor server, you will be taken to
  the **Welcome** step.
- If the utility is installed on the remote machine together with Netwrix Auditor client, the
  initial window will allow you to enter the settings to connect to Netwrix Auditor Server. Specify
  the following:

| Setting                   | Description                                                                                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Host                      | Enter the name or IP address of Netwrix Auditor Server to connect to.                                                                                         |
| Use specified credentials | If not selected, then your current Windows credentials will be used to access Netwrix Auditor Server. Select this option if you want to use other credentials |
| User                      | Enter user account in the _domain\name_ format.                                                                                                               |
| Password                  | Enter account password.                                                                                                                                       |

After you click **Connect**, the connection with Netwrix Auditor Server will be established, and you
will be taken to the **Welcome** step.

Alternatively, you can launch this utility by clicking the corresponding link:

- From [Create a New Monitoring Plan](/docs/auditor/10.8/admin/monitoringplans/create.md) for Active Directory data
  source.
- From the [Active Directory](/docs/auditor/10.8/admin/monitoringplans/activedirectory/overview.md) within the plan.
- From the [Logon Activity](/docs/auditor/10.8/admin/monitoringplans/logonactivity/overview.md) source properties.

## Start Assessment

Follow the steps to start assessment.

**Step 1 –** Specify the monitoring scope —select what you plan to monitor with Netwrix Auditor. You
can select both **Active Directory** and **Logon Activity**, or any of them.

![audit_cfg_assist_creds](/images/auditor/10.7/tools/audit_cfg_assist_creds.webp)

**Step 2 –** If you launched **Audit Configuration Assistant** from the **Start** menu (not from the
monitoring plan settings), enter the name of Active Directory domain you want to assess.

**Step 3 –** Enter credentials that will be used to access the audit setting of that domain. This
account must be included in the following groups:

- _Domain Admins_ — to access audit policies and audit entries on the domain controllers
- _Enterprise Admins_ — to configure audit entries for AD partitions
- _Organization Management_ or _Records Management_ (in Exchange organization) — to configure admin
  audit log settings

**Step 4 –** Click **Start assessment**.

## View Results

At this step, you will be presented the results of the environment readiness assessment, including:

- the list of current and required settings for each entity
- the list of issues (if any) that occurred during the assessment

![assessment_results_thumb_0_0](/images/auditor/10.7/tools/assessment_results_thumb_0_0.webp)

Follow the steps to view results.

**Step 1 –** Examine the report.

**Step 2 –** If some issues occurred due to the lack of access rights during the assessment, you can
click **Back** and modify the settings provided at the previous step.

**Step 3 –** If you need to save this report (for example, to get your manager's approval), click
**Export to PDF**.

**Step 4 –** When ready, you can automatically adjust audit settings with the requirements — for
that, click **Apply required settings**.

## Complete the process

After you click **Apply required settings**, the utility will proceed with modifying your current
audit settings. Operation progress will be reported in the bottom of the window.

**Step 1 –** Wait for the process to complete.

**Step 2 –** Review the results. Successfully applied settings will be reported with a green tick;
those that did not manage to apply will be with the yellow warning sign and explanatory text.

**Step 3 –** You can click **Start over** to get to the Start Assessment, fix the issues and perform
the procedure again, or click **Finish**.
