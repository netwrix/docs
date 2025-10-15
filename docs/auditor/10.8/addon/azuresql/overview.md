---
title: "Azure SQL Managed Instance"
description: "Azure SQL Managed Instance"
sidebar_position: 70
---

# Azure SQL Managed Instance Audit

## Overview
This guide provides comprehensive instructions for configuring audit monitoring for Azure SQL Managed Instance using Netwrix Auditor.
The setup involves creating Microsoft Entra ID application registration, configuring Azure Storage for audit logs, setting up database-level auditing, and installing the Netwrix add-on.

**Download link:**
[https://netwrix.com/go/auditor_addon_azure_sql_mi](https://netwrix.com/go/auditor_addon_azure_sql_mi)


## Prerequisites
Before starting the configuration, ensure you have:

- **Azure Subscription** with appropriate permissions
- **Azure SQL Managed Instance** deployed and accessible
- **Netwrix Auditor Server** installed and running
- **Administrative privileges** in Azure portal and SQL Managed Instance
- **Network connectivity** between Azure SQL MI and storage account


## Architecture Overview

[Azure SQL MI] --> [Audit Logs] --> [Azure Blob Storage] --> [Netwrix Add-on] --> [Netwrix Auditor]


The solution uses:
- **Microsoft Entra ID** for authentication
- **Azure Blob Storage** for audit log storage
- **Managed Identity** for secure access
- **Server and Database level auditing** for comprehensive coverage

# **Limitations and Considerations**

- **Single Instance Support**: This add-on version supports monitoring one Azure SQL Managed Instance per installation
- **Processing Delay**: There may be a delay between events occurring and appearing in Netwrix Auditor


# Support and Feedback


This Azure SQL Managed Instance add-on is a **free integration solution** for Netwrix Auditor.

**Your feedback matters.** Suggest features or improvements for Netwrix Auditor and vote for your favorites in the **[Netwrix Community](https://community.netwrix.com/c/products/auditor/ideas/93)**.

Please share your feedback on:

- Functionality and features
- Documentation and setup process
- Additional requirements or use cases



# Additional Resources


**Microsoft Documentation**
- [Create a storage account](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create)
- [Azure SQL Managed Instance auditing](https://learn.microsoft.com/en-us/azure/azure-sql/managed-instance/auditing-configure)
- [Assign Azure roles using the Azure portal](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal)
