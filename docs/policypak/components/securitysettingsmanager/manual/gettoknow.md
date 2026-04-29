---
title: "Getting to Know PolicyPak Security Settings Manager"
description: "Getting to Know PolicyPak Security Settings Manager"
sidebar_position: 10
---

# Getting to Know PolicyPak Security Settings Manager

PolicyPak Security Settings Manager is a node you see within every GPO you create.
While PolicyPak Security Settings Manager is listed on both the Computer and User
sides, it only functions on the the computer side. Below you can see the export option available.

![about_policypak_security_settings_1](/images/policypak/securitysettings/about_endpointpolicymanager_security_settings_1.webp)

The only job of the PolicyPak Security Settings Manager node is to export the
computer-side security settings as an XML file. This XML file can be used with PolicyPak Exporter (with Microsoft Endpoint Manager [SCCM and Intune], KACE, etc.) or uploaded to
PolicyPak Cloud.

:::note
Additionally, if you use the PolicyPak Cloud service, you can even deliver these Group
Policy security settings to non-domain-joined machines over the Internet.

:::


