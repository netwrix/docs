---
title: AD CS TLS Certificates
description: Let Access Analyzer obtain and renew its TLS certificate automatically from your on-premises Active Directory Certificate Services (AD CS) enterprise certificate authority.
sidebar_position: 4.6
---

The `adcs` mode hands certificate issuance and renewal to your own Active Directory Certificate Services (AD CS) enterprise certificate authority (CA), instead of a manual certificate you rotate by hand or a public CA like Let's Encrypt. See [Automatic TLS Certificates](automatic-tls-certificates.md) for the full list of automatic modes and how they compare.

cert-manager submits enrollment requests to your AD CS server's `/certsrv` web enrollment endpoint using NT LAN Manager (NTLM) authentication. The certificate AD CS issues lands at the same location Access Analyzer already reads its TLS certificate from, and cert-manager renews it before it expires — no maintenance window, no `update-cert` runs.

This mode fits enterprises that already run a Microsoft public key infrastructure (PKI) and want Access Analyzer's certificate to come from it rather than from a public CA.

## Before you start

The `adcs` mode requires:

1. **The AD CS enrollment details.**

   | Flag | Requirement |
   |---|---|
   | `--adcs-url` | The AD CS server's `/certsrv` web enrollment endpoint URL. Required. |
   | `--adcs-username` | An NTLM enrollment account. Required. |
   | `--adcs-password` | The account's password. Required. Pass it through the `DSPM_ADCS_PASSWORD` environment variable rather than the flag when scripting — see [Install with AD CS certificates](#install-with-ad-cs-certificates). |
   | `--adcs-template` | The certificate template to request. Defaults to `WebServer`. |
   | `--adcs-ca-bundle` | A PEM bundle for TLS to the AD CS server itself, separate from `--ca-bundle`. |

   See [Certificate Manager Flags](installer-reference.md#certificate-manager-flags) for full details on each flag.

2. **A bootstrap certificate.** As with the `acme` mode, the web server needs something to serve before the first AD CS certificate arrives. Pass `--generate-self-signed-cert` to create a temporary self-signed pair, or supply `--tls-cert`/`--tls-key` with existing files instead. See [Before you start](automatic-tls-certificates.md#before-you-start) for the same requirement in the `acme` mode.

:::warning
Set Extended Protection for Authentication (EPA) on the AD CS server's `/certsrv` endpoint to **Off** or **Allow**, not **Required**. The `adcs` issuer authenticates over NTLM without channel-binding tokens, so a `/certsrv` endpoint that requires EPA rejects every enrollment attempt with HTTP 401.
:::

:::note
cert-manager's certificate signing request carries only Common Name and Organization in the subject. If the certificate template you name with `--adcs-template` requires Organizational Unit, Country, State, or Locality, AD CS rejects the enrollment.
:::

## Install with AD CS certificates

Follow [Install Access Analyzer](run-the-installer.md) as usual, adding the AD CS flags. You can skip the "Copy the TLS Certificate to the Server" step — `--generate-self-signed-cert` replaces it.

```bash
export DSPM_ADCS_PASSWORD='<password>'

sudo -E dspm-installer \
  --hostname dspm.corp.example.com \
  --first-admin-email admin@corp.example.com \
  --cert-manager-issuer-mode adcs \
  --adcs-url https://ca.corp.example.com/certsrv \
  --adcs-username svc-adcs-enroll \
  --adcs-template WebServer \
  --generate-self-signed-cert
```

- `--cert-manager-issuer-mode adcs` turns on AD CS issuance.
- `--adcs-url`, `--adcs-username`, and `--adcs-password` (here set through `DSPM_ADCS_PASSWORD`) are required.
- Setting the password through the environment variable instead of `--adcs-password` keeps it out of shell history and process listings.
- `--generate-self-signed-cert` provides the bootstrap certificate.

The install proceeds exactly as described in [Install Access Analyzer](run-the-installer.md). When the services are up, the cluster requests the certificate from your AD CS server; issuance typically completes within a minute or two. Browsers connecting during that window see the self-signed bootstrap certificate and show a trust warning — the warning stops when the AD CS certificate is in place.

:::note
The installer doesn't save the issuance mode to `/etc/dspm/installer.yaml`. Every installer run uses exactly the `--cert-manager-issuer-mode` you pass it; omitting the flag means manual certificates. Upgrading never changes the mode.
:::

## Confirm the certificate

From any machine with a browser, open `https://<hostname>` — there should be no certificate warning. To check from a shell:

```bash
openssl s_client -connect <hostname>:443 -servername <hostname> </dev/null 2>/dev/null \
  | openssl x509 -noout -subject -issuer -dates
```

The issuer should name your AD CS CA. If the issuer is still your own hostname, the bootstrap certificate is still serving. Check the certificate and challenge status on the server:

```bash
sudo kubectl describe certificate dspm-tls -n access-analyzer
```

The certificate's events show what AD CS returned, including an HTTP 401 from an EPA-hardened endpoint or a rejected enrollment from a template requiring unsupported subject fields.

## Switch an existing installation

Switching to, from, or between automatic modes works the same way for `adcs` as it does for the other modes. See [Switch an existing installation](automatic-tls-certificates.md#switch-an-existing-installation) for the full procedure.
