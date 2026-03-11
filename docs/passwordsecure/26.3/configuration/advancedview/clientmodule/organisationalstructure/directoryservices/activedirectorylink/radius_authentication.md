---
title: "RADIUS authentication"
description: "RADIUS authentication"
sidebar_position: 30
---

# RADIUS authentication

## What is the RADIUS authentication?

RADIUS (Remote Authentication Dial-In User Service) is a client-server protocol used primarily for
authentication and authorization of users during dial-up connections in corporate networks. Netwrix
Password Secure can also benefit from the advantages of a RADIUS server. In particular, multi-factor
authentication should be mentioned here. But all other RADIUS-typical functions can also be used.
Further information can be found for example at **Wikipedia**.

## Requirements

In order for Netwrix Password Secure to address a RADIUS server, the following requirements must be
met:

- A RADIUS server must be available and accessible via the network.
- Access to the Netwrix Password Secure Server Manager must be set up on the RADIUS server.
- A corresponding Secret must be configured for access.
- In Netwrix Password Secure, users must have been imported from the AD in Masterkey mode.

## Configuration

The actual connection of the RADIUS server is simple:

![radius integration](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/organisationalstructures/directoryservices/activedirectorylink/radius_authentication_1-en.webp)

- **Use RADIUS** - First, the usage is activated.
- **Host Address** - The address of the RADIUS server is stored here.
- **Secret** - Refers to the secret stored for the Netwrix Password Secure Server Manager.
- **AUTH Port** - The so-called AUTH port of the RADIUS server is specified here.
- **ACT Port** - The ACCT port of the RADIUS server can also be stored; if required.
- **Timeout** - The time the RADIUS server has to react; can also be configured.
