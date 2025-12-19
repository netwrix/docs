---
title: "Setting up Client-less Endpoint Auditing (Push Mode with Server)"
description: "Setting up Client-less Endpoint Auditing (Push Mode with Server)"
sidebar_position: 30
---
# Setting up Client-less Endpoint Auditing (Push Mode with Server)

Netwrix Endpoint Policy Manager (formerly PolicyPak)GP Compliance Reporter Server: Setting up
Client-less Endpoint Auditing

Use this video to set up PPGPCR Server’s Client-less endpoint Push-based auditing. Once set up, all
clients will send GP data to the server in real time.

<iframe width="560" height="315" src="https://www.youtube.com/embed/9JPx_Ksuk6g?si=anX8gQH0jZ81OcDd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager GP Compliance Reporter Server: Setting up Client-less Endpoint Auditing

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, I’m going to show you how to use the Compliance Reporter to set up auditing on all of your
client systems without installing anything on your client systems.

The Group Policy Compliance Reporter (Server) edition has a feature called Group Policy Auditing,
and you don’t have to “install” anything on the target machines. You don’t even need our PolicyPak
client side extension if all you were interested in was monitoring and auditing for Microsoft Group
Policy settings.

In order to get started here, you might have made your way here, which is the “Audit Setup Wizard.”
Let me show you how you would find this anyway in case you didn’t. Again, you’d first install the
Group Policy Compliance Reporter (Server). Let me go ahead and get this linked up here. In the
download, you’ll see the “PolicyPak Group Policy Compliance Reporter.”

I’ve already installed “Server” on a server and the “Admin Console” on – well, this machine also
happens to be a server – but you would load the “Admin Console” on your machine and that’s what gets
you this. Once you’re here, you would click on “Settings.” Make sure you’re in “Multi user mode,”
which attaches to the server. You’d click on “Audit Setup,” and here you are in the “Audit Setup
Wizard.”

The first thing you’re going to do is to “Create and deploy a scheduled task to run the auditor
executable and submit audit data.” That’s how we do this. We don’t have to install anything on each
of our target machines. We simply have to teach our target machines to run a scheduled task, which
will then send the data to the server.

The other thing you need to do is to set what’s called “Audited computers.” Now you don’t have to
audit every computer. You could audit a specific group. If, by way of example, you had a group
predefined somewhere in Active Directory that made sense to you – not an OU. We’re talking about an
actual security group.

If you had a group called “New/Group” and you wanted to call this “AuditMeGroup” and you wanted to
click in the “AuditMeGroup” and “Add” “Members,” you could actually add not “Users” but you could
add “Computers” to this group. If I were to click here and “Find Now,” I could add a bunch of my
client computers or whatever these are and add them to a group.

This is one choice. You can have a group that you make, add computers to that group, and decide
these are the only computers you want to collect auditing from. That’s perfectly valid. But if you
want to get your way through this fast, I’m going to suggest that you “Choose” a group that’s called
“Domain Computers.”

Make sure you put “domain computers” and not “domain admins” in there because we are auditing
computers not users, so you’re going to audit “Domain Computers.” By default, any computer that’s in
“Domain Computers,” which is every computer, we will accept auditing data from. That’s what this is.
This is a filter that will decide who we will accept audit data from.

If we click “Next” here, we then have to “Specify Auditor Path.” What is the auditor path? When you
install the Group Policy Compliance Reporter server on this machine, if you were to go to “Program
Files (x86)” under “PolicyPak,” there is a folder called the “PolicyPak Group Policy Compliance
Reporter Server” and then there’s another folder here called “Auditor.”

You need to get this shared out, so I’m going to right click over this folder and “Share
with/Advanced sharing” and “Share this folder.” Call it “Auditor,” and I’ll set “Permissions for
Everyone” “Read.” Now you could copy these files to another server if you wanted to. It doesn’t
really matter. I’m just going to use the ones that we ship right here.

Now I’ve shared out this folder, and it’s known as “\DCAuditor.” Now that’s ready to go because,
again, these files are what your client machines are going to reach across the wire and run whenever
Group Policy applies, and that’s what’s going to get us the data.

Now I’m going to “Browse” here. I just shared it out, so I’m going to “\DCAuditor” and pick the
“PPGPCR.Auditor” executable. In doing so, we’re ready to go. “Specify Server” that we want to send
the data to. Again, I’ve installed the Compliance Reporter server on this machine. It’s called “DC.”
This is our standard “Server port” “50022.”

Then here’s the final thing we need to do. We have to get the directive over to our target machines.
I’m going to suggest that you “Create a new GPO to deliver the scheduled task.” If you wanted to,
you could also pick an existing GPO and jam the scheduled task into an existing GPO (“Pick an
existing GPO to insert the scheduled task into”) or you can create a Group Policy Preferences
scheduled task item and you can import it to your own GPO later (“Export the GPPrefs Scheduled Task
item as an XML file for manual addition to a GPO later).”

I’m only going to show you this, “Create a new GPO to deliver the scheduled task.” I’ll call this
“Deploy PPGPCR Audit Sched Task.” It will create a brand new Group Policy Object, and we’re done.
Now that’s all ready to go. I’ll go ahead and click “OK” here. It says “Changes will apply on next
run,” so I’ll go ahead and close out the Compliance Reporter.

The thing we didn’t do is we have to go down to the “Group Policy Objects” node. Let me go ahead and
hit refresh here to make sure that we get all of the latest Group Policy Objects that are in the
swimming pool here. There is the GPO we just created, “Deploy PPGPCR Audit Sched Task.” Notice how
it’s not linked to any location.

Before we do what’s next, let’s take a look at the “Settings” so you can see. What’s the goal? We’re
going to run a scheduled task any time Group Policy is triggered. We’re going to run “\dcAuditor”
(that’s the share) against the executable and deliver it to the server we just described. That’s the
magic. The magic is that we run a scheduled task automatically on all your client machines, and
we’ll accept the data from the computers that we specified in the group.

But we have to link this GPO over to a place that makes sense. I’m going to link it to the whole
domain, and then every computer will request data to be sent. Here we go, “Deploy PPGPCR Audit Sched
Task.” There it is. It’s linked. Whenever I do anything at the domain level, I like to right click
and check “Enforced” in case there’s a blocked inheritance later. I know that this GPO is going to
be enforced through any blocked inheritance.

That’s it. Group Policy Compliance Reporter auditing is now set up. Let’s go ahead and see that it’s
all working. What we’ll do is we’ll go ahead and run the “PolicyPak Group Policy Compliance
Reporter” admin console here. It connects to the server. Let’s go to “Snapshots.”

What’s going to happen now is that I’m going to manually walk over to a particular machine and I’m
going to run GP Update twice. You wouldn’t normally have to do this in real life. I’m doing it to
accelerate the hands of time. In the course of a couple of hours, you’re going to get Group Policy
automatically downloading, applying and then reapplying, and that’s when you’re going to get data.

If I go over to a target machine here and I run “GP Update,” the first time is going to get me the
scheduled task. I want to show you the scheduled task. I’m going to show you where the scheduled
task is so you can see, “Did I get the scheduled task?” You can only see the scheduled task, by the
way, when you’re logged in as “Administrator.” I’m logged in as Administrator, specifically to show
you this as a test.

If I go to “Computer/Manage” here, I want to look at the scheduled tasks. If I go to “Task
Scheduler” and go to “Task Scheduler Library,” what we’ve now done is because you have a Group
Policy Object that will create the scheduled task, whenever Group Policy applies, it’s going to,
like I said, run “\dcAuditor” against the executable name and deliver the data to the domain
controller. That’s what’s happening here. The goal is to get this scheduled task on all your target
machines.

Now that we’ve done this, let’s go ahead and run “GP Update” again. At this point, the scheduled
task will fire off and send the data to the server, and at that point we should start seeing some
magic. Now after GP Update runs, we actually cache that information for about a minute before we
send it to the server.

So don’t panic if you go back to your admin console here and you click on “Snapshots” here and you
click – well, I actually have no “Computer Sets” to find, so let me right click and “Create computer
set” and then I’ll call this “All” just to get us started here. I’ll pick the entire “Domain.” Now
that I’ve got this all set, I can click “Refresh.” If you don’t see anything right away, don’t panic
because again we cache that information for about a minute.

What I’ll do is I’ll go to my other client machines here and I’ll run “GP Update” on each of these
machines. I’ll get the scheduled task going here on each of these machines. Again, you would not
normally have to do this in real life. I’m simply doing it to accelerate the hands of time a little
bit just to make things run a little faster here. I’m running “GP Update” on these machines for the
first time just to get the scheduled task.

Who am I? I am “EastSalesuser3,” so I would not be able to see the scheduled task as this user. So
I’m just going to run it again on each of these machines here. Run “GP Update” here again the second
time. Run “GP Update” here a second time.

If I go back over to our management station for the Compliance Reporter, if I click “Refresh” here,
you can see data starts to come in. It starts to trickle in from your machines. You can just double
click on any given entry and instantly see the current dataset that’s on the target machine.

That gets auditing up and running. At this point now, you’d be able to create your “Tests.” You’d be
to manipulate “Results” and go from there. But in order to set up auditing, what I did was again I
clicked on “Settings.” I went through “Audit Setup,” and you saw me do all the steps to get the
“Audit Setup Wizard” ready to go, and now data starts trickling in from our target machines.

I hope this helps. If you have questions about getting the Compliance Reporter set up, please open a
support ticket https://www.netwrix.com/sign_in.html?rf=tickets.html#/open-a-ticket

Thanks so much, and we’ll talk to you soon.

