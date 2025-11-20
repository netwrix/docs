---
title: "Set Up Task Delivery"
description: "Set Up Task Delivery"
sidebar_position: 40
---

# Set Up Task Delivery

**Step 1 –** At this point, you're ready to create the scheduled task. The easiest method is to
create a new GPO and deliver a Group Policy Preference scheduled task item, as shown in Figure 51.

![gpcr_server_with_push_mode_15](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/push/setup/gpcr_server_with_push_mode_15.webp)

Figure 51. Creating a new GPO to deliver a Group Policy Preference scheduled task item.

**Step 2 –** Click "Next," then provide a new name for the new GPO. When you do, a new GPO is
created in the Group Policy Objects node within the GPMC, as shown in Figure 52. In this example,
the GPO is called "\_PPGPCR Auditor Scheduled Task."

![gpcr_server_with_push_mode_16](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/push/setup/gpcr_server_with_push_mode_16.webp)

Figure 52. The newly created GPO.

**Step 3 –** Then, take note of the Group Policy Settings Report of the GPO. You can see that the
scheduled task will run as SYSTEM when Group Policy events occur. It will run PPGPCR.Auditor.exe one
minute after Group Policy processes and will send results to the server, as shown in Figure 53.

![gpcr_server_with_push_mode_17](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/push/setup/gpcr_server_with_push_mode_17.webp)

Figure 53. The Group Policy Settings Report.

**Step 4 –** The quickest way to link the GPO would be by linking it to the whole domain, but you
can link it to any level (or multiple levels) if you want. The only requirements for endpoints are
that they are (a) licensed and (b) contained within the security group specified in the Audited
group, as covered in the previous section, "Select Audited Computers."

