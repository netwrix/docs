---
title: "Endpoint Policy Manager: Use Azure Blob Storage to Deploy and Patch your software"
description: "Endpoint Policy Manager: Use Azure Blob Storage to Deploy and Patch your software"
sidebar_position: 20
---
# Endpoint Policy Manager: Use Azure Blob Storage to Deploy and Patch your software

Want to use Azure Blob Storage to deploy your software, and keep it up to date? With Netwrix
Endpoint Policy Manager (formerly PolicyPak), it's super easy. Here's how to create your Azure Blob,
upload your software, then use Endpoint Policy Manager Remote Work Delivery Manager to deploy that
software (and keep it updated.)

<iframe width="560" height="315" src="https://www.youtube.com/embed/GPvAJLQEbVc" title="Endpoint Policy Manager: Use Azure Blob Storage to Deploy and Patch your software" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, and in this video, I'm going to show you how you can use Endpoint
Policy Manager Remote Work Delivery Manager with Azure Blob Storage. If you're not familiar with
Azure Blob Storage, it's a lot like Amazon S3 storage and that kind of thing. Here I am in the home
page of Azure Portal. You might see something like Storage accounts here. If you can't find it, you
can just type the word "blob" right in here, and it'll find you Storage accounts. You've got to
start there in Storage accounts.

You might have a few storage accounts already. If you don't, you can Add one and then go through the
wizard. When you're on this page, which you'll probably do, is you can Create a new resource group,
which is like a pre- container thing, so I'll call this AzureBlob1 just so we're on the same page
here. Then the storage account name, you can give it a similar thing if you want to – AzureBlob1.
Whoops, only contain lowercase characters. There we go. Alright. Oh, it has to be a name that nobody
else has ever taken before, so I'll do ppazureblob1.

There are a couple other bits and bobs here about the storage type. I'm just going to go with the
latest greatest, and then you can decide if you want it redundant or not. I don't think I need to do
anything like that for what I'm doing here, so I'll just go ahead and Review and create, and I'm off
to the races. Create. Doing its thing up here. Deployment is in progress. I'm just going to pause
the video, wait a minute for this to be done, and I'll come right back, and we'll continue onward.
Okay, that took like ten seconds.

Now we'll click on Go to resource here, and here's our special Azure Blob. What's next is getting
ready to rock with the files that we want. In order to do that, what we're going to do is go down
here to the blob service section and click on Containers and add a new container. This is where you
get to decide access, so Private (no anonymous access) that's not going to help us here. What we
need is Blob access, Blob (anonymous access for blobs only). That's cool. Ppblob1 for software.
That's allowed. Ppblob1 for software. Okay, that's great. I don't think we need anything advanced
here. Yeah, I think we're okay there. I'll go ahead and click on Create. Now we'll go ahead and
click into that little guy.

We'll go ahead and click on Upload here. It's time to upload the file. When I do, I'm going to pick
the c:\share. You can see I've got to versions of 7-Zip. I've got 7z.msi and 7z19.msi. This one's
actually version 16, but I'm just going to call it 7z.msi, and I'll show you why in a little bit.
I'll go ahead and upload this. Once that's done here – okay, cool. Once that's done, what I'll do
now is I'll go head and click on it, and what you should see is this URL. This URL is publicly
available. How do you test this out? You just go to a new window, or if you want to go to a new in
private browsing window, that's even more – better test, and just paste it in. Does it download? It
downloads. You're off to the races. Does that make sense? You can see it's publicly accessible.

You're going to take that item, and you'll – this is my little Notepad++, and I'll just paste it
here. Okay, I'm going to store this – hold on to this for what's next. I think that's it for this.
We've got it. It's in the blob. We're ready to go. There's 7-Zip in the blob. That's really it.

Now if what we want to do if we want to deploy 7-Zip over to our endpoint machines, you can use
Group Policy to do it, you can use Endpoint Policy Manager MDM to do it, you can do any technique
you want. All you're going to do is go to Create PP Remote Work Delivery Manager via Azure Blob
Storage here. We'll go ahead and click Edit here. Now we'll dive down – you can do this on use or
computer side. I'm doing this on the user side. Go to Remote Work Delivery Manager, and remember,
you've got that link, so we'll go to Add a New Web Policy here. Once you're here, you're going to go
ahead and paste it in. We're going to validate it to make sure that it's good, and then you're off
to the races.

We're going to copy a file. We're going to give it to c:\7zdownload\ or something like that. That'll
be the target directory. Then in this case we want to access the source and destination as the
computer because this way we can do an install properly. We can make this Always, and Always is
important and you'll see why because as I said earlier, I needed 7z not 7z16 for a reason, so I'll
go ahead and select this as Always. My process that I want to run – I think I've got this on – yeah,
I've got this on this tab. What I want to run is my 7z installer here, so that's msiexec.exe /i
%DestinationDir%\7z.msi and do it quietly. My revert action when this policy no longer applies, I
want to msiexec/i uninstall here. Whoops, that's this guy here, DestinationDir. That's the right
guy. Msiexec/x. Then that's it.

Now what I'm going to do is go over to my endpoint machine, and let's see. Do I have 7-Zip on this
machine? If I type 7-Zip, nope. No 7-Zip on this machine. Again, what I'm doing here in this
demonstration happens to be using the Group Policy version. If you wanted to use Endpoint Policy
Manager Cloud you could do that. If you wanted to wrap up this policy and deploy it to your machines
using MDM, you could do that too. Endpoint Policy Manager Remote Work Delivery Manager works across
all of our platforms.

Once you've done the gpupdate or the policy kicks in, it'll download, and look at that, 7-Zip file
manager. If we run Help About, we can it's 7-Zip 16, which is great. Now hold that thought in your
brain for a little while. Why is that? Because what I want to do next is I want to go back into my
Azure Blob Storage, and I want to upgrade 7-Zip 16 to 19. How do we do that?

What we're going to do is in my c:\share\ where I have all this stuff – and if I go back to 7z, what
I'm going to do is take that original one, I'm going to rename that guy 7z16. I'm going to rename
the 19 version to 7z. Watch why. Now that I've renamed this, we're going to do a little magic trick
in Azure Blob Storages. What I'm going to do is Upload the file. Overwrite file if it already
exists. Let me check that little guy. That's what I'm after. Then if I go back to share and go back
to 7z, which is really 7-Zip 19 and not 16 anymore, what does it do? We click on Upload here. Bing,
bing, bing, bing, bing, and that's it. We do nothing. We don't do anything else. We've done all the
hard work. We just overwrote that file with the latest version.

Let's go back to our endpoint. Let me prove I'm not pulling a fast one on you here. If I go back to
7-Zip manager and go to Help About, still 16. What I'm going to do next is wait for policy to apply.
Again, this would happen naturally with Endpoint Policy Manager MDM or Endpoint Policy Manager Cloud
or regular Group Policy. I'm just using Group Policy in this demonstration. Notice how I didn't have
to go back to policy land or teach my clients how to do anything. Very simple. Because I used that
special Always switch, it's just always checking. Now when I go back to 7-Zip manager here, and I go
to Help About, look at that. 7-Zip 19.

The key point here is that you can use Azure Blob Storage as a way to upload interesting
applications and then use Endpoint Policy Manager Remote Work Delivery Manager to deliver those
items and keep them automatically updated. Once you get the policy down, you don't have to keep
fighting with it or doing anything. It just will automatically be checking to see if anything's new.
You replace the files in Azure Blob Storage as you need to making it update, and that's it. You're
off to the races. Azure Blob Storage, Endpoint Policy Manager Remote Work Delivery Manager, your
endpoints, it's a match made in heaven. Hope this video helps you out. Thanks for watching. Hope to
get you started with Endpoint Policy Manager real soon. Bye-bye.


