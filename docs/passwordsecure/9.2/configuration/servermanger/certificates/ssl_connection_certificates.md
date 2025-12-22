---
title: "SSL connection certificates"
description: "SSL connection certificates"
sidebar_position: 10
---

# SSL connection certificates

## What is an SSL connection certificate?

The connection between clients and the server is secured via an SSL certificate. The **latest
encryption standard TLS 1.2** is used here. It is also possible to create a certificate via the
server, as well as to use an existing certificate with a CA. All computers on which a client is
installed must trust the certificate.

Otherwise, the following message will appear when the client is started:

**This connection is not trusted!**

The connection to the server is not considered secure.

![not_trusted_certificates](/images/passwordsecure/9.2/configuration/server_manager/certificates/not_trusted_certificates.webp)

NOTE: Windows Server 2012 R2 requires the latest patch level, since it has been delivered with SSL3,
and has been extended to include TLS 1.2

**CAUTION:** The service user creates the databases. A separate certificate is also generated for
each database. Therefore, the service user must be a local administrator or a domain administrator,
as otherwise they would have no rights to save data in the certificate store.

#### Structure of certificates

The following information applies to both the **Netwrix Password Secure certificate** and also to
your **own certificates:**

Alternative applicant

Communication between the client and server can only take place using the path that is stored in the
certificate with the alternative applicant. Therefore, the Netwrix Password Secure certificate
stores all IP addresses for the server, as well as the hostname. When creating your own certificate,
this information should also be saved under the alternative applicant.

NOTE: All information (including the IP address) are stored as DNS name.

#### Using the Netwrix Password Secure certificate

The name of the PSR certificate is **PSR8Server**. This can be done via the
[Basic configuration](/docs/passwordsecure/9.2/configuration/servermanger/basic_configuration.md) in the AdminConsole. The
certificate is saved locally under:

Local computer -> own certificates -> certificates

NOTE: The certificate is valid from its creation up to the year 9999 – and is thus valid almost
indefinitely. For this reason, it is not necessary to note any expiry date.

Distributing the Netwrix Password Secure certificate

In order for the certificate to be trusted, it can be exported to the server and then imported to
the clients. The following storage location needs to be selected here:

local computer -> trusted root certificate location -> certificates

The certificate can be both rolled out and distributed using group guidelines.

Manually importing the Netwrix Password Secure certificate

If the Netwrix Password Secure certificate is not rolled out, it is also possible to manually import
the certificate. To do this, firstly open the certificate information. In the warning notification,
the Show server certificate button is available for this purpose. In the following dialogue, select
the option Install certificate…

![installation_with_parameters_204_415x395](/images/passwordsecure/9.2/configuration/server_manager/certificates/installation_with_parameters_204_415x395.webp)

A **Certificate import wizard** will open in which **Local computer** should be selected.

![installation_with_parameters_205_555x405](/images/passwordsecure/9.2/configuration/server_manager/certificates/installation_with_parameters_205_555x405.webp)

In the next step, the storage location “trusted root certificate location” needs to be manually
selected.

![installation_with_parameters_206_556x406](/images/passwordsecure/9.2/configuration/server_manager/certificates/installation_with_parameters_206_556x406.webp)

Finally, the installation needs to be confirmed once again.

NOTE: The user logged in to the operating system requires rights to create certificates

#### Using your own certificate

If a CA already exists, you can also use your own certificate. You can specify this within the
[Basic configuration](/docs/passwordsecure/9.2/configuration/servermanger/basic_configuration.md). Please note that a server
certificate for SSL encryption is used here. The CA must be configured so that all clients trust the
certificate. It is necessary to adhere to the certification path.

**CAUTION:** When configuring, you must ensure that the clients can access the CA lock lists

Wildcard certificates

Wildcard certificates are not supported. In theory, it should be possible to use them but we cannot
help with the configuration. You can use wildcard certificates at your own responsibility.
