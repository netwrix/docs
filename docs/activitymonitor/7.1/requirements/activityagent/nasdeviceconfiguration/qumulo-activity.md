---
title: "Qumulo Activity Auditing Configuration"
description: "Qumulo Activity Auditing Configuration"
sidebar_position: 110
---

# Qumulo Activity Auditing Configuration

The Netwrix Activity Monitor can be configured to monitor activity on Qumulo devices. To prepare
Qumulo to be monitored, an account needs to be provisioned and the audit event format may need to be
modified.

## Provision Account

Activity Monitor requires an account with the Observers role to monitor a Qumulo cluster. Follow the
steps to create a new account in the Qumulo web user interface with the Observers role.

**Step 1 –** Create a new user in **Cluster** > **Local Users & Groups**.

**Step 2 –** Assign the Observers role to the user using **Cluster** > **Role Management**.

This credential will then be used when configuring the Activity Agent to monitor the Qumulo device.

## Verify Audit Event Format

Qumulo reports audit events in one of two formats: CSV and JSON. While the Netwrix Activity Monitor
supports both, the JSON format is recommended as it provides more detail. In particular, it allows
the product to distinguish between permission change events and attribute change events, presents
granular information for permission changes, and includes user SIDs instead of just usernames. The
advanced filtering of Microsoft Office activity also requires the JSON format.

The JSON format for audit events was introduced in Qumulo Core 6.0.1. The new format can be enabled
via an SSH session to the Qumulo cluster.

Follow the steps to verify that audit event format and change the format, if needed.

**Step 1 –** Connect to the Qumulo cluster with SSH.

**Step 2 –** Execute the following command to log in:

`qq --host <ip-address-of-qumulo> login -u <user-name>`

The command will ask for the password.

**Step 3 –** Execute the following command to check current format:

**qq audit_get_syslog_config**

The format will be shown in the **format** field. The old format is **csv**; the new format is
**json**.

**Step 4 –** Execute the following command to change the format, if needed:

**qq audit_set_syslog_config --json**

The change willshould be reflected in the **format** field.
