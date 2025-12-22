---
description: >-
  This article addresses the "ERROR NNT.Hub.ServiceClient.HubAdapter - HubAdapter.Authenticate()" issue, detailing its symptoms, causes, and resolutions for affected Linux devices.
keywords:
  - TLS error
  - Netwrix Agent
  - Linux device connection
products:
  - data-classification
sidebar_label: Rolling Log Fix
tags:
  - troubleshooting-and-errors
title: "Rolling Log Fix: ERROR NNT.Hub.ServiceClient.HubAdapter - HubAdapter.Authenticate() Error Authenticating to Hub"
knowledge_article_id: kA04u0000000JjwCAE
---

# Rolling Log Fix: "ERROR NNT.Hub.ServiceClient.HubAdapter - HubAdapter.Authenticate() Error Authenticating to Hub"

## Symptoms

```
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#                                                   Example Message:							                          #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

2018-07-31 13:03:22,240 [HubClient-PollHubThreadProcessing] ERROR NNT.Hub.ServiceClient.HubAdapter - 
HubAdapter.Authenticate() Error authenticating to hub at https://example.ip/api/ - Error writing headers (Error 
while sending TLS Alert (Fatal:InternalError): System.IO.IOException: The authentication or decryption has failed. --->
System.IO.IOException: EndRead failure ---> System.Net.Sockets.SocketException: Connection reset by peer
```

## Cause

If you have recently disabled TLS 1.0/1.1 on your Windows Hub, it is likely that a few of your Linux devices are offline and cannot connect to your Hub (mostly disabled for audit/compliance standards).

If the Linux device is currently at Mono 4.5, you will receive this error if you disable TLS 1.0/1.1 on your Windows Hub.

Since Mono 4.5 has compatibility issues with TLS 1.2, you will need to upgrade Mono to a later version (Mono 5.0.1.1). Instructions below on how to install/remedy this issue.

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

This will need to be done to all Linux devices that have been disconnected and show this error.

### Related Articles

- [Hub Offline, connection retries exhausted (The remote server returned an error: (403) Forbidden)](https://kb.netwrix.com/8307)
- [ERROR HubDetails - Crypto error. Has the agent process account changed since the password data was entered?](https://kb.netwrix.com/8287)
- [ERROR NNT.Hub.ServiceClient.HubAdapter - HubAdapter.Authenticate() Error Authenticating to Hub at https://.../api/ - Error Writing Headers (Error While Sending TLS Alert (Fatal:InternalError):](https://kb.netwrix.com/8364)
- [Script Error Executing Line 6: ExecuteAndCaptureChunked - /NNT_FILEHASH_LINUX_X64: Permission Denied (AGENTLESS LINUX)](https://kb.netwrix.com/8253)
- [Hub Connection Failed (403 Server Message: IP Address Blocked: Login Failures)](https://kb.netwrix.com/8171)