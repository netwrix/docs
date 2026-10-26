---
title: "Rotate the AWS KMS key"
description: "Use the SbPAM.RotateAwsKey tool to apply an AWS KMS key to Privilege Secure, rotate it, or update the AWS access key that the tool stores."
sidebar_position: 30
---

# Rotate the AWS KMS key

The `SbPAM.RotateAwsKey` tool applies an Amazon Web Services (AWS) Key Management Service (AWS KMS) key to the Netwrix Privilege Secure for Access Management (Privilege Secure) encryption key. The KMS key encrypts the key that encrypts the stored secrets. It doesn't encrypt the secrets directly.

## Before you begin

- Create the Identity and Access Management (IAM) policy, IAM user, and KMS key. See [Protect the encryption key with AWS KMS](/docs/privilegesecure/26.07/configuration/encryption-keys/aws-kms.md).
- Have the access key, the secret access key, the KMS key Amazon Resource Name (ARN), and the AWS Region of the key.
- Back up the database and the encryption key files. See [Encryption key management](/docs/privilegesecure/26.07/configuration/encryption-keys/encryption-keys.md).
- Sign in to the application server as an administrator.

## Tool actions

| Option | Effect |
|---|---|
| **Create Key** | Generates a key that AWS KMS protects. It doesn't make the key current, and it doesn't re-encrypt the stored secrets. |
| **Rotate Key** | Generates a key that AWS KMS protects, makes it the current key, and re-encrypts the stored secrets with it. |
| **Update Key** | Replaces the access key and secret key that are stored with the current key. The stored KMS key and Region stay the same, and the stored secrets aren't re-encrypted. **KMS Key** and **Region** aren't available. |

**Use EC2 Instance Profile** fills both key boxes with `<EC2>`. Privilege Secure then uses the credentials of the instance profile and stores no access key.

## Apply or rotate the KMS key

1. Open the `KeyTools` folder in the installation directory. The default is `C:\Program Files\Stealthbits\PAM\KeyTools`.
1. Run `SbPAM.RotateAwsKey` as an administrator. The **AWS Connection Settings** window opens.
1. Enter the **Access Key** and the **Secret Key** of the AWS user. If the server runs on Amazon Elastic Compute Cloud (EC2) and uses an instance profile, select **Use EC2 Instance Profile** instead.
1. In **KMS Key**, enter the ARN of the KMS key.
1. In **Region**, select the AWS Region of the key.
1. Select the action. To apply a key or rotate it, select **Rotate Key**. See [Tool actions](#tool-actions).
1. Select **Run Action**.

The log window shows the progress and the result. The tool takes a few minutes, especially on a large system, because it re-encrypts all stored secrets. When it finishes, the log shows "Protect key Rotate successful".

{/* TODO screenshot: the AWS Connection Settings window with the fields filled in with placeholder values, with the Access Key and Secret Key masked. */}

Other servers that share the database need the new key. See [Export and import the key](/docs/privilegesecure/26.07/configuration/encryption-keys/encryption-keys.md#export-and-import-the-key).

The export reads the key through AWS KMS, so run it on a server that has working AWS access. The import writes the key on the other server protected by that server's Windows machine key, not by AWS KMS, and the other server needs no AWS access to use it.

{/* TODO verify: whether Netwrix supports protecting the key on an additional server with AWS KMS. The tools in the release have no command that re-protects an imported key with AWS KMS, and public sources don't state a supported procedure. */}

## Rotate the KMS key in AWS

If you rotate the KMS key itself in AWS, you don't need to rotate the Privilege Secure key. Privilege Secure continues to decrypt existing values, and new encryption uses the updated KMS key.

## Replace the AWS access key

Rotate the access key of the AWS user regularly. Rotating the access key in AWS doesn't update the key that Privilege Secure stores, so update Privilege Secure before you delete the old access key.

1. In AWS, create a new access key for the IAM user.
1. In the `SbPAM.RotateAwsKey` tool, enter the new **Access Key** and **Secret Key**, and run **Rotate Key** with the KMS key ARN and Region. To change only the stored access key, select **Update Key** instead. **Update Key** doesn't call AWS.
1. Confirm that the log shows success.
1. In AWS, delete the old access key.

:::warning
Don't delete the old AWS access key before you update Privilege Secure. If you delete it first, Privilege Secure can no longer use the KMS key to decrypt its encryption key. Run **Update Key** with the new access key to restore access. **Update Key** changes only the current key file. Older AWS KMS-protected key files from earlier rotations, and keys made with **Create Key**, keep the old access key. Update each one with `SbPAM.RotateKey.exe refreshaws -k <keyId> -a <file>`, or rotate before you delete the old access key.
:::

The access key is stored in the key file on each server, protected by the Windows machine key of that server. After you replace the access key, repeat the update on any other server that has an AWS KMS-protected key file. A server that uses an imported key has a key file protected by DPAPI, which has no AWS access key to update.

## Related topics

- [Encryption key management](/docs/privilegesecure/26.07/configuration/encryption-keys/encryption-keys.md)
- [Protect the encryption key with AWS KMS](/docs/privilegesecure/26.07/configuration/encryption-keys/aws-kms.md)
