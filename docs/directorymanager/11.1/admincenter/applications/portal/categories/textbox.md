---
title: "Directory Manager Text Box Display Type"
description: "Customize a text box display type with a default value, regular expression validation, and unique-value checks for portal fields."
keywords:
  - text box display type
  - regular expression validation
  - unique value check
  - external validation URL
  - Directory Manager portal
sidebar_position: 20
---

# Directory Manager Text Box Display Type

You can use a text box display type without customization. Customize it to do any of the following:

- Specify a default value for it.
- Use regular expressions to validate the data users enter in the text box.
- Force users to provide a unique value for the field.

## Regular expressions

A regular expression is a pattern of text that consists of ordinary characters (such as letters a through z) and special characters, known as metacharacters. You can use regular expressions to ensure that users enter data in an input field according to a standard pattern. For example, the regular expression for a phone number with the pattern (555) 123-4567 is `^\(\d\d\d\) \d\d\d-\d\d\d\d`.

To learn about regular expressions and their syntax, see the following:

- [Introduction to Regular Expressions](https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2010/28hw3sce(v%3dvs.100))
- [Regular Expression Syntax Reference](https://msdn.microsoft.com/en-us/library/ms840427.aspx)

## Predefined text box display types

The default portal template uses a few text box display types:

<table>
	<thead>
    <tr>
        <th>&#160;</th>
        <th>Display Type Name</th>
        <th>Default Value</th>
        <th>Regular Expression</th>
        <th>Regex Example</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>1.</td>
            <td>maskPhoneUSwithExt</td>
            <td>None</td>
            <td>^\(\d\d\d\) \d\d\d-\d\d\d\d x\d\d\d$</td>
            <td>(555) 123-4567 x890</td>
        </tr>
        <tr>
            <td>2.</td>
            <td>SmtpEmail</td>
            <td>None</td>
            <td>^([a-zA-Z0-9_\-\.]+)@((\[[0-9]+\.[0-9]+\.[0-9]+\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]+|[0-9]+)(\]?)$</td>
            <td>`someone@netwrix.com`</td>
        </tr>
        <tr>
            <td>3.</td>
            <td>maskPhoneUS</td>
            <td>None</td>
            <td>^\(\d\d\d\) \d\d\d-\d\d\d\d$</td>
            <td class="TableStyle-Sb_Table_1-BodyD-Column1-Body1">(555) 123-4567</td>
        </tr>
        <tr>
            <td>4.</td>
            <td>maskEmailAddress</td>
            <td>None</td>
            <td>^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$</td>
            <td>`user@domain.com`</td>
        </tr>
        <tr>
            <td>5.</td>
            <td>maskZipCode</td>
            <td>None</td>
            <td>\d{5}(-\d{4})?</td>
            <td>NNNNN-NNNN</td>
        </tr>
    </tbody>
</table>

## Define a text box display type

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Under **Design Settings**, select an identity store to define a custom display type for it. **Design Settings** lists all identity stores associated with the portal. You can design a different portal for each of these.
4. Click **Custom Display Types** in the left pane. The **Custom Display Types** page is displayed.
5. Click **Add** on the **Custom Display Types** tab.
6. On the **New Display Type** pane, enter a name for the display type in the **Name** box. You can't change the name of a custom display type after you create it.
7. Select **Textbox** in the **Type** dropdown list.
8. In the **Default Value** box, specify a value to set as the default value for the text box. Users can modify this value in the portal.
9. In the **Regular Expression** box, enter a regular expression to validate the data that users enter in the text box in the portal. Leave this box blank if you don't want to apply a validation rule to the data.

    1. Click **Test Regular Expression** to check if the regular expression is valid.
    2. On the **Test Regular Expression** dialog box, enter an example that satisfies the regular expression and click **Test**.

10. In the **Error Message** box, enter the text to display as an error message when portal users enter data in the text box that doesn't conform to the regular expression.
11. Optionally, place a real-time validation check to ensure that users enter a unique value for the field. Directory Manager can look up the value for uniqueness in the directory or an external data source. The portal prevents users from proceeding unless a unique value is provided.

    - Select the **Unique** checkbox to force the user to enter a value that is unique for the field (attribute) in the directory.
    - To validate the uniqueness of the value in real time against an external data source, such as an Excel file, use an API to connect to the data source. Select the **External Validation URL** checkbox and enter the URL of your API in the box.

    **Example**: Link this text box display type to the group name field on the Create New Group page. When a user enters a name for the group, the portal looks up this name for uniqueness in the directory or external data source in real time and displays an error message if it isn't unique.

12. Click **OK**.
13. Click **Save** on the **Custom Display Types** page.

### External API reference

The external API for real-time validation should receive the following parameters:

| Parameter | Description |
| --------- | ----------- |
| objectType | The type of object the user is creating or updating (such as group or user) |
| attributeName | The name of the attribute the user is updating (such as name, first name, or logon name) |
| attributeName | The attribute value to be validated |
| objectID | If an existing user is being updated, the ID of that user is sent; otherwise, an empty string |

The API returns the following parameters:

| Parameter | Description |
| --------- | ----------- |
| status | Is ‘true’ (when the attribute value is unique) or ‘false’ (when the attribute value isn’t unique). |
| message | (Optional) For the ‘false’ status, you can return an error message in this parameter to display to the user. |
| data | Not in use |

:::note
Data must be in JSON format.
:::
