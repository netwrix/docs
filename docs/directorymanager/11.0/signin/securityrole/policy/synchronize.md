---
title: "Synchronize Policy"
description: "Synchronize Policy"
sidebar_position: 80
---

# Synchronize Policy

Using GroupID, you can create identity stores for several identity providers (such as Active
Directory and Microsoft Entra ID) as well as create data sources for providers such as files and
databases. These identity stores and data sources can be used as source and destination in
Synchronize jobs. Moreover, all object types with all their attributes in an identity store or data
source are available for use.

Using the Synchronize policy, you can:

- Allow or disallow a provider to be used as a source in a Synchronize job - You can apply this
  setting to all or specific identity stores/data sources created for the provider. For example, you
  may have three data sources created for the MS Excel provider. You can choose to prevent a
  security role from using the data sources created for MS Excel as a source, or prevent two of the
  three data sources from being used as a source in a Synchronize job.
- Allow or disallow a provider to be used as a destination in a Synchronize job - You can apply this
  setting to all or specific identity stores/data sources created for the provider.
- Choose the object types that can be created or synced at the destination using a Synchronize job -
  This setting is individually defined for each identity store and data source.
- For each object type in an identity store and data source, specify the attributes that will be
  available for mapping the source and destination fields in a Synchronize job - This setting is
  individually defined for each object type in an identity store and data source.

These granular controls enable you to drill down from the provider to the attribute level.

- You can disallow a provider as a whole, or disallow a specific identity store/data source created
  for the provider.
- At the next level, you can disallow certain object type(s) in a specific identity store or data
  source built on a provider.
- Further down, you can disallow certain attributes for an object type in a specific identity store
  or data source built on a provider.

What do you want to do?

- [Prevent Role Members from Using a Provider as Source or Destination](#prevent-role-members-from-using-a-provider-as-source-or-destination)
- [Prevent Role Members from Using an Identity Store or Data Source as Source or Destination](#prevent-role-members-from-using-an-identity-store-or-data-source-as-source-or-destination)
- [Prevent Role Members from Manipulating Specific Object Type(s)](#prevent-role-members-from-manipulating-specific-object-types)
- [Prevent Role Members from Using Specific Attributes for Mapping](#prevent-role-members-from-using-specific-attributes-for-mapping)

## Prevent Role Members from Using a Provider as Source or Destination

When creating or modifying a Synchronize job, users can specify any identity store or data source in
GroupID as a source and destination. You can prevent role members from using the identity stores and
data sources build on specific provider(s) in a job.

**To disallow a provider:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Synchronize** tab.  
   This tab lists the providers that can be used as source and destination in Synchronize jobs.

    **Allow a provider to be used as source and destination:**

    - Select the **Source** check box for a provider to enable role members to use the identity
      stores/data sources for the provider as source in Synchronize jobs.
    - Select the **Destination** check box for a provider to enable role members to use the identity
      stores/data sources for the provider as destination in Synchronize jobs.

    **Disallow a provider to be used as source and destination:**

    - Clear the **Source** check box for a provider to prevent role members from using the identity
      stores/data sources for it as source in Synchronize jobs.
    - Clear the **Destination** check box for a provider to prevent role members from using the
      identity stores/data sources for it as destination in Synchronize jobs.

7. Click **OK**.
8. On the **Edit Security Role** page, click **Update Security Role**.
9. On the **Security Roles** page, click **Save**.

NOTE: If you disallow a provider as a source, all Synchronize jobs already using an identity
store/data source for that provider as source will become read-only for role members and they will
not be able to run them. Similarly, if you disallow a provider as a destination, all Synchronize
jobs already using an identity store/data source for that provider as destination will become
read-only for role members and they will not be able to run them.

## Prevent Role Members from Using an Identity Store or Data Source as Source or Destination

When creating or modifying a Synchronize job, users can specify any identity store or data source in
GroupID as a source and destination. You can prevent role members from using a specific identity
store or data source in a job.

**To disallow an identity store or data source:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Synchronize** tab.
7. Click the plus sign for a provider to get a list of the identity stores or data sources created
   for it in GroupID.

    **To allow an identity store or data source to be used as source and destination:**

    - Select the **Source** check box for an identity store or data source to enable role members to
      use it as source in Synchronize jobs.
    - Select the **Destination** check box for an identity store or data source to enable role
      members to use it as destination in Synchronize jobs.

    **To disallow an identity store or data source to be used as source and destination:**

    - Clear the **Source** check box for an identity store or data source to prevent role members
      from using it as source in Synchronize jobs.
    - Clear the **Destination** check box for an identity store or data source to prevent role
      members from using it as destination in Synchronize jobs.

8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

NOTE: If you disallow an identity store or data source as a source, all Synchronize jobs already
using it as source will become read-only for role members and they will not be able to run them.
Similarly, if you disallow an identity store or data source as destination, all Synchronize jobs
already using it as destination will become read-only for role members and they will not be able to
run them.

## Prevent Role Members from Manipulating Specific Object Type(s)

Using a Synchronize job, users can create and update different object types from a source to a
destination identity store. For an Active Directory identity store, for example, users can create
and update the following object types:

- User
- Group
- Contact
- Mail-enabled User
- Mailbox-enabled User
- Linked-Mailbox
- Mail-enabled Contact

You can disallow any of these object types for an identity store. When that identity store is used
as source or destination in a Synchronize job, role members will not be able to create or update the
disallowed objects at the destination. For example, if you disallow the user object type for
IdentityStore_A, role members will not be able to provision, update and deprovision user objects in
identityStore_A through a Synchronize job.

NOTE: If you disallow an object type in an identity store or data source, all Synchronize jobs
already using that identity store or data source (either as source or destination) while only
provisioning or updating the disallowed object type, will become read-only for role members and they
will not be able to run them. If a job provisions or updates multiple objects, where the disallowed
object is one of the object types it processes, it will run as usual, except that the disallowed
object will not be processed.  
**Example:** Suppose you disallow the mailbox object type in IdentityStore_A, when this identity
store is already used as a destination in a Synchronize job that provisions mailbox objects, then
the job will become read-only for role members and they will not be able to run it.  
If IdentityStore_A is used as a source or destination in a Synchronize job that provisions multiple
objects types, then the job will run as usual, except that the mailbox object will not be processed.

For data sources, you can disallow the following to role members as an alternate to object types:

- Sheets in an Excel workbook
- Tables in an Access, Oracle, and SQL database
- For ODBC, you can disallow tables in case of an SQL database and sheets in case of Excel
- For text/CSV, this does not apply

**To disallow object types in an identity store or data source:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Synchronize** tab.
7. Click the plus sign for a provider to get a list of the identity stores or data sources created
   for it in GroupID.
8. Click **Edit Object Policies** for an identity store or data source. The next page displays the
   object types that can be created in the identity store. For data sources, it displays alternate
   options, such as sheets for Excel and tables for databases.

    - Select the **Allow** check box for an object type to enable role members to use it in a
      Synchronize job that uses the particular identity store or data source as source or
      destination.
    - Clear the **Allow** check box for an object type to prevent role members from using it in a
      Synchronize job that uses the particular identity store as source or destination.

9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

## Prevent Role Members from Using Specific Attributes for Mapping

A Synchronize job makes use of attribute mapping, where object attributes from the source provider
are mapped to attributes of the destination provider to facilitate data syncing.

Each object type in an identity store has a different set of attributes. By default, all attributes
of the allowed object types in the source and destination identity stores are available for mapping
in a Synchronize job. You can disallow any number of attributes for an object type in an identity
store, so that the disallowed attributes are not available to role members for mapping.

For data sources, you can disallow the following to role members as an alternate to object
attributes:

- Columns in an Excel sheet
- Columns in an Access, Oracle, and SQL table
- For ODBC, you can disallow columns in case of an SQL table and columns in case of an Excel sheet
- For text/CSV, each value in the first row, as separated by the delimiter

**To disallow attributes for an object type in an identity store or data source:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Synchronize** tab.
7. Click the plus sign for a provider to get a list of the identity stores or data sources created
   for it in GroupID.
8. Click **Edit Object Policies** for an identity store or data source.
9. On the next page, click **Edit Attribute Selection** for an object type. This option is available
   for the ‘allowed’ object types only.
10. By default, all attributes are selected on the **Edit Attribute Selection** dialog box. Clear
    the check box for an attribute to disallow them to role members. Use the search box to search
    and locate the required attributes. When done, click **Save Selection**.  
    Disallowed attributes will not be available to role members for the object type in the identity
    store or data source. When this identity store or data source is used as a source or destination
    in a Synchronize job that works with the respective object type, the disallowed attributes will
    not be available for mapping.
11. Click **OK**.
12. On the **Edit Security Role** page, click **Update Security Role**.
13. On the **Security Roles** page, click **Save**.

**See Also**

- [Security Roles](/docs/directorymanager/11.0/signin/securityrole/overview.md)
- [Security Role Policies](/docs/directorymanager/11.0/signin/securityrole/policy/overview.md)
