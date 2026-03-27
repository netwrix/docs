---
title: "What are the services installed by PolicyPak?"
description: "What are the services installed by PolicyPak?"
sidebar_position: 90
---

# What are the services installed by PolicyPak?

Group Policy has its own services which handle the deployment and enforcement of policy when
initiated manually or on a defined interval.

You can see the Group Policy Client Service from Microsoft here. This is what downloads GPOs, which
may or may not contain Netwrix PolicyPak data.

![322_1_grouppolicyclient](/images/policypak/install/322_1_grouppolicyclient.webp)

PolicyPak provides (via Group Policy, PolicyPak Cloud or MDM delivery) a
vast array of powerful and unique policies not possible with Group Policy alone. Many of these
unique policies must be enforced in real-time.

There are 3 services created by the CSE.

- PolicyPak Helper Service (64-bit)
- PolicyPak Watcher Service (64-bit)
- PolicyPak Watcher Service (32-bit)

![322_2_policypakservices](/images/policypak/install/322_2_endpointpolicymanagerservices.webp)

The PolicyPak services provide this real-time enforcement of policies. For instance,
when you use PolicyPak to perform the following:

- Setting and locking down application settings (PP Application Manager)
- Making sure users only execute allowed applications (PP Least Priv / SecureRun).
- Allowing users to [run applications or access settings that require administrative privileges
  without giving them full
  privileges](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html on their
  system.) (PP Least Priv.)
- Manage Java control (PP Java Rules Manager.)

The Watcher Services for PP Application Manager does what it implies: watches items in real-time.
This implements the AppLock and some real-time enforcement.

We need three services because we support both 32 & 64 bit applications (on 64-bit machines).

The Watcher Service is also involved in the PolicyPak CSE Auto-Updater. When the Watcher Service is
disabled, you cannot perform the automatic on-prem update of the CSE. For more information on the
automatic update feature, see the
[Rings with PolicyPak and Active Directory](/docs/policypak/upgrademaintenance/upgrade/rings/activedirectory.md) topic.

The Helper Service is required, handles a variety of functions, and is used across all of PP's
components. We need more services than just Group Policy because we do much more than Group Policy
can by itself.

The Group Policy service from Microsoft simply downloads and applies GPOs and passes the data onward
to a corresponding Client Side Extension.

PolicyPak's components are also architected as Client Side Extensions, but CSEs cannot
continue to perform duties in real-time, only services can do that. Therefore, PolicyPak has some services to watch over and perform items in realtime.

