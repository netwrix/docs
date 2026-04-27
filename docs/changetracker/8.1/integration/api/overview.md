---
title: "API"
description: "ChangeTracker API Documentation"
sidebar_position: 20
---

# API

Netwrix Change Tracker provides a comprehensive REST API that allows customers to integrate with the platform programmatically. This is particularly useful for customers who run multiple instances of Netwrix Change Tracker in multiple regions, as they can use the API to pull data from each instance and build global reports across all instances.

## Authentication

All API endpoints require authentication. See [Authentication](/docs/changetracker/8.1/integration/api/authentication.md) for an example script.

## API Reference

For a complete interactive reference of all Hub API endpoints, see the [ChangeTracker Hub API Reference](/docs/changetracker/8_1/integration/api/api-reference). The Hub generates this reference directly from its OpenAPI 3.0 spec, covering all available endpoints with request/response schemas.

The raw OpenAPI 3.0 spec (YAML) is also available for download or import into tools like Postman and Insomnia.

## Available Endpoints

This section documents the following commonly-used API endpoints in detail:

- [Agents](/docs/changetracker/8.1/integration/api/agents.md) – Pull data on agent statuses, configurations, and group memberships using the agentsRanked endpoint. Use this API to retrieve detailed information about all agents in your environment, including their group memberships and applied tracking templates.

- [Register Agents](/docs/changetracker/8.1/integration/api/register-agents.md) – Agents normally use this endpoint to register with the Hub, but you can also use this API to register proxied devices through a proxy agent.

- [Credentials](/docs/changetracker/8.1/integration/api/credentials.md) – Manage authentication credentials that ChangeTracker uses to connect to various systems and services. This API provides endpoints for creating, retrieving, updating, and deleting credentials for different credential types including Shell, Database, FTP, Cloud, ESX, ITSM, and Splunk.

## API Usage Best Practices

Follow these best practices when using the ChangeTracker API:

1. **Rate Limiting**: Implement appropriate rate limiting in your applications to avoid overwhelming the API.

2. **Error Handling**: Always implement proper error handling in your code to gracefully handle API errors.

3. **Authentication**: Store API credentials securely and never expose them in client-side code.

4. **Data Filtering**: When retrieving large datasets, use the available filtering parameters to limit the amount of data returned.

5. **Pagination**: For endpoints that return large collections, implement pagination to improve performance.

## Example Usage

The following example shows how to use the API with PowerShell:

```powershell
# Set up a session variable for the Admin user
$myWebSession = GetAdminUserSession

# Define the API endpoint
$uri = "https://changetracker.example.com/api/agentsRanked"

# Define the request body
$requestBody = @{
    DeviceFilter = @{
        GroupNames = @()
        AgentDeviceIds = @()
        AgentDisplayNames = @()
        ExcludeProxiedDevices = $false
        OnlineStatuses = @("Online")
    }
    GetAgentGroupDetails = $true
    GetRelatedTemplates = $true
} | ConvertTo-Json

# Make the API request
$result = Invoke-RestMethod -Method Post -ContentType application/json -Uri $uri -WebSession $myWebSession -Body $requestBody
```

The [Available Endpoints](#available-endpoints) section covers each endpoint's request parameters, authentication requirements, and usage examples.
