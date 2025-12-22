---
description: >-
  This article addresses the error related to the certificate thumbprint mismatch in the Netwrix Agent and provides a resolution to ensure proper reporting to the Hub Server.
keywords:
  - Netwrix Agent
  - certificate thumbprint
  - Hub Server
sidebar_label: Rolling-Log Fix
tags: [troubleshooting-and-errors]
title: 'Rolling-Log Fix: "ERROR NNT.Hub.ServiceClient.HubAdapter - Certificate Thumbprint Does Not Match Trusted"'
knowledge_article_id: kA04u0000000JaGCAU
products:
  - general
---

# Rolling-Log Fix: "ERROR NNT.Hub.ServiceClient.HubAdapter - Certificate Thumbprint Does Not Match Trusted"

## Symptoms

The following may occur when the Agent password being sent to the Hub Server is incorrect:

```
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#                                                   Example Message:													  #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

2017-10-08 11:17:36,935 [Threadpool worker] ERROR NNT.Hub.ServiceClient.HubAdapter - Certificate thumbprint does not match trusted (BAD1067FBAB59CCED21786657C672F6AB5BE824C/6F7F11707C0C93CD0F7E92D5BC0F1C9345D68A64). Consider setting Thumbprint in HubDetails.xml. Server certificate details
```

## Cause

This means that you are using a custom or unrecognized IIS Certificate. You need to specify to the agent the certificate thumbprint so that it can use the new certificate.

## Resolution

If you are receiving this error, the Netwrix Agent is NOT reporting to your hub. This is a critical error, and for monitoring to continue, it must be resolved. To resolve this error:

1. Stop the **Netwrix Agent Service**.
2. Navigate to your Netwrix Agent Directory, which contains the Rolling-Log Files, defined in this article [Netwrix Software Problem? What Info Should I Provide?](https://kb.netwrix.com/8048).
3. Right-click and edit the **HubDetails.xml** file.
4. Remove the tags as they are the agent password which has been encrypted.
5. In place of the tags, enter the tags. See the example **HubDetails** below. The default password is used as an example.
6. In between the password entries, enter your Agent Account password as defined on your Netwrix Hub Server.
7. In between the **Thumbprint** entries, enter your custom certificate thumbprint.
8. Save the file, replacing the old one. Note that you may need to save this to the desktop and copy and paste it back into the directory, replacing the old file.
9. Restart the Agent service.

> **NOTE:** When you start the service, the agent will automatically re-encrypt your password, and the E1 tags will replace the password tags. There is also a ten-minute cool-off period when this happens. Now that the username and password have been corrected, the agent should register after the ten minutes have elapsed. This cool-off period is counted at the Netwrix Hub server and does not take effect at the agent level. If you have stopped the service, you do not have to wait 10 minutes after restarting it.

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
    <Thumbprint>BCD1067FBAB59CCED21786657C672F6AB5BE824C</Thumbprint>
</HubDetails>
```