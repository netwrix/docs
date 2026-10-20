---
description: >-
  Describes how to disable two-factor authentication (2FA) for the default
  administrator user in Netwrix Change Tracker so one-time codes are written to
  the server log for Allowed Commands.
keywords:
  - 2FA
  - two-factor
  - Netwrix Change Tracker
  - Allowed Commands
  - one-time code
  - iisreset
  - appsettings.json
  - registerAdmin
  - fallbackEnabled
products:
  - changetracker
knowledge_article_id: ka04u00000116rcAAA
sidebar_label: Disabling 2FA for the Default Administrator
tags: [kb, configuration-and-setup]
title: Disabling 2FA for the Default Administrator
---

# Disabling 2FA for the Default Administrator

## Overview

This article describes how to disable two-factor authentication (2FA) for the default administrator user in Netwrix Change Tracker so **Allowed Commands** actions use one-time codes written to the server log instead of requiring 2FA every session. The procedure has two parts: disabling 2FA in the application configuration, and verifying the updated login workflow afterward.

> **IMPORTANT:** This method works only for the default administrator user and does not apply to administrator role users or users with no administrator permissions.

## Instructions

### Disable 2FA in appsettings.json

1. Connect to the Netwrix Change Tracker server via RDP.
2. Stop IIS running on the server. Run the following command in an elevated **Command Prompt**:
   ```text
   iisreset /stop
   ```
3. Open the following file:
   ```text
   C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\Configs\appsettings.json
   ```
4. In the file, change the following lines:
   - `security::auth::twoFactor::registerAdmin` to `false`.
   - `security::auth::twoFactor::fallbackEnabled` to `true`.
5. Save changes to the file, then start IIS by running the following command in an elevated Command Prompt:
   ```text
   iisreset /start
   ```

> **NOTE:** Setting `registerAdmin` to `false` prevents the system from logging the root admin in using 2FA. You can perform some operations in **Allowed Commands** only after you pass 2FA during the session (that is, present a one-time password).  
> With `registerAdmin` set to `false`, the system uses a one-time password written to the log file. This feature can be disabled via `fallbackEnabled`, but doing so prevents you from using **Allowed Commands**.

### Verify the Updated Login Workflow

1. Log in to Netwrix Change Tracker, and open **Settings** > **Users** to edit the administrator user.
2. Uncheck the **2FA Login** checkbox and click **Update**.
3. Click the **Reset 2FA** button and enter the one-time code from your authenticator application.
4. Sign out from Netwrix Change Tracker. Then, sign in under an administrator user account to confirm that the changes were applied and no one-time code is required.
5. Open **Settings** > **Allowed Commands** to select a command and set its action to either **Trust** or **Untrust**. This prompts you to enter a one-time code written to the Netwrix Change Tracker server log file:
   ```text
   C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\logs\hubservice-log.txt
   ```
   The one-time code appears at the bottom of the log file. Refer to the following line for an example:
   ```text
   2023-01-01 00:00:00,000 [--] INFO  Message - One-time passcode was requested for user admin: 999999
   ```

> **NOTE:** The one-time code is valid for the remainder of the login session. After you log out, a new one-time password is required for the next login.
