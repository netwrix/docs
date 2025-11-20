---
title: "Discovery service certificates"
description: "Discovery service certificates"
sidebar_position: 40
---

# Discovery service certificates

## What is a discovery service certificate?

If a discovery service is created, a corresponding certificate is also created:

![installation_with_parameters_202](/images/passwordsecure/9.2/configuration/server_manager/certificates/installation_with_parameters_202.webp)

NOTE: The discovery service certificate cannot be replaced by your own certificate.

NOTE: The certificates for the discovery service have an expiry date. However, this is not checked.
The certificate thus does not need to be renewed.

**CAUTION:** If the database is being moved to another server, it is **essential that the discovery
service certificate is also transferred!**

#### Exporting and importing the certificate

The section [Certificates](/docs/passwordsecure/9.3/configuration/servermanger/certificates/certificates.md)explains how to back up the certificate and link it
again.
