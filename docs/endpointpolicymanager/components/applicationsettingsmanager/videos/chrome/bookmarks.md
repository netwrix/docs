---
title: "Manage Google Chrome Bookmarks"
description: "Manage Google Chrome Bookmarks"
sidebar_position: 30
---
# Manage Google Chrome Bookmarks

Using Netwrix Endpoint Policy Manager (formerly PolicyPak)'s pre-configured PAK for Google Chrome we
can deliver Chrome bookmarks.

- Launch Google Chrome PAK properties
- Select Extras tab and find an option Managed Bookmarks

  ![491_1_gg_900x644](/images/endpointpolicymanager/video/applicationsettings/chrome/491_1_gg_900x644.webp)

- Insert string as following. Change the URL and Name to reflect your required bookmarks.

  ```
  [ { "name": "GP Answers", "url": "gpanswer.com" }, { "name": "PolicyPak", "url": 
  "policypak.com" }, { "name": "Chrome links", "children": [ { "name": "Chromium", 
  "url": "chromium.org" }, { "name": "List of Policies", "url": 
  "http://www.chromium.org/administrators/policy-list-3" } ] } ]
  ```

More Information: Available on this link:
[https://www.chromium.org/administrators/complex-policies-on-windows](https://www.chromium.org/administrators/complex-policies-on-windows)


