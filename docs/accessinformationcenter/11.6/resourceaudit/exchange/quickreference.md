---
title: "Exchange Reports Quick Reference Guide"
description: "Exchange Reports Quick Reference Guide"
sidebar_position: 10
---

# Exchange Reports Quick Reference Guide

The following Exchange reports are available for selections within the Resources pane.

## Exchange Node Report

The following report is available at the Exchange node level:

| Report                                                                                                                                                      | Description                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/11.6/resourceaudit/exchange/sensitivecontentsummary.md) | Provides a count of files where criteria matches were found in the targeted environment. This report includes a Details table. |

## Exchange > Server Level Reports

The following reports are available at the server level:

| Report                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Sensitive Content Details Report](/docs/accessinformationcenter/11.6/resourceaudit/exchange/server/sensitivecontentdetails.md) | Provides details of files where criteria matches were found on the selected instance. This report includes a table with criteria Matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Enterprise Auditor database or it will be blank. |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/11.6/resourceaudit/exchange/server/sensitivecontentsummary.md) | Provides a count of files where criteria matches were found on the selected instance. This report includes a Details table.                                                                                                                                                                                                                                                  |

## Exchange > Server > Mailbox and Folder Level Reports

The following reports are available at the mailbox and folder level:

| Report                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Permissions Report](/docs/accessinformationcenter/11.6/resourceaudit/exchange/mailboxfolder/permissions.md)            | Shows the permissions for the trustee on the selected resource.                                                                                                                                                                                                                                                                                                                                      |
| [Sensitive Content Report](/docs/accessinformationcenter/11.6/resourceaudit/exchange/mailboxfolder/sensitivecontent.md) | Provides a list of files and a hit count per file where criteria matches were found on the selected resource. This report includes a table with criteria Matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Enterprise Auditor database or it will be blank. |
