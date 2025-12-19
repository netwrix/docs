---
title: "Endpoint Policy Manager Scripts: Automate Software deployments with PP Scripts and Chocolaty.org"
description: "Endpoint Policy Manager Scripts: Automate Software deployments with PP Scripts and Chocolaty.org"
sidebar_position: 10
---
# Endpoint Policy Manager Scripts: Automate Software deployments with PP Scripts and Chocolaty.org

Want a quick way to deliver applications to your end users without having to bring up a server
infrastructure? Got remote workers and don't know how to service their software? Hook Chocolaty into
Netwrix Endpoint Policy Manager (formerly PolicyPak), and... bingo. You're done. Remotely install
just about any pre-packaged software from Choco's repository. And use Endpoint Policy Manager
Scripts to install or un-install. Couldn't be simpler.

<iframe width="560" height="315" src="https://www.youtube.com/embed/A2ksO8eQS5M?si=wO2E0UXxdmJmbfKj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz and in this video, we're going to talk about automating remote
installation of software from Chocolaty.org using Endpoint Policy Manager. Now what I'm about to
show you works across all of the Endpoint Policy Manager platforms, either the Group Policy edition,
the MDM edition, or the cloud edition, I'm just going to show you the Group Policy edition, but it
all works exactly the same. If you don't know that Chocolaty.org, it's a bunch of applications that
are pre-packaged and ready to rock. I've got the screen up here demonstrating their policy here that
describes that each of the packages kind of goes through a quality check with a human that verifies
it and goes through Virus Total and so on. That's pretty good. Of course, it may not be a perfect
system, but I just want to put that out there and show you how I like to use it.

Anyway, the point is that they have literally thousands of packages that you can choose from to
actually deploy, and I'm going to show you how to do it using Endpoint Policy Manager, but I want to
do a little walk before I run test, as I do in lots of my videos. I'm going to just show you how
Chocolaty works without Endpoint Policy Manager first and then we're going to add Endpoint Policy
Manager to it second.

So the first thing I'm going to do is I'm going to just run an ad admin PowerShell. This is
administrator. Now this administrative PowerShell. The first thing I want to do is I want to take
the Install Chocolaty commanded, which is a one-liner, that puts the Chocolaty guts in place. Hint,
hint, we're going to do this exact same thing using Endpoint Policy Manager in just about three
minutes from now. I just want to zip through that. There you go. You can see that the Chocolaty guts
are kind of getting installed as we speak and we'll kind of just give that a second to to finish up.

Then the second thing I want to do is try to install my first Chocolaty package. Now if you look at
the packages list, really, it couldn't be easier. You look at the package name and they give you the
command, and you copy and paste it in, and you're off to the races. Now, if you want to go one
little micro step further, there's a little bit of extra goo you can put on the end of a command
like the command can be --force and also force dependencies. So for instance, if I wanted to do
7Zip, which I already have here, so what I could do is I could take this lock, stock, and barrel or
I can paste in Choco Install, 7Zip install, --force, --force-dependencies-yes-yes. That's a lot of
dashes. The point is that this will forcefully do any kind of requirements behind the scenes that
maybe the package won't do naturally. By the time this is over – again, this is a walk before you
run with Chocolaty part first. By the time you're done, hey, look at that, 7Zip File Manager didn't
exist ten seconds ago, and it exists now. Look at that. It runs.

Now that we we've done the walk before we run test, now, it's time to do this all on Endpoint Policy
Manager land. What I'm going to do is I'm going to pause the video and revert back to before the
time that I had Chocolaty. Hang tight for a second. Okay, I'm back and I've reverted this machine
back. It ain't got no Chocolaty on it. So now we're going to do is we're going to go to our – this
is my management station here. I was actually play with this earlier, so I'm not going to use any of
those. I'm going to start from scratch, so what I'm going to do is create a new GPO and link it to
my users. Again, you can do this on the computer side as well. Again, you could do this in Endpoint
Policy Manager Cloud. You can take what we're about to do here and export it for wrapping up to MDM.
I'm just keeping it simple, and I'm going to do PPChoco Demo.

I've got my Chocolaty demo GPO. It's linked over to my east sales users and I'm ready to make a
little bit of magic. Now remember, the steps – the first step is I got to get the Chocolaty guts
deployed to either the computer side or the user side. Remember, how do we do this? We could only do
it when it was running with admin rights, ha ha. Well, Endpoint Policy Manager's Scripts Manager has
a secret superpower which we're about to use. If we go to Add a New Policy here, we'll then take
take that script that was on the Chocolaty website, which is just the the getting going started gut
stuff, and we'll take that PowerShell script and just paste it right in lock, stock and barrel
running it as a user but with elevated rights. That's the magic, so we can just kind of get that
running underneath the hood. We don't need a revert action and we only need to run this one time.
Once it's done, we're off to the races. So we'll call this Install Choco's guts and we're done.

Now the next thing is all about the applications. So we can add a new policy here and maybe what
I'll do is I'll just add a new PowerShell script and I'll go ahead and do that same 7Zip install.
Choco install 7Zip.install, which I got right off the website. Then I'm putting in a -force and the
-force dependencies and the –yes, once again running with elevated rights. Now that's the apply
action. Maybe sometimes you want to say goodbye to that app. How do we do that? Well, that's the
revert action, and that command is Choco uninstall 7Zip.install --yes, which means quiet in the
background and so on. I'm also going to run that thing with elevated rights. I'm going to just run
this one time and that's it.

If I were to do a 7Zip install and uninstall, I'll show both of these. I'll also do maybe one more
for good measure, so if I were to make a new policy here, something a little bit bigger – I'll do
Filezilla, which is actually a slightly longer download process. If I were to go to PowerShell
script – ooh, that's the uninstall for Filezilla. I need to grab this string for install. Bingo, so
Choco install Filezilla force, force dependencies, yes, and then do it with elevated rights. Then
the revert action would be, again, a PowerShell script take Filezilla and do Choco uninstall
Filezilla -yes yes yes. We'll run that with elevated rights and what we'll say here is once again
once and then we will say "install/uninstall Filezilla."

Now again, you could wrap this around item-level targeting, and you could say do this thing when I'm
on this IP range. For instance, when I'm in the office, install Filezilla. When I am out of the
office. Uninstall Filezilla. This totally works. You could also target it if you wanted to when it's
a particular name of a machine, so only deploy this when the computer name is a match or not on VDI
or whatever your scenario is. It totally works. I'm not going to do that not, just doing a quick
download here.

Now what we'll do is we'll go back over to our machine I'm already logged on. I don't have
Filezilla. I don't have WinZip, and I don't have the Choco guts. What I'm going to just do is run GP
Update and then take a minute break. It doesn't take too long. It does have to get through all them
first. Once it does, it downloads it directly from the internet. Now Choco has got its own internal
servers that you can set up if you want to. You don't have to use the common repository out on the
internet if you don't want to, nor can you, I think, if you're trying to do lots, and lots, and
lots, and lots of installs. You can set up your own repositories, but this is just a quick, simple 
way for me to demonstrate to you that you can use Endpoint Policy Manager scripts to automate the
software delivery of your packages to your target machines using Chocolaty if that's what you wanted
to do.

There we go. That was it. So you can see 7Zip and Filezilla. We could just go ahead and click it
here and there we go. 7Zip launches and if we were to go to Filezilla here, give that a second,
boom, there you go. If you wanted to be fancy, of course you could use Endpoint Policy Manager Start
Screen and Task bar Manager or File Associations Manager as well, and you can guarantee that the
icons are correctly in the right place here and in the task bar and also the file associations.
That's easily done. I'm not going to do that here.

The last thing I do want to, however, show is the uninstallation of these things, for instance, like
I said, if you are not in the office or the guy moves from sales to marketing or something like
that. I'm just going to unlink the GPO. If this were an MDM or a Endpoint Policy Manager Cloud
policy, the exact same thing would happen. The policy would simply update in the background. We'd
get the signal, and that signal we said is on revert, perform the Choco Uninstall of both 7Zip and
also Filezilla. We'll just give this a second to catch up and then we're not removing Choco's guts.
Remember that? We're simply removing the actual applications that we specified If we just wait a
minute or two, what we should see is that those applications should just peel right back.

Alright, so now that GP Update has been run, we just have to wait a minute or two for it to kick in.
What we're expecting to see here is when we go back to the Start menu here, what we're looking for
is that Filezilla is removed from F. Yep, that's gone, and 7Zip should be also removed here, too.
There we go; we can see that it's out of the recently deployed list because now it's recently
obliterated.

\

That's all there is to it. you can use Endpoint Policy Manager scripts to deliver the Choco guts,
the Choco install, and have a revert script that'll perform the Choco uninstall. I love this
solution I think it really helps out and gives you the ability to deploy software really quickly to
your endpoints no matter where they are. If they're working from home or whatever using Chocolaty.
Hope this helps you out. Looking forward to getting you started with Endpoint Policy Manager real
soon. Take care.


