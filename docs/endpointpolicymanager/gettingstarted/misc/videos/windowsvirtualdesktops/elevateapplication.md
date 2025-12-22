---
title: "Endpoint Policy Manager + WVD: Elevate application inside WVD and bypass UAC prompts"
description: "Endpoint Policy Manager + WVD: Elevate application inside WVD and bypass UAC prompts"
sidebar_position: 30
---

# Endpoint Policy Manager + WVD: Elevate application inside WVD and bypass UAC prompts

Sometimes and app won't run unless you're running with local admin rights. NOT a good idea with WVD.
Instead, use Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager to elevate
applications when needed, and keep Standard Users just that... users and NOT admins.

<iframe width="560" height="315" src="https://www.youtube.com/embed/7jd800gl6gU" title="Endpoint Policy Manager + WVD: Elevate application inside WVD and bypass UAC prompts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi. This is Jeremy Moskowitz, former 15-year Group Policy MVP and Founder of PolicyPak Software. In
this video, we're going to talk about a Windows Virtual Desktop problem that you can overcome with
PolicyPak Least Privilege Manager.

Now this application is being run with Windows Virtual Desktop, and parts of it are going to work
just fine when you are a standard user, as you can see here. But then other parts are going to only
work when you run this application as an admin.

The problem is that if you try to start it as an admin, let's go ahead and see what happens here if
we try to "Restart as administrator," what happens? You get a UAC prompt, and the last thing you
want to do is to give admin credentials to standard users doing things on your Windows Virtual
Desktop machines. That's a terrible idea.

But instead, you can use PolicyPak Least Privilege Manager to elevate these applications to let them
run with admin rights instead of the user running with the scissors all the time with full admin
rights.

What we're going to do is use our management station. This is my GPMC management station. For my
"Sales > East Sales > East Sales Users" here I want to right click and "Create a GPO in this domain,
and link it here" and call it "Let WVD users run SOME apps as elevated." There we go.

Now here is the GPO that I want. I'll go ahead and click "Edit" here, and I'll dive down. I'm doing
this on the user side. So if I go to user side, "PolicyPak," I'm going to hit "Least Privilege
Manager" component on the user side because I want all of my East Sales Users to be able to perform
this.

I'm going to right click and "Add" a "New Executable Policy." What I'm going to do is "Use combo
rule." A combo rule says look at the digital "Signature" and the inner "File info" for applications
that you want to match, and only elevate those.

The other thing that I want to do here is uncheck "Apply to child processes" because if that
application has a way for that user to break out and elevate another application, we don't want to
give the keys to enable that. So we're going to turn that off for safety. Go ahead and click "Next."

We're going to select "Select reference file" "From EXE file" which is "TreeSizeFree" which I happen
to also have on this machine to make things go a little bit easier. You can see it's signed by "JAM
Software." The "File Info Condition" is if it's "Higher or Equals" this version, then I what I want
to do is "Run with elevated privileges." Now I'm off to the races.

Now to be clear, this probably won't work the very first time you try to run it again. In fact, I'll
show you why. If you go ahead and try to run it one more time, it will be exactly the way it was
before we got started on our journey. Which is to say it still might know that you need to run it
with admin rights. Sure enough, no change. So again, it still works as a standard user, but it
doesn't know that you need to run this application with admin rights.

Why is that? What's going on here? Well, what's happening here is that the Windows Virtual Desktop
that I'm connected to doesn't know that I need to drop off. Once you make your Windows Virtual
Desktop connection here, you have a bunch of processes and things that you're doing. So what you may
need to do is to forcefully "Disconnect" them or just naturally wait for that user to go home or
wait for that session till you finish up.

But I'm going to forcefully "Disconnect user" to end that session here, so now that it's
disconnected in full—oh, actually I meant to "Sign off." That's what I want to do, completely "Sign
out user." So that guy, now he's completely neutered, so there we go.

Now with that in mind, I'm ready to now run that same application because now what's happening is
when you instantiate your session in creating that session again, that's when Group Policy kicks
back in. That's when PolicyPak Least Privilege Manager is going to kick in.

Now at this time, this application you can see here no more checking to see if you're an admin. Now
you are in fact running as an admin. So if you want to "Select Directory" and pick the entire C
drive, it's going to do its thing just the way we expect. So there we go.

Okay, well, with that in mind, I hope this helps you out and gets you past a bunch of least
privilege problems using PolicyPak Least Privilege Manager.

Thanks so very much for watching and talk to you soon.

