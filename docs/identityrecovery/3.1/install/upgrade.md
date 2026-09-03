---
title: "Upgrade Procedure"
description: "Upgrade Procedure"
sidebar_position: 60
---

# Upgrade Procedure

This topic describes the steps needed to upgrade the Netwrix Identity Recovery database to version 3.1.

## Upgrade Recovery for Active Directory to v3.1

Run the `NetwrixRecovery_Setup.exe` on the Netwrix Identity Recovery server to upgrade
to the newer version of the product. See the [Install the Application](/docs/identityrecovery/3.1/install/application.md) topic for additional information.

:::note
The system updates the database to version 3.1. Don't uninstall or remove the existing database.
:::

:::note
When upgrading to v3.1, the system changes the connection string requirements. After the upgrade completes, run the Configuration Utility as an administrator, check the Trust Server Certificate box, and click Save to update the configuration. Restart the Netwrix Recovery Server service for this change to take effect.
:::

Identity Recovery has now been upgraded to v3.1.
