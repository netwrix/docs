---
title: "Firefox AppSet"
description: "Firefox AppSet"
sidebar_position: 90
---

# Firefox AppSet

This document will help you to understand how to use the AppSet named "Mozilla Firefox 23.0". This
AppSet works for Firefox 23 and later but only works with Firefox ESR, and not the regular version.
For more details on this see:
[https://www.policypak.com/pp-blog/policypak-will-soon-only-support-firefox-esr](https://www.policypak.com/pp-blog/endpointpolicymanager-will-soon-only-support-firefox-esr)

Only use this document after you have read and worked through the Application Settings Manager documentation
and have successfully tested "Winzip 14," or an example application. Some features are only
available when you have a Netwrix Endpoint Policy Manager (formerly PolicyPak) client-side extension
(CSE) which supports the feature. Inside the AppSet, we've noted when a feature requires a specific
CSE version.

:::note
The Endpoint Policy Manager "About Config" AppSets are still valid and available and
should be used for settings within Firefox's About:config.
:::


Additionally, if you were using any of the other main Firefox AppSets created by Endpoint Policy
Manager, those are now deprecated and are no longer to be used. These AppSets include:

- Mozilla Firefox 21 AppSet
- Mozilla Firefox ESR 24/24.1 AppSet
- Mozilla Firefox ESR 17 AppSet
- Mozilla Firefox Plug-In Example AppSet

For information on how to migrate from any of these old Firefox AppSets to the Firefox 23 AppSet,
see the section title "Migrating to the Firefox 23 AppSet" in this document.

This AppSet is no different than other AppSets, in that it can be placed into Local, Shared or
Central storage. (See the Application Settings Manager documentation for details.) Once placed into the
storage location, it will be available as seen In the figure shown.

![about_this_document_and_the](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/about_this_document_and_the.webp)

The figure shown. The Endpoint Policy Manager Mozilla Firefox Pak.

The AppSet may be used on the User or Computer side just like all other AppSets. However, Firefox
lockdown features are ONLY available on the COMPUTER side, and therefore we recommend using the
Firefox AppSet on the Computer side.



