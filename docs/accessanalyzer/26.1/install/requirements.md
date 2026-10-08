---
title: Requirements
description: Server sizing, install media disk space, hostname, network ports, TLS certificate, license key, first administrator, and browser requirements for installing Access Analyzer.
sidebar_position: 1
---

Gather everything on this page before you run the installer. The installer runs a preflight check on the server first and stops if the server doesn't meet the hard requirements, so checking these requirements first prevents a failed installation.

## Server

Access Analyzer installs on a single physical or virtual Linux server.

| Requirement | Details |
|---|---|
| Operating system | Ubuntu or Red Hat Enterprise Linux (RHEL). Any Debian-based or RPM-based distribution should work. The installer doesn't check the release version. RHEL and CentOS need some [additional preparation](installer-reference.md#rhel-and-centos-preparation). |
| Architecture | 64-bit x86 or Arm. |
| Access | Root, either directly or through `sudo`. |
| Free disk on the storage volume | See [size](#size) for storage requirements. Access Analyzer stores its data under `/var/lib` by default. To put it on a different mount, pass `--storage-dir` at install time. See [Installer reference](installer-reference.md#flags). Keep about 10 GB free on `/var/lib` either way, because the platform keeps pod-local storage there. |
| Free disk for the install media | About 16 GB free on the volume that holds the media. See [Install media](#install-media). |

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

## Install Media

A connected install works the way an air-gapped install does. The installer downloads the release's offline media from Netwrix, verifies it, and installs from it. The cluster stays connected to the internet, but it doesn't pull charts and images from the Netwrix registry. They come from a registry and a git server inside the cluster.

The media needs disk space while the installer works with it. Allow about **16 GB free** on the volume that holds the media. The preflight check warns (`media-disk`) when there is less. Before it downloads, the installer also checks for room for four times the media archive's size, less any part of the archive already downloaded, and stops with exit code `16` if there isn't enough. Because a partial download counts toward that total, running the command again after an interrupted download needs less free space than the first attempt.

The installer stores the media in one of these directories:

| Flags given | Media directory |
|---|---|
| Neither `--storage-dir` nor `--tmp-dir` | `/var/lib/dspm/media` |
| `--storage-dir <dir>` | `<dir>/dspm/media` |
| `--tmp-dir <dir>` | `<dir>/dspm/media` (`--tmp-dir` takes precedence over `--storage-dir`) |

For example, `--storage-dir /data` puts the media in `/data/dspm/media`.

Root must own every parent of the media directory, and group and other users must not have write permission on it, unless the parent is sticky like `/tmp`. Otherwise, the install refuses to start.

A connected media install doesn't support these:

- Remote scanner nodes. See [Deploy an agent](../agents/deploy-agent.md).
- `--use-mirrored-images` or a non-default `--argocd-namespace`. The installer rejects both.

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

You need a Netwrix license key in the form `XXXX-XXXX-XXXX-XXXX-XXXX-V3`. The key authenticates the installer download and the media download, and the installer validates it online during the install, so the server must reach the licensing endpoint that [Outbound](#outbound) lists. An expired, suspended, or unknown key stops the install. An air-gapped install needs no license key on the server.

Keep the key off the command line. The installer reads it from the `LICENSE_KEY` environment variable, as [Install Access Analyzer](run-the-installer.md) shows.

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

A connected install or upgrade needs three hosts. Allow TCP 443 from the server to each of these hosts. The machine you download the installer binary on also needs `raw.pkg.keygen.sh`. The preflight check tests `api.keygen.sh` and the media download host: it fails if a name doesn't resolve in DNS and warns if a connection times out or the host refuses it.

| Host | Purpose |
|---|---|
| `api.keygen.sh` | License check, release lookup, and download link. |
| `raw.pkg.keygen.sh` | The installer binary download. |
| `keygen-dist.c3c9112df8df715f42d1162cdce5dba1.r2.cloudflarestorage.com` | The media download. |

A connected install no longer needs `get.k3s.io`, Docker Hub, or GitHub, except on an SELinux-enforcing host.

An **SELinux-enforcing** host also needs `api.github.com`, `rpm.rancher.io`, and its distribution's own package repositories. k3s installs its SELinux policy package from them. The preflight check fails if DNS can't resolve `rpm.rancher.io` and warns if it can't resolve `api.github.com`. A host with SELinux in permissive mode or disabled needs neither.

An air-gapped install needs no outbound access at install time.

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
