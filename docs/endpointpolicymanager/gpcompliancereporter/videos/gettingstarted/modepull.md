---
title: "Using Pull Mode (with or without PPGPCR server)"
description: "Using Pull Mode (with or without PPGPCR server)"
sidebar_position: 20
---
# Using Pull Mode (with or without PPGPCR server)

Use Netwrix Endpoint Policy Manager (formerly PolicyPak) GP Compliance Reporter's "Pull /
Standalone" mode to request (interrogate) Group Policy Settings from endpoints. With this method,
the PPGPCR server is not used. All new PPGPCR customers should start here.

<iframe width="560" height="315" src="https://www.youtube.com/embed/tpsjcPEJDn8" title="PPGPCR: Standalone Quickstart" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PPGPCR Standalone Quickstart

Hi. This is Jeremy Moskowitz, group policy MVP and founder of PolicyPak software. In this video,
we're going to do a quick start of the group policy compliance reporter when we're using standalone
mode. Standalone mode means there's no server so you'll start here. I've actually already got it up
and running. There are some preliminary questions that it asks you in order to get started and we'll
assume you've been through all those and you're ready to get going. The first thing you need to
understand is there's three panes: the snapshots pane, the test pane, and the results pane. We're
going to walk through all three of these. The idea is that the snapshot pane lets you create a set
and a set is basically a group of computers that you want to report upon.

We'll go ahead and we'll create a computer set, here. If you called it "All", for instance – create
it as a set called "All" and you clicked the entire domain, that's totally fine; that set is
perfectly valid. That being said, you do need to make sure that all those computers that are listed
here within this set are licensed. In my universe here, I do have the entire domain licensed. You
might not; you might have, for instance, only your East Sales desktop or something licensed or
something like that. I have my entire world licensed. Once you've created your set here, and again,
it doesn't have to be all. I'm just using it as an example. You can then right-click and create a
snapshot. A snapshot is right now going to query all these machines in real time that are in your
domain and try to figure out, Are they on? Are they accepting requests?

What's the current state of affairs upon them? For instance, who's logged on? Is Johnny logged on
Win763 or something like that? This takes a minute to go through but you might notice you're going
to get some connection errors; some are going to return back "Okay," and so on and so forth. Now,
one of the reasons why you might get a connection error is that the Windows firewall could be on on
the target machine or you might have a DNS resolution problem between your machine and the target
machine. Let me say that again. If you get a bunch of connection errors, could be a handful of
things. Thing number 1, the most common one, is that the firewall is on or the required holes aren't
poked through or thing number 2 is you can't ping the machine because the firewall is on. Thing 3,
that computer isn't on right now.

The server edition, which we're not covering in this quick start, conquers the problem of if the
computer isn't on, how do you get the data because in the server edition all the clients are just
constantly updating the server. We don't have to be on at the same time when our target computers
are. It's a big advantage of getting the server edition. Anyway, if you want to see how to configure
to open holes through the firewall, I've got that in another video. If you're getting all connection
errors everywhere, I've got another video that explains how to open up the firewall so that you can
get exactly the right ports so that we can talk to the right machines. Now, you can see we've got
some computers that have responded okay and that's it. We've taken a snapshot in time right now,
right for this moment in time.

We'll go to test and that's where we can create a test. Maybe what's important to us is to know that
our password length for WinZip is set to 14. Maybe that's really important and I've already got a
test there but let's say I wanted to create a new test from scratch. What I can do is create a new
folder here, call it "Important app tests," and in important app tests I'm going to create a test
and I'll call this "WinZip has 14 characters." That's not a great name but you get the general idea.
As you can see, a group policy object opens up for us for temporary editing. If you don't see the
PolicyPak node; that means you didn't install the PolicyPak on premise admin MSI, which gets you the
PolicyPak node. Now, it's not strictly required but if you want to test against PolicyPak things,
that's what you would do. If you wanted to set PolicyPak application manager here, and you went to
"new application" and you picked WinZip, here is where you are making a test that you are testing to
see if the character minimum password length is 14.

You could put a lot of items in here or a single, individual item. I like to go smaller; I like to
have more tests with fewer things in them and give them good names; although, you could argue that
the name I gave it wasn't so great. Okay, once we close that, we can see the configuration of the
test in there and you might want to create another test; for instance, let's create another test
called "Win screensaver is forced with a lock." Okay, so we'll do that one. That's under user side
policies, admin templates, control panel, personalization, and that would be – there it is. Password
protects a screensaver. If this guys is not configured, then oh, users can just walk up to a machine
and do whatever they want. Instead, we're going to make sure that's enabled. Now, again, we're not
setting these things; we're creating a test that's going to test these things.

You can have a battery of possible things you want to test for and here in results we're going to
add them all together. The idea is here you're going to add a test. Let's go ahead and pick our –
WinZip is 14 characters and when the screensaver is forced with a lock. These two tests are going to
be jammed together. This thing here on the right is what's called your result compliance test. This
is the sum total of all the settings that you are declaring you need to have on your computers and
your user configurations so you can see really we're testing user population right now for you to be
compliant. If all these things are true, then you get the thumbs up. If any of those things are
false, you get a thumbs down. If we select the RSOP source and we were to pick the snapshot that we
just created just now, this is our snapshot group, our set, and then this is a snapshot upon that
set. Then, we can now generate results.

For a lot of them, we're going to have no data because we weren't able to query the machine to
actually get there. Oh, we're doing well on the computer side but on some of the users – we've got
warnings. In fact, we're good on all the computer sides but we've got warnings on some of the user
sides. That makes sense. We actually are not asking the computer for any data to come back; we're
just asking about the stuff on the user side. We can see that West Sales User 1 on Win8 Computer 32
has a warning. Let's see what the warning is. Uh, He doesn't have either thing. He doesn't have the
WinZip set to 14 characters and he also doesn't have the password-protected screensaver on there.

Now, we have to fix that. What we'll do is we will actually fix that by going to our West Sales
users. Okay, here's West Sales. Let's actually fix this problem. Let's create a GPO called "Set
WinZip to 14 characters." Actually, set that one first so we're fixing the problem now here in real
time. If we go to user-side PolicyPak, application manager, and go to "New application WinZip,"
let's actually set this thing the way that the test says that we should to 14 characters. If we want
to, in the same group policy object or multiple group policy objects, your call, you can go to
policies, admin templates, and set the control panel settings that we were talking about. Under
"personalization" we want to password protect the screensaver. We've set these two items in this one
GPO. It's linked over to our West Sales users. I think we said that guy was on Win8 Computer 32 so
that's this guy.

Win8 Computer 32. If we were to just wait, group policy would apply or we could run GP update or we
could log them off and log him back on. Any of those things is going to cause group policy to
download, take effect, and get the latest, greatest settings. Then, we can retest for it. In fact,
let's make sure we got the group policy object we're looking for. On the computer side, we don't
care. On the user side, that's where we do care. Yep. "Set WinZip to 14 characters." Actually, if I
were smarter, I would've called it and also set the control panels as we need to but I didn't do
that. Next, we need to make another snapshot because remember that snapshot for our "All" group was
for that moment in time, it was for 5/17/2015 at 4:53PM. Is that valid right now? Gosh. I don't
know. What we need to do now, is we need to create another snapshot, here. It's going to query all
the machines and all the users and see what's the story, now.

I have a lot of computers that are not on my network anymore and, hence, they get a connection
error. There we go. Alright, so next we've already defined our tests. We don't really have to visit
this pane anymore. Let's just go back to "results" and we can see we've already got our selected
test locked and loaded. All we need to do now is select RSOP source; pick our latest, greatest
snapshot just a couple of minutes later after we think we fixed the problem. Remember the target
machine has to have downloaded these latest group policy objects. Then, if we generate results,
let's go ahead and see what happens, now. We go down, down, down, down, down. Look at that. Before
we had a warning and now we're okay and we can see that everything matches in the test.

This is how you would use the group policy compliance standalone reporter in order to quickly attain
results to figure out, well, I've got a snapshot with various computers in it as I want to. If I
click on "tests", I can create specific tests that I want to figure out – I have this battery of
possible things that I want to see if I'm compliant upon or not. Then, you use the results pane to
create and order your selected tests and then see if it's true against your entire set. Little side
trick, by the way, is if you click on "snapshots" here, if you click on any set that succeeded, for
instance here on Win7 – on Win10 Computer 74 – here you can see that we got some results. If you
double click on it, actually, what's nice is that you'll get an instant report and you can see that
Win7 Computer 74 had this user on it.

This is the actual group policy results report of everything that happened on the machine. If you
just want to see what's going on right now on the machine, very quickly you can do it instantly from
this pane right there. I hope that helps you out and gets you quick started with the group policy
compliance reporter standalone edition. In order to get set up and running and using all the
auditing features of the server edition, well that's a separate video. Thanks so much for watching.
We'll talk to you soon.

