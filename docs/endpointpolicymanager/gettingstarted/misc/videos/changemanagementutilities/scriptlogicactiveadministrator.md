---
title: "Endpoint Policy Manager and Quest (ScriptLogic) ActiveAdministrator"
description: "Endpoint Policy Manager and Quest (ScriptLogic) ActiveAdministrator"
sidebar_position: 50
---

# Endpoint Policy Manager and Quest (ScriptLogic) ActiveAdministrator

ActiveAdministrator by ScriptLogic is a great tool for managing your GPOs. The good news is, Netwrix
Endpoint Policy Manager (formerly PolicyPak) is fully compatible with ActiveAdministrator, and works
right alongside it. Check out this video see how it all fits together!

<iframe width="560" height="315" src="https://www.youtube.com/embed/F3AsAgu2wDs" title="Endpoint Policy Manager and Quest ActiveAdministrator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak works alongside Active Administrator Video Transcript

Hi, everybody. This is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility and Founder of PolicyPak
Software. In this video, we're going to see how PolicyPak works alongside ScriptLogic's Active
Administrator.

Active Administrator is a great utility. It helps organizations deal with their auditing of AD
security, backup and recovery of AD objects and security in dealing with passwords. It also has a
pretty robust GPO management section. To be super clear, this product doesn't have any superpowers
on the desktop. That's not what this product's job is. That's not what Active Administrator does.

Active Administrator's job, at least in the Group Policy section, is to do check-in/check-out and
workflow management around Group Policy Objects. It deals with advanced Group Policy management
features about the GPO itself, not about actually managing the desktop itself. So no superpowers on
the desktop. If you're using Group Policy to do that, the good news is that's what PolicyPak does
and we can integrate perfectly with the GPO management around Active Administrator.

Let's go ahead and check out and see how that works. I'll go ahead and create a "New" GPO in Active
Administrator. I'll call this "Manage Flash Player with Group Policy and PolicyPak." It goes and
creates that there. As we can see, the "Group Policy Management Editor" opens. We'll just do what we
do in our other PolicyPak demonstrations.

We'll dive down under user side "PolicyPak/Applications/New/Application" and there it is, "PolicyPak
for Flash Player." We'll make our configurations happen. You can watch how this actually affects the
Flash client later. If you wanted to "Block all sites from using the camera and microphone"or you
wanted to "Never check for updates" or things like that, you could certainly do that. That's it as
far as we're concerned for that. We'll go ahead and close that out. We've made some live changes
right there.

Now when it comes to Active Administrator, it also has a full "GPO Repository" and "GPO History" and
"GPO Modeling." I'm not going to go into all that stuff, but let's for fun if I decide I want to
right click over this guy and I want to "Add to Offline Repository."

What it's doing now just to prove a point here is that we're fully compatible with the repository
that Active Administrator has, because PolicyPak is real, live Group Policy Objects. It's not an
add-on. It doesn't have any kind of weird moving parts. It really is regular Group Policy.

If we go down under "GPO Repository" here and we want to "Manage Flash Player with Group Policy and
PolicyPak," we can do all the normal things. If you're already an Active Administrator
administrator, you know how this works. You would "Check Out." You can see a little check out there.
We can "Edit GPO Offline" here.

We can make some additional of different changes if we want to here. We'll go ahead and we'll add
this change. We'll go ahead and uncheck that if we want to. That's totally fine. We're making some
changes. That's great.

Now that we've done that, we can "Check In – Apply Changes." Let's go ahead and do that here.
Alright, that's all checked in. Now at this point, we can "Publish Offline GPO to Active
Directory."Just go ahead and do we want to override it? Why yes we do, so we'll go ahead and say
"Yes" to that.

Now that that's all done, let's go back to the real GPMC here. We'll go ahead and "Refresh" the
"Group Policy Objects" here. We're looking for that "Manage Flash Player with Group Policy and
PolicyPak." You can see here, there are all the settings that we put right into the GPO directly.

That's the whole point. We are fully compatible with Active Administrator. If you are an Active
Administrator user and you are using it for the advanced Group Policy management style features to
back up, restore, perform history and do modeling on your GPOs themselves, you're in good company
because PolicyPak is going to work with it.

[Thanks](https://policypak.com/resources/thank-you-whitepapers/) so much, and I'll talk to you
soon.
