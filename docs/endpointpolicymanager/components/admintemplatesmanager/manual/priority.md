---
title: "Understanding Priority"
description: "Understanding Priority"
sidebar_position: 30
---

# Understanding Priority

Endpoint Policy Manager Admin Templates Manager enables you to put policy directives inside a single
GPO and within a single collection. This is most useful when used in conjunction with Item-Level
Targeting, as described in the previous section.

![about_policypak_admin_templates_17](/images/endpointpolicymanager/adminstrativetemplates/about_endpointpolicymanager_admin_templates_17.webp)

Here you can see the same policy, **Screen saver timeout**, used three times within the same GPO.
However, each policy directive has **Item-Level Targeting** turned on and specific conditions
associated with it.

We recommend using Endpoint Policy Manager Admin Templates Manager in the following ways:

- Create multiple policy directives in a collection within a GPO
- Use Item-Level Targeting to set the conditions
- Set a description about that particular AppSet item (see the next section)

![about_policypak_admin_templates_18](/images/endpointpolicymanager/adminstrativetemplates/about_endpointpolicymanager_admin_templates_18.webp)

Occasionally there can be multiple AppSets that have overlapping settings. In that case, ensure that
the delivery of those settings occur in a particular order. As we see above, Endpoint Policy Manager
Admin Templates Manager enables you to specify the order policy settings are delivered in.

Policy settings within a GPO are processed in order from lowest to highest.

:::note
This is the same way Group Policy Preferences performs ordering as well.
:::


![about_policypak_admin_templates_19](/images/endpointpolicymanager/adminstrativetemplates/about_endpointpolicymanager_admin_templates_19.webp)

To change the priority of a particular AppSet, click on it and select ether **Raise Priority**,
**Lower Priority**, **Maximum Priority**, or **Minimum Priority**.


