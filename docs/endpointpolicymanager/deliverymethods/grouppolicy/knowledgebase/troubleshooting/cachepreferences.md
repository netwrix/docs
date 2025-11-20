---
title: "How does caching of item level targeting work when Microsoft ILT (Preferences ILT) is used?"
description: "How does caching of item level targeting work when Microsoft ILT (Preferences ILT) is used?"
sidebar_position: 20
---

# How does caching of item level targeting work when Microsoft ILT (Preferences ILT) is used?

On every Group Policy (or cloud policy/ppupdate) update, Endpoint Policy Manager
evaluates/re-evaluates ILT. Endpoint Policy Manager store the result of the ILT query until the next
Group Policy (or policy) update. There's no point in re-evaluating ILT every time in realtime
anyway, because the engine (Group Policy engine) doesn't work that way. So we store them after we
know we have a good value.

:::note
If the ILT evaluation takes more than 2 minutes for any reason, it is assumed the ILT is
true.
:::


:::note
Cached values are stored permanently until we know they are changed. In other words, until
Group Policy or policy updates occur and ILT re-evaluation succeeds.
:::


When you re-launch an application managed by Endpoint Policy Manager, or do a Endpoint Policy
Manager action that requires an ILT decision, Endpoint Policy Manager is not evaluating ILT in
realtime. Endpoint Policy Manager is using the cached ILT evaluation's value the last time policy
processing and ILT evaluation succeeded.

Now, the next time ILT is attempted to be evaluated, we wait for results for 500ms when Group Policy
is doing SYNC or 5 seconds when Group Policy is doing ASYNC. If ILT evaluation completes in time, we
use the results. If it does not complete in time, we use cached results and continue anyway.

If you want to manipulate how long the ILT timeout occurs, we have a policy setting in the Endpoint
Policy Manager ADMX settings here:

![499_1_q15-img1](/images/endpointpolicymanager/grouppolicy/itemleveltargeting/499_1_q15-img1.webp)


