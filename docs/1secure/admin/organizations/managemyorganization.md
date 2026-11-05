---
title: "Manage My Organization"
description: "Manage My Organization"
sidebar_position: 30
---

# Manage My Organization

After you add your organization, you can review or edit your profile on Configuration > My
Organization page.

![myorganization](/images/1secure/admin/organizations/myorganization.webp)

- Optionally, specify Edit settings or Request Deletion for your Organization.

    :::note
    If you are a Managed Service Provider (MSP) or a parent tenant, deletion is scheduled for 14
    days. If you are a child tenant, deletion is scheduled for 2 days. After the deletion date,
    a grace period begins (14 days by default). During the grace period, login is blocked and the agent API
    returns 403. Ingestion is rejected. After the grace period, 1Secure physically deletes the
    organization.
    :::


- You can configure reports branding and adjust other settings for your organization on
  this page.
- You can also delete your organization and wipe all of the data here.

Only users with the Tenancy Administration permission, which Administrators hold, can use the My
organization page and its settings, deletion, and authentication actions.

The My organization page has the following sections:

- **Settings** – Select **Edit Settings** to change the organization settings: Name, Language,
  Timezone, Country, Risk Profile, Alert Profile, tags, and Allow sub-tenants?, which sets
  whether the organization can be a managing organization.
- **Reports branding** – Select Export with logo, Export with name, or Export with name and logo.
- **AI-powered features** – Select the **Enable AI-powered features** checkbox.
- **Authentication** – Select the authentication method: 1Secure Authentication (default), Entra
  ID or OpenID Connect. See the [Single Sign On](/docs/1secure/admin/login/sso.md) topic for
  additional information.
- **Delete Organization** – Request deletion of the organization.

The deletion request text says: All data and users will be removed from Netwrix 1Secure. You can
cancel your request within a 14-day period. Self-service trial organizations can't revoke a
scheduled deletion.
