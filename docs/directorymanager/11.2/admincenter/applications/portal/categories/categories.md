---
title: "Directory Manager Display Type Categories"
description: "Learn how basic and custom display types map to schema attributes so portal users can enter valid data in Directory Manager portal fields."
keywords:
  - display types
  - basic display types
  - display type categories
  - schema attributes
  - portal fields
sidebar_position: 40
---

# Directory Manager Display Type Categories

Display types publish fields in a Directory Manager portal to capture and view data.

A field can be a text box, a dropdown list, a checkbox, or another element, depending on the
display type linked to it. You must also link each field to a schema attribute in the directory.
Users can use the fields in a portal to add and update values for the respective attributes.

For more information, see the [Design a Directory Manager Portal with Display Types](/docs/directorymanager/11.2/admincenter/applications/portal/displaytype/overview.md) topic.

## Schema attributes and display types

Each schema attribute requires a value of a certain type.

- Some attributes require a single string value.
  Example: Active Directory attributes _name_ and _sAMAccountName_
- Other attributes can accept multiple values.
  Example: Active Directory attribute _proxyAddress_
- Some attributes accept only one or more distinguished names (DN).
  Example: Active Directory attributes _members_ and _memberOf_
- Some attributes allow only Boolean values (true or false).
  Example: Active Directory attributes _hideDLMembership_ and _isDeleted_

Display types help ensure that portal users update these attributes as the directory supports.
Use a display type to define the user interface element for an attribute in the portal, for example
a text box, dropdown list, or checkbox. This element must support the type of data that can be
entered as the attribute value, so that users enter valid data through the portal.

## Display type categories

Display types support almost all types of schema attributes, such as single-valued, multi-valued,
Boolean, and distinguished name. Based on their characteristics and customization options, display
types fall into two categories:

- Basic display types
- Custom display types

### Basic display types

You can link a basic display type to a schema attribute straight away. The basic display types are:

- **Text box**

    Use it to collect and display a single value for an attribute. You can link it directly to a
    schema attribute. To apply additional rules to it, such as assigning a default value or
    implementing a regular expression to validate the data entered, you must create a custom display
    type from this basic type. See the [Directory Manager Text Box Display Type](/docs/directorymanager/11.2/admincenter/applications/portal/categories/textbox.md) topic.

- **Password**

    Use this display type with schema attributes that store confidential information. The user
    interface element appears as a text box in the portal with bullets or asterisks in place of
    text.

- **Multi-value**

    Use it for schema attributes that can accept multiple string values. A multi-value display type
    appears in the portal as:

    ![Multi-value display type in the portal with an Add button](/images/directorymanager/11.2/admincenter/portal/displaytype/multi-value_display_type.webp)

    Clicking **Add** launches a dialog box where users can add new values.

- **Checkbox**

    Use it for schema attributes that accept true or false values, such as the Active Directory
    attributes _reportToOwner_, _reportToOriginator_, and _oOFReplyToOriginator_.

- **DN**

    Use it for schema attributes that accept a single distinguished name for their value, such as
    the Active Directory attributes _Assistant_ and _altRecipient_. The user interface element for
    this display type appears as a button that launches the **Find** dialog box, where users can
    search and select objects. It looks like this:

    ![DN display type button that opens the Find dialog box](/images/directorymanager/11.2/admincenter/portal/displaytype/dn.webp)

- **DNs**

    Use it for schema attributes that accept multiple distinguished names, for example, the Active
    Directory attributes _member_ and _memberOf_. The user interface element for this display type
    is as follows:

    ![DNs display type in the portal with an Add button](/images/directorymanager/11.2/admincenter/portal/displaytype/multi-value_display_type.webp)

    Clicking **Add** displays a quick search field along with an option to launch the **Find**
    dialog box where users can search and select the objects they need.

### Custom display types

Some display types can't be linked to schema attributes straight away. You must customize them
first.

The display types that require customization are:

- Text box - you can use it directly with an attribute, but if you want to apply data validation
  checks to it, you must convert it to a custom display type.
- Dropdown list
- Linked-field dropdown list
- Image
- Grid
- Radio
- Multiline text box
- Multi-Valued Control
- Linked combo

Some applications of custom display types are:

- Define a simple text box type for a telephone number field and apply a validation rule so that it
  accepts phone numbers in United States format only.
- Define a dropdown list display type containing a list of the departments in your organization.
- Create a linked field dropdown list type where selecting the office address autopopulates the
  phone number and fax number.

The default portal template uses several predefined custom display types. To add more display
types, see the
[Define Custom Display Types in Directory Manager](/docs/directorymanager/11.2/admincenter/applications/portal/categories/custom.md)
topic.

The **Custom Display Types** page in a portal’s design settings lists all the predefined custom
display types and any custom display types you added.
