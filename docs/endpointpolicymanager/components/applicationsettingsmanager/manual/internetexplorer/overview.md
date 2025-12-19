---
title: "Internet Explorer AppSet"
description: "Internet Explorer AppSet"
sidebar_position: 100
---

# Internet Explorer AppSet

This document will help you to understand how to use the AppSet named "Microsoft Internet Explorer 8
and Later for Windows 7 and Later" (IE AppSet).

:::note
There are also some older IE AppSets, which should no longer be used.
:::


This AppSet has some special super powers that you won't find in other AppSets. These super powers
require that the PolicyPak Application Settings Manager CSE version 707 or later be installed on the
client. Only use this document after you have already read and worked through the Application
Settings Manager documentation and have successfully tested "Winzip 14" or an example application. The IE AppSet
is not any different, from a supportability perspective, from other AppSets. For more information
about PolicyPak's support for AppSets, see the PolicyPak EULA.

This AppSet is no different than other AppSets, in that it can be placed into Local, Shared, or
Central storage. (See the Application Settings Manager documentation for details.) Once placed into the
storage location, it will be available under the Application Settings Manager, as shown In the figure shown.

![about_this_document_and_the](/images/endpointpolicymanager/applicationsettings/preconfigured/internetexplorer/about_this_document_and_the.webp)

The figure shown. The IE AppSet.

The AppSet may be used on the User or Computer side just like all other AppSets. However, this
AppSet is unique for several reasons:

- Its name is "Microsoft Internet Explorer 8 and Later for Windows 7 and Later," which means that it
  will work for IE 8, 9, 10, and 11 when the machine is Windows 7, Windows 8, or Windows 8.1. It
  will even work on a server.
- This AppSet uses some special data types which can be seen if you open the AppSet using the
  PolicyPak DesignStudio (advanced).

Video: To get started with the IE AppSet, use this video:
[https://www.policypak.com/video/endpointpolicymanager-manage-internet-explorer-getting-started.html](http://www.policypak.com/video/endpointpolicymanager-manage-internet-explorer-getting-started.html)
