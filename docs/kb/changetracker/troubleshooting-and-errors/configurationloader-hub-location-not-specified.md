---
description: >-
  Explains how to resolve the "Hub location details have not been specified"
  error when an agent cannot find HubDetails.xml, including running the
  connection script and manually editing HubDetails.xml.
keywords:
  - NNT
  - HubDetails.xml
  - agent
  - Hub Server
  - configure-gen7agent.sh
  - rolling-log
  - HubURL
  - Thumbprint
products:
  - changetracker
knowledge_article_id: ka04u000000Hd9pAAC
sidebar_label: 'ConfigurationLoader Error - Hub Location Details Have Not Been Specified'
tags: [kb, troubleshooting-and-errors]
title: 'ConfigurationLoader Error - Hub Location Details Have Not Been Specified'
---

# ConfigurationLoader Error - Hub Location Details Have Not Been Specified

## Symptom

The agent cannot connect to the Netwrix Change Tracker Hub Server, and the rolling log contains an entry indicating that hub location details have not been specified. This problem can occur when the Agent password sent to the Hub Server is incorrect.

### Example Error Message

```text
2017-07-10 19:49:59,891 [1] ERROR ConfigurationLoader - Hub location details have not been specified. 
Please edit the following file to specify hub location and account details: C:\ProgramData\NNT\gen7agent.app.netcore\HubDetails.xml
```

## Cause

The agent could not locate the `HubDetails.xml` file, which tells the agent how to connect to the Netwrix Change Tracker Hub Server.

## Resolution

If you receive this error, the Netwrix ChangeTracker Gen7 Agent NetCore is not reporting to the hub. This is a critical error, and you must resolve it for monitoring to continue. To resolve this error:

1. Stop the **Netwrix ChangeTracker Gen7 Agent NetCore Service**.
2. Navigate to `C:\ProgramData\NNT\gen7agent.app.netcore`.
3. Modify the `HubDetails.xml` file. (A known good `HubDetails.xml` example is shown at the bottom of the article).
4. Modify the `<Url>` and insert your URL in its place.
5. Modify the `<Username>` and insert your user account name in its place.
6. Replace the `<Password />` and `<E1>` tags (which contain the encrypted agent password) with `<Password></Password>`.
7. Modify the `<Password>` and insert your user account password in its place.

    > **NOTE:** At a minimum, the agent only requires the Hub's URL, an agent user and password in order to connect to Change Tracker. However, if your environment requires a proxy, proxy credentials, certificate thumbprints, and/or public key strings, you can determine what is required by reviewing the HubDetails.xml file of an agent that is already installed on another server and is successfully connected to Change Tracker.

8. Once the HubDetails.xml file has been configured, save the file, replacing the old version.

    > **NOTE:** You may need to save this to the desktop and copy and paste it back, replacing the old file in the directory.

9. Start the **Netwrix ChangeTracker Gen7 Agent NetCore Service**.

### Example HubDetails.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<HubDetails xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <Url>https://SERVER-HERE/api/</Url>
  <Username>USER-HERE</Username>
  <Password>PASSWORD-HERE</Password>
  <Proxy />
  <ProxyDomain />
  <ProxyUsername />
  <ProxyPassword />
  <UseDefaultProxy>false</UseDefaultProxy>
  <NamePrefix />
  <NameSuffix />
  <UseDeterministicGuid>false</UseDeterministicGuid>
  <Thumbprint />
  <PublicKeyString />
</HubDetails>
```
