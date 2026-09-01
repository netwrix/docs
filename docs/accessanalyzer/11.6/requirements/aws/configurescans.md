---
title: "Configure AWS for Scans"
description: "Configure AWS for Scans"
sidebar_position: 20
---

# Configure AWS for Scans

To scan multiple AWS accounts using one account, create a role in each target
account so it can grant the designated scanning account permission to scan the resources it
controls. Complete the following steps using a user with administrative access to each target
account:

**Step 1 –** Create a Managed Policy in each target account to allow access to
account (S3, Org, and IAM).

**Step 2 –** Create a Role in each target account to allow access to listing IAM
users.

**Step 3 –** Create a Managed Policy in the designated scanning account to allow
the service account to assume the configured role in each target account.

**Step 4 –** Add Role to Enterprise Auditor. Add the Role created in the scanning account
to the **1-AWS_OrgScan**, **2-AWS_S3Scan**, and **3-AWS_IAMScan** job query configurations.
See the
[AWS: Login Roles](/docs/accessanalyzer/11.6/admin/datacollector/aws/loginroles.md)
topic for additional information.

After you complete these steps, add the role to the AWS queries within Enterprise Auditor.

## Create a Managed Policy in Each Target Account

Complete the following steps in each target account.

**Step 1 –** Sign into the Identity and Access Management Console (IAM) as an administrator of the
Trusting account.

![Create policy in Identity and Access Management (IAM) Console](/images/accessanalyzer/11.6/requirements/target/config/policies.webp)

**Step 2 –** Browse to the Identity and Access Management (IAM) Console. Navigate to **Policies**
and click **Create policy**.

![JSON tab in the Policy editor](/images/accessanalyzer/11.6/requirements/target/config/jsontabpolicies.webp)

**Step 3 –** Select the **JSON** tab.

**Step 4 –** Paste the following:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "CapabilityIamScan",
            "Effect": "Allow",
            "Action": [
                "iam:GenerateCredentialReport",
                "iam:GenerateServiceLastAccessedDetails",
                "iam:Get*",
                "iam:List*",
                "iam:Simulate*",
        "sts:GetAccessKeyInfo"
            ],
            "Resource": "*"
        },
        {
            "Sid": "CapabilityS3Scan",
            "Effect": "Allow",
            "Action": [
                "s3:Describe*",
                "s3:Get*",
                "s3:HeadBucket",
                "s3:List*"
            ],
            "Resource": "*"
        }
    ]
}
```

**Step 5 –** Click **Review Policy**.

**Step 6 –** Enter a name for the policy in the **Name** box.

![Review policy page](/images/accessanalyzer/11.6/requirements/target/config/reviewpolicy.webp)

**Step 7 –** Click **Create Policy**.

:::note
If the designated scanning account isn't in Root (Master Account), create a second policy
in the Master Account with the following JSON definition:
:::


```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "RequiredCapabilityOrgScan",
            "Effect": "Allow",
            "Action": [
                "iam:GenerateOrganizationsAccessReport",
                "organizations:Describe*",
                "organizations:List*"
            ],
            "Resource": "*"
        }
    ]
}
```

Next, create a role in each target account to allow access to listing IAM users.

## Create a Role in Each Target Account

Complete the following steps in each target account. For this, you will need the
Account ID of the designating scanning account.

:::note
If the scanning account is also a target account, be sure to complete these steps for the
scanning account as well.
:::


**Step 1 –** Sign into the Identity and Access Management Console (IAM) as an administrator of the
target account.

![Create role in Identity and Access Management (IAM) Console](/images/accessanalyzer/11.6/requirements/target/config/roles.webp)

**Step 2 –** Navigate to **Access management** > **Roles** and click **Create role**.

![Create role page Another AWS account option](/images/accessanalyzer/11.6/requirements/target/config/createrole.webp)

**Step 3 –** Select the **Another AWS Account** option and add the Account ID of the scanning
account that Enterprise Auditor will use.

**Step 4 –** Click **Next: Permissions**.

![Add policies to role](/images/accessanalyzer/11.6/requirements/target/config/policiesadd.webp)

**Step 5 –** Add the policy or policies created earlier in this topic to this role.

**Step 6 –** Click **Next: Tags**.

**Step 7 –** Click **Next: Review**.

![Create role Review page](/images/accessanalyzer/11.6/requirements/target/config/reviewrole.webp)

**Step 8 –** Enter a **Role name**.

**Step 9 –** Click **Create Role**.

Next, create a Managed Policy in the designated scanning account to allow the service account to
assume the configured role in each target account.

## Configure the Scanning Account

Create a Managed Policy in the scanning account to allow the user to assume the
roles configured in each target account.

**Step 1 –** Sign into the Identity and Access Management Console (IAM) as an administrator of the
scanning account.

![Create policy in Identity and Access Management (IAM) Console](/images/accessanalyzer/11.6/requirements/target/config/policies.webp)

**Step 2 –** Navigate to **Access Management** > **Policies** and click **Create policy**.

![JSON tab in the Policy editor](/images/accessanalyzer/11.6/requirements/target/config/jsontabaccount.webp)

**Step 3 –** Select the **JSON** tab.

**Step 4 –** Paste the following:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "RequiredCapabilityOrgScan",
            "Effect": "Allow",
            "Action": [
                "iam:GenerateOrganizationsAccessReport",
                "organizations:Describe*",
                "organizations:List*"
            ],
            "Resource": "*"
        },
        {
            "Sid": "RequiredCapabilityMemberAccountAccess",
            "Effect": "Allow",
            "Action": "sts:AssumeRole",
            "Resource": "arn:aws:iam::*:role/ROLENAME"
        }
    ]
}
```

:::note
Replace `ROLENAME` with the name of the role that was created. If the `ROLENAME` is
different in each account, then create a policy for each distinct role name.
:::


**Step 5 –** Click **Review Policy**.

![Review policy page Name field](/images/accessanalyzer/11.6/requirements/target/config/reviewpolicyaccount.webp)

**Step 6 –** Enter a **Policy Name**.

**Step 7 –** Click **Create Policy**.

**Step 8 –** Create a group with the service account user and assign both policies to this group.

**Step 9 –** Under **Access Management** > **Users**, select the service account user.

![Security credentials tab](/images/accessanalyzer/11.6/requirements/target/config/securitycredentials.webp)

**Step 10 –** In the Security credentials tab, click **Create access key**, and note the
Access key ID and Secret access key. You'll need to enter them into Enterprise Auditor.

You can now create the Connection Profile for the AWS Solution. See the
[Amazon Web Services for User Credentials](/docs/accessanalyzer/11.6/admin/settings/connection/create/aws.md)
topic for additional information.
