---
title: "Endpoint Policy Managerand Citrix Endpoint Manager: Deploy real Group Policy and Endpoint Policy Manager settings via CEM"
description: "Endpoint Policy Managerand Citrix Endpoint Manager: Deploy real Group Policy and Endpoint Policy Manager settings via CEM"
sidebar_position: 60
---
# Endpoint Policy Managerand Citrix Endpoint Manager: Deploy real Group Policy and Endpoint Policy Manager settings via CEM

CEM is great ! But it has no way to deliver real Group Policy settings, or Netwrix Endpoint Policy
Manager (formerly PolicyPak)'s own special settings. Use Endpoint Policy Manager MDM alongside
Citrix CEM for a powerful combination to increase your endpoint management capabilities !

<iframe width="560" height="315" src="https://www.youtube.com/embed/PLwimJ92PUg" title="Endpoint Policy Manager and Citrix Endpoint Manager: Deploy real Group Policy and Endpoint Policy Manager settings via CEM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, Microsoft MVP and founder of Endpoint Policy Manager Software. In this
video we're going to learn how to use Endpoint Policy Manager plus Citrix Endpoint Management or CEM
for short. In this video I'm expecting that you've already done the Walk Before You Run
demonstrations, and you verified that the license file we gave you is as expected and working. With
that in mind, let's go ahead and get started.

Remember, the three things you need to get to upload to your Citrix Endpoint Management is going to
be the three items that we gave you. The first thing is going to be the Endpoint Policy Manager
license, then the Client-Side Extension, and then the directives. Under apps you're going to click
on Add and hit the Add button and use the enterprise to do the upload. I suggest you clear all
first, and we'll give it a name. The name we want to give it is something like Endpoint Policy
Manager License for Fabrikam.

The category is not going to be the default but instead is going to be the category that I've
pre-created for this. That way you can keep things nice and organized. You might as well also put in
a description here.

Next we're going to click on Windows Tablet, Windows Desktop or Tablet. We're going to upload. The
first thing we're going be uploading is our license file. You've already tested this and you know
that it works.

There's some pieces of information you need to get to jam in here, and we're going to use our tool
called the Endpoint Policy Manager MSI Product Code Input Tool. You're going to select the Endpoint
Policy Manager license file. Let me go ahead and do that right here. Give me a quick second to track
it down. Let's double-click on it.

You can see the MSI Product Tool is going to expose all the things you need like the product name
and so on. We're just going to jam in each thing one by one. This doesn't have to match exactly, but
it certainly couldn't hurt.

I'll put the description in as well. This has to match exactly, so we're going to go ahead and copy
and paste it from the product version right here. The next piece you need is the product code.
What's special about this is that we're going to show it with the brackets. You're going to take it
without the brackets.

I'm going to go ahead and paste it in and get rid of the bracket on the bottom and on the top, and
you're clear for takeoff. We'll go and click on Next. No, don't click on Next yet. We need to also
put in the installation context.

All of the stuff we're sending you is devices. It's device context. The license file, the
Client-Side Extension, and the directives are all device context. Since we're here in the command
line, we're going to go ahead and put a /quiet. Again, it's device here.

That's it, nothing else to it. We're just going to click Next and keep on going here. In this first
example I'm going to select the delivery group just to show you how the assignment works by default
with Citrix CEM.

Now we're going to go to the delivery group. On the top right we're going to click on Delivery
Groups and select the delivery group itself. Let's go ahead and click Edit and hit on Apps on the
left side in the row side over there.

You can see that the application is optional. We're going to get rid of it as optional and just drag
and drop it over to required. That's what happens when you make it part of the CEM workflow. My
recommendation is to generally do it outside of this process.

We'll do that for the next one just to show a quick difference. We'll go ahead and click Next and
Next and just zip, zip, zip, and we'll be done when we hit Save. Now it's locked and loaded in the
delivery group.

Back to apps; now we'll click on Add. Again, back on enterprise, and this time we're going to do the
Endpoint Policy Manager Client-Side Extension. We'll change the default group to our nice group that
we've created earlier. It's time – not for IOS. We're going to clear all those. Go ahead and pick
the Windows Desktop Tablet. Now it's time to upload the Client-Side Extension.

This takes a minute, so I'll pause the video and come back in just a quick second. Now we're going
to go ahead and rerun the MSI product tool code again that we provide on the Endpoint Policy Manager
extras. We're going to point it toward our own Client-Side Extension to see what's inside it.

Let's go back to the fake CD-ROM and go ahead and click that. There we go. Now we've got the
information we need. We're going to get the product name first. Go ahead and jam that back in there
in the app name. We can make it the same for the description, if that's what we want to do.

Now we have to grab the product version piece as well. Go ahead and paste that in. Remember, it's
time to get the product code; not the upgrade code, the product code. Remember, we have those
brackets in there. We'll paste it in and jam those brackets out. We'll delete those.

Remember, the context is device and the command line is /quiet. Go ahead and click Next and Next,
Next, Next, and you're off to the races. Here I'm going to skip putting it in a delivery group. In
the last one I added the delivery group, and that made it optional.

What I want to do this time is show you how you can make it required. In order to that, back here in
apps, I'm going to go ahead and click on the app itself and click inside the delivery group, rather.

Inside the delivery group I want to guarantee by clicking Edit here and dragging that app in. That's
apps here on the left-hand side. You can see it's not assigned at all. I want to make sure it gets
delivered to my delivery group. I'm going to just drag it across and make it a required app.

Before, the first one was optional. I went through the workflow and changed it. Now I'm making this
second one forced. Now I'm Next, Next, Next and Save. Now we're off to the last one.

Let's go ahead and grab the examples, the same ones you used in the Walk Before You Run. Go ahead
and click Add. We'll go ahead and upload this MSI by clicking on Enterprise again.

Let's give it a name like Endpoint Policy Manager Examples Walk Before You Run, same thing here for
the description. Let's pick the app category, not the default; again, our nice neat category that we
have specifically for this. Go ahead and click Next. It's time to clear all once again. Go ahead and
select Windows Desktop and Tablet. It's time to upload the MSI file examples, same Walk Before You
Run Examples as we did before.

We're going to use our MDM inquiry tool here; again, that's hanging out in the Endpoint Policy
Manager extras, the MSI code output tool. We're then going to select the example files or whatever
MSI you're using. Again, I highly recommend you pick the examples.

Then we're going to select the product name; again, you've seen this a couple times now. Go ahead
and paste that in. Description, that's okay too. We need to grab the product version. Go ahead and
grab that product version there.

Move down a little bit. Remember, the product code piece, we're going to grab that and lop off the
brackets on the end. Remove that guy. Remove the other guy.

There's device and the command line. This is a /quiet. That's it. We'll zip to the end zone here.
Again, if you pick the delivery group, that's going to make it optional. I don't want you to do
that. I want you to bypass that.

I want you to go inside the delivery group specifically by clicking on delivery groups, finding our
nice, neat delivery group here. Then you're going to click on Edit and find the apps here. Then
you're going to drag across the Walk Before You Run examples into required land and hit Next. Click
Save and that's it. You are locked and loaded.

Back on the endpoint here, let's go to our MDM enrollment. Down here we're going to enroll only in
device management. I don't have the fancy pants look up stuff set up, so I've got to put my right
user in here, which is my north sales user one here. I've got to put my URL to help me with the auto
discover. Then we're going to go ahead and get MDM enrolled.

Give it our password here. Remember, what's going to happen now is that all three of these items are
going to be downloaded from Citrix CEM onto the target machine. You can see this in any number of
ways. You can see this by clicking on – actually, you don't have to click on Sync. It should happen
automatically, although I'm clicking on it because I'm impatient. It should come down pretty fast.

If you go backward and forward in this report, you should start to see these items populate. There
we go. I don't see it yet. Not a big deal. There it is.

I can see that because you can see the Endpoint Policy Manager icon there on the left as one of our
examples. There we go. We can see it there in the report. That's all good.

Then let's go ahead and take a look at some of the other settings that we've set here. Remember in
one of our examples, if we take a look at gpedit.msc we can see that we changed the guest account,
and you can only see that inside the Group Policy Editor. Let's go ahead and take a look at that
real quick and make sure we can see that.

That's going to be computer side, Windows settings here, security settings, local policies, security
options. You can see the renamed guest account is now Endpoint Policy Manager Guest. That was part
of our examples.

The other thing we did is to manipulate the screensaver with an Admin Template setting. Let's see if
that one came across as well. Click on Change the Screensaver here. You can see that we've set the
screensaver to ribbons and the wait to 17. This was all in the Walk Before You Run demo, but now
we're deploying the settings using Citrix CEM.

Inside the control panel you can actually see all three of the items are there. We've got the
Client-Side Extension, the license, and the packaged settings all delivered just the way you expect
through CEM. That is really kind of it, your final checkout.

Back on the Citrix Endpoint Manager console, you can see your machines that are being managed. You
can analyze them and do everything to your heart's content. I hope this video helps you get started
with Endpoint Policy Manager and Citrix CEM. If you need any TLC, we're here to help you out and so
are our friends at Citrix. Thank you very much and looking forward to getting you started with
Endpoint Policy Manager and Citrix CEM soon. Thanks very much. Take care.


