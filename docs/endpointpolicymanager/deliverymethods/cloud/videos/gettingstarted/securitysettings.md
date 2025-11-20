---
title: "Endpoint Policy Manager Cloud and Security Settings (More examples)"
description: "Endpoint Policy Manager Cloud and Security Settings (More examples)"
sidebar_position: 90
---
# Endpoint Policy Manager Cloud and Security Settings (More examples)

Use the in-cloud editors to manage Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud
settings. This couldn't be easier. Set the password, account settings, and other security settings
for your Windows machines, domain joined and non-domain joined.

<iframe width="560" height="315" src="https://www.youtube.com/embed/UsglBSa-oRg" title="Endpoint Policy Manager Cloud and Security Settings" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager Cloud and Security Settings

Hi. This is Jeremy Moskowitz, Founder and CTO of PolicyPak Software. In this video, I'm going to
show you how you can use PolicyPak Cloud to deliver security settings to PolicyPak Cloud to your
non-domain joined machines or your domain-joined machines.

In this example, you can see I've got my "Local Group Policy Editor" up here. I've got nothing
configured in particular for my password policies. If I were to take a look at my "Local
Policies/Security Options," all these are pretty important settings that you may want to configure.
I'm just going to configure one for the sake of example called "Accounts: Rename guest account." I'm
going to go ahead and close this out before continuing.

If I go over to PolicyPak Cloud land, it's pretty easy to do. All you need to do is to "Create and
link a new Policy" here. I'm doing this to the "All" group or you could do it to a specific group.
I'm going to pick the "Security Settings Manager." This is easy, "PP SEC DEMO 123," give it a
"Policy name." You just point and click. Couldn't be easier.

We're going to go down first to "Local Policies/Security Options," and let's go ahead and select
"Accounts: Rename guest account." Let's "Select" that guy. We'll go ahead and go to "Configured."
We'll call this "PPGUEST_Demo." There we go.

By the way, if you couldn't find the setting you were looking for, all you have to do is type in the
"Keyword" here like "guest." It shows you all the interesting things that you might find that are
interesting for you, which is pretty awesome. So if, for instance, we're looking for "password"
settings, all the password settings are going to show up right here which makes it pretty easy.

Let's go ahead and click through them. Let's go ahead and start with "Enforce password history."
We'll go ahead and click on this guy here and "Select." Let's go ahead and make it "Configured," and
we'll take the defaults here. We've done that. Let's go ahead and keep on going.

That's under "Account Policies/Password Policy." Let's go ahead and do "Maximum password age." When
you select this one, we'll give it the default, it will pull another setting in just like the
Microsoft editor does and give you a recommended value as well.

Let's go ahead and add a couple more: "Password must meet complexity requirements." Why, yes, I do
believe we should do that. We'll go to "Configured" and "Password must meet complexity
requirements." You can see here what those requirements are, right there.

I think that's it. Let me just make sure I haven't missed anything. No, I think that's it. We're
pretty good there. So we've made a couple of settings. We're ready to go ahead and lock and load it.

If we wanted to, this entire batch of settings we can say only do that when the machines are Windows
10 "Operating System" and laptops ("Portable Computers") if that's what you wanted to do. Or you
could say when the person is in a particular "Security Group" or whatever you want. The point is
that you can use item-level targeting on the entire batch. We're not going to do that here, but it's
certainly available to you.

Remember, it's not on an individual setting. You can't say "Minimum password age" is item-level
targeted. It's only about the entire policy here. All right, go ahead and click "OK" here, and now
it's locked and loaded.

Let's go over to our endpoints here and let's run "ppcloud /sync." When we do, what we're looking to
see is if we got the new policy here. We can see, there we go: "PP SEC DEMO 123." And we're ready to
check out "gpedit." So we'll go back to "gpedit" now, and let's see what we can see here.

If we go back to computer side, "Windows Settings," the first thing we did was we configured the
guest account rename under "Local Policies/Security Options." You can see "PP SEC DEMO 123" has been
driven in. You can also see that value is not changeable.

If I were to go to "Account Policies/Password Policy," you can see we've driven in the settings that
we wanted. Oh, I didn't do "Minimum password length." I knew I forgot one. No problem. Let's
actually fix that now, minimum password length.

We'll go back to the "PP SEC DEMO 123" here. Let's go ahead and "Edit Policy" here. That's what's
great. Even if you make a little mistake, it's not hard to wiggle back out of it. So "Minimum
password length," I thought I missed one. Let's go ahead and select "Configured" and make the
"Minimum password length" "11" because everything's better at 11. We'll go ahead and click "OK."
We've driven that setting in.

We'll come back here in a second. We can see the rest are there. Let's go ahead and rerun "ppcloud
/sync." Your client will pick these up every hour. You can also configure this value if you want to,
but the default is every hour.

Let's rerun "gpedit" here, and let's go take one last look to see if that setting went in there
because I forgot it the first time. We go to "Security Settings/Account Policies/Password Policy"
and here we go: "Minimum password length" "11 characters."

You can set up all the security options that you can see here: "Account Lockout Policy," "Audit
Policy," "User Rights Assignment," and "Security Options." They're all here for you ready to rock.
The editors are right here in PolicyPak Cloud land, which is super nice.

I hope this helps you out. Looking to get started with PolicyPak Cloud? Just reach out, and we can
get you started with a free trial. It's good if you come to a webinar first.

Thank you very much. We'll talk to you soon.


