---
title: "Enterprise Auditor Console Upgrade"
description: "Enterprise Auditor Console Upgrade"
sidebar_position: 50
---

# Enterprise Auditor Console Upgrade

Enterprise Auditor 11.6 uses the Upgrade Wizard. For upgrades from versions of Enterprise Auditor
that are no longer supported, contact [Netwrix Support](https://www.netwrix.com/support.html) for
assistance.

:::note
If a Netwrix Engineer has done any customizations, ensure the upgrade process doesn't
lose that custom work. The Upgrade Wizard archives customizations
before solution upgrades. These archives are available after the solution upgrades
complete. Contact [Netwrix Support](https://www.netwrix.com/support.html) for additional
information.
:::


This document provides the basic steps needed for upgrading Enterprise Auditor
and the stock solutions. Contact [Netwrix Support](https://www.netwrix.com/support.html) for
additional information.


## Considerations

**Multiple Enterprise Auditor Consoles Connecting to the Same Database**

In environments where multiple Enterprise Auditor Consoles are using the same SQL Server database,
you must also update every console using the database. The act of connecting a Enterprise Auditor
Console with a newer version to a database updates the database’s schema pursuant to the new
definition. If a Enterprise Auditor Console with an older version connects to the same database
after the schema has been updated, corruption to Enterprise Auditor’s system tables can result.

**SQL Server Supported Version Change for the Enterprise Auditor Database**

With the release of Enterprise Auditor v11.6, SQL Server 2016 through SQL Server 2025 are the
supported versions for the Enterprise Auditor database.

Granting access to additional Solutions in an existing Enterprise Auditor installation requires a
new license key. To update the Enterprise Auditor license key without installing a new
version of the Enterprise Auditor Console, see the
[Update License Key](/docs/accessanalyzer/11.6/install/application/updatelicense.md)
topic for instructions.

**License Key Changes**

The following licensing changes require the organization to get a new key:

- Enterprise Auditor v11.6

    - This version requires no additional licenses

- StealthAUDIT v11.5
    - This version requires no additional licenses
- StealthAUDIT v11.0
    - The new Data Privacy functionality is now a licensable feature.
    - All database platforms are available as part of a single SQL license.
- StealthAUDIT v10.0
    - The new Amazon Web Services (AWS) Solution and the AWS Data Collector is now a licensable
      feature.

See the
[Update License Key](/docs/accessanalyzer/11.6/install/application/updatelicense.md)
section for instructions on updating the license key.
