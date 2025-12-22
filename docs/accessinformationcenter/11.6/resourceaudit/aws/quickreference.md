---
title: "Amazon (AWS) Reports Quick Reference Guide"
description: "Amazon (AWS) Reports Quick Reference Guide"
sidebar_position: 10
---

# Amazon (AWS) Reports Quick Reference Guide

The following Amazon (AWS) reports are available for selections within the Resources pane.

## Amazon (AWS) Node Report

The following report is available at the Amazon node level:

| Report                                                                                                                                                 | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/11.6/resourceaudit/aws/sensitivecontentsummary.md) | Provides a count of files where criteria matches were found in the targeted environment. This report includes a Details table. |

## Amazon > Organization Level Reports

The following reports are available at the Organization level:

| Report                                                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Sensitive Content Details Report](/docs/accessinformationcenter/11.6/resourceaudit/aws/organization/sensitivecontentdetails.md) | Provides a count of files where criteria matches were found on the selected instance. This report includes a table with criteria Matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Enterprise Auditor database or it will be blank. |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/11.6/resourceaudit/aws/organization/sensitivecontentsummary.md) | Provides a count of files where criteria matches were found on the selected instance. This report includes a Details table.                                                                                                                                                                                                                                                  |

## Amazon > Organization > Bucket Level Reports

The following reports are available at the Bucket level:

| Report                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Permissions Report](/docs/accessinformationcenter/11.6/resourceaudit/aws/bucket/permissions.md)            | Shows the permissions for the trustee on the selected resource.                                                                                                                                                                                                                                                                                                                                      |
| [Sensitive Content Report](/docs/accessinformationcenter/11.6/resourceaudit/aws/bucket/sensitivecontent.md) | Provides a list of files and a hit count per file where criteria matches were found on the selected resource. This report includes a table with criteria Matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Enterprise Auditor database or it will be blank. |
