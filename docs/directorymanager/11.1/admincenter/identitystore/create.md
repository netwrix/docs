---
title: "Create an Identity Store"
description: "Create an Identity Store"
sidebar_position: 10
---

# Create an Identity Store

To perform group and identity management operations in an identity provider using Directory Manager,
the first step is to create an identity store for that provider.

You can create identity stores for the following providers:

- Active Directory
- Microsoft Entra ID
- Generic LDAP
- Google Workspace

To create an identity store, you have to specify an identity provider and its connection details.

After creating an identity store, you must configure certain settings for it. These configurations
are discussed in the [Configure an Identity Store](/docs/directorymanager/11.1/admincenter/identitystore/configure/configure.md) topic.

## Create an Identity Store for Active Directory

Follow the steps to create an identity store for Active Directory.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click **Create Identity Store** in the top right corner.

Step 3 – On the Create Identity Store page, use the Store Type drop-down list to select an identity
provider to create an identity store for.  
This list displays the supported providers. By default, Active Directory is selected. Fields on this
page vary, depending on the provider you select.

Step 4 – Enter a name for the identity store in the Name box.

Step 5 – In the Domain Name box, enter the fully qualified name of the Active Directory domain you
want to create the identity store for.

Step 6 – In theService Accout box, enter the username of a service account or a group managed
service account (gMSA) to connect to Active Directory.

- For a service account – The service account must have sufficient privileges on the provider to
  facilitate group and identity management operations using Directory Manager. The minimum
  permissions the service account requires for Active Directory are discussed in the
  [Service Account for Active Directory and Exchange](/docs/directorymanager/11.1/requirements/permissions/adserviceaccount.md)
  topic.
- For a gMSA – If you provide a service account with
  ‘$’ as its last character (as in MyAdminAccounts$), Directory Manager entertains it as a Group
  Managed Service Account (gMSA). To use a gMSA to connect an identity store to Active Directory,
  make sure the gMSA is configured properly and has sufficient permissions. See the
  [gMSA for Active Directory](/docs/directorymanager/11.1/requirements/permissions/gmsarequirements.md) topic.

Step 7 – In the **Service Account Password** box, enter the service account password.  
Skip this box for a gMSA.

Step 8 – Select the **SSL Enabled** check box if the directory server is LDAP over SSL enabled.

:::note
Directory Manager 11 supports LDAPS; however, the Replication Service will still connect to
the domain controller via the LDAP 389 port. Hence, both LDAP and LDAPS protocols must be enabled on
the domain controller.
:::


Step 9 – Click **Create Identity Store**. The **Replicate Identity Store** message is displayed.
Select:

- Later – replicates all the objects to Elasticsearch at the next due replication time as per the
  replication settings.
- Replicate Now – replicates all the objects to Elasticsearch now.

The identity store is available on the Identity Stores page. You can specify different
configurations for it.

## Create an Identity Store for Microsoft Entra ID

In Admin Center, click **Identity Stores** in the left pane.

Step 1 – On the Identity Stores page, click **Create Identity Store** in the top right corner.

Step 2 – On the Identity Stores page, use the Store Type drop-down list to select an identity
provider to create an identity store for.  
This list displays the supported providers. Select _Microsoft Azure_.

Step 3 – Enter a name for the identity store in the Name box.

Step 4 – From the Cloud drop-down list, select the cloud where your Microsoft Entra ID tenant
exists.

Step 5 – In the Domain Name box, enter the fully qualified name of the Microsoft Entra ID domain you
want to create the identity store for.

Step 6 – Specify the path to the .pfx certificate in the PFX Certificate box. For that, click
**Choose File** and browse for the file. Select it and click **Open**.  
As a prerequisite, the .pfx certificate must be generated on the Directory Manager machine. See the
[Certificate for Entra ID Authentication ](/docs/directorymanager/11.1/configureentraid/register/modauth.md)topic for
information on generating a certificate and then converting it into the .pfx format.

Step 7 – In the PFX Certificate Password box, enter the password that was created while exporting
the .pfx certificate.

Step 8 – In the Registered Application ID on Azure Active Directory box, enter the application ID
assigned to the Directory Manager application when you registered it in Microsoft Entra Admin
Center.

Step 9 – In the **Registered Client Secret on EntraID** box, provide the client secret value
generated against the certificate uploaded to Microsoft Entra Admin Center while registering the
Directory Manager application.

Step 10 – If you bind a custom domain with your Microsoft Entra ID tenant and create an identity
store for Microsoft Entra ID using the credentials of that custom domain, then you must provide the
name of the primary domain in the **Primary Domain Name** box, so that the _write_ operations are
not affected.

Step 11 – Click **Create Identity Store**. The Replicate Identity Store message is displayed.
Select:

- Later – replicates all the objects to Elasticsearch at the next due replication time as per the
  replication settings.
- Replicate Now – replicates all the objects to Elasticsearch now.

The identity store is available on the Identify Stores page. You can specify different
configurations for it.

:::note
Microsoft’s throttling policy restricts an application (such as Directory Manager) to create a
maximum of 3 concurrent sessions with Microsoft Entra ID. With this in view, Directory Manager
allows only one active session at any given time, which is used by Data service and Replication
service.
:::


## Create an Identity Store for Generic LDAP

Create a Generic LDAP identity store to connect to any LDAP version 3-compliant directory server,
such as Sun ONE directory server. This provider does not support dynamic schema detection. The
schema included for this provider mostly contains commonly used fields.

**Follow the steps to create an identity store**

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click **Create Identity Store** in the top right corner.

Step 3 – On the **Create Identity Store** page, use the **Store Type** drop-down list to select an
identity provider to create an identity store for.  
This list displays the supported providers. Select _Generic LDAP_.

Step 4 – Enter a name for the identity store in the **Name** box.

Step 5 – In the **Hostname** box, enter the fully qualified domain name or IP address of the machine
that hosts the generic LDAP server.

Step 6 – In the **Port Number** box, enter the port on which LDAP is running. This port is used to
communicate with the host machine.

Step 7 – In the **Domain Name** box, enter the fully qualified name of the domain you want to create
the identity store for.

Step 8 – In the **Service Account** box, enter the fully qualified username of a service account
(for example, CN=Admin,CN=Users,DC=Imanami,DC=COM) to connect to _Generic LDAP_. The service account
must have sufficient privileges on the provider to facilitate group and identity management
operations using Directory Manager.

Step 9 – In the **Service Account Password** box, enter the service account password.

Step 10 – Click **Create Identity Store**. The **Replicate Identity Store** message is displayed.
Select:

- Later – replicates all the objects to Elasticsearch at the next due replication time as per the
  replication settings.
- Replicate Now – replicates all the objects to Elasticsearch now.

The identity store is available on the Identity Stores page. You can specify different
configurations for it.

## Create an Identity Store for Google Workspace

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identify Stores page, click **Create Identity Store** in the top right corner.

Step 3 – On the Create Identity Store page, use the Store Type drop-down list to select an identity
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
As a prerequisite, the p12 key file for your account must be generated in Google Cloud Console and
downloaded to a machine.

Step 9 – Click **Create Identity Store**. The Replicate Identity Store message is displayed. Select:

- Later – replicates all the objects to Elasticsearch at the next due replication time as per the
  replication settings.
- Replicate Now – replicates all the objects to Elasticsearch now.

The identity store is available on the Identity Stores page. You can specify different
configurations for it.
