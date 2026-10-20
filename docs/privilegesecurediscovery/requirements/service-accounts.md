---
title: "Service accounts"
description: "Understand the bind, scan, and protect accounts that Privilege Secure for Discovery needs for each domain and how to separate their duties."
sidebar_position: 80
---

When you add a domain to Netwrix Privilege Secure for Discovery, three fields require an account that performs a specific task:

- Bind DN
- Scan Mode Settings
- Protect Mode Settings

For the account hardening that applies to all three, see [Service account security](./service-account-security.md).

## Bind DN

Specify the Bind DN account in the `DOMAIN\account` format. The `ldapsync` service uses this account to connect to the configured domain controller and continuously synchronize the information in Active Directory (AD). Domain administrators continue their work without any effect from Privilege Secure for Discovery, because the product adapts to their existing processes.

![The domain settings with the Bind DN field set to a domain account in the DOMAIN\account format](/images/privilegesecure/4.2/discovery/360021800554_screen_shot_2019-04-19_at_1.59.55_pm_419x139.webp)

## Scan Mode Settings

Scan mode uses a **non-privileged domain user account** to contact the computer objects on a network, enumerate the local administrators group on each endpoint, and return that information to the product. On Windows devices earlier than Windows 10 Creators Update and Windows Server 2016, a non-privileged account is enough. For newer versions, the endpoint must grant the account the right to enumerate the local administrators group. See [Group policy objects](../configuration/domains-and-ad/group-policy-objects.md) and [Scan GPO for domain controllers](../configuration/domains-and-ad/scan-gpo-domain-controllers.md).

![The Scan Mode Settings with the scan account, its password, and the default policy for scan mode](/images/privilegesecure/4.2/discovery/360021800554_screen_shot_2019-04-19_at_1.59.26_pm_394x209.webp)

:::note
Set the default policy for scan mode to **Enabled**, and use a different account for scan mode than for protect mode.
:::

## Protect Mode Settings

Protect mode uses an **administrative account** on the endpoint to enforce a zero-trust state. Set the default policy for protect mode to **Disabled** until you have assessed the risk of enforcing protect mode for the business.

For the product to enforce protect mode, the domain user account that you configure in the following settings must be a member of the local administrators group on the endpoint. When the product detects this account during the scanning phase, it flags the account as the protect mode service account. The product sets the account as persistent and prevents its removal from the account inventory.

In general, any account in the local administrators group of a machine can act as the protect mode account, as long as the account information matches what you saved in these fields. This approach can help with troubleshooting, and some deployments require it for domain-wide use. Most full-scale deployments use a domain user account instead of a local account.

![The Protect Mode Settings with the protect account, its password, and the default policy for protect mode](/images/privilegesecure/4.2/discovery/360021800554_screen_shot_2019-04-19_at_1.59.35_pm_388x208.webp)

:::note
Set the default policy for protect mode to **Disabled**, and use a different account for protect mode than for scan mode.
:::

## Separate the scan and protect accounts

You can use the same domain user account for scan and protect modes, but use separate accounts as a best practice. A shared account has the following consequences:

- A protect mode account has privileged access on every machine configured in the domain. Scanning doesn't require this access. A separate scan account keeps the role of each account clear.
- Because the protect mode account is privileged, it needs more capabilities and closer monitoring than the scan mode account.
- With one account for both modes, you can set an entire domain to enforce protect mode before you complete the preparations. This can disrupt the organization.
