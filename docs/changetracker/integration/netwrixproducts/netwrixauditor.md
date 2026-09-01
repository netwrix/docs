---
title: "Netwrix Auditor Integration"
description: "Netwrix Auditor Integration"
sidebar_position: 10
---

# Netwrix Auditor Integration

The integration between Netwrix Change Tracker and Netwrix Auditor forwards Change Tracker events to
Auditor. The Change Tracker notification profile controls which type of event Change Tracker
forwards.

![usernotifications_1122x481](/images/changetracker/integration/netwrixproducts/usernotifications_1122x481.webp)

In this example notification profile, unplanned changes for systems in the Windows 2019 Auditor
group, and compliance reports that run against the Windows 2019 group, generate notifications that
Change Tracker pushes to Auditor.

Change Tracker pushes change events to Auditor via Auditor's API. Once in Auditor, you can mine
these events with the search functionality. Using the search option, you can use information
gathered by Change Tracker to create reports and alerts, or merge it with data Auditor gathers
natively.

![auditorsearch_1117x430](/images/changetracker/integration/netwrixproducts/auditorsearch_1117x430.webp)

This integration lets Auditor gather information about the monitored environment that it can't
collect natively, such as file changes on a monitored website.

![auditoroperator_1115x182](/images/changetracker/integration/netwrixproducts/auditoroperator_1115x182.webp)

You can save search criteria like this to generate reports or alerts.

![auditorsearchresults_1090x638](/images/changetracker/integration/netwrixproducts/auditorsearchresults_1090x638.webp)
