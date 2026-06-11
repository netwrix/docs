---
description: >-
  This article provides a resolution for the "Hub connection failed" error due to an IP address being blocked after multiple login failures.
keywords:
  - Hub connection failed
  - IP address blocked
  - Login failures
sidebar_label: 403 IP Address Blocked
tags: [kb, troubleshooting-and-errors]
title: "403 IP Address Blocked"
knowledge_article_id: ka0Qk000000DlfRIAS
products:
  - change-tracker
---

# 403 IP Address Blocked

## Symptom

This problem can occur when the Agent password being sent to the Hub Server is incorrect.

### Example Error Message

```text
2017-09-06 14:22:43,230 [10] INFO Message - Hub connection failed (403 Server message: Ip Address Blocked: LoginFailures)
```

## Cause

The agent's `HubDetails.xml` file contains an incorrect password for the Hub Server account. After repeated authentication failures, the Hub Server blocks the agent's IP address to prevent brute-force login attempts.

## Resolution

1. Stop the **Netwrix Agent Service**.
2. Navigate to your Netwrix Agent Directory, which contains the Rolling-Log Files (see [Agent Rolling-Log File Location](/docs/changetracker/8_1/install/agent/rollinglogfile) for more details):
   - **Windows:** `C:\ProgramData\NNT\gen7agent.app.netcore\`
   - **Linux:** `/var/nnt/gen7agent.app.netcore/`
3. Edit the **HubDetails.xml** file.
4. Remove the `<E1></E1>` tags as they are the agent password which has been encrypted.
5. In place of `<E1></E1>`, enter the `<Password></Password>` tags. See an example of **HubDetails.xml** below. The default password is used as an example.
6. In between the password entries, enter your Agent Account password as defined on your Netwrix Hub Server.
7. Save the file, replacing the old one.
8. Restart the Agent service.

> **NOTE:** When you start the service, the agent will automatically re-encrypt your password, and the **E1** tags will replace the password tags. Also, there is a ten-minute cool-off period for IP Address Blocking. Now that the username and password have been corrected, the agent should reconnect after the ten minutes have elapsed. This cool-off period is counted at the Netwrix Hub Server and does not take effect at the agent level.

### HubDetails.xml Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<HubDetails xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <Url>https://myserver.mydomain.local/api</Url>
    <Username>agent</Username>
    <Password>YourAgentPassword</Password>
    <Proxy />
    <ProxyDomain />
    <ProxyUsername />
    <ProxyPassword />
    <UseDefaultProxy>false</UseDefaultProxy>
    <NamePrefix></NamePrefix>
    <NameSuffix></NameSuffix>
    <Thumbprint></Thumbprint>
</HubDetails>
```
