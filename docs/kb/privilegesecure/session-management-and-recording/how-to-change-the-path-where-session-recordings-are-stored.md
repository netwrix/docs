---
description: >-
  Shows how to change the location where Netwrix Privilege Secure stores session
  recordings, including special steps for Netwrix Privilege Secure 3.7+ and web
  recordings.
keywords:
  - Netwrix Privilege Secure
  - session recordings
  - sbpam_iolog.json
  - appsettings.json
  - recording path
  - Proxy Service
  - sbpam-proxy.exe
  - icacls
products:
  - privilege-secure-access-management
sidebar_label: How to Change the Path Where Session Recordings Ar
tags: []
title: "How to Change the Path Where Session Recordings Are Stored"
knowledge_article_id: kA04u000000Pd8JCAS
---

# How to Change the Path Where Session Recordings Are Stored

## Perform the following changes on each proxy node (HA, remote).

### Modify sbpam_iolog.json

1. See if the file that controls where Netwrix Privilege Secure session recordings are stored, **sbpam_iolog.json**, exists. (Substitute the "C" drive letter for the server's `%PROGRAMDATA%` drive letter, if necessary)

```text
C:\ProgramData\STEALTHbits\PAM\ProxyService
```

- If this file exists on the Netwrix Privilege Secure server, then it can be modified to change where recorded sessions are stored. If this is the case, skip to step 3 to edit this file.
- If the file does not exist, then it will need to be created in the next step

2. Generate the iolog config by opening a command prompt, navigating to `\Program Files\Stealthbits\PAM\ProxyService`, and running the following command:

> **IMPORTANT:** Notice the file needs to be in "\ProgramData\...." but this command has to be from "\Program Files\..."
```text
.\sbpam-proxy.exe cfg -c sbpam_iolog
```

3. Open **sbpam_iolog.json**, and add this:

```json
{
    "idletimeout": 300000000000,
    "path": "D:\new\path\for\sessions",
    "replicas": 1
}
```

Where the value for the path is where new session recordings are stored after this change is saved.

4. In order to ensure that the necessary permissions are applied to the new directory, run the following command in an administrator PowerShell window:

```powershell
$recordingDir = D:\new\path\for\sessions
&icacls.exe $recordingDir /grant "NT SERVICE\SbpamProxy:(OI)(CI)F" /Q /T
```


Consider the following:

- In addition to new session recordings, previous session recordings should be manually moved from the old recording path to the new location.
- If there are active Netwrix Privilege Secure sessions then some of the recordings in the old location are locked by Netwrix Privilege Secure's Proxy Service. It is safe to skip these files for now, and move them later once their associated session has ended and files are no longer locked.

If this process is performed successfully, then all old and new recordings are stored in the new location and are available for playback in Netwrix Privilege Secure.


# How to Change the Path Where Web Recordings Are Stored

### Modify appsettings.json

1. Open the `appsettings.json` file located at:

```text
C:\ProgramData\STEALTHbits\PAM\WebService\appsettings.json
```

If this file exists on the Netwrix Privilege Secure server, then it can be modified to change where recorded sessions are stored. If the file does not exist, then it will need to be created.

2. . Open (or create) **appsettings.json**, and locate (or create) the `DataDirectory` key.

```json
{
    "DataDirectory": "D:\new\path\for\webrecordings"
}
```

The value for the key (after the ":") can be changed to any valid path, which is where new session recordings are stored after this change is saved.

3. In order to ensure that the necessary permissions are applied to the new directory, run the following command in an administrator PowerShell window (substitute `<directory>` with your chosen recording directory):

```powershell
$webRecordingDir = D:\new\path\for\webrecordings
&icacls.exe $webRecordingDir /grant "NT SERVICE\SbPAMProxy:(OI)(CI)F" /Q /T
```

Consider the following:

- In addition to new web recordings, previous web recordings should be manually moved from the old recording path to the new location.
- If there are active Netwrix Privilege Secure web recordings then some of the recordings in the old location are locked by Netwrix Privilege Secure's Web Service. It is safe to skip these files for now, and move them later once their associated session has ended and files are no longer locked.

If this process is performed successfully, then all old and new recordings are stored in the new location and are available for playback in Netwrix Privilege Secure.

