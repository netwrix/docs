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

Use the Send-Notification cmdlet to send notifications to a group or a user. Directory Manager
modules automatically generate email notifications when events occur, such as group expiry, job
execution, and workflow request generation. The modules use template files to generate the contents
of the notification emails. The template files are in this location:

```
X:\Program Files\Imanami\GroupID 8.0\Automate\Templates\Notifications
```

X is the drive that holds the Directory Manager installation directory.

The **Send-Notification** cmdlet requires a template file to generate an email notification. Use
one of the available templates or create your own. The cmdlet also requires an **SMTP server** and a
**From** email address. Configure both with the **Set-Options** cmdlet.

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

## Required parameters

- Identity
- Subject
- TemplateFile

### Example 1

The following commands configure the SMTP server, set a From email address, and then send a group
expiry notification to UserA. They use the credentials of the user signed in to the identity store.

```
Set-Options -SmtpServer "HR.Imanami.US"
Set-Options -FromAddress "Administrator@HR.Imanami.US"
Send-Notification -Identity "CN=UserA,CN=Users,DC=HR,DC=Imanami,DC=US" -Subject "Expiry Notification" -TemplateFile "C:\Program Files\Imanami\GroupID 
8.0\Automate\Templates\Notifications\ExpiringTemplate.html" -QueueEmail

```

### Example 2

The following command sends a notification to the New Arrivals group. It uses a custom template with
an inline image and the credentials of the user set in the $Credentials environment variable. For
how to set credentials in an environment variable, see the [Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.2/managementshell/setthecredential.md) topic.

```
Send-Notification -Identity "CN=New Arrivals,CN=Users,DC=HR,DC=Imanami,DC=US" -Subject "Welcome to Imanami" -TemplateFile "C:\Welcome.html" -InlineImageFile "C:\WelcomeNote.jpg" -QueueEmail
```
