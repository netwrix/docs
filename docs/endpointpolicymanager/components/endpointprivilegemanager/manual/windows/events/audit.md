---
title: "Creating Policy from Audit Event"
description: "Creating Policy from Audit Event"
sidebar_position: 40
---

# Creating Policy from Audit Event

Once you have generated events and store them locally or forward them to a service, you can
automatically create rules from events.

If you are using Endpoint Policy Manager Cloud you can store events from endpoints and then
automatically transition those events to rules. See the
[Endpoint Policy Manager Cloud + PPLPM + Events: Collect Events in the Cloud](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/eventing/cloudevents.md)
video for additional information.

If you have stored Windows events, you can use the details from those events to make rules using the
MMC snap-in.

:::note
See the
[Auto-Create Policy from Global Audit event](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/eventing/globalauditevent.md)video
for a demonstration of this.
:::


![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/events/createpolicy/creating_policy_from_audit.webp)

Then you can follow the wizard and paste in Event log details for supported Endpoint Policy Manager
Event IDs.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/events/createpolicy/creating_policy_from_audit_1.webp)

In this example, a 6301 (SecureRun) event can be made into a rule with Copy / Paste like this.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/events/createpolicy/creating_policy_from_audit_2.webp)

After pasting it in, the Wizard recommends some Actions, Conditions and Settings. You’re welcome to
change these as you need to for your situation.

![A screenshot of a computer screen Description automatically generated](/images/endpointpolicymanager/leastprivilege/events/createpolicy/creating_policy_from_audit_3.webp)

The result is a policy which performs the action (Elevate or Allow and Log).

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/events/createpolicy/creating_policy_from_audit_4.webp)



