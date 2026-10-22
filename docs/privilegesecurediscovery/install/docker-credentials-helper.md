---
title: "Set up the Docker credential helper"
description: "Store the registry credential for Netwrix Privilege Secure for Discovery in an encrypted store on Ubuntu instead of in plain text."
sidebar_position: 40
---

By default, `docker login` writes the registry credential to `~/.docker/config.json` as base64-encoded text. This page describes how to install the official Docker `docker-credential-pass` helper with `gopass` as the back end. GNU Privacy Guard (GPG) encrypts the credential, and Docker keeps no readable credential in its configuration file.

Use the helper on each Ubuntu node that pulls Netwrix Privilege Secure for Discovery images from the Netwrix container registry. The setup is optional. You can use the plain `docker login` procedure in [Configure registry access](../requirements/registry-access.md) instead.

## How the helper works

Docker calls the `docker-credential-pass` binary to store and retrieve credentials. That binary calls the `pass` command and reads the store in `~/.password-store`. The `gopass` tool uses the same GPG-encrypted file format as `pass`, so two links connect them:

- A `pass` symbolic link points to the `gopass` binary.
- A `~/.password-store` symbolic link points to the `gopass` store.

## Prerequisites

- Ubuntu Server 24.04 LTS on x86-64, with the packages from [Install host prerequisites](../requirements/host-prerequisites.md), including Docker Engine and the AWS CLI.
- AWS credentials configured as described in [Configure registry access](../requirements/registry-access.md). Netwrix Support provides the credentials.
- Internet access to the Ubuntu and `gopass` package repositories and to GitHub, which hosts the helper binary.

## Choose the user

The deployment script runs as `sudo -E bash secureone.sh`. The `-E` option keeps your home directory, so Docker reads `~/.docker/config.json`, `~/.password-store`, and `~/.gnupg` from your user, not from `/root`. Complete this procedure as the user that runs the script, and use `sudo` only where a command shows it. Don't open a root shell with `sudo -i`, because its home directory is `/root`.

:::warning
If you set up the helper for a different user than the one that runs `secureone.sh`, Docker can't find the credential, and the image pull fails.
:::

## Install the helper

1. Install the prerequisite packages.

   ```bash
   sudo apt-get update
   sudo apt-get install -y ca-certificates curl gnupg git
   ```

2. Add the `gopass` repository signing key.

   ```bash
   curl -fsSL https://packages.gopass.pw/repos/gopass/gopass-archive-keyring.gpg \
     | sudo tee /usr/share/keyrings/gopass-archive-keyring.gpg >/dev/null
   ```

3. Add the `gopass` repository.

   ```bash
   cat <<'EOF' | sudo tee /etc/apt/sources.list.d/gopass.sources >/dev/null
   Types: deb
   URIs: https://packages.gopass.pw/repos/gopass
   Suites: stable
   Architectures: amd64
   Components: main
   Signed-By: /usr/share/keyrings/gopass-archive-keyring.gpg
   EOF
   ```

4. Install `gopass`.

   ```bash
   sudo apt-get update
   sudo apt-get install -y gopass gopass-archive-keyring
   ```

5. Download the `docker-credential-pass` binary and the checksum list from the Docker credential helpers releases.

   ```bash
   cd "$(mktemp -d)"
   VERSION="v0.9.5"
   BASE="https://github.com/docker/docker-credential-helpers/releases/download/${VERSION}"
   curl -fsSLO "${BASE}/docker-credential-pass-${VERSION}.linux-amd64"
   curl -fsSLO "${BASE}/checksums.txt"
   ```

6. Verify the checksum.

   ```bash
   grep "docker-credential-pass-${VERSION}.linux-amd64" checksums.txt | sha256sum -c -
   ```

   The output is `docker-credential-pass-v0.9.5.linux-amd64: OK`.

7. Install the binary in `/usr/local/bin`, which is on the `sudo` secure path.

   ```bash
   sudo install -m 0755 "docker-credential-pass-${VERSION}.linux-amd64" /usr/local/bin/docker-credential-pass
   ```

8. Link `pass` to `gopass`.

   ```bash
   sudo ln -sf "$(which gopass)" /usr/local/bin/pass
   ```

To use a newer helper release, change `VERSION` to the release tag on the [Docker credential helpers releases page](https://github.com/docker/docker-credential-helpers/releases).

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
   A key without a passphrase lets Docker read the credential during unattended deployments. Anyone who can read the `~/.gnupg` directory can decrypt the store, so restrict access to the node. To use a passphrase instead, remove the `%no-protection` line and configure a working `pinentry` program and `gpg-agent` so that `gopass` can decrypt during `docker login`.
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

Set the `credsStore` key in your Docker configuration:

```bash
mkdir -p "$HOME/.docker"
cat > "$HOME/.docker/config.json" <<'EOF'
{
  "credsStore": "pass"
}
EOF
```

If `~/.docker/config.json` already exists, set only the `credsStore` key and keep the other keys. Remove any registry credentials under `auths`, so that no credential remains in plain text.

:::important
Use `credsStore`, not `credHelpers`. The `s1` tool mounts your `config.json` file into its container when the file contains `credHelpers`, and the container has only the Amazon ECR helper. Without `credHelpers`, the `s1` tool uses the AWS credentials in `~/.aws`.
:::

## Sign in to the registry

1. Sign in with the temporary registry token. Use `sudo -E` so that Docker runs with your home directory.

   ```bash
   aws ecr get-login-password --region us-west-2 \
     | sudo -E docker login --username AWS --password-stdin \
       176947481038.dkr.ecr.us-west-2.amazonaws.com
   ```

   The output includes `Login Succeeded`. The token is valid for 12 hours. The helper stores it encrypted, and `~/.docker/config.json` receives no credential.

2. Confirm that Docker stored no inline credential.

   ```bash
   grep -q '"auth"' "$HOME/.docker/config.json" && echo "unexpected inline auth found"
   ```

   The expected result is no output.

3. Confirm that the helper returns the credential.

   ```bash
   printf '%s' "176947481038.dkr.ecr.us-west-2.amazonaws.com" | sudo -E docker-credential-pass get
   ```

   The output is a JSON object with the `ServerURL`, `Username`, and `Secret` keys:

   ```json
   {"ServerURL":"176947481038.dkr.ecr.us-west-2.amazonaws.com","Username":"AWS","Secret":"<token>"}
   ```

   The `sudo -E docker login` command creates the store entry as the root user, so run the helper with `sudo -E`. Without `sudo`, the helper reports `permission denied`.

## Deploy or upgrade

After the sign-in is in place, run the deployment or upgrade. See [Deploy Privilege Secure for Discovery with Docker](./deploy.md). The deployment script deploys the stack with `--with-registry-auth`, so Docker Swarm passes the registry credential to the nodes that pull images.

Because the token expires after 12 hours, repeat the sign-in before each deployment or upgrade.

:::important
On a three-node cluster, the script pulls the images only on the primary node. If a service restarts on another node after the token expires, and that node never pulled the image, the pull can fail. To fix it, sign in again with a fresh token, and then run `deploy` again.
:::

## Manage the stored credential

- Docker uses the helper automatically after you set `credsStore` to `pass`. You don't run the helper during routine deployments.
- Docker scopes credentials to the registry host name. Sign in separately to each registry you use.
- Run `sudo -E docker-credential-pass list` to show the registries that have a stored credential.
- Run `sudo -E docker logout 176947481038.dkr.ecr.us-west-2.amazonaws.com` to delete the stored credential.
- Pipe the token with `--password-stdin`, as in the sign-in command, so that the token doesn't appear in shell history, process lists, or environment variables.
- If the node already uses another Docker credential store, setting `credsStore` to `pass` replaces it for your Docker client.

## References

- [Docker login reference](https://docs.docker.com/reference/cli/docker/login/)
- [Docker credential helpers](https://github.com/docker/docker-credential-helpers)
- [gopass project](https://github.com/gopasspw/gopass)
- [gopass setup details](https://github.com/gopasspw/gopass/blob/master/docs/setup.md)
