---
title: "Custom Threats"
description: "Custom Threats"
sidebar_position: 50
---

# Custom Threats

In additional to pre-configured threats, Threat Manager lets you create custom
threats. A user can create a custom threat if they consider certain events to be dangerous in their
environment. For example, when one of the privileged users makes file changes.

You can create custom threats in one of the following ways:

- Custom Option on the Threat Detection Page
- Create Threat Option on the Investigation Page

## Custom Option on the Threat Detection Page

To create a custom threat:

**Step 1 –** Click the gear icon at the top right of the screen.

**Step 2 –** Select **Threat Detection**. This opens the Threat Detection page.

**Step 3 –** In the Threats box on the left, click **Custom** . This opens the Investigate page.

**Step 4 –** On the Investigate page, do one of the following:

- Select an existing investigation, or
- Save a new one. See the
  [New Investigation Page](/docs/threatmanager/3.3/administration/investigations/newinvestigation.md) for additional
  information.

**Step 5 –** In the selected investigation, click the **Create Threat** option.

![CreateThreat Option](/images/threatmanager/3.0/threats/createthreat.webp)

The Custom Threat page opens.

![Create Threat Dialog Box](/images/threatmanager/3.0/threats/createthreatdialogbox.webp)

**Step 6 –** Severity – The relative severity level, or risk level, of the threat. See the
[Fine Tune a Threat](/docs/threatmanager/3.3/administration/configuration/threatdetection/threatconfiguration.md) topic for additional
information.

**Step 7 –** Description – Description of the threat.

:::note
Click the + sign in the description box to insert the `{{userName}}` macro. The macro will
associate the user that committed the threat.
:::


**Step 8 –** Definition – The threat definition is a detailed explanation of the threat providing
insight into why the incident is a potential risk. It appears at the top of the Threat Details page.
See the [Threat Details Page](/docs/threatmanager/3.3/administration/threats/threatdetails/overview.md) topic for additional
information.

**Step 9 –** The Custom Threat page has two tabs for threat configuration:

- Threat Response – Assigning a threat response includes the following:

    - SIEM Alert – Check the box to forward threat information to a SIEM service when Threat Manager
      detects the threat. Uncheck it to turn off forwarding threat information to a SIEM service.
    - Email Alert – Check the box to send email notifications when Threat Manager detects the threat.
      Uncheck it to turn off email notifications.
    - Run Playbook – Select the playbook to run in response to the threat.

- Threat Settings – Select the Threshold check-box to enable configuration options i.e. the minimum
  number of events during a specific time frame which will trigger a threat.

    - Count –The number of times that an event must occur before Threat Manager generates a threat
    - Time – The time period over which the count must occur to generate a threat. Enter a value and
      set the units for the time period in the next field.
    - Units – The time period units. Options in the dropdown menu include Minutes, Hours, or Days.
    - Group By Perpetrator – When checked, Threat Manager evaluates the threat criteria on a
      per-user basis.
      This means that each perpetrating user's individual activity must match the investigation
      criteria to generate a threat. The default is unchecked.

**Exclusions Tab**

The Exclusions tab lists existing exclusions for the threat. Exclusions let you define rules that
exclude specific criteria from threat detection for the threat type.

![Threat Exclusion Tab](/images/threatmanager/3.0/threats/exclusionstab.webp)

**Step 10 –** Click **Save**. Threat Manager saves the investigation as a custom threat.

## Create Threat Option on the Investigation Page

To create a custom threat from an Investigation page:

1. Click Investigate in the application's header bar.
2. select an investigation and follow the steps from Step 5 in the Custom Option on the Threat
   Detection Page section.
