---
title: "Installer"
description: "Installer"
sidebar_position: 10
---

# Installer

To install Directory Manager, you have to run the following tools in the given order:

- **[Preparation Tool](/docs/directorymanager/11.1/install/installer/preparationtool.md)** - Detects and instals the prerequisite software and
  Windows features that Directory Manager requires.

- **[Installation Tool](/docs/directorymanager/11.1/install/installer/install.md)** - Installs Directory Manager.

- **[Configuration Tool](/docs/directorymanager/11.1/install/configure/configure.md)** - Configures Directory Manager services,
  database, and other components.

## Installation Package

The Directory Manager installation package consists of:

- Directory Manager 11 Prerequisites Tool (file folder)
- Directory Manager `<_version #_>` (file folder)

## Who can install

Before installing Directory Manager, make sure that the logged-in user is a member of the local
Administrators group on that machine.

:::note
(1) There should be a dedicated server for Directory Manager.  
(2) Do not install Directory Manager on the domain controller.  
(3) Do not install Directory Manager and Microsoft Exchange Server on the same machine.
:::


## Installation Cases

Choose one of the four installation cases for Directory Manager 11:

- **Case # 1**: Directory ManagerID 11 to co-exist with Directory Manager 10 on the same machine

- **Case # 2**: Directory Manager 11 to co-exist with Directory Manager 10.0 / 9.0 in the same
  environment
- **Case # 3**: In-place installation of Directory Manager 11 on the same machine
- **Case # 4**: In-place installation of Directory Manager 11 in the environment

The Directory Manager 11 installation and configuration process is the same for all four cases. You
must create a copy of the database being used with the previous Directory Manager version and bind
the copy with Directory Manager 11.

Next, run the Upgrade wizard to make the copied database compatible with Directory Manager 11. Once
upgraded, the database schema changes, making it incompatible with the previous Directory Manager
version.

:::note
When Directory Manager 11 co-exists with a previous Directory Manager version (case # 1 and
2), the two must have separate databases. Data is not replicated between these databases.
:::


:::note
This section does not apply to a fresh Directory Manager installation.

:::
