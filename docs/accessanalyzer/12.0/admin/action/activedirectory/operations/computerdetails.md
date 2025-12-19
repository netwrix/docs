---
title: "Computer Details"
description: "Computer Details"
sidebar_position: 20
---

# Computer Details

Use the Computers Details page to select computer attributes to change.

![Active Directory Action Module Wizard Computer Details page](/images/accessanalyzer/12.0/admin/action/activedirectory/operations/computerdetails.webp)

Highlight the attribute to edit:

- Insert field – Use the drop-down list to select a field (column) from the source table. Then click
  the blue arrow to insert the item into the Value box. The executed action replaces the AD Object
  property with the specified value from the source table.
- Add Attribute – Adds a custom attribute to the Computer Details attribute list
- Remove Attribute – Removes a selected attribute Computer Details attribute list
- Edit Attribute – Click this icon to change the name of the selected custom attribute
- Import Attribute – Opens the Import Custom Attributes Import Wizard where one or more custom
  attributes can be imported. See the
  [Custom Attribute Import Wizard](#custom-attribute-import-wizard) topic for additional
  information.
- Value – This field contains selections from the Insert field. If the Manager attribute is
  selected, click the ellipsis (…) to access the Select User, Contact, or Group window to populate
  this field.
- Select the checkboxes next to the computer attributes to enable them for editing when running the
  action.

## Custom Attribute Import Wizard

The Custom Attributes Import Wizard is used to import a list of custom attributes. Follow the steps
to use the Custom Attributes Import Wizard.

**Step 1 –** On the Computer Details page of the Active Directory Action Module Wizard, click
**Import**. The Custom Attribute Import Wizard opens.

![Custom Attributes Import Wizard Credentials page](/images/accessanalyzer/12.0/admin/action/activedirectory/operations/credentials.webp)

**Step 2 –** On the Credentials page, identify a domain either by entering one manually or selecting
one from the **Domain Name** drop-down menu which displays a list of domains trusted by the one in
which the Access Analyzer Console server resides. Then set the credentials for reading the
attributes list from the domain:

- Authenticate as the logged in user – Applies the user account running Access Analyzer
- Use the following credentials to authenticate – Applies the account supplied in the **User Name**
  and **Password** fields.

**Step 3 –** Click **Next**.

![Custom Attributes Import Wizard Attributes page](/images/accessanalyzer/12.0/admin/action/activedirectory/operations/attributescomputer.webp)

**Step 4 –** The wizard populates available attributes from the domain specified on the Attributes
page. Expand the desired object class and select the checkboxes for the custom attributes to be
imported. Then click **Next**.

![Custom Attributes Import Wizard Completion page](/images/accessanalyzer/12.0/admin/action/activedirectory/operations/completionpage.webp)

**Step 5 –** On the Completion page, click **Finish**.

The selected attributes have been added to the attribute list on the Computer Details page.
