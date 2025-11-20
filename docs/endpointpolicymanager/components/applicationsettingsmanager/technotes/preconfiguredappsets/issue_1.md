---
title: "Java: I don't see that any changes are working at all. What can I try first?"
description: "Java: I don't see that any changes are working at all. What can I try first?"
sidebar_position: 450
---

# Java: I don't see that any changes are working at all. What can I try first?

Solution:

Every pre-configured Pak comes with its own internal filters and in most cases those are targeting
to a specific version of Application. For instance, if you're using a specific Pak for Java, it
might be trying to apply only to the detected version on that machine.

So if we have a different version on the target machine that doesn't mean there is no way we can see
the changes. We can still get Netwrix Endpoint Policy Manager (formerly PolicyPak) to deliver the
setting by disabling the internal item-level targeting.

![323_1_image011dftyrty](/images/endpointpolicymanager/troubleshooting/applicationsettings/java/323_1_image011dftyrty.webp)

To see a demonstration video about Internal Filters and bypassing them, please see this

[Bypassing Internal Item Level Targeting Filters](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/featurestechsupport/itemleveltargetingbypass.md)


