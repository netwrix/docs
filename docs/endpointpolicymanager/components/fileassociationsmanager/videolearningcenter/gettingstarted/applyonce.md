---
title: "Endpoint Policy Manager File Associations Manager: Apply once (and drift)"
description: "Endpoint Policy Manager File Associations Manager: Apply once (and drift)"
sidebar_position: 20
---
# Endpoint Policy Manager File Associations Manager: Apply once (and drift)

Want to lay down one set of File Associations for some apps, but leave others to the end user to
change themselves? Use Endpoint Policy Manager File Associations Manager to "apply once" and let
those settings drift after you set them with the tips in this video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/KkiHMOv97Ms" title="Endpoint Policy Manager File Associations Manager: Apply once (and drift)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video, I'm going to show you how you can use Endpoint Policy
Manager File Associations Manager to set up your user or computer side file associations and do it
one time so that users can then drift from your configuration. This Group Policy object is already
linked over to my East Sales Users. You might have seen videos like this before where we can Add a
New Policy or Policy for Product (wizard). I love using the Wizard because you can interrogate an
application such as Adobe Reader and then ask it what it has to offer. It's got all these things to
offer but users might want to choose a different thing after you've made this choice.

I'll go ahead and do this. Apply once. We can say Always, Once or Once when forced. For instance, we
can set this one to Once. Then we can click Finish. If we want to set another Policy for Product
(wizard), let's say we want to do VLC media player as a different example here. We can say all the
items in VLC media player are going to be always reapplied. Let's go ahead and see that two
different types of behavior. These settings will be always applied. You can see that these are set
here for every single one of these policies. You can see that, if I were to double-click on the PDF
one for instance, you can see that this is applied Once. Each of the items that we use the Wizard
for are going to be applied Once.

If we were to go to VLC media Policies, each of those items are going to be applied Always. If we go
over to our target machine here and we run – actually, we can see first that the PDF reader is
currently set as Edge. Maybe the user likes Edge, I don't know. Then they go ahead and they wait for
group policy to process here. Go ahead and watch these icons. They're going to change in real time
as we set the file associations the way we need to. Boom. We set them in real time. The user says,
you know what, I'm not interested in using Acrobat Reader. Instead, I want to use Edge. That's fine.
We said that the PDF Policies are going to be Once and not again.  We said the VLC media player
policies, those are always going to be snapbacks. Let's go ahead and make those two changes and see
what happens when we reapply policy here.

What I'm going to do is I'm going to right-click and I'm going to Open with a different app and I'm
going to pick Always open with Edge or Chrome. It doesn't really matter. Maybe that's even a better
example. Let's go ahead and open it up with Chrome as a different thing here. You can see that PDF
opens up with Chrome and that's fine. If we were to change the VLC media player to Open with a
different app and we were to pick the Photos app here. Let's see what happens when we do that. We
can see that that's going to open just fine in the Photos app. There's my little video file. We
said, what happens on gpupdate? On gpupdate, we said that the PDF, that's going to stay put.
Whatever the user changes it to, let them go ahead and do that.

You can see that the VLC media player for the MP4 has come back. For some policies, we made them
apply once and for other policies, we made it snapback. You can see the PDF is Chrome and we can see
the video is snapped back to MP4. Just to finish up here, I do want to point out that the policies
actually have a third setting. If you wanted to, you have an option to also do Once or when forced.
The idea here is you could set it one time which will work fine and then if you do a gpupdate/force,
then and only then will it snapback. That will be a gpupdate/force and I have to set the policy to
make that work. Hope this apply once for file associations then drift helps you out. Looking forward
to getting you started with Endpoint Policy Manager real soon. Thanks so much.


