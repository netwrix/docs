---
title: "Baseline Policy Wizard"
description: "Baseline Policy Wizard"
sidebar_position: 20
---

# Baseline Policy Wizard

New Policy:

Start a new Baseline Policy Wizard and provide a name for your new Policy.

Data Collection:

![baselinedatacollection](/images/changetracker/8.0/baseline/baselinedatacollection.webp)

Define the Data Collection template to be used for gathering baseline configuration data. This can
be a new template, or an existing template can be re-used. The following configuration elements to
be used in Baseline policy, File System Integrity, Installed Software and Updates, Running Processes
and Service states, Local User Accounts, Command Output (also allows Firewall and Router configs to
be baselined) and Open Network Ports (using a local netstat or equivalent on the Host or using an
NMAP Network Scan)

Specify Source:

A single device is selected to act as the Source for Baseline Policy data. This should be a
'Control' device or simply a "Representative Example" of what your ideal device configuration should
be, e.g. a device that has been patched and hardened exactly as you would like every similar device
to be

:::note
The selected Source device must be enabled as a "Baseline Source". You can do this via the
Settings > Agent and Device screen, select the required Device click **Edit**. There are technical
reasons why this is disabled by default; in the interests of storage and performance efficiency, it
is not desirable to have every Device sending Baseline Events to the Hub unless needed.
:::


![baselinesource](/images/changetracker/8.0/baseline/baselinesource.webp)

Another important decision is whether you want to include changes from Member Devices when you come
to make future changes to your Baseline Policy. By default, the Source device is the single source
of configuration items, both for the initial creation of the policy and going forwards, for any
changes needed to the Baseline, for example, after patching when versions of software items may need
to be updated. In certain situations, it may be convenient to also include changes to Member Group
devices too, in which case you can check this box.

![baselinespecifymembers](/images/changetracker/8.0/baseline/baselinespecifymembers.webp)

Specify Member:

A single device is selected to act as an initial target against which the Baseline Policy Report can
be run. The Wizard will build a Device Group for both the Source Device and the Member Device which
in turn allows the Wizard to build a Baseline Report, see later section

Awaiting Device:

At this stage of the Baseline Wizard, we have a Source Device selected and a Data Collection
template established. The Source Device Agent will call into the Hub and collect the new instruction
to gather and report back on the configuration data collected.

Awaiting Data:

Gathering the Baseline configuration data will take anything from 90 seconds to several minutes,
depending on the nature or resources of the Source Device and the scope of the Data Collection
template defined. Be patient, but you can check progress using the **Check Now** button.

![baselinechecknow](/images/changetracker/8.0/baseline/baselinechecknow.webp)

Add Rules:

This is the penultimate stage where you get to choose which configuration elements will form the
Baseline Policy and how, in terms of the Rule Options selected.

The Rule Options are what makes the Baseline Policy feature in Change Tracker so powerful. A basic
compare of a Device to a predefined set of configuration rules is OK in some circumstances but rule
logic is necessary to convey the other requirements needed in a Baseline Policy.
