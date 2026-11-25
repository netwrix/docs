---
title: "Create a Microsoft Entra ID Dynasty in Directory Manager"
description: "Create an Organizational, Geographical, Managerial, or Custom Dynasty in a Microsoft Entra ID identity store and review the child Dynasty naming conventions."
keywords:
  - Microsoft Entra ID Dynasty
  - Entra ID Dynasty template
  - Entra ID managerial Dynasty
  - Dynasty display name template
  - Entra ID Custom Dynasty
sidebar_position: 20
---

# Create a Microsoft Entra ID Dynasty in Directory Manager

The Directory Manager portal provides the following templates for creating Dynasties:

- **Organizational:** Create a Smart Group for every distinct company, then for each department
  within a company, and finally for each title in a department.
- **Geographical:** Create a Smart Group for every distinct country, then for each state within a
  country, and finally for each city within a state.
- **Managerial:** Either create separate Smart Groups for the direct reports of each manager or
  add all direct reports of the top manager and sub-level managers to a single group.
- **Custom:** Begin with a blank Dynasty and select your own group-by attributes.

These templates provide pre-defined grouping attributes for creating Dynasty levels. You can define
custom group-by attributes to expand the Dynasty levels to suit your organizational model. You can
also combine an external data source with the templates to provide extended criteria for determining
group membership.

:::note
Settings related to Dynasty membership are configured at the identity store level.
:::

:::note
Don't move a Dynasty from one domain to another. Child Dynasties become orphaned and
are subsequently deleted.
:::

:::note
You can't create mail-enabled Dynasties of the Office 365 group type in a Microsoft Entra ID
based identity store, since an Office 365 group can't have groups as its members. Only non
mail-enabled Dynasties of the security group type are supported.
:::

**Naming conventions for child Dynasties**

Dynasty names help you group a parent Dynasty with its respective child Dynasties.

- For an Organizational/Geographical/Custom Dynasty:

    The name of a child Dynasty starts with the name of its parent Dynasty (unless you change the
    naming template for Dynasty children).

- For a Managerial Dynasty:

    By default, the naming template for its child Dynasties starts with "Direct reports of
    `<manager>`".

To modify the display name template for child Dynasties, see
[Modify alias and display name templates](/docs/directorymanager/11.0/welcome/group/workingwithgroups/dynastyfunction.md#modify-alias-and-display-name-templates).

:::note
In the Dynasty creation/update process, Directory Manager doesn't create a child Dynasty if it bears the
same name as that of an existing object in the directory. For example, when you create a custom
Dynasty, test1, on one attribute, SamAccountName, its child Dynasties are named as
test1-Robert, test1-John, and so on. However, if test1-Robert already exists as a user object,
Directory Manager skips the test1-Robert child Dynasty and continues to create the rest of the Dynasty.
:::

To create a Dynasty, see:

- [Create a Dynasty using the Organizational/Geographical/Custom template](#create-a-dynasty-using-the-organizationalgeographicalcustom-template)
- [Create a Dynasty using the Managerial template](#create-a-dynasty-using-the-managerial-template)

## Create a Dynasty using the Organizational/Geographical/Custom template

1. In the Directory Manager portal, click the **Create New** button in the left pane and select **Group**.

    The **Create Group** wizard opens to the **Group Type** page.

    :::note
    Pages and fields on the wizard can vary, since the administrator can customize the wizard
    by adding or removing pages and fields.
    :::

2. On the [Select a group type in Directory Manager](/docs/directorymanager/11.0/welcome/group/create/grouptype.md),
   select the **Organizational Dynasty**, **Geographical Dynasty**, or **Custom Dynasty** option
   button and click **Next**.
3. On the
   [Set Dynasty General Properties for Microsoft Entra ID](/docs/directorymanager/11.0/welcome/group/dynasty/createdynasty/general.md) page,
   specify basic information about the Dynasty.
4. On the
   [Configure Dynasty attributes in Directory Manager](/docs/directorymanager/11.0/welcome/group/dynasty/createdynasty/dynastyoptionsorggeocus.md),
   view or change the attributes in the **Attributes** area and click **Next**.

    Dynasties create Smart Groups for each distinct value of each listed attribute. Depending on the
    Dynasty template selected, the **Attributes** area displays the list of default attributes for
    the template; however, you can add and remove attributes. For the Custom template, no attribute
    is displayed.

5. The [Query Designer in the Directory Manager portal](/docs/directorymanager/11.0/welcome/group/querydesigner/overview.md)
   page displays the default query that Directory Manager uses to determine the Dynasty membership. The
   default query returns all users with Exchange mailboxes, along with users and contacts with
   external email addresses, which are then grouped by the specified group-by attributes.

    Review the query for selecting the group members, then click **Next**.

    For details, see the
    [Smart Group Page in the Create Group Wizard](/docs/directorymanager/11.0/welcome/group/create/group/smartgroup.md).

6. On the
   [Owners Page in the Create Group Wizard](/docs/directorymanager/11.0/welcome/group/create/group/owners.md),
   specify primary and additional owners for the Dynasty.

    :::note
    (1) Additional owners are only set for the parent and aren't inherited by child Dynasties
    during update.<br />
    (2) When a Smart Group Update job runs on a group, the notification behavior is as follows:<br />
    Even when the **Do not notify** checkbox is selected, the additional owner receives the
    notifications if the administrator has included its email address for job-specific
    notifications.
    :::

7. On the
   [Review the Summary page before creating an object](/docs/directorymanager/11.0/welcome/user/create/activedirectory/summary.md),
   review the settings and then click **Finish** to complete the wizard.

## Create a Dynasty using the Managerial template

1. In the Directory Manager portal, click the **Create New** button in the left pane and select **Group**.

    The **Create Group** wizard opens to the **Group Type** page.

    :::note
    Pages and fields on the wizard can vary, since the administrator can customize the wizard
    by adding or removing pages and fields.
    :::

2. On the [Select a group type in Directory Manager](/docs/directorymanager/11.0/welcome/group/create/grouptype.md),
   select the **Managerial Dynasty** option button and click **Next**.
3. On the
   [Set Dynasty General Properties for Microsoft Entra ID](/docs/directorymanager/11.0/welcome/group/dynasty/createdynasty/general.md) page,
   specify basic information about the Dynasty.
4. On the
   [Set managerial Dynasty options in Directory Manager](/docs/directorymanager/11.0/welcome/group/dynasty/createdynasty/dynastyoptionsmanagerial.md),
   specify a structure for the Dynasty and click **Next**.

    By default, Directory Manager constructs a managerial Dynasty structure by first creating a Smart Group
    for all direct reports of the selected top-level manager and then continues down the Dynasty
    structure, creating separate Smart Groups for the direct reports to each sub-level manager.
    However, you can choose to create a single Smart Group for the direct reports of all levels of
    managers rather than creating separate groups.

5. The [Query Designer in the Directory Manager portal](/docs/directorymanager/11.0/welcome/group/querydesigner/overview.md)
   page displays the default query that Directory Manager uses to determine the Dynasty membership. This
   query returns all users with Exchange mailboxes, along with users and contacts with external
   email addresses, which are then grouped as per the managerial Dynasty structure.

    Review the query for selecting the group members, then click **Next**.

    For details, see the
    [Smart Group Page in the Create Group Wizard](/docs/directorymanager/11.0/welcome/group/create/group/smartgroup.md).

6. On the
   [Owners Page in the Create Group Wizard](/docs/directorymanager/11.0/welcome/group/create/group/owners.md),
   specify primary and additional owners for the Dynasty.

    :::note
    (1) Additional owners are only set for the parent and aren't inherited by child Dynasties
    during update.<br />
    (2) When a Smart Group Update job runs on a group, the notification behavior is as follows:<br />
    Even when the **Do not notify** checkbox is selected, the additional owner receives the
    notifications if the administrator has included its email address for job-specific
    notifications.<br />
    (3) If you have selected the **Set Manager as owner** option on the **Dynasty Options** page,
    the top manager is displayed as the primary owner instead of the logged-in user.<br />
    If you change the owner, the new recipient becomes the Dynasty’s primary owner even if
    the **Set Manager as owner** checkbox is selected.
    :::

7. On the
   [Review the Summary page before creating an object](/docs/directorymanager/11.0/welcome/user/create/activedirectory/summary.md),
   review the settings and then click **Finish** to complete the wizard.

**See Also**

- [View and Edit Group Properties in Directory Manager](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
