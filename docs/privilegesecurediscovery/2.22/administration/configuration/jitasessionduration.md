---
title: "Change the Default/Maximum JITA Session Duration"
description: "Change the Default/Maximum JITA Session Duration"
sidebar_position: 90
---

# Change the Default/Maximum JITA Session Duration

Change the Default/Maximum JITA Session Duration

# Change the Default/Maximum JITA Session Duration

This article covers how to change the default/maximum JITA session duration in Privilege Secure.
There is a setting in the web UI that changes both the default JITA session duration, which also
functions as the maximum JITA session duration that can be entered when using the Access System
button on the Grant Access page. The maximum time for this setting is 1440 minutes (1 day).

**NOTE:** Within an hour of expiration, JITA can still be extended, up to the maximum set here. 
Cumulatively, there is a 24 hour maximum for initial JITA session and extensions.

Navigate to **Configure** > **Server** > **Additional Options** > **Default/maximum JITA session
duration**.

![mceclip0.webp](/images/privilegesecure/4.2/discovery/admin/configuration/1500002908881_mceclip0.webp)

![mceclip1.webp](/images/privilegesecure/4.2/discovery/admin/configuration/1500002908881_mceclip1.webp)

There is no need to restart any services.
