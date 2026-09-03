---
title: "SPAA: Test Access"
description: "SPAA: Test Access"
sidebar_position: 130
---

# SPAA: Test Access

Use the Test Access page to check access to SharePoint On-Premises environments. The Test Access
function uses each credential in a job's Connection profile to test access to a SharePoint
environment. The Test Access page tests access to the following:

- Access to the remote registry
- SQL Access (for databases associated with the SharePoint farms)
- All Web Applications in the SharePoint environment

![Test Access page](/images/accessanalyzer/12.0/admin/datacollector/spaa/testaccess.webp)

The options and sections on the Test Access page are:

- SharePoint App Server – Enter the server name for the SharePoint environment in the SharePoint App
  Server text box. Click **Check Access** to test access to the SharePoint environment.

    - For example – `sbnjqasp30` or `sbnjqasp3.qa.com`
    - Don't include `http[s]://` or use a URL for the server name. You can't scope the Test Access
      function to individual Web applications.

- Access Test Results – Displays information on test results. Access Analyzer lists test criteria
  in the **Description** column and returns test results as either **Pass** or **Fail** in the
  Results column.
- Save Report – Click **Save Report** to export and save a text version of the test results

|                                                                                                                                                         |                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Successful test example](/images/accessanalyzer/12.0/admin/datacollector/spaa/testaccessbadtest.webp) |
| **Successful Test (Correct Credentials)**                                                                                                               | **Unsuccessful Test (Incorrect Credentials)**                                                                                                            |
