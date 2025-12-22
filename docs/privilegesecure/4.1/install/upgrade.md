---
title: "Upgrade Procedure"
description: "Upgrade Procedure"
sidebar_position: 60
---

# Upgrade Procedure

This chapter describes the basic steps needed to upgrade Netwrix Privilege Secure.

:::note
As part of the upgrade process, the Privilege Secure installer will complete a mandatory
encryption key rotation. Customers who are running Privilege Secure in high-availability mode or use
distributed Action Service or Proxy components should refer to
the[ Upgrading to Privilege Secure (fomerly SbPAM) 3.6 or Higher - High Availability and Remote Services Configurations](https://kb.netwrix.com/8422)
knowledge base article before beginning an upgrade.
:::


## Considerations

- It is not necessary to uninstall the previous version of Privilege Secure. The new version can be
  installed directly over the previous version.
- Canceling, exiting, or otherwise halting the installer during an upgrade may result in irreparable
  damage to the Privilege Secure database and loss of data.
- If your server has PostgreSQL 10 installed from a previous version of Privilege Secure, contact
  [Netwrix Support](https://www.netwrix.com/support.html) before proceeding with your upgrade.
- There are two installation paths to support either PostgreSQL server or Microsoft SQL server
  databases.

    - PostgreSQL — If you are upgrading and want to continue using PostgreSQL, follow the standard
      upgrade procedure.
    - Microsoft SQL — The Advanced checkbox provides the option to switch the database to Microsoft
      SQL Server.

        :::warning
        This is an advanced configuration and requires additional support from Netwrix.
        :::


## Upgrade Procedure

Follow the steps to upgrade Netwrix Privilege Secure from an existing version.

:::note
Prior to upgrading Privilege Secure, the installer will scan for the current version
PostgreSQL and prompt you to upgrade if needed.
:::


:::warning
During an upgrade, the process updates both the application and the database. This
process can take a significant amount of time, depending on the volume of data stored in the
database. Canceling, exiting, or otherwise halting the installer during this step may result in
irreparable damage to the Privilege Secure database and loss of data.
:::


**Step 1 –** Install the new version of Privilege Secure by running the NPS_Setup.exe as an
administrator.

:::note
A server restart will be required after the installer in complete. A notification in the
installer will display after the upgrade procedure is complete.
:::


**Step 2 –** Clear the browser cache after the upgrade procedure. This helps to prevent conflicts
when logging in to the new version of Privilege Secure.

**Step 3 –** Open the Privilege Secure Console and log in.

The latest version of Privilege Secure is now installed.
