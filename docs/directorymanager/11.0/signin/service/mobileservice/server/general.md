---
title: "Manage General Mobile Service Settings in GroupID"
description: "Change the display name of a Mobile service and associate identity stores with it so users can sign in from the mobile app."
keywords:
  - Mobile service display name
  - identity store association
  - Mobile service settings
  - Mobile app identity stores
sidebar_position: 10
---

# Manage General Mobile Service Settings in GroupID

You can change the display name of a Mobile service and associate identity stores with it.

What do you want to do?

- [Change a Service’s Display Name](#change-a-services-display-name)
- [Associate Identity Stores with a Service](#associate-identity-stores-with-a-service)

## Change a Service’s Display Name

See the
[Change a Service’s Display Name](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#change-a-services-display-name)
topic.

## Associate Identity Stores with a Service

You must associate one or more identity stores with a Mobile service. When users configure the app
with a particular service, the identity stores associated with that service are available in the
app for signing in.

**To associate an identity store:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Settings**.
3. The **Identity Stores** area on the **General Settings** page lists the identity stores defined
   in Admin Center. It displays the provider for each identity store and whether the
   identity store is enabled.

    - Select the checkbox for an identity store to associate it with the service.
    - Clear the checkbox for an identity store to dissociate it.

    All instances of this Mobile service serve the identity stores you select here.

4. Click **Save**.

**See Also**

- [GroupID Mobile Service Overview](/docs/directorymanager/11.0/signin/service/mobileservice/overview.md)
- [Mobile Service Server Settings in GroupID](/docs/directorymanager/11.0/signin/service/mobileservice/server/overview.md)
