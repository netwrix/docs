---
title: "Events"
description: "Events"
sidebar_position: 50
---

# Events

Endpoint Policy Manager Remote Work Delivery Manager places events (like what is shown in Figure 57)
in the Endpoint Policy Manager log (within Applications and Services Log). All Endpoint Policy
Manager Remote Work Delivery Manager events will have the Endpoint Policy Manager Remote Work
Delivery Manager Client source type.

![tips_security_and_troubleshooting_8](/images/endpointpolicymanager/troubleshooting/remoteworkdelivery/tips_security_and_troubleshooting_8.webp)

Figure 57. Endpoint Policy Manager Remote Work Delivery Manager events can be found in the Endpoint
Policy Manager node within Application and Services.

You might want to trigger or look for certain events to know what's going on. Endpoint Policy
Manager is compatible with Event Forwarding if that's something you wish to do. Here is the list of
events in each category:

- General

  - EventId = 500: Bits became unavailable.
  - EventId = 501: Bits service is stopped.
  - EventId = 502: Bits became available.

- SMB File Copy jobs

  - EventId = 600: SMB job is created.
  - EventId = 601: SMB job gets an error.
  - EventId = 602: SMB job gets an error.
  - EventId = 603: SMB job fails with error.
  - EventId = 604: SMB job fails with error.
  - EventId = 605: SMB job is completed.
  - EventId = 606: SMB revert job is created.
  - EventId = 607: SMB revert job gets an error.
  - EventId = 608: SMB revert job gets an error.
  - EventId = 609: SMB revert job fails with error.
  - EventId = 610: SMB revert job fails with error.
  - EventId = 611: SMB revert job is completed.

- HTTP/Web Jobs:

  - EventId = 700: HTTP job is created.
  - EventId = 701: HTTP job gets an error.
  - EventId = 702: HTTP job gets an error.
  - EventId = 703: HTTP job fails with error.
  - EventId = 704: HTTP job fails with error.
  - EventId = 705: HTTP job is completed.
  - EventId = 706: HTTP revert job is created.
  - EventId = 707: HTTP revert job gets an error.
  - EventId = 708: HTTP revert job gets an error.
  - EventId = 709: HTTP revert job fails with error.
  - EventId = 710: HTTP revert job fails with error.
  - EventId = 711: HTTP revert job is completed.


