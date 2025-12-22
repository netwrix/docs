---
title: "Why does License Tool ask Who am I and Where do I want to use Endpoint Policy Manager?"
description: "Why does License Tool ask Who am I and Where do I want to use Endpoint Policy Manager?"
sidebar_position: 80
---

# Why does License Tool ask Who am I and Where do I want to use Endpoint Policy Manager?

Let us jump to the end of the story and take a look at what the License Tool (LT) generates when you
are making a license request.

There are always two items: Scope and SOM_name (Scope of Management). There is always just one scope
but here could be several SOM_Names.

Scope is where you might ever possibly use Netwrix Endpoint Policy Manager (formerly PolicyPak).
Typically, this is (and should be) the whole domain. This doesn't mean you will be using Endpoint
Policy Manager anywhere/everywhere in the whole domain. You select the Scope in this window:

![317_1_licfaq1](/images/endpointpolicymanager/license/activedirectory/317_1_licfaq1.webp)

SOM_Name is the specific places you will be licensing Endpoint Policy Manager. This is what you are
selecting here:

![317_2_licfaq2](/images/endpointpolicymanager/license/activedirectory/317_2_licfaq2.webp)

So, here are some examples from some License Request Key files.

## Example 1: You are the domain admin and you wish to license the whole domain for Endpoint Policy Manager.

```
<scope>DC=fabrikam,DC=com</scope><som_name>DC=fabrikam,DC=com</som_name>
```

- You can see that the Scope is the whole domain (fabrikam.com). This is where we could use Endpoint
  Policy Manager.
- You can see that the SOM is also the whole domain (fabrikam.com). This is where you will be
  licensing Endpoint Policy Manager.

This means you are the domain admin and you want to license the whole domain. This is the easiest
case.

## Example 2: You are the domain admin and you wish to license specific OUs for Endpoint Policy Manager.

```
<scope>DC=fabrikam,DC=com</scope><som_name>OU=Sales,DC=fabrikam,DC=com</som_name>
```

- You can see that the Scope is the whole domain (fabrikam.com). This is where we could use Endpoint
  Policy Manager.
- You can see that the SOM is one specific OU (which implies all sub-OUs.) This is where you will be
  licensing Endpoint Policy Manager.

## Example 3: You are an OU admin and you wish to license specific OUs for Endpoint Policy Manager.

```
<scope>OU=Sales,DC=fabrikam,DC=com</scope><som_name>OU=East Sales,OU=Sales,DC=fabrikam,DC=com | OU=West Sales,OU=Sales,DC=fabrikam,DC=com</som_name>
```

- You can see that the Scope is the Sales OU. This is where we could use Endpoint Policy Manager.
- You can see that the SOM is two specific OUs (and their children.) Specifically East Sales OU and
  West Sales OU. This is where you will be licensing Endpoint Policy Manager.

So, why do we have Scope and Scope of Management? Because sometimes companies have, for example, one
domain, with multiple OU administrators, where neither has any overlap of duties and they both want
to use Endpoint Policy Manager (and pay for it separately).

So:

- Joe is the OU Admin for OU=Machines,OU=WEST,DC=fabrikam,DC=com ,and
- Fred is the OU Admin for OU=Machines,OU=EAST,DC=fabrikam,DC=com

In this case neither is the domain admin. They can each have their own Scope (where they can
possiblyuse it) and Scope of Management, where they'll actually use it and not overlap.

When LT goes to install the license you receive from Endpoint Policy Manager, it will create a new
GPO and link it the ScopeE.

Occasionally, we are asked, "What can I do if I already selected the whole domain (‘I am a domain
admin') in the first screen and I don't want to link the GPO to the whole domain?" First, here are
some facts:

- Nothing happens in Endpoint Policy Manager until the CSE is installed on client systems. Nothing
  automatically deploys the client side piece. The CSE is an MSI you deploy using whatever you want
  (SCCM, hand-install, LanDesk, Group Policy Software Installation, etc.
- The GPO that LT creates only has Endpoint Policy Manager Licensing Data(see image below).
- Having the license GPO linked won't affect servers or other clients. They'll get the data
  contained within the licensing GPO (which is nothing but licensing data). But then nothing special
  happens after that, especially since they're out of Scope of Management.

![317_3_licfaq3](/images/endpointpolicymanager/license/activedirectory/317_3_licfaq3.webp)

That being said, there are two ways to proceed if your license file's Scope is the whole domain, but
you don't want to link it over to the whole domain :

### Plan A: Go ahead and let the LT create the GPO and link it to the domain.

- This is recommended in case you later wish to expand you scope to include future OUs (which you
  have not selected today but might select in the future).

- For instance, today you want to license OU=Desktops,OU=WEST,DC=fabrikam,DC=com but then during the
  next year (or future years) you want to license OU=Laptops,OU=East,DC=fabrikam,DC=com. We just
  issue you a new license, and it's within the same overall umbrella scope.
- Here is the thing to remember: only computers in OU=Machines,OU=WEST,DC=fabrikam,DC=com are ever
  going to get licensed (today), because that's what you've selected in step 2 (Scope of
  Management).

- So again, even though the GPO is linked to the domain level, only the computers in the Scope of
  Management will activate as Paid, because that's what you paid for.

- If you think you might ever want to license computers to use Endpoint Policy Manager in another OU
  besides OU=Machines, OU=WEST, DC=fabrikam, DC=com, then we recommend you stick with Plan A.

### Plan B: Generate another request for the License Request Key (LRK) using the LT tool and send it to your sales person.

- This time, when you are asked the 'Who are you' question, do not select the whole domain.

- Simply pretend you're the OU admin of OU=Machines,OU=WEST,DC=fabrikam,DC=com. This sets the Scope.

- Select it againin the second step. This sets the Scope of Management.

- Now, your LRK will make the Scope OU=Machines,OU=WEST,DC=fabrikam,DC=com and the Scope of
  Management the same thing (OU=Machines,OU=WEST,DC=fabrikam,DC=com)

- We'll cut you another license key.

- Next time you go to install the new key, LT will ask you if it can create the GPO and link it over
  to OU=Machines, OU=WEST, DC=fabrikam, DC=com, because that's the new Scope. (It also will happen
  to be the Scope of Management.)

- Again, this is only recommended if you really never ever plan (ever) to use Endpoint Policy
  Manager outside of OU=Machines, OU=WEST, DC=fabrikam, DC=com.

### Plan C: Delete the GPO's link. Then relink the GPO to the OU you want

- You can, if you like, simply delete the GPO's link to the domain.
- Then, re-link the GPO to the places you want to manage/test using Endpoint Policy Manager.
- This will work because the Scope is (technically) the domain level, and you're simply linking it
  (correctly) to places within the Scope.

Last thought: Remember that all client computers must have the Endpoint Policy Manager CSE
installed. Without the CSE installed, Endpoint Policy Manager directives are ignored. So, just
because there's a GPO linked to the domain doesn't mean that computers will be able to do anything.
They have to be in scope of management and also have the CSE installed to pick up Endpoint Policy
Manager directives.

