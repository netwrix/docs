---
title: "Feature Manager For Windows Servers"
description: "Feature Manager For Windows Servers"
sidebar_position: 20
---
# Feature Manager For Windows Servers

Netwrix Endpoint Policy Manager (formerly PolicyPak)'s Feature Manager for Windows works just as
well for servers as it does for endpoints. Watch this video to see it in action!

<iframe width="560" height="315" src="https://www.youtube.com/embed/AdriVS33SnY" title="Endpoint Policy Feature Manager for Windows - For Servers!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Feature Manager for Windows Servers

Hi. This is Whitney with PolicyPak Software. You may have seen some videos on using the PolicyPak
Feature Manager for Windows component to manage Windows features and optional Windows features on
your endpoints. It's pretty cool, but here's some other magic. You can actually use this to turn on
features and optional features on your servers as well.

Let's go ahead and look at this particular "Local Server" that I'm working on right now. This is not
my management station. It's just a garden-variety server. I'm going to go look at the "Roles and
Features" that it has available.

I'm going to click through real quick. All right, here are the "Features." If we scroll through,
we're going to see there's actually not a lot installed right now. What I'm going to do is install
the ".NET Framework." I want to install the "Telnet Client." Let's get rid of this "XPS Viewer." We
don't need it. Let's get rid of it. Those are the features.

Now let's "Cancel" out of here, and let's go look at the optional features ("Manage optional
features"). Here we go. All right, not a whole lot here, but let's say we wanted to install the
Graphics Tools. We can do that as well. Let's close out of here.

Let's hop over here to my management station. This one happens to be a DC, although yours doesn't
have to be. I'm going to come over here and "Create a GPO in this domain, and link it here" against
my "Servers" OU here: "PPFMW Demo."

Let's go ahead and "Edit" this bad boy. All right now, if you've seen the videos for managing your
endpoints, you're going to know that this is something that's done on the computer side here. You'll
be able to see it on the user side node, but you have to do it on the computer side.

Let's go over here to "Feature Manager for Windows," and let's start with "ADD NEW COLLECTION." I'll
leave it with its own "Collection 1" name. Right here, you look at the "Reboot Mode." This is
something you'll want to set. You'll probably want to set it to "Prevent," especially for servers,
because that way you'll be able to determine when it reboots rather than "Allow" or "Asks User." I'm
going to put it on "Prevent" here, and then I will just manually reboot the thing myself. I could
add "Item Level Targeting" here, but we're not going to do that right now. I'll tell it "OK."

Let's get into that collection and "ADD NEW POLICIES." The first thing I want to do is create an
"Install Rule." That will determine what we put on the machine. I'm going to do both "Windows
Feature" and "Windows Optional Feature" by selecting "All."

I'll "Turn Windows features ON." We're going to filter by "OS Type" is "Server." Let's install that
".NET Framework 3.5." Let's go down and install that "Telnet Client." There we go, and that's that.
Let's click "Next."

Now we're going to "Turn Windows optional features ON." Once again, we're going to filter for "OS
Type" is "Server." I'm going to scroll through and find the "Graphics Tools" and "Next." "Add
policies to the existing collection" and "Next," "Next," "Next" and "Finish" up. There we go. Now
I'm going to select "ADD NEW POLICIES" and create an "Uninstall Rule." We will do just "Windows
Feature" because we didn't want to uninstall any of the optional features. So "Next."

I just want to "Turn Windows features OFF." "To turn a feature off, select its check box." Select
the check box of the feature you want to turn off. So again filter by "OS Type" is "Server." We want
to turn off that "XPS Viewer." There we are. So "Next," "Next," click all the way through.

There we go. We've enabled the .NET Framework. We're enabling the Telnet Client. We're turning on
the Graphics Tools. And we're going to get rid of the XPS Viewer.

Let's hop back over here to our server. Close this out. Let's run a GP Update ("`gpupdate`"). Give
it a moment to do its thing there. All right, there it is. Let's just make sure we've received the
GPO before we go rebooting by running "`gpresult/ r`." All right, there we go. We have actually
received the GPO there, so I am going to reboot the machine and we'll come right back and see the
work we've done here.

You see how it says "Getting Windows ready. Don't turn off your computer"? That is because it is
doing the installation of those features that we chose to put there. All right, let's go ahead and
get logged in here.

Let's check all these changes we've made. We'll go to "Manage," "Add Roles and Features" and click
through real quick. There we go. We've got the ".NET Framework" just like we asked it to. Let's
scroll down and see about that "Telnet Client." Yes, there we go, right there. If we scroll further
down, "XPS Viewer" is gone just like we told it to.

So we'll close out of here, and then we'll go take a look at the optional features here. There we
go: "Manage optional features." Let's see if the "Graphics Tools" got installed. There we go. Just
like we told it to.

That is how you can use PolicyPak Feature Manager for Windows to manage your servers as well as your
endpoints. Hope that helps you out. If this is interesting to you, give us a buzz and we'll get the
bits over to you and give you a free trial right away.

Thanks.


