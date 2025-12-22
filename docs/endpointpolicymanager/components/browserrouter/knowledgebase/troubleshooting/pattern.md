---
title: "Browser router doesn't seem to work when I use a pattern, and the URL has multiple redirects."
description: "Browser router doesn't seem to work when I use a pattern, and the URL has multiple redirects."
sidebar_position: 100
---

# Browser router doesn't seem to work when I use a pattern, and the URL has multiple redirects.

Our suggestion would be NOT to make Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser
Router patterns for URLs which go "in the middle of being redirected".

We cannot support these URLs in some browsers (e.g. in IE) and it cannot be fixed.

Our suggestion is to add PPBR pattern for a FIRST URL expected in redirects chain, or to the LAST
URL.

For example: if user navigates `www.abc.com` in IE, and he is redirected to `www.def.com` and then
to `www.ghi.com` .. this MIGHT work in SOME browsers, but not others.

We suggest you pick EITHER `"*abc* -> Chrome"` (example) or `"*ghi* -> Chrome"` (example).

But AVOID following pattern: `"*def* -> Chrome" `which is in the MIDDLE of the redirect and not
expected to work.


