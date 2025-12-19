---
title: "Manage Firefox Misc Settings and Buttons Using Endpoint Policy Manager"
description: "Manage Firefox Misc Settings and Buttons Using Endpoint Policy Manager"
sidebar_position: 90
---
# Manage Firefox Misc Settings and Buttons Using Endpoint Policy Manager

In this video, we show you Netwrix Endpoint Policy Manager (formerly PolicyPak)'s "Extras" that can
be configured. Here are the misc settings, and the time index where they can be found in this video.

- Prevent Firefox as Default Browser: 48 seconds in.
- Prevent Private Browsing: 2:19.
- Prevent Saving Passwords: 3:10.
- Disable Firefox Safe Mode: 5:23.
- Prevent Access to Local Files: 6:13.
- Prevent Firefox Sync: 7:17.
- Prevent Misc Buttons and Controls: 9:36.

<iframe width="560" height="315" src="https://www.youtube.com/embed/fKohXLGFv5A?si=LYnOBNj7YX-jsIGW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Manage Firefox Misc Settings and Buttons Using Endpoint Policy Manager

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
series of little mini videos, I'm going to show you how to use PolicyPak's Firefox "Extras" tab,
where we can do a wide variety of little tricks – things that you want to do to manage Firefox
better.

I'm going to show you how to "Turn off private browsing," "Always clear saved passwords," "Disable
crash reporting," "Disable safe mode," "Prevent access to local files" and "Turn off Firefox Sync."
I'm also going to show you how to remove a bunch of buttons, things like "Disable ‘Make Firefox the
default Browser' button" and a bunch of other things. In this little series of videos, I'm going to
show you how to do all of those things.

Let's see how to make this dialogue, the "Firefox is not currently set as your default browser.
Would you like to make it your default browser?" go away. As well as while you're in Firefox and you
go to the "Advanced" page, this checkbox, "Always check to see if Firefox is the default browser on
startup," we want to make unchecked and also obliterate the button "Make Firefox the default
browser." Let's see how we can do that using PolicyPak.

What we'll do is we'll use our Pak. The first thing we're going to do is in the "Advanced (General)"
tab, we're going to uncheck the checkbox "Always check to see if Firefox is the default browser on
startup." We'll then right click over it and "Lockdown this setting using the system-wide config
file" so that it's grayed out.

We'll also go to the "Extras" tab, and on the "Extras" tab we also want to "Disable ‘Make Firefox
the default Browser' button." This will disable the button. For all the options here, we must right
click and also "Lockdown this setting using the system-wide config file."

When we do this, we'll go over to the target machine. We'll run "gpupdate," wait for Group Policy to
finish, close this out and go ahead and rerun "Mozilla Firefox." The result: you see instantly no
more pop-up. If we go to "Options" here and go to "Advanced," we've unchecked the checkbox and
grayed out the button "Make Firefox the default browser."

In this video, we're going to use PolicyPak to turn off private browsing. Let's see what our Firefox
looks like by default. If we go to Options, there's the "New Private Window" here, which is also
"Crtl+Shift+P," "Private Browsing." I'll also show you "Crtl+Shift+P" for "Private Browsing." Let's
use PolicyPak to make that go away.

We'll just simply "Turn off private browsing," and we'll enter that into the GPO. Go over to the
target machine, run "gpupdate" and wait for that to finish. We'll close out this window, rerun
"Mozilla Firefox" and there is no button there for private browsing. If I hit "Crtl+Shift+P," no
private browsing.

In this video, we're going to use PolicyPak to "Always clear saved passwords" between sessions. By
way of example, if you're on any given website that has a garden-variety logon, for instance if I
log on as "jeremym@policypak.com" to this website, Firefox would cheerfully ask if you want to
"Remember Password," which is not good.

If you were to "Remember Password" here and then you were to even "Logout," close out the browser,
come back in and go back to the same website, Firefox has it built in where it's remembering your
password where with zero effort and just one click, you can sail right through to the website –
definitely a security concern.

What we're going to do is we're going to shore this up using PolicyPak. Let me go ahead and close
out the website. Inside the PolicyPak for Firefox, in our "Extras," we're going to "Always clear
saved passwords." We want it checked.

Now that it's in the GPO, we'll go over to our target machine, run "gpupdate" and wait for Group
Policy to process. Now that that's finished, we'll go ahead and close that out. Let's rerun "Mozilla
Firefox" and go over to that Web page.

If we go to "Customer Login," you can see that the password isn't there. You can put in the e-mail,
but the password is not saved. If you do choose to "Remember Password," the next time you close out
the browser and come back into it, it doesn't matter because with PolicyPak here engaged in the
machine, you can see that the password is not remembered. There you go. Therefore, we've closed that
security hole.

In this video, we're going to disable safe mode in Firefox using PolicyPak. To get to safe mode, you
simply hold down SHIFT and double click on "Mozilla Firefox." You'll see that there's a dialogue
here that says you're in "Firefox Safe Mode," so you can "Start in Safe Mode." If you don't want
users to be able to do this, it's one click away in PolicyPak.

Simply using the Firefox Pak in the "Extras" tab, we're going to "Disable safe mode." There we go.
We'll go over to our target machine and run "gpupdate." We'll wait for this to finish. Close out the
window here, and now let's SHIFT, double click on "Mozilla Firefox" and "Safe Mode has been disabled
by your administrator."

In this video, we're going to show how to use PolicyPak to disable local file access. If you have a
file here, let's call it "hello.txt," and you put some stuff in it, "Hello World," by default,
Firefox will cheerfully let you type simply type in "c:\\temp\hello.txt" and get to that. What we're
going to do is use PolicyPak to prevent access to these kinds of files.

In the "Extras" tab inside the PolicyPak Pak, we're simply going to "Prevent access to local files."
That's all there is to it. We'll go back to our target machine. We'll run "gpupdate" here, and we'll
wait for Group Policy to process. Now that that's done, just to prove a point that the file is still
there.Let's go ahead and take a look inside "Mozilla Firefox" and do the exact same thing:
"c:\\temp\hello.txt" and no more access. It's as easy as that.

In this video, we're going to completely disable Firefox sync. This computer is not domain joined
and not doing anything with Group Policy or PolicyPak. I just want to prove that on this computer I
can "Sign In" with my Firefox account. There we go. This is a regular computer, one that your user
might have at home.

If you go to "Options/Sync," you can see all these things that are syncing. If you click here,
"Manage," you also get the sync dialogue.You can also see "Sync enabled," "Firefox will begin
syncing momentarily."

Now let me switch over to this computer, one that is domain joined and is getting its directives
from PolicyPak, just to prove a point. If you go to "Options," you can see that the "Sync" is
"Determining your account status," or you could also go to "Sign in to Sync." These are two ways of
getting started with sync.I'm going to show you that using PolicyPak you can make that all go away.

If you "Turn off Firefox Sync" using "PolicyPak Application Manager," we'll go ahead and close that
out. We'll go over to our target machine here and run "gpupdate." We're going to wait for Group
Policy to finish. We'll go ahead and close this out. We'll go ahead and run "Mozilla Firefox"
here.Let's go right over to "Options/Sync," and you can see the whole thing is just blown off the
map.

If you do try to go to "Sign in to Sync," you're welcome to try. This is just a garden-variety Web
page at this point. A user is able to log on. If I give it the same credentials as I had, it will
cheerfully let you log on. But then if you try to go to "Manage" in the managed by PolicyPak
machine, nothing syncs.There you go. That's how to prevent synchronizing with Firefox using
PolicyPak.

In this video, we're going to learn how to use PolicyPak to remove or disable buttons within
Firefox. We've already done one. We've already used "Disable ‘Make Firefox the default Browser'
button." We're not going to do that one because I did that in the first little mini video.

But I do want to show you three at a time. For instance, here in Firefox under "General," the "Use
Current Page," "Use Bookmark" and "Restore to Default" buttons, let's go ahead and use PolicyPak to
remove those by simply clicking on them and then right clicking and selecting "Lockdown this setting
using the system-wide config file." We're going to ensure that all three are going to be removed.

Now that those are done, let me go ahead and click "OK" here. I'll go over to the target computer
and run "gpupdate" just to get these settings. Now that that's done, let's go over to "Mozilla
Firefox" here and let's see the result. Go to "Options," and all three of those buttons are removed.

Let's see what's next on the list. It would be "Advanced" and "Certificates." We have a couple that
are here: "View Certificates" and "Security Devices." We can get rid of those buttons as well, and
we can also actually manage "Validation." I'm not going to show that here, but that's just part of
the standard that we can do. I'm just going to get rid of these two buttons: "View Certificates" and
"Security Devices."

I'll go back here into the Pak and go to "Extras." We want to "Disable ‘View Certificates' button"
and "Disable ‘Security Devices' button." Again, they must be clicked on and also right clicked and
locked down ("Lockdown this setting using the system-wide config file"). We're doing both of those
items at the same time here.

Go back to the target machine and run "gpupdate." Wait for that to finish. We'll close this out.
We'll run "Mozilla Firefox." We'll go back to "Options," and there we go. Those two buttons are
gone. Like I said, for "Validation," underneath the hood are two settings that, in fact, PolicyPak
can manage. We'll go ahead and close this out.

Let's take a look at what's next on our list. If we go over to "Options/Update/Show Update History,"
we can get rid of this button as well. Let's see how we would do that. Right here in PolicyPak, go
to "Extras" and we can "Disable ‘Show Update History' button" and "Lockdown this setting using the
system-wide config file."

I'll run a quick "gpupdate" on this right here and wait for that to finish. We'll go ahead and close
that out, go back to "Mozilla Firefox" and go to "Options." The "Show Update History" button is
gone.

Let's look at what's next on the list here. Under "Options/Privacy/History," there are a couple of
buttons that are hidden until you select "Use custom settings for history." We're looking for
"Exceptions" and "Show Cookies." Let's go ahead and see if we can make those two items go away.

Using PolicyPak we'll go to "Extras" here. We'll click on "Disable ‘History->Exceptions' button" and
"Disable ‘Show Cookies' button." Once we've configured them, we also need to "Lockdown this setting
using the system-wide config file." We'll go ahead and do that.

We'll run "gpupdate" to get those settings. Let's see those get taken away by PolicyPak. We'll go
ahead and close this out and rerun "Mozilla Firefox." If we go to "Options" and we go to "Use custom
settings for history," there we go. We can see that those buttons are gone.

Let's see what's next on our list. Under "Security/Passwords," we want to get rid of "Exceptions"
and "Saved Passwords." Let's go ahead and do that. Those are here under PolicyPak "Extras." We've
got "Disable ‘Saved Passwords' button" and "Disable ‘Security->Passwords->Exceptions' button." Let's
go ahead and right click and "Lockdown this setting using the system-wide config file" as well.

Those are the last two, so let's go ahead and see PolicyPak take care of those.Wait for that to
finish. We'll go ahead and run "Mozilla Firefox." Go to "Options" here, and those are gone.

That's it. Thanks for watching this video to learn how to use PolicyPak and our "Extras" tab for our
Firefox Pak to manage all sorts of extras plus lots of buttons and controls.

Thanks. Take care.

If you're looking to get started, just reach out and give us a buzz.

Thanks.


