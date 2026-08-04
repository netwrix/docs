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
  - kb
title: "Client Integrity Fail Events"
knowledge_article_id: kA0Qk0000002B4GKAU
products:
  - endpointprotector
---

# Client Integrity Fail Events

## Question

What do client integrity fail events mean?

## Answer

A client integrity fail event indicates that the Endpoint Protector client has encountered an issue that affects its integrity or operation.

For the full explanation of how this check works, see [EPP Client Integrity Checks](/docs/endpointprotector/admin/agent#client-integrity-check-overview) in the Agent documentation.

The Client Integrity check runs automatically at EPP service/daemon startup and verifies two things:
- The existence of all expected EPP component files on the endpoint.
- The validity of file signatures (signature validation applies to Windows only).

If either check fails, a **Client Integrity Failure** event is reported to the EPP Server. This type of event can have multiple causes, including:

- Full disk access is required but not granted.
- The certificate was not imported into Keychain.
- The user did not allow the network extension.
- An installation file is missing.
- Bluetooth permissions were not granted.

:::note
On Windows, a missing or untrusted DigiCert certificate in the chain used to sign EPP binaries can also cause a signature validation failure, which the Client Integrity check reports as a failure event. See [Policies Update Fails on Windows 11 EPP Client (Code Signature Verification Error)](/docs/endpointprotector/install/migrationprocedure/troubleshooting#policies-update-fails-on-windows-11-epp-client-code-signature-verification-error) if you suspect this cause.
:::

To see more information about what caused a client integrity fail event, navigate to the **Endpoint Protector console > Reports and Analysis > Logs Reports**. Enable the **File Name** and **File Type** columns from the **Show/Hide columns** section.