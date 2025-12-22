---
title: "Configure AWS Instance"
description: "Configure AWS Instance"
sidebar_position: 10
---

# Configure AWS Instance

Follow the steps below to configure an AWS instance.

**Step 1 –** Log in to the AWS Management Console and navigate to Amazon EC2 launch wizard.

**Step 2 –** Select Netwrix Privilege Secure in the software list and launch the instance. You can
do it via the launch wizard or using Amazon Marketplace Web Service (API). For detailed instructions
on how to use instance, see the
[Launching an AWS Marketplace Instance](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/launch-marketplace-console.html)
Amazon article.

- Netwrix recommends selecting instance type t2.medium and above.

- For your convenience, you can rename instance, e.g. "Netwrix Privilege Secure".

The instance may take a few minutes or more to launch. Although your Instance State is "running", it
may be unavailable. You can check the image health in two ways:

- Right-click the **instance** and select **Instance Settings** > **Get Instance Screenshot** and
  review image current state.
- Right-click the **instance** and select **Instance Settings** > **Get System Log**. Empty log
  means that your image is still being prepared.

Wait until the System Log contains the Windows is Ready for Use message and connect to the instance.

**Step 3 –** In the Connect To Your Instance dialog, select **Get Password** next to Password.

**Step 4 –** Select your **Key Pair file** and click **Decrypt Password**. See the
[Amazon EC2 Key Pairs and Windows Instances](http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-key-pairs.html)
Amazon article for additional information.

**Step 5 –** Copy the password.

Consider that this password will be used to connect to the instance where the product is going to be
deployed. It will also function as a service password for Netwrix Privilege Secure and SQL Server
and Reporting Services.

:::note
You can always reset it later upon Netwrix Privilege Secure deployment completion. See the
[Reset your Windows password](https://support.microsoft.com/en-us/help/14048/windows-7-reset-your-windows-password)
Microsoft article for additional information.
:::


**Step 6 –** Select **Download Remote Desktop File** and launch the Remote Desktop Connection window
by clicking the downloaded **RDP file**.

**Step 7 –** In the Windows Security dialog, provide the password you have copied on the step 5 and
log on to the instance.

Ignore the security certificate errors warnings. An AWS Instance has been configured for Netwrix
Privilege Secure.
