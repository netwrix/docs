---
title: "Deploying Multiple Versions of Java to the Same Endpoint Using Endpoint Policy Manager and PDQ Deploy"
description: "Deploying Multiple Versions of Java to the Same Endpoint Using Endpoint Policy Manager and PDQ Deploy"
sidebar_position: 20
---
# Deploying Multiple Versions of Java to the Same Endpoint Using Endpoint Policy Manager and PDQ Deploy

You want the latest version of Java for security, but you're stuck in the stone ages with an
unsupported version. In this video see Shane from PDQ and Jeremy Moskowitz, Microsoft MVP,
Enterprise Mobility from Netwrix Endpoint Policy Manager (formerly PolicyPak) Software, deploy
multiple versions of Java and then MAP the correct version of Java to the right website. If you have
ANY applications that have Java, you're going to FLIP OUT when you see this.

<iframe width="560" height="315" src="https://www.youtube.com/embed/YFbWuREaXJc" title="Deploying Multiple Versions of Java to the Same Endpoint Using Endpoint Policy Manager and PDQ Deploy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Deploying Multiple Versions of Java to the Same Endpoint Using Endpoint Policy Manager and PDQ Deploy

Shane: Hi, I'm Shane.

Jeremy: And I'm Jeremy.

Shane: We've got a situation I think a lot of you have seen in the wild and that is you have to run
multiple versions of Java on different machines. Why would you want to do that?

Jeremy: Well, the thing is that most people want to have the latest version of Java. That makes
sense because it's the most secure. But then they have these old and crusty applications like a
timecard app or a scheduling app or something at your university or whatever it is and, for the love
of God, it only works with an old version of Java.

So now you have to make a decision. Do I want to install the latest version of Java for security, or
do I want to run with old and crusty versions of Java for compatibility? Inside Java's brain, it
actually has a way to let you install multiple versions and then also marry the particular to
website to a particular version of Java. That's what we're going to show today.

Shane: You can see we're going to go to the PDQ inventory and look at this "WIN10COMPUTER1." You see
we have three versions of Java: one of "Java 7" and then two individual updates within the "Java 8"
family. And you're talking you're going to marry one of these to a different site, right?

Jeremy: Yeah, and what is great is that before we got started, you just used PDQ Deploy and you
layered them all on and they're ready to go. Let me go ahead and drive on "WIN10COMPUTER1" here.

Shane: It's all yours, Jeremy.

Jeremy: Let's make sure that what you actually drove there is really there. We'll go to "Control
Panel." Let's take a look for real. Go to "Uninstall a program," and we've got "Java 7 Update 60,"
"Java 8 Update 51" and "Java 8 Update 171." Great.

Let's go over to "Internet Explorer" and let's think. I've already got it staged to "java.com." If
we were to click on "Do I have Java?" what do you think it's going to tell me. I have three
versions. Is it going to tell me I have all three versions?

Shane: It will tell you whatever the last one that you installed was.

Jeremy: Let's check it out. "Do I have Java?" "Verify Java version" and what do we get?

Shane: The last one installed is…

Jeremy: "Version 8 Update 171." From a security standpoint, we're ready to go. We're all secure with
Java 8 Update 171. But what we really need is to get a particular website to get married to a
particular version of Java. Let's go ahead and do that.

Now we're going to go to PolicyPak land. I want to go over to my "WIN10COMPUTER6" that has my Group
Policy management station on it. I have a gaggle of computers hanging out under "WEB PolicyPak."
We're going to "Create a GPO in this domain, and link it here" called "Marry website to Java." How's
that for a name?

Right click, click "Edit" here. In order to make the magic happen, you going to see the PolicyPak
admin station which is already inside the GPMC ready to go here. We're going to go to computer side,
"PolicyPak," and what we're talking about today is the "Java Rules Manager."

What you can do is create a singular policy. Right click, "Add" a "New Policy." Let's marry it to
Java 8 Update 51. Let's call this "Rule 1," and we'll say "Manage RIA from location." Here's the
trick. It has to match exactly. So what we'll do is we'll make sure we're going to match it exactly.
We'll go back over to our computer here, back to Java and make sure we don't make any mistakes.

We'll go back to Internet Explorer here and we're going to marry "https://www.java.com." Let's make
sure. It has to match exactly or it doesn't work. We'll go back over to WIN10. Here we go. We'll go
ahead and paste that in right there. In fact, we can scrape off the "en" part. That's not required.

Then we'll make the "Permission" not the "Default." That would be the latest version. What we want
to do is marry it to a particular version. So "Run" "Java 8." We're going to marry it exactly to
"Java SE 8 Update 51."

What's that I hear you cry? You're not sure what version of Java you have on the machine? Whether
you have 8 u 51, 8 u 60, 8 u 71, you don't know? No problem. You can marry it to the "Latest in
family" if you need to. But for this, we're going to marry it exactly, make an "Exact" match.

Shane: Yeah, if you did "Latest in family," it would actually do the 8 u 171.

Jeremy: Which is exactly not what we want. That's it. You've made the rule. You've made the
marriage, and you're ready to go. We'll go back over to our endpoint, "WIN10COMPUTER1." We'll close
this out. We'll close this out. Now we'll go and run…

Shane: You're going to probably run GP Update ("gpupdate")?

Jeremy: That's it, and the PolicyPak moving part is on the endpoint. We call that the client-side
extension. We hook right into Group Policy. You already know how to use it because you already know
how to use Group Policy. That's the good news.

Then once this is over, we'll go ahead and close out the window and we'll run "Internet Explorer"
and we'll see what happens. Here we go. "Do I have Java?" Now the last time we ran this, it showed
us the latest version on the machine. Now when we "Verify Java version," what's our expectation?
We've married the right website to the right version of Java, and here we go. Let's wait for it.

Shane: It should be 51 then.

Jeremy: Here we go. Right there, "Version 8 Update 51," exactly the way we want. So if you have a
timecard app, your physics app, some scheduling app, something at your organization or university,
this is your get out of jail free card. To marry a particular website to a particular version of
Java, and you still have the latest version which will fall upward for websites we didn't name. So
if you go to BlowMeUp.com or ABC.com, it will always use the latest version. You've married your
compatible websites to your compatible version of Java.

Shane: You can have your cake and eat it too – security and compatibility.

Jeremy: That's it, all in one shot.

Shane: All right, I'm Shane.

Jeremy: And I'm Jeremy.

Shane: Talk to you later


