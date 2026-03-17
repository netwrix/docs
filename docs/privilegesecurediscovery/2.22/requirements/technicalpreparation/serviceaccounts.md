---
title: "Service Accounts"
description: "Service Accounts"
sidebar_position: 20
---

# Service Accounts

Service Accounts

# Service Accounts

When configuring a new domain inside of Privilege Secure, there are three fields which require an
account in order to perform specific tasks:

- Bind DN
- Scan Mode Settings
- Protect Mode Settings

## Bind DN

The Bind DN account is specified using the `DOMAIN\account` format, and is required for the
`ldapsync` service to successfully connect to the configured domain controller and synchronize the
information in Active Directory on a continuous basis.  This allows Domain Administrators to
continue to perform their jobs without being impacted in any way by Privilege Secure - Privilege
Secure adapts to their existing processes.

![Screen_Shot_2019-04-19_at_1.59.L55_PM.webp](/images/privilegesecure/4.2/discovery/360021800554_screen_shot_2019-04-19_at_1.59.55_pm_419x139.webp)

## Scan Mode Settings

Scan Mode in Privilege Secure leverages a **non-privileged domain user account** to reach out to the
computer objects on a network, enumerate the local administrator group on the endpoint, and return
this information to Privilege Secure.  This is all accomplished via a **non-privileged** account on
Windows devices prior to `Windows 10 Creator Edition` and `Windows Server 2016`.  For more
information on scanning endpoints which have a newer Windows Operating System than these, see GPO
Guide v1.

![Screen_Shot_2019-04-19_at_1.59.L26_PM.webp](/images/privilegesecure/4.2/discovery/360021800554_screen_shot_2019-04-19_at_1.59.26_pm_394x209.webp)

**NOTE:** It is recommended that the "Default Policy" for Scan Mode be set to "**Enabled**," and
that a different account be used for "Scan Mode" than "Protect Mode."

## Protect Mode Settings

Protect Mode leverages an **administrative account** on the endpoint to enforce a **zero-trust**
state.  It is **strongly recommended** that the default policy for "Protect Mode" be set to
"**Disabled**" until the risk of enforcing Protect Mode to the business has been fully assessed.  In
order for Privilege Secure to correctly enforce Protect Mode, the Domain User account configured in
the screenshot below **must** be in the local administrator group on the endpoint in question.  When
this account is detected by Privilege Secure in the scanning phase, it will automatically be flagged
as the Protect Mode service account and be set as persistent and irremovable from the account
inventory in question.

In general, the Protect Mode account can be any account in the local administrator group of a
machine and as long as the account information matches what is saved in the fields below, Protect
Mode can be enforced.  This approach can be useful for performing troubleshooting, and in some cases
will be required for deployment domain-wide.  However, most full-scale deployments leverage a domain
user account vs. a local account.

![Screen_Shot_2019-04-19_at_1.59.L35_PM.webp](/images/privilegesecure/4.2/discovery/360021800554_screen_shot_2019-04-19_at_1.59.35_pm_388x208.webp)

**NOTE:** It is highly recommended that the "Default Policy" for Protect Mode be set to
**Disabled**, and that a different account be used for "Protect Mode" than "Scan Mode."

## Segregating Duties of Configured Accounts

While it is possible to use the same domain user account for both the Scan and Protect accounts, it
is recommended to use separate accounts in keeping with best practices. This approach is not
technically wrong, but presents some important considerations.

Practically speaking, a Protect Mode account is a domain account which has privileged access on
any/all machines configured in the domain, which is not required for scanning.  For this reason
alone, having a separate account for scanning is recommended so that the roles of each account in
the configured environment are clearly delineated.  In addition, because the Protect Mode account is
a privileged account on the domain, it does and should have greater capabilities than the Scan Mode
account, with greater attention paid to it.  If the same account is used for both Scan and Protect
Mode, this can easily lead to accidentally setting entire domains to enforce Protect Mode before the
correct preparations have been made, with potentially disastrous consequences for an organization.
