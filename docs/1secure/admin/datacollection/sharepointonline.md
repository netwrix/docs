---
title: "SharePoint Online Auditing"
description: "SharePoint Online Auditing"
sidebar_position: 30
---

# SharePoint Online Auditing

Use Netwrix 1Secure to audit Office 365 organizations that have established modern
authentication as their identity management approach, including support for
[multi-factor authentication (MFA)](https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-howitworks).
See the Microsoft
[App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md)
article for additional information.

In this scenario, Netwrix 1Secure accesses the cloud-based infrastructure via Microsoft Graph and
other modern APIs, authenticated through a pre-configured Microsoft Entra ID application,
formerly Azure AD, with appropriate access permissions. Register a Microsoft Entra ID app and
provide its settings to Netwrix 1Secure when adding a SharePoint Online data source.

## Modern Authentication

With modern authentication support, you can audit organizations where MFA is enabled for
all users, including service accounts. See the
[App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md)
topic for additional information.

## Configure SharePoint Online Auditing

To collect audit data from your SharePoint Online and OneDrive for Business, Netwrix 1Secure uses a
dedicated Microsoft Entra ID application and the API access permissions granted to that app.
The **Run setup script** connect method creates the app registration and configures permissions
automatically. With this app, you can collect activity and state-in-time data. See the
[App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md)
topic for additional information.

## SharePoint Online Connectors

SharePoint Online is a data source type that collects from Microsoft 365 with an app registration
credential. It is separate from the SharePoint Online report-delivery integration. The source type
allows one source per organization and defaults to 25 maximum concurrent jobs. The source asks for
the **Tenant ID**, described as "The Tenant ID for the SharePoint Online source." The Tenant ID must
be a GUID. Otherwise, the message is "{title} must be a valid Tenant ID (GUID)."

SharePoint Online has four connectors:

- **SharePoint Online Activity**
- **SharePoint Online State**
- **SharePoint Online Data Classification**
- **SharePoint Online Copilot**

The cloud source wizard enables Activity and State by default. It doesn't enable Data
Classification and Copilot. Add them later.

Microsoft Entra ID is a required service in the cloud connect wizard, and SharePoint Online is
optional and selected by default.

### Licensing

SharePoint Online Activity, State, and Copilot are licensed for trial tiers and the `DSPM1`, `DSPM3`,
Pro Data, and Pro Complete tiers. Data Classification is licensed only for trial, `DSPM3`, and Pro
Complete.

### Permissions and Authentication

The wizard lists the Microsoft Graph application permissions `Directory.Read.All`,
`AuditLog.Read.All`, and `Policy.Read.All`. When SharePoint Online is selected, it adds the Graph
permissions `Sites.Read.All` and `Sites.ReadWrite.All` and the SharePoint permission
`Sites.FullControl.All`. The wizard describes `Sites.FullControl.All` as "Have full control of all
site collections. This permission is required to collect state-in-time reports." All
cloud connectors also require the Office 365 Management APIs permission `ActivityFeed.Read`.

The setup script and Register in Azure paths ask for the Directory (tenant) ID, Client ID, and
Client Secret of the app registration. The SharePoint Online data connector doesn't use the client
secret. It requires a certificate instead, and this connector doesn't support client secrets.
Netwrix 1Secure provides the certificate file during configuration. Upload this file to the same app
registration.

### Activity Connector

The Activity connector collects on a 6-minute cycle. It has these settings:

- **Audit SharePoint Online read access** – Off by default.
- **Excluded Applications** – A list of client IDs (GUIDs) for applications to exclude from
  SharePoint Online Activity auditing. Netwrix 1Secure automatically excludes the application
  registration assigned to this connector from activity auditing.

### State Connector

The State connector has the **Collect state-in-time data for personal OneDrives** checkbox. It is
off by default. This connector requires the `Sites.FullControl.All` permission.

### Data Classification Connector

The Data Classification connector has these settings:

- **Run OCR to improve classification of images (increases processing time)** – Off by default.
- **Sensitive Data Types to Classify** – CCPA, CMMC, Credentials, Financial Records, GDPR, GDPR
  Restricted, GLBA, HIPAA, PCI DSS, PHI, and PII.
- **Clear Sensitivity Label if not classified as sensitive**
- **Allow overwriting existing Sensitivity Labels**
- **Allow downgrading of existing Sensitivity Labels (If overwriting enabled)**
- **Apply labels using Graph API (Requires enabling metered APIs)**
- **Classifier Function App Url**
- **Service Bus SAS Connection String**

The maximum file size defaults to 50 MB. Register the classifier before saving. Otherwise, the
message tells you to register the classifier before saving your changes.

The new web UI can't edit this connector. It shows a message that the new UI doesn't support
editing this connector type yet and directs you to the classic UI to make changes.

### Copilot Connector

The Copilot connector has no settings.

### Object Types

State and reports name SharePoint Online objects as SharePoint Online Tenant, SharePoint Online
Site Collection, SharePoint Online Site, SharePoint Online Document Library, SharePoint Online
List, SharePoint Online List Item, SharePoint Online Folder, SharePoint Online Document, SharePoint
Online Group, SharePoint Online Permission Set, and SharePoint Online Share Links Permission Set.
