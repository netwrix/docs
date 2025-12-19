---
title: "HowTo: Which \"side\" of GPO should I deploy AppSets to: User or Computer side?"
description: "HowTo: Which \"side\" of GPO should I deploy AppSets to: User or Computer side?"
sidebar_position: 300
---

# HowTo: Which "side" of GPO should I deploy AppSets to: User or Computer side?

There is no right or wrong answer here.

In our Quickstart and manual, we suggest you perform the work on the USER side.

This means that whenever users log on to any machines (so, as users roam), they get the settings.

That being said, you're welcome to deliver settings on the COMPUTER side.

This means that ALL USERS on the computer will get the settings… regardless of who the user is.

So, our general recommendation (if you're looking for one) is:

- Perform settings on the USER side (usually).
- Except for three applications which work BEST when managed on the Computer side: Firefox, Java and
  Thunderbird.

For more information on this, see the following FAQ item.

[Firefox (and Java and Thunderbird): Why can't I seem to find (or perform) UI lockdown for Firefox, Java or Thunderbird ?](/docs/endpointpolicymanager/components/applicationsettingsmanager/technotes/preconfiguredappsets/javathunderbird.md)


