---
title: "How would I verify if Endpoint Policy Manager Client Side Extension is / is not causing high or CPU disk slowdowns?"
description: "How would I verify if Endpoint Policy Manager Client Side Extension is / is not causing high or CPU disk slowdowns?"
sidebar_position: 20
---

# How would I verify if Endpoint Policy Manager Client Side Extension is / is not causing high or CPU disk slowdowns?

So there are lots of reasons why you might see 99% disk, and it doesn't have to be Netwrix Endpoint
Policy Manager (formerly PolicyPak) causing it.

Here's an example scenario…

![369_1_faq-913-01](/images/endpointpolicymanager/troubleshooting/369_1_faq-913-01.webp)

First:There are known bugs which push the utilization up to 100% from MS.
Example:[https://support.microsoft.com/en-us/help/3083595/task-manager-might-show-100-disk-utilization-on-windows-10-devices-wit](https://support.microsoft.com/en-us/help/3083595/task-manager-might-show-100-disk-utilization-on-windows-10-devices-wit)

Second: Task Manager isn't the most reliable about actually showing truth. Disk usage demonstrated
in Task Manager is not about MB/s. It's about the number of I/O operations (reads and writes) .

Note that Taskman has a way to view the number of I/O operations on the details tab, but that is not
in this shot.

Regardless, since it shows only CURRENT value, (and the total Disk usage is not shown on that tab),
we suggest using perfmon that shows a nice graph with relationships.

Doing this allows to see a correlation between process disk usage (# of I/O operations/sec) and
total disk usage (100%-%Idle time) (if any exist).

**Step 1 –** So to verify and see if Endpoint Policy Manager is the actual cause for high disk
utilization, you can get REAL DATA how to use science to troubleshoot it.

**Step 2 –** When you suspect high-disk utilization from Endpoint Policy Manager, use TaskMan, then
right-click on the Endpoint Policy Manager Helper Service, click Go to details (this may be
important to select the right process), then on the Details tab right-click on the selected process
and Create dump file. We can analyze this and it tells us a lot.

**Step 3 –** Run `perfmon.exe` to see a relationship graph. Clear out any existing counters.

![369_2_faq-913-02](/images/endpointpolicymanager/troubleshooting/369_2_faq-913-02.webp)

**Step 4 –** Next you need to add new counters for PPExtensionSvc disk usage. To do this, find
PROCESS then EXPAND.

![369_3_faq-913-03](/images/endpointpolicymanager/troubleshooting/369_3_faq-913-03.webp)

**Step 5 –** Expand the Process item from the top list, select only:

- I/O Data Operations/sec and
- I/O Other Operations/sec then from the bottom list select

![369_4_faq-913-04](/images/endpointpolicymanager/troubleshooting/369_4_faq-913-04.webp)

**Step 6 –** From Logical Disk, you want to add the following items (only ONE of which is shown in
the screenshot).

1. %Idle Time
2. Current Disk Queue Length and
3. Split IO/Sec

:::note
Ensure \_Total selected in the bottom list.
:::


![369_5_faq-913-05](/images/endpointpolicymanager/troubleshooting/369_5_faq-913-05.webp)

Your total counters should look like this.. when sorted by OBJECT:

![369_6_faq-913-06](/images/endpointpolicymanager/troubleshooting/369_6_faq-913-06.webp)

**Step 7 –** Optionally, add anything else that could be getting in the way or adding to high disk
activity, like `DISM.EXE` which was seen in the first screenshot which is known for high disk
usage. 

**Step 8 –** This step is the same as adding other processes for disk usage, except
that`DISM.EXE`should be selected from the bottom list.

Results / what you're looking for:

**Step 9 –** See the correlation between Process and Disk counters if any:

1. For instance, if the Disk %Idle Time is low (so the disk is being actively used)
2. And PPExtensionService I/O Data Operations/sec is ALSO LOW…

**Step 10 –** …then it's NOT PPExtensionService causing high disk usage and maybe `DISM.EXE` I/O
Data Operations/sec is high at the same time.

If you still think Endpoint Policy Manager is causing high disk usage / slowdowns we need:

**Step 1 –**
[What must I send to Endpoint Policy Manager support in order to get the FASTEST support?](/docs/endpointpolicymanager/gettingstarted/misc/knowledgebase/troubleshooting/fastsupport.md)

**Step 2 –** Screenshot of the perfmon as configured above running for a full minute.

**Step 3 –** Dump file created with task manager.

