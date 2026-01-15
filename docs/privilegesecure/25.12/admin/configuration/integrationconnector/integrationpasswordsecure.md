---
title: "Password Secure Integration"
description: "Password Secure Integration"
sidebar_position: 30
---

# Password Secure Integration

Netwrix Privilege Secure now integrates with Netwrix Password Secure to enable centralized, secure management of privileged credentials. This allows organizations to perform actions as specific users using credentials stored and managed in Password Secure, without exposing or manually handling those credentials. The integration streamlines privileged access workflows across both platforms, enhancing security and operational efficiency.


## Add a Vault Connector for Password Secure

Follow the steps to add a vault connector for Password Secure

**Step 1 –** Navigate to the Configuration > Integration Connectors page.

**Step 2 –** In the Integration Connector list, click the Add Integration Connector icon.

![Add HashiCorp Connector Integration](/images/privilegesecure/25.12/accessmanagement/admin/configuration/add/addpassword.png)

**Step 3 –** Enter the following information:

- Connector Name – Enter a name to uniquely identify the connector like "Password Secure"
- Connector Description (Optional) – Enter a brief description
- API URL - Enter the address of your Password Secure instance
- Service Account - Enter the Password Secure service account that will be used for the connections. Ensure it has enough privliges to access the desired credentials.

**Step 4 –** Click the Save icon to create the new integration connector.

- Skip Certificate Check – Select to ignore certification warnings when connecting to the server


The connector is added.
