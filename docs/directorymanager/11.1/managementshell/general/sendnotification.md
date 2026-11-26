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
of the notification emails.

The **Send-Notification** cmdlet requires a template file to generate an email notification. Specify
the path of the file in the TemplateFile parameter. The identity store also needs an **SMTP server**,
an SMTP port, and a **From** email address. Configure these settings with the **Set-Options**
cmdlet.

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
Set-Options -FromEmailAddress "Administrator@HR.Imanami.US"
Send-Notification -Identity "CN=UserA,CN=Users,DC=HR,DC=Imanami,DC=US" -Subject "Expiry Notification" -TemplateFile "C:\Templates\ExpiringTemplate.html" -QueueEmail

```

### Example 2

The following command sends a notification to the New Arrivals group. It uses a custom template with
an inline image and the credentials of the user set in the $Credentials environment variable. For
how to set credentials in an environment variable, see the
[Set the $Credentials Variable in Management Shell](/docs/directorymanager/11.1/managementshell/setthecredential.md)
topic. To run the command as another user, use the Credential parameter together with the
IdentityStoreId parameter.

```
Send-Notification -Identity "CN=New Arrivals,CN=Users,DC=HR,DC=Imanami,DC=US" -Subject "Welcome to Imanami" -TemplateFile "C:\Welcome.html" -InlineImageFile "C:\WelcomeNote.jpg" -QueueEmail -IdentityStoreId 2 -Credential $Credentials
```
