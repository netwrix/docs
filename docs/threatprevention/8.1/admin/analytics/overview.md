---
title: "Analytics Interface"
description: "Analytics Interface"
sidebar_position: 70
---

# Analytics Interface

Analytics provide organizations with the ability to capture and analyze authentication traffic
occurring within their Active Directory environments in real-time to detect patterns of behavior and
scenarios relating to attacks and attempts to compromise security.

An Analytic is a hard-coded policy that reports on incidents triggered by events, rather than on the
individual events themselves.

Once you configure and enable an Analytic, the Agent begins monitoring for events. The Agent stores
each event in memory until the trigger threshold is met. It then logs an incident in the
database along with the event details that triggered the incident. The Agent discards events that
don't trigger an incident from memory after the corresponding time range.

The following tables outline the authentication analytics Threat Prevention provides out-of-the box,
along with definitions and examples to better understand each analytic.

Click **Analytics** in the left pane to launch the Analytics interface.

![Analytics interface](/images/threatprevention/8.1/admin/analytics/analyticsinterface.webp)

At the top of the interface is a graphical display of incidents monitored by Threat Prevention. Use
the color key on the left to toggle off and on results for desired analytics. In the upper-right
corner, set the number of days’ worth of incidents the graphs display. Use the Refresh button in the
graphics area to regenerate the graphs.

There are two graphs:

- Pie graph – Shows the percentage of incidents generated for each analytic type
- Line graph – Shows a timeline of incidents for each analytic type

In the middle of the interface, you can view a list of the analytic types, number of attacks
identified in the last 24 hours per type, the ability to enable or disable monitoring, access to the
analytic configuration, and a tool tip with a brief summary of the analytic.

:::info
For most analytics, configure at least one filter before enabling an analytic
type.
:::


The Refresh button on the Analytics ribbon repopulates both the graphical display and the analytic
list.

Use the Permissions section at the bottom of the interface to protect Analytic policies at
the Analytics node. Once you assign permission to a user, Threat Prevention protects all analytic
policies, configurations, and data from any user not included in the permissions list. See the
[Protect Policies](/docs/threatprevention/8.1/admin/policies/dataprotection.md#protect-policies) topic for instructions on how to
protect analytic policies.

![Analytics node](/images/threatprevention/8.1/admin/analytics/analyticslist.webp)

Directly under the Analytics node are the individual analytics nodes for accessing information on
the monitored incidents and configuring the analytic type:

- [Brute Force Attacks Analytic Type](/docs/threatprevention/8.1/admin/analytics/bruteforceattacks.md) – Reports on failed attempts from a
  single host to access a given host. Different user accounts with bad passwords or invalid account
  names can trigger it.
- [User Account Hacking Analytic Type](/docs/threatprevention/8.1/admin/analytics/useraccounthacking.md) – Reports on multiple bad passwords
  provided for a given valid user account
- [Horizontal Movement Attacks Analytic Type](/docs/threatprevention/8.1/admin/analytics/horizontalmovementattacks.md) – Reports on security
  principals that are accessing more than the threshold of resources during a specified time
  interval. This may indicate a person trying to obtain information from as many servers as
  possible, which they normally wouldn't access.
- [Bad User ID (by User) Analytic Type](/docs/threatprevention/8.1/admin/analytics/baduseriduser.md) – Reports on pre-authentication failures
  due to using account names that don't exist in Active Directory. Threat Prevention groups these
  incidents per account name.
- [Bad User ID (by Source Host) Analytic Type](/docs/threatprevention/8.1/admin/analytics/baduseridsourcehost.md) – Reports on
  pre-authentication failures due to using account names that don't exist in Active Directory.
  Threat Prevention groups these incidents per source host.
- [Breached Password Analytic Type](/docs/threatprevention/8.1/admin/analytics/breachedpassword.md) – Reports on multiple failed
  authentications followed by a successful authentication in a specified time frame
- [Concurrent Logins Analytic Type](/docs/threatprevention/8.1/admin/analytics/concurrentlogins.md) – Reports on logins from multiple locations
  within a specified time frame
- [Impersonation Logins Analytic Type](/docs/threatprevention/8.1/admin/analytics/impersonationlogins.md) – Reports on multiple authenticated
  accounts from a single system within a specified time frame
- [Golden Ticket Analytic Type](/docs/threatprevention/8.1/admin/analytics/goldenticket.md) – Reports on Kerberos tickets that exceed the
  specified maximum lifetimes for a user ticket or maximum lifetimes for a user ticket renewal
- [File System Attacks (by User) Analytic Type](/docs/threatprevention/8.1/admin/analytics/filesystemattacksuser.md) – Reports on a significant
  number of file changes made by an account in a short time period
- [Kerberos Weak Encryption Analytic Type](/docs/threatprevention/8.1/admin/analytics/kerberosweakencryption.md) – Reports on Kerberos tickets
  with RC4_HMAC_MD5 encryption
- [Forged PAC Analytic Type](/docs/threatprevention/8.1/admin/analytics/forgedpac.md) – Reports on Kerberos tickets with modified PAC
