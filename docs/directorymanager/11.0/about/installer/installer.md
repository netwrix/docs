---
title: "GroupID Installation Tools and Upgrade Cases"
description: "Learn the order of the GroupID installation tools, who can install them, and the four installation cases for coexistence or in-place upgrade."
keywords:
  - GroupID installation
  - GroupID installation package
  - GroupID prerequisites
  - GroupID upgrade cases
sidebar_position: 10
---

# GroupID Installation Tools and Upgrade Cases

To install GroupID, you must run the following tools in the given order:

- **[Run the GroupID Preparation Tool](/docs/directorymanager/11.0/about/installer/preparationtool.md)** -
  Detects and installs the prerequisite software and Windows features that GroupID requires.

- **[Install GroupID](/docs/directorymanager/11.0/about/installer/install.md)** -
  Installs GroupID.

- **[Run the GroupID Configuration Tool](/docs/directorymanager/11.0/about/configure/configure.md)** -
  Configures GroupID services, database, and other components.

## GroupID Installation Package

The GroupID installation package consists of:

- GroupID 11 Prerequisites Tool (file folder)
- GroupID `<version #>` (file folder)

## Who can install GroupID

Before installing GroupID, ensure that the signed-in user is a member of the local Administrators
group on that machine.

:::note
(1) There should be a dedicated server for GroupID.  
(2) Don't install GroupID on the domain controller.  
(3) Don't install GroupID and Microsoft Exchange Server on the same machine.
:::

## Installation Cases

Choose one of the following four installation cases for GroupID 11:

- **Case # 1**: GroupID 11 to coexist with GroupID 10 on the same machine

- **Case # 2**: GroupID 11 to coexist with GroupID 10.0 or 9.0 in the same environment
- **Case # 3**: In-place installation of GroupID 11 on the same machine
- **Case # 4**: In-place installation of GroupID 11 in the environment

The GroupID 11 installation and configuration process is the same for all four cases. You must
create a copy of the database being used with the previous GroupID version and bind the copy with
GroupID 11.

Next, run the Upgrade wizard to make the copied database compatible with GroupID 11. After the upgrade,
the database schema changes, making it incompatible with the previous GroupID version.

:::note
When GroupID 11 coexists with a previous GroupID version (Cases # 1 and 2), the two must have
separate databases. Data isn't replicated between these databases.
:::

:::note
This section doesn't apply to a fresh GroupID installation.
:::

See Also

- [Run the GroupID Preparation Tool](/docs/directorymanager/11.0/about/installer/preparationtool.md)
- [Install GroupID](/docs/directorymanager/11.0/about/installer/install.md)
- [Run the GroupID Configuration Tool](/docs/directorymanager/11.0/about/configure/configure.md)
