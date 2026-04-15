---
title: "Managing Application Settings on your MDM enrolled machines"
description: "Managing Application Settings on your MDM enrolled machines"
sidebar_position: 40
---
# Managing Application Settings on your MDM enrolled machines

Learn how you can use Application Manager in your MDM environment to manage a myriad of settings for
commonly used applications such as Acrobat Reader and Firefox.

<iframe width="560" height="315" src="https://www.youtube.com/embed/TAU2CareRu4" title="Managing Application Settings on your MDM enrolled machines" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with PolicyPak Software. In a previous video, we looked at how to create
policies that will allow us to manage applications, even if they aren't ADMX enabled by using the
PolicyPak Group Policy Edition. In this video, we'll learn how to export those policies and wrap
them up in an MSI then deploy them to your MDM-enrolled machine. Before we get started around that
though, let's take a look at our non-domain joined MDM-enrolled machine here. Just to really drive
the point home, let's see that indeed. This is not domain-joined and is in a work group called
WORKGROUP.

Now you can see that I already have the Client-Side Extension as well as the license file installed
on this machine which we will also be able to see when we get ready to deploy the MSI that we are
about to create. We know that this machine is ready to receive directives. Now let's take a look at
the first application that we want to manage. In this case, Firefox. We will come over here and open
up options and take a look. Maybe you want to set a particular homepage and lock that in but at the
moment, your users can do whatever they want.

Over here in privacy and security, if we scroll down, we see that this box is checked which means
that we are going to ask to save log-ins and passwords for websites which is a problem because it
could be a huge security risk so we're going to get rid of that too. Now for some more advanced
settings, we can go to aboutconfig and it's going to yell at me and say that I need to be careful
and I promise that I will. Now there are a lot of options here. However, we specifically want to
work with the URIS settings. These bottom three right here are the three that I'm talking about and
I have already inserted values in the policy that I created in the previous video.

Let's go over to our management station. I've already created a policy with the settings and
question that we discussed earlier, so all I need to do is go to the Firefox entry here,
right-click, Export settings to XML data file. I'm just going to call it manage Firefox and Save.
All right. Before we create the MSI and get it deployed, we're going to look at the management needs
of Java and Chrome. Come back over here and we'll take a look at Java here. First of all, under this
update tab, we see that it's going to check for updates automatically. Let's turn that off and tear
the knob off while we're at it. Under Security, we see that the user can make the changes to the
high versus very high settings here and can actually manage their own exception site list. This
could be incredibly dangerous since their users could force Java to run on whatever website they
please and they shouldn't be the ones in charge.

Next, let's look over at this Advanced tab. Has your CIO been breathing down your neck to remove and
secure protocols? Well, currently, Java is using tons of insecure protocols and we're going to get
rid of that and lock it down too. So moving back over to the management station again, we're just
going to do the same thing we did before. We're going to right-click, Export settings, Manage Java
and Save. Last but not least, we have Chrome. Let's open her up and take a look at the settings
here. All right. As with Firefox, we see that we are indeed offering to save passwords which is
again, big security risk and if we come to privacy and security, scroll down to Site Settings. We
see that while we will be asked before the browser accesses the camera or the microphone, all it
takes is a single click for the user to say yes and then, all of a sudden, your secrets are out the
window. So let's close this out because again the policy to manage those settings is indeed already
created so we will right-click and Export just like before.

All right. It's time to make an MSI that will manage all of the settings that we were just
discussing. So we've got a bunch of XML files but what are we going to do with them all and how will
they become an MSI file? We're going to use our PolicyPak Exporter Tool. It installs alongside the
admin console MSI and can be found under PolicyPak in the start menu. So we're going to open it up
and we're going to create a new MSI installer. Click next and we're going to add existing files and
go ahead and grab all three of those XMLs that we have just created. We see that it is installing
for the computer because we created it on the computer side. We'll click next and we can stick with
this generic product name, package policy pack settings and choose next again. The final thing that
we need to do is just give the actual MSI file a name and we can just call it, exported GPOs and
save and that's that.

So here's what we will do with just a little bit of movie magic. I am going to pause my video while
I get in to my MEM Admin Center and come right back. Here we are. Now notice that we already have
the Client Site Extension deployed as well as the license file. Remember, we looked at that in the
beginning of the video and saw that those two files already existed on my endpoint. Now, let's go
ahead and add the MSI we've just created. We'll select Add then choose the MSI we just created and
select open and that's that. Now I'm going to do that movie magic thing again while I pause my
video, while I get everything synced and then, come back.

We are back. Let's check it out. We now have the file on our endpoint as well as the License file
and the CSE. Now let's go open up our applications and see what we're managing within them. Let's
open up Firefox first again and we actually can see already that the homepage is there. We'll go
check out the Options. We'll go to Home and we'll see that not only is our setting there but it's
grayed out and it cannot be changed. If we come to privacy and security, we'll scroll down and see
there's that ask to remember setting and it is unchecked and also grayed out. Finally, let's go
check out that aboutconfig page. Accept the risk. Go check out the URIS settings and there we go.

There are the example values that were created from the policy in that previous video. It's like
magic. Next, let's go ahead and open up Java. We first wanted to tear the knob off of that automatic
update setting. Check it out, the update tab isn't even there anymore. When I go to the Security
tab, I see that very high is both selected and grayed out and we can see that I was able to deliver
an exception site list. I've also been locked out of adding to this because that setting is locked
out and only the ones that we delivered are going to stay there.

Now, going to the Advanced tab, we'll scroll down and we can see that sure enough, we are only using
TLS 1.2 and we've removed these other insecure protocols. Finally, let's go look at Chrome. We will
go find our settings again and look at the passwords area. We see that the offer to save passwords
is both off and grayed out and coming over to Privacy and security, we will see that the camera and
the microphone are both blocked and grayed out and there is nothing I can do to change that either.
So there you have it. This is how you can manage application settings on your non-domain joined
machines by using the application setting manager with PolicyPak MDM edition. If this is interesting
to you, sign up for a webinar and we will get you started on a 30-day free trial right away. Thanks
so much.


