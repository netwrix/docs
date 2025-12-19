---
title: "Endpoint Policy Manager Cloud: Automatically Join Groups with JOINTOKEN"
description: "Endpoint Policy Manager Cloud: Automatically Join Groups with JOINTOKEN"
sidebar_position: 40
---
# Endpoint Policy Manager Cloud: Automatically Join Groups with JOINTOKEN

Want to deploy Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud client machines directly
to one or more specific groups? With the JOINTOKEN flag you simply pick one or more groups, get your
token, and... just pass it on the command line. Use Intune or another MDM service if you want to do
deploy the PP Cloud client and get those machines to join the groups you want... instantly!

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZspZfEbu3Ic" title="Endpoint Policy Manager Cloud: Automatically Join Groups with JOINTOKEN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video, I'm going to show you how you can automatically join
your computers to specific computer groups using PolicyPak Cloud and this thing called Join Token.
The idea again is that, whenever you join a computer to PolicyPak Cloud, it's going to just show up
in the default All group and not be magically assigned to your company groups. By the time this
video is over, I'm going to show how you can get them automatically joined to any company group or
groups you want. Let's get started. The ideas that you can see, I've got a couple of company groups
here. They've already got policy settings in them and ready to rock. How do you tell the client
installer to do this work?

You click under Tools here and Tools is going to have a variety of tools in the future but right
now, as of this video, we have this idea just called Join Tokens. More tools will be here on the
right if you're watching this video in the future. What you do then is you go ahead and you click,
Add a new Join Token and you can give it a name. If you want to call this – I'll call this Demo 123.
It doesn't matter. Every Join Token has an expiry date and time. The default is about a week. If you
wanted to, you could set it for a month. If you wanted to go bananas and set it up for five years,
you could do that too. We don't prevent you from doing that but there's no such thing as a forever
living expiration date.

After that, you click on Select Groups and you'll get an example of all the groups that you have in
PolicyPak Cloud land. For instance, if you wanted to do WORK FROM HOME and West Roaming, that's fine
or maybe West Sales Teams, something like that, whatever the point is. You can pick the groups that
you want and click Select and that's it. When you click Save, we then create the special – okay,
here it is, Demo 123. We create a special token for you. If you click Show, you'll see this string.
If you want to copy it to the buffer, you go ahead and click on Copy. Hold on to this idea. We'll
come back to that in a minute.

The second part is this idea back in Company Details. You need to download the PolicyPak Cloud
Client that enables you to do this. Now as of this recording, this whole idea of Join Token is in
beta, so we need to show you the difference between where to get the latest shipping and also the
beta version in case there's a beta feature. What you do, you click on Company Details. You go down
to Downloads and right here would be the currently shipping version but you're going to look at
least at the time of the recording of this video for Download other versions. As of this recording,
the one that will do the Join Token is this version here, Version 20.5 which stands for 20 is the
year 2020, 5 is the month and this is the intermediate version 2434. You'll download the Cloud
Client and then you're off to the races to bring it over to your endpoint.

I've already got it set-up and ready to go here. This is my demo station. It's not joined to the
domain and it's not joined to PolicyPak Cloud. I'm going to do some stuff by hand and then I'm going
to show you how to also automate the heck out of it. The basic way you'll use this is to do
msiexec/i. The name of that msi which I've renamed just to make it a little easier so we know what
we're doing here. You can do an optional log and then here's where the magic happens. You put
JOINTOKEN equals, quote, the string you got. That string will always end in an equal sign and then
another quote.

In fact, let's do it by hand. This is not an admin prompt, so it's going to prompt us for
credentials if we try to do it by hand. In fact, just to show you, if I go ahead and just do it by
hand by trying to just run it with no commands, we'll see we get an admin prompt at this part of the
install. Typically, you'd want to do this Join Token stuff in an automated fashion. For instance,
you want to deploy the PolicyPak Cloud Client using your MDM like in tune or you want to mass
automate it somehow. This is how you would do it. You can't do it with a standard command prompt.
You're going to have to do it with an admin command prompt. Let me just go ahead and reopen that as
an admin command prompt here. Right click and go to Command Prompt and Run as admin.

Your MDM service or whatever automated way you're going to do this will have to install the Cloud
Client as an admin. Let's go ahead and see what it looks like with the UI. If we go ahead and take
this string, which is msiexec. Again go to the right folder here. You're going to do msiexec against
the MSI you downloaded. You can give it an optional log and then you got to do no slash just the
word Join Token equals quote, the string you created and the Join Token UI. It always ends in equals
and then you end it with a quote. I'm just going to go ahead and paste it in here. Again, this is
with the UI interactively so you can see what's happening. Go ahead and click next. I click agree
but because I'm running it as an admin, everything will just happen. No prompts or anything. You can
see that this is all interactive and I want to show you what it looks like here. It does its work
and then, by the time it's over, bing, bing, bing, we tell you, you're always in the All group.

You're in the work from home group and you're in the west roaming group as well automatic and if you
wait 10 seconds, ready to go. Those are two icons that come from those two groups just to prove the
point. What I want to do now is revert back and show you what it looks like completely silently. Let
me go ahead and just roll this back real fast here. We go to my Snapshot and revert back here for a
second. All right. Let me go ahead and reopen another Command Prompt, an admin command prompt and
let's do this entire thing silently which is probably what you'll do. I guess, it's probably what
you want if you're using an MDM or some other way to mass perform the automation here.

Again, this is very similar. It's just msiexec/i, qn for completely silent. No restart. It wouldn't
restart anyway but just in case, give it an optional log file and then give it to Join Token.
Remember Join Token has no slash, then an equal sign, then quote, the string. It ends in equals and
then another final quote. Let's go ahead and see what happens here. Actually, I'm in the wrong
folder, demos 1. Let's go ahead and paste that in. Now there is no log file that's generated by
default. I forced it to do a log file but you'll see I'll get the exact same result silently and if
you wanted to test for the presence of a log file, that's fine. There could be something else that
goes wrong and we'll talk about some trouble shooting in a second but just to prove a point, we'll
go ahead and let this finish here.

What we should see – there we go, boom. We got it installed just the way we wanted to. If we look at
the log file, there we go. We could do notepad, PPCloud, Install log. Let me just zip, zip through
this real fast to just make sure, yeah, everything worked great. Bing, bing, bing, bing, bing and
all the way to the end. Look, installation completed successfully and we're off to the races. That's
that. Let's talk about some things that you should know as you go along the journey here. The first
thing is that, if the Join Token expires, remember, I set mine to expire several years in the
future. If it expires, it just won't succeed. If you don't give it a valid Join Token, you make a
mistake in the copying of it or it's invalid, it just won't join PolicyPak Cloud.

Then the other most important thing is that if you change – let's say this computer did exist and
then you decided to reinstall PolicyPak Cloud on to it. Like I said, I'm using a Snapshot here but
maybe you uninstalled it and decided you want to reinstall it. This time you gave it a completely
different link Join Token. What will happen then if you give it a totally different link Join Token?
We don't care what it was. We only care where it's going. If we go back to Tools and back to the
link Join section, let's pretend for a second that I wanted to create another Add link Join Token
and say, Totally new groups. I selected groups of East Roaming and PPBR test. I create this new link
Join Token here. Totally new groups, I'll go ahead and show and I wanted to go use this one.

When you specify that string at the end, we don't care where it was, we only care where it's going
to go. We're going to delete the record first and then and only then smash it in place to where you
say you want it to go. Just to show you that we actually do have it here, if we were to go back to
Computer Groups and we were to go back to the – first, to the All group and go to Show Computers.
Here's our COMPUTER-NDJ. That's the name of the computer we just joined. If I was to go over to WORK
FROM HOME and go to Show Computers, there it is. Go over to West Roaming here and go to Show
Computers. There we go. The point is, is that, we can now enable you to join the exact group or
groups you want with the link Join Token. Hopefully, that helps you enormously and if you have any
questions, you can email support or you can try us in the forums. Thank you very much and talk to
you soon.


