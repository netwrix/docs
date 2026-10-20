---
title: "Configure Directory Server Failover"
description: "Set up automatic failover so directory synchronization continues on another domain controller when the configured one is unavailable."
sidebar_position: 20
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the default of **Failover Behavior** for new domains and for domains upgraded from earlier releases. The schema default is enabled; a migration sets the flag per domain. Evidence: docker/node/packages/lib-api-common/schemas/ldapConfig.js:92-100 and docker/node/migrations/0033_common_ldapConfig_0005.js at v26.09.1-rc.

TODO: Confirm that the Domain Status text shows the prefix "Failover DC Attempt:" while a failover attempt is in progress, and where in the UI this status appears. Evidence: docker/shared/python/src/remediant/ldap_sync/importer.py:555 at v26.09.1-rc.

TODO: Confirm that the product keeps the new domain controller as the LDAP server in the domain configuration after a successful failover. Evidence: none; the old page states it.

TODO: Confirm the log messages and the service log source that a customer should search for failover events. Evidence: none; the old log table was removed.
:::

Directory server failover lets the directory synchronization service continue when the domain controller (DC) that the domain is configured to use becomes unavailable. Without failover, a failed synchronization stops until the next synchronization cycle and the product doesn't try another server.

## How failover works

When a connection error occurs while the product synchronizes a domain, the product behaves as follows:

1. The product retries the same domain controller until it reaches the maximum number of connection retries. It waits 1 second between retries.
2. If the retries fail, the product reads the domain controller list from the DNS `_ldap._tcp.dc._msdcs` SRV records for the domain. It orders the list by SRV priority. This is the same source that **Detect** uses when you add a domain.
3. The product tries each domain controller in the list in turn until a connection succeeds or the list is exhausted.
4. When a connection to another domain controller succeeds, the product updates the domain configuration to use that server and starts a new initial synchronization for the domain.

An initial synchronization flattens groups and doesn't remove stale objects. A full synchronization removes stale objects. You can request a full synchronization separately.

Failover applies to connection errors only. An error that happens after the product connects, such as during a search or authentication, can still stop the synchronization. The next synchronization cycle then starts again.

## Prerequisites

- The domain exists in **Configure** > **Server**. See [Add a domain](./add-a-domain.md).
- DNS returns the `_ldap._tcp.dc._msdcs.<domain>` SRV records for the domain to the Privilege Secure for Discovery host.

## Configure failover

1. Select **Configure** > **Server**.
2. Select the domain.
3. Under **Directory Server Failover**, set **Failover Behavior** to **Enabled**.
4. Set **Always use port specified by Directory Connection Settings**:
   - **Enabled** uses the port in **Directory Connection Settings** for every domain controller.
   - **Disabled** uses the port in the DNS SRV record for each domain controller.
5. In **Maximum number of connection retries per directory server**, enter the number of retries before the product moves to the next domain controller. The default is 5.
6. Select **Save**.

To turn failover off, set **Failover Behavior** to **Disabled**.

## Verify the DNS records

To check the SRV records that the product uses, run the following command from any system. Replace `example.com` with your domain name.

```bash
nslookup -type=SRV _ldap._tcp.dc._msdcs.example.com
```

The output lists each domain controller with its priority and port. The product tries the servers in priority order.

## Check that failover works

1. Make the configured domain controller unreachable in a test window, for example by blocking its LDAP port from the Privilege Secure for Discovery host.
2. Wait for the next synchronization cycle.
3. Select **Configure** > **Server** and open the domain.
4. Confirm that the domain status shows the failover attempt and that **LDAP Server** now shows a different domain controller.
5. Restore access to the original domain controller.

## Limitations

- The wait between retries is 1 second and can't be changed in the UI.
- Failover uses DNS priority only. You can't provide a custom list of domain controllers.
- After a failover, the product stays on the new domain controller until you change **LDAP Server**.
