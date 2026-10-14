---
title: "Configuration of PingCastle Pro"
description: "Configure the PingCastle Pro application settings for a custom installation."
sidebar_position: 70
---

# Configuration of PingCastle Pro

The settings are in the appsettings.Production.json file at
the root of the application folder.

![](/images/pingcastlepro/4.0/proinstall/image48.webp)

The application needs two settings: the database and the
license information.

To change the database type, change the \"database\" settings. 
PingCastle Pro supports the following values:

- sqlserver

- postgres

To connect to the database, provide a \"connection string\" in the
\"DefaultConnection\" parameter.

:::note
PingCastle Pro stores connection strings in JSON, so you must escape them properly — for example, `\` becomes `\\`. The same applies to double quotes.
:::

For the license, use the \"License\" setting.

Here are some connection string examples:

**Sql Local DB**

```json
"Server=(localdb)\\mssqllocaldb;Database=aspnet-PingCastlePro-9521AD04-BA3A-41DC-A454-F2BD464E9391;Trusted_Connection=True;MultipleActiveResultSets=true"
```

**PostGres**

```json
"DefaultConnection": "Server=localhost;username=pingcastle;password=pingcastle;database=pingcastle"
```

**Email**

PingCastle requires configuration to send emails.

This configuration is in the appsettings.Production.json file.

![](/images/pingcastlepro/4.0/proinstall/image49.webp)

The Email is the address PingCastle uses to send email.

The login and password are the credentials PingCastle uses to connect to
the smtp server. These aren't mandatory.

The host and port is the address of the smtp server.

The email functionality sends notifications such as weekly
reports.
