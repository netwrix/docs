---
title: "Nutanix Appliance Access & Sensitive Data Auditing Configuration"
description: "Nutanix Appliance Access & Sensitive Data Auditing Configuration"
sidebar_position: 10
---

# Nutanix Appliance Access & Sensitive Data Auditing Configuration

The credentials used to run Enterprise Auditor scans on Nutanix appliances must have the **Backup
Admin: Backup Access only** role assigned.

## Nutanix Prism Central Interface

Follow the steps to configure the required account in the Nutanix Prism Central Interface.

**Step 1 –** Select the **Home** dropdown and select **File Server**.

**Step 2 –** On the file server page, under actions select **Launch Files Console**.

**Step 3 –** On the new files URL page, locate the **Configuration** dropdown and select **Manage
Roles**.

![Nutanix Backup Admin: Backup Access only role](/images/accessanalyzer/11.6/config/nutanix/nutanixbackupadminrole.webp)

**Step 4 –** On the Manage Roles window, add an account with the **Backup Admin: Backup Access
only** role.

This account must be used for running the Enterprise Auditor scans on Nutanix appliances.
