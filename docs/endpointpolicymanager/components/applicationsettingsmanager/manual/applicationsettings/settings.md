---
title: "When Settings Aren't Applying to the Client Machine"
description: "When Settings Aren't Applying to the Client Machine"
sidebar_position: 10
---

# When Settings Aren't Applying to the Client Machine

The most common tech support question we get is, "Why aren't Endpoint Policy Manager Application
Settings Manager settings applying to my client machines?" Below are some items to check regarding
this problem

- Did you go through the Quickstart guide (see "Endpoint Policy Manager Application Settings Manager
  Quickstart with Preconfigured Paks") and work through the suggested example start to end? When
  people sit down and patiently work through the installation steps in the Installation
  Quickstart, and the Quickstart examples in this documentation, most will see what they were doing wrong.
- Did you install the Endpoint Policy Manager CSE on your client machines?
- Did you create the Endpoint Policy Manager Application Settings Manager settings within the group
  policy object (GPO) on the correct side? Most of the time, you'll want to edit the User side of
  the GPO and affect users within a GPO.
- Did you link the GPO to where you want it to take effect? Remember: If you edit the GPO's User
  side, you must link the GPO to a place containing users. The same goes for the Computer side.
- Is your computer getting the Licensing GPO? All computers must be licensed in order for Endpoint
  Policy Manager Application Settings Manager to work properly. (See "Licensing PolicyPak" in Book
  1: Introduction and Basic Concepts for more information.) Alternatively, try renaming the computer
  to computer1 (or similar) so "computer" is in the name. When you do this, the Endpoint Policy
  Manager CSE will act as if it's fully licensed. If Endpoint Policy Manager Application Settings
  Manager starts to work, you have a licensing issue.

Most pre-configured Paks ship with internal Item-Level Targeting, which means the Pak is designed to
only affect a specific version of the application. You can bypass internal Item-Level Targeting in
the Pak. Refer to the video at
[https://www.policypak.com/videos/bypassing-internal-item-level-targeting-filters.html](https://www.policypak.com/integration/endpointpolicymanager-group-policy-change-management-utilities.html)
to see how to bypass internal Item-Level Targeting.

- Did you use block inheritance to block the licensing GPO or block the GPO that is delivering the
  settings? We suggest you always specifically enforce the licensing GPO.
- Are you able to get regular Group Policy settings? To find out, in the same GPO where you're
  deploying Endpoint Policy Manager settings, do a quick test of regular policy settings. Enable the
  setting at `User Configuration | Policies | Administrative Templates | Control Panel | Prohibit`
  access to the Control Panel. Then log off and log back on as an effected user. If you are
  correctly prevented from accessing the Control Panel, it could be a Endpoint Policy Manager
  Application Settings Manager issue since you are clearly getting Group Policy delivered correctly.
  If you are not restricted from the Control Panel, you aren't getting Group Policy correctly, so
  Endpoint Policy Manager Application Settings Manager cannot function.
- Can you bring up a new Windows 10 computer and name it computer01 (even if this might take some
  time) just for testing? Install the Endpoint Policy Manager CSE and reboot. See if your settings
  apply now. If so, try to determine why the settings worked when the computer was in Trial Mode
  (i.e., when they had the word "computer" in the computer name) and not in Licensing Mode.
- Are the right Registry values present in the Endpoint Policy Manager Application Settings Manager
  project? Reopen the source pXML (XML) file using Endpoint Policy Manager DesignStudio. Check to
  make sure the settings for any control objects (buttons, checkboxes, etc.) are managing the
  correct Registry target settings.
- Has the target machine received the latest Group Policy updates? If not, simply run
  `gpupdate/force` from the Run menu on the client machine and try again. Also, try rebooting the
  target machine.
