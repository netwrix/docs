---
title: "Access Analyzer Console Upgrade"
description: "Access Analyzer Console Upgrade"
sidebar_position: 50
---

# Access Analyzer Console Upgrade

Access Analyzer 12.0 uses the Upgrade Wizard. For upgrades from versions of Access Analyzer that are
no longer supported, contact [Netwrix Support](https://www.netwrix.com/support.html) for assistance.

:::note
If a Netwrix Engineer has done any customizations, ensure the upgrade process doesn't
lose that custom work. The Upgrade Wizard archives customizations
before solution upgrades. These archives are available after the solution upgrades
complete. Contact [Netwrix Support](https://www.netwrix.com/support.html) for additional
information.
:::


This document provides the basic steps needed for upgrading Access Analyzer and
the stock solutions. Contact [Netwrix Support](https://www.netwrix.com/support.html) for additional
information.


## Considerations

**NEAUsers Group for Role Based Access**

Access Analyzer 12.0 introduces a new NEAUsers local group for Role Based Access (RBA). This
replaces using the local users group to assign users the necessary permissions on the Access
Analyzer application directory. If you already have Role Based Access enabled in the previous
version of Access Analyzer, then during the first initialization of Access Analyzer 12.0 the
following happens:

- Access Analyzer creates the NEAUsers local group on the Access Analyzer Console server and grants
  it the required permissions on the Access Analyzer application (StealthAUDIT) folder
- Access Analyzer adds existing configured RBA users to this new NEAUsers group

    :::note
    The Web Administrator and Report Viewer roles don't require access to the Access
    Analyzer console, so Access Analyzer doesn't add users assigned these roles to the NEAUsers
    group.
    :::


    :::note
    Adding a user to the NEAUsers group doesn't apply to the Web Service access type, it
    only gives Console access.
    :::


- Access Analyzer removes the local users group from the Access Analyzer application folder
  permissions

For this process to complete successfully, on first launch the user running Access Analyzer must
have local administrator rights. Otherwise, the initialization throws an exception.

Multiple Access Analyzer Consoles Connecting to the Same Database

In environments where multiple Access Analyzer Consoles are using the same SQL Server database,
you must also update every console using the database. The act of connecting a Access Analyzer
Console with a newer version to a database updates the database’s schema pursuant to the new
definition. If a Access Analyzer Console with an older version connects to the same database after
the schema has been updated, corruption to Access Analyzer’s system tables can result.

SQL Server Supported Version Change for the Access Analyzer Database

With the release of Access Analyzer v12.0, SQL Server 2016 through SQL Server 2025 are the supported
versions for the Access Analyzer database.

Granting access to additional Solutions in an existing Access Analyzer installation requires a new
license key. To update the Access Analyzer license key without installing a new version of the
Access Analyzer Console, see the [Update License Key](/docs/accessanalyzer/12.0/install/application/updatelicense.md) topic for instructions.

**License Key Changes**

The following licensing changes require the organization to get a new key:

- Access Analyzer v12.0

    - This version requires no additional licenses

- Enterprise Auditor v11.6

    - This version requires no additional licenses

- StealthAUDIT v11.5

    - This version requires no additional licenses

See the [Update License Key](/docs/accessanalyzer/12.0/install/application/updatelicense.md) section for instructions on updating the license
key.
