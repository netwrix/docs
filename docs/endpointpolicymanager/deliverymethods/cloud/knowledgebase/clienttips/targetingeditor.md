---
title: "Using Targeting Editor in Endpoint Policy Manager Cloud Settings"
description: "Using Targeting Editor in Endpoint Policy Manager Cloud Settings"
sidebar_position: 90
---

# Using Targeting Editor in Endpoint Policy Manager Cloud Settings

How can I target a User or a Group membership with Netwrix Endpoint Policy Manager (formerly
PolicyPak) Cloud based settings?

## Summary:

You have a requirement to target Endpoint Policy Manager Cloud policies to a particular set of
groups of Users or a Group only. You want to use the built-in GP Preference method of choosing a
group or a user to target those settings via PPC (Endpoint Policy Manager Cloud). In this topic we
will demonstrate how will you do that.

There is going to be two-part steps in targeting Endpoint Policy Manager Cloud managed settings,
aka. Group Policies via PPC to those users or computers.

The process for targeting Endpoint Policy Manager Cloud managed settings, aka. Group Policies via
PPC to those users or computers, is divided into two major sections:

1. Getting a SID (Security Identifier) of a User or Group's Object
2. Inserting the SID in Endpoint Policy Manager Cloud based Internal Item-Level Targeting Filter
   window.

## 1:Getting a SID for a USER

First step is to getting a SID (Security Identifier) of a User or Group's Object.

### Getting a SID for a USER:

There are two options available to accomplish this.

##### Option 1: For Current Logged-in user:

**Step 1 –** Launch CMD or Windows PowerShell.

**Step 2 –** Run a command `whoami /user`. Note down the long code:

![732_1_image-20200213172020-1](/images/endpointpolicymanager/cloud/732_1_image-20200213172020-1.webp)

##### Option 2: For Another user:

**Step 1 –** Launch CMD or Windows PowerShell.

**Step 2 –** Run a command `wmic useraccount where name='username' get sid`.

**Step 3 –** Copy the output SID of another user for next step:

![732_3_image-20200213172020-2](/images/endpointpolicymanager/cloud/732_3_image-20200213172020-2.webp)

:::note
All commands in these steps are tested on Microsoft Windows Version 1909 (OS Build
18363.592).
:::


### Getting a SID for a GROUP:

In this scenario you also have two options, depending on your use-case. So, follow the steps
accordingly.

#### Option 1: Getting a SID for a Domain Group:

**Step 1 –** Launch Windows PowerShell on a Domain Controller or a Client-Machine with RSAT tools.
The logged-in user has to be an administrator.

**Step 2 –** Run a command `Get-ADGroup -identity "GroupName"`.

**Step 3 –** Copy the SID information for later user.

![732_5_image-20200213172020-3](/images/endpointpolicymanager/cloud/732_5_image-20200213172020-3.webp)

:::note
The command in this step is tested on Microsoft Windows Server 2012 R2 (Build 9600).
:::


#### Option 2: Getting a SID for a Local Group:

**Step 1 –** Launch Windows PowerShell.

**Step 1 –** Run a command `(Get-LocalGroup -Name 'GroupName').SID`.

**Step 1 –** Copy the SID information to use for next step.

![732_7_image-20200213172020-4](/images/endpointpolicymanager/cloud/732_7_image-20200213172020-4.webp)

:::note
The command in this step is on Microsoft Windows Version 1909 (OS Build 18363.592)
:::


## 2:Inserting the SID inPolicyPakpoli Endpoint Policy Manager Cloud based Internal Item-Level Targeting Filter window

In this section we will insert the SID we extracted by following any of the above step, in Endpoint
Policy Manager Cloud based Internal Item-Level Targeting Filter window.

**Step 1 –** Launch Endpoint Policy Manager Cloud Portal.

**Step 2 –** Create a New Policy and select a i.e. Drive Maps from Microsoft Policy Preferences.

![732_9_image-20200213172020-5](/images/endpointpolicymanager/cloud/732_9_image-20200213172020-5.webp)

**Step 3 –** Click on **Mapped Drive** drop-down and select **Drive** option.

![732_11_image-20200213172020-6_950x630](/images/endpointpolicymanager/cloud/732_11_image-20200213172020-6_950x630.webp)

**Step 4 –** After filling out the details select the **ILT** button.

![732_13_image-20200213172020-7](/images/endpointpolicymanager/cloud/732_13_image-20200213172020-7.webp)

**Step 5 –** Click on **New Item** drop-down in the **Targeting Editor** window.

**Step 6 –** Select **User** and fill-in the SID from the clipboard.

![732_15_sid_950x589](/images/endpointpolicymanager/cloud/732_15_sid_950x589.webp)

**Step 7 –** Click the **Ok** button.

**Step 8 –** If you want to target users from a particular Group, select **Group** in step 6.

**Step 9 –** Fill in the SID detail of a Group from the clipboard.

![732_16_image-20200213172020-9_950x629](/images/endpointpolicymanager/cloud/732_16_image-20200213172020-9_950x629.webp)

**Step 10 –** Click the **OK** button.


