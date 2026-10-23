---
title: "Unhandled Error: There Has Been an Error Processing the Registration Request: 'ascii' Codec Can't Encode Character"
description: "Resolve the ascii codec error (code 1779) that occurs during registration when the sudoers file contains an en dash instead of a standard dash."
sidebar_label: "Unhandled Error: There Has Been an Error Processing the Registration Request: 'ascii' Codec Can't Encode Character"
keywords:
- ascii codec can't encode character
- error processing the registration request
- UnprocessableEntityError
- Code 1779
- en dash
- U+2013
- Unicode
- sudoers
- visudo
- NPS-D
- SecureONE
- Remediant SecureONE
products:
- privilegesecurediscovery
tags:
- kb
- linux-and-ssh-integration
knowledge_article_id: kA04u00000110p1CAA
---

## Symptom

When you register a Linux system through the API, the registration returns the following error:

```json
{
    "name": "UnprocessableEntityError",
    "message":"Unhandled error: ('There has been an error processing the registration request:', \"'ascii' codec can't encode character u'\\\–' in position 28: ordinal not in range(128)\")",
    "code": 1779
}
```

## Cause

The sudoers file contains a Unicode character that the product cannot process. In the example, a sudo command contains an en dash (Unicode character U+2013) instead of a standard dash.

## Resolution

1. Open the sudoers file:

   ```bash
   sudo visudo
   ```

2. Replace every en dash with a standard dash, and then save the file.
3. Register the system again.
