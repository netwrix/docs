---
description: >-
  When validating a SharePoint Online source, you might encounter an error
  indicating the certificate key size is too small. This article explains the
  cause and resolution for the error.
keywords:
  - SharePoint Online
  - certificate
  - Azure AD
  - 2048
  - key size
  - certificate authority
  - Data Classification
  - Azure app
  - validation error
  - helpcenter
products:
  - data-classification
sidebar_label: Certificate Key Size Value Error When Validating S
tags: []
title: "Certificate Key Size Value Error When Validating SharePoint Online Source"
knowledge_article_id: kA04u00000111KJCAY
---

# Certificate Key Size Value Error When Validating SharePoint Online Source

## Symptom

When validating a SharePoint Online source, the following error appears:

```text
The certificate used must have a key size of at least 2048 bits.
```

## Cause

The issue occurs when a third-party certificate authority has been used and the generated certificate for Azure app is only 1024 bit.

## Resolution

Create a new 2048 bit certificate using your certificate authority tool.

Then import and upload it to to Azure for SharePoint Online app per normal configuration insctructions.

For additional information on how to prepare the certificate for your Azure AD app, refer to the following article: Step 1: Prepare application certificate.
