---
title: "Connection Failures"
description: "Diagnosing and resolving connector connection issues"
sidebar_position: 10
---

# Connection Failures

Access Analyzer connects to external data sources using protocols such as SMB, LDAP, and Microsoft Graph API. Connection failures prevent scans from running and must be resolved before data collection can proceed.

## Diagnostic Steps

1. **Check the connector-api pod status:**

```bash
kubectl get pods -n access-analyzer -l app=connector-api
kubectl logs -n access-analyzer deploy/connector-api --tail=100
```

2. **Verify network connectivity** from the connector pod to the target:

```bash
kubectl exec -n access-analyzer deploy/connector-api -- curl -v https://<target-host>:<port>
```

3. **Review the source configuration** in the Access Analyzer web UI. Confirm that the hostname, port, and credentials are correct.

## SMB Connection Failures

- Verify that TCP port **445** is open between the Access Analyzer cluster and the target file server.
- Confirm that the service account has the required share and NTFS permissions.
- Check for DNS resolution issues by running `nslookup <hostname>` from within the connector pod.

## LDAP Connection Failures

- Verify that TCP port **389** (LDAP) or **636** (LDAPS) is reachable.
- Confirm that the bind DN and password are correct.
- For LDAPS, ensure the target server's TLS certificate is trusted. Self-signed certificates may require adding a CA bundle.

## Microsoft Graph API Failures

- Confirm that the Azure AD application registration has the required API permissions.
- Verify that the client ID, client secret, and tenant ID are correct and that the secret has not expired.
- Check outbound HTTPS connectivity to `https://graph.microsoft.com` and `https://login.microsoftonline.com`.

```bash
kubectl exec -n access-analyzer deploy/connector-api -- curl -s -o /dev/null -w "%{http_code}" https://graph.microsoft.com/v1.0/
```

## General Troubleshooting

| Symptom | Likely Cause | Action |
| --- | --- | --- |
| Connection timeout | Firewall or network policy blocking traffic | Verify firewall rules and Kubernetes network policies |
| Authentication error | Invalid or expired credentials | Update credentials in the source configuration |
| TLS handshake failure | Certificate mismatch or expired certificate | Verify TLS certificates on the target service |
| DNS resolution failure | Incorrect hostname or missing DNS entry | Test DNS from within the connector pod |

:::note
Connection tests run from the `connector-api` pod. Network access from your local machine does not guarantee access from within the cluster.
:::
