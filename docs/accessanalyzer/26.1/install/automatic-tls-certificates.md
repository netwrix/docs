---
title: Automatic TLS Certificates
description: Let Access Analyzer obtain and renew its TLS certificate automatically from Let's Encrypt or another ACME certificate authority, or from an internal chain it manages itself.
sidebar_position: 4.5
---

Instead of supplying a certificate file and rotating it by hand, you can hand certificate issuance and renewal to the cluster itself. Pass `--cert-manager-issuer-mode` to the installer and Access Analyzer obtains its own certificate, renews it before it expires, and reloads it without a restart — no maintenance window, no `update-cert` runs.

Three automatic modes are available:

| Mode | Certificate comes from | Best for |
|---|---|---|
| `acme` | Let's Encrypt (default) or any ACME-compatible certificate authority | Servers reachable from the internet, or organizations running a private ACME CA |
| `adcs` | Your Active Directory Certificate Services CA | Enterprises with an existing Microsoft public key infrastructure (PKI) |
| `selfsigned` | An internal CA the cluster creates and manages itself | Demos, labs, and isolated environments |

If you don't pass the flag, nothing changes: the installer uses the certificate files you supply, and you rotate them yourself with [`update-cert`](rotate-the-tls-certificate.md).

This page covers the `acme` mode. For `adcs`, see [AD CS TLS Certificates](adcs-tls-certificates.md). For `selfsigned`, see the [Installer reference](installer-reference.md).

## About Let's Encrypt and ACME

The nonprofit Internet Security Research Group operates [Let's Encrypt](https://letsencrypt.org), a free, publicly trusted certificate authority (CA). There are no fees and no account to create ahead of time — you only provide an email address for expiry and incident notices. All mainstream browsers and operating systems trust its certificates, so users see no certificate warnings.

Let's Encrypt issues certificates over Automatic Certificate Management Environment (ACME), an open protocol in which the certificate authority verifies that you control the domain before issuing. Access Analyzer uses the HTTP-01 challenge: the certificate authority connects to `http://<hostname>/.well-known/acme-challenge/<token>` on port 80 and checks for a response only your server could produce. The cluster answers this challenge automatically — you never handle the token.

Certificates are valid for 90 days and Access Analyzer renews them automatically 30 days before expiry, using the same challenge. As long as your DNS record and firewall rules stay in place, no one has to update the certificate again.

The `acme` mode works with any ACME-compatible certificate authority, not only Let's Encrypt — see [Use a private ACME certificate authority](#use-a-private-acme-certificate-authority).

## Before you start

The `acme` mode with Let's Encrypt has requirements the manual certificate path doesn't:

1. **Public DNS.** The hostname you install with must resolve on public DNS to this server. Let's Encrypt looks the name up itself and connects to whatever address it finds — an entry in `/etc/hosts` or on your internal DNS isn't enough.

2. **Inbound ports 80 and 443 open from the internet.** The HTTP-01 challenge arrives on port 80; Access Analyzer serves the application itself on port 443. If a firewall or NAT blocks either, issuance never completes.

3. **An email address** for the ACME account. Let's Encrypt sends certificate expiry warnings and incident notices there.

4. **A bootstrap certificate.** The web server needs something to serve during the minute or two before the first Let's Encrypt certificate arrives. The simplest choice is `--generate-self-signed-cert`, which creates a temporary self-signed pair; you can pass `--tls-cert`/`--tls-key` with existing files instead. Use `--tls-cert-validity-days` (alias `--cert-days`) to set the bootstrap certificate's validity period — the default is 365 days, and the maximum is 36500. See the [Installer reference](installer-reference.md) for both flags.

:::warning
The installer checks that the ACME flags are present, but it can't check that Let's Encrypt can actually reach your server. If DNS or the firewall is wrong, the install completes but the certificate stays pending and the site keeps serving the bootstrap certificate. See [If the certificate stays pending](#if-the-certificate-stays-pending).
:::

## Install with automatic certificates

Follow [Install Access Analyzer](run-the-installer.md) as usual, adding the ACME flags. You can skip the "Copy the TLS Certificate to the Server" step — `--generate-self-signed-cert` replaces it.

```bash
sudo -E dspm-installer \
  --hostname dspm.example.com \
  --first-admin-email admin@example.com \
  --cert-manager-issuer-mode acme \
  --acme-email ops@example.com \
  --generate-self-signed-cert
```

- `--cert-manager-issuer-mode acme` turns on automatic issuance.
- This mode requires `--acme-email`.
- `--generate-self-signed-cert` provides the bootstrap certificate.

Each flag also has an environment variable (`CERT_MANAGER_ISSUER_MODE`, `ACME_EMAIL`, `ACME_SERVER`), listed in the [Installer reference](installer-reference.md).

The install proceeds exactly as [Install Access Analyzer](run-the-installer.md) describes. When the services are up, the cluster requests the certificate from Let's Encrypt; issuance typically completes within a minute or two. Browsers connecting during that window see the self-signed bootstrap certificate and show a trust warning — the warning stops when the Let's Encrypt certificate is in place.

:::note
The installer doesn't save the issuance mode to `/etc/dspm/installer.yaml`. Every installer run uses exactly the `--cert-manager-issuer-mode` you pass it; omitting the flag means manual certificates. Upgrading never changes the mode.
:::

## Confirm the certificate

From any machine with a browser, open `https://<hostname>` — there should be no certificate warning. To check from a shell:

```bash
openssl s_client -connect <hostname>:443 -servername <hostname> </dev/null 2>/dev/null \
  | openssl x509 -noout -subject -issuer -dates
```

The issuer should name Let's Encrypt (for example `issuer=C=US, O=Let's Encrypt, CN=...`), and the dates should show a 90-day window. If the issuer is still your own hostname, the bootstrap certificate is still serving — see [If the certificate stays pending](#if-the-certificate-stays-pending).

## If the certificate stays pending

If the site keeps serving the bootstrap certificate more than a few minutes after install, the challenge is failing. On the server:

```bash
sudo kubectl describe certificate dspm-tls -n access-analyzer
sudo kubectl get challenges -A
```

The certificate's events and the challenge's status show what Let's Encrypt saw. The common causes:

- **The hostname doesn't resolve publicly**, or resolves to a different address. Check with a resolver outside your network: `dig +short <hostname> @1.1.1.1`.
- **Port 80 is blocked.** The challenge always arrives on port 80, even though the application serves on 443. Test from outside your network: `curl -I http://<hostname>/.well-known/acme-challenge/test` should return an HTTP response (a 404 is fine — a timeout is the problem).
- **Rate limits.** Let's Encrypt limits how many certificates it issues per domain per week. Repeated reinstalls against the same hostname can hit them; the challenge status names the limit explicitly. Wait, or test against the [staging environment](#use-a-private-acme-certificate-authority) instead.

Fix the cause and the cluster retries automatically — no reinstall needed.

## Use a private ACME certificate authority

If your organization runs its own ACME-compatible certificate authority (for example smallstep `step-ca`), point `--acme-server` at its directory URL and supply that CA's root chain with `--ca-bundle` so Access Analyzer's own services trust the certificates it issues:

```bash
sudo -E dspm-installer \
  --hostname dspm.corp.example.com \
  --cert-manager-issuer-mode acme \
  --acme-server https://ca.corp.example.com/acme/acme/directory \
  --acme-email pki-admins@corp.example.com \
  --ca-bundle /etc/dspm/corp-root-ca.pem \
  --generate-self-signed-cert
```

With a private CA the public-DNS requirement relaxes to: the hostname must resolve, and ports 80 and 443 must be reachable, **from the CA's network** rather than from the internet.

:::note
Let's Encrypt's **staging** environment (`https://acme-staging-v02.api.letsencrypt.org/directory`) counts as a private CA here: its certificates chain to deliberately untrusted test roots. Use it to test the flow without consuming production rate limits, and pass its roots as the `--ca-bundle`.
:::

## Switch an existing installation

**From manual certificates to ACME** — re-run the installer with the `acme` flags. The new certificate replaces the existing one automatically at first issuance; you don't need any manual cleanup, and the web server loads it without a restart. If the previous setup used `--ca-bundle` and you're moving to public Let's Encrypt, also delete the `ca-bundle` line from `/etc/dspm/installer.yaml` so the installer doesn't reapply the old trust anchor.

**From ACME back to manual certificates** — re-run the installer without `--cert-manager-issuer-mode` (or with `none`), supplying `--tls-cert`/`--tls-key` as usual, plus `--ca-bundle` if a private CA issued the certificate. From then on you rotate it yourself with [`update-cert`](rotate-the-tls-certificate.md).
