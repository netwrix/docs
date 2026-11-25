---
title: "Link Identity Stores in Directory Manager"
description: "Learn how linking identity stores keeps identical user and group objects in sync across domains and how to link two or more stores."
keywords:
  - link identity stores
  - linked mode
  - identical objects
  - identity store mapping
  - filter expression
sidebar_position: 60
---

# Link Identity Stores in Directory Manager

You can link identity stores in Directory Manager. In this way, identical user and group objects
that exist in multiple identity stores (domains) can be linked together and automatically synced.

For example, you can create a link between the following types of identity stores:

- Two Active Directory identity stores
- An Active Directory identity store and a Microsoft Entra ID identity store
- Two Microsoft Entra ID identity stores
- An Active Directory identity store and a Google Workspace identity store

:::note
(1) Two identity stores built on the same domain can't be linked.  
(2) An identity store must be replicated in Directory Manager before it can be linked.
:::

## Linked Identity Stores and the Directory Manager Portal

Linking isn't effective until the linked identity stores are associated with a Directory Manager
portal, such as Portal_A. Consider the following:

- The administrator links IdentityStoreA and IdentityStoreB.
- The administrator creates a portal, Portal_A, and associates both the linked identity stores with
  it.
- This enables portal users to view data from IdentityStoreA and IdentityStoreB at the same time,
  rather than having to switch identity stores. Users can also filter data for identical objects in
  both the identity stores.  
  Users can choose to view data for a single identity store or switch to the "linked" mode to view
  data simultaneously from both the linked identity stores.

When only IdentityStoreA or IdentityStoreB is associated with Portal_A, the linking between the two
identity stores serves no purpose.

### Benefits of Running the Portal Under the "Linked" Mode

A portal running in the "linked" mode is effectively connected to all the linked identity stores
that are associated with it. You can access objects in different identity stores in a single
instance of the portal, rather than having to sign out and connect the portal to another identity
store.

The following portal functions are affected in the "linked" mode:

- When a user performs a search, results are fetched from all the linked identity stores.
- When an action is performed on a user or group object, it is replicated to all the identical
  objects in the linked identity stores. In this way, identical user and group objects in the
  linked identity stores are automatically synced. Consider the following:

    - When you create a static group, its identical static group is created in a linked identity
      store.
    - When you create a Smart Group, its identical group is created as a static group in a linked
      identity store.
    - When you create a mail-enabled group, an identical simple group is created in a linked
      identity store.
    - When you create a mailbox or a mail-enabled user, an identical simple user is created in a
      linked identity store.
    - When you delete a user or group object in an identity store, its linked objects are also
      deleted.
    - When you update the properties of a user or group object, those same properties are also
      updated for its linked objects in the linked identity stores.
    - When you run the query for a Smart Group to update it, its linked Smart Groups aren't
      updated automatically.
    - When you upgrade a static group (say, GroupA) to a Smart Group, the linked static groups
      (GroupB and GroupC, for example) in the linked identity stores aren't upgraded to Smart Groups.

- Group listings in the portal (namely All Groups, My Groups, and Deleted Groups) display the groups
  from all the linked identity stores. Users can select groups from any identity store to perform an
  action in bulk, such as expire them.
- User listings in the portal, such as My Direct Reports, display user objects from all the linked
  identity stores. Users can select user objects from any identity store to perform an action in
  bulk, such as terminate them.
- For entitlements, the portal shows Active Directory file server and SharePoint permissions from
  all the linked identity stores.

When the signed-in user exists in multiple linked identity stores, they can perform actions in
an identity store according to their role and permissions in the respective identity store. For
example, if the user is an administrator in IdentityStoreA and a standard user in IdentityStoreB, they
can perform administrative actions on groups in IdentityStoreA only, even though the group
listing displays all groups from both the linked identity stores.

## How to Link Two Identity Stores

Linking two identity stores follows a straightforward process:

- Select the required identity stores.
- Create a filter expression to map attributes. Select a schema attribute from IdentityStoreA and
  another from IdentityStoreB. This mapping establishes a link between the two identity stores.  
  You can also create an advanced filter expression by adding multiple clauses to the filter (where
  each clause is a one-to-one mapping of attributes) and joining them with the "and" or "or"
  operator.  
  You must create a separate filter expression for user and group objects.
- When two objects have the same value for the mapped attributes in the two identity stores,
  Directory Manager identifies them as identical objects, and hence links them.

For example, to link IdentityStoreA to IdentityStoreB, select the displayName and cn attributes from
IdentityStoreA and IdentityStoreB respectively to map them. Now when an object has _Mary Jones_ as
value for the distinguishedname attribute in IdentityStoreA and an object has _Mary Jones_ as value
for the cn attribute in IdentityStoreB, Directory Manager identifies them as identical objects
existing in two distinct directories, and links them.

:::info
For mapping, always use attributes that store unique values.
:::

## How to Link Multiple Identity Stores

You can link more than two identity stores; in fact, you can link identity
stores created for any provider Directory Manager supports.

You can't create one link to link multiple identity stores. Instead, to link three
identity stores, create two links; to link four identity stores, create three
links, and so on. Each link involves two identity stores, thereby creating a chain of linked
identity stores.

Here is how it works:

- Link IdentityStoreA to IdentityStoreB by following the discussion in the
  [How to Link Two Identity Stores](#how-to-link-two-identity-stores) section.  
  Directory Manager now treats these two identity stores as a single entity. Call it Entity1.
- Next, link IdentityStoreA or IdentityStoreB to IdentityStoreC using the same method.  
  This establishes a link between Entity1 and IdentityStoreC.

In this way, you can create a chain of links between identity stores.

**See Also**

- [Identity Stores in Directory Manager](/docs/directorymanager/11.0/signin/identitystore/overview.md)
- [Manage Identity Store Links in Directory Manager](/docs/directorymanager/11.0/signin/identitystore/link/manage.md)
