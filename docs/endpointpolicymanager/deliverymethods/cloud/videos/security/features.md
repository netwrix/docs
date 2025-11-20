---
title: "Endpoint Policy Manager Cloud: Security Features"
description: "Endpoint Policy Manager Cloud: Security Features"
sidebar_position: 10
---
# Endpoint Policy Manager Cloud: Security Features

If you've ever wondered how to keep your cloud service secure, watch this video and learn about how
all our features work together to keep you safe.

Hi, this is Whitney with PolicyPak Software. Recently, we have added a whole lot of new security
features to our PolicyPak Cloud edition. This video here is going to be a multi-part guide to
understanding these new features and making the most of them.

Alright. In this section of the video, we're going to be talking about the idea of the
authentication options Admin as well as all things two-factor authentication. I'm probably going to
end up calling that 2fa for a bit because two-factor authentication just takes too long to say. As
far as the authentication options admin business, that is essentially an admin who controls the
methods by which all other admins get two-factor authentication. To go a little further and to
explain that out a little more, it's an admin who decides what the two-factor authentication options
are.

We have email-based as well as application-based options, and the authentication options admin is
the one that gets to choose if everybody else gets both options or just one and if only one then
which one you're going to get. This guy here is my authentications options admin who I already have
set up with my application-based 2fa. Now I've just got to grab that code as always from my
application, and punch this in here. There we go. You're signed in just fine.

Over here at the Company Details tab is where you're going to be managing the two-factor
authentication options. First of all, you can manage your own 2fa options here, so if you go and
click on your name, go over to Two-factor options, and right now I only have Application-based two
factor authentication checked. I could choose Email-based 2fa, and that would give me an option.
When I went to sign in, it would give me a dropdown box where I would choose either the email-based
option or the application-based option. Once you make that change, you can check – or you can turn
that on if you want. I'm actually not going to do that right now, but that's an option that I have.
I'm going to close this out.

The next thing you can do, you can actually manage what kind of authentication methods you want to
have incoming company admins have by default. You can choose just email or just application or both.
It's up to you. Choose whichever ones you want, and then save it. The newly created admins will get
these options by default. Finally, you can actually restrict the whole company's two-factor
authentication methods here. If you go to Edit customer-level portal policies, we're going to go –
we'll talk about this one later on. We're going to Require 2fa for PPC login. If I click Edit, you
see that this here is Enabled, and that is grayed out. That is because we have turned on two-factor
authentication for everyone in an effort to increase security that much more.

Down here you can choose the options, though. If you want to say that people can only have
email-based, then you'll Restrict the Application-Based, which means people would only be allowed to
use the email-based 2fa, and the same is true in reverse. If you wanted them to only use
application-based 2fa, you would Restrict Email because restricting will restrict this specific
version, so it means if you Restrict Email-Based, the email-based will no longer be available to
use. That's the idea there.

Let's close this out. When you go to create a new admin, you come over here, you click Company
Admin. You'll enter in, obviously, First Name, Last Name, Email, and ten you can choose which type
of 2fa they get. They'll get either Email or Application or both. You could also have them be
another Authentication options admin. There doesn't have to be only one. You can have more than one
in the company. We'll talk about notification admin in another section of this video.

Once you get done, you create and send the welcome letter. It will take you back here, and the test
guy I'm going to use here is Jon Crane. When you first create your new user, it pops you over here,
and you have some options you can work with. You can turn on the Email-based two-factor
authentication. I already set him up with Application-based, which is why that's grayed out. Then
you can also choose to change some role management here. Again, the Notification Admin we'll talk
about in another section

Let's close this out. What I want to do – I've already created this guy so I can get my welcome
letter with my password in it and all of that, so what I'm going to do is we're going to log out of
the authentication admin's option here, and I'm going to login as Jon Crane and enter in that
password from the welcome letter. When I click Login, it's going to allow me to login, but it is
going to force me to turn on the application-based 2fa before I can go any further.

Now, if you as the authentication options admin have not restricted your users to one version or the
other, then your new admin could abandon the application-based 2fa and instead choose to go with an
email-based 2fa. That is – or they can just go ahead and turn that on for themselves so that they'll
have the option every time they sign in, whichever one's more convenient.

Here we are as a regular admin, not an authentication options admin. What we need to do is we're
going to set up this. We'll get a one-time password, so we'll go ahead and enter that in, and there
we go. That's where I can now decide – again, I am not the authentications options admin right now.
I'm just choosing my own as Jon Crane here, so I could choose to turn on email-based as well. I can
say Yes, I want to do that. When I do that, I will need to enter in the one-time password that will
be sent to this email address. I'm not going to do this right now. I can just say whoops, I didn't
mean to do that. I'm going to abandon that action. Then while they can click on role management,
they will not be able to assign themselves any sort of role. That's that.

That is all things two-factor authentication. One last note before we move into the next section of
the video. If a user gets created and there is no version of the authentication method selected,
then email-based 2fa will be turned on by default. That's just something – a little note for you to
be aware of. Alright. Let's move on to the next section.

This is just a quick section in the middle here to show you one of the other features of being an
authentications options admin. Because I am that authentication options admin, I can do this Editing
customer-level portal policies. When I click on that, that's where I would go to change the
two-factor authentication options here. This is where I would go to change this, but you may have
noticed in the other section that you saw this other one: Require automatic logoff on idle. When you
click on this and go to edit it, you can change this, you can actually disable this, but you also
have the option to change the time out. If you think that 15 minutes is not enough time or too much
time, you can change that, or if you do not want to have a logoff on idle, you can disable this.
That is going to be less secure, but that is up to you. That is just another quick little feature of
being that authentication options admin.

In this section of the video, we are going to talk about the idea of the notification options admin
role. Like with the authentication options admin, the first registered user, typically the primary
in our records, is the one that is considered the notification options admin. I'm going to shorten
that, start calling it just the notification admin from now on. The notification admin is the one
who gets to decide who receives emails when certain actions take place, so you can have multiple
notification admins if you'd like, but what they can do is come over here to Company Details and go
to Edit notification configuration.

Now, we're going to Add a Rule, and there are several things we're going to choose here. First of
all, what action do we want to hear about? Do we want to hear about certain specific actions? Do we
want to hear about all actions perhaps? You'll pick that. Then you'll determine when – which user
does this action. You can say one specific user if you want to – or admin rather, or you can choose
whenever any company admin creates a policy, then I want myself to receive an email notification.
This is the only notification option, so while there is a dropdown, that's the only choice there.

You can make these choices and determine what warrants an email, who triggers that particular email,
and then who receives the email. That is what the notification admin does. Let me close out of here.
As I have mentioned in other parts of the video, there are – if I go to Edit someone, they can be a
notification options admin if you want them to, which is to say if you do want to create multiple
notification admins, you do it by editing the users right here. That's that on the notification
option admins idea.

In this section of the video, we're going to talk about IP address restriction or whitelisting. When
I come over here to Company Details, I will have the opportunity to choose those login restrictions
if I am the authentications options admin. I'm going to click on Login restrictions, and I can add
an IP address range that I want to either white- or blacklist. Remember, that whitelisting an IP
address range effectively blacklists everything else, so make sure you don't accidentally lock
yourself or others out. When I go to Add, I can either, again, white- or blacklist an IP address
range, so I'm going to choose to whitelist in this case. I know what my IP address is, so I'm going
to put in a range that includes it. Give me just a second. I'm just going to copy and paste. It's a
little quicker and easier, and I'll tell it OK. Great. OK.

Now that's all fine. When I sign out and I go to sign back in, I'm going to get hit with the
two-factor authentication. I'll grab that from my application here. Let's see. There we go. Alright.
That's all fine and dandy. We were still able to get in as expected because that range included the
IP address range that I am on. However, I'm going to pause the video. I'm going to get on a
different network, which, of course, will give me a different IP address, and I won't be able to
login anymore, so I'll pause the video for a moment, and then we'll come right back, and you'll see
the effects. Let me go ahead and sign out, and now we'll pause.

Alright, and we are back. I am on a different network now, and so when I come over here and I try to
login, ooh, I got a message letting me know that my IP address is restricted. If I go back and I log
back onto my original network, I will be in fine shape and will be able to login no problem. Let's
go look at that real quick, and then that'll be the end of this video. Alright, back on my original
network. Let's go ahead and try to login now. Great news, it's asking for my authentication code, so
I'll grab that one more time here. We're able to get in just fine. That is the way to go about
restricting logon based on whitelisting or blacklisting IP addresses or IP address ranges.

That covers the new PolicyPak Cloud security features. I hope this video helps you out. Thanks so
much.


