---
title: "EasyVista Ticket"
description: "EasyVista Ticket"
sidebar_position: 60
---

# EasyVista Ticket

This connector opens tickets in
[EasyVista](https://wiki.easyvista.com/xwiki/bin/view/Documentation/?language=en) for manual
provisioning.

This page is about
[Ticket/EasyVista](/docs/identitymanager/6.1/integration-guide/connectors/references-packages/easyvistaticket/index.md).

![Package: Ticket/EasyVista](/images/identitymanager/6.1/integration-guide/connectors/references-connectors/easyvistaticket/packages_easyvistaticket_v603.webp)

## Overview

EasyVista is an IT Service Manager that provides a service to organize IT resources in a company by
using tickets. This allows users to manage projects, materials and teams through a customizable
interface.

This connector focuses on the creation of EasyVista tickets for editing manually EasyVista
resources.

## Prerequisites

Implementing this connector requires:

- reading first the
  [appsettings documentation](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md);
- an EasyVista account with reading/writing permissions on the target instance.

## Export

This connector exports some of EasyVista entities,
[see the export capabilities of the EasyVista connector](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/easyvista/index.md).
Some entities cannot be exported.

## Fulfill

This connector writes to EasyVista to create incident and request tickets containing information to
create, update or delete a resource. It does not create a resource directly.

Once created, the ticket is managed in EasyVista, not in Usercube.

When the ticket is closed or canceled, Usercube updates the
[provisioning state](/docs/identitymanager/6.1/integration-guide/role-assignment/assignments-of-entitlements/index.md)
of the resource accordingly.

[See the fulfill capabilities of the EasyVista connector](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/easyvista/index.md).

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

[See how to configure password reset settings](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md).

### Credential protection

Data protection can be ensured through:

- [RSA encryption](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md),
  configured in the `appsettings.encrypted.agent.json` file;
- an
  [Azure Key Vault](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/azure-key-vault/index.md)
  safe;

- a
  [CyberArk Vault](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md)
  able to store EasyVista's `Login`, `Password`, `Account` and `Server`.
