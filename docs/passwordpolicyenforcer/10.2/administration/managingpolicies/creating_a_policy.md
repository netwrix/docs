---
title: "Creating a Policy"
description: "Creating a Policy"
sidebar_position: 10
---

# Creating a Policy

There are no password policies defined when Password Policy Enforcer is first installed. Password
Policy Enforcer accepts all passwords in this state, so users only need to comply with the Windows
password policy rules (if enabled).

Follow the steps to create a new password policy.

**Step 1 –** Click the **Policies** item to display the Policies view.

**Step 2 –** Click **New Policy** in the right pane of the management console.

![managing_policies](/images/passwordpolicyenforcer/10.2/evaluation/managing_policies.webp)

**Step 3 –** Enter a unique policy name in the **New policy name** text box.

**Step 4 –** If the new policy should inherit its default configuration from an existing policy,
choose a policy from the **Copy settings from** drop-down list.

**Step 5 –** Optionally, if the new policy should inherit settings from commonly used frameworks,
select an Policy Template from the drop-down list. For a list of policies see
[ Policy Templates ](#policy-templates).

**Step 6 –** Click **OK**.

**Step 7 –** Modify the default policy properties as needed.

**Step 8 –** Click **OK** to close the Policy Properties page, and then configure the rules for this
policy. See the
[Assigning Policies](/docs/passwordpolicyenforcer/10.2/administration/managingpolicies/assigning_policies.md)
topic for additional information.

## Policy Templates

Password Policy Enforcer v10.1 contains Out-of-the-box Policy Templates based on the requirements of
the most popular regulatory frameworks.

- CIS Password Policy Guide — See the
  [CIS Password Policy Guide](https://www.cisecurity.org/insights/white-papers/cis-password-policy-guide)
  article for additional information.
- CIS Password Policy Guide MFA — See the
  [CIS Password Policy Guide](https://www.cisecurity.org/insights/white-papers/cis-password-policy-guide)
  article for additional information.
- HIPPA — HIPAA Security Rule requires that organizations must implement procedures for creating,
  changing, and safeguarding passwords.

    - It also recommends training the workforce on ways to safeguard password information and
      establish guidelines to create and change passwords in a periodic cycle.
    - HIPAA doesn’t offer any specific password complexity guidelines. To comply with HIPAA,
      organizations are better off following NIST password guidelines.
    - Most of healthcare institutions use the NIST framework.

- NERC CIP — See the
  [CIP-007-6 — Cyber Security – Systems Security Management](https://www.nerc.com/_layouts/15/PrintStandard.aspx?standardnumber=CIP-007-6&title=Cyber%20Security%20-%20System%20Security%20Management&Jurisdiction=United%20States) article
  for additional information.
- NIST 800-63b — See the
  [NIST Special Publication 800-63B](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63b.pdf) article
  for additional information.
- PCI DSS — See the
  [PCI Document Library](https://www.pcisecuritystandards.org/document_library?category=pcidss&document=pci_dss) web
  site for additional information.
- ISO/IEC 27002 — See the
  [NIST Special Publication 800-63B](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63b.pdf) article
  for additional information.
