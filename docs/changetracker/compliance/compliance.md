---
title: "Compliance"
description: "Compliance"
sidebar_position: 80
---

# Compliance

The **Compliance** tab provides an overview of compliance scores for all devices within any selected
group.

The screen shows the previous 7 compliance report results to track any drift against your selected
hardened build standard and whether scores are improving or worsening.

Ensure Devices are maintaining compliance and track progress over time when implementing a new
Hardened Build Standard. View estate/device compliance by selecting a different Compliance Standard
from the Compliance Report selector then drill into report results by clicking on the Report Score
for any Device.

You can view any individual report by clicking the result score, and export the reports you select
with the checkboxes in a range of formats (PDF, Excel, or CSV), with an option to select more
detailed results.

Review the following for additional information:

- [Overview Tab](/docs/changetracker/compliance/complianceoverviewtab.md)
- [Policy Tab](/docs/changetracker/compliance/compliancepolicy.md)
- [Details Tab ](/docs/changetracker/compliance/compliancedetails.md)

## Comparing results

When you select any two results, either for the same device or for two different devices, the
**Compare Results** button becomes available.

This compares the two reports, which helps you see what caused a score to drop or
identify the configuration differences between two devices.

## Compliance report templates

Netwrix Change Tracker scores devices against a hardened build standard using compliance report
templates. The following tables list the templates available for each compliance standard and the
platforms they support. Template names appear exactly as shown in Change Tracker; the `NNT` prefix
(and the `Netwrix` prefix on some templates) is part of the name.

:::info
Only Center for Internet Security (CIS) benchmark reports ship bundled with the Hub Server
installer (the Change Tracker management server) and are ready to select when you create a
compliance report. Every other report on this page — PCI DSS, HIPAA, SOX, DISA STIG, NIST 800-53,
NIST 800-171, ISO 27001, and NERC CIP-007-6 — is available through the Compliance Benchmarks
download on the
[Customer Portal](https://customer.netwrix.com/my_products.html), which you import into Change
Tracker.

The Customer Portal download also contains newer CIS benchmark templates ahead of the next Change
Tracker release, so you can adopt an updated benchmark without waiting for a product upgrade.
:::

### Add a downloaded template

After you download a template from the Customer Portal, upload it to Change Tracker:

1. Go to **Settings** > **Policy Templates**.
2. Click the **Action** button, then click **Upload Template**.
3. Browse to the downloaded XML file and select it.
4. To replace an existing template that has the same name, select the checkbox that overwrites templates on upload.
5. Click **Upload Template**.

Review the following for additional information:

- [How to Upload a Compliance/Tracking Template to Change Tracker](/docs/kb/changetracker/configuration-and-setup/upload-compliance-template)
- [Adding or Replacing Configuration and Compliance Report Templates](/docs/kb/changetracker/configuration-and-setup/add-replace-compliance-report-templates)
- [Applying a Compliance Template to a Group for Automated Reporting](/docs/kb/changetracker/configuration-and-setup/apply-compliance-template-to-group)

### CIS

Change Tracker's CIS compliance reports map directly to the prescriptive configuration
recommendations in the Center for Internet Security (CIS)
[Benchmarks List](https://www.cisecurity.org/cis-benchmarks). Each Change Tracker compliance report
is [CIS approved](https://www.cisecurity.org/partner/netwrix).

**CIS Version** is the template's own revision number. Netwrix tracks it internally and uses it to
determine whether a newer template should overwrite an existing one during import. It's independent
of the underlying CIS benchmark document version — for example, some template names include the
CIS-published specification version, such as the `(2.0.0)` in "NNT CIS Amazon Web Services
Foundations Benchmark (2.0.0)," which can differ from that template's own CIS Version.

#### Cloud

<table>
  <thead>
    <tr><th>Platform</th><th>Template</th><th>CIS Version</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="1">Amazon Web Services</td><td>NNT CIS Amazon Web Services Foundations Benchmark (2.0.0)</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="1">Google Cloud Platform</td><td>NNT CIS Google Cloud Platform Foundation Benchmark (1.2.0)</td><td>1.2.0</td></tr>
    <tr><td rowspan="1">Microsoft 365</td><td>NNT CIS Microsoft 365 Foundations Benchmark (1.4.0)</td><td>1.4.0.1</td></tr>
    <tr><td rowspan="1">Microsoft Azure</td><td>NNT CIS Microsoft Azure Foundations Benchmark (1.3.0)</td><td>1.0.0.1</td></tr>
  </tbody>
</table>

#### Windows

<table>
  <thead>
    <tr><th>Operating System</th><th>Template</th><th>CIS Version</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="10">Windows Server 2022</td><td>NNT CIS Azure Compute Microsoft Windows Server 2022 Benchmark - Level 1 Domain Controller</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Azure Compute Microsoft Windows Server 2022 Benchmark - Level 1 Member Server</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Azure Compute Microsoft Windows Server 2022 Benchmark - NxGen Security - Level 1 Domain Controller</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Azure Compute Microsoft Windows Server 2022 Benchmark - NxGen Security - Level 1 Member Server</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2022 Benchmark - Level 1 Domain Controller</td><td>5.1.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2022 Benchmark - Level 1 Member Server</td><td>5.1.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2022 Benchmark - Level 2 Domain Controller</td><td>5.1.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2022 Benchmark - Level 2 Member Server</td><td>5.1.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2022 Benchmark - NxGen Security - Domain Controller</td><td>5.1.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2022 Benchmark - NxGen Security - Member Server</td><td>5.1.0</td></tr>
    <tr><td rowspan="4">Windows 10 Enterprise 1511</td><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1511) Benchmark - Level 1</td><td>1.1.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1511) Benchmark - Level 1 + Bitlocker</td><td>1.1.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1511) Benchmark - Level 2</td><td>1.1.0.3</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1511) Benchmark - Level 2 + Bitlocker</td><td>1.1.0.3</td></tr>
    <tr><td rowspan="4">Windows 10 Enterprise 1607</td><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1607) Benchmark - Level 1</td><td>1.2.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1607) Benchmark - Level 1 + Bitlocker</td><td>1.2.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1607) Benchmark - Level 2</td><td>1.2.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1607) Benchmark - Level 2 + Bitlocker</td><td>1.2.0.2</td></tr>
    <tr><td rowspan="4">Windows 10 Enterprise 1703</td><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1703 Benchmark - Level 1</td><td>1.3.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1703) Benchmark - Level 1 + BitLocker</td><td>1.3.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1703) Benchmark - Level 2</td><td>1.3.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1703) Benchmark - Level 2 + BitLocker</td><td>1.3.0.2</td></tr>
    <tr><td rowspan="4">Windows 10 Enterprise 1709</td><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1709) Benchmark - BitLocker</td><td>1.4.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1709) Benchmark - Level 1</td><td>1.4.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1709) Benchmark - Level 2</td><td>1.4.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1709) Benchmark - NxGen Security</td><td>1.4.0.2</td></tr>
    <tr><td rowspan="10">Windows 10 Enterprise 1803</td><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1803) Benchmark - BitLocker</td><td>1.5.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1803) Benchmark - Level 1</td><td>1.5.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1803) Benchmark - Level 1 + BitLocker</td><td>1.5.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1803) Benchmark - Level 1 + BitLocker + NxGen</td><td>1.5.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1803) Benchmark - Level 1 + NxGen Security</td><td>1.5.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1803) Benchmark - Level 2</td><td>1.5.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1803) Benchmark - Level 2 + BitLocker</td><td>1.5.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1803) Benchmark - Level 2 + BitLocker + NxGen</td><td>1.5.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1803) Benchmark - Level 2 + NxGen Security</td><td>1.5.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1803) Benchmark - NxGen Security</td><td>1.5.0.2</td></tr>
    <tr><td rowspan="13">Windows 10 Enterprise 1809</td><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1809) Benchmark - BitLocker</td><td>1.6.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1809) Benchmark - Level 1</td><td>1.6.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1809) Benchmark - Level 1 + BitLocker</td><td>1.6.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1809) Benchmark - Level 1 + BitLocker + NxGen</td><td>1.6.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1809) Benchmark - Level 1 + NxGen</td><td>1.6.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1809) Benchmark - Level 1 + NxGen Security</td><td>1.6.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1809) Benchmark - Level 2</td><td>1.6.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1809) Benchmark - Level 2 + BitLocker</td><td>1.6.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1809) Benchmark - Level 2 + BitLocker + NxGen</td><td>1.6.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1809) Benchmark - Level 2 + NxGen</td><td>1.6.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1809) Benchmark - Level 2 + NxGen Security</td><td>1.6.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1809) Benchmark - NxGen</td><td>1.6.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1809) Benchmark - NxGen Security</td><td>1.6.0.2</td></tr>
    <tr><td rowspan="10">Windows 10 Enterprise 1903</td><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1903) Benchmark - BitLocker</td><td>1.7.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1903) Benchmark - Level 1</td><td>1.7.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1903) Benchmark - Level 1 + BitLocker</td><td>1.7.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1903) Benchmark - Level 1 + BitLocker + NxGen</td><td>1.7.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1903) Benchmark - Level 1 + NxGen</td><td>1.7.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1903) Benchmark - Level 2</td><td>1.7.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1903) Benchmark - Level 2 + BitLocker</td><td>1.7.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1903) Benchmark - Level 2 + BitLocker + NxGen</td><td>1.7.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1903) Benchmark - Level 2 + NxGen</td><td>1.7.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1903) Benchmark - NxGen</td><td>1.7.1.2</td></tr>
    <tr><td rowspan="10">Windows 10 Enterprise 1909</td><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1909) Benchmark - BitLocker</td><td>1.8.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1909) Benchmark - Level 1</td><td>1.8.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1909) Benchmark - Level 1 + BitLocker</td><td>1.8.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1909) Benchmark - Level 1 + BitLocker + NxGen</td><td>1.8.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1909) Benchmark - Level 1 + NxGen</td><td>1.8.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1909) Benchmark - Level 2</td><td>1.8.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1909) Benchmark - Level 2 + BitLocker</td><td>1.8.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1909) Benchmark - Level 2 + BitLocker + NxGen</td><td>1.8.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1909) Benchmark - Level 2 + NxGen</td><td>1.8.1.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 1909) Benchmark - NxGen</td><td>1.8.1.2</td></tr>
    <tr><td rowspan="10">Windows 10 Enterprise 2004</td><td>NNT CIS Microsoft Windows 10 Enterprise (Release 2004) Benchmark - BitLocker</td><td>1.9.1.1</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 2004) Benchmark - Level 1</td><td>1.9.1.1</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 2004) Benchmark - Level 1 + BitLocker</td><td>1.9.1.1</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 2004) Benchmark - Level 1 + BitLocker + NxGen</td><td>1.9.1.1</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 2004) Benchmark - Level 1 + NxGen</td><td>1.9.1.1</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 2004) Benchmark - Level 2</td><td>1.9.1.1</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 2004) Benchmark - Level 2 + BitLocker</td><td>1.9.1.1</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 2004) Benchmark - Level 2 + BitLocker + NxGen</td><td>1.9.1.1</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 2004) Benchmark - Level 2 + NxGen</td><td>1.9.1.1</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 2004) Benchmark - NxGen</td><td>1.9.1.1</td></tr>
    <tr><td rowspan="10">Windows 10 Enterprise 20H2</td><td>NNT CIS Microsoft Windows 10 Enterprise (Release 20H2) Benchmark - BitLocker</td><td>1.10.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 20H2) Benchmark - Level 1</td><td>1.10.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 20H2) Benchmark - Level 1 + BitLocker</td><td>1.10.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 20H2) Benchmark - Level 1 + BitLocker + NxGen</td><td>1.10.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 20H2) Benchmark - Level 1 + NxGen</td><td>1.10.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 20H2) Benchmark - Level 2</td><td>1.10.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 20H2) Benchmark - Level 2 + BitLocker</td><td>1.10.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 20H2) Benchmark - Level 2 + BitLocker + NxGen</td><td>1.10.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 20H2) Benchmark - Level 2 + NxGen</td><td>1.10.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 20H2) Benchmark - NxGen</td><td>1.10.0</td></tr>
    <tr><td rowspan="10">Windows 10 Enterprise 21H1</td><td>NNT CIS Microsoft Windows 10 Enterprise (Release 21H1) Benchmark - BitLocker</td><td>1.11.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 21H1) Benchmark - Level 1</td><td>1.11.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 21H1) Benchmark - Level 1 + BitLocker</td><td>1.11.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 21H1) Benchmark - Level 1 + BitLocker + NxGen</td><td>1.11.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 21H1) Benchmark - Level 1 + NxGen</td><td>1.11.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 21H1) Benchmark - Level 2</td><td>1.11.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 21H1) Benchmark - Level 2 + BitLocker</td><td>1.11.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 21H1) Benchmark - Level 2 + BitLocker + NxGen</td><td>1.11.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 21H1) Benchmark - Level 2 + NxGen</td><td>1.11.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Enterprise (Release 21H1) Benchmark - NxGen</td><td>1.11.0</td></tr>
    <tr><td rowspan="6">Windows 10 Standalone</td><td>NNT CIS Microsoft Windows 10 Standalone Benchmark - Level 1</td><td>2.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Standalone Benchmark - Level 1 + BitLocker</td><td>2.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Standalone Benchmark - Level 1 + BitLocker + NxGen</td><td>2.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Standalone Benchmark - Level 2</td><td>2.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Standalone Benchmark - Level 2 + BitLocker</td><td>2.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 10 Standalone Benchmark - Level 2 + BitLocker + NxGen</td><td>2.0.0</td></tr>
    <tr><td rowspan="10">Windows 11 Enterprise</td><td>NNT CIS Microsoft Windows 11 Enterprise Benchmark - BitLocker</td><td>5.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 11 Enterprise Benchmark - Level 1</td><td>5.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 11 Enterprise Benchmark - Level 1 + BitLocker</td><td>5.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 11 Enterprise Benchmark - Level 1 + BitLocker + NxGen</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 11 Enterprise Benchmark - Level 1 + NxGen</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 11 Enterprise Benchmark - Level 2</td><td>5.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 11 Enterprise Benchmark - Level 2 + BitLocker</td><td>5.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 11 Enterprise Benchmark - Level 2 + BitLocker + NxGen</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 11 Enterprise Benchmark - Level 2 + NxGen</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows 11 Enterprise Benchmark - NxGen</td><td>1.0.0</td></tr>
    <tr><td rowspan="5">Windows 7</td><td>NNT CIS Microsoft Windows 7 Benchmark - BitLocker</td><td>3.2.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 7 Benchmark - Level 1</td><td>3.2.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 7 Benchmark - Level 1 + BitLocker</td><td>3.2.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 7 Benchmark - Level 2</td><td>3.2.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 7 Benchmark - Level 2 + BitLocker</td><td>3.2.0.2</td></tr>
    <tr><td rowspan="4">Windows 8.1 Workstation</td><td>NNT CIS Microsoft Windows 8.1 Workstation Benchmark - Level 1</td><td>2.3.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 8.1 Workstation Benchmark - Level 1 + BitLocker</td><td>2.3.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 8.1 Workstation Benchmark - Level 2</td><td>2.3.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows 8.1 Workstation Benchmark - Level 2 + BitLocker</td><td>2.3.0.2</td></tr>
    <tr><td rowspan="1">Windows Server 2003</td><td>NNT CIS Microsoft Windows Server 2003 Benchmark - Level 1 Member Server</td><td>3.1.0.4</td></tr>
    <tr><td rowspan="4">Windows Server 2008</td><td>NNT CIS Microsoft Windows Server 2008 Benchmark - Level 1 Domain Controller</td><td>3.1.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2008 Benchmark - Level 1 Member Server</td><td>3.1.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2008 Benchmark - Level 2 Domain Controller</td><td>3.1.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2008 Benchmark - Level 2 Member Server</td><td>3.1.0.2</td></tr>
    <tr><td rowspan="4">Windows Server 2008 R2</td><td>NNT CIS Microsoft Windows Server 2008 R2 Benchmark - Level 1 Domain Controller</td><td>3.2.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2008 R2 Benchmark - Level 1 Member Server</td><td>3.2.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2008 R2 Benchmark - Level 2 Domain Controller</td><td>3.2.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2008 R2 Benchmark - Level 2 Member Server</td><td>3.2.0.2</td></tr>
    <tr><td rowspan="4">Windows Server 2012</td><td>NNT CIS Microsoft Windows Server 2012 Benchmark - Level 1 Domain Controller</td><td>2.1.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2012 Benchmark - Level 1 Member Server</td><td>2.1.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2012 Benchmark - Level 2 Domain Controller</td><td>2.1.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2012 Benchmark - Level 2 Member Server</td><td>2.1.0.2</td></tr>
    <tr><td rowspan="4">Windows Server 2012 R2</td><td>NNT CIS Microsoft Windows Server 2012 R2 Benchmark - Level 1 Domain Controller</td><td>2.4.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2012 R2 Benchmark - Level 1 Member Server</td><td>2.4.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2012 R2 Benchmark - Level 2 Domain Controller</td><td>2.4.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2012 R2 Benchmark - Level 2 Member Server</td><td>2.4.0</td></tr>
    <tr><td rowspan="19">Windows Server 2016</td><td>NNT CIS Microsoft Windows Server 2016 Benchmark - Level 1 Domain Controller</td><td>3.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2016 Benchmark - Level 1 Member Server</td><td>3.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2016 Benchmark - Level 2 Domain Controller</td><td>3.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2016 Benchmark - Level 2 Member Server</td><td>3.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2016 Benchmark - NxGen Security - Domain Controller</td><td>3.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2016 Benchmark - NxGen Security - Member Server</td><td>3.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2016 RTM (Release 1607) Benchmark - Level 1 Domain Controller</td><td>1.1.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2016 RTM (Release 1607) Benchmark - Level 1 Member Server</td><td>1.1.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2016 RTM (Release 1607) Benchmark - Level 2 Domain Controller</td><td>1.1.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2016 RTM (Release 1607) Benchmark - Level 2 Member Server</td><td>1.1.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2016 RTM (Release 1607) Benchmark - NxGen Security</td><td>1.1.0.2</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2016 STIG Benchmark - Level 1 Domain Controller</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2016 STIG Benchmark - Level 1 Member Server</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2016 STIG Benchmark - Level 2 Domain Controller</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2016 STIG Benchmark - Level 2 Member Server</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2016 STIG Benchmark - Level 3 - STIG Domain Controller</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2016 STIG Benchmark - Level 3 - STIG Member Server</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2016 STIG Benchmark - NxGen Security - Domain Controller</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2016 STIG Benchmark - NxGen Security - Member Server</td><td>1.0.0</td></tr>
    <tr><td rowspan="6">Windows Server 2019</td><td>NNT CIS Microsoft Windows Server 2019 Benchmark - Level 1 Domain Controller</td><td>3.0.1</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2019 Benchmark - Level 1 Member Server</td><td>3.0.1</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2019 Benchmark - Level 2 Domain Controller</td><td>3.0.1</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2019 Benchmark - Level 2 Member Server</td><td>3.0.1</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2019 Benchmark - NxGen Security - Domain Controller</td><td>3.0.1</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2019 Benchmark - NxGen Security - Member Server</td><td>3.0.1</td></tr>
    <tr><td rowspan="6">Windows Server 2025</td><td>NNT CIS Microsoft Windows Server 2025 Benchmark - Level 1 Domain Controller</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2025 Benchmark - Level 1 Member Server</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2025 Benchmark - Level 2 Domain Controller</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2025 Benchmark - Level 2 Member Server</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2025 Benchmark - NxGen Security - Domain Controller</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Windows Server 2025 Benchmark - NxGen Security - Member Server</td><td>1.0.0</td></tr>
    <tr><td rowspan="1">Windows XP</td><td>NNT CIS Microsoft Windows XP Benchmark</td><td>3.1.0.4</td></tr>
  </tbody>
</table>

#### Linux

<table>
  <thead>
    <tr><th>Operating System</th><th>Template</th><th>CIS Version</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="2">Amazon Linux 2</td><td>NNT CIS Amazon Linux 2 Benchmark - Level 1</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Amazon Linux 2 Benchmark - Level 2</td><td>1.0.0</td></tr>
    <tr><td rowspan="2">Amazon Linux Server 2023</td><td>NNT CIS Amazon Linux 2023 Server Benchmark - Level 1</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Amazon Linux 2023 Server Benchmark - Level 2</td><td>1.0.0.1</td></tr>
    <tr><td rowspan="2">CentOS Linux Server 6</td><td>NNT CIS CentOS Linux 6 Server Benchmark - Level 1</td><td>2.0.2.2</td></tr>
    <tr><td>NNT CIS CentOS Linux 6 Server Benchmark - Level 2</td><td>2.0.2.2</td></tr>
    <tr><td rowspan="2">CentOS Linux Workstation 6</td><td>NNT CIS CentOS Linux 6 Workstation Benchmark - Level 1</td><td>2.0.2.2</td></tr>
    <tr><td>NNT CIS CentOS Linux 6 Workstation Benchmark - Level 2</td><td>2.0.2.2</td></tr>
    <tr><td rowspan="2">CentOS Linux Server 7</td><td>NNT CIS CentOS Linux 7 Server Benchmark - Level 1</td><td>2.2.0.2</td></tr>
    <tr><td>NNT CIS CentOS Linux 7 Server Benchmark - Level 2</td><td>2.2.0.2</td></tr>
    <tr><td rowspan="2">CentOS Linux Workstation 7</td><td>NNT CIS CentOS Linux 7 Workstation Benchmark - Level 1</td><td>2.2.0.2</td></tr>
    <tr><td>NNT CIS CentOS Linux 7 Workstation Benchmark - Level 2</td><td>2.2.0.2</td></tr>
    <tr><td rowspan="2">CentOS Linux Server 8</td><td>NNT CIS CentOS Linux 8 Server Benchmark - Level 1</td><td>1.0.0.4</td></tr>
    <tr><td>NNT CIS CentOS Linux 8 Server Benchmark - Level 2</td><td>1.0.0.4</td></tr>
    <tr><td rowspan="2">CentOS Linux Workstation 8</td><td>NNT CIS CentOS Linux 8 Workstation Benchmark - Level 1</td><td>1.0.0.4</td></tr>
    <tr><td>NNT CIS CentOS Linux 8 Workstation Benchmark - Level 2</td><td>1.0.0.4</td></tr>
    <tr><td rowspan="2">Debian Linux Server 10</td><td>NNT CIS Debian Linux 10 Server Benchmark - Level 1</td><td>1.0.0.2</td></tr>
    <tr><td>NNT CIS Debian Linux 10 Server Benchmark - Level 2</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="2">Debian Linux Workstation 10</td><td>NNT CIS Debian Linux 10 Workstation Benchmark - Level 1</td><td>1.0.0.2</td></tr>
    <tr><td>NNT CIS Debian Linux 10 Workstation Benchmark - Level 2</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="2">Debian Linux 8</td><td>NNT CIS Debian Linux 8 Benchmark - Level 1</td><td>1.0.0.3</td></tr>
    <tr><td>NNT CIS Debian Linux 8 Benchmark - Level 2</td><td>1.0.0.3</td></tr>
    <tr><td rowspan="2">Debian Linux Server 8</td><td>NNT CIS Debian Linux 8 Server Benchmark - Level 1</td><td>2.0.1.2</td></tr>
    <tr><td>NNT CIS Debian Linux 8 Server Benchmark - Level 2</td><td>2.0.1.2</td></tr>
    <tr><td rowspan="2">Debian Linux Workstation 8</td><td>NNT CIS Debian Linux 8 Workstation Benchmark - Level 1</td><td>2.0.1.2</td></tr>
    <tr><td>NNT CIS Debian Linux 8 Workstation Benchmark - Level 2</td><td>2.0.1.2</td></tr>
    <tr><td rowspan="2">Debian Linux Server 9</td><td>NNT CIS Debian Linux 9 Server Benchmark - Level 1</td><td>1.0.1.2</td></tr>
    <tr><td>NNT CIS Debian Linux 9 Server Benchmark - Level 2</td><td>1.0.1.2</td></tr>
    <tr><td rowspan="2">Debian Linux Workstation 9</td><td>NNT CIS Debian Linux 9 Workstation Benchmark - Level 1</td><td>1.0.1.2</td></tr>
    <tr><td>NNT CIS Debian Linux 9 Workstation Benchmark - Level 2</td><td>1.0.1.2</td></tr>
    <tr><td rowspan="2">Oracle Linux Server 6</td><td>NNT CIS Oracle Linux 6 Server Benchmark - Level 1</td><td>1.0.0.2</td></tr>
    <tr><td>NNT CIS Oracle Linux 6 Server Benchmark - Level 2</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="2">Oracle Linux Workstation 6</td><td>NNT CIS Oracle Linux 6 Workstation Benchmark - Level 1</td><td>1.0.0.2</td></tr>
    <tr><td>NNT CIS Oracle Linux 6 Workstation Benchmark - Level 2</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="2">Oracle Linux Server 7</td><td>NNT CIS Oracle Linux 7 Server Benchmark - Level 1</td><td>2.0.0.2</td></tr>
    <tr><td>NNT CIS Oracle Linux 7 Server Benchmark - Level 2</td><td>2.0.0.2</td></tr>
    <tr><td rowspan="2">Oracle Linux Workstation 7</td><td>NNT CIS Oracle Linux 7 Workstation Benchmark - Level 1</td><td>2.0.0.2</td></tr>
    <tr><td>NNT CIS Oracle Linux 7 Workstation Benchmark - Level 2</td><td>2.0.0.2</td></tr>
    <tr><td rowspan="2">Oracle Linux Server 8</td><td>NNT CIS Oracle Linux 8 Server Benchmark - Level 1</td><td>3.0.0</td></tr>
    <tr><td>NNT CIS Oracle Linux 8 Server Benchmark - Level 2</td><td>3.0.0</td></tr>
    <tr><td rowspan="2">Oracle Linux Workstation 8</td><td>NNT CIS Oracle Linux 8 Workstation Benchmark - Level 1</td><td>3.0.0</td></tr>
    <tr><td>NNT CIS Oracle Linux 8 Workstation Benchmark - Level 2</td><td>3.0.0</td></tr>
    <tr><td rowspan="2">Oracle Solaris 10</td><td>NNT CIS Oracle Solaris 10 Benchmark - Level 1</td><td>5.1.0.5</td></tr>
    <tr><td>NNT CIS Oracle Solaris 10 Benchmark - Level 2</td><td>5.1.0.5</td></tr>
    <tr><td rowspan="2">Oracle Solaris 11</td><td>NNT CIS Oracle Solaris 11 Benchmark - Level 1</td><td>1.1.0.5</td></tr>
    <tr><td>NNT CIS Oracle Solaris 11 Benchmark - Level 2</td><td>1.1.0.5</td></tr>
    <tr><td rowspan="2">Red Hat Enterprise Linux Server 10</td><td>NNT CIS Red Hat Enterprise Linux 10 Server Benchmark - Level 1</td><td>1.0.1</td></tr>
    <tr><td>NNT CIS Red Hat Enterprise Linux 10 Server Benchmark - Level 2</td><td>1.0.1</td></tr>
    <tr><td rowspan="2">Red Hat Enterprise Linux Workstation 10</td><td>NNT CIS Red Hat Enterprise Linux 10 Workstation Benchmark - Level 1</td><td>1.0.1</td></tr>
    <tr><td>NNT CIS Red Hat Enterprise Linux 10 Workstation Benchmark - Level 2</td><td>1.0.1</td></tr>
    <tr><td rowspan="2">Red Hat Enterprise Linux 5</td><td>NNT CIS Red Hat Enterprise Linux 5 Benchmark - Level 1</td><td>2.2.0.2</td></tr>
    <tr><td>NNT CIS Red Hat Enterprise Linux 5 Benchmark - Level 2</td><td>2.2.0.2</td></tr>
    <tr><td rowspan="2">Red Hat Enterprise Linux Server 6</td><td>NNT CIS Red Hat Enterprise Linux 6 Server Benchmark - Level 1</td><td>2.0.2.2</td></tr>
    <tr><td>NNT CIS Red Hat Enterprise Linux 6 Server Benchmark - Level 2</td><td>2.0.2.2</td></tr>
    <tr><td rowspan="2">Red Hat Enterprise Linux Workstation 6</td><td>NNT CIS Red Hat Enterprise Linux 6 Workstation Benchmark - Level 1</td><td>2.0.2.2</td></tr>
    <tr><td>NNT CIS Red Hat Enterprise Linux 6 Workstation Benchmark - Level 2</td><td>2.0.2.2</td></tr>
    <tr><td rowspan="2">Red Hat Enterprise Linux Server 7</td><td>NNT CIS Red Hat Enterprise Linux 7 Server Benchmark - Level 1</td><td>2.2.0.3</td></tr>
    <tr><td>NNT CIS Red Hat Enterprise Linux 7 Server Benchmark - Level 2</td><td>2.2.0.3</td></tr>
    <tr><td rowspan="2">Red Hat Enterprise Linux Workstation 7</td><td>NNT CIS Red Hat Enterprise Linux 7 Workstation Benchmark - Level 1</td><td>2.2.0.3</td></tr>
    <tr><td>NNT CIS Red Hat Enterprise Linux 7 Workstation Benchmark - Level 2</td><td>2.2.0.3</td></tr>
    <tr><td rowspan="2">Red Hat Enterprise Linux Server 8</td><td>NNT CIS Red Hat Enterprise Linux 8 Server Benchmark - Level 1</td><td>1.0.0.2</td></tr>
    <tr><td>NNT CIS Red Hat Enterprise Linux 8 Server Benchmark - Level 2</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="2">Red Hat Enterprise Linux Workstation 8</td><td>NNT CIS Red Hat Enterprise Linux 8 Workstation Benchmark - Level 1</td><td>1.0.0.2</td></tr>
    <tr><td>NNT CIS Red Hat Enterprise Linux 8 Workstation Benchmark - Level 2</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="2">Red Hat Enterprise Linux Server 9</td><td>NNT CIS Red Hat Enterprise Linux 9 Server Benchmark - Level 1</td><td>2.0.0</td></tr>
    <tr><td>NNT CIS Red Hat Enterprise Linux 9 Server Benchmark - Level 2</td><td>2.0.0</td></tr>
    <tr><td rowspan="2">Red Hat Enterprise Linux Workstation 9</td><td>NNT CIS Red Hat Enterprise Linux 9 Workstation Benchmark - Level 1</td><td>2.0.0</td></tr>
    <tr><td>NNT CIS Red Hat Enterprise Linux 9 Workstation Benchmark - Level 2</td><td>2.0.0</td></tr>
    <tr><td rowspan="2">Rocky Linux Server 8</td><td>NNT CIS Rocky Linux 8 Server Benchmark - Level 1</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Rocky Linux 8 Server Benchmark - Level 2</td><td>1.0.0</td></tr>
    <tr><td rowspan="2">Rocky Linux Workstation 8</td><td>NNT CIS Rocky Linux 8 Workstation Benchmark - Level 1</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Rocky Linux 8 Workstation Benchmark - Level 2</td><td>1.0.0</td></tr>
    <tr><td rowspan="2">SUSE Linux Enterprise Server 12</td><td>NNT CIS SUSE Linux Enterprise 12 Server Benchmark - Level 1</td><td>2.0.0.3</td></tr>
    <tr><td>NNT CIS SUSE Linux Enterprise 12 Server Benchmark - Level 2</td><td>2.0.0.3</td></tr>
    <tr><td rowspan="2">SUSE Linux Enterprise Workstation 12</td><td>NNT CIS SUSE Linux Enterprise 12 Workstation Benchmark - Level 1</td><td>2.0.0.3</td></tr>
    <tr><td>NNT CIS SUSE Linux Enterprise 12 Workstation Benchmark - Level 2</td><td>2.0.0.3</td></tr>
    <tr><td rowspan="2">SUSE Linux Enterprise Server 15</td><td>NNT CIS SUSE Linux Enterprise Linux 15 Server Benchmark - Level 1</td><td>2.0.1</td></tr>
    <tr><td>NNT CIS SUSE Linux Enterprise Linux 15 Server Benchmark - Level 2</td><td>2.0.1</td></tr>
    <tr><td rowspan="2">SUSE Linux Enterprise Workstation 15</td><td>NNT CIS SUSE Linux Enterprise Linux 15 Workstation Benchmark - Level 1</td><td>2.0.1</td></tr>
    <tr><td>NNT CIS SUSE Linux Enterprise Linux 15 Workstation Benchmark - Level 2</td><td>2.0.1</td></tr>
    <tr><td rowspan="2">SUSE Linux Enterprise Server 11</td><td>NNT CIS SUSE Linux Enterprise Server 11 Benchmark - Level 1</td><td>1.0.0.2</td></tr>
    <tr><td>NNT CIS SUSE Linux Enterprise Server 11 Benchmark - Level 2</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="2">Ubuntu 12.04</td><td>NNT CIS Ubuntu 12.04 - Level 1</td><td>1.0.0.2</td></tr>
    <tr><td>NNT CIS Ubuntu 12.04 - Level 2</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="2">Ubuntu Linux LTS Server 14.04</td><td>NNT CIS Ubuntu Linux 14.04 LTS Server Benchmark - Level 1</td><td>2.0.0.2</td></tr>
    <tr><td>NNT CIS Ubuntu Linux 14.04 LTS Server Benchmark - Level 2</td><td>2.0.0.2</td></tr>
    <tr><td rowspan="2">Ubuntu Linux LTS Workstation 14.04</td><td>NNT CIS Ubuntu Linux 14.04 LTS Workstation Benchmark - Level 1</td><td>2.0.0.2</td></tr>
    <tr><td>NNT CIS Ubuntu Linux 14.04 LTS Workstation Benchmark - Level 2</td><td>2.0.0.2</td></tr>
    <tr><td rowspan="2">Ubuntu Linux LTS Server 16.04</td><td>NNT CIS Ubuntu Linux 16.04 LTS Server Benchmark - Level 1</td><td>1.0.0.2</td></tr>
    <tr><td>NNT CIS Ubuntu Linux 16.04 LTS Server Benchmark - Level 2</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="2">Ubuntu Linux LTS Workstation 16.04</td><td>NNT CIS Ubuntu Linux 16.04 LTS Workstation Benchmark - Level 1</td><td>1.0.0.2</td></tr>
    <tr><td>NNT CIS Ubuntu Linux 16.04 LTS Workstation Benchmark - Level 2</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="2">Ubuntu Linux LTS Server 18.04</td><td>NNT CIS Ubuntu Linux 18.04 LTS  Server Benchmark - Level 1</td><td>1.0.0.3</td></tr>
    <tr><td>NNT CIS Ubuntu Linux 18.04 LTS  Server Benchmark - Level 2</td><td>1.0.0.3</td></tr>
    <tr><td rowspan="2">Ubuntu Linux LTS Workstation 18.04</td><td>NNT CIS Ubuntu Linux 18.04 LTS  Workstation Benchmark - Level 1</td><td>1.0.0.3</td></tr>
    <tr><td>NNT CIS Ubuntu Linux 18.04 LTS  Workstation Benchmark - Level 2</td><td>1.0.0.3</td></tr>
    <tr><td rowspan="2">Ubuntu Linux LTS Server 20.04</td><td>NNT CIS Ubuntu Linux 20.04 LTS  Server Benchmark - Level 1</td><td>1.1.0</td></tr>
    <tr><td>NNT CIS Ubuntu Linux 20.04 LTS  Server Benchmark - Level 2</td><td>1.1.0</td></tr>
    <tr><td rowspan="2">Ubuntu Linux LTS Workstation 20.04</td><td>NNT CIS Ubuntu Linux 20.04 LTS Workstation Benchmark - Level 1</td><td>1.1.0</td></tr>
    <tr><td>NNT CIS Ubuntu Linux 20.04 LTS Workstation Benchmark - Level 2</td><td>1.1.0</td></tr>
    <tr><td rowspan="2">Ubuntu Linux LTS Server 22.04</td><td>NNT CIS Ubuntu Linux 22.04 LTS Server Benchmark - Level 1</td><td>3.0.0</td></tr>
    <tr><td>NNT CIS Ubuntu Linux 22.04 LTS Server Benchmark - Level 2</td><td>3.0.0</td></tr>
    <tr><td rowspan="2">Ubuntu Linux LTS Workstation 22.04</td><td>NNT CIS Ubuntu Linux 22.04 LTS Workstation Benchmark - Level 1</td><td>3.0.0</td></tr>
    <tr><td>NNT CIS Ubuntu Linux 22.04 LTS Workstation Benchmark - Level 2</td><td>3.0.0</td></tr>
    <tr><td rowspan="2">Ubuntu Linux LTS Server 24.04</td><td>NNT CIS Ubuntu Linux 24.04 LTS  Server Benchmark - Level 1</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Ubuntu Linux 24.04 LTS  Server Benchmark - Level 2</td><td>1.0.0</td></tr>
    <tr><td rowspan="2">Ubuntu Linux LTS Workstation 24.04</td><td>NNT CIS Ubuntu Linux 24.04 LTS  Workstation Benchmark - Level 1</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS Ubuntu Linux 24.04 LTS  Workstation Benchmark - Level 2</td><td>1.0.0</td></tr>
  </tbody>
</table>

#### Databases

<table>
  <thead>
    <tr><th>Database</th><th>Template</th><th>CIS Version</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="1">Microsoft SQL Server 2008R2</td><td>NNT CIS Microsoft SQL Server 2008R2 Database Engine Benchmark - Level 1</td><td>1.1.0.2</td></tr>
    <tr><td rowspan="1">Microsoft SQL Server 2012</td><td>NNT CIS Microsoft SQL Server 2012 Database Engine Benchmark - Level 1</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="1">Microsoft SQL Server 2014</td><td>NNT CIS Microsoft SQL Server 2014 Database Engine Benchmark - Level 1</td><td>1.1.0.2</td></tr>
    <tr><td rowspan="4">Microsoft SQL Server 2016</td><td>NNT CIS Microsoft SQL Server 2016 Benchmark - Level 1 - AWS RDS</td><td>1.4.0</td></tr>
    <tr><td>NNT CIS Microsoft SQL Server 2016 Benchmark - Level 1 - Database Engine </td><td>1.4.0</td></tr>
    <tr><td>NNT CIS Microsoft SQL Server 2016 Benchmark - Level 1 - Windows</td><td>1.4.0</td></tr>
    <tr><td>NNT CIS Microsoft SQL Server 2016 Benchmark - Level 2 - Database Engine</td><td>1.4.0</td></tr>
    <tr><td rowspan="3">Microsoft SQL Server 2017</td><td>NNT CIS Microsoft SQL Server 2017 Benchmark - Level 1 - AWS RDS</td><td>1.2.0</td></tr>
    <tr><td>NNT CIS Microsoft SQL Server 2017 Benchmark - Level 1 - Database Engine </td><td>1.2.0</td></tr>
    <tr><td>NNT CIS Microsoft SQL Server 2017 Benchmark - Level 1 - Windows</td><td>1.2.0</td></tr>
    <tr><td rowspan="4">Microsoft SQL Server 2019</td><td>NNT CIS Microsoft SQL Server 2019 Benchmark - Level 1 - AWS RDS</td><td>1.5.2</td></tr>
    <tr><td>NNT CIS Microsoft SQL Server 2019 Benchmark - Level 1 - Database Engine</td><td>1.5.2</td></tr>
    <tr><td>NNT CIS Microsoft SQL Server 2019 Benchmark - Level 1 - Windows</td><td>1.5.2</td></tr>
    <tr><td>NNT CIS Microsoft SQL Server 2019 Benchmark - Level 2 - Database Engine</td><td>1.5.2</td></tr>
    <tr><td rowspan="4">Microsoft SQL Server 2022</td><td>NNT CIS Microsoft SQL Server 2022 Benchmark - Level 1 - AWS RDS</td><td>1.1.0</td></tr>
    <tr><td>NNT CIS Microsoft SQL Server 2022 Benchmark - Level 1 - Database Engine</td><td>1.1.0</td></tr>
    <tr><td>NNT CIS Microsoft SQL Server 2022 Benchmark - Level 1 - Windows</td><td>1.1.0</td></tr>
    <tr><td>NNT CIS Microsoft SQL Server 2022 Benchmark - Level 2 - Database Engine</td><td>1.1.0</td></tr>
    <tr><td rowspan="6">Oracle Database 12c</td><td>NNT CIS Oracle Database 12c Benchmark - Level 1 - Linux Host OS using Traditional Auditing</td><td>3.0.0</td></tr>
    <tr><td>NNT CIS Oracle Database 12c Benchmark - Level 1 - Linux Host OS using Unified Auditing</td><td>3.0.0</td></tr>
    <tr><td>NNT CIS Oracle Database 12c Benchmark - Level 1 - RDBMS using Traditional Auditing</td><td>3.0.0</td></tr>
    <tr><td>NNT CIS Oracle Database 12c Benchmark - Level 1 - RDBMS using Unified Auditing</td><td>3.0.2</td></tr>
    <tr><td>NNT CIS Oracle Database 12c Benchmark - Level 1 - Windows Server Host OS using Traditional Auditing</td><td>3.0.0</td></tr>
    <tr><td>NNT CIS Oracle Database 12c Benchmark - Level 1 - Windows Server Host OS using Unified Auditing</td><td>3.0.0</td></tr>
    <tr><td rowspan="3">Oracle Database 19c</td><td>NNT CIS Oracle Database 19c - Level 1 - RDBMS</td><td>2.0.0</td></tr>
    <tr><td>NNT CIS Oracle Database 19c - Level 1 - RDBMS On Host OS - Windows</td><td>2.0.0</td></tr>
    <tr><td>NNT CIS Oracle Database 19c - Level 1 - RDBMS On Host OS - Linux</td><td>2.0.0</td></tr>
  </tbody>
</table>

#### Network Devices

<table>
  <thead>
    <tr><th>Device</th><th>Template</th><th>CIS Version</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="3">F5</td><td>F5 Networks Compliance Report</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS F5 Networks Benchmark - Level 1</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS F5 Networks Benchmark - Level 2</td><td>1.0.0</td></tr>
    <tr><td rowspan="2">Fortigate 7.4.x</td><td>NNT CIS Fortigate 7.4.x Benchmark - Level 1</td><td>1.0.1</td></tr>
    <tr><td>NNT CIS Fortigate 7.4.x Benchmark - Level 2</td><td>1.0.1</td></tr>
    <tr><td rowspan="2">Palo Alto Firewall 11</td><td>NNT CIS Palo Alto Firewall 11 Benchmark - Level 1</td><td>1.1.0.1</td></tr>
    <tr><td>NNT CIS Palo Alto Firewall 11 Benchmark - Level 2</td><td>1.1.0.1</td></tr>
    <tr><td rowspan="2">Fortigate 7.0.x</td><td>NNT Fortigate 7.0.x Benchmark - Level 1</td><td>1.3.0</td></tr>
    <tr><td>NNT Fortigate 7.0.x Benchmark - Level 2</td><td>1.3.0</td></tr>
    <tr><td rowspan="2">Juniper OS</td><td>NNT Juniper OS - Level 1</td><td>2.1.0</td></tr>
    <tr><td>NNT Juniper OS - Level 2</td><td>2.1.0</td></tr>
  </tbody>
</table>

#### Cisco

<table>
  <thead>
    <tr><th>Device</th><th>Template</th><th>CIS Version</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="1">Cisco Firewall</td><td>NNT CIS Cisco Firewall Benchmark</td><td>3.0.2.2</td></tr>
    <tr><td rowspan="2">Cisco IOS 12</td><td>NNT CIS Cisco IOS 12 - Level 1</td><td>4.0.0.2</td></tr>
    <tr><td>NNT CIS Cisco IOS 12 - Level 2</td><td>4.0.0.2</td></tr>
    <tr><td rowspan="2">Cisco IOS 15</td><td>NNT CIS Cisco IOS 15 - Level 1</td><td>4.1.1</td></tr>
    <tr><td>NNT CIS Cisco IOS 15 - Level 2</td><td>4.1.1</td></tr>
    <tr><td rowspan="2">Cisco IOS 16</td><td>NNT CIS Cisco IOS 16 - Level 1</td><td>2.0.0</td></tr>
    <tr><td>NNT CIS Cisco IOS 16 - Level 2</td><td>2.0.0</td></tr>
    <tr><td rowspan="2">Cisco IOS 17.x</td><td>NNT CIS Cisco IOS 17.x - Level 1</td><td>2.0.0</td></tr>
    <tr><td>NNT CIS Cisco IOS 17.x - Level 2</td><td>2.0.0</td></tr>
    <tr><td rowspan="2">Cisco IOS XE 17.x</td><td>NNT CIS Cisco IOS XE 17.x - Level 1</td><td>2.2.1</td></tr>
    <tr><td>NNT CIS Cisco IOS XE 17.x - Level 2</td><td>2.2.1</td></tr>
    <tr><td rowspan="2">Cisco NX-OS</td><td>NNT CIS Cisco NX-OS - Level 1</td><td>1.2.0</td></tr>
    <tr><td>NNT CIS Cisco NX-OS - Level 2</td><td>1.2.0</td></tr>
  </tbody>
</table>

#### Unix

<table>
  <thead>
    <tr><th>Operating System</th><th>Template</th><th>CIS Version</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="2">IBM AIX 5.3-6.1</td><td>NNT CIS IBM AIX 5.3-6.1 Benchmark - Level 1</td><td>1.1.0.2</td></tr>
    <tr><td>NNT CIS IBM AIX 5.3-6.1 Benchmark - Level 2</td><td>1.1.0.2</td></tr>
    <tr><td rowspan="2">IBM AIX 7.2</td><td>NNT CIS IBM AIX 7.2 Benchmark - Level 1</td><td>1.1.0</td></tr>
    <tr><td>NNT CIS IBM AIX 7.2 Benchmark - Level 2</td><td>1.1.0</td></tr>
    <tr><td rowspan="2">IBM AIX 7</td><td>NNT CIS IBM AIX 7 Benchmark - Level 1</td><td>1.2.0</td></tr>
    <tr><td>NNT CIS IBM AIX 7 Benchmark - Level 2</td><td>1.2.0</td></tr>
  </tbody>
</table>

#### Apple OSX

<table>
  <thead>
    <tr><th>Operating System</th><th>Template</th><th>CIS Version</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="2">Apple OSX 10.11</td><td>NNT CIS Apple OSX 10.11 Benchmark - Level 1</td><td>1.0.0.2</td></tr>
    <tr><td>NNT CIS Apple OSX 10.11 Benchmark - Level 2</td><td>1.0.0.2</td></tr>
  </tbody>
</table>

#### Desktop Office

<table>
  <thead>
    <tr><th>Application</th><th>Template</th><th>CIS Version</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="1">Adobe Acrobat Reader X</td><td>NNT Adobe Acrobat Reader X Secure Configuration Benchmark</td><td>1.0.0.3</td></tr>
    <tr><td rowspan="1">Microsoft Excel 2013</td><td>NNT CIS Excel 2013 Benchmark</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="1">Microsoft Excel 2016</td><td>NNT CIS Excel 2016 Benchmark</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="2">Google Chrome</td><td>NNT CIS Google Chrome Benchmark - Level 1</td><td>3.0.0</td></tr>
    <tr><td>NNT CIS Google Chrome Benchmark - Level 2</td><td>3.0.0</td></tr>
    <tr><td rowspan="2">Microsoft Edge</td><td>NNT CIS Microsoft Edge Benchmark - Level 1</td><td>2.0.0</td></tr>
    <tr><td>NNT CIS Microsoft Edge Benchmark - Level 2</td><td>2.0.0</td></tr>
    <tr><td rowspan="1">Microsoft Internet Explorer 11</td><td>NNT CIS Microsoft Internet Explorer 11 Benchmark</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="1">Mozilla Firefox 38 ESR</td><td>NNT CIS Mozilla Firefox 38 ESR Benchmark</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="1">Microsoft Office 2013</td><td>NNT CIS Office 2013 Benchmark</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="1">Microsoft Outlook 2016</td><td>NNT CIS Outlook 2016 Benchmark</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="1">Microsoft Outlook 2013</td><td>NNT CIS Outlook2013 Benchmark</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="1">Microsoft PowerPoint 2013</td><td>NNT CIS PowerPoint 2013 Benchmark</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="1">Microsoft PowerPoint 2016</td><td>NNT CIS PowerPoint 2016 Benchmark</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="1">Microsoft Word 2013</td><td>NNT CIS Word 2013 Benchmark</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="1">Microsoft Word 2016</td><td>NNT CIS Word 2016 Benchmark</td><td>1.0.0.2</td></tr>
  </tbody>
</table>

#### Virtualization

<table>
  <thead>
    <tr><th>Platform</th><th>Template</th><th>CIS Version</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="2">VMware ESXi 5.5</td><td>NNT CIS VMware ESXi 5.5 Benchmark - Level 1</td><td>1.2.0.2</td></tr>
    <tr><td>NNT CIS VMware ESXi 5.5 Benchmark - Level 2</td><td>1.2.0.2</td></tr>
    <tr><td rowspan="2">VMware ESXi 6.5</td><td>NNT CIS VMware ESXi 6.5 Benchmark - Level 1</td><td>1.0.0</td></tr>
    <tr><td>NNT CIS VMware ESXi 6.5 Benchmark - Level 2</td><td>1.0.0</td></tr>
    <tr><td rowspan="4">VMware ESXi 6.7</td><td>NNT CIS VMware ESXi 6.7 Benchmark - Level 1</td><td>1.1.0</td></tr>
    <tr><td>NNT CIS VMware ESXi 6.7 Benchmark - Level 2</td><td>1.1.0</td></tr>
    <tr><td>Netwrix CIS VMware ESXi 6.7 Benchmark v1.2.0 - Level 1</td><td>1.0.0.2</td></tr>
    <tr><td>Netwrix CIS VMware ESXi 6.7 Benchmark v1.2.0 - Level 2</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="4">VMware ESXi 7.0</td><td>NNT CIS VMware ESXi 7.0 Benchmark - Level 1</td><td>1.1.0</td></tr>
    <tr><td>NNT CIS VMware ESXi 7.0 Benchmark - Level 2</td><td>1.1.0</td></tr>
    <tr><td>Netwrix CIS VMware ESXi 7.0 Benchmark v1.1.0 - Level 1</td><td>1.0.0.2</td></tr>
    <tr><td>Netwrix CIS VMware ESXi 7.0 Benchmark v1.1.0 - Level 2</td><td>1.0.0.2</td></tr>
    <tr><td rowspan="2">VMware ESXi 8.0</td><td>NNT CIS VMware ESXi 8.0 Benchmark - Level 1</td><td>1.3.0</td></tr>
    <tr><td>NNT CIS VMware ESXi 8.0 Benchmark - Level 2</td><td>1.3.0</td></tr>
  </tbody>
</table>

#### Web Servers

<table>
  <thead>
    <tr><th>Platform</th><th>Template</th><th>CIS Version</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="2">Apache HTTP Server 2.2</td><td>NNT CIS Apache HTTP Server 2.2 Benchmark - Level 1</td><td>3.6.0</td></tr>
    <tr><td>NNT CIS Apache HTTP Server 2.2 Benchmark - Level 2</td><td>3.6.0</td></tr>
    <tr><td rowspan="2">Apache HTTP Server 2.4</td><td>NNT CIS Apache HTTP Server 2.4 Benchmark - Level 1</td><td>2.3.0</td></tr>
    <tr><td>NNT CIS Apache HTTP Server 2.4 Benchmark - Level 2</td><td>2.3.0</td></tr>
    <tr><td rowspan="2">Apache Tomcat 10.1</td><td>NNT CIS Apache Tomcat 10.1 Benchmark - Level 1</td><td>1.1.0.1</td></tr>
    <tr><td>NNT CIS Apache Tomcat 10.1 Benchmark - Level 2</td><td>1.1.0.1</td></tr>
    <tr><td rowspan="2">Apache Tomcat 5.5-6.0</td><td>NNT CIS Apache Tomcat 5.5-6.0 Benchmark - Level 1</td><td>1.0.0.9</td></tr>
    <tr><td>NNT CIS Apache Tomcat 5.5-6.0 Benchmark - Level 2</td><td>1.0.0.9</td></tr>
    <tr><td rowspan="2">Microsoft IIS 10</td><td>NNT CIS Microsoft IIS 10 Benchmark - Level 1</td><td>1.2.2</td></tr>
    <tr><td>NNT CIS Microsoft IIS 10 Benchmark - Level 2</td><td>1.2.2</td></tr>
    <tr><td rowspan="2">Microsoft IIS 8</td><td>NNT CIS Microsoft IIS 8 Benchmark - Level 1</td><td>1.4.0.2</td></tr>
    <tr><td>NNT CIS Microsoft IIS 8 Benchmark - Level 2</td><td>1.4.0.2</td></tr>
  </tbody>
</table>

### PCI DSS

Payment Card Industry Data Security Standard (PCI DSS) reports.

| Platform | Template |
| --- | --- |
| IBM AIX 7.1 | NNT PCI DSS AIX 7.1 |
| Apache Tomcat 5.5-6.0 | NNT PCI DSS Apache Tomcat 5.5-6.0 |
| Cisco IOS 12 | NNT PCI DSS Cisco IOS 12 Benchmark |
| Cisco IOS 15 | NNT PCI DSS Cisco IOS 15 Benchmark |
| Microsoft IIS 10 | NNT PCI DSS Microsoft IIS 10 Benchmark |
| Microsoft IIS 7.0 | NNT PCI DSS Microsoft IIS 7.0 Benchmark |
| Microsoft IIS 7.5 | NNT PCI DSS Microsoft IIS 7.5 Benchmark |
| Microsoft IIS 8 | NNT PCI DSS Microsoft IIS 8 Benchmark |
| Microsoft Member Server 2003 | NNT PCI DSS Microsoft Member Server 2003 |
| Microsoft Member Server 2003 (Agentless) | NNT PCI DSS Microsoft Member Server 2003 (Agentless) |
| Microsoft Member Server 2008 | NNT PCI DSS Microsoft Member Server 2008 |
| Microsoft Member Server 2008R2 | NNT PCI DSS Microsoft Member Server 2008R2 |
| Microsoft Member Server 2012 | NNT PCI DSS Microsoft Member Server 2012 |
| Microsoft Member Server 2016 | NNT PCI DSS Microsoft Member Server 2016 v1217 |
| Microsoft Member Server 2019 | NNT PCI DSS Microsoft Member Server 2019 |
| Microsoft Member Server 2022 | NNT PCI DSS Microsoft Member Server 2022 |
| Microsoft SQL Server 2008R2 | NNT PCI DSS Microsoft SQL Server 2008R2 Database Engine |
| Microsoft Windows 7 | NNT PCI DSS Microsoft Windows 7 |
| Microsoft Windows Server 2003 | NNT PCI DSS Microsoft Windows Server 2003 |
| Oracle Database 12c | NNT PCI DSS Oracle Database 12c Benchmark |
| Red Hat Enterprise Linux 5 | NNT PCI DSS RHEL 5 |
| Red Hat Enterprise Linux 6 | NNT PCI DSS RHEL 6 v0817 |
| Red Hat Enterprise Linux 7 | NNT PCI DSS RHEL 7 |
| Red Hat Enterprise Linux 8 | NNT PCI DSS RHEL 8 Server v1.0.0.3 |
| VMware ESXi 5.5 | NNT PCI DSS VMware ESXi 5.5 |
| Microsoft Windows 10 Enterprise 1709 | NNT PCI DSS Windows 10 Enterprise 1709 v1217 |

### HIPAA

Health Insurance Portability and Accountability Act (HIPAA) reports.

| Operating System | Template |
| --- | --- |
| Microsoft Member Windows Server 2008R2 | NNT HIPAA Microsoft Member Windows Server 2008R2 |
| Microsoft Member Windows Server 2012 | NNT HIPAA Microsoft Member Windows Server 2012 |
| Microsoft Member Windows Server 2012R2 | NNT HIPAA Microsoft Member Windows Server 2012R2 |
| Microsoft Member Windows Server 2016 | NNT HIPAA Microsoft Member Windows Server 2016 |
| Microsoft Windows 10 Enterprise 1709 | NNT HIPAA Microsoft Windows 10 Enterprise 1709 |
| Oracle Linux 7 | NNT HIPAA Oracle Linux 7 Benchmark |
| Red Hat Enterprise Linux 7 | NNT HIPAA RedHat Enterprise Linux 7 Benchmark |
| Red Hat Enterprise Linux 8 | NNT HIPAA RedHat Enterprise Linux 8 Benchmark |
| Windows Server 2019 | NNT HIPAA Windows Server 2019 Benchmark |
| Windows Server 2022 | NNT HIPAA Windows Server 2022 Benchmark |
| Windows Server 2025 | NNT HIPAA Windows Server 2025 Benchmark |

### SOX

Sarbanes-Oxley Act (SOX) reports.

| Operating System | Template |
| --- | --- |
| Microsoft Member Server 2008R2 | NNT SOX Microsoft Member Server 2008R2 |
| Microsoft Member Server 2012 | NNT SOX Microsoft Member Server 2012 |
| Microsoft Member Server 2012R2 | NNT SOX Microsoft Member Server 2012R2 |
| Microsoft Member Server 2016 | NNT SOX Microsoft Member Server 2016 |
| Microsoft Windows 7 | NNT SOX Microsoft Windows 7 |
| Microsoft Windows 10 Enterprise 1709 | NNT SOX Windows 10 Enterprise 1709 |

### DISA STIG

Defense Information Systems Agency (DISA) Security Technical Implementation Guide (STIG) reports.

| Platform | Template |
| --- | --- |
| Adobe Acrobat Reader X | NNT Adobe Acrobat Reader X Secure Configuration Benchmark |
| Google Chrome | NNT U Google Chrome STIG V1R19 Manual |
| Microsoft Windows 11 | NNT U MS Windows 11 STIG |
| Microsoft Windows Server 2019 | NNT U MS Windows Server 2019 STIG |
| Microsoft Windows Server 2022 | NNT U MS Windows Server 2022 STIG |
| Microsoft Windows Server 2025 | NNT U MS Windows Server 2025 STIG |
| Red Hat Enterprise Linux 7 | NNT U Red Hat Enterprise Linux 7 STIG V2R5 Manual |
| Red Hat Enterprise Linux 6 | NNT U RedHat 6 V1R14 STIG |
| Oracle Solaris (SPARC) 10 | NNT U Solaris 10 SPARC V1R17 STIG SCAP |
| Oracle Solaris (x86) 10 | NNT U Solaris 10 X86 V1R17 STIG SCAP |
| Oracle Solaris (SPARC) 11 | NNT U Solaris 11 SPARC V1R5 STIG |
| Oracle Solaris (x86) 11 | NNT U Solaris 11 X86 V1R5 STIG SCAP |
| Microsoft Windows 10 | NNT U Windows 10 V1R6 STIG |
| Microsoft Windows Server (member server) 2012 / 2012 R2 | NNT U Windows 2012 and 2012 R2 MS V2R7 STIG |
| Microsoft Windows 7 | NNT U Windows 7 V1R31 |
| Microsoft Windows Server (member server) 2016 | NNT U Windows Member Server 2016 STIG V1R1 |
| Microsoft Windows Server (member server) 2008 R2 | NNT Windows 2008 R2 MS V1R20 STIG |
| Microsoft Windows 8 – 8.1 | NNT Windows 8 - 8.1 Security Technical Implementation Guide V1R14 |
| Microsoft Internet Explorer 11 | NNT_U_MS_IE11_STIG_V1R19_Manual |

### NIST 800-53

National Institute of Standards and Technology (NIST) Special Publication 800-53 reports.

| Operating System | Template |
| --- | --- |
| Microsoft Windows 10 Enterprise 1703 | NNT NIST 800-53 Microsoft Windows 10 Enterprise 1703 |
| Microsoft Windows 10 Enterprise 20H2 | NNT NIST 800-53 Microsoft Windows 10 Enterprise 20H2 |
| Microsoft Windows Server 2008 | NNT NIST 800-53 Microsoft Windows Server 2008 Benchmark |
| Microsoft Windows Server 2008 R2 | NNT NIST 800-53 Microsoft Windows Server 2008 R2 Benchmark |
| Microsoft Windows Server 2012 | NNT NIST 800-53 Microsoft Windows Server 2012 Benchmark |
| Microsoft Windows Server 2012 R2 | NNT NIST 800-53 Microsoft Windows Server 2012 R2 Benchmark |
| Microsoft Windows Server 2016 | NNT NIST 800-53 Microsoft Windows Server 2016 Benchmark |
| Microsoft Windows Server 2019 | NNT NIST 800-53 Microsoft Windows Server 2019 Benchmark |
| Microsoft Windows Server 2022 | NNT NIST 800-53 Microsoft Windows Server 2022 Benchmark |
| Microsoft Windows Server 2025 | NNT NIST 800-53 Microsoft Windows Server 2025 Benchmark |
| Oracle Linux 6 | NNT NIST 800-53 Oracle Linux 6 Server |
| Oracle Linux 7 | NNT NIST 800-53 Oracle Linux 7 Server |
| Red Hat Enterprise Linux 7 | NNT NIST 800-53 RHEL 7 Server v1.1.0 |
| Red Hat Enterprise Linux 8 | NNT NIST 800-53 RHEL 8 Server v1.1.5 |
| Ubuntu Linux 20.04 | NNT NIST 800-53 Ubuntu Linux 20.04 Benchmark |
| Ubuntu Linux 22.04 | NNT NIST 800-53 Ubuntu Linux 22.04 Benchmark |
| Ubuntu Linux 24.04 | NNT NIST 800-53 Ubuntu Linux 24.04 Benchmark |
| VMware ESXi 5.5 | NNT NIST 800-53 VMware ESXi 5.5 Benchmark |
| VMware ESXi 8.0 | NNT NIST 800-53 VMware ESXi 8.0 Benchmark |

### NIST 800-171

NIST Special Publication 800-171 reports.

| Operating System | Template |
| --- | --- |
| Microsoft Windows 10 Enterprise 2004 | NNT NIST 800-171 Microsoft Windows 10 Enterprise 2004 Benchmark |
| Microsoft Windows 10 Enterprise 20H2 | NNT NIST 800-171 Microsoft Windows 10 Enterprise 20H2 Benchmark |
| Microsoft Windows 11 | NNT NIST 800-171 Microsoft Windows 11 Benchmark |
| Microsoft Windows Server 2008 | NNT NIST 800-171 Microsoft Windows Server 2008 Benchmark |
| Microsoft Windows Server 2008 R2 | NNT NIST 800-171 Microsoft Windows Server 2008 R2 Benchmark |
| Microsoft Windows Server 2012 | NNT NIST 800-171 Microsoft Windows Server 2012 Benchmark |
| Microsoft Windows Server 2012 R2 | NNT NIST 800-171 Microsoft Windows Server 2012 R2 Benchmark |
| Microsoft Windows Server 2016 | NNT NIST 800-171 Microsoft Windows Server 2016 Benchmark |
| Microsoft Windows Server 2019 | NNT NIST 800-171 Microsoft Windows Server 2019 Benchmark |
| Microsoft Windows Server 2022 | NNT NIST 800-171 Microsoft Windows Server 2022 Benchmark |
| Microsoft Windows Server 2025 | NNT NIST 800-171 Microsoft Windows Server 2025 Benchmark |
| Oracle Linux 6 | NNT NIST 800-171 Oracle Linux 6 Server |
| Oracle Linux 7 | NNT NIST 800-171 Oracle Linux 7 Server |
| Red Hat Enterprise Linux 7 | NNT NIST 800-171 RHEL 7 v1.1.0 Server |
| Red Hat Enterprise Linux 8 | NNT NIST 800-171 RHEL 8 v1.1.1 Server |
| Ubuntu Linux 20.04 | NNT NIST 800-171 Ubuntu Linux 20.04 Benchmark |
| Ubuntu Linux 22.04 | NNT NIST 800-171 Ubuntu Linux 22.04 Benchmark |
| Ubuntu Linux 24.04 | NNT NIST 800-171 Ubuntu Linux 24.04 Benchmark |
| VMware ESXi 5.5 | NNT NIST 800-171 VMware ESXi 5.5 Benchmark |
| VMware ESXi 8.0 | NNT NIST 800-171 VMware ESXi 8.0 Benchmark |

### ISO 27001

International Organization for Standardization (ISO)/International Electrotechnical Commission
(IEC) 27001 reports.

| Platform | Template |
| --- | --- |
| Microsoft SQL Server 2008R2 | NNT ISO 27K Microsoft SQL Server 2008R2 Database Engine Benchmark |
| Microsoft SQL Server 2012 | NNT ISO 27K Microsoft SQL Server 2012 Database Engine Benchmark |
| Microsoft Windows 10 | NNT ISO27K Microsoft Windows 10 Benchmark |
| Microsoft Windows 11 | NNT ISO27K Microsoft Windows 11 Benchmark |
| Microsoft Windows Server (member server) 2003 | NNT ISO27K Microsoft Windows Server 2003 Benchmark - L1 Member Server |
| Microsoft Windows Server (domain controller) 2008R2 | NNT ISO27K Microsoft Windows Server 2008R2 Benchmark - L1 Domain Controller |
| Microsoft Windows Server (member server) 2008R2 | NNT ISO27K Microsoft Windows Server 2008R2 Benchmark - L1 Member Server |
| Microsoft Windows Server (domain controller) 2012 R2 | NNT ISO27K Microsoft Windows Server 2012 R2 Benchmark - L1 Domain Controller |
| Microsoft Windows Server (member server) 2012 R2 | NNT ISO27K Microsoft Windows Server 2012 R2 Benchmark - L1 Member Server |
| Microsoft Windows Server (domain controller) 2016 | NNT ISO27K Microsoft Windows Server 2016 Benchmark - L1 Domain Controller |
| Microsoft Windows Server (member server) 2016 | NNT ISO27K Microsoft Windows Server 2016 Benchmark - L1 Member Server |
| Microsoft Windows Server 2019 | NNT ISO27K Microsoft Windows Server 2019 Benchmark |
| Oracle Linux 6 | NNT ISO27K Oracle Linux 6 Benchmark |
| Oracle Linux 7 | NNT ISO27K Oracle Linux 7 Benchmark |
| Oracle Solaris 10 | NNT ISO27K Oracle Solaris 10 Benchmark |
| Red Hat Enterprise Linux 6 | NNT ISO27K Red Hat Enterprise Linux 6 Benchmark |
| Red Hat Enterprise Linux 7 | NNT ISO27K Red Hat Enterprise Linux 7 Benchmark |

### NERC CIP-007-6

North American Electric Reliability Corporation (NERC) Critical Infrastructure Protection (CIP)
CIP-007-6 reports, each covering a specific requirement table for Windows devices.

| Focus Area | Template |
| --- | --- |
| R1 – Hardened Ports Assessment | NNT NERC CIP-007-6 Table R1 – Hardened Ports Assessment for Windows 2 |
| R1 – Hardened Services Assessment | NNT NERC CIP-007-6 Table R1 – Hardened Services Assessment for Windows 2 |
| R3 – Malicious Code Prevention | NNT NERC CIP-007-6 Table R3 – Malicious Code Prevention for Windows 2 |
| R4 – Security Event Monitoring | NNT NERC CIP-007-6 Table R4 – Security Event Monitoring for Windows 2 |
| R5 – System Access Control | NNT NERC CIP-007-6 Table R5 – System Access Control for Windows 2 |

