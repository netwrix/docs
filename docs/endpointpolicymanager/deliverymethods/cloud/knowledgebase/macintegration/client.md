---
title: "What are the step by step instructions to install the MacOS Client for Endpoint Policy Manager Cloud manually?"
description: "What are the step by step instructions to install the MacOS Client for Endpoint Policy Manager Cloud manually?"
sidebar_position: 10
---

# What are the step by step instructions to install the MacOS Client for Endpoint Policy Manager Cloud manually?

![888_1_image001_950x671](/images/endpointpolicymanager/cloud/install/mac/888_1_image001_950x671.webp)

**Step 1 –** First download the MacOS Client for Netwrix Endpoint Policy Manager (formerly
PolicyPak) Cloud as seen here.

**Step 2 –** Download the Endpoint Policy Manager Cloud PFX file like what's seen here (requires a
password) and keep the file and password handy.

![888_2_image002_950x256](/images/endpointpolicymanager/cloud/install/mac/888_2_image002_950x256.webp)

**Step 3 –** Next, double-click on the installer to run. When the installer finishes, the Endpoint
Policy Manager command will be installed for all users.

![888_3_image_10_950x461](/images/endpointpolicymanager/cloud/install/mac/888_3_image_10_950x461.webp)

**Step 4 –** After installation completes you will be asked to "Open Preferences" like what's seen
here.

![888_4_image_11_950x745](/images/endpointpolicymanager/cloud/install/mac/888_4_image_11_950x745.webp)

**Step 5 –** Select Privacy, then Unlock, and then grant Endpoint Policy Manager access to the Disk
like what's seen here.

![888_5_image_12_950x864](/images/endpointpolicymanager/cloud/install/mac/888_5_image_12_950x864.webp)

At this point the MacOS Client for Endpoint Policy Manager Cloud is installed, but it is not yet
enrolled in Endpoint Policy Manager Cloud.

**Step 6 –** Using the SUDO command, register the machine in Endpoint Policy Manager Cloud with the
certificate you downloaded earlier.

1. Open a terminal window
2. Enter the following command

   `sudo policypak cloud-register --certificate /path/to/certificate.pfx --password 'certificate_password' `

   Where:
   ` /path/to/certificate.pfx` - the folder in which the certificate was downloaded.

   "certificate_password" - the password that was added when exporting the certificate. Export from
   step 3.

**Step 7 –** After completing the operation, the message "`Registered: YES` " should appear in the
terminal window.

![888_6_image_13_950x238](/images/endpointpolicymanager/cloud/install/mac/888_6_image_13_950x238.webp)

Now the `PolicyPak` command is registered and available to use, but it must be run as root (or under
sudo.)

![888_7_image_14_950x292](/images/endpointpolicymanager/cloud/install/mac/888_7_image_14_950x292.webp)

**Step 8 –** Sync with Endpoint Policy Manager Cloud with the command

`sudo policypak sync`

When you see Synchronized: Yes you are ready to make rules in Endpoint Policy Manager Cloud.

![888_8_image_15_950x267](/images/endpointpolicymanager/cloud/install/mac/888_8_image_15_950x267.webp)

You should see your Mac in the MacOS | All group like what's seen here.

![888_9_image_16_950x511](/images/endpointpolicymanager/cloud/install/mac/888_9_image_16_950x511.webp)


