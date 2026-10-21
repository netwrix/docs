---
title: "Add a domain"
description: "Connect Netwrix Privilege Secure for Discovery to an Active Directory domain, set the directory and Windows connection options, and choose the default policies."
sidebar_position: 10
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm that a load-balanced domain controller address still causes the product to miss group updates, and that a static domain controller is still required. Evidence: none; carried over from the earlier documentation.
:::

Add each Active Directory domain that Netwrix Privilege Secure for Discovery manages. The domain connection lets the product read users, groups, and computers, and scan and protect Windows systems with service accounts.

## Prerequisites

- Administrator access to Privilege Secure for Discovery.
- A bind account that can read the directory, a scan mode account, and a protect mode account for the domain. See [Service accounts](../../requirements/service-accounts.md) for the permissions that each account needs.
- A static domain controller (DC) address for the LDAP server. A load-balanced connection prevents the product from recognizing group updates correctly.

## Add a domain

1. Select **Configure** > **Server**.
2. In **Domain Configuration**, open the **Add Domain** list, and then select **LDAP**.
3. Under **Directory Connection Settings**, enter the connection.

   ![The Directory Connection Settings of a new domain](/images/privilegesecurediscovery/domains-and-ad/domains-ldap-connection.webp)

   | Setting | Description |
   | --- | --- |
   | **Domain Name** | The domain name, such as `example.com`. Select **Detect** to fill in **LDAP Server**, **LDAP Port**, **Search Base**, and **SSL** from the DNS records of the domain. |
   | **LDAP Server** | The fully qualified name of a domain controller. |
   | **LDAP Port** | The port of the domain controller, for example `636` for LDAP over SSL. |
   | **SSL** | Uses a secure connection to the domain controller. |
   | **Verify Certificate** | Checks the certificate of the domain controller. Select **SSL** first to use it. |
   | **CA Public Certificate** | The PEM certificate of the CA that issued the certificate of the domain controller. See [Trust a CA for the directory connection](../certificates/web-server-certificate-with-sans.md#trust-a-ca-for-the-directory-connection). |
   | **Search Base** | The distinguished name where the search starts, such as `dc=example,dc=com`. |
   | **Directory Authentication Method** | **Simple Bind**, or **SASL: Kerberos**. See [Configure SASL and Kerberos for LDAP](../authentication-and-sso/sasl-kerberos.md). |
   | **Bind DN** and **Bind Password** | The bind account, as `DOMAIN\Username`. |

4. Select **Test Connection**.
5. Under **Directory Server Failover**, decide whether the product tries another domain controller when the configured one is unavailable. See [Configure directory server failover](./directory-server-failover.md).
6. Under **Directory Search Settings**, keep the defaults unless Support advises otherwise. **Page Size** is 1000 and **Search Scope** is **Subtree**.
7. Under **Windows Computer Authentication**, select the **Windows Authentication Method**. See [Choose the Windows authentication method](#choose-the-windows-authentication-method).
8. Under **Windows Service Account**, enter the **Scan Mode Account** and **Protect Mode Account** user names and passwords. Enter each user name as `DOMAIN\Username`, or as `user@realm` for a Kerberos domain. For a Kerberos domain, also enter the **Domain NetBIOS Name**.
9. Under **Default Policies**, review **Scan Mode**, **Protect Mode**, and **Offline Access**.
10. Optional: under **Linux Service Account**, enter the account that the product uses on Linux systems. See [Service accounts](../../requirements/service-accounts.md).
11. Select **Save**.

The domain appears in the **Domain Configuration** list with its connection, status, and default policy.

![The Domain Configuration list with a domain and its default policy](/images/privilegesecurediscovery/domains-and-ad/domains-domain-list.webp)

### Choose the default policies

The default policies apply to the computers that the product adds to its inventory after you save the domain. They don't change computers that are already in the inventory. A new domain starts with **Scan Mode** and **Protect Mode** set to **Disabled**.

:::tip
Leave **Protect Mode** set to **Disabled** when you first set up a domain. A default of **New Accounts: JITA** protects every computer that the product imports afterward. Enable protect mode on a system only after the product has scanned it. See [Set up scan mode](../onboard-systems/set-scan-mode.md).
:::

## Choose the Windows authentication method

**Windows Authentication Method** controls how the product authenticates to Windows systems in the domain. NTLM is the default and fits most organizations.

When you select **Kerberos**, keep the following in mind:

- The product authenticates with Kerberos only and doesn't fall back to NTLM.
- Kerberos connects by service principal name (SPN) or fully qualified host name, not by IP address. DNS must return the correct current IP address for each target system.
- The IP address override field on the **Grant Access** page doesn't work.
- Kerberos depends on working reverse DNS lookups. This is a Kerberos requirement and not specific to the product.

The product reads the method from the domain settings each time that it scans or handles a request, so a switch from NTLM to Kerberos needs no restart.

### Verify DNS for Kerberos

1. Look up the LDAP server name:

   ```bash
   nslookup <ldap-server-name>
   ```

2. Look up the IP address that the first command returned. The result must return the same name.

   ```bash
   nslookup <ip-address-from-first-lookup>
   ```

3. On the host, show the DNS servers that the host uses:

   ```bash
   resolvectl status
   ```

## Limitations

- The product doesn't support LDAP referrals.
- SASL doesn't work with SSL and requires port 389.

## Related topics

- [Configure directory server failover](./directory-server-failover.md)
- [Domain controllers in Privilege Secure for Discovery](./domain-controllers-overview.md)
