---
title: "Copilot"
description: "Copilot"
sidebar_position: 70
---

# Copilot

Microsoft Copilot is an AI-powered assistant designed to help users in Microsoft 365 apps like Word,
Excel, and Teams. It leverages large language models to assist with tasks such as generating
content, analyzing data, and automating workflows.

To retrieve activity logs on Copilot interactions, the Add-on requires an Azure App registration.
This allows the application to interact with Microsoft services by obtaining necessary logs and data
related to Copilot activity.

The Netwrix Auditor Add-On for Microsoft Copilot works in collaboration with Netwrix Auditor. To get
the add-on up and running, refer the following topics:

- [Deployment Procedure](/docs/auditor/10.8/addon/copilot/deployment.md)
- [Work with Collected Data](/docs/auditor/10.8/addon/copilot/collecteddata.md)

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

- The Audit Database settings are configured in Auditor Server. See the
  [Prerequisites](/docs/auditor/10.8/api/prerequisites.md) and
  [Audit Database](/docs/auditor/10.8/admin/settings/auditdatabase.md) topics for additional information.
- The TCP 9699 port (default Integration API port) is open for inbound connections.
- The user writing data to the Audit Database is granted the Contributor role in Auditor. See the
  [Role-Based Access and Delegation](/docs/auditor/10.8/admin/monitoringplans/delegation.md) topic for additional
  information.
- Alternatively, you can grant the Global administrator role or add the user to the Netwrix Auditor
  Administrators group. In this case, this user will have the most extended permissions in the
  product.
- Active Directory Domain Services or Microsoft Entra Kerberos is used as an Identity source. 

## How the Copilot Add-on Works

On a high level, the add-on works as follows:

- The add-on collects integration logs from the specified Azure storage account. This includes the
  information about the documents that have been used.
- The add-on reworking the collected logs into the Netwrix Auditor compatible format, which is
  Activity Records. Each Activity Record contains the user information, such as an account, action,
  time, and other details.
- Using the Integration API, the add-on sends the activity records to the Netwrix Auditor Server,
  which writes them to the Long-Term Archive and the Audit Database.
