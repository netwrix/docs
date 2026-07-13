---
description: >-
  This article addresses the "ERROR NNT.Hub.ServiceClient.HubAdapter - HubAdapter.Authenticate()" issue, detailing its symptoms, causes, and resolutions for affected Linux devices.
keywords:
  - TLS error
  - Netwrix Agent
  - Linux device connection
  - HubAdapter
  - Mono 4.5
  - Mono 5.0.1.1
  - hub authentication error
  - TLS 1.0
  - TLS 1.1
  - TLS 1.2
  - nntgen7agent
  - connection reset by peer
products:
  - dataclassification
sidebar_label: HubAdapter Authentication Error
tags:
  - kb
  - troubleshooting-and-errors
title: "HubAdapter Error - Authentication Failure Connecting to Hub"
knowledge_article_id: kA04u0000000JjwCAE
---

# HubAdapter Error - Authentication Failure Connecting to Hub

## Symptom

```text
2018-07-31 13:03:22,240 [HubClient-PollHubThreadProcessing] ERROR NNT.Hub.ServiceClient.HubAdapter - 
HubAdapter.Authenticate() Error authenticating to hub at https://example.ip/api/ - Error writing headers (Error 
while sending TLS Alert (Fatal:InternalError): System.IO.IOException: The authentication or decryption has failed. --->
System.IO.IOException: EndRead failure ---> System.Net.Sockets.SocketException: Connection reset by peer
```

## Cause

If you have recently disabled TLS 1.0/1.1 on your Windows Hub, Linux devices running Mono 4.5 go offline and cannot connect to your Hub, since Mono 4.5 has compatibility issues with TLS 1.2 (TLS 1.0/1.1 is typically disabled for audit/compliance standards).

Upgrade Mono to a later version (Mono 5.0.1.1) to resolve this issue.

## Resolution

If you are receiving this error, the Netwrix Agent is **NOT** reporting to your hub. This is a critical error, and for monitoring to continue, it must be resolved. To resolve this error:

1. Stop the Netwrix Agent Service:
   ```
   # service nntgen7agent stop
   ```

2. Download the [nnt-mono-5.0.1.1-5.x86_64.rpm](https://dl.netwrix.com/products/utilities/ChangeTracker/nnt-mono-5.0.1.1-5.x86_64.rpm) package.

3. Copy the download over to a directory on the Linux device (e.g., `/tmp` directory).

4. Change directory to that folder:
   ```
   # cd /tmp
   ```

5. Next, upgrade to the downloaded mono package:
   ```
   # rpm -Uvh nnt-mono-5.0.1.1-5.x86_64.rpm
   ```

6. Start the Netwrix Agent Service:
   ```
   # service nntgen7agent start
   ```

Repeat these steps on every Linux device that is disconnected and shows this error.