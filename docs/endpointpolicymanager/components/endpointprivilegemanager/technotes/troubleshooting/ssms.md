---
title: "Why is my File Info Deny rule for SQL MGMT Studio version 14.x and lower not working?"
description: "Why is my File Info Deny rule for SQL MGMT Studio version 14.x and lower not working?"
sidebar_position: 110
---

# Why is my File Info Deny rule for SQL MGMT Studio version 14.x and lower not working?

## PROBLEM:

You have created a Deny rule using the File Info condition in Least Privilege Manager for SQL
Management Studio where you wish to deny running version 14.0.17289.0 and any other lower versions.
However, the only version that is being blocked is version 14.0.17289.0, anything lower is being
allowed to run.

## REASON:

The file Info deny rule was created by browsing for a reference file and selecting the SQL
Management Studio installer file (SSMS-Setup-ENU.exe). However, the PRODUCT name is different for
every version of the SQL Management installer which is why the issue is occurring. If you look in
the screenshot below you will see that even though the version shows 14.0.17289.0 the Product name
is "Microsoft SQL Server Management Studio - 17.9.1" and is specific to only one version of
Microsoft SQL Server Management Studio.

![845_1_image-20210418215120-1](/images/endpointpolicymanager/troubleshooting/leastprivilege/fileinfodeny/845_1_image-20210418215120-1.webp)

## SOLUTION:

To work around this issue, you can replace the PRODUCT name with a wildcard.

![845_2_image-20210419165857-2](/images/endpointpolicymanager/troubleshooting/leastprivilege/fileinfodeny/845_2_image-20210419165857-2.webp)


