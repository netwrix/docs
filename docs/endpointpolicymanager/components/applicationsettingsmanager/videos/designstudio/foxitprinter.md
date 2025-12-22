---
title: "Design Studio – FoxIT Printer Settings Tutorial"
description: "Design Studio – FoxIT Printer Settings Tutorial"
sidebar_position: 50
---
# Design Studio – FoxIT Printer Settings Tutorial

In this tutorial we show how to capture FoxIT Printer's settings. Check out the video to see how its
done.

<iframe width="560" height="315" src="https://www.youtube.com/embed/KVNCv0SFzX8?si=sdrcLV13u8kZox4d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PP Design Studio – FoxIT Printer Settings Tutorial Video Transcript

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
short video, I'm going to show you how one customer needed to do FoxIT Reader's print dialogue and
how I was able to create a Pak for it in a couple of minutes. This is a recreation of something that
has already been done. This is not a Pak that we will create and enable for everybody, but if you
wanted to recreate it, it's super easy to do.

Here's the general idea. First, you're going to go load – for me, what I did was I loaded any PDF.
It doesn't really matter. This is a car stereo or something. When I go to the "Print" dialogue here,
this the dialogue I want to capture.

The items that we want to capture are one, two, three, four, five. Some of the other ones probably
aren't available to capture and train, but most of the items here you can at least gray out and
lockdown. We're going to configure one, two, three, four, five items, and then we'll demonstrate how
the thing will be locked down.

I'm going to use the "PolicyPak Design Studio" and "Start a new project (using Capture Wizard)"
here. I'm going to pick "FoxIT Reader" print dialogue. I'll call this "FoxIT Reader 6 Print." Now I
happen to know that this thing lives in the "Registry." I can actually show you where. It didn't
take me very long to find it. Let me go ahead and show you where it lives:
"HKEY_CURRENT_USER/Software/FoxIT Software/FoxIT Reader 6.0/printer."

Here are the items that are configurable right there. I'm going to pick "Registry" here, then I want
to go find that same location – "FoxIT Reader 6.0/printer" – and click "Finish." There we go. The
first thing it's doing is asking us to save the file. I'm going to go ahead and save it to the
"Desktop" here. Actually, I'll save it to "C:FOXIT 6." I'll call this "foxit6-print."

Now you can see I've captured the dialogue in the Design Studio. Sorry I've got all these windows
open here. I know it's a little confusing. I'll leave the Registry guy over here. Here's the print
dialogue for FoxIT Reader, and then here's the Design Studio.

Basically at this point now, what we're going to do is in the Design Studio we're going to right
click over each of these one, two, three, four, five guys – which, of course, correspond to one,
two, three, four, five things that you can do here.

What we'll do is just right click and train it by going to "Configuration Wizard." We'll go to
"Next," and we'll leave it where it is: "FoxIT Reader 6.0/printer," "Next." It is unchecked, so
we'll leave it unchecked. I'll go ahead check it and click "OK."

Now, I don't actually have to print it. That's not the important part. We can see in the Registry
that it actually did do something. When we go back and click "Next," what we're looking for is this
first item that corresponds to "Choose Paper Source by PDF page size." Actually, you can see it's
probably "PaperSizeByPage" that changed from "0" to "1." That's probably the right guy because the
other ones there was nothing before the capture. That's probably the right one, so I'll click
"Next." OK, so "0" and "1" and click next, and that was it. We're finished.

So we'll train the next one, "Auto-Rotate/Configuration Wizard/Next/Next," and then we'll go back to
"Print/Auto-Rotate." We'll click "OK." Click there. Of course, we don't actually want to print. Go
back to the Design Studio, "Next," and we discovered it instantly. We didn't even have to ask which
one it was. Oops! I guess we did.

So let's try that again. We'll go "Back" here, "File/Print" and let's uncheck "Auto-Rotate" here.
Then we'll try it one more time. So "Next/Next" "Auto-Rotate." See, I can even see that it's there.
If I were to go to "File/Print" and click on "Auto-Rotate" here and click "OK," we can see that it
changed, and then we just learned it right there. Now we're going to change it back by going to
"File/Print" and change it back, and we learned "0" and "1."

This is using the wizard. If you wanted to, you could get right to it and you could do a manual as
well. You can go to "Advanced" and go to "First Action" and go to "Registry" and "Auto-Center." We
know that the "project root" is this portion of the Registry, so if we just pick "Reg. value," we'll
probably find "AutoCenter." Here it is.

So there's "Place the value as ‘On' value, manually adjust the ‘Off' value later." I'll do both
manually ("Do not place the value.") What we'll do is we'll set "On" to "1" and "Off" to "0." That
is almost certainly what it is.

"Print as image," again, we could do this one manually as well because they're pretty obvious.
They're stated right in the Registry. "PrintAsImage," there we go. I'll set them both manually
again. "On" is "1" and "Off" is "0." There we go.

"Print as Grayscale," we'll go ahead and do that one too. "Gray," there we go. Then we'll go ahead
and do "On" as "1" and "Off" as "0."

There we go. Those are the guys that are configurable here. I see "Reverse pages" here as well. I
bet you we can get that guy too by selecting him. Just for fun, "ReversePages," and we'll go ahead
and say "On" is "1" and "Off" is "0."

There you go. If anything else is here that you want to configure, that's generally the best way to
do it. You might want to clean some things out here by doing things like that. That's basically it.

What I would do then is I would "Save" this out. I would then go to the compiler and compile it. If
you don't know what I'm talking about when it comes to "Compiling," you have to read the Design
Studio manual or the Quick Start Guide, which describes exactly how to do that. Then you'll have
your PolicyPak and go to town on it.

That's basically how I generated this. I hope this is helpful as a tutorial. The only reason that
this failed, by the way, is that I'm not compiling as the local administrator on the machine or else
it would have worked just fine.

That's the scoop right there. That is how I created this Pak. If you have any questions, please post
your "how do I" questions to the forums. Looking forward to helping you out.

Thanks so much.


