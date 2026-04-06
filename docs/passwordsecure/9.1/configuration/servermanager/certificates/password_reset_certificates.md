---
title: "Password Reset certificates"
description: "Password Reset certificates"
sidebar_position: 50
---

# Password Reset certificates

## Netwrix Password Secure certificate overview

If a
[Password Reset](/docs/passwordsecure/9.1/configuration/advancedview/clientmodule/passwordreset/password_reset.md)
is created, a corresponding certificate is created. This ensures that the passwords are transferred
in encrypted form.

![password-reset](/images/passwordsecure/9.1/configuration/server_manager/certificates/password-reset.webp)

:::note
The Password Reset certificate can't be replaced by your own certificate.
:::

:::note
The certificates for the Password Reset have an expiry date. However, this isn't checked. The certificate thus doesn't need to be renewed.
:::

:::warning
If the database is being moved to another server, it's essential that all Password
Reset certificate is also transferred!
:::

#### Exporting and importing the certificate

The section
[Certificates](/docs/passwordsecure/9.1/configuration/servermanager/certificates/certificates.md)explains
how to back up the certificate and link it again.

