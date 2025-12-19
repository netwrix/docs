---
title: "Operational Events"
description: "Operational Events"
sidebar_position: 30
---

# Operational Events

Events in section are divided into the following categories:

- User Action Allowed events (Event ID 1000+)
- User Action Blocked events (Event ID 2000+)
- Audit/Discovery events (Event ID 6200+)
- Admin Approval events (Event ID 6300+)

See the [List of Endpoint Policy Manager Event Categories and IDs](/docs/endpointpolicymanager/gettingstarted/misc/knowledgebase/tipstricksandfaqs/eventcategories.md)
topic for all event IDs.

Each event ID will have the following fields:

- Path
- Command line
- Process Id
- Parent Id
- Policy Object
- Collection
- Policy

Here is an example of Event 6310, which shows that a response code was accepted by user and an
application was given the OK to run:

```
Short response code verified
Dialog Guide: {68FCD989-4966-F9D4-BB1F-20630E9D5116} 
User Sid: S-1-5-21-934088035-149717768-3671783038-1116
User Name: FABRIKAM\EastSalesUser1 Process Id: 5100
Process Path: C:\Users\eastsalesuser1\Desktop\Silverlight install.exe
Command Line: "C:\Users\eastsalesuser1\Desktop\Silverlight install.exe"
Task Kind: Application Installer 
Executable File:
C:\Users\eastsalesuser1\Desktop\Silverlight install.exe 
Executable File Sha256:
742F7911C4711F500867754F2D5F84A80A1B93DDC9ED07359455549E7032 C217
File Owner Sid: S-1-5-21-934088035-149717768-3671783038- 1116
File Owner Name: No Trusted:  No Signed: Yes
Reason: Software Installation Forced Elevation: No
Code Uses: 1/1 Expiration: Never
Apply to Child Processes: Yes

```

The reason code that is written to Event 6310 is from a fixed list in the Endpoint Policy Manager
Least Privilege Manager code generator tool and is not admin- or user-definable. When the admin
chooses a reason code, as seen here, that is what is recorded within the event on the client.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/events/operational_events.webp)

An example of Event 613 can be seen here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/events/operational_events_1.webp)
