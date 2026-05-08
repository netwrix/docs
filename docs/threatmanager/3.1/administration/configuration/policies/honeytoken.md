---
title: "Configure Honeytoken Threats"
description: "Configure Honeytoken Threats"
sidebar_position: 20
---

# Configure Honeytoken Threats

The first step for configuring Honeytoken threats is to select a good Honeytoken username format.
This is important for a number of reasons.

- The Honeytoken name should be convincing enough that an adversary would want to use it.
- To reduce noise, the username format shouldn't match (in part or in full) another user,
  group, or computer account in your environment.
- Token usernames are limited to 20 characters, and follow the validity rules for a regular Active
  Directory username.

The next step is to configure LDAP monitoring for Honeytokens.

## Configure LDAP Monitoring for Honeytokens

Adversaries may attempt to perform LDAP reconnaissance for users whose hashes they discover. To detect this activity in Threat Manager, LDAP monitoring must be configured for the
Honeytoken username in Threat Manager or Activity Monitor.

### Obtain the LDAP Monitoring Configuration String

To obtain the LDAP monitoring configuration string:

**Step 1 –** From the Threat Manager homepage, navigate to the Configuration menu and select
Policies.

**Step 2 –** On the Policies page, expand the Honeytokens list and select the related Honeytoken
policy from the Policies list. Or, select the policy from the Policies table in the Overview box.

![honeytoken](/images/threatmanager/3.0/administration/configuration/policies/honeytoken.webp)

**Step 3 –** On the Configuration tab of the policy, fill in the requested information and click
**Copy LDAP Filter**. The Copy LDAP Filter button automatically copies the exact string required for Activity Monitor or Threat Prevention to the clipboard to configure the LDAP events for
this Honeytoken.

![ldapfiltercopiedtoclipboard](/images/threatprevention/7.5/admin/policies/eventtype/usecase/ldapfiltercopiedtoclipboard.webp)

A notification appears and the filter is saved to the clipboard.

### Configure LDAP Monitoring

To configure LDAP monitoring for Threat Manager.

**Step 4 –** In the Threat PreventionAdministration Console , go to **Templates** > **Netwrix Threat
Manager** > **Netwrix Threat Manager for AD LDAP**.

**Step 5 –** Click the **Event Type** tab.

![Netwrix Threat Manager for AD LDAP template – Event Type tab with LDAP Query filter](/images/threatprevention/7.5/admin/policies/eventtype/usecase/ldapmonitoringfortm.webp)

**Step 6 –** Under Event Filters select **LDAP Query**. If the Include LDAP Queries list is empty,
select the other **LDAP Monitoring** event type in the Event Filters list.

**Step 7 –** Scroll to the bottom of the Include LDAP Queries list.

**Step 8 –** Select the line below the last existing query filter and paste the string copied from
Threat Manager:

:::tip
Remember, the Honeytoken tab of the
[Netwrix Threat Manager Configuration Window](/docs/threatmanager/3.1/install/integration/threatprevention/threatmanagerconfiguration.md)
must be configured to successfully send LDAP monitoring data to Threat Manager.
:::


### Configure LDAP Monitoring in the Activity Monitor

To configure LDAP monitoring within Netwrix Activity Monitor for Netwrix Threat
Manager:

:::note
LDAP Monitoring isn't enabled by default. Enable it in the Monitored Domains tab.
:::


![Activity Monitor with SD Only](/images/activitymonitor/8.0/admin/monitoreddomains/actiivtymonitordomainsdonly.webp)

**Step 9 –** In the Activity Monitor, click the **Monitored Domains** tab.

**Step 10 –** Select a domain and click **Edit**.

![LDAP Monitoring Configuration for Threat Manager](/images/activitymonitor/8.0/admin/monitoreddomains/sdldapmonitoring.webp)

**Step 11 –** Select the **LDAP Monitor** tab.

**Step 12 –** Select the **LDAP** tab.

**Step 13 –** In the “Query” section, double-click the blank line below the last filled in line.

**Step 14 –** Paste the string copied from Threat Manager and press **Enter**.

LDAP monitoring has been configured for Threat Manager.
