---
title: "CUGC Connect Endpoint Policy Manager + Citrix Demo You Gotta Try This!"
description: "CUGC Connect Endpoint Policy Manager + Citrix Demo You Gotta Try This!"
sidebar_position: 40
---
# CUGC Connect Endpoint Policy Manager + Citrix Demo You Gotta Try This!

For more helpful content, visit [www.policypak.com](https://www.policypak.com/) or join the Citrix
User Group Community at [https://www.mycugc.org/](https://www.mycugc.org/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/WcmzBCoZavo?si=0cbuN4FMuJ67ddjq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### CUGC Connect: Endpoint Policy Manager plus Citrix Demo – You Gotta Try This

Stephanie: Hello, everyone. My name is Stephanie Boozer. I'm with CUGC HQ, and I am happy to welcome
you to today's Connect Webinar. This is our first with PolicyPak. I'm happy to welcome them to our
webinar series and excited to see what they have for us today.

Before we get into it, I want to introduce our moderator. Carl Webster is a CTP Fellow and a Senior
Solutions Architect. You can follow him on Twitter @carlwebster. He is going to keep an eye on the
questions for us, so please type those in the question panel in your GoToWebinar control panel.
He'll either break in and ask them as they pop up, or we'll save some to the end. It just depends on
what your question is.

With that, I'd like to turn things over to Webster to say hello and introduce our speaker today.

Webster: Well, hello. Good day, and thanks for attending this webinar. I'm Webster. I have the
website CarlWebster.com, The Accidental Citrix Admin. Some of you may be familiar with the
documentation scripts I provide for free to the community. Thank you very much for using those.

I'm very excited about this webinar because this Jeremy is just one smart guy. Not only is he a
smart ass, but he's a very smart guy. And the PolicyPak software, I get excited about very few
things in life. There are very few pieces of software that really excite me and actually make me
want to put a sticker on my laptop. PolicyPak is one of those pieces of software.

You really owe it to yourself to pay attention to what Jeremy is going to show you and tell you
about his software. The software is awesome and will make your life as a Citrix admin or engineer or
architect much easier. This is stuff you've just got to try. This is Webster approved. This software
has the Webster seal of approval.

With that, I'd like to introduce you to my longtime friend and Group Policy mentor, Jeremy
Moskowitz. Jeremy, take it on.

Jeremy: Thank you very much. That was super awesome. That was great. I really appreciate that
amazing intro. What we'll do is you're going to be them. You're going to have questions like they're
going to have questions. So as questions come up in your brain, Webster, you just pop on in. I don't
care where I'm at. I could be in the middle of sentence. You've got full reign to just jump in and
ask the questions at any time.

Webster: All right.

Jeremy: I plan to bore everybody to death for a very few slides. We have to set the stage a little
bit. Then we'll dive into real demos, making stuff work, probably break some stuff. That will be
super fun for everybody.

If you don't know who I am, again, Jeremy Moskowitz, former Group Policy MVP. I run GPAnswers.com.
Probably some of you are members of GPanswers.com. And also Founder of PolicyPak Software.

Sometimes people ask me, "Where did PolicyPak come from?" I was doing a talk at TechEd one year, and
someone raised their hand in the back and asked, "Why doesn't Group Policy work for stuff that's not
in the box from Microsoft?" And I was like, "I'm going to get that built."

I can't build it myself. I have a computer science degree, but I'm not a coder. But I do know Group
Policy pretty darn well. With that in mind, I was able to find all the things that Group Policy
doesn't do well and all the things that just couldn't be done any other way and round them all up in
one place, and we give it to you guys.

The good news is you don't have to make any decisions when it comes to making PolicyPak except for
one, which is what edition do you want. Almost everybody here will almost certainly be using the
Group Policy Edition. It also works if you don't like Group Policy. You want to use SCCM or Altiris
or whatever? That's great. We call it the Group Policy Edition, and that's totally fine. We also
have the MDM Edition if you're flirting with Intune, Airwatch or MobileIron. We also have this thing
called the Cloud Edition, which is great if you're a small shop and you need to deal with multiple
customers at once.

Let's talk about what PolicyPak is not. We're not a handy collection of ADM files. It's not just
some bunch of stuff you could probably build yourself because it's programming that we've done here.
We're not trying to replace Group Policy or Group Policy Preferences in-the-box stuff. We're not
trying to replace SCCM, LanDesk or your big old management tool. We're not trying to replace MDM
like Intune, Airwatch or MobileIron.

And we're not sold separately. So if you like one of the things you see here and you're like, "Oh,
my gosh, I want to buy just the Java Rules Manager. That's great," we don't sell it to you
separately like that. That's just not how it works. You can see you get all the components. When we
have new components, we just give it to you and you're in the club. You're a customer in good
standing, and you get it just like that.

Here are some of the challenges I see that people have all the time. The first one is about desktop
and rolling out big things in the first place, which is you've rolled out your desktop and that's
great but now users start to drift from your configuration. If I just uncheck this checkbox, I can
get past the proxy. Why are things asking for upgrades? If I just uncheck this checkbox, I can get
around the site list exceptions.

The idea is you need to have a way to layer your settings and decouple that from your actual
rollout. If your rollout is Citrix, if your rollout is desktop, if your rollout is VDI, if your
rollout is non-domain joined machines – whatever it is – you need a way to decouple your image or
your computer, basically, your applications from the settings.

We have a way to dynamically deliver the heck out of pretty much every application's settings –
Firefox, Flash, Java, Internet Explorer, Chrome and so on – dynamically giving what I like to call
your settings of the moment. If you change your mind two days from now, what are you going to do? Go
back and rebuild that gold image? No. That's a terrible idea. Instead, flip a switch in Group Policy
and get on with your life and go get a beer. It couldn't be simpler.

How about getting out of the local admin rights business. You might think I am out of the local
admin rights business, and that's great if you are. But if you aren't, that's obviously not good.
You don't want to have users running with the scissors all the time. That's a terrible idea.

So then you remove local admin rights and you're in what I like to call the ditch. They still need
local admin rights because some application won't run or they can't install their own printers or
fonts or they can't install a key application like iTunes or UPS Quick Ship or something like that
without wrapping it up as a package or something like that. That's terrible. You do not want to be
involved in that transaction.

Sometimes, you want users to have opportunities to do things like an admin but not actually running
with admin rights. So we're going to elevate certain applications and situations during our demo
today.

Stopping ransomware and other unknown software, this is a great thing. I don't think we're going to
have time for this today, so we have this on the website. The idea is that a user goes to a website,
downloads a portable app, and they get bitcoined. Nobody wants to be the guy who has to explain to
their boss what bitcoin is and how to buy it and so on. How do you block unknown software? Again,
probably not something we'll get into today, but it's a humongous benefit for you.

How do you map what I call the right browser and the right Java for the right website? I go to this
website and it's flipping me out. Well, yeah, because not every browser renders every website
perfectly. If you do a Google search for "why doesn't my website render perfectly in the browser," I
did it the other day, it's like 1.3 million. That's a hard problem to solve.

You have four browsers now: Internet Explorer, Firefox, Chrome and Edge. How do you open up the
right browser for the right website and also the right Java for the right website and block naughty
websites
([https://www.policypak.com/pp-blog/windows-10-block-websites](https://www.policypak.com/pp-blog/windows-10-block-websites))
and maybe turn Java off except for certain websites? What we can do is any browser routing and also
mapping particular versions of Java to a particular website. I know you have this problem, and we
will be demonstrating this today. You're going to love it.

When it comes to rolling out Windows 10, there are a myriad of challenges. One of the biggest ones
is managing file associations. You double click on a PDF and it opens in Edge and you're like,
"What?" Is that what we want? I click on an e-mail address and Windows Mail opens. How about this
one? You have Reader and Writer on the same machine.

If you've ever tried to do this with the in-box tools of Group Policy, you know how this works. You
walk up to a machine. You install every freaking application in the world on it. You then export it,
and then everybody has to have the exact same settings. That's not great because the next day you
change your mind and you go from Acrobat Reader to Pro Reader or WinZip to Ultrazip.

You change your mind. You're going to go back to the golden image and do this whole process again?
Terrible idea. Instead, what if we could just open up the right application instantly, flipping a
switch using Group Policy?

Webster, do you have any thoughts about that real fast?

Webster: File association is just an absolute royal pain in the butt, so if you have something that
can help us with that, oh, yeah!

Jeremy: "Oh, yeah!" That's it. You sound like the Kool-Aid Man, "Oh, yeah!"

Here's the sister problem, the Windows 10 rollout with regards to Start Menu. You can have a machine
with every freaking application on it and then you can design the Start Menu and then export that.
Then everybody in the world has to have the same Start Menu, which is not good because not everyone
in the world should get the same Start Menu.

Wouldn't it be better if when you deploy an app you could actually populate it correctly for the
right person at the right time in the Windows 10 Start Menu. Same thing for the Taskbar. How about
removing items like Candy Crush off the Start Menu? That kind of thing? Nobody likes that sort of
stuff, so I'll show you how to get to that when we get there.

One of the other things that we're probably not going to go into today is taking your real on-prem
Group Policy settings and getting them off-prem through your own MDM service. We're getting kind of
famous for this. If you're flirting with MDM land and you want to get Group Policy settings out
there, we can help you do that. Not today's talk, but interesting anyway.

We also won't be talking about the idea of ensuring endpoint compliance, but we have a great utility
on this called the Group Policy Compliance Reporter. That's another talk for a different day.

These are the suite components. I am not going to go into them in excruciating detail because we
will be going into them in detail in our talk today.

Again, we kind of got famous in this first area of managing the heck out of application settings and
locking them down (with Application Settings Manager). The point is that the stuff on the left, the
Group Policy Edition, that's sort of your on-prem way. Then if you are using the Cloud or MDM, you
can also get it deployed that way too.

Least Privilege Manager
([https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html))
gets you out of the local admin rights business. Browser Router maps specific websites to specific
browsers. Java Rules Manager will guarantee a particular version of Java to a particular website.
File Associations Manager is where you can map specific extensions or protocols like PDF or MAILTO:
to your applications like Acrobat or Outlook. I'll be showing you that today. The Start Menu and
Taskbar Manager, again, how can you pin specific Windows 10 apps to groups and also to the Taskbar?
I'll show you how easy it is to do.

Again, what's that I hear you cry? "Jeremy, I know you're a former Group Policy MVP, but I don't
like Group Policy," you say. No problem, no problem, no problem. If you like the result of what
you're going to see here today, if you want to, you can export any of these settings. We give you a
little utility to wrap it up as an MSI. You can bomb it on the machine using whatever utility you
want like SCCM, Altiris, whatever, or you can chuck it directly on the Citrix server. That works
also.

So if you don't want to use Group Policy, you want to do the not-Group Policy method, that's fine.
That's included and free in the Group Policy Edition. Then the Cloud Edition stuff, again, you can
use either our cloud service or you can use an MDM service if you have one.

We have these three that go together: Admin Templates Manager, Preferences Manager and Security
Settings Manager. Those three things are paired up. They help you export your on-prem Group Policy
stuff to get out the door to your cloud or MDM service.

Then we have a couple of new guys on the block. I don't think, Webster, we talked about these
before. We have this really nifty one called Scripts Manager which is great. The idea is you can say
when this condition is true run this script, and when this condition isn't true anymore then run
this off script.

By way of example, you might want to say when I'm on this IP range, then kick off this script. When
I'm not on this IP range anymore, then do this undo thing. So do something when I'm on this range,
do something else when I'm not on this range, which is pretty nifty.

Webster: Hey, Jeremy?

Jeremy: Yeah?

Webster: I've got a question for you.

Jeremy: Yeah, hit me.

Webster: Does the Start Menu and Taskbar Manager also work with Windows 7?

Jeremy: No. That's a Windows 10 only function. It's actually reasonably easy to do Start Menu stuff
in Windows 7 with regards to Start Menu.

Webster: Yeah.

Jeremy: But that's the thing. It's super hard in Windows 10, so we built the utility and we made it
way easier. That's the point.

Webster: It seems like every time they come out with an update to Windows 10, they completely screw
up the Start Menu and everything you've done is gone. How do you keep up with that?

Jeremy: The good news is that once you, Mr. Admin, write your wishes down of what you want that
Start Menu to look like, then it's maintained. That's the good news. If what you're seeing is I had
1703 and I've upgraded to 1803 and everything looks different, you're going to find that unless you
lay down the law using the Start Screen Manager.

Webster: Well, you have a fan here, Sheldon Homer.

Jeremy: Okay, yeah.

Webster: He says using PolicyPak Cloud and File Associations Manager and the Windows 10 Start Menu
Manager took a lot of stress away.

Jeremy: Thank you, Sheldon. Your check is in the mail. Just kidding. Awesome. Yeah, that's the
thing. Once you start using it, you're like where has this been my whole life?

Let's talk about a bunch of stuff you don't need. You don't need any servers to build or buy or
infrastructure or databases, for the love of Pete. Nobody wants another freaking database. No schema
updates, no domain mode, no specific Windows Server needed and no specific Windows client needed.
Most of what PolicyPak works with is Windows 7 and later. We did note that some components are
Windows 10 specific, but by and large everything you're going to see here works great with Windows 7
and later.

For PolicyPak Cloud or MDM, you don't need a real active directory, you don't need any servers to
install, no SCCM, no RMM tools, no live Group Policy. And that's it. In other words, you already
have all you need. There's absolutely nothing to buy or build. You are ready to rock on day one, and
it takes about – I'm not kidding – 120 seconds to get going.

What you need to install is this. On your management station, you're going to install a little MSI
that increases what you can do in Group Policy land. Over here on the endpoints, you're going to
have to install something that will receive those directives. What is that you're going to install?
You're going to install the PolicyPak client-side extension on your domain joined machines.

Client-side extension? Man, that sounds familiar. Yeah, because Microsoft already ships a bunch of
those in the box. You already use them: admin templates, folder redirection, Group Policy
Preferences shortcuts. You already use it. PolicyPak is architected the exact same way that
Microsoft always wanted you to be able to extend what they're already doing, and we do that. When
you run GP Update or run Group Policy results reports, we are Group Policy as if Microsoft
themselves had shipped it from the factory. That's the important part.

The Cloud Edition, there's a little cloud agent that will then connect to our cloud service and let
you download that stuff. The MDM Edition is the same version as the Group Policy Edition with a
little licensing file. The point is you can see the restrictions here that Group Policy Edition only
works with domain joined machines, Cloud Edition and MDM Edition work with domain joined or
non-domain joined machines.

It's easy enough to do. When you're ready to go, you just install the moving part on the endpoint
and that's all there is to it. The result is that your endpoints get your wishes and you're ready to
rock.

The philosophy is that we work with what you already have. You have desktops, laptops, Citrix. You
have any VDI. We work with that. Anything Windows 7 or higher. Any MDM flavor. Any kind of
application type. Basically, it's hard to find something that PolicyPak doesn't work with, including
things like the Unidesk acquisition from Citrix with app layering. We just work with every freaking
thing, basically.

Customers? Yep, we have them. Lots of fed and state agencies. We have K12 and higher ed customers.
We have state and local government customers. And we have just about every other thing on the planet
as well. So lots of customers, man, we've got them.

We won't have time to talk about this today. Maybe this is a good talk for another time. The idea of
did your GPOs actually make it out there. We have a great utility called the Compliance Reporter.
There's a free version and a pay version. We'll get to that another time.

So the top benefits review. Managing the crap out of your application settings. Remember, decoupling
the application in the image from the settings itself, letting you have the settings of the moment.
It's not just about application settings. It's about all these things. Killing local admin rights.
If you change your mind and want to give Teacher Number 7 the ability to install Kid App 6, great.
You can make that happen just like that.

You want to block ransomware and unknown ware applications, deliver real Group Policy through the
cloud, map what website to what browser, map what website to what Java, map what extensions open
what apps, pin apps to the Windows 10 Start Menu and Taskbar.

We didn't talk about this, but this is also awesome. Managing Internet Explorer compatibility and
Enterprise modes. We just take that headache all away. We don't have time for that today. Condense
and reduce Group Policy complexity. Time permitting, we can talk about how to get out of what I like
to call the too many freaking GPOs business. If we have time, we'll talk about that.

That's all there is to it.

What others say about PolicyPak. "PolicyPak Could just works. We love it." "We looked at PolicyPak
and said this is what we need." "PolicyPak is the first tool that gave us what we needed with regard
to Firefox." "It gives us huge dynamic control." "It enables us to say yes as opposed to saying no
to everything." I love that quote. That's good being an IT enabler in your organization. "We don't
have to babysit all our deployed applications like we used to. We really reduced our troubleshooting
and updating efforts." There you go.

I've got a little quiz. Let's see if you can remember these things.

What's the moving part that needs to be installed on the endpoint? That is the client-side
extension, the little moving part.

PolicyPak works with what kinds of systems? Windows 7 and later.

There are three versions of PolicyPak. What are they? They're going to be the Cloud Edition, MDM
Edition and the Group Policy Edition.

What's our tagline? Securing your standards. We want to make sure that you're secure, you're in
charge, not your users. That's what makes the most sense there.

Where am I from? I don't know if we mentioned it, but I'm from Philadelphia.

How many Preconfigured Paks do we have? Do you remember off the top of your head how many we said we
had? 80 billion! No, we have 400.

There you go. So that's it. What do you think? Do you have any questions about that, or should we
get right to it?

Webster: There are no questions in the questions window, so I say get on with the demos. Show us the
stuff.

Jeremy: Okay, let's do it. All right, let me explain my test lab environment here. This is my domain
controller/Group Policy station. In real life, you probably wouldn't marry your domain controller
and your Group Policy station, although some people do and it's totally fine. It just makes my demos
go a little bit easier and faster here.

Webster: Okay, we now have two questions for you.

Jeremy: Okay.

Webster: How are you different from FSLogix?

Jeremy: Okay, sure. FSLogix and us have a great partnership. We have a good better together story.
In fact, what I can do just to prove out the point real fast is let me show you on the website where
you can learn more about how those two things go great together.

If you go to "policypak.com," you can go to "INTEGRATION." Under "INTEGRATION" there's "PolicyPak &
FSLogix." You can see all of our better together stories. We have about six of them. FSLogix is
great about the actual file system. Their claim to fame is hiding applications and also doing a
great job with maintaining user state as a guy roams from machine to machine. We don't do that. We
do everything else after that. Once you have a machine and you want to apply settings, we are the
settings masters. Those guys are the file system masters. I hope that answers that question.

Webster: How are you licensed and what is the cost?

Jeremy: Well, let me jump to the end. It costs only $80 billion.

Webster: Per user.

Jeremy: Per user. $80 billion per user, so it's very inexpensive. Obviously, there's a sliding
scale. The more you get, the cheaper it is per unit. We are licensed per endpoint. So it's desktops
plus laptops plus concurrent Terminal Server/Citrix connections. You add them all up, and then
you're ready to go.

Webster: But you're going to cover that toward the end?

Jeremy: No. If somebody is interested in that, then just reach out. Fill out the form on the
website, of course, and then we'll be in touch. Because everybody's scenario is a little bit
different, so we want to make sure we give you a quote that makes sense. But it's a sliding scale.

Webster: Okay.

Jeremy: That's it. All right, let's jump right into it. The first thing I want to talk about is
managing the heck out of settings. In other words, decoupling your Citrix or your desktop settings
from your settings of the moment.

When I click on "Firefox" in Citrix land, you can see that it's taking its time getting it and
presenting it from the Citrix server over there. Let's say you wanted to change something like your
Firefox homepage and also maybe increase the security. What am I talking about here?

If you go to Tools, "Options" here and if we were to look at the "Home page" configuration, you can
see that it's not set. If I were to go to "Privacy & Security," you can see the "Remember logins and
passwords to websites." I actually just came across a video that says, "Let me show you how you can
siphon off all the passwords in clear text off of both Chrome and Firefox." I'm like, "That's not
good." Wouldn't it be great if you could uncheck the checkbox to "Remember logins and passwords to
websites" and then lock it down so users can't be naughty and work around it?

In order to do this, we'll go to our "CITRIX OU" here. I already have this demo pre-staged just to
make sure I don't make any blunders or anything. I'm going to select "Link Enabled" for this GPO and
click "Edit" here. But I'm going to show you exactly what I did to get it configured.

It's just a garden-variety Group Policy Object. You can see it's linked into or we hook directly
into the PolicyPak editor you know and love. If you already use a tool like AGPM or GPOAdmin or
something like that, we work perfectly with that, and you can see we hook right into the Group
Policy universe.

Here's "Application Settings Manager." You already know how to use it. You just right click, "New
Application" and set your policy just like this. I have one for "Firefox" already set up right here.
Actually, you know what? I've changed my mind. I decided I don't want to use this preconfigured one.
That's right. I've decided. I'm changing my mind. Let's change it up. Why not?

Why don't we "Create a GPO in this domain, and link it here." How about "Different FF Home pages per
machine type"? Oh, yeah. Let's go off the grid. What are we talking about here? How about if I were
to go to computer side, "PolicyPak" here, go to "Application Settings Manager." Let me right click
"New Application" and go to "PolicyPak for Mozilla Firefox 23.0" and later.

But you know what? This would apply to absolutely every computer, including my Citrix machine and my
real desktops. Why don't I set my "Home Page" to "www.citrix.com"? I want to right click and lock it
down ("Lockdown this setting using the system-wide config file"). Go to "Security" and uncheck
"Remember passwords for sites" and also lock it down.

But you know what? I only want this particular homepage to exist when what we're going to do is
called "Edit item-level targeting filters." Webster, do you remember my training class when you took
my Group Policy training class? We talked about Group Policy item-level targeting?

Webster: Yes, January 2008.

Jeremy: There you go. And I bet that has served you really well, right?

Webster: Oh, yeah. I've still got the books.

Jeremy: There you go. What we're going to say is do this set of conditions when "the terminal
session is Any." In other words, when I'm hitting a Citrix box, I want it to be Citrix.com. Let me
go ahead and click out of here and click "OK."

Then what I'll also do is I want to create another entry, but this entry I want to make it so that
it goes to some other website like "mycugc.org." We'll right click. We'll lock this puppy down.
We'll also do that same idea here where we'll uncheck "Remember passwords for sites" and we'll lock
that puppy down too.

But we don't want to do this for when we're on a Citrix box. We want to switch this over. We want to
change this for when we are on a not-Citrix box, so when "the terminal session is not Any." Aha, see
what we're doing there? When we're not on a Citrix box. So we have this one GPO with these multiple
settings in it.

In order to actually see this take effect, we'll run "gpupdate /force" over here on the Citrix box
first because we're doing it on the computer side. If we were doing it on the user side, it would
actually take effect pretty fast. I'll do the same thing over here.

Again, what I'm hoping will happen is that when I run "Mozilla Firefox" on my real machine, I'm
going to go to MyCUGC.org. When I go run it on the Citrix box, it's going to go to Citrix.com. Let's
go ahead and see if that decides to take effect.

Here's the real "Mozilla Firefox" on the real machine, and I can see it's already trying to go to
"mycugc.org." Excellent. Then if we go to Tools, "Options" here, you can see it's locked down. If I
go to "Security," we've unchecked "Remember logins for sites." Just what we said to do.

If we were to close this out and now run the Citrix distributed version of "Firefox," because we
said do something special when we're on a terminal session, what should we get if all goes perfectly
well? "Citrix.com" just the way we would expect. We'll go into here, Tools, "Options" here. We'll
see that it's delivered, locked down. Go to "Privacy & Security" and uncheck "Remember logins and
passwords for websites."

Webster: Nice.

Jeremy: Right? Do you like this idea of decoupling the settings from the delivery mechanism? Do you
think that is something administrators should pay attention to.

Webster: I do because one of the things that I hear people asking for is, "Yeah, I've got Group
Policy that will do these things, but what I really want to be able to do is control settings in
some of the applications. I don't want you just being able to select this option or I only want them
to be able to select this option if they're not in a terminal server session, RDS, XenApp session."

Jeremy: Yeah, and you could also do it based on groups, computer name, IP address, any number of
things. Again, it comes down to the settings of the moment. If you change your mind and you want to
change the homepage to some emergency thing or whatever, it's good to have the fire extinguisher out
there right now.

Great! I'm glad you like it. I like it too. We have about 400 or 500 Preconfigured Paks ready to go
for applications you know and love.

Let's continue down the road. In fact, let's bring "Firefox" back up again here in Citrix land.
Let's talk about a user who is having both a good day and a bad day simultaneously. Let's say you
have this user here. He's in Firefox land and he's at "citrix.com." He decides he wants to go to a
website that doesn't render well in Firefox.

Let's pretend that PolicyPak doesn't render very well in Firefox land. Watch this, Webster. I think
you're going to flip over it when I do this. Here I am. I'm going to type in "www.policypak.com,"
but we know that it doesn't render perfectly in Firefox.

Watch the birdy. We're going to click on the tab. We close the wrong browser; we open up the right
browser. This is the Citrix version of Internet Explorer. This is not the local version. This is the
Citrix version of that same website. We routed the user from the wrong browser over to the right
browser.

Let me show you another example. Here I am in Internet Explorer. Let's say I want to say everything
in Google land renders best in Chrome. So I go to "google.com." Watch the birdy. We close the wrong
tab, and we'll open up the right browser just like this.

So we're routing any browser to any other browser either in Citrix land or on your real machine –
hold on, guess where I'm going with this – including Edge. If you're in the Edge browser and you
decide the application I really need to be guaranteeing my users to be using is Firefox or Chrome,
you can do that. You want to go from Chrome to Edge, Edge to Internet Explorer, Internet Explorer to
Firefox, any to any browser, we can do that.

What do you think, Webster?

Webster: All right, so say something works only in Firefox. I type that URL in in Chrome and you
want to go to Firefox but I don't have Firefox installed. Now what happens?

Jeremy: What are we going to do? Yeah. In other words, if we make a route to a browser that doesn't
exist, what are we're going to do? Well, we'll assume that machine has Internet Explorer and we'll
fall backward to use Internet Explorer if the route doesn't exist.

Webster: Okay, so it's not going to crash. They're not going to get a big ugly error message. You're
going to do your best to get into Internet Explorer and attempt to render the website.

Jeremy: Yeah, that's exactly it. This demo I preconfigured, not that it takes a long time to do. I
just wanted to make sure that it was there. Let me show you how quick and easy it is to make a route
though.

If I go to "Browser Router" here, again you could do this on either user side or computer side. So
you can say wherever Johnny goes, Johnny gets these routes. Or you could say on this collection of
Citrix machines, shop floor machines, free seating machines or all these laptops, everybody gets
these routes. You can decide on the user side or the computer side.

It's super easy. Just right click, "Add/New Policy." If you wanted to do "rule 890" or whatever,
this part doesn't matter. This is where the magic happens. You can put a "URL" or a "Wildcard" in
like "\*nbc\*" or something like that. You want to guarantee that puppy always goes to "Google
Chrome." You've done that. You've made that rule. It's as simple as that.

The other thing that I didn't really talk about too much in the slide deck but it's worth mentioning
here, you could do "route test to MS to IE." If you set a specific "URL" like "www.microsoft.com"
and you set the "Browser Mode," if you've ever tried to deal with Enterprise browser modes you know.
They have this crappy application that one dude needs to be in charge of. It's one flat list. You
have to keep going back. Once you modify it, you're going to have to somehow magically tell Group
Policy that it has been updated and then maybe sometimes it will work perfectly.

In our world, we've actually wrestled that problem to the ground. You just say the website is this,
the "Browser" is "Internet Explorer." Set the "Browser Mode" to this, and you're good to go. I think
I already have this policy set here. I don't. But that's the whole point. It's super easy to do. It
couldn't be any easier, and you're ready to rock just like that.

Webster: One thing in there that's good is you have the block option. Say I'm using a monitoring
product like my favorite ControlUp and I see a user on a XenApp server going to ESPN.com and sucking
up all the RAM on a XenApp server, without having to get the network team involved I can actually
use this and say for now block ESPN.com.

Jeremy: Exactly right. I mean, we don't block it at the port level or whatever, but we do block it
inside through browser. For the casual standard user, that's exactly right because we live at the
browser level here and we can just say you tried to go to Facebook? You ain't getting no Facebook
time. That's exactly it. You nailed it. Pretty nifty, right?

Webster: Yeah.

Jeremy: Let's continue down the road. Let's talk about a similar problem which is managing the heck
out of Java. I bet you see this a lot. How many times have you seen where somebody has to stand up a
whole Citrix server for the sole purpose so that you could say, hey, when you're ready to use your
timecard app, click on this thing, go to your timecard app – which in my case I'm going to pretend
that's "java.com" – and it has to use a particular version of Java that has to exist on the freaking
Citrix server? How many times have you seen that? A lot, right?

Webster: Yeah.

Jeremy: That's the thing. You can either do it here, you can set the correct version of Java here
inside the Citrix server itself here, but I'm going to do it on the computer level because I want
you to have less to manage here.

I want to show you what this looks like here on my real machine. I'm going to go to "Internet
Explorer" here on my real machine. I'm also going to show you how many versions of Java I have on my
real machine to explain why it lets you do this.

If I were to go to here and I can zoom in and show you, I've got "Java 7 Update 51," "Java 8 Update
25," "Java 8 Update 171" and good old "Java 6 Update 24." Why does Java let you put multiple things
on the machine at the same time? Because of what I'm about to show you.

If you were to click on "java.com" "Do I have Java?" it's going to tell you the latest version of
Java that's on that machine which doesn't meet the goal. This is why you have to set up a particular
version, like a whole server, just for Citrix just for this thing. I'm going to show you how you can
marry a particular version of Java to a particular website. If you go to this website here, it's
going to actually bomb out because it's not digitally signed. Check this out. I can't help you out
at all because you're not part of the Java "Exception Site List." Okay.

What we'll do is I'll close this out. I'll go to my "Sales" team and I'll go to "PPJRM GPO." I'll
create a Java Rules Manager Group Policy Object. What I'm going to do is go to the computer side, go
to "PolicyPak," go to the "Java Rules Manager" here, right click, "Add/New Policy." The rule name,
again, doesn't really matter. This is where it counts. Let me make sure there's no www there because
if there is, it won't match. Okay, so this is "https://www.java.com," so I have to get that right.

I want to run a specific version that's on my machine. I just showed you what versions. I'm going to
marry it to specifically "Java SE 7 Update 51." That's some version I happen to have on the machine
right there. What's that I hear you cry? You don't know what version you have as an "Exact" match?
No problem. You can use the "Latest in family" if you were unclear. But I'm going to make it an
"Exact" match just to be on the safe side, "Java SE 7 Update 51" "Exact."

The next rule I'm going to make, I'll "Add/New Policy" here. I'll call this "rule2," and I will say
"https://javatester.org." This one has no www. Let's make sure: "https://javatester.org," no www.
Now I want to make this one "Run" a different version entirely, but it has to exist on my machine.
We won't magically install it for you or something. We'll do "Java SE 8 Update 25," which is already
on the machine. Again, everything has "Item Level Targeting." If you wanted some people to get this
as a match and other people not to get this, it's super easy to do.

That's it. We've made our two rules. I'm ready to go. Let me close this out for a second here. I'll
then run GP Update ("gpupdate /force") to get the latest settings here. Now instead of having to
spin up a whole new server just to tell people to use their timecard or a specialty app, you can get
out of that business. You're allowed to install multiple versions of Java on the endpoint for this
reason, and it works perfectly.

You have the old version of Java for compatibility, and you have the new version for security
because we're making maps. If we go to "java.com" here, "Do I have Java?" before it told us we had
the latest version of Java. But now if all goes well, what do we see? "Version 7 Update 51." We
married it to the right version for the application. This one threw an error before. Now what do we
get? We get hopefully no error, and we get "Java Version 1.8.0_25" just like that.

So on the desktop or on Citrix, this is a huge benefit for you, guaranteeing and marrying a
particular website to a particular version of Java. How many times have you seen this?

Webster: Yeah. Hey, we have a question.

Jeremy: Okay.

Webster: Does PolicyPak increase GPO processing time on the computer or user side in a Citrix
environment?

Jeremy: No, hardly at all if any because what's happening is that Group Policy runs in the
background so it doesn't really take up any juice, so you're good to go.

Webster: Okay.

Jeremy: And if I'm wrong or you think I'm lying, the good news is that everything in Group Policy
land is articulated. In fact, the ControlUp guys, I have no real relationship with them other than I
know you use them too. They have a great Group Policy how long does it take to run stuff script, and
you're welcome to use that. Because we run in the Group Policy engine and we will articulate
correctly how many milliseconds each of our components takes to run. So if you think I'm full of it,
I can't be because you can check it out yourself.

Webster: Yep.

Jeremy: Was there a second question in there too?

Webster: No, that's it. We have a remark from Jeff Zeno. He really likes this Java stuff because he
said that they've faced this challenge with IP-based KVMs.

Jeremy: KVM switches, yeah. You have to marry them. That's the thing. You could say Java is going
away, but your old stuff isn't going away. They're like cockroaches. They just live forever.

Let's continue down the road. Let's talk about my next most important thing which I think is a big
security concern, which is getting out of the local admin rights business. Now even if you have no
more admin rights, that's fine but that means you still can't do things that you used to be able to
do yesterday.

Here's an application that won't run without admin rights. It happens to be "Procmon," but we all
have these applications. It could be QuickBooks, it could be some scientific app or whatever, and it
just will not run without admin rights.

Or you try to go to "Device Manager" and you're told I can't help you. You're a "standard user," so
you can't update your own printers or fonts or device drivers. Man, what a huge drag. Or you try
install an application like "PowerPoint Viewer" and you're not allowed to do it. PowerPoint Viewer,
come on. We know that's okay. Or try to install "SkypeSetup," and you click "Next" and click "Next"
and you're not an admin so you get smacked down.

So it's great. Get out of the local admin rights business, but now you have to get out of the ditch.
That is where our Least Privilege Manager piece comes in. Let me go ahead and "Create a GPO in this
domain, and link it here" called "PPLPM GPO Demo 1."

What we're going to do is we're going to create some Group Policy settings using PolicyPak Least
Privilege Manager to elevate the situations that are required for this user to continue to do the
job that they used to do yesterday when they were an admin. We'll just do one-by-one.

I'll "Add" a "New Executable Policy." I'm then going to pick the fingerprint, the "Hash" value, of
the application I want to run which is "Procmon." I want to let that "Run with elevated privileges."
So "Let procmon run elevated." There we go, just Procmon. I don't want to give the user freaking
admin rights. That's a terrible idea. I want Procmon to run as an admin.

So "Add" a "New Control Panel Applet Policy" here. What I want to do here is say why don't we let
you get into "Device Manager." Before, you were a standard user. Now, you'll "Run with elevated
privileges." So "Let DM run."

Then the last thing I want to do is "Add" a "New Windows Installer Policy." I'm going to select
"Signature" to say if it's signed by the Skype guys, then it's probably okay to install. I'm okay
with applications that are signed by Apple. I'm okay with applications that are signed by UPS for
Quick Ship. I don't need to be involved in every transaction and create a package just for them. Go
ahead and let them install their own "SkypeSetup" on their own. I don't need to be involved in that.
I want this MSI installer to "Run with elevated privileges." So "Let skype INSTALL run as admin."

Just like that, we'll go back over to our endpoint machine here. We'll run GP Update ("gpupdate
/force"). We'll get the latest settings, and then we'll see each of the puppies kick off one-by-one.
I'll start off with Procmon that threw a UAC prompt in our face. I'll continue onward with the
Device Manager, and I'll finish up with SkypeSetup.

All right, here's "Procmon." Ten seconds ago it didn't run because we didn't have, and we still
don't have, admin rights. But now we're elevating the application, and it runs like that. Then if we
were to go "Device Manager," no more prompt just like that. If we were to go to "SkypeSetup" here,
before we got halted at like the fourth checkbox. Check, check, here's the "Inst  
all." No more UAC prompt, and Skype will continue install perfectly the way we would expect.  
Getting out of the ditch of removing local admin rights. It's a great idea to remove local admin
rights, but then when you do that you're in the ditch.

Webster: The question is, you need the executables in order to set these up. Obviously, if you don't
have the executable or the MSIs, you don't have anything to point to to get the signatures and
thumbprints and all that. So you have to have the executables and installers.

Jeremy: Right. In other words, I think your question is more like, what if on the management station
you don't have the same stuff as Sally out in the field? Is that more like what your question is?

Webster: I guess. It's a question from Derrick. Yes, that's what he says. Yes.

Jeremy: That's a great thing, and we have a solution for that. It's here in the download that we
give you. It's in the "PolicyPak Extras" folder. It is this thing called the "PolicyPak LPM Auto
Rule Generator Tool." For each of the things that we're doing here, we have a little helper utility
to help you figure out what you're doing out there and create rules so you don't have to have the
exact same thing over here. Does that make sense?

We have one for the Least Privilege Manager, one we're about to talk about for File Associations
Manager, another one for Start Screen and Taskbar Manager. It's helpful if you have access to it but
if you don't, we give you a little helper utility where you can walk up to Sally's machine, suck out
the brains, and then make policies out of it.

Webster: Okay, let me ask you a security question. Once I'm running an application elevated, is
there a chance that I could escape that elevated application or some kind of dialogue box or prompt
comes up and I could bypass the elevation and get to a Command Prompt or File Explorer or something?

Jeremy: Yes, and that's why expose this idea called "Apply to child processes" or do not apply to
child processes. For instance, we do not recommend that you would say let Regedit.exe run with
elevated privileges. That's a terrible idea because then that guy can do everything. And if you
"Apply to child processes," then he can escape from that. You have to know your application, know if
it's possible. If it is possible, you can simply uncheck "Apply to child processes" and then they
can't escape out of that initial process.

Webster: All right.

Jeremy: Okay. Any other questions about Least Privilege and local admin rights?

Webster: Adam Walker asked that question, and I was just asking him if you answered his concerns.
Yes, Adam said you answered his question. That's it.

Jeremy: Super-duper. All right, live to serve. Let's continue onward. Webster and I had a little
pre-chat before this, and I think it's safe to say Webster loves this part, and we've all seen this.
You go through the motions and install Acrobat Reader, and for the love of Pete Acrobat Reader
doesn't become the PDF reader afterward. What?

There's a reason for this, and you can look it up. It's called application extension clickjacking or
hijacking. Grandma downloaded SupposedlyRealApp.exe, and then it hijacks PDF or whatever extension
it is. They made it so that you have to programmatically poke the bear in the operating system.

This thing is really a Windows system app. I know it doesn't seem like it, but this is really a
system app thing. That means you'd have to go into the system itself and then configure it yourself.
Basically, they made it so that the user has to do this thing and an application can't do it.

The point is that this used to be drop-dead easy in Windows 7, and starting in Windows 8.1 and
continuing on through Windows 10 it's super freaking difficult. We try to wrap it back and make it
super easy.

This is a PDF that opens in Edge. Here's a movie file that open in the Windows movie player program,
a little two-second video of some Legos or whatever that it. Then how about you double click on a
MAILTO: and, oh my gosh, we get the Windows internal mail thing. What the heck? We don't want any of
that.

What I'm going to do is show you how to wrestle this to the ground in two seconds here. We'll go to
our "Sales" computers and we'll go to "PPFAM Demo GPO." We'll create a Group Policy Object for file
associations. Again, you might have seen how to do this in the box. You have to take your whole
machine. You have to then export the settings and trim the XML. It's a huge mega pain in the tush.

Webster: Yeah, then it's static.

Jeremy: Then that's it. You're fixed forever with the same ideas. Exactly right. Let's go ahead and
not only do it once; we could also change our mind if we want to. Let's "Add" a "New Policy" first.
This is easy. You just type "PDF" here, and I'll type "pdf" here. This is now saying on your
machine, the machine I'm on right now, what things say they can run PDFs? Well, on this machine I
have "Adobe Reader." You might ask, why don't I see Edge on this list? Because this is a server
machine, there is no Edge on this machine. There we go. I've just associated PDF with Acrobat
Reader.

But what about an application like VLC media player that has 136 things? We have this special way to
"Add Policies for Product (wizard)." I'll then say, yeah, pick any application you want on this
machine or your friend's machine. So we'll pick "VLC media player" here. There are all the things
VLC media player can do: .mp3, .mp4, .wav and so on. I'll select all these guys with one checkbox
("Check All"), click "Next. We'll make a little basket for you. There it is. In the little basket is
all the freaking settings for that application just like that.

Webster: Yeah, iTunes is the same way.

Jeremy: iTunes is the same way, all that stuff. If you decide you want to "Add" a "New Policy" for
things like "MAILTO rule," I'll go to "Network Protocol" and this can be "MAILTO." When I click on
"Select Program," these are the things that claim they can do mail. I have "EUDORA," I have "Google
Chrome," I have this thing and then I have "Claws-Mail." I'm going to use "Claw-Mail" as my Outlook
representative. I don't really have Outlook. I'm going to use Claws Mail.

There we go. I've made my rules. I'm going to go to my endpoint here. I'm going to run GP Update
("gpupdate"). This particular setting is a little bit different than the others. You have to get the
GPO first. Then you have to log off. Then you have to log on. Then the magic happens. That's the
deal with this one. This isn't our physics. This is the physics that Microsoft provides in the box,
and there's just not a lot we can do about it right now. Maybe in the future.

Let's take a look. Let's make sure I actually got the Group Policy first before I log off and log
back on. Let's take a look. On the computer side, I got the file associations one ("PPFAM Demo
GPO"). Okay, so I'm reasonably confident this is going to work the way I expect. Let me go ahead and
"Sign out" here. Remember the icons. As soon as I sign back in here, don't take your eye off that
locale.

That's it. You did it. You double click the PDF, you have the right Acrobat Reader, whatever it is.
Or even better, if you have both Reader and Writer on the machine, you can make PolicyPak detect the
thing you want and then make the final associations. So if you have Reader and Writer on the machine
and you want the people who have Writer to have this and people to have Reader to, that's easy to do
and we have a great video on how to do that.

You want to click on this guy, and do you get VLC media player? Well, yes, you certainly do. You
click on this guy to open up a mail application. What happens? You get your special mail, which for
mine is Claws Mail, just like that.

This would take you your entire Wednesday to achieve. Then if you changed your mind, it would take
your entire Thursday. This is not the way that you should be thinking about it. You should be
thinking about the settings of the moment, don't you agree?

Webster: Yeah. Jeremy, we are coming to a close. I want to see the Start Screen/Taskbar stuff.
That's what I want to see.

Jeremy: Me too. I love it. Let's get right to it, and we'll end with that. You have two methods and
a couple things I want to show you here. I have a special treat for Citrix friends here because you
know that this "Citrix" folder or thinking a look at the Citrix app in here is maybe not the best
way to present stuff for your user. There's got to be a better way to present these things to the
user, and that would be on the Windows 10 Start Screen.

In order to get this to go because I figured we would be running out of time a little bit on this, I
created a Start Screen one right here. Let me walk you through exactly how it works here. I wanted
to say you might have some applications that live in Citrix land and you want to put them for real
on your real Windows 10 Start Screen for your "Normal Desktops."

For your "Normal Desktops," we're going to create a group called "Citrix XenApp Apps" and then force
in "Chrome on Citrix," "Firefox on Citrix" and "Full Citrix Desktop." This is 400-level stuff here.
Then when you're "Inside Citrix Group" itself, actually jam in a different set of things.

Let me go over to my machine here. I will run GP Update ("gpupdate") here, and we can watch this
happen in real time. Watch this. Remember I pre-staged this to make this go a little faster just so
we would have time. Just like that, we have our "Citrix XenApp Apps" that are right here. If I were
to click on "Google Chrome," there we go. That's it.

Webster, is this a better way to present application icons for your published apps or what?

Webster: Yeah, I like that. I love it.

Jeremy: Then let's go into the desktop here. We said when you're inside a Citrix full VDI session, I
want you to get a different Start Menu experience. Check this out. Now in here we said nuke
everything and only show these two icons. Again, this is coming directly from the Citrix machine. So
you're able to nuke the stuff Microsoft provides or anything the user might have done earlier, put
your own groups in there, and put in real apps or Citrix apps.

Webster: Wait a minute. You mean I don't have to run all the PowerShell scripts to uninstall all of
this preinstalled stuff and block all this stuff? I don't have to spend hours doing this stuff?

Jeremy: I mean, you can if you want to.

Webster: What about my billable time as a consultant, man?

Jeremy: Then you should definitely keep doing it. In fairness, we have a script that will help you
with that if you want to use our thing called PolicyPak Scripts to deliver that setting as well. But
the point is that you're absolutely right. You shouldn't need to go through the motions and
uninstall them. You can just make them not be present in their face. So they're there. They're
underneath the hood. They're in this A-to-Z column stuff, but you can just get rid of it from the
Start Menu and ostensibly achieve the exact same goal.

That's up to you. If you want to still go through the motions, we will let you achieve that. We have
a component called PolicyPak Scripts and a script that will do that. But if you want to instead just
hide those applications and leave them in this A-to-Z list, that's fine. Make a correct Start Menu
based on the opportunities that people need, not whatever Microsoft wants versus what the user
wants. And these groups are all locked.

Webster: Go back to the server one. I've got a feature request for you.

Jeremy: Okay. This guy? This one?

Webster: That "Add Account." Citrix removed the ability from their Group Policy stuff to stop that
stupid thing from coming up. You used to be able to set a Group Policy to prevent that from showing
up. You can do the "Do not show this window automatically at logon," but that's only for me. That's
not for the next user. I want to stop that for all users and Citrix removed the ability to do that.

Jeremy: I bet if you taught me where it lived, we could figure out a Group Policy or PolicyPak way
to enable that. I bet you almost assuredly we could do that.

Webster: Good. That's a pain. I hate that.

Jeremy: Let's give people an opportunity to get in touch with us. Let me show you the best possible
way for you to get in touch with us.

Webster: Yeah, we also have people saying, yes, we need to stop that receiver pop-up.

Jeremy: Fair enough. Let me go ahead and actually open up Internet Explorer here. Well, actually,
Browser Router is going to kick in so if I go to "policypak.com," it's going to open up in Internet
Explorer. If you want to get started on a trial, I want you to get started on a trial too.

There are a couple of ways you can do it. The best way, click on "Contact Us." Don't wait until,
"No, I'll do this in a week or two." Don't worry about it. Our trials are very generous. You can try
it out for free pretty much as long as you want. They're supposed to be 30 days, but if you need
longer than that let's get on each other's radar.

If you need help from me or someone else on my team to help you get started, just click on "Contact
Us." Click on "PolicyPak Group Policy Edition." Say, "Hey, I saw it during the webinar today," or
whatever. We'll be in touch. Then if you need a little delay, that's fine. But if you're ready to
get started, you should get started right away too. Then you'll have someone like me or someone else
on my team to help you get started right away.

If you want to get to learn even more demonstrations, some overlapping demos but even more demos,
you can come to the one-hour webinar. We do it every day, and then after that we're off to the
races. Of course, we'll hand over the bits and you're ready to go. So "Contact Us" or the
"WEBINAR/DOWNLOAD," that's the best first step.

Webster: Good. That was awesome, Jeremy, thank you.

Jeremy: Thank you.

Webster: You really have a good product. That is such a useful product in the Citrix world or
actually in the server, application, desktop, virtualization world regardless of the vendor or
product that you use for those technologies.

Jeremy: Yeah, we like to say, if you have Windows, you need us. So we couldn't agree more. Well, I
think that's it. If Stephanie is still with us, she could wrap it up. Or if not, then I guess we
could say goodbye to all of our friends and say thanks for joining.

Stephanie: I am right here. Let me grab the screen back really quickly. I just have one closing
slide. Thank you, Jeremy. Thanks, Webster. That was awesome and entertaining.

Just a reminder to everyone out there, you need to come and visit us at myCUGC.org. I put a link to
a forum thread in the chat window for you. If you have more questions about what you saw today or
just want to get in touch with Jeremy, visit that forum thread and ask away and I'll make sure he
sees it.

Also, I want to make sure you guys follow us on Twitter @myCUGC. That's where we'll announce the
winner of the Amazon gift card. If you opted in at registration, we will be randomly selecting a
winner after the webinar. We'll put that out on Twitter and in that forum thread as well.

Finally, just a couple more things. I put a survey link in the chat window for you. We'd like to get
your feedback. It takes just a couple minutes, and it's anonymous and it's just for us. So please
fill that out for us.

Finally, this session was recorded and you will receive an e-mail with a link to the recording
tomorrow in case you came in late or you need to go back and revisit something.

That is it. I want to thank you all for your time today. Thank you, again, Webster and Jeremy. It
was great and hope to see you guys around at myCUGC.org again soon.

Jeremy: Thanks again for everything, both of you. You guys get a big hug from me.

Stephanie: Awesome. All right, everybody, have a great afternoon, and we'll see you all later. Bye.

Webster: All right, thank you. Bye-bye.


