---
description: >-
  Netwrix Password Policy Enforcer and Password Reset clients created Citrix
  registry keys that caused Microsoft Teams to disable certain features in
  desktop environments. Updated clients remove themselves from the Citrix
  whitelist and delete empty PortICA keys to restore Teams functionality; older
  Citrix XenDesktop clients may be incompatible.
keywords:
  - PPE
  - Password Policy Enforcer
  - Password Reset
  - Microsoft Teams
  - Citrix
  - XenDesktop
  - PortICA
  - CredentialProviderWhitelist
  - VDI
  - compatibility
products:
  - password-reset
  - password-policy-enforcer
visibility: public
sidebar_label: 'PPE: Resolving Compatibility Issues with Microsoft'
tags: []
title: 'PPE: Resolving Compatibility Issues with Microsoft Teams'
knowledge_article_id: kA04u000000PdLwCAK
---

# PPE: Resolving Compatibility Issues with Microsoft Teams

## Cause

The 7.61 Password Policy Enforcer client and 3.0 Password Reset Client included a compatibility update for the Citrix XenDesktop client. These updates were released in 2014 and 2015 respectively. The then-current version of the XenDesktop client only worked with third-party credential providers that were whitelisted in the `HKLM\SOFTWARE\Citrix\PortICA\CredentialProviderWhitelist\` registry key. The ANIXIS clients added themselves to this registry key even if the XenDesktop client was not installed.

Microsoft recently added features to Microsoft Teams that are not currently supported in a Virtualized Desktop Infrastructure (VDI) environment. Microsoft Teams disables these features if the `HKLM\SOFTWARE\Citrix\PortICA\` registry key exists on the client computer. Because this key is always created by the ANIXIS clients, Microsoft Teams disables some features whenever the ANIXIS clients are installed. Deleting the registry keys does not resolve the issue because the ANIXIS clients recreate them.

## Resolution

The Password Policy Enforcer and Password Reset clients have been updated to resolve this issue. The updated clients remove themselves from the XenDesktop whitelist registry key, and also delete the Citrix, PortICA and CredentialProviderWhitelist registry keys if they are empty. This will allow the new Microsoft Teams features to be used in desktop (non-VDI) environments.

These updates break compatibility with older versions of the Citrix XenDesktop client. Citrix has since redesigned their client, and none of their current versions still use the whitelist. If you are using the Citrix XenDesktop client 5.6 or earlier, contact technical support.

You can download the updated ANIXIS clients from:

- [PPE 9.12 client](https://www.anixis.com/ftp/ppe/ppeclt912.zip)
- [APR 3.23 client](https://www.anixis.com/ftp/apr/aprclt323.zip)

Install the updated clients over the top of the existing version using whatever deployment method was used for the original installation. If Group Policy was used, then add the new version to the existing GPO. There is no need to remove the old version from the GPO.
