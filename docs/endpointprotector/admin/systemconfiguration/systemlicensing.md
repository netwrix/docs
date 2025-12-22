---
title: "Licensing"
description: "Licensing"
sidebar_position: 40
---

# Licensing

This section provides a complete overview of your licensing status and allows you to manage licenses
for Modules, such as Content Aware Protection and eDiscovery, as well as Endpoints, the computers
you protect. You can import licenses, view details, and handle free trials, ensuring efficient and
flexible license management.

![Licensing](licensingpage.png)

:::note
As of Endpoint Protector Version 5.9.0.0, a new subscription-based licensing system has
been introduced. This change removes the licensing restrictions on Premium features, granting
unrestricted access to features like Contextual Detection for all customers. This adjustment aligns
with the revised licensing model, categorizing all features as standard and accessible to all users.
:::


Endpoint Protector Licensing is based on two main aspects:

- Modules – all modules are licensed separately (Content Aware Protection, eDiscovery, etc.) and
  require the Device Control module
- Endpoints – refers to the Windows, Mac or Linux computers that need to be protected, by having the
  Endpoint Protector Client installed on them

Based on the selected Modules and Endpoints, a licensing ﬁle will be provided by your Endpoint
Protector Representative.

The Endpoint Protector **Server ID** uniquely identiﬁes each server and is linked to the license
ﬁle. This needs to be provided to the Endpoint Protector representative before purchasing the
licenses.

The **License End Date** displays the validity of the licenses in the system, and **Support**
represents the level of purchased Support (Standard or Premium)

## Free Trial

Endpoint Protector provides a one-time free, 30-day trial period, and by enabling the Free Trial
option, you will automatically enable all modules for 50 computers. The endpoint licenses will be
assigned on a ﬁrst-in-ﬁrst-served basis.

If one or more licensed endpoints become inactive and need to be reassigned, you can release those
licenses, and they will automatically be reassigned to other active computers.

## Import and Manage Licenses

Click **Import Licenses** to allow browsing for the license ﬁle. It contains all the relevant
information in a single ﬁle (modules, number of endpoints, expiry date, type of Support, etc.).
Click **View Licenses** to allow the management of the endpoint licenses.

![Import and Manage Licenses](importmanagelicenses.webp)

If one or more licensed endpoints become inactive and need to be reassigned, you can release those
licenses, which will automatically be reassigned to other online computers.

By using the Automatic Release Licenses functionality, licenses will be released automatically for
endpoints that have not been seen online in a speciﬁc number of days (15 days, 30 days, 90 days,
etc. or a custom value).

![Automatic Release Licenses  ](autoreleaselicenses.webp)

To streamline license management within System Conﬁguration, navigate to **Licensing** and
discover the Serial Number ﬁeld under the **View Licenses** section. In the licensing table, you
will ﬁnd a Serial Number column. To customize your view, use the **Show/Hide Columns** button,
including a checkbox for "Serial Number" (defaulted to 'show'). This resolves issues with identical
computer names and facilitates more effective management via Serial Number integration, reinforced
by MachineUUIDs.

:::note
If a computer's Serial Number is absent, it will be substituted with MachineUUID to ensure
endpoint machine reliability, now featuring in the license page column across all OS platforms.
:::


![Licensing Table](licensingtable.webp)
