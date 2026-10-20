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

A configured SIEM integration on the Netwrix Endpoint Protector Server stops receiving events. In rare cases, this can happen after a [server migration](/docs/endpointprotector/install/migrationprocedure/migrationguide), since the SIEM integration may require reconfiguration after restore. It can also occur independently of any migration.

## Cause

`syslog-ng` is a standard Ubuntu OS daemon that runs independently of the Endpoint Protector Server application. Like any OS-level service, it can stop running because of a daemon crash, service corruption, or an operating system patch or update that affects daemon startup. There is no single confirmed root cause.

To restore SIEM event delivery, follow the check and restart procedure in Resolution.

## Resolution

1. Verify the SIEM integration settings under **System Configuration → SIEM Settings**, and reconfigure the destination if needed. See [SIEM Integration](/docs/endpointprotector/admin/appliance#siem-integration) for the full configuration reference.
2. If the settings are correct but events still do not arrive, verify that the underlying `syslog-ng` service is running on the server.

:::note
The following commands require backend (SSH) access to the EPP Server. If you do not have backend access, contact Netwrix Support and request that they perform this check on your behalf.
:::

```bash
dpkg -l | grep syslog-ng
syslog-ng --version
systemctl status syslog-ng
```

3. If `syslog-ng` is not running, restart the service and confirm SIEM event delivery resumes.
4. If the service stays down, or events still do not arrive after a restart, contact Netwrix Support.

## Related Links

- [SIEM Integration](/docs/endpointprotector/admin/appliance#siem-integration)
- [EPP Server Migration & Upgrade Guide](/docs/endpointprotector/install/migrationprocedure/migrationguide)
