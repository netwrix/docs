---
title: "Supported platforms"
description: "Check which Windows and Linux versions Privilege Secure for Discovery can manage, and which host and browser versions it supports."
sidebar_position: 20
---

This page lists the operating systems that Privilege Secure for Discovery can manage as endpoints, the operating system for the product host, and the supported browsers.

## Host operating system

Install Netwrix Privilege Secure for Discovery on Ubuntu Server 24.04 LTS, on an x86-64 processor. For the host requirements, see [Install host prerequisites](./host-prerequisites.md).

## Endpoint operating systems

The product connects to Windows endpoints over Server Message Block (SMB) and negotiates the highest SMB dialect that the endpoint supports, including SMB 3.1.1. It authenticates with Kerberos and uses Advanced Encryption Standard (AES) keys, with a fallback to RC4. If your domain controllers disable RC4, the scan and protect service accounts need AES keys. After you enable AES encryption types on an account, reset its password so that the domain controller generates the AES keys. See [SASL Kerberos](../configuration/authentication-and-sso/sasl-kerberos.md) for Kerberos configuration.

| Family | Operating system | Supported versions |
| --- | --- | --- |
| Windows server | Windows Server | 2025, 2022, 2019, 2016 |
| Windows desktop | Windows | 11, 10 |
| Linux | Red Hat Enterprise Linux | 10, 9, 8 |
| Linux | SUSE Linux Enterprise Server | 16, 15 SP7 |
| Linux | Ubuntu LTS | 26.04, 24.04, 22.04 |
| Linux | Debian | 13, 12 |
| Linux | Amazon Linux | 2023 |

This table lists versions that the operating system vendor supports. Managed Linux endpoints need Python 3 or Python 2.6 or later, with the `json`, `io`, and `shlex` modules. The product tries `python3` first, then `python`, then `python2`. See the vendor lifecycle pages for end-of-support dates.

## Browser requirements

Use a current version of one of the following browsers to sign in to the web interface:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

The product doesn't support Internet Explorer. If you sign in with Internet Explorer, the product displays a **Browser Not Supported** message that asks you to use a current browser.
