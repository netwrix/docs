---
title: Requirements
description: Server sizing, hostname, network ports, TLS certificate, license key, first administrator, and browser requirements for installing Access Analyzer.
sidebar_position: 1
---

Gather everything on this page before you run the installer. The installer runs a preflight check on the server first and stops if the server doesn't meet the hard requirements, so a few minutes here saves a failed installation later.

## Server

Access Analyzer installs on a single physical or virtual Linux server.

| Requirement | Details |
|---|---|
| Operating system | Ubuntu. Any Debian-based distribution should work. The installer doesn't check the release version. |
| Architecture | 64-bit x86 or Arm. |
| Access | Root, either directly or through `sudo`. |
| Free disk on `/var/lib` | See [size](#size) for storage requirements. Access Analyzer stores its data under `/var/lib`. |

On a distribution the installer doesn't recognize, the preflight check reports a warning instead of stopping, and you can choose to continue at your own risk.

## Size

You pick a size when you install. The size sets the CPU and RAM the installer requires, the disk it recommends, and how much capacity Access Analyzer reserves for itself. _The default is **medium**_.

| Size | CPU cores | RAM | Disk <br/> (/var/lib) | Designed for |
|---|---|---|---|---|
| small | 8 | 32 GB | 400 GB | Up to about 25 million objects and fewer than 5,000 identities. |
| medium | 16 | 64 GB | 1,000 GB | Up to about 200 million objects and 5,000 to 25,000 identities. |
| large | 24 | 96 GB | 3,000 GB | Up to about 800 million objects and 25,000 to 100,000 identities. |
| enterprise | 32 | 128 GB | 8,000 GB | Up to about 3 billion objects and more than 100,000 identities. |

CPU cores and RAM are hard minimums: the installer's preflight check fails below them, and the install doesn't proceed. The check allows a 5% tolerance on RAM and disk, so a virtual machine provisioned at exactly the stated figure passes even though the guest sees slightly less.

Disk is a recommendation. A server with less free space than the size recommends still installs and runs, but the preflight check warns that the disk is too small for the data that size is designed to hold. The 40 GB floor is different: below that, the preflight check fails.

For example, a virtual machine with 16 cores, 64 GB of RAM, and 600 GB free on `/var/lib` installs as **medium** with a disk warning you can accept. The same machine with 12 cores fails preflight for **medium**; install it as **small** or add cores.

If you want the data on a different volume, the installer accepts custom data directories. They must be absolute paths to existing, writable directories, and can't be `/` or sit under a reserved system path such as `/etc`, `/usr`, or `/var/log`. See [Installer reference](installer-reference.md) for the flags.

## Hostname

The server needs a fully qualified domain name, such as `access-analyzer.corp.example.com`, that users' browsers can resolve. The installer lowercases it and rejects anything that isn't a valid name:

- It must contain a dot.
- It can't be an IP address.
- It can't end in `.localhost`.
- It can't exceed 253 characters, and each dot-separated part must be 1 to 63 letters, digits, or hyphens, with no hyphen at the start or end.

Create the DNS record before you install. The TLS certificate's Subject Alternative Names must cover this name.

## TLS Certificate

Access Analyzer serves the web application **only** over HTTPS, and the installer never generates a certificate. You supply one.

| Item | Requirement |
|---|---|
| Certificate | PEM format, full chain, leaf certificate first. Its Subject Alternative Names must include the hostname; the Common Name alone isn't enough. It must not be expired. |
| Private key | PEM format, unencrypted, and the key that matches the certificate. |
| CA bundle | Optional. PEM format. Needed only when a private certificate authority (CA) issued the certificate, so that the certificate chains to it. |

The installer looks for the certificate at `/etc/dspm/tls.crt` and the key at `/etc/dspm/tls.key` unless you point it elsewhere. A self-signed certificate works, and the installer uses it as its own CA bundle, but browsers warn users about it.

## License Key

You need a Netwrix license key in the form `XXXX-XXXX-XXXX-XXXX-XXXX-V3`. The key authenticates the installer download, and the installer validates it online during the install, so the server must reach the licensing endpoints listed under [Outbound](#outbound). An expired, suspended, or unknown key stops the install.

## First Administrator

The installer creates the first administrator account and prints a temporary password at the end of the install. Have that person's email address ready; it becomes their username. Their full name is optional.

## Network

### Inbound

Open these ports on the server's firewall.

| Port | Protocol | From | Purpose |
|---|---|---|---|
| 443 | TCP | Users' browsers and agent hosts | The Access Analyzer web application. |
| 80 | TCP | Users' browsers | Redirects HTTP requests to HTTPS. |
| 4504 | TCP | Netwrix Activity Monitor | Receives activity data. Open it only if you use [Netwrix Activity Monitor](../integrations/netwrix-activity-monitor.md). |
| 6443 | TCP | Agent hosts | Lets [agents](../agents/index.md) connect back to the server. Open it only to the hosts you deploy agents on. |

### Outbound

The installer downloads everything it needs during the install, and the running product keeps a small number of outbound connections afterwards. Allow TCP 443 from the server to each of these hosts. The preflight check tests every one of them: it fails if a name doesn't resolve in DNS and warns if a connection times out or the host refuses it.

| Host | Purpose |
|---|---|
| `api.keygen.sh` | License validation and release lookups. |
| `oci.pkg.keygen.sh` | Software distribution. |
| `raw.pkg.keygen.sh` | Software distribution. |
| `keygen-dist.c3c9112df8df715f42d1162cdce5dba1.r2.cloudflarestorage.com` | Software distribution. |
| `get.k3s.io` | Platform component downloads. |
| `rpm.rancher.io` | Installer downloads. |
| `github.com` | Platform component downloads. |
| `api.github.com` | Platform component downloads. |
| `raw.githubusercontent.com` | Platform component downloads. |
| `release-assets.githubusercontent.com` | Platform component downloads. |
| `ghcr.io` | Platform component downloads. |
| `pkg-containers.githubusercontent.com` | Platform component downloads. |
| `registry-1.docker.io` | Platform component downloads. |
| `auth.docker.io` | Platform component downloads. |
| `production.cloudflare.docker.com` | Platform component downloads. |
| `docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com` | Installer downloads. |
| `d2glxqk2uabbnd.cloudfront.net` | Installer downloads. |
| `storage.googleapis.com` | Installer downloads. |

Some features add outbound connections of their own after you configure them.

| Host | Port | When it's needed |
|---|---|---|
| `login.microsoftonline.com`, `sts.windows.net` | TCP 443 | You use Entra ID as the identity provider. |
| `graph.microsoft.com` | TCP 443 | You add an Entra ID or SharePoint Online source. |
| Domain controllers | TCP 636 | You use Active Directory as the identity provider. The connection uses Lightweight Directory Access Protocol (LDAP) over TLS (LDAPS). |
| Domain controllers | TCP 389 | You scan an Active Directory source. The connection uses LDAP (default port). |
| File servers | TCP 445 | You scan an SMB file server source (default port). |
| Agent hosts | TCP 22 | You deploy an agent over SSH (default port, configurable). |

## Browser

Any modern browser should work. Netwrix doesn't support or recommend Internet Explorer.

Once everything on this page is in place, continue to [Install Access Analyzer](run-the-installer.md).
