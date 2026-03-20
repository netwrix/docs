---
title: "Testing Connections"
description: "Validating source connectivity before scanning"
sidebar_position: 30
---

# Testing Connections

Before running scans, verify that Access Analyzer can reach and authenticate to each configured source using the test connection feature. Connection testing is available both during source creation (in the wizard) and on existing sources.

## Testing During Source Creation

The Connect Source wizard includes a **Test Connection** button in Step 2:

- **File Server** — Tests all servers in parallel. Each server shows its own status: **Connected** (green), **Failed** (red), or **Testing** (spinner). A summary toast shows the overall result (for example, "All 3 connections successful" or "1 of 3 failed").
- **Entra ID** — Tests the OAuth2 connection to the specified Azure AD tenant. Status appears inline: "Successfully connected to Entra ID" or "Connection failed" with an error message.
- **Active Directory** — Tests connectivity to each domain controller.

:::note
Connection testing in the wizard is non-blocking. You can proceed to the next step regardless of test results.
:::

## Testing Existing Sources

To test an existing source connection:

1. Navigate to **Sources** in the sidebar.
2. Locate the source in the list and click its row to open the detail view.
3. Click **Test Connection**.
4. Wait for the test to complete. Results appear inline.

## What Gets Tested

The test connection operation sends a request to `POST /v1/sources/test-connection` with the source's connection parameters. It validates:

| Check | Description |
|---|---|
| **Network Reachability** | Confirms the target host and port are accessible from the application server |
| **Authentication** | Verifies the associated service account credentials are accepted |
| **Authorization** | Confirms the service account has sufficient permissions to read the target data |

## Troubleshooting

If a connection test fails:

- Verify the source hostname, port, and path are correct.
- Confirm the service account credentials have not expired or been rotated.
- Check that network firewalls allow traffic between the Access Analyzer server and the target host.
- For Entra ID, verify the Tenant ID is correct and the app registration has the required API permissions.
- Review [System Logs](/docs/accessanalyzer/1_0/admin/systemlogs) for detailed error messages.

:::note
Connection tests do not scan data. They only validate that the connection can be established and authenticated.
:::
