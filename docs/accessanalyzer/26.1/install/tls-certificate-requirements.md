---
title: TLS Certificate Requirements
description: Prepare a certificate authority (CA)-issued TLS certificate for Access Analyzer and check it before install day, covering format, chain order, and required fields.
sidebar_position: 1.5
---

Access Analyzer serves its web console over HTTPS on a single hostname, the fully qualified domain name (FQDN) you pass to the installer as `--hostname`. You can bring a certificate from your own certificate authority (CA), or let the installer generate a self-signed one.

Use this page to prepare a CA-issued certificate and check it **before** install day. Most failed installs with a customer certificate come from a certificate that is correct for the CA but not in the form the installer expects: missing SAN, wrong chain order, encrypted key, or missing root CA.

## What the Installer Needs

| File | Default path | Installer flag | Required |
|---|---|---|---|
| Certificate, full chain | `/etc/dspm/tls.crt` | `--tls-cert` | Yes |
| Private key | `/etc/dspm/tls.key` | `--tls-key` | Yes |
| Issuing root CA | `/etc/dspm/ca-bundle.pem` | `--ca-bundle` | Yes, if an internal/private CA issued the certificate |

### Certificate File

- **PEM format.** The file starts with `-----BEGIN CERTIFICATE-----`. Convert DER (binary `.cer`/`.crt`) and PFX/P12 files first. See [Convert other formats](#convert-other-formats).
- **Full chain, leaf first.** Put the server certificate first, then each intermediate CA, in order. The installer treats the first certificate in the file as the server certificate. If the CA certificate comes first, the installer reports that the certificate and key don't match.
- **Subject Alternative Name (SAN) must include the hostname.** The installer ignores the Common Name (CN). A certificate with the hostname only in the CN fails validation.
- **Not expired.** The installer warns if the certificate expires within 30 days.

### Private Key File

- **PEM format**, RSA (2048-bit or larger) or ECDSA (P-256 or P-384). The installer accepts PKCS#1 (`BEGIN RSA PRIVATE KEY`), PKCS#8 (`BEGIN PRIVATE KEY`), and EC (`BEGIN EC PRIVATE KEY`).
- **Unencrypted.** The installer rejects a key that begins `BEGIN ENCRYPTED PRIVATE KEY` or has a `Proc-Type: 4,ENCRYPTED` header. See [Remove a key passphrase](#remove-a-key-passphrase).
- **Must match the certificate.**

### CA Bundle File

If your organization's internal CA issued the certificate (for example, Active Directory Certificate Services), supply the **root CA certificate** in PEM format with `--ca-bundle`. Access Analyzer's own services call each other through the HTTPS hostname and must trust your CA to do so. A full-chain file leaves out the root by convention, so the installer can't find the root there.

Without the CA bundle, the install can finish, but the application never becomes healthy: its services can't verify the certificate and restart repeatedly.

Skip the CA bundle only if the certificate comes from a publicly trusted CA or is self-signed.

## Recommended Certificate Fields

These are the fields a certificate should have for Access Analyzer. Most CA "Web Server" templates produce them already.

| Field | Recommended value | Why |
|---|---|---|
| Subject Alternative Name | `DNS:<hostname>` (for example `DNS:dspm.example.com`) | The installer and browsers check the hostname against the SAN only. |
| Subject CN | Same as the hostname | The installer doesn't check it. Include it for readability. |
| Extended Key Usage (EKU) | `TLS Web Server Authentication` (serverAuth) | The installer requires this when it verifies the chain against your CA bundle, and browsers require it too. A certificate issued from a client-authentication or user template fails. |
| Key Usage | `Digital Signature`, and `Key Encipherment` for RSA keys | Browsers expect these for a server certificate. |
| Validity | Your CA's policy | Plan the renewal date. Rotate with `dspm-installer update-cert`. |

**Wildcards.** A wildcard SAN such as `*.example.com` covers `dspm.example.com`. It doesn't cover `example.com` or `dspm.sub.example.com`.

**IP addresses.** If users reach Access Analyzer by IP address rather than a DNS name, the SAN must contain `IP Address:<ip>`. A DNS entry that looks like an IP address isn't enough.

**One hostname is enough.** Access Analyzer serves all its pages, including reports, from the same hostname under different paths. You don't need additional SANs for sub-services.

## Your CA May Add Other Fields

Every organization's CA templates differ. Your certificate may carry extensions this page doesn't list, such as certificate revocation list (CRL) distribution points, Authority Information Access (AIA/OCSP) URLs, certificate policies, a template name, or extra SANs. Access Analyzer ignores these and they don't cause a problem.

What matters is that the required items are present. If your CA team can't issue a certificate with a SAN and the serverAuth EKU, ask them for their "Web Server" template, or plan to use a self-signed certificate.

## Example Certificate

This is what a correctly prepared certificate looks like. Your output will differ in the names, dates, serial, and extra extensions.

```bash
openssl x509 -in /etc/dspm/tls.crt -noout -text
```

```text
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            4a:00:00:00:1f:9c:3e:2b:7d:51:0a:64:00:00:00:00:00:1f
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: DC=com, DC=example, CN=Example Issuing CA 01
        Validity
            Not Before: Sep  1 00:00:00 2026 GMT
            Not After : Sep  1 00:00:00 2027 GMT
        Subject: C=US, O=Example Corp, CN=dspm.example.com
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                Public-Key: (2048 bit)
        X509v3 extensions:
            X509v3 Subject Alternative Name:
                DNS:dspm.example.com
            X509v3 Key Usage: critical
                Digital Signature, Key Encipherment
            X509v3 Extended Key Usage:
                TLS Web Server Authentication
            X509v3 Subject Key Identifier:
                3B:9A:...
            X509v3 Authority Key Identifier:
                7C:12:...
            X509v3 CRL Distribution Points:
                Full Name:
                  URI:http://pki.example.com/crl/Example-Issuing-CA-01.crl
            Authority Information Access:
                CA Issuers - URI:http://pki.example.com/aia/Example-Issuing-CA-01.crt
            1.3.6.1.4.1.311.21.7:
                (Microsoft certificate template information)
```

The lines that matter are **Subject Alternative Name**, **Extended Key Usage**, and **Validity**. The CRL, AIA, and Microsoft template extensions are examples of CA-specific fields that are fine to have.

The full-chain file should look like this, with the server certificate first:

```text
-----BEGIN CERTIFICATE-----
(server certificate for dspm.example.com)
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
(Example Issuing CA 01, the intermediate)
-----END CERTIFICATE-----
```

The CA bundle file holds the root:

```text
-----BEGIN CERTIFICATE-----
(Example Root CA)
-----END CERTIFICATE-----
```

## Check Your Certificate Before Install Day

### With the Installer

On the Access Analyzer host, run the installer's pre-install checks. They validate the certificate exactly as the install does, and change nothing:

```bash
sudo dspm-installer --preflight \
  --hostname dspm.example.com \
  --tls-cert /etc/dspm/tls.crt \
  --tls-key  /etc/dspm/tls.key \
  --ca-bundle /etc/dspm/ca-bundle.pem
```

Leave out `--ca-bundle` for a publicly trusted or self-signed certificate. Look for the TLS line in the output. A pass reads `certificate ... and key ... are valid; SANs cover dspm.example.com`.

### With OpenSSL

You can run these checks on any machine with OpenSSL, before the files reach the host.

1. Check the hostname is in the SAN:

   ```bash
   openssl x509 -in tls.crt -noout -ext subjectAltName
   ```

2. Check the Extended Key Usage includes TLS Web Server Authentication:

   ```bash
   openssl x509 -in tls.crt -noout -ext extendedKeyUsage
   ```

3. Check the validity dates:

   ```bash
   openssl x509 -in tls.crt -noout -dates
   ```

4. Check the order of the chain. The first `subject=` must be the hostname:

   ```bash
   openssl crl2pkcs7 -nocrl -certfile tls.crt | openssl pkcs7 -print_certs -noout
   ```

5. Check the key matches the certificate. The two hashes must be identical:

   ```bash
   openssl x509 -in tls.crt -noout -pubkey | openssl sha256
   openssl pkey -in tls.key -pubout | openssl sha256
   ```

6. Check the key isn't encrypted. This must print the key without asking for a passphrase:

   ```bash
   openssl pkey -in tls.key -noout && echo "key is unencrypted"
   ```

7. Check the chain verifies against your root CA:

   ```bash
   openssl verify -CAfile ca-bundle.pem -untrusted tls.crt -purpose sslserver tls.crt
   ```

   Expected output: `tls.crt: OK`.

## Common Problems

| Installer message | Cause | Fix |
|---|---|---|
| `TLS certificate SANs do not include the configured hostname` | The hostname is only in the CN, or the SAN has a different name. | Reissue with `DNS:<hostname>` in the SAN. |
| `TLS certificate and private key do not match` | The wrong key, the CA certificate listed first in the chain, or an encrypted key. | Put the server certificate first. Use the key generated with the CSR. Remove the passphrase. |
| `TLS certificate has expired` | The certificate is past its end date. | Obtain a new certificate. |
| Chain or CA bundle error | The CA bundle holds the wrong root, an intermediate is missing from the chain, or the EKU lacks serverAuth. | Supply the root that issued the chain, add missing intermediates to `tls.crt`, or reissue from a Web Server template. |
| Install finishes but the app never becomes healthy | You installed a private-CA certificate without `--ca-bundle`. | Run `dspm-installer update-cert` with `--ca-bundle`. |

## Request a Certificate From Your CA

If you generate the key and certificate signing request (CSR) yourself, include the SAN in the request:

```bash
openssl req -new -newkey rsa:2048 -nodes \
  -keyout tls.key -out dspm.csr \
  -subj "/CN=dspm.example.com" \
  -addext "subjectAltName=DNS:dspm.example.com" \
  -addext "extendedKeyUsage=serverAuth" \
  -addext "keyUsage=digitalSignature,keyEncipherment"
```

`-nodes` writes the key unencrypted, as the installer requires. Protect the key file (`chmod 600 tls.key`).

Some CAs ignore the extensions in a CSR and apply their template instead. Check the issued certificate with the [OpenSSL steps](#with-openssl) either way.

## Convert Other Formats

### PFX / P12 to PEM

```bash
openssl pkcs12 -in cert.pfx -clcerts -nokeys -out leaf.crt
openssl pkcs12 -in cert.pfx -cacerts -nokeys -out chain.crt
openssl pkcs12 -in cert.pfx -nocerts -nodes  -out tls.key
cat leaf.crt chain.crt > tls.crt
```

Open `tls.crt` and delete any `Bag Attributes` lines before the first `-----BEGIN CERTIFICATE-----`. Confirm the chain order with step 4 in [With OpenSSL](#with-openssl). If the PFX includes the root, move it to `ca-bundle.pem`.

### DER (Binary) to PEM

```bash
openssl x509 -inform der -in cert.cer -out cert.pem
```

### Windows Certificate Export

When exporting from the Windows certificate manager, choose **Base-64 encoded X.509 (.CER)**. That is PEM. The **DER encoded binary** option needs the conversion in [DER (Binary) to PEM](#der-binary-to-pem).

Save PEM files as plain ASCII or UTF-8 without a byte-order mark. PowerShell's `Out-File` adds one by default; use `Set-Content -Encoding ascii` instead.

### Remove a Key Passphrase

```bash
openssl pkey -in encrypted.key -out tls.key
```

OpenSSL asks for the passphrase once and writes the key unencrypted.
