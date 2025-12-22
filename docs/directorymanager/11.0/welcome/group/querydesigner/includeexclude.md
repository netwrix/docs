---
title: "Query Designer - Include/Exclude tab"
description: "Query Designer - Include/Exclude tab"
sidebar_position: 20
---

# Query Designer - Include/Exclude tab

Use this tab to include or exclude an object from group membership, regardless of whether it is
returned by the query. The Include and Exclude lists affect group membership at two points in the
update process:

- **Immediately** - When you close the Query Designer dialog box, the GroupID portal adds the
  objects in the Include list to the group membership and removes the objects in the Exclude list
  from the group membership. If you have removed objects from the Include list, the group’s
  membership is updated immediately. However, if you have removed objects from the Exclude list, the
  group’s membership is updated only by manual update or by a scheduled job.
- **At group membership update** - When the group membership is updated using a scheduled job or the
  Update command, GroupID obtains the query results, adds the objects to include, and then removes
  the objects to exclude.

NOTE: For best performance, use query criteria to include or exclude objects as opposed to
statically selecting the objects using this tab.

**Include**

Displays the list of objects to include in group membership. The list also displays the objects that
are imported to the membership of this group using the portal's import feature. Use the **Add** and
**Remove** buttons to modify this list.

**Exclude**

Displays the list of objects to exclude from group membership. Use the **Add** and **Remove**
buttons to modify this list.

**Preview**

Enables you to preview the results returned with the criteria specified on all tabs of the Query
Designer dialog box. This is a check to ensure the accuracy of data before changes are committed to
the directory.

**OK**

Saves settings and closes the dialog box.

**Cancel**

Discards settings and closes the dialog box.

**LDAP Query**

View the provider query in the LDAP Query box.

**See Also**

- [Query Designer](/docs/directorymanager/11.0/welcome/group/querydesigner/overview.md)
