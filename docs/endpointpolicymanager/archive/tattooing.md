---
title: "Understanding ADM-ADMX files Tattooing (and what to do about it)"
description: "Understanding ADM-ADMX files Tattooing (and what to do about it)"
sidebar_position: 70
---

# Understanding ADM-ADMX files Tattooing (and what to do about it)

Tattooing the registry means that settings are left behind when they no longer apply to the user.
Learn where ADM and ADMX files may cause you problems, and how Netwrix Endpoint Policy Manager
(formerly PolicyPak), a third-party solution, can help provide solutions.

<iframe width="560" height="315" src="https://www.youtube.com/embed/bJHx_4A3AHo?si=DIx4r0HJnEq0eM2O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Group Policy: Understanding ADM-ADMX files Tattooing (and what to do about it) Video Transcript

Hey, everybody. This is Jeremy Moskowitz, former Group Policy MVP. This is part two of "where ADM
files have trouble and what you can do to fix it" video series.

In the last video, you saw me deliver some settings using ADM files, but we learned that ADM files
don't actually perform their job. They don't consistently redeliver settings, and they don't perform
UI lockout. We learned how a utility like PolicyPak can actually deliver those settings and actually
perform UI lockout. In this video, let's take it to the next level. Let's understand the idea of
delivering and un-delivering settings.

Let me "Create a GPO in this domain, and Link it here…" called "Control Panel Smackdown." Here's
Control Panel Smackdown. It's linked over to my "East Sales Users." I'll click "Edit" here and under
"User Configuration/Policies/Administrative Templates/Control Panel," I'm going to "Prohibit access
to the Control Panel." I'll select "Enabled" for that guy and click "OK." You can see that setting
is now "Enabled."

Here's my "WinZip ADM" file. I've already configured this guy to deliver four checkboxes here. I did
this in the last video as well. I've delivered that checkbox, that checkbox, that checkbox and that
checkbox.

Let's go ahead and log on as some user who has never logged on before–"eastsalesuser4." We'll let
him log on. We're going to verify that two things have taken place. Thing number one is we said no
Control Panel. Let's right click and go to "Personalize," and that is the Control Panel. You can see
that the Control Panel has been restricted on this computer because this application – which is
Windows Explorer – he knows what to do when he gets the signal of no Control Panel set to one. By
the way, that's a real bug inside of Windows 7. This is nothing special.

Let's go over to "WinZip." Again, since this guy has never logged on before, we will in fact see
that those settings will have been delivered using the ADM file. As we saw in the last video, if the
user unchecks the checkboxes – I'll just unselect two of them for fun, the top two, and click "OK" –
there's nothing preventing the user from doing that, and there's nothing in the box that will
reinstate those settings.

We learned in the last video, again, if you log off and log back on or run GPUpdate, it doesn't
actually solve your problem. It doesn't actually redeliver those settings. Again, this was all
covered in the last video. I'm kind of beating a dead horse here. I'm sorry about that, but you can
see Group Policy is not redelivering those settings from those ADM or ADMX files.

The other half of the equation, and that's what we want to talk about here in this video, is what
happens when settings no longer apply. Let's do two experiments at the same time to save a little
time. I'll close this out and, in fact, I'll log off.

I'll go back over to my Group Policy Editor here, and I will right click over each of these Group
Policy Object links and I will uncheck "Link Enabled." The technical term for what I'm doing is
called making these GPOs fall out of scope of management. Now there are a lot of ways a GPO could
fall out of scope of management. You could delete the GPO. You could move the guy from sales to
marketing. You could unlink it like I did here, but you can see that I have unlinked "Control Panel
Smackdown" and "Use WinZip ADM."

Now I know your expectation. Your expectation is when the guy logs on the next time after Group
Policy applies or Group Policy updates in the background, well then, those restrictions should be
lifted and things should revert back. Unfortunately, it's only half true.

Let's show the Control Panel. If I go to right click and go to "Personalize," does this work? You
bet. The delivery of the restriction has been removed. The Group Policy engine knows what to do, and
it removes the restriction.

Let's go to "WinZip."Remember, we had all four checkboxes checked. The user with their shenanigans
worked around two checkboxes. Is your expectation that maybe all four checkboxes should be reverted
back now? That's what I would think would happen.

If I go to "Options/Configuration…" and go to "Passwords," that's exactly not what happens. In fact,
you've heard this phrase before. You've heard the phrase registry tattooing. You've heard that
phrase before. What this means is that the Group Policy engine for ADM and ADMX files, when the
application doesn't support its stuff in what's called the proper policies keys, what ends up
happening is that this stuff is just left behind.

The Group Policy engine knows how to deliver the setting, but it doesn't know how to revert the
setting. It knew how to revert the setting for the Control Panel stuff, but it doesn't know how to
do it for your applications, and that is the big problem here.

What we're going to do next is learn how to work around this. This is where PolicyPak comes in.
PolicyPak has both a free community mode and a commercial application. Let me go ahead, and we'll
reutilize the "Lockdown WinZip using PolicyPak" edict here. Let's dive down under
"PolicyPak/Applications/New/Application."

As you saw me do in the last video, PolicyPak ships with over 50 pre-configured, important Paks or
applications that you have that are both registry and non-registry based. But for the purposes of
this talk, we'll continue to "PolicyPak for WinZip 14 and Later" here.

Let's go over to "Passwords" guy over here. PolicyPak is delivering all four of these checkboxes.
It's also going to "Hide corresponding control in target application" and also "Disable
corresponding control in target application." And as we saw in the last video, we're also going to
"Perform ACL Lockdown."In other words, user shenanigans can't even occur during the session.

I'm going to make this an important setting like "11" as well. Remember, the default value is 8. I'm
going to make this setting also while I'm here – check this out –"Revert the policy setting to the
default value when it is no longer applied." Very critical. For that setting, I'll make it revert
when it is no longer applied, and I'll also do it for all of them – revert when they are no longer
applied.

Because that's what we're driving at here. You don't want these settings to tattoo on the target
machine. If you delivered it, that's great. If the Group Policy Object no longer applies because the
guy changed job roles, then it should revert back, and that is the PolicyPak superpower we want to
talk about here.

Let's go ahead and run "gpupdate" here. We'll get the settings delivered using PolicyPak. We'll do
the UI lockdown that only PolicyPak can do. We'll do the ACL lockdown that only PolicyPak can do,
and the offline enforcement that only PolicyPak can do, and the reversion that only PolicyPak can
do.

Let's go ahead and run "WinZip" here, go to "Options/Configuration…," go over to "Passwords." We can
see PolicyPak has, in fact, delivered all the settings just the way we want to. As we saw in the
last video, if a user tries to do some shenanigans and try to work around your settings, we are
actually locking down the application in real time so the user can't work around it.

Now in this video what I want to show you is what happens when the GPO no longer applies. You can
see it's set to "11," three checkboxes are checked and one is hidden. When I used ADM files, what
happened? When I used ADM files, what happened was that those settings just simply tattooed on my
target machine. Not good.

Instead with PolicyPak, I'm right clicking over the GPO and unlinking it, or the guy is changing job
roles or whatever. We'll run "gpupdate" to simulate what happens here, or we could log off and log
back on – same idea. When we do, now what is your expectation? Should things tattoo the registry and
stick around and be there for the end of time confusing the user?

When we run "WinZip," go to "Options/Configuration…," go to "Passwords,"PolicyPak has unchecked all
four of those checkboxes and reverted the password length that was 11 directly down to "8." It
didn't tattoo it. It didn't leave it behind. It's exactly what your expectation is.

If you have people changing job roles or you're creating and deleting Group Policy Objects, only
PolicyPak will actually revert the setting instead of tattooing it or leaving it behind the way,
unfortunately, ADM and ADMX files do.

I hope this was helpful for you. PolicyPak has a free download after watching the full Webinar. I
hope we'll see you over there for that.

Thanks so much. Take care.


