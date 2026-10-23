---
title: "AWS Key Management Service"
description: "Create the AWS policy, user, and managed key that let Privilege Secure protect its encryption keys with AWS Key Management Service."
sidebar_position: 60
---

# AWS Key Management Service

AWS Key Management Service (AWS KMS) is a managed service that makes it easy for you to create and
control the cryptographic keys that protect your data. Organizations using AWS Key
Management Service (AWS KMS) can configure Netwrix Privilege Secure to rotate security Keys. The KMS
key isn't used to encrypt the secret key, but encrypts the key that
encrypts the secret key.

See the
[AWS Key Management Service](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html)
article for additional information.

When creating an AWS KMS protection key for Netwrix Privilege Secure, start by creating a policy in
AWS. There will be multiple configuration steps needed within AWS.

- [Create an AWS policy](#create-an-aws-policy)
- [Create a user](#create-a-user)
- [Create a managed key](#create-a-managed-key)
- [Create a least privilege policy](#create-a-least-privilege-policy)

## Create an AWS policy

To create a policy in AWS.

1. Log into AWS.
2. Navigate to the **IAM** page, and then the **Policies** page.
3. Select **Create Policy**.

   ![Search for KMS Service](/images/privilegesecure/25.12/accessmanagement/requirements/searchkms.webp)

4. On the **Specify permissions** page, navigate to the **Select a service** box and search for
   the ‘KMS’ service.

   ![Select KMS option](/images/privilegesecure/25.12/accessmanagement/requirements/selectkms.webp)

5. Select the **KMS** option.

   ![Select Decrypt permission checkbox](/images/privilegesecure/25.12/accessmanagement/requirements/selectdecryptioncheckbox.webp)

6. Under the **Write** dropdown menu, locate, and select the **Decrypt permission** checkbox.

   ![Select Any In This Account](/images/privilegesecure/25.12/accessmanagement/requirements/selectanyinthisaccount.webp)

7. Under the **Resources** dropdown menu, select the **Any in this account** checkbox.

   :::note
   This can be limited to a specific key when the key has been created.
   :::

   ![Review and Create the Policy](/images/privilegesecure/25.12/accessmanagement/requirements/reviewandcreate.webp)

8. Enter a name for the policy and a description (optional).
9. Save the policy.

The policy is created.

## Create a user

To create a user in AWS.

1. Navigate to the **IAM** page, and then the **User** page.
2. Select **Create User**.

   ![Create User Name](/images/privilegesecure/25.12/accessmanagement/requirements/enterusername.webp)

3. On the **Specify user details** page, enter a user name. Optionally, select the **Provide
   user access to the AWS Management Console** checkbox.

   ![Select Attach Policies Directly](/images/privilegesecure/25.12/accessmanagement/requirements/selectattachpoliciesdirectly.webp)

4. In the **Permissions options** section, select **Attach policies directly** in the
   **Permission options**.
5. In the **Permissions policies** section, search for the NPS key policy you previously
   created and select the checkbox to the left of the policy. Click **Next**.

   ![Review and Create the User Configuration](/images/privilegesecure/25.12/accessmanagement/requirements/reviewandcreate.webp)

6. On the **Review and create** window, review the policy configuration and click **Create
   now**.

   ![User Security Credentials Tab](/images/privilegesecure/25.12/accessmanagement/requirements/usersecuritycredentialstab.webp)

7. After the user has been created, select the user and navigate to the **Security
   credentials** tab.
8. Select **Create access key**.

   ![Select Application Running Outside AWS](/images/privilegesecure/25.12/accessmanagement/requirements/selectapplicationrunningoutsideaws.webp)

9. After the creation window opens, select the **Application running outside of AWS**
   option.

   ![Set Tag and Create Key](/images/privilegesecure/25.12/accessmanagement/requirements/settagcreatekey.webp)

10. Set an optional description tag if required, and then select **Create access key**.

    ![Copy Access Key](/images/privilegesecure/25.12/accessmanagement/requirements/copyaccesskey.webp)

11. After the Key has been created, copy, or download the **Access key** and **Secret access key**.
    Privilege Secure uses these keys to access the AWS KMS key encryption and decryption
    functionality.
12. Click **Done** when finished.

    :::warning
    Don't delete the AWS user Access Key without rotating the NPS key first.
    :::

The best practice for use of access keys is to rotate them regularly. Follow these steps when
rotating access keys.

1. Create a new access key.
2. Rotate the NPS protect key to use the new access key.
3. Delete old access key.

## Create a managed key

To create a managed key in AWS.

1. Navigate to the **Key Management Service** page.
2. Select **Customer Managed Keys**.

   ![Select Create Key](/images/privilegesecure/25.12/accessmanagement/requirements/selectcreatekey.webp)

3. Select **Create Key**.

   ![Configure Key Window](/images/privilegesecure/25.12/accessmanagement/requirements/configurekeywindow.webp)

4. For **Key Type**, Select **Symmetric**. For **Key Usage**, select **Encrypt and decrypt**.
   Click **Next** to continue.

   ![Add Alias Key Name](/images/privilegesecure/25.12/accessmanagement/requirements/addaliaskeyname.webp)

5. Add an **Alias** for the key. The Description and Tags are optional. Click **Next** to
   continue.

   ![Add Key Admin](/images/privilegesecure/25.12/accessmanagement/requirements/addkeyadmin.webp)

6. Add a Key Administrator if required.

   :::note
   The NPS Key user created earlier doesn't require administrative permissions at this
   level.
   :::

   ![Add Key User](/images/privilegesecure/25.12/accessmanagement/requirements/addkeyuser.webp)

7. Select the checkbox for the Privilege Secure key user created earlier as a Key user.
   Click **Next** to continue.
8. Review the key configuration and click **Create Key** to continue.

   ![ARN Key Completed](/images/privilegesecure/25.12/accessmanagement/requirements/arnkeycomplete.webp)

9. Click the **Copy** button from the newly created key, and store the ARN from the
   details.

The ARN is used by Privilege Secure to identify the key used for encryption.

## Create a least privilege policy

The IAM policy created earlier can now be edited to limit to only the required key. Follow the steps
to create a least privilege policy.

1. Navigate to the **IAM Policies** page and select the KMS policy created in earlier steps.

   ![AIM Policy Permissions Tab](/images/privilegesecure/25.12/accessmanagement/requirements/aimpolicypermissionstab.webp)

2. Select the **Permissions** tab.
3. Click the **Edit** button.

   ![Policy Editor Window](/images/privilegesecure/25.12/accessmanagement/requirements/policyeditorwindow.webp)

4. After the policy editor window opens, switch to the **Visual** display mode and expand the
   KMS item dropdown.

   ![Expand Resources Item](/images/privilegesecure/25.12/accessmanagement/requirements/expandresourcesitem.webp)

5. Expand the **Resources** item and remove the selection from **Any in this account**
   checkbox.
6. Click **Add Arn** to restrict access.

   ![Add ARN KMS Policy Key](/images/privilegesecure/25.12/accessmanagement/requirements/addarn.webp)

7. Paste the copied ARN for the NPS key into the bottom box, then click **Add ARNs**.

   ![Review and Save Policy Changes](/images/privilegesecure/25.12/accessmanagement/requirements/reviewandsavepolicychanges.webp)

8. Review configuration and click **Save changes** to the NPS_KMS_Policy.

The policy now applies only to the specified KMS key. You can now rotate the KMS in
Privilege Secure. See the [AWS KMS Key Rotation](/docs/privilegesecure/25.12/requirements/awskey/awskeyrotation.md) topic for additional
information.
