---
title: "Why must I transition from Legacy to Universal licenses (and what are the differences?)"
description: "Why must I transition from Legacy to Universal licenses (and what are the differences?)"
sidebar_position: 30
---

# Why must I transition from Legacy to Universal licenses (and what are the differences?)

Starting in January 2021, Netwrix Endpoint Policy Manager (formerly PolicyPak) transitioned the
licensing model from Legacy to Universal licenses.
In 2022, the Endpoint Policy Manager CSE (any version) stopped honoring legacy licenses
Additionally, to take advantage of some features, like Capabilities (explained below) you must have
the latest CSEs and a Universal license.

## Understanding Legacy Licenses

Legacy licenses take the form of multiple keys, one for each component.

Whenever we have a new component, we would issue your company a new legacy license for that
component.

![861_1_hfkb-1130-img-01](/images/endpointpolicymanager/license/861_1_hfkb-1130-img-01.webp)

An individual legacy license XML looks like this and contains the product (component) and the scope
of where it is licensed to:

![861_2_hfkb-1130-img-02_950x238](/images/endpointpolicymanager/license/861_2_hfkb-1130-img-02_950x238.webp)

You then use the Group Policy editor to consume the license and the result would look something like
this.

![861_3_hfkb-1130-img-03_950x447](/images/endpointpolicymanager/license/861_3_hfkb-1130-img-03_950x447.webp)

Additionally, if you wanted to use Endpoint Policy Manager with an MDM service, we needed to cut a
second set of keys just for that scenario. That second set of licenses is an .MSI which also contain
the XMLs which enable Endpoint Policy Manager to work with an MDM service.

Tip: You can use 7zip to open an MSI and see the licenses, like this.:

![861_4_hfkb-1130-img-04_950x320](/images/endpointpolicymanager/license/861_4_hfkb-1130-img-04_950x320.webp)

## Understanding Universal Licenses

Universal licenses solve a lot of problems around key generation:

- Instead of having one set for Active Directory (GPO / SCCM or other on-prem and another for MDM,
  we can generate one key which can be used in both places.
- Administrators may select which types of policies are honored (Group Policy-based, XML-files
  based, or coming from MDM).
- All components purchased can be in one XML file
- Some components which have capabilities may be specified with those capabilities. This is not
  available in Legacy license type.
- For MDM customers, we can specify EITHER Intune Company name or UPN name.
  [What is the difference if I license my MDM machines' CSE using COMPANY NAME vs. UPN name?](/docs/endpointpolicymanager/licensing/knowledgebase/requestingmdm/name.md)
  This is not available for Legacy license type.
- Administrators may disable a specifically licensed component, without having to request Endpoint
  Policy Manager support to re-cut the license.
  [How do I specifically exclude or prevent a component from performing processing by modifying the license file?](/docs/endpointpolicymanager/licensing/knowledgebase/activedirectorygposccm/componentsexclude.md)
- The license may be wrapped up by the admin as a .MSI and re-deployed without contacting Endpoint
  Policy Manager support to make a .MSI.
  [How to install UNIVERSAL licenses for NEW Customers (via GPO, SCCM or MDM)](/docs/endpointpolicymanager/licensing/videolearningcenter/installall/installuniversal.md)

![861_5_hfkb-1130-img-05_950x431](/images/endpointpolicymanager/license/861_5_hfkb-1130-img-05_950x431.webp)

In the Group Policy editor you can consume the Universal license and it will look like this.

![861_6_hfkb-1130-img-06_950x670](/images/endpointpolicymanager/license/861_6_hfkb-1130-img-06_950x670.webp)

And finally using` PPUPDATE` command on the endpoint, you can see how you are licensed :

![861_7_hfkb-1130-img-07_950x984](/images/endpointpolicymanager/license/861_7_hfkb-1130-img-07_950x984.webp)

