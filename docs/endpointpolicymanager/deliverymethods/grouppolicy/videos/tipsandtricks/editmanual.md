---
title: "Manual editing Item Level Targeting to affect local Admins and other local accounts"
description: "Manual editing Item Level Targeting to affect local Admins and other local accounts"
sidebar_position: 10
---
# Manual editing Item Level Targeting to affect local Admins and other local accounts

PolicyPak: Manual editing Item Level Targeting to affect local Admins and other local accounts

<iframe width="560" height="315" src="https://www.youtube.com/embed/KTKunCi0uY0?si=jB0UqQPxv0-ld1X8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Manual editing Item Level Targeting to affect local Admins and other local accounts

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can target anything in
Group Policy or PolicyPak-land to local administrators and local groups.

Let me show you what the problem is. The idea is that if you go to "Add" a "New Policy" setting here
– and I'm going to say something like "Control Panel," "Prohibit access to the Control Panel" – you
can use our "Item Level Targeting" feature
([https://www.policypak.com/pp-blog/item-level-targeting](https://www.policypak.com/pp-blog/item-level-targeting))
and specify a "Security Group." So you only want to do this thing when the guy is a member of a
"Security Group."

This is fine. This three little dots guy ("…") will only show you the Active Directory groups. What
people want to do is type in the name of local "administrators" or something like that. Well, that
doesn't work. Said another way, it's not able to populate the local "SID." You have to do that
yourself. You also have to tweak the XML to say, "Actually, I'm talking about a local group."

It doesn't really matter what this is called. You can call this "doesntmatter" and click "OK" here.
I have "Enabled" "Item Level Targeting," but it's not going to do anything. So what I'm going to do
next is I'm going to "Export as XML." I'll chuck it on the "Desktop," and I'll call this
"PP-ATM-EXPORT2."

Here's "PP-ATM-EXPORT2." We'll "Open with" "Notepad." Let's take a look at the item-level targeting,
which is this thing called "Filters." You can see here is what we care about is matching on the
"sid." Well, there's no SID because you can't type in the SID of a local group.

The other part is that, by default, the XML will not be looking for a local group
("localGroup=‘0'"). You have to say, "I want to look for a local group ("localGroup=‘0'")." You have
to specify the XML to say, "I'm looking for a local group."

The other part is, how do you get the "sid"? The way to get the SID is – and I've pre-staged this to
make sure I can demonstrate it very quickly – there's a "PowerShell" command called "get-ciminstance
win32_group." There are going to be a couple of types of groups that are listed here. Let's take a
look.

The first kinds are the built-in what's called well-known groups: "Administrators," "Guests," and so
on. Those are going to be the same SID across all of your systems. But if you have any created
groups yourself – like I've created one called "LOCALGROUP1" – that's going to have its own SID. So
you can either copy this SID, or in this case, I'm going to copy the local "Administrators" SID.

I'm going to punch that in here ("sid=‘'"). Now we're saying that this item will only take effect
for this "sid," which is administrators, and when it's the local group ("localGroup=‘1'"). You can
also change it to when they are not an administrator ("not=‘1'").

You see what I'm doing here? Now we're saying that this item, which is kill the Control Panel, will
only take effect when it's not an administrator and that administrator is a local administrator.
That's how to do this. We'll go ahead and "Save" this.

At this point, it's ready to be used if you want to right here back where we were. You can "Delete
Policy." Then what we can do is right click and "Import Collections as XML" again. We give you a
little container for it first. Now this item should say, when we click on "Item Level Targeting,"
the "Group" name "doesntmatter" but the "SID" is now populated. There's no way to populate the SID
unless you do it with the technique I just showed you. So now we're saying, "Effect just the local
administrators."

The other thing you could do with this is upload it to PolicyPak Cloud. I've already got that here.
If I were to go over here and go to "Computer Groups," now what I'll do is "Upload and link a new
XML here." I'll "Browse" for the file we just modified. There we go. We'll call this "PPATM: Kill
control panel when NOT a local admin" because we changed all those things. That's it. That gives you
the opportunity to utilize it in PolicyPak Cloud.

The same thing goes for just about everything else we do. For instance, if you have an item-level
targeting for "Application Settings Manager," "Browser Router," "Least Privilege Manager"
([https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html))
or anything, this all looks exactly the same. You can use the same exact technique if you want to
find the SID.

Also, by the way, the other command is to get the local users, which is "get-ciminstance
win32_useraccount" and there you go. If you wanted to say when not the local "Administrator," the
person, you would do "select name,sid." There we go.

Now this is the local "Administrator."

Then what you could do is you could create another item here. I'm just going to pick any policy, the
first one I can connect with here. You could say when the person is a "User" match and then "Match
by SID." Well, that's the thing. This will only show you Active Directory ones.

But if you put some stuff in here and then you export it – I want to just use "View as XML in
Notepad" as an example here – you would paste where the "sid" is. This would match on the local SID,
and then you'd have to save it back in.

That should give you enough to go on to modify it. I hope that helps you out and you can use
PolicyPak to affect your local users or groups with item-level targeting.

Thanks so much and talk to you soon.


