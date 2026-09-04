---
title: "Use a Template to Create a Policy"
description: "Use a Template to Create a Policy"
sidebar_position: 30
---

# Use a Template to Create a Policy

You can use a policy template to create a policy. Threat Prevention copies all settings in the
template to the policy. You can customize the settings as required.

## Create a Policy From a Template

Click the Templates or Tags node in the Navigation pane and move the template you want to the
Policies node.

- From under the Templates node, you can move templates to the Policies node by dragging and
  dropping them or by using the right-click **Copy** and **Paste** options.
- From under the Tags node, you can move templates to the Policies node with the right-click
  **Copy** and **Paste** options.

The policy is disabled but contains all of the preconfigured settings.

## Customize a Policy Created From a Template

To customize a policy you created from a template:

**Step 1 –** Click Policies in the Navigation pane and open the policy you created from a template.

**Step 2 –** If desired, on the [General Tab](/docs/threatprevention/8.1/admin/policies/configuration/general.md) select the Active At Specified
Times option and then set the schedule.

:::warning
Use caution with _all Lockdown/Blocking Templates_. Blank filters lock down or block
_everything_.
:::


**Step 3 –** On the [Event Type Tab](/docs/threatprevention/8.1/admin/policies/configuration/eventtype/overview.md), configure the Event Filters
that are specific to each environment.

:::tip
Each filter tab acts like an "AND" statement for the filter. Threat Prevention treats any filter tab
you leave blank as an "ALL" for that filter set.
:::


**Step 4 –** If desired, on the [Actions Tab](/docs/threatprevention/8.1/admin/policies/configuration/actions/overview.md) assign any actions to
be a part of this policy.

**Step 5 –** Return to the [General Tab](/docs/threatprevention/8.1/admin/policies/configuration/general.md) and check the **Enabled** box to
activate the policy. Click **Save**.

After you complete the last step, Threat Prevention sends this policy to the individual Agents in
real time and the policy becomes active.
