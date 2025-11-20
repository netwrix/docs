---
title: "More security with Combo Rules"
description: "More security with Combo Rules"
sidebar_position: 40
---
# More security with Combo Rules

Netwrix Endpoint Policy Manager (formerly PolicyPak)
[https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html)
enables you to select multiple criteria for the action type. Watch this video to learn how it's
done.

<iframe width="560" height="315" src="https://www.youtube.com/embed/V_Dl8_fr3HQ" title="Endpoint Privilege Manager: More security with Combo Rules" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PPLPM: More security with Combo Rules

Hi. This is Jeremy Moskowitz, and in this video I'm going to show you how you can use what's called
Endpoint Policy Manager Least Privilege Manager Combo Rules to get even more secure.

You've seen me elevate applications by name and by hash, but I want to do it by multiple
characteristics. For instance, if you take a look at "Procmon," we know there's a name associated
with it and there's also a digital signature. If we take a look at "Digital Signatures" here, you
can see "Microsoft" has digitally signed this application. That's good news for us because we can
say only let Procmon run if it has this name and also has this digital signature by that publisher.
That's how we're going to do it.

We can click "Add" "New Executable Policy," and we're going to click "Use combo rule." "Use simple
rule" lets you pick one characteristic, but "Use combo rule" lets you pick multiple characteristics.
"Path" is based on the name, and "Signature" is based on the digital signature. There's a little
wizard, and I want to walk through how the wizard works.

The first thing that we're doing is "Path Condition." You can see "Path Condition" here is the first
thing we're doing. We'll click "Add." I have a copy of this file, so I'll click "Add file." I have a
version already. It's here hanging out under "Apps to manage." It's called "Procmon."

Actually, it's not on my "Desktop." That's not where it lives. I want it to live anywhere. I'm going
to say let Procmon work no matter where it is, so you could do "\*Procmon.exe." I don't care where
it's located. Procmon is okay to run.

But I only really know it's Procmon because it's actually signed by Microsoft. I want to select
"From EXE file." I'll go ahead and pick "Apps to manage," "Procmon." We can see the digital
signature from Microsoft for Process Monitor. These two conditions together when we click "Next,"
we're then going to "Run with elevated privileges." We'll say, "Let procmon run when name is procmon
and signed by MS." That gives us pretty strong security.

If we double click here, we can see that we don't get the wizard view this time. We now get this
alternate view. You can see the "Path Condition" here, and we've got the "Signature Condition"
there. It's as simple as that.

Let's go ahead and go over. Let's prove I'm not pulling a fast one on you here. "Procmon" does not
get elevated by default. If we then run GP Update here and wait for Group Policy to do its thing, at
that point Endpoint Policy Manager will have gotten the rule through Group Policy. Or if you're
using SCCM or Altiris or your own management system or Endpoint Policy Manager Cloud, you can
deliver all of our settings those ways as well. We'll go ahead and close that out.

Now when we run "Procmon," because we said the name has to be this and the digital signature has to
be that, together as a combo rule that gives you the magic you need. That will give you very strong
security in a very wide variety of situations.

I hope this helps you out. Thanks so much.


