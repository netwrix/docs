---
description: >-
  Explains how to block an internal card reader on a Mac using Netwrix Endpoint
  Protector (EPP) and how user remediation affects inserted SD cards.
keywords:
  - internal card reader
  - Mac
  - SD card
  - Netwrix Endpoint Protector
  - EPP
  - block device
  - user remediation
  - device control
products:
  - endpoint-protector
sidebar_label: Can You Block an Internal Card Reader on Mac?
tags:
  - device-control-and-access-management
title: "Can You Block an Internal Card Reader on Mac?"
knowledge_article_id: kA0Qk0000002BHKKA2
---

# Can You Block an Internal Card Reader on Mac?

## Question
Is it possible to block an internal card reader on Mac with Netwrix Endpoint Protector (EPP)?

## Answer
Yes, you can block internal card readers on Mac computers using Netwrix Endpoint Protector (EPP). The rights apply to the card reader itself, not to the inserted SD card. For example, if you set **Deny** rights to the internal card reader class, any inserted SD cards will be blocked.

If user remediation is active, every SD card you insert into the internal card reader will be allowed.
