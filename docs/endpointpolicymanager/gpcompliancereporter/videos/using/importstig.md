---
title: "Import STIG files to make your applications more secure"
description: "Import STIG files to make your applications more secure"
sidebar_position: 30
---
# Import STIG files to make your applications more secure

Netwrix Endpoint Policy Manager (formerly PolicyPak) can import collections settings (STIGs) to make
applications like Java, Firefox, Internet Explorer and more … and make them more secure. These are
US Government recommendations. See how Endpoint Policy Manager can deliver these settings to your
machines and lock them down using Group Policy.

<iframe width="560" height="315" src="https://www.youtube.com/embed/A5mq2IpU19g" title="Endpoint Policy Manager: Import STIG files to make your applications more secure" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Manage Different Users In The Same OU (And Reduce Number of GPOs) With Endpoint Policy Manager

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, I'm going to show you how you can use the United States government's Security Technical
Implementation Guides (STIGs) alongside PolicyPak.

Let me get you warmed up to what a STIG is real fast. By the way, if you were to Google for "stig" –
which I'll put here on the screen –we're not talking about the weird helmet guy from "Top Gear." No,
we're talking about this: "Security Technical Implementation Guides," which is a set of government
ideas and requirements that help make applications more secure.

Actually, this isn't my favorite website on this. The one that I like is this thing called
"stigviewer.com," which is a free website that is a resource for all the STIGs. By way of example,
here you can see that there is advice for "Mozilla Firefox" and "Internet Explorer" and "Java" and
so on and so forth.

Now at the time of this recording, we've got only a handful of these STIGs ready to rock for you
with PolicyPak. Let's take a look at "Mozilla Firefox" as an example here because I want to walk
through this end-to-end.

In this example here, you can see the STIG, which is a set of requirements and ideas to make Firefox
more secure, you can see that they've got an "ID," a "Severity," a "Title" of what the problem is
and a "Description."

The first thing is that they want you to use an installed and supported version of Firefox. That's
not something we can help you with, but we can start dealing with some of these other setting
related things.

For instance, "Firefox is configured to use a password store with or without a master password."
This says that if you do this, then things become less secure. When you click in it, you can see
what their remediation suggestion is.

What they do is they're telling you that if you go to "About:Config" in the "browser window" and you
set this setting and lock it down to "false," then you would be in good shape. Well, it turns out
that's exactly what PolicyPak can do.

We've rounded up all these settings for you. Instead of going through all of them, I'm just going to
show you how we use it. The point is that we've rounded up all these settings for you in a format
that you can consume in PolicyPak.

When you download PolicyPak Paks from the website, you'll see a bunch of folders called "STIG for
PolicyPak Application Manager" and then the application name ("Mozilla Firefox"). Here are the ones
that I've got in this VM. Let's continue on the road with Firefox, but this is the same idea for
Java or other things that we produce.

If we take a look inside the download, here is what your download will look like. You'll see that
there are three "XML" files. This is the actual thing we're giving you that is a representation of
the work in the STIG. There are two "XLSX" files here. Then there are some "Images."

The idea is that this particular STIG has three things that we need to make it work. Most of them
don't. I decided for this example to go for the more complex thing because it's harder. Which is to
say that PolicyPak ships three individual Paks for Firefox. We have the overall Firefox stuff. Then
we have the "aboutconfig." We've got "aboutconfig A-I" and "aboutconfig J-Z."

Let me just refresh here. Let's take a look at the Excel file. If we take a look at the Excel file,
what we've tried to do is match up what is inside the STIG with the "Finding ID," what the "Title"
is, demonstrating that we can configure it – sometimes we can't configure it – and then telling you
which XML file we've configured it in.

We also have links to screenshots of the actual "Setting" and the "Result." We've also given those
same exact screenshots right here inside the Pak itself or inside the download itself. If we look at
"Firefox Images," you can see if you want to see how to do this particular item, you can click on it
and you can see that this is how you would do it inside the Pak.

We've done it for you in the STIG. That's the whole idea. Then the result would look like this. You
can see that it's locked down, we're delivering it and it's not changeable.That's the general idea.

You can see if you click on another one, here's where you would do it, here's what the STIG tells
you to do, this is how you would do it in our Pak. Then the result would be here where we're
delivering it and locking it down.What we're trying to do is demonstrate that we can do it, but
we've done it all for you. That's sort of the point.

Let's finish it up. Let's go ahead and go to our Group Policy editor here and say for all of my
"East Sales Laptops" let's go ahead and "Manage Firefox using STIG." What we'll do is we'll right
click, click "Edit" here.

Under the computer side – Firefox works best on the computer side –we'll go to
"PolicyPak/Applications/New/Application" and pick "PolicyPak for Mozilla Firefox 23.0." This is
really 23 and later; it just says "23.0" here.

We'll click on it. Let's not configure it. The whole idea is we don't want to actually configure it.
What we want to do is go to "Options" and we want to "Import XML Settings Data." Here is where we
want to go and find the STIG that we've created for you. If we go to this folder here

where I've downloaded it and we go to "S" for STIG, here we go: "STIG for PolicyPak Application
Manager Mozilla Firefox."

It has to match up, so what we've tried our best to do is match up the Pak name with the STIG name.
This is the guy you want for this particular Pak: "STIG for PPAM-Mozilla Firefox." When you double
click on it, it tells you "Data imported successfully" here.

If we start looking around for configurations, you'll see that items are automatically configured.
See that right there? Underline means do this thing. In this case, we're delivering an uncheck.
Here, we're delivering a check.

If you right click over it, you can see we've pre-locked settings down for you. In other words,
we've basically done exactly what the STIG suggests us to do. That's it. You don't have to do
anything else. Just click "OK," and you're ready to rock.

Let's go ahead and go to "New Application" and take the "PolicyPak for Mozilla Firefox 23.0
aboutconfig – A To I." If we look back in what we've given you here, we can see that there are two
more STIGs: one for the "aboutconfig A-I" and one for the "aboutconfig J-Z."

We click on the "Mozilla Firefox 23.0 aboutconfig – A To I," go to "Import XML Settings Data" and
then pick the "A-I" STIG that we've created for you. It's doing its thing. It takes a minute. Then
once it's done, it will have set all those settings inside that STIG. "Data imported successfully"
here.

I don't know where these guys are, but hopefully we can find some of them. Actually, we can see it
just in the settings report. If we just click "OK" right here, let's just do the last one and then
we'll run through the settings report.

"New Application" "PolicyPak for Mozilla Firefox 23.0 aboutconfig – J To Z" here, double click that
guy. Now we'll go to "Options" "Import XML Settings Data" here and then match it up with
"aboutconfig J-Z." Give it a minute to import ("Data imported successfully"). Alright, we're all
done there. Let's just go ahead and click "OK."

Now that we've done this, we've written a bunch of data to the GPO. Let's go ahead and take a look
at the settings report. If we take a look here in the actual settings report, we'll see all the
settings that we were able to deliver. There they are. You can just click on "about config – A To I"
and take a look at the B tab. You can see that we've declared a bunch of different values here.
That's it. We're ready to go.

Now let's go over to our target machine and see some actual activity. This machine is
"Win7Computer-32." He is in "East Sales Laptops." Let's make sure I linked it. Yes, I linked it over
to "East Sales Laptops."Let's go ahead and run "gpupdate" and see that this takes effect. That's
done. We'll close this out.

Let's take a look at "Mozilla Firefox" here. If we go over to Options, you can see that we're
delivering the settings that are important in the STIG. We've delivered all these items that were
dictated. I don't know what they all are, but that's why we've got it all documented for you, and
you can see that they're there.

If we go to "about:config" and we take a look at what's set there, if we go back to the description
of the STIG itself, this first item that we looked at – "Firefox can be set to store passwords for
sites visited by the user," it says to fix this you need to manipulate "signon.rememberSignons" and
set it and lock it to "false." Let's look up "rememberSignons." There we go. We've delivered that
setting and "locked" it down using the STIG.

I hope this gets you where you need to go. Again, our goal is to produce STIGs for as much as we
can. This gives you, hopefully, a guide on how to use our STIGs.

If you also want to, you can use the PolicyPak Group Policy Compliance Reporter to actually
determine, "Did I really get the settings as delivered by the STIG?" That's what the next video is
about.

Thanks so much for watching, and we'll talk to you soon.

