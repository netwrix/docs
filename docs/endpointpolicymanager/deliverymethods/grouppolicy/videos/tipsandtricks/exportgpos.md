---
title: "Reduce GPOs (and/or export them for use with Endpoint Policy Manager Cloud or with MDM)"
description: "Reduce GPOs (and/or export them for use with Endpoint Policy Manager Cloud or with MDM)"
sidebar_position: 20
---
# Reduce GPOs (and/or export them for use with Endpoint Policy Manager Cloud or with MDM)

Want to reduce the number of GPOs you have? Then use Netwrix Endpoint Policy Manager (formerly
PolicyPak)'s PP Merge Utility to take entire GPOs, or portions of GPOs and merge them into PP Admin
Templates Files format. Then, after that you've got LESS GPOs.. and also a quick way to export for
use with PP Cloud or PP with MDM.

<iframe width="560" height="315" src="https://www.youtube.com/embed/a1QE8ljmGFA" title="Endpoint Policy Manager: Reduce GPOs (and/or export them for use with Endpoint Policy Manager Cloud or with MDM)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Reduce GPOs (and/or export them for use with PolicyPak Cloud or with MDM)

Hi. This is Jeremy Moskowitz. In this video, I'm going to answer two questions at once. The first
question is: How can I reduce the raw amount of Group Policy Objects that I have if I'm using
Endpoint Policy Manager On-Prem? The second question is: How can I take my existing Group Policy
settings like my "Desktop" or "Laptop" or "User" settings and export those quickly from an existing
Group Policy Object that might have 80 kabillion settings in it into a format I can use with either
Endpoint Policy Manager Cloud or Endpoint Policy Manager with MDM?

The answer is pretty simple. We have a utility that's called the "Endpoint Policy Manager Group
Policy Merge Tool." You get it when you download the Endpoint Policy Manager bits. It's in the
"Endpoint Policy Manager Extras" folder. Be careful. There's this thing that says "Endpoint Policy
Manager Group Policy Merge Tool.exe" but it's really just the .exe XML configuration. The real thing
you want to click on is the actual "Endpoint Policy Manager Group Policy Merge Tool" "Application."

Let's see how easy this tool is to use. The goal is to get your Group Policy settings that have
Microsoft's "ADM/ADMX Registry Settings" into our format, which is called the Endpoint Policy
Manager Administrative Templates Manager format. It's very easy to do.

What I'm going to do is "Manually select GPOs from the list." The first thing I want to do is just
get my user settings. If I take a look at my "Sales/East Sales/East Sales Users," take a look at
that Group Policy Object, and also my "West Sales/West Sales Users," let's just take a look at just
the user side stuff for a second.

If I select these two Group Policy Objects from the list, the first thing we're going to do is read
it. Actually, I like to just "Expand All." I just want to see what I'm up against. Okay, cool. Not
too much. By the way, I did that just so you're not overwhelmed. If you have incredibly long Group
Policy Objects, you might have to run this tool several times to just get exactly where you want,
the things that you want to do into our format.

To get started, I'm going to go ahead and take all the "Start Menu and Taskbar" and all the "Control
Panel" settings because it turns out I really like the Start Menu and Control Panel settings I've
got here. I'm going to merge them into a new GPO. I'll click "Next." I'm going to pick a new Group
Policy Object to update ("Convert policies to Endpoint Policy Manager ATM policies and put into
existing GPO").

I actually have to create the Group Policy Object first. What I'm going to do is put it right in the
Group Policy Objects folder for now. I'll call this "Migrated User Settings." So it will go there.
Then I'll pick that Group Policy Object ("Select GPO"): "Group Policy Objects/Migrated User
Settings." We'll go ahead and then click "Next."

What we're going to do now is ask you, "Where do you want to put these things?" because Endpoint
Policy Manager is amazingly powerful. You can put them in what's called containers. You can say on
the user side in the "Administrative Templates Manager" folder, "Add Collection" and you can say
"All our user side stuff." That's great.

You can also put "Item Level Targeting" on it, which can only affect certain people under certain
conditions like a particular "Security Group" or if they're in an "IP Address Range" or any number
of things. I'm not going to do that right, so we'll say "All our user side stuff."

Why is computer hanging out here? Because Endpoint Policy Manager has this amazing ability to say,
"Take your user side things and drive it into every user on that computer" if you want it to. If you
want to, you can do what I'm doing here or you can drive it in on the computer side. I'm just going
to stay on the easy path and just put "All our user side stuff" right here.

When I do this, it takes all of the settings we just clicked on – all of them. You can see what they
all were. Let's "Edit GPO" and see what has occurred here. Now if I go to user side, "Endpoint
Policy Manager /Administrative Templates Manager," you can see I have "All our user side stuff."
Those are all the settings that we had across those two Group Policy Objects.

What's that? You want to get this into Endpoint Policy Manager Cloud or use it with Endpoint Policy
Manager and MDM? No problem. You can right click and "Export Collection as XML." At that point, you
can either upload the XML file directly into Endpoint Policy Manager Cloud or you can use the
"Endpoint Policy Manager Exporter Tool" to then wrap it up and then get it and use it with your MDM
solution.

That's the first way to use this tool. Let me show you another one. In fact, let me "Finish" and
start over again. Another way to use this tool is to, like I said, reduce the amount of raw Group
Policy Objects. Let me go ahead and "Manually select GPOs from the list." In fact, I'm going to do
it one-by-one.

I'm going to go to my "Group Policy Objects" and I'm just going to pick my "Laptop Policy" because I
might have nine different laptop policies for different conditions. Maybe I can get it down to one.
I've got nine different desktop policies, all for different conditions. Maybe I can get it down to
even less than one. I can put it into the same Group Policy Object as this "Laptop Policy."

I'm going to take this "Laptop Policy" one first. I'm going to take all the laptop stuff that I want
in here, and I'm going to create another GPO for just our laptop stuff. I'll go ahead and create a
"New GPO," and I'll call this "Computer Stuff (Laptop and Desktop)." You'll see where I'm going with
this in just two seconds.

There we go. There's our GPO. I'll go ahead and "Select GPO" and pick the right one. Now, the
settings that we just set, those were for laptops. Here in the "Administrative Templates Manager"
folder, I'm going to "Add Collection." I'm going to call this "Just Laptop Stuff." How do we make it
to only hit laptops though? That's where "Item Level Targeting" comes on, on the collection.

We can say only do the stuff we're about to convert when the machine is a "Portable Computer," and
just like that we've selected a particular collection, that collection has item-level targeting on
it, and we're reading the source Group Policy Object copying in all the settings and we're done.

Let's go ahead and do one more. We're going to take our desktop stuff. I'm going to "Manually select
GPOs from the list" and select the desktop Group Policy Object here. That was the laptop one. Let's
now do the desktop one ("Desktop Policy").

I'm then going to take all my desktop stuff, whatever is important to me here. I can cherry pick the
things I want. I can select the same exact Group Policy Object ("Select GPO"). Remember, we gave it
a cool name. We said "Computer Stuff (Laptop and Desktop)," all the things related to laptops and
desktops.

We'll go ahead and select that, but we don't want to shove it all into "Just Laptop Stuff." What we
want to do is "Add Collection" and call it "Just Desktop Stuff." How do we know we're going to hit
just desktops? We can do it maybe based on some kind of naming convention that you have, so maybe if
the "Computer Name" is "\*desktop\*" or maybe there's some other convention for you. I'm just using
this as an example. I'm creating this collection, and there we go: "Just Desktop Stuff."

We'll go ahead and click "Next" here and we'll convert all that over. Let's look at the Group Policy
Object ("Edit GPO"). Let's see what we accomplished inside this single GPO now. Now if we go to
computer side, "Endpoint Policy Manager" and look at "Administrative Templates Manager," we now have
two collections. Orange means we've got item-level targeting on it.

That's "Just Laptop Stuff." Let's take a look and see what's inside there: just the laptop stuff. We
want to take a look at "Just Desktop Stuff." There we go. We can do that too. Again, this lets you
take anything that's in a Group Policy Object and if you wanted to also, you can convert it from the
user side also into the computer side because Endpoint Policy Manager is magical and we can "Add"
stuff, any policy, including stuff that's on the user side.

Once again, if you like this and you want to use it with Endpoint Policy Manager Cloud or your MDM,
you can right click and "Export Collection as XML" and use it with our "Endpoint Policy Manager
Exporter Tool" and you can export this and wrap it up into an MSI to be used with your MDM service
or straight into Endpoint Policy Manager Cloud as an XML.

I hope this helps you out. This is a great tool to help you reduce the amount of raw Group Policy
Objects you have. A lot of people asked us for this, and this is the way that you will do this. I
hope this helps you out and gets you started.

Thanks so much.


