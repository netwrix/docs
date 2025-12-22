---
title: "AWS KMS Key Rotation"
description: "AWS KMS Key Rotation"
sidebar_position: 10
---

# AWS KMS Key Rotation

Organizations using AWS Key Management Service (AWS KMS) can configure Netwrix Privilege Secure to
rotate security keys. When creating an AWS KMS protection key for Privilege Secure, configuration
must start by creating a policy in AWS. Once a AWS policy is created, a connection to the AWS policy
can be configured using Privilege Secure Rotate AWS Key tool.

The AWS KMS key is not used to encrypt the secret key, but will be used to encrypt the key that is
used to encrypt the secret key.

## Rotate AWS Key

Follow the steps to rotate a AWS KMS Key.

**Step 1 –** Locate the KeyTools folder in the installation directory.

**C:\Program Files\Stealthbits\PAM\KeyTools**

**Step 2 –** Run the `SbPAM.RotateAwsKey` executable to launch the Rotate AWS Key wizard.

![AWS Connection Settings](/images/privilegesecure/4.1/accessmanagement/requirements/awsconnectionsettings.webp)

**Step 3 –** Enter the **Access key** and **Secret key** created for the AWS user assigned to the
AWS KMS key into the AWS Connection settings fields.

**Step 4 –** Enter the KMS key ARN into the KMS Key field.

**Step 5 –** Select the appropriate AWS region from the dropdown list.

![AWS Connection Settings Complete](/images/privilegesecure/4.1/accessmanagement/requirements/awsconnectionsettingscomplete.webp)

**Step 6 –** When all fields are completed, click the **Rotate** button to update all encrypted
values in the Privilege Secure system.

The tool will take a few minutes to run (especially on larger systems) and the log window will show
the results of the rotation.

:::note
If the AWS KMS key is rotated, there is no need to rotate the NPS key. Encrypted values
will continue to be decrypted and any new encryption will use the updated AWS KMS key. If the AWS
user Access Key is rotated it will be necessary to rotate the NPS key to update it to use the new
Ids. Best practice for use of access keys is to rotate them regularly. **Do not** delete the AWS
user Access Key without rotating the NPS key first.
:::


- **Step 1 –** Create a new access key.
- **Step 2 –** Rotate the NPS protect key to use the new access key.
- **Step 3 –** Delete old access key.

The KMS Key has been rotated.
