---
title: "Add a Domain"
description: "Connect Netwrix Privilege Secure for Discovery to an Active Directory domain and choose the Windows authentication method."
sidebar_position: 10
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the service names and the UI location for restarting the worker and scanner services after you change the Windows authentication method from NTLM to Kerberos. Evidence: none.

TODO: Confirm that `resolvectl status` is the correct command to show the configured DNS servers on Ubuntu Server 24.04 LTS hosts (the old page used `systemd-resolve --status ens160`). Evidence: none.
:::

Add each Active Directory domain that Netwrix Privilege Secure for Discovery manages. The domain connection lets the product read users, groups, and computers, and scan and protect Windows systems with service accounts.

## Prerequisites

- Administrator access to Privilege Secure for Discovery.
- A bind account that can read the directory. See [Service accounts](../../requirements/service-accounts.md) for the permissions each account needs.
- A scan mode account and a protect mode account for the domain.
- A static domain controller (DC) address for the LDAP server. A load-balanced connection prevents the product from recognizing group updates correctly.

## Add a domain

1. Select **Configure** > **Server**.
2. Select **Add Domain** > **LDAP**.
3. In **Domain Name**, enter the domain name, such as `example.com`, and then select **Detect**. The product fills in **LDAP Server**, **LDAP Port**, **Search Base**, and the SSL settings from DNS.
4. Under **Directory Connection Settings**, enter the bind account in **Bind DN** and **Bind Password**. Select **Directory Authentication Method** if you need SASL. See [Configure SASL and Kerberos for LDAP](../authentication-and-sso/sasl-kerberos.md).
5. Select **Test Connection**.
6. Under **Windows Service Account**, enter the **Scan Mode Account** and **Protect Mode Account** credentials.
7. Select the **Windows Authentication Method**. See the following section.
8. Under **Default Policies**, set **Scan Mode** and **Protect Mode**.
9. Select **Save**.

:::tip
Leave **Protect Mode** set to **Disabled** when you first set up a domain. Enable Protect Mode on a system only after the product has scanned it.
:::

## Choose the Windows authentication method

**Windows Authentication Method** controls how the product authenticates to Windows systems in the domain. NTLM is the default and fits most organizations.

When you select **Kerberos**, keep the following in mind:

- The product authenticates with Kerberos only and doesn't fall back to NTLM.
- Kerberos connects by service principal name (SPN) or fully qualified host name, not by IP address. DNS must return the correct current IP address for each target system.
- The IP address override field on the Grant Access page doesn't work.
- Kerberos depends on working reverse DNS lookups. This is a Kerberos requirement and not specific to the product.

If you switch from NTLM to Kerberos, restart the worker and scanner services.

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

- LDAP referrals aren't supported.
- To use the directory over SASL, see [Configure SASL and Kerberos for LDAP](../authentication-and-sso/sasl-kerberos.md). SASL doesn't work with SSL and requires port 389.

## Related topics

- [Configure directory server failover](./directory-server-failover.md)
- [Domain controllers in Privilege Secure for Discovery](./domain-controllers-overview.md)
