---
title: "SASL Kerberos"
description: "SASL Kerberos"
sidebar_position: 40
---

# SASL Kerberos

SASL Kerberos

# SASL Kerberos

## Overview

From Privilege Secure version 2.17, LDAP configuration can be set to use SASL.

SASL is configured in the domain configuration as below

![image-14.webp](/images/privilegesecure/4.2/discovery/admin/configuration/9297788046103_image-14.webp)

Notes

- The REALM entry must be fully capitalized. You can read more about Realms
  [here](https://web.mit.edu/Kerberos/krb5-latest/doc/admin/realm_config.html).

    - e.g. [user@REALM](mailto:user@REALM)

        - The realm is usually represented by the domain

- SASL is not compatible with SSL

    - Microsoft SASL and SSL are not compatible
    - Requires port 389

- Kerberos is DNS sensitive and also relies upon correctly functioning reverse DNS lookup. This is a
  Kerberos requirement, not specific to Privilege Secure.

    - You can verify this by running nslookup against the LDAP server configured and against the IP
      presented in the first lookup.

        - e.g.:

            - nslookup name.domain.com
            - nslookup `<IP from first nslookup>`

    - `systemd-resolve --status ens160` will show the DNS configured

- LDAP record referrals are not supported
- If you switch a domain from Kerberos to NTLM, the first scan that happens after the switch will
  not update the last scanned timestamps. The next scan after that will update the last_scanned
  timestamps.

References

- [https://web.mit.edu/kerberos/krb5-latest/doc/admin/install_kdc.html](https://web.mit.edu/kerberos/krb5-latest/doc/admin/install_kdc.html)
- [https://learn.microsoft.com/en-us/troubleshoot/windows-server/windows-security/kerberos-protocol-registry-kdc-configuration-keys](https://learn.microsoft.com/en-us/troubleshoot/windows-server/windows-security/kerberos-protocol-registry-kdc-configuration-keys)

## Unsupported Windows Versions

Netwrix Privilege Secure for Discovery (NPS-D) supports connecting to Microsoft Windows endpoints
using Kerberos authentication. Recently two Microsoft Windows Kerberos vulnerabilities were
identified (see reference below). Microsoft provided security updates, released in July of 2023, for
supported Windows versions (Windows Server 2008 and later). These security updates do not affect the
ability of NPS-D using Kerberos to protect endpoints running supported Windows versions; however,
Netwrix cannot guarantee support of Kerberos for out-of-support versions of Windows. Note, NTLM,
though not recommended, will continue to be supported in NPS-D.

References

Microsoft Windows Kerberos vulnerabilities:

- CVE-2022-37966

    - CVE –
      [https://www.cve.org/CVERecord?id=CVE-2022-37966](https://www.cve.org/CVERecord?id=CVE-2022-37966)
    - MS Security Update Guide – [

        https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-37966

        ](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-37966)

    - MS how-to handle changes –
      [https://support.microsoft.com/en-us/topic/kb5021131-how-to-manage-the-kerberos-protocol-changes-related-to-cve-2022-37966-fd837ac3-cdec-4e76-a6ec-86e67501407d](https://support.microsoft.com/en-us/topic/kb5021131-how-to-manage-the-kerberos-protocol-changes-related-to-cve-2022-37966-fd837ac3-cdec-4e76-a6ec-86e67501407d)

- CVE-2022-37967

    - MS Security Update Guide –
      [https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-37967](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-37967)
    - MS how-to handle changes –
      [https://support.microsoft.com/en-us/topic/kb5020805-how-to-manage-kerberos-protocol-changes-related-to-cve-2022-37967-997e9acc-67c5-48e1-8d0d-190269bf4efb](https://support.microsoft.com/en-us/topic/kb5020805-how-to-manage-kerberos-protocol-changes-related-to-cve-2022-37967-997e9acc-67c5-48e1-8d0d-190269bf4efb)

## Troubleshooting

**NOTE:** Please work with CS to troubleshoot any issues with enabling this.

- Logs are running under the s1_internal_api. A SSH session to the corresponding node is required.

    - `s1 logs | grep s1_internal_api`
    - Attempt to test connection - should present logs

- Confirm reverse DNS is enabled against the LDAP server

    - `nslookup <example-ldap-server>`
    - `nslookup <ip-from-above-nslookup>`
