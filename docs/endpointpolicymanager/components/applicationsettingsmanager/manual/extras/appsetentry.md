---
title: "Item-Level Targeting for an AppSet Entry"
description: "Item-Level Targeting for an AppSet Entry"
sidebar_position: 10
---

# Item-Level Targeting for an AppSet Entry


After you've configured an AppSet to your preferred settings, and those settings are saved into the
group policy object (GPO), you can perform Item-Level Targeting (also known as filtering) with that
AppSet entry. This gives you the ability to specify over 25 specific conditions and sub-conditions
under which the AppSet should apply. For instance, in one GPO you might want to deliver similar
settings, but change the circumstances. Here are a few examples:

- On Windows 7 machines, use one set of Firefox security settings.
- On Windows 7 machines, apply a second set of Firefox security settings.
- On Terminal Services sessions, change the Firefox home page.
- To all users in a group, except for admins, deliver deliver ACL Lockdown for Acrobat Reader to
  those who don't have it.

You can see an example of Item-Level Targeting in Figures 46 and 47.

![policypak_application_settings_2_1](/images/endpointpolicymanager/applicationsettings/extras/itemleveltargeting/endpointpolicymanager_application_settings_2_1.webp)

The figure shown. Entering the Pak's Item Level Targeting dialog.

Administrators familiar with Group Policy Preferences' Item-Level Targeting will be at home in this
interface, since it is functionally equivalent.

You can apply one or more targeting items to an AppSet. You can also logically join together
targeting items, as shown In the figure shown. You may also add Targeting Collections, which equates to
enclosing equations in parentheses, which groups together targeting items. In this way, you can
create fairly complex determinations about which users and computers an AppSet will apply to.
Targeting Collections may be set to "And" or "Or" as well as "Is" or "Is Not," as seen In the figure shown.

![policypak_application_settings_2_2](/images/endpointpolicymanager/applicationsettings/extras/itemleveltargeting/endpointpolicymanager_application_settings_2_2.webp)

The figure shown. In this example, the Pak would only apply to Windows 10 machines when (1) the machine is
portable and (2) the user is in the FABRIKAM\Traveling Sales Users group.

![policypak_application_settings_2_3](/images/endpointpolicymanager/applicationsettings/extras/itemleveltargeting/endpointpolicymanager_application_settings_2_3.webp)

The figure shown. In this example, the Pak would only apply to Windows 10 machines when either(1) the
machine is portable and (2) the IP address between 192.168.5.1 - 192.168.7.254 OR (1) the machine
resides in the Azure Site and (2) has an IP address between 172.16.7.11 - 172.16.9.254.

Here are some real-world examples of how you can use Item-Level Targeting with Endpoint Policy
Manager Application Settings Manager.

Software prerequisites. In this scenario, you will want to configure an application's settings, but
you will first need to make sure the application is installed on the user's computer before
configuring it. You can use either File Match or Registry Match targeting items (or both) to verify
if a specific version of a file or a Registry entry is present. (For an example of this, look in the
Uninstall Registry key.)

Mobile computers. When working with mobile computers, you'll want to deploy settings for VPN
applications (like our included AppSets for Cisco VPN or the SonicWall VPN client), but this only
needs to be done for mobile users on mobile PCs. You can filter the AppSet to deploy only to mobile
PCs by using the Portable Computer targeting item.

Operating system version. Here, you can specify different settings for applications based on the
operating system (e.g., Windows 7 or Windows 10). Simply create two AppSet items (more on this in
the next section), one for each operating system. Then filter each AppSet using the Operating System
targeting item.

Group membership. With a group membership, you can link the GPO to the whole domain or
organizational unit (OU), but only members within a specific group will pick up and process the
AppSet settings.

IP range. In this setup, you can specify different settings for various IP ranges in case you want
to maintain different browser settings for the home office and each field office.

When Item-Level Targeting is used, it can be seen in the GPMC reports, as seen In the figure shown.

![policypak_application_settings_2_4](/images/endpointpolicymanager/applicationsettings/extras/itemleveltargeting/endpointpolicymanager_application_settings_2_4.webp)

The figure shown. The Item-Level Targeting shows up in the GPMC reports when it is being used.



