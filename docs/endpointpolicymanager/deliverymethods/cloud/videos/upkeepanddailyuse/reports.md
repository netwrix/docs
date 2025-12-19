---
title: "Endpoint Policy Manager Cloud Reporting Demo"
description: "Endpoint Policy Manager Cloud Reporting Demo"
sidebar_position: 10
---
# Endpoint Policy Manager Cloud Reporting Demo

Learn how to find out what XML files your non-domain joined machines are receiving by using the
Reporting tab of the Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud portal.

<iframe width="560" height="315" src="https://www.youtube.com/embed/JCKcCKTA9yI" title="Endpoint Policy Manager Cloud Reporting Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak Cloud Reporting Demo

Hi. This is Whitney with PolicyPak Software. In this video, I'm going to show you how you can find
out what XML files your endpoints are receiving.

You start by logging in to the PolicyPak Cloud portal, and then you're going to run over to the
"Reports" tab here. It starts you off in the "Computers (Status)" portion here. This shows you how
many computers have received the licenses, what their "Status" is, and when their "Last Check In"
was. I have a fairly small test environment so I'm only showing one machine, but that's how many
machines I should have.

The next thing we're going to do is we're going to look over at "Policy Reports (XML Delivery)."
This is where you're going to find out what XML is being delivered to which endpoints. I've already
created a few reports as means of a demonstration. What you're going to do is you're going to start
by selecting "Add Report." You want to "select computer group for which you'd like to add XML data
files delivery report," so if you want "Company One," "East Marketing," whatever your company group
structure happens to be.

I'll start by doing "All." I want to know what all of my machines are getting. So I'm going to click
"Next." There are a few options here, but we recommend that you "Select all XML data files linked to
this folder and all parent folders." Then we're going to click "Next." We're going to call this "All
Demo," "Finish," and now here we have it right here.

This is "All Demo," and we're going to "Run Report." Now what this is going to show is what my
computers that are in the All group are going to get. We see that we're receiving this "WinZip" XML,
we see that we're receiving the "PolicyPak Administrative Templates Manager" one and the "PolicyPak
Security Manager" one.

Now we're seeing that we're receiving an "Older Version" (yellow text). If we were receiving the
current version, this would be green, and if it wasn't receiving it, you'd see some red text. For
example, if you look over here, this is an example of what it looks like if you have more machines
and some of them are not receiving the XML directive.

You see that these computers are not receiving any of this particular XML directive called "Nested
Stuff." None of them are receiving it. However, "Prohibit Disabled" is being received by these four
or five computers as the correct current version, some of them are receiving an older version, and
some of them are not receiving it at all.

This is how you're going to go about finding out which machines are receiving what directives. I
hope that helps you out.  
Thanks.


