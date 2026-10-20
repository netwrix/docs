---
title: "Configure SASL and Kerberos for LDAP"
description: "Set up Kerberos authentication through SASL for an LDAP domain connection and resolve DNS and realm problems."
sidebar_position: 70
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the `s1 logs` command and the `s1_internal_api` service name at 26.09.1 (node access path and container-based deployment). Evidence: none.

TODO: Confirm that the SASL option is still named as shown in the domain configuration at 26.09.1 and re-capture the screenshot. Evidence: none.

TODO: Confirm the Kerberos support statement for out-of-support Windows versions with product management. Evidence: none.
:::

Lightweight Directory Access Protocol (LDAP) domain connections in Netwrix Privilege Secure for Discovery can use the Simple Authentication and Security Layer (SASL) with Kerberos. Configure SASL in the domain configuration.

![SASL options in the domain configuration](/images/privilegesecure/4.2/discovery/admin/configuration/9297788046103_image-14.webp)

## Requirements and limits

- Enter the Kerberos domain name in all capital letters, for example `user@EXAMPLE.COM`. It is usually the Active Directory domain name. For details, see the [MIT Kerberos configuration documentation](https://web.mit.edu/Kerberos/krb5-latest/doc/admin/realm_config.html).
- SASL isn't compatible with SSL. Microsoft SASL and SSL can't be combined. SASL requires port 389.
- Kerberos is sensitive to DNS and depends on working reverse DNS lookup. This is a Kerberos requirement, not specific to Privilege Secure for Discovery.
- LDAP record referrals aren't supported.
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
   systemd-resolve --status <interface>
   ```

## Windows versions and Kerberos

Privilege Secure for Discovery connects to Microsoft Windows endpoints by using Kerberos authentication. Microsoft released security updates for two Windows Kerberos vulnerabilities, CVE-2022-37966 and CVE-2022-37967. These updates don't affect the ability of the product to protect endpoints that run Windows versions that Microsoft supports. Netwrix can't guarantee Kerberos support for Windows versions that Microsoft no longer supports. NTLM, though not recommended, remains supported.

Microsoft references for CVE-2022-37966:

- [CVE-2022-37966 record](https://www.cve.org/CVERecord?id=CVE-2022-37966)
- [Microsoft Security Update Guide for CVE-2022-37966](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-37966)
- [KB5021131: Manage the Kerberos protocol changes related to CVE-2022-37966](https://support.microsoft.com/en-us/topic/kb5021131-how-to-manage-the-kerberos-protocol-changes-related-to-cve-2022-37966-fd837ac3-cdec-4e76-a6ec-86e67501407d)

Microsoft references for CVE-2022-37967:

- [Microsoft Security Update Guide for CVE-2022-37967](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-37967)
- [KB5020805: Manage the Kerberos protocol changes related to CVE-2022-37967](https://support.microsoft.com/en-us/topic/kb5020805-how-to-manage-kerberos-protocol-changes-related-to-cve-2022-37967-997e9acc-67c5-48e1-8d0d-190269bf4efb)

## Troubleshoot SASL and Kerberos

If you can't enable SASL, contact Netwrix Support.

1. Open an SSH session to the corresponding node. The logs for this feature run under the `s1_internal_api` service.
2. View the service logs, then test the connection. The test should produce log entries.

   ```bash
   s1 logs | grep s1_internal_api
   ```

3. Confirm that reverse DNS works for the LDAP server. See [Verify DNS and reverse DNS](#verify-dns-and-reverse-dns).
