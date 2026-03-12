---
title: "Verifying PolicyPak Cloud Is Working"
description: "Verifying PolicyPak Cloud Is Working"
sidebar_position: 10
---

# Verifying PolicyPak Cloud Is Working

We have pre-populated your PolicyPak Cloud instance with some PolicyPak
Cloud XML directives so you can immediately see PolicyPak Cloud work. In the example
below we show you how PolicyPak Cloud downloads XML files and applies them to your
Windows machines.

## PolicyPak Shortcut Preferences

We have pre-loaded a Group Policy Preferences shortcut item to display a shortcut to
[www.policypak.com](https://www.policypak.com/) on the desktop for all joined machines. You can see
the [www.policypak.com](https://www.policypak.com/) icon on the desktop of your client machine
immediately after successfully joining PolicyPak Cloud.

![policypak_cloud_quickstart_5_624x496](/images/policypak/cloud/endpointpolicymanager_cloud_quickstart_5_624x496.webp)

## PolicyPak Admin Templates Manager

You can see an example of PolicyPak Admin Templates Manager directives by checking out
example XML policies for the screen saver. Below you can see three policies affecting the screen
saver (rolled up into one XML file directive):

- Set the screen saver to **Ribbons**
- Set the number of minutes for screen saver timeout to 17 minutes
- Set **On resume, display logon screen**

:::note
**Personalization** window might show **Screen Saver: None**, but in reality you can see
that the screen saver is being set in the **Screen Saver Settings** window.
:::


![policypak_cloud_quickstart_6_624x426](/images/policypak/cloud/endpointpolicymanager_cloud_quickstart_6_624x426.webp)

## PolicyPak Security Settings Manager

We have pre-populated a PolicyPak Security Settings XML file. This file will change
the Security Options setting in **Accounts: Rename guest account** by populating and locking the
value to **policypakGuest**. To verify this occurred, you need to run an elevated command prompt,
then run GPedit.MSC. Then you can go to **Local Computer** > **Computer Configuration** > **Security
Settings** > **Security Options** to see the results.

![policypak_cloud_quickstart_7_499x259](/images/policypak/cloud/endpointpolicymanager_cloud_quickstart_7_499x259.webp)

## PolicyPak Application Settings Manager

If you pre-loaded WinZip 14.5 as instructed, a PolicyPak Application Settings Manager
XML data file is pre-populated to demonstrate managing applications. Just run WinZip 14, and you
should see the configuration settings.

![policypak_cloud_quickstart_8_499x245](/images/policypak/cloud/endpointpolicymanager_cloud_quickstart_8_499x245.webp)

PolicyPak Application Settings Manager's WinZip has directives for the Passwords and
Cameras tabs, which were pre-populated from an example file in PolicyPak Cloud.

## PolicyPak Browser Router

If you installed Chrome and Firefox you are welcome to test PolicyPak Browser Router.
For a very quick test, run Chrome and see the PolicyPak Browser Router extension get
loaded. Note this pop-up should only happen one time per user. Then, in the search bar, type
[www.policypak.com](https://www.policypak.com/) and hit enter.

![policypak_cloud_quickstart_9_624x391](/images/policypak/cloud/endpointpolicymanager_cloud_quickstart_9_624x391.webp)

When you do, Chrome l automatically closes and IE automatically opens because of the route set in
the policy. An example is shown below.

![policypak_cloud_quickstart_10_624x238](/images/policypak/cloud/endpointpolicymanager_cloud_quickstart_10_624x238.webp)

## Manually Syncing with PolicyPak Cloud

The final way to verify your client machine's connection to PolicyPak Cloud is to run
ppcloud /sync. You should get something like what is shown below. Here you can see which groups the
computer is a member of.

![policypak_cloud_quickstart_11_624x384](/images/policypak/cloud/endpointpolicymanager_cloud_quickstart_11_624x384.webp)

Below you can see which components are licensed and how long each each one is valid.

![policypak_cloud_quickstart_12_468x336](/images/policypak/cloud/endpointpolicymanager_cloud_quickstart_12_468x336.webp)

Here you can see which XML data files (directives) are being delivered to this computer.

![policypak_cloud_quickstart_13_468x265](/images/policypak/cloud/endpointpolicymanager_cloud_quickstart_13_468x265.webp)

:::note
By default your computer is only a member of two special built-in groups named **All** and
**Unassigned**.
:::


These examples show that PolicyPak Cloud is working. You are now all set up and ready
to create and upload your own directives to PolicyPak Cloud.

