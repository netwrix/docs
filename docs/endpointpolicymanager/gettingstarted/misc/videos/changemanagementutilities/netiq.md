---
title: "Endpoint Policy Manager Integrates with NetIQ GPA"
description: "Endpoint Policy Manager Integrates with NetIQ GPA"
sidebar_position: 40
---

# Endpoint Policy Manager Integrates with NetIQ GPA

LLearn how NetIQ’s Group Policy Administrator (GPA) utility adds change management capability to
Group Policy and how Endpoint Policy Manager seamlessly integrates with it!

<iframe width="560" height="315" src="https://www.youtube.com/embed/q9q8SXLgHkE?si=ZWlTFjCB6nTHhtRi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak works with NetIQ Group Policy Administrator video transcript

Hello, everybody.

This is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility and Founder of PolicyPak Software. In
this video, I’m going to show you the connection points between NetIQ’s GPA (Group Policy
Administrator) and PolicyPak. There is a little trick before we get started. There is a hotfix
you’ll need to download from NetIQ and install before we get started. That hotfix is 73373.

Once you do that, if you’re in the “NetIQ Group Policy Administrator” console where you click over
the repository SQL server (“DC/SQLEXPRESS”) and go to “Properties” and then under “Customize
Options,” there’s a new tab called “GP Extensions.” We require for us to work this little checkbox
that says, “Enable third-party GP extensions in the GP Repository.” Once that checkbox is checked,
PolicyPak is fully compatible with NetIQ’s Group Policy Administrator.

Let’s go ahead and see exactly what all that means. Let’s go ahead and get started by creating a
“New/GPO…”. The idea behind GPA is that it gives you a great check-in, check-out and work flow
management utility for Group Policy Objects themselves. PolicyPak gives you a killer opportunity to
deploy settings on your desktop and extend the kinds of control you can do for your desktops,
laptops and VDIsessions. We’ve got a lot of other videos regarding that. This video is specifically
about the connection points betweenNetIQ and PolicyPak.

If we create a new Group Policy Object (“New GPO”), we’ll call this “NetIQ GPA/PP 1”. We’ll go ahead
and click “OK” here. We’ll right click, and we can “Check Out.” At that point, it’s now making a
copy of this offline Group Policy Object ready for us to edit. We can right click and now “Edit
GPO.” Under “User Configuration,” you’ve got “Policies,”, “Preferences” and “PolicyPak.” All of
these are now supported within NetIQ GPA.

We’ll go ahead and click on “Applications/New/Application”. Let’s go ahead and pick one of our
pre-configured Paks like “PolicyPak for Mozilla Firefox”. Or you could do “PolicyPak for Java
Control Panel” or “PolicyPak for Adobe Reader X” or “PolicyPak for Microsoft Outlook 2010” – any
number of things that you want to control on the desktop – but we’ll go ahead pick “PolicyPak for
Mozilla Firefox” for now.

You can see here that Firefox is now inside the Group Policy Object. We’ll go ahead and click on
this. Let’s just set a “Home Page” like “www.web1.com”. Of course, you can make a lot of different
changes, but we’ll go ahead and click “OK” here for now. We’ve gone ahead and locked and loaded that
directive inside the Group Policy Object.

If we want to, we can now “Check In,” and it’s now ready to possibly be deployed. What we’ll do is
we will now “Approve Version” here because we like the changes that we’ve made here. Now we are
ready to “Export to AD.” This will take this Group Policy Object and we are “ready to get into AD.”
There we go. It tells us that “It may be necessary to refresh the console to see the exported GPO.”

Let’s go over to our Microsoft “Group Policy Management” console here, and we’ll refresh this. We’re
looking for the Group Policy Object. There it is, “NetIQ GPA/PP 1.” If we look at the “Settings”
report here, PolicyPak is fully compatible with the actual setting report inside the GPMC.

If you’re using a tool like NetIQ GPA, you probably wouldn’t want to do this. But you could if you
wanted to right click and click “Edit…” and see that inside the “Group Policy Management Editor”
under “PolicyPak/Applications/New/Application” the settings that we’ve performed are in fact already
there and ready to go.

If you’re using a tool like NetIQ GPA, you probably wouldn’t want to do this. But you could if you
wanted to right click and click “Edit…” and see that inside the “Group Policy Management Editor”
under “PolicyPak/Applications/New/Application” the settings that we’ve performed are in fact already
there and ready to go.

Now, of course, the one that’s live in the Group Policy live spaces hasn’t been overwritten yet. You
can do that by right-clicking and once again exporting it to Active Directory after you check it in.
Let’s go ahead and “Check In.” We’ll go ahead and once again “Approve Version” here. Now we’ve
approved that version to Active Directory. At this point now, we can “Export to AD.”Now we’re
overwriting. We’ve “Updated Web1 to Web2”.

Now that’s the life cycle of how you would edit a Group Policy Object with NetIQ’s GPA, but at this
point just to prove a point we can of course also “View History…” We can take two different versions
here. For instance, if we wanted to take a look at the one that was exported here and the one that
was exported there and do a differencing report so we can see the difference between these two,
we’ll go ahead and click “Differentiate” and wait for the report to run.

There we can see the “GPO DIFFERENCE REPORT.” I’ll go ahead and I’ll allow the little scripting
thing to run. We can now see the difference between these two values. The old value is
“www.web1.com,” and the new value is “www.web2.com.” So PolicyPak reports work both in the live
Group Policy Object and also perfectly within NetIQ GPA.

There’s a lot more that you can do with GPA. This just scratches the surface between the two
connection points between PolicyPak and also NetIQGroup Policy Administrator. If you have any other
questions, please open a support ticket
https://www.netwrix.com/sign_in.html?rf=tickets.html#/open-a-ticket. Or if you have any questions,
particularly on NetIQ’s GPA, their support team is awesome and they’d love to help you.

Thanks so very much. We look forward to seeing you soon.

