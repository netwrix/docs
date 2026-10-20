---
title: "Set up scan mode"
description: "Configure the scan account and scan policy so Privilege Secure for Discovery can discover accounts on Windows systems."
sidebar_position: 10
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the Windows computers still need the scan GPO at 26.09.1 and which GPO page applies to which domain controller version. Evidence: none; the earlier documentation pointed to a Server 2012 or 2008 page that is now merged into the Server 2016 and later page.

TODO: Confirm the labels and layout of the domain configuration page, including how the page opens with the arrow next to a domain. Evidence: docker/web/common/config/views/domainConfiguration.html shows Scan Mode Account, Protect Mode Account, and Default Policies > Scan Mode labels.

TODO: Confirm that a static domain controller is still required and that a load-balanced connection still causes group updates to be missed. Evidence: carried over from the earlier documentation; none in code.
:::

:::warning[Screenshot needs attention: remove before publishing]
TODO: /images/privilegesecure/4.2/discovery/360048268793_blobid0.webp comes from an earlier release and can show the old product branding. Re-capture on the current release and redact any domain or account names.
:::

Scan mode lets Privilege Secure for Discovery read the accounts and groups with administrator access on your Windows systems, without changing them. Set up scan mode first, so you can review the discovered access before you enable protect mode.

## Prerequisites

- The Bind, Scan, and Protect domain accounts. For details, see [Service accounts](../../requirements/service-accounts.md).
- A static domain controller for the domain. Privilege Secure for Discovery detects changes to groups, organizational units (OUs), and users through this connection. A load-balanced connection prevents the product from recognizing group updates correctly.

## Add the scan account

1. Select **Config** > **Server Configuration**.
1. Next to the domain, select the arrow to open the domain settings.

   ![Server Configuration page with the settings of a domain open](/images/privilegesecure/4.2/discovery/360048268793_blobid0.webp)

1. Under **Scan Mode Account**, enter the domain user and the password.
1. Under **Protect Mode Account**, enter the domain user and the password.
1. Select **Save**.

## Allow scanning of Windows systems

Use the scan account to deploy a Group Policy Object (GPO) change that lets Privilege Secure for Discovery scan all Windows systems. For the steps, see [Scan GPO guide for domain controllers](../domains-and-ad/scan-gpo-domain-controllers.md).

## Enable scan mode for the domain

1. Select **Config** > **Server Configuration**.
1. Open the domain settings.
1. Under **Default Policies**, set **Scan Mode** to **Enabled**.
1. Select **Save**.

The product starts scanning the domain. After the first scan, review the results on the dashboard. For an explanation of the dashboard, see [Dashboard](../../admin/dashboard.md).

## Enable or disable scan mode for one system

To change scan mode for a single system, open the system on the **Access** > **Grant Access** page and change **Scan Mode** to **Enabled** or **Disabled**. You can't disable scan mode while offline access is enabled for the system.
