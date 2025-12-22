---
title: "How is Item Level Targeting handled in reports?"
description: "How is Item Level Targeting handled in reports?"
sidebar_position: 90
---

# How is Item Level Targeting handled in reports?

Endpoint Policy Manager works, evaluates and reports like the Group Policy Preferences do.

Even if you have an ILT which evaluates to FALSE, there's no way to know that in the reporting
engine.

So ILT always evaluates in the reporting as if it's ALWAYS true.

This is also how Group Policy Preferences works as well, and hence, we follow the same model.


