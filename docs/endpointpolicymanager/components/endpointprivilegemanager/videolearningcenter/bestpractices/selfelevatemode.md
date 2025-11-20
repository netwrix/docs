---
title: "Endpoint Policy Manager Least Priv Manager: Self Elevate Mode"
description: "Endpoint Policy Manager Least Priv Manager: Self Elevate Mode"
sidebar_position: 110
---
# Endpoint Policy Manager Least Priv Manager: Self Elevate Mode

Use PPLPM Self Elevate mode to overcome UAC prompts without requiring specific rules. This is useful
if you want to take away local admin rights, but still give users the ability to "break the glass"
if they have an emergency. This technique isn't generally recommended due to a potential lowering of
your security posture, but it can be very useful for the right circumstances.

<iframe width="560" height="315" src="https://www.youtube.com/embed/6MtBFMLyrTE?si=4a48b7MOdwy2BFDR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, and in this video we're going to talk about how to use PolicyPak Least
Privilege Manager Self-Elevate Mode. Now before I get too far into it, I want to advise against
using this feature. That's right; this is a feature that we built, but I hope you don't have to use
it. Well, let's talk about why you would have to use it, though. You might have an application that
throws a UAC prompt. You would generally use Lease Privilege Manger to just make a rule to overcome
that, or if a user in the field needs to install an application, you would generally make another
rule to overcome that.

You might have the scenario from time to time where you want to enable a bucket of people to just do
all the things as if they were admins even without local admin rights, just all the things. How do
we do that? Well, that's what Self-Elevate Mode is all about. I'm going to show you here is just –
I'm going to create a new GPO here called PPLPM Self-Elevate Mode. The rules for self-elevate, you
can do this on the user or the computer side, so I'm going to do this one on the user side. I want
to go to Least Privilege Manager, and I'm going to right-click Add New Self-Elevation Policy.

New Self-Elevation Policy Wizard gives you the ability to turn on all these values automatically no
matter what the story is. For instance, if you wanted everybody who gets this GPO – and this is
linked to my east sales users, so if I wanted all of my east sales users to be able to be able to
perform any executable or to perform any MSI or to do both or scripts or Java – why don't we just
stick to executables and MSIs to keep it easy here. Whenever I click on these things, I can
right-click and then Perform Self-Elevation for any activity I need for exes or MSIs.

We also have the limiters. We have another video on the limiters. By default, it will apply to child
processes. If you don't want to do that, you can uncheck that. If you want to reign people in a
little bit more by making it so that it – they can't use this. They can use this for as little evil
as possible, you might want to do that. Again, I have other videos on this particular thing. For
this particular demo, I'm just going to go ahead and just talk more about self-elevation mode. As
you see, I've enabled it for exes and MSIs. Go ahead and click on Next here. Let me add in a member
of a domain, and I'm going to add in all of my east sales users. You do have to actually dictate a
group even if it is targeted at an OU level. I'm going to dictate my east sales users here. That's
who they are.

Then here's where I have some choices. The first thing is you can change the name of the
self-elevation command item. I'm going to come back to that. We can also display a message to the
user. We can use the default message or change it; we'll come back and change it in a second. Then
you can also do what's called require justification text where they have to tell you why they're
doing this thing. We'll call this Self-Elevation for East Sales, and we'll come back around and take
a look at some of those extra settings.

Just to put a fine point on it, here's a .exe. It forces me to put a UAC prompt in, and I can
right-click. There's no way for me to run this thing magically. Same thing for this MSI package.
Once I get to here, I'm going to get a UAC prompt here. There's no magical way to overcome that. If
I were to right-click, there's no magically overcome.

Let's go ahead and run GP Update here, and we'll see self-elevate with the default options for a
second first. Then we'll come back around and we'll play with the knobs and whistles. Give this a
second to finish up here, and there we go. Procmon, again, if we double-click it, what happens? We
still get the UAC prompt but not because we said that the east sales users can do self-elevate, we
can right-click and do Run Self-Elevated with PolicyPak. Now that we do that, we did say that we
wanted to put justification in here, so let's go ahead and let's say why. "This is required for the
monthly report," or something, whatever Let's go ahead and put that in there; click Okay. Look at
that. It runs. We've got our application to run. We didn't have any special rules in place. This
person was able to overcome that UAC prompt and you didn't have to know a certain rule in advance.

Let's go ahead and do the same thing for Skype set-up. Right-click and Run Self-Elevated with
PolicyPak. Let's see what happens here. Hey, look at that. "Needed this to communicate with,"
whatever. Go ahead and click Okay and it runs and it installs just fine. You can see what the
defaults were there. Chances are you probably want to go back and make your own configuration
changes to the default, so let's go ahead and do that and see what those look like. I want to give
you a little bit of demonstration in there.

Let's go ahead and change some of those items here. Those would be the messages. The first thing is
you can change the right-click. What we can do is say "audited self-elevate for IT," whatever's
right for you. The second thing is that you can display a message. "Every action here is audited.
Please think twice before elevating," whatever you want. You can also add in some variables as well.
If you wanted to add in, for instance, the process name, so the process name, Process Command Line,
and if you wanted to add in the publisher or whatever else you wanted to put in here, that's
available to you. Some of these may or may not make sense depending on the situation but they're all
available for you here. The message that would be displayed here would be "Everything is audited.
Think twice." Obviously I'm going kind of fast here. That's that, and let's go ahead and check that
out. Let's see how that works.

Actually, I wanted to do one more thing here, which is the – yep, Require Justification Text. That's
available It's on by default. You can turn it off if you want to, but it's – we recommend that you
leave it on here, and you'll see why at the end. Let's go ahead and run GP Update here, and we'll
just do two more different things here. Give this a second to finish up. What we'll do is we'll
right-click over Procmon and boom, self-elevate for IT. We change the fly-out item here and hey,
look, everything's audited; think twice. This is a message from your IT department, and look, you
can see we put the variables in here, Procmon, the process itself, and then I think I picked the
publisher. "Need to run this for weekly report." This is being audited. You should probably also say
enter your justification text below. You have to actually put that in here, so you should probably
change that. Go ahead and click Okay and bang, it does its thing.

If we were to try to do now this time Silverlight install, right-click, Audited for Self-Elevate IT.
There you go, same idea. "Need this for old IE website," whatever and you're off to the races.
Because all this is being audited, I want to show you where this lives in the event log so you get a
feel for how this works. If we go to Event Viewer here, and we go to Windows Logs – I'm sorry,
Applications and Services Logs, rather, there's a PolicyPak node and in the PolicyPak node, we're
going to have all of our events. You could use – we have other videos on event forwarding and
tracing. You can go ahead and watch those. The point is that everything happens local to the
machine, and so everything you do here will show up here.

If we go over to the PolicyPak node, you're looking for Least Privileger Manager Client Events.
Typically what you're looking for is 6400, 6401 and 6402. You can see 6401 is Self-Elevated with
Justification Text. Okay, Silverlight installer – gosh, I really wonder why they needed it. Oh, look
at that. They needed it for this old IE website. If we look over here, here's Procmon. Why did they
need it? Oh, they needed it to run this weekly report. If we take a look at this guy, we can see
what the allowed versus blocked is. We actually can see. This gives sort of like a little mini ARSOP
of what's happening. We can see that East Sales User 1 is allowed to do these things on this
machine.

Now that's basically all the bells and whistles. However, what I also want to show you is how to
block a specific user from doing this. Remember, we said we wanted to do the self-elevation for east
sales. I'm allowing – my allowed users is east sales. If I wanted to now take away this ability for
a particular user, you can create another self-elevation policy that will block them. If I were to
disable it, it's going to block them. Who's the them? You can add a particular group or you can add
a particular user. I'm going to add a domain user here. I'm going to use the same guy I'm logged on
right now, East Sales User 1. There's East Sales User 1, going to select him and what worked ten
seconds ago shouldn't work now. "Blocking East Sales User 1" here. Go ahead and click Finish. Now if
we were to go to GP Update here, let's give this a second. Let this finish up. Everybody in east
sales can do it but not East Sales User 1. How do we know? Let's just double-click on Procmon and
that shouldn't work anyway There's no rules for that. If we were to right-click and audit with
self-elevated IT, ah, it doesn't work. How about if I were to do an MSI? Right-click and oh, I can't
do that, doesn't let me anymore.

The idea is that you're creating the first rule for who will get the self-elevation policy, and then
you're going to create later rules for who will block it, if that's what you want to do. Hope this
is a feature that you don't have to use, and the reason why I'm advising against it is that it
really is incredibly powerful and gives self-elevation/emergency rights to somebody or a group of
somebodys if you need to, but I think it's a better practice to try to eliminate self-elevation and
use rules that you know you are targeting to those users or computers so you actually have a better
handle on exactly what they're doing. On the other hand, though, if you do turn on self-elevation,
at least everything is logged to the Event Log and you can use those logs to your advantage to
figure out what you can then make rules for and then eventually turn off self-elevate.

So I hope this gets you to where you need to go and looking forward to seeing you in PolicyPak land
real soon. Thanks so much.


