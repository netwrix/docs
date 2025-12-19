---
title: "Policy Scripts Manager: Set Custom Default File Associations in Windows 10"
description: "Policy Scripts Manager: Set Custom Default File Associations in Windows 10"
sidebar_position: 30
---
# Policy Scripts Manager: Set Custom Default File Associations in Windows 10

How to apply custom default application associations to Windows 10 using Netwrix Endpoint Policy
Manager (formerly PolicyPak) Scripts Manager.

<iframe width="560" height="315" src="https://www.youtube.com/embed/55bFMLRQdlE" title="Policy Scripts Manager - How to Set Custom Default File Associations in Windows 10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is David in Endpoint Policy Manager tech support. In this video I'm going to show you how
to apply custom default application file associations using Endpoint Policy Manager Scripts Manager.
If you're missing any applications needed for your custom file associations, you'll need to install
those before continuing. If the necessary applications are already installed, then it's time to set
up your custom file associations.

Now that our custom file associations are set, the next step is to use PowerShell running as
administrator to export our custom file associations to the XML file. Next we're going to grab the
XML file containing our custom default file associations and copy it up to a network share that's
accessible to all users who need to receive these settings. With that done, we're going to head over
to our computer running the Group Policy management console and create the Scripts Manager policy,
which will distribute this policy to our users.

We're going to create this policy on the user side since we want it to apply to our users and not
the computer. Be sure to select PowerShell Script from the dropdown and to also uncheck the Run
Script as User option at the bottom of the screen. That's it. Our policy is all ready to go. The
only step remaining is to test.

Here I'm logging in as EastSalesUser1, who is one of the users who should be receiving this policy.
There you have it. Everything is working as expected. I hope that you'll find this video helpful and
informative. If you have any questions, please ask in our forums under the Scripts Manager forum.
Thank you.


