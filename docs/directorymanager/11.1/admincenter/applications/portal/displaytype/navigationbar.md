---
title: "Customize the Directory Manager Portal Navigation Bar"
description: "Add, update, rearrange, and remove nodes, sub-nodes, and tabs on the left navigation bar of a Directory Manager portal."
keywords:
  - portal navigation bar
  - navigation nodes
  - sub-nodes and tabs
  - access level
  - portal design
sidebar_position: 60
---

# Customize the Directory Manager Portal Navigation Bar

Use the left navigation bar in a portal to navigate through these nodes:

- Create New
- Dashboard
- Groups
- Users
- Requests
- History
- Entitlement
- Synchronize
- Reports

When a user expands a node, its sub-nodes appear. When a user clicks a sub-node, the portal opens a page that contains tabs under that sub-node. The following image shows the navigation bar:

![Portal navigation bar with expanded nodes and sub-nodes](/images/directorymanager/11.1/admincenter/portal/design/navigation_bar.webp)

Use Directory Manager to customize the nodes, sub-nodes, and their respective tabs.

**What do you want to do?**

**At the node level:**

- [Add a node (category)](#add-a-node-category)
- [Update the details of a node](#update-the-details-of-a-node)
- [Rearrange the nodes on the navigation bar](#rearrange-the-nodes-on-the-navigation-bar)
- [Remove a user-defined node](#remove-a-user-defined-node)

**At the sub-node level:**

- [Add a sub-node to a node](#add-a-sub-node-to-a-node)
- [Update the details of a sub-node](#update-the-details-of-a-sub-node)
- [Rearrange the sub-nodes for a node](#rearrange-the-sub-nodes-for-a-node)
- [Remove a sub-node from a node](#remove-a-sub-node-from-a-node)

**At the tab level:**

- [Update tab properties](#update-tab-properties)
- [Rearrange the tabs for a sub-node](#rearrange-the-tabs-for-a-sub-node)
- [Remove a tab from a sub-node](#remove-a-tab-from-a-sub-node)

## Add a node (category)

The navigation bar defines these nodes by default:

| Category (node) | Mapped to |
| --- | --- |
| Create New | The Create New button on the portal's navigation bar. It has four buttons as its sub-nodes: Group, User, Mailbox, and Contact. Sub-nodes don't have tabs. |
| High Priority | The Dashboard node on the navigation bar. It has one sub-node, Dashboard, with no tab. |
| Groups | The Groups node on the navigation bar. It has four sub-nodes: All Groups, My Groups, Transfer Ownership, and Deleted Groups. All except the Transfer Ownership sub-node have tabs. |
| Users | The Users node on the navigation bar. It has two sub-nodes: My Direct Reports and Linked Accounts. Only the My Direct Reports sub-node has tabs. |
| Requests | The Requests node on the navigation bar. It has three sub-nodes: All Requests, My Requests, and Request Inbox. Sub-nodes don't have tabs. |
| Others | The History node on the navigation bar. It has one sub-node, History, that has tabs. |
| External Links | The Entitlement, Synchronize, and Reports nodes on the navigation bar. It has three sub-nodes, Entitlement, Synchronize, and Reports, that can be modified to a limited extent. You can't manage the tabs or other options displayed under these nodes in the portal. |

Keep these limits in mind:

- You can't edit or remove the Create New, High Priority, Others, and External Links nodes.
- You can add and remove sub-nodes for nodes. You can't add sub-nodes for the **Create New** node.
- You can't add tabs to sub-nodes. You can only edit and remove tabs that exist by default.

**To add a node:**

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Navigation Bar** in the left pane. The **Navigation Bar** page has two tabs. Use the **Navigation Bar Categories** tab to manage nodes. Use the **Navigation Bars** tab to manage sub-nodes and their respective tabs.
5. Click **Navigation Bar Categories** to define a new node.
6. On the **Navigation Bar Categories** tab, click **Add**. The **Add Navigation Category** pane opens.
7. Enter a name for the node in the **Title** box. The navigation bar shows the node with this name.
8. In the **Access Level** dropdown list, select a security role. The node is visible to users of this role and roles with a priority value higher than this role. For all other users, the node is hidden. See [Priority](/docs/directorymanager/11.1/admincenter/securityrole/manage.md). Select Never to hide the node for all users.
9. In the **Tooltip Text** box, enter the text to appear when a user hovers the mouse over the node.
10. Use the **Icon Class** box to upload the image (icon) to display with the node name.

    - If no image is uploaded, click **Save** to browse and select an image for upload.
    - If an image has been uploaded, the same image appears. Click the icon below the image to replace the existing image with a new one.

    :::note
    Image dimensions: 30 x 30 pixels

    Supported formats: .webp, .jpg, .jpe, .jpeg
    :::

11. Click **OK**.
12. Click **Save** on the **Navigation Bar** page.

## Update the details of a node

You can update these details for the Groups, Users, and Requests nodes on the portal's navigation bar:

- Node name
- Access level
- Tooltip text
- Node icon

You can't modify the Create New, High Priority, Others, and External Links nodes.

**To update a node:**

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Navigation Bar** in the left pane. Then click the **Navigation Bar Categories** tab.
5. On the **Navigation Bar Categories** tab, click **Edit** for a node to update it. The **Edit Navigation Category** pane opens. Follow step 7 and onwards in the Add a node (category) topic to update node details.

## Rearrange the nodes on the navigation bar

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Navigation Bar** in the left pane. Then click the **Navigation Bar Categories** tab. The **Navigation Bar Categories** tab opens.
5. To rearrange the nodes on the navigation bar, click the equal sign for a node and drag to change its position. You can move all except the Create New node.
6. Click **Save**.

## Remove a user-defined node

You can delete user-defined nodes on the portal's navigation bar. You can't delete system-defined nodes.

**To delete a node:**

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Navigation Bar** in the left pane. Then click the **Navigation Bar Categories** tab.
5. On the **Navigation Bar Categories** tab, click **Remove** for a node to delete it.
6. Click **Save**.

## Add a sub-node to a node

You can customize the nodes on the portal's navigation bar by defining sub-nodes for them. Keep these limits in mind:

- You can't add sub-nodes to the Create New node.
- You can't add tabs to a sub-node.

**To define a sub-node:**

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Navigation Bar** in the left pane. The **Navigation Bar** page opens with the **Navigation Bars** tab selected by default.
5. In the **Select Navigation Bar Type** dropdown list, select a node on the portal's navigation bar. Its sub-nodes are listed under **Name**.
6. To add a sub-node to the selected node, click **Add**. The **Add Link** pane opens.
7. In the **Tab Name** box, enter a name for the sub-node.
8. In the **Display Text** box, enter the text to display as the sub-node name on the navigation bar.
9. In the **Tooltip Text** box, enter the text to appear when a user hovers the mouse over the sub-node.
10. Use the **Icon Class** box to upload the image (icon) to display with the sub-node name. See step 10 in the Add a node (category) topic for details. You can't upload an image for sub-nodes under Groups, Users, Requests, and External Links.
11. In the **URL** box, provide the URL of a webpage to link to this sub-node. The webpage opens when users click the sub-node in the portal. Use these formats to specify the URL:

    - To link a page from within the Directory Manager portal template: `GroupManagement/Groups/MyGroups`
    - To link to an external webpage: `https://www.xyz.com`.

    Click **View in Browser** to preview the webpage.

12. Select the **Open in new tab** checkbox to open the linked page in a new tab in the browser. If you don't select it, users navigate directly to the linked page. They have to use the browser's back button to return to the previous page.
13. In the **Access Level** dropdown list, select a security role. The sub-node is visible for users of this role and roles with a priority value higher than this role. For all other users, the sub-node is hidden. See [Priority](/docs/directorymanager/11.1/admincenter/securityrole/manage.md). Select Never to hide the sub-node for all users.
14. Click **OK**.
15. Click **Save** on the **Navigation Bar** page.

## Update the details of a sub-node

You can change these properties of a sub-node:

- The name of the sub-node
- The display name of the sub-node, which is the sub-node's name on the portal's navigation bar
- The tooltip text for the sub-node
- The URL of the webpage that opens when a user clicks the sub-node
- Access level

**To update sub-node properties:**

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Navigation Bar** in the left pane. The **Navigation Bar** page opens with the **Navigation Bars** tab selected by default.
5. In the **Select Navigation Bar Type** dropdown list, select a node on the portal's navigation bar. Its sub-nodes are listed under **Name**.
6. Click **Edit** for a sub-node to update its properties. The **Edit Link** pane opens.
7. Follow steps 7-14 in the Add a sub-node to a node topic to update the required information and save it. The **Links** section appears for system-defined nodes only. Use it to manage the tabs for a sub-node.

## Rearrange the sub-nodes for a node

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Navigation Bar** in the left pane. The **Navigation Bar** page opens with the **Navigation Bars** tab selected by default.
5. In the **Select Navigation Bar Type** dropdown list, select a node on the portal's navigation bar. Its sub-nodes are listed under **Name**.
6. To rearrange the sub-nodes under the selected node, click the equal sign for a sub-node and drag to change its position.
7. Click **Save**.

## Remove a sub-node from a node

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Navigation Bar** in the left pane. The **Navigation Bar** page opens with the **Navigation Bars** tab selected by default.
5. In the **Select Navigation Bar Type** dropdown list, select a node on the portal's navigation bar. Its sub-nodes are listed under **Name**.
6. Click **Remove** for a sub-node to remove it. This also removes all tabs defined for the sub-node.
7. Click **Save**.

## Update tab properties

You can modify these properties of a tab:

- The name of the tab
- The display name of the tab, which is the name the portal shows for the tab
- Tooltip text
- The URL of the webpage that opens when a user clicks the tab
- Access level

**To update tab properties:**

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Navigation Bar** in the left pane. The **Navigation Bar** page opens with the **Navigation Bars** tab selected by default.
5. In the **Select Navigation Bar Type** dropdown list, select a node on the portal's navigation bar. Its sub-nodes are listed under **Name**.
6. Click **Edit** for a system-defined sub-node. On the **Edit Link** pane, the **Links** area lists the tabs for the sub-node, if the sub-node has tabs.
7. Click **Edit** for a tab to edit it.
8. On the **Edit Link** pane for the tab, update the required information and click **OK**:

    1. **Link Name** – The name of the tab.
    2. **Display Text** – The text the portal shows as the tab name.
    3. **Tooltip Text** – The text that appears when a user hovers the mouse over the tab.
    4. **URL** – The address of the webpage to display when a user clicks the tab.
    5. **Access Level** – Select a security role. The tab is visible to users of this role and roles with a priority value higher than this role. For all other users, the tab is hidden. See [Priority](/docs/directorymanager/11.1/admincenter/securityrole/manage.md). Select Never to hide the tab for all users.

9. Click **OK** twice on the **Edit Link** pane.
10. Click **Save** on the **Navigation Bar** page.

## Rearrange the tabs for a sub-node

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Navigation Bar** in the left pane. The **Navigation Bar** page opens with the **Navigation Bars** tab selected by default.
5. In the **Select Navigation Bar Type** dropdown list, select a node on the portal's navigation bar. Its sub-nodes are listed under **Name**.
6. Click **Edit** for a system-defined sub-node. On the **Edit Link** pane, the **Links** area lists the tabs for the sub-node, if the sub-node has tabs.
7. To change the order of the tabs in the portal, click the equal sign for a tab and drag to change its position.
8. Click **OK**.
9. Click **Save** on the **Navigation Bar** page.

## Remove a tab from a sub-node

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Navigation Bar** in the left pane. The **Navigation Bar** page opens with the **Navigation Bars** tab selected by default.
5. In the **Select Navigation Bar Type** dropdown list, select a node on the portal's navigation bar. Its sub-nodes are listed under **Name**.
6. Click **Edit** for a system-defined sub-node. On the **Edit Link** pane, the **Links** area lists the tabs for the sub-node, if the sub-node has tabs.
7. Click **Remove** for a tab to remove it.
8. Click **OK**.
9. Click **Save** on the **Navigation Bar** page.
