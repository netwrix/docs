---
title: "Docker"
description: "Connect a Docker host to AI Security with a TLS client certificate to read containers, images, mounts, and networks that run AI agents."
sidebar_position: 45
---

# Docker

Connect Docker so AI Security can read one Docker host through the Docker Engine API over Transport Layer Security (TLS), signing in with a client certificate that the host's Docker daemon trusts. You create a certificate authority and a client certificate on the host and enter the certificate in 1Secure. One certificate reads one host, so connect each host as its own source.

AI agents often run as plain containers on a host with no orchestrator. The host is the one place that knows which images they run, which credentials they are given, and how much of the host they can reach.

:::warning
The Docker API is root on the host. Any client the daemon accepts can start a privileged container and take over the machine.
:::

Docker has no read-only role, so keep the client certificate you create here like a root credential for that host. AI Security only ever sends read requests, but the certificate itself doesn't limit it to them.

## Before you start

* Have root or administrator access to the Docker host, to change the daemon's configuration.
* Know the address AI Security uses to reach the host, for example `docker.example.com`. The Docker API over TLS listens on port 2376 by convention.
* Have `openssl` on the machine where you create the certificates.
* Allow AI Security to reach port 2376 on the host, and allow nothing else to reach it.

## Create the client certificate on the Docker host

Docker checks client certificates against one certificate authority (CA). Create a CA for this daemon, a server certificate for the daemon, and a client certificate for AI Security. Keep the CA's key offline when you finish, because anything it signs can control the host.

1. Create the CA. Set `HOST` to the host's name as AI Security reaches it.

   ```sh
   HOST=docker.example.com
   openssl genrsa -aes256 -out ca-key.pem 4096
   openssl req -new -x509 -days 365 -key ca-key.pem -sha256 -subj "/CN=docker-ca" -out ca.pem
   ```

2. Create the daemon's server certificate, signed by that CA. Add every name and address AI Security may use to `subjectAltName`.

   ```sh
   openssl genrsa -out server-key.pem 4096
   openssl req -subj "/CN=$HOST" -sha256 -new -key server-key.pem -out server.csr
   echo "subjectAltName = DNS:$HOST" > extfile.cnf
   echo "extendedKeyUsage = serverAuth" >> extfile.cnf
   openssl x509 -req -days 365 -sha256 -in server.csr -CA ca.pem -CAkey ca-key.pem \
     -CAcreateserial -out server-cert.pem -extfile extfile.cnf
   ```

3. Create the client certificate for AI Security, signed by the same CA.

   ```sh
   openssl genrsa -out key.pem 4096
   openssl req -subj "/CN=onesecure-ai-security" -new -key key.pem -out client.csr
   echo "extendedKeyUsage = clientAuth" > extfile-client.cnf
   openssl x509 -req -days 365 -sha256 -in client.csr -CA ca.pem -CAkey ca-key.pem \
     -CAcreateserial -out cert.pem -extfile extfile-client.cnf
   ```

4. Copy `ca.pem`, `server-cert.pem`, and `server-key.pem` to `/etc/docker/` on the host, and start the daemon with TLS verification on. On the command line, run:

   ```sh
   dockerd --tlsverify \
     --tlscacert=/etc/docker/ca.pem \
     --tlscert=/etc/docker/server-cert.pem \
     --tlskey=/etc/docker/server-key.pem \
     -H unix:///var/run/docker.sock -H tcp://0.0.0.0:2376
   ```

   The same settings in `/etc/docker/daemon.json` are `"tlsverify": true`, `"tlscacert"`, `"tlscert"`, `"tlskey"`, and `"hosts"`. On a host where systemd starts Docker with `-H fd://`, remove that flag with a service override before you set `"hosts"` in `daemon.json`, or the daemon won't start. Restart Docker after the change.

5. Check the certificate from another machine before you connect. The first command prints the Docker version. Docker refuses the second, which has no client certificate.

   ```sh
   curl --cacert ca.pem --cert cert.pem --key key.pem https://docker.example.com:2376/version
   curl --cacert ca.pem https://docker.example.com:2376/version
   ```

:::warning
Never start the daemon with `-H tcp://` and without `--tlsverify`. That opens root on the host to anyone who can reach the port.
:::

## Connect the source

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Docker".
3. In the Docker row, click **Connect**. The **Connect Docker** dialog opens.
4. In **Docker API URL**, enter the address the daemon listens on, with `https://` and port 2376, for example `https://docker.example.com:2376`.
5. In **Client certificate**, paste the contents of `cert.pem`.
6. In **Client key**, paste the contents of `key.pem`.
7. Optional: in **CA certificate**, paste `ca.pem`. Do this if your own CA signs the server certificate, which it does when you follow these steps.
8. Click **Connect**. The dialog shows "Saved. Testing the connection." and then the result of the test.
9. Click **Done**.

The address names this source. It must be a public https address. AI Security refuses a private, loopback, link local, or reserved address, a single-label name, a name in an internal zone such as `.local` or `.internal`, and a name that resolves to any such address.

Select the Docker row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded". |
| Last scanned | "Never", then "Succeeded", with a container that the Docker Engine listed and wouldn't describe listed as skipped. |

## What this connector reads

* The running containers on the host, with their names, the images they run, and their labels. AI Security drops a label whose name says it holds a secret, such as a password, token, or API key. Only a container that runs an agent image, or is given a model provider's key or a Model Context Protocol (MCP) server setting, becomes an agent. The scan reads the rest and doesn't report them.
* The names of the environment variables each container is given. The Docker API returns each variable with its value. AI Security keeps the name, discards the value, and never stores or sends it.
* Each container's mounts, to find credential files, such as a cloud provider's credentials directory, and the Docker socket itself. A container that mounts the Docker socket controls the host.
* Whether each container runs in privileged mode or on the host network.
* The networks on the host and whether each is internal. A container that joins only internal networks isn't shown as able to reach anywhere.

Containers that NVIDIA OpenShell or Kubernetes manage aren't Docker agents, and AI Security doesn't inspect them. The scan records a warning naming the sandbox, pod, or cluster and the runtime that manages it. Connect that runtime as its own source to see them as agents.

### What the connector never touches

* It keeps no value of an environment variable. It keeps only the name.
* It doesn't start, stop, enter, or change any container, and it reads no log.
* It never changes anything. Every call is a read.

## Permissions

| Docker API call | What AI Security reads with it | Scan without it |
|-----------------|--------------------------------|-----------------|
| `GET /containers/json?limit=1` | That Docker accepts the certificate, for the test. | The test can't run. |
| `GET /version` and `GET /info` | The host's name, operating system, and Engine version. | The scan names the host by its address only. |
| `GET /containers/json` | The running containers, their images, and labels. | AI Security reads nothing. |
| `GET /containers/{id}/json` | Environment variable names, mounts, privileged mode, the user, and network mode. | Containers carry no detail. |
| `GET /networks` | Which networks are internal. | The scan shows every container as able to reach anywhere. |

## If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | The address, the certificate, or the key isn't stored. | Click **Edit**, and enter all three. |
| "The stored credential can't be used. Enter it again." | AI Security can't use the stored credential. | Click **Edit**, and enter them again. |
| "The platform refused the credential. It is wrong, expired or revoked." | The daemon didn't accept the client certificate. | Check that the CA the daemon trusts signed it and that it hasn't expired, and click **Edit** to enter a new one. |
| "The credential works, but access was denied. A permission is missing." | The daemon accepted the certificate and refused a read. | Check for an authorization plugin on the daemon that blocks the calls under [Permissions](#permissions). |
| "A setting is invalid. Addresses must start with https:// on the platform's domain." | The address isn't `https://`, its name is a local, private, or internal address or resolves to one, or AI Security can't read the certificate, the key, or the CA certificate as PEM text, such as an encrypted key. | Click **Edit**, enter the address as `https://` with the host and port, and paste each file's whole contents. |
| "The platform didn't answer, or said it is down or busy." | AI Security couldn't reach the Docker API at that address. | Check the address and port, that AI Security can reach port 2376, and that the CA certificate is the one that signed the server certificate. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to prove the credential. |
| "The test failed on our side. Try again." | The test couldn't finish. | Try again. If it keeps failing, contact Netwrix support. |

## Security notes

* AI Security stores the certificate and key encrypted when you click **Connect** and never shows them again. The source shows only whether a credential is set and which settings are missing.
* AI Security presents the certificate only to the Docker API address you entered, over TLS.
* The certificate can do anything on the host that root can. Store it as you would a root password, and give the CA's key to no one.
* To revoke access, replace the CA that the Docker daemon trusts and restart Docker, because the daemon checks no revocation list. This voids every client certificate the old CA signed. Turning off the Docker API over TCP also revokes it. **Disconnect** on the source removes it from 1Secure.
