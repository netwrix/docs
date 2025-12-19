---
title: "Manage Property Validation Attributes"
description: "Manage Property Validation Attributes"
sidebar_position: 110
---

# Manage Property Validation Attributes

In Directory Manager, property validation applies to:

- Users
- Groups

### Profile Validation for Users

Profile validation is designed to ensure the accuracy of users’ information in the directory. It
applies to users who are members of the group specified for profile validation in an identity store.
These users must verify and update their directory profile information at a set frequency using the
portal.

While validating his or her profile, a user can:

- Update his or her directory profile information
- Change his or her primary manager
- Transfer his or her direct reports to another manager
- Terminate his or her direct reports

You can specify the schema attributes (fields) for user profile validation. These attributes
(fields) are displayed on the **Validate Profile Properties** window of the portal, where users can
validate and update the values for these attributes.

:::note
A few fields for profile validation are specified in the default portal template. You can add
more fields, edit the existing fields, or remove them. However, the **My Direct Reports** field can
neither be edited nor removed.
:::


### Property Validation for Groups

The Directory Manager administrator can enforce group owners to review and validate the attributes
and membership of an expiring group before renewing it. See the
[Enable Group Attestation](/docs/directorymanager/11.1/admincenter/identitystore/configure/grouplifecycle.md#enable-group-attestation)
topic.

While attesting a group in the portal, the owner can:

- Update a few attributes, such as the group’s display name, expiration policy, security type, etc.
- Verify the group’s membership and inactivate undesired members. Inactive members are removed from
  group membership instantly or after x number of days, depending on the configurations made by the
  administrator.

Group attestation applies to expiring groups with an expiry policy other than ‘never expire’.

You can specify the schema attributes (fields) for group attestation. These attributes (fields) are
displayed on the **Attest & Renew Group** wizard in the portal, where group owners can validate and
update the values for these attributes.

:::note
A few fields for group attestation are specified in the default portal template. You can add
more fields, edit the existing fields, or remove them. However, the _Members_ grid can neither be
edited nor removed.
:::


**What do you want to do?**

- Add a Property Validation Field
- Update a Field
- Remove a Field

## Add a Property Validation Field

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.  
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Property Validation** in the left pane. The **Property Validation** page is displayed.
5. In the **Select Directory Object** drop-down list, select:

    - _Group:_ to add, edit, or remove attributes for group attestation.
    - _User:_ to add, edit, or remove attributes for user profile validation.

    On selecting an option, the fields available for group attestation/profile validation in the
    portal are listed under **Name**.

6. Click **Add** to specify a new attribute (field) for group attestation/profile validation.  
   The **Add Profile Validation Attribute** pane is displayed.
7. Select an attribute from the **Field** drop-down list.
8. In the **Display Name** box, specify a name to use as the field’s label on the Attest & Renew
   Group wizard/Validate Profile Properties window of the portal.
9. Use the **Display Type** drop-down list to specify the display type to use for rendering the
   attribute in the portal. The list contains basic display types and custom display types defined
   on the **Custom Display Types** page. See the
   [Display Type Categories](/docs/directorymanager/11.1/admincenter/applications/portal/categories/categories.md) topic.
10. In the **Visibility Level** drop-down list, select a security role. The field would be visible
    to users of this role and roles with a priority value higher than this role. See
    [Priority](/docs/directorymanager/11.1/admincenter/securityrole/manage.md).  
    Select _Never_ to hide the field from all users.
11. As mentioned for visibility level, the field is visible to members of the selected role and
    roles with a priority value higher than the selected role.  
    In the **Exclude Roles** area, select the check boxes for the higher priority role(s) you want
    to hide the field from.
12. In the **ToolTip Text** box, enter the text to display when a user hovers the mouse over the
    field.
13. In the **Max Length** box, enter a number that represents the maximum number of characters that
    users can enter as value for the field. Entering _0_ indicates that the field can accept an
    unlimited number of characters for its value.
14. Select the **Is Required** check box to make it mandatory for users to provide a value for the
    field.
15. Select the **Is Read Only** check box to make the field read-only.
16. Select the **Filter Bad Words** check box to ensure that users do not enter any bad word in this
    field.  
    A value entered for the field is checked against the words listed on the **Bad Words List**
    page. Matched values cannot be saved. See the [Manage the Bad Words List](/docs/directorymanager/11.1/admincenter/applications/portal/displaytype/badwords.md) topic.
17. The **Image Attribute** list is available when ‘DN’ is selected as the display type. This list
    supports ‘thumbnailPhoto’ as its value.

    - Select the ‘thumbnailPhoto’ attribute in the **Image Attribute** drop-down list when you want
      to auto upload an image for the field. Let’s assume you apply this setting while defining the
      _Primary Manager_ field on the _Validate Profile Properties_ window. In the portal, the
      primary manager's image will be displayed alongside his or her name on the _Validate Profile
      Properties_ window.  
      Note that for the image to display, the ‘thumbnailPhoto’ attribute must have a value stored;
      in case of no value, an image placeholder is displayed.
    - If you do not want to auto upload an image for the field, clear the value in the **Image
      Attribute** box.

18. Click **OK**.
19. Click **Save** on the **Property Validation** page.

## Update a Field

You can change the following for a field available in the portal for group attestation or user
profile validation:

- The attribute mapped to the field
- The display name (the field is displayed with this label in the portal)
- The display type used to render the field in the portal
- Visibility level
- Tooltip

The following field properties vary from field to field. You can:

- Specify the maximum characters that a user can enter as value for the field
- Whether to auto upload an image with the field
- Make the field editable or read–only
- Make it optional or mandatory for users to provide a value for the field
- Prevent users from using certain words as value for the field

**To update field properties:**

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.  
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Property Validation** in the left pane.
5. On the **Property Validation** page, select _Group_ or _User_ in the **Select Directory Object**
   drop-down list.

    - _Group:_ to update a field for group attestation
    - _User:_ to update a field for user profile validation

6. In the **Name** area, click **Edit** for a field.
7. On the **Edit Profile Validation Attribute** pane, update the required information. Follow steps
   7-19 in the Add a Property Validation Field topic for help.

## Remove a Field

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.  
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Property Validation** in the left pane.
5. On the **Property Validation** page, select _Group_ or _User_ in the **Select Directory Object**
   drop-down list.

    - _Group:_ to remove a field from the **Attest & Renew Group** wizard in the portal.
    - _User:_ to remove a field from the **Validate Profile Properties** window in the portal.

6. In the **Name** area, click **Remove** for a field to remove it.
7. Click **Save**.