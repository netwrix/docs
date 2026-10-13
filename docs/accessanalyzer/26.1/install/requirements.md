---
title: Requirements
description: Server sizing, install media disk space, hostname, network ports, TLS certificate, license key, first administrator, and browser requirements for installing Access Analyzer.
sidebar_position: 1
---

Gather everything on this page before you run the installer. The installer runs a preflight check on the server first and stops if the server doesn't meet the hard requirements, so checking these requirements first helps prevent a failed installation.

## Server

Access Analyzer installs on a single physical or virtual Linux server.

| Requirement | Details |
|---|---|
| Operating system | Ubuntu or Red Hat Enterprise Linux (RHEL). Any Debian-based or RPM-based distribution should work. The installer doesn't check the release version. RHEL and CentOS need some [additional preparation](installer-reference.md#rhel-and-centos-preparation). |
| Architecture | 64-bit x86 or Arm. |
| Access | Root, either directly or through `sudo`. |
| Free disk on the storage volume | See [size](#size) for storage requirements. Access Analyzer stores its data under `/var/lib` by default. To put it on a different mount, pass `--storage-dir` at install time. See [Storage Location](installer-reference.md#storage-location). Keep about 10 GB free on `/var/lib` either way, because the platform keeps pod-local storage there. |
| Free disk for the install media | About 16 GB free on the volume that holds the media. See [Install media](#install-media). |

On a distribution the installer doesn't recognize, the preflight check reports a warning instead of stopping, and you can continue at your own risk.

## Size

You pick a size when you install. The size sets the CPU and RAM the installer requires, the disk it recommends, and how much capacity Access Analyzer reserves for itself. _The default is **medium**_.

| Size | CPU cores | RAM | Disk <br/> (storage volume) | Designed for |
|---|---|---|---|---|
| small | 8 | 32 GB | 400 GB | Up to about 25 million objects and fewer than 5,000 identities. |
| medium | 16 | 64 GB | 1,000 GB | Up to about 200 million objects and 5,000 to 25,000 identities. |
| large | 24 | 96 GB | 3,000 GB | Up to about 800 million objects and 25,000 to 100,000 identities. |
| enterprise | 32 | 128 GB | 8,000 GB | Up to about 3 billion objects and more than 100,000 identities. |

CPU cores and RAM are hard minimums: the installer's preflight check fails below them, and the install doesn't proceed. The check allows a 5% tolerance on RAM and disk, so a virtual machine you provision at exactly the stated figure passes even though the guest sees slightly less.

Disk is a recommendation. A server with less free space than the size recommends still installs and runs, but the preflight check warns that the disk is too small for the data that size supports. The 40 GB floor is different: below that, the preflight check fails.

For example, a virtual machine with 16 cores, 64 GB of RAM, and 600 GB free on the storage volume (`/var/lib` by default) installs as **medium** with a disk warning you can accept. The same machine with 12 cores fails preflight for **medium**; install it as **small** or add cores.

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

See [TLS certificate requirements](tls-certificate-requirements.md) to prepare and check a CA-issued certificate before install day.

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
| 6443 | TCP | Agent hosts | Lets [agents](../agents/index.md) join and connect back to the server. Open it only to the hosts you deploy agents on. [Deploy an agent](../agents/deploy-agent.md#prepare-the-host) lists the other ports an agent host needs. |

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

#### Checking Connectivity Before You Install

Confirm the server can reach these hosts before you download the installer. The quickest check is the download host alone:

```bash
curl -sSI --max-time 10 https://raw.pkg.keygen.sh/ -o /dev/null && echo "download host reachable" || echo "BLOCKED: allow outbound TCP 443 to raw.pkg.keygen.sh"
```

If that prints `BLOCKED`, your network team needs to allow this connection before you can download the installer.

To check every host at once, expand the following script and copy it into a file on the server. For example, run `vim aa26-connectivity-check.sh`, press `i` to enter insert mode, paste the script, then press `Esc` and type `:wq` to save and exit.

<details>
<summary>aa26-connectivity-check.sh</summary>

```bash
#!/usr/bin/env bash
# Access Analyzer pre-download connectivity check.
#
# Run this on the Linux server that will host Access Analyzer, before you have
# the installer. It needs only curl. It tells you which hosts are blocked and
# why (DNS, firewall/proxy, TLS), so you know what to ask your network team to
# unblock. Nothing is installed or changed.
#
#   bash aa26-connectivity-check.sh
#   LICENSE_KEY=xxxx bash aa26-connectivity-check.sh   # also tries the real installer download

set -u

TIMEOUT=10

# Needed before anything else: this is where the installer itself is downloaded.
DOWNLOAD_HOSTS="raw.pkg.keygen.sh keygen-dist.c3c9112df8df715f42d1162cdce5dba1.r2.cloudflarestorage.com"

# Needed by the installer once it runs.
INSTALL_HOSTS="api.keygen.sh oci.pkg.keygen.sh get.k3s.io rpm.rancher.io github.com api.github.com raw.githubusercontent.com release-assets.githubusercontent.com ghcr.io pkg-containers.githubusercontent.com registry-1.docker.io auth.docker.io production.cloudflare.docker.com docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com d2glxqk2uabbnd.cloudfront.net storage.googleapis.com"

if ! command -v curl >/dev/null 2>&1; then
  echo "curl is required: install it (e.g. 'sudo dnf install curl' or 'sudo apt install curl') and re-run." >&2
  exit 2
fi

blocked=0
failed_hosts=""

check_host() {
  host=$1
  # Connect only; any HTTP status means the connection worked.
  out=$(curl -sS -o /dev/null -w '%{http_code}' --max-time "$TIMEOUT" "https://$host/" 2>&1)
  rc=$?
  if [ "$rc" -eq 0 ] && [ "$out" = "407" ]; then
    rc=407
  fi
  case $rc in
    0)  printf '  OK    %-75s connected, server answered HTTP %s\n' "$host" "$out" ;;
    407) printf '  FAIL  %-75s proxy demands authentication (HTTP 407)\n' "$host" ;;
    6)  printf '  FAIL  %-75s DNS: name does not resolve\n' "$host" ;;
    7)  printf '  FAIL  %-75s connection refused (firewall or proxy)\n' "$host" ;;
    28) printf '  FAIL  %-75s timed out after %ss (firewall dropping traffic)\n' "$host" "$TIMEOUT" ;;
    35|60) printf '  FAIL  %-75s TLS failed (proxy intercepting TLS or missing CA)\n' "$host" ;;
    *)  printf '  FAIL  %-75s curl exit %s: %s\n' "$host" "$rc" "$out" ;;
  esac
  if [ "$rc" -ne 0 ]; then
    blocked=$((blocked + 1))
    failed_hosts="$failed_hosts $host"
  fi
}

echo "Access Analyzer connectivity check  ($(date -u +%Y-%m-%dT%H:%M:%SZ), $(hostname))"
echo
if [ -n "${https_proxy:-${HTTPS_PROXY:-}}" ]; then
  echo "Using proxy: ${https_proxy:-$HTTPS_PROXY}  (the installer honours the same variables)"
  echo
fi

echo "Each host is asked for https://<host>/ . Any HTTP answer, including 400, 403 or 404,"
echo "means DNS, TCP 443 and TLS all worked and the real server replied. These hosts are"
echo "APIs and storage buckets, so most of them have no page at / and answer 4xx. Only a"
echo "DNS, connection, timeout or TLS failure is a block."
echo
echo "1. Installer download (needed first)"
for h in $DOWNLOAD_HOSTS; do check_host "$h"; done
echo
echo "2. Installation (needed once the installer runs)"
for h in $INSTALL_HOSTS; do check_host "$h"; done
echo

if [ -n "${LICENSE_KEY:-}" ]; then
  echo "3. Real installer download with your license key"
  arch=$(uname -m | sed 's/x86_64/amd64/; s/aarch64/arm64/')
  tmp=$(mktemp)
  code=$(curl -sS -L -o "$tmp" -w '%{http_code}' --max-time 120 \
    "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-installer-linux-$arch?auth=license:$LICENSE_KEY" 2>&1)
  rc=$?
  if [ "$rc" -eq 0 ] && [ "$code" = "200" ]; then
    echo "  OK    downloaded dspm-installer-linux-$arch ($(wc -c <"$tmp" | tr -d ' ') bytes) to $tmp"
  elif [ "$rc" -eq 0 ]; then
    echo "  FAIL  HTTP $code from raw.pkg.keygen.sh (401/403 usually means the license key is wrong or expired)"
    blocked=$((blocked + 1))
    rm -f "$tmp"
  else
    echo "  FAIL  curl exit $rc: $code"
    blocked=$((blocked + 1))
    rm -f "$tmp"
  fi
  echo
fi

if [ "$blocked" -eq 0 ]; then
  echo "All hosts reachable on TCP 443. This server can download and run the installer."
  exit 0
fi

echo "$blocked check(s) failed. Ask your network team to allow outbound TCP 443 from this server to:"
for h in $failed_hosts; do echo "  $h"; done
echo
echo "Then re-run this script. Send the full output to Netwrix if anything still fails."
exit 1
```

</details>

Then run it:

```bash
bash aa26-connectivity-check.sh
```

The script asks each host for `https://<host>/`. Most of these hosts are APIs and storage buckets with no page at `/`, so an HTTP response of 400, 403, or 404 still counts as a pass: it proves DNS resolution, the TCP 443 connection, and the TLS handshake all worked. A FAIL line means DNS didn't resolve, the connection timed out or the host refused it, or TLS failed, usually because a proxy is intercepting HTTPS. The script ends with the exact list of hosts to ask your network team to unblock, and exits `0` only when every host is reachable.

The script needs only `curl`. It installs nothing and changes nothing on the server. If you use an HTTPS proxy, export `https_proxy` before you run it; the installer honors the same variable.

```bash
export https_proxy="http://proxy.corp.example.com:3128"
bash aa26-connectivity-check.sh
```

After you have the installer, `sudo dspm-installer --preflight` runs the same connectivity check along with the hardware, OS, and certificate checks.

Some features add outbound connections of their own after you configure them.

| Host | Port | When you need it |
|---|---|---|
| `login.microsoftonline.com`, `sts.windows.net` | TCP 443 | You use Entra ID as the identity provider. |
| `graph.microsoft.com` | TCP 443 | You add an Entra ID or SharePoint Online source. |
| Domain controllers | TCP 636 | You use Active Directory as the identity provider. The connection uses Lightweight Directory Access Protocol (LDAP) over TLS (LDAPS). |
| Domain controllers | TCP 389 | You scan an Active Directory source. The connection uses LDAP (default port). |
| File servers | TCP 445 | You scan an SMB file server source (default port). |

## Browser

Any modern browser should work. Netwrix doesn't support or recommend Internet Explorer.

Once everything on this page is in place, continue to [Install Access Analyzer](run-the-installer.md).
