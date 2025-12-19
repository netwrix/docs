---
title: "OTP (One-Time-Password)"
description: "OTP (One-Time-Password)"
sidebar_position: 20
---

# OTP (One-Time-Password)

## Using OTP in Netwrix Password Secure

A one-time password is a password that is valid once and can be used for authentication or
transactions. Accordingly, each additional authentication or authorization requires a new one-time
password.

## Establishment

To set up OTP in Netwrix Password Secure, proceed as follows.

- **Create form with OTP field**

Create a new form or add an OTP field to an existing form:

- **Create password**

You assign the new or customized form to existing passwords and edit them or create a new password
with the new or customized form.

Next, the OTP field must be configured. For this purpose the key (secret) of the desired
website/application is stored in Netwrix Password Secure.

As soon as the secret has been deposited and the password saved, the setup is complete.

## OTP in HTML WebViewer and Emergency WebViewer

##### OTP in HTML WebViewer

1. Set up OTP
2. Create
   [HTML WebViewer export](/docs/passwordsecure/9.1/configuration/advancedview/mainmenufc/export/html_webviewer_export.md)
3. Open the created HTML WebViewer

How to use the HTML WebViewer can be read in the chapter with the same name.

##### OTP in Emergency WebViewer

NOTE: The special feature of the Emergency WebViewer is that the stored OTP secret is also
displayed.

In order to use the One-Time-Password in the
[EmergencyWebViewer](/docs/passwordsecure/9.1/configuration/advancedview/mainmenufc/extras/systemtasks/emergency_webviewer.md)
you have to proceed as follows:

1. Set up OTP
2. Emergency HTML WebViewer Export Task Create
3. Open the created emergency WebViewer
