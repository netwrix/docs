---
title: "Bookmarks"
description: "Bookmarks"
sidebar_position: 20
---

# Bookmarks

Firefox has two types of bookmarks:

- bookmarks menu
- bookmarks toolbar

In Figure 3, you can see the bookmarks in the menu system.

![bookmarks](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/bookmarks.webp)

Figure 3. Bookmarks in the menu system.

Bookmarks may also be stored in the toolbar by selecting "Bookmarks Toolbar," as seen in Figure 4.
When users do this, they can see bookmarks on the toolbar.

![bookmarks_1](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/bookmarks_1.webp)

Figure 4. Bookmarks in the toolbar.

Netwrix Endpoint Policy Manager (formerly PolicyPak) can manage bookmarks within Firefox, as shown
in Figure 5.

![bookmarks_2](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/bookmarks_2.webp)

Figure 5. Endpoint Policy Manager managing permissions within Firefox.

Video: To see a video of Endpoint Policy Manager managing bookmarks, go to
[http://www.policypak.com/video/endpointpolicymanager-manage-firefox-bookmarks.html](http://www.policypak.com/video/endpointpolicymanager-manage-firefox-bookmarks.html).

The format you need to specify is

`Folder\NameOfItem, URL, toolbar | menu,  add | remove`.

So, for example,

`Folder123\PolicyPak, http://policypak.com, toolbar, add `

would add policypak.com to the folder named Folder123 inside the toolbar.

`Folder123\PolicyPak, http://policypak.com, menu, add `

would add Endpoint Policy Manager to a folder named Folder123 inside the menu system.

`Folder789\Microsoft, http://microsoft.com, menu, delete `

would DELETE an entry named Microsoft within a folder named Folder789 inside the menu system.

Note that all bookmark items are merged with what is already on the system; if you have anything in
Group Policy that conflicts, then the Group Policy setting will win.

:::note
You must specify precisely the name and folder where items will be DELETED.

:::
