---
description: >-
  This article provides a resolution for the "Hub connection failed" error due to an IP address being blocked after multiple login failures.
keywords:
  - Hub connection failed
  - IP address blocked
  - Login failures
sidebar_label: Rolling-Log Fix
tags: [troubleshooting-and-errors]
title: "Rolling-Log Fix: Hub Connection Failed. 403 Server Message: IP Address Blocked: Login Failures"
knowledge_article_id: kA04u0000000JXgCAM
products:
  - general
---

# Rolling-Log Fix: Hub Connection Failed. 403 Server Message: IP Address Blocked: Login Failures

## Symptoms

This problem can occur when the Agent password being sent to the Hub Server is incorrect.

### Example Error Message

```
2017-09-06 14:22:43,230 [10] INFO Message - Hub connection failed (403 Server message: Ip Address Blocked: LoginFailures)
```

## Resolution

1. Stop the **Netwrix Agent Service**.
2. Navigate to your Agent Directory which contains the Rolling-Log Files.
3. Right-click and edit the **Hubdetails.xml** file.
4. Remove the `<E1></E1>` tags as they are the agent password which has been encrypted.
5. In place of `<E1></E1>`, enter the `<Password></Password>` tags. See an example of **HubDetails.xml** below. The default password is used as an example.
6. In between the password entries, enter your Agent Account password as defined on your Netwrix Hub Server.
7. Save the file, replacing the old one.
8. Restart the Agent service.

> **NOTE:** When you start the service, the agent will automatically re-encrypt your password, and the **E1** tags will replace the password tags. Also, there is a ten-minute cool-off when this happens. Now that the username and password have been corrected, the agent should register after the ten minutes have elapsed. This cool-off period is counted at the Netwrix Hub Server and does not take effect at the agent level. If you have stopped the service, you do not have to wait 10 minutes after restarting it.

### HubDetails.xml Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<HubDetails xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <Url>https://myserver.mydomain.local/api</Url>
    <Username>agent</Username>
    <Password>passWord121</Password>
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