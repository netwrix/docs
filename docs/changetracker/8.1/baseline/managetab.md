---
title: "Manage Tab"
description: "Manage Tab"
sidebar_position: 60
---

# Manage Tab

A word about remediation and change control when operating a Baseline Configuration Policy…

From the CIS Controls 7.1: "Maintain an up-to-date list of all authorized software that is required
in the enterprise for any business purpose on any business system” and “Ensure that unauthorized
software is either removed or the inventory is updated in a timely manner". Also "verify all
security configuration elements, catalog approved exceptions, and alert when unauthorized changes
occur".

From NERC CIP 010: "Develop a baseline configuration which shall include the following items:
Operating system or firmware, commercially available or open-source application software, custom
software, logical network accessible ports; and any security patches applied" then "Monitor every 35
days for changes to the baseline configuration. Document and investigate detected unauthorized
changes".

In summary, the intent of this security control is to maximize security defenses and maintain them.

- Decide on a secure configuration (software, network ports, hardened configuration settings) for a
  device, then
- Ensure all similar devices are compliant with your Baseline Configuration

But in a contemporary IT environment, change is a constant with the need to regularly patch devices
and to update configuration settings to meet changing business requirements. This means there needs
to be a further step in the process to Manage the Baseline Configuration.

For example, from my worked example earlier, there were three failures reported. One device was
missing a required item (Notepad++) and one other device was running the wrong version of Notepad++.
These failures would be remediated by installing or updating the software on the two non-compliant
devices. However, there was also a third failure – Google Chrome has been reported on the same two
devices at a later version than required.

![baselinefailureanalysis](/images/changetracker/8.1/baseline/baselinefailureanalysis.webp)

There are two paths to take from this: The two devices showing failures should be downgraded to
match the required version, alternatively, it may be preferable to update the Baseline Configuration
to embrace the newer version? This is a process known as 'promoting to the baseline' where either a
new or updated element needs to be grafted into the existing Baseline to take into account changing
times. Netwrix Change Tracker makes this process straightforward too, using the Manage Tab.

## Using the Manage Tab

The Manage tab will show any exceptions identified from the last report run.

:::note
The Date and Time filters will be fixed and set according to the time window for the last
Baseline Report run.
:::


![baselinemanagetab](/images/changetracker/8.1/baseline/baselinemanagetab.webp)

Baseline Exceptions

Exceptions include any failures according the Baseline Policy used in the report, together with any
new changes affecting the Baseline Policy referenced from the Source device (or if you have chosen
to include changes from Member Devices too, these will also appear here –
[see earlier section](/docs/changetracker/8.1/baseline/policywizard/policywizard.md) regarding the Baseline Setup Wizard and the step where you
are asked to 'Specify Source'.

In this example we are using the default operation of only including changes originating from the
Source Device for this Baseline Policy. This shows that there has been an update to the version of
Google Chrome being used on this device, so this is highlighted and offered as a change that may
need to be promoted to the Baseline Policy.

Rule Operations:

There are three choices for modifying a Baseline Policy, Extend, Add and Delete. You can also use
the [Rule Edit function](/docs/changetracker/8.1/baseline/policywizard/policywizard.md) back in the Setup tab if you want to remove an existing
rule entirely. The functions are largely self-explanatory, but tips are provided if you hover over
each button.

![baselineruleoperations](/images/changetracker/8.1/baseline/baselineruleoperations.webp)

- Extend – Extend the existing baseline rules for this exception, in other words, promote this item
  as a 'valid' configuration
- Add – Adds a new rule to the baseline checking for the presence of this item. Any existing rule
  for this item is overwritten.
- Delete – Removes the baseline rule so it will no longer check for this item.

    :::note
    Deleting a 'No Others' rule failure will remove all 'No Others' processing for this
    Tracker type.
    :::


Once you have decided how you would like to handle the exceptions, you need to apply any changes
required using the Apply Changes Now button.

![baselineapplychangesnow](/images/changetracker/8.1/baseline/baselineapplychangesnow.webp)

You will be prompted to enter the Business Justification for the changes as when creating the
Baseline Policy originally.

## Viewing the Baseline Policy details

To get a ‘hard copy of the Baseline Policy, you can create a Tracking Policy report based on the
Baseline Policy. Go to the Reports Center and use the **Actions button**, then select **Add Tracking
Template Report**.

![baselinereportsandqueries](/images/changetracker/8.1/baseline/baselinereportsandqueries.webp)

An Auditor will often ask to see what the Baseline Policy comprises, when and why changes have been
made and by whom. This report provides a complete audit trail of changes as well as the breakdown of
rules included in the policy.

![baselinetest](/images/changetracker/8.1/baseline/baselinetest.webp)
