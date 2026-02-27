---
title: "Service Accounts"
description: "Service Accounts"
sidebar_position: 50
---

# Service Accounts

The Service Accounts dashboard provides visibility into service account usage across the environment, enabling organizations to identify, classify, and assess non-human accounts that operate outside typical user authentication behavior. It includes accounts that have a defined servicePrincipalName, account type reflective of a service account, or repeated authentication patterns. The dashboard identifies service accounts with machine learning to identify pattern-based authentication.

![Netwrix Threat Manager Service Accounts Dashboard](/images/threatmanager/3.1/administration/serviceaccounts/dashboard.webp)

There are three types of service accounts:
- dMSA, gMSA, and sMSA - Group / Delegated / Standalone Managed Service Account
- Accounts marked with servicePrincipalName (SPN)
- Those discovered by machine learning

## Column Definitions

### Service Account
The primary identifier for the service account. Displays the account's display name (if available) or NT account name. This column is clickable and links to the detailed user information page.

### Domain
The Active Directory domain to which the service account belongs.

### Type
The type of service account. Possible values include:
- **User** (0) - Standard user account used as a service account
- **sMSA** (1) - Standalone Managed Service Account
- **gMSA** (2) - Group Managed Service Account
- **dMSA** (3) - Domain Managed Service Account

### Enabled
Indicates whether the service account is currently enabled or disabled in Active Directory.

### Tags
Custom tags associated with the service account for organization and categorization. Displays up to 2 tags visibly with an overflow indicator for additional tags. Each tag includes a name and description (shown on hover).

### Auth Protocols
Authentication protocols supported or used by the service account (e.g., Kerberos, NTLM). Displays up to 2 protocols visibly with an overflow indicator for additional protocols.

### Encryption Types
Encryption types supported by the service account for Kerberos authentication (e.g., AES128, AES256, RC4). Displays up to 2 encryption types visibly with an overflow indicator for additional types.

### SPNs
Service Principal Names associated with the service account. SPNs are unique identifiers that Kerberos uses to associate service instances with service accounts. Displays up to 2 SPNs visibly with an overflow indicator for additional SPNs.

### Targets
The number of target systems or resources that this service account accesses or authenticates to.

### Clients
The number of client systems or applications that use this service account for authentication.

### Created
The date and time when the service account was created in Active Directory.
