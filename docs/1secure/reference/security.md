---
title: "Security In Netwrix 1Secure Guide"
sidebar_label: "Security"
description: "Learn how to configure and manage Netwrix 1Secure for hybrid security. This guide covers setup, monitoring, and analytics to help secure cloud and on prem data"
---

# Security

Netwrix 1Secure implements multiple layers of security to protect your data and ensure compliance with industry standards.

## Physical Security

Netwrix 1Secure runs on Microsoft Entra infrastructure. Click
[here](https://azure.microsoft.com/en-us/overview/trusted-cloud/) to learn more about Entra cloud
security, or click [here](https://azure.microsoft.com/en-us/overview/trusted-cloud/compliance/) to
view all Entra compliance certifications.

## Network Security

The Azure SQL database used to store the data is isolated from direct access. We use firewall rules
that prevent database access to the API backend services running in Microsoft Entra ID.

All API access happens on behalf of specific user accounts in Microsoft Entra ID.

## Access Control

Netwrix 1Secure is a multi-tenant cloud application. All data is segregated by tenants and access
control is enforced.

Only the users who you explicitly add to your organization in Netwrix 1Secure get to see your
dashboards in the product. User access is set up using a customer Azure AD account. You can further
protect access using Azure AD support for Multi-Factor Authentication (MFA). Thus, when users get
deprovisioned from their corporate directories they also automatically lose access to Netwrix
1Secure.

Netwrix employees who have administrative access to the Azure deployment to maintain the application
only do so under their own Netwrix corporate accounts and all their activity is audited.

## Data Security

### Data at rest

Data is persistently stored within the Azure SQL Database in the region you select when creating
your account. All data stored in the database is encrypted with an AES 256-bit encryption algorithm.

### Data in transit

Data will be transferred between the system components in a few different ways:

- Agent -> API
- API -> SQL Database
- SQL Database -> Application
- Application -> Browser (User)

Data is always encrypted in transit, and connections are made over HTTPS to prevent eavesdropping.

### Data Retention Period

Data retention is the practice of storing and managing your data and records for a designated period
of time. A data retention period refers to the amount of time that a company or an organization
holds onto your information. Netwrix 1Secure provides data retention for 1 rolling year by default.

## Compliance

Netwrix 1Secure uses Azure datacenters in your region of choice. Microsoft provides the highest
levels of security for these datacenters including compliance to the following standards: General
Data Protection Regulation (GDPR), ISO 27001, HIPAA, FedRAMP, SOC 1 and SOC 2, as well as
country-specific standards, including Australia IRAP, UK G-Cloud, and Singapore MTCS.

For more information, visit
[https://azure.microsoft.com/en-us/overview/trusted-cloud/compliance/](https://azure.microsoft.com/en-us/overview/trusted-cloud/compliance/)

## Customer Data Privacy

All customers access Netwrix 1Secure via the same address:

- [https://1secure.netwrix.com/](https://1secure.netwrix.com/)

However, based on your selection at account signup / creation, your data is stored in one of the
following Microsoft Azure regions:

- If you select the Americas, your data is stored in the Microsoft Azure region known as "West
  Central US".
- If you select Europe/Africa, your data is stored in the Microsoft Azure region known as "West
  Europe".

The region is selected by the user who is signing up for the product. We create a tenant for your
organization in that region and guarantee that all your data always stays within that region.

If your company is split across multiple regions, you can select the region where the headquarters
are located or, alternatively, have a separate tenant for each region. Please note that in this case
Netwrix 1Secure will not provide a company-wide risk score.
