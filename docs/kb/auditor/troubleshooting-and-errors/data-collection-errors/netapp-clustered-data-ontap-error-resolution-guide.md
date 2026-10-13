---
description: >
  This knowledge base article provides a comprehensive guide to troubleshooting common errors encountered when configuring and using NetApp Clustered Data ONTAP with Netwrix Auditor.
keywords:
  - NetApp
  - Clustered Data ONTAP
  - 6104
  - 6127
  - 6129
  - 6180
  - 6181
  - 6186
  - 6187
  - access denied
  - auditing not enabled
  - OAuth
products:
  - auditor
sidebar_label: NetApp Clustered Data ONTAP Error Resolution Guide
tags:
  - kb
  - troubleshooting-and-errors
title: NetApp Clustered Data ONTAP Error Resolution Guide
knowledge_article_id:
---

# NetApp Clustered Data ONTAP Error Resolution Guide

## Introduction
This article describes how to troubleshoot errors that occur when you configure and use NetApp Clustered Data ONTAP with Netwrix Auditor.

## Quick Reference
| Error Code | Description | Primary Cause |
|------------|-------------|---------------|
| 6104 | Access Denied or Audit Configuration Not Found | Missing role permissions or no audit configuration on the SVM |
| 6127 | Incorrectly Configured Auditing | Insufficient SACLs |
| 6129 | Cannot Adjust Audit Settings | DPA lacks SACL rights |
| 6180 | Cannot Start Auditing | Connection, REST, or OAuth 2.0 failure |
| 6181 | Auditing Not Enabled | SVM audit disabled |
| 6186 | Event Log Files Deleted | Missing/wrong log path |
| 6187 | Audit Disabled | Auditing turned off on the SVM |

## Common NetApp Errors and Resolutions

> **IMPORTANT:** Ensure proper backup procedures are in place before making configuration changes. Consider performance impacts when enabling detailed audit logging on high-traffic systems. Regularly monitor HealthLog events to stay updated on significant occurrences.

### Error 6104: Unable to Process Item

#### Scenario 1: Access Denied - Insufficient Privileges

**Error Description:**

```text
Unable to process item: Access is denied. Insufficient privileges: user <DPA user> does not have read/write access to this resource.
```

**Cause:**
The SVM (Storage Virtual Machine) role does not have sufficient rights to perform the required operations.

**Resolution:**
1. Verify that the NetApp role exists with the proper permissions.
2. Check that the DPA (Data Processing Account) user is assigned to the correct role.
3. Ensure the role includes necessary ONTAPI and REST API permissions.
4. Verify both ONTAPI role and RESTAPI role configurations.

#### Scenario 2: Audit Configuration Not Found (HTTP 404)

**Error Description:**

```text
Unable to process item: https://<ONTAP address>/api/protocols/audit/<SVM UUID>: HTTP 404 Not Found, response: code="4", message="entry doesn't exist".
```

**Cause:**
The SVM has no audit configuration, or the request reached the wrong ONTAP REST address.

**Resolution:**
1. Verify the audit configuration on the SVM: `vserver audit show -vserver <SVM>`
2. If no configuration exists, create it: `vserver audit create -vserver <SVM> -destination <log_path>`
3. Enable auditing: `vserver audit enable -vserver <SVM>`
4. Verify that the ONTAP REST address specified for the monitored item is correct and that the REST web service is enabled for the SVM.

**Documentation:**
[Create NetApp API role](/docs/auditor/10_9/configuration/fileservers/netappcmode/apirole#create-role-on-netapp-clustered-data-ontap-8-or-ontap-9)

### Error 6127: Incorrectly Configured Auditing Entries

**Error Description:**

```text
The following objects have incorrectly configured auditing entries: <objects list>
```

**Cause:**
Autoaudit is disabled and the provided list of files/folders have insufficient SACLs (System Access Control Lists) or inheritance is disabled.

**Resolution:**
1. Check and configure proper SACLs on affected objects.
2. Enable Autoaudit feature to automatically set SACLs.
3. Verify that audit inheritance is properly configured.
4. Review CIFS share audit settings.

**Documentation:**
[Configure Audit Settings for File Shares](/docs/auditor/10_9/configuration/fileservers/netappcmode/share)

### Error 6129: Cannot Adjust Audit Settings

**Error Description:**

```text
Netwrix Auditor could not adjust audit settings.
```

**Cause:**
The DPA does not have rights to set or change SACLs.

**Resolution:**
1. Verify DPA user permissions on audited objects.
2. Check that the DPA account has "Manage auditing and security log" privilege.
3. Ensure proper role assignment for the DPA user.
4. Test permissions on a small subset of objects first.

### Error 6180: Cannot Start Auditing

**Error Description:**

```text
Cannot start auditing the <SVM> server. Cannot connect to file server.
```

The text in parentheses in each scenario heading identifies the scenario.

#### Scenario 1: Connection Could Not Be Established (WinHttpSendRequest 12029)

**Cause:**
The Auditor server cannot reach the ONTAP REST endpoint. The address or port is wrong, a firewall blocks the connection, or the SVM has no enabled management or data LIF (logical interface).

**Resolution:**
1. Verify the SVM name or IP address specified for the monitored item.
2. Check that no firewall blocks HTTPS (port 443) from the Auditor server to the SVM.
3. Verify that the SVM has an enabled LIF: `network interface show -vserver <SVM>`
4. Ensure the LIF status is `up` for both admin and operational status.
5. Check the service policy applied to the LIF: `network interface show -vserver <SVM> -fields service-policy`
6. Verify that the policy includes the `management-https` service: `network interface service-policy show -vserver <SVM> -policy <policy_name>`
7. If the service is missing, add it to a custom policy and apply that policy to the LIF. For older ONTAP versions, check the system service firewall policy instead.

**Documentation:**
[Configure Service Policy](/docs/auditor/10_9/configuration/fileservers/netappcmode/servicepolicy)

#### Scenario 2: REST Endpoint Not Found (HTTP 404)

**Cause:**
The ONTAP REST server address is wrong, the REST web service is not enabled for the SVM, or the SVM interfaces are not configured properly.

**Resolution:**
1. Verify the ONTAP REST server address specified for the monitored item.
2. Ensure the REST web service is enabled for the SVM. List the web services: `vserver services web show -vserver <SVM>`
   See [Configure API Web Access](/docs/auditor/10_9/configuration/fileservers/netappcmode/webaccess) for details.
3. Verify the SVM interface configuration.
4. Ensure auditing is configured on the SVM: `vserver audit show -vserver <SVM>`

#### Scenario 3: OAuth 2.0 Client ID Not Registered (invalid_client)

**Error Description:**

```text
OAuth 2.0 token endpoint <identity provider URL>: HTTP 400 Bad Request, error="invalid_client".
```

**Cause:**
The Client ID specified for the monitored item is not registered in the identity provider (for example, AD FS).
The Client secret is wrong or expired.

**Resolution:**
1. Compare the Client ID in the monitored item settings with the client identifier registered in the identity provider.
2. Check the Client secret or recreate it if needed.
3. Correct the Client ID or register the client in the identity provider.

#### Scenario 4: OAuth 2.0 Token Endpoint Name Not Resolved (WinHttpSendRequest 12007)

**Cause:**
The Auditor server cannot resolve the DNS name of the token endpoint. The name is misspelled or the DNS settings are incorrect.

**Resolution:**
1. Verify the spelling of the token endpoint name.
2. Check that the Auditor server can resolve the name: `nslookup <identity provider FQDN>`
3. Correct the DNS settings on the Auditor server if necessary.

#### Scenario 5: OAuth 2.0 Token Rejected by ONTAP (HTTP 401)

**Error Description:**

```text
HTTP 401 Unauthorized, WWW-Authenticate: error="invalid_token", error_description="JWT token could not be validated", response: code="6691623", message="User is not authorized."
```

**Cause:**
The identity provider issued a token, but ONTAP could not validate it. The OAuth 2.0 client configuration on ONTAP is missing or incorrect, or the identity provider certificate is not installed on ONTAP.

**Resolution:**
1. Verify that OAuth 2.0 is enabled and configured on ONTAP: `security oauth2 show`
2. Verify the OAuth 2.0 client configuration: `security oauth2 client show`
3. Verify that the identity provider root CA or self-signed certificate is installed: `security certificate show -type server-ca -vserver <admin-SVM>`
4. If the certificate is missing, install it: `security certificate install -type server-ca -vserver <admin-SVM>`

**Documentation:**
[Configure ONTAP](/docs/auditor/10_9/configuration/fileservers/netappcmode/oauth2/ontap)

#### Scenario 6: Remote User Claim Not Set (AD FS, HTTP 401)

**Error Description:**

```text
HTTP 401 Unauthorized, WWW-Authenticate: error="invalid_token", error_description="Could not set remote user", response: code="6691623", message="User is not authorized."
```

**Cause:**
The OAuth 2.0 client on ONTAP uses a wrong claim to identify the user. For AD FS, the claim must be `appid`.

**Resolution:**
1. Check the claim configured for the client: `security oauth2 client show -instance`
2. Verify that the `Remote User Claim` value is `appid`. If the value is different, recreate the client with the `-remote-user-claim appid` parameter, as described in [Configure AD FS](/docs/auditor/10_9/configuration/fileservers/netappcmode/oauth2/adfs).
3. In AD FS, verify that the application permissions for Auditor include the `allatclaims` scope. Without it, the access token does not contain the `appid` claim.

**Documentation:**
[Configure AD FS](/docs/auditor/10_9/configuration/fileservers/netappcmode/oauth2/adfs)

### Error 6181: Auditing Not Enabled

**Error Description:**
Auditing is not enabled for the target system.

**Cause:**
SVM audit is disabled.

**Resolution:**
1. Enable audit on the SVM using: `vserver audit enable`
2. Verify audit configuration with: `vserver audit show -instance`
3. Ensure audit destination directory exists and is accessible.
4. Configure appropriate log file size limits (recommended: 300 MB).

**Documentation:**
[Configure Events and Log](/docs/auditor/10_9/configuration/fileservers/netappcmode/netappaudit)

### Error 6186: Event Log Files Deleted

**Error Description:**

```text
Event log files were deleted for server <SVM>. Some changes could be lost.
```

#### Scenario 1: Missing Log Files

**Cause:**
Audit logs are missing because they were deleted.

**Resolution:**
1. Check that log files are present in the SVM's log folder.
2. Verify log retention policies are properly configured.
3. Ensure sufficient disk space for log storage.
4. Review log rotation settings.

#### Scenario 2: Wrong Log Path

**Cause:**
The path to the log folder is wrong or has been changed.

**Resolution:**
1. Verify the correct path to the SVM's log folder.
2. Update the audit destination if necessary: `vserver audit modify -destination <correct_path>`
3. Ensure the destination directory exists and has proper permissions.

**Documentation:**
[Configure Events and Log](/docs/auditor/10_9/configuration/fileservers/netappcmode/netappaudit)

#### Scenario 7: Connection Timed Out (WinHttpSendRequest 12002)

**Error Description:**
Request to `https://<SVM IP address>/api/svm/svms?...` failed: WinHttpSendRequest: 12002: The operation timed out. The request to `<SVM IP address>` timed out.

**Cause:**
The Netwrix Auditor server sent the request, but the SVM did not respond in time. The SVM address is not reachable from the Netwrix Auditor server, a firewall silently drops the traffic, or the SVM is overloaded or unresponsive.

**Resolution:**
1. Verify the IP address or name specified for the monitored item.
2. Check that the Netwrix Auditor server can reach the SVM over HTTPS: `Test-NetConnection -ComputerName <SVM IP address> -Port 443`
3. Check that no firewall or network device between the Netwrix Auditor server and the SVM drops traffic on port 443.
4. Verify that the SVM LIF is `up` and has the `management-https` service: `network interface show -vserver <SVM>`
5. Open `https://<SVM IP address>/api/svm/svms` in a browser on the Netwrix Auditor server. If the page does not respond, investigate the network path and the load on the ONTAP cluster.

#### Scenario 8: Identity Provider Certificate Not Trusted (WinHttpSendRequest 12175)

**Error Description:**
OAuth 2.0 token endpoint `https://<identity provider FQDN>/adfs/oauth2/token`: WinHttpSendRequest: 12175: A security error occurred. The TLS handshake with `<identity provider FQDN>` failed: the certificate was issued by a certification authority that is not trusted.

**Cause:**
The Netwrix Auditor server does not trust the certificate authority (CA) that issued the TLS certificate of the identity provider (for example, AD FS). The CA certificate is missing from the Trusted Root Certification Authorities store.

**Resolution:**
1. Export the root CA certificate (and any intermediate CA certificates) that issued the identity provider certificate.
2. On the Netwrix Auditor server, open the Certificates console for the local computer (`certlm.msc`).
3. Import the root CA certificate into **Trusted Root Certification Authorities** > **Certificates**. Import intermediate CA certificates into **Intermediate Certification Authorities**.
4. Verify that the identity provider FQDN matches the subject or a subject alternative name (SAN) of the certificate.
5. Restart the **Netwrix Auditor File Storage Audit** service.

**Documentation:**
[Configure AD FS as an Authentication Provider](/docs/auditor/10_9/configuration/fileservers/netappcmode/oauth2/adfs)

#### Scenario 9: Client Certificate Required (WinHttpSendRequest 12044)

**Error Description:**
Request to `https://<SVM IP address>/api/svm/svms?...` failed: WinHttpSendRequest: 12044: A certificate is required to complete client authentication. The server requested a TLS client certificate, but client certificate authentication is not supported.

**Cause:**
The SVM requires a TLS client certificate (mutual TLS). Netwrix Auditor does not support client certificate authentication for ONTAP connections.

**Resolution:**
1. Check whether client certificate authentication is enabled for the SVM: `security ssl show -vserver <SVM>`
2. If the `Client Authentication Enabled` value is `true`, disable it: `security ssl modify -vserver <SVM> -client-enabled false -server-enabled true`
3. If the address you specified is a LIF that belongs to a different SVM, such as the admin SVM, or to a cluster with a different TLS policy, use the address of a LIF that does not require client certificates.
4. Restart data collection for the monitored item.

### Error 6187: Audit Disabled

**Error Description:**

```text
Audit was disabled for server <SVM>. Some changes could be lost.
```

**Cause:**
An administrator turned off auditing on the SVM after monitoring started, for example, by running `vserver audit disable`.

**Resolution:**
1. Check the audit state: `vserver audit show -vserver <SVM>`
2. Enable auditing: `vserver audit enable -vserver <SVM>`
3. Ensure the audit destination directory has free space.

Netwrix Auditor does not collect events that occurred while auditing was disabled.

**Documentation:**
[Configure Events and Log](/docs/auditor/10_9/configuration/fileservers/netappcmode/netappaudit)

## Related Links

- [NetApp Data ONTAP](/docs/auditor/10_9/configuration/fileservers/netappcmode/overview)
- [Create NetApp API role](/docs/auditor/10_9/configuration/fileservers/netappcmode/apirole)
- [Configure Events and Log](/docs/auditor/10_9/configuration/fileservers/netappcmode/netappaudit)
- [OAuth 2.0 Authentication Overview](/docs/auditor/10_9/configuration/fileservers/netappcmode/oauth2/overview)
- [Configure Audit Settings for File Shares](/docs/auditor/10_9/configuration/fileservers/netappcmode/share)
