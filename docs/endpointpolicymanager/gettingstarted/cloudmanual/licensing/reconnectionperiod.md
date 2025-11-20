---
title: "Reconnection Period"
description: "Reconnection Period"
sidebar_position: 10
---

# Reconnection Period

All computers that acquire a license must connect to Endpoint Policy Manager Cloud. The normal time
period within which all customers must re-connect with Endpoint Policy Manager Cloud is 14 days,
which enables them to keep using the service and get new policies. A computer that is offline for
more than 14 days will transition to a state of being unlicensed. To see what happens when a
computer becomes unlicensed (per component), see this KB article:
[What happens to each component when Endpoint Policy Manager gets unlicensed or the GPO or policy no longer applies?](/docs/endpointpolicymanager/licensing/knowledgebase/activedirectorygposccm/components_2.md).

However, as soon as the computer re-connects to Endpoint Policy Manager Cloud and claims an
available license, the computer picks up right where it left off. Having a computer return a license
when disconnected for more than 14 days can have the following benefits:

- For legacy customers, the license is returned back to the pool, which means it can be acquired by
  another machine.
- For monthly post-pay customers, the license count is reduced, lowering your monthly average.
- For yearly post-pay customers, the license count is reduced for the month, lowering your yearly
  average.

Therefore, computers must connect with Endpoint Policy Manager Cloud every 14 days, or else there is
no way to know if a machine is still valid and should maintain a license. If you have a special
circumstance, you can work with the Endpoint Policy Manager sales team to configure a reasonable
number of days in which computers must re-connect and re-validate with Endpoint Policy Manager
Cloud.

