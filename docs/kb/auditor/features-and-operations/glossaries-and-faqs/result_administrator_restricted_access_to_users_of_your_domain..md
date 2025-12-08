---
description: >-
  This article addresses the error message "Result: Administrator restricted access to users of your domain" encountered during the enrollment or password reset process on the Self-Service portal.
keywords:
  - administrator restricted access
  - self-service portal
  - password reset
sidebar_label: Administrator Restricted Access
tags: []
title: "Result: Administrator Restricted Access to Users of Your Domain"
knowledge_article_id: kA00g000000H9TLCA0
products:
  - auditor
---

# Result: Administrator Restricted Access to Users of Your Domain

## Overview

This article addresses the error message "Result: Administrator restricted access to users of your domain" encountered during the enrollment or password reset process on the Self-Service portal.

![Error message indicating restricted access]./../0-images/servlet_image_427ba59f8bbf.png)

## Symptom

You may see the following error message when attempting to enroll or reset your password on the Self-Service portal:

```
Result: Administrator restricted access to users of your domain
```

## Cause

This issue typically occurs when the domain of the user account that receives the error is not listed among the managed domains.

## Resolution

To resolve the issue, ensure that the domain of the user account that receives the error appears in the list of managed domains. Follow these steps:

1. Go to the Administrative portal (by default, `http://<prm server>/pm/admin`).
2. Click the **Domains** button.
3. Verify that the domain of the user account that receives the error appears in the list of managed domains.
4. Ensure there are no additional symbols in the domain name (spaces, unnecessary characters).
5. Add the domain if necessary.

![Domains management in the Administrative portal]./../0-images/servlet_image_cf580c3eff6f.png)