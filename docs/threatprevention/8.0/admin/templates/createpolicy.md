---
title: "Use a Template to Create a Policy"
description: "Use a Template to Create a Policy"
sidebar_position: 30
---

# Use a Template to Create a Policy

You can use a policy template to create a policy. The system copies all settings from the template to the
policy. You can customize the settings as required.

## Create a Policy From a Template

Click the Templates or Tags node in the Navigation pane and move the template to the
Policies node.

- From the Templates node, use drag-and-drop to move the template to the Policies node. Alternatively, use the right-click **Copy** and **Paste** options.
- From the Tags node, use the right-click **Copy**
  and **Paste** options to move the template to the Policies node.

The system creates the policy in a disabled state but with all preconfigured settings.

## Customize a Policy Created From a Template

To customize a policy created from a template:

**Step 1 –** Click Policies in the Navigation pane and open the policy you created from a template.

**Step 2 –** If desired, on the [General Tab](/docs/threatprevention/8.0/admin/policies/configuration/general.md) select the Active At Specified
Times option and then set the schedule.

:::warning
Use caution with _all Lockdown/Blocking Templates_! Blank filters lock down or block _everything_.
:::


**Step 3 –** On the [Event Type Tab](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/overview.md), configure the Event Filters
that are specific to each environment.

:::tip
Each filter tab acts like an "AND" statement. Any empty filter tab functions
like an "ALL" for that filter set.
:::


**Step 4 –** If desired, on the [Actions Tab](/docs/threatprevention/8.0/admin/policies/configuration/actions/overview.md) assign any actions for this policy.

**Step 5 –** Return to the [General Tab](/docs/threatprevention/8.0/admin/policies/configuration/general.md) and check the **Enabled** box to
activate the policy. Click **Save**.

When you complete the last step, the system sends this policy in real time to the individual Agents and
it becomes active.
