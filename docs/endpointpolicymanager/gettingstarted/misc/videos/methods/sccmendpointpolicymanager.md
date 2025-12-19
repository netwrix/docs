---
title: "Deploy Endpoint Policy Manager Settings Using SCCM or Other Management System!"
description: "Deploy Endpoint Policy Manager Settings Using SCCM or Other Management System!"
sidebar_position: 30
---

# Deploy Endpoint Policy Manager Settings Using SCCM or Other Management System!

Do you want to deploy Netwrix Endpoint Policy Manager (formerly PolicyPak) settings, but hate the
idea of using Group Policy to do it? You're in luck–this video tells you how to create, export, and
deploy Endpoint Policy Manager magic using your own desktop management system like SCCM or LanDesk!

<iframe width="560" height="315" src="https://www.youtube.com/embed/n1ZZpUbbNd0" title="Deploy Endpoint Policy Manager Settings Using SCCM or Other Management System!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Deploy PolicyPak Settings Using SCCM or Other Management System

Hi, this is Whitney with PolicyPak Software. In a previous video, we looked at how to deploy real
Group Policy using, well, not Group Policy, using SCCM or some other desktop management system. In
this video, we're going to learn how to create PolicyPak magic and then export it and wrap it up in
an MSI and deploy it using SCCM or some other system.

To start off with, what we need to do is create a "New" GPO. I'm going to do that, and I'm just
going to call it "PP Settings." Then we're going to need to "Edit" this. So we're starting off in
Group Policy, but we're going to end in not Group Policy land. All right, let's just make this a
little bit wider.

We're going to actually use three different components of the PolicyPak software. Here we go. Let's
open up this node. I'm going to use the "Application Settings Manager" to manage some Firefox
settings. I'm going to use the
"[https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html)"
component here to make sure that my users can't download and run unknown ware, malicious software.
And I'm going to use the "Browser Router" to make sure that every URL with the word "Google" in it
will open up in Chrome, and I'll use it also to
[https://www.policypak.com/pp-blog/windows-10-block-websites](https://www.policypak.com/pp-blog/windows-10-block-websites)
like Facebook.

Let's start off with the "Application Settings Manager." There are other videos on the website that
will go into greater detail on all of these components. For today, all I want to do is just create
some settings and then export them and deploy them using not Group Policy.

Let's go over here. I want to deliver the setting that I want a particular "Home Page" to be there.
Let's just go with "www.policypak.com." Then let's also say that we can't have users going into
incognito mode. Let's go over to "Extras." We're going to "Turn off private browsing," and we'll
save that.

Now that we've created these settings that will manage Firefox, how are we're going to go about
deploying them? We'll start off by exporting them as an XML file that will then get wrapped up in an
MSI that we'll deploy using a desktop management system. So we will "Export settings to XML Data
File." I'll just put that right on the "Desktop." I'll just call it "FF Settings." There it is right
there.

All right, so now let's hop down to "Browser Router." We're going to start on "Browser Router" by
creating selecting "ADD NEW COLLECTION" because I want to put a couple of policies in there. So
let's get in there, and I'm going to "ADD NEW POLICY" here. I'll say "Google to Ch." I'll "Wildcard"
it. We'll just say anything "\*google\*" goes to "Google Chrome."

All right, I'm going to add one more policy ("ADD NEW POLICY") where I say "No FB." Again, I'll just
"Wildcard" it ("\*facebook\*") and I'm going to "Block" it. The "Block Text" I want to be "NO FB FOR
YOU!" All right, so now once again I'm going to right click and "Export Collection as XML." I'm just
going to call it "BR Settings." There you go. It pops up right there.

Finally, with "Least Privilege Manager" I'm just going to "ADD NEW SECURE RUN POLICY," which says
basically if the file wasn't installed by one of these in the "SecureRun Member" list, then it won't
open. So some portable app or malicious software won't be able to accidentally downloaded by your
standard user because they're not on this list. Let's say "OK." Let's "Export as XML." We'll just
call that "SR Settings" I suppose, and that's that.

All right, so now we've created our directives. We've exported them as XML. Now what do we do? We're
going to use the PolicyPak Exporter Tool to be able to wrap it up in an MSI that can then be
deployed using any of a number of different systems – SCCM or KACE or some other system.

It installs alongside the admin console MSI when you get that installed on your management station.
Sometimes it's up here with the "Most used" or Recently Installed. If it's not, just scroll down,
find the "PolicyPak" folder and you'll see the "PolicyPak Exporter Tool" right there.

I'm going to "Create a new MSI installer." Now it wants me to "Add Existing Files." What I want to
do is pick up those XML files that we had earlier. So let's grab these three settings. Let's "Open"
them all up. We are going to "Install For" "Computer" with a "Target" of "All Users." Then we click
"Next."

We can give it a "Product Name." It's what shows up in the Uninstall a Program, for example, in your
Control Panel. Let's call it "PP Settings." We'll click "Next/Next." I am going to go ahead and put
this actually in a "SHARE" folder. I'm going to call it "PP Settings," and we are good to go.

Now before we talk about deployment, I want to go over to my endpoint and look at these ungoverned
policies so you can see the before and after. If I come over here and I open up "Mozilla Firefox,"
it's going to open on whatever this homepage is here. If I want to go to "New Private Window," I
absolutely can because these settings aren't governed.

Also, while I've got a browser up, let's go ahead and go to "google.com" and watch it just stay in
Firefox, which is to be expected because we haven't applied any Browser Router routes yet. There we
go. It just popped up in there. It stays in Firefox like you would expect it to do.

Finally, we talked about Least Privilege Manager and making sure that users can't run stuff that
might be harmful. "NotepadP" right here is just going to open right up. If I go to look at some
ransomware (it's just a "Ransomware Simulator") but oh, my God, now it's eating all my documents. So
the users can access stuff that could be potentially very harmful, and the SecureRun is going to
stop that in its tracks.

So now we've looked at the endpoint. We've looked at the ungoverned settings. All right, let's go
back to my management station here and talk about deployment. Since there are a lot of different
ways to go about deploying this, I'm going to have to ask you to use your imagination and just
remember you can deploy it however you're already deploying MSIs.

In my case, I went ahead and I dropped it in the "SHARE" folder, so this is going to be a little
manual on my end. But it's in my "SHARE" folder so when I hop back over to my endpoint here, I can
just get into that SHARE folder. There we go. It already knows where I wanted to go.

We're going to go with the "PP Settings" here. I'm just going to install it by hand. Like I said
before, if you were using SCCM or other systems management, then you would be able to do this
completely silently just in the background.

All right, so now if I come up here and I go to my "Control Panel," I'm going to look at "Uninstall
a program." I'm not actually uninstalling anything. I just want to point out that the "PolicyPak
Client-Side Extension" is already on this machine. That has been previously deployed. That has to be
there in order for the settings to work. And then right here, "PP Settings," we have them set right
here.

Now that we've done this, when we go to our settings that used to be ungoverned we'll find out a new
thing. Let's open up "Mozilla Firefox" and see what happens. There we go. We have our homepage set
to "www.policypak.com" just like we told it to. When we come here, we can no longer get into the
incognito mode. So we ripped the knob off of that one, we set this homepage, and that was done using
the Application Settings Manager.

Now actually let's hop back into Firefox here and let's see what happens if we try to go to
"google.com." There we go. It closed out Firefox, and it's going to pop us right open in Chrome just
like we told it to because we created that route. So anything with "google" in it is going to close
down the tab of whatever it's in, and now it opens in Chrome. If we try to go to "facebook.com,"
let's see what happens. "NO FB FOR YOU!" We blocked that website using the Browser Router.

Finally, we talked about Least Privilege Manager. Let's see if we can get into "NotepadP" anymore.
Nope, sure can't. If I go to the "Ransomware Simulator" and try to open that up, it has been
blocked.

So we looked at creating application settings using the Application Settings Manager. We used the
Least Privilege Manager to lock down the machine and make sure that users couldn't run anything
harmful. And we used the Browser Router to send everything Google to Chrome and block Facebook. Then
we exported those settings, we wrapped them up in an MSI, and I deployed it by hand. You'll deploy
it using SCCM or KACE or whatever you have.

If this is interesting to you, let us know and we'll get you started on a free trial right away.

I'll see you in the next video. Thanks for watching.

