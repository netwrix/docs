---
title: "Text Box Display Type"
description: "Text Box Display Type"
sidebar_position: 20
---

# Text Box Display Type

A text box display type can be used without customization, but you must customize it when you want
to:

- specify a default value for it
- use regular expressions to validate the data users enter in the text box
- force users to provide a unique value for the field

## What are Regular Expressions?

A regular expression is a pattern of text that consists of ordinary characters (for example, letters
a through z) and special characters, known as metacharacters. You can use regular expressions to
ensure that users enter data in an input field according to a standard pattern. For example, the
regular expression for a US phone number of the pattern: (555) 123-4567 will be: ^\(\d\d\d\)
\d\d\d-\d\d\d\d.

To learn about regular expressions and their syntax, see

- [Introduction to Regular Expressions](https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2010/28hw3sce(v%3dvs.100))
- [Regular Expression Syntax Reference](https://msdn.microsoft.com/en-us/library/ms840427.aspx)

## Predefined Text Box Display Types

A few text box display types used in the default portal template are:

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

## Define a Text Box Display Type

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to define a custom display type for it.  
   All identity stores associated with the portal are listed under **Design Settings**. You can
   design a different portal for each of these.
4. Click **Custom Display Types** in the left pane. The **Custom Display Types** page is displayed.
5. Click **Add** on the **Custom Display Types** tab.
6. On the **New Display Type** pane, enter a name for the display type in the **Name** box.  
   You cannot change the name of a custom display type once you have created it.
7. Select _Textbox_ in the **Type** drop-down list.
8. Specify a value in the **Default Value** box to set it as the default value for the text box.
   Users can modify this value in the portal.
9. In the **Regular Expression** box, type a regular expression to use for validating data that
   users enter in the text box using the portal. Leave this box blank if you do not want to apply a
   validation rule to the data.

    1. Click **Test Regular Expression** to check if the regular expression is valid.
    2. On the **Test Regular Expression** dialog box, type an example that satisfies the regular
       expression and click **Test**.

10. In the **Error Message** box, enter the text to be displayed as an error message when portal
    users enter data in the text box that does not conform to the regular expression.
11. You can place a real-time validation check to ensure that users enter a unique value for the
    field. Directory Manager can look up the value for uniqueness in the directory or an external
    data source. The portal prevents users from proceeding unless a unique value is provided.

    - Select the **Unique** check box to force the user to enter a value that is unique for the
      field (attribute) in the directory.
    - You can also use an external data source, such as an Excel file, to validate the uniqueness of
      the value in real time. Use an API to connect to the external data source. Select the
      **External Validation URL** check box and enter the URL of your API in the box.

    **Example**: Link this text box display type to the group name field on the Create New Group
    page. When a user enters a name for the group, the portal will look up this name for uniqueness
    in the directory/external data source in real time and display an error message if it is not
    unique.

12. Click **OK**.
13. Click **Save** on the **Custom Display Types** page.

### External API Reference

The external API for real-time validation should receive the following parameters:

| Parameter     | Description                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------- |
| objectType    | The type of object the user is creating or updating (for example, group, user)                |
| attributeName | The name of the attribute the user is updating (for example, name, first name, logon name)    |
| attributeName | The attribute value to be validated                                                           |
| objectID      | If an existing user is being updated, the ID of that user is sent; else it is an empty string |

The API returns the following parameters:

| Parameter | Description                                                                                                          |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| status    | Should be ‘true’ (when the attribute value is unique) or ‘false’ (when the attribute value is not unique).           |
| message   | (Optional) For the ‘false’ status, you can return an error message in this parameter, that is displayed to the user. |
| data      | Not in use                                                                                                           |

:::note
Data should be in JSON format.
:::
