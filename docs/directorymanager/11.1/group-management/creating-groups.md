# Create an Active Directory Dynasty

The Directory Manager portal provides the following templates for creating Dynasties:

- **Organizational:** To create a Smart Group for every distinct company, then for each department
  within a company, and finally for each title in a department.
- **Geographical:** To create a Smart Group for every distinct country, then for each state within a
  country, and finally for each city within a state.
- **Managerial:** To either create separate Smart Groups for the direct reports of each manager or
  add all direct reports of the top manager and sub-level managers to a single group.
- **Custom:** To begin with a blank Dynasty and select your own group-by attributes.

These templates provide pre-defined grouping attributes for creating Dynasty levels. You can define
custom group-by attributes to expand the Dynasty levels to suit your organizational model. You can
also combine an external data source with the templates to provide extended criteria for determining
group membership.

NOTE: Settings related to Dynasty membership are configured at the identity store level.

NOTE: Do not move a Dynasty from one domain to another. Child Dynasties would get orphaned and
subsequently deleted.

NOTE: You cannot create mail-enabled Dynasties of the Office 365 group type in a Microsoft Entra ID
based identity store, since an Office 365 group cannot have groups as its members. Only non
mail-enabled Dynasties of the security group type are supported.

Naming conventions for Child Dynasties

Dynasty names help you group a parent Dynasty with its respective child Dynasties.

- For an Organizational/Geographical/Custom Dynasty:

  The name of a child Dynasty starts with the name of its parent Dynasty (unless you change the
  naming template for Dynasty children).

- For a Managerial Dynasty:

  By default, the naming template for its child Dynasties starts with "Direct reports of
  `manager`".

To modify the display name template for child Dynasties, see
[Modify alias and display name templates](/docs/directorymanager/11.1/group-management/group-dynasties.md#modify-alias-and-display-name-templates).

NOTE: In the Dynasty creation/update process, a child Dynasty will not be created if it bears the
same name as that of an existing object in the directory. For example, when you create a custom
Dynasty, test1, on one attribute, SamAccountName, it’s child Dynasties would be named as
test1-Robert, test1-John, and so on. However, if test1-Robert already exists as a user object,
Directory Manager will skip the test1-Robert child Dynasty and continue to create the rest of the
Dynasty.

## Create a Dynasty using the Organizational/Geographical/Custom template

Follow the steps to create a dynasty using the the Organizational/Geographical/Custom template.

1. In the Directory Managerbportal, click the **Create New** button in the left pane and select
   **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   NOTE: Pages and fields on the wizard may vary, since the administrator can customize the wizard
   by adding or removing pages and fields.

2. On the [Group Type page](/docs/directorymanager/11.1/group-management/grouptype.md), select the **Organizational Dynasty**,
   **Geographical Dynasty**, or **Custom Dynasty** option button and click **Next**.
3. On the [General page](/docs/directorymanager/11.1/group-management/general.md), specify basic information about
   the Dynasty.
4. On the [Dynasty Options page](/docs/directorymanager/11.1/group-management/group-dynasties.md), view or change the attributes in
   the **Attributes** area and click **Next**.

   Dynasties create Smart Groups for each distinct value of each listed attribute. Depending on the
   Dynasty template selected, the **Attributes** area displays the list of default attributes for
   the template; however, you can add and remove attributes. For the Custom template, no attribute
   is displayed.

5. The [Query Designer](/docs/directorymanager/11.1/group-management/overview.md) page displays the default query that
   Directory Manager will use to determine the Dynasty membership. The default query returns all
   users with Exchange mailboxes, along with users and contacts with external email addresses, which
   are then grouped by the specified group-by attributes.

   Review the query for selecting the group members, then click **Next**.

   For details, see the [ Smart Group page](/docs/directorymanager/11.1/group-management/smartgroup.md).

6. On the [Owners page](/docs/directorymanager/11.1/group-management/owners.md), specify primary and additional
   owners for the Dynasty.

   NOTE: (1) Additional owners are only set for the parent and are not inherited by child Dynasties
   during update.  
    (2) When a Smart Group Update job runs on a group, the notification behavior is as follows:  
    Even when the **Do not Notify** check box is selected, the additional owner will receive the
   notifications if the administrator has included its email address for job-specific
   notifications.

7. On the [Summary Page](/docs/directorymanager/11.1/user-management/summary.md), review the settings and
   then click Finish to complete the wizard.

## Create a Dynasty using the Managerial template

Follow the steps to create a Dynasty using the Managerial template.

1. In the Directory Manager portal, click the **Create New** button in the left pane and select
   **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   NOTE: Pages and fields on the wizard may vary, since the administrator can customize the wizard
   by adding or removing pages and fields.

2. On the [Group Type page](/docs/directorymanager/11.1/group-management/grouptype.md), select the **Managerial Dynasty** option
   button and click **Next**.
3. On the [General page](/docs/directorymanager/11.1/group-management/general.md), specify basic information about
   the Dynasty.
4. On the [Dynasty Options page (Managerial Dynasty)](/docs/directorymanager/11.1/group-management/group-dynasties.md), specify a
   structure for the Dynasty and click **Next**.

   By default, Directory Manager constructs a managerial Dynasty structure by first creating a
   Smart Group for all direct reports of the selected top-level manager and then continues down the
   Dynasty structure, creating separate Smart Groups for the direct reports to each sub-level
   manager. However, you can choose to create a single Smart Group for the direct reports of all
   levels of managers rather than creating separate groups.

5. The [Query Designer](/docs/directorymanager/11.1/group-management/overview.md) page displays the default query that
   Directory Manager will use to determine the Dynasty membership. This query returns all users with
   Exchange mailboxes, along with users and contacts with external email addresses, which are then
   grouped as per the managerial Dynasty structure.

   Review the query for selecting the group members, then click **Next.**

   For details, see the [ Smart Group page](/docs/directorymanager/11.1/group-management/smartgroup.md).

6. On the [Owners page](/docs/directorymanager/11.1/group-management/owners.md), specify primary and additional
   owners for the Dynasty.

   NOTE: (1) Additional owners are only set for the parent and are not inherited by child Dynasties
   during update.  
    (2) When a Smart Group Update job runs on a group, the notification behavior is as follows:  
    Even when the **Do not Notify** check box is selected, the additional owner will receive the
   notifications if the administrator has included its email address for job-specific
   notifications.  
    (3) If you have selected the **Set Manager as owner** option on the **Dynasty Options** page,
   the top manager would be displayed as the primary owner instead of the logged-in user.  
    In case you change the owner, the new recipient would be the Dynasty’s primary owner even if
   the **Set Manager as owner** check box is selected.

7. On the [Summary Page](/docs/directorymanager/11.1/user-management/summary.md), review the settings and
   then click Finish to complete the wizard.

# Create a Microsoft Entra ID Dynasty

The Directory Manager portal provides the following templates for creating Dynasties:

- Organizational – To create a Smart Group for every distinct company, then for each department
  within a company, and finally for each title in a department.
- Geographical – To create a Smart Group for every distinct country, then for each state within a
  country, and finally for each city within a state.
- Managerial – To either create separate Smart Groups for the direct reports of each manager or add
  all direct reports of the top manager and sub-level managers to a single group.
- Custom – To begin with a blank Dynasty and select your own group-by attributes.

These templates provide pre-defined grouping attributes for creating Dynasty levels. You can define
custom group-by attributes to expand the Dynasty levels to suit your organizational model. You can
also combine an external data source with the templates to provide extended criteria for determining
group membership.

NOTE: Settings related to Dynasty membership are configured at the identity store level.

NOTE: Do not move a Dynasty from one domain to another. Child Dynasties would get orphaned and
subsequently deleted.

NOTE: You cannot create mail-enabled Dynasties of the Office 365 group type in a Microsoft Entra ID
based identity store, since an Office 365 group cannot have groups as its members. Only non
mail-enabled Dynasties of the security group type are supported.

**Naming conventions for Child Dynasties**

Dynasty names help you group a parent Dynasty with its respective child Dynasties.

- For an Organizational/Geographical/Custom Dynasty:

  The name of a child Dynasty starts with the name of its parent Dynasty (unless you change the
  naming template for Dynasty children).

- For a Managerial Dynasty:

  By default, the naming template for its child Dynasties starts with "Direct reports of
  `manager`".

To modify the display name template for child Dynasties, see
[Modify alias and display name templates](/docs/directorymanager/11.1/group-management/group-dynasties.md#modify-alias-and-display-name-templates)topic
for additional information.

NOTE: In the Dynasty creation/update process, a child Dynasty will not be created if it bears the
same name as that of an existing object in the directory. For example, when you create a custom
Dynasty, test1, on one attribute, SamAccountName, it’s child Dynasties would be named as
test1-Robert, test1-John, and so on. However, if test1-Robert already exists as a user object,
Directory Manager will skip the test1-Robert child Dynasty and continue to create the rest of the
Dynasty.

## Create a Dynasty using the Organization/Geographical/Custom template

Follow the steps to create a dynasty using the Organization/Geographical/Custom template.

1. In the Directory Manager portal, click the **Create New** button in the left pane and select
   **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   NOTE: Pages and fields on the wizard may vary, since the administrator can customize the wizard
   by adding or removing pages and fields.

2. On the [Group Type page](/docs/directorymanager/11.1/group-management/grouptype.md), select the **Organizational Dynasty**,
   **Geographical Dynasty**, or **Custom Dynasty** option button and click **Next**.
3. On the [General - Microsoft Entra ID](/docs/directorymanager/11.1/group-management/general.md)page, specify basic information about the
   Dynasty.
4. On the [Dynasty Options page](/docs/directorymanager/11.1/group-management/group-dynasties.md), view or change the attributes in
   the **Attributes** area and click **Next**.

   Dynasties create Smart Groups for each distinct value of each listed attribute. Depending on the
   Dynasty template selected, the **Attributes** area displays the list of default attributes for
   the template; however, you can add and remove attributes. For the Custom template, no attribute
   is displayed.

5. The [Query Designer](/docs/directorymanager/11.1/group-management/overview.md) page displays the default query that
   Directory Manager will use to determine the Dynasty membership. The default query returns all
   users with Exchange mailboxes, along with users and contacts with external email addresses, which
   are then grouped by the specified group-by attributes.

   Review the query for selecting the group members, then click **Next**.

   For details, see the [ Smart Group page](/docs/directorymanager/11.1/group-management/smartgroup.md).

6. On the [Owners page](/docs/directorymanager/11.1/group-management/owners.md), specify primary and additional
   owners for the Dynasty.

   NOTE: (1) Additional owners are only set for the parent and are not inherited by child Dynasties
   during update.  
    (2) When a Smart Group Update job runs on a group, the notification behavior is as follows:  
    Even when the **Do not Notify** check box is selected, the additional owner will receive the
   notifications if the administrator has included its email address for job-specific
   notifications.

7. On the [Summary Page](/docs/directorymanager/11.1/user-management/summary.md), review the settings and
   then click **Finish** to complete the wizard.

## Create a Dynasty using the Managerial template

Follow the steps to create a dynasty using the Managerial template.

1. In the Directory Manager portal, click the **Create New** button in the left pane and select
   **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   NOTE: Pages and fields on the wizard may vary, since the administrator can customize the wizard
   by adding or removing pages and fields.

2. On the [Group Type page](/docs/directorymanager/11.1/group-management/grouptype.md), select the **Managerial Dynasty** option
   button and click **Next**.
3. On the [General - Microsoft Entra ID](/docs/directorymanager/11.1/group-management/general.md)page, specify basic information about the
   Dynasty.
4. On the [Dynasty Options page (Managerial Dynasty)](/docs/directorymanager/11.1/group-management/group-dynasties.md), specify a
   structure for the Dynasty and click **Next**.

   By default, Directory Manager constructs a managerial Dynasty structure by first creating a
   Smart Group for all direct reports of the selected top-level manager and then continues down the
   Dynasty structure, creating separate Smart Groups for the direct reports to each sub-level
   manager. However, you can choose to create a single Smart Group for the direct reports of all
   levels of managers rather than creating separate groups.

5. The [Query Designer](/docs/directorymanager/11.1/group-management/overview.md) page displays the default query that
   Directory Manager will use to determine the Dynasty membership. This query returns all users with
   Exchange mailboxes, along with users and contacts with external email addresses, which are then
   grouped as per the managerial Dynasty structure.

   Review the query for selecting the group members, then click **Next**.

   For details, see the [ Smart Group page](/docs/directorymanager/11.1/group-management/smartgroup.md) topic for
   additional information.

6. On the [Owners page](/docs/directorymanager/11.1/group-management/owners.md), specify primary and additional
   owners for the Dynasty.

   NOTE: (1) Additional owners are only set for the parent and are not inherited by child Dynasties
   during update.  
    (2) When a Smart Group Update job runs on a group, the notification behavior is as follows:  
    Even when the **Do not Notify** check box is selected, the additional owner will receive the
   notifications if the administrator has included its email address for job-specific
   notifications.  
    (3) If you have selected the **Set Manager as owner** option on the **Dynasty Options** page,
   the top manager would be displayed as the primary owner instead of the logged-in user.  
    In case you change the owner, the new recipient would be the Dynasty’s primary owner even if
   the **Set Manager as owner** check box is selected.

7. On the [Summary Page](/docs/directorymanager/11.1/user-management/summary.md), review the settings and
   then click **Finish** to complete the wizard.

# Import Additional Owners

The **Import Additional Owners** wizard enables you to specify additional owners for a group using
an external file.

The wizards search the directory for objects listed in the external file, and if found, adds them as
additional owners to the group.

Supported file formats are:

- Text (.txt)
- Comma Separated Value (.csv)
- Microsoft Excel (.xls and .xlsx)
- Extensible Markup Language (.xml)

## Import additional owners using a wizard

Use the **Import** button on the **Owners** tab of the New Group page and in group properties to
launch the **Import Additional Owners** wizard.

1. On the File page, click **Browse** to locate and select the file containing the data to upload.
2. Click the Up arrow to upload the file to the Directory Manager server for processing.
3. Click **Next**.
4. On the **Import** page, follow these steps:

   1. In the **Import Options** section, select this site/domain or the entire directory from the
      **Search** drop-down list.

      The wizard compares records in the import file with records in the selected domain or
      directory to update the group's membership.

   2. In the **Map Field** area, map a field in the source file (**Source Field**) with a directory
      attribute (**Destination**).

      The value in the selected source field is compared to the value of the selected destination
      field, and records with matching values are added to the group as members.

5. The **Preview** page displays the possible outcome of the import process based on the settings
   specified on the previous pages. The wizard processes the records from the source file by
   matching the values of the source and destination fields. Results displayed may include the
   following types of items:

   - **Resolved Items:**

     Shows all objects that will be successfully processed.

   - **Unresolved Items:**

     Shows objects that will not be processed because a matching object could not be found in the
     destination directory.

   - **Ambiguous Items:**

     Shows objects for which duplicate entries were found in the destination directory.

6. Click **Finish** to import the Additional Owners.

# Create Teams

Using Directory Manager portal, you can create Team in the identity store.

## Create Teams

Follow the steps to create Teams group.

Step 1 – In the Directory Manager portal, click the **Create New** button and select **Team**.

Step 2 – The **Create Group** wizard opens to the **Group Type** page.

Step 3 – Pages and fields on the Create Group wizard may vary, since the administrator can customize
the wizard by adding or removing pages and fields.

Step 4 – On the [Group Type page](/docs/directorymanager/11.1/group-management/grouptype.md), select the required group type and click
**Next**.

Step 5 – On the General page, specify basic information about the group.

Step 6 – If you select Static Group, specify members for the group on the
[Members page](/docs/directorymanager/11.1/group-management/managing-members.md).

Step 7 – If you select Smart Group or a Dynasty, review and modify the query for updating group
membership on the [ Smart Group page](/docs/directorymanager/11.1/group-management/smartgroup.md).

Step 8 – On the [Owners page](/docs/directorymanager/11.1/group-management/owners.md), specify primary and additional
owners for the group.

Step 9 – On the [Summary Page](/docs/directorymanager/11.1/user-management/summary.md), review the settings
and then click Finish to complete the wizard.
