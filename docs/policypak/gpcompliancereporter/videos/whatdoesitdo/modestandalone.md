---
title: "Standalone Mode"
description: "Standalone Mode"
sidebar_position: 30
---
# Standalone Mode

Quickly see what the PPGPCR Standalone Mode can do for you.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RKPVxz8Orw8" title="PPGPCR:  Standalone Mode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PPGPCR: Standalone Mode

Hi. In this video and in the next video, I'm going to show you the difference between the Group
Policy Compliance Reporter Standalone Edition and the Server Edition with Auditing.

In the Standalone Edition, you interrogate computers to figure out what's going on. If I want to
create a snapshot set called "Sales Computers," it's going to read Active Directory and I'm going to
pick all of my computers that are in "Sales" or I can find a set for all my computers. Right click
and "Create snapshot."

If I have 5 computers, 50 computers or 50,000 computers, I'll instantly be able to figure out what's
going on from a Group Policy perspective on all those computers and what user has logged onto them,
all in one shot. You can see, of the four computers I have, three of those computers are in "west
sales desktops." I can see that for "WIN7COMPUTER-32" a guy called "EastSalesUser1" has logged on
there.

Next, if you double click on a line item, you'll get everything that happened on the "Computer" side
and you get everything that happened on the "User" side as well, so basically the same thing that
you would get in the Group Policy results reporter in the GPMC. The good news, however, is that like
I said you can quickly get the Group Policy results for all of the computers that you interrogate.

But here's the thing. Even though I love having the Group Policy results reports at my fingertips
this easily, you still would have to manually dig down and see: is that setting true, is this
setting true, is that still there? And you'd have to go through each and every computer and their
RSOP to figure out: is that true, are you compliant? On each one of these machines, you'd have to do
that by hand.

That's where tests come in. The next thing you would do is click on "Tests." This is where you can
define what compliance looks like. For instance, if I "Create test" and call it "When my users have
screensaver password enabled," this is going to create a test Group Policy Object and you're get put
in what compliance looks like for you.

For me, on my user side, "`Policies/Administrative Templates/Control` Panel" under
"Personalization," I want to "Password protect the screen saver" because if the password isn't
protected on the screensaver, then anybody can just open up that laptop and get my user's data. So I
want to make sure that's what compliance looks like for me.

Now I'll click in the "Results" tab. This is where you can select the test that you created earlier
and pick what's called an "RSOP Source." This is one of the "Snapshots" that you created earlier.
I'll go ahead and click on that and click "Generate Results" and let's see what happens.

Well, none of my users are compliant with this. If I take a look at this combination,
"EastSalesUser1 on WIN7COMPUTER-32" is "Missing" that particular setting. Let's see if that's
actually true. If we go to "Personalize" on this computer and go to "Screen Saver," sure enough. He
doesn't have this checkmark checked, which would make him more secure.

What we'll do next is we'll fix that problem. That would be you using the GPMC to edit a Group
Policy Object and ensure that the "Screen Saver Password Lock" was in fact "Enabled." Go over to
your target machines. You could either wait for Group Policy to apply or you can run GP Update. I'm
doing that to make this demo go just a little bit faster.

Now that this is done, you would have to right click and go to 5,000 machines and see: is that true
on that machine? Instead, you're going to use the "Group Policy Compliance Reporter" to take another
"Snapshot." Right click, "Create snapshot" here, which will interrogate all the computers that are
currently online and figure out what's happening right now.

If we go over to the "Results" and we pick the now latest "Snapshot" and click "OK" and "Generate
Results," we'll now see "WIN7COMPUTER-32" is totally fine. He has all the tests pass. That's
fantastic, but we still have a problem with this guy. The only reason we're having a problem with
this guy is that he hasn't gotten the latest, greatest Group Policy yet.

That is Group Policy Compliance Reporter Standalone Edition. To learn about Group Policy Compliance
Server Edition, which gives you the ability for multiple administrators to work together and also
the ability for endpoints to push their data to a central storage location, go ahead and watch the
next video.

Thanks so much, and we'll talk to you soon.

