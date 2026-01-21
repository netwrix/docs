---
description: >-
  A user receives a "Session expired" message when attempting to reset their
  password using the Self-Service portal. This article explains the common
  causes and how to troubleshoot the issue.
keywords:
  - session expired
  - self-service portal
  - password reset
  - IIS session timeout
  - cookies
  - redirection
  - KB823
products:
  - general
sidebar_label: Session expired
tags: []
title: "Session expired"
knowledge_article_id: kA00g000000H9anCAC
---

# Session expired

A user receives a Session expired message when trying to reset their password using the Self-Service portal.

![User-added image](../0-images/ka04u00000116eY_0EM700000005OD2.png)

## Cause

Netwrix Password Reset is based on IIS and uses internal IIS session variables to handle information. IIS session is limited and may expire. The default timeout is `20 minutes`.

This error can also occur when there are issues with cookies, for example when they do not correspond to the current session, or refer to another URL, etc.

## Resolution

1. First, make sure that it is not a real session expiration. If the user started the password reset procedure more than `20 minutes` ago, then this is an expected message.
2. Clear all cookies and try again.
3. If this does not help, check if there is an incorrect redirection in IIS.

Please refer to the [KB823](https://kb.netwrix.com/823) for instructions on how to set up redirection for Netwrix Password Reset.
