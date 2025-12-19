---
title: "Manage Search Attributes"
description: "Manage Search Attributes"
sidebar_position: 10
---

# Manage Search Attributes

In the GroupID mobile app, users can search for directory objects (groups, users, contacts) in an
identity store. You can specify the schema attributes that search is performed on. When a user
enters a search string, the values of the specified attributes are matched to return the results.

You can also specify a search operator that determines what part of the attribute value should match
the search string.

What do you want to do?

- [Specify Search Attributes](#specify-search-attributes)

## Specify Search Attributes

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Settings**.
3. Select an identity store under **Design Settings** to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under **Design Settings**. You
   can design a different app for each of these.
4. Click **Search Forms** in the left pane.
5. On the **Search Forms** page, click the **Quick Search Attributes** tab.
6. On the **Quick Search Attributes** tab, the **Name** column lists the schema attributes whose
   values will be matched when a user enters a search string in the app's directory search box.
   Click **Add** to add an attribute to this list.
7. On the **Add Search Attribute** dialog box, select a schema attribute in the **Attribute**
   drop-down list and click **OK**.  
   The attribute is displayed in the **Name** column on the **Quick Search Attributes** tab.  
   To remove an attribute, click **Remove** for it.
8. Click **Save**.

To specify an operator:

1. In the **Quick Search Operator** drop-down list on the **Quick Search Attributes** tab, select an
   option.

    - **Equal** - looks up the values of the attributes listed in the **Name** column and returns
      records with values exactly matching the search string.
    - **Contains** - looks up the values of the attributes listed in the **Name** column and returns
      records that contain the string anywhere in their values.
    - **Starts with** - looks up the values of the attributes listed in the **Name** column and
      returns records with values starting with the search string.
    - **Ends with** - looks up the values of the attributes listed in the Name column and returns
      records with values ending with the search string.

2. Click **Save**.

**See Also**

- [Mobile Service](/docs/directorymanager/11.0/signin/service/mobileservice/overview.md)
- [Design Settings](/docs/directorymanager/11.0/signin/service/mobileservice/design/overview.md)
