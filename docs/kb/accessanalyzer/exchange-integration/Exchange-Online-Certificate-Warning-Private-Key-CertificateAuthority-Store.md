---
description: >
  Explains the cause and resolution for the "Matching cert does not have private key" warning that appears when running the EWSMAILBOX data collector in Netwrix Access Analyzer for Exchange Online. Includes steps to locate and remove duplicate certificates.
keywords:
  - Exchange Online
  - EWSMAILBOX
  - certificate warning
  - private key
  - CertificateAuthority
  - certmgr.msc
  - Intermediate Certification Authorities
  - Personal store
  - thumbprint
  - Netwrix Access Analyzer
products:
  - access-analyzer
sidebar_label: 'Exchange Online Certificate Warning for Private Key in CertificateAuthority Store'
title: 'Exchange Online Certificate Warning for Private Key in CertificateAuthority Store'
knowledge_article_id: ka0Qk000000G8WHIA0
---

# Exchange Online Certificate Warning for Private Key in CertificateAuthority Store

## Symptom

You see the following warning after running any jobs using the `EWSMAILBOX` data collector to collect data from Exchange Online:

```text
WARNING | Matching cert: '{Certificate Thumbprint}' in location: CurrentUser store: CertificateAuthority does not have private key.
```

## Cause

This warning typically occurs because certificates are stored in different locations on the system. Below is an example of why this warning may appear, depending on the certificate configuration.

1. The certificate (including the private key) is correctly installed in the **Personal** (My) store.
2. A *duplicate* public key-only version of the same certificate is also present in the **Intermediate Certification Authorities** (`CertificateAuthority`) store.
3. When code searches certificate stores, it encounters the `CertificateAuthority` version first—but it lacks the private key.
4. A warning is logged before continuing to the correct version in the **Personal** store, which contains the private key.

## Resolution

To resolve the warning, follow these steps:

1. Open **`certmgr.msc`**.
2. In the **Personal > Certificates** store, verify that the certificate with the specified thumbprint exists *and includes a private key*.

   > **NOTE:** You can confirm this by opening the certificate and checking for the message:
   > `You have a private key that corresponds to this certificate.`
3. Once confirmed, navigate to the **Intermediate Certification Authorities > Certificates** store.
4. Locate the *duplicate* certificate with the same thumbprint.
5. Confirm that this version *does not* contain a private key.
6. Delete the duplicate certificate from the Intermediate Certification Authorities store.

   > **IMPORTANT:** Always confirm that the valid certificate with the private key exists in the **Personal** store *before* removing the duplicate from the `CertificateAuthority`.
