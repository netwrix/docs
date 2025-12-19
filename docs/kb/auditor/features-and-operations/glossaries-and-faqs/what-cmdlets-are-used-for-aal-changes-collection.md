---
description: >-
  Lists the Exchange cmdlets Netwrix Auditor uses to collect Administrator Audit
  Logging (AAL) events and explains the required "Audit Logs" role assignment
  and PowerShell commands to check, assign, and remove the role.
keywords:
  - AAL
  - Administrator audit logging
  - Search-AdminAuditLog
  - Audit Logs
  - Get-AdminAuditLogConfig
  - Get-ManagementRoleAssignment
  - New-ManagementRoleAssignment
products:
  - auditor
sidebar_label: What cmdlets are used for AAL changes collection?
tags: []
title: "What cmdlets are used for AAL changes collection?"
knowledge_article_id: kA00g000000H9WVCA0
---

# What cmdlets are used for AAL changes collection?

I need to specify the service account permission to read AAL(Administrator audit logging), what cmdlets are being used to collect AAL data? Also you may see the following error in the daily summary report:

*Connection with the Exchange server was interrupted: The term 'Search-AdminAuditLog' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included verify that the path is correct and try again*.

---

## Cmdlets used to collect AAL events

In order to collect AAL events Netwrix Auditor uses the following cmdlets:

- [Get-AdminAuditLogConfig](http://technet.microsoft.com/en-us/library/dd298077%28v=exchg.150%29.aspx)
- [Search-AdminAuditLog](http://technet.microsoft.com/en-us/library/ff459250%28v=exchg.150%29.aspx)

## Required permissions

In order to run these cmdlets the service account should have appropriate permissions (`Audit Logs` role assignment). In order to check the Audit logs role assignment use the following cmdlet:

```
Get-ManagementRoleAssignment -Role "Audit Logs"
```

In order to provide Audit logs role assignment to the service account please run the following cmdlet:

- [New-ManagementRoleAssignment -Role "Audit Logs" -User `<Identity>`](http://technet.microsoft.com/en-us/library/jj150497(v=exchg.150).aspx#auditinginecp)

In order to remove the assigned Role please run:

Command:
```
Get-ManagementRoleAssignment -RoleAssignee USERNAME@Domain.onmicrosoft.com -Role "Audit Logs" -Delegating $false | Remove-ManagementRoleAssignment
```

Reference: https://docs.microsoft.com/en-us/exchange/remove-a-role-from-a-user-or-usg-exchange-2013-help
