---
title: "Manage and Lock down Java Site List Exceptions"
description: "Manage and Lock down Java Site List Exceptions"
sidebar_position: 20
---
# Manage and Lock down Java Site List Exceptions

How can you populate Java's Site List Exceptions using Group Policy and also lock it down so users
cannot make changes? Watch this video. Netwrix Endpoint Policy Manager (formerly PolicyPak) works
with ALL versions of Java right out of the box.

<iframe width="560" height="315" src="https://www.youtube.com/embed/B9o5QCKEIVA?si=co_e7DT5jmI3DapS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Manage and Lock down Java Site List Exceptions

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, we're going to learn how to us PolicyPak to manage Java's site exception list and lock it
down so users can't be naughty and work around your configured settings.

I have two versions of Java here. I have a "Win7Computer-32" Java "Version 7," and I have "Windows
8.1 U1 x64" machine running "Version 8." You could do it any combination. I just happen to be
showing this set off.

Let's go ahead and take a look. If I take a look here on the "Win7Computer-32" computer and look at
the "Security" tab, any given user can modify the settings that could maybe get them in hot water,
which is not good. They could also "Edit Site List" and do things that maybe are good or maybe are
bad, who knows?

Long story short is that if you want to control these site lists and guarantee what is dictated here
and ensure users can't work around it, that's where PolicyPak comes in. Let's go ahead and show you
how easy it is to do that.

I'm going to do this for all of my "East Sales Laptops." You could do it for all of your users or
computers or a combination or target them using OUs or other things, but I'm just going to do it for
all of my "East Sales Laptops."

I'm going to "Manage Java Site Exceptions list for Java 7 and Java 8." I'll right click over this
guy and click "Edit." I'm editing the GPO. Again, I'm doing this on the "Computer" side, so under
"PolicyPak/Applications/New/Application" you can see that I've got "PolicyPak for Oracle Java 7 u 60
for Windows 7 and Later" and "PolicyPak for Oracle Java 8 u 20 for Windows 7 and Later."

Now, we have different Paksfor various versions of Java when needed, but typically if nothing
changes inside a Java Pak, you can read this and say Java 7 u 60 and later or Java 8 u 20 and later.
So I'm going to go ahead and pick this guy here, and let's dictate some settings for my folks that
are on Java 7.

If I go to "Security," one of the things you can do is set it to "Medium." That's perfectly valid in
Java 7. Why don't we dictate "Medium" and while we're here "Lockdown this setting using the
system-wide config file" so now users can't work around it.

We'll also manage the "Exception Site List." It's really easy to do. You can either merge whatever
is there, so you can set this to "MODE=MERGE," that's an option, or "MODE=REPLACE." I'm going to
demo "MODE=REPLACE," which is going to say, "I don't care what users have. We're just going to erase
it and put down what we think is important." I'm going to dictate "https://www.policypak.com/,"
"https://www.GPanswers.com" and I'm making up this website "http://www.java.com/7."

For my Java 8 people, let's go ahead and make things a little bit different. We'll go to the
"Security" tab. We'll set the "Security Level" to "Very High." We'll also "Lockdown this setting
using the system-wide config file" so users can't work around it. While we're here, we will also
replace whatever they currently have, and we'll set another website to "http://www.java.com/8."
Again, I don't think that website exists. I'm just using it as an example.

So now we're dictating these settings. Let's go ahead and go over to the target machine and see what
happened. By the way, if you want to kill auto updater, that's quite easily done as well. Why don't
we go back there and just do that since we're here anyway. Go to "Updates" and we'll uncheck "Check
for Updates Automatically."

Sometimes you get this annoying pop-up thing. You can "Prevent Users from ‘JRE out of date' warning
pop-up." That's specific for "Version 7." If we want to do that same kind of idea for "Version 8,"
that's also in "Update" and we can uncheck "Check for Updates Automatically." These are the kinds of
things that you can do with PolicyPak.

Let's go ahead and go over to our target machine. We'll go ahead and run "gpupdate" on machine
number one, and we'll go over to machine number two here. Let's go back over to machine number one.
It's done. I'll go ahead and close this dialogue out and go over to "Configure Java" and let's see
what we get here.

First the "Updates" tab is gone. That's great news. Let's head over to "Security" and in Java 7 we
can dictate "Medium." We've dictated the "Exception Site List." You can see there are the three
sites that we've got here.

Let's go to the second machine here, and we'll go over to "Configure Java" and we'll take a look and
see if those results have been achieved. You can see the "Update" tab is gone. If we go to
"Security," you can see we've dictated "Very High" security and locked it down so users can't work
around it. We've also dictated the "Exception Site List."

However, there is one thing about this. Right now, a user could just click "Edit Site List" and be
naughty. They can either "Remove" your important sites or "Add" some sites that aren't good. If I go
to "http://www.bad.com," that's not good news. So what we're going to do here, even though we've
dictated it using PolicyPak, is we're going to go to the next level.

Let's go back to the Pak and for each one of these guys, we're going to right click over the
"Exception Site List" and we're going to "Perform ACL Lockdown." This is going to take ownership of
the file so only PolicyPak and administrators can manage it. We're going to dictate these settings
and make sure users can't manage or manipulate those anymore.

I forgot to do it for the second one. I'll go back to "Java 8" here, go back to "Security," right
click and we also want to "Perform ACL Lockdown" on this entry as well. To recap, we're dictating
the settings for each entry and locking it down using PolicyPak.

The next time I run "gpupdate" on each machine, extra magic occurs, which is PolicyPak takes
ownership of the file, dictates the settings and now users can't even work around it. They can't set
the settings that they want. You're in control.

We'll go ahead. We'll close this dialogue out. We'll go ahead and close this dialogue out. Let's
take a look one more time if we go to "Configure Java." Now remember what we just saw. We saw that a
user could "Edit Site List" and be naughty and work around your settings. But with PolicyPak
onboard, notice how it doesn't change.

Let me show you again. If a user tries to be all sorts of naughty and "Add" things that they
shouldn't do, "http://www.bad.com," you can say "Continue," say "Add," say "OK," but it doesn't
actually do it because PolicyPak owns this and there's no way to work around it.

I'll prove it as well on Java 8 just to put a fine point on it here. If I go to "Configure Java,"
you can see that if I go to "Security," "Edit Site List," if they try to be naughty here and "Add"
their own thing here, "http://evil.com," it seems to let them. Then if they click "Add," it does not
actually perform the work. Your "Exception Site List" is the only thing that's allowed.

That's it. That's how, in a nutshell, to manage the Exception Site List and also updates with Java
and PolicyPak.


