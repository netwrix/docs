---
title: "Understanding Placeholder Modes"
description: "Understanding Placeholder Modes"
sidebar_position: 20
---

# Understanding Placeholder Modes

In the Start Screen Tile Group Editor, there are two values that can be selected for the Placeholder
field: "Gap" or "Edge link." The purpose of this field is to help identify errors in Endpoint Policy
Manager Start Screen policies. For instance, you might make a policy that is attempting to add an
application that doesn't exist. When you do this with Endpoint Policy Manager Start Screen,
something has to take the place of that application: either a gap or an Edge link. The following are
examples of using these two options when you are trying to add icons for applications that don't
exist on the endpoint.

Option 1 - Gap: In Figure 39 blank areas that have been "gapped" are highlighted in red. This is
where the icons would go when the application is correctly deployed to the endpoint.

![collections_policy_settings_6](/images/endpointpolicymanager/startscreentaskbar/settings/startscreen/collections_policy_settings_6.webp)

Figure 39. Using the gap placeholder mode.

Option 2 - Edge Link: In Figure 40, missing applications are noted with the words "Missing
Application" (highlighted in red).

![collections_policy_settings_7](/images/endpointpolicymanager/startscreentaskbar/settings/startscreen/collections_policy_settings_7.webp)

Figure 40. Using the Edge link placeholder mode.

When you click the Missing Application tile, you are alerted to the nature of the error, as shown in
Figure 41.

![collections_policy_settings_8](/images/endpointpolicymanager/startscreentaskbar/settings/startscreen/collections_policy_settings_8.webp)

Figure 41. Details of an error when Edge tiles are used.

In this way, users can tell you about missing applications and give you the diagnostic information
you need in order to deploy the application or correct the Endpoint Policy Manager Start Screen
policy.

One extra note here about missing applications is that if Item-Level Targeting is used on an
application icon, and it evaluates to FALSE, then the result is always a gap. For instance, if you
wanted Adobe Reader to only appear when the machine was a laptop, but you were really using a
desktop (evaluated with Item-Level Targeting), then the result would be as shown in Figure 42.

![collections_policy_settings_9](/images/endpointpolicymanager/startscreentaskbar/settings/startscreen/collections_policy_settings_9.webp)

Figure 42. Applications with Item-Level Targeting evaluating to FALSE will always have a gap.

The application is not shown and there is no Edge tile to explain why. This is expected when
Item-Level Targeting for an application tile evaluates to False.


