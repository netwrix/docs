---
title: "Endpoint Policy ManagerSolution Methods: Group Policy, MDM, UEM Tools, and Endpoint Policy Manager Cloud compared"
description: "Endpoint Policy ManagerSolution Methods: Group Policy, MDM, UEM Tools, and Endpoint Policy Manager Cloud compared"
sidebar_position: 20
---

# Endpoint Policy ManagerSolution Methods: Group Policy, MDM, UEM Tools, and Endpoint Policy Manager Cloud compared

Netwrix Endpoint Policy Manager (formerly PolicyPak) works with whatever technique you're using
right now. If you're using Active Directory & GPO, or a UEM tool like SCCM, or an MDM tool like
Intune, we've got you covered. Or maybe you're using or nothing at all, where you can use Endpoint
Policy Manager Cloud. Watch this technical video to learn about the differences in the Solutions
methods and walk away knowing which one(s) you should use.

<iframe width="560" height="315" src="https://www.youtube.com/embed/7XUB1hWJh9Y" title="Endpoint Policy Manager Solution Methods: Group Policy, MDM, UEM Tools, and Endpoint Policy Manager Cloud compared." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. If you've made it here, you want to understand the PolicyPak methods.
Now you know you can buy in at either the Enterprise or Professional or SaaS levels. Maybe you're a
little bit confused about how you can take your licenses and use them across all the things and all
the abilities for you like Active Directory and Group Policy and MDM, cloud, this thing called
hybrid, and SCCM and other on-prem utilities. This video is going to help you out here.

First and foremost, this is the matrix of what you can do, which is to say if you're an Enterprise
customer, you can do these things. If you're a Professional customer, you can do these things. If
you're a SaaS customer, you can do these things. Don't panic! I know there's a lot. I'm not asking
you to memorize this.

We're going to go into this in this talk. The good news is that if you're an Enterprise or a
Professional customer, look at that! You get all the things. The point is that you get to decide
which method is right for you at the right time. For instance, if you're a group policy kind of
company today and tomorrow you're headed toward MDM, you can see you've got that covered.

If you're using SCCM and you want to head over towards PolicyPak Cloud, look at that! You're covered
there too. If you're an Enterprise or Professional customer, you're all the way covered no matter
what. We're just going to cover what those things are during this talk.

If you're a SaaS customer, that basically means you have access to PolicyPak Cloud, but you might
also be hitching a ride with something else like an MDM or a RMM solution. I'm going to cover that
here too so that way you have all your bases covered and understand it all. Don't panic. We're going
to cover all this.

The only thing you need to know is are you going to be an Enterprise customer, a Professional
customer, or a SaaS Edition customer? Once you know that, then you can dial in and figure out in
this talk what your methods are. Remember, the only difference between the Enterprise and
Professional Editions is not the methods, as you can see. You get all the same methods.

The only difference you get is what packs and components you're going to get. For instance, you
might want to get all the things. All the things means Enterprise. If you want to get some of the
things, that means Professional.

If you want to do some of the Windows 10 stuff and some Least Privilege, that's great. That's
Professional Edition. If you want to do all the things, all the packs, and all the components and so
on, that is the Enterprise Edition.

For SaaS you get most of the things. We have that on the pricing page. You can see exactly what
things you get if you're an Enterprise, Professional, or SaaS Edition customer. This talk is just
about the methods.

What are the methods? There's the GPO method. What do you get out of that? You can deliver all of
PolicyPak's special superpower settings, plus enhance Microsoft's Group Policy System. It's great. I
love Group Policy.

I wrote a big fat Group Policy book and I was a Group Policy MVP for 14 years, but it needs a little
help. Some extra bonus superpowers you get when you use the Group Policy method is you can reduce
GPOs. You can put item level targeting on all of Microsoft's Admin Templates, which is awesome.

You can also do our special superpower "loopback without loopback." I can't go into that here. We've
got too much stuff to cover. Again, you can see if you use the GPO method, not only do you deliver
PolicyPak's superpowers, but you also get some additional Group Policy superpowers.

If you use the MDM method, what does that do for you? You can use all of PolicyPak's settings and
all of Microsoft's Group Policy settings. A lot of customers are looking at MDM and blinking their
eyes and saying, "Gosh, if only it did this Group Policy thing that I did for the last ten years.
That would be amazing, but it doesn't." No problem. You can take all of Microsoft's Group Policy
settings and all of PolicyPak's superpower settings and deliver it using your MDM.

The cloud, what does that do? Very similar; it's our service though. Our service let's you deliver
all of Microsoft's Group Policy settings, all of PolicyPak's superpower settings. These two things
sound like they're similar, and we'll talk about where they are and where they aren't down the line.

What's this crazy hybrid thing? Hybrid basically means you want to use PolicyPak Cloud, but you
might want to bootstrap your installation of PolicyPak Cloud with something else. Maybe you've got
an RMM or an MDM tool like InTune or some other RMM tool. You already have connectivity to machines.

You want to make your deployment more awesome. That's great. You can use your RMM or MDM tool to
bootstrap and deliver the PolicyPak Cloud Client and then do all of the work with PolicyPak Cloud.
You can deliver all of your PolicyPak settings and all of your Group Policy settings that way. It's
kind of a bootstrap.

There's also the endpoint management method. What does this mean? This means you've got an SCCM.
You've got a LanDesk. You've got a PDQ. You don't want to use GPOs for some reason. That's totally
fine.

Some customers come to us and say, "Hey, look, I love what you do at PolicyPak. I'm on the CSSM team
and that's just how we want to deploy all the PolicyPak stuff. Can we do that?" Heck, yes! That's
totally great, and I'm going to show you how to do that in this talk.

Again, if you've got SCCM, LanDesk, or some other utility that you want to get PolicyPak's settings
or Microsoft GPO settings and not have to use Group Policy as the engine, great. You can do that
through any of these methods. That's all the methods you can use.

Now let's talk about why you would use a particular method. When would you use the Group Policy
method? You'd use the GPO, which we also call the on-prem or AD and GPO method, if you're domain
joined. Group Policy, the method, only works when you're domain joined.

If you're using GPOs anyway, fine choice. We hook into the infrastructure you already use. You
already know how to use it. Most of our demos on the website use GPOs because a lot of people like
to use that.

Second, if you have WVD or VDI, that's a pretty good choice. You don't have to use Group Policy, but
most of the time if you're using WVD or VDI, you would use Group Policy. If you've got those things,
you can just keep using the Group Policy method. If you've got Citrix Virtual Apps or Desktops, same
idea. That's basically VDI.

Then lastly, if you have hybrid Azure AD-joined machines, making a special point about these because
sometimes people are confused, they say, "I've got hybrid Azure AD joined machines. Should I use
GPOs? Should I not use GPOs?" Let's just go right to Microsoft's documentation.

Right here under hybrid Azure AD joined devices, they just tell you that you should use Group
Policy. If you want to, you can also use InTune or SCCM as well. They come right out and say it.
Group Policy is okay for hybrid Azure AD joined. I just want to point that out here. If you like
GPOs and you want to keep using them, we endorse you. You should, in fact, keep using them.

Same thing here; if you look at Microsoft's stance around modern management – we consider ourselves
to be a modern management platform – it still says, "Group Policy is the best way to granularly
configure domain joined Windows PCs and tablets connected to the corporate network using
Windows-based tools." That fits in here perfectly. Again, if you want to use Configuration Manager
for additional stuff, we support that too. That's going to be in the next couple slides.

The whole point is that we work with whatever you want, with whatever you have. Group Policy, as you
can tell by our website, we have lots and lots of demos there. This is why you would use the Group
Policy method.

When would you use the MDM method? If you've already invested in an MDM service like InTune or
Workspace ONE, if you use your MDM service to manage a single company, that's a good choice. I just
want to point out the converse is not true. In other words, if you use MDM to manage 23 companies,
you probably wouldn't want to use the MDM method. You would probably want to use the cloud method.

If you've got non domain-joined machines, this is a fantastic way to go as well. You can use the MDM
method as well. Once again, if you have hybrid Azure AD-joined machines, you can either use GPOs or
MDM to get the job done. Either one of those methods is fine.

Said another way, if you're already invested in an MDM service and you're headed in that direction
and you just want to go that way, that's fine. We support you. You can do that using our MDM method.

How about the cloud method? The cloud method is great if you want an all-in cloud experience that
just works. I'm an MVP and I like all the stuff that Microsoft is doing, but I have heard people say
that trying to get it all up and running with their cloud services stuff and their MDM and InTune
and Azure sometimes is just maybe too much or maybe that's a different group.

You still want to be all-in on the cloud. That's not a problem when you use our PolicyPak Cloud
service. What we hear from people is that it just works. It's one of my favorite things that people
say is that our cloud service just freaking works, which makes me very happy.

What if you're an MSP and you manage multiple companies or customers? You're in the right place by
using the cloud method. The cloud method is the only licensed method that we have that enables you
to manage multiple companies and customers. You have to be using the cloud service if you manage
multiple companies or customers.

If you want to pay per month, that's what we call our SaaS offering. The idea is that when you're a
SaaS offering, it's the cloud method only. Then you can pay per month with that. By the way, the
cloud method works for both non domain joined or domain-joined machines. You're covered in that
capacity. Cloud method is great. It works if you're an IT pro, it works if you're an MSP, and it
works for domain joined and non domain-joined machines.

The hybrid model, again, what the heck does this mean? This means you're using some other service to
kind of get you bootstrapped into PolicyPak Cloud land. For instance, you might have a MDM, a RMM
tool that's already connected to all of your machines. You want to bootstrap the install of the
PolicyPak Cloud Client. Not a problem. I'm going to show you how to do that in this talk. That's
probably when you would use the hybrid method.

Then when it comes time to do the work, your RMM and MDM tool can't do the work. That's where
PolicyPak Cloud comes in. You're going to use your RMM or MDM tool to bootstrap, get the Cloud
Client installed, make connection over to the Cloud service, and then use our in-cloud editors and
PolicyPak Cloud to actually do the work.

The endpoint management method, this is short-hand for I don't want to use GPOs. This is like I'm
using SCCM or LanDesk or something like that. If you have SCCM or PDQ or LanDesk or KACE or any
other on-prem management tool, the computers are domain joined. You're in good shape. Again, some
people come to us and they say, "I'm just not on the GPO team, but I want to do what PolicyPak
does." You can use any tool you want with the endpoint management method, and you're off to the
races provided that computer is domain joined.

Now, all the methods here, the on-prem, the MDM and endpoint management, they all use the same bits.
What's the bits? It's the Client-Side Extension that you download from the portal. Here it is, the
PolicyPak Client-Side Extension.

We all use the exact same bits, very easy to deal with. You just decide that you've got to get this
out there. We'll talk about how to get that out there in just a couple minutes.

What about the hybrid method and the cloud method? Well, technically it uses the same bits too, but
you first install the Cloud Client MSI from PolicyPak Cloud. This is going to join your computer to
PolicyPak Cloud and then underneath the hood it automatically also downloads the Client-Side
Extension directly from PolicyPak Cloud.

We're all using the same bits, the same moving part that makes it go. The PolicyPak Client-Side
Extension makes it go, and it's the same Client-Side Extension for GPO, MDM, SCCM, or Cloud. It's
the same one; however, in Cloud land, you just download Cloud Client first, get yourself joined to
PolicyPak Cloud, and then after that the Cloud Client will do the work and download the Client-Side
Extension for you.

How about creating and editing policies? For the GPO, MDM, and SCCM land, what do you do? You create
and edit your policies inside of the Group Policy Editor. You've probably seen a bunch of videos on
that already where I'm right-clicking, creating a GPO, managing either Least Privilege or Windows 10
or Applications or whatever it is. I'm doing the work, creating and editing policies.

In PolicyPak Cloud land, what does this look like? We call it our in-cloud editors. The idea is that
you can just right here create a new policy. Click on what you want, either all the Microsoft Admin
Templates or Group Policy Preferences or Microsoft Security Settings, or all of PolicyPak's specific
settings; well, not all. That's the thing.

We can't do all of PolicyPak's specific settings, but we can do a whole lot. In other videos we talk
about how if you're a cloud customer, we highly recommend that you have a small offline small scale
test lab that sort of mimics the on-prem world. Why would we ask you to do that? It gives you the
ability from time to time for items that we don't have in-cloud editors for, for you to take on-prem
GPO content and shift it to use with the cloud.

Said another way, again, if the cloud doesn't have an editor, you've got to use the on-prem editor
first. The good news is after you upload it to PolicyPak Cloud, if we don't have the in-cloud
editor, you can also take a policy that's in the cloud and bring it back to your MMC snap-in. There
are going to be some things that are like this, some things that we'll never have an in-cloud editor
for, although most things have in-cloud editors. As we progress, we're going to keep having in-cloud
editors.

There are going to be just some things that we probably won't ever have in-cloud editors for. Have a
small test lab with a fake domain controller and a fake domain joined machine to just do a little
bit of Group Policy so you can do some small-scale tests. Then take that policy and put it in
PolicyPak Cloud. Not a bad idea, and we recommend that through all of our videos and our
documentation.

Deploying policies, how hard is it to do? With on-prem and GPO, drop-dead easy. You've already done
it. You've created a GPO and link. Then you click Edit and you do the thing. When you close the GPO,
it's off and running. Deploying policies in Group Policy land is very easy.

Deploying cloud, same thing, very easy. Those icons look so similar. That was the goal. You can see
here on the left we've got AD and GPO in the Group Policy Management consul. On the right we've got
the Cloud consul. It looks very similar. You can see the idea that we're trying to really give you
Group Policy and PolicyPak through the cloud with our PolicyPak Cloud service.

For the other two, for MDM and endpoint management, how do you take policies that you've created in
GPO land and get them deployed using MDM or SCCM land? What you do, like I said, you create the
policies in GPO land. You can export them as XML files. We let you take those XML files and use our
little utility called the PolicyPak Exporter utility. What we're going to do is Create a New MSI
Installer, suck in those XML files, and out pops the exported MSI file.

The exported MSI file you're going to use in MDM and SCCM or KACE or LanDesk or whatever it is.
Here's what it's going to look like. In MDM land, you're just going to – well, we talked about this
before. MDM land has to get the Client-Side Extension out there. It has to get the license file out
there.

Again, I'm going to show you this one. It also has to get the PolicyPak settings out there. That's
this. This is an uploaded MSI file that has the stuff you want to deploy. You target it toward your
machines, and you are off to the races.

What do we do for our SCCM or other utility that's like that, our endpoint management utilities?
Same idea; you just put it under Share and go to town. It's exported MSIs that are really the Group
Policy settings that you've saved, and they're going to be deployed this way. We call this the Not
Group Policy method. You can use the Group Policy method or the Not Group Policy method to get your
directives deployed.

How do you keep the Client-Side Extension updated? In GPO, MDM, and endpoint manager land, how do
you do this? You just download the latest bits from the portal, and then you get it deployed using
whatever tool you like. If you are already using SCCM for software deployment or PDQ deploy, if you
don't have anything already, or if you're already using MDM to deploy stuff, great. When we have bug
fixes and updates and new features and you need to get that Client-Side Extension updated and out
there, what are you going to do? Download it from our portal, get it over to your software
deployment whatever it is, and send it out there.

How do we keep the CSE updated for PolicyPak Cloud? It's always available. Whenever we publish a new
version, it's always available. Then you dictate per group.

If you have a small-scale test group, a medium-scale test group, and then your large-scale rollout,
you just go over to the group and say I want to zap this Client-Side Extension over to them. Bang,
they get new features and bug fixes just like that. On the one hand, you might have to keep it
updated with GPOs or MDM and endpoint management. On the right, PolicyPak Cloud is always available
and available per group.

I know some of you are probably squirming and are like I still don't know. Should I use MDM or the
cloud method? I don't know. I'm going to try to make this easy for you. If you don't have an MDM
solution at all but you want to do cloud stuff, I'm telling you, you're going to love our PolicyPak
Cloud solution. It's fantastic.

Now if you're twisted up about if you've got an MDM solution, what do you do? You have a choice to
make. If you want everything in one consul, that's fine. You might need to go with your MDM solution
as the one consul. Remember though, you'll still have to create the policies, export them, wrap them
up, and ship them out using your MDM. That's totally fine.

If you want maximum flexibility, you could do that hybrid thing we talked about where you can use
your MDM solution to kind of bootstrap and get the PolicyPak Cloud Client installed. Use your MDM
for your MDM stuff, whatever you want to do there. If you want to do hardware inventory, something
that we don't do, that's great. If you want to be able to nuke the machine from upon high, something
we don't do, with your MDM service, that's fine. Then use PolicyPak Cloud for everything else, for
your policy creation and your editing and, finally, your delivery, perfectly fine.

If you're still twisted up, here's the cheat sheet. PolicyPak Cloud is about ten times easier than
trying to do the equivalent function in an MDM service. Said another way, unless you need to be
all-in on an MDM solution, we recommend that you use PolicyPak Cloud. It's just a lot easier to get
it done. Like I said, our customers will tell you that it just works, which is awesome.

Let's talk about how to get licensed. If you're in the Group Policy land, MDM land, or endpoint
management land, what are you going to do? You're going to use our license tool, our LT tool, and
it's going to help you count the computers on-prem and the computers that are eligible for MDM. It
will count that number and spit out a number at the end. Then you'll send this over to your sales
team. They will generate you a license key for use, either a 30-day key or a full key.

Then PolicyPak Cloud, how do you get licensed? We handle all that for you. In PolicyPak Cloud land,
you might be on the monthly plan. You might be on the yearly plan. It doesn't really matter. We have
that handled for you already. All the licensing is just handled through PolicyPak Cloud.

If you are licensed for both things, if you're an Enterprise or Professional customer where you're
licensed across all the methods, that's not a problem either. You buy into a chunk of licenses, and
you can spread them across your GPO, MDM, SCCM, or endpoint management and your cloud. You can just
spread it across all of it. We just catch up at the end of the year if you're an Enterprise or
Professional customer.

What do you do with a license file once you get it from us? If you're a GPO or endpoint manager
customer, you're going to go into GPO land and suck it in. Here in this example you can see in this
GPO I've sucked in my Enterprise license. Enterprise license means you get all the components, your
license for particular scopes.

In Active Directory you get one thing and in Azure you might get another thing. Wait, there is no
Azure here. That's right. It's one license file that covers both things.

Hold that thought for a moment. In PolicyPak Cloud, again, there is no license file. We just handle
that for you. That's not a problem.

What about MDM land? What do we do with that license file in MDM land? What you're going to do is
this; you're going to take the license file we give you and zap it over to the machines that need to
be licensed. When you do that, those machines pick up the license and they're ready to go.

Again, the three things to make it go in MDM land are the Client-Side Extension, the license file,
which you can see here, and also the settings. We already talked about the settings. There's
something optional here if you're an SCCM or other kind of endpoint manager customer. You really
don't like GPOs. That's fine. If you really don't want to use GPOs, you don't have to.

The optional way to deploy your license if you're in charge of the SCCM environment in your world,
you can just drop the MSI licenses onto your endpoint or you can file copy it. Either one of those
methods will work. You've just got to get the license files over to your endpoint. You don't need
GPOs, if that's something you want to avoid. You can avoid it. This is an optional step.

Again, we have videos on all these things. We're just kind of giving you the overview of what's
possible here. Here we are kind of at the end. What's the summary here?

If you're using on-prem, MDM, or endpoint manager tools, you're going to use the Group Policy
Editor. That's the way we manage and edit policy settings today, even if that's not your deployment
method. If you want to create a policy for Least Privilege or Windows 10 or applications or whatever
it is, that's great. You're going to have to have the Group Policy Editor. You can use it a small
test lab to get it done. When you're done, you have to take those XMLs, the exported XMLs and wrap
them into an MSI, and then deploy it using the Not Group Policy method if you're using MDM or
endpoint manager.

All these methods use exactly the same Client-Side Extension. You need to keep them updated. Then
you just download it from the portal. You update it using whatever method you like. When we give you
the license file, that's going to light up the desired methods.

For instance, if you tell us I'm an enterprise customer or professional customer, but I only really
need the GPO stuff, great. We're not going to light up the MDM or the endpoint management style. You
tell us the other way around. We are all in on SDCM. We just don't like that GPO stuff. That's fine.
We're going to send you a license file that only lights up the desired method or methods you want.

You will tell us. In the hybrid or PolicyPak Cloud land, again, you're going to mostly use the
in-cloud editor, but sometimes you're going to have to fall back to the Group Policy Editor, which
is why we recommend you have a small offline test lab. It doesn't have to be a real world domain
controller, just a fake one with a fake computer as a domain joined machine. You can do some
small-scale testing there.

Sometimes you'll fall back to the Group Policy Editor. The Client-Side Extension, that's always
available in PolicyPak Cloud. You do need to keep it updated, and we give you the ability to toggle
different groups. We have videos on that, but you do have to keep it updated.

Then lastly, that license for PolicyPak Cloud is in cloud. That's really all there is to it. If you
are a SaaS customer, I hope you are focusing in on the cloud stuff. If you're a Professional or
Enterprise customer, remember, you get to use all the methods you want. They're all available to
you.

You just take your licenses and use them across all the methods. If you go overboard, it's not a
problem. We just catch up next year where you rerun the licensing tool for all of your on-prem
stuff. We just count that number. Then we just look at your number in the cloud, and we do a
true-up, and you're off to the races.

With that in mind, I hope this has been informative for you. If you have any questions, I'm happy to
personally take your questions. Of course, the sales team is also available to help you through your
journey. Thank you very much for being a PolicyPak customer. Looking forward to helping you out real
soon. Thanks so very much.

