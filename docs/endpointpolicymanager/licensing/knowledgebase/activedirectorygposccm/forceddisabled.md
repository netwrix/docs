---
title: "Why is Endpoint Policy Manager Preferences (original version) \"forced disabled\" by default?"
description: "Why is Endpoint Policy Manager Preferences (original version) \"forced disabled\" by default?"
sidebar_position: 70
---

# Why is Endpoint Policy Manager Preferences (original version) "forced disabled" by default?

Starting with build 2862, Netwrix Endpoint Policy Manager (formerly PolicyPak) Preferences are
automatically forced disabled when detected as licensed on domain joined machines. This happens even
if there is a valid corresponding Universal or Legacy license which would normally enable it.

:::note
This restriction is only forced for domain joined machines, and doesn't impact non-domain
joined machines.
:::


## Why did we make this change?

Endpoint Policy Manager Preferences' job is to deliver GPPreferences settings to machines with
Endpoint Policy Manager Cloud, or alongside your MDM service. The typical use case is when the
machine is non-domain joined and you want to get GPPreferences items to your endpoints, like
Registry, Shortcuts, Drivemaps, and Printers.

When the machine is not domain joined, there is not a problem with Endpoint Policy Manager
Preferences. Endpoint Policy Manager Preferences will take any GPPreferences setting and get it
delivered (and undelivered) as expected.

But when the machine is domain joined and GPPreferences policies are being delivered from Group
Policy, the Endpoint Policy Manager Preferences component can cause an issue because of timing
outside of our control between the Group Policy / GPPreferences engine and Endpoint Policy Manager.
This has been a known issue for years. You can
see [Why do I see slowdowns on my machines when Endpoint Policy Manager Preferences is licensed and computers domain joined? Can this be worked around?](/docs/endpointpolicymanager/components/admintemplatesmanager/knowledgebase/exportinggrouppolicypreferences/domainjoined.md)

In order to minimize conflicts, we have, in the past, suggested that customers un-license Endpoint
Policy Manager Preferences when the machine is domain joined.

See
[How to Un-License any Endpoint Policy ManagerComponent via ADMX or Endpoint Policy Manager Cloud](/docs/endpointpolicymanager/licensing/videolearningcenter/troubleshooting/unlicense.md)
for additional information. There is also a video you can watch on
[Troubleshooting with ADMX files](/docs/endpointpolicymanager/gettingstarted/misc/videos/troubleshooting/admxfiles.md)

More recently, Universal licenses are delivered with Endpoint Policy Manager Preferences disabled
(for customers which have domain joined machines), and you need to specifically enable it. In this
example snip from a Universal license file, you can see that Endpoint Policy Manager Preferences is
set to Enabled=False to help attempt to avoid the conflicts when domain joined.

```
<component id="f8357ae4-f4e0-49ec-ae9d-61078938e7cd" 
name="PolicyPak Application Manager" />    <component 
id="608ba33d-af06-46f9-9e6c-62495560024e" 
name="PolicyPak Preferences" enabled="false" />    
<component id="e0088a46-ab54-4fbd-a733-303c58244c5e" 
name="PolicyPak Administrative Templates Manager" />
```

Customers must change this value if they wish to enable this component (which they may want to, as
explained later.)

See
[How do I specifically exclude or prevent a component from performing processing by modifying the license file?](/docs/endpointpolicymanager/licensing/knowledgebase/activedirectorygposccm/componentsexclude.md)

In logs, CSE shows a message:

_Your PPPrefs license is disabled because this machine is domain joined. Please forcefully turn it
on with the ADMX setting entitled 'Specifically enable_ Endpoint Policy Manager _Preferences
(Original version) if licensed.'_

## What is the change? and how do I fix it?

So, again, if when your license request has domain joined machines, we attempt to automatically send
you a license in return, with Endpoint Policy Manager Preferences automatically set with the
ENABLED=FALSE flag, as expressed earlier. But there are times when license files might be sent with
this omitted, thus turning on Endpoint Policy Manager Preferences and causing conflicts in a domain.

Therefore, as an additional precaution to prevent conflicts in domain joined machines, staring in
build 2682 this license must be set to ENABLED=TRUE (or omitted) and we now require this component
(and only this component) to be explicitly enabled via ADMX setting, as seen below:

![655_1_image001_950x529](/images/endpointpolicymanager/license/unlicense/655_1_image001_950x529.webp)

Starting with build 2682, it will now take two steps for Endpoint Policy Manager Preferences to be
enabled:

**Step 1 –** The Universal license file must have the line

```
<component id="608ba33d-af06-46f9-9e6c-62495560024e" name="PolicyPak Preferences" enabled="true" />
```

or

```
<component id="608ba33d-af06-46f9-9e6c-62495560024e" name="PolicyPak Preferences"/>
```

**Step 2 –** The ADMX expressed earlier must explicitly be set to enabled.

Then and only then will Endpoint Policy Manager Preferences attempt to process GPPreferences items
with domain joined machines.

## How does this affect non-domain joined machines?

If your machine is non-domain joined and you wish to have Endpoint Policy Manager deliver
GPPreferences using Endpoint Policy Manager Preferences, you only need to have one step:

- Endpoint Policy Manager Cloud + Non Domain joined machines: Do nothing. The Endpoint Policy
  Manager Preferences license in Endpoint Policy Manager cloud will enable you to deliver
  GPPreferences to non-domain joined machines.
- Endpoint Policy Manager + an MDM service like Intune + Non Domain joined machines: You need to
  ensure your Universal license has the Endpoint Policy Manager Preferences line enabling (or
  omitting) enablement.

  ```
  <component id="608ba33d-af06-46f9-9e6c-62495560024e" name="PolicyPak Preferences" enabled="true" />
  ```

  or

  ```
  <component id="608ba33d-af06-46f9-9e6c-62495560024e" name="PolicyPak Preferences"/>
  ```

## Why / when would you want to enable Endpoint Policy Manager Preferences 1.0 (for domain joined machines?)

If your machine is only domain joined, there is really no good reason to enable this license, which
could cause conflicts.

However, you might want to turn on the license and then enable this setting if your machine is
domain joined, but you deploy GPPreferences from Endpoint Policy Manager Cloud, or using Endpoint
Policy Manager and your MDM service like Intune.

Remember though, the problem arises when you deliver GPPreferences settings from multiple sources,
say, on-prem GPOs and also Endpoint Policy Manager Cloud. Or on-prem GPOs and with Endpoint Policy
Manager and your MDM service.

When you attempt to deliver GPPreferences from MULTIPLE SOURCES, then this is not supported; and
you're much likelier to have a conflict.

The key takeaway here is to use ONE SOURCE for delivering Group Policy Preferences items and not
two.

Either

- Use the on-prem GPO delivery of GPPreferences (and keep the Endpoint Policy Manager Preferences
  component disabled),

or

- Use the Cloud or MDM delivery of GPPreferences, where you must enable Endpoint Policy Manager
  Preferences, but then stop delivering GPPreferences via on-prem GPO delivery.

## Final Thoughts

This protection is put in place starting with build 2682, when computers are domain joined so they
don't have conflicts with on-prem GPPreferences.

We recommend you keep this component disabled unless you know you need it, or you plan to migrate
away from on-prem GPPreferences and use CLOUD or MDM with Endpoint Policy Manager exclusively.

:::note
If Endpoint Policy Manager Preferences license is disabled by ADMX policy (see below),
then PolicyPak Preferences will always be unlicensed and disabled (even if the aforementioned
**Specifically enable PolicyPak Preferences (Original version) if licensed** ADMX setting is set.
:::


![forcedisabled1](/images/endpointpolicymanager/license/unlicense/forcedisabled1.webp)

In the future, we plan for Endpoint Policy Manager Preferences to evolve to enable co-existence from
multiple sources.

