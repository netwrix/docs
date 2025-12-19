---
title: "Display Type Categories"
description: "Display Type Categories"
sidebar_position: 40
---

# Display Type Categories

Using display types, you can publish fields in a Directory Manager portal to capture and view data.

A field can be anything from a text box to a drop-down list to a check box, depending on the display
type linked to it. You must also link each field to a schema attribute in the directory. Users can
use the fields in a portal to add and update values for the respective attributes.

See the [Design a Portal with Display Types](/docs/directorymanager/11.1/admincenter/applications/portal/displaytype/overview.md) topic fr additional information.

## Schema Attributes and Display Types

Each schema attribute requires a value of a certain type.

- Some attributes require a single string value.
  Example: Active Directory attributes _name_ and _sAMAccountName_
- Other attributes can accept multiple values.
  Example: Active Directory attribute _proxyAddress_
- Some attributes accept only one or more distinguished names (DN).
  Example: Active Directory attributes _members_ and _memberOf_
- Some attributes allow only Boolean values (true or false).
  Example: Active Directory attributes _hideDLMembership_ and _isDeleted_

To ensure that portal users update these attributes as supported by the directory, display types
play an important role. A display type enables you to define the user interface element to use for
an attribute in the portal (for example, text box, drop-down list, check box, etc.). This user
interface element must support the type of data that can be entered as the attribute value, so that
users enter valid data through the portal.

## Display Type Categories

Display types support almost all types of schema attributes, such as single-valued, multi-valued,
Boolean, and distinguished name. Based on their characteristics and customization options, display
types are divided into two categories:

- Basic display types
- Custom display types

### Basic Display Types

You can link a basic display type to a schema attribute straight away. Basic display types are:

- **Text box**

    Use it to collect and display a single value for an attribute. You can link it directly to a
    schema attribute. However, to apply additional rules to it, such as assigning a default value or
    implementing a regular expression to validate the data entered, you must create a custom display
    type from this basic type. See the [Text Box Display Type](/docs/directorymanager/11.1/admincenter/applications/portal/categories/textbox.md) topic.

- **Password**

    Use this display type with schema attributes that store confidential information. The user
    interface element is displayed as a text box in the portal with bullets or asterisks in place of
    text.

- **Multi-value**

    Use it for schema attributes that can accept multiple string values.
     A multi-value display type is displayed in the portal as:

    ![multi-value_display_type](/images/directorymanager/11.1/admincenter/portal/displaytype/multi-value_display_type.webp)

    Clicking **Add** launches a dialog box where users can add new values.

- **Check box**

    Use it for schema attributes that accept true or false values, such as the Active Directory
    attributes _reportToOwner_, _reportToOriginator_, and _oOFReplyToOriginator_.

- **DN**

    Use it for schema attributes that accept a single distinguished name for their value, such as
    the Active Directory attributes _Assistant_ and _altRecipient_. The user interface element for
    this display type appears as a button that launches the **Find** dialog box, where users can
    search and select objects. It is as:

    ![dn](/images/directorymanager/11.1/admincenter/portal/displaytype/dn.webp)

- **DNs**

    Use it for schema attributes that accept multiple distinguished names, for example, the Active
    Directory attributes _member_ and _memberOf_. The user interface element for this display type
    is as follows:

    ![multi-value_display_type](/images/directorymanager/11.1/admincenter/portal/displaytype/multi-value_display_type.webp)

    Clicking **Add** displays a quick search field along with an option to launch the **Find**
    dialog box where users can search and select the desired objects.

### Custom Display Types

Some display types cannot be linked to schema attributes straight away; they must be customized
first.

Display types that require customization are:

- Text box - you can use it directly with an attribute, but if you want to apply data validation
  checks to it, you must convert it to a custom display type.
- Drop-down list
- Linked-field drop-down list
- Image
- Grid
- Radio
- Multiline text box
- Multi-Valued Control
- Linked combo

Some applications of display type are:

- Define a simple text box type for a telephone number field and apply a validation rule so that it
  accepts phone numbers in US format only.
- Define a drop-down list display type containing a list of the departments in your organization.
- Create a linked field drop-down list type where selecting the office address auto populates the
  phone number and fax number.

The default portal template uses several predefined custom display types. See the
[Define Custom Display Types](/docs/directorymanager/11.1/admincenter/applications/portal/categories/custom.md) topic to add more display types as needed.

The **Custom Display Types** page in a portal’s design settings lists all the predefined custom
display types and any custom display types you may have added.
