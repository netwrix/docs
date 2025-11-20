---
title: "Microsoft Group Policy Results Report"
description: "Microsoft Group Policy Results Report"
sidebar_position: 10
---

# Microsoft Group Policy Results Report

Netwrix Endpoint Policy Manager (formerly PolicyPak) GPCR gets information about if a Group Policy
setting was delivered to a specific collection of computers (also known as endpoints). It goes a
step further than Microsoft's in-the-box GPMC, which can provide a Group Policy Results report (see
Figure 1). The Microsoft report tells the administrator what one user on any one particular machine
does. It does not describe whether that user or system is actually in compliance with an established
IT baseline.

![gpcr_concepts_and_quickstart](/images/endpointpolicymanager/grouppolicycompliancereporter/gpcr_concepts_and_quickstart.webp)

Figure 1. Microsoft Group Policy Results Report targets a single user on a single machine.

In order to assess compliance with the in-box Group Policy Results Report, the report (see Figure 2)
must be reviewed manually. Admins must go through the reports for each machine and user combination
to determine whether specific settings have been applied.

![gpcr_concepts_and_quickstart_1](/images/endpointpolicymanager/grouppolicycompliancereporter/gpcr_concepts_and_quickstart_1.webp)

Figure 2. The Group Policy Results Report.

Endpoint Policy Manager GPCR can do three things that Microsoft's Group Policy Results Report
cannot:

- Define an IT department's compliance standards
- Provide results in real time via interrogation (pull) or clientless auditing (push)
- Share data, tests, and reports with multiple admins

Endpoint Policy Manager GPCR allows you to define pass/fail settings compliance across your network,
providing a metric to test against. Its two modes of operation, pull mode and push mode, are
described next.

