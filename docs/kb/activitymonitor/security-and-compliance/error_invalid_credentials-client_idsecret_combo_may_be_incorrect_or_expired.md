---
description: >-
  This article addresses the error encountered when the Client ID/Secret combination is incorrect or expired while configuring the API in Netwrix Activity Monitor and Netwrix Access Analyzer.
keywords:
  - invalid credentials
  - client ID
  - secret combo
  - API configuration
  - Netwrix Access Analyzer
sidebar_label: Invalid Credentials Error
tags: []
title: "Error: Invalid Credentials—Client ID/Secret Combo May Be Incorrect or Expired"
knowledge_article_id: kA0Qk00000027rpKAA
products:
  - activitymonitor
---

# Error: Invalid Credentials—Client ID/Secret Combo May Be Incorrect or Expired

## Symptom

After configuring the API in **Netwrix Activity Monitor** and adding the client ID/secret as a connection profile in **Netwrix Access Analyzer** (formerly **Enterprise Auditor**), the following error appears when trying to get the refresh token from the AD Activity Data Collector:

```
Could not connect: 
One of more errors occurred. 
- Invalid credentials. The Client ID/Secret combo may be incorrect or expired.
```

![Error message indicating invalid credentials](../0-images/servlet_image_4ca84d0f3bd4.png)

## Cause

These errors may be caused by any one of the following:

- An expired Client ID/Secret combo
- An open API Configuration window in **Netwrix Activity Monitor**
  
  > **NOTE:** This results in the Client ID/Secret combo being inactive.

## Resolution

If the Client ID/Secret combo is new and not expired, make sure the API Configuration window and **Agent Properties** windows are closed.

![API Configuration window](../0-images/servlet_image_a445105a92a3.png)