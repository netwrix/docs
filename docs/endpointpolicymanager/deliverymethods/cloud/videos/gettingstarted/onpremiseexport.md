---
title: "Endpoint Policy Manager Cloud: General Tips about On-Prem to PP Cloud Export"
description: "Endpoint Policy Manager Cloud: General Tips about On-Prem to PP Cloud Export"
sidebar_position: 80
---
# Endpoint Policy Manager Cloud: General Tips about On-Prem to PP Cloud Export

Copy and Paste to get your DC / on-prem directives uploaded. This video shows you how. It's a faster
way to get going with Netwrix Endpoint Policy Manager (formerly PolicyPak) cloud !

<iframe width="560" height="315" src="https://www.youtube.com/embed/21P5d3WOJtU" title="int Policy Manager Cloud: General Tips about On-Prem to PP Cloud Export" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager Cloud: Quick upload method

Hi. This is Jeremy Moskowitz. In the quick start video, you saw us create a GPO, edit it, save it as
a file, and then hand upload it to PolicyPak Cloud. I'm going to show you a little bit faster way to
do that right now.

For instance, if I were to have a GPO here called "GPO TEST123," in this new fresh GPO maybe I want
to create a variety of settings. It doesn't matter what they are for this purpose, but I'm going to
go through three categories of features.

For instance, let's start with a Group Policy Preferences ("Preferences") item. Let's say you wanted
to create a quick shortcut item ("Shortcuts") here. You can right click, "New/Shortcut." We're going
to create a "URL" on the "Desktop," and I'm just going to call this "www.123.com."

What's interesting about the way Group Policy Preferences works and the way that also PolicyPak
works is that the items are actually stored underneath the hood as XML. You can see this if you
right click and go to "All Tasks/Display Xml." But actually, spoiler alert, this is the wrong way to
do it. I'm showing you the wrong way first. You can't look at it inside Internet Explorer. The
technique I'm about to show you won't work that way.

What you'll need to do as we saw in previous videos is you just simply need to drag and drop it to
the Desktop. So you can just drag and drop it here. That's choice number one. Choice number two is
you can use the Preferences wizard here and you can also export. It basically does the exact same
thing. It will export the same thing for you.

Once you have it, you can right click and "Open with" "Notepad." And now here's what I call kind of
speed dialing your way into it. You can take this stuff, "Copy" it, and let's go to PolicyPak Cloud
and let me show you how quickly you can get this in there.

If you go to "XML Data Files" now, you can do what's called "Upload XML Data File." But it's not
just upload. You can literally go right here and you can paste in your item. So you get out of the
business of having to save it and then upload it. You can just copy and paste it. Now you can call
this "GPPref Desktop Shortcut." And now you're done. You've now got that puppy locked and loaded in
PolicyPak Cloud, so that's a really quick way of getting it in there.

Let me go through another one or two just so you're on the same page with us. If you wanted to do an
admin templates setting ("Administrative Templates Manager") if you wanted to "Add" a "New
Collection" first and inside the collection ("Collection 1") you wanted to "Add" a "New Policy"
here, that's totally fine.

You can go ahead and select one or more items, whatever the heck this thing does. It doesn't really
matter for the purposes of this talk. If you wanted to do this other guy here, go ahead and click
"OK." We've got to hit "Enabled" here. Click "Close."

You can take this "Collection 1," here's a little bit of magic, and you can "View as XML in
Notepad." So you can take this stuff, "Copy" it, go back to PolicyPak Cloud. When you "Upload XML
Data File," you can just paste it in and you can give it a new name like "PP Test123." That's kind
of the speed dial way of getting it in there. Now that becomes a new policy. Again, that will work
for just about all the PolicyPak areas.

The other kinds of things you may need to do this for would be for security settings. So if you're
going to go to security land and do something in "Windows Settings/Security Settings," I'll make
some change here. It doesn't really matter what it is for the purposes of our little chat here
together. I'll go ahead and make some change here.

You will need to still export this thing inside the wizard. So you'll have to go to now computer
side, "PolicyPak/Security Settings Manager," and this wizard is going to help you export that to
something you can use. So we'll click on "SHOW WIZARD." There are those settings we just did
together. I'm going to click "Next," "Next, "Next." I'm going to just plunk it right on the
"Desktop" here. I'll call this "SEC-OUT1."

Now that that's saved to the Desktop, we can avoid having to directly upload it. We're just going to
click "Open with" "Notepad," copy this whole thing. Then we're going to go back to PolicyPak Cloud,
"Upload XML Data File," and just paste it right in. Now this is "PPSEC: Awesome settings."

The only other one that's a little bit weird is Application Settings Manager. It's a little bit
different. For "Application Settings Manager" you'll have to know it just lives in a slightly
different place. Let's say you had some Firefox settings here and you wanted to change this to
"www.abc.com." So you've made your settings change. You now have to know to right click and "Export
settings to XML Data File." When you do that, you can call this "PP-FF-EXP1." I can just find that
file, right click, "Open with" "Notepad" and "Copy" this whole puppy into "Upload XML Data File" and
paste. And we see what it is right there: "PPAM : FF 23 and later."

And that's it. So I call this the speed dial method. Just remember, the important part about this is
that you can't be looking at the XML in Internet Explorer or some browser before you paste it in.
You have to be using Notepad, and then you can get there.

The original upload method still works. If you want to click on a file to add ("Choose XML Policy
File to add") and go ahead and find it and upload it, that's fine. But I actually prefer this little
speed dial method. I find that's it's actually a significant bit faster.

Hope this new technique helps you out and you're ready to get started real soon.

Thanks so very much.
