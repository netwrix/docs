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

## Summary

The default location for recorded Netwrix Privilege Secure sessions can be modified. This can be helpful if the drive Netwrix Privilege Secure is installed on is running low on space. Note that for Netwrix Privilege Secure installations of version 3.7 or higher, additional steps are necessary. Additionally, note that if the web recording path is to be changed, separate instructions are necessary.

## Instructions

Perform the changes below on each proxy node (HA, remote).

### Locating or Creating sbpam_iolog.json

The file that controls where Netwrix Privilege Secure session recordings are stored is **sbpam_iolog.json**, which is originally located on the `%PROGRAMDATA%` drive in:

```text
\ProgramData\STEALTHbits\PAM\ProxyService
```

Consider the following:

- If this file exists on the Netwrix Privilege Secure server, then it can simply be modified to change where recorded sessions are stored. If this is the case, follow the instructions below to jump to the instructions for editing this file.
- If the file does not exist, then it will need to be created at the following path on the Netwrix Privilege Secure server (substitute the "C" drive letter for the server's `%PROGRAMDATA%` drive letter, if necessary):

```text
C:\ProgramData\STEALTHbits\PAM\ProxyService\sbpam_iolog.json
```

- Generate the iolog config by opening a command prompt, navigating to `\Program Files\Stealthbits\PAM\ProxyService`, and running the following command:

```text
sbpam-proxy.exe cfg -c sbpam_iolog
```

### Modifying sbpam_iolog.json

1. Open **sbpam_iolog.json**, and locate (or create) the **path** key.

```json
{
    "idletimeout": 300000000000,
    "path": "C:\ProgramData\Stealthbits\PAM\ProxyService\iolog",
    "replicas": 1
}
```

2. The value for the key (after the ":") can be changed to any valid path, which is where new session recordings will be stored after this change is saved.

> **IMPORTANT:** The double slashes (`\`) and quotes surrounding the path must be used for the new path, otherwise the file will no longer be valid JSON.

Consider the following:

- In addition to new session recordings, previous session recordings should be manually moved from the old recording path to the new location.
- If there are active Netwrix Privilege Secure sessions then some of the recordings in the old location will be locked by Netwrix Privilege Secure's Proxy Service. It is safe to skip these files for now, and move them later once their associated session has ended and files are no longer locked.

If this process is performed successfully, then all old and new recordings will be stored in the new location and will be available for playback in Netwrix Privilege Secure.

### For Netwrix Privilege Secure 3.7 or Higher:

In order to ensure that the necessary permissions are applied to the new directory, run the following command in an administrator PowerShell window (substitute `<directory>` with your chosen recording directory):

```powershell
$recordingDir = <directory>
&icacls.exe $recordingDir /grant "NT SERVICE\SbpamProxy:(OI)(CI)F" /Q /T
```

# Additional Instructions (Web Recordings)

Open the `appsettings.json` file:

- For Netwrix Privilege Secure 3.6 or earlier it will be located at this path:

```text
\Program Files\STEALTHbits\PAM\Web\appsettings.json
```

- For Netwrix Privilege Secure 3.7 or later, it will be located at this path:

```text
\ProgramData\STEALTHbits\PAM\WebService\appsettings.json
```

If this file exists on the Netwrix Privilege Secure server, then it can simply be modified to change where recorded sessions are stored. If the file doesn't exist, then it will need to be created.

### Modifying appsettings.json

1. Open **appsettings.json**, and locate (or create) the `DataDirectory` key.

```json
{
    "DataDirectory": "C:\ProgramData\Stealthbits\PAM"
}
```

2. The value for the key (after the ":") can be changed to any valid path, which is where new session recordings will be stored after this change is saved.

> **IMPORTANT:** The double slashes (`\`) and quotes surrounding the path must be used for the new path, otherwise the file will no longer be valid JSON.

Consider the following:

- In addition to new session recordings, previous session recordings should be manually moved from the old recording path to the new location.
- If there are active Netwrix Privilege Secure sessions then some of the recordings in the old location will be locked by Netwrix Privilege Secure's Proxy Service. It is safe to skip these files for now, and move them later once their associated session has ended and files are no longer locked.

If this process is performed successfully, then all old and new recordings will be stored in the new location and will be available for playback in Netwrix Privilege Secure.

### For Netwrix Privilege Secure 3.7 or Higher:

In order to ensure that the necessary permissions are applied to the new directory, run the following command in an administrator PowerShell window (substitute `<directory>` with your chosen recording directory):

```powershell
$webRecordingDir = <directory>
&icacls.exe $webRecordingDir /grant "NT SERVICE\SbPAMProxy:(OI)(CI)F" /Q /T
```
