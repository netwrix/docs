---
title: "Understanding Re-authentication & Justification Text"
description: "Understanding Re-authentication & Justification Text"
sidebar_position: 20
---

# Understanding Re-authentication & Justification Text

There might be times you want users to re-authenticate and/or provide justification text about their
actions. Justification text is logged to the local event log for later review.

Here, on the left you’ll see a Self Elevate rule, and on the right a standard Elevation rule.

You can see both rule types have the options for **Require Justification Text** and **Force user to
reauthenticate**.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/understanding_re_authentication.webp)

:::note
See the
[Endpoint Policy Manager Least Priv Manager: Self Elevate Mode](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/bestpractices/selfelevatemode.md)
video for a demonstration of Justification text for Self Elevate.
:::


:::note
See the
[Endpoint Privilege: Re-Authenticate with Self Elevate](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/adminapproval/reauthenticate.md)
video for a demonstration of re-authentication for Self Elevate.
:::


You can force a user to **Require Justification Text** for normal elevation actions, as well as Self
Elevate policies.

The following cases highlight how this might work.

## Case 1

**Show popup message** is selected, but neither sub-option are checked.

![A screen shot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/understanding_re_authentication_1.webp)

When the application launches, the pop up is presented.

Text input from the user is optional. The user must at least click **OK** to continue and launch the
application.

![A screenshot of a computer monitor Description automatically generated](/images/endpointpolicymanager/leastprivilege/understanding_re_authentication_2.webp)

## Case 2

**Show popup message** and **Justification text required** are selected, but **Force user
re-authenticate** is not.

![A screen shot of a message Description automatically generated](/images/endpointpolicymanager/leastprivilege/understanding_re_authentication_3.webp)

The pop-up box appears, and user must type in something before continuing onward by pressing **OK**
button.

![A screenshot of a computer error message Description automatically generated](/images/endpointpolicymanager/leastprivilege/understanding_re_authentication_4.webp)

## Case 3

**Show popup message** and **Force user re-authenticate** is selected, but **Justification text
required** is not.

![A screenshot of a computer screen Description automatically generated](/images/endpointpolicymanager/leastprivilege/understanding_re_authentication_5.webp)

The user is required to re-authenticate, but then the pop-up occurs, no text input is required by
the user.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/understanding_re_authentication_6.webp)

## Case 4

**Force user re-authenticate** and **Justification text required** are both selected.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/understanding_re_authentication_7.webp)

The User must re-authenticate, then when a pop-up is shown, theuser must type in something before
**OK** is allowed an application proceeds.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/understanding_re_authentication_8.webp)



