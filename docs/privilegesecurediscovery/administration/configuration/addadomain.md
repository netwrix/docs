---
title: "Add a Domain"
description: "Add a Domain"
sidebar_position: 50
---

# Add a Domain

Add a Domain

# Add a Domain

## Overview

The purpose of this document is to outline the steps for an Admin to configure a domain within
Privilege Secure. It will also cover the available Windows authentication methods.

## Main Document

- As an Admin navigate to Configure -> Server.
- Click "Add Domain" which exposes the configuration details:\*\*.
- Type in the domain and click **Detect**.
- From here you can add the 3 main accounts (Bind, Scan, and Protect). Click **Test Connection**
  once all credentials have been input.
- Configure default policies.

## Authentication Methods

NTLM is the default applicable to most organizations.

Kerberos authentication was added in version 2.13.0. The key considerations are:

- When Kerberos authentication is selected Privilege Secure will only attempt to authenticate using
  Kerberos.
- Kerberos is designed in a way that requires connecting using SPNs/fully-qualified hostnames only
  -- not via IP address. As a result, we need to ensure that DNS correctly reflects the online IP
  address of the target system on the network.
- With Kerberos selected, the IP address override field on the Grant Access page will not function.

If you switch from NTLM to Kerberos we recommend restarting the worker and scanner service. This can
be accomplished in both the UI and the terminal.

- With Privilege Secure version 2.17 we can support SASL and Kerberos.

    - The REALM entry must be fully capitalized

        - e.g. user@REALM

    - SASL is not compatible with SSL

        - Microsoft SASL and SSL are not compatible
        - Requires port 389

- Kerberos is DNS sensitive and also relies upon correctly functioning reverse DNS lookup. This is a
  Kerberos requirement, not specific to Privilege Secure.

    - You can verify this by running nslookup against the LDAP server configured and against the IP
      presented in the first lookup.

        - e.g.:

            - `nslookup name.domain.com`
            - `nslookup <IP from first nslookup>`

    - `systemd-resolve --status ens160`will show the DNS configured

- LDAP record referrals are not supported

## Appendix

It's recommended to leave Protect Mode disabled when first setting up a domain. Machines should only
have Protect Mode enabled **after** they've been scanned.

**NOTE:** We require a static DC to ensure S1 can correctly detect and account for changes made to
Groups, OUs, Users, etc. A load balanced connection will cause group updates to not be recognized
correctly.
