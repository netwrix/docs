---
title: "How are URLs evaluated within Endpoint Policy Manager Java Rules Manager?"
description: "How are URLs evaluated within Endpoint Policy Manager Java Rules Manager?"
sidebar_position: 40
---

# How are URLs evaluated within Endpoint Policy Manager Java Rules Manager?

Java Rules Manager requires exact matching::

- HTTP vs HTTPS and
- URL.

Beyond that, there are some rules it follows. Here's an example:

If you add `https://oracle.systems.private` in the rules manager, it will also apply for
url `https://oracle.systems.private/xyz`.

But it does not work the other way round: if you make `https://oracle.systems.private/xyz` the rule,
then `https://oracle.systems.private` is not affected.

This paragraph from the Java Deployment Rule's documentation explains this in more detail:

If provided, then the beginning of the paths must match exactly. If the location attribute does not
contain a path, then all paths from the host are considered a match. For example,
host.example.com/samples matches host.example.com/samples and host.example.com/samples/test, but
does not match host.example.com/test. However, host.example.com matches host.example.com/samples,
host.example.com/samples/test, and host.example.com/test.


