---
description: >-
  Yes. Endpoint Protector can block internal card readers on Mac by treating
  them as the USB Storage Device device class; set the class rights to Deny to
  block the reader.
keywords:
  - endpoint protector
  - Mac
  - card reader
  - internal card reader
  - USB Storage Device
  - block
  - deny
  - allow
  - DLP
products:
  - endpoint-protector
sidebar_label: Can Endpoint Protector Block Internal Card Readers
tags:
  - device-control-and-access-management
title: "Can Endpoint Protector Block Internal Card Readers on Mac?"
knowledge_article_id: kA0Qk0000002BCfKAM
---

# Can Endpoint Protector Block Internal Card Readers on Mac?

## Question
Is it possible to block an internal card reader on Mac with Endpoint Protector?

## Answer
Yes, Endpoint Protector can block internal card readers on Mac computers. In the Endpoint Protector interface, a card reader is recognized as a **USB Storage Device**.

If the rights for the **USB Storage Device** class are set to **Allow**, internal card readers will also be allowed, and users will be able to access information from inserted cards.

If the rights for the **USB Storage Device** class are set to **Deny**, the internal card reader will be blocked.
