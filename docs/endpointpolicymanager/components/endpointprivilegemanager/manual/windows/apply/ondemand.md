---
title: "Apply on Demand Rules"
description: "Apply on Demand Rules"
sidebar_position: 10
---

# Apply on Demand Rules

:::note
See the
[Least Privilege Manager: Apply On Demand](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/adminapproval/applyondemand.md) video for
information on Endpoint Policy Manager Least Privilege Manager Apply on Demand.
:::


The Apply on Demand feature enables advanced users to know when they should self-elevate their own
situations and programs. Up until now, each rule was automatically applied when a user tried to run
an application.

When Apply on Demand is selected within a policy (see screenshot below), this policy no longer
applies automatically. This is useful in a lot of cases with developer applications where they can
run non-elevated and work nearly all the time, but perhaps only occasionally need elevation some of
the time.

For this example, re-open and edit the policy that performs automatic elevation for Process Monitor,
and set the action to **Apply on Demand**.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/apply/apply_on_demand_rules.webp)

The result of this change (after running GPupdate) is that when the end-user tries to run Procmon,
they will see the standard UAC prompt.

Now that you have selected Apply on Demand, when the rule applies, the application will no longer
automatically honor the rule you have set up. Double-clicking the application will now yield a UAC
prompt (if the application requires UAC), like the one shown here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/apply/apply_on_demand_rules.webp)

The user will now need to right-click the application and choose **Run with Endpoint Policy Manager
On-Demand**.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/apply/apply_on_demand_rules_1.webp)

:::note
You can change the name of the menu item from **Run with** Endpoint Policy Manager
**On-Demand** via Global Settings Policy.. See the
[Best Practices and Miscellaneous Topics](/docs/endpointpolicymanager/components/endpointprivilegemanager/manual/windows/overviewmisc/overviewmisc.md) topic for additional
information on Global Settings Policy.
:::


When the user does this, the application launches, bypassing the UAC prompt.



