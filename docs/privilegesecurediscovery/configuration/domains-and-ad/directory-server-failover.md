---
title: "Configure directory server failover"
description: "Set up automatic failover so directory synchronization continues on another domain controller when the configured one is unavailable."
sidebar_position: 20
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the default of **Failover Behavior** for domains that already exist and for domains upgraded from earlier releases. Evidence: the **New Domain (LDAP)** form in the 26.09.1 test stack shows **Disabled**; the schema default is enabled (lib-api-common/schemas/ldapConfig.js:92-100) and the migration 0033_common_ldapConfig_0005.js sets the port option for domains that had failover off; the sync code treats a missing setting as off (ldap_sync/runner.py:51-55).

TODO: Confirm that the **Domain Status** text starts with `Failover DC Attempt:` while a failover attempt runs, and where in the interface it appears. Evidence: ldap_sync/importer.py:555 at v26.09.1-rc.
:::

Directory server failover lets the directory synchronization service continue when the domain controller (DC) that the domain uses becomes unavailable. Without failover, a failed synchronization stops and the product doesn't try another server.

## How failover works

When the product can't connect to the domain controller during a synchronization, or the connection times out, it behaves as follows:

1. The product retries the same domain controller until it reaches the maximum number of connection retries. It waits 1 second between retries.
2. If the retries fail, the product reads the domain controller list from the DNS `_ldap._tcp.dc._msdcs` SRV records for the domain. It orders the list by SRV priority. This is the same source that **Detect** uses when you add a domain.
3. The product tries each domain controller in the list in turn until a connection succeeds or no domain controller remains in the list.
4. When a connection to another domain controller succeeds, the product saves that server and port in the domain configuration and starts the synchronization from the beginning for the domain.

Failover applies to connection failures and timeouts, both when the product connects and while it searches. Any other error, such as a rejected password, stops the synchronization without failover. The next synchronization cycle then starts again.

A domain needs at least one successful synchronization before failover can work, because the product needs the domain name that the first synchronization saves for the DNS lookup.

## Prerequisites

- The domain exists in **Configure** > **Server**, and it synchronized successfully at least once. See [Add a domain](./add-a-domain.md).
- DNS returns the `_ldap._tcp.dc._msdcs.<domain>` SRV records for the domain to the Privilege Secure for Discovery host.

## Configure failover

1. Select **Configure** > **Server**.
2. Select the domain to open its settings.
3. Under **Directory Server Failover**, set **Failover Behavior** to **Enabled**.

   ![The Directory Server Failover settings of a domain](/images/privilegesecurediscovery/domains-and-ad/domains-directory-failover.webp)

4. Set **Always use port specified by Directory Connection Settings**:
   - **Enabled** uses the port in **Directory Connection Settings** for every domain controller.
   - **Disabled** uses the port in the DNS SRV record of each domain controller.
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
4. Confirm that **LDAP Server** now shows a different domain controller.
5. Restore access to the original domain controller.

## Find failover events in the logs

The directory synchronization service writes the failover events. On a swarm manager node, search its logs:

```bash
docker service logs s1_ldapsync --no-trunc | grep "Domain Controller (DC) Failover"
```

| Message | Meaning |
| --- | --- |
| `Domain Controller (DC) Failover: LDAP Sync failed - Retrying current DC` | The connection failed. The product retries the same domain controller. |
| `Domain Controller (DC) Failover: Found additional DCs` | The product found other domain controllers in DNS. |
| `Domain Controller (DC) Failover: Unable to find any additional DCs` | DNS returned no other domain controllers. |
| `Domain Controller (DC) Failover: LDAP Sync failed - Using next DC` | The product moves to the next domain controller. |
| `Domain Controller (DC) Failover: LDAP Sync failover succeeded` | The synchronization worked on another domain controller. |
| `Domain Controller (DC) Failover: LDAP sync failed for all available DCs` | Every domain controller failed. |
| `LDAP Sync Failed. Must do at least one successful sync before Domain Controller Failover can take place.` | The domain never synchronized successfully, so failover has no domain name to look up. |

## Limitations

- The wait between retries is 1 second and you can't change it in the interface.
- Failover uses DNS priority only. You can't provide a custom list of domain controllers.
- After a failover, the product stays on the new domain controller until you change **LDAP Server**.
