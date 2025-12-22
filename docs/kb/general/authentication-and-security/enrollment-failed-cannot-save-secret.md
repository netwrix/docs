---
description: >-
  When you enroll a user, this error occurs if the Netwrix Password Secure
  service account lacks write access to the installation directory. Grant
  Modify/Write permissions or verify administrative membership to resolve the
  issue.
keywords:
  - Enrollment failed
  - cannot save secret
  - secrets.bin
  - permissions
  - service account
  - Netwrix Password Secure
  - installation directory
  - Modify
  - Write
products:
  - general
sidebar_label: 'Enrollment failed: cannot save secret'
tags:
  - authentication-and-security
title: 'Enrollment failed: cannot save secret'
knowledge_article_id: kA00g000000H9bXCAS
---

# Enrollment failed: cannot save secret

When enrolling a user, the following error occurs:

`Enrollment failed: cannot save secret`

## Cause

Netwrix Password Secure is trying to create a `secrets.bin` file in the Netwrix Password Secure installation directory. The account used for the Netwrix Password Secure service does not have proper write access to the Netwrix Password Secure installation directory.

## Resolution

1. Provide the Netwrix Password Secure service account rights with `Modify` and/or `Write` to the Netwrix Password Secure installation directory.
2. Verify that the account is a domain admin and a local administrator on the Netwrix server where Netwrix Password Secure is installed.
3. Verify the Administrators group on the Netwrix server has `Modify`/`Write` access to the Netwrix Password Secure installation directory.
