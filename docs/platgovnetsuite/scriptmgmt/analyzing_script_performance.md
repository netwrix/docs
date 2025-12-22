---
title: "Analyzing Script Performance"
description: "Analyzing Script Performance"
sidebar_position: 10
---

# Analyzing Script Performance

In order for Script Monitoring to function effectively:

- Scripts must be deployed with a log status that supports Audit tag logging (for example, DEBUG or
  AUDIT)
- Script must be unlocked.
- Log level AUDIT is preferred since it is more efficient. DEBUG is not required for released code.
  It can be left in place on locked but not hidden code to permit some monitoring to occur.

Scripts that are not in AUDIT mode can be found using the search **Strongpoint** > **Script
Management** > **Active Script Deployments Not in Audit Log Status**. You can change the criteria to
exclude scripts set to DEBUG.

## Add Audit Start Tags

:::note
Do not use this Mass Update if you share files between your User Event Scripts and Client Scripts.
:::

The **Add Audit Tags Mass Update** inserts audit **Start Tags** into the scripts to enable the
capture of script performance data. Script Monitoring calculates execution speed based on the
difference between successive Start and End tags. Multiple tags can cause inaccuracy. The mass
update backs up your scripts so you can access the older version through the Customization Record.
Platform Governance for NetSuite has an Archive folder to store the original versions, and this
folder must be set on the mass update when adding audit tags.

Audit tags cannot be automatically added for Client Scripts due to the NetSuite Client Script
execution flow. They can be manually added, as described in this topic. These procedures only apply
to unlocked scripts.

1. Open **Documents** > **Files** > **File Cabinet**
2. Expand **SuiteBundles** > **Bundle 294336**
3. Look for **Archive** under **FLODocs Enterprise** or **FLODocs Enterprise (2)**
4. Click on folder containing **Archive**, and copy the **Internal ID** of the Archive folder. If
   the **Internal ID** column is not displayed:

    1. Open **NetSuite Home** > **Set Preferences**
    2. Under **Defaults**, make sure **Show Internal IDs** is checked on the **General** tab.
    3. Click **Save**

5. Open **Lists** > **Mass Update** > **Mass Updates**
6. Click on **Custom Updates** > **Customization** > **Strongpoint Add Audit Tag**
7. Enter **Strongpoint Add Audit Tag** for Name.
8. Paste the **Internal ID** of the **Archive** folder.

    ![Add Audit Tag Mass Update](/images/platgovnetsuite/script_management/audittag.webp)

9. Click **Preview** to review the actions. Click **Perform Update** to add the Start tags.
10. End tags are used to measure script average run time. In many cases, there is no systematic way
    of identifying where the end of the script is. Our recommended approach is to use the script
    metrics, such as **# of daily executions** to prioritize which scripts you want to measure the
    average run time. Then add the end tag manually to the end of the script.

## Adding Audit Tags Manually

Include the **NetSuite N/log Module**. Refer to the
[NetSuite N/log help](https://tstdrv1643032.app.netsuite.com/app/help/helpcenter.nl?fid=section_4574548135.html)
for more information.

**FLOStart** and **FLOEnd** Tags are NetSuite Audit tags inserted using standard syntax:

**SuiteScript 2.0 syntax:**

`log.audit({title: 'FLOStart', details: '' });`

**SuiteScript 1.0 syntax:**

`FLOStart: nlapiLogExecution(“Audit”,”FLOStart”,new Date().getTime())`

- First line of server code
- Inside relevant function of client code
- Not required for **Date Last Used** or **Employees / Departments Using**

**SuiteScript 2.0 syntax:**

`log.audit({title: 'FLOEnd', details: '' });`

**SuiteScript 1.0 syntax:**

`FLOEnd: nlapiLogExecution(“Audit”,”FLOEnd”,new Date().getTime())`

- Inside last line of relevant function
- Only required for execution speed logging

Refer to the
[NetSuite log.audit help](https://tstdrv1643032.app.netsuite.com/app/help/helpcenter.nl?fid=section_4430384449.html)
for more information on SuiteScript 2.0.

## Validate the Tags

The audit tag information is updated in the documentation once the Script Parser runs (daily). You
can validate the audit tags are in place by:

- Running **Strongpoint** > **Script Management** > **Scripts with No Audit Tags**
- Open the customization record for script and look at the **Audit Tag** field on the **Detailed
  Metadata** tab.
