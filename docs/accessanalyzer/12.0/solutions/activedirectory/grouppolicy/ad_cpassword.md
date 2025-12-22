---
title: "AD_CPassword Job"
description: "AD_CPassword Job"
sidebar_position: 20
---

# AD_CPassword Job

The AD_CPassword Job identifies passwords that are stored in Group Policy Preferences which present
a security risk allowing attackers access to these passwords. Microsoft published the AES private
key, which can be used to decrypt passwords stored in Group Policy Preferences. See the Microsoft
[2.2.1.1.4 Password Encryption](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-gppref/2c15cbf0-f086-4c74-8b70-1f2fa45dd4be)
article for additional information. Since Authenticated Users have read access to SYSVOL, any
malicious insider or attacker can search for the cPassword file inside XML files shared through
SYSVOL to decrypt them. GPOs can be stored in the `%ProgramData%\Microsoft\Group Policy\History`
folder on each machine, meaning any results found by this job should be deleted off every computer
once this policy has been removed.

## Query for the AD_CPassword Job

The AD_CPassword Job uses the PowerShell Data Collector for the following query:

:::warning
Do not modify the query. The query is preconfigured for this job
:::


![Query for the AD_CPassword Job](/images/accessanalyzer/12.0/solutions/activedirectory/grouppolicy/cpasswordquery.webp)

The queries for this job are:

- Sysvol – Targets one domain controller per domain known to Access Analyzer to determine CPassword
  security

    - See the [PowerShell Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/powershell/overview.md) topic
      for additional information.

In addition to the tables created by the data collector, the AD_CPassword Job produces the following
pre-configured report:

| Report                        | Description                                                                                                                  | Default Tags | Report Elements                                                                                                       |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------- |
| Potential Plaintext Passwords | This report highlights domain contollers where this vulnerability exists, and provides the path of the XML file in question. | None         | This report is comprised of one elements: <ul><li>Table – Provides details on potential plaintext passwords</li></ul> |
