---
title: "Manage Docker secrets"
description: "Learn which Docker secrets Netwrix Privilege Secure for Discovery uses, why the key.txt encryption key matters, and how to protect it."
sidebar_position: 50
---

Netwrix Privilege Secure for Discovery uses a Docker secret to encrypt sensitive data that it stores, such as the passwords of managed accounts, directory bind passwords, and client secrets. The deployment creates this secret during installation. If you lose the secret, you can't decrypt the stored credentials, even from a valid database backup.

For more information about how Docker handles secrets in swarm mode, see [Manage sensitive data with Docker secrets](https://docs.docker.com/engine/swarm/secrets/).

## Secrets that the deployment uses

| Secret | Created by | Purpose |
|---|---|---|
| `key.txt` | `secureone.sh setup` | The encryption key and salt for stored credentials. The services that read stored credentials, such as `api`, `worker`, `worker-secondary`, `scanner`, `ldapsync`, and `windows-bridge`, mount it at `/run/secrets/key.txt`. |

The `key.txt` secret has the following properties:

- The setup script generates it randomly. It consists of two lines: a random string and a salt.
- It exists only as a Docker Swarm secret. The deployment doesn't keep a copy of it on disk.
- The `teardown` command destroys it, because leaving the swarm deletes the swarm secrets.
- The services need it to decrypt the credentials in the database. A restored database that runs with a different `key.txt` can't decrypt those credentials.

The installer generates the file. Don't edit it, and don't replace the key on a running deployment. A different key signs out every user and leaves every stored credential unreadable. Netwrix doesn't support key rotation, so contact Netwrix Support if you need to change the key.

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
2. Write the key to a file in the root home directory, outside `/secureone`, because `teardown` deletes that directory.

   ```bash
   sudo sh -c 'umask 077; docker exec $(docker ps -q -f name=s1_api) cat /run/secrets/key.txt > /root/key.txt'
   ```

3. Confirm that the file has two lines.

   ```bash
   sudo cat /root/key.txt; echo
   ```

   The second line has no line ending, so the `echo` command keeps the shell prompt on its own line.

4. Move the file to your secure storage location, and then delete it from the host.

   ```bash
   sudo shred -u /root/key.txt
   ```

## Apply the key to a new deployment

The setup script creates the `key.txt` secret itself, and skips this step if a secret with that name already exists. To use an existing key on a cluster, create the secret yourself before the script reaches that step. The primary node setup pauses with a `Press Enter to continue` prompt after it initializes the swarm and prints the join command. Create the secret in a second SSH session while the script waits at that prompt.

The script initializes the swarm again when it starts, which deletes any secret that you create before you run `setup`. A single-node setup has no pause, and `setup` can't apply an existing key to a single node. To use an existing key on a single node, contact Netwrix Support.

1. On the primary node of the new cluster, create a key file that only root can read.

   ```bash
   sudo install -m 600 /dev/null /root/key.txt
   sudo nano -L /root/key.txt
   ```

   Paste the two lines of the key, and then save the file. The `-L` option stops the editor from adding a line ending after the second line.

2. Create the Docker secret from the file.

   ```bash
   sudo docker secret create key.txt /root/key.txt
   ```

3. Delete the file.

   ```bash
   sudo shred -u /root/key.txt
   ```

4. Continue the deployment. See [Deploy Privilege Secure for Discovery with Docker](./deploy.md).

After the installation, verify that the new deployment uses the key. Export the key as described in the previous procedure and compare it with the stored copy, and then delete the exported file.

## Troubleshooting

The following symptoms indicate that the key doesn't match the stored data:

- Stored credentials, such as directory bind passwords or managed account passwords, fail to decrypt after a database restore.
- The services that use stored credentials log decryption errors.

Check the `s1_api` and `s1_worker` logs. See [Inspect and troubleshoot the deployment](../troubleshooting/inspect-and-troubleshoot-the-deployment.md). If you lost the key and no copy exists, contact Netwrix Support.
