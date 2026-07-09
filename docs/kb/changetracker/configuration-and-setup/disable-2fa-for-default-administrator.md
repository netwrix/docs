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
sidebar_label: How to Disable 2FA for Default Administrator
tags: [kb, configuration-and-setup]
title: How to Disable 2FA for Default Administrator User in Netwrix Change Tracker
---

# How to Disable 2FA for Default Administrator User in Netwrix Change Tracker

## Question

How do you disable two-factor authentication (2FA) for the default administrator user in Netwrix Change Tracker?

## Answer

To use **Allowed Commands**, a one-time password is required. Follow the steps provided to disable two-factor authentication and have Netwrix Change Tracker generate one-time codes in the application log file instead.

> **IMPORTANT:** This method works only for the default administrator user and does not apply to administrator role users or users with no administrator permissions.

1. Connect to the Netwrix Change Tracker server via RDP.
2. Stop IIS running on the server. Run the following command in an elevated Command Prompt:
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
5. Save changes to the file. Start IIS. Run the following command in an elevated Command Prompt:
   ```text
   iisreset /start
   ```

> **NOTE:** Setting `registerAdmin` to `false` prevents the system from logging the root admin in using two-factor authentication. Some operations in **Allowed Commands** can be performed only after the user has passed two-factor authentication during the session (that is, has presented a one-time password). With `registerAdmin` set to `false`, the system uses a one-time password written to the log file.  
> This feature can be disabled via `fallbackEnabled`, but doing so prevents the user from using **Allowed Commands**.

Refer to the following steps for the updated login workflow:

1. Log in to Netwrix Change Tracker, and open **Settings** > **Users** to edit the administrator user.
2. Uncheck the **2FA Login** checkbox and click **Update**.
3. Click the **Reset 2FA** button and enter the one-time code from your authenticator application.
4. Sign out from Netwrix Change Tracker. Sign in under an administrator user account to confirm that the changes were applied and no one-time code is required.
5. Open **Settings** > **Allowed Commands** to select a command and action that command to either **Trust** or **Untrust** it. This prompts the user to enter a one-time code written to the Netwrix Change Tracker server log file:
   ```text
   C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\logs\hubservice-log.txt
   ```
   The one-time code should be available at the bottom of the log file. Refer to the following line for an example:
   ```text
   2023-01-01 00:00:00,000 [--] INFO  Message - One-time passcode was requested for user admin: 999999
   ```

> **NOTE:** The one-time code is valid for the remainder of the login session. After the user logs out, a new one-time password is required for the next login.
