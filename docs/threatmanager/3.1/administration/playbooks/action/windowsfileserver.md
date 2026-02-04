---
title: "Windows File System Target Actions"
description: "Windows File System Target Actions"
sidebar_position: 60
---

# Windows File System Target Actions

The following actions target Windows File System.

## Delete File

This action deletes the file associated with the threat.

![deletefile](/images/threatmanager/3.0/administration/playbooks/action/deletefile.webp)

- Credential – Select a credential profile that contains valid Active Directory credentials.
  Credential profiles are configured on the
  [Integrations Interface](/docs/threatmanager/3.1/administration/configuration/integrations/overview.md). If not specified, the
  action will be run as the credentials of the Action Service.

## Revert Permission Change

The Revert Permission Change action reverts a permission change on an Active Directory Object.

![revertpermissionchange](/images/threatmanager/3.0/administration/playbooks/action/revertpermissionchange.webp)

- Credential – Select a credential profile that contains valid Active Directory credentials.
  Credential profiles are configured on the Integrations Interface. If not specified, the action
  will be run as the credentials of the Action Service.

See the [Integrations Interface](/docs/threatmanager/3.1/administration/configuration/integrations/overview.md) topic for additional
information.

## Save File Hash

This action saves the file hash to the properties of the threat.

![savefilehash](/images/threatmanager/3.0/administration/playbooks/action/savefilehash.webp)

- Credential – Select a credential profile that contains valid Active Directory credentials.
  Credential profiles are configured on the
  [Integrations Interface](/docs/threatmanager/3.1/administration/configuration/integrations/overview.md). If not specified, the
  action will be run as the credentials of the Action Service.
