---
title: "Fine Tune a Threat"
description: "Fine Tune a Threat"
sidebar_position: 10
---

# Fine Tune a Threat

Selecting a threat in the Threats list displays details for that threat. The Threat Description box
displays the name and description of the threat.

![This screensot displays the Threat Details box.](/images/threatmanager/3.0/administration/configuration/threatdetails.webp)

The Threat Configuration Box contains a Processing tab, an Exclusions tab, and in some cases a
Settings tab.

### Processing Tab

The Processing tab contains the configuration options for processing the threat.

![This screenshot displays the Processing tab.](/images/threatmanager/3.0/administration/configuration/processingtab.webp)

**General:**

- Status – When you set it to ON, Threat Manager detects this threat. When you set it to OFF, Threat Manager
  doesn't detect this threat. When you set a threat status from **OFF** to **ON**, a dialog displays where you determine which data Threat Manager processes.

- Threat Level – The relative severity level, or risk level, of the threat. Threat level controls
  the visibility of the threat and lets you sort, filter, and influence various dashboards and
  visualizations throughout the console. This setting doesn't influence the behavior of the threat
  response.
    - High – Indicates a serious threat that needs immediate investigation. You can use the high threat
      level setting as a filter on the [Threats Page](/docs/threatmanager/3.4/administration/threats/threats.md).
    - Medium – Indicates a potentially serious threat of activities leading to a serious threat that
      should be investigated. The medium threat level setting can be used as a filter on the
      [Threats Page](/docs/threatmanager/3.4/administration/threats/threats.md).
    - Low – Indicates activity that is a potential risk or a bad practice. You can use the low threat level
      setting as a filter on the [Threats Page](/docs/threatmanager/3.4/administration/threats/threats.md).
    - Audit – Indicates activity that isn't necessarily a threat, but should be monitored. You can use the
      audit setting as a filter on the [Threats Page](/docs/threatmanager/3.4/administration/threats/threats.md). Some threats will
      auto-escalate from audit to a higher level, for example, threats with a high threat event
      count or if the perpetrators of the threat are sensitive users. Audit events are also shown on
      the [Home Page](/docs/threatmanager/3.4/administration/home.md).
    - Informational – Indicates first-time client use or first-time host use, which can be common
      events but may also indicate a threat

**Threat Response:**

Assigning a threat response designates a playbook that runs automatically and immediately when Threat Manager
detects a threat of this type.

- Email Alert – Select On to send email notifications when Threat Manager detects the threat. Select Off to
  turn off email notifications.
- SIEM Alert – Select On to forward threat information to a SIEM service when Threat Manager
  detects the threat. Select Off to turn off forwarding threat information to a SIEM service.
- Run Playbook – Select the playbook that responds to the threat.

**Rollup:**

:::note
Rollup isn't available for all threat types.
:::


- Enabled – Set to ON to enable rollups. The default state depends on the threat type.
- Rollup Time – The timeframe for the rollup. Select a timeframe from the dropdown list:
    - 1 Minute
    - 5 Minutes
    - 15 Minutes
    - 30 Minutes
    - 1 Hour
    - 8 Hours
    - 24 Hours

If you enable rollup, Threat Manager associates multiple events from the same perpetrator with a single
threat. For the given rollup criteria, if Threat Manager receives additional threat events within the selected
rollup time, then it appends the threat events to an existing threat instead of creating a new
threat. For example, if a user creates 1000 ransomware files in the configured rollup timeframe, Threat Manager reports it as 1 ransomware threat with 1000 events, whereas without rollup it
creates many threats. Threat Manager triggers the configured threat response (Email, SIEM, or Playbooks) only once when
it initially detects the threat, regardless of rollup configuration. When a threat rolls up, Threat Manager also updates the detection time of the threat, which pushes
it to the top of the Threats Page timeline.

![Image is a flow chart visually explaining how a threat is handled with or without Rollup enabled.](/images/threatmanager/3.0/administration/configuration/rollupexplanationgraphic.webp)

The diagram provides an outline of the rollup process.

### Exclusions Tab

The Exclusions tab lists existing exclusions for the threat. Exclusions let you define rules
that exclude specific criteria from threat detection for the threat type.

![exclusionstab](/images/threatmanager/3.0/administration/configuration/exclusionstab.webp)

To view details of an existing exclusion, click the arrow next to the exclusion or the name of the
exclusion.

**Exclusion Details:**

- Add New Filter – Click the **Add New Filter** button to include an additional filter rule for the
  exclusion.
- Delete Filter – Click the smaller **Delete Icon** to the right of the filter to delete that
  filter.
- Save – Click **Save** to save changes made to the exclusion.
- Cancel – Click **Cancel** to close the exclusion details and disregard any changes made to the
  exclusion.
- Delete Exclusion – Click the larger **Delete Icon** to the right of the Cancel button below the
  filters to delete the exclusion. A confirmation window will confirm deletion.

Click **Add Exclusion** to Add a new Threat Detection Exclusion.

#### Add Threat Detection Exclusions

To add an exclusion to the threat type:

![This screenshot displays the Add Exclusion for Threat Detection window.](/images/threatmanager/3.0/administration/configuration/addexclusion.webp)

**Step 1 –** Click Add Exclusion. The Add Exclusion for [Threat Type] window opens.

**Step 2 –** Select a Name for the exclusion

**Step 3 –** Select an Attribute from the Attribute dropdown list:

- User
- Host
- Client
- File

Impossible Travel doesn't offer the File Tag and Process attributes, because location data exists
only for authentication events. For Security Policy Weakening, the list also includes Weakened
Policy and Target Setting.

**Step 4 –** Select an Operator from the Operator dropdown list.

**Step 5 –** Select a Filter by searching for the value and selecting it from the dropdown list.
Or, manually enter the value for the selected exclusion type in the following format:

- Computer – [domain]\[hostname]
- Client – [domain]\[hostname]
- User – [domain]\[username]
- File – Folder path and full path to file. This exclusion also supports the asterisk wildcard: \*

**Step 6 –** (Optional) Click **Add New Filter** to include an additional filter rule for the
exclusion.

**Step 7 –** Click Saveto save the exclusion details. Click **Cancel** to close the modal and
disregard any changes made to the exclusion.

The Exclusions list now includes the exclusion, and Threat Manager immediately excludes the specified activity from threat detection for the threat type.

#### Security Policy Weakening Exclusion Filters

The Weakened Policy and Target Setting filters are fixed lists. They use the "is" and "is not"
operators.

The Weakened Policy filter offers these policies:

- Guest Invite Policy
- User Consent for Apps
- Security Defaults
- App Creation

The Target Setting filter lists settings grouped by policy:

- Guest Invite Policy – Anyone in the organization; Members and admin roles; Admin roles only
- User Consent for Apps – Allow user consent for apps from verified publishers, for selected
  permissions; Let Microsoft manage your consent settings
- Security Defaults – Disabled
- App Creation – Enabled

Threat Manager doesn't list the most restrictive setting of each policy, because it reports a
change only when a setting becomes less restrictive.

### Settings Tab

The Settings Tab provides additional threat-specific settings that are required for some threats.

:::note
Threat Manager displays the Settings tab only for threats that require additional settings.
:::


![This screenshot displays the Settings tab.](/images/threatmanager/3.0/administration/configuration/settingstab.webp)

This tab shows the settings for the Forged Ticket, Impossible Travel, and Authentication Methods Policy Weakening threats.

**Forged Ticket:**

- Sensitive groups only – When enabled, Threat Manager detects Forged Ticket threats only if the forged ticket
  includes a group tagged as sensitive.
- Membership cache duration – The number of minutes to cache group membership changes. This value
  should equal the longest expected time for one DC to replicate changes.
- Use all groups – When enabled, Threat Manager detects Forged Ticket threats whenever it finds a user
  with an unexpected token.
- Specific groups – Only detect threats if someone injected the specified groups into a user's
  Privilege Account Certificate (PAC). Threat Manager ignores this setting when you enable Use all
  groups.

**Impossible Travel:**

- Trigger on Non-Human Identities – When enabled, Threat Manager also evaluates sign-ins from applications and service
  principals for impossible travel. When disabled, it evaluates only user sign-ins. The default is off. In 3.4, Impossible Travel evaluates only user sign-ins by default.

**Authentication Methods Policy Weakening:**

- Tracked Weak Methods – Authentication methods whose change to enabled raises the threat, because
  they are weak, phishable methods. The default is Sms and Voice.
- Tracked Strong Methods – Authentication methods whose change to disabled raises the threat,
  because they are strong, phishing-resistant methods. The default is Fido2 and
  MicrosoftAuthenticator.

If both lists are empty, the threat can't fire.
