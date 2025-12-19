---
title: "Access Analyzer Console Upgrade"
description: "Access Analyzer Console Upgrade"
sidebar_position: 50
---

# Access Analyzer Console Upgrade

Access Analyzer 12.0 uses the Upgrade Wizard. For upgrades from versions of Access Analyzer that are
no longer supported, contact [Netwrix Support](https://www.netwrix.com/support.html) for assistance.

:::note
If any customizations have been done by a Netwrix Engineer, please ensure custom work is
not lost during the upgrade process. While using the Upgrade Wizard, customizations are archived
prior to solution upgrades. These archives are available after the solution upgrades have been
completed. Contact [Netwrix Support](https://www.netwrix.com/support.html) for additional
information.
:::


The purpose of this document is to provide the basic steps needed for upgrading Access Analyzer and
the stock solutions. Contact [Netwrix Support](https://www.netwrix.com/support.html) for additional
information.


## Considerations

**NEAUsers Group for Role Based Access**

Access Analyzer 12.0 introduces a new NEAUsers local group for Role Based Access (RBA). This
replaces using the local users group to assign users the necessary permissions on the Access
Analyzer application directory. If you already have Role Based Access enabled in the previous
version of Access Analyzer, then during the first initialization of Access Analyzer 12.0 the
following happens:

- The NEAUsers local group is created on the Access Analyzer Console server, and is given the
  required permissions on the Access Analyzer application (StealthAUDIT) folder
- Existing configured RBA users are added to this new NEAUsers group

    :::note
    The Web Administrator and Report Viewer roles do not require access to the Access
    Analyzer console, so users assigned these roles are not added to the NEAUsers group.
    :::


    :::note
    Adding a user to the NEAUsers group does not apply to the Web Service access type, it
    only gives Console access.
    :::


- The local users group is removed from the Access Analyzer application folder permissions

For this process to complete successfully, on first launch the user running Access Analyzer must
have local administrator rights. Otherwise, an exception will be thrown during the initialization.

Multiple Access Analyzer Consoles Connecting to the Same Database

In environments where multiple Access Analyzer Consoles are using the same SQL Server database,
every console using the database must also be updated. The act of connecting a Access Analyzer
Console with a newer version to a database updates the database’s schema pursuant to the new
definition. If a Access Analyzer Console with an older version connects to the same database after
the schema has been updated, corruption to Access Analyzer’s system tables can result.

SQL Server Supported Version Change for the Access Analyzer Database

With the release of Access Analyzer v12.0, SQL Server 2016 through SQL Server 2022 are the supported
versions for the Access Analyzer database.

To grant access to additional Solutions in an existing Access Analyzer installation, a new license
key is required. To update the Access Analyzer license key without installing a new version of the
Access Analyzer Console, see the [Update License Key](/docs/accessanalyzer/12.0/install/application/updatelicense.md) topic for instructions.

**License Key Changes**

The following changes in licensing requires the organization needing a new key:

- Access Analyzer v12.0

    - No additional licenses are required for this version

- Enterprise Auditor v11.6

    - No additional licenses are required for this version

- StealthAUDIT v11.5

    - No additional licenses are required for this version

See the [Update License Key](/docs/accessanalyzer/12.0/install/application/updatelicense.md) section for instructions on updating the license
key.
