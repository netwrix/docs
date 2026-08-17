---
title: "Certificate Services Threats"
description: "Certificate Services Threats"
sidebar_position: 15
---

# Certificate Services Threats

The following threats are monitored for Active Directory Certificate Services (AD CS).

## Suspicious ESC1 Enrollment

Suspicious ESC1 Enrollment is when a certificate request contains a user-supplied User Principal
Name (UPN), which can indicate an ESC1 abuse attempt.

| Suspicious ESC1 Enrollment |                                                                                                                                                                                                           |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition                 | Someone requested a certificate with a user-supplied UPN, which can indicate ESC1 abuse. If the CA issues the certificate, an attacker can export it as a PFX and use it for certificate-based authentication as the target account. |
| Example                    | An attacker requests a certificate using the UserAuthentication template and supplies `admin@contoso.com` in the Subject Alternative Name (UPN) field to impersonate a privileged account.                |
| Trigger                    | Threat Manager creates a threat when a certificate request contains a value in the SAN.UPN field.                                                                                                         |

## Suspicious ESC3 Enrollment

Suspicious ESC3 Enrollment is when someone requests a certificate on behalf of another account using
enrollment agent capabilities, which can indicate an ESC3 abuse attempt.

| Suspicious ESC3 Enrollment |                                                                                                                                                                                                                                   |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition                 | Someone requested a certificate using enrollment agent capabilities, which can indicate ESC3 abuse. If the CA issues the certificate, an attacker can export it as a PFX and use it for certificate-based authentication as the target account. |
| Example                    | An attacker with enrollment agent rights uses a low-privileged account to request a certificate on behalf of a domain administrator account.                                                                                      |
| Trigger                    | Threat Manager creates a threat when a certificate request contains values in both the SIGNER.REQUESTERNAME and EXT.SAN.UPN fields, indicating that someone submitted the request on behalf of another user.                      |

## Sensitive Certificate Template Changes

Sensitive Certificate Template Changes is when someone modifies a security-relevant attribute on a
certificate template.

| Sensitive Certificate Template Changes |                                                                                                                                                                                                                                                                             |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition                             | Modifying a sensitive attribute on a certificate template can weaken its security controls and, depending on the resulting settings, make the template vulnerable to known abuse paths such as ESC1. This can allow an attacker to enroll in the certificate and then use it for certificate-based authentication. |
| Example                                | A user modifies the `msPKI-Certificate-Name-Flag` attribute on the WebServer certificate template, enabling client-supplied subject names and making the template vulnerable to ESC1 abuse.                                                                                  |
| Trigger                                | Threat Manager creates a threat when someone modifies any of the following AD attributes on a `pKICertificateTemplate` object: `msPKI-Certificate-Name-Flag`, `msPKI-Enrollment-Flag`, `pKIExtendedKeyUsage`, or `msPKI-Certificate-Application-Policy`.                                     |

## Certificate Authority Permission Change

Certificate Authority Permission Change is when someone modifies permissions on a Certification
Authority.

| Certificate Authority Permission Change |                                                                                                                                                                                                                                                                      |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition                              | Changes to Certification Authority permissions can grant control over certificate issuance and approval. Depending on the rights granted, this can enable ESC7 abuse, where an attacker can approve or issue certificates and then use them for certificate-based authentication. |
| Example                                 | A user grants the "Issue and Manage Certificates" right to a service account on the corporate Certification Authority.                                                                                                                                               |
| Trigger                                 | Threat Manager creates a threat when someone modifies the `nTSecurityDescriptor` attribute on a `pKIEnrollmentService` object.                                                                                                                                       |
