---
title: "How does Browser Router function when Internet Explorer is removed from the machine?"
description: "How does Browser Router function when Internet Explorer is removed from the machine?"
sidebar_position: 260
---

# How does Browser Router function when Internet Explorer is removed from the machine?

First, if you still have IE in your environment, a good read would be this blog
entry: [https://techcommunity.microsoft.com/t5/windows-it-pro-blog/don-t-wait-for-june-15th-set-your-own-ie-retirement-date/ba-p/3298143](https://techcommunity.microsoft.com/t5/windows-it-pro-blog/don-t-wait-for-june-15th-set-your-own-ie-retirement-date/ba-p/3298143) 
The goal is to simulate your own "IE Death date" internally and do some small scale testing before
IE actually goes away.

From a Netwrix Endpoint Policy Manager (formerly PolicyPak) perspective, and specifically Endpoint
Policy Manager browser router, with IE going away/ gone, we have made some code changes to
compensate for it.

Once IE is removed (for real, or using the simulation in policy from the Microsoft article above...)
the follow behavior is now expected with latest CSE and Endpoint Policy Manager Browser Router:

1. WILDCARD route to IE, it will open in EDGE. (not IE in Edge)
2. URL route to IE, it will open in EDGE (not IE in Edge.)
3. URL + Browser mode route (WITH "Open in Standalone IE" or "Open as IE in edge tab" .. it will
   open in EDGE IN IE MODE.)

So if you are using Browser Router, we strongly recommend upgrading your CSEs to the latest version.

But if you cannot / don't want to, know that you will get unexpected routing behavior. If you're
using something BEFORE that, we cannot guarantee success when IE is finally removed on April 15,
2022


