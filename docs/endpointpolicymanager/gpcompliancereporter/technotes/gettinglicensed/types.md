---
title: "What kinds of licenses are there for Endpoint Policy Manager Group Policy Compliance Reporter?"
description: "What kinds of licenses are there for Endpoint Policy Manager Group Policy Compliance Reporter?"
sidebar_position: 20
---

# What kinds of licenses are there for Endpoint Policy Manager Group Policy Compliance Reporter?

You can use Netwrix Endpoint Policy Manager (formerly PolicyPak) Group Policy Compliance Reporter
with one of two different types of license agreements.

All endpoints must have a Endpoint Policy Manager Group Policy Compliance Reporter (Endpoints)
license for GPCR Server to light up and report back anything. An example screenshot of a licensed
GPO report is below.

![447_1_image-20230404065639-1_799x472](/images/endpointpolicymanager/grouppolicycompliancereporter/license/447_1_image-20230404065639-1_799x472.webp)

If you rename a computer to have COMPUTER in the name, then that is a Trial License. Please note
that this type is for testing only and is Not Recommended for production roll-out.

More about Trial License is in this KB:
[What is the fastest way to get started in an Endpoint Policy Manager trial, without running the License Request Tool?](/docs/endpointpolicymanager/licensing/knowledgebase/requestingall/trial.md)

The software is contained within the standard BITS download from the portal. You simply set it up as
seen in the Endpoint Policy Manager Group Policy Compliance

Reporter videos. Then you add the license file where endpoints will consume the license. Then the
PAY version is activated.

The Paid License (which requires a licensing XML file), enables unlimited use of the reporting tool:

- You can use Pull mode.
- You can use Push mode (with the server component.)
- You can report upon Endpoint Policy Manager product Group Policy settings (e.g. Application
  Manager and Admin Templates Manager)
- You can report upon Microsoft Group Policy settings (Group Policy ADM/ADMX settings within the
  Microsoft "Administrative Templates Node", most Microsoft Group Policy Preferences item types,
  mostly all Microsoft Group Policy Security Settings)

