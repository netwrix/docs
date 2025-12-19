---
title: "How must I prepare for my Endpoint Policy Manager QuickStart / Onboarding?"
description: "How must I prepare for my Endpoint Policy Manager QuickStart / Onboarding?"
sidebar_position: 80
---

# How must I prepare for my Endpoint Policy Manager QuickStart / Onboarding?

:::tip
Remember, This session is designed to integrateNetwrix Endpoint Policy Manager (formerly
PolicyPak) into your environment within 60 or 90 minutes. While this may seem sufficient, the time
is limited, so preparation in advance is essential.
:::


If these steps are not completed beforehand, a significant portion of the session may be spent on
setup, potentially requiring a follow-up to address core objectives. Completing the steps below in
advance ensures the session focuses on key tasks rather than software installation or connectivity
troubleshooting.

Review all the instructions below carefully. If you have any questions about the steps, contact the
technical lead assigned to your onboarding..

Before the meeting ensure the following:

- All the items done as per these instructions on VMs or real machines, and those machines are up
  and ready to go
- All software installed, or at least downloaded and accessible to all the machines you plan to use
  during the meeting
- Everyone needed for the call is present.
- (Optional if testing Endpoint Policy Manager Cloud) you have verified that you can LOG ON to
  Endpoint Policy Manager Cloud.

## Part 1: Enabling us to control or view your GPMC machine

Remote control or view access to your admin/GPMC machine is required to observe actions and provide
guidance effectively.

:::note
The GPMC machine should be running Windows 10 or Server 2016 or later.
:::


:::tip
Remember, Endpoint Policy Manager does not require installing anything on Domain Controllers, nor
is access to a Domain Controller necessary.. If you happen to use a DC for the GPMC,it is acceptable
but not mandatory.
:::


:::note
Check this link on how to install the GPMC on your Admin / GPMC machine:
[What are the two ways that can I install the GPMC on my Admin Station (Server or Windows 10) machine?](/docs/endpointpolicymanager/installation/knowledgebase/gpoinitialinstall/methods.md)
:::


Here are the options for remote viewing of the Admin/GPMC machine:

1. Option 1 (Ours): Use the Zoom meeting
2. Option 2 (Yours): If you want to supply us with a GoToMeeting or something similar, email your
   Endpoint Policy Manager Tech Lead with the details

## Part 2: Getting organized, understanding the DC, and creating your endpoint(s)

It is important to get organized before the session starts. Follow these steps to ensure everything
is ready on your side:

**Step 1 –** Use the Endpoint Policy Manager Customer Portal
([https://www.policypak.com/customerportal](http://www.policypak.com/customerportal)) to download
Everything.

![289_1_image-20240111131924-2](/images/endpointpolicymanager/gettingstarted/289_1_image-20240111131924-2.webp)

:::note
If you cannot remember your password, you can reset it right on this page.
:::


:::note
Inside the ZIP download there is an ISO (the bits) and also a ZIP file (the AppSets).
:::


**Step 2 –** Create a share on a server and ensure the share is available from the GPMC computer and
Client (test endpoint) machine.

**Step 3 –** Unpack and take the stuff inside the Bits ISO and put it on the share.Use any ISO
reading program you like.

**Step 4 –** Extract the contents of the AppSets ZIP file and place them in the designated shared
location. Any unzip tool can be used for this task.

When you are done, your server should look like this:

![289_2_image-20240111133126-3](/images/endpointpolicymanager/gettingstarted/289_2_image-20240111133126-3.webp)

For all versions of Endpoint Policy Manager (Group Policy, MDM, and Cloud), you need access to a
Domain Controller (DC) running Active Directory to create real GPOs. This DC can be a real or fake
DC.

:::note
If you have a real domain and can create real GPOs during our session, there is no need to
do anything.
:::


**Step 1 –** If you have no domain at all, you need one first. Download and install Windows Server
2016 or 2019 180-day evaluation here:
[https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2016/](https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2016/)

**Step 2 –** Then be sure to run these steps on this video to make your first domain controller in a
new domain: [How to create a DC for editing purposes](/docs/endpointpolicymanager/deliverymethods/cloud/videos/testlabbestpractices/createdc.md)

:::note
The domain controller name and domain name do no matter.
:::


**Step 3 –** Have newly created / clean test endpoint computers available. Please do not take a
machine with "everything in your standard image" with 200 pieces of software, and drag it into these
first tests.

- Clean Windows 10 is preferred, but Windows 11 is okay as well.

  :::tip
    Remember, the cleaner, the better. A fresh copy of Windows 10, with the latest version, is
  ideal.
  :::


- If you can do without a special Antivirus or special security software on this example machine,
  that will be best. If you MUST use A/V or security software, please perform these steps:
  [How must I configure my Anti-virus or system-level software to work with Endpoint Policy Manager CSE?](/docs/endpointpolicymanager/upgrademaintenance/antivirussystemsoftware/antivirus.md)

For Endpoint Policy Manager Group Policy Edition:

- Be sure this computer is joined to the domain and in a licensed OU.
- If you wish to run unlicensed, that's fine. Rename the endpoint to COMPUTER1 or anything with
  COMPUTER in the name. (More about this method in a bit.)

For Endpoint Policy Manager Cloud and Endpoint Policy Manager MDM:

- You should have one machine joined to your Active Directory. This is called the Walk before you
  run computer.
- Leave the second machine not domain joined. After verifying that Endpoint Policy Manager works
  with the domain-joined machines, those directives will be used with Endpoint Policy Manager Cloud
  or Endpoint Policy Manager MDM.

## Part 3: What to install on your Windows 10 or 11 ENDPOINT

First, know that Endpoint Policy Manager and other security software may not play nicely together
right away. As such, please review and follow these guidelines first:
[How must I configure my Anti-virus or system-level software to work with Endpoint Policy Manager CSE?](/docs/endpointpolicymanager/upgrademaintenance/antivirussystemsoftware/antivirus.md)

Second, please install all of the following software on your example endpoint(s):

**Step 1 –** Install the latest Endpoint Policy Manager Client Side Extension you downloaded and
unpacked in the previous step. Here's the exact how-to:
[https://endpointpolicymanager.happyfox.com/kb/article/459-04-admin-console-and-cse-installation/](https://endpointpolicymanager.happyfox.com/kb/article/459-04-admin-console-and-cse-installation/)

**Step 2 –** Download and have ready Process Monitor
([https://docs.microsoft.com/en-us/sysinternals/downloads/procmon](https://docs.microsoft.com/en-us/sysinternals/downloads/procmon))
on the endpoint.

**Step 3 –** Firefox ESR (must be Firefox ESR not "Regular" Firefox RR
[https://www.mozilla.org/en-US/firefox/organizations/](https://www.mozilla.org/en-US/firefox/organizations/))

**Step 4 –** Chrome
([https://www.google.com/chrome/browser/desktop/](https://www.google.com/chrome/browser/desktop/))

**Step 5 –** (Recommended): Endpoint Policy Manager's engine can be controlled via ADMX settings and
having these pre-staged and ready to go can help us workaround issues from time to time. To
pre-install the ADMX settings please watch this video:
[Troubleshooting with ADMX files](/docs/endpointpolicymanager/deliverymethods/cloud/videos/gettingstarted/admxfiles.md)

**Step 6 –** (Recommended): If you want to perform some Endpoint Policy Manager Least Privilege base
hits: Install any software you want to see magically work with Endpoint Policy Manager Least
Privilege Manager and overcome UAC prompts. For instance, if you have something that requires admin
rights, but the configuration is unclear then ensure it is already installed on your example
machine. Rules can then be created collaboratively so that you can see it working.

:::note
If you want to "convert" from another least privilege tool to Endpoint Policy Manager
Least Privilege Manager, see section 9 for additional steps.
:::


## Part 4: Remote controlling from your GPMC machine to your example endpoint machine.

:::tip
Remember, that we will be using RingCentral or TeamViewer to remote control YOUR machine, the one
with the GPMC. And from your machine, we need to remote control the example endpoint.
:::


Maybe you're using some kind of fancy remote control utility, or everything is nicely inside VMware
or Hyper-V. That's great.

But if not, then you need to ensure that the every group has the ability to remote control your
endpoint using Remote Desktops. The default is that only Admins can remote control. Here is how to
adjust that: [http://screencast.com/t/arnYvvhXt](http://screencast.com/t/arnYvvhXt).

Verify and test that from your machine (the one with the GPMC) you can Remote Control (MSTSC.EXE /
RDP / some other way) into your endpoint(s) (like COMPUTER1) as an example standard user.

:::tip
Remember, We can only see your machine, we need you to verify that we will be able to see the
target example machines.
:::


## Part 5: All about licensing

You can run Endpoint Policy Managerlicensed or unlicensed.

To run Endpoint Policy Manager Licensed:

- Endpoint Policy Manager Group Policy Edition:

  - Please pre-install the LICENSE FILES you received. See
    [How to install UNIVERSAL licenses for NEW Customers (via GPO, SCCM or MDM)](/docs/endpointpolicymanager/licensing/videolearningcenter/installall/installuniversal.md)
    We generally recommend Way #2.
  - The computer should be placed in one of your licensed OUs ahead of our meeting.

- Endpoint Policy Manager MDM Edition:

  - You should have an MDM license file from your salesperson. Keep your Endpoint Policy Manager
    MDM license MSI handy for our tech work together.

- Endpoint Policy Manager Cloud edition:

  - You will claim a license when you install the Endpoint Policy Manager Cloud client.

To run Endpoint Policy Manager Un-licensed (any version):

- You can run a Endpoint Policy Manager trial without a license:

  - Ensure that the computer is named COMPUTER1 or something similar with COMPUTER in the name.

    :::note
    When a computer has COMPUTER in the name it pretends to be fully licensed for
    trial purposes. More details on this topic:
    [Testing and Troubleshooting By Renaming an endpoint Computer](/docs/endpointpolicymanager/deliverymethods/cloud/videos/usingwithothermethods/mdm.md)
    :::


Example machine renamed to work UN-licensed:

![289_3_image-20191022200736-3](/images/endpointpolicymanager/gettingstarted/289_3_image-20191022200736-3.webp)

## Part 6: Preparing for Endpoint Policy ManagerCloud

(Continue here If you are alsotrialing Endpoint Policy Manager Cloud).

- **NOTE:** Endpoint Policy Manager Cloud is not the Endpoint Policy Manager Portal.
- The Endpoint Policy Manager Portal is where you downloaded the Bits and AppSets.
- The Endpoint Policy Manager Cloud is the service to manage machines over the Internet.
- You should have a Welcome Letter to the Endpoint Policy Manager Cloud. If you cannot find your
  welcome letter, go to
  [https://cloud.policypak.com/Account/ForgotPassword](https://cloud.policypak.com/Account/ForgotPassword)
  and request it. Then log on to [https://cloud.policypak.com](https://cloud.policypak.com/).
- Verify that you can log on to the Endpoint Policy Manager Cloud.
- Make sure that from your machine we can remote control the endpoint which is the machine you'll be
  managing using Endpoint Policy Manager Cloud.

## Part 7: Preparing for Endpoint Policy Manager MDM

(Continue here if you are ALSO trialing Endpoint Policy Manager MDM)

Endpoint Policy Manager MDM Licensing can be a little tricky.

- If you rename the computer to have COMPUTER in the name, the computer will act fully licensed.
- If we supplied a license file to you, we'd like for you to pre-test that out. Here's the video to
  demonstrate exactly how to verify the MDM license file (sent as an MSI file) will work.
  [Endpoint Policy Manager and MDM walk before you run](/docs/endpointpolicymanager/deliverymethods/mdm/videos/gettingstarted/testsample.md)

## Part 8: Final thoughts for Endpoint Policy Manager Cloud and Endpoint Policy Manager MDM

:::info
Reminder about having a real or not really real domain:
:::


Even though the PP Cloud service requires no real on-prem Active Directory, it does require at least
one “not really real” domain and domain controller, and we have recommended you join one machine to
it. Why?

Because you’ll use that DC to create directives, export them, and then upload those directives to PP
Cloud. In other words, you cannot create PolicyPak policies withouta “real” or “not really real”
domain.

Additionally, with one machine joined to your “not really real” domain, you’ll be able to do quicker
tests and verify your ideas work via Group Policy before using Endpoint Policy Manager Cloud or
Endpoint Policy Manager MDM.

If you do not have a “real” or “not real domain” please see and perform these steps:

**Step 1 –** [How to create a DC for editing purposes](/docs/endpointpolicymanager/deliverymethods/cloud/videos/testlabbestpractices/createdc.md)

**Step 2 –**
[Testing and Troubleshooting By Renaming an endpoint Computer](/docs/endpointpolicymanager/deliverymethods/cloud/videos/testlabbestpractices/renameendpoint.md)

## Part 9: Converting from another least-privilege tool to Endpoint Privilege Manager

If you’ve pre-arranged or asked for this, then we’re ready to help. To best help you convert from
another least-privilege tool to Endpoint Policy Manager Least Privilege Manager here is what we
recommend:

- Have two example endpoint PCs with the same version of Windows. I’ll call them COMPUTER1 and
  COMPUTER2 here.
- On Computer1, install all the software you’re already elevating and working around with your
  existing least-privilege tool. Be sure all the UAC prompts are overcome as expected because your
  existing (old) least-privilege tool is working as expected.
- On Computer2, also install all the software you’d like to elevate and work around UAC prompts.
  Install the Endpoint Policy Manager Client Side Extension on this machine. Because Endpoint Policy
  Manager Least Privilege Manager doesn’t have any rules yet, the end-user software won’t work as
  expected and should present UAC prompts.

Together, our goal during our session is to examine your existing rules (which work in your old
tool) and create Endpoint Policy Manager Least Privilege Manager rules that will work similarly.

Make sure both computers are joined to the domain and we can create GPOs and affect Computer2 with
Endpoint Policy Manager directives.

