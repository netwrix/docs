---
title: "Install Add-On"
description: "Install Add-On"
sidebar_position: 10
---

# Install Add-On

After downloading the add-on package from Netwrix add-on store, copy it to a computer where the
Auditor Server resides. Unpack the ZIP archive to a folder of your choice.

The main component of the add-on is a service named Netwrix Auditor **ITSM
Integration Service**. This service runs on the computer where the Auditor Server works, and
uses the default Integration API port **9699**. Unless specified, the service runs under the
**LocalSystem** account.

To use the add-on, you should check the prerequisites and specify configuration settings, as
described in the next sections. After that, run the installer that will apply settings and start the
service. See the [Deploy the Service](/docs/auditor/10.9/addon/servicenow/deployment.md) topic for additional information.
