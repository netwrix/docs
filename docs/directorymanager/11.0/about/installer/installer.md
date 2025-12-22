---
title: "Installer"
description: "Installer"
sidebar_position: 10
---

# Installer

To install GroupID, you have to run the following tools in the given order:

- **[Preparation Tool](/docs/directorymanager/11.0/about/installer/preparationtool.md)** -
  Detects and instals the prerequisite software and Windows features that GroupID requires.

- **[Installation Tool](/docs/directorymanager/11.0/about/installer/install.md)** -
  Installs GroupID.

- **[Configuration Tool](/docs/directorymanager/11.0/about/configure/configure.md)** -
  Configures GroupID services, database, and other components.

## GroupID Installation Package

The GroupID installation package consists of:

- GroupID 11 Prerequisites Tool (file folder)
- GroupID `<version #>` (file folder)

## Who can install GroupID

Before installing GroupID, make sure that the logged-in user is a member of the local Administrators
group on that machine.

NOTE: (1) There should be a dedicated server for GroupID.  
(2) Do not install GroupID on the domain controller.  
(3) Do not install GroupID and Microsoft Exchange Server on the same machine.

## Installation Cases

Choose one of the four installation cases for GroupID 11:

- **Case # 1**: GroupIDID 11 to co-exist with GroupID 10 on the same machine

- **Case # 2**: GroupID 11 to co-exist with GroupID 10.0 / 9.0 in the same environment
- **Case # 3**: In-place installation of GroupID 11 on the same machine
- **Case # 4**: In-place installation of GroupID 11 in the environment

The GroupID 11 installation and configuration process is the same for all four cases. You must
create a copy of the database being used with the previous GroupID version and bind the copy with
GroupID 11.

Next, run the Upgrade wizard to make the copied database compatible with GroupID 11. Once upgraded,
the database schema changes, making it incompatible with the previous GroupID version.

NOTE: When GroupID 11 co-exists with a previous GroupID version (case # 1 and 2), the two must have
separate databases. Data is not replicated between these databases.

NOTE: This section does not apply to a fresh GroupID installation.

See Also

- [Preparation Tool](/docs/directorymanager/11.0/about/installer/preparationtool.md)
- [Installation Tool](/docs/directorymanager/11.0/about/installer/install.md)
- [Configuration Tool](/docs/directorymanager/11.0/about/configure/configure.md)
