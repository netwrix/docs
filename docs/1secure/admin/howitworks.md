---
title: "How It Works"
description: "How It Works"
sidebar_position: 110
---

# How It Works

Netwrix 1Secure is a Microsoft Azure hosted, multi-tenant SaaS application that provides a single
location to manage both on-premises and cloud environments. Solution architecture and components
interactions are shown in the figure below.

![overview_table](/images/1secure/admin/overview_table.webp)

Netwrix 1Secure On-Prem Agent is a lightweight Windows service which you deploy in your network. The
agent collects aggregated data from your on-premises Netwrix 1SecureAPI and/or uploads the data to
your Netwrix 1Secure tenant via REST API calls over HTTPS every 15 minutes.

Netwrix 1SecureAPI or Azure Function App receives the data from Netwrix 1Secure On-Prem Agent.
Token-based authentication is used for verification between the Netwrix 1Secure API and the agent.
The service behind the Netwrix stores the data in the Azure SQL Database. The data is segregated by
tenant (organization).

All the activity records are stored in the Cosmos Database. The configuration settings, source
management, alerts are stored in the Main Database.

Netwrix 1Secure Website is the presentation layer of the product that retrieves data from the Azure
SQL database and presents it to users. Users can access this web portal with their corporate
credentials using Azure AD Authentication (OAuth 2.0). Data is retrieved via API calls made on the
user's behalf.
