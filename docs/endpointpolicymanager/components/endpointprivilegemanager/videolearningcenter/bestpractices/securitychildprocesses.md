---
title: "Security and Child Processes"
description: "Security and Child Processes"
sidebar_position: 40
---
# Security and Child Processes

<iframe width="560" height="315" src="https://www.youtube.com/embed/GsydgID-lo4?si=AlDDSH1Iwu4CtYHZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Transcript:Security and Child Processes

Hi. This is Jeremy Moskowitz. In this video, we're going to talk about best practices with regards
to security and PolicyPak Least Privilege Manager.

To set the stage, PolicyPak Least Privilege Manager, like I say, is a sharp scalpel and it will do
exactly what you tell it to do. Because of that, you should be always thinking about how to give
your users the least amount of privileges possible.

Now we're going to talk about that in excruciating detail, but I want to set the stage by using a
typical application like "Adobe (Acrobat) Reader" here just to show you something that you may not
even know you could do.

Now before we even go into that, I also want to show you something you can do in "Task Manager." If
you click on the "Details" tab in "Task Manager," you can see your running applications and if
they're "Elevated" or not. Now I don't have Least Privilege Manager elevating this application right
now, and as such it says "Elevated" "No." Okay, great.

Now some applications like Acrobat Reader and a lot of other applications enable you to go to places
like "My Computer/Browse." And then you can go to things like "c:\\windows\system32." If you type
"\*" here to get all the items and then zip on down to the Command prompt ("cmd"), you could right
click and "Open."

Now remember, you're not elevated, so running a Command prompt from this "File/Open" window within
"Adobe Reader," what's that going to do? That's going to just create a standard Command prompt. If
you were to try to right click, "Run as administrator," you're going to UAC credentials. This is
fine. Again, no PolicyPak involved at this stage.

What I want to show you next, however, is if you were to go ahead and try to elevate an application
that has a File/Open dialogue like this. So I'm going to "Add" a "New Executable Policy." I'm going
to "Use simple rule." I'm just going to use "Path" for now.

Most of the talk we're going to be talking about a little later is here around these "Settings,"
"Apply to child processes" and these other little guys. Hang tight. That's going to be the main
focus of our talk.

But just to get it started here, I'm going to "Add/Add file." I'll just use "\*acro\*.exe." So now
I'm going to just say anything called "acro" reader whatever, that's going to "Run with elevated
privileges." And we're off to the races.

Let's do that exact same thing we did earlier. I'm going to run GP Update ("gpupdate") here. Then
after this is done, I'm going to rerun Acrobat Reader. What we should see is that Acrobat Reader is
now elevated because of Least Privilege Manager. Then let's do that exact same test again. Let's see
what we get this time.

We go run "Adobe (Acrobat) Reader." Go to "Open." Actually, before we do that, we can see "AcroRd32"
is in fact elevated. If we were to go to "My Computer," "Browse," and go to "c:\windows\System32"
and we'll type "\*" again. Go back to the "cmd" prompt, or any other application. I'm just using the
Command prompt as an example here. Right click and "Open."

Now remember, we're running elevated. When we click "Open," what's going to happen? It's set as an
"Administrator" Command prompt which enables you to do things like "net start" and stop. If I want
to do "net stop ‘windows audio,'" this is something that can only be done if you're an admin. So
this Command prompt is running with admin rights.

Now if you're having a little panic attack, don't have a panic attack. The ability to change this
behavior has always been in PolicyPak the entire time. All you need to do is when you click on the
"Conditions" here, you can just say don't "Apply to child processes."

When you unselect "Apply to child processes," what happens next automatically – let me go back to GP
Update ("gpupdate") here – now what we're saying is any processes that get launched from that
initial parent process are going to not inherit those rights.

Let's do this exact same demo again. Go back to "Adobe (Acrobat) Reader." Acrobat Reader itself is
in fact elevated as you can see here. We'll go to "Open," go to "My Computer," "Browse,"
"c:\windows\System32," and go back to Command prompt here ("cmd"), the application itself is still
elevated.

But now if we were to try to go to right click and go to "Open," what do we get? Standard Command
prompt. If we try to do "net start" or stop, "net stop ‘windows time,'" for instance, you will not
be able to do that because you are not running with admin rights.

So you have this ability to block applications from spawning other processes right there. So it's on
by default. Why do we have it on by default? Why do we enable the ability to spawn other processes
as admin by default? Because there are times in applications, even Acrobat Reader actually is a
pretty good example.

When you go to "Help/Check for Updates," how is the process going to run? How is "Check for Updates"
going to run from this parent process? If you go to "Check for Updates" and it's being told that it
can't do it in elevated fashion, that's going to fail.

So our default behavior, if we go back here, as you saw earlier is to set it such that it will
"Apply to child processes." So it will automatically apply to child processes. Now again, at any
point in time you can just uncheck that provided your application is suitable to do so.

Now there are a couple other extra security mechanisms that are available to you if you want to turn
the different thumbscrews. So even though you're going to by default "Apply to child processes," you
can also make some choices about when things will not be able to inherit the permissions.

For instance, "Don't apply to unsigned executables." Let's try that one. What's an unsigned
executable? An unsigned executable, for instance on my Desktop here, would be this guy, this program
called "CamPlay." "CamPlay" has no digital signature, and you would know that because it would have
a Digital Signatures tab. Unlike "Procmon" which does have a "Digital Signatures" tab. So therefore,
"CamPlay" is not digitally signed.

Let me go ahead and run GP Update ("gpupdate") and let me try to attempt now, now that I've made
that settings change in Group Policy and PolicyPak Least Privilege Manager, to try to run "CamPlay"
elevated. So again, we're going to use the trusty "Details" tab here.

Let me go ahead and run "Adobe Reader" and we can see that it's running elevated. Go to "Open" and
"My Computer" and "Browse" and go to "c:\windows\System32." Actually, no, that's not what I want to
do. I want to go back to the "Desktop." Here's "CamPlay." Right click and try to "Open" it.

Now if it were digitally signed, it would run elevated. But you see it's not digitally signed, so
it's not running elevate. If I were to try to "Run as administrator," it still will not run
elevated. Okay, it's still not running elevated.

But an application that is digitally signed, for instance "Procmon," right click and "Open." What's
going to happen? It's running elevated. Procmon is running elevated automatically. There we go.
"Procmon" is running elevated because what we told Least Privilege Manager to do was only do the
prevention of passing permissions to "unsigned executables."

So what I think we should do next is take this to the next level and talk about the idea of
"untrusted executables" and "executables signed by other publishers." Let's start with "Don't apply
to executables signed by other publishers."

What does that mean? Well, as you might imagine, Acrobat Reader is signed by Adobe and Process
Monitor (Procmon) is a Microsoft tool and signed by Microsoft. So now let's rerun Command prompt
here and run GP Update ("gpupdate").

So now what we're saying is if you start off life in Acrobat Reader and you try to jump the fence
over to a different publisher altogether, then block that action. Let's go ahead and just see it
work, and then we'll talk through that a little bit more.

Let's go back to "Adobe Reader" here, "Open," "My Computer," "Browse," and again on my "Desktop"
here, there we go. Now Process Monitor ("Procmon") signed by Microsoft, right click and "Open." What
are we going to get? We are not going to be able to make the jump to running with admin rights. Same
thing if I were to try to right click again and "Run as administrator." We're blocking that.

Why would you maybe need to have this on or need this off? It's possible that Acrobat Reader maybe
calls something else by the same publisher in order to get its job done. So in that way, you may
want to apply it to executables signed by the same publisher which is the default behavior. Like I
said before, if Acrobat Reader is trying to do its own updates or something like that, you may want
to ensure that it's always going to be able to do that. But you don't want to "apply to executables
signed by other publishers."

Next on the docket here is "Don't apply to unrelated executables." That means not in the same folder
or recursive. And there's a little tool tip to help you remember that. So for instance, if I "Don't
apply to unrelated executables" here, you're going to see basically the exact same here. The demo
will not be any different. But what we're saying here is you started the process off in Acrobat
Reader land. You're trying to jump to a different folder like the Desktop. You're trying to run an
application from there. What are we're going to do? We're going to block that from occurring.

So let's go ahead and try that one out. If we go to "Open" and go to "My Computer," "Browse," go
back to the "Desktop" and show everything on the Desktop here, we can then try to rerun "Procmon"
and "Open" it. What's going to happen? It's going to be blocked. And other processes that we start
are not going to be running with admin rights even if they run at all. They're just going to be
running with standard rights.

The last one on the docket is a little bit more advanced which is why I'm saving it for last. The
idea about this last guy here, "Don't apply to untrusted executables" here, it's job is to help you
look at the file owner and if it's not on the regular SecureRun list – which is to say trusted
installer, a local admin, or somebody who is on the SecureRun list when SecureRun is on – then it's
not going to let it run with admin rights. So also a pretty good idea.

So long story short, it is definitely going to be your best case to have all of these checked. Well,
actually, your best and most secure would be to never try to "Apply to child processes." That is
actually your most secure because in this way there's no other way for that application to elevate
into foreign applications.

But again, if this is required, you may try to turn the additional thumbscrews on, on purpose, to
then see if that application can be contained enough such that it is within control and doesn't need
to jump out to try to apply to things like "unsigned executables," "untrusted executables,"
"executables signed by other publishers," or "unrelated executables."

With that in mind, this is your security lecture of the day. I hope this helps you out and,
therefore, you're using Least Privilege Manager to do that job, to do the least amount of privileges
possible. So again, whenever possible uncheck "Apply to child processes." But if you do need to
apply to child processes, at least you have these extra thumbscrews to turn such that your users
can't jump out and run additional processes that you do not want elevated.

All right, hope this helps you out. Thank you very much, and talk to you soon.


