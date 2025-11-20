---
title: "Elevating MSI Installer Files"
description: "Elevating MSI Installer Files"
sidebar_position: 20
---

# Elevating MSI Installer Files

Endpoint Policy Manager can be used to elevate MSI applications to allow end users to install them
by themselves. If you followed along in the Quick Start, you previously downloaded Skype for
desktop, which is an MSI file. Attempting to run Skype Setup as a Standard User is blocked, as
previously demonstrated.

You can enable a Standard User to install the MSI application by selecting **Add** > **New Windows
Installer Policy** from the drop-down menu, as shown here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/elevate/elevating_msi_installer_files.webp)

At this point, a prompt will appear for a Simple rule or a Combo rule. For the Quick Start, we
suggest choosing **Use Simple rule (recommended)** as we have shown previously. Then, on the
Conditions page, options to select **Path**, **Hash**, **Signature**, or **Product Info** are
available. For this Quick Start, we suggest you select **Hash**.

:::note
We realize that hash values often change for installers, but using Hash is only for the
Quick Start. To learn how to authorize users to keep applications up to do date, learn about Combo
rules in [Best Practices and Miscellaneous Topics](/docs/endpointpolicymanager/components/endpointprivilegemanager/manual/windows/overviewmisc/overviewmisc.md).
:::


On the next page, click **Select windows installer** and select the SkypeSetup.MSI package
(previously downloaded).

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/elevate/elevating_msi_installer_files_1.webp)

You will then see the Hash information automatically entered. Click **Next**. On the Select Action
page, select **Run with elevated privileges** and click **Next**. On the Settings page, enter a name
for the policy and click **Finish**.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/elevate/elevating_msi_installer_files_2.webp)

Now you will see an entry in the Endpoint Policy Manager (formerly PolicyPak) Least Privilege
Manager MMC.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/elevate/elevating_msi_installer_files_3.webp)

Run GPupdate on the endpoint, and then, as a Standard User, try to run the Skype MSI installer
again. This time the UAC prompt is removed from the Install icon, and the MSI application should
install as expected.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/elevate/elevating_msi_installer_files.webp)



