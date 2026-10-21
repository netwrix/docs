---
title: "Set up scan mode"
description: "Configure the scan account and the default scan policy so Privilege Secure for Discovery can discover accounts on Windows systems."
sidebar_position: 10
---

Scan mode lets Privilege Secure for Discovery read the accounts and groups with administrator access on your Windows systems, without changing them. Set up scan mode first, so you can review the discovered access before you enable protect mode.

## Prerequisites

- You added the domain with its Bind, Scan, and Protect accounts. See [Add a domain](../domains-and-ad/add-a-domain.md) and [Service accounts](../../requirements/service-accounts.md).
- A static domain controller address for the domain connection. See the prerequisites in [Add a domain](../domains-and-ad/add-a-domain.md#prerequisites).

## Check the scan account

1. Select **Configure** > **Server**.
1. Select the domain to open its settings.
1. Under **Scan Mode Account**, confirm the domain user and password. If you change either one, select **Save**.

   ![The Scan Mode Account with its domain user and password](/images/privilegesecurediscovery/requirements/svcacct-scan-account.webp)

## Allow scanning of Windows systems

Windows systems restrict which accounts can read the members of the local Administrators group over the network. Ask a domain administrator to deploy a Group Policy Object (GPO) that grants the scan account this right. The scan account doesn't need administrator rights. For the steps, see [Create a scan GPO for remote SAM access](../domains-and-ad/scan-gpo-domain-controllers.md).

:::warning
Never apply this GPO to domain controllers.
:::

## Enable scan mode for the domain

1. Select **Configure** > **Server**.
1. Select the domain to open its settings.
1. Under **Default Policies**, set **Scan Mode** to **Enabled**.

   ![The Default Policies with Scan Mode enabled and Protect Mode disabled](/images/privilegesecurediscovery/requirements/svcacct-default-policies.webp)

1. Select **Save**.

The default policies apply to the computers that the product adds to its inventory from now on. Leave **Protect Mode** set to **Disabled** until you review the scan results: a default of **New Accounts: JITA** protects every computer that the product imports afterward. To enable scan mode for systems that are already in the inventory, use the Bulk Actions **Scan Policy** action or change the system. See [Run bulk actions on systems](../../admin/systems/bulk-actions.md).

After the first scan, review the results on the dashboard. For an explanation of the dashboard, see [Dashboard](../../admin/dashboard.md).

## Enable or disable scan mode for one system

1. Select **Access** > **Grant Access**.
1. Search for the system and select it.
1. Next to **Scan Mode**, select the button, and then select **Enable** or **Disable**.

To scan the system now, select **Rescan**.

You can't disable scan mode while offline access is enabled for the system. The product shows the message `Cannot disable scan while offline access is enabled`.
