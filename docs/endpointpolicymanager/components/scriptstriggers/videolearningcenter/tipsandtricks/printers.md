---
title: "Shared Printers without Loopback: Use Endpoint Policy Manager Scripts and PowerShell to deploy and remove printers"
description: "Shared Printers without Loopback: Use Endpoint Policy Manager Scripts and PowerShell to deploy and remove printers"
sidebar_position: 50
---
# Shared Printers without Loopback: Use Endpoint Policy Manager Scripts and PowerShell to deploy and remove printers

Hate using loopback for printers? Then DONT. Use Netwrix Endpoint Policy Manager (formerly
PolicyPak) Scripts manager to do "loopback without loopback." In this demonstration we'll show you
how to ADD a shared printer to every user who logs onto a machine... just like loopback. With
Endpoint Policy Manager, its easy. Here you go !

<iframe width="560" height="315" src="https://www.youtube.com/embed/2B-cc1W2WTU" title="Shared Printers without Loopback: Use Endpoint Policy Manager Scripts and PowerShell to deploy and remove printers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, and in this video, I'm going to show you how you can deploy shared
printers without loopback using Endpoint Policy Manager Scripts Manager. You're going to have to do
a little walking before you run here, and you're going to open up a command prompt with PowerShell
as a standard user, doesn't have to be an admin or anything, and you're going to just run your test
commands first to make sure they work.

The first one you're going to do is add-printer -ConnectionName against the server and the printer,
so mine is \\dc2016\printer1. When I do this, you can see there it is. Printer1 comes along. Now if
this – this might take a minute the first time because it takes a little while for those drivers to
come down, so because I did this demo for practice before the video, those drivers were already
here, so mine is going to look a little bit faster than what you're going to see in your real life.
Just count to 60, and they'll get there. Don't worry.

The next thing you want to try to do is to do the remove printer. It's typically the same exact
thing, it's just remove-printer -name quote and then the name of the printer so \\dc2016\printer1.
If you're not sure, okay, there's another way to verify that. If you do a get-printer, it'll show
you all the names here, so let me go ahead and just readd that printer one more time just to show
you what the names look like once you're added. You're going for this string for the remove line.
That's how you test it out. You do an add, you do a remove, and you make sure you've got it ready to
rock. Once you've got it ready to rock, then what you're going to do is get started in Endpoint
Policy Manager Scripts Manager.

Let me pause the video and go over to my management station. Okay, here I am now in my management
station, and again, the idea is to do shared printers without loopback, so that means to every
computer – every user who logs onto a particular set of desktops. What I'll do here, for my East
Sales users I'll do PP Scripts No LOOPBACK Shared Printer. Now what we'll do is we'll right click
and click Edit here, and then we'll dive down under the computer side – that's where loopback
happens on the computer side, even though we're going to do no loopback. We'll then go to Scripts
Manager here, right click Add a New Policy here. I've got my PowerShell that we had from the first
part right here just in NotePad hanging out ready to go.

What we'll select here is "Apply this policy to all users who log on to the computer (switched
mode)". Switched mode is our loopback without loopback thing. All users who log on to the computer.
The apply action would be to get the printer, and that's a PowerShell script, and then we'll go
ahead and take the printer command that we learned in the first step and bang. Just put it right
there. The script can be run as user. It doesn't need to be elevated. It doesn't need to be run
interactively. You just throw that in there.

Then the next thing you're going to do is called the revert action. We know what that is. That's the
remove printer script that we learned earlier, so go ahead and take that. That is the PowerShell
script here. We'll bang that in there, and that's remove printer. Again, run as a user. Doesn't have
to be elevated. Doesn't have to run interactively. That's all you got to do. You can set this to
apply Always, which is probably the right idea, so every time group policy processes, you're
evaluating and seeing if you need this thing, and if you do, boom, put it on. If the user nukes the
printer, it'll put it back, so I suggest Always for this kind of a script.

Then what we'll do is we'll call this Get DC printer1 script and then this is your choice about
item-level targeting about when you get the thing when you don't get the thing. You might want to
get this thing when you are on a portable computer but not on a portable computer. You might want to
get it when you're in a Security Group or not in a Security Group. You might want to get it when
you're on an IP range and not get it when you're not on an IP range. That's why you have the apply
script and the not apply script.

We can still do this by simulating what happens if somebody – what we can do is add in a Security
Group here. User is a member of East Sales users, so we're saying this will apply when the guy's
East Sales user, and it'll revert back or unapply it when the guy's not a member of East Sales users
anymore. How are we going to simulate that? Let's go ahead and find out. Let's go ahead and do that.
We're going to get the printer when we're a member of East Sales, and we're going to remove the
printer when he's not a member of East Sales. Why don't I go ahead and show you this what happens.
Let's go ahead and sign out and sign back on because this'll be the experience of what all the users
would be.

If I were to log on as eastsalesuser1 – okay, let's go ahead and check this. Now we've got to hustle
over to the printer, Printers & scanners, and let's see what happens. Boom, it's already there.
Alright, now what I want to do is I want to log off. That worked out great. Now what I want to do is
log off, sign out here, and I want to sign on as eastsalesuser2 who's also a member of the East
Sales group. Let's go ahead and do that, eastsalesuser2. Remember, this is loopback without
loopback. We're just dictating these settings. We don't care who logs on the machine. We are
limiting it here with item-level targeting to say you must be part of the East Sales users group in
order to get it, so let's see what happens for Mr. eastsalesuser2. Alright, let's hustle over to
printers here, Printers & Scanners. It's probably going to beat us and get there before we do. Yep.
There we go. There's printer1 on dc2016.

Now what I want to do is I want to be a little naughty, and I want to take the guy out. I want to
take eastsalesuser1 out of the East Sales users OU – group, rather. Let me go to users. That's not
where it is. Let's go over here to East Sales, East Sales users. I've got a group here, and I'm
going to remove Mr. eastsalesuser1 here, and when I do this, this is going to make this GPO fall out
of scope. In other words, it's not going to apply to Mr. eastsalesuser1 anymore, remember. We said
that this policy will only take effect when the person is part of the East Sales user Security
Group, and as such, now what we should see is that it's going to run the remove script. It's going
to run the off script, and therefore remove it.

This is great. This can enable you to do all sorts of great things like one of a member of a group
or on this IP range or any number of things. If I were to go back over to printers here, what should
we see? Let's go ahead and give this another try. Let's go ahead and log out here and log on one
more time. Endpoint Policy Manager will do a caching of the item-level targeting evaluation, and so
because I'm going so fast, it might actually remember this group membership even though it's not
actually true. We'll give it a minute, and then we'll try again.

Here we go. Alright, let's hustle back over to printers here. There we go. We just had to – like I
said, we had to wait a minute because Endpoint Policy Manager will cache the item-level targeting
filters, but you can see the guy's not in the group anymore, and we ran the off script and you're
off to the races. A little troubleshooting stuff here. Because we're doing switched mode, let me
just show you where this would live for the logs if you want to take a look at logging. If you go to
the users profile under AppData\Local – AppData\Local\PolicyPak, that's where it is,
AppData\Local\PolicyPak. Under Scripts Manager what you're looking for is ppswitched at logon or
policy changed.

Generally, the latest file data's the one you're after. Take a look at ppswitched log here. What
you're going to see is you'll see it apply and unapply, so you can see getting the thing, boom,
script is run successfully, and then if we want to go to the bottom here looking for the unapply
one, last thing, here we go. "Item-level targeting evaluated to FALSE", and therefore, because of
that, we're going to run the off one. Hopefully this gives you a little bit to go on here, and
hopefully this video helps you out. You could do shared printers without loopback on the computer
side. Hope this video helps you out. Thanks very much. Talk to you soon.


