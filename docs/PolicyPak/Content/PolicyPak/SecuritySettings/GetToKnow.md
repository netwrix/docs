---
sidebar_position: 3343
title: Getting to Know Endpoint Policy Manager Security Settings Manager
---

# Getting to Know Endpoint Policy Manager Security Settings Manager

Endpoint Policy Manager Security Settings Manager is a node you see within every GPO you create. While Endpoint Policy Manager Security Settings Manager is listed on both the Computer and User sides, it only functions on the the computer side. Below you can see the export option available.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 10 - Security Settings Manager component_manual/About PolicyPak Security Settings_1.png)

The only job of the Endpoint Policy Manager Security Settings Manager node is to export the computer-side security settings as an XML file. This XML file can be used with Endpoint Policy Manager Exporter (with Microsoft Endpoint Manager [SCCM and Intune], KACE, etc.) or uploaded to Endpoint Policy Manager Cloud.

**NOTE:** Additionally, if you use the PolicyPak Cloud service, you can even deliver these Group Policy security settings to non-domain-joined machines over the Internet.