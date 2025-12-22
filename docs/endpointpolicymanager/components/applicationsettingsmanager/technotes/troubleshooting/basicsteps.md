---
title: "Troubleshooting Application Manager – Basic Steps BEFORE calling or emailing Tech Support"
description: "Troubleshooting Application Manager – Basic Steps BEFORE calling or emailing Tech Support"
sidebar_position: 50
---

# Troubleshooting Application Manager – Basic Steps BEFORE calling or emailing Tech Support

Netwrix Endpoint Policy Manager (formerly PolicyPak) Application Manager is a relatively simple
system with only one "moving part"—the CSE, which is installed on the client. However, there are
several areas that you may want to focus on if you encounter problems.

As these are common problems with easy solutions, these steps should be performed before calling or
emailing Endpoint Policy Manager technical support.

The most common tech support question we get is "Why aren't Endpoint Policy Manager Application
Manager settings applying to my client machines?" Here are some items to check.

YES. REALLY CHECK EACH ONE, one by one please.

**Step 1 –** Did you really go through the Endpoint Policy Manager Application Manager Quickstart
guide and try the suggested example out "end to end"?

- You MIGHT be interested in Firefox, Chrome, IE, etc….
- But our Quickstart section of the manual uses WinZip 14 as our SAMPLE application.
- We ask you to "Walk before you run" using WinZip 14 as the SAMPLE application BEFORE you try
  things like Firefox, Chrome, IE and Java.
- After patiently going thru the Quickstart / WinZip 14, most people will have their "Aha!" moment
  and see what they were doing wrong.

**Step 2 –** Did you install the Endpoint Policy Manager CSE on your client machines?

**Step 3 –** Did you create the Endpoint Policy Manager Application Manager settings within the GPO
on the "correct side"? Most of the time, you'll likely want to edit the USER side of the GPO and
affect users within a GPO.

**Step 4 –** Are you trying to use the Firefox, Java or Thunderbird Paks? Those Paks are best when
used on the COMPUTER side. For those Paks, only on the COMPUTER side can you perform UI lockdown.

**Step 5 –** Are you trying to use the Firefox or IE Paks? We have two special "how to" manuals for
both Firefox and IE Paks in the MANUALS section of the Endpoint Policy Manager Portal.

**Step 6 –** Did you link the GPO to the place where you want them to take affect?

- If you edit the GPO's User side, then link the GPO to a place containing USERS.
- Run GPresult /R …AS THE USER… ! Did you get the GPO itself?
- If you edit the GPO's COMPUTER side, then link the GPO to a place containing COMPUTERS.
- Run GPresult /R …AS THE LOCAL ADMIN with ADMIN COMMAND PROMPT… ! Did you get the GPO itself?

**Step 7 –** Is your computer getting the Licensing GPO? All computers must be licensed in order for
Endpoint Policy Manager Application Manager to work properly.Run GPresult /R …AS THE LOCAL ADMIN
with ADMIN COMMAND PROMPT… ! Did you get the GPO itself?

- Run GPresult /R …AS THE LOCAL ADMIN with ADMIN COMMAND PROMPT… ! Did you get the LICENSING GPO ?
- Alternatively, try renaming the computer to COMPUTER1 (or similar) such that COMPUTER is in the
  name. When you do this, the Endpoint Policy Manager CSE will act as if it's fully licensed. If
  Endpoint Policy Manager Application Manager starts to work – you have a licensing issue.

Remember: Most pre-configured Paks ship with Pre-Defined Item Level Targeting.

- This means the Pak is designed to only affect a specific version of the application.
- You can bypass Internal Item Level Targeting in the Pak.
- Refer to the following video
  [Bypassing Internal Item Level Targeting Filters](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/featurestechsupport/itemleveltargetingbypass.md)
  to see how to bypass Internal Item Level Targeting.

**Step 8 –** Did you use BLOCK INHERITENCE to block the Licensing GPO or block the GPO which is
delivering the settings? We suggest you ALWAYS "Enforce" the Licensing GPO specifically.

**Step 9 –** Are you able to get "regular" Group Policy settings?

- For instance, as a test, in the same GPO where you're deploying Endpoint Policy Manager settings,
  do a quick test of regular policy settings.
- A quick one to test would be User Configuration | Policies | Administrative Templates | Control
  Panel | Prohibit access to the Control Panel.
- Enable this setting. Then, log off and back on as an effected user.
- If you are correctly prevented from accessing the Control Panel, it could be a Endpoint Policy
  Manager Application Manager issue, as you are clearly getting Group Policy delivered correctly. If
  you are not restricted from the Control Panel, you aren't getting Group Policy correctly, so
  Endpoint Policy Manager Application Manager cannot function.

**Step 10 –** (Even though this might take some time…) Bring up a totally new computer (XP or
greater) and name it Computer01.

- Install the Endpoint Policy Manager CSE and reboot. See if your settings apply now.
- If so, try to determine why the settings worked when the computer was in Trial Mode (i.e., when
  they had the word "computer" in the computer name) and not in Licensed or Community Modes.

**Step 11 –** Are the right Registry values present in the Endpoint Policy Manager Application
Manager project? Reopen the source pXML (XML) file using Endpoint Policy Manager DesignStudio. Check
to make sure the settings for any control objects (buttons, checkboxes, etc.) are managing the
correct Registry target settings.

**Step 12 –** Has the target machine received the latest Group Policy updates? If not, simply run
"gpupdate /force" from the Run menu on the client machine and try again. Also, try rebooting the
target machine.

**Step 13 –** Check the readme file for the Pak. We do a reasonable job explaining when lockdown or
a value isn't expected to function in most Pak readme's.

If \*AFTER\* these steps you are not getting results from Endpoint Policy Manager application
manager…

**Step 1 –** From an affected machine, AS ADMIN run pplogs.exe from an ADMIN command prompt.

**Step 2 –** Simply send the .ZIP file it creates to support[at ]policypak.com and explain the issue
as specifically as you can.

**Step 3 –** GOOD descriptions would include

- The PAK name and compiled with value.
- The CSE version you are using.
- A "story" of where the GPO is / what it's doing and where it's linked (user or computer side.)

…something like this:

"Hi. I'm using the FireFox Core Pak (compiled with Build 723) and linking a GPO to the Computer
Side. I'm using the "Advanced (Certificates) tab and trying to import a Certificate to the ROOT for
Firefox. I'm using the string ‘c:\Certs\Root.cer, 1, ROOT, add' (as per the extra Firefox PDF
manual.) That being said, on some computers we don't see the certificate being added as expected. We
are using the latest CSE on the target computer."

Screenshots and/or video of the problem, if there's something to see.  
 Use an application like ScreenShot Pilot
([http://tinyurl.com/screenshotpilot](http://tinyurl.com/screenshotpilot)) and/or Jing
([www.Techsmith.com](http://www.techsmith.com/)) to deliver us images and/or video showing your
issue.

**Step 4 –** BAD / inadequate descriptions of problems would be something like:"I'm trying to import
a certificate and it's not working."Under ALL circumstances you should expect we will request you to
update at least one machine to the latest CSE if your logs show a not-latest CSE.We'll try to get
you an answer right away. Call 800-883-8002 if you think we haven't gotten your request for help. We
want to help you!


