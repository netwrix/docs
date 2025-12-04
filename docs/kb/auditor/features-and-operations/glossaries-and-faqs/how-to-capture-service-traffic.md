---
description: >-
  Shows how to capture and debug HTTP traffic from Netwrix Data Classification
  services using Fiddler by configuring the machine.config to route service
  traffic through the Fiddler proxy.
keywords:
  - Fiddler
  - machine.config
  - proxy
  - Netwrix Data Classification
  - Collector
  - Indexer
  - Classifier
  - HTTP
  - Telerik
  - debugging
products:
  - auditor
  - data-classification
sidebar_label: How to capture service traffic
tags: []
title: "How to capture service traffic"
knowledge_article_id: kA00g000000H9eDCAS
---

# How to capture service traffic

In more **complex** or **secure** environments you sometimes need to **debug** connectivity between the **Netwrix Data Classification** services and an external **HTTP** connection (website, SharePoint site collection, etc.). In these cases **Fiddler** is a free tool that you can use to exclude certain issues and inspect the exact **HTTP** traffic that occurs.

When **Fiddler** launches and attaches it adjusts the current user's proxy settings to point at **Fiddler**, running on `127.0.0.1:8888` by default. However, the core services (Collector, Indexer and Classifier) do not inherit those settings automatically and must be configured manually.

If the failure case succeeds when Fiddler is running (and configured), that suggests the environment requires a proxy configuration that has not been configured correctly. Coordinate with your network team to confirm the exact proxy requirements between the server and the destination.

You can download Fiddler from the Telerik website: https://www.telerik.com/fiddler

---

**Note:** Making changes to the `machine.config` may temporarily interrupt IIS.

## Procedure

1. Start **Fiddler**.
2. Launch **Notepad** with elevated permissions (Right click the program → Run as **Administrator**).
3. Open the following file: `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Config\machine.config`
4. Add the XML block below as a peer to the existing **system.net** element, replacing any existing **defaultProxy** element if present (see image below).
5. Save the file.
6. Restart the core **Services** (**Collector**, **Indexer** and **Classifier**).

**NOTE:** The **system.net** element must be contained within the **configuration** element.

```xml
<!-- The following section is to force use of Fiddler for all applications, including those running in service accounts -->
<system.net>
<defaultProxy
                enabled = "true"
                useDefaultCredentials = "true">
<proxy autoDetect="false" bypassonlocal="false" proxyaddress="http://127.0.0.1:8888/" usesystemdefault="false" />
</defaultProxy>
</system.net>
```

![CaptureTrafficMachineConfig](https://kb.netwrix.com/wp-content/uploads/2019/12/CaptureTrafficMachineConfig.png)
