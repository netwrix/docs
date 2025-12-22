---
title: "Elevate apps as standard user, BLOCK other Admins"
description: "Elevate apps as standard user, BLOCK other Admins"
sidebar_position: 100
---
# Elevate apps as standard user, BLOCK other Admins

If you're in charge of your domain, you can block local and other domain admins from installing
applications you want to be elevated via Netwrix Endpoint Policy Manager (formerly PolicyPak) Least
Priv manager. See the video for details.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZnjRd9NjMws?si=vnm3ofa1VwsPdCsh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can enable your users to
double click on items to install them in their context but elevated but prevent other admins like
local admins or domain admins to right click over these applications and select "Run as
administrator."

I've got nothing set up here. Just to prove a point, as a standard user if I just double click this
application, I get prompted for credentials. And if I were to right click over here and select "Run
as administrator," I'm going to get prompted for credentials.

What we want  to try to do is to enable a rule that will allow the standard user to elevate the
application but block lower admins. They can be local admins or even other domain admins.

In most of my videos, you see me creating my Group Policy Objects and editing them from my GPMC
management station that is a domain controller. In this video in order to do this work, you have to
do it from a machine that is running Windows 10. I'll explain why that is in a little bit.

I already have the Group Policy Object up and running that I want to affect my machines. You can see
I have this on the computer side, and I'm going to head down to the "Least Privilege Manager"
section.

For this example, I'm going to be using a "New Executable Policy" to do an installation of
PowerPoint Viewer, but this could work for anything. If you have a script policy with a command, if
you have a Windows installer policy with an MSI, or whatever, this will work for everything. But I'm
going to do it with an executable policy.

The first thing you want to do is create a rule that's going to block the item. I'm going to "Use
simple rule." You could "Use combo rule" which is generally our better advice, but I'm going to "Use
simple rule" here. I'm going to pick the "Hash" of the application that I want.

The first thing you need to do is to block the thing you want, so I'm going to block
"PowerPointViewer." Now as you're going along here and you click "Deny execution," on the very last
page we have a thing that's called "User and System processes." When you do this, it's going to deny
it not just for the user but it also for the System processes like the admin or the System. So now
you're literally denying absolutely everybody from getting this thing installed. That's the first
rule.

The second rule, however, which you need is to "Add" another "New Executable Policy" to open it back
up. So we're going to open up by creating another simple rule "Use simple rule" and selecting

"Hash." We want to open up the "PowerPointViewer" again. We want to "Run with elevated privileges."
This can be in the "User processes" context here on the computer side. Or if you want to dictate it
for your East Sales Users on the user side, that's valid also.

So said again, the first, the block, this deny item, this has to be done on the computer side. The
enable part, that can be on the computer or the user side, and the "Scope" can be set to "User
Processes."

Now the thing that we want to do is if we want to block local admins, the way you're going to do
this is you need to scope this. You're going to take the deny and you're going to say who this is
going to apply to. Because right now we're saying deny everybody and allow users. That's not quite
what we want to do.

What we really want to do is deny execution for a specific "Scope Filter." Now the reason we're
doing this on Windows 10 is that there's a special "Group" that you can allocate here. When you
click on "Locations" if you pick your Windows 10 machine, the management station you're on, there's
a special group that's called "Local account and member of Administrators group."

Let's go ahead and pick that one first, and let's see this work. Let's get the lash-up. We're
denying the ability to install for local accounts and the admins group. And then we're saying if
you're a standard user and you're getting this policy, then elevate it.

Let's see what happens. Now I'm going to go back here and I'm going to run GP Update ("`gpupdate`").
We'll give this a second to catch up, and then we'll see it work in action. All right, here we go.

Now like I said, the standard user, when they double click on "PowerPoint Viewer" it now gets
elevated. I could click "Continue" and it would install. I actually don't want to install, so I'm
going to go ahead and click "Cancel."

Let me show you what happens if you now try to right click and "Run as administrator." You get the
prompt but if you try to do something as the local admin, I have a local admin, what happens here is
he gets prevented. That's pretty nifty right there.

Let me show you what happens if you try to do this as a domain admin. As a domain admin what happens
is it runs. So now in the current setup that I've got, I have let it work for standard users and
domain admins. If you like that, that's great. Stop right here. But if you want to go the extra mile
and block local admins and domain admins, we have to change the scope on this guy.

We're going to change the "Scope Filter" of the deny item to not just "Local account and member of
Administrators group." We going to signify in "fabrikam.com" all "administrators" which would be
considered domain admins and local admins.

Let's go ahead and see this change. I'll go ahead and run GP Update ("`gpupdate`") again. Give this
a second to catch up.

Now like I said, that second rule allows a standard user to run it and install it in his context.
But if we now to right click and "Run as administrator," we already saw that a local admin is going
to be blocked.  But now what happens if we give it domain admin credentials? If I give it domain
admin credentials, also blocked.

So now you've got a really fine-grained razorblade to dictate who can install what at the right
time. By the time this is over, when you make software available to that standard user or if there's
a local admin on the machine, they are enforced by PolicyPak to do it the way you want and not the
way they want.

Hope this video helps you out. Looking forward to helping you get started real soon.

Thank you very much, and talk to you soon.


