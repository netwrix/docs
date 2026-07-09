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
sidebar_label: 'Rolling-Log Fix: ConfigurationLoader Hub Location Not Specified'
tags: [kb, troubleshooting-and-errors]
title: >-
  Rolling-Log Fix: "ERROR ConfigurationLoader - Hub location details have not
  been specified. Please edit the following file to specify hub location and
  account details: /var/nnt/gen7agent.service/HubDetails.xml"
---

# Rolling-Log Fix: "ERROR ConfigurationLoader - Hub location details have not been specified. Please edit the following file to specify hub location and account details: /var/nnt/gen7agent.service/HubDetails.xml"

## Symptom

The agent cannot connect to the Netwrix Change Tracker Hub Server, and the rolling log contains an entry indicating that hub location details have not been specified. This problem can occur when the Agent password sent to the Hub Server is incorrect.

### Example Error Message

```
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#                                                   Example Message:                                                      #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

2017-07-10 19:49:59,891 [1] ERROR ConfigurationLoader - Hub location details have not been specified. 
Please edit the following file to specify hub location and account details: /var/nnt/gen7agent.service/HubDetails.xml
```

## Cause

The agent could not locate the `HubDetails.xml` file, which tells the agent how to connect to the Netwrix Change Tracker Hub Server.

## Resolution

If you receive this error, the Netwrix Change Tracker Agent is NOT reporting to the hub. This is a critical error and, for monitoring to continue, you must resolve it. To resolve this error:

1. Stop the Netwrix Change Tracker Agent Service.
2. Run the Netwrix Change Tracker Connection Script by issuing the following command: `sudo sh /opt/nnt/gen7agent/configure-gen7agent.sh` - Complete the requested details.
3. Start the Service.

If the preceding steps do not work:

1. Stop the Netwrix Change Tracker Agent Service.
2. Navigate to the Netwrix Change Tracker Agent directory that contains the Rolling-Log files. <!-- link removed: kb.netwrix.com/8048 -->
3. Modify the `HubDetails.xml` file. A known good `HubDetails.xml` example is shown in the following section.
4. Modify the `HubURL` and insert your URL in its place.
5. Remove the `<Password>` tags — these contain the encrypted agent password, if any exist.
6. In the place of the `<Password>` tags, enter the password tags shown in the following example. The default password is used as an example.
7. Between the password entries, enter your Agent Account password as defined on the Netwrix Change Tracker Hub Server.
8. Between the `Thumbprint` entries, enter your custom certificate thumbprint if you have one. If you do not have a custom certificate and are using the default, leave it blank.
9. Save the file, replacing the old one.

   > **NOTE:** You may need to save this to the desktop and copy and paste it back, replacing the old file in the directory.

10. Restart the agent service.

> **NOTE:** When you start the service, the agent automatically re-encrypts your password, and the E1 tags replace the password tags. There is also a ten-minute cool-off when this happens. Now that the username and password have been corrected, the agent should register after the ten minutes have elapsed. This cool-off period is counted at the Netwrix Change Tracker Hub Server and does not take effect at the agent level. If you have stopped the service, you do not have to wait 10 minutes after restarting it.

### Example HubDetails.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<HubDetails xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
       <Url>https://myserver.mydomain.local/api</Url>
       <Username>agent</Username>
       <Password><YourAgentPassword></Password>
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
