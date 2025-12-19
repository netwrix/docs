---
title: "HowTo: One of my AppSet entry's settings is not getting delivered on target machines. What should be the first thing to look into?"
description: "HowTo: One of my AppSet entry's settings is not getting delivered on target machines. What should be the first thing to look into?"
sidebar_position: 290
---

# HowTo: One of my AppSet entry's settings is not getting delivered on target machines. What should be the first thing to look into?

The most common reason for items not applying is that the Internal Item Level Targeting within a
AppSet doesn't match/evaluate to TRUE on your target machine.

For instance, the Internal (Pre-defined) Item Level Targeting (ILT) which specifying an application
version in the AppSet for an application that you don't have.

Usually, the Internal ILT is tied down for "Version X and Later", but it could be very version
specific.

See this video to bypass the ILT:

[Bypassing Internal Item Level Targeting Filters](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/featurestechsupport/itemleveltargetingbypass.md)


