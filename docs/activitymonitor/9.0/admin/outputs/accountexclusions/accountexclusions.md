---
title: "Account Exclusions Tab"
description: "Account Exclusions Tab"
sidebar_position: 10
---

# Account Exclusions Tab

The Account Exclusions tab on an output Properties window is where monitoring scope by account name
can be modified. These settings are initially configured when the output is added.

Select an output from the Monitored Hosts & Services tab and click **Edit** to open the output Properties
window. The tab varies based on the type of host selected.

## For Exchange Online Hosts

The tab contains the following settings:

![Account Exclusions tab for Exchange Online](/images/activitymonitor/9.0/admin/outputs/accountexclusions_exchangeonline.webp)

- Add Windows Account – Opens the Specify account or group window to add an account for exclusion.
  See the [Specify Account or Group Window](/docs/activitymonitor/9.0/admin/outputs/accountexclusions/specifywindowsaccount.md) topic for additional
  information.
- Add Unix Account – Opens the Specify Unix Account window to add an account for exclusion. See the
  [Specify Unix Account Window](/docs/activitymonitor/9.0/admin/outputs/accountexclusions/specifyunixaccount.md) topic for additional information.
- Remove – Removes the selected account from exclusion. Confirmation is not requested.

    :::warning
    If an account is removed by accident, use the **Cancel** button to discard the
    change.
    :::


- Process group membership when filtering – Indicates if group memberships is processed when
  filtering accounts

The table lists accounts that are being excluded from monitoring, displaying columns for Account
Name and Account Type. By default, no accounts are being excluded.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Linux Hosts

The tab contains the following settings:

![linux](/images/activitymonitor/9.0/admin/outputs/linux.webp)

- Add Windows Account – Opens the Specify account or group window to add an account for exclusion.
  See the [Specify Account or Group Window](/docs/activitymonitor/9.0/admin/outputs/accountexclusions/specifywindowsaccount.md) topic for additional
  information.
- Add Unix Account – Opens the Specify Unix Account window to add an account for exclusion. See the
  [Specify Unix Account Window](/docs/activitymonitor/9.0/admin/outputs/accountexclusions/specifyunixaccount.md) topic for additional information.
- Remove – Removes the selected account from exclusion. Confirmation is not requested.

    :::warning
    If an account is removed by accident, use the **Cancel** button to discard the
    change.
    :::


- Process group membership when filtering – Indicates if group memberships is processed when
  filtering accounts

The table lists accounts that are being excluded from monitoring, displaying columns for Account
Name and Account Type. By default, no accounts are being excluded.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For NAS Device Hosts

The tab contains the following settings:

![Account Exclusions tab for NAS Hosts](/images/activitymonitor/9.0/admin/outputs/nasdevices.webp)

- Add Windows Account – Opens the Specify account or group window to add an account for exclusion.
  See the [Specify Account or Group Window](/docs/activitymonitor/9.0/admin/outputs/accountexclusions/specifywindowsaccount.md) topic for additional
  information.
- Add Unix Account – Opens the Specify Unix Account window to add an account for exclusion. See the
  [Specify Unix Account Window](/docs/activitymonitor/9.0/admin/outputs/accountexclusions/specifyunixaccount.md) topic for additional information.
- Remove – Removes the selected account from exclusion. Confirmation is not requested.

    :::warning
    If an account is removed by accident, use the **Cancel** button to discard the
    change.
    :::


- Process group membership when filtering – Indicates if group memberships is processed when
  filtering accounts

The table lists accounts that are being excluded from monitoring, displaying columns for Account
Name and Account Type. By default, no accounts are being excluded.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For SharePoint Hosts

The tab contains the following settings:

![Account Exclusions tab for SharePoint hosts](/images/activitymonitor/9.0/admin/outputs/sharepoint.webp)

- Add Windows Account – Opens the Specify account or group window to add an account for exclusion.
  See the [Specify Account or Group Window](/docs/activitymonitor/9.0/admin/outputs/accountexclusions/specifywindowsaccount.md) topic for additional
  information.
- Add SharePoint Account – Opens the Specify account window to add an account for exclusion. See the
  [Specify Account Window](/docs/activitymonitor/9.0/admin/outputs/accountexclusions/specifysharepointaccount.md) topic for additional information.
- Remove – Removes the selected account from exclusion. Confirmation is not requested.

    :::warning
    If an account is removed by accident, use the **Cancel** button to discard the
    change.
    :::


- Process group membership when filtering – Indicates if group memberships is processed when
  filtering accounts

The table lists accounts that are being excluded from monitoring, displaying columns for Account
Name and Account Type. By default, no accounts are being excluded.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For SQL Server Hosts

The tab contains the following settings:

![sqlhosts](/images/activitymonitor/9.0/admin/outputs/sqlhosts.webp)

- Add Sql User – Opens the Specify Sql User name window to add an account for exclusion. See the
  [Specify Sql User Name Window](/docs/activitymonitor/9.0/admin/outputs/accountexclusions/specifysqluser.md) topic for additional information.
- Remove – Removes the selected account from exclusion. Confirmation is not requested.

    :::warning
    If an account is removed by accident, use the **Cancel** button to discard the
    change.
    :::


- Process group membership when filtering – Indicates if group memberships is processed when
  filtering accounts

The table lists accounts that are being excluded from monitoring, displaying columns for Account
Name and Account Type. By default, no accounts are being excluded.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Windows File Server Hosts

The tab contains the following settings:

![Account Exlcusions tab for Windows Hosts](/images/activitymonitor/9.0/admin/outputs/windows.webp)

- Add Windows Account – Opens the Specify account or group window to add an account for exclusion.
  See the [Specify Account or Group Window](/docs/activitymonitor/9.0/admin/outputs/accountexclusions/specifywindowsaccount.md) topic for additional
  information.
- Remove – Removes the selected account from exclusion. Confirmation is not requested.

    :::warning
    If an account is removed by accident, use the **Cancel** button to discard the
    change.
    :::


- Process group membership when filtering – Indicates if group memberships is processed when
  filtering accounts

The table lists accounts that are being excluded from monitoring, displaying columns for Account
Name and Account Type. By default, the Windows File Server monitoring is excluding the following
accounts:

- NT Authority\IUSR
- NT Authority\SYSTEM
- NT Authority\LOCAL SERVICE
- NT Authority\NETWORK SERVICE

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.
