---
description: >-
  Explains how to audit domains different from the Netwrix Auditor host domain,
  including trusted and non-trusted domain scenarios and account requirements.
keywords:
  - audit domain
  - trusted domain
  - non-trusted domain
  - data collecting account
  - gMSA
  - trust relationships
  - Active Directory
  - Netwrix Auditor
products:
  - auditor
sidebar_label: How to Audit Another Domain with Netwrix Auditor
tags: []
title: "How to Audit Another Domain with Netwrix Auditor"
knowledge_article_id: kA00g000000H9ceCAC
---

# How to Audit Another Domain with Netwrix Auditor

## Question

Can I audit another domain with Netwrix Auditor?

## Answer

With Netwrix Auditor you can audit domains different from the one where the Netwrix Auditor host resides. Refer to the following scenarios:

- If there is a two-way trust set up between the audited domain and the domain where the Netwrix Auditor host is installed, no limitations apply. Learn more about trusts in [How trust relationships work for forests in Active Directory ⸱ Microsoft 🤝](https://learn.microsoft.com/en-us/azure/active-directory-domain-services/concepts-forest-trust).
- For audit of non-trusted domains, refer to the following article for additional information: [How to Audit a Non-Trusted Domain](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-audit-a-non-trusted-domain).

> **NOTE:** The data collecting account should have required permissions in the monitored domain. Refer to the following article for additional information on Data Collecting Account and group Managed Service Account (gMSA) requirements: Monitoring Plans — Data Collecting Account ⸱ v10.6.

### Related articles

- [How trust relationships work for forests in Active Directory ⸱ Microsoft 🤝](https://learn.microsoft.com/en-us/azure/active-directory-domain-services/concepts-forest-trust)
- [How to Audit a Non-Trusted Domain](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-audit-a-non-trusted-domain)
- Monitoring Plans — Data Collecting Account ⸱ v10.6
