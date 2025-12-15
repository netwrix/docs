---
description: "When attempting to sign in to the Netwrix Privilege Secure Discovery web interface, you may see 'Invalid Token' if the Google Authenticator TOTP token is incorrect or out of sync; this article explains troubleshooting steps and how to reset the token."
keywords: [invalid token, TOTP, Google Authenticator, MFA, time sync, Privilege Secure Discovery, SecureONE, Administrator, reset MFA]
products:
- privilege-secure-discovery
sfdc_migration:
  article_id: ka04u00000118B9AAI
  article_owner: Anna Evdokimova-Glinskaia
  article_reviewer: null
  article_sme: null
  created_date: '2023-10-13'
  knowledge_article_id: kA04u00000110pDCAQ
  last_modified_date: '2023-10-13'
  original_categories:
  - privilege_secure_discovery
  visibility: public
sidebar_label: Unable to Login to UI due to 'Invalid Token' Error
tags: []
title: Unable to Login to UI due to 'Invalid Token' Error
knowledge_article_id: kA04u00000110pDCAQ
---

Netwrix Privilege Secure Discovery (formerly SecureONE)

# Unable to Login to UI due to 'Invalid Token' Error

## Symptom
When trying to login to the web interface, the following message is displayed:

```
Invalid Token
```

## Cause
The Google Authenticator TOTP token supplied is incorrect or is out of sync with the time server.

## Resolution
**IMPORTANT:** In order to perform troubleshooting steps, you must have the Administrator role

Troubleshooting steps:

1. Ensure that your device time matches global UTC/GMT time, reference sites:
   - https://www.timeanddate.com/worldclock/timezone/utc
   - https://www.time.gov/
2. Confirm that the correct Google Authenticator token was used when attempting logon
3. Log in using the Local Account
4. Navigate to the **Configure** > **Users & Groups** pane.
5. Reset the token and log in again. Read more in the Configuration – Resetting MFA Tokens ⸱ v2.20 article: https://docs.netwrix.com/docs/endpointprotector/5_9_4_2