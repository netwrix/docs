---
title: "Prevent Users Running some commands with command lines"
description: "Prevent Users Running some commands with command lines"
sidebar_position: 70
---
# Prevent Users Running some commands with command lines

Customer requested demo to show how to block users from running Chrome or Firefox with specific
command line options.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ew6cdP0oAzM" title="Endpoint Policy Manager: Prevent Users Running some commands with command lines" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Prevent Users Running some commands with command lines

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can use Netwrix Endpoint
Policy Manager (formerly PolicyPak)
[https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html)
to prevent users from doing naughty things like running Firefox or Chrome with specific flags that
might work around your security.

We have a customer who had this challenge. Their challenge was their end users knew that if they
just went to Windows+R and just ran "chrome –disable-extensions" like this, then Chrome would not
have the extensions enabled. Same thing if they were to go to a Command prompt here ("cmd") and also
try to run it this way: "Program Files (x86)GoogleChromeApplicationchrome.exe" –disable-extensions."

This is an end user doing this. They don't want this to happen. They only want "Google Chrome" to
work when that end user double clicks it the way it's supposed to and the extensions will be fully
running. How do we do this with Endpoint Policy Manager Least Privilege Manager? It's actually
pretty easy to do.

For all of our "East Sales Users" here we're going to "Create a GPO in this domain, and link it
here." We'll call this "PP LPM Command line demo." We'll right click and click "Edit" on this guy.
We're doing this on the user side. You could do it for all the computers too. I just happen to be
doing it on the user side.

We're going to go to "Least Privilege Manager." This is a little bit tricky. You're going to do
what's called a "New Executable Policy" here, and you're going to "Use combo rule." A combo rule is
going to have a "Path," which is going to have the executable name in it, and the "Command-line
arguments" flags here.

The command you're going to "Add" is a file ("Add file"). You're going to just do "\*chrome.exe." We
don't care where it is. As long as it's Chrome, you're good to go. Then the "Command-line Arguments"
is going to be "Any argument from the list." I just want to make sure I spell it exactly right
because it has to be spelled perfectly. Here we go: "–disable-extensions." You put that in there.

Now we're saying "Any argument from the list," "–disable-extensions" is the only argument anyway.
We'll go ahead and click "Next," and we want to "Deny execution." If they try to run it in this
naughty fashion, we're going to deny it, so we'll call it "Put smackdown on chrome when run in
naughty fashion."

By the way, you can specify "Item Level Targeting" to say certain people have to adhere to these
rules and other people don't have to adhere to these rules if that's what you wanted to do. I'm just
going to say all of my East Sales people are going to do this.

At that point now just to prove a point, here's "Google Chrome." It's running. You already saw me
with the Command prompt. It will still run with the extensions disabled. Let me go ahead and run GP
Update ("gpupdate") here. Let's get the signal from Group Policy. We'll give this a minute to finish
up. Okay, and that's it.

At this point now let's go ahead and just prove a point. "Google Chrome" will still run. That's
cool. But if we try to go to Windows+R and try to run Chrome ("chrome –disable-extensions"), "This
app has been blocked by your system administrator" which is awesome. If we were to go to a Command
prompt ("cmd") or something and copy this line ("Program Files
(x86)GoogleChromeApplicationchrome.exe" –disable-extensions") and try to run Chrome directly, "This
program is blocked by Group Policy."

So just like that, using Endpoint Policy Manager Least Privilege Manager it's as simple as pie to
ensure that applications will run the way you intend them to and not some unusual way that you do
not intend them to.

I hope this video helps you out. If you're looking to get started, the best first step is to join us
for the webinar and after that we'll hand over the bits and you can try it yourself.  
Thanks so much.


