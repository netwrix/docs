---
title: "HubDetails.xml File"
description: "HubDetails.xml File"
sidebar_position: 100
---

# HubDetails.xml File

The Agent configuration settings are controlled by the Hub during operations but the initial
registration necessitates a basic config file for registration with the Hub.

The **HubDetails.xml** file includes some details unique to your deployment of Change Tracker ,
hence it requiring your intervention to make sure settings are as needed.

The key tags within the file are as follows:

![AgentHubDetailsFile](/images/changetracker/8.0/install/agent/agenthubdetailsfile.webp)

:::tip
Remember, an unencrypted password means the Agent didn’t initialize and suggests a bad
installation or .NET Framework issue – remember the Agent on Windows requires .NET Framework V3.5,
Linux/Solaris requires the latest NNT Mono runtime. Gen 7 Agent also supports additional nodes –
NamePrefix, NameSuffix.
:::


\*The Thumbprint uniquely identifies the Web Server certificate, see the Microsoft
[How to: Retrieve the Thumbprint of a Certificate](https://msdn.microsoft.com/en-us/library/ms734695(v=vs.110).aspx)
article for more information.

**Step 1 –** Open **IIS**.

**Step 2 –** Select the server from the list on the left hand side.

**Step 3 –** Select **Server Certificates**.

**Step 4 –** Double click your certificate in the list to open the certificates permissions.

**Step 5 –** Open the **Details** tab.

**Step 6 –** Scroll to the bottom of the list and highlight the **Thumbprint** field.

**Step 7 –** The thumbprint value will then be displayed – transpose this to your **HubDetails.xml**
file.

The next step is to check that there is network connectivity to the Hub URL from the Agent’s host.

:::note
Where the Change Tracker Hub has been installed on a Windows/IIS platform then the Hub URL
will be https://192.168.1.36.

:::
