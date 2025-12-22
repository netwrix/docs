---
title: "Endpoint Policy Manager: Manage Opera Next using Group Policy, SCCM or your own management utility"
description: "Endpoint Policy Manager: Manage Opera Next using Group Policy, SCCM or your own management utility"
sidebar_position: 90
---

# Endpoint Policy Manager: Manage Opera Next using Group Policy, SCCM or your own management utility

Netwrix Endpoint Policy Manager (formerly PolicyPak): Manage Opera using Group Policy, SCCM or your
own systems management utility.

<iframe width="560" height="315" src="https://www.youtube.com/embed/9NivCskbpC0?si=dVaW8978R_qf6PfJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Manage Opera Next using Group Policy, SCCM or your own management utility

Hi. This is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility and Founder of PolicyPak Software.
In this video, we're going to see how PolicyPak can manage Opera Next.

There are two tracks to Opera. There's the standard track and then there's the Next track, and
PolicyPak has
[https://www.policypak.com/support-sharing/preconfigured-paks.html](https://www.policypak.com/support-sharing/preconfigured-paks.html)
for both tracks. It's really easy to manage. Let me show you what it would look like.

As you can see, I'm logged on as a standard user. This guy is called "eastsalesuser6," no admin
rights. If he goes to "Settings" here, he can do all sorts of things that maybe you don't want him
to do. Maybe he will uncheck all these checkboxes. We'll leave that last one. So all these
checkboxes are currently unchecked, and maybe we want to deliver check to all of these checkboxes.

Let's take a look at "Websites" here. You can see that it's defaulted to "Allow all sites to run
JavaScript," and maybe we want to make it "Do not allow any site to run JavaScript." Let's go ahead
and see PolicyPak do its thing.

What we'll do is we'll start off by going to the Group Policy editor. We'll go to our "East Sales
Users," right click and "Create a GPO in this domain, and link it here." We'll call this "Manage
Opera Next using PolicyPak." We'll right click and click "Edit" here.

PolicyPak ships with over 100 preconfigured applications, including super popular things like Java,
Flash, Firefox, Chrome – just about everything. In this example, I have "PolicyPak for Opera
Software ASA, Opera Next" here ready to go.

What I'm going to do just to prove a point here is I'm going to check all those checkboxes. I'm
going to enable all those "Shortcuts" here. Maybe I'll make sure we don't "Use proxy for local
servers," and I'll check these checkboxes too. So I'm delivering five checkboxes: "Enable mouse
gestures," "Enable Rocker Gestures," "Enable advanced keyboard shortcuts." I'm delivering "Preload
discover contents" and "Adjust Speed Dial animations for slower hardware." On "Websites" here, I
want to set it to "Do not allow any site to run JavaScript."

That's it. That's all I want to do for this quick experiment here. I'm delivering those settings.
They're locked and loaded. I've linked the Group Policy Object over to our East Sales Users. So I'm
going to run GP Update. Now you can envision the user logging on for the first time or changing job
roles, using a VDI session or a Terminal Services or Citrix session. As soon as they do, they're
going to get the Group Policy directives from PolicyPak.

That's it. Let's go ahead and run "Opera Next" and see what happens. If we go in here, let's go to
"Browser" first here. This is where they are. You can see that PolicyPak has delivered one, two,
three. We also delivered "Preload Discover contents" and "Adjust Speed Dial animations for slower
hardware."

If the user had selected "Use proxy for local servers," PolicyPak will automatically always, even if
a user tries to work around the settings, the very next time the user tries to run it, will
redeliver those settings exactly the way you expect. You can see here. I'll show you again. The user
unchecks the settings that they shouldn't have access to or is naughty and does something they
shouldn't do. The very next time the application runs, PolicyPak automatically redelivers those
settings to ensure the experience is the same every time.

That's it. if you're ready to get started using PolicyPak, just click on the
[https://policypak.com/webinar/](https://policypak.com/webinar/) button on the right, and
we'll look forward to seeing you at a webinar and give you the chance to try PolicyPak out in your
own test lab.

Thanks so much, and we'll talk to you soon.

