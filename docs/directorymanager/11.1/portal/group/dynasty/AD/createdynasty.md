---
title: "Create an Active Directory Dynasty in Directory Manager"
description: "Create an Organizational, Geographical, Managerial, or Custom Dynasty in the Directory Manager portal and review the child Dynasty naming conventions."
keywords:
  - Active Directory Dynasty
  - AD Geographical Dynasty
  - AD managerial Dynasty
  - AD Dynasty naming convention
sidebar_position: 10
---

# Create an Active Directory Dynasty in Directory Manager

The Directory Manager portal provides these templates for creating Dynasties:

- **Organizational:** Create a Smart Group for every distinct company, then for each department within a company, and finally for each title in a department.
- **Geographical:** Create a Smart Group for every distinct country, then for each state within a country, and finally for each city within a state.
- **Managerial:** Either create separate Smart Groups for the direct reports of each manager, or add all direct reports of the top manager and sub-level managers to a single group.
- **Custom:** Begin with a blank Dynasty and select your own group-by attributes.

These templates provide predefined grouping attributes for creating Dynasty levels. You can define custom group-by attributes to expand the Dynasty levels to suit your organizational model. You can also combine an external data source with the templates to provide extended criteria for determining group membership.

:::note
Settings related to Dynasty membership are configured at the identity store level.
:::

:::note
Don't move a Dynasty from one domain to another. Child Dynasties become orphaned and are subsequently deleted.
:::

:::note
You can't create mail-enabled Dynasties of the Office 365 group type in a Microsoft Entra ID based identity store, since an Office 365 group can't have groups as its members. Only non mail-enabled Dynasties of the security group type are supported.
:::

**Naming conventions for Child Dynasties**

Dynasty names help you group a parent Dynasty with its respective child Dynasties.

- **Organizational, Geographical, or Custom Dynasty:** The name of a child Dynasty starts with the name of its parent Dynasty, unless you change the naming template for Dynasty children.
- **Managerial Dynasty:** By default, the naming template for its child Dynasties starts with "Direct reports of `manager`".

To modify the display name template for child Dynasties, see [Modify alias and display name templates](/docs/directorymanager/11.1/portal/group/workingwithgroups/dynastyfunction.md#modify-alias-and-display-name-templates).

:::note
In the Dynasty creation and update process, Directory Manager doesn't create a child Dynasty if it bears the same name as an existing object in the directory. For example, you create a custom Dynasty, test1, on one attribute, SamAccountName. Its child Dynasties are named test1-Robert, test1-John, and so on. If test1-Robert already exists as a user object, Directory Manager skips the test1-Robert child Dynasty and continues to create the rest of the Dynasty.
:::

## Create a Dynasty using the Organizational, Geographical, or Custom template

To create a Dynasty using the Organizational, Geographical, or Custom template:

1. In the Directory Manager portal, click the **Create New** button in the left pane and select **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   :::note
   Pages and fields on the wizard can vary, since the administrator can customize the wizard by adding or removing pages and fields.
   :::

2. On the [Select a group type in Directory Manager](/docs/directorymanager/11.1/portal/group/create/grouptype.md) page, select the **Organizational Dynasty**, **Geographical Dynasty**, or **Custom Dynasty** option button and click **Next**.
3. On the [Specify Basic Group Information in Directory Manager](/docs/directorymanager/11.1/portal/group/create/AD/general.md) page, specify basic information about the Dynasty.
4. On the [Configure Dynasty attributes in Directory Manager](/docs/directorymanager/11.1/portal/group/dynasty/AD/dynastyoptionsorggeocus.md) page, review the attributes in the **Attributes** area, change them if needed, and click **Next**.

   Dynasties create Smart Groups for each distinct value of each listed attribute. Depending on the Dynasty template selected, the **Attributes** area displays the list of default attributes for the template. You can add and remove attributes. For the Custom template, no attribute is displayed.

5. On the [Query Designer in the Directory Manager portal](/docs/directorymanager/11.1/portal/group/querydesigner/overview.md) page, review the default query that Directory Manager uses to determine the Dynasty membership, then click **Next**.

   The default query returns all users with Exchange mailboxes, along with users and contacts with external email addresses. Directory Manager then groups them by the specified group-by attributes.

   For details, see the [Smart Group Page in the Create Group Wizard](/docs/directorymanager/11.1/portal/group/create/AD/smartgroup.md).

6. On the [Owners Page in the Create Group Wizard](/docs/directorymanager/11.1/portal/group/create/AD/owners.md), specify primary and additional owners for the Dynasty.

   :::note
   (1) Additional owners are only set for the parent and aren't inherited by child Dynasties during update.  
   (2) When a Smart Group Update job runs on a group, the notification behavior is as follows:  
   Even when the **Don't Notify** checkbox is selected, the additional owner receives the notifications if the administrator has included its email address for job-specific notifications.
   :::

7. On the [Review the Summary Page Before Creating an Object](/docs/directorymanager/11.1/portal/user/create/AD/summary.md) page, review the settings and click **Finish** to complete the wizard.

## Create a Dynasty using the Managerial template

To create a Dynasty using the Managerial template:

1. In the Directory Manager portal, click the **Create New** button in the left pane and select **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   :::note
   Pages and fields on the wizard can vary, since the administrator can customize the wizard by adding or removing pages and fields.
   :::

2. On the [Select a group type in Directory Manager](/docs/directorymanager/11.1/portal/group/create/grouptype.md) page, select the **Managerial Dynasty** option button and click **Next**.
3. On the [Specify Basic Group Information in Directory Manager](/docs/directorymanager/11.1/portal/group/create/AD/general.md) page, specify basic information about the Dynasty.
4. On the [Set managerial Dynasty options in Directory Manager](/docs/directorymanager/11.1/portal/group/dynasty/AD/dynastyoptionsmanagerial.md) page, specify a structure for the Dynasty and click **Next**.

   By default, Directory Manager first creates a Smart Group for all direct reports of the selected top-level manager. It then continues down the Dynasty structure, creating separate Smart Groups for the direct reports of each sub-level manager. You can also create a single Smart Group for the direct reports of all levels of managers instead of separate groups.

5. On the [Query Designer in the Directory Manager portal](/docs/directorymanager/11.1/portal/group/querydesigner/overview.md) page, review the default query that Directory Manager uses to determine the Dynasty membership, then click **Next**.

   This query returns all users with Exchange mailboxes, along with users and contacts with external email addresses. Directory Manager then groups them as per the managerial Dynasty structure.

   For details, see the [Smart Group Page in the Create Group Wizard](/docs/directorymanager/11.1/portal/group/create/AD/smartgroup.md).

6. On the [Owners Page in the Create Group Wizard](/docs/directorymanager/11.1/portal/group/create/AD/owners.md), specify primary and additional owners for the Dynasty.

   :::note
   (1) Additional owners are only set for the parent and aren't inherited by child Dynasties during update.  
   (2) When a Smart Group Update job runs on a group, the notification behavior is as follows:  
   Even when the **Don't Notify** checkbox is selected, the additional owner receives the notifications if the administrator has included its email address for job-specific notifications.  
   (3) If you have selected the **Set Manager as owner** option on the **Dynasty Options** page, the top manager is displayed as the primary owner instead of the logged-in user.  
   In case you change the owner, the new recipient becomes the Dynasty's primary owner even if the **Set Manager as owner** checkbox is selected.
   :::

7. On the [Review the Summary Page Before Creating an Object](/docs/directorymanager/11.1/portal/user/create/AD/summary.md) page, review the settings and click **Finish** to complete the wizard.
