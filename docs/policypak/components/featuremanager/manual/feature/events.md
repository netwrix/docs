---
title: "Events"
description: "Events"
sidebar_position: 20
---

# Events

PolicyPak Feature Manager for Windows places events in the PolicyPak log
(within Applications and Services log), as shown in Figure 47. All events will have the PolicyPak Feature Manager for Windows client source type. In Figure 47, you can see an example
of a feature attempting to be installed. This is Event ID 600.

![troubleshooting_5](/images/policypak/leastprivilege/adminapproval/avoid_pop_ups_with_admin_approval_1.webp)

Figure 47. PolicyPak Feature Manager for Windows events can be found in the PolicyPak node within Application and Services.

Then, after it is successfully installed, it shows Event ID 602, as shown in Figure 48.

![troubleshooting_6](/images/policypak/troubleshooting/feature/troubleshooting_6.webp)

Figure 48. Logged events in PolicyPak event log for PolicyPak Feature
Manager for Windows.

You might want to trigger or look for certain events to know what's going on. PolicyPak is compatible with Event Forwarding, if that's something you wish to do. Here is the list of
events in each category:

General

- Event 300: The system will reboot to complete installation of Windows Features.
- Event 301: The system reboot is pending.

Windows Feature Category

- Event 600: Windows feature is being installed.
- Event 601: Installing Windows feature was canceled.
- Event 602: Windows feature was installed.
- Event 603: Installing Windows feature progress is - \*.
- Event 604: Installing Windows feature failed.
- Event 650: Windows feature is being removed.
- Event 651: Removing Windows feature was canceled.
- Event 652: Windows feature was removed.
- Event 653: Removing Windows feature progress is - \*.
- Event 654: Removing Windows feature failed.

Windows Optional Feature Category

- Event 700: Optional feature is being installed.
- Event 701: Installing optional feature was canceled.
- Event 702: Installing optional feature was completed.
- Event 703: Installing optional feature progress is - \*.
- Event 704: Installing Windows feature failed.
- Event 750: Optional feature is being removed.
- Event 751: Removing optional feature was canceled.
- Event 752: Removing optional feature was completed.
- Event 753: Optional feature progress is - \*.
- Event 754: Removing optional feature failed.


