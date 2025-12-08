---
description: >-
  Guidance on what to do if a Netwrix Auditor upgrade appears stuck, including
  recommended antivirus exclusions and steps to clear temporary files and reboot
  to allow the upgrade to complete.
keywords:
  - Netwrix Auditor
  - upgrade
  - stuck
  - antivirus exclusions
  - Temp folder
  - reboot
  - troubleshooting
  - long-running upgrade
  - installation
products:
  - auditor
sidebar_label: Netwrix Auditor Upgrade Process Taking Too Long
tags: []
title: "Netwrix Auditor Upgrade Process Taking Too Long"
knowledge_article_id: kA04u00000110sPCAQ
---

# Netwrix Auditor Upgrade Process Taking Too Long

## Question

The Netwrix Auditor upgrade process is stuck, should I interrupt it and run it again?

## Answer

Depending on the version you're upgrading from and to, there could be major changes implemented in the new Netwrix Auditor build. During the upgrade process Netwrix Auditor may configure new permissions and settings directly related to new features introduced. It is also recommended to upgrade your Netwrix Auditor instance during non-working hours to allow it run for a longer period of time. In some cases, an upgrade may take over 10 hours to complete.

Refer to the following steps in case your upgrade process takes over 20 hours to complete:

- Add corresponding exclusions to the monitoring scope of your antivirus suite — refer to the following article for additional information: [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor).

- Clear the temporary folder:

  1. Make sure no one else is logged into the Netwrix Server.
  2. Clear up the temporary folder on your Netwrix Auditor server:

     ```
     C:\Users\YOURUSER\AppData\Local\Temp
     ```

  3. Perform a reboot before beginning the installation process again, if possible.
  4. Let the upgrade run overnight.
