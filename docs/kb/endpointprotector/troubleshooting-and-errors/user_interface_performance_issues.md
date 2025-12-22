---
description: >-
  This article addresses performance issues related to the Endpoint Protector Console/User Interface, detailing symptoms, causes, and resolutions.
keywords:
  - Endpoint Protector
  - performance issues
  - troubleshooting
sidebar_label: User Interface Performance Issues
tags:
  - troubleshooting-and-errors
title: "User Interface Performance Issues"
knowledge_article_id: kA0Qk0000002B6GKAU
products:
  - endpoint-protector
---

# User Interface Performance Issues

## Symptom

The Endpoint Protector Console/User Interface is experiencing issues and other performance concerns.

## Causes

1. **Large number of logs or file shadows on the Endpoint Protector server.**
2. **Backend services being affected or disrupted.**
3. **Insufficient disk space on the server.**
4. **Insufficient CPU cores and RAM allocated to the server.**
5. **Endpoint Protector Server upgrades or audit log backups running.** Performance can decrease during upgrades or backup operations.
6. **Running older Endpoint Protector Server and Client versions.**

## Resolutions

1. **Large Number of Logs or File Shadows**
   1. Check **Appliance > Server Information** for the number of logs and file shadows.
   2. Delete older or unnecessary logs or archive them using the Audit Log Backup functionality.
   3. Externalize logs using External Storage or SIEM integration functionality.

2. **Backend Services Being Affected**
   1. Reboot the Endpoint Protector server from **Appliance > Server Maintenance > Reboot** or from your hosting platform (VM, AWS, Azure, GCP).

3. **Disk Space Issues**
   1. Review **Appliance > Server Information** for disk space details.
   2. Remove unnecessary files and raise a support ticket for investigation if necessary.
   3. If hosted on your end (VM, AWS, Azure, GCP), allocate extra disk space and contact support for disk resizing.

4. **Resource Issues**
   1. If hosted on your end (VM, AWS, Azure, GCP), add extra CPU cores and RAM.
   2. Contact support via a support ticket to allocate additional resources on the Endpoint Protector server.

5. **Endpoint Protector Server Upgrades or Audit Log Backups Running**
   1. Expect temporary UI performance decrease during and shortly after these processes.

6. **Running Older Endpoint Protector Server and Client Versions**
   1. Always use the latest Endpoint Protector server and client versions available as a best practice.

## Related Links

- [Endpoint Protector Deployment Resources](https://docs.netwrix.com/docs/endpointprotector/5_9_4_2)