---
title: "AWS Key Management Service"
description: "AWS Key Management Service"
sidebar_position: 60
---

# AWS Key Management Service

AWS Key Management Service (AWS KMS) is a managed service that makes it easy for you to create and
control the cryptographic keys that are used to protect your data. Organizations using AWS Key
Management Service (AWS KMS) can configure Netwrix Privilege Secure to rotate security Keys. The KMS
key is not used to encrypt the secret key, but will be used to encrypt the key that is used to
encrypt the secret key.

See the
[AWS Key Management Service](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html)
article for additional information.

When creating an AWS KMS protection key for Netwrix Privilege Secure, start by creating a policy in
AWS. There will be multiple configuration steps needed within AWS.

- [Create an AWS Policy](#create-an-aws-policy)
- [Create a User](#create-a-user)
- [Create a Managed Key](#create-a-managed-key)
- [Least Privilege Policy](#least-privilege-policy)

### Create an AWS Policy

Follow the steps to create a policy in AWS.

**Step 1 –** Log into AWS.

**Step 2 –** Navigate to the **IAM** page, and then the **Policies** page.

**Step 3 –** Select **Create Policy**.

![Search for KMS Service](/images/privilegesecure/25.12/accessmanagement/requirements/searchkms.webp)

**Step 4 –** On the Specify permissions page, navigate to the Select a service box and search for
the ‘KMS’ service.

![Select KMS option](/images/privilegesecure/25.12/accessmanagement/requirements/selectkms.webp)

**Step 5 –** Select the **KMS** option.

![Select Decrypt permission checkbox](/images/privilegesecure/25.12/accessmanagement/requirements/selectdecryptioncheckbox.webp)

**Step 6 –** Under the Write dropdown menu, locate and select the **Decrypt permission** checkbox.

![Select Any In This Account](/images/privilegesecure/25.12/accessmanagement/requirements/selectanyinthisaccount.webp)

**Step 7 –** Under the Resources dropdown menu, select the **Any in this account** checkbox.

:::note
This can be limited to a specific key when the key has been created.
:::


![Review and Create the Policy](/images/privilegesecure/25.12/accessmanagement/requirements/reviewandcreate.webp)

**Step 8 –** Enter a name for the policy and a description (optional).

**Step 9 –** Save the policy.

The policy is created.

### Create a User

Follow the steps to create a user in AWS.

**Step 1 –** Navigate to the **IAM** page, and then the **User** page.

**Step 2 –** Select **Create User**.

![Create User Name](/images/privilegesecure/25.12/accessmanagement/requirements/enterusername.webp)

**Step 3 –** On the Specify user details page, enter a user name. Optionally, select the **Provide
user access to the AWS Management Console** checkbox.

![Select Attach Policies Directly](/images/privilegesecure/25.12/accessmanagement/requirements/selectattachpoliciesdirectly.webp)

**Step 4 –** In the Permissions options section, select **Attach policies directly** in the
Permission options.

**Step 5 –** In the Permissions policies section, search for the NPS key policy you previously
created and select the checkbox to the left of the policy. Click **Next**.

![Review and Create the User Cofiguration](/images/privilegesecure/25.12/accessmanagement/requirements/reviewandcreate.webp)

**Step 6 –** On the Review and create window, review the policy configuration and click **Create
now**.

![User Security Credentials Tab](/images/privilegesecure/25.12/accessmanagement/requirements/usersecuritycredentialstab.webp)

**Step 7 –** Once the user has been created, select the user and navigate to the **Security
credentials** tab.

**Step 8 –** Select **Create access key**.

![Select Application Running Outside AWS](/images/privilegesecure/25.12/accessmanagement/requirements/selectapplicationrunningoutsideaws.webp)

**Step 9 –** Once the creation window opens, select the **Application running outside of AWS**
option.

![Set Tag and Create Key](/images/privilegesecure/25.12/accessmanagement/requirements/settagcreatekey.webp)

**Step 10 –** Set an optional description tag if required, and then select **Create access key**.

![Copy Access Key](/images/privilegesecure/25.12/accessmanagement/requirements/copyaccesskey.webp)

**Step 11 –** Once the Key has been created, copy or download the Access key and Secret access key.
These keys will be used by Privilege Secure to access the AWS KMS key encryption and decryption
functionality.

**Step 12 –** Click **Done** when finished.

:::warning
Do not delete the AWS user Access Key without rotating the NPS key first.
:::


The best practice for use of access keys is to rotate them regularly. Follow these steps when
rotating access keys.

**Step 1 –** Create a new access key.

**Step 2 –** Rotate the NPS protect key to use the new access key.

**Step 3 –** Delete old access key.

### Create a Managed Key

Follow the steps to create a managed key in AWS.

**Step 1 –** Navigate to the **Key Management Service** page.

**Step 2 –** Select **Customer Managed Keys**.

![Select Create Key](/images/privilegesecure/25.12/accessmanagement/requirements/selectcreatekey.webp)

**Step 3 –** Select **Create Key**.

![Configure Key Window](/images/privilegesecure/25.12/accessmanagement/requirements/configurekeywindow.webp)

**Step 4 –** For Key Type, Select **Symmetric**. For Key Usage, select **Encrypt and decrypt**.
Click **Next** to continue.

![Add Alias Key Name](/images/privilegesecure/25.12/accessmanagement/requirements/addaliaskeyname.webp)

**Step 5 –** Add an Alias for the key. The Description and Tags are optional. Click **Next** to
continue.

![Add Key Admin](/images/privilegesecure/25.12/accessmanagement/requirements/addkeyadmin.webp)

**Step 6 –** Add a Key Administrator if required.

:::note
The NPS Key user created earlier does not require administrative permissions at this
level.
:::


![Add Key User](/images/privilegesecure/25.12/accessmanagement/requirements/addkeyuser.webp)

**Step 7 –** Select the checkbox for the Privilege Secure key user created earlier as a Key user.
Click **Next** to continue.

**Step 8 –** Review the key configuration and click **Create Key** to continue.

![ANR Key Completed](/images/privilegesecure/25.12/accessmanagement/requirements/arnkeycomplete.webp)

**Step 9 –** Click the **Copy** button from the newly created key, and store the ARN from the
details.

The ARN will be used by Privilege Secure to identify the key used for encryption.

### Least Privilege Policy

The IAM policy created earlier can now be edited to limit to only the required key. Follow the steps
to create a least privilege policy.

**Step 1 –** Navigate to the IAM Policies page and select the KMS policy created in earlier steps.

![AIM Policy Permissions Tab](/images/privilegesecure/25.12/accessmanagement/requirements/aimpolicypermissionstab.webp)

**Step 2 –** Select the **Permissions** tab.

**Step 3 –** Click the **Edit** button.

![Policy Editor Window](/images/privilegesecure/25.12/accessmanagement/requirements/policyeditorwindow.webp)

**Step 4 –** Once the policy editor window opens, switch to the Visual display mode and expand the
KMS item dropdown.

![Expand Resources Item](/images/privilegesecure/25.12/accessmanagement/requirements/expandresourcesitem.webp)

**Step 5 –** Expand the Resources item and remove the selection from **Any in this account**
checkbox.

**Step 6 –** Click **Add Arn** to restrict access.

![Add ARN KMS Policy Key](/images/privilegesecure/25.12/accessmanagement/requirements/addarn.webp)

**Step 7 –** Paste the copied ARN for the NPS key into the bottom box then

**Step 8 –** Click **Add ARNs**.

![Review and Save Policy Changes](/images/privilegesecure/25.12/accessmanagement/requirements/reviewandsavepolicychanges.webp)

**Step 9 –** Review configuration and click **Save changes** to the NPS_KMS_Policy.

The policy will now be limited to only the specified KMS key. The KMS is ready to be roated in
Privilege Secure. See the [AWS KMS Key Rotation](/docs/privilegesecure/25.12/requirements/awskey/awskeyrotation.md) topic for additional
information.
