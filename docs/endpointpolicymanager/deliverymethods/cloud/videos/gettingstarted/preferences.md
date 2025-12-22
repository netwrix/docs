---
title: "Endpoint Policy Manager Cloud + GPPrefs (More examples)"
description: "Endpoint Policy Manager Cloud + GPPrefs (More examples)"
sidebar_position: 100
---
# Endpoint Policy Manager Cloud + GPPrefs (More examples)

Create Group Policy Preferences inside theNetwrix Endpoint Policy Manager (formerly PolicyPak) Cloud
portal without having to go to your GPMC! Watch this video and see how to create and deploy Group
Policy Preferences within our cloud portal!

<iframe width="560" height="315" src="https://www.youtube.com/embed/3U-4zOMQHLI" title="Endpoint Policy Manager Cloud + GPPrefs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager Cloud + GPPrefs video transcript

Hi, this is Whitney with PolicyPak Software. In this video, we are going to be going through the new
Group Policy Preferences items that you can edit within the cloud portal itself without having to
involve your GPMC. I'm going to walk you through these one-by-one, so we'll have a little bit of a
transition between each one as we go through them all separately. So let's get started.

Here we are on my cloud machine. This is the machine that we'll be using for all of these examples
here. The first one we're going to be looking at is drive mapping. Right now, I just want to hop
over to my Explorer right here, and we're just going to see what we have right now. So we've got C
and D.

All right, what I want to do is go back over to management station here. I'm actually already logged
in to my cloud instance. I'm over here on the "Computer Groups" tab. Now that cloud computer that I
mentioned just now, the one we were just looking at, is actually already in "West Sales" under
"Company Groups."

What I want to do is "Create and link a new Policy" here. What I'm going to do is choose
"Preferences," choose "OK." We'll go to "Drive Maps." What I want to do is I want to do a "Mapped
Drive." The "Location" is going to be "\\dc2016\share." I'm going to "Label as" "Shared Folder." I
can choose my "Drive letter." Either "Use first available, starting at" or "Use." I'm going to
choose to use, let's say, "X." Let's "Show this drive," "Show all drives."

What I do want to do is – this is optional, this is completely up to you – but what I'm going to do
is "Remove this when it's no longer applied." That actually turns this "Action" into a "Replace"
action, and that's fine. What I want to do is now tell it "OK." Now I have mapped this drive here.
It's going to be the "X" drive. It's going to be called Shared Folder. I'm going to tell it "OK."

All right, now let me come back over to my cloud machine here. Just for the sake of the video, I'm
going to run "ppcloud /sync" and sync it with the cloud immediately. We'll give it a moment to
process. Now we can actually see that we have received that XML directive called "New Drive." Let's
minimize this. Let's come back over here. There we go. We have our "Shared Folder" "X" and we're in
good shape.

Now just to prove a point, let's hop back over here and let's "Unlink XML Data file from Computer
Group." All right, we're going to unlink this. We're going to rerun "ppcloud /sync." We're going to
see that we are no longer receiving that XML directive. Let's see what we've got. Let's come over
here. Sure enough, we removed it when it no longer applies.

So that is the drive mapping feature that we have available within the PolicyPak Cloud portal, and
that's how it works.

All right, in this section of the video, we are going to look at deploying printers using the Group
Policy Preferences item within the PolicyPak Cloud portal. Before we do that, I'm over here on my
cloud machine endpoint here. I'm going to go over to "Devices and printers," and we're going to see
what we have right now before we deploy anything. All right, we have three "Printers" right here.
Not exactly printers, but there are three listed right here.

What I want to do is just minimize this and come over here to my management station. Once again, I'm
already logged in to the PolicyPak Cloud portal, and I'm over here on "Computer Groups." Now from
before, we have that computer in "West Sales" under "Company Groups" here. What I want to do is
"Create and link a new Policy" here.

I already have a printer that's shared out, so that part has already been done. I just need to get
it deployed to my endpoint. What I want to do is "Create and link a new Policy," "Preferences,"
"Printer," and "OK." I'm going to choose a "Shared Printer." That's what I have available right now.
I'm going to choose "Create." It will change it over to "Replace" in just a second. It's going to be
"\\dc2016\printershare." There we go.

We can do this "Map to local port." We can "Set this printer as the default printer." Really what I
want to do right now though is just get it deployed. I'm going to choose to "Remove this when it's
no longer applied." It's going to change that to "Replace," but that's fine. In this "Description,"
I can just call it "Printershare Printer." "Printershare" is the name of the printer and then
"Printer" just indicates that it is a printer. It's up to you. You pick what you want to put here.
Tell it "OK" and "OK." All right, so we have "New Printer" here.

Now let's go back over to our cloud endpoint here, and I'm going to run "ppcloud /sync." We'll let
it sync with the cloud and receive that new directive. Here we go. We see "PolicyPak Preferences,"
"New Printer" right there. Let's go over here and see what we've done. All right, we're going to go
to "Devices and printers." Sure enough, there we are. We've deployed that printer just like we meant
to.

Now since I said I wanted it to be removed when it no longer applies, let's hop back over to the
management station, get rid of it, and see that it disappears as we expect it to. Let's "Unlink XML
data file from Computer Group," "Yes." Come back over to the endpoint, close this all out, and let's
run that "ppcloud /sync" again. You'll see under "Group Policy Preferences" there's no longer that
new printer directive that's coming through. Let's come back here and check this out, "Devices and
printers." There we go. It's gone, just like we expected it to.

So that's how you can go about deploying a printer to your cloud-joined endpoint by creating a Group
Policy Preferences item in the cloud portal.

In this section of the video, we are going to look at delivering registry settings using the Group
Policy Preferences editor inside of the cloud portal. We are going to be looking at something pretty
basic today, but you can use this of course for anything you want. Let's go ahead and look at our
registry settings in the endpoint here. We're going to just look at mouse "DoubleClickSpeed." Right
now it is "500." We're just going to deliver a different setting to that. We're going to make
it 604.

We can see that we're in "HKEY_CURRENT_USER\Control Panel\Mouse" and we're going to be working with
"DoubleClickSpeed." Let's come over to our management station. Once again, I am logged in. I'm in my
"Computer Groups" area, and I'm on the "West Sales" under "Company Groups" which is where my
computer lives.

I'm going to "Create and link a new Policy" here. I'm going to choose "Preferences," "Registry," and
I'm going to choose "Registry" right here. In this case, I want my "Action" to be "Update" because
the value already exists. I just need to update it to something else.

So we are "HKEY_CURRENT_USER." "Key Path" is going to be "Control Panel\Mouse." We can just double
check that if we want to. There we go: "Control Panel\Mouse." The "Value name" is
"DoubleClickSpeed." The "Value type," I already know it's the "REG_SZ" there. But if we want to
check, there we go. Now we know that. We can come back here, and I'm going to make this value "604."
I will tell it "OK," "OK," and that's great.

Now I'm going to close this out. We're going to come over here. We'll run our "ppcloud /sync." Let
it get synced up with the cloud, and we'll check in on those registry values in just a minute. All
right, here we go. You see we have that "New Registry" right there. Great. Now let's go ahead and
get back into the registry. There we go: "DoubleClickSpeed" is "604."

If we want to change it back, we can of course go back and click on this "New Registry." We can
"Edit Policy." Let's put it back to "500." There we go. "OK." Come back here and run our "ppcloud
/sync" command again. "New Registry" is still there, but when I come over here and refresh, there we
go. We've changed it back to "500."

So that is how you go about delivering registry settings using the Group Policy Preferences editor
inside the cloud portal.

In this section of our video, we are going to learn how to deploy shortcuts using Group Policy
Preferences inside the PolicyPak Cloud portal.

Right now we are over here on my cloud-joined machine here. We don't have a shortcut here or here,
which is what I want to create. I want to create a shortcut that's going to take me to policypak.com
and I also want to deploy a shortcut that will take me to the Calculator that's in the system
already.

Let's go over to our management station here. I am logged in. I'm at "Computer Groups." I am in
"West Sales" right here. That's where my machine is. I'm going to "Create and link a new Policy."
I'm going to choose "Preferences," then I'm got choose "Shortcut." We're going to choose "Shortcut"
right here.

I'm going to go ahead and choose "Replace" because later on down here in the "Common" area I'm going
to choose to remove this when it's no longer applied and it will change it to Replace anyway. So
I'll put it there. I'm going to "Name" this "PolicyPak." This is not going to be a "File system
location." It's actually going to be a "URL." I'm going to send this to the "Desktop." My "Target
URL" is going to be "https://www.policypak.com."

While you can work with the rest of this, I'm going to just leave it alone for now. I'm going to
choose "Common." I want to "Remove this when it's no longer applied." There we go. You can see that
"Action" is "Replace." I'll tell it the "Description." I'll just call it "PP Shortcut" and tell it
"OK."

I'm also going to send a "Shortcut." I want to send the Calculator to the Desktop. So I will put
this at "Replace" again. I'll call it "Calculator." It will be a "File system location" in this
case. I'm going to go to "Desktop." My "Target path" I've actually already got copied, so it's going
to be "C:\windows\system32\calc.exe." Once again, I'm going to leave all this alone. I do want to
"Remove this when it's no longer applied." I'll tell it "OK."

So I actually just created two separate shortcuts in a single XML directive. The "Preference name"
is "New Shortcut." We can call this "PP and Calc Shortcuts." There we go, and "OK." All right, so
we've added that.

Let's come back over to our endpoint here. Let's run a "ppcloud /sync." All right, you see under
"PolicyPak Preferences" not only do we have "PP and Calc Shortcuts" right here where we can see, but
we saw these shortcuts pop up on the Desktop.

Just for good measure, let me go ahead and double click on this and make sure it's going to open up
"https://www.policypak.com" like we think it's going to. Sure enough, here we go. While that's
loading, let's check out this "Calculator." Just like we expected, it links us right to that
Calculator, so we created that shortcut. And here we go, showing right up and policypak.com.

All right and once again just as we've done in some of the other videos, let's go ahead and we will
"Unlink XML Data file from Computer Group." We will come back over here and run that "ppcloud
/sync." Not only do we not have anything in the PolicyPak Preferences area anymore, we also don't
have those shortcuts anymore.

So that's how you're going to deploy a shortcut using the cloud portal.

And there you have it. That is how you're going to go about creating the Group Policy Preferences
items within the PolicyPak Cloud portal and then deploying those as you'd like. I hope this helps
you out.

Thanks so much. Bye-bye.


