---
title: "Manage Password Policy Enforcer Policies in Directory Manager"
description: "Add, edit, and delete Netwrix Password Policy Enforcer policies that apply to Active Directory accounts when users change or reset passwords."
keywords:
  - Password Policy Enforcer
  - PPE policies
  - password policy templates
  - Active Directory password reset
  - Admin Center identity store
sidebar_position: 170
---

# Manage Password Policy Enforcer Policies in Directory Manager

Netwrix Password Policy Enforcer (PPE) helps secure your network by ensuring users set strong
passwords. You can enforce PPE policies on Active Directory domain accounts when they change and
reset their passwords in Directory Manager.

:::tip
You can use PPE policies in Directory Manager only when Password Policy Enforcer 11 is
deployed on your domain controller.
:::


PPE policies use rules to decide whether to accept or reject a password. You can assign these
policies to users, groups, and containers (Organizational Units). You can also:

- Define a different set of rules for passphrases
- Define a default password character set
- Select a template based on the requirements of the most popular regulatory frameworks
- Provide the name of an executable to run on change and reset password functions in
  Directory Manager

Directory Manager also has its Password policy which can be defined at an identity store level and
for a particular security role in that identity store. At one point in time, you can either apply
Directory Manager Password policy or PPE policies. See the
[Directory Manager Password Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/password.md) for additional
information.

**In Directory Manager, you can**

- Add a PPE Policy
- Edit a PPE Policy
- Delete a PPE Policy

## Add a PPE Policy

**To add a new policy:**

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the **ellipsis** button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **PPE Policies**. The
PPE Policies page is displayed.

Step 4 – Select the domain of the connected identity store from the **Select Domain** box for which
you want to add a policy. If no policy is defined yet, the page displays a No PPE policies found message.

Step 5 – Click the **Add Policy** button.

Step 6 – Password Policy Enforcer includes built-in policy templates based on the
requirements of the most popular regulatory frameworks. Select one of the following:

- Policy – Blank policy with no configurations
- CIS Password Policy Guide – Center for Internet Security (CIS) Password Policy Guide – See the
  [CIS Password Policy Guide](https://www.cisecurity.org/insights/white-papers/cis-password-policy-guide) article
  for additional information.
- CIS Password Policy Guide MFA – Center for Internet Security (CIS) Password Policy Guide MFA – See
  the
  [CIS Password Policy Guide](https://www.cisecurity.org/insights/white-papers/cis-password-policy-guide)
  article for additional information.
- CISA – Cybersecurity Information Sharing Act (CISA)
- CJIS – Criminal Justice Information Services (CJIS) Security Policy
- CMMC – Cybersecurity Maturity Model Certification (CMMC)
- DFARS – Defense Federal Acquisition Regulation Supplement (DFARS)

After you select a policy template, the Add Policy page is displayed.

Step 7 – Click **Add**.  
The PPE Policies page lists the policy by the name of the template selected while adding the
policy. See the [Set Up Directory Manager PPE Policy Properties](/docs/directorymanager/11.1/admincenter/identitystore/configure/ppe/policyproperties.md) topic for additional information on
renaming a policy.

## Edit a PPE Policy

After you add a Password Policy Enforcer policy either on the basis of a blank template or on the
basis of pre-configured template, you can edit the policy as per your needs.

To edit a PPE policy.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the **ellipsis** button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **PPE Policies**. The
PPE Policies page is displayed.

Step 4 – Click the **three vertical dots** icon next to the policy you want to edit and click
**Edit**.

Step 5 – On the Edit Policy page, you can:

- [Set Up Password Policy Rules in Directory Manager](/docs/directorymanager/11.1/admincenter/identitystore/configure/ppe/rules/overview.md)
- [Assign Password Policies to Users, Groups, and Containers](/docs/directorymanager/11.1/admincenter/identitystore/configure/ppe/usersgroups.md)
- [Enable Optional Passphrases in a Directory Manager PPE Policy](/docs/directorymanager/11.1/admincenter/identitystore/configure/ppe/passphrases.md)
- [Set Up Directory Manager PPE Policy Properties](/docs/directorymanager/11.1/admincenter/identitystore/configure/ppe/policyproperties.md)
- [Set Up Password Policy Enforcer Messages](/docs/directorymanager/11.1/admincenter/identitystore/configure/ppe/messages.md)

Step 6 – After setting up the policy, click **Update**.

When users of the specified domain reset or change their password, they can only do that as per the
settings of the applied PPE policy.

## Delete a PPE Policy

If a PPE policy is no longer needed, you can delete it.

**To delete a PPE policy**

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the **ellipsis** button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **PPE Policies**. The
PPE Policies page is displayed.

Step 4 – Click the **three vertical dots** icon against the policy you intend to delete.

Step 5 – Select **Delete.** A warning confirmation is displayed.

When you delete a policy from Directory Manager, Directory Manager also deletes it from the policy OU of Password Policy
Enforcer on the domain, so the policy is no longer available to PPE users.
