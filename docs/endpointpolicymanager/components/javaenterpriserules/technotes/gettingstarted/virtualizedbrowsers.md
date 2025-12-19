---
title: "How does Endpoint Policy Manager Java Rules Manager work with Virtualized Browsers and/or Java?"
description: "How does Endpoint Policy Manager Java Rules Manager work with Virtualized Browsers and/or Java?"
sidebar_position: 30
---

# How does Endpoint Policy Manager Java Rules Manager work with Virtualized Browsers and/or Java?

The answer is complicated but here goes:

- PPJRM sees the real versions of Java on the machines, and then makes the XML RuleSet based upon
  that.
- Then, if, for instance, FF is virtualized in App-V, then virtualized Firefox should honor what the
  Ruleset says to do.

What will not work is:

- Virtualized FF and
- Virtualized Java(s) inside App-V
- And NO / different Java's on the real machine. Since we cannot see/detect inside the App-V bubble,
  we cannot make a rule set

While the first scenario should work, this scenario is Unsupported, which means it should work as
described, but there are no guarantees, and no plans to improve support for App-V + PPJRM.


