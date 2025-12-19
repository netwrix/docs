---
title: "SAML Configuration for Directory Manager using AD FS"
description: "SAML Configuration for Directory Manager using AD FS"
sidebar_position: 10
---

# SAML Configuration for Directory Manager using AD FS

Active Directory Federation Services (AD FS) provides users with single sign-on access to systems
and applications located across organizational boundaries.

## The AD FS Console

Use the AD FS console to configure services and policies related to the deployment of a federation
server.

- Manage the trust relationships of the federation service by using the Trust Relationships node in
  the AD FS console tree:

    - Add and configure relying party trusts.
    - Add and modify claim rules for relying party trusts.

- Configure the federation service by using the options in the Service node in the AD FS console
  tree:

    - Configure the certificates that AD FS uses for issuing and receiving tokens and publishing
      metadata.
    - Configure the types of claims that are supported by AD FS.

To learn more about the AD FS console, see the
[AD FS Console](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/gg557729(v=ws.10)?redirectedfrom=MSDN)
Microsoft article.

## Configuration Steps

Follow these steps to set up AD FS as an SSO solution for Directory Manager:

- Generate the consumer URL and audience URL for the Directory Manager client with which you want to
  configure AD FS. See the [Generate URLs](/docs/directorymanager/11.1/authenticate/asserviceprovider/adfs/generateurls.md) topic for additional information.
- Configure relaying party trust in AD FS. As part of the process, provide the consumer URL and
  audience URL in AD FS. You must also specify the claim rules for authentication. See the
  [Configure Relaying Party Trust in AD FS](/docs/directorymanager/11.1/authenticate/asserviceprovider/adfs/configurerelayingpartytrust.md) topic for additional
  information.
- [Configure the AD FS Provider In Directory Manager](/docs/directorymanager/11.1/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md)

That done, you can sign into Directory Manager using AD FS. See the [Sign In Using AD FS](/docs/directorymanager/11.1/authenticate/asserviceprovider/adfs/signin.md)
topic for additional information.
