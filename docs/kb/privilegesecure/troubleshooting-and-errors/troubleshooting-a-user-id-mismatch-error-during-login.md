---
description: >-
  When you attempt to log in to Netwrix Privilege Secure, you may receive a
  "User Id Mismatch" error caused by a cookie-stored user mismatch. This article
  explains how to resolve the issue by clearing sessions and cookies.
keywords:
  - user id mismatch
  - login error
  - cookies
  - session
  - Netwrix Privilege Secure
  - troubleshooting
  - browser
  - multiple sessions
products:
  - privilege-secure-access-management
sidebar_label: 'Troubleshooting a "User Id Mismatch" Error During '
tags: []
title: Troubleshooting a "User Id Mismatch" Error During Login
knowledge_article_id: kA04u000000LLjtCAG
---

# Troubleshooting a "User Id Mismatch" Error During Login

## Summary

When logging into the Netwrix Privilege Secure console, you may receive a "User Id Mismatch" response that prevents login. This is caused when there is a mismatch between a Netwrix Privilege Secure user stored in a cookie, and the user attempting login. Generally this is caused when multiple sessions are being launched from the same browser using different users.

![image.png](./../0-images/ka04u000000HdEG_0EM4u000005gCr9.png)

## Instructions

1. Log out of all active Netwrix Privilege Secure sessions.
2. Clear your browser's cookies.
3. Reattempt login using your desired account. You should now be able to successfully log in.
