---
title: "Set up the Docker credential helper"
description: "Store the registry credential for Netwrix Privilege Secure for Discovery in an encrypted store on Ubuntu instead of in plain text."
sidebar_position: 40
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm that the helper procedure works when `secureone.sh` runs as `sudo -E bash secureone.sh ...`, including which HOME the script's `docker login` and `docker stack deploy --with-registry-auth` use. Evidence: secureone.sh:1393 and :2022 run Docker commands as root; no test of the `pass` helper seen.

TODO: Confirm that installing `docker-credential-pass` and the `pass` symlink to `/usr/local/bin` (a directory on the `sudo` secure path) is the supported location, and confirm the helper release to document. Evidence: none; the previous version of this page used `$HOME/.local/bin` and release v0.9.5.

TODO: Confirm whether the quickstart bundle or the `/secureone/` directory ships an installer for the helper. The previous version of this page referred to repository scripts that customers don't receive. Evidence: none in `secureone.tar.gz` listing seen.
:::

By default, `docker login` writes the registry credential to `~/.docker/config.json` as base64-encoded text. This page describes how to install the official Docker `docker-credential-pass` helper with `gopass` as the encrypted back end. GnuPG (GPG) then encrypts the credential, and Docker stores no readable credential in its configuration file.

Use the helper on each Ubuntu node that pulls Netwrix Privilege Secure for Discovery images from the Netwrix container registry. The setup is optional. You can use the plain `docker login` procedure in [Configure registry access](../requirements/registry-access.md) instead.

## How the helper works

Docker calls the `docker-credential-pass` binary to store and retrieve credentials. That binary talks to the `pass` command and reads the store in `~/.password-store/`. The `gopass` tool uses the same GPG-encrypted file format as `pass`, so two links connect them:

- A `pass` symbolic link points to the `gopass` binary.
- A `~/.password-store` symbolic link points to the `gopass` store.

## Prerequisites

- Ubuntu Server 24.04 LTS, with the packages from [Install host prerequisites](../requirements/host-prerequisites.md), including Docker Engine and the AWS CLI.
- AWS credentials configured as described in [Configure registry access](../requirements/registry-access.md). Netwrix Support provides the credentials.
- A deployment that runs `secureone.sh` as root with `sudo -E`.
- Internet access to download packages from the Ubuntu and `gopass` repositories and the helper binary from GitHub.

## Choose the user context

Docker resolves credentials from the home directory of the user who runs `docker`. The deployment script runs Docker commands as root, so complete the following procedure in a root shell. Run the following command to open one:

```bash
sudo -i
```

:::warning
If you set up the helper for a different user than the one that runs `docker pull` or `secureone.sh`, Docker can't find the credential, and the image pull fails. Keep the user context the same for the setup, the registry login, and the deployment.
:::

## Install the helper

1. Install the prerequisite packages.

   ```bash
   apt-get update
   apt-get install -y ca-certificates curl gnupg git
   ```

2. Add the `gopass` repository signing key.

   ```bash
   curl -fsSL https://packages.gopass.pw/repos/gopass/gopass-archive-keyring.gpg \
     | tee /usr/share/keyrings/gopass-archive-keyring.gpg >/dev/null
   ```

3. Add the `gopass` repository.

   ```bash
   cat <<'EOF' | tee /etc/apt/sources.list.d/gopass.sources >/dev/null
   Types: deb
   URIs: https://packages.gopass.pw/repos/gopass
   Suites: stable
   Architectures: all amd64 arm64 armhf
   Components: main
   Signed-By: /usr/share/keyrings/gopass-archive-keyring.gpg
   EOF
   ```

4. Install `gopass`.

   ```bash
   apt-get update
   apt-get install -y gopass gopass-archive-keyring
   ```

5. Download the official `docker-credential-pass` binary and install it.

   ```bash
   ARCH="$(dpkg --print-architecture)"
   VERSION="v0.9.5"
   curl -fsSL "https://github.com/docker/docker-credential-helpers/releases/download/${VERSION}/docker-credential-pass-${VERSION}.linux-${ARCH}" \
     -o /tmp/docker-credential-pass
   install -m 0755 /tmp/docker-credential-pass /usr/local/bin/docker-credential-pass
   ```

6. Link `pass` to `gopass`.

   ```bash
   ln -sf "$(which gopass)" /usr/local/bin/pass
   ```

## Create the encryption key and the store

1. Set the identity that `gopass` uses for its local store. The store needs no remote repository.

   ```bash
   git config --global user.name "<name>"
   git config --global user.email "<name>@example.com"
   ```

2. Create a GPG key without a passphrase.

   ```bash
   cat > "$HOME/gpg-batch" <<'EOF'
   Key-Type: RSA
   Key-Length: 3072
   Subkey-Type: RSA
   Subkey-Length: 3072
   Name-Real: <name>
   Name-Email: <name>@example.com
   Expire-Date: 0
   %no-protection
   %commit
   EOF

   gpg --batch --generate-key "$HOME/gpg-batch"
   rm "$HOME/gpg-batch"
   ```

   :::note
   A key without a passphrase lets Docker retrieve the credential during unattended deployments. Anyone who can read the files in `~/.gnupg` as root can decrypt the store, so restrict access to the node. To use a passphrase-protected key instead, remove the `%no-protection` line and configure a working `pinentry` program and `gpg-agent` so that `gopass` can decrypt during `docker login`.
   :::

3. Get the key ID.

   ```bash
   KEYID="$(gpg --list-secret-keys --with-colons <name>@example.com | awk -F: '/^sec:/{print $5; exit}')"
   echo "$KEYID"
   ```

4. Initialize the `gopass` store.

   ```bash
   gopass --yes init "$KEYID"
   ```

5. Link the store to the location that the helper reads.

   ```bash
   ln -sfn "${XDG_DATA_HOME:-$HOME/.local/share}/gopass/stores/root" "$HOME/.password-store"
   ```

Don't add a Git remote to the store.

## Configure Docker to use the helper

Create the Docker configuration with the `credsStore` setting:

```bash
mkdir -p "$HOME/.docker"
cat > "$HOME/.docker/config.json" <<'EOF'
{
  "credsStore": "pass"
}
EOF
```

If `~/.docker/config.json` already exists, set only the `credsStore` key and keep the other keys. Remove any registry credentials under `auths`, so that no credential remains in plain text.

## Log in to the registry

1. Set the registry variables.

   ```bash
   export REGISTRY="176947481038.dkr.ecr.us-west-2.amazonaws.com"
   export REGISTRY_USER="AWS"
   ```

2. Get a temporary registry token and pass it to `docker login`.

   ```bash
   aws ecr get-login-password --region us-west-2 \
     | docker login --username "$REGISTRY_USER" --password-stdin "$REGISTRY"
   ```

   The output is `Login Succeeded`. The token is valid for 12 hours. The helper stores it encrypted, and `~/.docker/config.json` receives no credential.

3. Confirm that Docker stored no inline credential.

   ```bash
   grep -q '"auth"' "$HOME/.docker/config.json" && echo "unexpected inline auth found"
   ```

   The expected result is no output.

4. Confirm that the helper returns the credential.

   ```bash
   printf '%s' "$REGISTRY" | docker-credential-pass get
   ```

   The output is a JSON object that includes `ServerURL`, `Username`, and `Secret`:

   ```json
   {"ServerURL":"176947481038.dkr.ecr.us-west-2.amazonaws.com","Username":"AWS","Secret":"<token>"}
   ```

## Deploy or upgrade

After the registry login is in place, run the deployment or upgrade. See [Deploy Privilege Secure for Discovery with Docker](./deploy.md). The deployment script deploys the stack with `--with-registry-auth`, so Docker Swarm passes the registry credential to the nodes that pull images.

Because the registry token expires after 12 hours, repeat the login before each deployment or upgrade.

## Manage the stored credential

- Docker uses the helper automatically after you set `credsStore` to `pass`. You don't run the helper during routine deployments.
- Docker scopes credentials to the registry host name. Log in separately to each registry you use.
- Run `docker-credential-pass list` to show the registries that have a stored credential.
- Run `docker logout "$REGISTRY"` to delete the stored credential when the deployment window is complete.
- Prefer an interactive `docker login` so that the token doesn't appear in shell history or environment variables. For unattended automation, use `--password-stdin` from a secure secret source, and don't place the token on the command line or in a shell profile.
- If the node already uses another Docker credential store, setting `credsStore` to `pass` changes the active credential back end for that Docker client.

## References

- [Docker login reference](https://docs.docker.com/reference/cli/docker/login/)
- [Docker credential helpers](https://github.com/docker/docker-credential-helpers)
- [gopass project](https://github.com/gopasspw/gopass)
- [gopass setup details](https://github.com/gopasspw/gopass/blob/master/docs/setup.md)
