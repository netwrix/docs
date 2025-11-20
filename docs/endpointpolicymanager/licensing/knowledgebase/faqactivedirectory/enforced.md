---
title: "Licence Tool recommends I enforce the links on the licensing GPOs. Should I do this, and why is this recommended?"
description: "Licence Tool recommends I enforce the links on the licensing GPOs. Should I do this, and why is this recommended?"
sidebar_position: 120
---

# Licence Tool recommends I enforce the links on the licensing GPOs. Should I do this, and why is this recommended?

Netwrix Endpoint Policy Manager (formerly PolicyPak) On-Prem licenses are contained within GPOs.
Since GPOs can be blocked using Block Inheritance, we always recommend you enforce the GPO's links
which contain Endpoint Policy Manager licensing data.

In this way, the GPO's licensing content will always be delivered to target machines, even if Block
Inheritance is used in the OU structure.

As such, License Tool automatically recommends and performs enforcement of the GPOs links when
license files are installed into the GPO.

Below all Endpoint Policy Manager Licenses are contained within one GPO. But you might have multiple
licensing GPOs, all which need to be enforced.

![168_1_image0013](/images/endpointpolicymanager/license/activedirectory/168_1_image0013.webp)

