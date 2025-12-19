---
title: "When licensing Endpoint Policy Managerwith an MDM provider, what do I need to send in to Endpoint Policy Manager?"
description: "When licensing Endpoint Policy Managerwith an MDM provider, what do I need to send in to Endpoint Policy Manager?"
sidebar_position: 10
---

# When licensing Endpoint Policy Managerwith an MDM provider, what do I need to send in to Endpoint Policy Manager?

Netwrix Endpoint Policy Manager (formerly PolicyPak) can work with and be licensed with nearly any
MDM service. Use this table below to determine how to get licensed:

- Intune (Automatic) — Use the Endpoint Policy Manager Portal and download the BITS. Then run the
  Licensing Tool (LT) to acquire the information and save it to your License Request Key. See
  [How to Request Licenses from Endpoint Policy Manager by Creating a "License Request Key"](/docs/endpointpolicymanager/licensing/videolearningcenter/requestall/licenserequestkey.md)
- Intune (Alternate) — Only if asked, follow the directions on this page.
- VMware Workspace One — Follow the directions on this page.
- Citrix CEM — Follow the directions on this page.
- MobileIron — Follow the directions on this page.
- Other MDMs may or may not be supported, but we'll try. Follow the directions on this page.

To accurately create license keys for you,Endpoint Policy Manager needs three pieces of information:

- Your Universal Principal Name (UPN)
- How many licenses are required and
- Proof of ownership of that MDM / domain.

## Your UPN name (all MDM services)

When you enroll machines into your MDM, you do so with a UPN name. Start out by noting which UPN
name you use, @fabrikam.com in our example. We recommend you take a screenshot of this page from an
enrolled Windows 10 machine, then continue.

![44_1_sdfg](/images/endpointpolicymanager/license/812_4_sdfg.webp)

## License count

To accurately license your MDM installation, Endpoint Policy Manager needs the following
information:

- How many machines are actively enrolled in your MDM service
- Screenshots demonstrating the screen shots are of an MDM account your own or control

If you have a mix of on-prem AD machines, Azure joined machines and Hybrid Azure AD machines please
see
 [If I have both Azure joined and Hybrid Azure AD joined machines, how do I count the exact number of licenses I need?](/docs/endpointpolicymanager/licensing/knowledgebase/requestingmdm/entraid.md)
for additional information on how to express your count.

## The Billing Process

**Step 1 –** Send screenshots of your current usage (see steps below for your specific MDM solution)

**Step 2 –** Express your expected growth for the upcoming year

**Step 3 –** You are billed for the total expected usage

### Windows Intune (alternate method — do not use unless the LT tool isn't working or you are otherwise directed to perform these manual steps.)

If in the Azure portal, ensure you are in the Intune section.

![44_2_image-20200815220310-23](/images/endpointpolicymanager/license/mdm/44_2_image-20200815220310-23.jpeg)

The device Screenshot will demonstrate the total Windows Devices and Tenant ownership:

![44_4_image-20200815220310-24](/images/endpointpolicymanager/license/mdm/44_4_image-20200815220310-24.jpeg)

### Workplace One (Airwatch)

In your Airwatch portal:

- Click on the **Devices** icon
- In Platforms, locate the Windows Desktops section and take a screenshot of the entire window

![44_6_image-20200815220310-25](/images/endpointpolicymanager/license/mdm/44_6_image-20200815220310-25.jpeg)

### MobileIron

Log into your MobileIron Portal. Your dashboard should show you the number of devices you have
enrolled if Device by OS Type is on your dashboard. If the Pie Chart is shown, click the icon in the
lower-left corner of the Device by OS Type window to change to the Bar Chart.

![44_8_image-20200815220310-26](/images/endpointpolicymanager/license/mdm/44_8_image-20200815220310-26.jpeg)

Take a screen shot of the device count and account ownership as per the screenshots below (it may
take 2 captures)

![44_10_image-20200815220310-27_950x711](/images/endpointpolicymanager/license/mdm/44_10_image-20200815220310-27_950x711.jpeg)

### Citrix Endpoint Management (CEM – formally XenMobile)

Option 1:

On the Analyze page of the CEM Portal, click on the Dashboard. Take a screenshot showing Managed
devices by Platform and the ownership in the top right-hand corner

![44_12_image-20200815220310-28](/images/endpointpolicymanager/license/mdm/44_12_image-20200815220310-28.webp)

Option 2:

From the Analyze page, go to Reporting > Devices & Apps and take a screenshot showing the Device
count and Ownership:

![44_14_image-20200815220310-29](/images/endpointpolicymanager/license/mdm/44_14_image-20200815220310-29.webp)

