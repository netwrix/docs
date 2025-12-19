---
description: >-
  Learn how to install the Netwrix Endpoint Protector client silently from the
  command line without user interaction or a system restart.
keywords:
  - endpoint protector
  - Netwrix Endpoint Protector
  - silent install
  - msiexec
  - MSI
  - client installation
  - /qn
  - /norestart
products:
  - endpoint-protector
sidebar_label: How to Install Client Without User Interaction
tags:
  - deployment-and-installation
title: "How to Install Client Without User Interaction"
knowledge_article_id: kA0Qk0000002Ay3KAE
---

# How to Install Client Without User Interaction

## Question
Can you install the Netwrix Endpoint Protector client, without user interaction?

## Answer
Yes, you can install the Netwrix Endpoint Protector client via the command line interface with administrative privileges. This method installs the client without user interaction and does not require a system restart.

Run the following command:

```batch
msiexec /i "C:\Users\eppuser1\Desktop\EPP Client\EPPClientSetup.6.2.4.2000_x86_64_[a=192.168.43.115].msi" /norestart /qn /l*v "C:\EPP_inst.log"
```

- ` /qn` performs a silent installation.
- ` /norestart` prevents a computer restart after installation is complete.
