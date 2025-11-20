---
title: "Endpoint Policy Manager File Associations Manager: Manage Windows 10 & 11 File Associations"
description: "Endpoint Policy Manager File Associations Manager: Manage Windows 10 & 11 File Associations"
sidebar_position: 10
---
# Endpoint Policy Manager File Associations Manager: Manage Windows 10 & 11 File Associations

Windows 10 File Associations shouldn't be done via XML file. That's a total waste of time, and
doesn't help you out when your needs change. Instead, use Endpoint Policy Manager File Associations
Manager to manage both COMPUTER and USER file associations. You're gonna love it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/nUCLWJ3VVNg" title="Endpoint Policy Manager File Associations Manager: Manage User and Computer File Associations" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, Founder and CTO of Endpoint Policy Manager Software, and in this video
I'm going to show you how you can manage the heck out of your Windows 10 file associations. Boy
howdy, this is a real hard problem to solve. For instance, if you double-click on a PDF file, you
know what happens; probably your browser opens, Edge or maybe it's Chrome depending on how you're
set up. You probably don't like that. You probably want it to be Acrobat Reader. In this case, my
browser's opening, and you probably want it to be something more useful like your Acrobat Reader.

If I double-click this, well, you can have an error or you can have a user, when they double-click
it, go to Open With and maybe pick the thing that they know they need. For instance, you might have
it defaulting to the Windows Inbox Media Player thing like this. That might be okay; it might not be
okay. You might want some specialty application. Or when they double-click on a Mail To item – this
is my least favorite thing that happens. When you click on a Mail To item, what happens? Well, they
get prompted and users just lose their mind. They're like, where's my Outlook? I see Outlook. What
is this? This is the Windows inbox mailer, which is definitely not what you want.

That's problem number one. Problem number two is you might have different situations where you want
some things to happen for the entirety of the computer and other things to happen for an individual
user, and I'm going to show you both of those in this video. To get warmed up, what we'll do is go
to our East Sales desktops here, and let's right-click and create a GPO against them and say PPFAM
Desktop Demo 1. This is File Associations Manager on the computer side first. Then I'm going to do
user side second in this same video.

What we're going to say is everybody on this computer – we'll go to Endpoint Policy Manager, File
Associations Manager. What we'll do is just dictate – right-click, Add. You got a couple of choices
here. My favorite – you can dictate a particular policy. If you just wanted to do PDF, that's fine.
You could just say PDF Rule. Then you can say the file type extension PDF and pick a program. This
is a perfectly fine way of driving in one association. This works awesome. I think there's actually
a better way. Check this out.

What we can do is we can interrogate your application. We can say Add Policies for Product Wizard
here, and we're going to ask Acrobat Reader to tell us everything you got. Stick up your hands and
tell us everything you got. Look, Acrobat Reader has all these settings. Let's go ahead and check
all those. Just like that, we're associating all of those file extensions, .PDF, .FDF, .XPD, and so
on, all those things right into this little bucket just like that. Everybody on this computer's
going to get exactly these settings. That's pretty nifty.

Let's do another one as well. I'll just add a new policy here, and this one I'll do for Mail Tos.
I'll say Mail To Rule 2 Outlook. Actually, I don't have Outlook, so I'm going to use a stand-in,
this thing called Clause Mail. That's a network protocol, and I'm going to do Mail To and select a
program. I've already got that here on this management station, so I'm going to just go ahead and
select that. These things are going to take effect for everybody on this computer.

Let's stop right there and see if that's true. These two items here – so let's go ahead and just run
GP Update and watch what happens in real time. This icon should change in real time to the Adobe
icon, bang, just like that, and then we'll see the Mail To change over when we click it as well. Now
let's go ahead and double-click this Acrobat file. What happens? Instead of it opening in the
browser, look at that. Now it opens up in Acrobat, which is really where we wanted to go. If we go
to Mail To here, we go ahead and click this. Before, it opened up the inside Windows mailer. Now
it's opening up in the mailer of our choice, which is Clause Mail, and it can – in your world, it'll
probably be Outlook, which is awesome.

We still have this problem of the file associations on the – for mp4 files. Maybe we want east sales
users to use, say, VLC Media Player, but we want west sales users to use RealPlayer. Let's go ahead
and do that. We'll close that out and we'll go for east sales users and we'll say PPFAM MP4 to VLC
Media Player. I'm actually going to pre-stage this other GPO for my west sales users. Why not? I'm
right here anyway. I'll go ahead and do this. I'll do PPFAM MP4 to RealPlayer. We'll come back to
that one in just a second.

Let's go ahead and right-click over the one on the File Associations Manager on the user side for –
let's go over to User Side, Endpoint Policy Manager. We'll go over to File Associations Manager, and
we will now right-click, Add a New. Let's go ahead and use that cool interrogation wizard again and
let's say hey, VLC Media Player, what do you have to offer us? Let's go ahead and pick VLC Media
Player because I happen to have it on my management station already. Look at that. It's got all
these extensions, mp4, and MKV, mp3, all that stuff. Let's just say yes, let's take them all. We
want all those things.

Any time we see any of these file associations and I'm an east sales user, bang, we're going to use
VLC Media Player. Put that in a little bucket and we're ready to go. Let's leave that right there.

Then we'll do the same thing for West Sales User 4, but this time we're going to use RealPlayer.
We'll go over to User Side, Endpoint Policy Manager, File Associations Manager again. Right-click
Add and we'll do that interrogation wizard for the product. We'll go ahead and pick RealPlayer this
time. There we go, RealPlayer, and what does it have to offer? Well, it has a lot to offer there,
too. Of course, it has mp4 and so on. Go ahead and click all those. Click Next and we've got
RealPlayer all ready to go if we're a west sales user.

Now let's see this in action. We are an east sales user and right now, we're not really associated
with anything Let's run GP Update and what we should see is that this icon instantly changes to the
VLC Media Player icon, and we'll go ahead and test that out. Bang, there it is, VLC Media Player now
associated with mp4s for the east sales users. That's perfect just like that. Now let's log off and
then let's log on as our West Sales User 1, and we said our West Sales User 1 is going to use
RealPlayer. Let's see if that works. Give this a guy a second to log on. Okay, now that we're logged
on, let's go ahead and see the results As we can see, everybody on the machine gets Acrobat as their
PDF reader just the way we want. Everybody gets the same thing there. Same thing for when we click
on a Mail To item, we're going to get Clause Mail to open up. That's what we want to see there as
well for our west sales user.

We said we want something different for our west sales for mp4 files, and that's going to be
RealPlayer. You can see the little R icon there; that's the RealPlayer. I think this video has no
audio, so it's looking for the audio track. Sure enough, RealPlayer does the thing and we're off to
the races.

In this way, we can use File Associations Manager from Endpoint Policy Manager on both the computer
side and the user side. This is awesome not just for real PCs but also for Citrix, RDS, VDI, and
also multi-session Windows like in Microsoft Windows Virtual Desktop as well. You can say whenever
Johnny logs onto the machine, he gets his settings or underneath the hood, anybody on this machine
gets exactly the same settings.

This is amazing. I hope you love it as much as we love to bring it to you. Thank you very much for
watching, and hope to get you started with a trial real soon. Take care.


