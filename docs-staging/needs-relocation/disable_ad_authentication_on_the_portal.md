---
description: >-
  This article explains how to disable Active Directory authentication on the Netwrix Directory Manager Portal, allowing users to authenticate solely via Single Sign-On (SSO).
keywords:
  - Active Directory
  - authentication
  - Single Sign-On
products:
  - directorymanager
sidebar_label: Disable AD Authentication
tags: []
title: "How to Disable AD Authentication on the Portal"
knowledge_article_id: kA0Qk0000002bebKAA
---

# How to Disable AD Authentication on the Portal

## Overview

By default, users can authenticate to the Netwrix Directory Manager (formerly GroupID) Portal using either Active Directory (AD) credentials or Single Sign-On (SSO). This article explains how to disable AD authentication so that users can only authenticate via SSO.

## Instructions

1. Log in to the Directory Manager Admin Center with an account that has administrative credentials.
2. Click the **Monitor** icon in the top right corner of the screen to navigate to the **Authenticate** portal. A new browser window will appear.  
   ![Monitor icon to access Authenticate portal](../0-images/servlet_image_586cee925a98.png)
   
3. Click **Edit** for the **SAML Identity Provider** for which you want to disable AD authentication.  
   ![Edit SAML Identity Provider](../0-images/servlet_image_c063b0ef4b7f.png)

4. Click **Advanced**.
5. Navigate to **Disable GroupID Authentication** and select **Yes** to disable AD authentication. By default, this option is set to **No**.  
   ![Disable GroupID Authentication option](../0-images/servlet_image_c547e60a2228.png)

6. Click **Update** to apply the changes to the SSO settings for the selected SAML Provider.
7. Launch the Directory Manager Portal. Only SSO-based authentication will be available.