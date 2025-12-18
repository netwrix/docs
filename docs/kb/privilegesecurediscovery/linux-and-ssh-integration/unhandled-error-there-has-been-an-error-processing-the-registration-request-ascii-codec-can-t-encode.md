---
description: "Registration via Postman may return an UnprocessableEntityError (code 1779) caused by a Unicode en dash in the sudoers file; this article explains the cause and resolution."
keywords:
- ascii
- codec
- sudoers
- en dash
- Unicode
- visudo
- Postman
- registration
- error 1779
products:
- privilege-secure-discovery
sfdc_migration:
  article_id: ka04u00000116Y1AAI
  article_owner: Anna Evdokimova-Glinskaia
  article_reviewer: null
  article_sme: null
  created_date: '2023-07-07'
  knowledge_article_id: kA04u00000110p1CAA
  last_modified_date: '2023-07-07'
  original_categories:
  - privilege_secure_discovery
  visibility: public
sidebar_label: 'Unhandled Error: there has been an Error Processin'
tags: []
title: 'Unhandled Error: there has been an Error Processing the Registration Request:
  ''ascii'' Codec can''t Encode Character u'
---

# Unhandled Error: there has been an Error Processing the Registration Request: ''ascii'' Codec can''t Encode Character u

Formerly SecureONE

## Symptom

Example of error when running registration via Postman:

```json
{
    "name": "UnprocessableEntityError",
    "message":"Unhandled error: ('There has been an error processing the registration request:', \"'ascii' codec can't encode character u'\\\–' in position 28: ordinal not in range(128)\")",
    "code": 1779
}
```

## Cause

There is a unicode character in the sudoers file that Netwrix Privilege Secure Discovery has an issue with. In the above example it was a En Dash (long dash), or unicode character U+2013, in a sudo command instead of a standard dash.

## Resolution

The solution is to replace any En Dashes with standard dashes in the sudoers file using:

```bash
sudo visudo
```