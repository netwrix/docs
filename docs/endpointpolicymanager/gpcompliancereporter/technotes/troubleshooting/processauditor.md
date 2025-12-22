---
title: "When does the Auditor process send up events to the server?"
description: "When does the Auditor process send up events to the server?"
sidebar_position: 60
---

# When does the Auditor process send up events to the server?

So the ` Auditor.exe` process is kicked off via a scheduled task based upon specific Group Policy
event IDs. An example task can be seen below.

![741_1_image-20200409172758-1_950x798](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/741_1_image-20200409172758-1_950x798.webp)

Since it can be a little hard to read, here's what event IDs will trigger the running of the
Auditor:

- Event IDs 8000 - 8007 (inclusive.)
- Event IDs 7000 -7007 (inclusive.)

Events 8000 - 8007 are SUCCESS events when Group Policy succeeds. Events 7000 - 7007 are FAIL events
when Group Policy fails to process. The SUCCESS IDs translate to the following:

![741_3_image-20200409172758-2_950x382](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/741_3_image-20200409172758-2_950x382.webp)

When clients OSs update: Note that on Windows 8.1 and later you will typically not find event IDs
8004 and 8005.. even when the computer is left to perform background policy processing.

This is because the Group Policy Service comes into memory every 90 minutes or so, then creates a
scheduled task to perform a GPupdate.

Therefore, When server OSs update: On Servers you will see event IDs 8006 and 8007 because they are
considered "Always on, Always connected." You can change the CLIENT OS behavior back to the Windows
7 behavior with the following policy setting "Turn off Group Policy Client Service AOAC
optimization."

![741_5_image-20200409172758-3_950x482](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/741_5_image-20200409172758-3_950x482.webp)

So, after the ` Auditor.exe` is run because of an event ID, it sends (or doesn't send) information
back to the server based upon its defaults -or- what's set in the PPGPCR ADMX settings.

Here are defaults for PPGPCR Auditor:

- `RunOnLogon = false`
- `RunOnBackground = true` (this typically grabs successful events from Servers; event IDs 8006
  & 8007)
- `RunOnNetworkChange = false`
- `RunOnManual = true` (this typically grabs successful events from Client OSs; event IDs 8004
  & 8005)
- `RunOnCreate = false`
- `RunOnlyOnUserEvents = false`

If you turn on enhanced PPGPCR Auditor logging (as explained in this article) you can illuminate:

- Which event ID kicked off the auditor
- What the auditor thinks / should send up data
- And did the data get sent successfully to the server.

![741_7_image-20200409172758-4_950x475](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/741_7_image-20200409172758-4_950x475.webp)

