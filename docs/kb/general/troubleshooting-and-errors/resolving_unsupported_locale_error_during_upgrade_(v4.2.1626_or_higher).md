---
description: >-
  This article provides instructions for resolving the unsupported locale error that may occur during the upgrade of Privilege Secure from a pre-4.2.1626 version to a post-4.2.1626 version.
keywords:
  - unsupported locale
  - Privilege Secure
  - PostgreSQL upgrade
sidebar_label: Resolving Unsupported Locale Error
tags: [troubleshooting-and-errors]
title: "Resolving Unsupported Locale Error During Upgrade (v4.2.1626 or Higher)"
knowledge_article_id: kA0Qk0000002LunKAE
products:
  - general
---

# Resolving Unsupported Locale Error During Upgrade (v4.2.1626 or Higher)

## Summary

When upgrading from a pre-4.2.1626 version of **Privilege Secure** to a post-4.2.1626 version, it is possible that the following error occurs:

```
PostgreSQL is unable to support this locale, please change Windows Regional settings to supported locale. US English is recommended.
```

This indicates that an unsupported locale is configured, which creates an issue during the migration from Postgres 12 (pre-4.2.1626) to Postgres 16 (4.2.1626 or higher).

## Instructions

The **Privilege Secure** installer executes the `initdb` command as part of the migration to Postgres 16. In order for this command to succeed, the user who is executing `initdb` must have regional settings enabled that correspond to a locale supported by Postgres 16. 

To resolve this issue, ensure that during the upgrade, you are logged in as a user whose locale settings are “English (United States)” (en-US). Then proceed with the upgrade as usual.