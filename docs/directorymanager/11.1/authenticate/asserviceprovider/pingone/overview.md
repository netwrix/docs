---
title: "SAML Configuration for Directory Manager using PingOne"
description: "SAML Configuration for Directory Manager using PingOne"
sidebar_position: 50
---

# SAML Configuration for Directory Manager using PingOne

PingOne is an Identity as a Service (IDaaS) solution that enables organizations to deliver single
sign-on with just one username and password.

Here are the steps to configure single sign-on in Directory Manager using PingOne as a provider:

- Generate the consumer URL andDirectory Manager metadata file for the Directory Manager client with
  which you want to configure PingOne. See the
  [Generate the Consumer URL and Metadata File](/docs/directorymanager/11.1/authenticate/asserviceprovider/pingone/generatemetadata.md) topic for additional
  information.
- [Configure Directory Manager In PingOne](/docs/directorymanager/11.1/authenticate/asserviceprovider/pingone/configureinpingone.md)
- [Configure the PingOne Provider In Directory Manager](/docs/directorymanager/11.1/authenticate/asserviceprovider/pingone/configurepingoneindirectorymanager.md)

That done, you can sign into Directory Manager using PingOne. See the
[Sign In Using PingOne](/docs/directorymanager/11.1/authenticate/asserviceprovider/pingone/signin.md) topic for additional information.
