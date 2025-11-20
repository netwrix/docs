---
title: "Certificate Tab"
description: "Certificate Tab"
sidebar_position: 5
---

# Certificate Tab

Activity Monitor Agent uses certificates to secure the connection between the Linux Agent and the Console / API Server; 
between NAS devices and the Agent; between the Agent and REST API users.

By default, the Agent uses an automatically generated self-signed certificate. The Console and the API Server do not enforce 
validity checks on these self-signed agent certificates.

This self-signed certificate can be replaced with one issued by a Certification Authority. Once replaced, the Console and 
the API Server will ensure the validity of the agent’s certificates.


## Certificate Status

The details of the current Agent certificate can be accessed via the **Certificate** page within the Agent settings. 
The Console displays the Subject, Issuer, validity period, and whether it is a self-signed certificate. 
The **Status** field indicates the Console’s trust in the presented certificate.

An 'untrusted' status indicates that the agent's certificate has either been modified since the agent was initially added 
to the Console or its validity period has expired. 


:::warning
An untrusted certificate will prevent the Console and API Server from connecting to the agent.
:::

If the change was intentional, use the **Trust this certificate** button to validate the certificate. This action will 
establish trust for self-signed certificates, or for the issuing Certificate Authority in the case of CA-issued certificates.

To replace the current certificate, use the **Manage certificates…** button.


:::info
Both **Trust this certificate** and **Manage certificates** functions support batch execution for multiple selected agents. 
Also, when multiple agents are selected, the certificate information will only include fields with identical values across 
all selected certificates, which can aid in identifying differences. 
:::

## Using CA-issued Certificates

The **Manage certificates...** button launches a wizard to replace the current certificate of the agent or selected agents 
with certificates issued by your Certification Authority. The whole process involves four steps:


1. **Generate CSRs**

The wizard will guide you through the generation of Certificate Signing Request (CSR) for each agent. 
This CSR file will contain the agent’s hostname, FQDN, static IP addresses, optional attributes (organization, OU, country, state, locality), and the agent’s digital signature. The generated CSR files, named after their corresponding agents, will be saved to a specified directory. 

2. **Submit CSRs to the Certification Authority**

The CSR files generated in the previous step must be manually submitted by a user to their Certification Authority. This process must be performed manually, outside of the Activity Monitor, due to the varying workflows and policies inherent to different Certification Authorities.
This step yields a set of certificate files for the agents issued by the Certification Authority based on the CSRs. The CA certificate itself also needs to be collected. 
Make sure that the agent certificates have the `Server Authentication` purpose listed in the Extended Key Usage extension and have DER or PEM encoding.  

If you are using OpenSSL’s Micro CA, you can generate a certificate from a CSR file using the `x509 -req` command.

```
openssl x509 -req -in AGENT01.req -CA ca.crt -CAkey ca.key -out AGENT01.crt -CAcreateserial -copy_extensions copyall
```

3. **Apply Certificates**

Launch the wizard again to apply the new certificates to the agents. You will be prompted to select the CA certificate file and the directory 
containing the certificate files for the agents. By using the **Verify Files** button, the product will validate the certificates, 
confirming issuance by the specified CA, the correct association with the agents and their private keys, and their validity period. 

Upon successful validation, the Console will permit the immediate application of the certificates via the **Apply Certificates** button. 
Failed application can be retried. 

4. **Update Other Console Instances (optional)**

If your deployment includes multiple Console instances, each instance must be updated to trust the new certificates via the **Trust this certificate** button. 

## Using Self-Signed Certificates

The **Manage certificates** wizard can be used to switch to automatically generated self-signed certificates. The wizard presents two options:

1. **Use existing self-signed certificates**
2. **Generate new private key and self-signed certificate** 

The first option attempts to locate and apply a previously generated self-signed certificate, if one exists, that was in use prior 
to application of a CA-issued certificate. If the certificate does not exist, a new one will be created. 

This approach may be beneficial in deployments with multiple instances of the Console or API Server that still rely on this specific 
self-signed certificate, so its restoration would reinstate their operational status.  

The second option will generate a new private key and a corresponding self-signed certificate for the agent. 
In the event of a suspected compromise of the agent's private key, this option should be employed.

The **Apply Changes** button immediately applies the changes to the agents.

If your deployment includes multiple Console instances, each instance must be updated to trust the new certificates via the **Trust this certificate** button. 


## **Command-Line Interface**

For automated deployments, the agent executable provides a Command-Line Interface offering equivalent functionality to the Console. 
All CLI commands return a non-zero exit code upon failure and output error details in JSON format. 

### **Get current certificate**

Command: `certificate-get` - Prints the current agent’s certificate.

Parameters:

* `out-file` (optional) - Path to a file where the certificate will be written. If the file exists, it will be overwritten. 
If not provided, the certificate content is printed to the standard output.

### **Generate CSR**

Command: `certificate-create-csr` - Generates a Certificate Signing Request (CSR) for the agent.

Parameters:

* `out-file` (optional) - Path to a file where the CSR will be written. If the file exists, it will be overwritten. 
If not provided, the CSR content is printed to the standard output.
* `common-name` (optional) - Common Name. If not specified, the server’s FQDN is used.
* `organization` (optional) - Organization name.
* `organization-unit` (optional) - Organization Unit.
* `country` (optional) - Country name.
* `state` (optional) - State name.
* `locality` (optional) - Locality name.
* `alternative-names` (optional) - A comma-separated list of Subject Alternative Names. If not specified, server’s hostname, 
FQDN, and static IP addresses are added to the SAN list.

### **Apply Certificate**

Command: `certificate-apply` - Applies the certificate issued by a Certification Authority. 

Parameters:

* `ca-file` - Path to the CA certificate file.
* `file` - Path to the agent's certificate file to apply.
* `what-if` (optional) - If specified, the CA and agent certificates are validated, but the new certificate is not applied. 
Use this option to check the certificates before applying. 

### **Use Self-Signed Certificate**

Command: `certificate-apply-self-signed` - Applies an automatically generated self-signed certificate. 
The command will attempt to use an existing self-signed certificate, if one exists. 

Parameters:

* `rekey` (optional) - If specified, a new private key and a new self-signed certificate will be generated. 
Otherwise, the command will first attempt to use an existing self-signed certificate. If no existing certificate is found, 
a new certificate will be created using the existing private key. 
