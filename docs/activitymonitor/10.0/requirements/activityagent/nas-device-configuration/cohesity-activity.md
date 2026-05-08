---
title: "Cohesity SmartFiles Activity Auditing Configuration"
description: "Cohesity SmartFiles Activity Auditing Configuration"
sidebar_position: 8
---

# Cohesity SmartFiles Activity Auditing Configuration

The Netwrix Activity Monitor can be configured to monitor file activity on Cohesity SmartFiles
devices. Activity Monitor reads activity from audit logs produced by the **File Services Audit
Logs** feature in Cohesity SmartFiles.

Cohesity disables auditing by default. You can enable or disable it per view. The audit logs are
stored in an internal view named `filesystem_audit`, accessed at the path
`\COHESITY_AUDIT_VIEW\filesystem_audit`. IP allowlists and SMB permissions control access to this
view.

To monitor Cohesity SmartFiles:

- Provision an API key for Cohesity API access and an account for access to the audit log share.
- Enable auditing in Cohesity SmartFiles.
- Add Cohesity SmartFiles to Activity Monitor.

## Provision Accounts

Monitoring Cohesity SmartFiles requires access by two methods:

- **Cohesity API** — to retrieve information about the cluster, shares, auditing settings, and,
  optionally, to enable auditing.
- **SMB/CIFS** — to read audit logs.

An API key is required for Cohesity API access. Unlike passwords, API keys bypass the Password
Policy and stay active for a set duration without expiring, which avoids disruption caused by
password rotation.

The API key can be created directly from the Activity Monitor Console using the built-in
instruction available at the API key step of the Add Host wizard — this is the recommended
approach. Alternatively, create the API key manually using the steps in the
[Create an API Key](#create-an-api-key) section.

For maximum security, use a local user account with only the minimum privileges required for
monitoring.

You can grant read-only SMB access to the log files to a domain user or group.

### Create a Role for API Access

Create a custom role to restrict access to only the services needed for activity monitoring.

The permissions required depend on whether you want Activity Monitor to enable auditing
automatically:

**Permissions for monitoring only**

- Cluster Management > **View Cluster Details**
- Cluster Management > **View Audit Logs**
- Storage Management > **Read Cohesity Views**

**Permissions for monitoring and automatic auditing configuration**

- Cluster Management > **View Cluster Details**
- Cluster Management > **View Audit Logs**
- Cluster Management > **Manage Cluster** (used to enable the global File Services Audit option)
- Storage Management > **Read Cohesity Views**
- Storage Management > **Manage Cohesity Views** (used to enable auditing for specific views)

**Step 1 –** Open the Cohesity web interface.

**Step 2 –** Navigate to **Settings** > **Access Management** > **Roles**.

**Step 3 –** Select **Add Custom Role** and specify a name (for example, `Netwrix Activity Monitor`).

**Step 4 –** Assign the permissions you want and save the role.

### Create a Local User for API Access

**Step 1 –** Open the Cohesity web interface.

**Step 2 –** Navigate to **Settings** > **Access Management** > **Users & Groups**.

**Step 3 –** Select **Add Local User**.

**Step 4 –** Specify a username (for example, `activity_monitor`) and a password.

**Step 5 –** In the **Roles** field, select the role created in the previous section.

**Step 6 –** If MFA is enabled, disable it for this user.

**Step 7 –** Select **Add** to create the user.

:::note
You can also use a domain user, but MFA can't be disabled for domain users. As a result, you
must either authenticate manually or use a local administrator account to create an API key on
behalf of the domain user. Refer to the
[Cohesity documentation](https://developers.cohesity.com/v1-cluster-7.3.2/reference/createuserapikey)
for additional information.
:::

### Create an API Key

The recommended way to create an API key is through the Activity Monitor Console. When adding a
Cohesity SmartFiles host, the Console provides a built-in instruction at the API key step of the
wizard. Enter the username, password, a name for the key, and the duration in days you want, then
select **Create API Key**. The Console will generate the key automatically.

:::note
The credentials entered in the Console are used only once to retrieve the API key and aren't
saved or cached.
:::

Alternatively, create the API key manually using the following curl or PowerShell commands. Replace
`<cluster_name>` with the hostname or IP address of the Cohesity cluster.

**curl**

```bash
# Obtain the access token from the "accessToken" field in the response
curl -k -X POST https://<cluster_name>/irisservices/api/v1/public/accessTokens \
  -H "accept: application/json" \
  -d "{\"domain\":\"LOCAL\",\"username\":\"<username>\",\"password\":\"<password>\"}"

# Obtain the user SID from the "sid" field in the response
curl -k -X GET "https://<cluster_name>/irisservices/api/v1/public/users?names=<username>" \
  -H "accept: application/json" \
  -H "Authorization: Bearer <accessToken>"

# Obtain the API key from the "apiKey" field in the response
curl -k -X POST https://<cluster_name>/v2/users/<SID>/api-keys \
  -H "accept: application/json" \
  -H "Authorization: Bearer <accessToken>" \
  -d "{\"name\":\"<api-key-name>\",\"isActive\":true,\"expiryTimeMsecs\":<duration-unix-timestamp>}"

# To delete API keys, first retrieve the IDs, then perform the deletion
curl -k -X GET "https://<cluster_name>/v2/api-keys?ownerSids=<SID>" \
  -H "accept: application/json" \
  -H "Authorization: Bearer <accessToken>"
curl -k -X DELETE https://<cluster_name>/v2/users/<SID>/api-keys/<apiKeyId> \
  -H "accept: application/json" \
  -H "Authorization: Bearer <accessToken>"
```

**PowerShell**

```powershell
# Configuration variables
$clusterName = "<cluster_name>"
$username = "<username>"
$password = "<password>"

# Skip certificate validation
[System.Net.ServicePointManager]::ServerCertificateValidationCallback = { $true }

# Obtain the access token from the "accessToken" field in the response
$tokenResponse = Invoke-WebRequest -Uri "https://$clusterName/irisservices/api/v1/public/accessTokens" `
  -Method POST -UseBasicParsing `
  -Headers @{"accept" = "application/json"} `
  -Body (@{domain="LOCAL"; username=$username; password=$password} | ConvertTo-Json) `
  -ContentType "application/json" | ConvertFrom-Json
$accessToken = $tokenResponse.accessToken

# Obtain the user SID from the "sid" field in the response
$userResponse = Invoke-WebRequest -Uri "https://$clusterName/irisservices/api/v1/public/users?names=$username" `
  -Method GET -UseBasicParsing `
  -Headers @{"accept" = "application/json"; "Authorization" = "Bearer $accessToken"} | ConvertFrom-Json
$userSid = $userResponse[0].sid

# Obtain the API key from the "apiKey" field in the response
$expiryTimeMsecs = [System.DateTimeOffset]::UtcNow.AddDays(3650).ToUnixTimeMilliseconds()
$apiKeyResponse = Invoke-WebRequest -Uri "https://$clusterName/v2/users/$userSid/api-keys" `
  -Method POST -UseBasicParsing `
  -Headers @{"accept" = "application/json"; "Authorization" = "Bearer $accessToken"} `
  -Body (@{name="<api-key-name>"; isActive=$true; expiryTimeMsecs=$expiryTimeMsecs} | ConvertTo-Json) `
  -ContentType "application/json" | ConvertFrom-Json
$apiKey = $apiKeyResponse.apiKey

Write-Host "API Key: $apiKey"

# To delete API keys, first retrieve the IDs, then perform the deletion
# $apiKeysResponse = Invoke-WebRequest -Uri "https://$clusterName/v2/api-keys?ownerSids=$userSid" `
#   -Method GET -UseBasicParsing `
#   -Headers @{"accept" = "application/json"; "Authorization" = "Bearer $accessToken"} | ConvertFrom-Json
# $apiKeyId = $apiKeysResponse.apiKeys[0].id
# Invoke-WebRequest -Uri "https://$clusterName/v2/users/$userSid/api-keys/$apiKeyId" `
#   -Method DELETE -UseBasicParsing `
#   -Headers @{"accept" = "application/json"; "Authorization" = "Bearer $accessToken"}
```

## Enable Auditing

### Enable File Services Audit in Cohesity

Cohesity disables auditing by default.

**Step 1 –** Open the Cohesity web interface.

**Step 2 –** Navigate to **System** > **Audit Logs** > **Log Settings**.

**Step 3 –** In the **Log Settings** tab, turn on the **File Services Audit** option.

**Step 4 –** Set the **Log Retention Period** as needed.

:::note
Activity Monitor retrieves audit log records and stores them in its own log files or transfers them
to other Netwrix or SIEM products. For this reason, long retention periods in Cohesity aren't
required.
:::

Refer to the *File Services Audit Logs* article in the Cohesity SmartFiles documentation for
additional information.

### Grant Access to the Audit Logs

By default, all clients in the Global Allowlist set at the cluster level can access audit logs.
Use the **Override Allowlist** option to restrict access to a specific subnet. SMB permissions
on the view also control access for AD or local principals. Both settings can be managed on the
**System** > **Audit Logs** > **Log Settings** page.

**Override global IP allowlist**

**Step 1 –** In the **IP Allowlist** section, enable **Override Global IP Allowlist**.

**Step 2 –** Select **Add** and specify the IP address or subnet of the Activity Monitor Agent in
CIDR format (for example, `10.0.0.0/24` for IPv4 or `FE80:CD00::211E:729C/60` for IPv6).

**Grant SMB permissions**

**Step 1 –** In the **SMB Permissions** section, select **Add**.

**Step 2 –** Choose an AD domain and principal, and assign the **Allow** permission.

**Verify access**

The Activity Monitor Agent reads the audit logs via SMB.

**Step 1 –** In the Cohesity web interface, go to **System** > **Audit Logs** > **Log Settings**.

**Step 2 –** In the **Log Location** section, copy the SMB path.

**Step 3 –** In File Explorer or another SMB client, connect to the hidden internal view
`COHESITY_AUDIT_VIEW`.

**Step 4 –** Verify access to `\\<cluster_name>\COHESITY_AUDIT_VIEW\filesystem_audit`.

### Enable Auditing for Views

Auditing can be enabled or disabled per view.

**Step 1 –** Open the Cohesity web interface.

**Step 2 –** Navigate to **System** > **Audit Logs** > **File Services**.

**Step 3 –** In the **Audit Status of Views** section, open the **Audit Logs** menu, select
**Enabled**, and then select **Apply**.

**Step 4 –** To enable or disable auditing for a specific view, toggle the option in the **Audit
Logs** column.

## Add Cohesity SmartFiles to Activity Monitor

**Step 1 –** In the Console, open the **Monitored Hosts/Services** page and select **Add
Host/Service**.

**Step 2 –** Choose the agent that will monitor the Cohesity SmartFiles cluster.

**Step 3 –** Select **Cohesity SmartFiles** and enter the Cohesity cluster name.

**Step 4 –** Specify the API key to access the Cohesity cluster via the API. Use the built-in
instruction to create the API key directly from this step.

**Step 5 –** Specify the account that has SMB access to the `COHESITY_AUDIT_VIEW` audit logs share.

**Step 6 –** Select **Connect** to verify that the product has access to the Cohesity cluster.

**Step 7 –** Select the views to monitor. If the list is left empty, the product monitors all
views that have auditing enabled.

**Step 8 –** Select **Enable Audit Log option for specified views** if you want the product to
automatically enable auditing for all views in the monitoring scope.

**Step 9 –** Complete the wizard by selecting the required operations and outputs.

:::warning
Audit log events from Cohesity SmartFiles may be delayed. Events can appear with a latency ranging
from a few minutes up to an hour.

This delay is by design: Cohesity prioritizes active workloads over audit log flushing. As a
result, with the default configuration, audit logs are suitable for historical analysis but not
real-time monitoring.

An internal configuration option exists in Cohesity that can reduce this latency by forcing audit
logs to be written more frequently. If you need to reduce latency, contact Cohesity Support.
:::
