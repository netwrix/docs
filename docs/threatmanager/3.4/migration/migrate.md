---
title: "Migrate Threat Manager to a New Host"
description: "Move Threat Manager and its database to a new server, such as when you replace a Windows Server instead of upgrading it in place."
sidebar_position: 20
---

# Migrate Threat Manager to a New Host

Migrate Threat Manager to a new host when you replace the server, for example when you move to a new
version of Windows Server. Microsoft recommends a fresh installation instead of an in-place
upgrade in that case.

:::warning
**Credential profile passwords don't migrate.** Threat Manager encrypts credential profile
passwords with a method that is specific to the machine. Passwords can't travel to a new host. After
the migration, you must re-enter the password for every credential profile.
:::


## General Flow

Complete the following steps in order. Each step links to its detailed instructions below, which
follow the same order.

1. [Stop all Threat Manager services](#stop-all-threat-manager-services) on the old host.
2. [Export the database](#export-the-database) from the old host with the PostgreSQL installer.
3. [Export the signing keys](#export-the-signing-keys) from the old host with the Threat Manager
   installer.
4. [Install the same PostgreSQL version](#install-the-same-postgresql-version) on the new host.
5. [Install the signing keys](#install-the-signing-keys) on the new host.
6. [Import the database](#import-the-database) on the new host with the PostgreSQL installer.
7. [Install Threat Manager](#install-threat-manager) on the new host.
8. [Re-enter the credential profile passwords](#re-enter-the-credential-profile-passwords).

## Stop All Threat Manager Services

Stop all Threat Manager services on the old host before you export anything. The service names start
with `SBTSD`.

To stop the services with PowerShell:

**Step 1 –** Open PowerShell as an administrator on the old host.

**Step 2 –** Run the following command:

```powershell
Get-Service -Name 'SBTSD*' | Stop-Service -Force
```

**Step 3 –** Run the following command to verify that no service is still running. The command
returns no output when all services are stopped:

```powershell
Get-Service -Name 'SBTSD*' | Where-Object Status -ne 'Stopped'
```

To stop the services manually:

**Step 1 –** Open Services (`services.msc`) on the old host.

**Step 2 –** Stop each service whose name starts with `SBTSD`.

## Export the Database

Export the Threat Manager database from the old host with the PostgreSQL installer.

To export the database:

**Step 1 –** On the old host, run the Netwrix PostgreSQL installer.

**Step 2 –** Click **Export Database**.

![Netwrix PostgreSQL installer menu with Export Database highlighted](/images/threatmanager/3.4/install/migratepgexport.webp)

**Step 3 –** Follow the wizard to complete the export.

Copy the database export file to the new host. You need it when you import the database.

## Export the Signing Keys

Export the signing keys from the old host with the Threat Manager installer.

To export the signing keys:

**Step 1 –** On the old host, run the Threat Manager installer. The **Changing Netwrix Threat
Manager** menu opens.

**Step 2 –** Click **Export Signing Keys**.

![Changing Netwrix Threat Manager menu with Export Signing Keys highlighted](/images/threatmanager/3.4/install/migratesigningkeysmenu.webp)

**Step 3 –** On the **Export** page, enter the location and file name for the export file, or click
**Browse** to select a location. Click **Next**.

![Export page of the Threat Manager installer](/images/threatmanager/3.4/install/migratesigningkeysexport.webp)

The installer creates the export file and displays a one-time code.

**Step 4 –** Click **Copy code** and save the one-time code in a secure location.

![Signing keys exported successfully page showing the export file and the one-time code](/images/threatmanager/3.4/install/migratesigningkeyscomplete.webp)

:::warning
The export file and the one-time code are secrets. The installer shows the code once, after it
creates the file. It isn't stored anywhere and can't be shown again. Send the code to the person
who imports the keys over a different channel than the file.
:::


**Step 5 –** Click **Exit**.

The export file is an executable that isn't code signed, so Windows or security software may warn
about it. Copy the file to the new host. You need it and the one-time code to install the signing
keys.

## Install the Same PostgreSQL Version

Install the same PostgreSQL version on the new host that the old host runs. Follow the steps in the
[Install the PostgreSQL Database Application](/docs/threatmanager/3.4/install/database.md) topic.
Install only the PostgreSQL database application. Install Threat Manager later in this procedure.

## Install the Signing Keys

Install the signing keys on the new host before you install Threat Manager.

To install the signing keys:

**Step 1 –** Copy the signing keys export file to the new host.

**Step 2 –** Run the file. Enter the one-time code when prompted.

The installer installs the signing keys.

## Import the Database

Import the database on the new host with the PostgreSQL installer.

To import the database:

**Step 1 –** Copy the database export file to the new host, if you haven't already.

**Step 2 –** On the new host, run the Netwrix PostgreSQL installer and click **Import Database**.

![Netwrix PostgreSQL installer menu with Import Database highlighted](/images/threatmanager/3.4/install/migratepgimport.webp)

**Step 3 –** Follow the wizard to complete the import.

## Install Threat Manager

Install Threat Manager on the new host. Follow the steps in the
[Install the Threat Manager Application](/docs/threatmanager/3.4/install/application.md) topic.

:::warning
When you test the database connection, enter the name of the database you imported. The default
name is `stealthdefend`. If the installer prompts you to create a new database, the database name is
incorrect. Don't create a database. Correct the name instead.
:::


## Re-enter the Credential Profile Passwords

After the migration, the Threat Manager web console reports that credential profiles have broken
passwords. Re-enter the password for every credential profile.

To re-enter the passwords:

**Step 1 –** In the Threat Manager console, click the red alert banner, or open **Integrations** and
select **Credential Profile**. Profiles with a broken password are highlighted red.

**Step 2 –** Select a profile. A warning icon appears next to each credential that has a broken
password.

**Step 3 –** Click the edit icon for the credential, enter the password, and save.

![Credential profile page with a warning icon next to a credential with a broken password](/images/threatmanager/3.4/install/migratecredentialprofiles.webp)

**Step 4 –** Repeat for every credential in every profile.

See the [Credential Profile Page](/docs/threatmanager/3.4/administration/configuration/integrations/credentialprofile.md)
topic for additional information.
