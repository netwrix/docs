---
title: "Manage Property Validation in the Directory Manager Mobile App"
description: "Add, edit, or remove the fields users and group owners see during profile validation and group attestation in the Directory Manager mobile app."
keywords:
  - mobile app property validation
  - add profile validation attribute
  - mobile app group attestation fields
  - property validation fields
sidebar_position: 50
---

# Manage Property Validation in the Directory Manager Mobile App

In Directory Manager, property validation applies to:

- Users
- Groups

#### Profile Validation for Users

See the
[Profile Validation for Users](/docs/directorymanager/11.0/signin/applications/portal/displaytype/propertyvalidation.md#profile-validation-for-users)
topic.

#### Property Validation for Groups

See the
[Property Validation for Groups](/docs/directorymanager/11.0/signin/applications/portal/displaytype/propertyvalidation.md#property-validation-for-groups)
topic.

What do you want to do?

- [Add a Property Validation Field](#add-a-property-validation-field)
- [Edit a Field](#edit-a-field)
- [Remove a Field](#remove-a-field)

## Add a Property Validation Field

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Settings**.
3. Select an identity store under **Design Settings** to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under **Design Settings**. You
   can design a different app for each of these.
4. Click **Property Validation** in the left pane.
5. In the **Select Directory Object** dropdown list on the **Property Validation** page, select:

    - **Group:** to add, edit, or remove attributes for group attestation.
    - **User:** to add, edit, or remove attributes for user profile validation.

    On selecting an option, the fields available for group attestation or profile validation in the
    app are listed under **Name**.

6. Click **Add** to add a new field. The **Add Profile Validation Attribute** pane opens.
7. Select an attribute from the **Field** dropdown list.
8. In the **Display Name** box, specify a name to use as the field's label on the Attest
   Group/Validate Profile page of the app.
9. In the **Display Type** dropdown list, select a display type for rendering the attribute (field)
   in the app.
10. In the **Visibility Level** dropdown list, select a security role. The field is visible
    to users of this role and roles with a priority value higher than this role. See
    [Priority](/docs/directorymanager/11.0/signin/securityrole/manage.md).  
    Select _Never_ to hide the field from all users.
11. Click **Advanced options** to enter further details for the field.
12. As with visibility level, the field is visible to members of the selected role and
    roles with a priority value higher than the selected role.  
    In the **Exclude Roles** area, select the check boxes for the higher priority roles you want to
    hide the field from.
13. In the **ToolTip Text** box, enter the help text to appear when a user hovers the mouse over the
    field.
14. In the **Max Length** box, enter a number that represents the maximum number of characters that
    users can enter as the value for the field. Entering _0_ allows an unlimited number
    of characters.
15. Select the **Is Required** checkbox to force users to provide a value for the field.
16. Select the **Is Read Only** checkbox to make the field read-only.
17. Click **OK**.
18. Click **Save**.

## Edit a Field

You can change the following for a field available in the app for group attestation or user profile
validation:

- The attribute associated with the field
- The display name (the field is displayed with this label in the app)
- The display type used to render the field in the app
- Visibility level
- Tooltip
- The maximum number of characters that a user can enter as the value for the field
- Whether the field is editable or read-only
- Whether users must provide a value for the field

**To update a field:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Settings**.
3. Select an identity store under **Design Settings** to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under **Design Settings**. You
   can design a different app for each of these.
4. Click **Property Validation** in the left pane.
5. In the **Select Directory Object** dropdown list on the **Property Validation** page, select:

    - **Group:** to update a group attestation field.
    - **User:** to update a user profile validation field.

6. In the **Name** area, click **Edit** for a field.
7. Modify the required information on the **Edit Profile Validation Attribute** pane. Follow the steps in
   the [Add a Property Validation Field](#add-a-property-validation-field) topic, beginning at
   step 7.

## Remove a Field

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Settings**.
3. Select an identity store under **Design Settings** to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under **Design Settings**. You
   can design a different app for each of these.
4. Click **Property Validation** in the left pane.
5. In the **Select Directory Object** dropdown list on the **Property Validation** page, select:

    - **Group:** to remove a field from the Attest Group page in the app.
    - **User:** to remove a field from the Validate Profile page in the app.

6. In the **Name** area, click **Remove** for a field to remove it.
7. Click **Save**.

**See Also**

- [Directory Manager Mobile Service Overview](/docs/directorymanager/11.0/signin/service/mobileservice/overview.md)
- [Design Settings for the Mobile Service](/docs/directorymanager/11.0/signin/service/mobileservice/design/overview.md)
