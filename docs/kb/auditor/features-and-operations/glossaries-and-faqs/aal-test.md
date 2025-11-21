---
description: >-
  Shows PowerShell test steps to validate Administrator Audit Logging
  connectivity from the Netwrix host to Exchange and how to troubleshoot the
  "Administrator Audit Logging is not configured" error.
keywords:
  - Administrator Audit Logging
  - Exchange
  - Netwrix Auditor
  - PowerShell
  - AdminAuditLogConfig
  - Invoke-Command
  - New-PSSession
products:
  - auditor
sidebar_label: AAL test
tags: []
title: "AAL test"
knowledge_article_id: kA00g000000H9SECA0
---

# AAL test

You have already configured **Administrator Audit Logging** on your Exchange Server but still receive the following error in the Netwrix Auditor change reports: "Administrator Audit Logging is not configured for the %Organization name% Exchange organization..." Please perform the following test steps on the Netwrix host server using **PowerShell**:"

## Test steps

1. Validate your user principal name (UPN):
   - ` $UserCredential = Get-Credential`
2. Create remote session:
   - ```
     $ExSession = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri http:// mailbox01.domain.local/PowerShell/ -Authentication Kerberos -Credential $UserCredential
     ```
   - **Note:** Replace `mailbox01.domain.local` with the fully qualified domain name of your Exchange server
3. Check the session status:
   - `$ExSession`
4. Try to read AdminAuditLog:
   - ```
     Invoke-Command -Session $Exsession -scriptBlock {Get-AdminAuditLogConfig }
     ```
5. As a last step, execute:
   - ```
     Invoke-Command -Session $Exsession -scriptBlock {Search-AdminAuditLog }
     ```

If the session has been successfully created (steps 1 and 2 were successful), but step 3 returns an error, please try to check the **AdminAuditLog** content manually using the following cmdlet: `Get-AdminAuditLogConfig.`

## Example error

If you get the following error:

```
"PS C:Users%username%> Invoke-Command -Session $Exsession -scriptBlock {$AALC onfig = Get-AdminAuditLogConfig } The term 'Get-AdminAuditLogConfig' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again. + CategoryInfo : ObjectNotFound: (Get-AdminAuditLogConfig:String) [], CommandNotFoundException + FullyQualifiedErrorId : CommandNotFoundException"
```

This error means that there is not enough rights to run this cmdlet: please check the service account rights assignment.

## More information

This guide from Microsoft will help you remotely connecting to Exchange Server using Powershell: https://docs.microsoft.com/en-us/powershell/exchange/connect-to-exchange-servers-using-remote-powershell?view=exchange-ps
