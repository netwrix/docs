---
title: "TLS Certificate Requirements"
description: "Certificate files required by the Access Analyzer installer, format, and preparation tips"
sidebar_position: 40
---

# TLS Certificate Requirements

Access Analyzer requires three certificate-related files at install time. This page describes the format of each file, the rules the installer enforces, and common pitfalls when preparing them.

All three files must be in PEM format. The installer wizard prompts you for the path to each file — no interactive certificate provisioning exists beyond this; you supply files you've already prepared.

## Summary

| File | Installer Prompt | Purpose |
| --- | --- | --- |
| `tls.crt` | TLS Certificate File | Application TLS certificate (what browsers validate) |
| `tls.key` | TLS Private Key File | Private key paired with the certificate |
| `ca-bundle.pem` | CA Bundle File (optional) | Trusted root CAs (application and LDAPS) |

These filenames are the wizard's pre-filled defaults at `/etc/dspm/` — see [File Placement on the VM](#file-placement-on-the-vm). Stage your files there under these names and you can accept each TLS prompt by pressing **Enter**; using different names or a different directory just means typing the actual path at the prompt instead.

## 1. Application TLS Certificate (`tls.crt`)

- **Format**: PEM (Base64 certificate block, starting with `-----BEGIN CERTIFICATE-----`).
- **Issued by**: your internal certificate authority.
- **Subject Alternative Names (SANs)**: must include **both** the server's hostname (for example, `accessanalyzer.example.com`) **and** the server IP address. Without a matching SAN, browsers reject the connection.
- **Hostname in SANs must be lowercase.** Browsers normalize hostnames to lowercase during TLS validation. If the cert SAN is mixed-case, sign-in fails with HTTP 401. Always generate certificates using a lowercase hostname in the SAN list.
- **Where it's used**: Traefik serves it for every browser request to the application URL.

## 2. Application TLS Private Key (`tls.key`)

- **Format**: PEM (`-----BEGIN PRIVATE KEY-----` or `-----BEGIN RSA PRIVATE KEY-----`).
- **Must be readable by the OS user running the installer.** If you extracted the key using `sudo` or another elevated context, the file may be owned by `root` with `0600` permissions — the installer will fail to read it. After extraction, set ownership to the user running the installer:

  ```bash
  sudo chown <install-user>:<install-user> /etc/dspm/tls.key
  sudo chmod 644 /etc/dspm/tls.key
  ```

- **Never share or commit this file.** Once inside `/etc/dspm/` with correct ownership, restrict access via directory permissions.

## 3. CA Bundle (`ca-bundle.pem`)

- **Format**: a single PEM file containing one or more `-----BEGIN CERTIFICATE-----` blocks concatenated together.
- **Must include**:
  - The CA certificate that signed your **application TLS certificate** (item 1).
  - The CA certificate that signed your **domain controller's LDAPS certificate** — often a different CA in multi-domain or multi-CA environments.
- **Concatenating multiple CAs** is a simple `cat` on Linux:

  ```bash
  cat app-ca.crt ldaps-ca.crt > /etc/dspm/ca-bundle.pem
  ```

- **Why two purposes, one file**: Traefik uses the bundle to secure the application's HTTPS endpoint, **and** Keycloak uses it internally to trust the LDAPS connection to your domain controller.

## Multi-domain and Multi-CA Environments

:::warning
If your Active Directory environment uses a different enterprise root CA for domain controller certificates than the one that signed your application certificate, **both CAs must be in the bundle**. Omitting the LDAPS CA results in a silent LDAP authentication failure — the web application loads correctly and the IdP button appears on the login page, but sign-ins fail with `PKIX path building failed` in the Keycloak logs. Always verify the issuer of your DC's LDAPS certificate before assembling the bundle.
:::

Inspect your DC's LDAPS certificate issuer:

```bash
openssl s_client -connect <dc-hostname-or-ip>:636 -showcerts </dev/null 2>/dev/null \
  | openssl x509 -noout -issuer
```

Compare the issuer to the CA that signed your application certificate. If they differ, you must include both CAs in `ca-bundle.pem`.

## File Placement on the VM

The installer wizard's default prompt values point here — using this layout means you can accept every TLS prompt by pressing **Enter**:

```
/etc/dspm/
├── tls.crt          # TLS Certificate File
├── tls.key          # TLS Private Key File
└── ca-bundle.pem    # CA Bundle File (optional)
```

After staging the files, trust the CA bundle at the OS level so tools like `curl` and `kubectl` also recognize it:

```bash
sudo cp /etc/dspm/ca-bundle.pem /usr/local/share/ca-certificates/dspm-ca.crt
sudo update-ca-certificates
```

## Troubleshooting Certificate Issues

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Sign-in fails with HTTP 401 after correct credentials | SAN hostname has mixed case, but browser normalized to lowercase | Re-issue the certificate with lowercase hostname in the SAN list |
| Installer exits with "Failed to read TLS private key" | Key file owned by `root`, installer runs as non-root user | `sudo chown <install-user> /etc/dspm/tls.key` |
| Web UI loads, IdP login button appears, sign-in fails silently | CA bundle missing the LDAPS CA | Concatenate the DC's LDAPS CA into the bundle and re-run the installer |
| Browser shows "certificate not trusted" | Application CA not distributed to client machines | Distribute the CA to client machines via Group Policy or MDM |
| "Certificate is valid for X but not for Y" in browser | Cert SAN doesn't include the hostname or IP being used | Re-issue with full SAN list including both DNS name and IP |
