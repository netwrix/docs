---
title: "Authentication Provider"
description: "Authentication Provider Page"
sidebar_position: 20
---

# Authentication Provider Page

The Authentication Provider page provides configuration settings for third-party authentication
providers using RADIUS, OpenID, and SAML integrations.

Use the gear icon in the upper right corner of the console to open the Configuration menu. Then
select **Integrations** to open the Integrations interface.

![Integrations interface on the Authentication Provider page](/images/threatprevention/8.0/reportingmodule/configuration/integrations/authenticationprovider/page.webp)

Click **Authentication Provider** in the navigation pane to view a list of already configured
authentication providers, if any.

The table displays the provider name, as supplied during configuration, and an icon indicating if
the integration is enabled. To view provider details or make modifications, select a provider from
the table or select it from the Credential Profile drop-down in the navigation pane.

## Add an Authentication Provider

Follow the steps to add an authentication provider.

**Step 1 –** On the Integrations interface, click Add New Integration in the navigation pane. The
Add New Integration window opens.

![Add New Integration window with Authentication Provider type selected](/images/threatprevention/8.0/reportingmodule/configuration/integrations/authenticationprovider/authenticationprovider.webp)

**Step 2 –** In the Type drop-down list, select Authentication Provider.

**Step 3 –** Provide a unique name and description for the authentication provider.

**Step 4 –** Click Add. The Add New Integration window closes.

The authentication provider is listed in the Integrations navigation pane and the configuration
window for the provider opens. You must configure the provider for use with a supported
authentication provider type, i.e., OpenID, RADIUS, or SAML.

## Supported Types of Authentication Providers

On the Integrations interface, select an authentication provider under the Authentication Provider
node in the navigation pane or from the table to configure, view, or modify its details.

![Integrations interface displaying the details for an Authentication Provider with the type drop-down menu open](/images/threatprevention/8.0/reportingmodule/configuration/integrations/authenticationprovider/type.webp)

The following authentication provider types are supported; you can configure an authentication
provider for any of these:

- RADIUS – See the [RADIUS Authentication Provider](/docs/threatprevention/8.0/reportingmodule/configuration/integrations/authenticationprovider/radius.md) topic for additional information.
- OpenID – See the [OpenID Authentication Provider](/docs/threatprevention/8.0/reportingmodule/configuration/integrations/authenticationprovider/openid.md) topic for additional information.
- SAML – See the [SAML Authentication Provider](/docs/threatprevention/8.0/reportingmodule/configuration/integrations/authenticationprovider/saml.md) topic for additional information.
