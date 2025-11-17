---
description: >-
  Explains how to resolve the "A specified logon session does not exist" error
  when enabling the Leverage Integration API in Netwrix Auditor by assigning a
  new SSL certificate.
keywords:
  - Netwrix Auditor
  - Integration API
  - SSL certificate
  - logon session
  - error
  - certificate store
  - migration
  - Settings
  - Leverage Integration API
products:
  - auditor
sidebar_label: Specified Logon Session Does Not Exist Error in Ne
tags: []
title: "Specified Logon Session Does Not Exist Error in Netwrix Auditor"
knowledge_article_id: kA04u00000111HPCAY
---

# Specified Logon Session Does Not Exist Error in Netwrix Auditor

## Symptom

When you enable **Leverage Integration API** in the Netwrix Auditor **Settings** menu, the following error is prompted:

```text
Cannot save the settings.
A specified logon session does not exist. It may already have been terminated.
```

The **Leverage Integration API** switch is turned off subsequently.

## Causes

- An SSL certificate required to run Integration API is missing.
- In case of a prior Netwrix Auditor migration, the previously used SSL certificate cannot be found in the certificate store of the new Netwrix Auditor server.

## Resolution

Assign a new SSL certificate to Integration API. Refer to the following article for additional information on commands: https://docs.netwrix.com/docs/auditor/10_8 API − Security ⸱ v10.6).

### Related articles

- Integration API − Security ⸱ v10.6: https://docs.netwrix.com/docs/auditor/10_8
