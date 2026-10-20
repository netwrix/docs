---
title: "Manage Docker secrets"
description: "Learn which Docker secrets Netwrix Privilege Secure for Discovery uses, why the key.txt encryption key matters, and how to protect it."
sidebar_position: 50
---

:::warning[Needs dev input: remove before publishing]
TODO: Provide the supported method to export `key.txt` from a running deployment. The procedure on this page reads `/run/secrets/key.txt` inside the `s1_api` container. Evidence: the only path found in code is a read of that file in a running service container (s1.py `shell` command); no `s1` command or script exports it.

TODO: Confirm that `key.txt` is the only Docker secret that the product creates. Evidence: secureone.sh `create-secret` (line 1611) creates `key.txt`; every stack file declares `key.txt` as an external secret.

TODO: Confirm whether the key can be rotated, and whether rotating it re-encrypts the stored credentials. Evidence: none; no migration found.

TODO: Confirm that creating the secret during the `Press Enter to continue` pause of the cluster primary setup is supported, and state the supported method for a single-node setup, where `secureone.sh setup` runs `docker swarm leave --force` before it creates the secret. Evidence: secureone.sh:1880-1885 and :1954-1958; no pause exists in the single-node path.

TODO: Confirm the exact format that the application expects for `key.txt`: two lines, with no trailing newline after the second line. Evidence: secureone.sh:1619 writes `printf '%s\n%s' secret salt`.
:::

Netwrix Privilege Secure for Discovery uses a Docker secret to encrypt sensitive data that it stores, such as the passwords of managed accounts, directory bind passwords, and client secrets. The deployment creates this secret during installation. If you lose the secret, you can't decrypt the stored credentials, even from a valid database backup.

For more information about how Docker handles secrets in swarm mode, see [Manage sensitive data with Docker secrets](https://docs.docker.com/engine/swarm/secrets/).

## Secrets that the deployment uses

| Secret | Created by | Purpose |
|---|---|---|
| `key.txt` | `secureone.sh setup` | The encryption key and salt for stored credentials. The services that read stored credentials, such as `api`, `worker`, `scanner`, and `ldapsync`, mount it at `/run/secrets/key.txt`. |

The `key.txt` secret has the following properties:

- The setup script generates it randomly. It consists of two lines: a random string and a salt.
- It exists only as a Docker Swarm secret. The deployment doesn't keep a copy of it on disk.
- The `teardown` command destroys it, because leaving the swarm deletes the swarm secrets.
- It is required to decrypt the credentials in the database. A restored database that runs with a different `key.txt` can't decrypt those credentials.

## Protect the key

Treat `key.txt` as a secret that you manage separately from your database backups.

- Store a copy outside the deployment hosts, in a location that has restricted access, such as an enterprise secrets vault.
- Store the copy apart from the database backups, so that one stolen backup set doesn't contain both the data and the key.
- Record which deployment the key belongs to.
- Delete any temporary file that you create while you export the key.

For the full list of what to protect and how to recover a deployment, see [Protect and recover your deployment](../admin/maintenance/protect-and-recover-your-deployment.md).

## Export the key from a running deployment

Export the key when you need to keep a copy, or when a new deployment must use the same key as an existing deployment. Examples include restoring a database backup on a rebuilt deployment, moving from a single node to a cluster, and rebuilding the Docker swarm.

1. Use SSH to sign in to the node that runs the API service. On a cluster, find the node with the `s1 status` command. See [Install the s1 CLI helper utility](./s1-cli-helper.md).
2. Write the key to a file that only root can read.

   ```bash
   sudo sh -c 'umask 077; docker exec $(docker ps -q -f name=s1_api) cat /run/secrets/key.txt > /secureone/data/key.txt'
   ```

3. Confirm that the file has two lines.

   ```bash
   sudo cat /secureone/data/key.txt; echo
   ```

   The second line has no line ending, so the `echo` command keeps the shell prompt on its own line.

4. Move the file to your secure storage location, and then delete it from the host.

   ```bash
   sudo shred -u /secureone/data/key.txt
   ```

## Apply the key to a new deployment

The setup script creates the `key.txt` secret itself, and skips this step if a secret with that name already exists. To use an existing key, create the secret yourself before the script reaches that step. On a cluster, the primary node setup pauses with a `Press Enter to continue` prompt after it initializes the swarm and prints the join command. Create the secret in a second SSH session while the script waits at that prompt. The script initializes the swarm again when it starts, so the script deletes a secret that you create before you run `setup`.

1. On the primary node of the new deployment, create a key file that only root can read.

   ```bash
   sudo install -m 600 /dev/null /secureone/data/key.txt
   sudo nano -L /secureone/data/key.txt
   ```

   Paste the two lines of the key, and then save the file. The `-L` option stops the editor from adding a line ending after the second line.

2. Create the Docker secret from the file.

   ```bash
   sudo docker secret create key.txt /secureone/data/key.txt
   ```

3. Delete the file.

   ```bash
   sudo shred -u /secureone/data/key.txt
   ```

4. Continue the deployment. See [Deploy Privilege Secure for Discovery with Docker](./deploy.md).

After the installation, verify that the new deployment uses the key. Export the key as described in the previous procedure and compare it with the stored copy, and then delete the exported file.

## Troubleshooting

The following symptoms indicate that the key doesn't match the stored data:

- Stored credentials, such as directory bind passwords or managed account passwords, fail to decrypt after a database restore.
- The services that use stored credentials log decryption errors.

Check the `s1_api` and `s1_worker` logs. See [Verify the deployment](./verify-deployment.md). If you lost the key and no copy exists, contact Netwrix Support.
