---
title: "Service accounts"
description: "Understand the bind, scan, and protect accounts that Privilege Secure for Discovery needs for each domain and how to separate their duties."
sidebar_position: 80
---

When you add a domain to Netwrix Privilege Secure for Discovery, the domain settings ask for the following accounts:

- **Bind DN**: the account that reads Active Directory (AD).
- **Scan Mode Account**: the Windows account that scans systems.
- **Protect Mode Account**: the Windows account that enforces protect mode.
- **Linux Service Account**: the account that scans and protects Linux systems.

For the account hardening that applies to all of them, see [Service account security](./service-account-security.md).

## Bind DN

The `ldapsync` service uses this account to connect to the configured domain controller and continuously synchronize the information in AD. Set the account in the domain settings, as follows:

- Set **Directory Authentication Method** to **Simple Bind**, which is the default. Enter the account in the `DOMAIN\Username` format in **Bind DN**, and its password in **Bind Password**.
- Set **Directory Authentication Method** to **SASL: Kerberos**. The **Bind DN** field then becomes **Kerberos User**. Enter the account in the `user@REALM` format.

![The Directory Authentication Method set to Simple Bind, with the Bind DN and Bind Password fields](/images/privilegesecurediscovery/requirements/svcacct-bind-dn.webp)

## Windows authentication method

Under **Windows Computer Authentication**, the **Windows Authentication Method** setting controls how the scan and protect accounts sign in to Windows systems. The choices are **NTLM**, which is the default, and **Kerberos**.

![The Windows Authentication Method set to NTLM](/images/privilegesecurediscovery/requirements/svcacct-windows-auth.webp)

When you select Kerberos, each Windows account also needs its **Domain NetBIOS Name**, entered as the pre-Windows 2000 domain name, for example `DOMAIN`. For the benefits of Kerberos, see [Service account security](./service-account-security.md#kerberos-authentication-to-windows-systems).

## Scan Mode Account

Scan mode uses a **non-privileged domain user account** to contact the computer objects on a network, enumerate the local administrators group on each endpoint, and return that information to the product. The endpoint must grant the account the right to enumerate the local administrators group. See [Group policy objects](../configuration/domains-and-ad/group-policy-objects.md) and [Scan GPO for domain controllers](../configuration/domains-and-ad/scan-gpo-domain-controllers.md).

![The Scan Mode Account with its domain user and password](/images/privilegesecurediscovery/requirements/svcacct-scan-account.webp)

:::note
Under **Default Policies**, set **Scan Mode** to **Enabled**, and use a different account for scan mode than for protect mode.
:::

## Protect Mode Account

Protect mode uses an **administrative account** on the endpoint to enforce a zero-trust state. Under **Default Policies**, set **Protect Mode** to **Disabled** until you have assessed the risk of enforcing protect mode for the business. The other choices are **New Accounts: Deny** and **New Accounts: JITA**.

For the product to enforce protect mode, the domain user account that you configure for the protect mode account must be a member of the local administrators group on the endpoint. When the product detects this account during the scanning phase, it flags the account as the protect mode service account. The product sets the account as persistent and prevents its removal from the account inventory.

In general, any account in the local administrators group of a machine can act as the protect mode account, as long as the account information matches what you saved in these fields. This approach can help with troubleshooting, and some deployments require it for domain-wide use. Most full-scale deployments use a domain user account instead of a local account.

![The Protect Mode Account with its domain user and password](/images/privilegesecurediscovery/requirements/svcacct-protect-account.webp)

:::note
Set **Protect Mode** to **Disabled**, and use a different account for protect mode than for scan mode.
:::

The **Default Policies** section sets the starting policy for new systems.

![The Default Policies with Scan Mode enabled and Protect Mode disabled](/images/privilegesecurediscovery/requirements/svcacct-default-policies.webp)

## Linux Service Account

Linux systems use one account for both scan and protect modes. In **Scan & Protect Mode Account**, enter the user name in **Username (Domain or Local)** and the password in **Password**. The format of the user name decides who creates the account:

| Format | Meaning |
| --- | --- |
| `DOMAIN\Username` | A domain account. The account must already exist, and the product doesn't create it. |
| `Username` | A local account. The product creates it on each system, or uses it if it already exists. |

For the sudo and SSH requirements of this account, see [Linux registration prerequisites](../configuration/endpoint-preparation/linux-registration-prerequisites.md). To set one account for every Linux system in a domain, see [Register Linux systems with a domain service account](../configuration/endpoint-preparation/linux-simplified-registration.md).

![The Linux Service Account with the Scan & Protect Mode Account username and password](/images/privilegesecurediscovery/requirements/svcacct-linux-account.webp)

## Separate the scan and protect accounts

You can use the same domain user account for scan and protect modes, but use separate accounts as a best practice. A shared account has the following consequences:

- A protect mode account has privileged access on every machine configured in the domain. Scanning doesn't require this access. A separate scan account keeps the role of each account clear.
- Because the protect mode account is privileged, it needs more capabilities and closer monitoring than the scan mode account.
- With one account for both modes, you can set an entire domain to enforce protect mode before you complete the preparations. This can disrupt the organization.
