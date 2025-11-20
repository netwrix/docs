---
title: "Change Firefox application handler (like PDF) to Adobe Reader"
description: "Change Firefox application handler (like PDF) to Adobe Reader"
sidebar_position: 110
---
# Change Firefox application handler (like PDF) to Adobe Reader

Firefox always opens PDF files in it's own internal viewer. Most customers want to change this to an
external PDF reader. See how to do it in this video (and also for any other extension type!)

<iframe width="560" height="315" src="https://www.youtube.com/embed/wumX4WfwvZQ?si=X4pOOJOHkdc8nyec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Change Firefox application handler (like PDF) to Adobe Reader

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can teach Acrobat Reader
to be the default PDF viewer for Firefox.

For instance, let's say your users go to a website that when they click on a PDF what does it do by
default? It's going to open it up inside of Firefox itself, which is probably not what you want.
They could learn how to click on "Open With Different Viewer." Maybe you do, maybe you don't have
Acrobat set here as a PDF viewer which is kind of a huge pain in the neck. In fact, if you click
this, what happens? This is Edge that will show up by default which is probably not what you want
either in Windows 10.

So how do we train Firefox to open up PDFs in "Adobe Reader?" In my case it's 11, but you could be
using DC. It doesn't really matter. Inside our Pak for Firefox, let me go ahead and "Create a GPO in
this domain, and link it here" and call it "FF open PDFs in Acro." I'm linking it over to my "Sales"
dudes. I'm click "Edit" on the GPO here. Then I will go to computer side, "PolicyPak/Application
Settings Manager." Right click, "New Application" and go to "PolicyPak for Mozilla Firefox 23.0."

Our latest Pak has a tab in it called "Applications," and it's easy enough to use. Sorry my screen
is kind of cut off here at the bottom, but you get the general gist. The idea is that for any
extension type – ".pdf," ".zip," ".rar" or whatever you want – you can either have it automatically
"SAVE" or you can have it open up an "APP" or you can have it "ASK."

For instance, in PDF land I want to open up Acrobat Reader. I happen to have the path already opened
up here, so "AcroRD32.exe." I've got this path here. I happen to also have it on this machine to
make it a little easier, but I want it not to be "SAVE." I want it to be "APP:" space, paste. I'm
pasting in the path for my version of Acrobat Reader that has to be on the endpoint machine, the one
over here. It's the same version and everything, so it's going to work out just fine. I'm just going
to click OK here since I don't have an OK button.

Now I've locked and loaded the directive in here. Let's go ahead and check it out. The first thing
you need to do is run GP Update ("gpupdate"). And then you may need to launch Firefox twice because
you have to get it jumpstarted. If you try this in the test lab and it doesn't work the very first
time, you may just launch Firefox two times and we'll see if it actually kicks into high gear.

Let's go ahead and in fact do that all the way end to end. We'll go ahead and launch "Mozilla
Firefox" the first time. Let's see what happens. We'll go to "w-9" and we'll see what happens here.
We'll click on into it. This is expected. This is the first time out. Let's go ahead and close this
out.

Now this is the second time, so it should click in here the second time. If we were to go to "w-9"
again and this time click on the PDF, watch what happens now. We wait a second or two, and bingo.
"Adobe Reader" kicks into high gear and you get exactly what your users expect here.

Now P.S., by the way, if you don't like this idea of having Adobe ask about how to be the default
PDF application, that's a whole different story. That is actually part of our "PolicyPak/File
Associations Manager" piece. We have lots of other videos that explain how to do that. I'm not going
to go into that here. That's not the point of this discussion, but we have videos on that and you
should definitely check it out.

However, there is one more thing. You might want to change the behavior such that when you click on
it, instead of opening up PDF Acrobat Reader that instead it just automatically saves it over here.
I'm going to show you how to do that. That's just a different command.

I'll go ahead and close out Firefox land. I'll go over here and I'm going to change what we just
said. Instead of "Applications" launch Acrobat Reader, what we're going to do is just change this to
"SAVE." We're changing it to "SAVE" which is the other kind of method. We've got "SAVE," "APP" and
"ASK."

The other thing I just want to mention real fast is "REPLACE" versus MERGE. REPLACE says I don't
care what the user already has. Take away what they want and put on what I want. If you have MERGE,
it will merge what the user has in addition to what you have. And if there's a conflict between what
the user has and what you have, you're going to win.

I'm just going to go ahead and click on save there. The point is that the next behavior I should see
will be that next time I click on a PDF, it will not launch Adobe Reader this time and will go
automatically right into the save bucket in Firefox land. Let's see if that's actually true. Close
this out.

Okay, go into Firefox land here ("Mozilla Firefox"). We'll go to "w-9." Watch the upper righthand
corner here. Let's see what happens. Instant save because that's what we told it we wanted to do.
You could do this for any extension type. I just happen to be using PDF as the one I wanted to
mention here.

At this point now, they can click on it and it will do what your default is. Remember, we're not
saying open it up in Acrobat Reader. This is the operating system. So if you want to change that, if
you want to change the operating system's default, that's "File Associations Manager." What I'm
showing you right now is how to do it inside Firefox itself.

That's it. That takes us to the end of the video. This is a huge leap forward. We got a lot of
requests for this, and we did it because you asked for it.

I hope this helps you out. Looking forward to getting you started with PolicyPak soon.


