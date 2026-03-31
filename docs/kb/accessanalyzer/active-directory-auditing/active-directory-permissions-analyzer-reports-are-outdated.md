---
description: >-
  Active Directory Permissions Analyzer (ADPA) reports show old data from
  deprecated domains. Create and run a job to remove outdated ADPA tables and
  repopulate them for active domains.
keywords:
  - ADPA
  - Active Directory
  - permissions
  - Netwrix Access Analyzer
  - ADInventory
  - ADPERMISSIONS
  - SQL
  - Drop Domain
  - Job
products:
  - access-analyzer
sidebar_label: 'Active Directory Permissions Analyzer reports are '
tags:
  - active-directory-auditing
title: "Active Directory Permissions Analyzer reports are outdated"
knowledge_article_id: kA04u000000HDhRCAW
---

# Active Directory Permissions Analyzer reports are outdated

## Symptoms

Old data in the Active Directory Permissions Analyzer **(ADPA)** reports from deprecated Domains.  
Example of the incorrect data:  
![Chart  Description automatically generated](./../0-images/ka04u000000HdDV_0EM4u0000084aiy.png)

## Cause

ADPA Data is not cleared when running only the ADInventory (ADI): Category >> Drop Domain – Remove host domain related data from SQL server option seen under the following:  
[Remove Domain Audit Data from Reports − Drop Domains](https://docs.netwrix.com/docs/accessanalyzer/12_0/kb/active-directory-auditing/remove-domain-audit-data-from-reports-drop-domains)

## Resolution

We will need to create a new Job to work with the APDA data in question.  
To do so you can follow the steps below.

1. Create a new Job in the Netwrix Access Analyzer console: right click the **Jobs Node** in the left-hand window and select **Create Job**:

   ![Graphical user interface, application  Description automatically generated](./../0-images/ka04u000000HdDV_0EM4u0000084aiz.png)

   Select the **Local host** in the jobs host list:

   ![Graphical user interface, application  Description automatically generated](./../0-images/ka04u000000HdDV_0EM4u0000084aj0.png)

2. Click on the **Create Query**:

   ![Graphical user interface, application, Word  Description automatically generated](./../0-images/ka04u000000HdDV_0EM4u0000084aj1.png)

3. Configure the jobs query Properties.  
   Under the **Data Sources** tab, select the **ADPERMISSIONS** option from the dropdown menu then click on **Configure**.

   ![Graphical user interface, application, Word  Description automatically generated](./../0-images/ka04u000000HdDV_0EM4u0000084aj2.png)

   Select **Remove Tables** and click **Next**:

   ![Graphical user interface, text, application, email  Description automatically generated](./../0-images/ka04u000000HdDV_0EM4u0000084aj3.png)

   Check the Results option: Click **Next** → **Finish** → **Ok**.

   ![Graphical user interface, text, application  Description automatically generated](./../0-images/ka04u000000HdDV_0EM4u0000084aj4.png)

4. Now run the new Job.

5. Once the job completes run the ADPA report; it should complete with an error.  
   Examples:
   `Invalid object name 'dbo.SA_ADPerms_PermissionsView'.`  
   `Invalid object name 'dbo.SA_ADPerms_Permissions*View'.`

Now you can run the Active Directory Permissions Analyzer Job Group to repopulate for the active Domains.

This will recreate the needed ADPA Tables and Views needed for the Reports.
