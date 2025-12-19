---
title: "Policies and Settings"
description: "Policies and Settings"
sidebar_position: 10
---

# Policies and Settings

In this example, we're going to deliver an RDP file to the user desktop. The shortcut will appear
when the policy applies, and disappear when the policy no longer applies (i.e., falls out of scope).

Start out on your GPMC management station by creating a group policy object (GPO) and linking it to
your users. In this example we have a GPO created and linked to the East Sales Users organizational
unit (OU).

![getting_to_know_policypak](/images/endpointpolicymanager/remotedesktopprotocol/getting_to_know_endpointpolicymanager.webp)

Next, you need to configure settings, starting with the general settings. Under the General tab,
enter the file path, which is the destination location for the RDP file. In most cases, you will
probably want it delivered to the user desktop.

![getting_to_know_policypak_1](/images/endpointpolicymanager/remotedesktopprotocol/getting_to_know_endpointpolicymanager_1.webp)

You also need to select an action from the following list. In most cases you will choose **Create**
or **Update**.

- Create — Item will be created when there is no match on exact file path.
- Replace — Item will replace (delete when re-write) all settings when matching item with the same
  file path.
- Update — Item will be created (if it doesn't exist). For matching items with the same file path,
  item will merge settings (that is, keep previously configured settings, but replace any existing
  items from the policy).
- Delete — Item will be deleted when matching item with the same file path.

You should configure the logon settings next. You can use the browse button to search for designated
servers in AD. Then use the user name variable `%domainname%\%username%` .

![getting_to_know_policypak_2](/images/endpointpolicymanager/remotedesktopprotocol/getting_to_know_endpointpolicymanager_2.webp)

You can then begin to choose the granular settings you want. For instance, you can use the slider to
set your display configuration and choose your color depth from the drop down menu .

![getting_to_know_policypak_3](/images/endpointpolicymanager/remotedesktopprotocol/getting_to_know_endpointpolicymanager_3.webp)

An underlined variable means that it will be delivered within the policy. As we can see below, there
is one checked box and two underlined, unchecked boxes in the Local devices and resources section.
That means that these checked and unchecked values will be delivered. When a check box is solid
green it means that no value has been assigned to that variable.

![getting_to_know_policypak_4](/images/endpointpolicymanager/remotedesktopprotocol/getting_to_know_endpointpolicymanager_4.webp)

You can also configure experience settings such as optimized performance speed.

![getting_to_know_policypak_5](/images/endpointpolicymanager/remotedesktopprotocol/getting_to_know_endpointpolicymanager_5.webp)


