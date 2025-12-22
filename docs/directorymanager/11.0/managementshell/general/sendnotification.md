---
title: "Send-Notification"
description: "Send-Notification"
sidebar_position: 110
---

# Send-Notification

Use the **Send-Notification** commandlet to send notifications to a group or a user. GroupID modules
automatically generate e-mail notifications upon the occurrence of certain events; for example,
expiry of groups, execution of a job, and generation of workflow requests. The modules use template
files for generating the contents of the notification e-mails. These template files are located at:

```
X:\Program Files\Imanami\GroupID 8.0\Automate\Templates\Notifications
```

Where X is the drive where the GroupID installation directory resides.

The **Send-Notification** commandlet also requires a template file for generating an e-mail
notification. You can utilize one from the available templates or create your own. The commandlet
also requires an **SMTP server** and a **From** e-mail address that you can configure using the
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

The following commands first configure the SMTP Server, then set a From e-mail address, and finally
send a group expiry notification to UserA using the credentials of current user logged-on to the
identity store.

```
Set-Options -SmtpServer "HR.Imanami.US"
Set-Options -FromAddress "Administrator@HR.Imanami.US"
Send-Notification -Identity "CN=UserA,CN=Users,DC=HR,DC=Imanami,DC=US" -Subject "Expiry Notification" -TemplateFile "C:\Program Files\Imanami\GroupID 
8.0\Automate\Templates\Notifications\ExpiringTemplate.html" -QueueEmail

```

Example 2:

The following command sends a notification to the New Arrivals group. It uses a custom template with
an in-line image and uses the credentials of the user set in the $Credentials environment variable.
See the
[Set the $Credentials Environment Variable](/docs/directorymanager/11.0/managementshell/setthecredential.md)
topic for setting credentials in an environment variable.

```
Send-Notification -Identity "CN=New Arrivals,CN=Users,DC=HR,DC=Imanami,DC=US" -Subject "Welcome to Imanami" -TemplateFile "C:\Welcome.html" -InlineImageFile "C:\WelcomeNote.jpg" -QueueEmail
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [General Commands](/docs/directorymanager/11.0/managementshell/general/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
