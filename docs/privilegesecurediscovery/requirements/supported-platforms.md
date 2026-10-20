---
title: "Supported platforms"
description: "Check which Windows and Linux versions Privilege Secure for Discovery can manage, and which host and browser versions it supports."
sidebar_position: 20
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the Red Hat Enterprise Linux and Debian 12 end-of-support dates. They are derived from the vendor lifecycle pages and not read directly. Evidence: r07a-linux-os.md sections 1 and 4.

TODO: Confirm that Rocky Linux, AlmaLinux, and Oracle Linux are intentionally omitted from the endpoint table. Evidence: r07a-linux-os.md section 2 (system tests use Rocky and Oracle Linux as RHEL-family proxies).

TODO: Confirm that Windows scan and protect service accounts need Kerberos AES keys and that the SMB 3.1.1 support is in 26.06 and later. Evidence: r07b-windows-os.md section 3 (commit b8d058780, 2026-06-11; not verified at tag v26.09.1-rc).
:::

This page lists the operating systems that Privilege Secure for Discovery can manage as endpoints, the operating system for the product host, and the supported browsers.

## Host operating system

Install Netwrix Privilege Secure for Discovery on Ubuntu Server 24.04 LTS. For the host requirements, see [Requirements overview](./overview.md).

## Endpoint operating systems

Windows scan and protect service accounts need Kerberos Advanced Encryption Standard (AES) keys. After you enable AES encryption types on an account, reset its password so that the domain controller generates the AES keys. Windows endpoints can require SMB 3.1.1, and the product negotiates the highest SMB dialect that the endpoint supports. See [SASL Kerberos](../configuration/authentication-and-sso/sasl-kerberos.md) for Kerberos configuration.

| Family | Operating system | Supported versions |
| --- | --- | --- |
| Windows server | Windows Server | 2025, 2022, 2019, 2016 |
| Windows desktop | Windows | 11, 10 |
| Linux | Red Hat Enterprise Linux | 10, 9, 8 |
| Linux | SUSE Linux Enterprise Server | 16, 15 SP7 |
| Linux | Ubuntu LTS | 26.04, 24.04, 22.04 |
| Linux | Debian | 13, 12 |
| Linux | Amazon Linux | 2023 |

This table lists versions that the operating system vendor supports. Managed Linux endpoints need Python 2.7 or Python 3. Netwrix probes `python3`, then `python`, then `python2`. See the vendor lifecycle pages for end-of-support dates.

## Browser requirements

Use a current version of one of the following browsers to sign in to the web interface:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

Internet Explorer isn't supported. If you sign in with Internet Explorer, the product displays a message that asks you to use one of the supported browsers.
