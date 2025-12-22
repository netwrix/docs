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
If any customizations have been done by a Netwrix Engineer, please ensure custom work is
not lost during the upgrade process. While using the Upgrade Wizard, customizations are archived
prior to solution upgrades. These archives are available after the solution upgrades have been
completed. Contact [Netwrix Support](https://www.netwrix.com/support.html) for additional
information.
:::


The purpose of this document is to provide the basic steps needed for upgrading Enterprise Auditor
and the stock solutions. Contact [Netwrix Support](https://www.netwrix.com/support.html) for
additional information.


## Considerations

**Multiple Enterprise Auditor Consoles Connecting to the Same Database**

In environments where multiple Enterprise Auditor Consoles are using the same SQL Server database,
every console using the database must also be updated. The act of connecting a Enterprise Auditor
Console with a newer version to a database updates the database’s schema pursuant to the new
definition. If a Enterprise Auditor Console with an older version connects to the same database
after the schema has been updated, corruption to Enterprise Auditor’s system tables can result.

**SQL Server Supported Version Change for the Enterprise Auditor Database**

With the release of Enterprise Auditor v11.6, SQL Server 2016 through SQL Server 2022 are the
supported versions for the Enterprise Auditor database.

To grant access to additional Solutions in an existing Enterprise Auditor installation, a new
license key is required. To update the Enterprise Auditor license key without installing a new
version of the Enterprise Auditor Console, see the
[Update License Key](/docs/accessanalyzer/11.6/install/application/updatelicense.md)
topic for instructions.

**License Key Changes**

The following changes in licensing requires the organization needing a new key:

- Enterprise Auditor v11.6

    - No additional licenses are required for this version

- StealthAUDIT v11.5
    - No additional licenses are required for this version
- StealthAUDIT v11.0
    - The new Data Privacy functionality is now a licensable feature.
    - All database platforms are available as part of a single SQL license.
- StealthAUDIT v10.0
    - The new Amazon Web Services (AWS) Solution and the AWS Data Collector is now a licensable
      feature.

See the
[Update License Key](/docs/accessanalyzer/11.6/install/application/updatelicense.md)
section for instructions on updating the license key.
