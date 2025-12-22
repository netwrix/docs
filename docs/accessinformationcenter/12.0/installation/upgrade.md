---
title: "Upgrade Procedure"
description: "Upgrade Procedure"
sidebar_position: 30
---

# Upgrade Procedure

It is necessary for Netwrix Access Analyzer (formerly Enterprise Auditor) and the Access Information
Center to have compatible versions. Therefore, when the Netwrix Access Analyzer (formerly Enterprise
Auditor) core application and corresponding solutions have been upgraded, the Access Information
Center must also be upgraded.

To upgrade the Access Information Center application to a newer version, simply run the new
`AccessInformationCenter.msi` executable. You do not need to uninstall the existing version. See the
[Install the Access Information Center](/docs/accessinformationcenter/12.0/installation/install.md) topic for additional information.

Any config file and email template customizations that were made in the previous version are
preserved during the upgrade.

## Special Considerations

The default installation directory location has changed in Access Information Center v11.6. When
upgrading from 11.5, the following applies:

- If the current installation resides in the previous default location
  (`C:\inetpub\wwwroot\StealthAUDIT Compliance`), the install wizard Destination Folder page
  defaults to the new AIC location (`C:\Program Files\STEALTHbits\Access Information Center\`)
- If the current installation resides in a custom location, the install wizard Destination Folder
  page keeps the same custom location
