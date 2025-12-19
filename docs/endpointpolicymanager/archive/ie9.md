---
title: "Endpoint Policy Manager: Manage Internet Explorer (IE9) Using Group Policy"
description: "Endpoint Policy Manager: Manage Internet Explorer (IE9) Using Group Policy"
sidebar_position: 220
---

# Endpoint Policy Manager: Manage Internet Explorer (IE9) Using Group Policy

Internet Explorer's many settings, and users' tendency to want to tweak then to their taste, can be
a challenge to network administrators. WithNetwrix Endpoint Policy Manager (formerly PolicyPak) you
can leverage its pre-configured pak for Internet Explorer 9, which makes configuring Internet
Explorer as simple as can be. Check out this video to see how it's done.

<iframe width="560" height="315" src="https://www.youtube.com/embed/owNywxnUiQk?si=LflVRRMzZCq0-ntP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Manage Internet Explorer 9 using Group Policy and PolicyPak Video Transcript

Hi, everybody. This is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility and Founder of PolicyPak
Software. In this video, we're going to learn how to configure Internet Explorer 9 using Group
Policy and PolicyPak.

Let's get started. I'm going to fire up Internet Explorer 9 and show you around some dangerous areas
that any regular user can get to. Sure, I'll "Use recommended security and compatibility settings."
Why not? How about this? "Would you like to make Internet Explorer your default browser?" That's a
little reminder pop-up if you have another browser that's selected as your default. Well, maybe you
want to make this your corporate standard, so it will be reminding you.

Just to prove a point, I'm logged on as a guy called "eastsalesuser2." He's just a regular user.
That's the thing. Even a regular user can do a lot of unfortunate stuff to your Internet Explorer.
For instance, if they go to the little gear here which is like Tools, "Internet Options" here, there
are just a billion little ways that they can mess things up.

This is maybe the biggest thing that they can mess up is their Internet Explorer options. So what
we're going to learn real quick is how to lock these things down so users can't mess it up. All
these zones settings and things like that, just tons of areas for them to mess up. Disabling "Enable
Protected Mode" and all that stuff, just terrible.

Security options, maybe you want to enforce things like "Never allow websites to request your
physical location." How are you planning on enforcing that and guaranteeing that setting stays the
way it's supposed to? Maybe you want to also enforce the "Pop-up Blocker."If a user unchecks the
"Pop-up Blocker," what does that mean for you? Well, probably bad news and a trip out to their desk
to fix it.

If I click on "Advanced," there are almost 50 or 80 settings here that a user could possibly click
on. Any one of these settings that they uncheck could make a big headache for you and therefore make
your network less secure.

But there might be some things you want to do in terms of security to make things more secure. For
instance, how are you going to run around and enforce the "SSL" and "TLS" settings, for instance? Or
how are you going to ensure that users maybe"Do not save encrypted pages to disk"? Any of these
things, all of these things are possible using the PolicyPak for Internet Explorer 9 that we're
going to explore together right here.

Right here during this little chat here, I've made some changes that maybe I shouldn't make in the
"Privacy" tab. I have unchecked the "Turn on Pop-up Blocker," which is going to therefore leave it
off. I've left off the "Never allow websites to request your physical location." Let's go ahead and
click "OK" here.

We'll go over to our Group Policy Management Station over here. The first thing we're going to do
before we create a Group Policy Object here is to look at our "PreConfigured PolicyPaks."Here you
can see we've got a giant list of applications that we can manage right out of the box. One of them
is "Internet Explorer 9." Here it is, "Internet Explorer 9."

What we'll do is on our management machine go to the "Program FilesPolicyPakExtensions"folder. The
idea is all you need to do is to take our preconfigured PolicyPak"pp- InternetExplorer9.dll" and
"Copy here…" into the"PolicyPak/Extensions" folder. Once you've done that copy, you are ready to go.

For our "East Sales Users" we're going to create a "New GPO" here called "Manage IE9 using Group
Policy and PolicyPak." We'll then right click, click "Edit…" and we'll dive down under user side
"PolicyPak/Applications/New/Application."We'll click on "PolicyPak for Internet Explorer 9," and
there we go. You can see we look exactly like Internet Explorer does.

Let's go ahead and go right to some settings. Those "Security" settings, we don't want users to get
to the "Custom level…" or anything. Let's just right click over this tab and just "Disable whole tab
in target application,"just make that whole problem just go right away.

Let's go over to the "Pop-up Blocker" here we talked about. Let's make sure we can turn it on here.
We'll "Turn on Pop-up Blocker" and also "Never allow websites to request your physical location." So
we're checking both of these. While we're here, we're going to right click and "Disable
corresponding control in target application."We're literally going to gray it out.

Now the Internet zone stuff, PolicyPak can't control that. But what we can do is we can also take
this slider and again "Disable corresponding control in target application."The idea is that you can
use good old-fashioned in-the-box Group Policy stuff to configure those Internet zone settings if
you wish and use us to guarantee those settings and lock them down.

In fact, all of these buttons are removable using PolicyPak. You can either "Hide corresponding
control in target application"or "Disable corresponding control in target application"if you're so
inclined. For instance, if we want to hide "Sites," we can right click and "Hide corresponding
control in target application,"which will thus remove it.

We're doing some fancy footwork here. We're disabling the scroll bar. We're hiding "sites." We're
disabling this checkbox, and we're also disabling that checkbox. All the while we're setting those
two settings.

We'll jump over to our "Advanced," and let's go find some advanced things that we were talking
about. If we want to set a very particular SSL policy and guarantee some settings, why don't we
deliver "Use SSL 3.0" and "Use TLS 1.0." We'll guarantee those settings.

While we're here, we'll also right click and "Disable corresponding control in target
application"for that setting. We'll also "Disable corresponding control in target application"for
the TLS setting. So we're setting and delivering these two boxes that are checkmarked and also
disabling the UI.

But maybe we don't want users to be able to check these other security settings, so we can right
click and "Disable corresponding control in target application"for those too. So we're disabling all
of these important security settings so users can't get around it.

While we're here, we'll also "Do not save encrypted pages to disk." We'll go ahead and "Disable
corresponding control in target application" for that guy as well. So we're setting the setting and
disabling it. We'll go ahead and click "OK."We've locked and loaded our directive inside Group
Policy. We'll go ahead and close out Internet Explorer on our client machine.

Now we're ready to run "gpupdate."PolicyPak works as part of Group Policy and the operating system,
which means that every time Group Policy updates that is when we apply. We will apply at log on, in
the background. We actually also keep our settings enforced when there's no network connectivity. So
if you want to make sure users don't mess around even when they're off the network, you can only do
that with PolicyPak.

We'll go ahead and now run "Internet Explorer 9," and we'll watch those settings get configured.
We'll go back to the little gear, Tools, "Internet Options" here. Look at that. The "Security" tab
is grayed out. There's no way for users to get there, which is awesome.

If we click over to "Privacy," you'll see that slider has been disabled. The user can't do that
anymore, which is great. We've delivered the two checkboxes we wanted – "Never allow websites to
request your physical location" and "Turn on Pop-up Blocker." So we're delivering settings and
locking things down.

Again, if you wanted to configure Internet zone stuff, we have a great better together story there.
Feel free to use the in-the-box stuff to configure those settings. Oh, and look. We've removed the
button entirely. We've completely removed the UI so a user isn't tempted to even look at that or
even as a question about it, which is super nice.

If we go over "Advanced,"we decided to deliver those TLS settings. We can see that we're delivering
those settings underneath the hood. Even though you can't see it here, we are in fact delivering the
checkbox. The user just can't work around it, and we are enforced. So PolicyPak is delivering the
correct setting and ripping the knob off so a user can't possibly screw that up.

That's it for PolicyPak with Internet Explorer 9. When you're ready to get started, just click on
the big old "Download" button or "Webinar" button on the right, and we look forward to talking with
you soon.Remember, with PolicyPak, what you set is what they get.

Thanks so much. Bye-bye.


