---
title: "Create an Identity Store"
description: "Create an Identity Store"
sidebar_position: 10
---

# Create an Identity Store

To perform group and identity management operations in an identity provider using Directory Manager,
first create an identity store for that provider.

You can create identity stores for the following providers:

- Active Directory
- Microsoft Entra ID
- Generic LDAP
- Google Workspace

To create an identity store, you must specify an identity provider and its connection details.

After creating an identity store, you must configure certain settings for it. For these
configurations, see the [Configure an Identity Store](/docs/directorymanager/11.1/admincenter/identitystore/configure/configure.md) topic.

## Create an Identity Store for Active Directory

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click **Create Identity Store** in the top right corner.

Step 3 – On the Create Identity Store page, use the Store Type dropdown list to select an identity
provider to create an identity store for.  
This list displays the supported providers. Active Directory is the default selection. Fields on this
page vary, depending on the provider you select.

Step 4 – Enter a name for the identity store in the Name box.

Step 5 – In the Domain Name box, enter the fully qualified name of the Active Directory domain you
want to create the identity store for.

Step 6 – In theService Accout box, enter the username of a service account or a group managed
service account (gMSA) to connect to Active Directory.

- For a service account – The service account must have sufficient privileges on the provider to
  facilitate group and identity management operations using Directory Manager. For the minimum
  permissions the service account requires for Active Directory, see the
  [Service Account for Active Directory and Exchange](/docs/directorymanager/11.1/requirements/permissions/adserviceaccount.md)
  topic.
- For a gMSA – If you provide a service account with
  ‘$’ as its last character (as in MyAdminAccounts$), Directory Manager treats it as a Group
  Managed Service Account (gMSA). To use a gMSA to connect an identity store to Active Directory,
  ensure the gMSA is configured properly and has sufficient permissions. See the
  [gMSA for Active Directory](/docs/directorymanager/11.1/requirements/permissions/gmsarequirements.md) topic.

Step 7 – In the **Service Account Password** box, enter the service account password.  
Skip this box for a gMSA.

Step 8 – Select the **SSL Enabled** checkbox if the directory server is LDAP over SSL enabled.

:::note
Directory Manager 11 supports LDAPS; however, the Replication Service will still connect to
the domain controller via the LDAP 389 port. Therefore, enable both the LDAP and LDAPS protocols on
the domain controller.
:::


Step 9 – Click **Create Identity Store**. The **Replicate Identity Store** message appears.
Select:

- Later – replicates all the objects to Elasticsearch at the next due replication time, according to
  the replication settings.
- Replicate Now – replicates all the objects to Elasticsearch now.

The identity store is available on the Identity Stores page. You can specify different
configurations for it.

## Create an Identity Store for Microsoft Entra ID

In Admin Center, click **Identity Stores** in the left pane.

Step 1 – On the Identity Stores page, click **Create Identity Store** in the top right corner.

Step 2 – On the Identity Stores page, use the Store Type dropdown list to select an identity
provider to create an identity store for.  
This list displays the supported providers. Select _Microsoft Azure_.

Step 3 – Enter a name for the identity store in the Name box.

Step 4 – From the Cloud dropdown list, select the cloud where your Microsoft Entra ID tenant
exists.

Step 5 – In the Domain Name box, enter the fully qualified name of the Microsoft Entra ID domain you
want to create the identity store for.

Step 6 – Specify the path to the .pfx certificate in the PFX Certificate box. For that, click
**Choose File** and browse for the file. Select it and click **Open**.  
As a prerequisite, you must generate the .pfx certificate on the Directory Manager machine. See the
[Certificate for Entra ID Authentication ](/docs/directorymanager/11.1/configureentraid/register/modauth.md)topic for
information on generating a certificate and then converting it into the .pfx format.

Step 7 – In the PFX Certificate Password box, enter the password you created while exporting the
.pfx certificate.

Step 8 – In the Registered Application ID on Azure Active Directory box, enter the application ID
assigned to the Directory Manager application when you registered it in Microsoft Entra Admin
Center.

Step 9 – In the **Registered Client Secret on EntraID** box, provide the client secret value
generated against the certificate uploaded to Microsoft Entra Admin Center while registering the
Directory Manager application.

Step 10 – If you bind a custom domain with your Microsoft Entra ID tenant and create an identity
store for Microsoft Entra ID using the credentials of that custom domain, then you must provide the
name of the primary domain in the **Primary Domain Name** box, to avoid affecting _write_
operations.

Step 11 – Click **Create Identity Store**. The Replicate Identity Store message appears.
Select:

- Later – replicates all the objects to Elasticsearch at the next due replication time, according to
  the replication settings.
- Replicate Now – replicates all the objects to Elasticsearch now.

The identity store is available on the Identify Stores page. You can specify different
configurations for it.

:::note
Microsoft’s throttling policy restricts an application (such as Directory Manager) to create a
maximum of 3 concurrent sessions with Microsoft Entra ID. Therefore, Directory Manager allows only
one active session at any given time, which the Data service and the Replication service share.
:::


## Create an Identity Store for Generic LDAP

Create a Generic LDAP identity store to connect to any LDAP version 3-compliant directory server,
such as Sun ONE directory server. This provider doesn't support dynamic schema detection. The
schema included for this provider mostly contains commonly used fields.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click **Create Identity Store** in the top right corner.

Step 3 – On the **Create Identity Store** page, use the **Store Type** dropdown list to select an
identity provider to create an identity store for.  
This list displays the supported providers. Select _Generic LDAP_.

Step 4 – Enter a name for the identity store in the **Name** box.

Step 5 – In the **Hostname** box, enter the fully qualified domain name or IP address of the machine
that hosts the generic LDAP server.

Step 6 – In the **Port Number** box, enter the port on which LDAP is running. Directory Manager uses
this port to communicate with the host machine.

Step 7 – In the **Domain Name** box, enter the fully qualified name of the domain you want to create
the identity store for.

Step 8 – In the **Service Account** box, enter the fully qualified username of a service account
(for example, CN=Admin,CN=Users,DC=Imanami,DC=COM) to connect to _Generic LDAP_. The service account
must have sufficient privileges on the provider to facilitate group and identity management
operations using Directory Manager.

Step 9 – In the **Service Account Password** box, enter the service account password.

Step 10 – Click **Create Identity Store**. The **Replicate Identity Store** message appears.
Select:

- Later – replicates all the objects to Elasticsearch at the next due replication time, according to
  the replication settings.
- Replicate Now – replicates all the objects to Elasticsearch now.

The identity store is available on the Identity Stores page. You can specify different
configurations for it.

## Create an Identity Store for Google Workspace

### Required Google Cloud / Workspace setup

- In Google Cloud Console, enable the following APIs for your service account:
   - Admin SDK API (admin.googleapis.com)
   - Cloud Identity (cloudidentity.googleapis.com)
   - Groups Settings API (groupssettings.googleapis.com)
- The service account that Directory Manager uses authenticates to Google Workspace through
  domain-wide delegation — a server-to-server method that lets the service account act on behalf of
  Workspace users and administrators without an interactive sign-in. Because this bypasses the
  per-user consent screen, a Workspace super administrator must pre-authorize every OAuth scope that
  the service account uses. In the Google Workspace Admin panel, add the following scopes to your
  service account:
   - https://www.googleapis.com/auth/admin.directory.group
   - https://www.googleapis.com/auth/admin.directory.orgunit
   - https://www.googleapis.com/auth/admin.directory.rolemanagement
   - https://www.googleapis.com/auth/admin.directory.user
   - https://www.googleapis.com/auth/admin.directory.userschema
   - https://www.googleapis.com/auth/admin.reports.audit.readonly
   - https://www.googleapis.com/auth/apps.groups.settings
   - https://www.googleapis.com/auth/cloud-identity.groups

### Create Identity Store

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identify Stores page, click **Create Identity Store** in the top right corner.

Step 3 – On the Create Identity Store page, use the Store Type dropdown list to select an identity
provider to create an identity store for.  
This list displays the supported providers. Select _Google Workspace_.

Step 4 – Enter a name for the identity store in the **Name** box.

Step 5 – In the Service Account box, enter the service account name assigned to you when you created
your Google Workspace account.

Step 6 – In the Admin Username box, enter the username of an authorized user account to connect to
the provider.  
The account must have the _Super Admin_ role in Google Workspace to facilitate group and identity
management operations using Directory Manager.

Step 7 – In theAPI Keybox, enter the API key generated for your account in Google Workspace.  
To generate the key, see
[Create access credentials](https://developers.google.com/workspace/guides/create-credentials).

Step 8 – Specify the path to the p12 key file in the P12 Certificatebox. For that, click **Choose
File** and browse for the file. Select it and click **Open**.  
As a prerequisite, you must generate the p12 key file for your account in Google Cloud Console and
download it to a machine.

Step 9 – Click **Create Identity Store**. The Replicate Identity Store message appears. Select:

- Later – replicates all the objects to Elasticsearch at the next due replication time, according to
  the replication settings.
- Replicate Now – replicates all the objects to Elasticsearch now.

The identity store is available on the Identity Stores page. You can specify different
configurations for it.
