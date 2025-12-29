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
  - change-tracker
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
4. Locate the **Thumbprint** entry in the XML file.
5. In between the **Thumbprint** tags, enter your custom certificate thumbprint (the correct thumbprint is shown in the error message).
6. Save the file, replacing the old one. Note that you may need to save this to the desktop and copy and paste it back into the directory, replacing the old file.
7. Restart the Agent service.

### HubDetails.xml Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<HubDetails xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <Url>https://myserver.mydomain.local/api</Url>
    <Username>agent</Username>
    <E1>EncryptedPasswordWillAppearHere</E1>
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