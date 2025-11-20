---
title: "Endpoint Policy ManagerStart Screen & Taskbar Manager: Manage non-domain joined machines using Endpoint Policy Manager Cloud"
description: "Endpoint Policy ManagerStart Screen & Taskbar Manager: Manage non-domain joined machines using Endpoint Policy Manager Cloud"
sidebar_position: 10
---
# Endpoint Policy ManagerStart Screen & Taskbar Manager: Manage non-domain joined machines using Endpoint Policy Manager Cloud

Got non-domain joined machines? Use Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud to
deliver Endpoint Policy Manager Start Screen and Taskbar settings to them. Couldn't be easier.
Here's how.

<iframe width="560" height="315" src="https://www.youtube.com/embed/WUBMbTRJXiM" title="Endpoint Policy Manager Start Screen &amp; Taskbar Manager: Manage non-domain joined machines using Endpoint Policy Manager Cloud" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak Start Screen & Taskbar Manager: Manage non-domain joined machines using PolicyPak Cloud

In a previous video, you saw me use Endpoint Policy Manager Start Screen and Taskbar Manager to
deliver a particular group to Windows 10 and also set the configuration of the Windows 10 Start
Screen. In this video, I'm going to show you how you can export those same settings and get them
deployed to your not domain joined machines using Endpoint Policy Manager Cloud.

To start, we're going to go back to the Group Policy Object that we used earlier, and we're simply
going to do some exports. I will right click over the "Start Screen Manager" here and "Export
Collections as XML" or you can export simply one collection if you have that. I'll call this
"PPSSM-export1." Then for my Taskbar collection, I'm going to do the same. Right click (on "Taskbar
Manager") and "Export Collections as XML." I'll call it "PPTBM-export1."

So these puppies are just hanging out now on the Desktop ready to go. What I'm going to do next is
go into Endpoint Policy Manager Cloud, and it's as easy as can be. You can go to a particular group
of computers or you can in Endpoint Policy Manager Cloud link these over to the "All" group.

I'm going to "Upload and link a new XML here." I will "Browse" for my file that I just exported.
Here's my Start Screen Manager export. I'll call this "Endpoint Policy Manager Start Screen 1" and
add that guy. Again, because I'm linking it over to the "All" group, every computer will be affected
by this as we'll see in the demonstration.

I will also "Upload and link a new XML here" for the Taskbar Manager right there: "Endpoint Policy
Manager Taskbar Manager 1." Now these two XML policies are linked to the "All" group. Let's go over
to our endpoint and see it work.

You can see here's the before picture. I've got the multiple items that are just defaulted here in
this Windows 10 machine. This machine also has a bunch of applications preinstalled on it as your
computers might. Just to prove a point, this computer is not domain joined. It's in a "Workgroup"
that I have called "NOT DOMAIN JOIN."

What I'm going to do now is install the "Endpoint Policy Manager Cloud Client." This has to be
installed as an admin one time, and then after that we keep on rolling. So you'll see me install it
one time here. In the background, it's making contact to Endpoint Policy Manager Cloud, downloading
the client-side extension and then also performing the work for the Endpoint Policy Manager Start
Screen. Now that that's finished, you can see this computer is a member of the "All" group. We'll
just give this a second to catch up. There we go. We can see we have an icon there.

Exactly what we saw in Group Policy land should occur here in not domain joined land where if we go
to the Start Menu, we get "My Important Apps." We have this in what's called Full/Replace mode.
We've wiped out on purpose the other groups that are there. If you wanted to preserve those, that's
possible too.

The Taskbar Manager only kicks in the next time you log off and log back on, so let me go ahead and
"Sign out." Then we'll just give it a second, and we'll go ahead and sign back in here. Let's go
ahead and sign in as the "StandardUser" here, and let's see what happens.

We're looking for results on the Windows 10 Start Screen and also on the Taskbar. Let's see if
that's what we get. You can see the Taskbar instantly. We've replaced what we have there, and on the
Start Menu you can see "My Important Apps."

You can either launch an application from here right off the Start Menu and also right here off the
Taskbar if that's also something you wanted to do. Just like that, you've configured this not domain
joined machine to accept your directives with Endpoint Policy Manager Cloud.

With that in mind, you can join us for a webinar to get started right away and try this out
yourself.  
Thanks so very much.


