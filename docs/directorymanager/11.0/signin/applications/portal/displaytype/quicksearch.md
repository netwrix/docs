---
title: "Customize Quick Search"
description: "Customize Quick Search"
sidebar_position: 30
---

# Customize Quick Search

In a GroupID portal, the quick search box is available at the top of each page. You can specify the
schema attributes that quick search runs on, and the objects (group, user, contact) that can be
searched. When a user enters a search string, the values of all specified attributes are matched to
return the results (allowed objects).

You can also specify a search operator that determines what part of the attribute value should match
the search string.

What do you want to do?

- [Specify Attributes for Quick Search](#specify-attributes-for-quick-search)
- [Change the Search Operator](#change-the-search-operator)
- [Specify Searchable Objects](#specify-searchable-objects)

## Specify Attributes for Quick Search

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.  
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Search Forms** in the left pane. Then click the **Quick Search Attributes** tab.
5. On the **Quick Search Attributes** tab, the **Name** column lists the schema attributes whose
   values will be matched when portal users perform a search using the quick search box.  
   Click **Add** to add an attribute to this list.
6. On the **Add Search Attribute** dialog box, select a schema attribute in the **Attribute**
   drop-down list and click **OK**.  
   The attribute is displayed in the **Name** column on the **Quick Search Attributes** tab.  
   To remove an attribute, click **Remove** for it.
7. Click **Save**.

## Change the Search Operator

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.  
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Search Forms** in the left pane. Then click the **Quick Search Attributes** tab.
5. In the **Quick Search Operator** drop-down list, select an option.

    - **Equal** - looks up the values of the attributes listed in the _Name_ column and returns
      records with values that exactly match the search string.
    - **Contains** - looks up the values of all attributes listed in the _Name_ column and returns
      records that contain the string anywhere in their values.
    - **Starts with** - looks up the values of the attributes listed in the _Name_ column and
      returns records with values starting with the search string.
    - **Ends with** - looks up the values of all attributes listed in the _Name_ column and returns
      records with values ending with the search string.

6. Click **Save**.

## Specify Searchable Objects

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.  
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Search Forms** in the left pane. Then click the **Quick Search Attributes** tab.
5. You can specify the object type(s) to be searched when users perform a search using the quick
   search function in the portal.  
   Select any or all three **User**, **Group**, and **Contact** check boxes next to **Quick Search
   Objects** to make that object type searchable in quick search.
6. Click **Save**.

**See Also**

- [Customize Search Forms](/docs/directorymanager/11.0/signin/applications/portal/displaytype/searchforms.md)
- [Customize Search Results](/docs/directorymanager/11.0/signin/applications/portal/displaytype/searchresults.md)
