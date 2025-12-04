---
description: >-
  Shows how to migrate Netwrix Password Reset (formerly Password Expiration
  Notifier) to a different server by installing Netwrix Auditor on the new
  server, copying templates, and reconfiguring settings.
keywords:
  - migrate
  - Netwrix Password Reset
  - Netwrix Auditor
  - templates
  - password expiration
  - notification templates
  - Actions tab
  - license
products:
  - auditor
  - password_reset
sidebar_label: Migrate Netwrix Password Reset to a Different Server
tags: []
title: "Migrate Netwrix Password Reset to a Different Server"
knowledge_article_id: kA00g000000Pbd7CAC
---

# Migrate Netwrix Password Reset to a Different Server

## Question

How to migrate Netwrix Password Reset to a different server?

## Answer

In Netwrix Auditor versions 9.0 and newer, Netwrix Password Reset is installed alongside the Netwrix Auditor installation.

1. Install Netwrix Auditor on a new server.
2. Copy the following data from the old server to the new server:
   - Templates folder from `C:\Program Files (x86)\Netwrix Auditor\Password Expiration Alerting\Templates`.
   - Screenshot all four tabs of the Netwrix Password Reset interface for configuration details.  
     ![tIfrvbFLMt.png]./../0-images/ka04u00000117hE_0EM4u000007ccaS.png)
3. Reconfigure Netwrix Password Reset according to the screenshots you captured.
4. Apply your Netwrix Auditor License to the new instance of Netwrix Auditor.

### NOTE

Message templates customized via the Netwrix Password Reset UI should be transferred manually — make sure to copy the contents of the **Actions** tab reports highlighted in the screenshot.

![CslItbePFg.png]./../0-images/ka04u00000117hE_0EM4u000007ccac.png)

