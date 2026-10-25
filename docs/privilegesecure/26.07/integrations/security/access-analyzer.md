---
title: "Netwrix Access Analyzer integration"
description: "Connect Privilege Secure to Netwrix Access Analyzer and import the administrator accounts, groups, and resources that Access Analyzer discovers."
sidebar_position: 10
---

# Netwrix Access Analyzer integration

Netwrix Access Analyzer can send information about administrator accounts to Privilege Secure. You create an access role in Access Analyzer, add two service accounts in Privilege Secure, add an integration connector, and then import the data.

The connector template for this integration is named **StealthAUDIT**. This is the former product name, and it is the template that Netwrix Access Analyzer uses. **StealthAUDIT** is also the default template for a new connector.

## Prerequisites

Run these Access Analyzer job groups successfully before you import. Privilege Secure can't import data that the jobs haven't collected.

- Active Directory Inventory job group
- Windows > Privileged Accounts > Local Administrators job group

For the jobs themselves, see the following Access Analyzer pages:

- [Active Directory Inventory solution](/docs/accessanalyzer/12_0/solutions/activedirectoryinventory/overview)
- [Windows privileged accounts solution](/docs/accessanalyzer/12_0/solutions/windows/privilegedaccounts/overview)

## Create the access role in Access Analyzer

The access role gives Privilege Secure a Client ID and a Client secret that it uses to read data from Access Analyzer. For the full wizard, see [Assign application access](/docs/accessanalyzer/12_0/admin/settings/access/restapi/assignappaccess).

1. In Access Analyzer, go to the **Access** node and select **Add Access** in the upper-right corner. The Access Role wizard opens.
1. Select **An application accessing data remotely through Web Service**, and then click **Next**.
1. On the **Application Access** page, select **Tables** and click **Add**. The **Select Database Objects** window opens.
1. Select these objects. Use **Filter objects by name** to find them.

   | Type | Objects |
   |---|---|
   | Tables | `SA_ADInventory_Domains`, `SA_SG_LocalAdmins_Details` |
   | Views | `SA_ADInventory_ComputersView`, `SA_ADInventory_UsersView` |

1. Click **OK**, review the tables and views, and click **Next**.
1. On the **Application Details** page, enter `Privilege Secure` as the application name.
1. Set **Access Expiration**. Select **Access expires within** (the default is 72 hours) or **Access expires on specified date**.
1. Select **Generate**, and copy the **Client ID** and the **Client secret**.
1. Click **Finish**, and then click **Save** on the **Access** view.
{/* TODO verify: whether Access Analyzer must be restarted after you create the access role. The 26.03 page says to restart it. The Access Analyzer 12.0 pages (assign application access, obtain token) don't require a restart. Confirm on a 12.x server. */}

:::warning
The client secret stops working when the access expiration passes. Set an expiration that suits how long you want the integration to run, and create a new access role before the old one expires.
:::

{/* TODO verify: which Access Analyzer versions the StealthAUDIT connector supports. The Privilege Secure code doesn't restrict the version, and the Access Analyzer REST steps are documented only in older Privilege Secure pages. */}

## Add the service accounts in Privilege Secure

The connector uses two service accounts. For the add form and its fields, see [Service accounts](../../configuration/service-accounts/service-accounts.md).

| Service account | Name (example) | Username | Password | Platform |
|---|---|---|---|---|
| API access | `Access Analyzer API` | The **Client ID** from the access role | The **Client secret** from the access role | Windows |
| Administrator | `Access Analyzer Admin` | A local administrator account on the Access Analyzer server | The password of that account | Windows |

For the administrator account, set **Domain** to the domain that the Access Analyzer server is in. For the API account, leave **Domain** empty.

## Add the connector

1. Select **Configuration** > **Integration Connectors**.
1. Click **+** above the list.
1. Enter a name for the connector and an optional description.
1. In **Connector Template**, select **StealthAUDIT**.
1. Fill in the fields in the table.
1. Click **Save**.

| Field | Description |
|---|---|
| **Server Hostname**\* | The host name of the server that Access Analyzer is installed on. The default is `localhost`. |
| **Port**\* | The port of the Access Analyzer web service. The default is `8082`. |
| **REST Credentials**\* | The service account that holds the Client ID and Client secret. Select `Access Analyzer API` from the example. |
| **Power Shell Credentials** | Optional. The service account for the Access Analyzer server administrator. Select `Access Analyzer Admin` from the example. |

An asterisk (\*) marks a required field. Both credential fields list the service accounts that you added.

![The Add Integration Connector form with the StealthAUDIT template selected, showing Server Hostname, Port 8082, REST Credentials, and Power Shell Credentials.](/images/privilegesecure/26.07/integrations/integration-connector-stealthaudit-form.webp)

## Import the data

1. Select **Configuration** > **Integration Connectors**.
1. Select the connector that you created.
1. Click **Sync StealthAUDIT** below the connector settings. The button is unavailable while an import runs, and the log of the last run appears under it. The import can take some time.

To follow the progress, open the Action Service on the **Service Nodes** page. See [Monitor service nodes](../../admin/service-nodes/service-nodes.md).

## Related topics

- [Service accounts](../../configuration/service-accounts/service-accounts.md)
- [Monitor service nodes](../../admin/service-nodes/service-nodes.md)
