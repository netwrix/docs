---
description: >-
  When Password Policy Enforcer (PPE) Server and Fortinet are installed on the same Domain Controller, Fortinet can take over the SubAuthentication registry value, which will prevent PPE from informing Windows to display password expiry notifications. This article explains the cause and provides registry edits to restore PPE functionality.
keywords:
  - Netwrix Password Policy Enforcer
  - Fortinet
  - registry
  - PPE
  - Windows Registry
  - SubAuthentication
  - Auth0
  - subauthentication filter

products:
  - password-policy-enforcer
sidebar_label: SubAuthentication Filter Event Warning When Fortinet Is Installed
tags: []
title: "SubAuthentication Filter Event Warning When Fortinet Is Installed"
knowledge_article_id: ""
---

# SubAuthentication Filter Event Warning When Fortinet Is Installed

## Symptoms

Event ID 2060 for Netwrix Password Policy Enforcer (PPE) is found in the event logs when PPE and Fortinet are both installed on Domain Controllers: 
Event ID 2060 (Warning)
Netwrix Password Policy Enforcer is not prompting users to change passwords that are approaching their expiry date because another application has installed its own subauthentication filter. You can configure the app to use both filters concurrently.


## Cause

Fortinet removes PPE from the Subauthentication Filter found in registry location HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa\Kerberos\ called "Auth0". 

## Resolution

Only the maximum age rule of PPE uses the Subauthentication Filter (Auth0) to display the "Your password expires in [n] days" notification on the client computer. This does not rely on the PPE client, PPE sets the password expiry time in the Kerberos ticket on the Domain Controller. PPE does not use the subauthentication filter for any rule enforcement, Alternatively, use Windows to enforce the maximum age or configure PPE reminder emails.

To restore the password expiry reminder when PPE and Fortinet are both installed, make the following registry edits:
1.	Open RegEdit to the HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa\Kerberos\ key
2.	Verify that the Auth0 registry value reads dcagent

	![dcagentAuth0](./0-images/dcagentAuth0.png)

3.	Set the Auth0 value to PPE

	![PPEAuth0](./0-images/PPEAuth0.png)

4.	Create a new value of type REG_SZ called AuthPPE and set it to dcagent

	![AuthPPEdcagent](./0-images/AuthPPEdcagent.png)

5.	Restart the Domain Controller
