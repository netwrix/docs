---
title: "Configure a Synchronize Policy for a Security Role"
description: "Control which providers, identity stores, data sources, object types, and attributes security role members can use in Synchronize jobs."
keywords:
  - Directory Manager
  - Synchronize policy
  - Synchronize job
  - attribute mapping
  - security role policy
sidebar_position: 80
---

# Configure a Synchronize Policy for a Security Role

Directory Manager lets you create identity stores for several identity providers, such as Active Directory and Microsoft Entra ID. It also lets you create data sources for providers such as files and databases. You can use these identity stores and data sources as the source and destination in Synchronize jobs. All object types, with all their attributes, in an identity store or data source are available for use.

Use the Synchronize policy to:

- Allow or disallow a provider as a source in a Synchronize job. You can apply this setting to all or specific identity stores and data sources created for the provider. For example, say you have three data sources created for the MS Excel provider. You can prevent a security role from using all three as a source, or prevent two of the three from being used as a source in a Synchronize job.
- Allow or disallow a provider as a destination in a Synchronize job. You can apply this setting to all or specific identity stores and data sources created for the provider.
- Choose the object types that a Synchronize job can create or sync at the destination. You define this setting individually for each identity store and data source.
- Specify, for each object type in an identity store and data source, the attributes available for mapping source and destination fields in a Synchronize job. You define this setting individually for each object type in an identity store and data source.

These controls let you restrict access from the provider level down to the attribute level:

- You can disallow a provider as a whole, or disallow a specific identity store or data source created for the provider.
- At the next level, you can disallow certain object types in a specific identity store or data source built on a provider.
- At the lowest level, you can disallow certain attributes for an object type in a specific identity store or data source built on a provider.

## Prevent role members from using a provider as source or destination

When users create or modify a Synchronize job, they can specify any identity store or data source in Directory Manager as a source and destination. You can prevent role members from using the identity stores and data sources built on specific providers in a job.

**To disallow a provider:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Synchronize** tab. This tab lists the providers that role members can use as source and destination in Synchronize jobs.

    **Allow a provider to be used as source and destination:**

    - Select the **Source** checkbox for a provider to let role members use its identity stores and data sources as source in Synchronize jobs.
    - Select the **Destination** checkbox for a provider to let role members use its identity stores and data sources as destination in Synchronize jobs.

    **Disallow a provider to be used as source and destination:**

    - Clear the **Source** checkbox for a provider to prevent role members from using its identity stores and data sources as source in Synchronize jobs.
    - Clear the **Destination** checkbox for a provider to prevent role members from using its identity stores and data sources as destination in Synchronize jobs.

7. Click **OK**.
8. On the **Edit Security Role** page, click **Update Security Role**.
9. On the **Security Roles** page, click **Save**.

:::note
If you disallow a provider as a source, all Synchronize jobs that already use an identity store or data source for that provider as source become read-only for role members. They can't run these jobs. Similarly, if you disallow a provider as a destination, all Synchronize jobs that already use an identity store or data source for that provider as destination become read-only for role members. They can't run these jobs.
:::

## Prevent role members from using an identity store or data source as source or destination

When users create or modify a Synchronize job, they can specify any identity store or data source in Directory Manager as a source and destination. You can prevent role members from using a specific identity store or data source in a job.

**To disallow an identity store or data source:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Synchronize** tab.
7. Click the plus sign for a provider to list the identity stores or data sources created for it in Directory Manager.

    **To allow an identity store or data source to be used as source and destination:**

    - Select the **Source** checkbox for an identity store or data source to let role members use it as source in Synchronize jobs.
    - Select the **Destination** checkbox for an identity store or data source to let role members use it as destination in Synchronize jobs.

    **To disallow an identity store or data source to be used as source and destination:**

    - Clear the **Source** checkbox for an identity store or data source to prevent role members from using it as source in Synchronize jobs.
    - Clear the **Destination** checkbox for an identity store or data source to prevent role members from using it as destination in Synchronize jobs.

8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

:::note
If you disallow an identity store or data source as a source, all Synchronize jobs that already use it as source become read-only for role members. They can't run these jobs. Similarly, if you disallow an identity store or data source as destination, all Synchronize jobs that already use it as destination become read-only for role members. They can't run these jobs.
:::

## Prevent role members from manipulating specific object types

Users can create and update different object types from a source to a destination identity store in a Synchronize job. For an Active Directory identity store, for example, users can create and update these object types:

- User
- Group
- Contact
- Mail-enabled User
- Mailbox-enabled User
- Linked-Mailbox
- Mail-enabled Contact

You can disallow any of these object types for an identity store. When a Synchronize job uses that identity store as source or destination, role members can't create or update the disallowed objects at the destination. For example, if you disallow the user object type for IdentityStore_A, role members can't provision, update, or deprovision user objects in identityStore_A through a Synchronize job.

:::note
If you disallow an object type in an identity store or data source, a Synchronize job becomes read-only for role members when both of these are true:

- The job already uses that identity store or data source, either as source or destination.
- The job only provisions or updates the disallowed object type.

Role members can't run such a job. If a job provisions or updates multiple object types and the disallowed object is one of them, the job runs as usual, except that it doesn't process the disallowed object.

**Example:** Suppose you disallow the mailbox object type in IdentityStore_A. If a Synchronize job that provisions mailbox objects already uses this identity store as a destination, the job becomes read-only for role members. They can't run it.

If IdentityStore_A is the source or destination in a Synchronize job that provisions multiple object types, the job runs as usual, except that it doesn't process the mailbox object.
:::

For data sources, you can disallow these items for role members instead of object types:

- Sheets in an Excel workbook.
- Tables in an Access, Oracle, and SQL database.
- For ODBC, tables in an SQL database and sheets in Excel.
- For text/CSV, this doesn't apply.

**To disallow object types in an identity store or data source:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Synchronize** tab.
7. Click the plus sign for a provider to list the identity stores or data sources created for it in Directory Manager.
8. Click **Edit Object Policies** for an identity store or data source. The next page displays the object types that you can create in the identity store. For data sources, it displays alternate options, such as sheets for Excel and tables for databases.

    - Select the **Allow** checkbox for an object type to let role members use it in a Synchronize job that uses the identity store or data source as source or destination.
    - Clear the **Allow** checkbox for an object type to prevent role members from using it in a Synchronize job that uses the identity store as source or destination.

9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

## Prevent role members from using specific attributes for mapping

A Synchronize job uses attribute mapping. It maps object attributes from the source provider to attributes of the destination provider to sync data.

Each object type in an identity store has a different set of attributes. By default, all attributes of the allowed object types in the source and destination identity stores are available for mapping in a Synchronize job. You can disallow any number of attributes for an object type in an identity store. Role members can't use the disallowed attributes for mapping.

For data sources, you can disallow these items for role members instead of object attributes:

- Columns in an Excel sheet.
- Columns in an Access, Oracle, and SQL table.
- For ODBC, columns in an SQL table and columns in an Excel sheet.
- For text/CSV, each value in the first row, as separated by the delimiter.

**To disallow attributes for an object type in an identity store or data source:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Synchronize** tab.
7. Click the plus sign for a provider to list the identity stores or data sources created for it in Directory Manager.
8. Click **Edit Object Policies** for an identity store or data source.
9. On the next page, click **Edit Attribute Selection** for an object type. This option is available for the allowed object types only.
10. By default, all attributes are selected on the **Edit Attribute Selection** dialog box. Clear the checkbox for each attribute that you want to disallow for role members. Use the search box to find the attributes you need. When done, click **Save Selection**.

    Role members can't use the disallowed attributes for the object type in the identity store or data source. When a Synchronize job uses this identity store or data source as source or destination and works with that object type, the disallowed attributes aren't available for mapping.
11. Click **OK**.
12. On the **Edit Security Role** page, click **Update Security Role**.
13. On the **Security Roles** page, click **Save**.