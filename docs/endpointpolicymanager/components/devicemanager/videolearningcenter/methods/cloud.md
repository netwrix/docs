---
title: "Block USB sticks using Endpoint Policy Manager Cloud"
description: "Block USB sticks using Endpoint Policy Manager Cloud"
sidebar_position: 10
---
# Block USB sticks using Endpoint Policy Manager Cloud

Got Endpoint Policy Manager Cloud... and naughty users with USB sticks? See how to take your
policies and get them working with Endpoint Policy Manager Cloud !

<iframe width="560" height="315" src="https://www.youtube.com/embed/zvFFLDv7D4w" title="Endpoint Policy Device Manager: Block USB sticks using Endpoint Policy Manager Cloud" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, and in this video, I'm going to show you how you can use Endpoint
Policy Manager Device Manager and Endpoint Policy Manager Cloud together. First things first, you're
going to want to go over to your machine that has the correct USB stick style that you want to
approve, and you're going to go to Device Manager, and here under the disk drives, you're going to
then go to Properties and look for the details of device instance path. That's the magic formula
here. Go ahead and copy that item, and then bring it over to your management station. Now here, we
don't have a way for you to create new policies in Cloud for Device Manager. Not a problem. That
will be coming soon. For now, what you'll do is take that item here, go over to that item here, and
you'll paste in the string you just got from Device Manager. If you look, you'll see that there's
Vendor, which shows JetFlash, and the product ID which is Transend 32GB. If you wanted to sanction
this device type which is always encrypted or has some other kind of thing that you want, to your
people, that's great. You'll just copy the JetFlash after the word Vendor, and after the PROD\_
you'll capture the ID of the device type. This is also the serial number that's embedded in here as
well. You could use that too. What we'll do is we'll go over to our management station here, and you
should do some small-scale tests on-prem to make sure that this works the way you expect. We'll go
to Device Manager, right-click Add a New Global Settings Policy, have to have one of those, which
turns it all on and sets some of the defaults including the default messaging and so on.

Then the next thing we're going to do is add a new policy type. Now the one that I want to show
here, just for example – they all work but the one I just want to show for example is Let Users Use
Specific Devices, and the vendor ID I want to use here is JetFlash. Let's just go ahead and pick
that guy. The product ID, like I said, is this Transcend 32GB guy. Go ahead and pick that, and we'll
pick Product Rev star here. Then I want to add in either a domain member if you're using Endpoint
Policy Manager Cloud with domain-joined, which is unusual. You can add a local member if you know
the exact name, or you can also match by SID. I actually like by SID because I find it to be
incredibly reliable. If I were to go here and do whoami/all for this standard user, there is the
SID. You could do it either that way – and we'll go ahead and do a standard user. That part doesn't
really matter. The SID is what's matching here. We're going to say let this particular user have
read-only access to the device that I say is sanctioned by the IT team.

Now that we've got the policy ready to go here – again, I humbly suggest that you do some small
scale on-prem testing first, but I'm going to go right for broke and do an export. What you do then
is you right-click over the root node here which contains all the policies, and then View as XML in
Notepad. This gives you what you need to do to then copy it here. We'll go over to Endpoint Policy
Manager Cloud over here. I'm going to go to the all group. You'll probably, again, do some
small-scale testing with a company group. I'm going to create and link a new policy here. Nope, I'm
going to upload and link a new policy here. I'm then going to paste this in, and I'll call this
Device Manager, Specific Users for Sanctioned Devices. Now that I've got those two policies jammed
in there, I can go ahead and click on it here, and I can show the policy settings here. You can see
that it does have the items that I put here.

Now if I were to go over to my target machine here and run ppcloud/sync – well, the device in there
is sanctioned right now, so you can see there's the Device Manager, Specific Users for Sanctioned
Devices, so I got the policy as expected. I shouldn't see any change here. That totally makes sense.
What I'm going to do is I'm going to unplug the good USB stick, and I'm going to plug in an unknown
or naughty USB stick. Boom, there we go. We can see this does not meet the criteria, different
vendor, different everything, so I get the description of what's going on here. Let's go ahead and
go over to that drive and see what's what there.

If I were to go to my removable disk here, I can see I've got all sorts of weird stuff here. I don't
know what it is, but I shouldn't be able to copy stuff in. Yup, that doesn't work if I try to do
that, Skip. It's not actually copying the file. It's just trying to copy the file. We're going to
try to take this and copy it over here. Well, I'm not allowed to do that either. We get a USB stick
you find in the parking lot with some weird stuff on it, that's not going to work. Only the devices
that you sanction, the good stuff, is sanctioned, and we said it was good for that user. Let's go
ahead and put in the good USB stick again. The good USB stick is now put in. If we go back to the
IT-encrypted sanctioned USB stick and we try to read a PDF file from here, well that is approved.
We've allowed that, but naughty USB sticks are blocked, and there you go.

If you want to become a better security admin with Endpoint Policy Manager, hope this video helps
you out. Looking forward to getting you started with Endpoint Policy Manager Cloud and Endpoint
Policy Manager Device Manager real soon. Thanks.


