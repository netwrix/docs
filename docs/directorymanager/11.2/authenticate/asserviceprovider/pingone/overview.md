---
title: "SAML Configuration for Directory Manager Using PingOne"
description: "Follow the steps to configure single sign-on in Directory Manager with PingOne as the SAML identity provider."
keywords:
  - PingOne single sign-on
  - PingOne SAML identity provider
  - Directory Manager PingOne SSO setup
  - PingOne SAML configuration
sidebar_position: 50
---

# SAML Configuration for Directory Manager Using PingOne

PingOne is an Identity as a Service (IDaaS) solution that lets organizations deliver single sign-on with one username and password.

To configure single sign-on in Directory Manager using PingOne as a provider, follow these steps:

1. Generate the consumer URL and the Directory Manager metadata file for the Directory Manager client with which you want to configure PingOne. See the [Generate the Consumer URL and Metadata File for PingOne](/docs/directorymanager/11.2/authenticate/asserviceprovider/pingone/generatemetadata.md) topic.
2. [Configure Directory Manager in PingOne](/docs/directorymanager/11.2/authenticate/asserviceprovider/pingone/configureinpingone.md).
3. [Configure the PingOne Provider in Directory Manager](/docs/directorymanager/11.2/authenticate/asserviceprovider/pingone/configurepingoneindirectorymanager.md).

After you complete these steps, you can sign in to Directory Manager using PingOne. See the [Sign In to Directory Manager Using PingOne](/docs/directorymanager/11.2/authenticate/asserviceprovider/pingone/signin.md) topic.
