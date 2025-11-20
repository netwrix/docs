---
title: "Password Reset certificates"
description: "Password Reset certificates"
sidebar_position: 50
---

# Password Reset certificates

## What is a Netwrix Password Secure certificate?

If a [Password Reset](/docs/passwordsecure/9.3/configuration/advancedview/clientmodule/passwordreset/password_reset.md) is created,
a corresponding certificate is created. This ensures that the passwords are transferred in encrypted
form.

![password-reset](/images/passwordsecure/9.2/configuration/server_manager/certificates/password-reset.webp)

NOTE: The Password Reset certificate cannot be replaced by your own certificate.

NOTE: The certificates for the Password Reset have an expiry date. However, this is not checked. The
certificate thus does not need to be renewed.

**CAUTION:** If the database is being moved to another server, it is essential that all Password
Reset certificate is also transferred!

#### Exporting and importing the certificate

The section [Certificates](/docs/passwordsecure/9.3/configuration/servermanger/certificates/certificates.md)explains how to back up the certificate and link it
again.
