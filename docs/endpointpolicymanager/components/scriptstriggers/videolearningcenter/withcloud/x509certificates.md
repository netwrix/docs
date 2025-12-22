---
title: "Endpoint Policy Manager Cloud Scripts Manager: Distribute and Import X.509 certificates"
description: "Endpoint Policy Manager Cloud Scripts Manager: Distribute and Import X.509 certificates"
sidebar_position: 10
---
# Endpoint Policy Manager Cloud Scripts Manager: Distribute and Import X.509 certificates

Use Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud and Scripts Manager to distribute and
import X.509 certificates to your endpoints, regardless of where they may reside, for use with
Endpoint Policy Manager VPN Manager or any any other purpose you have.

<iframe width="560" height="315" src="https://www.youtube.com/embed/yUj83ArFyZI" title="Endpoint Policy Manager Cloud Scripts Manager: Distribute and Import X.509 certificates" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Script:

```
# Create Cert - update path for certificate as needed below$CertFile = "C:\temp\Cert\FABRIKAM-VPN-DEMO-ROOTCA-CERT.cer"Write-Output "-----BEGIN CERTIFICATE------=Certificate in BASE64 x.509 format text goes here=------END CERTIFICATE-----" | Out-File $CertFile# Import cert - replace certificate name and path as needed below.certutil -addstore root "C:\temp\Cert\FABRIKAM-VPN-DEMO-ROOTCA-CERT.cer"
```

Hi, there. This is John Demianiuk with Endpoint Policy Manager Software. I'm going to show you how
to use Endpoint Policy Manager Cloud and Scripts Manager to distribute and import your custom 509
Certificates to use with Endpoint Policy Manager VPN Manager or for any other purposes you may need
on your endpoints. First off, we need a donor Certificate file. Let's head over to my donor machine.

We have Certificates Manager open. You can see we have our fabrikam-DC2016-CA certificate. We're
going to use this as our donor, and we're going to distribute this to our endpoints. Let's start by
taking an export of this file. We're going to do this in Base-64, so Export 64, and Finish. Let's
head over back to our work station here. I've got a copy of the exported file here. Let's right
click on this. Let's take a look in Notepad and see what it looks like. This is our file in Notepad.
This is the certificate that we need to distribute to the endpoints.

The next thing we need in order to get this done is we need the scripts. This is going to be
available in our Guidance Downloads. If it isn't yet, it will be. If it isn't yet, I will be
providing the script in the discussion or comments below. Let's take a look and see where you can
get it from.

The first thing is to log onto our Endpoint Policy Manager Portal. All of our clients have access to
the portal. If you're not sure what your log on is, you can contact sales and they'll get you set
up. First thing you need to do once you log in, head to Downloads. If you're downloading just the
guidance, you can head over to Guidance XMLs and Scripts. Inside here there's a bunch of scripts and
XML files for policies to help you do common things that you may need to do on your machine. I
already have the script downloaded. I've got the script in here. This is basically the script. We
have scrubbed out the certificate file, and this is the area that you would put in your own
certificate file here.

Let's start creating the rule. Let's head over to the Endpoint Policy Manager Cloud Editor. I'm
going to go straight into Computer Groups to create this rule. I know I'm going to put it right in
my test computer. I'm going to highlight my Test Computer Group. I'm going to Create and Link a New
Policy in this section here.

Scroll down and find Certificates Manager and click OK. New policy is Cert File. Create a new
policy. This is going to be on the machine side. Apply Action is where we're going to place our
PowerShell script. Of course, we have to click the dropdown to PowerShell. We're going to copy over
the script that we already created or downloaded.

Let's get our certificate. I already have the Begin and End Certificate sections, so I don't need to
copy those. I'm going to replace this middle section here. There is no revert action, so we'll just
click on OK. We've got our policy now. We'll click OK. That's saved to my Test Computer Group.

Let's theoretically switch over to my endpoint. We're going to download the policy and enforce that
policy on this endpoint. First let's take a look at a couple things. This is the temporary folder
that I put the certificate file in. You can put this in any folder you want. You can name it
anything that you want. The script allows you to specify the folder name and the file name to be
whatever you want it to be.

We'll take a look at Certificate Manager. [04:37] says where the certificate was. There is nothing
here. Let's open up command prompt. The first thing we're going to do is we're going to download the
file or the policies. To do that, type in ppcloud/sync. Here's our policy cert file here.

The next thing we're going to do is we're going to tell Endpoint Policy Manager to apply those
policies. You don't have to do this. I'm just accelerating the hands of time to get this done.
Endpoint Policy Manager does by default every hour run a sync and update your policies. That is
done. It is downloaded and applied to the computer.

If we take a look into the shortcut folder, there is our policy. You can double click on this to see
what it looks like. We don't have to install it, of course, because it already is installed. To show
that, I'm going to come back over here and Refresh. Here's our fabrikam-DC2016-CA policy, our
certificate all set to go.

That said, again, this is great for use with VPN Manager. Again, this is for absolutely any purpose
you need to get custom X509 Certificates onto your endpoints. Thanks a lot and have a great day.


