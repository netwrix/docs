---
title: "Creating Policy from Endpoint Policy Manager Cloud Events"
description: "Creating Policy from Endpoint Policy Manager Cloud Events"
sidebar_position: 50
---

# Creating Policy from Endpoint Policy Manager Cloud Events

In order to receive Endpoint Policy Manager reports for events via Endpoint Policy Manager Cloud
Event Collector, you will need to complete the following steps:

- Submit a support ticket to activate the Cloud Event Log Collector
- Trialers/Customers will only have a one-day event collection offered at no cost
- 7 Day, 14 Day, or 30 Day storage intervals for retained events

**Step 1 –** Select the Company Group you want to push events to Endpoint Policy Manager Cloud and
select **Edit Group**.

![creating_policy_from_policypak](/images/endpointpolicymanager/leastprivilege/events/createpolicy/creating_policy_from_endpointpolicymanager.webp)

**Step 2 –** Select the **Event Collector**,Refresh interval for computers time setting.

![creating_policy_from_policypak_1](/images/endpointpolicymanager/leastprivilege/events/createpolicy/creating_policy_from_endpointpolicymanager_1.webp)

**Step 3 –** Select the Event IDs you want to collect.

![creating_policy_from_policypak_2](/images/endpointpolicymanager/leastprivilege/events/createpolicy/creating_policy_from_endpointpolicymanager_2.webp)

:::note
You can select the drop-down option to select the Event IDs. See the
[List of Endpoint Policy Manager Event Categories and IDs](/docs/endpointpolicymanager/gettingstarted/misc/knowledgebase/tipstricksandfaqs/eventcategories.md) topic
for a list of Endpoint Policy Manager Event IDs.
:::


**Step 4 –** Go to the Reports section to see the events that have been generated.

![creating_policy_from_policypak_3](/images/endpointpolicymanager/leastprivilege/events/createpolicy/creating_policy_from_endpointpolicymanager_3.webp)

**Step 5 –** Use the Generate Rule(s) wizard to create policies from forwarded events.

![creating_policy_from_policypak_4](/images/endpointpolicymanager/leastprivilege/events/createpolicy/creating_policy_from_endpointpolicymanager_4.webp)

**Step 6 –** Final Result: a Rule is created and you can edit the policy name and/or change the
conditions if needed.

![creating_policy_from_policypak_5](/images/endpointpolicymanager/leastprivilege/events/createpolicy/creating_policy_from_endpointpolicymanager_5.webp)
