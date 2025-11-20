---
title: "Endpoint Policy Manager for IrfanView"
description: "Endpoint Policy Manager for IrfanView"
sidebar_position: 50
---
# Endpoint Policy Manager for IrfanView

You use applications such as IrfanView so you can see all of the wonderful images on your computer.
What you don't want to see is your helpdesk phones light up because their applications don't run
correctly after they've messed up the configuration settings.  
That's where Netwrix Endpoint Policy Manager (formerly PolicyPak) comes in. We enforce and lock down
the optimum settings that you, the administrator, want them to have. Endpoint Policy Manager sets
and enforces expectations for your users' applications, so that they get the same experience, every
time they launch it. Oh, and Endpoint Policy Manager also supports IrfanView too, just as we do so
many other applications. Keep your IrfanView configuration settings enforced and streamlined with
Endpoint Policy Manager. Check out this video to see how it's done.

<iframe width="560" height="315" src="https://www.youtube.com/embed/evQsOAGTczo" title="Endpoint Policy Manager: Manage InfranView using Group Policy, SCCM or your own management utility" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Lockdown IrfanView with Group Policy video transcript

Hi, this is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility and Founder of PolicyPak Software. 
In this video, we're going to learn how to manage
and [https://www.policypak.com/lockdown](https://www.policypak.com/lockdown) IrfanView using
PolicyPak.

I've already got IrfanView installed on my computer, and I'm just a regular user here.  As you can
see, I'm logged on as a guy called "eastsalesuser4."  If we open up this application from the start
menu and go to "Properties/Settings" we see a number of settings here for users to mess up (and make
your life very difficult.)

I'll go to "Browsing/Editing." I definitely don't want my users browsing hidden files and folders on
their machines and really messing things up.  I also don't want them calling up the helpdesk every
time they accidentally delete a file so I want to make sure that under "File Handling" I configure
these settings such as "Ask me before deleting files."

Let's see how we can ensure compliance and perform desktop management of settings quickly using
PolicyPak.  I'll go ahead and switch over to my Management Station computer.

We'll go ahead and right click over our "East Sales Users", "Create a GPO" and we're going to call
it "Lockdown IrfanView."  So this GPO is now associated with the "East Sales Users." I'll right
click over it.  I'll click "Edit…" I'll dive down under "User Configuration,"
"PolicyPak/Applications/New/Application." There it is,
"[https://www.policypak.com/products/manage-irfanview-with-group-policy-endpointpolicymanager.html](https://www.policypak.com/products/manage-irfanview-with-group-policy-endpointpolicymanager.html)"
along with other applications like "Java," "Flash" "Firefox," "Skype" and lots of other important
desktop applications that your users utilize every day (and you want to make more secure.).

Let's start with "Browsing/Editing" and let's take care of that potential problem we spoke about by
making sure that "Show hidden files/folder while browsing through directory" is always unchecked. 
Notice how the setting became underlined as soon as the checkbox value changed.  This means that the
setting value is going to be delivered through PolicyPak. Now to make sure that it never becomes
checked I am going to right click on it and select "Disable corresponding control in target
application."

Next let's go to "Properties/Settings."  We can't depend upon our users to save their stuff whenever
they exit the application so let's check "Ask to Save settings on program exit."I'll also disable
this setting as well while I'm at it.

Finally, let's go to "File Handling" and let's make sure that our users never have their files
deleted unknowingly so I am going to check "Ask me before deleting files" as well as "Delete to
recycle bin."  Then to absolutely make sure that my users don't reverse these I am going to right
click on each of these settings and select "Hide corresponding control from target application." 
This will make these settings totally invisible to the users.

Now I will go back to my client machine, we'll get a command prompt and run "`gpupdate`."  Now you
could envision the user logging on for the very first time, using a Terminal Services or Citrix
machine, using a VDI session, changing job roles, or getting a new computer.   I just happen to be
using gupdate.

Now that that's done, let's go ahead and reopen the application.  We can see that our desired
settings for Properties/Settings" have been delivered as well as my desired settings in
"Browsing/Editing."  Notice too that these settings have been greyed out in both cases.  Next we
will go to "File Handling" and confirm that our designated setting is completely hidden from view. 
PolicyPak has once again done its job.

And we are done.  That is how incredibly easy it is for you to use PolicyPak to manage and lockdown
Irfanview as well as tons of other desktop applications.

If you're looking for a trial of PolicyPak, just click on the
"[Webinar](https://www.policypak.com/webinar/evaluate.html) / Download" button on the right.

Thanks so much for watching, and get in touch with us if you're looking to get started. Talk to you
soon.


