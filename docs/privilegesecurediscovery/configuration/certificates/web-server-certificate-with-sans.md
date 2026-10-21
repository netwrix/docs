---
title: "Install a web server certificate"
description: "Install a CA-signed or self-signed TLS certificate on Privilege Secure for Discovery so browsers trust the web interface, and fix the common certificate errors."
sidebar_position: 30
---

:::warning[Needs dev input: remove before publishing]
TODO: Does each node of a cluster serve the certificate, or only the node that runs the API service? Evidence: none; the API service publishes port 443 in host mode (docker/docker-compose.swarm.yml:94-103), and the cluster stack file isn't in the 26.09.1 source.
:::

A new installation uses a default certificate for the name `localhost`, so browsers show a warning when users open the product by its real name. Install a certificate for the name that users use. The certificate must come from a certificate authority (CA) that your users' browsers trust, such as the CA that your organization runs. The product accepts RSA keys only, and TLS 1.2 or later.

## Prerequisites

- A certificate and an unencrypted RSA key in PEM format, with the names that users use in the Subject Alternative Names (SANs). To create the request, see [Create a CSR](./create-a-csr.md). To convert the files that the CA returned, see [Prepare the certificate and key files](./certificate-files.md).
- A copy of the key and certificate that the product uses now, if you have them. The product keeps the previous certificate internally, but the interface can't restore it or show its key.
- Administrator access to Privilege Secure for Discovery.

## Check the key and the certificate

On the computer that has the files, confirm that the key matches the certificate. The two hashes must be identical.

```bash
openssl pkey -in server.key -pubout | sha256sum
openssl x509 -in fullchain.crt -pubkey -noout | sha256sum
```

Confirm that the certificate lists the names and the dates that you expect.

```bash
openssl x509 -in fullchain.crt -noout -subject -dates -ext subjectAltName
```

## Install the certificate

1. Sign in to Privilege Secure for Discovery as an administrator.
2. Select **Configure** > **Server**.
3. In the **Server Certificate** panel, review the certificate in use. The panel shows its **CN**, **SAN**, and validity dates, and hides the key.

   ![The Server Certificate panel with the default certificate for localhost](/images/privilegesecurediscovery/certificates/cert-server-certificate-default.webp)

4. Select **Update Certificate**.
5. In **Private Key**, paste the contents of `server.key`, starting at the `BEGIN` line.
6. In **Certificate**, paste the contents of `fullchain.crt`: the server certificate first, then the intermediate certificates.

   The panel checks the pair as you paste. When the pair is valid, the panel shows the **CN**, **SAN**, and validity dates of the new certificate, and enables **Save**. Otherwise, it shows `Invalid Key and/or Cert.` See [Fix certificate errors](#fix-certificate-errors).

7. Select **Save**.

   ![The Server Certificate panel after the new certificate is saved](/images/privilegesecurediscovery/certificates/cert-server-certificate-installed.webp)

The product starts using the new certificate within seconds. You don't restart any service. Users stay signed in, because the product keeps no server-side session, and scans in progress continue. Open the product in a new browser window by its DNS name to confirm that the browser trusts it. From another computer, you can check what the product sends:

```bash
openssl s_client -connect <fqdn>:443 -servername <fqdn> -showcerts </dev/null
```

The output lists the server certificate and the intermediate certificates in order.

## Fix certificate errors

The panel shows the same message for every invalid pair: `Invalid Key and/or Cert.` Check the following causes.

| Cause | Fix |
| --- | --- |
| The pasted text has lines before the `BEGIN` line, such as `Bag Attributes`. | Paste only the PEM blocks. Create the files with the commands in [Prepare the certificate and key files](./certificate-files.md). |
| The key is encrypted. | Remove the password. The key must begin with `-----BEGIN PRIVATE KEY-----` or `-----BEGIN RSA PRIVATE KEY-----`. |
| The key is an EC key. | Create an RSA key. The product accepts RSA keys only. |
| The key doesn't match the certificate. | Run the hash commands in [Check the key and the certificate](#check-the-key-and-the-certificate). Use the key that you created with the CSR. |
| The certificate field starts with a CA certificate. | Put the server certificate first, followed by the intermediate certificates. |

If the panel accepts the pair but the browser still shows a warning:

- The browser doesn't trust the CA. Install the root CA certificate on the computers of your users. This is the only fix when your organization runs the CA.
- The name in the address bar isn't in the SANs. Open the product by one of the names that the certificate lists, or request a new certificate.
- The certificate isn't valid yet or has expired. Check the dates and the clock of the computer.

## Use a self-signed certificate

Use a self-signed certificate for a test deployment only. Each browser shows a warning until you trust the certificate on that computer.

1. Create the key and the certificate in one command. Replace the names with your own values.

   ```bash
   openssl req -x509 -newkey rsa:2048 -nodes -keyout server.key -out server.crt -days 365 \
     -subj "/CN=nps-d.example.com" \
     -addext "subjectAltName=DNS:nps-d.example.com,DNS:node01.example.com"
   ```

   To sign an existing CSR with its own key instead, add `-copy_extensions copy` to the `openssl x509 -req` command, so that the SANs reach the certificate.

2. Install `server.key` and `server.crt` as described in [Install the certificate](#install-the-certificate).

## Trust a CA for the directory connection

The web certificate is what browsers see. The product also checks the certificates of the servers that it connects to. For a domain that uses LDAP over SSL, the domain settings have three options:

- **SSL** turns on a secure connection to the directory server.
- **Verify Certificate** makes the product check the certificate of the directory server. When it is off, the product doesn't check the certificate.
- **CA Public Certificate** holds the PEM certificate of the CA that issued the directory server certificate. When **Verify Certificate** is on and this field is empty, the product trusts only the public CAs that its container includes. A CA that your organization runs isn't one of them, so paste its certificate here.

You don't add a CA to the nodes. For the steps to add a domain, see [Add a domain](../domains-and-ad/add-a-domain.md).

## Back up the certificate

The product stores the web server certificate and its key in its database, not in a file on the node. A database backup contains the private key. See [Protect and recover your deployment](../../admin/maintenance/protect-and-recover-your-deployment.md).
