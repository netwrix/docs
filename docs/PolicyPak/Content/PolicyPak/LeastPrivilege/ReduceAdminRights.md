---
sidebar_position: 3146
title: Can I use Endpoint Privilege Manager to LOWER / remove admin rights from Administrators
  from an application or process, like Internet Explorer?
---

# Can I use Endpoint Privilege Manager to LOWER / remove admin rights from Administrators from an application or process, like Internet Explorer?

Yes. The basic steps are in these two screenshots:

![](../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/464_1_img-001.jpg)

And

![](../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/464_2_img-002.jpg)

This will work when an Administrator attempts to run something, and you want to force it to be run with Standard User rights.

That being said, Internet Explorer is a special case. When IE is run normally as an Admin, IE will self-reduce the rights to Low as seen here.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/464_3_img-003.jpg)

If, however, an Administrator Runs as Administrator then IE will run Elevated.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/464_4_img-004.jpg)

Using a Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege ManagerLeast Privilege Manager rule like in the example below, it is possible to force it so that an Admin who attempts to run IE eleavted will be preventedfrom doing so.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/464_5_img-005.jpg)

As a result, even when IE is launched / told to Run as Admin, it will not , and instead run Standard.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/464_6_img-006.jpg)