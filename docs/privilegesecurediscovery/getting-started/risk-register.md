---
title: "Risk register"
description: "Review failures that can affect Privilege Secure for Discovery, their impact, and how to mitigate each one."
sidebar_position: 40
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the recovery steps for a single-node host failure and a single-node Docker failure. Evidence: no backup, restore, or DR tooling exists in the repositories; see the high availability and disaster recovery page.

TODO: Confirm the supported command to restart a failed service, for example `s1 stop` and `s1 start` or a Docker Swarm service update. Evidence: docker/s1tool/src/s1.py defines stop and start commands.

TODO: Confirm that the product falls back to the last known IP address when DNS resolution fails. Evidence: carried over from the earlier documentation; not found in code.
:::

The following table lists failures that can affect Privilege Secure for Discovery. For each failure, the table describes the impact and a mitigation to use if you can't resolve the primary failure promptly.

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Host failure in a three-node cluster | The product continues to run on the remaining nodes. | No action is required for continued operation. Repair or replace the node. |
| Host failure in a single-node deployment | The product is unavailable. | Recover the deployment from a backup or on a DR environment, following your recovery plan. See [High availability and disaster recovery](./high-availability-and-disaster-recovery.md). |
| Load balancer failure | Users can't reach the product through the load balancer address. | Connect directly to a node. If necessary, route the DNS entry to a node. |
| DNS failure | The product URL doesn't work, and some scans fail if IP addresses change before DNS is restored. | Connect to the product by IP address. The product can't resolve endpoints through DNS, but it falls back to the last known IP address. |
| Network issue to the product | Users can't access the product. | Use an emergency access account if you can't resolve the outage promptly. Rotate the credentials of that account after access is restored. |
| Network issue connecting to an endpoint | Users can't get just-in-time access (JITA) to the endpoint. | Use Offline Access Management (OAM). If OAM isn't available, check the network path to the endpoint with `ping` against the IP address and the DNS name. |
| Multifactor authentication (MFA) issue for one user | The user can't sign in. | Reset the MFA token for the user. See [Reset MFA tokens](../configuration/authentication-and-sso/reset-mfa-tokens.md). |
| MFA issue for multiple users | Users can't sign in. | Use Network Time Protocol (NTP) across the organization to keep time-based tokens in sync. |
| MFA service unavailable | MFA failure blocks access to the product. | Turn off SAML single sign-on and revert to time-based tokens. |
| LDAP server failure | The LDAP server that the product uses fails, and users can't access the product. | Move to a different LDAP server and resynchronize the groups. Contact Netwrix Support for assistance. |
| LDAP credential failure | The product doesn't capture LDAP updates. | Update the credential in Active Directory and in the product. ensure the account is non-interactive. |
| Protect account credential failure | The product can't grant JITA to endpoints. | Update the credential in Active Directory and in the product. ensure the account is non-interactive. |
| Scan account credential failure | The product can't scan endpoints and doesn't apply the inventory policy. | Update the credential in Active Directory and in the product. ensure the account is non-interactive. |
| Docker failure on a single-node deployment | The product is unavailable. | Recover the deployment following your recovery plan. |
| Docker failure on one node of a cluster | The services on that node fail. | The other nodes continue to run without interruption. |
| API service failure | Users can't access the product. | Restart the service from the command line. |
| LDAP sync service failure | The product doesn't capture LDAP updates. | Restart the service. |
| Worker service failure | Rescans and JITA don't work. | Restart the service. |
| Scanner service failure | The product doesn't apply policy updates to endpoints. | Restart the service. |
