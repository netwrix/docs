---
title: "Netwrix Password Policy Enforcer Policies"
description: "Netwrix Password Policy Enforcer Policies"
sidebar_position: 170
---

# Netwrix Password Policy Enforcer Policies

Netwrix Password Policy Enforcer (PPE) helps secure your network by ensuring users set strong
passwords. You can now enforce PPE policies to Active Directory domain accounts when they change and
reset their passwords in Directory Manager.

:::tip
Remember, You can only use PPE policies in Directory Manager when Password Policy Enforcer 11 is
deployed on your domain controller.
:::


The PPE policies use rules to decide if it should accept or reject a password. You can assign these
policies to users, groups, and containers (Organizational Units). You can also:

- define a different set of rules for passphrases
- define a default password character set
- Select a template based on the requirements of the most popular regulatory frameworks
- provide the name of an executable you want to execute upon change and reset password functions in
  Directory Manager.

Directory Manager also has its Password policy which can be defined at an identity store level and
for a particular security role in that identity store. At one point in time, you can either apply
Directory Manager Password policy or PPE policies. See the
[Directory Manage Password Policy ](/docs/directorymanager/11.1/admincenter/securityrole/policy/password.md)for additional
information.

**In Directory Manager, you can**

- Add a PPE Policy
- Edit a PPE Policy
- Delete a PPE Policy

## Add a PPE Policy

**Follow these steps to add a new policy**

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the **ellipsis** button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **PPE Policies**. The
PPE Policies page is displayed.

Step 4 – Select the domain of the connected identity store from the **Select Domain** box for which
you wish to add a policy. No PPE policies found message is displayed on the page if no policy is
defined so far.

Step 5 – Click the **Add Policy** button.

Step 6 – Password Policy Enforcer contains the out-of-the-box policy templates based on the
requirements of the most popular regulatory frameworks. Select one of the following:

- Policy – Blank policy with no configurations
- CIS Password Policy Guide – Center for Internet Security (CIS) Password Policy Guide – See the
  [CIS Password Policy Guide ](https://www.cisecurity.org/insights/white-papers/cis-password-policy-guide)article
  for additional information.
- CIS Password Policy Guide MFA – Center for Internet Security (CIS) Password Policy Guide MFA – See
  the
  [CIS Password Policy Guide](https://www.cisecurity.org/insights/white-papers/cis-password-policy-guide)
  article for additional information.
- CISA – Cybersecurity Information Sharing Act (CISA)
- CJIS – minal Justice Information Services (CJIS) Security Policy
- CMMC – Cybersecurity Maturity Model Certification (CMMC)
- DFARS – Defense Federal Acquisition Regulation Supplement (DFARS)

After the selection of a policy template, the Add Policy page is displayed.

Step 7 – Click **Add**.  
The policy gets listed on PPE Policies page by the name of the template selected while adding the
policy. See the [Set up policy properties](/docs/directorymanager/11.1/admincenter/identitystore/configure/ppe/policyproperties.md) topic for additional information on
renaming a policy.

## Edit a PPE Policy

Once you add a Password Policy Enforcer policy either on the basis of a blank template or on the
basis of pre-configured template, you can edit the policy as per your needs.

Follow the steps to edit a PPE policy.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the **ellipsis** button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **PPE Policies**. The
PPE Policies page is displayed.

Step 4 – Click the **three vertical dots** icon next to the policy , you want to edit and click
**Edit**.

Step 5 – The Edit Policy page displays, while editing you can

- [Set up Rules](/docs/directorymanager/11.1/admincenter/identitystore/configure/ppe/rules/overview.md)
- [Assign Policies to Users, Groups & Containers](/docs/directorymanager/11.1/admincenter/identitystore/configure/ppe/usersgroups.md)
- [Enable the use of an optional passphrase](/docs/directorymanager/11.1/admincenter/identitystore/configure/ppe/passphrases.md)
- [Set up policy properties](/docs/directorymanager/11.1/admincenter/identitystore/configure/ppe/policyproperties.md)
- [Set up messages for your users](/docs/directorymanager/11.1/admincenter/identitystore/configure/ppe/messages.md)

Step 6 – After setting up the policy, click **Update**.

When users of the specified domain reset or change their password, they can only do that as per the
settings of the applied PPE policy.

## Delete a PPE Policy

If a PPE policy is no longer needed, you can delete it.

**Follow the steps to delete a PPE policy**

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the **ellipsis** button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **PPE Policies**. The
PPE Policies page is displayed.

Step 4 – Click the **three vertical dots** icon against the policy you intend to delete.

Step 5 – Select **Delete.** A warning confirmation is displayed when you delete a policy.

When you delete a policy from Directory Manager it is deleted from the policy OU of Password Policy
Enforcer on the domain the policy will not be available to PPE users as well.
