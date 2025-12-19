---
title: "Policy Comparison Window"
description: "Policy Comparison Window"
sidebar_position: 30
---

# Policy Comparison Window

When you edit a policy, the change creates an alert in the Alerts interface. You can track the
changes made to the policy through a comparison of the new xml with the old xml. Threat Prevention
uses fc.exe to do a comparison but you can also employ a third party comparison tool for better
results.

Follow the steps to run a comparison.

**Step 1 –** Click **Alerts** in the left pane to launch the Alerts interface.

**Step 2 –** On the Alerts interface, click the **Policy updated on server Changeset #[number]**
link in the Message column for an alert. The Policy Comparison window opens, where you can view the
changes made to the policy against the respective alert.

![olicy Comparison window ](/images/threatprevention/7.4/admin/alerts/window/policycomparison.webp)

**Step 3 –** On the Policy Comparison windowthe old xml displays on the left and the modified xml on
the right.

**Step 4 –** _(Optional)_ Click the **Configure** icon next to the Run Different Tool button. The
File Comparison Tool window opens. In the Path to Comparison Tool box, provide the path to the file
comparison tool location in quotations. Next, add **%1 %2** after the quoted location path. for
example, _cmd.exe /K fc.exe %1 %2_. Click **OK** to close the window.

:::note
By default, fc.exe is specified as the path but it is recommended to replace this with a
path to a Windows based comparison tool such as Beyond Compare for best results.
:::


**Step 5 –** On the Policy Comparison window, click **Run Difference Tool** to run the specified
compare command using the third party comparison tool.

A window displays the policy comparison results.
