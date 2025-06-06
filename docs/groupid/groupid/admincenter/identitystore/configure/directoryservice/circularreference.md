# Manage Circular Reference

By default, Directory Manager checks for circular reference and does not allow it when users update objects manually or when objects are auto updated via a Directory Manager schedule. If a circular reference occurs, Directory Manager displays an error and prevents the user from saving the change.

Examples of circular reference are:

- When UserA is a direct report of UserB and UserB is a direct report of UserC, a circular reference would occur when you try to set UserA as UserC's manager.
- When you try to add a group as its member, say, add GroupA as a member of GroupA, a circular reference would occur.
- When GroupA is a member of GroupB, GroupB is a member of GroupC, a circular reference would occur when you try to add GroupC as a member of GroupA.

You can change the default setting to allow Directory Manager to save updates to objects even when a circular reference occurs.

What do you want to do?

- [Allow Circular Reference](#Allow-Circular-Reference)
- [Skip the replication of members of a dynamic group in Entra ID ](#Skip-the-replication-of-members-of-a-dynamic-group-in-Entra-ID)

## Allow Circular Reference

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Miscellaneous__.
4. On the __Miscellaneous__ page, uncheck the __Check for Circular Reference__ check box to allow Directory Manager to save changes to objects that involve circular reference.  
   The check box is selected by default, indicating that Directory Manager prevents circular reference in objects.
5. Click __Save__.

## Skip the replication of members of a dynamic group in Entra ID

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Miscellaneous__.
4. On the __Miscellaneous__ page, select the __Skip Replicating members related attributes of Groups with dynamic membership__ check box to skip the replication of members of a dynamic group in Microsoft Entra ID based identity store.
5. Click __Save__.
