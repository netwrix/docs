---
title: "HSM connection via PKCS # 11"
description: "HSM connection via PKCS # 11"
sidebar_position: 30
---

# HSM connection via PKCS # 11

## What is the HSM connection?

The HSM connection ensures that the certificates can be outsourced to the HSM. This ultimately leads
to an increased protection because the certificates are not directly in the server’s access. The
connection is effected via PKCS # 11.

#### Requirements

In order to be able to connect an HSM, the following conditions have to be met:

- An executable HSM has to be available.
- The PKCS # 11 drivers have to be installed on the application server.
- The device is set up via the Administrator database on the Server Manager.

**CAUTION:** Please note, if an HSM is to be used, the database also has to be set up thoroughly. It
is currently not possible to transfer an existing database to an HSM.

#### Hardware compatibility

In principle, any HSM should work with the PKCS#11 interface. However, it is recommended to try this
out in a test position or a PoC beforehand.

#### Installation

The installation is set up on the Server Manager via the database settings.

![installation_with_parameters_235](/images/passwordsecure/9.2/configuration/server_manager/managing_databases/database_settings/installation_with_parameters_235.webp)

- **Library path**: Here you can find the installed PKCS # 11 driver of the HSM.
- **Token-Serial**: The serial number of the token is given here.
- **Token Label**: The name of the token.
- **PIN**: Finally, the PIN is specified for authentication at the token.

## Use by Netwrix Password Secure

As soon as the HSM is connected, all server keys are transferred to the HSM. This is the database
certificate. If the AD has been connected in Masterkey mode, the masterkey will also be transferred
to the HSM. Then the certificates are no longer stored in the certificate store of the application
server, but centrally managed by the HSM. All other keys are not stored on the HSM, but derived from
the masterkeys. Therefore, Netwrix Password Secure rarely accesses the HSM, for example, at server
startup or at the AD Sync. As a result, the load on the HSM can be kept low.
