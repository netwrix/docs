---
title: "Enabling Trial Mode"
description: "Enabling Trial Mode"
sidebar_position: 10
---

# Enabling Trial Mode

Enabling trial mode is optional. When you do this, Endpoint Policy Manager GPCR will act as if fully
licensed when any target computer you want to report on has the word "computer" in the name. To
enable trial mode, start out by renaming one Windows 10 endpoint computer to have the word
"computer" in the name, as shown in Figure 4. Ensure it is properly joined to the domain and getting
Group Policy. Endpoints act fully licensed when they have "computer" in the name.

![gpcr_concepts_and_quickstart_3](/images/endpointpolicymanager/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_3.webp)

Figure 4. The word "computer" must appear within the name for the test machine.

:::warning
The word "computer" must be in the middle of the name, and not the end of the name.
Win10Computer64 is a valid name but Win7Computer is not.
:::


:::warning
It is expressly forbidden by the EULA to have more than 99 machines in trial mode.
:::


It should be noted that the naming restriction for trial mode only applies to the target endpoints,
the ones you want to collect data from. It does not apply to the machine running the Endpoint Policy
Manager GPCR client (admin console). That machine can be named anything. In addition, we suggest
already having Group Policy Objects (GPOs) set up on the machines. The contents of those GPOs can be
Microsoft ADMX policies, Microsoft security policies, Microsoft Group Policy Preferences settings,
or any Endpoint Policy Manager Settings.

