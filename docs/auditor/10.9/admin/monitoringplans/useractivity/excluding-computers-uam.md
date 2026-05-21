---
title: "Excluding Computers from User Activity Monitoring"
description: "Excluding Computers from User Activity Monitoring"
sidebar_position: 10
---

# Excluding Computers from User Activity Monitoring

You can narrow the monitoring scope of a User Activity Monitoring plan by excluding specific objects from data collection. Exclusions can be configured at the item level for both AD container and IP range items.

## Excluding Computers from an AD Container

When monitoring an Active Directory OU, you can exclude specific computers or entire sub-OUs within that container. This is useful when an OU contains computers that are inaccessible or irrelevant to user activity tracking – such as cluster nodes, virtual machine accounts, or system-managed hosts – that would otherwise generate recurring errors and warnings.

**To exclude computers or OUs from an AD container item:**

**Step 1** – In the main Netwrix Auditor menu, select **Monitoring Plans**.

**Step 2** – Select your User Activity monitoring plan and click **Edit**.

**Step 3** – Click **Edit item** in the right pane, then select **Containers and Computers**.

**Step 4** – Select the **Exclude these objects** checkbox and click **Add Computer** to exclude specific computers, or **Add AD Container** to exclude an entire OU.

![Containers and Computers tab showing Exclude these objects checkbox with a computer added](/images/auditor/10.9/admin/monitoringplans/useractivity/uam-exclude-computers.webp)

**Step 5** – Click **Save & Close**.

**NOTE:** Removing a computer or OU from the exclusion list resumes monitoring without requiring the plan to be recreated.

## Excluding IP Subranges from an IP Range

When monitoring an IP range, you can exclude specific subranges from data collection.

**To exclude IP subranges from an IP range item:**

**Step 1** – In the main Netwrix Auditor menu, select **Monitoring Plans**.

**Step 2** – Select your User Activity monitoring plan and click **Edit**.

**Step 3** – Click **Edit item** in the right pane.

**Step 4** – Click **Exclude** next to the IP range fields.

![Add Item IP range page showing the Exclude button](/images/auditor/10.9/admin/monitoringplans/useractivity/uam-ip-range-exclude-button.webp)

**Step 5** – In the **Exclude Subranges** dialog, specify the **Start IP** and **End IP** for each subrange you want to exclude. Click **+ Add** to add more subranges.

![Exclude Subranges dialog with Start IP and End IP fields](/images/auditor/10.9/admin/monitoringplans/useractivity/uam-ip-range-exclude-subranges.webp)

**Step 6** – Click **OK**, then click **Save & Close**.

**NOTE:** Exclusions apply only to the specific monitoring plan item in which they are configured.

## Related Topics

- [Health Log](/docs/auditor/10.9/admin/healthstatus/dashboard/healthlog.md)
- [Monitoring Plans - User Activity](/docs/auditor/10.9/admin/monitoringplans/useractivity/overview.md)
