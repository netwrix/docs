---
title: "Azure SQL Managed Instance"
description: "Azure SQL Managed Instance"
sidebar_position: 10
---

# Azure SQL Managed Instance

## Overview

This add-on provides comprehensive audit monitoring for Azure SQL Managed Instance using Netwrix Auditor. The setup involves creating Microsoft Entra ID application registration, configuring Azure Storage for audit logs, setting up database-level auditing, and installing the Netwrix add-on.

The add-on works in collaboration with Netwrix Auditor, supplying audit data from Azure SQL Managed Instance. Aggregating data into a single audit trail simplifies analysis, makes activity monitoring more cost effective, and helps you keep tabs on your IT infrastructure.

## Prerequisites

Before starting the configuration, ensure you have:

- **Azure Subscription** with appropriate permissions
- **Azure SQL Managed Instance** deployed and accessible
- **Netwrix Auditor Server** installed and running
- **Administrative privileges** in Azure portal and SQL Managed Instance
- **Network connectivity** between Azure SQL Managed Instance and storage account

## Architecture Overview

The solution uses the following architecture:

```
[Azure SQL Managed Instance] --> [Audit Logs] --> [Azure Blob Storage] --> [Netwrix Add-on] --> [Netwrix Auditor]
```

The solution uses:
- **Microsoft Entra ID** for authentication
- **Azure Blob Storage** for audit log storage
- **Managed Identity** for secure access
- **Server and Database level auditing** for comprehensive coverage

## How It Works

On a high level, the add-on works as follows:

1. Azure SQL Managed Instance captures audit events at both server and database levels based on configured audit specifications.
2. Audit logs are automatically written to Azure Blob Storage in a structured format.
3. The Netwrix add-on connects to Azure Blob Storage using Microsoft Entra ID authentication.
4. The add-on processes audit logs and converts them into Netwrix Auditor-compatible format (Activity Records). Each Activity Record contains the user account, action, time, and other details.
5. Using the Integration API, the add-on sends the activity records to the Netwrix Auditor Server, which writes them to the Long-Term Archive and the Audit Database.

See the [Integration API](/docs/auditor/10.8/api/overview.md) topic for additional information on the structure of the Activity Record and the capabilities of the Netwrix Auditor Integration API.

## Audited Activities

The add-on captures comprehensive audit data including:

### Server-Level Events
- Failed and successful login attempts
- Server role membership changes
- Server principal changes (logins)
- Password changes
- Server state changes
- Server object changes
- Server permission changes
- Audit configuration changes
- Ownership changes

### Database-Level Events
- User and role management (create, drop, alter users)
- Role operations (create, drop, alter roles)
- Permission changes (grant, revoke, deny)
- Schema operations (create, drop schemas)
- Database object changes (tables, views, procedures)
- Ownership changes
- Backup and restore operations

## Limitations and Considerations

### Current Limitations
- **Single Instance Support**: This add-on version supports monitoring one Azure SQL Managed Instance per installation
- **Processing Delay**: There may be a delay between events occurring and appearing in Netwrix Auditor

### Future Enhancements
- Support for multiple SQL Managed Instances
- Advanced filtering and categorization options
- Real-time event processing capabilities
- Enhanced reporting and analytics features

## Support and Feedback

This Azure SQL Managed Instance add-on is a **free integration solution** for Netwrix Auditor.

**We value your feedback!** Your experience and suggestions help us improve the add-on. Please share your feedback on:
- Functionality and features
- Documentation and setup process
- Additional requirements or use cases

## Compatibility Notice

Make sure to check your product version, and then review and update your add-ons and scripts leveraging Netwrix Auditor Integration API. Download the latest add-on version in the Add-on Store.
