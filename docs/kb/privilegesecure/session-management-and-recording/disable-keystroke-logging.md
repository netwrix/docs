---
description: >-
  Disable keystroke logging and SSH session screen recordings in Privilege
  Secure, and delete existing recordings for a specified time window.
keywords:
  - keystroke logging
  - keylogging
  - Netwrix Privilege Secure
  - PAM
  - sbpam_iolog.json
  - iolog
  - SSH recordings
  - sbpam_metadata
  - PostgreSQL
products:
  - privilegesecure
  - privilegesecurediscovery
visibility: public
sidebar_label: "Disabling Keystroke Logging"
tags:
  - kb
  - session-management-and-recording
title: "Disabling Keystroke Logging"
knowledge_article_id: kA0Qk0000000NvtKAE
---

# Disabling Keystroke Logging

## Overview

This article describes how to disable keystroke logging (keylogging) and SSH session screen recordings in Netwrix Privilege Secure for Access Management, and how to delete existing recordings for a specified time window.

## Instructions

### Disabling Keystroke Logging and SSH Recordings

> **IMPORTANT:** The following steps disable all screen recordings of SSH activity.

1. Locate the `sbpam_iolog.json` file in the `C:\ProgramData\Stealthbits\PAM\ProxyService` directory. If no such file exists in the directory, create it and name it `sbpam_iolog.json`.
2. Edit the file to include the following lines (add the lines to the new file if you created it):

   ```json
   {
   "idletimeout" : 300000000000,
   "path" : "C:\ProgramData\Stealthbits\PAM\ProxyService\iolog",
   "replicas" : 1,
   "disableMetadata" : true
   }
   ```

3. Save the changes. This disables all metadata recording, keylogging, and capture of all SSH session recordings.

   > **IMPORTANT:** This does not affect the previous records.

### Deleting Recordings from a Specific Time Window

1. Locate the **iolog** directory. The default path is `C:\ProgramData\Stealthbits\PAM\ProxyService\iolog`.
2. Sort the contents by date and delete the folders matching the time window you want to delete.
3. Locate the **sbpam_metadata** database in the `C:\ProgramData\Stealthbits\PAM\ProxyService\iolog\.meta` directory and delete it.
4. Run the following PostgreSQL query to delete references for recordings:

   ```sql
   delete from proxy_session where start_datetime_utc <= '2023-10-31 13:54:22.315271';
   ```
