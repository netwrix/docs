---
title: "Special Notes about the FireFox AppSet, Thunderbird AppSet, Java AppSet, and Internet Explorer AppSet"
description: "Special Notes about the FireFox AppSet, Thunderbird AppSet, Java AppSet, and Internet Explorer AppSet"
sidebar_position: 70
---

# Special Notes about the FireFox AppSet, Thunderbird AppSet, Java AppSet, and Internet Explorer AppSet

Firefox, Thunderbird, and Java preconfigured AppSets all support user-interface (UI) lockout,
similar to what we saw in the Quickstart with WinZip.

However, UI lockout is implemented differently and, as such, comes with a caveat.

:::note
To see a video of Firefox UI lockout in action, watch the following video(s):
[Understanding and fixing Endpoint Policy Manager DLL Orphans](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/centralstoresharing/dllorphans.md).
:::


:::note
To see a video of Thunderbird UI lockout in action, watch the following video(s):
[https://www.policypak.com/products/manage-thunderbird-with-group-policy.html](https://www.policypak.com/video/endpointpolicymanager-the-superpowers.html).
:::


:::note
To see a video of Java UI lockout in action, watch the following video(s):
[https://www.policypak.com/products/manage-java-jre-with-group-policy.html](http://www.Techsmith.com).
:::


Specifically, to perform UI lockout with Firefox, Thunderbird, and Java, the GPO must be linked so
the computer is affected. You cannot perform a per-user UI lockdown on Firefox, Thunderbird, or Java
when users are in OUs; the UI lockdown can only be delivered on the computer side of the GPO,
affecting only computers (not users).

Figure 19 displays an example of how to create and link a GPO to computers.

![policypak_application_settings_18](/images/endpointpolicymanager/applicationsettings/preconfigured/quickstart/endpointpolicymanager_application_settings_18.webp)

The figure shown. Creating and linking a GPO.

This example is set up as though you've put your target computers in the East Sales Desktops folder.

Then when you edit the GPO, edit it on the Computer side, as seen In the figure shown. At that point, you
can modify settings for Firefox, Thunderbird, and Java, including "Lockdown this setting using the
system-wide config file," as seen in the top of the figure with Firefox and the bottom of the figure
with Java.

![policypak_application_settings_19](/images/endpointpolicymanager/applicationsettings/preconfigured/quickstart/endpointpolicymanager_application_settings_19.webp)

![policypak_application_settings_20](/images/endpointpolicymanager/applicationsettings/preconfigured/quickstart/endpointpolicymanager_application_settings_20.webp)

The figure shown. System-wide lockdown using config files is only available on the Computer side, as seen
in the examples of Firefox (top) and Java (bottom).

It is important to note that the option "Lockdown this setting using the system-wide config file"
does not appear on the User side. If you try to edit these three AppSets on the User side, you will
not see an option to perform UI lockdown. An example of editing one of these AppSets (the Firefox
AppSet) on the User side (and therefore, not seeing the system-wide lockdown) is shown In the figure shown.

![policypak_application_settings_19](/images/endpointpolicymanager/applicationsettings/preconfigured/quickstart/endpointpolicymanager_application_settings_19.webp)

The figure shown. The lockdown via system-wide config file is not present on the User side.

Moreover, we have created a supplementary manual specifically for Firefox and another for Internet
Explorer because they act a little differently. In the Endpoint Policy Manager Portal, in the
"Manuals" section, be sure to download and read the special guidance for Firefox and Internet
Explorer. The reference documents are:

- Appendix C: Endpoint Policy Manager Application Settings Manager—Using the Firefox `AppSet.pdf`
- Appendix D: Endpoint Policy Manager Application Settings Manager—Using the Internet Explorer
  `AppSet.pdf`

These documents will explain how to manage certificates, prevent add-ons, manage bookmarks, and so
on.



