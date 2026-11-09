---
description: >-
  Resolve the "User Id Mismatch" login error caused by a user stored in a cookie
  by logging out of all sessions and clearing browser cookies.
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
  - privilegesecure
sidebar_label: 'Troubleshooting a "User Id Mismatch" Error During Login'
tags:
  - kb
  - troubleshooting-and-errors
title: 'Troubleshooting a "User Id Mismatch" Error During Login'
knowledge_article_id: kA04u000000LLjtCAG
---

# Troubleshooting a "User Id Mismatch" Error During Login

## Overview

This article describes how to resolve a "User Id Mismatch" response that you may receive when logging in to the Netwrix Privilege Secure for Access Management console, which prevents login. The response is caused by a mismatch between a Privilege Secure user stored in a cookie and the user attempting login. Generally this is caused when multiple sessions are being launched from the same browser using different users.

![Login page showing the "User Id Mismatch" response](./../0-images/ka04u000000HdEG_0EM4u000005gCr9.png)

## Instructions

1. Log out of all active Privilege Secure sessions.
2. Clear your browser's cookies.
3. Reattempt login using your desired account. You should now be able to successfully log in.
