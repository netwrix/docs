---
title: "Reduce or specify Service Account Rights"
description: "Reduce or specify Service Account Rights"
sidebar_position: 70
---
# Reduce or specify Service Account Rights

Most services run under Local System which is WAY too much privileges. Instead, use PPLPM to specify
exactly the right permissions for your services, including the token and access your service needs.

<iframe width="560" height="315" src="https://www.youtube.com/embed/waVSO6KAoPw?si=kAXyCbjMiNK_IWC5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can manipulate a service
account to have reduced privileges for exactly the right things you need instead of having maybe
overblown privileges.

To do this demonstration, I have a service called "hMailServer." It's an old and crusty mail server
which works just fine. I'm going to go ahead and install it as domain admin here. It will work
perfectly fine because as it gets installed by default it even says we're going to do the work as
local system. Now that might be too much for what you want to do. What we're going to show in this
example is how to trim the sails so it's not running as local system. It's going to have reduced
rights and, therefore, have exactly the rights you need.

But we've got to get it set up and show you that it actually works first, so we'll go ahead and run
this thing. Now I'll show you when I double click into it, it starts and everything is just fine. It
doesn't matter if we see it working or not. From this point forward you can assume that it's
working.

Now let's go ahead and create a new local account. I'm going to create a "New User" here called
"service1" and give it a very simple "Password" here. We'll make it so that the "User cannot change
password" and "Password never expires." So here's just a garden-variety local account that we want
to use as the service.

Now to adjust for this what you can do is go to "`services.msc`" as an admin. I'm going to change
this service over. Let's take a look at "hMailServer" here. Let me "Stop" it. Then I'm going to
change its brains. If I click on "Log On" here, we want to change it from "Local System account."
Instead, we want to use "This account."

If I give it "service1" here, there we go, and give it the right password, what happens here is it
says, "The account .\service1 has been granted the Log On As A Service right." So it looks like it
should just work perfectly, but let's go ahead and "Start" it and see that it in fact doesn't work
perfectly.

I'll go ahead and "Start" it. Now we'll run "hMailServer Administrator" which worked when it was
running as local system. But now if we try to double click into it, what do we get? It just hangs
here. It's trying to make contact to the server, and it's catching fire and it's not working. I'm
going to give it a minute to time out, and you can see here's the timeout.

So clearly, we're missing some permission in order to make this happen. Something's wrong. It's not
working properly the way we expect. What we'll do instead is let's go ahead and I'll "Stop" this
here.

Now we're going to use the Group Policy Editor with PolicyPak to do the magic. This window I'm
running as a domain admin. So if I run "`gpmc.msc`" here, I'm actually running as a domain admin to
do the work here.

What I'm going to do is I'm going to do this for my "East Sales Desktops" because that's where this
service happens to be running. Of course, you can use filtering and so on to just get the right
machines. I'm going to "Make HHServer work as expected with LOWER rights."

What we'll do is right click here and click "Edit." This work has to be done on the computer side
because I'm linking it over to desktops. So we'll go over to "PolicyPak" and get on over to the
"Least Privilege Manager" part of the world here.

Now what we'll do is click "Add" a "New Executable Policy." What we're after is the HHServer.exe.
We'll "Use simple rule." I'm going to use "Path" for this example. Probably in real life you want to
make something more secure like "Signature" and "File info." But for the purposes of what we're
doing, this will work out just fine. I'm going to "Add file" and "Browse" for it. I've already got
it here: "`C:\ProgramFiles (x86)\hMailServer\Bin`" and "hMailServer." Click on that guy.

We don't want to necessarily "Run with elevated privileges." What we may want to do is "Run with
customized token." This is where you need to know a little bit about what your service actually
needs. Typically, your vendor will document what privileges are actually required. If you want to
reduce the raw amount of privileges, this is a good way to do it.

So we're going to "Run with customized token." One of the things you can do is "Use the original
user token (Default)" or you can "Always create and use an elevated token." I'm going to do that for
this example just to prove that it's working.

You can also set things like "Token Privileges" where you can "Remove all" the privileges if you
want to or add in specific ones. For instance, if I want to "Bypass traverse checking," I'll go
ahead and add that guy and I'll select "Enabled" for that. Maybe I'll also add one which is going to
let me "Load and unload device drivers." I don't think these are actually needed for this program,
but it's just a good example. I'll show you where this will come into play in a little bit. I'll go
ahead and click "Enabled" here. So now these two guys are "Enabled."

This is where the magic happens. What you want to do here is "Scope" this because you're on the
computer side not for "User processes" but for "User and System processes." In the "Scope Filter"
you're going to specify once again not; here at "fabrikam.com." You're going to change your
"Locations" back to the computer and pick the "service1" account, that guy. So now only this guy is
going to get this particular lash-up that we just created. I'll go ahead and click "Finish," and
we're off to the races. Let's just refresh this and make sure it came in there. There we go. We're
off to the races.

We'll go ahead and close this out. We'll make sure the service is actually not started. We'll go
ahead and run GP Update ("`gpupdate`"). This is refreshing the rule about what's going to happen the
next time the "hMailServer" is launched. We'll just give this a second to finish up here.

Now we will "Start" it again. Now as we're doing this, the process that we want is getting the right
attributes that we specified. How do we know this? We know this in a couple of ways. The first way,
let's go ahead and try to rerun "hMailServer Administrator." If we double click this guy here, you
can see we've already got it working and it's off to the races. So now we're configuring this guy to
work with the service1 account that we created.

Now while we're here as well, I want to show you one more thing. Let me go ahead and as
administrator I also want to run Process Explorer ("procexp") just to show you what's happening
underneath the hood here. Let me go ahead and run "`procexp.exe`." Then I want to show you this
service, the hMailServer service here.

We want to find "hmailserver." It's sawing through all these processes right now looking for it.
There we go. We're looking for `hMailServer.exe`. When I right click over "`hMailServer.exe`" and go
to "Properties" and go to "Security," you can see the privileges that are here. The only privileges
that have been given are the "SeChangeNotifyPrivilege." That's the bypass traverse checking.

Then the other guy we said is the "SeLoadDriverPrivilege." You can see that those guys are driven
directly in. If you know that your process needs those, you can drive those right in and this is the
way to do it. You can see that the "SeImpersonatePrivilege" is inherited.

That's the deal. With that in mind, this gives you everything you need to know to take a service,
reduce the permissions or customize the token, get it exactly the way you need. That way you don't
have to run with local service account access if that's what you want to on your service.

Hope this helps you out. Looking forward to helping you get started real soon.

Thanks so much.


