---
description: >-
  Explains why users are prompted for credentials in a Single Sign-On
  environment after upgrading to v11.6 and how to resolve it by registering
  Service Principal Names (SPNs) for the web server service account.
keywords:
  - SSO
  - SPN
  - Service Principal Name
  - Netwrix Access Analyzer
  - authentication
  - web server
  - domain credentials
  - Access Information Center
products:
  - access-analyzer
sidebar_label: 'Error: User Credential Prompts in Single Sign-On E'
tags:
  - troubleshooting-and-errors
title: 'Error: User Credential Prompts in Single Sign-On E'
knowledge_article_id: kA0Qk00000029IXKAY
---

# Error: User Credential Prompts in Single Sign-On E

## Related Query

- "SSO is not working after upgrading to 11.6 and also unable to login with domain credentials from other machines."

## Symptom

The following symptoms are present in your Netwrix Access Analyzer environment:

- After the recent upgrade to Netwrix Access Analyzer v11.6, the single sign-on feature in your environment does not work.
- Any attempt to access web-based reports or Access Information Center prompts for user credentials.

## Cause

The `Netwrix Enterprise Auditor Web Server` service account misses required the Service Principal Names (SPN).

## Resolution

Register SPNs for the `Netwrix Enterprise Auditor Web Server` service account. Refer to the following article for detailed steps on the SPN registration for the service account: File System Proxy Service Installation Guide Appendix · v11.5.

## Related Article

- File System Proxy Service Installation Guide Appendix · v11.5
