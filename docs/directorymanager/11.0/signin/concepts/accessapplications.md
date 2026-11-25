---
title: "Access Your Applications in Directory Manager"
description: "Launch Admin Center, portals, and single sign-on apps from My Applications, add third-party service providers, and enroll your account."
keywords:
  - My Applications
  - single sign-on
  - service provider
  - Admin Center
  - launch Directory Manager applications
sidebar_position: 70
---

# Access Your Applications in Directory Manager

Directory Manager users can have access to Directory Manager applications, such as:

- Admin Center
- Directory Manager portals
- Third-party apps for which Directory Manager is the identity provider for single sign-on (SSO)

You can view a list of your applications and launch them from Admin Center without having to
authenticate with a username and password.

What do you want to do?

- [Access an Application](#access-an-application)
- [Add a Third-party Application](#add-a-third-party-application)
- [Enroll your Account](#enroll-your-account)

## Access an Application

1. In Admin Center, click your name in the top right corner and select **My Applications**.
2. The **GroupID Applications** page displays the applications that you can access. Click an
   application to launch it.

## Add a Third-party Application

Directory Manager can serve as an identity provider to facilitate SSO for third-party apps. You can
add a third-party application as a service provider to authenticate its users through Directory
Manager.

To add a third-party application:

1. In Admin Center, click your name in the top right corner and select **My Applications**.
2. Click **Add Apps** on the **GroupID Applications** page to add a third-party application. You're
   redirected to the **Create Application** page, where you can provide the details of the
   application you want to add as a service provider in Directory Manager. See the
   [Register a SAML Service Provider in Directory Manager](/docs/directorymanager/11.0/authenticate/asidentityprovider/register.md)
   topic.

## Enroll your Account

1. In Admin Center, click your name in the top right corner and select **My Applications**.
2. Click **Enroll your account** on the **GroupID Applications** page to enroll the identity store
   account with which you're signed in to Admin Center. See the
   [Enroll Your Account in Directory Manager](/docs/directorymanager/11.0/signin/authpolicy/enroll.md)
   topic for enrollment details.

**See Also**

- [Monitor Directory Manager with the Admin Center Dashboard](/docs/directorymanager/11.0/signin/concepts/dashboard.md)
- [Navigate Admin Center in Directory Manager](/docs/directorymanager/11.0/signin/concepts/navigation.md)
