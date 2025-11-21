---
description: >-
  Describes an error that occurs when applying a new wildcard certificate to
  SSRS ('The specified URL was unexpectedly reserved') and steps to unbind the
  old certificate and bind the new one.
keywords:
  - SSRS
  - wildcard certificate
  - netsh
  - sslcert
  - 'https:443'
  - Reporting Services
  - certificate binding
  - The specified URL was unexpectedly reserved
products:
  - auditor
sidebar_label: Error When Applying New Wildcard Certificate to SS
tags: []
title: "Error When Applying New Wildcard Certificate to SSRS: The Specified URL Was Unexpectedly Reserved"
knowledge_article_id: kA04u00000111GqCAI
---

# Error When Applying New Wildcard Certificate to SSRS: The Specified URL Was Unexpectedly Reserved

## Symptoms

- When trying to add new certificate the following error occurs:

  ```
  The specified URL was unexpectedly reserved
  ```

- When trying to reserve `https:443`, I get another error and the services restarts

- The certificate is not listed

## Resolution

1. Open Command Prompt (CMD) as administrator and unbind the certificate using a command below:

   ```batch
   netsh http delete sslcert ipport=[::]:443
   ```

2. Bind the new certificate in **Reporting Service Configuration Manager**
