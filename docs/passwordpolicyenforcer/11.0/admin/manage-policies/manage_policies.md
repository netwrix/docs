---
title: "Manage Policies"
description: "Manage Policies"
sidebar_position: 20
---

# Manage Policies

Netwrix Password Policy Enforcer can enforce up to 256 different password policies. You can assign
policies to users directly, or indirectly through Active Directory security groups and containers
(Organizational Units). See the [Assign Policies to Users & Groups](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/usersgroups.md) topic for
additional information.

Open the Configuration Console:

Click **Start** > **Netwrix Password Policy Enforcer** > **PPE Configuration**
or
Double click the **PPE Configuration** desktop shortcut.

![Configuration Console Dashboard](/images/passwordpolicyenforcer/11.0/evaluation/ppedashboard.webp)

The Configuration Console dashboard shows **No password policies have been set up** when you are
getting started with Password Policy Enforcer. Once you **Add a policy**, the dashboard shows the
defined policies and tool links. In this example, the Default Password Policy and CIS Password
Policy Guide have been added.

![Dashboard with Policies](/images/passwordpolicyenforcer/11.0/administration/ppedashboardpolicies.webp)

The policy management links are all on the Password Policies tile:

- Add a Policy.
- Set Up a Policy (click on existing policy name).
- Test Policy.
- Set Priorities.
- Export.
- Context menu (3 stacked dots) beside each defined policy Make Copy, Make Default/Remove Default,
  Rename and Delete .

## Add a Policy

**Step 1 –** Click **Add policy** from the Configuration Console.

**Step 2 –** Enter a unique policy name. Maximum is 32 characters.

**Step 3 –** Select a Policy template or **None** if you are creating your own.

**Step 4 –** Click **Create policy**.

Alternatively, you can select an existing policy and use the Context menu Make Copy option to start
with the selected policy.

### Policy Templates

Password Policy Enforcer contains Out-of-the-box Policy Templates based on the requirements of the
most popular regulatory frameworks.

- Center for Internet Security (CIS) Password Policy Guide – See the
  [CIS Password Policy Guide](https://www.cisecurity.org/insights/white-papers/cis-password-policy-guide)
  article for additional information.
- Center for Internet Security (CIS) Password Policy Guide MFA – See the
  [CIS Password Policy Guide](https://www.cisecurity.org/insights/white-papers/cis-password-policy-guide)
  article for additional information.
- Cybersecurity Information Sharing Act (CISA)
- Criminal Justice Information Services (CJIS) Security Policy
- Cybersecurity Maturity Model Certification (CMMC)
- Defense Federal Acquisition Regulation Supplement (DFARS)
- Gramm-Leach-Bliley Act (FedRAMP)
- Federal Information Security Management Act (FISMA)
- Health Insurance Portability and Accountability Act (HIPPA) – HIPAA Security Rule requires that
  organizations must implement procedures for creating, changing, and safeguarding passwords.

    - It also recommends training the workforce on ways to safeguard password information and
      establish guidelines to create and change passwords in a periodic cycle.
    - HIPAA doesn’t offer any specific password complexity guidelines. To comply with HIPAA,
      organizations are better off following NIST password guidelines.
    - Most of healthcare institutions use the NIST framework.

- International Organization for Standardization (ISO/IEC) 27002 – See the
  [NIST Special Publication 800-63B](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63b.pdf) article
  for additional information.
- North American Electric Reliability Corporation Critical Infrastructure Protection (NERC CIP) –
  See the
  [CIP-007-6 — Cyber Security – Systems Security Management](https://www.nerc.com/_layouts/15/PrintStandard.aspx?standardnumber=CIP-007-6&title=Cyber%20Security%20-%20System%20Security%20Management&Jurisdiction=United%20States) article
  for additional information.
- National Institute of Standards and Technology (NIST) Special Publication 800-171
- National Institute of Standards and Technology (NIST) Special Publication 800-53
- National Institute of Standards and Technology (NIST) Special Publication 800-63b – See the
  [NIST Special Publication 800-63B](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63b.pdf) article
  for additional information.
- Payment Card Industry Data Security Standard (PCI DSS) – See the
  [PCI Document Library](https://www.pcisecuritystandards.org/document_library?category=pcidss&document=pci_dss) web
  site for additional information.
- Payment Card Industry Data Security Standard (PCI DSS) (version 4)

## Set Up a Policy

Once you add a policy, it needs to be set up or reviewed if you used a template. Click on the policy
name to edit the policy. For each policy:

- Set up [Rules](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/rules/rules.md).
- [Assign Policies to Users & Groups](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/usersgroups.md).
- Enable the use of an optional [Passphrase](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/passphrases.md).
- Set up [Policy Properties](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/policy_properties.md).
- Set up [Messages](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/messages.md) for your users.

## Test Policy

Launches the Test policy tool in a separate window. You can test **By user** and by **Password bulk
test**. See the [Test Policy](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/testpolicy.md) topic for additional information.

## Set Priorities

Set priorities determines which policy to enforce if users have more than one policy. Click **Apply
priorities** to save the new order.

![Set priorities](/images/passwordpolicyenforcer/11.0/administration/policypriority.webp)

### Policy Selection Flowchart

This flowchart shows how Password Policy Enforcer determines a policy for each user. Use the
[Test Policy](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/testpolicy.md) tool to quickly determine which policy Password Policy Enforcer is
enforced for a particular user.

![managing_policies](/images/passwordpolicyenforcer/11.0/administration/managing_policies.webp)

## Export

Exports your policy configuration to **C:\Program Files\Password Policy
Enforcer\Report\report.html**

## Make Copy

Duplicates a policy. This context menu item is also available when you are editing a policy.

**Step 1 –** Click the context menu next to the policy to copy.

**Step 2 –** Select **Make copy** from the context menu.

**Step 3 –** Enter a unique name for the policy.

**Step 4 –** Click **Make copy**.

## Make Default/Remove Default

Assigns the selected policy as the default, or removes the selected policy as the default. These
context menu items are also available when you are editing a policy.

**Step 1 –** Click the context menu next to the policy to set as the default.

**Step 2 –** Select **Make default** from the context menu. The policy is assigned to all domain
users who do not have a specific policy assigned. **Default** is indicated in the policy list. The
context menu changes to **Remove Default**.

:::note
If you assign a different policy as the default you are prompted that an existing default
is set.
:::


## Rename

Renames a policy.

**Step 1 –** Click the context menu next to the policy to rename.

**Step 2 –** Select **Rename** from the context menu.

**Step 3 –** Enter a unique name for the policy.

**Step 4 –** Click **Rename**.

## Delete

Deletes a policy. This context menu item is also available when you are editing a policy.

**Step 1 –** Click the context menu next to the policy to delete.

**Step 2 –** Select **Delete** from the context menu.

**Step 3 –** Click **Delete**. A warning confirmation is displayed if you delete the default policy.

## Exempt Users from a Password Policy

You can exempt users from having to comply with the password policy when a default policy is
specified.

**Step 1 –** Create a new policy for these users.

**Step 2 –** Leave all the rules disabled for this policy.

**Step 3 –** Assign this policy to the users who do not have to comply with any Password Policy
Enforcer rules.

:::warning
If Password Policy Enforcer has only one policy and that policy is also the default
policy, then Password Policy Enforcer enforces the policy for all users.
:::


The Password Policy Client and Password Policy Server communicate over UDP port 1333 by default. If
you need to change the default port, then type the new port number in the **Password Policy Server
Port** text box. Setting the port number to zero stops Password Policy Enforcer from accepting
client requests. If you change the port number, then you must also:

- Restart all the Password Policy Server computers.
- Configure the Password Policy Client to use the new port.
