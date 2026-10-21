---
title: "Configure SASL and Kerberos for LDAP"
description: "Set up Kerberos authentication through SASL for an LDAP domain connection and resolve DNS problems."
sidebar_position: 70
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm that the `s1_internal_api` service writes the SASL and Kerberos log entries at 26.09.1. Evidence: none; the service name comes from the earlier version of this page.
:::

Lightweight Directory Access Protocol (LDAP) domain connections in Netwrix Privilege Secure for Discovery can use the Simple Authentication and Security Layer (SASL) with Kerberos. This page covers the connection that the product uses to read the directory. For Kerberos authentication to Windows endpoints, set **Windows Authentication Method** to **Kerberos** in the same domain settings. See [Add a domain](../domains-and-ad/add-a-domain.md).

## Enable SASL

1. Select **Configure** > **Server**, and select the domain to open its settings.
2. Set **Directory Authentication Method** to **SASL: Kerberos**.

   ![The Directory Authentication Method set to SASL: Kerberos](/images/privilegesecurediscovery/authentication-and-sso/sso-sasl-kerberos.webp)

3. In **Kerberos User**, which replaces **Bind DN**, enter the account as `user@REALM`.
4. Enter the password, and select **Save**.

## Requirements and limits

- Enter the Kerberos domain name in all capital letters, for example `user@EXAMPLE.COM`. It is usually the Active Directory domain name. For details, see the [MIT Kerberos configuration documentation](https://web.mit.edu/Kerberos/krb5-latest/doc/admin/realm_config.html).
- The product host must reach a domain controller for Kerberos on TCP and UDP port 88. See [Ports and firewall](../../requirements/ports-and-firewall.md).
- SASL doesn't work with SSL. You can't combine Microsoft SASL and SSL. SASL requires port 389.
- Kerberos is sensitive to DNS and depends on working reverse DNS lookup. This is a Kerberos requirement, not specific to Privilege Secure for Discovery.
- The product doesn't support LDAP record referrals.
- If you switch a domain from Kerberos to NTLM, the first scan after the switch doesn't update the `last_scanned` timestamps. The next scan updates them.

For more information, see the [MIT Kerberos KDC installation guide](https://web.mit.edu/kerberos/krb5-latest/doc/admin/install_kdc.html) and the [Microsoft Kerberos KDC registry keys documentation](https://learn.microsoft.com/en-us/troubleshoot/windows-server/windows-security/kerberos-protocol-registry-kdc-configuration-keys).

## Verify DNS and reverse DNS

1. Look up the LDAP server name.

   ```bash
   nslookup <ldap-server-name>
   ```

2. Look up the IP address that the first lookup returned.

   ```bash
   nslookup <ip-address-from-first-lookup>
   ```

   The second lookup must return the LDAP server name.

3. To show the DNS servers that the host uses, run the following command.

   ```bash
   resolvectl status <interface>
   ```

## Troubleshoot SASL and Kerberos

If you can't enable SASL, contact Netwrix Support.

1. Open an SSH session to a swarm manager node. The logs for this feature run under the `s1_internal_api` service.
2. Follow the service logs, then test the connection. The test should produce log entries.

   ```bash
   docker service logs s1_internal_api --follow
   ```

3. Confirm that reverse DNS works for the LDAP server. See [Verify DNS and reverse DNS](#verify-dns-and-reverse-dns).
