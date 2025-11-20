---
title: "Endpoint Policy Manager GP Compliance Reporter: Using an Existing GPO as a test"
description: "Endpoint Policy Manager GP Compliance Reporter: Using an Existing GPO as a test"
sidebar_position: 10
---
# Endpoint Policy Manager GP Compliance Reporter: Using an Existing GPO as a test

The Netwrix Endpoint Policy Manager (formerly PolicyPak) Group Policy Compliance Reporter can help
you know if your existing settings (from a GPO) have -made it- to a target machine. Watch this video
to learn how to utilize an existing GPO as a PPGPCR Test.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZRhqeiBzt3Q" title="Endpoint Policy Manager GP Compliance Reporter: Using an Existing GPO as a test" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager GP Compliance Reporter: Using an Existing GPO as a test

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, we're going to learn how to use the Group Policy Compliance Reporter to take an existing
Group Policy Object's settings and verify that those settings exist on target machines.

In a previous video, you might have seen me set settings by either hand configuring them or
importing them from, well, we've got a bunch of settings that correspond to existing STIGs. A STIG
is a setting collection from the U.S. government that helps you make your applications more secure.

In this case, I've already preconfigured Firefox with a bunch of settings. The point is, how do we
discover if these settings that are now inside the Group Policy Object actually made it over to our
target computers?

It's pretty hard to do if you only have a Group Policy Results Reporter here. You would have to run
the "Group Policy Results Wizard," go to each machine individually to discover if those settings are
there or not and paw through the contents to see if that's actually true or not. With the Group
Policy Compliance Reporter that PolicyPak ships, it's kind of a no-brainer.

Let's start. The first thing you're going to want to do is to back up the Group Policy Object for
later use inside the Compliance Reporter as a test. We're looking for this particular GPO: "Manage
Firefox using STIG." It just happens to be the one I've got here.

I'm going to select "Back Up." The point is that all these settings that we're backing up from the
Group Policy Object, this is what we want to test for. We want to see if all of these settings are
actually on the target machine and set the way we want to, based upon the configuration.

Now we'll go over to the Compliance Reporter. We'll then use the "Snapshots" node to right click and
"Create snapshot" against all the computers we want. If we have 1,000 computers or 100 computers or
10,000 computers, instead of individually discovering on each one if they have the setting or not,
we're discovering in real time do these computers actually have the settings we want. As you can
see, we've got the status back.

The "Tests" – this is the backed up Group Policy Object. We're simply going to right click, "Import
test from GPO Backup." Again, the GPO must, in fact, be backed up already for you to then select it.
Once you select the backed up GPO, you can give it a name. It can be the same name as the GPO or you
can give it a different name – whatever you like.

All the settings within the Group Policy Object are now imported as the test. You can see all the
stuff that we did in a previous video are right there, available for us test against. We want to
test to see if "Firefox is the default browser," if it's set that Updater will "Never check for
updates" and so on.

If we then go to "Results," what we're going to do next is add that test in, "123." Then you can see
this is what we're testing for. Then we're going to click "Select Snapshot," pick the snapshot we
just created and run the results. There we go. We can see the user side is all "OK" on all these
guys. It turns out that we did this Firefox stuff on the computer side.

Let's look at the one computer we got a result from first. Again, we show no results because
everything was in the test. If you "Show all settings in the test," you'll see everything is equal.
This computer basically got all the settings that were inside that GPO and are now a test. So this
computer got everything.

If we take a look at this computer, "WIN7COMPUTER64," we have a lot of things that are "Missing" –
things that are expected but the value never made it there. Gosh, I wonder why it didn't make it
there. If we take a look at this other one here, "WIN733," we have the same problem.

Let's take a look at where the GPO was linked in the first place. It's linked over to only "East
Sales Laptops." Let's look at where these other computers are in the world. Let's take a look at
this guy, "gpresults/R." Let's see where this computer lives. This computer lives in "East Sales
Desktops." Well, gosh, that GPO wasn't linked over to "East Sales Desktops." Maybe we should do
that. Let's "Link an Existing GPO" called "Manage Firefox using STIG" over to that OU. Now, those
computers will get it.

Let's see where this computer lives, "gpresult /R." It lives over in "West Sales Desktops." Gosh, so
we have to go over to "West Sales/West Sales Desktops" and "Link an Existing GPO" and take those
settings, the "Manage Firefox using STIG."

Now if we're using a more modern Group Policy management console, you could right click over an OU
and you could tell those computers to force Group Policy right now. Or you could go over to each of
your target computers and simply run "gpupdate," which is actually a little bit faster for the
purposes of this demonstration so I'm going to go ahead and do that right now. I'll just run
"gpupdate" on all my target machines here.

In real life, you could just wait, so you have a couple of choices. You could force Group Policy
remotely using the GPMC. You could run `GPUpdate `on your target computers. Or you could just wait
and Group Policy would take effect.

Because PolicyPak is on these machines, it's picking up these Group Policy directives that have
Firefox content in them. Now, let's take a look just on this computer. Let's take a look at its
"Mozilla Firefox" here. Do we have the settings now?

If we go to "Options" here, you can see we've declared a "Home Page." If we go over to "Security,"
you can see we're dictating the various settings from the STIG as we want to. But, like I said, if
you have 5,000 computers, how would you know that's actually true? Again, you use a "Group Policy
Compliance Reporter."

If before, our results said that only one of our computers got it and two of them didn't, let's
retake another snapshot by right clicking and creating another snapshot. Let's go ahead and do that,
"Create snapshot." Ask all the computers, "Did you get those settings now?" Let's see the result of
that. All the computers responded.

We're not changing the test. We'll go right back to "Results" and we'll just simply select the
latest snapshot ("Select Snapshot") that we just took and click on "Generate Results." Now all the
computers got it because we did our homework and figured out what GPOs were linked to what location.
We made sure every GPO was linked to the right place. Once that was the case, the PolicyPak moving
part on the target machine picked up the settings that were in the GPO, and we verified that using
the Group Policy Compliance Reporter.

I hope this is helpful. Remember, you get for free as a PolicyPak customer the ability to test upon
things that PolicyPak deploys. So in Firefox, Java, Flash – those kinds of settings – you get
returned results for absolutely free. If you're looking to return results on things that Microsoft
has, such as Group Policy admin templates or security settings or Group Policy Preferences, then
that's the paid version of the Compliance Reporter.

I hope this has been helpful. Thanks so very much, and we'll talk to you soon.

