---
title: "Endpoint Privilege Manager: Use Item Level Targeting to hone in when rules apply."
description: "Endpoint Privilege Manager: Use Item Level Targeting to hone in when rules apply."
sidebar_position: 100
---
# Endpoint Privilege Manager: Use Item Level Targeting to hone in when rules apply.

Maybe you don't want a Least Privilege rule to apply everywhere the GPO is linked. No problem. Use
the power of Item Level Targeting and filter who gets it based upon computer, group membership, IP
address and more.

<iframe width="560" height="315" src="https://www.youtube.com/embed/TFpiq04E75U" title="Endpoint Privilege Manager:  Use Item Level Targeting to hone in when rules apply." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PPLPM: Use Item Level Targeting to hone in when rules apply

Hi. This is Jeremy Moskowitz, and in this video I'm going to show you how you can use the remarkable
item-level targeting feature that you probably know and love from Group Policy Preferences and use
it with Least Privilege Manager.

In a previous example, you saw me do things like "Let procmon run when name is procmon and signed by
MS." If you're signed on to this Windows 7 computer as "EastSalesUser1," that's going to permit that
to occur. If you're logged onto this Windows 10 machine, it's also going to let it run. Again, I'm
the same guy. I'm EastSalesUser1, so therefore I get the same rules.

What if I wanted different rules for different computers? You can do that. With Least Privilege
Manager and all of Netwrix Endpoint Policy Manager (formerly PolicyPak)'s components we have this
idea of item-level targeting. You can say to have this thing, "Let procmon run when name is procmon
and signed by MS," only when certain conditions occur, for instance, only when "the operating system
is Windows 10." This rule will not run anymore on Windows 7.

When you do that, you can see it turns to orange and you can also look over here and "Item Level
Targeting" is changed to "Yes." We're saying that this rule will now only apply under the condition,
in this case, of the operating system. There are a zillion conditions. I just want to show you that
the next time the user logs on or Group Policy applies, what our expectation is going to be.

I'll go ahead and run GP Update on both of these machines. I'll wait for this to finish. Okay,
that's done. I'll go ahead and close this out. I'll go back over here. I'll close this out. Now the
deal is when I'm logged on as "EastSalesUser1" to Windows 7, I don't get that advantage. When I log
on to that machine in Windows 10, I do get the rule applied.

Item-level targeting is mindbogglingly powerful. You can do some other cool things like create a
"New Collection." A collection would be a group of stuff that goes together, for instance, "Do all
these rules WHEN these conditions are true."

For instance, maybe you want a bunch of rules to only apply for your "Terminal Session" or when
you're on an "IP Address Range" or when you're on the "Operating System" or when the guy is in a
"Security Group" or, on the computer side, when the computer is in a "Security Group." You could
say, for instance, when somebody is a "domain" admin ("Domain Admins") they get certain things
applied to them, and when they're not a domain admin they get other things to apply to them.

Item-level targeting lets you perform the operation of conditions on either a particular rule or on
a collection where all the items that would happen inside this collection would occur only when that
condition occurs. You can see that we do a little color change to orange whenever item-level
targeting is on.

I hope this helps you get started with item-level targeting. It's super powerful, so use it wisely.


