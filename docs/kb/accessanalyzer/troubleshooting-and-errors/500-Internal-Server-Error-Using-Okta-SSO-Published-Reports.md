---
description: >-
  Users encounter a 500 Internal Server Error when accessing the Netwrix Access Analyzer Published Reports site using Okta Single Sign-On (SSO). The issue occurs because the Okta application uses the SHA1 algorithm, which is not supported by modern .NET Framework and OWIN security libraries.
keywords:
  - 500 error
  - Okta SSO
  - SHA1
  - SHA256
  - RSA_SHA256
  - internal server error
  - published reports
  - Netwrix Access Analyzer
  - OWIN
  - SAML
products:
  - access-analyzer
sidebar_label: '500 Internal Server Error When Using Okta SSO for Published Reports'
title: '500 Internal Server Error When Using Okta SSO for Published Reports'
knowledge_article_id: ka0Qk000000G55NIAS
---

# 500 Internal Server Error When Using Okta SSO for Published Reports

## Related Queries

- "Receiving 500 error after login using Okta."
- "Published Reports site fails with Okta."
- "NAA SAML SSO broken."

## Symptom

When attempting to connect to the Netwrix Access Analyzer (formerly Enterprise Auditor) Published Reports site using Okta Single Sign-On (SSO), users encounter the following error message:

```text
500 Internal Server Error
```

## Cause

The Okta application is configured to use the **SHA1** algorithm for signing SAML assertions.

The modern .NET Framework (4.6.2 and later) and OWIN-based security libraries reject SHA1, as it is deprecated. These platforms require a more secure algorithm, such as **SHA256**, for WS-Federation and SAML tokens.

## Resolution

To resolve this issue, update the signature and digest algorithms in the Okta application settings. These changes ensure compatibility with the security expectations of modern .NET/OWIN libraries used by the Published Reports site.

1. In Okta, navigate to the **Application** used for Published Reports.
2. Open the **General Settings** tab.
3. Scroll to the **Signature Algorithm** section.
   ![Okta Application Settings page showing the Signature Algorithm section with SHA1 selected](./../0-images/kA0Qk00000036C9KAI-Okta-settings.png)
4. Set the following:
   - **Signature Algorithm**: `RSA_SHA256`
   - **Digest Algorithm**: `SHA256`
5. Save the changes.

> **NOTE:** After saving, users may need to sign out and back in for the new settings to take effect.
