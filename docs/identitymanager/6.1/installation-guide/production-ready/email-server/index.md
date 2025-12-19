---
title: "Send Notifications"
description: "Send Notifications"
sidebar_position: 50
---

# Send Notifications

An SMTP server is used by the **Usercube Server** to send notification emails to its users, and by
the **Usercube Agent** to send Reset Password emails.

## Email Delivery

### Via a local SMTP server and the pickup directory

Both the Agent and the Server can send emails using a **local SMTP server** with Microsoft's
**Pickup Directory** feature.

**Pickup Directory** is a feature offered by most of Microsoft's SMTP services, such as IIS SMTP
service or Microsoft Exchange Server.

The pickup directory helps reducing network overhead by eliminating SMTP traffic between
applications, such as the Usercube Server or Usercube Agent, and SMTP servers. It is particularly
useful when using emails as notifications.

To send an email, an application usually communicates with an SMTP server via the SMTP protocol. In
the real world, email notifications generate a lot of traffic on the organization network. This
extra traffic can be avoided by having applications (such as the Usercube Server or Usercube Agent)
write emails as local files in a local directory instead of sending SMTP packets.

The SMTP server will then periodically check the directory and send any email found in it. The SMTP
exchange between the applications and the SMTP server is replaced by file writing and reading.

The directory where clients write emails as files is called the **pickup directory**.

### Via an external SMTP server

Both the Agent and the Server can get their emails delivered through an **external** SMTP server.

## Usercube Server Emails

The SMTP server used by the Usercube Server is configured in the
[Applicative configuration settings](/docs/identitymanager/6.1/integration-guide/network-configuration/server-configuration/general-purpose/index.md).

Here is an example with an external SMTP server.

```

**appsettings.json**

{
  ...
  "MailSettings": {
    "Host": "smtp.contoso.com",
    "FromAddress": "no-reply@contoso.com"
  }
}

```

The **Host** attribute is the hostname or IP address of an external SMTP server. You can also
specify a directory path instead, that would be the **pickup directory** of your **local** SMTP
server.

You can also input a **UserName** and **Password** if the SMTP server requires Usercube to
authenticate to send emails.

## Usercube Agent Emails

From the agent side, the email settings dwell in the
[Agent's appsetting](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
file.

Here is a classic example that enables Usercube to send emails through the _smtp.contoso.com_ server
using _[no-reply@contoso.com](mailto:no-reply@contoso.com)_ as the sender address. The Usercube
Agent will authenticate to the SMTP server with the _contosousercube_ login.

```

"MailSettings": {
    "FromAddress": "no-reply@contoso.com",
    "Host":"smtp.contoso.com",
    "Port":993,
    "Username": "contosousercube",
    "Password": "secret"
  }

```

If you'd rather use a **local** SMTP server with **pickup directory**, _Host_, _Port_, _Username_
and _Password_ won't be needed.

```

"MailSettings": {
    "FromAddress": "no-reply@contoso.com",
    "UseSpecifiedPickupDirectory": true,
    "PickupDirectory": "C:/Temp/identitymanagerContosoPickup",
  }

```

## That's It!

Now, you're all set to start using Usercube.

Enjoy the benefits of your new Identity and Access Management solution.
