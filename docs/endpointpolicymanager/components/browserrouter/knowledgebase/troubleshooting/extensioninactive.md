---
title: "I see the Endpoint Policy Manager Browser Router Chrome Extension is being installed, but it's not active. What can I do?"
description: "I see the Endpoint Policy Manager Browser Router Chrome Extension is being installed, but it's not active. What can I do?"
sidebar_position: 130
---

# I see the Endpoint Policy Manager Browser Router Chrome Extension is being installed, but it's not active. What can I do?

From time to time it's possible that the Netwrix Endpoint Policy Manager (formerly PolicyPak)
Browser Router extension for Chrome will be installed, but not active, like in this example.

![489_1_dfg_950x593](/images/endpointpolicymanager/troubleshooting/browserrouter/chrome/489_1_dfg_950x593.webp)

This can occur if you are attempting to force deploy the extension via Group Policy or Endpoint
Policy Manager Application Manager or if there is some kind of error.

The first workaround to try is to rename the problematic extension folder:

i.e. `%LocalAppData%\Google\Chrome\User Data\Default\Extensions\fmbfiodledfjldlhiemaadmgppoeklbn`

Then close and relaunch Chrome, also check the Systray to ensure Chrome is not running in the
background, if it is then disable that option.

If that does not work then rename
the `%LocalAppData%\Google\Chrome\User Data\Default\Extensions `folder to reset the Chrome
extensions.

This should snap it back in place the next time Chrome re-launches.

As a last resort, if the above does not work you can rename the
`%LocalAppData%\Google\Chrome\User Data\Default `folder to reset Chrome and then close and relaunch
Chrome.


