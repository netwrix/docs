---
description: >-
  Instructions to disable keystroke logging and SSH session screen recordings in
  Netwrix Privilege Secure, and steps to delete existing recordings for a
  specified time window.
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
  - privilege-secure-access-management
  - privilege-secure-discovery
visibility: public
sidebar_label: Disable Keystroke Logging
tags: []
title: "Disable Keystroke Logging"
knowledge_article_id: kA0Qk0000000NvtKAE
---

# Disable Keystroke Logging

## Question

How to disable keystroke logging (keylogging) in Netwrix Privilege Secure?

## Answer

> **IMPORTANT:** The following steps will disable all screen recordings of SSH activity.

Locate the `sbpam_iolog.json` file in the `C:\ProgramData\Stealthbits\PAM\ProxyService` directory. Edit it to include the following lines:

```json
{
"idletimeout" : 300000000000,
"path" : "C:\ProgramData\Stealthbits\PAM\ProxyService\iolog",
"replicas" : 1,
"disableMetadata" : true
}
```

If no such file exists in the directory, create it, name it `sbpam_iolog.json`, and add the lines in the code block to the new file. Save the changes — this will disable all metadata recording, keylogging, and capture of all SSH session recordings.

> **IMPORTANT:** This will not affect the previous records.

### Delete recordings from a specific time window

1. Locate the **iolog** directory — the default path is `C:\ProgramData\Stealthbits\PAM\ProxyService\iolog`.
2. Sort the contents by date and delete the folders matching the desired time window.
3. Locate the **sbpam_metadata** database in the `C:\ProgramData\Stealthbits\PAM\ProxyService\iolog\.meta` directory and delete it.
4. Run the following PostgreSQL query to delete references for recordings:

```sql
delete from proxy_session where start_datetime_utc <= '2023-10-31 13:54:22.315271';
```
