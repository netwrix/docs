---
title: "AD_DomainControllers Job"
description: "AD_DomainControllers Job"
sidebar_position: 10
---

# AD_DomainControllers Job

The 0.Collection > AD_DomainControllers Job collects domain controller details which will be further
analyzed in order to provide information on domains, sites, and trusts.

## Queries for the AD_DomainControllers Job

The AD_DomainControllers Job uses the LDAP Data Collector and the ActiveDirectory Data Collector for
the following queries:

:::warning
Except the first query, do not modify the remaining queries. The remaining queries are
preconfigured for this job.
:::


![Query Selection](/images/accessanalyzer/12.0/solutions/activedirectory/domains/collection/domaincontrollersquery.webp)

The queries for this job are:

- Domain Controller Listing – Targets one domain controller per domain known to Access Analyzer to
  collect a listing of all domain controllers
    - Can be modified to connect securely with TLS/SSL.
    - See the [Connect Securely with TLS/SSL](#connect-securely-with-tlsssl) topic for additional
      information.
- Actual Bridgehead Servers – Targets one domain controller per domain known to Access Analyzer to
  collect all of the bridgehead servers for each site
- Global Catalog Servers – Targets one domain controller per domain known to Access Analyzer to
  extract a list of GCs for each site
- Significant DCs – Targets one domain controller per domain known to Access Analyzer to gather
  information about the significant DCs
- Preferred Bridgehead Servers – Targets one domain controller per domain known to Access Analyzer
  to list the preferred bridgehead servers for each site

    :::note
    See the Active Directory Data Collector and LDAP Data Collector sections for
    additional information.
    :::


### Connect Securely with TLS/SSL

The Domain Controller Listing Query in the AD_DomainControllers Job is configured to use the LDAP
Data Collector. This query can be optionally configured to connect securely with TLS/SSL.

:::warning
Do not modify any other settings in this query.
:::


**Step 1 –** Navigate to the job’s > **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, select the _Domain Controller Listing_ Query and click
**Query Properties**. The Query Properties window displays.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The LDAP template form wizard
opens.

![LDAP template form](/images/accessanalyzer/12.0/solutions/activedirectory/domains/collection/ldaptemplate.webp)

**Step 4 –** Click **Options**.

![Connection Options](/images/accessanalyzer/12.0/solutions/activedirectory/domains/collection/ldaptemplateoptions.webp)

**Step 5 –** On the Options page, select **Connect Securely with TLS/SSL**. Optionally, select
**Ignore Certificate Errors** to connect even if certificate errors occur. Use **Server Port** 686
for a secure connection. Click **OK** to close the Options page.

**Step 6 –** Step 13 – Then click **OK** to close the LDAP template form wizard.

The job now connects securely with TLS/SSL.
