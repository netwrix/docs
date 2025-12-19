---
title: "Collection > AD_CACollection Job"
description: "Collection > AD_CACollection Job"
sidebar_position: 10
---

# Collection > AD_CACollection Job

The AD_CACollection job collects Certificate Authority details and settings for analysis against
potential vulnerabilities that exist in Active Directory Certificate Services configurations. This
job is located in the Collection job group.

**Target Host**

It is recommended to target the **ONE DOMAIN CONTROLLER PER DOMAIN** or **Default domain
controller** host list.

## Queries for the AD_CACollection Job

The AD_CACollection job uses the PowerShell data collector to collect details about Certificate
Authorities, templates, and requests.

![Queries for the AD_CACollection Job](/images/accessanalyzer/12.0/solutions/activedirectory/certificateauthority/cacollectionqueries.webp)

The queries for the job are:

- CA Connection String – Gets the Certificate Authority (CA) string to use for connections
- Permissions – Returns Certificate Authority Access Control Lists (ACLs)
- Registry Settings – Returns setup of Certificate Authorities
- Enrollment Agents – Returns Enrollment Agent rights, availability, and details
- NTLM Endpoints – Discovers NTLM enabled endpoints for Certificate Authorities
- AllCertificates – Collects all certificate requests from the ADCS Database
- CertificateTemplates – Gets certificate templates
- CertificateTemplatesPublished – Collects information from the PkiEnrollmentServices

## Analysis Tasks for the AD_CACollection Job

Navigate to the **Active Directory** > **7.Certificate Authority** > **Collection** >
**AD_CACollection** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_CACollection Job](/images/accessanalyzer/12.0/solutions/activedirectory/certificateauthority/cacollectionanalysis.webp)

The default analysis tasks are:

- Split String – Splits strings on a given delimiter. This is used to break apart Certificate
  Values.
- Subject Alternative Names – Breakdown of all Subject Alternative Names in key value pairs. Creates
  the SA_AD_CertificateConfiguration_ALLSANs view accessible under the job’s Results node.
- Certificate OIDs – Certificate templates split out with OIDs
- Template Flags – Enumerates flags on certificate templates. Creates the
  SA_AD_CertificateConfiguration_Flags view accessible under the job’s Results node.
