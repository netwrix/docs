---
description: >-
  Explains why the Workstation field is empty in Account Lockout Examiner
  reports and how this relates to the Caller Machine Name field in Windows
  security event logs.
keywords:
  - account lockout
  - workstation
  - Caller Machine Name
  - event ID 4740
  - event ID 644
  - security logs
  - domain controller
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Workstation Name Is not Shown
tags: []
title: "Workstation Name Is not Shown"
knowledge_article_id: kA00g000000H9dPCAS
---

# Workstation Name Is not Shown

## Question

Netwrix Account Lockout Examiner shows no data in the **Workstation** field, while the fields **Domain Controller** and **Lockout Time** are populated correctly. Why is it happening?

## Answer

Because Netwrix Account Lockout Examiner processes Windows security logs, it only gets the data that is present in those logs. This issue means that the Account locked out event (ID `644` for Windows XP/2003, ID `4740` for the later versions of Windows) contains an empty **Caller Machine Name** field. Here is an example of the Account locked out event `644` with the empty **Caller Machine Name** field:

[![User-added image]./../0-images/ka04u00000118ES_0EM700000004udP.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g0000004KSJ&feoid=00N700000032Pj2&refid=0EM700000004udP)

The field can be empty for events where a local computer account was locked out due to a local policy or as a result of computer synchronization with a mobile device.

