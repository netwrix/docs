---
description: >-
  Perform an in-place upgrade of the Privilege Secure Postgres 12 backend for
  build updates, scheduled outside regular operational hours.
keywords:
  - Postgres
  - upgrade
  - in-place
  - Netwrix Privilege Secure
  - Postgres12
  - PowerShell
  - EnterpriseDB
  - Postgres installer
  - psql
products:
  - privilegesecure
sidebar_label: 'Netwrix Privilege Secure: Performing an In-Place Postgres Upgrade'
tags:
  - kb
  - database-and-backend
title: 'Netwrix Privilege Secure: Performing an In-Place Postgres Upgrade'
knowledge_article_id: kA04u000000LLRpCAO
---

# Netwrix Privilege Secure: Performing an In-Place Postgres Upgrade

## Overview

This article describes how to perform an in-place upgrade of the Postgres backend for the Netwrix Privilege Secure for Access Management server.

> **NOTE:** This article applies exclusively to build updates for Postgres 12. The upgrade may take considerable time and require a server reboot, so Netwrix recommends scheduling this process outside of regular operational hours.

## Instructions

1. Determine your current Postgres version by launching a PowerShell terminal and running the following commands:

   ```powershell
   cd 'C:\Program Files\Stealthbits\Postgres12\bin\'
   .\psql.exe -V
   ```

   > **NOTE:** You may need to modify the path to the Postgres12 directory depending on your installation.

   The command should return your Postgres version number. For example, if your current version is 12.8, upgrade to the latest 12.X release.

2. Visit the Postgres download page: https://www.postgresql.org/download/windows/. Click the "Download the Installer" link at the top of the page, and download an executable installer from the EnterpriseDB website. Ensure the version matches the one you determined in the previous step.

3. Run the `postgresql-[versionnumber]-windows-x64.exe` file on your Privilege Secure server. This launches the Postgres Setup Wizard. Click **Next** on the initial splash page.

4. On the **Select Components** page, select only **PostgreSQL Server** and **Command Line Tools** to install/upgrade:

   ![Postgres Select Components](./../0-images/ka0Qk000000CGIj_0EM4u000005feFD.png)

5. Proceed through the prompts until you see the **Pre-Installation Summary** window and confirm that it matches your server's settings:

   ![Postgres Pre-Installation Summary](./../0-images/ka0Qk000000CGIj_0EM4u000005feFN.png)

6. After you are satisfied with the **Pre-Installation Summary** window, click **Next** two more times to proceed with the installation.

7. After the installation finishes, you are prompted to restart your server. Restart your server.

8. To confirm the success of your installation, use the PowerShell commands from the first step to verify that your version number matches the installer.
