---
title: "Create an Identity Store in Directory Manager"
description: "Create an identity store for Active Directory, Microsoft Entra ID, Generic LDAP, or Google Workspace so you can manage groups and identities."
keywords:
  - identity store
  - Active Directory
  - Microsoft Entra ID
  - Generic LDAP
  - Google Workspace
  - gMSA
sidebar_position: 10
---

# Create an Identity Store in Directory Manager

To perform group and identity management operations in an identity provider using Directory Manager, first create an identity store for that provider.

You can create identity stores for these providers:

- Active Directory
- Microsoft Entra ID
- Generic LDAP
- Google Workspace

To create an identity store, specify an identity provider and its connection details.

After you create an identity store, configure certain settings for it. For details, see the [Configure an Identity Store in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/configure.md) topic.

## Create an identity store for Active Directory

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click **Create Identity Store** in the top right corner.
3. On the **Create Identity Store** page, use the **Store Type** dropdown list to select an identity provider to create an identity store for.

   This list displays the supported providers. Active Directory is the default selection. Fields on this page vary, depending on the provider you select.

4. Enter a name for the identity store in the **Name** box.
5. In the **Domain Name** box, enter the fully qualified name of the Active Directory domain you want to create the identity store for.
6. In the **Service Account** box, enter the username of a service account or a group managed service account (gMSA) to connect to Active Directory.

   - For a service account – The service account must have sufficient privileges on the provider to facilitate group and identity management operations using Directory Manager. For the minimum permissions the service account requires for Active Directory, see the [Set Up a Directory Manager Service Account for AD and Exchange](/docs/directorymanager/11.2/requirements/permissions/adserviceaccount.md) topic.
   - For a gMSA – If you provide a service account with ‘$’ as its last character (as in MyAdminAccounts$), Directory Manager treats it as a Group Managed Service Account (gMSA). To use a gMSA to connect an identity store to Active Directory, configure the gMSA properly and give it sufficient permissions. See the [Configure a gMSA for Directory Manager](/docs/directorymanager/11.2/requirements/permissions/gmsarequirements.md) topic.

7. In the **Service Account Password** box, enter the service account password. Skip this box for a gMSA.
8. Select the **SSL Enabled** checkbox if the directory server is LDAP over SSL enabled.

   :::note
   Directory Manager 11 supports LDAPS. However, the Replication Service still connects to the domain controller through the LDAP 389 port. Therefore, enable both the LDAP and LDAPS protocols on the domain controller.
   :::

9. Click **Create Identity Store**. The **Replicate Identity Store** message appears. Select one of these options:

   - Later – replicates all the objects to Elasticsearch at the next due replication time, according to the replication settings.
   - Replicate Now – replicates all the objects to Elasticsearch now.

The identity store is available on the **Identity Stores** page. You can specify different configurations for it.

## Create an identity store for Microsoft Entra ID

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click **Create Identity Store** in the top right corner.
3. On the **Identity Stores** page, use the **Store Type** dropdown list to select an identity provider to create an identity store for.

   This list displays the supported providers. Select _Microsoft Azure_.

4. Enter a name for the identity store in the **Name** box.
5. From the **Cloud** dropdown list, select the cloud where your Microsoft Entra ID tenant exists.
6. In the **Domain Name** box, enter the fully qualified name of the Microsoft Entra ID domain you want to create the identity store for.
7. Specify the path to the .pfx certificate in the **PFX Certificate** box. Click **Choose File** and browse for the file. Select it and click **Open**.

   As a prerequisite, you must generate the .pfx certificate on the Directory Manager machine. See the [Generate a Certificate for Entra ID Authentication ](/docs/directorymanager/11.2/configureentraid/register/modauth.md) topic for information on generating a certificate and then converting it into the .pfx format.

8. In the **PFX Certificate Password** box, enter the password you created while exporting the .pfx certificate.
9. In the **Registered Application ID on Entra ID** box, enter the application ID assigned to the Directory Manager application when you registered it in Microsoft Entra Admin Center.
10. In the **Registered Client Secret on Entra ID** box, provide the client secret value generated against the certificate uploaded to Microsoft Entra Admin Center while registering the Directory Manager application.
11. If you bind a custom domain with your Microsoft Entra ID tenant and create an identity store for Microsoft Entra ID using the credentials of that custom domain, enter the name of the primary domain in the **Primary Domain Name** box. This avoids affecting _write_ operations.
12. Click **Create Identity Store**. The **Replicate Identity Store** message appears. Select one of these options:

    - Later – replicates all the objects to Elasticsearch at the next due replication time, according to the replication settings.
    - Replicate Now – replicates all the objects to Elasticsearch now.

The identity store is available on the **Identity Stores** page. You can specify different configurations for it.

:::note
Microsoft's throttling policy restricts an application (such as Directory Manager) to a maximum of three concurrent sessions with Microsoft Entra ID. Therefore, Directory Manager allows only one active session at any given time, which the Data service and the Replication service share.
:::

## Create an identity store for Generic LDAP

Create a Generic LDAP identity store to connect to any LDAP version 3-compliant directory server, such as Sun ONE directory server. This provider doesn't support dynamic schema detection. The schema included for this provider mostly contains commonly used fields.

**To create an identity store:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click **Create Identity Store** in the top right corner.
3. On the **Create Identity Store** page, use the **Store Type** dropdown list to select an identity provider to create an identity store for.

   This list displays the supported providers. Select _Generic LDAP_.

4. Enter a name for the identity store in the **Name** box.
5. In the **Hostname** box, enter the fully qualified domain name or IP address of the machine that hosts the generic LDAP server.
6. In the **Port Number** box, enter the port on which LDAP is running. Directory Manager uses this port to communicate with the host machine.
7. In the **Domain Name** box, enter the fully qualified name of the domain you want to create the identity store for.
8. In the **Service Account** box, enter the fully qualified username of a service account to connect to _Generic LDAP_, for example, CN=Admin,CN=Users,DC=Imanami,DC=COM. The service account must have sufficient privileges on the provider to facilitate group and identity management operations using Directory Manager.
9. In the **Service Account Password** box, enter the service account password.
10. Click **Create Identity Store**. The **Replicate Identity Store** message appears. Select one of these options:

    - Later – replicates all the objects to Elasticsearch at the next due replication time, according to the replication settings.
    - Replicate Now – replicates all the objects to Elasticsearch now.

The identity store is available on the **Identity Stores** page. You can specify different configurations for it.

## Create an identity store for Google Workspace

### Required Google Cloud and Workspace setup

- In Google Cloud Console, enable the following APIs for your service account:
   - Admin SDK API (admin.googleapis.com)
   - Cloud Identity (cloudidentity.googleapis.com)
   - Groups Settings API (groupssettings.googleapis.com)
- The service account that Directory Manager uses authenticates to Google Workspace through domain-wide delegation. This server-to-server method lets the service account act on behalf of Workspace users and administrators without an interactive sign-in. Because this bypasses the per-user consent screen, a Workspace super administrator must pre-authorize every OAuth scope that the service account uses. In the Google Workspace Admin panel, add the following scopes to your service account:
   - https://www.googleapis.com/auth/admin.directory.group
   - https://www.googleapis.com/auth/admin.directory.orgunit
   - https://www.googleapis.com/auth/admin.directory.rolemanagement
   - https://www.googleapis.com/auth/admin.directory.user
   - https://www.googleapis.com/auth/admin.directory.userschema
   - https://www.googleapis.com/auth/admin.reports.audit.readonly
   - https://www.googleapis.com/auth/apps.groups.settings
   - https://www.googleapis.com/auth/cloud-identity.groups

### Create identity store

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click **Create Identity Store** in the top right corner.
3. On the **Create Identity Store** page, use the **Store Type** dropdown list to select an identity provider to create an identity store for.

   This list displays the supported providers. Select _Google Workspace_.

4. Enter a name for the identity store in the **Name** box.
5. In the **Service Account** box, enter the service account name assigned to you when you created your Google Workspace account.
6. In the **Admin Username** box, enter the username of an authorized user account to connect to the provider.

   The account must have the _Super Admin_ role in Google Workspace to facilitate group and identity management operations using Directory Manager.

7. In the **API Key** box, enter the API key generated for your account in Google Workspace.

   To generate the key, see [Create access credentials](https://developers.google.com/workspace/guides/create-credentials).

8. Specify the path to the p12 key file in the **P12 Certificate** box. Click **Choose
File** and browse for the file. Select it and click **Open**.

   As a prerequisite, generate the p12 key file for your account in Google Cloud Console and download it to a machine.

9. Click **Create Identity Store**. The **Replicate Identity Store** message appears. Select one of these options:

   - Later – replicates all the objects to Elasticsearch at the next due replication time, according to the replication settings.
   - Replicate Now – replicates all the objects to Elasticsearch now.

The identity store is available on the **Identity Stores** page. You can specify different configurations for it.
