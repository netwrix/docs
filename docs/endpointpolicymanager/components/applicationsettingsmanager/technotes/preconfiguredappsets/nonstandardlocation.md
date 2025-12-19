---
title: "Firefox: Is Endpoint Policy Manager compatible with Firefox when installed to non-standard (and portable) locations?"
description: "Firefox: Is Endpoint Policy Manager compatible with Firefox when installed to non-standard (and portable) locations?"
sidebar_position: 210
---

# Firefox: Is Endpoint Policy Manager compatible with Firefox when installed to non-standard (and portable) locations?

Netwrix Endpoint Policy Manager (formerly PolicyPak) Application Manager will apply settings and
keep them re-applying when Firefox launches, no matter where Firefox is installed or run from,
provided that Firefox stores its settings in Appdata.

If Firefox is writing to a location other than AppData, then Endpoint Policy Manager may not be able
to find the Firefox profile and then write to that location.

Meanwhile, PolicyPak Application Manager offers extra features for Firefox, like UI Lockdown and
enhanced support, like Certificates and Bookmarks, which only works when Firefox is properly
installed to Program Files and not anywhere else.

Therefore the most common cases and scenarios are:

- If you install Firefox properly (to Program Files), you can deliver settings AND perform UI
  lockdown.
- If they install Firefox to their own profile, you can deliver settings, but miss the opportunity
  to perform UI lockdown.
- If they run a portable version of Firefox which has no install AND stores nothing in the users'
  profile, you typically cannot deliver settings or perform UI lockdown.


