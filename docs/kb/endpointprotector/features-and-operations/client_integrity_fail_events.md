---
description: >-
  This article explains the meaning of client integrity fail events and outlines their potential causes.
keywords:
  - client integrity fail
  - Endpoint Protector
  - event causes
sidebar_label: Client Integrity Fail Events
tags:
  - features-and-operations
title: "Client Integrity Fail Events"
knowledge_article_id: kA0Qk0000002B4GKAU
products:
  - endpoint-protector
---

# Client Integrity Fail Events

## Question

What do client integrity fail events mean?

## Answer

A client integrity fail event indicates that the Endpoint Protector client has encountered an issue that affects its integrity or operation. This type of event can have multiple causes, including:

- Full disk access is required but not granted.
- The certificate was not imported into Keychain.
- The user did not allow the network extension.
- An installation file is missing.
- Bluetooth permissions were not granted.

To see more information about what caused a client integrity fail event, navigate to the **Endpoint Protector console > Reports and Analysis > Logs Reports**. Enable the **File Name** and **File Type** columns from the **Show/Hide columns** section.