---
title: "Send-Notification"
description: "Send an email notification to a group or user from a template file with the Send-Notification cmdlet, including SMTP and From address setup."
keywords:
  - Send-Notification
  - email notification
  - notification templates
  - SMTP server
  - Directory Manager PowerShell
sidebar_position: 110
---

# Send-Notification

Use the **Send-Notification** commandlet to send notifications to a group or a user. Directory Manager
modules automatically generate email notifications when certain events occur, such as group expiry,
job execution, and workflow request generation. The modules use template files to generate the
contents of the notification emails. These template files are located at:

```
X:\Program Files\Imanami\GroupID 8.0\Automate\Templates\Notifications
```

Where X is the drive where the Directory Manager installation directory resides.

The **Send-Notification** commandlet also requires a template file to generate an email
notification. You can use one of the available templates or create your own. The commandlet also
requires an **SMTP server** and a **From** email address that you can configure using the
**Set-Options** commandlet.

## Syntax

```
Send-Notification
-Identity <string>
-Subject <string>
-TemplateFile <string>
[-InlineImageFile <string>]
[-QueueEmail]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]

```

## Required Parameters

- Identity
- Subject
- TemplateFile

Example 1:

The following commands first configure the SMTP Server, then set a From email address, and finally
send a group expiry notification to UserA using the credentials of the user signed in to the
identity store.

```
Set-Options -SmtpServer "HR.Imanami.US"
Set-Options -FromAddress "Administrator@HR.Imanami.US"
Send-Notification -Identity "CN=UserA,CN=Users,DC=HR,DC=Imanami,DC=US" -Subject "Expiry Notification" -TemplateFile "C:\Program Files\Imanami\GroupID 
8.0\Automate\Templates\Notifications\ExpiringTemplate.html" -QueueEmail

```

Example 2:

The following command sends a notification to the New Arrivals group. It uses a custom template with
an inline image and uses the credentials of the user set in the $Credentials environment variable.
See the
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.0/managementshell/setthecredential.md)
topic for setting credentials in an environment variable.

```
Send-Notification -Identity "CN=New Arrivals,CN=Users,DC=HR,DC=Imanami,DC=US" -Subject "Welcome to Imanami" -TemplateFile "C:\Welcome.html" -InlineImageFile "C:\WelcomeNote.jpg" -QueueEmail
```

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager General Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/general/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
