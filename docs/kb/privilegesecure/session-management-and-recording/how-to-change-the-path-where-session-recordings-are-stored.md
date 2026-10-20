---
description: >-
  Shows how to change the location where Netwrix Privilege Secure stores
  session recordings and web recordings.
keywords:
  - Netwrix Privilege Secure
  - session recordings
  - web recordings
  - sbpam_iolog.json
  - appsettings.json
  - recording path
  - Proxy Service
  - sbpam-proxy.exe
  - icacls
products:
  - privilege-secure-access-management
sidebar_label: Changing the Path Where Session Recordings Are Stored
tags:
  - kb
  - session-management-and-recording
title: "Changing the Path Where Session Recordings Are Stored"
knowledge_article_id: kA04u000000Pd8JCAS
---

# Changing the Path Where Session Recordings Are Stored

## Overview

This article describes how to change the location where Netwrix Privilege Secure stores session recordings and web recordings. Changing the recording path can help if the drive where Netwrix Privilege Secure is installed is running low on space.

Perform these changes on each proxy node, including any node in a high availability (HA) or remote configuration.

## Instructions

### Changing the Path Where Session Recordings Are Stored

1. Verify that `sbpam_iolog.json`, the file that controls where Privilege Secure stores session recordings, exists at the following path (substitute the "C" drive letter for the server's `%PROGRAMDATA%` drive letter, if necessary):

```text
C:\ProgramData\STEALTHbits\PAM\ProxyService
```

Do one of the following, depending on whether the file exists:

- If the file exists on the Privilege Secure server, you can modify it to change where recorded sessions are stored. Skip to step 3 to edit the file.
- If the file does not exist, create it in the next step.

2. Generate the iolog config by opening a command prompt, navigating to `\Program Files\Stealthbits\PAM\ProxyService`, and running the following command:

    > **IMPORTANT:** The file needs to be in `\ProgramData\...`, but you must run this command from `\Program Files\...`.

```text
.\sbpam-proxy.exe cfg -c sbpam_iolog
```

3. Open `sbpam_iolog.json`, and add this:

```json
{
    "idletimeout": 300000000000,
    "path": "D:\new\path\for\sessions",
    "replicas": 1
}
```

The `path` value determines where new session recordings are stored after you save the change.

4. To apply the necessary permissions to the new directory, run the following command in an administrator PowerShell window:

```powershell
$recordingDir = D:\new\path\for\sessions
&icacls.exe $recordingDir /grant "NT SERVICE\SbpamProxy:(OI)(CI)F" /Q /T
```

Consider the following:

- In addition to new session recordings, manually move previous session recordings from the old recording path to the new location.
- If there are active Privilege Secure sessions, Privilege Secure's Proxy Service locks some of the recordings in the old location. It is safe to skip these files for now, and move them later once their associated session has ended and the files are no longer locked.

After you complete these steps, all old and new recordings are stored in the new location and are available for playback in Netwrix Privilege Secure.

### Changing the Path Where Web Recordings Are Stored

1. Open `appsettings.json`, located at:

```text
C:\ProgramData\STEALTHbits\PAM\WebService\appsettings.json
```

If this file exists on the Privilege Secure server, you can modify it to change where recorded sessions are stored. If the file does not exist, create it.

2. Open (or create) `appsettings.json`, and locate (or create) the `DataDirectory` key.

```json
{
    "DataDirectory": "D:\new\path\for\webrecordings"
}
```

The `DataDirectory` value determines where new web recordings are stored after you save the change.

3. To apply the necessary permissions to the new directory, run the following command in an administrator PowerShell window (substitute `<directory>` with your chosen recording directory):

```powershell
$webRecordingDir = D:\new\path\for\webrecordings
&icacls.exe $webRecordingDir /grant "NT SERVICE\SbPAMProxy:(OI)(CI)F" /Q /T
```

Consider the following:

- In addition to new web recordings, manually move previous web recordings from the old recording path to the new location.
- If there are active Privilege Secure web recordings, Privilege Secure's Web Service locks some of the recordings in the old location. It is safe to skip these files for now, and move them later once their associated session has ended and the files are no longer locked.

After you complete these steps, all old and new recordings are stored in the new location and are available for playback in Netwrix Privilege Secure.
