---
title: "7 Minute Technical Overview for IT Pros"
description: "7 Minute Technical Overview for IT Pros"
sidebar_position: 20
---
# 7 Minute Technical Overview for IT Pros

In this video, IT Pros can learn how to quickly use the Netwrix Endpoint Policy Manager (formerly
PolicyPak) Group Policy Compliance Reporter. You can use it alone, or with your whole team. And see
which machines on your network did and did not get the IT and security settings you need for them to
get to be compliant.

<iframe width="560" height="315" src="https://www.youtube.com/embed/2PwlaYfUkmw" title="Endpoint Policy Manager Group Policy Compliance Reporter: 7 Minute Technical Overview for IT Pros" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager Group Policy Compliance Reporter: 7 Minute Technical Overview for IT Pros

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. As a former
Group Policy MVP for more than 10 years, I know from admins just like you how hard it can be to
truly answer the question: Do I have a particular Group Policy setting out there and working?

Why would a setting not make it there as expected, and why is Group Policy troubleshooting so hard?
It starts out because you might have a lot of Group Policy Objects and inside those GPOs, the
multiple settings inside them are possibly conflicting.

You could have a complex OU structure, computers going up and down on the network all the time,
multiple domain controllers and replication problems, or misconfiguration by other admins. Of
course, you've never done this, but you know who I'm talking about.

A computer or user got moved into a different OU by accident. A GPO was deleted or unlinked. A Group
Policy was disabled or half disabled, or the Group Policy Object's contents were changed. So
ultimately, maybe your target computers got your GPO settings, or maybe they didn't get them.

Using Microsoft's Group Policy Results Reports can help you determine if you've actually got
settings on your target computers, but then you need to individually request information one-by-one
from all of your computers and users. You need to manually read the report and see if the setting
you want actually made it to the machine. But ultimately, this is a real time-consuming process,
asking each computer and user one-by-one: Did the setting make it there?

PolicyPak Group Policy Compliance Reporter changes all that. It's a program that each administrator
in your organization can run, either on their own or share data together as a team.

First, you ask all of your computers or a subset of your computers what their current state is.
That's called a snapshot. I'll go ahead and "Create snapshot" now. When you do, your computer then
asks all the computers that are currently online what their current state is, and you've now got the
information locked and loaded for the next step.

Next, you'll click on "Tests" and you'll define a test about what compliance looks like. To
accelerate things for this little demonstration, I have three tests that I've already defined. For
instance, if I want to verify that the "Screen Saver Password Lock must be ENABLED," and that is
called "Password protect the screen saver," you can see it's set to "Enabled." Or you can use Group
Policy Preference item, and you can verify things like: Is a particular "URL" like
"www.policypak.com" delivered to the desktop? Or a PolicyPak Application Manager setting, for
instance: Is Java set to very high security ("Set Java Security to Very High")?

Creating a new test couldn't be simpler. You can either right click and "Create test." I'll call
this "Test Example 1" here. The PolicyPak compliance test is based upon a GPO. So you can click on
either "Computer" side or "User" side, "Policies," "Preferences" or "PolicyPak" and figure out
exactly what you want to test for.

For instance, if on the "User" side you wanted to go to "Administrative Templates" and test to see
if the "Control Panel" was expressly prohibited, you could do that and it's easily done. You can see
the example report is returned here.

You could also right click and import a test from an existing Group Policy Object backup ("Import
test from GPO Backup"). If you have a Group Policy Object that you want, those exact settings are
there. You can simply click on a GPO. I have one called "Very important Security Settings." Click on
"OK" and this will import a GPO from the backup.

In this example, you can see we are checking for some "Computer" side security account password
policies, such as being able to "Store passwords using reversible encryption." We want to make sure
that's "Disabled." Password complexity ("Password must meet complexity requirements") is set to
"Enabled," and "Enforce password history" is only "2 passwords remembered" and so on.

These are the things that you could possibly test for. Next, we're going to click on the "Results"
pane. Here is where you can specify which test or tests you've defined earlier that you want to
verify.

For instance, if we want to see if the screen saver password lock is, in fact, enabled ("Screen
Saver Password Lock must be ENABLED") on the machines in our snapshot, we'll just click "OK" here.
We can see that the "Resultant Compliance Test" will only have this one test in it. We can simply
"Select Snapshot" that we created earlier and "Generate Results."

It then goes through each machine to see if it's true. You can see on the "User-Side," we have a
"Warning" for two of the three computers. If we click on the first one, what does it tell us? It
says "Password protect the screen saver" is, in fact, "Missing" on that.

If we go over to "WIN7COMPUTER64" and right click and go to "Personalize," we'll look at "Screen
Saver" and, sure enough, it is not set. If we were to go take a look at the next computer on the
list, which is "WIN7COMPUTER-32," it's also not set. If we look at the third computer, "WIN733," all
tests pass. You can see because we have an "OK" right there.

Let's see. Is it actually accurate? If we right click on this computer and go to "Personalize" and
go to "Screen Saver," sure enough, Group Policy has delivered the setting, but PolicyPak Group
Policy Compliance Reporter has actually verified that that's true.

If we move back to the "Compliance Reporter," we can then also subtract a test and add another
particular test or you can summate tests together.If you want to test for the "Screen Saver Password
Lock must be ENABLED" and PolicyPak must be on the desktop ("Place www.policypak.com on Desktop")
and "Set Java Security to Very High," you can do that very quickly.

This represents the thing that you want to make sure is compliant. This is the report of everything
that is going to be tested for. You can then "Select Snapshot" and "Generate Results."

Here, now all of these tests together additively must pass, and the only computer that passes your
bar of compliance is "WIN733." Something else is wrong with "WINCOMPUTER-32" and "WINCOMPUTER64." If
you click on this computer, you can see what has happened here. It never got the Java setting.

To correct for this on this computer for "WIN7COMPUTER-32," we have to do a little bit of actual
work. Now what we'll do is we'll figure out where the Java is being set. It's being set to "East
Sales Desktops." You know what? I bet that I just forgot to link them over to our "West Sales
Desktops."

If I now "Link an Existing GPO" that has my "Set Java Security to Very High" and go over to that
computer, "Win7Computer64," and run "gpupdate" to now get this signal, I'm downloading the latest
Group Policy settings and we can rerun the test to verify we actually got the settings we expected.

Now that that's done, let's go back to our computer here. Back in the "Compliance Reporter," let's
go ahead and create a new snapshot because we've made some changes. We'll "Create snapshot" here. It
will evaluate all the computers that are currently online.

Let's go right to "Results." Let's leave the tests that we had specified. All we need to do is
select the latest snapshot ("Select Snapshot") that we just took right now and click "Generate
Results." We still have a "Warning." It turns out we still don't have the compliance set for the
"Password protect the screen saver" for our West Sales Users ("westsalesuser1"). Let's fix that now.

We'll go to our "West Sales Users." We'll simply "Link an Existing GPO," and that's the "Screen
Saver Password Lock." We'll go back over to the computer and run "gpupdate." This is how you can
iteratively determine if your tests, the ones that you want to make sure, are actually on the
machines or not. The Group Policy Compliance Reporter is the tool that helps you get to that goal
very quickly.

Now that that's done, we'll go back to the "Group Policy Compliance Reporter." We'll take another
snapshot – last snapshot, I promise. We'll right click, "Create snapshot" here. Let's go back to
"Results." Let's pick our now latest snapshot here and we'll "Generate Results." Now that computer
is compliant.

"WIN733" is compliant. "WIN7COMPUTER64" is now compliant. There's something wrong with
"WIN7COMPUTER-32." He doesn't have the Java either and he also doesn't have the configuration.
Clearly, this computer got moved into a place that he shouldn't have.

I know you'll love this tool because it will help you quickly determine which computers are, in
fact, in compliance and which aren't, based on the tests you selected. Those tests you can create
on-the-fly, or you can use an existing Group Policy Object.

Thanks so much for watching. If you're looking to get started with the Group Policy Compliance
Reporter, just get in touch with the PolicyPak sales team, and we'll get you started.

Thanks so much, and we'll talk to you soon.

