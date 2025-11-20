---
title: "Endpoint Policy Manager Cloud: What you need to get Started"
description: "Endpoint Policy Manager Cloud: What you need to get Started"
sidebar_position: 10
---
# Endpoint Policy Manager Cloud: What you need to get Started

Lets get you set up right. Watch this Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud orientation video to make sure you have everything you need to rock and roll with Endpoint Policy Manager Cloud.

<iframe width="560" height="315" src="https://www.youtube.com/embed/aapXBfVyAME" title="Endpoint Policy Manager Cloud: What you need to get Started" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak Cloud: What you need to get Started

Hi. This is Whitney with PolicyPak Software. In this video, we're going to talk about what you need
to be able to run PolicyPak Cloud, and we also will talk about what to expect in the following
videos.

To start off with, what you're going to need in order to run PolicyPak Cloud is a server that has
been promoted to a DC. Now this doesn't have to be a real server. I'm using VMware. Mine is a
completely fake server joined to a completely fake domain. We'll talk about how to do that in the
next video. So if you have a server and don't know how to promote it, watch the following video and
you'll be able to see how to promote your server to a DC.

The reason we do this is because PolicyPak Cloud does not have an editor on the website. The reason
you want to promote your server to a DC is so that you can leverage the "GPCM" here, as you can see
that I have, and create the directives that will then be exported as XML and uploaded to PolicyPak
Cloud. That's why we want to create this DC so we can leverage Group Policy to create those
directives that will then get sent to non-domain joined machines.

So you've got that server so you can create your directives. That's also where you will upload the
directives to the cloud is from this server here. The next thing you're going to need is an endpoint
that is not domain joined. You can see right here: "NOT DOMAIN JOIN." You want to have that so that
you can test out your cloud directives before putting them into a production environment.

I also recommend, although this is optional, that you have a domain joined machine. My domain is
called "whitneyr.com." You want to have a domain joined machine because that will let you take out
the middle man, so to speak. You can create your directives on your server and then push them over
to your domain joined machine, make sure the directive works, then you can upload it to the cloud.
That way, you cut out the cloud service as the middle man so if anything goes wrong, you can
troubleshoot whether it's the directive itself or if there's something going on with the cloud.

So you need those three parts. You'll need your DC, your non-domain joined machine, and optionally a
domain joined machine for troubleshooting purposes. That's what you'll need to be able to run
PolicyPak cloud. Of course, you'll need an Internet connection.

In the following videos, we will talk about how to create that DC as I mentioned before. We will
also look at how to create the directives, how to upload them, what the portal looks like, and how
all of it works all running together.

So keep watching, and I'll look forward to seeing you in the next videos.


