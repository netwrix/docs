---
description: >-
  Shows how to configure Netwrix Change Tracker to lock a user account after
  repeated failed login attempts, by setting lockoutenabled to true in
  appsettings.json. By default, Change Tracker blocks the failing device's IP
  address instead of locking the account.
keywords:
  - Netwrix Change Tracker
  - IP blocking
  - account lockout
  - failed logon
  - appsettings.json
  - lockoutenabled
  - iisreset
  - authentication
products:
  - changetracker
knowledge_article_id: ka04u000000Hd9RAAS
sidebar_label: Enabling Account Lockout for Failed Login Attempts
tags: [kb, configuration-and-setup]
title: Enabling Account Lockout for Failed Login Attempts
---

# Enabling Account Lockout for Failed Login Attempts

## Overview

This article describes how to configure Netwrix Change Tracker to lock a user account after repeated failed login attempts, instead of blocking the device's IP address.

By default, if a user fails to log in three times from a remote device, Netwrix Change Tracker blocks that device's IP address. Setting `lockoutenabled` to `true` locks the account after repeated failed logins. (The relationship between account lockout and IP blocking has not yet been confirmed — see the SME Review Needed note in the pull request.)

## Instructions

1. Open a Command Prompt as an administrator and stop IIS:

   ```bat
   iisreset /stop
   ```

2. Open `C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\Configs\appsettings.json` in a text editor.
3. In the `security` > `auth` section, set `lockoutenabled` to `true`:

   ```json
   "security": {
       "auth": {
           "lockoutenabled": "true",
           "lockoutmaxloginattempts": "3",
           "lockoutdurationminutes": "10"
       }
   }
   ```

   - `lockoutenabled` — set to `true` to lock the account after repeated failed login attempts.
   - `lockoutmaxloginattempts` — the number of failed attempts before the account locks. Defaults to `3`.
   - `lockoutdurationminutes` — how long the account stays locked, in minutes. Set to `10` to match the previous IP-blocking duration, or another value to fit your policy.

   > **NOTE:** Change only the `auth` values shown. The surrounding settings provide context.

4. Save the file.
5. Start IIS:

   ```bat
   iisreset /start
   ```

After IIS restarts, three failed login attempts from a device lock the account for the configured duration.
