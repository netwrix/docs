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
