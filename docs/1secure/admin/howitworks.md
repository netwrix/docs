---
title: "How It Works"
description: "How It Works"
sidebar_position: 110
---

# How It Works

Netwrix 1Secure is a Microsoft Azure hosted, multi-tenant SaaS application that provides a single
location to manage both on-premises and cloud environments. The following figure shows the solution
architecture and component interactions.

![overview_table](/images/1secure/admin/overview_table.webp)

Netwrix 1Secure On-Prem Agent is a lightweight Windows service which you deploy in your network. The
agent collects aggregated data from your on-premises Netwrix 1SecureAPI and/or uploads the data to
your Netwrix 1Secure tenant via REST API calls over HTTPS every 15 minutes.

Netwrix 1SecureAPI or Azure Function App receives the data from Netwrix 1Secure On-Prem Agent.
Token-based authentication verifies communication between the Netwrix 1Secure API and the agent.
The service behind the Netwrix stores the data in the Azure SQL Database, segregated by
tenant (organization).

The Cosmos Database stores all the activity records. The Main Database stores the configuration settings, source
management, and alerts.

Netwrix 1Secure Website is the presentation layer of the product that retrieves data from the Azure
SQL database and presents it to users. Users can access this web portal with their corporate
credentials using Azure AD Authentication (OAuth 2.0). The site retrieves data via API calls made on the
user's behalf.
