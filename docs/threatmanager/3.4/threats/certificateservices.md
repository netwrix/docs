---
title: "Certificate Services Threats"
description: "Certificate Services Threats"
sidebar_position: 15
---

# Certificate Services Threats

Threat Manager monitors the following threats for Active Directory Certificate Services (AD CS).

## Suspicious ESC1 Enrollment

Suspicious ESC1 Enrollment is when a certificate request contains a user-supplied User Principal
Name (UPN), which can indicate an ESC1 abuse attempt.

| Suspicious ESC1 Enrollment |                                                                                                                                                                                                           |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition                 | A certificate request used a user-supplied UPN, which can indicate ESC1 abuse. If the Certification Authority issues the certificate, the requester can export it as a PFX and use it for certificate-based authentication as the target account. |
| Example                    | An attacker requests a certificate using the UserAuthentication template and supplies `admin@contoso.com` in the Subject Alternative Name (UPN) field to impersonate a privileged account.                |
| Trigger                    | A threat is created when a certificate request contains a value in the SAN.UPN field.                                                                                                                     |

## Suspicious ESC3 Enrollment

Suspicious ESC3 Enrollment is when a requester uses enrollment agent capabilities to request a
certificate on behalf of another account, which can indicate an ESC3 abuse attempt.

| Suspicious ESC3 Enrollment |                                                                                                                                                                                                                                   |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition                 | A certificate request used enrollment agent capabilities, which can indicate ESC3 abuse. If the Certification Authority issues the certificate, the requester can export it as a PFX and use it for certificate-based authentication as the target account. |
| Example                    | An attacker with enrollment agent rights uses a low-privileged account to request a certificate on behalf of a domain administrator account.                                                                                      |
| Trigger                    | Threat Manager creates a threat when a certificate request contains values in both the SIGNER.REQUESTERNAME and EXT.SAN.UPN fields, indicating the request was submitted on behalf of another user.                                           |

## Sensitive Certificate Template Changes

Sensitive Certificate Template Changes is when a security-relevant attribute on a certificate
template changes.

| Sensitive Certificate Template Changes |                                                                                                                                                                                                                                                                             |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition                             | Modifying a sensitive attribute on a certificate template can weaken its security controls and, depending on the resulting settings, make the template vulnerable to known abuse paths such as ESC1. This can allow an attacker to enroll in the certificate and then use it for certificate-based authentication. |
| Example                                | A user modifies the `msPKI-Certificate-Name-Flag` attribute on the WebServer certificate template, enabling client-supplied subject names and making the template vulnerable to ESC1 abuse.                                                                                  |
| Trigger                                | A threat is created when any of the following AD attributes is modified on a `pKICertificateTemplate` object: `msPKI-Certificate-Name-Flag`, `msPKI-Enrollment-Flag`, `pKIExtendedKeyUsage`, or `msPKI-Certificate-Application-Policy`.                                     |

## Certificate Authority Permission Change

Certificate Authority Permission Change is when permissions on a Certification Authority
change.

| Certificate Authority Permission Change |                                                                                                                                                                                                                                                                      |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition                              | Changes to Certification Authority permissions can grant control over certificate issuance and approval. Depending on the rights granted, this can enable ESC7 abuse, where an attacker can approve or issue certificates and then use them for certificate-based authentication. |
| Example                                 | A user grants the "Issue and Manage Certificates" right to a service account on the corporate Certification Authority.                                                                                                                                               |
| Trigger                                 | A threat is created when the `nTSecurityDescriptor` attribute is modified on a `pKIEnrollmentService` object.                                                                                                                                                        |
