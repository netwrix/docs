---
title: "Filter Criteria tab"
description: "Query Designer - Filter Criteria tab"
sidebar_position: 10
---

# Filter Criteria tab

Use this tab to add custom criteria to your query that don't fit any of the categories represented
on other tabs of the Query Designer dialog box. For example, you can add criteria to retrieve all
directory users who live in Houston and have a fax number. You can also apply logical operators
(AND, OR) to your custom query to achieve the most accurate results.

If the administrator in your role's Query Designer policy has defined a default filter criteria,
that filter criteria is displayed on this tab. You can view and copy the query using the **View
Query** button. See the
[Specify a Default Filter Criteria](/docs/directorymanager/11.1/admincenter/securityrole/policy/querydesigner.md#specify-a-default-filter-criteria)
section of the [ Query Designer Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/querydesigner.md)
topic.

The default criteria is part of the policy; therefore, in Directory Manager portal it is visible to
the role members only.

Let's say the administrator has defined the following default criteria in the policy:

**department is exactly HR**

You can add another row of filter criteria in the portal query designer window, if need be.

**Select Attribute**

By default, this is the only list displayed on the tab. It displays all or specific schema and
Exchange attributes, depending on what the GroupID administrator has configured.

Select an attribute to be searched. For example, to search for users who live in the city of
Houston, select the City attribute from this list.

**Contains**

From here, select the condition that identifies search results. The following table lists the
available conditions:

:::note
Depending on configurations made by the GroupID administrator for the portal, all of the
following or specific conditions will be displayed in the list.
:::


The condition list for query based searches may vary.

| Condition           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contains            | Returns everything that contains the value. NOTE: This is resource-intensive for the directory server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Doesn't End With    | Returns everything that doesn't end with the value. NOTE: This is resource-intensive for the directory server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Doesn't Start With  | Returns everything that doesn't start with the value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Ends With           | Returns everything that ends with the value. ( NOTE: This is resource-intensive for the directory server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Greater Or Equal    | Returns everything with a value greater than or equal to the given value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Is Exactly          | Returns everything that matches the value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Isn't               | Returns everything that doesn't match the value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Less Or Equal       | Returns everything with a value less than or equal to the given value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Not Contain         | Returns everything that doesn't contain the value. NOTE: This is resource-intensive for the directory server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Not Present         | Returns everything that doesn't have the specified value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Present             | Returns everything that has the value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Starts With         | Returns everything that starts with the value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| All Flags On        | Performs bit-wise comparison to find objects that have all the specific flags set for the attribute according to the given value. The value must be a decimal number; it can't be a hexadecimal number or a constant name. For example, to search all users who don't need a password (decimal value of PASSWD_NOTREQD flag = 32) and whom passwords never expires (decimal value of DONT_EXPIRE_PASSWORD flag = 65536), set the value of UserAccessControl's attribute against this condition to 65568 (65536 + 32). See the [Use the UserAccountControl flags to manipulate user account properties](http://support.microsoft.com/kb/305144) article for additional information.  |
| All Flags Off       | Performs bit-wise comparison to find objects that have all the specific flags not set for the attribute according to the given value. The value must be a decimal number; it can't be a hexadecimal number or a constant name. For example, to search all users which are neither disabled (decimal value of ACCOUNTDISABLE flag =2) nor locked out (decimal value of LOCKOUT flag = 16), set the value of UserAccessControl's attribute against this condition to 18 (2 + 16). See the [Use the UserAccountControl flags to manipulate user account properties](http://support.microsoft.com/kb/305144) article for additional information.                                         |
| Any Flag On         | Performs bit-wise comparison to find objects that have any of the specific flag set for the attribute according to the given value. The value must be a decimal number; it can't be a hexadecimal number or a constant name. For example, to search all users who don't need a password (decimal value of PASSWD_NOTREQD flag = 32) or whom passwords never expires (decimal value of DONT_EXPIRE_PASSWORD flag = 65536), set the value of UserAccessControl's attribute against this condition to 65568 (65536 + 32). See the [Use the UserAccountControl flags to manipulate user account properties](http://support.microsoft.com/kb/305144) article for additional information. |
| Any Flag Off        | Performs bit-wise comparison to find objects that have any of the specific flag not set for the attribute according to the given value. The value must be a decimal number; it can't be a hexadecimal number or a constant name. For example, to search all users which are either disabled (decimal value of ACCOUNTDISABLE flag =2) or locked out (decimal value of LOCKOUT flag = 16), set the value of UserAccessControl's attribute against this condition to 18 (2 + 16). See the [Use the UserAccountControl flags to manipulate user account properties](http://support.microsoft.com/kb/305144) article for additional information.                                         |
| Chain Match         | Limited to the attributes of DN (distinguished name) type only. This is a special extended filter that walks the chain of ancestry in objects all the way to the root until it finds a match. For example, you can use this filter with the **ManagedBy** attribute to find all the groups for which the selected user is a direct or indirect owner.                                                                                                                                                                                                                                                                                                                                 |

**Value**

Specify a value for the attribute. The query will return results considering the specified criteria
(attribute, condition, value).

For some operators, the Value box isn't available, as in the case of Present or Not Present. This
happens when the operators aren't comparison operators. They only check whether the value for the
selected field exists and return either TRUE or FALSE.

**AND**

Click this button after selecting two or more records to insert a logical AND to the selected
criteria.

To select a record, click the arrow icon next to it and click **Select Row**.

**OR**

Click this button after selecting two or more records to insert a logical OR to the selected
criteria.

To select a record, click the arrow icon next to it and click **Select Row**.

**Clear**

Use this button to clear the given criteria.

**Preview**

You can preview the results returned with the criteria specified on all tabs of the Query Designer dialog box. This is a check to ensure the accuracy of data before you commit changes to the directory.

**OK**

Saves settings and closes the dialog box.

**Cancel**

Discards settings and closes the dialog box.

**LDAP Query**

View the provider query in the LDAP Query box.
