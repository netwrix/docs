# Prerequisites

Netwrix Auditor Integration API uses HTTPS for communication with the automatically generated certificate. The default communication port is 9699.

Refer to the [Security](/docs/product_docs/auditor/auditor/api/security.md) topic for detailed instructions on how
to disable HTTPS and manage other API settings.

## Configure Integration API Settings

Follow the steps to change the port.

__Step 1 –__ In the Netwrix Auditor main window, navigate to the Integration tile.

__Step 2 –__ Make sure the Leverage Integration API option is enabled.

__Step 3 –__  Click Modify under the API settings section and specify a port number. Windows firewall rule will be automatically created.

__Step 4 –__ If you use a third-party firewall, you must create a rule for inbound connections manually.

[![Integration API Settings](/static/img/product_docs/auditor/auditor/addon/connectwise/integrations_thumb_0_0.png)](/docs/product_docs/auditor/resources/images/auditor/settings/integrations.png)

## Configure Audit Database Settings

When you first configure the Audit Database settings in Netwrix Auditor, the product also creates several databases for special purposes, including Netwrix\_Auditor\_API. This database is designed to store data imported from the other sources using Netwrix Auditor Integration API.

Make sure that the Audit Database settings are configured in Netwrix Auditor. To check or configure these settings, navigate to the __Settings > Audit Database__.

You cannot use Netwrix Auditor Integration API without configuring the Audit Database.

Refer to the [Audit Database](/docs/product_docs/auditor/auditor/admin/settings/auditdatabase.md) topic for detailed instructions on how to configure SQL Server settings.
