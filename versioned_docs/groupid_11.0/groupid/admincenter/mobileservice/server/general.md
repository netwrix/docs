# Manage General Server Settings

You can change the display name of a Mobile service and associate identity stores with it.

What do you want to do?

- [Change a Service’s Display Name](#change-a-services-display-name)
- [Associate Identity Stores with a Service](#associate-identity-stores-with-a-service)

## Change a Service’s Display Name

See the
[Change a Service’s Display Name](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#change-a-services-display-name)
topic.

## Associate Identity Stores with a Service

You must associate one or more identity stores with a Mobile service. When users configure the app
with a particular service, the identity stores associated with that service will be available in the
app for logging in.

**To associate an identity store:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Settings**.
3. The **Identity Stores** area on the **General Settings** page lists the identity stores defined
   in Admin Center. It displays the provider type an identity store is created for, and whether the
   identity store is enabled.

    - Select the check box for an identity store to associate it with the service.
    - Clear the check box for an identity store to dissociate it.

    All instances of this Mobile service serve the identity stores you select here.

4. Click **Save**.

**See Also**

- [Mobile Service](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/overview.md)
- [Server Settings](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/server/overview.md)
