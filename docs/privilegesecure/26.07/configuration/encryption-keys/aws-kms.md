---
title: "Protect the encryption key with AWS KMS"
description: "Create the AWS IAM policy, IAM user, and customer managed KMS key that Privilege Secure needs to protect its encryption key with AWS Key Management Service."
sidebar_position: 20
---

# Protect the encryption key with AWS KMS

You can protect the Netwrix Privilege Secure for Access Management (Privilege Secure) encryption key with Amazon Web Services (AWS) Key Management Service (AWS KMS). The KMS key doesn't encrypt the stored secrets directly. It encrypts the key that encrypts them. For background on the encryption key, see [Encryption key management](/docs/privilegesecure/26.07/configuration/encryption-keys/encryption-keys.md). For AWS KMS concepts, see the [AWS Key Management Service documentation](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html). For the AWS console steps, see the AWS documentation for [IAM policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html), [IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html), and [KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html).

This page covers the setup in AWS. After you finish, apply the key in Privilege Secure with the steps in [Rotate the AWS KMS key](/docs/privilegesecure/26.07/configuration/encryption-keys/aws-kms-rotation.md).

## Before you begin

You need:

- An AWS account where you can create Identity and Access Management (IAM) policies, IAM users, and KMS keys.
- Access to the Privilege Secure application server as an administrator.

The following AWS steps use a user with an access key. If the application server runs on an Amazon Elastic Compute Cloud (EC2) instance, you can use an instance profile instead. See [Use an EC2 instance profile](#use-an-ec2-instance-profile).

## Create the IAM policy

1. Sign in to the AWS Management Console.
1. Open **IAM**, and then select **Policies**.
1. Select **Create Policy**.
1. In **Select a service**, search for and select **KMS**.
1. Under **Write**, select the **Decrypt** and **Encrypt** permissions.
1. Under **Resources**, select **Any in this account**. You restrict this to one key after you create the key.
1. Enter a policy name, such as `NPS_KMS_Policy`. A description is optional.
1. Save the policy.

{/* TODO verify: the 26.03 page grants only the Decrypt permission. The code calls the KMS Encrypt operation when it creates or rotates the key and the Decrypt operation when it reads the key. Confirm the minimum permissions. */}

## Create the IAM user

1. In **IAM**, select **Users**, and then select **Create User**.
1. Enter a user name. Providing console access is optional.
1. Select **Attach policies directly**.
1. Search for the policy that you created, and select it.
1. Select **Next**, review the settings, and select **Create now**.
1. Open the user, and select the **Security credentials** tab.
1. Select **Create access key**.
1. Select **Application running outside of AWS**.
1. Enter an optional description tag, and select **Create access key**.
1. Copy or download the **Access key** and the **Secret access key**.
1. Select **Done**.

Store the access key and the secret access key securely. You enter them in Privilege Secure when you apply the key.

:::warning
Don't delete the access key of the AWS user before you update Privilege Secure to use a new key. See [Rotate the AWS KMS key](/docs/privilegesecure/26.07/configuration/encryption-keys/aws-kms-rotation.md#replace-the-aws-access-key).
:::

{/* TODO verify: the AWS console labels in these steps come from the 26.03 page. Confirm them in the current AWS console. */}

## Create the KMS key

1. In the AWS Management Console, open **Key Management Service**.
1. Select **Customer managed keys**, and then select **Create key**.
1. For **Key type**, select **Symmetric**. For **Key usage**, select **Encrypt and decrypt**. Select **Next**.
1. Enter an alias for the key. The description and tags are optional. Select **Next**.
1. Add a key administrator if your organization requires one. The IAM user that you created doesn't need administrative permissions on the key.
1. Under **Key users**, select the IAM user that you created, and select **Next**.
1. Review the key configuration, and select **Create Key**.
1. Open the new key, and copy its Amazon Resource Name (ARN).

The ARN has this form. Privilege Secure uses it to identify the key.

```text
arn:aws:kms:<region>:<account-id>:key/<key-id>
```

## Limit the policy to the key

Restrict the IAM policy so that the user can use only the Privilege Secure key.

1. In **IAM**, select **Policies**, and select the policy that you created.
1. Select the **Permissions** tab, and then select **Edit**.
1. Switch to the visual display mode, and expand the **KMS** item.
1. Expand **Resources**, and clear **Any in this account**.
1. Select **Add Arn**, paste the key ARN, and select **Add ARNs**.
1. Review the policy, and select **Save changes**.

## Use an EC2 instance profile

When the application server runs on an Amazon EC2 instance, the key tool can use the instance profile instead of an access key. Attach the IAM policy to the role of the instance profile, and select **Use EC2 Instance Profile** in the key tool. You then skip the IAM user and access key steps. Add the role, instead of the user, as a key user of the KMS key.

{/* TODO verify: confirm that the EC2 instance profile option is supported for customers and that the policy attaches to the instance role. */}

## Next step

Apply the key in Privilege Secure. See [Rotate the AWS KMS key](/docs/privilegesecure/26.07/configuration/encryption-keys/aws-kms-rotation.md).
