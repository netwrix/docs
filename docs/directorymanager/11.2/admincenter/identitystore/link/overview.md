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

You can link identity stores in Directory Manager. Linking lets identical user and group objects that exist in multiple identity stores (domains) be linked together and synced automatically.

For example, you can create a link between the following types of identity stores:

- Two Active Directory identity stores
- An Active Directory identity store and a Microsoft Entra ID identity store
- Two Microsoft Entra ID identity stores
- An Active Directory identity store and a Google Workspace identity store

:::note
(1) Two identity stores built on the same domain can't be linked.  
(2) An identity store must be replicated in Directory Manager before it can be linked.
:::

## Linked identity stores and the Directory Manager portal

Linking isn't effective until the linked identity stores are associated with a Directory Manager portal, such as Portal_A. Consider the following:

- The administrator links IdentityStoreA and IdentityStoreB.
- The administrator creates a portal, Portal_A, and associates both linked identity stores with it.
- Portal users can then view data from IdentityStoreA and IdentityStoreB at the same time, without switching identity stores. Users can also filter data for identical objects in both identity stores.
- Users can view data for a single identity store, or switch to the "linked" mode to view data from both linked identity stores at once.

When only IdentityStoreA or IdentityStoreB is associated with Portal_A, the link between the two identity stores serves no purpose.

### Benefits of running the portal in "linked" mode

A portal running in "linked" mode is connected to all the linked identity stores that are associated with it. You can access objects in different identity stores in a single instance of the portal. You don't have to sign out and connect the portal to another identity store.

The following portal functions are affected in "linked" mode:

- When a user performs a search, results come from all the linked identity stores.
- When an action is performed on a user or group object, it is replicated to all the identical objects in the linked identity stores. In this way, identical user and group objects in the linked identity stores are synced automatically. Consider the following:

    - When you create a static group, an identical static group is created in a linked identity store.
    - When you create a Smart Group, an identical group is created as a static group in a linked identity store.
    - When you create a mail-enabled group, an identical simple group is created in a linked identity store.
    - When you create a mailbox or a mail-enabled user, an identical simple user is created in a linked identity store.
    - When you delete a user or group object in an identity store, its linked objects are also deleted.
    - When you update the properties of a user or group object, the same properties are updated for its linked objects in the linked identity stores.
    - When you run the query for a Smart Group to update it, its linked Smart Groups aren't updated automatically.
    - When you upgrade a static group (say, GroupA) to a Smart Group, the linked static groups (GroupB and GroupC, for example) in the linked identity stores aren't upgraded to Smart Groups.

- Group listings in the portal (namely All Groups, My Groups, and Deleted Groups) display the groups from all the linked identity stores. Users can select groups from any identity store to perform an action in bulk, such as expire them.
- User listings in the portal, such as My Direct Reports, display user objects from all the linked identity stores. Users can select user objects from any identity store to perform an action in bulk, such as terminate them.
- For entitlements, the portal shows Active Directory file server and SharePoint permissions from all the linked identity stores.

When the signed-in user exists in multiple linked identity stores, they can perform actions in an identity store according to their role and permissions in that identity store. For example, a user is an administrator in IdentityStoreA and a standard user in IdentityStoreB. The user can perform administrative actions on groups in IdentityStoreA only, even though the group listing displays all groups from both linked identity stores.

## Link two identity stores

To link two identity stores:

1. Select the identity stores.
2. Create a filter expression to map attributes. Select a schema attribute from IdentityStoreA and another from IdentityStoreB. This mapping establishes a link between the two identity stores.

   You can also create an advanced filter expression by adding multiple clauses to the filter. Each clause is a one-to-one mapping of attributes. Join the clauses with the "and" or "or" operator.

   Create a separate filter expression for user and group objects.

When two objects have the same value for the mapped attributes in the two identity stores, Directory Manager identifies them as identical objects and links them.

For example, to link IdentityStoreA to IdentityStoreB, select the displayName and cn attributes from IdentityStoreA and IdentityStoreB respectively to map them. When an object has `Mary Jones` as the value for the distinguishedname attribute in IdentityStoreA, and an object has `Mary Jones` as the value for the cn attribute in IdentityStoreB, Directory Manager identifies them as identical objects in two distinct directories and links them.

:::info
For mapping, always use attributes that store unique values.
:::

## Link multiple identity stores

You can link more than two identity stores. You can link identity stores created for any provider Directory Manager supports.

You can't create one link to link multiple identity stores. To link three identity stores, create two links. To link four identity stores, create three links, and so on. Each link involves two identity stores, which creates a chain of linked identity stores.

To link multiple identity stores:

1. Link IdentityStoreA to IdentityStoreB by following the steps in [Link two identity stores](#link-two-identity-stores).

   Directory Manager now treats these two identity stores as a single entity. Call it Entity1.

2. Link IdentityStoreA or IdentityStoreB to IdentityStoreC using the same method.

   This establishes a link between Entity1 and IdentityStoreC.

In this way, you can create a chain of links between identity stores.
