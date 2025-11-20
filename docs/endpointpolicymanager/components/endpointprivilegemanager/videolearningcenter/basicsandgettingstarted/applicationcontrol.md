---
title: "Endpoint Policy Manager Application Control with PP Least Privilege Manager"
description: "Endpoint Policy Manager Application Control with PP Least Privilege Manager"
sidebar_position: 60
---
# Endpoint Policy Manager Application Control with PP Least Privilege Manager

You want Secure Application Control and to block malware and exploits. Endpoint Policy Manager
[https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html)
does this in a few clicks. You're in charge to specify what executables, scripts, Java, MSIs and
other types of files will run, or not. Block PowerShell and Command Prompt (CMD), and a whole lot
more.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Hy7Nnd_GeJk" title="Endpoint Policy Manager Application Control with PP Least Privilege Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### Endpoint Policy Manager Application Control with PP Least Privilege Manager

Hi. This is Jeremy Moskowitz, former 15-year Group Policy MVP and Founder of Endpoint Policy Manager
Software. In this video, I'm going to show you how you can use the power of Endpoint Policy Manager
Least Privilege Manager to do Endpoint Policy Manager application control. Sometimes that's
interpreted as white listing or black listing or just putting the smackdown on all thing you don't
want users to run.

Now it would be good if you had watched the previous video on this which goes over SecureRun. This
is kind of the next level of that. This is actually going to turn on even more thumbscrews than
that. Actually, also at the very end of this video I'll also talk a little bit more about SecureRun.
But let's go ahead and do things one-by-one.

I kind of have five little base hits of things I want to show you. The first thing is how to block
Command Prompt and PowerShell. Then I'm going to show you how to block all scripts and then maybe
run a particular script if you want to. I'm going to show you how to block Java, how to block MSIs.
And then I'm going to show you how to turn all the way down, just completely turn on all the
thumbscrews and block all executables and you can add back in the things that you would want to have
run. So I'm going to do those in that order. Again, blocking Command Prompt and PowerShell is going
to be first.

This is going to be kind of a longish video, so stick with me. You'll get to see all sorts of ways
you can do application control using Endpoint Policy Manager Least Privilege Manager.

I'm going to start off and "Create a GPO in this domain, and link it here" for my "East Sales
Users." I'm going to call this "PP App Control" or Endpoint Policy Manager application control.
Again, you're using the Least Privilege Manager component. You could do this either on the computer
side or the user side. I'm going to do this on the user side.

So I'm going to go to user side, "Endpoint Policy Manager /Least Privilege Manager" and I'm going to
build a couple of rules. The first rule is going to be "Add" a "New Executable Policy." We're going
to block PowerShell and PowerShell ISE. We're going to "Use combo rule" here. The combo rule is
going to say when it's anything named PowerShell ("Path") and also where the underlying "File info"
has that as well, that's when we're going to get you.

I'll show you what I mean. The first thing we're going to do is "Add/Add file" here. I've got the
"Path" because I can never remember where PowerShell lives. We're going to not just say where
PowerShell normally lives. We're just going to say anything "powersh." That's perfect actually.

That is going to nullify it, but that's only half of the battle. The second half is the actual "File
Info." We're going to grab that same information here by touching "powershell" executable. We're
going to say when the internal information is "Higher or Equals" "1," so any version of PowerShell
at all, "Higher or Equals" "1." We're grabbing that internal information. When now these two things
are true, we're going to "Deny execution."

We're going to do that exact same thing PowerShell ISE. We'll go ahead and "Add" a "New Executable
Policy" here and "Use combo rule." We'll say "Path" and "File info" again. We're going to say
"Add/Add file." Again, it can just be "powersh." Then the "File Info Condition," now we're going to
touch the ISE. So we'll go ahead and select "From EXE file" here. There it is: "powershell_ise." Now
if this thing is "Higher or Equals" "Version" "1" and "Higher or Equals" to "Version" "1," we're
going to "Deny execution."

Now before I test this out, let's go ahead and just see first can I run PowerShell as a mere mortal.
If I type PowerShell here, does "Windows PowerShell" run? Yes, it runs because I haven't run GP
Update. If I run "Windows PowerShell ISE," does that run? Yes, that runs also.

So now it's time to run GP Update ("gpupdate") and do a quick test here. Okay, let's give this a
second or two to finish up. All right, there we go. Let's try that again. Now if we try to run
"Windows PowerShell," what do we get? "This app has been blocked by your system administrator." If
we try to run "Windows PowerShell ISE," what do we get? "This app has been blocked by your system
administrator."

What if we were to try to take that "Windows PowerShell" and "Open file location" and what if we
were to try to take these things and try to "Copy here" to the Desktop and try to run it here? What
happens? You're still blocked. "This app has been blocked by your system administrator." It doesn't
matter. You can try to run any of these. They're all going to be blocked because we've grabbed that
internal information and the name and we're blocking it just like that. So goodbye to PowerShell.

We can also do the same magic trick for Command Prompt. So if we go to "Add" a "New Executable
Policy," again we'll "Use combo rule." We'll do it by "Path" and by "File info." We're going to
"Add/Add file" anything that's called "cmd." Then we're going to grab that "File Info Condition"
here, and we will get that "From EXE file." We'll do "`c:\windows\system32\cmd.exe`." We'll get that
guy. Now we'll say when it is "Higher or Equals" to "Version" "1" and "Higher or Equals" to
"Version" "1," "Deny execution." We're done.

Now this Command Prompt is going to stay open because it's already running before we actually got
that rule in place. I'm going to leave it open so I can keep running GP Update ("gpupdate"). But the
point is that when I try to run my next "Command Prompt" up here, watch what happens. I'll go ahead
and just wait for this to finish. As soon as I do, what do we get? "This app has been blocked by
your system administrator." If I try to run "`cmd`" this way, what do we get? "This app has been
blocked by your system administrator." It's blocked.

So we've now just smacked down one of the most important attack vectors that the bad guys can use
against you. Users don't need to get to PowerShell or Command Prompt. You've just done that in just
under a couple of minutes.

The next thing I want to do is talk about blocking scripts. Here's an example of a bunch of scripts
that are just bad. Now some of these scripts are going to be naturally blocked because we just
blocked Command Prompt. So if you try to double click this, it's going to try to run a Command
Prompt and that's going to be automatically blocked. ("This app has been blocked by your system
administrator.")

But not everything. For instance, this "JAVA – Malware," that's not going to be blocked until we put
the smackdown on it. Here's a JavaScript malware ("JS – Malware") that's also not going to be
blocked. The PowerShell malware ("PS – Malware"), if we try to "Run with PowerShell," what do we get
there? That's blocked. ("This app has been blocked by your system administrator.") This VBScript
("VBE – Malware") is not going to be blocked, and this "VBS – Malware" script is not going to be
blocked.

So what are we're going to do? Let's go ahead and block all scripts. How do we do that? Right click,
"Add" a "New Script Policy." We're going to "Use simple rule," "Path" where the path is anything. So
we'll just say "." So we're going to add "" so if it's any kind of script at all, we're going to
"Deny execution." Done.

Now we've just put the smackdown on all the scripts. Let's go ahead and test that out. We'll run GP
Update ("`gpupdate`") real quick. Give this a second to finish up. Okay, so now let's go down the
line again here. We already know the batch files ("BAT – correct" and "BAT – Malware") are
automatically blocked.

Let's take a look at this JavaScript malware ("JS – Malware"). Now that's blocked. ("This app has
been blocked by your system administrator.") Let's take a look at the VBScript Malware ("VBE –
Malware" and "VBS Malware"). That's blocked also.

But what about a particular script? What if you wanted a particular script like this "BAT – correct"
to be run? How would you do that? Well, there are a couple of ways. The first way is just to note it
by name. The name here is "BAT – correct." So let's just take that name. We'll go ahead and "Add" a
"New Script Policy" here.

We're just going to say "Path," and we're going to "Add/Add file" here. We'll give it the name "BAT
– correct.bat." We don't care where it is as long as it's called "BAT – correct.bat." We're going to
"Allow and log" it. So we're going to open up the doggy door and let this one particular batch file
run.

So before I run GP Update just to prove a point, it's being blocked. ("This app has been blocked by
your system administrator.") Now what I'll do is I'll run GP Update ("`gpupdate`") here. We'll go
ahead and give this a second to finish up. Okay, there we go. Now that this is done, let's try to
double click "BAT – correct" and it will run. That' good to go.

Now there may be a circumstance though where you want to make it so that users can try to run
scripts from your IT department. Let's say you have this scenario: "`\dc2016\share`" and here's an
"ITScripts." Well, is this thing going to run or is it not going to run? It's not going to run
because you said block all scripts except for the ones that you wanted to sanction.

So in this particular case, you're going to say if you want your IT script over there on the server
to open up, no problem. You're going to make a rule for it. You can do a folder rule or you can do a
file rule. I'm going to make a file rule for that.

I'm just going to right click, "Add" a "New Script Policy" here and "Use simple rule" based on
"Path" or the name. I'm going to "Add/Add file" and say when that file is my
"`\dc2016\share\ITScripts`" this particular batch file ("BAT – FromIT"), I can "Allow and log" it.
Or if it needs to run with elevated rights, you can say "Run with elevated privileges" which is what
I'm going to do here.

Now that particular batch file over there, right now it doesn't run. Okay, let's run GP Update
("`gpupdate`"). Let's give this a second. Then when GP Update is done, we'll rerun the script. This
script that lives over there on the server would normally be blocked because we said all scripts are
going to die except this one which is good to go. Let's go ahead and just give this a second to
finish up, and then we'll go ahead and run it.

Here we go. Double click and the script now runs because it's over there on the server. Then we'll
go ahead and "Let's try to modify" something that a standard user couldn't do. It's elevated and
"completed successfully." Then it will finish off the script when we're done, doing things that only
an admin would normally do but this script is running elevated.

So what we've covered so far is block Command Prompt and PowerShell. We're block all scripts and
allowing simply one script to run. I showed you two examples of that. I showed you running a script
that is local and I also showed you a script running over there. Once again though, if a user tries
to take this script and "Copy here" locally, is it going to run? No, it's not going to run because
it's not being specifically allowed.

The next thing I want to cover is Java, which is a pretty simple thing here. It's similar to what we
talked about before. Here are two Java apps. This is a malware ("JAVA – Malware") that we pretend
created. This "could have been malware." Here's a real app ("Java – Not Malware"). This is a real
Java application called "DMGExtractor."

If you wanted to make all Java go away, it's just two short clicks to do it. Right click, "Add" a
"New Java (JAR) Policy." "Use simple rule," "Path." We're going to "Add/Add file." We're going to
say "\*" and then we're going to "Deny execution" on all things Java.

If we wanted to permit the "Java – Not Malware" one, that's totally fine. We could do it by name, we
could do it by path and so on. I'm going to just block them all but if you wanted to, you could open
up the doggy door just kind of like what I showed with scripts. Simply either know the name, know
the file hash. If it's digitally signed, you can use that as well. All those ideas where you can
just open the doggy doors as needed. So let's see. Did we block all Java? Yep, for "JAVA – Malware"
Java's blocked. For "Java – Not Malware" is Java blocked? Yes, you've got it.

Let's continue down the road with MSIs. I have a couple of MSIs here as well. For instance, here's
"TerminalsSetup" MSI. You can see it would let me run this, and I don't really want to let users do
that. What about this "SkypeSetup"? Is that allowed? Yes, that's going to be allowed. I don't want
that to happen and so on. So what we'll do is that we'll just right click, "Add" a "New Windows
Installer Policy." We'll "Use simple rule," "Path" "Add/Add file" that says no more MSIs: "\*" "Deny
execution." Done.

Now just like that, let's go ahead and run GP Update ("`gpupdate`"). When this is over here, we'll
go ahead and retry our MSIs and see what happens. These three are MSIs. Let's go ahead and see what
happens after GP Update is finished. Here we go. Here's "SkypeSetup," and that's blocked. Here's
"TerminalsSetup," and that's blocked.

What's that? You want to open up the doggy door to let user install "SkypeSetup"? That's no problem.
What do you do? "Add" a "New Windows Installer Policy." You might want to "Use combo rule" again
that says when it's called ("Path") SkypeSetup and signed by ("Signature") by the Skype guys, at
that point go ahead and let it install.

So let's "Add/Add file" and browse for my "`c:\share`." We'll do "Apps To Manage," "DEMOS," and I've
got "SkypeSetup" here. So I'm just going to call it "SkypeSetup.msi." Then I'm going to use the
"Signature Condition" that says when it's signed by the Skype guys, I'm going to let that install
and "Run with elevated privileges" because Skype installer requires elevated privileges.

So right now you can see it's being blocked, but let me go ahead and run GP Update ("`gpupdate`")
here. Give this a second to finish up. When it does, "SkypeSetup" that was blocked – all these other
MSIs are just going to be completely blocked – but now "SkypeSetup" will not only run, it will
install just fine. So let's go ahead and let's see that happen. Double click it. There we go.
There's Skype setup, "Next," "Next," "Next." Right here ("Install") you would normally get a UAC
prompt, but because we're running it elevated we're able to overcome that as a challenge.

So I have one more thing to talk about. Remember, SecureRun is awesome. It separates what I call the
wheat from the chaff. Here's all the stuff that you installed as an admin, and here's all the junk
the people download as standard users. Now you already saw me do this in a previous demo, turning on
SecureRun. But if you want to go to the next, if you really want to go bananas – which you're
welcome to do, so if you want to, that's why we provide this – we have a preconfigured XML to help
you out.

Let me just close these windows out. We don't need these to get in the way. Now in the Endpoint
Policy Manager portal, we have some preconfigured advice for a bunch of different circumstances like
installing some stuff as admin or letting some things run as admin and some other circumstances. But
this one is special. We call it "Block Everything except Mandatory Processes." Let's actually go
through it one-by-one. Again, it helps if you've watched the SecureRun video, the previous one that
has SecureRun in it.

Let's start off with "Block-Everything." When you block everything, that's what "SecureRun" does.
Now SecureRun is only going to run when the person is on the list. If we take a look at this
particular policy though, we've selected "Enable" but we've got no "SecureRun Members."

We don't recommend you run like this unless you also do what's called "Allow-Mandatory-Processes."
These are things that we've identified that the operating system must be allowed to run. So we're
basically saying close every doggy door, but open up these very important things that let the
operating system do what it has to do.

Let's just stop right there and see this in action. Here's that Command Prompt, the last one we have
up and running here. It's still good until we close it and reopen it. I want to show you what
happens now when you turn this on. This is as turned to the right as you should probably get in
terms of how high-pressure you want to do this.

Now that we've done this, let's see what happens. Can any old application run anymore? No,
applications don't run anymore. You try to run any old application, no, it's not going to run
anymore. It doesn't matter who you are, what the story is. No applications will run anymore at all.

Now the thing is though you might have installed some applications correctly to certain locations
like Program Files or Program Files (x86.) That's great. So in that case, you might want to drag in
the last rule that says "Allow-ProgramFiles-Windows" right here. Let's go ahead and drag that in
here. Okay, so we've got that, so we're allowing program files.

Actually, that wiped out the other rule, so let's go ahead and rename this to "LPM add in Program
Files." Then working add in "Allow-Mandatory-Processes" again. There we go. We'll rename this to
"LPM run Mandatory Processes." There we go.

So now we're blocking everything, we're letting run the mandatory processes, and we're adding in
letting the Program Files and Program Files (x86) stuff run. So before, we saw all this stuff, all
the applications that we have installed are being blocked. If you want to be pretty hardcore but not
so hardcore that things won't run, this is a pretty good middle ground.

Now that we've run GP Update ("`gpupdate`") here, what have we got? Let's go ahead. Our garbage
applications, those aren't going to run. It doesn't matter what the story is. But now applications
that we've sanctioned because we know that we've installed them correctly to Program Files (x86) and
so on, those are going to run just fine.

So let's review all we did. Let's go back through the rules, and let's make sure we got it all
straight on how to use "Least Privilege Manager" for application control. We started off by creating
some block rules for things like PowerShell, PowerShell ISE, and also the Command Prompt. So you've
just blocked three big vectors like that.

Then we blocked every kind of script. Then we also opened the doggy door for a particular local
script and a script from the IT department. We blocked all Java stuff. We blocked all MSIs. We
opened up the doggy door again for a particular MSI to let that thing install if we needed to.

And then we cranked it all the way to the right and we blocked everything unless it's in Program
Files and also a handful of mandatory processes that we recommend that you use to keep the operating
system going.

This is how you would use Endpoint Policy Manager Least Privilege Manager to turn on all the
thumbscrews and make it as secure as possible so that the bad guys can't get a toehold in. And
that's about it. If you have any questions, we're here to help. Thanks for watching this kind of
long video, but I hope you get to the goal and that gets you want you need.

Thanks so very much, and we'll talk to you soon.


