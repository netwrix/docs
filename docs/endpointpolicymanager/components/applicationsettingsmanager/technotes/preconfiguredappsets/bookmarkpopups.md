---
title: "Firefox: Why don't I see Bookmarks and Pop-Ups settings set when user has NEVER run Firefox before?"
description: "Firefox: Why don't I see Bookmarks and Pop-Ups settings set when user has NEVER run Firefox before?"
sidebar_position: 270
---

# Firefox: Why don't I see Bookmarks and Pop-Ups settings set when user has NEVER run Firefox before?

You might see that the first time a user has ever logged on to a machine, the Firefox settings are
not delivered as expected.

Or that some settings are present, yet others are not.

Some settings are stored in Firefox databases; and those databases aren't created until Firefox is
run the first time.  
And, Netwrix Endpoint Policy Manager (formerly PolicyPak) doesn't / cannot pre-create those
databases.  
Items that may not show up first time include Pop-Ups entries and bookmark settings.

So, Endpoint Policy Manager is delivering the settings, but then they are going no-where because
those databases don't exist until Firefox is run first time.

On the other hand, many other settings are stored in Firefox configuration files.

For simpler items, those files do exist (anytime Firefox is installed) and we are place some items
in there, and have them appear, even at first use.

Which is why you can see seeing mixed results: Some settings appear a-ok first time, others not
until Firefox is run two times.


