---
description: >-
  Explains whether Netwrix Auditor can authenticate in a Kerberos-only
  environment and lists limitations to consider when using Kerberos for API
  integration.
keywords:
  - Kerberos
  - NTLM
  - API authentication
  - Netwrix Auditor
  - Windows Server Auditing
  - hostname
  - IP address
products:
  - auditor
sidebar_label: Netwrix Auditor API Authentication in Kerberos-onl
tags: []
title: "Netwrix Auditor API Authentication in Kerberos-only Environment"
knowledge_article_id: kA04u000000PoLHCA0
---

# Netwrix Auditor API Authentication in Kerberos-only Environment

## Question

Can Netwrix Auditor authentication be set up in Kerberos-only environment?

## Answer

While NTLM authentication is recommended for API integration, Kerberos protocol can be used instead with following limitations to be considered:

- Windows Server Auditing requires full computer names to be used instead of aliases.
- Netwrix Auditor clients require a Netwrix Auditor server hostname to be specified instead of the server IP address.
