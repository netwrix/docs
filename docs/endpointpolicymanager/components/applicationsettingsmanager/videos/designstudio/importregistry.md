---
title: "Use the DesignStudio to import existing registry keys"
description: "Use the DesignStudio to import existing registry keys"
sidebar_position: 20
---
# Use the DesignStudio to import existing registry keys

If you've already got collections of registry keys you want to deliver, Endpoint Policy Manager can
ensure that they are always delivered and consistently reinforced. In this tip, use the PP
DesignStudio to import your registry keys for both ON and OFF values.

<iframe width="560" height="315" src="https://www.youtube.com/embed/x36X-KR8vlw?si=ab8hoTKDNEOFlwsd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Use the DesignStudio to import existing registry keys

Hi, everybody. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software.
In this video, I'm going to show you a feature of PolicyPak 3.5 – the Design Studio – that enables
you to suck in your own .REG files into checkboxes. Let me show you what I'm talking about.

Let's say you had a particular gaggle of registry punches that already knew you wanted to deploy.
For instance, here you can see under "Sound" I've got "Beep" "yes," "ExtendedSounds" "yes" and I'll
just create another one. I'll create a crazy one, a "Binary Value" here, and I'll call this
"BINARY123." I'll give the "data" "12 34 56 78," "OK." Now I've got this collection here that I
want.

Let me go ahead and right click over that and "Export" all the stuff in "Sound." I'll put it right
on the "Desktop," and I'll call it "exp1" for Export1.Let's go to the "Design Studio" here. Here I
am. I've got my own project here. This could be a project you already have, or you can create a new
one. What I'm about to show you only works for checkboxes.

I'm going to add a "Check Box," or if you had an existing checkbox. Let's give this checkbox a name.
Let's call it "Sound Stuff."Let's click on "Advanced" where we can actually see the results of what
we're going to do. We'll click on "Import .REG rile," and we'll "Browse…" for that file. Here it is,
"exp1" for Export1.

When it's "Checked" on, we want to deliver some set of settings, what we just got right here. We'll
go ahead and click "OK," and look what just happened. We've got three "Actions." That checkbox will
go "Beep" "yes," "ExtendedSounds" "yes" and "BINARY123" and set those binary values. Awesome.

Let's go back to our "Registry Editor," and let's commit to what the inverse would be. We'll do
"Beep" "no," "ExtendedSounds" "no" and "BINARY123" we'll set those middle ones to "00." Now let's go
ahead and export this little collection. We'll go and click "Export" here, call it "exp2."

If you look here,what has occurred here is that the "Off" values by default when you do that import
will set the "Off" values to `<delete>`. Now we know what our `<delete>` are going to be. They're
just going to be off, off and then we just change that binary guy.

Let's "Import .REG rile." We'll go to "Unchecked" this time. We'll click "Browse," and we'll pick
"exp2" and click "OK." We're setting the "Unchecked" values to the thing we just exported. What
occurs here is that we now have the "On" value for "Beep" is "yes" and the "Off" is "no." The "On"
for "ExtendedSounds" is "yes" and the "Off" is "no." The "On" for this "Reg. value" "BINARY123" is
"12,34,56,78" and "Off" is "12,34,00,78."

That's it. At that point, you've now got your project. You can save it, compile it and deliver it to
your target machines. That is a new feature in the Design Studio called Registry Import. If you have
any questions, we're here for you.

Thanks so very much.


