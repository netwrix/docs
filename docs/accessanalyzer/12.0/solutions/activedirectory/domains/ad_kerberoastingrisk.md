---
title: "AD_KerberoastingRisk Job"
description: "AD_KerberoastingRisk Job"
sidebar_position: 60
---

# AD_KerberoastingRisk Job

The AD_KerberoastingRisk job identifies accounts vulnerable to kerberoasting. Kerberoasting is a
threat where attackers target service accounts in Active Directory to steal their passwords.

In a kerberoasting attack, attackers request service tickets (TGS) for service accounts from the Key
Distribution Center (KDC). These tickets are encrypted with the service account's password hash.
Attackers attempt to crack these hashes offline to reveal the passwords for the service accounts.

Encryption types vulnerable to kerberoasting include RC4 and DES. AES-128 can also be considered
weak, depending on the implementation and threat model.

See the Netwrix
[Kerberoasting Attack](https://www.netwrix.com/cracking_kerberos_tgs_tickets_using_kerberoasting.html)
article for additional information on kerberoasting.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/12.0/admin/jobs/job/overview.md#parameter-configuration) topic for
instructions on how to edit parameters on a job overview page.

The AD_KerberoastingRisk job has the following configurable parameters:

- Consider AES 128 as weak encryption (DES and RC4 always considered weak) – Enable to include
  AES-128 as a weak encryption type
- Consider "Password Never Expires" as an easily crackable password – Enable to include accounts
  having the Password Never Expires policy as a password exception
- Report on disabled user accounts – Enable to include disabled user accounts in the analysis

All of these parameters are disabled by default.

## Analysis Tasks for the AD_KerberoastingRisk Job

Navigate to the **Active Directory** > **5.Domains** > **AD_KerberoastingRisk** > **Configure** node
and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_KerberoastingRisk Job](/images/accessanalyzer/12.0/solutions/activedirectory/domains/kerberoastingriskanalysis.webp)

The default analysis tasks are:

- Kerberoasting Details – Provides details on accounts vulnerabilities to Kerberoasting

    - This task uses three customizable parameters. These allow you to optionally consider AES-128
      as a weak encryption type, consider Password Never Expires as being easily crackable, and
      include disabled user accounts. See the
      [Parameter Configuration](#parameter-configuration) topic for additional information.

- Kerberoasting Summary – Summarizes accounts by domain with counts for multiple vulnerabilities

In addition to the tables and views created by the analysis tasks, the AD_KerberoastingRisk job
produces the following pre-configured report:

| Report             | Description                                                                                                                                                                                                                                           | Default Tags | Report Elements                                                                                                                                                                                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kerberoasting Risk | An account is vulnerable to kerberoasting if it has an SPN assigned and one of the following is true: <ul><li>RC4 or DES (or AES-128 if enabled)</li><li>Weak password exception</li><li>Trusted for delegation</li><li>Is an administrator</li></ul> | None         | This report is comprised of three elements: <ul><li>Stacked Bar Chart – Displays vulnerable accounts</li><li>Table – Provides a summary of accounts vulnerable to kerberoasting</li><li>Table – Provides details on the accounts vulnerabilities to kerberoasting</li></ul> |
