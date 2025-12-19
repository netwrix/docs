---
title: "Checking the Event Viewer"
description: "Checking the Event Viewer"
sidebar_position: 40
---

# Checking the Event Viewer

Endpoint Policy Manager logs events to Windows Event log. In the Event Viewer | Application and
Services Log | Endpoint Policy Manager look for Endpoint Policy Manager k Java Rules Manager Client
events. Specifically, Event 8021 will show the XML used to write the Java Rules, as shown in
Figure 34.

![troubleshooting_policypak_5](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/troubleshooting_endpointpolicymanager_5.webp)

Figure 34. Event 8021 shows the XML used to write the Java Rules.

Event Forwarding, which is built into Windows, can be set up. Information on Event Forwarding is
demonstrated here:
[https://blogs.technet.microsoft.com/jepayne/2015/11/23/monitoring-what-matters-windows-event-forwarding-for-everyone-even-if-you-already-have-a-siem/](https://blogs.technet.microsoft.com/jepayne/2015/11/23/monitoring-what-matters-windows-event-forwarding-for-everyone-even-if-you-already-have-a-siem/).


