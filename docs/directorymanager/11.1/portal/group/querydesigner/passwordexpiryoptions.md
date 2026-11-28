---
title: "Query Designer Password Expiry Options tab"
description: "Set the password age policy, expiration range, and warning emails for a Directory Manager password expiry group."
keywords:
  - password expiry group
  - Query Designer
  - expiration range policy
  - password expiry warning email
  - Smart Group
sidebar_position: 40
---

# Query Designer Password Expiry Options tab

The **Password Expiry Options** tab is available only for password expiry groups. You can create a password expiry group by selecting the **Password Expiry** group option on the Welcome page of the **Create Group** wizard.

A password expiry group is a Smart Group whose membership contains users whose identity store account passwords are approaching their expiry dates. Directory Manager notifies members of this group by email to reset their passwords. When they reset their passwords, Directory Manager automatically removes them from group membership.

On the **Password Expiry Options** tab of the Query Designer, you can define the password expiry policy for the group. Based on this policy and the users' PWDLASTSET attribute, Directory Manager creates this group with users whose passwords are about to expire.

When the group is updated, Directory Manager adds or removes users from the group and sends email notifications to all members.

You can also include disabled users and users whose passwords never expire in the password expiry group.

## Domain expiration policy

Specify the maximum password age. The default age is 42 days. This setting doesn't affect your domain security settings on the directory server.

## Expiration range policy

This policy defines when the user is added to the password expiry group. For example, take a domain security policy configured with a maximum password age of 30 days. Setting the expiration range policy to 10 days includes users who have passwords aged 20 days or older in the password expiry group.

### Include disabled users

Select this checkbox to include disabled user accounts in the new group.

### Include users whose password never expires

Select this checkbox to include users with the **Password never expires** setting enabled in group membership.

## Send email after update

Select this checkbox to send a password expiry warning email to group members each time group membership is updated, either manually or through a scheduled job.

This email contains a URL that redirects users to a Password Center portal for changing their identity store account passwords. The administrator specifies this URL while configuring an SMTP server for the identity store.

The **Send email after update** option is enabled after the group is created.

Warning emails aren't sent to group members (users) whose passwords are set to "never expire". Such users are included in group membership when you select the **Include users whose password never
expires** checkbox or add such users to the **Include** list on the [Query Designer - Include/Exclude tab](/docs/directorymanager/11.1/portal/group/querydesigner/includeexclude.md).

For warning emails to be sent, you must configure an SMTP server for the identity store.

## Preview

Use this button to preview results obtained with the current settings on all tabs of the **Query Designer** dialog box. This check confirms the accuracy of the data before you commit changes to the directory. The results appear on the following two tabs at the bottom of the dialog box:

- **Directory** tab – Displays the results for all the options set on all the tabs of the Query Designer dialog box.
- **Advanced** tab – Displays the results from the selected external data source when you click the Execute button on the Advanced tab of the dialog box.

## Display preferences

Set the attributes of the objects displayed on the **Directory** and **Advanced** tabs with the context (right-click) menu of each column header on the tab. The options are as follows.

| Column header's context menu option | Description |
| ----------------------------------- | ----------- |
| Size All Columns to Fit             | Sets the column size of each column to fit its content. |
| `<Attribute Name>`                  | The names of the attributes displayed on the tab. Clear the checkbox for an attribute to remove it from the **Directory** tab. |
| **More**                            | Select additional attributes to display on the tab. After adding attributes, re-launch the **Directory** tab to refresh the list of the attributes displayed. |

In addition to the column header display options, the **Directory** tab also provides object display options that are available when you right-click an object. The options are as follows.

| Object's context menu option | Description |
| ---------------------------- | ----------- |
| Add to Exclude               | Add the object to the Exclude list so that it can't be added to the group's membership. |
| Export                       | Export the selected object's information to a comma-separated value (CSV) or XML file. The export action exports only the attributes displayed on the tab. |
| Export All                   | Export the information of all objects on the **Directory** tab to a comma-separated value (CSV) or XML file. The export action exports only the attributes displayed on the tab. |

## Other buttons

**Preview**

Previews the results returned with the criteria specified on all tabs of the Query Designer dialog box. This check confirms the accuracy of the data before you commit changes to the directory.

**OK**

Saves settings and closes the dialog box.

**Cancel**

Discards settings and closes the dialog box.

**LDAP Query**

View the provider query in the LDAP Query box.
