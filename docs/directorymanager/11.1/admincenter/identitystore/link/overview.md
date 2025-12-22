---
title: "Link Identity Stores"
description: "Link Identity Stores"
sidebar_position: 60
---

# Link Identity Stores

You can link identity stores in Directory Manager. In this way, identical user and group objects
existing in multiple identity stores (domains) can be linked together and auto synced.

For example, you can create a link between the following types of identity stores:

- Two Active Directory identity stores
- An Active Directory identity store and a Microsoft Entra ID identity store
- Two Microsoft Entra ID identity stores
- An Active Directory identity store and a Google Workspace identity store

:::note
(1) Two identity stores built on the same domain cannot be linked.  
(2) An identity store must be replicated in Directory Manager before it can be linked.
:::


## Linked Identity Stores and the Directory Manager Portal

Linking, in itself, is not effective until the identity stores joined via linking are associated
with a Directory Manager portal, say Portal_A. Consider the following:

- The administrator links IdentityStoreA and identityStoreB.
- The administrator creates a portal, Portal_A, and associates both the linked identity stores with
  it.
- This enables portal users to view data from IdentityStoreA and identityStoreB at the same time,
  rather than having to switch identity stores. Users can also filter data for identical objects in
  both the identity stores.  
  Users can choose to view data for a single identity store or switch to the ‘linked’’ mode to view
  data simultaneously from both the linked identity stores.

When only IdentityStoreA or IdentityStoreB is associated with Portal_A, the linking between the two
identity stores serves no purpose.

### Benefits of Running the Portal Under the ‘Linked’ Mode

A portal running under the ‘linked’ mode is effectively connected to all the linked identity stores
that are associated with it. You can access objects in different identity stores in a single
instance of the portal, rather than having to log out and connect the portal to another identity
store.

The following portal functions are impacted under the ‘linked’ mode:

- When a user performs a search, results are fetched from all the linked identity stores.
- When an action is performed on a user or group object, it is replicated to all the identical
  objects in the linked identity store(s). In this way, identical user and group objects in the
  linked identity stores are auto synced. Consider the following:

    - When you create a static group, its identical static group is created in a linked identity
      store.
    - When you create a Smart Group, its identical group is created as a static group in a linked
      identity store.
    - When you create a mail-enabled group, an identical simple group is created in a linked
      identity store.
    - When you create a mailbox or a mail-enabled user, an identical simple user is created in a
      linked identity store.
    - When you delete a user or group object in an identity store, its linked object(s) are also
      deleted.
    - When you update the properties of a user or group object, those same properties are also
      updated for its linked object(s) in the linked identity store(s).
    - When you execute the query for a Smart Group to update it, its linked Smart Group(s) will not
      be auto updated.
    - When you upgrade a static group (say, GroupA) to a Smart Group, the linked static group(s)
      (say, GroupB and GroupC) in the linked identity store(s) will not be upgraded to Smart Groups.

- Group listings in the portal (namely All Groups, My Groups, and Deleted Groups) display the groups
  from all the linked identity stores. Users can select groups from any identity store to perform an
  action in bulk, such as expire them.
- User listings in the portal, such as My Direct Reports, display user objects from all the linked
  identity stores. Users can select user objects from any identity store to perform an action in
  bulk, such as terminate them.
- For entitlements, the portal shows Active Directory file server and SharePoint permissions from
  all the linked identity stores.

When the logged-in user exists in multiple linked identity stores, he or she can perform actions in
an identity store according to his or her role and permissions in the respective identity store. For
example, if the user is an administrator in IdentityStoreA and a standard user in IdentityStoreB, he
or she can perform administrative actions on groups in IdentityStoreA only, even though the group
listing displays all groups from both the linked identity stores.

## How to Link Two Identity Stores

Linking two identity stores follows a simple and straight-forward process:

- Select the required identity stores.
- Create a filter expression to map attributes. Select a schema attribute from IdentityStoreA and
  another from IdentityStoreB. This mapping establishes a link between the two identity stores.  
  You can also create an advanced filter expression by adding multiple clauses to the filter (where
  each clause is a one-to-one mapping of attributes) and joining them with the ‘and’ or ‘or’
  operator.  
  You have to create a separate filter expression for user and group objects.
- When two objects have the same value for the mapped attributes in the two identity stores,
  Directory Manager identifies them as identical objects, and hence links them.

For example, to link IdentityStoreA to IdentityStoreB, select the displayName and cn attributes from
IdentityStoreA and IdentityStoreB respectively to map them. Now when an object has _Mary Jones_ as
value for the distinguishedname attribute in dentityStoreA and an object has _Mary Jones_ as value
for the cn attribute in dentityStoreB, Directory Manager identifies them as identical objects
existing in two distinct directories, and links them.

:::info
For mapping, always use attributes that store unique values.
:::


## How to Link Multiple Identity Stores

You can link more than two identity stores; in fact, Directory Manager empowers you to link identity
stores created for Directory Manager supported providers.

You cannot just create one link to link multiple identity stores. Rather, if you want to link three
identity stores, you will have to create two links; to link four identity stores, create three
links, and so on. Each link involves two identity stores, thereby creating a chain of linked
identity stores.

Here is how it works:

- Link two identity stores, IdentityStoreA and IdentityStoreB, by following the discussion in the
  How to Link Two Identity Stores topic.  
  Directory Manager now considers this link as one entity. Let’s call it Entity1.
- Next, link IdentityStoreA or IdentityStoreB to IdentityStoreC using the same method.  
  This establishes a link between Entity1 and IdentityStoreC.

In this way, you can create a chain of links between identity stores.