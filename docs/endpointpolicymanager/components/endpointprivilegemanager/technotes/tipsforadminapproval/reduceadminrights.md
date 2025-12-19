---
title: "Can I use Endpoint Privilege Manager to LOWER / remove admin rights from Administrators from an application or process, like Internet Explorer?"
description: "Can I use Endpoint Privilege Manager to LOWER / remove admin rights from Administrators from an application or process, like Internet Explorer?"
sidebar_position: 10
---

# Can I use Endpoint Privilege Manager to LOWER / remove admin rights from Administrators from an application or process, like Internet Explorer?

Yes. The basic steps are in these two screenshots:

![464_1_img-001](/images/endpointpolicymanager/leastprivilege/464_1_img-001.webp)

And

![464_2_img-002](/images/endpointpolicymanager/leastprivilege/464_2_img-002.webp)

This will work when an Administrator attempts to run something, and you want to force it to be run
with Standard User rights.

That being said, Internet Explorer is a special case. When IE is run normally as an Admin, IE will
self-reduce the rights to Low as seen here.

![464_3_img-003](/images/endpointpolicymanager/leastprivilege/464_3_img-003.webp)

If, however, an Administrator Runs as Administrator then IE will run Elevated.

![464_4_img-004](/images/endpointpolicymanager/leastprivilege/464_4_img-004.webp)

Using a Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege ManagerLeast Privilege
Manager rule like in the example below, it is possible to force it so that an Admin who attempts to
run IE eleavted will be preventedfrom doing so.

![464_5_img-005](/images/endpointpolicymanager/leastprivilege/464_5_img-005.webp)

As a result, even when IE is launched / told to Run as Admin, it will not , and instead run
Standard.

![464_6_img-006](/images/endpointpolicymanager/leastprivilege/464_6_img-006.webp)


