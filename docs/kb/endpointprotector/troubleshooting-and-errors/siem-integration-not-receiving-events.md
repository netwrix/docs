---
description: >-
  Explains how to check whether the syslog-ng service is running on the
  Netwrix Endpoint Protector Server when a SIEM integration stops receiving
  events, and what to do if restarting the service does not resolve it.
keywords:
  - Endpoint Protector
  - SIEM integration
  - syslog-ng
  - troubleshooting
  - backend access
  - SSH
  - events not received
  - systemctl
  - Ubuntu daemon
  - post-migration
products:
  - endpointprotector
sidebar_label: SIEM Integration Not Receiving Events
tags:
  - troubleshooting-and-errors
  - kb
title: "SIEM Integration Not Receiving Events"
knowledge_article_id: kA0Qk0000000000AAD
---

# SIEM Integration Not Receiving Events

## Symptom

A configured SIEM integration on the Netwrix Endpoint Protector Server stops receiving events. In rare cases, this can happen after a [server migration](/docs/endpointprotector/migrationprocedure/migrationguide), since the SIEM integration may require reconfiguration after restore. It can also occur independently of any migration.

## Cause

After a server migration, the SIEM integration may require reconfiguration after restore.

Separately, `syslog-ng` is a standard Ubuntu OS daemon that runs apart from the EPP Server application. Like any OS-level service, it can stop running because of a daemon crash, service corruption, or an operating system patch or update that affects daemon startup. There is no single confirmed root cause.

## Resolution

To restore SIEM event delivery, check the SIEM settings and the `syslog-ng` service, and restart the service if needed.

1. Verify the SIEM integration settings under **Appliance > SIEM Integration**, and reconfigure the destination if needed. See [SIEM Integration](/docs/endpointprotector/admin/appliance#siem-integration) for the full configuration reference.
2. If the settings are correct but events still do not arrive, verify that the underlying `syslog-ng` service is running on the server.

    > **NOTE:**
    > The following commands require backend (SSH) access to the EPP Server. If you do not have backend access, contact [Netwrix Support](https://www.netwrix.com/support.html) and request that they perform this check on your behalf.

    ```bash
    dpkg -l | grep syslog-ng
    syslog-ng --version
    systemctl status syslog-ng
    ```

3. If `syslog-ng` is not running, restart the service and confirm SIEM event delivery resumes.
4. If the service stays down, or events still do not arrive after a restart, contact Netwrix Support.

> **NOTE:**
> If events arrive but in a different structure than before, check the server version. On version 2608, the SIEM message structure can differ from the previous format because of database changes. Version 2611 restores the previous format. See [Configuring a SIEM Integration](/docs/kb/endpointprotector/administration-security-and-monitoring/set_up_a_siem_integration).

## Related Links

- [SIEM Integration](/docs/endpointprotector/admin/appliance#siem-integration)
- [EPP Appliance migration guide](/docs/endpointprotector/migrationprocedure/migrationguide)
