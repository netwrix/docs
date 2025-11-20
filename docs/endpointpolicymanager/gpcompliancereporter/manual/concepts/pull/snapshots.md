---
title: "Snapshots Pane"
description: "Snapshots Pane"
sidebar_position: 10
---

# Snapshots Pane

When you click on the Snapshots pane, the other two panes move to the right side of the screen. In
the Snapshots pane, you can right-click within the "Computer Sets and Snapshots" space and select
"Create computer set," as shown in Figure 12.

![gpcr_concepts_and_quickstart_13](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/pull/gpcr_concepts_and_quickstart_13.webp)

Figure 12. Creating a computer set.

A computer set is a specific set of OUs (or the entire domain) that contains computers. A computer
set named "All my computers" could be used for the whole domain, as shown in Figure 13.

![gpcr_concepts_and_quickstart_14](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/pull/gpcr_concepts_and_quickstart_14.webp)

Figure 13. Selecting the entire domain as a computer set.

Alternatively, you can select specific OUs or sub-OUs, as shown in Figure 14. However, note that
when a child is selected, its parents are always selected (and cannot be unselected).

![gpcr_concepts_and_quickstart_15](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/pull/gpcr_concepts_and_quickstart_15.webp)

Figure 14. Selecting a child OU.

Once you've defined a computer set, right-click on it and select "Create snapshot," as shown in
Figure 15.

![gpcr_concepts_and_quickstart_16](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/pull/gpcr_concepts_and_quickstart_16.webp)

Figure 15. Creating a snapshot of the computer set.

When you right-click on the computer set, Endpoint Policy Manager GPCR will query all machines in
the computer set to determine what Group Policy information is on them, also known as the resultant
set of policy (RSOP).

:::note
Creation of computer sets is optional when using the Endpoint Policy Manager GPCR server
and clientless auditing (push mode).
:::


In order to create a snapshot, you must have administrative rights on the target machine in order to
return RSOP. As the snapshot is created, each computer is queried to determine whether it will
return a response. If available, it will also return its licensed state status and the method used
to acquire that license (file-based, GPO-based, cloud-based, or trial). Additionally, as soon as
data is pulled, you can double-click any row in the Snapshot Contents (RSOPs) pane and immediately
obtain a report of the computer and last logged-in user, as shown in Figure 16.

![gpcr_concepts_and_quickstart_17](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/pull/gpcr_concepts_and_quickstart_17.webp)

Figure 16. Obtaining a report from the Snapshot Contents pane.

Several values are possible for the Status column in the Snapshot Contents (RSOPs) pane. These
values are shown in Table 3.

Table 3: Values of the Status column.

| Status                | Meaning                                                                                                                                      | Returned Result                                                            |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| OK or OK Full License | This endpoint has a full Endpoint Policy Manager GPCR license. This license could come from a file, a GPO, or Endpoint Policy Manager Cloud. | Everything supported (Microsoft data and all Endpoint Policy Manager data) |
| OK: Trial Mode        | This endpoint has "computer" in the name and is in trial mode.                                                                               | Everything supported (Microsoft data and all Endpoint Policy Manager data) |
| No License            | The endpoint responded, but has neither a Endpoint Policy Manager GPCR license nor an Application Settings Manager license.                  | Nothing will be reported                                                   |
| Connection Error      | Endpoint did not respond, endpoint was off, firewall was on, ports were blocked, or connection request was not accepted                      | Nothing will be reported                                                   |

If you wish to retry the computers that have any types of errors, click "Retry all failed
computers," as shown in Figure 17. If all your computers return a status of "Connection Error," the
typical problem is that the Windows firewall does not permit remote requests from administrators.
This can be easily fixed using Group Policy (see the troubleshooting section for details).

![gpcr_concepts_and_quickstart_18](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/pull/gpcr_concepts_and_quickstart_18.webp)

Figure 17. Retrying failed computers.

After a snapshot is created, you can right-click on it and rename it if you wish. In Figure 18, you
can see a renamed snapshot after it is taken.

![gpcr_concepts_and_quickstart_19](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/pull/gpcr_concepts_and_quickstart_19.webp)

Figure 18. Renaming a snapshot once taken.

At this point, you have a snapshot created for the computer set. Now you're ready to move on to
creating tests.

