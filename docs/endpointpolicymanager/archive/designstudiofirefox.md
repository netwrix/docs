---
title: "Endpoint Policy Manager: Use the DesignStudio to manage FireFox's about:config settings"
description: "Endpoint Policy Manager: Use the DesignStudio to manage FireFox's about:config settings"
sidebar_position: 50
---

# Endpoint Policy Manager: Use the DesignStudio to manage FireFox's about:config settings

Firefox is easy to manage using Netwrix Endpoint Policy Manager (formerly PolicyPak). Here is the
how-to using the Endpoint Policy Manager **DesignStudio** to implement about:config settings within
your Paks.

<iframe width="560" height="315" src="https://www.youtube.com/embed/k8GhOSdHWGU?si=YE3802CFHwL0xnoB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Use the DesignStudio to manage FireFox's about:config settings video transcript

Hello, everybody. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak
Software. In this video, I'm going to show you how to manage and create "about:config" settings in
your PolicyPak "Firefox" Pak.

First things first, let's go ahead and just make an assumption that we here at PolicyPak are
probably not going to institute all of the zillions and zillions of settings that are here in the
about:config. That being said, we give you the ability to add the ones that are important to you for
your environment.

By way of example, if we go over to the Pak that we've created for you, we actually supply one, two,
three of them for you inside the preconfigured Pak. I was messing around, and I have this other
example here just for show. What I'm going to do here in this video is show you how to add your own,
if you need to, to this "About:Config" dialogue.

Now, first things first, I would humbly suggest that you create a copy of the Firefox Pak for
yourself, change the "Properties" and "Project name" to something like Firefox about:config. So that
way if we here at PolicyPak update the preconfigured Firefox Pak, it doesn't overwrite what you're
about to do. I hope that makes sense. I'm not going to do that, but you should.

Long story short, first things first, let's go ahead and take a look over at some of the
"about:config" settings here. Again there are a bazillion of them here, and I'm not going to go over
all of them. I'm just going to do one quick example here.

So somebody asks me, how do you configure "browser.shell.checkDefaultBrowser"? OK, well, first thing
is that you can see here what you want to do is if you want to set this you need to note the type.
See how the type here is "boolean." That's important because different of these configuration
options have "string," or "integer" or "boolean." That's really important because that's how you're
going to configure this in the Design Studio.

What we're going to do is go over to the "Design Studio" first. We'll then go ahead and just make it
nice and pretty. What I like to do is take a "Label" here, and we'll just drag a "Label" down. I'll
name this thing "browser.shell.checkDefaultBrowser," and this is just the display name. This has
nothing to do with the actual configuration.

Next thing we want to do is this is a true/false, so what I would suggest that you do here is you
put a little "Check Box" in. I'm going to put a little "Check Box" here, and we can call this
checkbox "Checked is TRUE," which of course means that unchecked would be false. OK.

Then on this value here, I'm going to go to "Advanced" parameters and under "First Action" I'm going
to pick the "Mozilla-specific config file." We're in Mozilla, and all this is already situated so
we're OK here. You just leave `<project root>`. You put in the "Property" name. We'll go ahead and
we'll call this – again this is the official thing we're doing here – which is
"browser.shell.checkDefaultBrowser." The "Default state" is "Unchecked," and the "Revert state" is
"Unchecked."

Next we need to go to "Data type," and it's not an "Integer," right? It is a "Boolean," and
therefore "On" when it's checked is "True" and "Off" will be "False." OK, so that's how this all
lines up. You need to know the "Date type," which is the first thing we did. We figured out is it a
"String," is it an "Integer" or a "Boolean." Then you put the information here as you need to – so
"Boolean," "True" or "False."

OK, so that's it. Let's go to compile this guy. We'll go ahead and click "OK." We're done here. This
is the preview of this here. You can see that there's a little preview of this guy here, but that's
not the real deal. The real deal is going to be inside the Group Policy Object.

Let me "Delete" this guy. This is from a previous thing I was working on. We'll go ahead and we'll
"Create a GPO in this domain, and Link it here…" to our "Desktops" because you get the lockout in
Firefox if you link it over to "Desktops." We'll call this "Firefox Demo 4."

We'll dive down under computer side "PolicyPak/Applications/New/Application," and we'll go ahead and
pick "PolicyPak for Mozilla Firefox." Under "About:Config" here, there we go. Here is our
"Browser.shell.checkDefaultBrowser," and "Checked is TRUE," which means unchecked is false. I'll
right click over this guy also and "Lockdown this setting using the system-wide config file." This
is going to make it locked. Let's go ahead and set it true first.

Let's go over to the target machine. Right now just to prove a point as we sit here,
"browser.shell.check," OK, it is set to "true" but it's not locked, right? Any user could do
anything they want to. Let's set it to true and lock it down.

Let's go ahead and do that. We'll run "gpupdate" here. Alright, we'll go ahead and run "Mozilla
Firefox" here, and we'll go to "about:config." Again, now we're looking for "browser.shell." Here we
go, "browser.shell.checkDefaultBrowser" is "locked" and it's set to "true." OK, can't change it.

Let's go back to the Group Policy Object here. Let's just go back to "About:Config." We'll uncheck
this puppy. So "Checked is TRUE," unchecked is false. OK, and it's still locked down using the
config file. Now we've now set it to false.

We'll just make sure that this works the way we expect. OK, now that that's done, we'll rerun
"Mozilla Firefox" here. Go to "about:config," and again it's called "browser.shell.check." And there
we go, set to "false." And that's it.

You've seen me do it for Boolean. It's really similar for string and for numerics. What I would
suggest that you do for string type, you can just copy the example I've already got here. String
type, I use this guy here, which is a "Text Box," and for numeric you're going to use a "Numeric
Edit." And that's it, and that way you're able to do all three types.

Remember, the hard part is once you drag the item, like say a "Numeric Edit," for editing, don't
forget. Once it's here, you just need to pick the "Advanced" elements, then you're going to go to
"Mozilla-specific config file." You're going to pick the "Data type" if that's "Integer." Right?
That's "Integer."

Then you'll type the "Property" name whatever that is, you know, whatever the Firefox calls it. Then
you'll have a "Min. value" and a "Max. value" and you can just set it right here and you're good to
go. OK, so this is the important part, setting the "Data type" and setting the "Property," and
you're good to go.

I hope this has been helpful. If you have any questions, please post them to the forums and we'll
talk to you soon.

Thanks so much.


