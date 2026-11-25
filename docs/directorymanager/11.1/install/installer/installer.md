---
title: "Directory Manager Installation Tools and Upgrade Cases"
description: "Learn the order of the Directory Manager installation tools, who can install them, and the four installation cases for coexistence or in-place upgrade."
keywords:
  - directory manager installation
  - directory manager installation package
  - directory manager prerequisites
  - directory manager upgrade cases
sidebar_position: 10
---

# Directory Manager Installation Tools and Upgrade Cases

To install Directory Manager, you must run the following tools in the given order:

- **[Run the Directory Manager Preparation Tool](/docs/directorymanager/11.1/install/installer/preparationtool.md)** - Detects and installs the prerequisite software and
  Windows features that Directory Manager requires.
- **[Install Directory Manager](/docs/directorymanager/11.1/install/installer/install.md)** - Installs Directory Manager.
- **[Run the Directory Manager Configuration Tool](/docs/directorymanager/11.1/install/configure/configure.md)** - Configures Directory Manager services,
  database, and other components.

## Installation package

The Directory Manager installation package consists of:

- Directory Manager 11 Prerequisites Tool (file folder)
- Directory Manager `<_version #_>` (file folder)

## Who can install

Before you install Directory Manager, ensure that the signed-in user is a member of the local
Administrators group on that machine.

:::note
(1) There should be a dedicated server for Directory Manager.  
(2) Don't install Directory Manager on the domain controller.  
(3) Don't install Directory Manager and Microsoft Exchange Server on the same machine.
:::

## Installation cases

Choose one of the following four installation cases for Directory Manager 11:

- **Case # 1**: Directory Manager 11 to coexist with Directory Manager 10 on the same machine
- **Case # 2**: Directory Manager 11 to coexist with Directory Manager 10.0 or 9.0 in the same
  environment
- **Case # 3**: In-place installation of Directory Manager 11 on the same machine
- **Case # 4**: In-place installation of Directory Manager 11 in the environment

The Directory Manager 11 installation and configuration process is the same for all four cases.
Create a copy of the database that the previous Directory Manager version uses, and bind the copy
with Directory Manager 11.

Next, run the Upgrade wizard to make the copied database compatible with Directory Manager 11. After
the upgrade, the database schema changes. The previous Directory Manager version can no longer use
the database.

:::note
When Directory Manager 11 coexists with a previous Directory Manager version (Cases # 1 and
2), the two must have separate databases. Data isn't replicated between these databases.
:::

:::note
This section doesn't apply to a fresh Directory Manager installation.
:::
