---
title: "EasyVista Ticket"
description: "EasyVista Ticket"
sidebar_position: 60
---

# EasyVista Ticket

This connector opens tickets in
[EasyVista](https://wiki.easyvista.com/xwiki/bin/view/Documentation/?language=en) for manual
provisioning.

This page is about [EasyVista Ticket](/docs/identitymanager/saas/integration-guide/connectors/references-packages/easyvistaticket/index.md).

![Package: Ticket/EasyVista](/images/identitymanager/saas/integration-guide/connectors/references-connectors/easyvistaticket/packages_easyvistaticket_v603.webp)

## Overview

EasyVista is an IT Service Manager that provides a service to organize IT resources in a company by
using tickets. This allows users to manage projects, materials and teams through a customizable
interface.

This connector focuses on the creation of EasyVista tickets for editing manually EasyVista
resources.

## Prerequisites

Implementing this connector requires:

- Reading first the
  [appsettings.agent](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md);
- An EasyVista account with reading/writing permissions on the target instance.

## Export

This connector exports some of EasyVista entities, see the export capabilities of the
[EasyVista](/docs/identitymanager/saas/integration-guide/connectors/references-packages/easyvista/index.md) connector. Some entities cannot be
exported.

## Fulfill

This connector writes to EasyVista to create incident and request tickets containing information to
create, update or delete a resource. It does not create a resource directly.

Once created, the ticket is managed in EasyVista, not in Identity Manager.

When the ticket is closed or canceled, Identity Manager updates the provisioning state of the
resource accordingly. See the
[Entitlement Assignment](/docs/identitymanager/saas/integration-guide/role-assignment/assignments-of-entitlements/index.md) topic to
find out more on how to configure password reset settings.

See the fulfill capabilities of the [EasyVista](/docs/identitymanager/saas/integration-guide/connectors/references-connectors/easyvista/index.md) connector.

> For example:
>
> ```
> appsettings.agent.json
> "EasyVistaManual": {
>   "Server": "https://example.easyvista.com/",
>   "Login": "username",
>   "Password": "password",
>   "Account": "11111"
> },
>
> ```

## Authentication

### Password reset

See the
[appsettings.agent](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
topic to find out more on how to configure password reset settings.

### Credential protection

Data protection can be ensured through:

- [RSA Encryption](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md),
  configured in the `appsettings.encrypted.agent.json` file;
- An [Connection](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) safe;

- a
  [CyberArk's AAM Credential Providers ](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md)
  able to store EasyVista's `Login`, `Password`, `Account` and `Server`.
