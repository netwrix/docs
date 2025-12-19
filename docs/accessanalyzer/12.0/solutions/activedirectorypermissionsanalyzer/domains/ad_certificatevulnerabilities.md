---
title: "AD_CertificateVulnerabilities Job"
description: "AD_CertificateVulnerabilities Job"
sidebar_position: 30
---

# AD_CertificateVulnerabilities Job

The AD_CertificateVulnerabilities job highlights vulnerabilities in the configuration and
permissions of the Certificate Authority, certificate templates, and Active Directory.

#### Analysis Tasks for the AD_CertificateVulnerabilities Job

Navigate to the **Active Directory Permissions Analyzer** > **8.Domains** >
**AD_CertificateVulnerabilities** > **Configure** node and select **Analysis** to view the analysis
tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the AD_CertificateVulnerabilities Job](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/domains/certificatevulnerabilitiesanalysis.webp)

The default analysis task is:

- Certificate Issues – Creates the SA_AD_CertificateAudit_Vulnerabilities table accessible under the
  job’s Results node. The following vulnerabilities are identified by this task:

    - SubjectAltName Allows Privilege Escalation (ESC1)
    - Defined EKUs Allow Arbitrary Certificate Signing (ESC2)
    - Certificates in Combination can be used for Arbitrary Privilege Escalation (ESC3)
    - Exploitable Access Control Entries on Templates (ESC4)
    - Public Key Infrastructure Misconfigurations (ESC5)
    - EDITF_ATTRIBUTESUBJECTALTNAME2 Allows Privilege Escalation (ESC6)
    - Certificate Authority Open Access (ESC7)
    - NTLM Web Enrollment Enabled (ESC8)

In addition to the tables and views created by the analysis task, the AD_CertificateVulnerabilities
job produces the following pre-configured report.

| Report                      | Description                                                                                                                                      | Default Tags | Report Elements                                                                                                                                               |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Certificate Vulnerabilities | This report highlights Certificate Authority and template configurations and permissions that create vulnerabilities in the audited environment. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays vulnerabilities by count</li><li>Table – Provides details on vulnerabilities</li></ul> |
