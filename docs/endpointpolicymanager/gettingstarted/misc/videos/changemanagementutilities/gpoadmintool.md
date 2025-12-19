---
title: "Endpoint Policy Manager and Quest's GPOADmin Tool"
description: "Endpoint Policy Manager and Quest's GPOADmin Tool"
sidebar_position: 30
---

# Endpoint Policy Manager and Quest's GPOADmin Tool

GPOADmin from Quest is great. It provides full workflow management around Group Policy Objects. And
Netwrix Endpoint Policy Manager (formerly PolicyPak) is fully compatible with all the GPOADmin
constructs: check-in, check-out, deploy, differences reports, and more. Check out this video if
you're a Quest GPOADmin customer to see how Endpoint Policy Manager integrates perfectly with your
Quest GPOADmin Group Policy management solution.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0_N9h1EKZ3s" title="Endpoint Policy Manager and Quest GPOadmin Tool" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager works along Quest's GPOADmin Video Transcript

Hi, this is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility, and Founder of Endpoint Policy
Manager Software. In this demonstration, we're going to talk about the connection point between
Quest's GPOADmin utility and Endpoint Policy Manager. Quest's GPOADmin utility is a
check-in/check-out and workflow management tool for Group Policy Objects, and Endpoint Policy
Manager is compatible with that.

What I want to show you right now is a Group Policy Object inside of "Quest GPOADmin"called "Manage
Firefox Using Group Policy."What I'm going to do is I'm going to right-click over this. I'm going to
"Check Out." It has currently no changes in it, so what I'm going to do is I'll "Make my first
changes." So this is really a blank Group Policy Object.

I've just checked it out; see now it's "Checked Out." I'm going to click "Edit" here. This is the
GPOADmin pre-launch editor. This is a great little wizard that is part of GPOADmin. For our
purposes, we're going to click on "Launch Editor" here. This should look very familiar to you. It
launches the Group Policy Management Editor.

If we wanted to dive down under user side "Endpoint Policy Manager /Applications/New/Application"
and select any of the Endpoint Policy Manager s that you've either got in the local storage or
central storage. We'll just go ahead and select "Endpoint Policy Manager for Mozilla Firefox" just
for fun.

We'll go ahead and click on this guy right here, "Mozilla Firefox." We'll change the
[https://policypak.com/](https://policypak.com/) from "about:blank" to "www.web1.com," just
something like that. So we've changed the homepage to "www.web1.com," and we'll go ahead and click
"OK." That's it.

We'll go ahead and click "OK" again here. Now we've got those changes in Quest's GPOADmin's offline
database. What we're going to do next is right-click over that offline copy, "Manage Firefox Using
Group Policy," and "Check In." Now we're done with that, so we'll say "Made our first change," and
we'll say "OK" here. The status should change from "Checked Out" to checked in. There we go; it has
become "Available."

What we'll do next is we'll right-click and we will "Approve" it. Basically at this point now, we're
going through the chain of command. We've checked it out, made some changes, checked it in. Now it's
ready to go, and now we're approving it, so "Ready to deploy." It's now "Pending Deployment" is the
current status here.

Now at this point, I'm just refreshing. We can right-click, and now "Deploy" it live. Now just for
fun, I'm going to show you the current live GPO here. This is the real Group Policy Management
Console. If we look inside the GPO and click on the "Settings" report, you'll see that there are
absolutely "No settings defined" in there right now.

If we were to dive in there and right-click and "Deploy" now inside of "Quest GPOADmin," we are now
"Deploying these FF settings live" scheduled for "Immediate deployment." That's it.

If we were to now dive back into the real Group Policy Editor and refresh, there we go. We can see
our Mozilla Firefox settings. If we were to right-click under the live GPO – which you probably
shouldn't do if you're running Quest GPOADmin – you can see that the settings are, in fact,
perfectly there just as we would expect, "www.web1.com."

Now let's go ahead and continue the model of how "Quest GPOADmin" works, which is we can now
right-click and we can "Check Out" and make a different setting. We're going to "Change Web
Settings." We're now checking out that Group Policy Object here. It's now "Checked Out."

We'll right-click and click "Edit" here. We'll go ahead and "Launch Editor" again. We'll dive down
under "`PolicyPak/Applications/New/Application.`" We'll go ahead and make a change. You could, if
you want to, create a new application setting here, but we're not going to do that. We're just going
to change the existing Firefox one that we've got here from "www.web1.com" to "www.web2.com." We're
making just a small little change here just to prove a point.

We'll go ahead and close that out here. We'll dive back into the "Quest GPOADmin" and click "OK."
Now we've made our change. It's now "Checked Out." We're going to right click and "Check In." We've
"Made our important change." The status should change in just a second here. There we go. It's now
"Available."I'm going to go ahead and once again "Approve" this and deploy it, OK, "approved." Then
go ahead and "Deploy" it. We'll say that this is "Deploy number 2."

What we get out of this ability is similar to other Group Policy management tools. The idea is that
we're doing all of our settings changes offline and then only deploying when we need to. We can also
perform a report and history. If I want to "Show History" of this Group Policy Object, I can see the
multiple changes that I've made

I can see that here is "Deploy number 2," and there is "Made our important change" and "Deploying
these FF settings live." If I want to, I can compare these two different entry points and run a
"Differences" report. I'm going to go ahead and do that right now. This takes a couple seconds to do
what it has to do.When it's done, what we get is we can see that "Value" of the Firefox "Home Page"
was changed from "www.web1.com" to "www.web2.com."

This is, again, similar to what you might see in some other change management tools. The point of
this whole video, of course, is to show you that Endpoint Policy Manager is fully compatible with
Quest GPOADmin. If you are currently using Quest GPOADmin to manage your Group Policy environment,
Endpoint Policy Manager is a natural fit to continue onward with that and do more on your desktops.

If you want to learn exactly what Endpoint Policy Manager does and how it has its own Superpowers
upon the desktop to deploy settings, lock them down and keep those setting available offline, then
go ahead and watch some of our other videos, which show that in excruciating detail. I just want
here to show you that we're compatible with the Quest GPOADmin workflow.

OK, thank you very much. When you're ready for a trial of Endpoint Policy Manager, just go ahead and
click on the download button on the right. We'll be in contact, and we'll get you a download of
Endpoint Policy Manager real soon.

Thank you very much. Have a good day.
