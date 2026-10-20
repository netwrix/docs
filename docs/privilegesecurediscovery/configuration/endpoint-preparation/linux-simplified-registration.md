---
title: "Register Linux systems with a domain service account"
description: "Configure an existing domain account as the Linux service account so Privilege Secure for Discovery manages Linux systems without per-system registration."
sidebar_position: 30
---

:::warning[Needs dev input: remove before publishing]
TODO: Step 4: the domain-level default Linux directory bridging select is commented out in the domain configuration view, so the bridging solution can't be set at the domain level in the UI. Confirm that the per-system Directory Bridging control on the Grant Access screen, the Quickstart tool, and the API are the supported ways to set it, and whether the API accepts a domain-level default (default_system_config_linux.directory_bridging.strategy). Evidence: docker/web/common/config/views/domainConfiguration.html:157-159 (commented out), docker/web/common/access/views/accessView.html:101-116, docker/node/api-legacy-onprem/tests/api.test.js:5091.

TODO: Confirm that systems that were registered manually can be switched to the domain Linux service account, and the procedure. The previous page told readers to contact support. Evidence: none.

TODO: Screenshots in this page show an older UI layout. Re-capture them. Evidence: img file names dated 2023-02-14.
:::

You can use the domain configuration to set an existing account on your Linux machines as the service account that Netwrix Privilege Secure for Discovery uses to manage the endpoint. This avoids registering an account on each endpoint and supports a more consistent rollout.

:::caution
Always back up the `/etc/sudoers` file before you scan a Linux system or enable Scan mode on it. Scanning a Linux system flattens the `/etc/sudoers` file, regardless of the Protect mode setting. Flattening pulls all permissions from other sources, such as files in `/etc/sudoers.d`, into `/etc/sudoers` and disables sudo permissions from those sources.
:::

## Prerequisites

- A domain account that exists on the Linux machines and has sudo permission on every system that Privilege Secure for Discovery will manage.
- Linux systems that are in Active Directory.

## Configure the domain Linux service account

1. Verify that the domain Linux service account has sudo permission on the systems that Privilege Secure for Discovery will manage.
2. Go to **Configure** > **Server** and expand the domain that you want to configure.

   ![The Configure Server screen with a domain collapsed in the domain list](/images/privilegesecure/4.2/discovery/admin/configuration/12415682024599_screen_shot_2023-02-14_at_9.46.54_am_316x280.webp)

3. Find the **Linux Service Account** section at the bottom right of the domain configuration.

   ![The Linux Service Account section at the bottom right of the domain configuration](/images/privilegesecure/4.2/discovery/admin/configuration/12415682024599_screen_shot_2023-02-14_at_9.47.04_am_383x384.webp)

4. Enter the domain Linux service account user name in the format `DOMAIN\Username` and its password.
5. Click **Save**.

Systems in AD that weren't registered manually use this account to manage sudo privileges. Systems that were registered manually keep using the service account from their registration. For options to move a manually registered Linux system to the domain Linux service account, contact Netwrix Support.

## Set the directory bridging solution

Set the directory bridging solution that the systems use, such as SSSD. You can set it in any of the following ways:

- In the UI, use the **Directory Bridging** control for the system on the **Grant Access** screen.
- In the Quickstart tool, set **Set Directory Bridging Strategy** in the report spreadsheet. For more information, see [Report and update systems](../bulk-onboarding/report-and-update-systems.md).
- By using the API.
