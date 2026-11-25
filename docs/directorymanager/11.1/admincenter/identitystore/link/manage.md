---
title: "Manage Identity Store Links in Directory Manager"
description: "Link identical user and group objects across Active Directory and Microsoft Entra ID identity stores, then edit, disable, or delete the links."
keywords:
  - identity store link
  - linked identities
  - filter expression
  - Active Directory
  - Microsoft Entra ID
  - link users and groups across domains
sidebar_position: 10
---

# Manage Identity Store Links in Directory Manager

You can link identity stores built on the supported identity providers in Directory Manager. Linking lets identical user and group objects that exist in multiple identity stores (domains) be linked together and synced automatically. Directory Manager also lets you manage these linked identity stores.

## Link two identity stores

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click **Link Identity Stores Now** in the **Identity Store
   Links** area. In case a link already exists, the **Create Identity Store Link** button is available.
3. On the **Link Identity Stores** page, click **Add**. The **Add Identity Stores** dialog box lists all the Active Directory and Microsoft Entra ID identity stores created in Directory Manager.
4. Select two identity stores and click **Add 2 Stores**. The selected identity stores appear on the **Link Identity Stores** page.
5. Specify the attributes for linking user and group objects in the identity stores. Create separate filter expressions for user and group objects.

    - To create a filter expression for linking user objects, click **Users**.
    - To create a filter expression for linking group objects, click **Groups**.

    The **Add Filter for Users** or **Add Filter for Groups** pane opens.

6. To map the objects, follow these steps:

    1. Click **Add Filter** to create a filter expression to map objects.

        - The first list displays schema attributes from the first identity store.
        - Next is a single condition, **Is Exactly**.
        - The third list displays schema attributes from the second identity store.

        Select a schema attribute from the first and third lists to map them. Users with identical values for both attributes in the respective identity stores are linked.

    2. (Optional) Add more clauses to enhance the filter. Join these clauses with a logical "and" or "or".

        - Click **Add More Filters**.
        - Select a schema attribute from the first and third lists to map them, with **Is Exactly** as the condition.
        - Select two clauses and group them by inserting a logical "and" or "or".

          To select a clause, click the down arrow next to it and choose **Select row**. After you select the second clause, **AND** and **OR** appear. Select an option to group the clauses.

          You can add as many clauses as you need. You can also group and regroup clauses. Users that satisfy the filter expression are linked.

    3. Click the operator. A menu appears with the following options:

        - **Select Group / Deselect Group:** This option isn't relevant when there is only one group containing multiple clauses. It is relevant when you have two or more groups. Click it to select the group. Then select another group to bind them with a logical AND/OR.
        - **Ungroup:** Removes the logical AND/OR to ungroup the clauses in the filter expression. If the operator binds two groups, this option removes the operator to ungroup them.
        - **Change to AND/OR**: Changes the logical AND to OR and vice versa.
        - **Add Clause:** Adds a new clause to the filter.
        - **Delete:** Deletes the operator along with all the clauses that the operator joins.

    4. Use the two buttons at the top of the filter expression, **Clear** and **Preview**:

        - **Clear:** Clears the entire filter expression, which deletes all attribute mappings.
        - **Preview:** Opens the **Preview Results** dialog box, where you can view identical user objects in the identity stores, based on the filter expression.

          On the **Preview Results** dialog box, enter the name of an object (user or group) in the first box, select an identity store, and click **Preview**.

            - For an Active Directory identity store, Directory Manager looks up the values of the name, sAMAccountName, objectGUID, and distinguishedName attributes to match the string using the **Is exactly** operator.
            - For a Microsoft Entra ID identity store, Directory Manager looks up the values of the userPrincipalName, ObjectGUID, distinguishedName, and name (which is equivalent to display name) attributes to match the string using the **Is exactly** operator.

              Microsoft Entra ID doesn't contain the distinguishedName attribute. However, it is available as a pseudo attribute in Directory Manager, and its value is the same as that of the distinguishedName attribute in Active Directory.

            The **Preview Results** dialog box displays the user object found in the selected identity store based on the search string. Next to it, one of the following appears:

            - The user object identical to it in the other identity store. Directory Manager fetches it based on the mapped attributes. The display name and distinguished name of the user appear in both identity stores.
            - Nothing, if no identical object is found.
            - A **Multiple Objects** link, if multiple identities of a user are found in the other identity store. Click it to open a popup that lists all identical objects for the user found in the other identity store.

            If you don't enter a user name on the **Preview Results** dialog box, and only select an identity store and click **Preview**, all user objects from the selected identity store appear along with their linked identities in the other identity store. If the process takes too long, you can click the orange button at the bottom to stop it.

    5. Click **Add Filter for Users** in the bottom right corner of the **Add Filter for Users** or **Add Filter for Groups** pane.

        :::note
        If you add multiple clauses but don't group them using the AND/OR operator, Directory Manager groups them automatically using AND. Similarly, if you add two groups of clauses but don't group them using the AND/OR operator, Directory Manager groups them automatically using AND.
        :::

        The filter is added and appears on the **Link Identity Stores** page.

        You can specify one filter expression for the user object and one filter expression for the group object.

    6. Click **Add Filter Scope** to specify a container for linked identities. Directory Manager links and syncs these identities later when they are updated. New objects are also created in this container.

7. Click **Create Link** to save the link.

    :::note
    An identity store link is effective when the two identity stores linked together are also associated with a Directory Manager portal, say Portal A. If no portal exists with both identity stores associated with it, a message alerts you.
    :::

    The link appears on the **Identity Stores** page.

## View the identity store links

All identity store links created in Directory Manager appear under **Identity Store Links** on the **Identity Stores** page.

**To view the links:**

1. In Admin Center, click **Identity Stores** in the left pane.

   On the **Identity Stores** page, each card under **Identity Store Links** represents a distinct link between two identity stores. The card shows the following information for a link:

    - The names of the two linked identity stores and the identity providers they are created on.
    - The object types that are linked (user and group).
    - The link status, in the top right corner of the card. A link has one of the following statuses:

        - **Healthy** - Both identity stores are fully functional with replication occurring regularly.
        - **Errors** - One or both identity stores have run into errors due to replication or connectivity issues. Check the affected identity store to resolve the issue. The card for that identity store also shows "Error" as its status.

2. Click the ellipsis button to open a shortcut menu with the following options:

    - **Edit:** Opens the **Link Identity Stores** page, where you can update the link.
    - **Disable:** Disables the link between the two identity stores.
    - **Delete:** Deletes the link.

## Edit a link

A link between two identity stores involves (a) two identity stores, (b) a filter that identifies identical user objects in the identity stores to link them, and (c) a filter that identifies identical group objects in the identity stores to link them.

You can edit a link to:

- Replace an identity store in the link
- Update the filter expression for a user or group object
- Remove the filter expression for a user or group object

**To edit a link:**

1. In Admin Center, click **Identity Stores** in the left pane.

   On the **Identity Stores** page, each card under **Identity Store Links** represents a distinct link between two identity stores.

2. Click the ellipsis button on a card and select **Edit**.

   The **Link Identity Stores** page opens, displaying the linked identity stores and the filters.

    - **Replace an identity store** - To change the identity stores in the link, click **Edit** next to the identity stores' names. On the **Add Identity Stores** dialog box, select the identity stores to replace the existing ones. Then click **Add 2 Stores**.

      When you replace one or both identity stores, Directory Manager removes the filter expression automatically. Create a new filter expression to establish a link between the identity stores.
    - **Modify the filter expression for user or group object** - Click **Edit** on the filter card for the user or group object. The **Add Filter** pane opens, where you can update the filter expression. To update it, follow step 6a-e in [Link two identity stores](#link-two-identity-stores).

      Modifying the filter expression for the user or group object breaks the link for the respective objects in the linked identity stores. Directory Manager relinks objects based on the new filter expression and syncs them accordingly in the Directory Manager portal.
    - **Delete a filter expression** - Click **Remove** on the filter card for a user or group object to delete it. Deleting the filter expression for the user or group object breaks the link for the respective objects in the linked identity stores.

        :::note
        At least one filter expression for the user object and one filter expression for the group object must exist for the identity store link. Otherwise, changes aren't saved.
        :::

3. After you make the changes, click **Update Link**.

## Disable or enable a link

When you disable a link between two identity stores, it becomes inactive. The objects in the identity stores aren't linked anymore in the Directory Manager portal.

You can enable a disabled link again to relink objects in the identity stores.

**To disable a link:**

1. In Admin Center, click **Identity Stores** in the left pane.

   On the **Identity Stores** page, each card under **Identity Store Links** represents a distinct link between two identity stores.

2. Click the ellipsis button on a card and select **Disable** to disable the link.

   To reactivate a disabled link, click the ellipsis button for it and select **Enable**.

## Delete a link

When you delete a link between two identity stores, the objects in the identity stores aren't linked anymore in the Directory Manager portal.

**To delete a link:**

1. In Admin Center, click **Identity Stores** in the left pane.

   On the **Identity Stores** page, each card under **Identity Store Links** represents a distinct link between two identity stores.

2. Click the ellipsis button on a card and select **Delete** to delete the link.
