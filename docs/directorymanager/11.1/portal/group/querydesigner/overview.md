---
title: "Query Designer"
description: "Query Designer"
sidebar_position: 70
---

# Query Designer

The Query Designer enables you to create queries for Smart Groups, Dynasties and directory objects
searches. These queries provide a quick and consistent way to retrieve a common set of directory
objects on which you want to perform specific tasks. For example, you can construct a query to
retrieve all users having mailboxes on a particular Exchange Server or you can build a query to
retrieve all directory objects whose information is present in an external data source, such as
Microsoft SQL Server.

If the administrator has defined a Query Designer access policy for your role, you can create
queries as per the defined policy. A banner is displayed on the Query Designer dialog box indicating
that the administrator has implemented a policy for your role. See the
[ Query Designer Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/querydesigner.md) topic.

The query language depends on the identity store type.

- An Active Directory based identity store supports an LDAP query.
- A Microsoft Entra ID based identity store supports a device structured query language.

## Launch the Query Designer

You can launch the Query Designer dialog box for a Smart Group or a Dynasty or a search query in any
of the following ways:

- While creating a Smart Group or Dynasty - On the Smart Group/Query Designer page of the New Smart
  Group wizard or New Dynasty wizard, click **Query Designer**.
- From group properties - On the Smart Group/Query Designer tab in Smart Group/Dynasty properties,
  click **Query Designer**.
- When you upgrade a static group to a Smart Group or Dynasty.
- From the Queries page - On the Advanced Search page, click the **Or use the new query based
  search** link. Then click **Query Designer**.

## The Query Designer Interface

The Query Designer dialog box provides a visual interface for designing queries, so that you do not
have to write the commands. Its preview feature returns the results for the query before you commit
them to the directory server.

The Query Designer dialog box groups similar query options by tabs. Settings that are not grouped in
tabs are global; they apply to all tabs.

### Common Settings and Buttons

**Find**

Select an option to specify the type of object to include in the membership of the group.

- **Messaging System Recipients** - Mail-enabled objects
- **Computers** - Returns computers only
- **Custom** - Returns all objects regardless of objectClass. Be sure to add an objectClass
  predicate on the Database tab to avoid unpredictable results.

    Be sure to combine an external data source with the directory to search directory objects on the
    Database tab to avoid unpredictable results.

- **Users, Contacts, and Groups** - Any user, contact, or group, whether mail-enabled or not.

:::note
The _Computers_ and _Contact_ object types are not supported in a Microsoft Entra ID identity
store.
:::


**Start in**

Click this button to select the containers to search in. The query would search for objects only in
this container and its sub-containers to determine a group’s membership.

**Preview**

Enables you to preview the results returned with the criteria specified on all tabs of the Query
Designer dialog box. This is a check to ensure the accuracy of data before changes are committed to
the directory.

**OK**

Saves settings and closes the dialog box.

**Cancel**

Discards settings and closes the dialog box.

**LDAP Query**

View the provider query in the LDAP Query box.

### Tabs

The Query Designer has the following tabs:

- [Query Designer - General tab](/docs/directorymanager/11.1/portal/group/querydesigner/general.md)
- [Query Designer - Storage tab](/docs/directorymanager/11.1/portal/group/querydesigner/storage.md)
- [Query Designer - Filter Criteria tab](/docs/directorymanager/11.1/portal/group/querydesigner/filtercriteria.md)
- [Query Designer - Include/Exclude tab](/docs/directorymanager/11.1/portal/group/querydesigner/includeexclude.md)
- [Query Designer - Database tab](/docs/directorymanager/11.1/portal/group/querydesigner/database.md)
- [Query Designer - Script tab](/docs/directorymanager/11.1/portal/group/querydesigner/script.md)
- [Query Designer - Password Expiry Options tab](/docs/directorymanager/11.1/portal/group/querydesigner/passwordexpiryoptions.md)[Query Designer - Password Expiry Options tab](/docs/directorymanager/11.1/portal/group/querydesigner/passwordexpiryoptions.md)
  (only available for Smart Groups with a password expiry condition)

:::note
The **Storage** and **Script** tabs are not available for groups in a Microsoft Entra ID
identity store.

:::
