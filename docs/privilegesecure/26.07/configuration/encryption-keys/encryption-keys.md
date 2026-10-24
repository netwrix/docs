---
title: "Encryption key management"
description: "Learn how Privilege Secure protects stored secrets with an encryption key, and how to export, import, and rotate the key with SbPAM.RotateKey.exe."
sidebar_position: 10
---

# Encryption key management

Netwrix Privilege Secure for Access Management (Privilege Secure) encrypts the secrets that it stores, such as account passwords. The encryption key is a file on the application server. By default, the Windows machine key of that server protects the key. You can protect it with an Amazon Web Services (AWS) Key Management Service (AWS KMS) key instead. See [Protect the encryption key with AWS KMS](/docs/privilegesecure/26_07/configuration/encryption-keys/aws-kms).

The key files are in `C:\ProgramData\Stealthbits\PAM\Protect`. Include this folder in your backups, and keep each copy with the database backup that it matches. Without the key, the secrets in a database backup can't be decrypted. See [Back up and recover](/docs/privilegesecure/26_07/install/high-availability#back-up-and-recover).

:::warning
Windows machine protection ties the key files to the server. Don't copy the folder to another server. To move the key, export it and import it as described in [Export and import the key](#export-and-import-the-key).
:::

{/* TODO verify: confirm that the default key protection is bound to the machine (Windows DPAPI, machine scope). */}

## The SbPAM.RotateKey.exe tool

`SbPAM.RotateKey.exe` manages the encryption key. It is in the `KeyTools` folder of the installation directory, which is `C:\Program Files\Stealthbits\PAM\KeyTools` by default. Run it from a Command Prompt that you opened as an administrator. The tool stops with the message "You must run as Administrator." otherwise.

| Command | What it does |
|---|---|
| `rotate` | Generates a new encryption key, makes it the current key, and re-encrypts the stored secrets with it. |
| `update-secrets` | Re-encrypts the stored secrets with the current key. |
| `export` | Writes the key files to a password-protected file for import on another server. |
| `import` | Reads the key files from a file that `export` created. |
| `create` | Generates an encryption key without making it the current key. |
| `refreshaws` | Updates the AWS KMS connection settings that a key stores. |

### Options

| Command | Option | Description |
|---|---|---|
| `rotate` | `-f`, `--force` | Rotates without asking for confirmation. |
| `rotate` | `-k`, `--keymodule` | The key module type. The default is `LocalMachine`. Use `AwsKms` for AWS KMS protection. |
| `rotate` | `-a`, `--awsfilename` | A file that holds the AWS KMS settings. Required with `-k AwsKms`. |
| `rotate` | `-i`, `--initialize` | Rotates only if no current key exists. |
| `create` | `-k`, `--keymodule` | The key module type. Required. |
| `create` | `-a`, `--awsfilename` | A file that holds the AWS KMS settings. Required with `-k AwsKms`. |
| `refreshaws` | `-a`, `--awsfilename` | A file that holds the AWS KMS settings. Required. |
| `refreshaws` | `-k`, `--keyid` | The ID of the key file to update. The default is the current key. |
| `export` | `-n`, `--filename` | The file to create. Required. |
| `export` | `-p`, `--password` | The password that protects the file. It must have at least 12 characters. |
| `export` | `-f`, `--force` | Overwrites an existing file. |
| `import` | `-n`, `--filename` | The file that `export` created. Required. |
| `import` | `-p`, `--password` | The password that protects the file. |
| `import` | `-f`, `--force` | Imports without asking for confirmation. |

The `-k` option sets the key module for `rotate` and `create`, and the key ID for `refreshaws`. Without `-f`, `rotate` and `import` ask for a `Y` or `N` answer. The default is no.

{/* TODO verify: confirm whether the -k option accepts the name AwsKms or only the number 6, and whether the AWS KMS settings file is documented for customers. */}

## Export and import the key

Export and import the key to install an additional server that shares the database, such as a high availability secondary or a server that runs a remote Action Service, Host Scan Service, or Scheduler Service. Every server that decrypts secrets needs the same key files.

1. On the server that has the key, open a Command Prompt as an administrator.
1. Run the export command. Replace `keys.exp` with a file name.

   ```bat
   cd "C:\Program Files\Stealthbits\PAM\KeyTools"
   .\SbPAM.RotateKey.exe export -n keys.exp
   ```

1. Copy the password that the tool prints. If you don't supply `-p`, the tool generates a 32-character password and prints it as `Password for file: <password>`.
1. Copy `keys.exp` to the `KeyTools` folder on the other server.
1. On the other server, back up the `C:\ProgramData\Stealthbits\PAM\Protect` folder. The import overwrites key files that have the same names.
1. Run the import command, enter `Y` to confirm, and enter the password when prompted. To skip the confirmation, add `-f`. To supply the password, add `-p <password>`.

   ```bat
   cd "C:\Program Files\Stealthbits\PAM\KeyTools"
   .\SbPAM.RotateKey.exe import -n keys.exp
   ```

1. Delete `keys.exp` and any saved copies of the password from both servers.

The import protects the key files on the other server with that server's Windows machine key.

{/* TODO verify: confirm how export and import handle a key that AWS KMS protects, and whether the other server needs its own AWS access. */}

For the full high availability procedure, see [How to Configure Encryption Keys in Multiple NPS Server Environments](/docs/kb/privilegesecure/high-availability-and-clustering/how-to-configure-encryption-keys-in-multiple-nps-server-environments).

## Rotate the key

Rotate the key to replace it with a new one. The tool re-encrypts the stored secrets, so the run can take several minutes on a large system.

1. Back up the database and the `Protect` folder.
1. Open a Command Prompt as an administrator.
1. Run the rotate command.

   ```bat
   cd "C:\Program Files\Stealthbits\PAM\KeyTools"
   .\SbPAM.RotateKey.exe rotate
   ```

1. Enter `Y` to confirm.

If the key is protected with AWS KMS, don't run `rotate` without the AWS options. Without `-k`, the tool creates a key protected by the Windows machine key. To rotate an AWS KMS-protected key, see [Rotate the AWS KMS key](/docs/privilegesecure/26_07/configuration/encryption-keys/aws-kms-rotation).

The output includes "Key rotation complete." when the key rotation succeeds. The tool sets exit code 2 when it doesn't generate a key and exit code 3 after an unexpected error. It can exit with code 0 after it reports an error for a missing option, so check the output.

After you rotate the key on one server, export it again and import it on every other server that shares the database. A server that has only the old key can't decrypt secrets that the new key protects.

{/* TODO verify: confirm that the other servers need the new key after a rotation, and whether any service must restart after a manual rotation. */}

{/* TODO verify: the upgrade page says that an upgrade rotates the key automatically. The installer runs rotate with -f -i, and -i rotates only when no current key exists. Confirm what an upgrade does to an existing key. */}

## Related topics

- [Protect the encryption key with AWS KMS](/docs/privilegesecure/26_07/configuration/encryption-keys/aws-kms)
- [Rotate the AWS KMS key](/docs/privilegesecure/26_07/configuration/encryption-keys/aws-kms-rotation)
- [Install services on additional servers](/docs/privilegesecure/26_07/install/additional-services)
- [Security hardening checklist](/docs/privilegesecure/26_07/configuration/security-hardening)
