---
title: "Testing Your Application Settings Manager Settings on Your Client (Target) Machine"
description: "Testing Your Application Settings Manager Settings on Your Client (Target) Machine"
sidebar_position: 30
---

# Testing Your Application Settings Manager Settings on Your Client (Target) Machine

Now we're ready to log in for testing. PolicyPak Application Settings Manager is ready to work as
soon as all of the following are true:

- The PolicyPak client-side extension (CSE) is installed on a client computer.
- The user is logging onto the machine with Endpoint Policy Manager CSE.
- The computer has the word "computer" in it (thus enabling Trial Mode) or is fully licensed.
- The computer already has the target application, WinZip, loaded.
- The user account is contained within the effected OU. (In our test environment, this would include
  any account within East Sales Users.)

**Step 1 –** Once this has been confirmed, log into your test computer as a user who can utilize the
GPO. After logging in as a user within the East Sales Users OU, run WinZip. Then go to Options |
Configuration to see what has transpired.

**Step 2 –** Let's inspect what Endpoint Policy Manager Application Settings Manager was able to
perform.

- It delivered the settings for all four checkboxes in the Passwords tab (though only three of the
  boxes are now visible).
- It locked out the "Minimum password length" spinbox, setting the value to 11.
- It hid the "at least one numeric character (0-9)" checkbox.
- It grayed out (disabled) the "at least one symbol character" checkbox.
- It locked out the Cameras tab.

You can see the results In the figure shown.

![policypak_application_settings_12](/images/endpointpolicymanager/applicationsettings/preconfigured/quickstart/endpointpolicymanager_application_settings_12.webp)

The figure shown. The results of the Application Settings Manager setting changes.

Note that the settings are all delivered as expected, and the options you specified have been locked
down. Close WinZip for now. Rejoice in your newfound power!



