---
title: "Add Authentication Connector"
description: "Add an MFA, OpenID Connect, or SAML authentication connector to the Privilege Secure console."
sidebar_position: 10
---

# Add Authentication Connector

To add an authentication connector to the console.

1. Navigate to the **Configuration** > **Authentication** page.
2. In the Connectors list, click the **Plus** icon.

   ![Add Authentication Connector window with connector fields](/images/privilegesecure/26.03/accessmanagement/admin/configuration/add/addauthentication.webp)

3. Enter the following information:

   - **Authentication Connector Name** — Displays the name of the authentication connector
   - **Connector Description (Optional)** — Enter a brief description to identify the service account
   - **Connection Type** — Indicates the type of authentication

   :::note
   After you select the Connection Type, additional fields become available. The available
   fields will change depending on the selection.
   :::

4. Enter the information from the applicable authentication connector provider. See the
   [Authentication Page](/docs/privilegesecure/26.03/admin/configuration/authentication/authentication.md) section for detailed descriptions of the fields.

   - For OpenID Connect, open the
     [OpenID Connect Configuration Wizard](/docs/privilegesecure/26.03/admin/configuration/authentication/openidconnectconfigu/openidconnectconfiguration.md)
   - For SAML, open the [SAML Configuration Wizard](/docs/privilegesecure/26.03/admin/configuration/authentication/samlconfiguration.md)

   See the [OpenID Connect Authentication](/docs/privilegesecure/26.03/admin/configuration/authentication/openidconnectconfigu/openidconnectauthentication.md)
   appendices for additional information on how to configure third party Authentication Connectors.

5. Click **Save** to create the new authentication connector.

The new authentication connector is added to the Connectors list.
