---
title: "How to remove the Endpoint Policy Manager Browser Router Agent from the list of available Web Browser handlers under Default Apps in Windows 10"
description: "How to remove the Endpoint Policy Manager Browser Router Agent from the list of available Web Browser handlers under Default Apps in Windows 10"
sidebar_position: 60
---

# How to remove the Endpoint Policy Manager Browser Router Agent from the list of available Web Browser handlers under Default Apps in Windows 10

If you decide not to use Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router in your
environment and your environment does not have any Endpoint Policy Manager Browser Router (PPBR)
policies enabled, you may still notice that you see the PPBR Agent as an available option under
**Settings** > **Default Apps** > **Web Browser**.

![483_1_image-20190911221425-1](/images/endpointpolicymanager/browserrouter/install/483_1_image-20190911221425-1.webp)

If you would like to remove the PPBR agent from this list please see the steps under the two
scenarios below, and follow the steps in the scenario relevant to your environment.

## SCENARIO 1: You have never used Endpoint Policy Manager Browser Router and there are no PPBR policies enabled in your environment:

You can remove the PPBR Agent from this list by unlicensing the Endpoint Policy Manager Browser
Router component and removing the PPBR Agent entry from the list of default Web Browsers utilizing
the steps below.

![483_2_image-20190911221425-2](/images/endpointpolicymanager/browserrouter/install/483_2_image-20190911221425-2.webp)

**Step 1 –** Add a new policy under **PolicyPak** > **Administrative Templates Manager**:

![483_3_image-20190911221425-3_950x559](/images/endpointpolicymanager/browserrouter/install/483_3_image-20190911221425-3_950x559.webp)

**Step 2 –** Under **New Admin Templates Entry** select **Administrative Templates** > **Admin
Templates (ADMX files)** > **PolicyPak** > **Browser Router** > Prevent PPBR component from being
licensed then click **Add** to create the policy.

![483_4_image-20190911221425-4_950x354](/images/endpointpolicymanager/browserrouter/install/483_4_image-20190911221425-4_950x354.webp)

**Step 3 –** Next set the policy as enabled, and click **OK**.

![483_5_image-20190911221425-5_950x150](/images/endpointpolicymanager/browserrouter/install/483_5_image-20190911221425-5_950x150.webp)

**Step 4 –** Next, create a new policy item under **Group Policy Preferences** > **Windows
Settings** > **Registry** that will delete the following registry key.

[```HKEY_LOCAL_MACHINE\SOFTWARE\Clients\StartMenuInternet\PPBRAgent.exe```]

:::note
You can add this policy to your existing unlicensed PPBR policy instead of creating a new
policy if so desired.
:::


**Step 5 –** Set the GPO (or GPOs) containing these two policy items to apply to the OU or Domain
level as needed (i.e. wherever your affected computers or users happen to live).

**Step 6 –** Login to one of the computers where the PPBR Agent is still present as a choice under
**Settings** > **Default Apps** > **Default Apps** > **Web Browser**, open CMD, then run GPUPDATE.

**Step 7 –** Once GPUPDATE is successful, log off of the computer and then log back in.

![483_6_image-20190911221425-6](/images/endpointpolicymanager/browserrouter/install/483_6_image-20190911221425-6.webp)

**Step 8 –** Now check under **Settings** > **Default Apps** > **Web Browser** and the option to
select the PPBR Agent should no longer be present.

## SCENARIO 2: You HAVE used Endpoint Policy Manager Browser Router in Legacy Browser Mode (either currently or sometime in the past) but no longer wish to, AND currently have no PPBR policies enabled in your environment:

![483_7_image-20210105155954-1](/images/endpointpolicymanager/browserrouter/install/483_7_image-20210105155954-1.webp)

**Step 1 –** Follow steps 1-4 above from Scenario 1 then continue with the steps below.

![483_8_image-20190911221425-7_950x315](/images/endpointpolicymanager/browserrouter/install/483_8_image-20190911221425-7_950x315.webp)

**Step 2 –** Add a new GPPrefs Policy item to one of your existing GPOs above, or create a new GPO
using **Group Policy** > **Policy Preferences** > **Windows Settings** to delete the following file:

`C:\ProgramData\endpointpolicymanager\Common\ppFileAssociations.xml`

![483_9_image-20190911221425-8](/images/endpointpolicymanager/browserrouter/install/483_9_image-20190911221425-8.webp)

**Step 3 –** Set the GPO (or GPOs) containing these three policy items to apply to the OU or Domain
level as needed (i.e. wherever your affected computers or users happen to live).

For Example:

**Step 4 –** Then login to one of these computers where the PPBR Agent is still present as a choice
under **Settings** > **Default Apps** > **Default Apps** > **Web Browser**, open CMD then run
`GPUPDATE`.

**Step 5 –** Once `GPUDATE` is successful, log off of the computer and then log back in.

![483_10_image-20190911221425-9](/images/endpointpolicymanager/browserrouter/install/483_6_image-20190911221425-6.webp)

**Step 6 –** Now check under **Settings** > **Default Apps** > **Web Browser** and the option to
select the PPBR Agent should no longer be present.


