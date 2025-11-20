---
title: "Use Discovery to know what rules to make as you transition from Local Admin rights"
description: "Use Discovery to know what rules to make as you transition from Local Admin rights"
sidebar_position: 20
---
# Use Discovery to know what rules to make as you transition from Local Admin rights

Got Local Admin rights? Use Netwrix Endpoint Policy Manager (formerly PolicyPak) Discovery to figure
out what users are doing with those admin rights, so you can transition from Local Admin to Standard
User. Use this same technique to transition to SecureRun, so users cannot run applications that were
not installed by IT staff.

<iframe width="560" height="315" src="https://www.youtube.com/embed/u0S-A4l_TQ8" title="Endpoint Policy Manager: Use Discovery to know what rules to make as you transition from Local Admin rights" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Transcript: Use Discovery to know what rules to make as you transition from Local Admin rights

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can figure out what
applications are currently running with local admin rights so you can make rules about it for
PolicyPak Least Privilege Manager. This is a longer video because I'm going to show you three
different aspects of things that you can try to audit for. We call this discovery mode.

The guy I'm currently logged on as is EastSalesUser3, and he is a local admin. As a local admin, he
can do all sorts of things. He can go into "System." He can go into "Device Manager" and "Disk
Management." He's a local admin. He can do whatever he wants.

You probably want to know the kinds of things that he's doing before you transition him from a local
admin to a standard user. Because when you know what he's doing, that's going to give you the
ability to create the rules you need to help walk away from local admin rights.

How do we do that? Here are some quick examples. The first thing I'm going to do is run an
application called "TreeSize Free." It requires admin rights to get full effect. When you do this,
what happens? It's going to run perfectly with local admin rights.

What we're going to show you is how to audit for that first. Let me show you in the "Event Viewer."
Right now, there won't be any events around this. I'm hitting F5, hitting Refresh. Nothing is
happening here. Let me show you how to turn this on.

You're going to use PolicyPak Least Privilege Manager. I've got a Group Policy Object linked over to
my "East Sales Users." You could do this also for computers if you want to. Under "Least Privilege
Manager" I'm going to "Add" a "New Global Settings Policy."

This is where you set up your discovery settings. The first one I'm going to do is this one in the
middle: "Audit elevated applications." I'm going to start here and I'm going to turn this guy on
("Enabled"). I'll go ahead and click "OK."

I'm going to run GP Update ("`gpupdate`"), and then auditing events for any time UAC prompts occur
and are overcome, that is when we're going to start seeing events in the event log. For instance,
there we go. I'll go ahead and run this guy.

Let's go ahead and check out "TreeSize Free" again. If we go to "TreeSize Free (Administrator),"
what happens? We get prompted for UAC rights. Again, the guy is a local admin. He says "Yes," and
the application runs.

When I now hit Refresh here, we start to see interesting events that occur. Here we go. You can see
that we get an event that's called "AUDIT: Process runs elevated." We can see that it's "TreeSize
Free" that requires the admin rights.

Now you can take this information and feed it back into PolicyPak Least Privilege Manager and create
a rule if you want to. I'm not going to do that now for the sake of this demonstration, but you
would "Add" a "New Executable Policy." You would set it up for TreeSize Free and the publisher and
make it as loose or as secure as you want.

That is the first part of this. The next part of the story is let's pretend a user has now
transitioned from a local admin to a standard user. I'm going to "Switch user" and talk about a
different guy: "EastSalesUser1."

EastSalesUser1 is not a local admin. He is just a standard user. I can show you that because if I
were to run TreeSize Free in admin mode or do other things as an admin, it's simply not going to
work. If I were to go to "TreeSize Free (Administrator)," what's going to happen? I'm going to get a
UAC prompt. He's just a standard user. I have no rule and so on. So he's just a standard guy.

Now when you've transitioned to being a standard user, there's going to be some items that you're
going to want to know that that has occurred. Here's another example. If I were to go to "Control
Panel" and take a look at the "Programs and Features," this might be an example of something that a
user regularly does. You might want to record that this has happened even when the guy has
transitioned from an admin to a standard user.

When you click on "Turn Windows features on or off," you get the UAC prompt. He's not able to do
that thing. What's going to be in the event log? Well, nothing right now. If I were to look in the
event log for anything here, I will not see that. This is the previous thing we saw in the last
demonstration.

So how do we turn on auditing events for this? Let's go back to "Global Settings policy," and this
is "Audit applications requiring elevation." Not succeeding in getting elevation. Just applications
requiring elevation. I'm turning this on ("Enabled").

Now that this is on, when the guy is a standard user you're kind of playing cleanup at this point.
You've already done the work to figure out what rules to create as the person is an admin
transitioning to a standard user, but you're not going to get it all. This is a second type of
auditing that tells you what happens even when the person is a standard user.

Let's go ahead and rerun this exercise here. I'm going to retry "Turn Windows features on or off." I
will not succeed in overcoming the UAC prompt. When I hit Refresh, here we go: "AUDIT: Process
requires elevation." Didn't succeed; it just requires elevation.

Now you know I'm getting people out in the field who are trying to run this thing and it's not
running successfully. Now you can create a rule for this and then it will overcome with standard
user rights with Least Privilege Manager.

The last thing I want to show is something that you can do either when the person is an admin or
when it's not an admin. In fact, I'll do both. I'm going to go back and go to "Switch user" back to
my "EastSalesUser3" who is an admin. EastSalesUser3, like I said, is an admin. The thing is that
EastSalesUser3 might have some applications that he installed himself or dragged to the Desktop or
otherwise got and is using day-to-day, but they don't require admin rights.

Here's one. Here's "CamPlay." I don't know what the heck CamPlay is. Oh, it's just a video player.
That's fine. But this is the kind of thing that you should probably know before somebody is an admin
or even after they've removed admin rights. You should know what applications are going to be
prevented when you turn on PolicyPak SecureRun.

As a reminder, PolicyPak SecureRun's job is to put the smackdown on applications for when they're
not installed correctly by an admin. In this case, this file is owned by the guy EastSalesUser3. If
I were to go to "Security/Advanced" here, you can see he is the "Owner." That's probably weird. This
is indicating that this guy went out to the Internet, downloaded CamPlay. He's the owner, and you
probably want to be aware of what happens when you turn on SecureRun and remove admin rights from
this guy.

Here's a standard app. You can see I just ran it. We're not going to see anything interesting in the
event logs because of that. Nothing happened here. Let's go back over to our "Global Settings"
policy. Again, this is also called discovery. But now we'll go into "Audit untrusted applications.'
Let's go ahead and select "Enabled" for that guy.

Now what happens? Let's go back over here. We'll run GP Update ("`gpupdate`"). Now if you'll
remember, the SecureRun list is only anybody who is a local admin, trusted installer, and system.
What we're also going to do here is flag any file that's owned by this guy.

Let's go ahead and take a look. Now if we go to CamPlay here and run it, now what do we get? Let's
refresh here. Bingo. "Process" – CamPlay – "is untrusted and would have been blocked by SecureRun."
Because if we take a look at the SecureRun list here if we look at the "SecureRun Policy," the
defaults in SecureRun are the local "Administrator," "SYSTEM," and "TrustedInstaller." So the idea
is when this guy transitions from local admin to standard user, he's not going to be a local admin
anymore. So we're showing and enumerating that this would be a problem for this guy.

We can also see this exact same event if we were to go to the guy who is already a standard user.
Let me go ahead and "Switch user" back to "EastSalesUser1" here. Now let me go ahead and run
"CamPlay" again. If I were to go back to the event viewer, now we're going to see that same item.
CamPlay "Process is untrusted and would have been blocked by SecureRun."

So this is telling you the applications. Let's go ahead and turn on SecureRun. Let's see what's
going to happen here. Let's go ahead and "Add" a "New SecureRun Policy" here. Let's "Enable" it. Now
you're putting the smackdown on. You're blocking all things, all applications where the file owner
is not on this "SecureRun Member" list.

Now that we've turned it on, let's go ahead and run GP Update ("`gpupdate`") here. Now we're ready
to run "CamPlay." We know this guy is not on the SecureRun list. What's going to happen? "This app
has been blocked by your system administrator."

Now that auditing event, the previous "Event 6210," that will not be here anymore. If we refresh,
what do we see? We see a different type of "Event 2010." "The following process has been blocked by
SecureRun," and that's "CamPlay."

This methodology gives you the ability to figure out in advance which applications are going to need
either least privilege rules to overcome. So you're going to "Add" a "New Executable Policy," "New
Control Panel Applet Policy," "New Windows Installer Policy," and so on. These kinds of policies are
going to overcome UAC prompts or help you overcome those things that are going to be automatically
blocked when SecureRun turns on.

Now if you have lots of computers out there, that's okay. You can use what's called event
forwarding. We have another video on event forwarding to help you take these events and forward them
to a collector server. That gives you the opportunity to paw through these and then take these event
IDs and route them through to automatically create rules.

Okay, I hope this helps you out. Thank you very much and looking to help you get started with
PolicyPak Least Privilege Manager real soon. Thanks.


