---
title: "Managing Favorites in IE"
description: "Managing Favorites in IE"
sidebar_position: 100
---
# Managing Favorites in IE

Netwrix Endpoint Policy Manager (formerly PolicyPak): Managing Favorites in IE

<iframe width="560" height="315" src="https://www.youtube.com/embed/4xYA0FaD53A?si=KEXNMi7GUl7QwsU1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Managing Favorites in IE

Hi. This is Jeremy Moskowitz. In these videos, we're learning how to manage the favorites using
PolicyPak. Favorites is one of those things that you often want to manage for users, and I'll show
you how easy it is to do.

Let's go ahead and go over to our management station. This is a Group Policy Object that has the
Internet Explorer Pak in there. If we were to go over to "Favorites and Links," you can see how this
works. There's a special keyword here called "ONDELETE=REMOVE" or you can not use that. What this
says is whatever the user has already will be merged with what's already present.

But then what do you want to have happen when the policy no longer applies? Like if they change job
roles – they're in sales, and you move them from sales to marketing – what do you want to have
happen? Well, you could just do nothing, or you could do "ONDELETE=REMOVE." I'm going to leave that
as it is.

You can also set up new favorites. By way of example, you can just put one right on the root. I'll
call this "Hello1, http://Microsoft.com." That will put a favorite right on the root. You can also
make a folder and put a favorite in the folder. I'll call this "PolPakFolder/PolicyPakWebSite,
https://www.policypak.com/, add." That's going to deliver PolicyPak into a folder called PolPak
Folder.

You can also, if you want to, specify the icon. There's an "optional-icon" that you can specify.
We're not going to do that.

Then lastly, you can also have an entry that exists in a folder, and it has to be a perfect match.
It has to be in the "Folder," has to have the "Display Name," has to be the specific URL, and you
can "remove" it, if you're so inclined.

This idea works for "Favorites" and "Web Slices," which are actually Internet Explorer, I think from
10 and onward. I'm not going to demo them now, but they do work. We'll go ahead and just specify
these guys right here.

Now remember, this is "MERGED" with what's already present. If a user already has their favorite
websites and you just want to add your corporate websites inside a folder, you can do that very
quickly and also, like I said, "REMOVE" as needed.

We've also specified "ONDELETE=REMOVE" so that these entries will be automatically ripped away when
the guy no longer is in sales or marketing or whatever.

I'll go over this first machine here. You'll see in "Favorites" I don't have any of those already
there. I'll run "gpupdate" on this machine. I'll go over here. You'll see I don't have those
"Favorites" here. I'll go to this machine and run "gpupdate." This is Windows 8 with Internet
Explorer 11, and this is Windows 7 with Internet Explorer 8.

Once this is done, once Group Policy is done updating, we'll click on Internet Explorer and we'll
take a look and see what happened with the "Favorites." There we go. We can see we've got the
"PolPakFolder," and we've delivered it right inside.

But I don't see the other guy. Oh, I think I know why. I think I must have made a typo. Let's take a
look. Yeah, I forgot the word "add." There you go. You have to have the word "add," so "Hello1" that
goes to "http://Microsoft.com" isn't being added. Well, it is now, so that's good. I love being able
to troubleshoot right on the fly.

We'll run "gpupdate" again and see that that takes effect. We also might as well just get it right
the first time on this machine here as well. Now we'll see that PolicyPak is there, hopefully, and
also the "Hello1" representing Microsoft.

Now I'll click Internet Explorer and go over to "Favorites," and there we go. There's "Hello1," and
you can see that it hovers over and goes to "http://Microsoft.com" and in the "PolPakFolder" is
PolicyPak. If we go back to Internet Explorer 11 and we go over to "Favorites" here, there's
"Hello1" for "http://Microsoft.com." There's the "PolPakFolder," and there we go as well.

Now let's say the person changes job roles, and we're going to simulate that by unlinking the Group
Policy Object. This Group Policy Object no longer applies. If we go back over to the machine here
and run "gpupdate" and go back over to this machine and run "gpupdate," we're saying
"ONDELETE=REMOVE," which should pull those favorites that we had away.

Let's go ahead and see that in action. We'll go over to the first machine on Internet Explorer and
go over to "Favorites," and there you go. The folders still remain, but the actual entries are gone
because they were perfect matches. If we go back over here to this machine again and go here, you
can see that the entries are gone but the folders remain.

I hope this helps you manage your Internet Explorer favorites. Remember, if a user already has
favorites, it's not going to nuke their favorites. It will always merge their favorites with the
ones that you declare, and it will only remove on delete the ones that you put there not the ones
they put there. I hope that helps you out.

Thanks so much. Talk to you soon.


