---
title: "Docker Credentials Helper"
description: "Docker Credentials Helper"
sidebar_position: 20
---

# Docker Credentials Helper

## What This Guide Installs

This guide sets up the official `docker-credential-pass` helper from
[docker/docker-credential-helpers](https://github.com/docker/docker-credential-helpers) with
`gopass` as the encrypted backend store. Instead of Docker writing base64-encoded credentials into
`~/.docker/config.json`, credentials are encrypted with GPG and stored through `gopass`.

The main operational use case is deploying or upgrading NPS-D on a customer machine that needs to
pull private images from a protected registry. The standard deployment model is local only: one
encrypted `gopass` store per engineer or per machine, with no Git remote required.

## How It Works

Docker calls the `docker-credential-pass` binary for credential storage and retrieval. That binary
expects to talk to the `pass` CLI and read from `~/.password-store/`. Since `gopass` is
CLI-compatible with `pass` and uses the same GPG-encrypted file format, two symlinks bridge the
gap:

1. **`gopass` symlinked as `pass`** — so `docker-credential-pass` can find the binary it expects
2. **gopass store symlinked to `~/.password-store/`** — so filesystem reads land in the right place

```
Docker CLI  --docker login-->  docker-credential-pass (official binary)
                                      |
                                      v
                                 pass (symlink -> gopass)
                                      |
                                      v
                              GPG-encrypted store
                         (~/.password-store -> gopass store)
```

Repo assets:

- Ubuntu/WSL installer: `scripts/docker-credential-gopass/install-ubuntu.sh`
- Ubuntu validator: `scripts/docker-credential-gopass/validate-ubuntu-login.sh`
- macOS validator: `scripts/docker-credential-gopass/validate-macos-login.sh`
- macOS passphrase validator: `scripts/docker-credential-gopass/validate-macos-passphrase-login.sh`
- Shared store sync validator: `scripts/docker-credential-gopass/validate-shared-store-sync.sh`

## Prerequisites

### NPS-D platform requirements

- NPS-D 2.22.13, 26.03.01, or later

### Runtime prerequisites (all platforms)

- Docker CLI
- Access to a running Docker-compatible daemon or engine
- GnuPG / `gpg`
- Git
- `gopass`

:::note
A Git remote isn't required for the standard NPS-D customer-machine deployment flow. `git` is still
installed in the validated path because `gopass` defaults to a local Git-backed store, even when no
remote is configured.
:::

### Production prerequisite

If your GPG key is passphrase-protected, you need a working `pinentry` program and `gpg-agent`
configuration so `gopass` can decrypt during `docker login`.

### Validation prerequisites

- Ability to pull and run `registry:2` and `docker:dind`
- Permission to run a privileged container for the Ubuntu DinD validator
- Free local ports `23750`, `5002`, and `5004` if you run the validated login flows on the same
  machine

## Supported Platforms

- Linux amd64
- Linux arm64
- macOS (Apple Silicon and Intel)

:::note
Windows isn't supported by the official `docker-credential-pass` helper. For Windows environments,
use WSL Ubuntu with the Linux binary.
:::

## Common Docker Configuration

On every platform, configure Docker to use the helper by adding the following to the Docker config
file:

```json
{
  "credsStore": "pass"
}
```

Docker will then execute `docker-credential-pass` when storing or retrieving credentials.

This configuration is client-side. It doesn't depend on Docker Desktop and it still applies when
the Docker client talks to a remote engine.

If the Docker config file already exists, replace only the `credsStore` key and keep the
other keys that the machine already uses. Don't leave registry credentials behind under `auths`.

## Credential Store Context

:::warning
This installer sets up GPG keys and the `gopass` credential store in the `HOME` directory of the
user who runs the script. Docker's credential helper (`docker-credential-pass`) resolves credentials
from the `$HOME` of whatever user invokes `docker` at runtime.

This script assumes you run Docker commands as root (for example, via `sudo docker`). Run the
installer accordingly:

```bash
sudo -H bash install.sh   # correct — $HOME resolves to /root
sudo bash install.sh      # WRONG — $HOME stays as the calling user's home
```

If Docker runs as a non-root user (for example, via docker group membership or a dedicated service
account), run this installer as that user instead:

```bash
sudo -u ci-runner -H bash install.sh
```

Mismatched contexts will cause silent credential lookup failures at `docker pull`.
:::

## AWS Credentials Configuration

Pulling NPS-D images requires authentication to the AWS ECR registry. Configure AWS credentials
before running `docker login`.

:::note
The AWS Access Key ID and Secret Access Key for customer deployments are provided by the CS team.
This configuration is performed manually and is independent of the installer and validator scripts
in the repository — those scripts don't interact with AWS or ECR.
:::

**Step 1 –** Install the AWS CLI if not already present:

```bash
sudo apt-get install -y awscli      # Ubuntu / WSL
brew install awscli                  # macOS
```

**Step 2 –** Configure AWS credentials for the operator account:

```bash
sudo aws configure
```

Enter the values when prompted:

```
AWS Access Key ID:     <AWS_ACCESS_KEY_ID>
AWS Secret Access Key: <AWS_SECRET_ACCESS_KEY>
Default region name:   us-west-2
Default output format: <leave blank, press Enter>
```

**Step 3 –** Authenticate Docker to the registry:

For NPS-D production deployments, set the registry variable and log in using the temporary ECR
token:

```bash
export REGISTRY="176947481038.dkr.ecr.us-west-2.amazonaws.com"
export REGISTRY_USER="AWS"

aws ecr get-login-password --region us-west-2 \
  | docker login --username "$REGISTRY_USER" --password-stdin "$REGISTRY"
```

Expected output: `Login Succeeded`

This command uses your AWS credentials to get a temporary ECR token (valid 12 hours) and passes it
directly to `docker login`. `docker-credential-pass` then stores the encrypted token —
`~/.docker/config.json` receives no plain-text credentials.

**Step 4 –** Verify the credential was stored correctly:

```bash
grep -q '"auth"' "$HOME/.docker/config.json" && echo "unexpected inline auth found"
printf '%s' "$REGISTRY" | docker-credential-pass get
```

Expected result:

- no `auth` entry written into Docker config
- helper output that includes `ServerURL`, `Username`, and `Secret`:

```json
{
  "ServerURL": "176947481038.dkr.ecr.us-west-2.amazonaws.com",
  "Username": "AWS",
  "Secret": "<temporary-ecr-token>"
}
```

---

## Recommended NPS-D Customer-Machine Workflow

After the helper is installed and `gopass` is initialized for the operator account, the practical
deployment flow is the same on Ubuntu, WSL Ubuntu, and macOS. This workflow is intentionally local
only — it doesn't require a shared store or any Git remote.

For Ubuntu and WSL Ubuntu, the recommended path is the installer script:

```bash
./scripts/docker-credential-gopass/install-ubuntu.sh \
  --install-prereqs \
  --git-name "NPS-D Engineer" \
  --git-email engineer@example.com \
  --generate-gpg-key \
  --gpg-name "NPS-D Engineer" \
  --gpg-email engineer@example.com \
  --no-gpg-passphrase
```

`--install-prereqs` is optional. When present, the installer adds the Ubuntu packages and the
`gopass` apt repository before installing and configuring the helper. Without it, the installer
assumes the required packages are already present and only wires up the helper, the local `gopass`
store, and the Docker config.

### Step 1: Confirm Docker is configured to use the helper

The active Docker client config for the current user should contain:

```json
{
  "credsStore": "pass"
}
```

Path on Linux, WSL, and macOS: `$HOME/.docker/config.json`

### Step 2: Log in to the private registry used by the customer deployment

Linux, WSL, or macOS:

```bash
export REGISTRY="176947481038.dkr.ecr.us-west-2.amazonaws.com"
export REGISTRY_USER="AWS"

aws ecr get-login-password --region us-west-2 \
  | docker login --username "$REGISTRY_USER" --password-stdin "$REGISTRY"
```

Expected output: `Login Succeeded`

`docker-credential-pass` stores the encrypted temporary ECR token. `~/.docker/config.json`
receives no plain-text credentials.

### Step 3: Verify the login result before deploying NPS-D

```bash
grep -q '"auth"' "$HOME/.docker/config.json" && echo "unexpected inline auth found"
printf '%s' "$REGISTRY" | docker-credential-pass get
```

Expected result:

- no `auth` entry written into Docker config
- helper output that includes `ServerURL`, `Username`, and `Secret`

### Step 4: Run the NPS-D deployment or upgrade

After the registry login is in place, use the existing NPS-D deployment mechanism for that customer
machine.

Docker Compose:

```bash
docker compose pull
docker compose up -d
```

Docker Swarm — keep `--with-registry-auth` on service creation or update commands:

```bash
docker service create --with-registry-auth --name example "$REGISTRY/example/image:tag"
docker service update --with-registry-auth --image "$REGISTRY/example/image:tag" example
```

### Step 5: Log out when the deployment window is complete

```bash
docker logout "$REGISTRY"
```

During logout, Docker asks the helper to delete the stored credential entry.

## Operator Usage Notes

- Docker uses the helper automatically after you configure `credsStore: pass`. Operators
  don't need to invoke it directly during routine deployments.
- Credentials are scoped to the registry hostname. Log in separately for each registry the customer
  environment needs.
- The standard deployment model is local only. One engineer account or one machine gets one local
  encrypted store. You don't need a remote repository.
- `printf '%s' "$REGISTRY" | docker-credential-pass get` is a direct verification command when
  operators need to confirm which credential is stored.
- `docker-credential-pass list` shows which registry entries exist.
- If a customer machine already uses another Docker credential store, switching `credsStore` to
  `pass` changes the active credential backend for that Docker client.
- For customer-machine operators, prefer interactive `docker login` so you enter the token at
  Docker's password prompt instead of placing it in shell history or environment variables.
- If unattended automation is required, only use `--password-stdin` from a secure secret source.
  Don't hardcode the token into the command line or export it in the shell profile.

---

## Ubuntu

### Recommended installer path

Run the installer from the repo root:

```bash
./scripts/docker-credential-gopass/install-ubuntu.sh \
  --install-prereqs \
  --git-name "Your Name" \
  --git-email you@example.com \
  --generate-gpg-key \
  --gpg-name "Your Name" \
  --gpg-email you@example.com \
  --no-gpg-passphrase
```

Use `--gpg-key-id <KEYID>` instead of `--generate-gpg-key ... --no-gpg-passphrase` if the operator
already has a suitable secret key.

Use `--install-prereqs` when the machine still needs Ubuntu-side prerequisites installed. Omit it
when `gpg`, `git`, `gopass`, and Docker are already available.

The installer performs these actions:

- Optionally installs Ubuntu prerequisites and the `gopass` apt repository
- Downloads the official `docker-credential-pass` binary from GitHub releases
- Installs the binary as `docker-credential-pass`
- Creates a symlink from `gopass` to `pass`
- Configures global Git identity for the local `gopass` store
- Initializes a local `gopass` store
- Creates a symlink from the gopass store to `~/.password-store/`
- Configures Docker with `credsStore: pass`
- Removes any existing inline Docker `auths` entries unless `--keep-inline-auths` is specified

### Manual step-by-step path

**Step 1 –** Install prerequisites:

```bash
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg git docker.io python3
```

**Step 2 –** Install `gopass`:

```bash
curl -fsSL https://packages.gopass.pw/repos/gopass/gopass-archive-keyring.gpg \
  | sudo tee /usr/share/keyrings/gopass-archive-keyring.gpg >/dev/null
```

```bash
cat <<'EOF' | sudo tee /etc/apt/sources.list.d/gopass.sources >/dev/null
Types: deb
URIs: https://packages.gopass.pw/repos/gopass
Suites: stable
Architectures: all amd64 arm64 armhf
Components: main
Signed-By: /usr/share/keyrings/gopass-archive-keyring.gpg
EOF
```

```bash
sudo apt-get update
sudo apt-get install -y gopass gopass-archive-keyring
```

**Step 3 –** Download and install the official `docker-credential-pass`:

```bash
ARCH="$(dpkg --print-architecture)"
VERSION="v0.9.5"
curl -fsSL "https://github.com/docker/docker-credential-helpers/releases/download/${VERSION}/docker-credential-pass-${VERSION}.linux-${ARCH}" \
  -o /tmp/docker-credential-pass
```

```bash
mkdir -p "$HOME/.local/bin"
install -m 0755 /tmp/docker-credential-pass "$HOME/.local/bin/docker-credential-pass"
```

If `$HOME/.local/bin` isn't already on `PATH`:

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> "$HOME/.profile"
export PATH="$HOME/.local/bin:$PATH"
```

**Step 4 –** Create the gopass symlinks:

```bash
ln -sf "$(which gopass)" "$HOME/.local/bin/pass"
```

Create the store symlink after gopass initialization in step 8.

**Step 5 –** Configure Git identity for the `gopass` store. This doesn't require any remote
repository:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

**Step 6 –** Create a GPG key:

```bash
cat > "$HOME/gpg-batch" <<'EOF'
Key-Type: RSA
Key-Length: 3072
Subkey-Type: RSA
Subkey-Length: 3072
Name-Real: Your Name
Name-Email: you@example.com
Expire-Date: 0
%no-protection
%commit
EOF

gpg --batch --generate-key "$HOME/gpg-batch"
```

:::note
To use a passphrase-protected key instead, remove `%no-protection` and ensure a working
`pinentry` program is configured before using `docker login`.
:::

**Step 7 –** Get the key ID:

```bash
KEYID="$(gpg --list-secret-keys --with-colons you@example.com | awk -F: '/^sec:/{print $5; exit}')"
echo "$KEYID"
```

**Step 8 –** Initialize `gopass` and create the store symlink:

```bash
gopass --yes init "$KEYID"
```

```bash
ln -sfn "${XDG_DATA_HOME:-$HOME/.local/share}/gopass/stores/root" "$HOME/.password-store"
```

This creates the local encrypted store used by the helper and symlinks it to `~/.password-store/`
where `docker-credential-pass` expects to find it. For the standard NPS-D deployment flow, stop here
and don't add any remote.

**Step 9 –** Configure Docker to use the helper:

```bash
mkdir -p "$HOME/.docker"
cat > "$HOME/.docker/config.json" <<'EOF'
{
  "credsStore": "pass"
}
EOF
```

**Step 10 –** Log in to the NPS-D ECR registry:

```bash
export REGISTRY="176947481038.dkr.ecr.us-west-2.amazonaws.com"
export REGISTRY_USER="AWS"

aws ecr get-login-password --region us-west-2 \
  | docker login --username "$REGISTRY_USER" --password-stdin "$REGISTRY"
```

**Step 11 –** Verify that Docker didn't store inline credentials:

```bash
grep -q '"auth"' "$HOME/.docker/config.json" && echo "unexpected inline auth found"
```

The expected result is no output.

**Step 12 –** Verify helper retrieval:

```bash
printf '%s' "$REGISTRY" | docker-credential-pass get
```

Expected output:

```json
{"ServerURL":"176947481038.dkr.ecr.us-west-2.amazonaws.com","Username":"AWS","Secret":"..."}
```

**Step 13 –** Run the validated Ubuntu test harness from the repo root:

```bash
bash ./scripts/docker-credential-gopass/validate-ubuntu-login.sh
```

This validator uses an Ubuntu 24.04 container plus a Docker-in-Docker sidecar and runs
`install-ubuntu.sh --install-prereqs` as part of the validation flow.

---

## WSL Ubuntu

Use the Ubuntu instructions above inside the WSL distro, with these differences:

- Use the same installer script:

```bash
./scripts/docker-credential-gopass/install-ubuntu.sh \
  --install-prereqs \
  --git-name "Your Name" \
  --git-email you@example.com \
  --gpg-key-id YOUR_KEY_ID
```

- The Docker CLI inside WSL must be able to reach a running daemon, but the helper, `gopass` store,
  and GPG keys all stay inside the Linux distro.
- Write Docker config inside the distro at `$HOME/.docker/config.json`.
- Keep the `gopass` store and GPG key inside the distro filesystem.

If you're using a Docker context or remote engine, `docker login` still uses the helper on the
client side inside WSL.

---

## macOS

Choose the correct target architecture:

- Apple Silicon: `darwin-arm64`
- Intel: `darwin-amd64`

**Step 1 –** Install prerequisites:

```bash
brew install gnupg gopass git
```

If you plan to protect the GPG key with a passphrase, also install and configure a pinentry program:

```bash
brew install pinentry-mac
mkdir -p "$HOME/.gnupg"
chmod 700 "$HOME/.gnupg"
PINENTRY="$(which pinentry-mac)"
echo "pinentry-program ${PINENTRY}" >> "$HOME/.gnupg/gpg-agent.conf"
gpgconf --kill gpg-agent
```

**Step 2 –** Download and install the official `docker-credential-pass`.

Apple Silicon:

```bash
curl -fsSL "https://github.com/docker/docker-credential-helpers/releases/download/v0.9.5/docker-credential-pass-v0.9.5.darwin-arm64" \
  -o /tmp/docker-credential-pass
```

Intel:

```bash
curl -fsSL "https://github.com/docker/docker-credential-helpers/releases/download/v0.9.5/docker-credential-pass-v0.9.5.darwin-amd64" \
  -o /tmp/docker-credential-pass
```

Install:

```bash
mkdir -p "$HOME/.local/bin"
install -m 0755 /tmp/docker-credential-pass "$HOME/.local/bin/docker-credential-pass"
```

If needed:

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> "$HOME/.zprofile"
export PATH="$HOME/.local/bin:$PATH"
```

**Step 3 –** Create the gopass symlinks:

```bash
ln -sf "$(which gopass)" "$HOME/.local/bin/pass"
```

Create the store symlink after gopass initialization in step 6.

**Step 4 –** Configure Git identity for the local `gopass` store. A remote repository isn't
required:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

**Step 5 –** Create a GPG key and initialize `gopass`:

```bash
cat > "$HOME/gpg-batch" <<'EOF'
Key-Type: RSA
Key-Length: 3072
Subkey-Type: RSA
Subkey-Length: 3072
Name-Real: Your Name
Name-Email: you@example.com
Expire-Date: 0
%no-protection
%commit
EOF

gpg --batch --generate-key "$HOME/gpg-batch"
KEYID="$(gpg --list-secret-keys --with-colons you@example.com | awk -F: '/^sec:/{print $5; exit}')"
gopass --yes init "$KEYID"
```

For the standard NPS-D deployment flow, don't add any remote.

**Step 6 –** Create the store symlink:

```bash
ln -sfn "${XDG_DATA_HOME:-$HOME/.local/share}/gopass/stores/root" "$HOME/.password-store"
```

**Step 7 –** Configure Docker:

```bash
mkdir -p "$HOME/.docker"
cat > "$HOME/.docker/config.json" <<'EOF'
{
  "credsStore": "pass"
}
EOF
```

**Step 8 –** Log in to the NPS-D ECR registry and verify:

```bash
export REGISTRY="176947481038.dkr.ecr.us-west-2.amazonaws.com"
export REGISTRY_USER="AWS"

aws ecr get-login-password --region us-west-2 \
  | docker login --username "$REGISTRY_USER" --password-stdin "$REGISTRY"
```

```bash
grep -q '"auth"' "$HOME/.docker/config.json" && echo "unexpected inline auth found"
printf '%s' "$REGISTRY" | docker-credential-pass get
```

**Step 9 –** Run the validated macOS test harness from the repo root:

```bash
bash ./scripts/docker-credential-gopass/validate-macos-login.sh
```

This validator downloads the official `docker-credential-pass` binary, uses a temporary Docker
config and temporary GPG/gopass home, and confirms that the pre-existing default macOS Docker
config is left untouched afterward.

**Step 10 –** Validate a passphrase-protected GPG key path:

```bash
bash ./scripts/docker-credential-gopass/validate-macos-passphrase-login.sh
```

This validator uses a passphrase-protected GPG key in a temporary macOS home, runs `docker login`,
primes the `gpg-agent` cache with loopback pinentry, and confirms that helper retrieval succeeds
without modifying the default host Docker config.

---

## Make Targets

From the repo root:

```bash
make docker-credential-pass-validate-ubuntu
make docker-credential-pass-validate-all
```

---

## References

- [Docker `docker login` documentation](https://docs.docker.com/reference/cli/docker/login/)
- [Docker credential helpers](https://github.com/docker/docker-credential-helpers)
- [`gopass` overview and installation](https://github.com/gopasspw/gopass)
- [`gopass` setup details](https://github.com/gopasspw/gopass/blob/master/docs/setup.md)
