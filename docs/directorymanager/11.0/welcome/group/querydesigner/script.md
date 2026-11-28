---
title: "Query Designer Script tab"
description: "View, compile, and check references for the script that manipulates group membership and Query Designer attributes."
keywords:
  - Query Designer
  - group script
  - compile script
  - script references
  - Smart Group
sidebar_position: 50
---

# Query Designer Script tab

This tab is read-only and displays any script that has been added for the group. The scripting
feature lets administrators manipulate group memberships and the Query Designer dialog
attributes (except for Include and Exclude attributes).

If no script has been added for the group, the box on this tab is blank.

**Load Default Script**

Displays the script based on the query set by the user.

**Compile Script**

Compile the script to determine whether any errors would prevent the code from loading or
executing. Compiling your script verifies that the code is free of syntax errors, but it doesn't
guarantee that the code is free of logical errors.

**References**

Displays the script reference. A script references file contains information about the run-time
requirements of a library or component, such as which files are needed, how they are to be
registered, and where on the host machine they should be installed.

**Preview**

Preview the results returned with the criteria specified on all tabs of the Query Designer dialog
box. This checks the accuracy of data before you commit changes to the directory.

**OK**

Saves settings and closes the dialog box.

**Cancel**

Discards settings and closes the dialog box.

**LDAP Query**

View the provider query in the LDAP Query box.

**See Also**

- [Query Designer in the GroupID portal](/docs/directorymanager/11.0/welcome/group/querydesigner/overview.md)
