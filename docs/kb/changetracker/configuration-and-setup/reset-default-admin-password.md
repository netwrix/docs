---
description: >-
  Instructions to reset the default admin password on Netwrix Change Tracker
  when the reset API is accessible only from the localhost on the Hub server.
keywords:
  - change tracker
  - reset admin password
  - localhost
  - Windows
  - resetadminpassword
  - admin
  - hub
  - web console
products:
  - changetracker
knowledge_article_id: ka04u000000Hd8hAAC
sidebar_label: Resetting the Default Admin Password
tags: [kb, configuration-and-setup]
title: Resetting the Default Admin Password
---

# Resetting the Default Admin Password

## Overview

This article describes how to reset the default admin password on Netwrix Change Tracker when you are locked out of the web console.

Netwrix Change Tracker's password reset function is only accessible from the localhost, so you must be able to log on to the Hub server itself — locally or via RDP — and open a browser there. No Windows administrator rights or Change Tracker admin role is required by the reset endpoint itself.

## Instructions

### Reset the Password

1. On the Hub server, open a browser and enter the following into the address bar:

   ```text
   https://localhost/api/resetadminpassword
   ```

2. The browser displays the new password. At your next logon to the Netwrix Change Tracker web console, you can log on with the newly created password. The console does not prompt you to change the password on login. If you wish to generate a new password:

1. Log on using the reset password.
2. Go to the **Settings** tile, then click **Users** in the left navigation panel.
3. On the User Administration page, click the paperclip icon next to the account you want to reset (for example, `admin`).
4. Change Tracker will generate another new password for you in line with the password complexity settings that are configured. Take note of or copy this password and log out of Change Tracker.
6. Log on using the reset password and you will then be prompted to specify a new password. Type a new password, confirm it, then click **Next>**. The new password takes effect immediately.

## Related Articles

- [Changing the Admin Password for MongoDB](../database-and-diagnostics/change-mongo-admin-password)
