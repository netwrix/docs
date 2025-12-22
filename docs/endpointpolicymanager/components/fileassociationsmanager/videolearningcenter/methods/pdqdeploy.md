---
title: "Setting Default File Associations with Endpoint Policy Manager and PDQ Deploy"
description: "Setting Default File Associations with Endpoint Policy Manager and PDQ Deploy"
sidebar_position: 30
---
# Setting Default File Associations with Endpoint Policy Manager and PDQ Deploy

PDQ is legendary when it comes to deploying applications. But when those applications are deployed,
the file associations you expect still don't magically work. That's why you should check out
Endpoint Policy Manager, and the Endpoint Policy Manager File Associations Manager. With Endpoint
Policy Manager File Associations Manager, after your applications are deployed, it's only a few
clicks to get ALL of your associations handled. Check out this video to see how to map everything
from Acrobat Reader to Outlook.

<iframe width="560" height="315" src="https://www.youtube.com/embed/sEErDOmFNuk" title="Setting Default File Associations with Endpoint Policy Manager and PDQ Deploy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Setting Default File Associations with Endpoint Policy Manager and PDQ Deploy

Katie: Hi, I'm Katie.

Jeremy: Hi, I'm Jeremy.

Katie: We're here to talk to you about setting file associations by default using Endpoint Policy
Manager and PDQ Deploy.

Jeremy: That's right.

Katie: We've all seen this before. You have a PDF and…

Jeremy: What opens?

Katie: In Windows 10, Edge.

Jeremy: Everybody loves that, right?

Katie: No.

Jeremy: No. What do people really want?

Katie: Probably Adobe Reader.

Jeremy: I think so too.

Katie: Usually do. We have another example. Over here we have a video. Chances are you are expecting
that to open up in Windows Media Player.

Jeremy: Or something that you want like maybe VLC Media Player.

Katie: Yeah. And last, you want to send an e-mail to somebody by clicking on a MAILTO: link. "Yes,"
we would love to send some mail, but we didn't really want it to open up in Window 10 Mail.

Jeremy: Probably Outlook or Thunderbird or something like that, right?

Katie: Yeah. So we're going to show you how to deploy the applications so they're installed on your
target machines and then set the file associations with Endpoint Policy Manager.

Jeremy: That sounds great. Why don't you go first. Let's have you deploy Acrobat Reader, VLC Media
Player and Thunderbird to "WIN10COMPUTER1."

Katie: Yeah. So I've got my three packages here from the "Package Library," all the latest versions.
We're going to "Deploy Once" to "WIN10COMPUTER1."

Jeremy: Great. If I wanted to do this on 100 machines at once, that's easy to do, right?

Katie: Oh, yeah. You can pick them from inventory, Active Directory. You can pick them from
anywhere.

Jeremy: Great.

Katie: One machine is easy to type. We're going to deploy those guys.

Jeremy: Just wait for this to finish, and we're off to the races, right?

Katie: Yeah.

Jeremy: Okay. Well, while we're doing that, why don't we get started with the Endpoint Policy
Manager part. We'll just leave this in the background, if that's okay.

Katie: Yeah.

Jeremy: We'll head over to our management station. Now to save a little bit of time, I preinstalled
those same applications on my management station. However, if you have a weird scenario where you
want to take some other machine that you don't have an application preinstalled, we have that
covered too. That's a different video.

We'll go ahead for our Endpoint Policy Manager computers here, let's "Create a GPO in this domain,
and link it here" and call it "Everyone wants these associations."

Katie: Just to be clear, this "WIN10COMPUTER6" would be like your machine or wherever you manage
your Group Policy from currently.

Jeremy: Exactly right. Wherever you have the GPMC, you have the Endpoint Policy Manager management
console built right into the GPMC right here.

We'll do this on the computer side. We'll go to "Endpoint Policy Manager" and we'll go to "File
Associations Manager for Windows 10." If you ever tried this on Windows 7, it was really pretty
easy. On Windows 10, it's like near impossible, which is why we try to make it drop-dead easy.

What we'll do is we'll click "Add" a "New Policy" here. Most people don't know what I'm about to
say. PDF is not the only thing that Acrobat Reader can do. If you say "pdf rule" by way of example
and just type "pdf" here, we're going to note when we click on "Select Program" we're going to look
at all the things on this machine that claim they can do PDF. It turns out there are a couple of
things that can do that.

But I'm going to go the next mile. Actually, I don't want to just do PDF. I want to all the things
Acrobat Reader can do.

Katie: You're going to do all of its defaults.

Jeremy: All of it. Exactly. You got it right. Select "Add" and then select "Add Policies for Product
(wizard)." I'm going to pick the same application, so "Simple Mode." We'll pick "Adobe Acrobat
Reader DC." It's not just PDF. It's like seven things. Look at all these things that Acrobat Reader
really wants in order to be perfectly associated. We'll "Check All" those guys. Click "Next." We
make a little collection for you and click "Finish" and you are done. If we look inside here, we've
got all seven ready to go.

Let's talk about VLC Media Player next. Let's do that exact same step for VLC Media Player. We'll do
"Add" and then "Add Policies for Product (wizard)." We'll click on "Simple Mode" here. We'll pick
VLC. It's probably toward the bottom, so I'll just type it out: "vlc." Take a guess. How many
associations does VLC Media Player have?

Katie: Oh, it can have so many.

Jeremy: "So many." That is a perfectly fine answer. Let's take a look. It is a freaking lot of them,
so we'll just click on "Check All," click on "Next." We've got the little thing ready to go here.
Click on "Finish." Let's take a look at the actual number when we click on it here.

Katie: Let the computers do my counting.

Jeremy: Yes. We go all the way to the bottom. It's so many: mp4, mp3, etc. It's 125 things they
claim that it can do.

The last thing we said we wanted to do was to change over the mail program from the Windows internal
mail to something more graceful. We'll go to "Add" a "New Policy." This will be a simple one. This
is actually not an association. This is a network protocol. We'll call this "mailto rule." Then
we'll make "Network Protocol" here, and we'll call this "mailto."

We'll "Select Program." Again, on my machine – the machine I'm on – we're going to figure out what
applications claim they can do mailto rules. There we go. We'll go ahead and pick "Thunderbird" as
our thing. We have a customer that says, "We're going to the all Google channel. We're doing the all
Google thing." Sure enough, if you want to make "Google Chrome" be you're mailer, it will absolutely
do that. We're going to use "Thunderbird" in this example. Click "OK" and we're ready to go. It's as
simple as that.

Can you tell me if the package has made it there?

Katie: Sure. Let's pop open Deploy and look.

Jeremy: Go ahead. Let's pop open Deploy and look.

Katie: We're back over here.

Jeremy: I can see, yeah.

Katie: It looks like we are about partway done with Thunderbird.

Jeremy: Okay, so we still have Thunderbird in the wings. While that's cooking with gas, let's take a
look at it from another angle. Let's go to "Control Panel" because I like to see it this way because
I'm an old-school guy.

Katie: Probably by the time we get that open, we should see Thunderbird installed.

Jeremy: Almost there. Not quite. Okay.

Katie: All right. It looks like all of our deployments are done here. We have "Adobe Reader," "VLC
Media Player" and "Mozilla Thunderbird" all successful, all done.

Jeremy: Nice. Super nice.

Katie: Yeah, so let's go back over to the computer and look at the Control Panel.

Jeremy: I would love to do that. Let's go back to "Control Panel" here. I like to check it out
because I'm an old-school kind of guy. Yes, I see all the things that I am expecting.

Now in order for this policy to kick in, two things have to happen. The first one is you have to get
the actual Group Policy Object down to the machine.

Katie: It has to apply.

Jeremy: It has to apply first. This one is a little extra special. You have to log off and log back
on to see the actual final results. So we're going to get the GP Update ("gpupdate /force") first,
log off, log back on, and then we're going to see the final results in play here.

We'll wait for this to finish. We'll then go ahead and close the window and then log off. There we
go. We'll go ahead and log off here. We'll "Sign out." Then we'll go ahead and relaunch
"WIN10COMPUTER1." I think I know the password. I have a little cheat sheet here. Here we go.

Katie: That's good because I don't know that password. I do like the account name though:
"toni.blurp."

Jeremy: All right, now we're logging back on and just like that.

Katie: Everybody's changed.

Jeremy: Let's go ahead. PDF, do you think it's going to launch the right thing? It certainly looks
like it.

Katie: Yeah. Right icon right there.

Jeremy: Yeah, that looks like the right thing.

Katie: That's promising.

Jeremy: There we go. Acrobat Reader is doing good. Now you can even see the little VLC Media Player
kicking in right there, and there we go. There's VLC doing its thing.

Katie: Check that out.

Jeremy: Then finally, mailto. We're going to click on the link. Before, it was running Windows Mail,
and now Thunderbird. There we go.

So just like that, you can use PDQ Deploy to deploy the applications you want on your endpoints and
use Endpoint Policy Manager to do the magic to marry the right association to the right file type.

Katie: Yeah, so simple.

Jeremy: So simple. That's it for us.

Katie: I'm Katie.

Jeremy: I'm Jeremy. Thanks for watching.


