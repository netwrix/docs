---
title: "Configure AD FS SAML SSO for Directory Manager"
description: "Set up Active Directory Federation Services (AD FS) as a SAML single sign-on provider so users can sign in to Directory Manager."
keywords:
  - Active Directory Federation Services
  - AD FS single sign-on
  - AD FS console
  - AD FS federation service
  - Directory Manager SAML provider
sidebar_position: 10
---

# Configure AD FS SAML SSO for Directory Manager

Active Directory Federation Services (AD FS) provides users with single sign-on (SSO) access to
systems and applications across organizational boundaries.

## The AD FS Console

Use the AD FS console to configure services and policies related to the deployment of a federation
server:

- Manage the trust relationships of the federation service by using the **Trust Relationships** node
  in the AD FS console tree:

    - Add and configure relying party trusts.
    - Add and modify claim rules for relying party trusts.

- Configure the federation service by using the options in the **Service** node in the AD FS console
  tree:

    - Configure the certificates that AD FS uses for issuing and receiving tokens and publishing
      metadata.
    - Configure the types of claims that AD FS supports.

For more information about the AD FS console, see the Microsoft documentation on
[AD FS Console configuration](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/gg557729(v=ws.10)?redirectedfrom=MSDN).

## Configuration Steps

To set up AD FS as an SSO solution for Directory Manager:

- Generate the consumer URL and audience URL for the Directory Manager client with which you want to configure
  AD FS.
- Configure a relying party trust in AD FS. As part of the process, provide the consumer URL and
  audience URL in AD FS. You must also specify the claim rules for authentication.
- Configure the AD FS provider in Directory Manager.

After you complete these steps, you can sign in to Directory Manager using AD FS.

See Also

- [Generate Consumer and Audience URLs for AD FS](/docs/directorymanager/11.0/authenticate/asserviceprovider/adfs/generateurls.md)
- [Configure an AD FS Relying Party Trust for Directory Manager](/docs/directorymanager/11.0/authenticate/asserviceprovider/adfs/configurerelayingpartytrust.md)
- [Configure the AD FS Provider In GroupID](/docs/directorymanager/11.0/authenticate/asserviceprovider/adfs/configureadfsindirectorymanager.md)
- [Sign In to Directory Manager Using AD FS](/docs/directorymanager/11.0/authenticate/asserviceprovider/adfs/signin.md)
