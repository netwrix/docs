---
title: "Monitor Weak Passwords Use Case"
description: "Monitor Weak Passwords Use Case"
sidebar_position: 10
---

# Monitor Weak Passwords Use Case

Any Threat Prevention license can use the Password Enforcement Event type to monitor for the
creation of weak passwords in your environment.

:::note
See the [Prevent Weak Passwords Use Case](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/passwordenforcement/preventweakpasswords.md) topic for instructions
on creating a policy to block weak passwords, which requires the Threat Prevention
for[ Enterprise Password Enforcer](/docs/threatprevention/8.0/solutions/epe.md) solution.
:::


Follow the steps to configure a policy to monitor the creation of weak passwords.

![EPE Settings window](/images/threatprevention/8.0/admin/configuration/epesettings.webp)

**Step 1 –** (Must be completed by an administrator) Configure the global EPE settings for your
environment.

- Click **Configuration** > **EPE Settings** on the menu to open the EPE Settings window.
- Download the latest copy of the HaveIBeenPwned dictionary file. See the
  [Download and Configure the Have I Been Pwnd Hash List](/docs/threatprevention/8.0/admin/configuration/epesettings.md#download-and-configure-the-have-i-been-pwnd-hash-list)
  topic for additional information.
- Determine whether you want to deploy the dictionary to each domain controller or keep it locally
  on the Enterprise Manager server. See the
  [Considerations When Deploying the HIBP Database](/docs/threatprevention/8.0/admin/configuration/epesettings.md#considerations-when-deploying-the-hibp-database)
  topic for additional information.
- Modify the global password rules to customize the password dictionary, word list dictionary and
  character substitution map. See the [Rules](/docs/threatprevention/8.0/admin/configuration/epesettings.md#rules) topic for
  additional information.

**Step 2 –** Create a new policy with the Password Enforcement Event Type.

![New Monitor EPE Policy - General tab](/images/threatprevention/8.0/admin/policies/eventtype/usecase/newmonitorepepolicy.webp)

- Right-click on the **Policies > Auditing** folder and select **New > Policy**.
- On the General tab, provide a unique descriptive name, e.g. Monitor Weak Passwords, and
  description, e.g. This policy monitors the creation of weak passwords according to the global
  EPE settings.
- On the Event Type tab, click the **Add** (+) button and select Password Enforcement on the
  [Event Selection Window](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/overview.md#event-selection-window).

**Step 3 –** Configure the event filters.

- Password Rules tab:

  - Mode – Set to Monitoring
  - Pwned DB – Check the Block if password hash is in Pwned DB box
  - Character Substitution – Check the Block if exact match substituted password box
  - Username in Password – Check all options in this category and modify values as desired
  - Repeating Patterns – Check the Block if password contains repeating pattern box and set length
    value as desired
  - Sequential Characters – Check the Block if contains sequential characters box and set size
    value as desired
  - Keyboard Layout Sequence – Check the Block if contains characters in keyboard layout sequence
    box and set size value as desired
  - Configure additional settings as desired

- Optionally scope the policy further by applying Domain/Servers, AD Account, AD Perpetrator, and/or
  Hosts (from) filters.

**Step 4 –** Return to the General tab and enable the policy by clicking the Disabled toggle button.

**Step 5 –** Click **Save**.

The policy is now monitoring for the creation of weak passwords in your environment. There are three
methods for viewing monitored weak password events:

- Recent Events tab of the monitoring policy
- Investigate node of the Administration Console
- Investigations interface of the Netwrix Threat Manager Reporting Module

## View Events in Recent Events Tab

![Recent Events Tab for weak password monitoring](/images/threatprevention/8.0/admin/policies/eventtype/usecase/recenteventsmonitor.webp)

On the Recent Events tab of the policy, set the Show options as desired and click the Refresh button
to view monitored events. See the [Recent Events Tab](/docs/threatprevention/8.0/admin/policies/configuration/recentevents/overview.md) topic for
additional information.

## View Events in Investigate Interface

![Investigate Interface](/images/threatprevention/8.0/admin/policies/eventtype/usecase/invesitgatenodemonitor.webp)

On the Investigate window of the Administration Console, you can use the following filter options to
view monitored weak password events:

- Policy filter – Select only the policy that is monitoring for weak passwords
- Other filter – Select the Event Name option and enter "password monitored" in the text box.

Click the Refresh button to view monitored events. See the
[Investigate Interface](/docs/threatprevention/8.0/admin/investigate/overview.md) topic for additional information.

## View Events in Investigations Interface

On the Investigations interface of the Netwrix Threat Manager Reporting Module, create a new
investigation with the following filter:

- Attribute = Policy
- Operator = Equals
- Filter = [name of monitoring policy]

See the [Investigations Interface](/docs/threatprevention/8.0/reportingmodule/investigations/overview.md) topic for
additional information.
