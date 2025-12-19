---
title: "Hosts Node"
description: "Hosts Node"
sidebar_position: 10
---

# Hosts Node

The Hosts node provides the option to assign a preconfigured host list at the job level. It also
provides a way to manually assign hosts to be targeted by the job using Host Selection pane.

![Host Selection page](/images/accessanalyzer/11.6/admin/jobs/job/configure/hostselection.webp)

Use the default settings by selecting the **Use Default Setting** checkbox and inherit the job
group’s assigned host lists. To break inheritance and assign host lists at the job level select from
the available host lists.

Hosts added manually at the job level are added to the Master Host Table if not already there, and
it triggers a host inventory query according to the global settings. The host will not be added to
any individual host lists. See the [Manually Add Hosts to a Job](#manually-add-hosts-to-a-job) topic
for additional information.

Click **Save** to apply any changes to the host selection. Changes are not implemented unless they
are saved.

## Manually Add Hosts to a Job

Hosts can be added manually at the job level even when inheritance (Use Default Setting) is used for
host list assignment. The job targets the hosts in any assigned host lists as well as any manually
added at the job level. Follow these directions to manually add a host to a job.

![Job's Configure > Hosts node](/images/accessanalyzer/11.6/admin/jobs/job/configure/hostsnode.webp)

**Step 1 –** Navigate to the job’s **Configure** > **Hosts** node.

![Individual hosts section of the Host Selection view](/images/accessanalyzer/11.6/admin/jobs/job/configure/hostselectionindividualhosts.webp)

**Step 2 –** In the Individual hosts section of the Host Selection view, enter the Host name in the
textbox and click **Add**.

**Step 3 –** Repeat the previous step for each host to be added.

**Step 4 –** Click **Save** and then **OK** to confirm the changes.

The manually added host is now targeted by the job.
