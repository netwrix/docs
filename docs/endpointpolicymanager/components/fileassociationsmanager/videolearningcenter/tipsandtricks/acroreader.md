---
title: "Endpoint Policy Manager File Associations Trick: Acro Reader AND Writer"
description: "Endpoint Policy Manager File Associations Trick: Acro Reader AND Writer"
sidebar_position: 70
---
# Endpoint Policy Manager File Associations Trick: Acro Reader AND Writer

How do you make PP File Associations "think" about what to do, and have one group of associations
with Acrobat READER and another with Acrobat WRITER. Here's how.

<iframe width="560" height="315" src="https://www.youtube.com/embed/l-WS3otjkP0" title="Endpoint Policy Manager File Associations Trick: Acro Reader AND Writer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak File Associations Trick – Acro Reader AND Writer

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of Endpoint Policy Manager
Software. In this video, I'm going to show you how you can use Endpoint Policy Manager File
Associations Manager to have a bunch of brains and figure out I want to associate PDFs with Acrobat
Reader when I see only that and I want to associate PDFs with Acrobat Writer when I see that.

What I've just done just to prove a point is I've installed Acrobat Writer all the way to the end.
You can see even then it doesn't actually make it the viewer. It asks you "How do you want to open
this file?" I actually am not going to select anything in particular to "Always use this app to open
.pdf files." I just want to show you what the default is, which is still "Microsoft Edge."

You'll probably end up getting this exact same experience when you deploy Acrobat Reader and Writer
using your SCCM or PDQ Deploy or whatever. It just doesn't change underneath the hood because that's
changed in Windows land.

Let me continue to explain my set up here. This machine has Reader and Writer. I happen to have an
old version of Reader, but the kind of stuff we're going to do here is exactly the same. In fact, I
love this: "Make Adobe Reader my default PDF application." Go ahead, sure. Say "OK." What happens?
It doesn't actually do it. It forces you to do it through the system. That's what we're going to do,
but we're going to do it programmatically.

Again, my lash up here is that this machine has Reader and Writer. They're two totally different
versions, and it doesn't matter. That part is not important. On my own machine, my own management
station here, I have "Adobe Reader," but I'm too poor to install a second copy for Writer. I'm not
going to do that. I'm making this demo hard on myself, which is going to make it a little longer but
it will be worth it.

Let me go over to my third machine here. Actually, nobody is logged on here yet. Let me go ahead and
do that: "eastsalesuser1." This guy is also going to have just Reader. There we go. Now I'm logged
on, and you can see "Adobe Reader" here. In fact, let me drag a PDF file in there. Okay, just to
prove a point, here we go. There's "Microsoft Edge" running here and, of course, we want it to open
up in Acrobat Reader.

So to set the stage one last time, I've got my management station. My management station has "Adobe
Reader" but not Writer. I have machine number one. He has "Adobe Reader," and machine number two has
Reader and Writer. Okay, that's the stage.

The first thing is, let's make it so that PDF associates with Acrobat Reader. In order to do that,
we're going to do this where our computers live. I actually have to move one of my computers into
the right place. Let me go ahead and move my "COMPUTER10," this new guy, into "Sales/East Sales/East
Sales Desktops." This dude has to go here.

Now my computers are in the same place. These two computers are hanging out. They're in the same
place. That's what we wanted. Just to make this guy know that has happened, I'm going to run
"gpupdate /force" or else he won't know that he has made that change. We'll let that cook for a
second.

Now over here, we're going to do this for our "East Sales Desktops." We're going to right click,
"Create a GPO in this domain, and link it here" and say "PPFAM for Acro Reader and Writer." We'll
right click, click "Edit" on this guy. This has to be done on the computer side. We'll dive down
under computer side, "Endpoint Policy Manager /File Associations Manager for Windows 10," right
click, "Add" a "New Collection."

Actually, you know what? Hold on. Let me not do that. Let me show you we can actually do this thing
first called "Add Policies for Product (wizard)." I'm going to pick "Simple Mode" and pick the
"Adobe Reader" on this machine. When I do, look at all that stuff that lights up because Acrobat
Reader is more than just PDFs. I'm going to "Check All." I'm going to select "Next." I'm going to
make my own collection in real time called "Adobe Reader Policies" and click "Next" and slam it all
in.

Now if I did nothing at all, these two machines would automatically now associate PDF and all this
other stuff with Acrobat Reader. But how do I separate it? Because I'm about to do Reader and
Writer. Well, it's easy enough.

Right click. We're going to "Change Item Level Targeting" on the folder. We're going to say only do
this stuff when I see Acrobat Reader. Now there are a couple ways you can do this. One way is by
"MSI Query." You can say if I'm looking for Acrobat Reader. That's one way to do it.

But I actually think a better way to do this is by "New Item/File Match." On this machine and
hopefully on your machine also, it has to be in this place: "Program Files/Adobe/Reader." It has to
match up. We're looking for "Reader/AcroRd32." So if "AcroRd32" exists in this place, that matches
the version of Acrobat Reader. When I click "OK," it lights up orange. These things are only going
to take effect when I see Acrobat Reader. If I don't have Acrobat Reader at all, it's just not going
to take effect.

Let's stop right there and just see that this part works. In fact, I can do it on both machines.
I'll run GP Update ("gpupdate") on the first machine and I'll run GP Update ("gpupdate") on the
second machine. We're going to see because I haven't set up anything yet for Acrobat Writer, this is
going to associate everything directly to Acrobat Reader.

Let's just start here and make sure this works. File Associations Manager only works after a GP
Update and then a log off and a log on. So you won't see it happen in real time. You have to run GP
Update, then log off, then log back on. So I'll go ahead and do that here. I'll go ahead and "Sign
out" of each of these machines, and my expectation is that I'll get the same exact results. Let me
go ahead and "Sign out" here, "eastsalesuser1." The same guy is going to be logging on to this other
machine here.

Now if I go back to machine one, it worked perfectly. The machine that has Acrobat Reader launches
the PDF with Acrobat Reader just the way we would expect and life is good. There we go. There's our
PDF. If we go over to the machine that has Reader and Writer, hey, look at that. That's exactly what
I said it was going to do. It's using Acrobat Reader.

Now the next part of this demo is, how do we get it for machines that have Reader and Writer or just
Writer to take the PDF instead of that? Remember, I made this demo on purpose hard for myself. I
said my very own machine doesn't have Acrobat Writer. That makes this demo a little harder.

I have to go over to the machine that actually has Acrobat Writer on it. On the downloaded bits from
Endpoint Policy Manager land here, when I click in the download here, we have a little program in
the "Endpoint Policy Manager Extras" folder called the "Endpoint Policy Manager File Associations
Manager Helper."

Remember, I don't have Acrobat Writer, so I have to go over a machine that does have it. That's what
this program helps you do. We're going to suck out it's brains by selecting "Export associations
(per product)." What product am I going to do this time? Not Reader but Writer this time.

I'm going to find my application which is Acrobat Writer ("Adobe Acrobat DC" or whichever version
you're using.) We're doing the exact same steps as we were doing earlier. We're going to "Check All"
the associations. There's PDF and there's all this other great stuff. Once I click "Next," I have to
"Export to XML" because I don't have the ability to edit GPOs as a standard user. So I'm going to
"Export to XML."

I'm going to chuck it on the server: "\dc2016sharePPFAM-acro-export." Now it's over there waiting
for me on the server. I'll go back over here. Let's go ahead and find it. It's now in "C:share."
Here it is: "PPFAM-acro-export." Let me try this. Can I just drag and drop this here? Why, yes, I
can.

Now I've got one folder with the Reader policies ("Adobe Reader Policies") and one folder with the
Writer policies ("Adobe Acrobat DC Policies"). What do I need to do? I need to say "Change Item
Level Targeting" to make that stuff kick in. What stuff if that? All these associations. Make those
associations kick off, when I can see Acrobat Writer.

How do I know what Acrobat Writer is? Let's go ahead and right click, go to "Properties" here. We're
going to take this "Target" location and match that as the string. I'll "Copy" that guy over here.
I'll go back over here to the folder, the collection. I want to "Change Item Level Targeting" on the
folder and only do this thing when I have a "File Match," so we're saying when I see the full Writer
version of Acrobat.

Now that I've got all that ready to go, let's look at it. We have this batting order that says when
I see Acrobat Reader do this first, and then when I see Writer do that second. The batting order
here matters. You're going to do the stuff in "1" first. Because that computer has Reader and Writer
on it, it's going to do the Reader thing first but it's going to get overwritten by the Writer thing
second. That's all there is to it.

Let's go back over to this machine that currently has Reader associated with the PDF. Let's run GP
Update ("gpupdate") here. Remember, we won't see this in real time. We have to log off and log back
on. At that point when we double click it, it shouldn't be Reader anymore. It should be Writer.
Let's go ahead and see if that is all true. We'll go ahead and "Sign out." We'll sign back in.

Just like that, it worked perfectly. We double click here and what fires out? Acrobat Writer. It's
making me sign in, but I don't want to. But that's the gist. It's actually using Acrobat Writer to
do the work and not Acrobat Reader.

Back on this machine here just to prove that I'm not pulling a fast one on you here and it still
works on this machine, I can show you that if I were to run GP Update ("gpupdate"), log off and log
back on, it's not going to change. It's now stuck correctly with Acrobat Reader. I'll go ahead and
just prove that real fast. Let's go ahead and "Sign out." When we log back on, absolutely nothing
interesting should happen. That's the whole point. It should just keep on working. There we go.

Just to lay it out one more time, using Endpoint Policy Manager
for [Endpoint Policy Manager File Associations Manager: Manage Windows 10 & 11 File Associations](/docs/endpointpolicymanager/components/fileassociationsmanager/videolearningcenter/gettingstarted/windows10.md) with
collections, the collections have the brains. The brains are you're going to use "Change Item Level
Targeting" and say do the stuff in the collection when I see the application I want to manage. For
instance, this one is Acrobat Reader. This one is Acrobat Writer. Once you have that, you've
utilized either a machine that has the associations already built into it or you've used our little
helper utility to suck its brains out and push it in here.

With that in mind, that's all there is really to it. Hope this helps you get on the road with
Endpoint Policy Manager File Associations Manager. Looking forward to getting you started real
soon.  
Thanks so much. Take care.


