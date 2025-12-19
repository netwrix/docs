---
title: "Firefox: How do I make Application Settings Manager work with Firefox 115 and later (and how do I transition existing settings?"
description: "Firefox: How do I make Application Settings Manager work with Firefox 115 and later (and how do I transition existing settings?"
sidebar_position: 90
---

# Firefox: How do I make Application Settings Manager work with Firefox 115 and later (and how do I transition existing settings?

This document is only needed for customers using Netwrix Endpoint Policy Manager (formerly
PolicyPak) Application Settings Manager and Firefox ESR. There is no required special workaround for
Endpoint Policy Manager Browser Router except using the latest Endpoint Policy Manager CSE and
Firefox ESR 115 and later.

Update for 24.11 CSE

Firefox 128 has made a breaking change requiring an update to the CSE and the Firefox 115 and later
Pak to continue functioning.

The only supported configuration going forward for Firefox 128 support is CSE 24.11 (or later) and
the Firefox 115 and later pak, which is compiled (and signed) from Netwrix with date stamp 11/7/2024
and later.

![transition](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/transition.webp)

Previous Details (Pre 24.11 CSE)

Firefox 115 and later has made a breaking change internally which makes our longstanding plug-in
implementation fail to operate. This change is expected to be permanent, and as such required a few
items to workaround and fix it:

- Changes within Endpoint Policy Manager Application Settings Manager on how we register the Firefox
  plug in (requiring an updated CSE)
- The way the AppSet performs its interaction with the CSE
- The AppSet itself which needed to be recompiled with some Endpoint Policy Manager DesignStudio
  updates.

:::note
If you are using the Endpoint Policy Manager DesignStudio yourself to make any changes to
the Firefox 23 AppSet, you will need to re-compile with the latest Endpoint Policy Manager
DesignStudio and then perform the steps listed below.
:::


This document is to help guide you through the required transition.

We will refer to the original Firefox AppSet as FF23 AppSet and the updated one as Firefox AppSet as
FF115.

You can acquire the updated FireFox AppSet 115 in the Endpoint Policy Manager Portal within the
AppSets downloads.

:::note
It is recommended, though not strictly required that you also update your management
station to the latest Endpoint Policy Manager MMC snap-in. In doing so the screenshots shown here
will match the steps you will be performing.
:::


## Functional Matrix of Firefox, CSE and AppSet

| Firefox ESR version | CSE Version     | AppSet Version Compiled with        | Expected Behavior |
| ------------------- | --------------- | ----------------------------------- | ----------------- |
| 102.9 and below     | 23.8 and below  | 23.8 and below (aka FF23 AppSet)    | Works             |
| 102.9 and below     | 23.10 and later | 23.10 and later (aka FF 115 AppSet) | Works             |
| 102.9 and below     | 23.8 and below  | 23.10 and later (aka FF 115 AppSet) | Not Work          |
| 115 and later       | 23.10 and later | 23.8 and below (aka FF23 AppSet)    | Not Work          |
| 115 and later       | 23.8 and below  | 23.10 and later (aka FF 115 AppSet) | Not Work          |
| 115 and later       | 23.10 and later | 23.10 and later (aka FF23 AppSet)   | Works             |

The upshot is:

- If you use the new CSE you must use the New AppSet (FF115)
- If you use an older CSE you must use the Older AppSet (FF23)
- Then when you use the new CSE and the New AppSet (FF115), Endpoint Policy Manager will operate as
  expected for FF ESR version 102.9 and also FF 115 and later

Additionally, you will want to ensure that your existing FF23 AppSet policies do not get pushed down
to the machines with the new 23.10 and later CSE. During this guide you will use Item Level
Targeting to ensure that the older FF23 AppSet cannot work with, and shouldn't be applied to newer
CSEs; therefore we need to ensure that the newer FF115 AppSet only applies to the newer CSEs.

:::note
This document mostly focuses on Group Policy Object delivery of the Firefox Endpoint
Policy Manager AppSet. Note you may have other ways to deliver the FireFox Endpoint Policy Manager
AppSet like Endpoint Policy Manager Cloud, local GPOs, and/or XML data files (via MSI files.) Be
sure to perform this same operation using any and all methods.
:::


## Finding all GPOs with Endpoint Policy Manager Application Settings Manager Data

You'll want to first discover all GPOs with Endpoint Policy Manager Application Settings Manager
Data, and those with specific Firefox 23 AppSets. That being said, automation can only help you
discover which GPOs contain Endpoint Policy Manager Application Settings Manager data. After that,
you must open each Group Policy Object one by one and manually look for FF23 AppSet data.

Overview of using the Endpoint Policy Manager PowerShell cmdlets to discover Endpoint Policy Manager
data within GPOs see the
[Endpoint Policy Manager User PowerShell to find all Endpoint Policy Manager GPOs](/docs/endpointpolicymanager/gettingstarted/misc/videos/troubleshooting/powershell.md)
topic for additional information.

![939_1_image-20231101213809-1_950x372](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/939_1_image-20231101213809-1_950x372.webp)

The specific command you'll want to run is Get-PPGPOs -cse "application settings manager".

Each Group Policy Object at this point will need to be opened to look for Firefox 23 AppSets. Here
is an example of the FF23 AppSet on the Computer side, though it may also reside on the User side.

![939_2_image-20231101213809-2_950x458](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/939_2_image-20231101213809-2_950x458.webp)

Before making any modifications, you'll want to perform a few backup steps which are detailed in the
next section.

## Backing Up and Testing a Restore

There are a myriad of ways to recover from a problem during this procedure; and we recommend you
perform all of these steps.

We strongly recommend before starting the upgrade that you are confident you can backup and also
restore your Endpoint Policy Manager Application Settings Manager and specifically the Firefox
settings before continuing.

### Back up 1: Viewing the Group Policy Object Report and saving the HTML report.

![939_3_image-20231101213809-3_950x493](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/939_3_image-20231101213809-3_950x493.webp)

This won't be your only backup, but it will express exactly what is in your Group Policy Object with
regards to your settings.

### Back Up 2: Backing up the Group Policy Object (or all GPOs.)

For backing up the GPO or all GPOs see the
[Endpoint Policy Manager Application Settings Manager: Backup, Restore, Export, Import](/docs/endpointpolicymanager/gettingstarted/misc/videos/upgradingmaintenance/backup.md)
topic for additional information.

### Back up 3: Export the settings for each FF23 AppSet you already have.

Open each FF23 AppSet and locate the Options button. Then click Export XML Settings Data and save
the file out.

![939_4_image-20231101213809-4_950x761](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/939_4_image-20231101213809-4_950x761.webp)

See the
[What are the two ways to export AppSet settings and why would I use one over the other?](/docs/endpointpolicymanager/components/applicationsettingsmanager/technotes/troubleshooting/appset.md)

:::note
You will use the resulting XML file in an upcoming step and not only for backup purposes.
:::


### Back up 4: Backing up your Firefox 23 AppSet DLL

Additionally, you should keep handy the OLD Endpoint Policy Manager Firefox 23 App Set DLL file that
you are currently using; and not merely the one still available in the Endpoint Policy Manager
portal.

The file you are looking for is PP-Firefox23.DLL which is likely in one of three locations:

- `\Programfiles\PolicyPak\Extensions` or
- SYSVOL (replicated to other domain controllers)\
  `C:\Windows\SYSVOL\sysvol\fabrikam.com\Policies\PolicyPak `
- A share. (Tip: To locate the share you could be using see the
  [Using Shares to Store Your Paks (Share-Based Storage)](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/centralstoresharing/shares.md)[Using Shares to Store Your Paks (Share-Based Storage)](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/centralstoresharing/shares.md))

So, in summary, before leaving this section and continuing onward, again we advise that you:

- Have an HTML report of your existing FF23 settings
- Have a backup of the GPO or GPOs which may potentially need to be restored
- Have your exported FF23 AppSet settings XML as per the instructions
- Have your PP-Firefox23.DLL handy that you are already using

Remember also you might have more than one Group Policy Object with FF23 settings, so be sure to
repeat this procedure for each discovered Group Policy Object with FF23 settings.

## Adding Item Level Targeting to your Existing FF 23 AppSet policy entry (and optionally testing the ILT evaluation)

You want to make sure that that your existing Firefox 23 AppSet policy doesn't affect machines with
the newest CSE. As of this writing the version is 23.10.3683 (October of 2023) but could be
different in your download.

To play it safe, set the ILT evaluation to check for Endpoint Policy Manager CSE version 23.9.0.0
(September of 2023) and earlier for FF23 and 23.10.0.0 (October of 2023) and later for FF125.

However, anything EARLIER than this version will support only FF23 AppSet and anything LATER or
EQUAL to this version will support only FF115 AppSet.

Find your existing FF23 AppSet in your Group Policy Object(s) and select "Edit item-level targeting
filters…"

![939_5_image-20231101213809-5_950x524](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/939_5_image-20231101213809-5_950x524.webp)

You can test for the presence or absence of Endpoint Policy Manager CSE version 23.09.0.0 with a
Registry match query for:

- Match type: Match value data
- Value data match type: Version match
- Hive: HKEY_Local_Machine
- Key Path: `SOFTWARE\PolicyPak\ClientSide Extensions\{F8357AE4-F4E0-49EC-AE9D-61078938E7CD}`
- Value Name: Version
- Value Type: REG_SZ
- Version Range: GREATER THAN 0.0.0.0 and LESS THAN 23.9.0.0

![939_6_image-20231101213809-6_950x743](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/939_6_image-20231101213809-6_950x743.webp)

When done save the values. You will know you have ILT set when you see the Targeting column change
to ON.

![939_7_image-20231101213809-7_950x273](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/939_7_image-20231101213809-7_950x273.webp)

This is different than "Predefined Targeting". To understand the difference between ILT and
Predefined Targeting see the
[Predefined ILTs (Internal Filters)](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/designstudio/itemleveltargeting.md)
topic for additional information.

### Optional: Testing the ILT Filters on FF23 using the Endpoint Policy Manager Item Level Targeting Validation Tool

Tip: You can also export the FF 23 settings to XMLdata File format and use part of the output to
verify the Item Level Targeting will evaluate to TRUE or FALSE. To do this, right-click the entry
and select Export settings to XMLData file and save the file. Then use the Endpoint Policy Manager
Item Level Targeting Validation tool to test how ILT will operate. See the
[Troubleshooting ILT with the ILT Validator Tool](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/featurestechsupport/itemleveltargeting.md)
topic for additional information.

:::note
You will have to trim the ILT part of the output to eliminate the `<ILTFilters>` at the
beginning and `</ILTFilters>` at the end.
:::


![939_8_image-20231101213809-8_950x453](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/939_8_image-20231101213809-8_950x453.webp)

Expected result on a machine with 23.10 and later CSE:

![939_9_image-20231101213809-9_950x523](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/939_9_image-20231101213809-9_950x523.webp)

## Adding the FF 115 AppSet to an existing or new Group Policy Object

After you download the FF 115 AppSet from the Endpoint Policy Manager portal, it will appear like
this. You only need the .DLL file and not the XML file.

![939_10_image-20231101213809-10](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/939_10_image-20231101213809-10.webp)

Use these instructions to add the AppSet Locally or via Central Store:

[Working with Others and using the Central Store](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/centralstoresharing/centralstorework.md)

Use these instructions to add the AppSet to a Share:

[Using Shares to Store Your Paks (Share-Based Storage)](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/centralstoresharing/shares.md)

![939_11_image-20231101213809-11_950x492](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/939_11_image-20231101213809-11_950x492.webp)

For example in the Endpoint Policy Manager Central Store you simply add the pp-Mozilla Firefox
115.DLL.

:::note
You may leave your existing pp-Mozilla Firefox 23 aboutconfig A to I and J to Z.DLL files
in place without modification.
:::


![939_12_image-20231101213809-12_950x406](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/939_12_image-20231101213809-12_950x406.webp)

Next time you open the Group Policy editor you should see Endpoint Policy Manager For Mozilla
Firefox 115.

## Using the FF 115 AppSet

Now you can create a new entry for the FF 115 AppSet, import the previously exported FF23 settings
into the FF115 AppSet and also set Item Level Targeting on the FF 115 AppSet so it only applies to
computers with the latest Endpoint Policy Manager CSE.

After creating the entry, double-click into it to open it up and select Import XML Settings Data.

![939_13_image-20231101213809-13_950x633](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/939_13_image-20231101213809-13_950x633.webp)

Then select the previously exported settings from the FF 23 AppSet. You should get a SUCCESS
message.

Next, set the Item-level targeting in the AppSet.

![939_14_image-20231101213809-14](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/939_14_image-20231101213809-14.webp)

FF AppSet 115 should be applied only to machines with Endpoint Policy Manager CSE version 23.10.3687
or Greater and can be determined with a Registry match query for:

- Match type: Match value data
- Value data match type: Version match
- Hive: HKEY_Local_Machine
- Key Path: `SOFTWARE\PolicyPak\ClientSide Extensions\{F8357AE4-F4E0-49EC-AE9D-61078938E7CD}`
- Value Name: Version
- Value Type: REG_SZ
- Version Range: GREATER THAN OR EQUAL TO 23.10.0.0 and LESS THAN 99.0.0.0

![939_15_image-20231101213809-15_950x815](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/939_15_image-20231101213809-15_950x815.webp)

Click OK and then close the AppSet entry to save it.

### Optional: Testing the ILT Filters on FF23 using the Endpoint Policy Manager Item Level Targeting Validation Tool

You can also export the FF 115 settings to XMLdata File format and use part of the output to verify
the Item Level Targeting will evaluate to TRUE or FALSE. To do this, right-click the entry and
select Export settings to XMLData file and save the file. Then use the Endpoint Policy Manager Item
Level Targeting Validation tool to test how ILT will operate. See the
[Troubleshooting ILT with the ILT Validator Tool](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/featurestechsupport/itemleveltargeting.md)
topic for additional information.

Note that you will have to trim the ILT part of the output to eliminate the `<ILTFilters>` at the
beginning and `</ILTFilters>` at the end.

You can test the ILT evaluation by using the Export settings to XMLData file for the Mozilla Firefox
115 entry.

![939_16_image-20231101213809-16_950x543](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/939_16_image-20231101213809-16_950x543.webp)

Then you can use the ILT Evaluator tool to ensure your ILT evaluation is properly crafted and the
AppSet will only target machines with the latest Endpoint Policy Manager CSE.

![939_17_image-20231101213809-17_950x549](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/939_17_image-20231101213809-17_950x549.webp)

# HTML Settings Report Manual Comparison

In one of the backup steps we recommended you export the FF23 GPMC HTML report. At this point you
may also want to double-check the FF115 GPMC report for any discrepancies or omissions in the
export/import process.

If you don't see an expected value this could be because (1) the FF115 Pak was updated to remove
some values which appear to be unsupported in modern Firefox versions or (2) Some part of the Export
from FF23 and import to FF115 didn't work as expected.

In such a case as case 2, please manually open the FF115 Pak and manually update your settings to
correct for any non-imported settings.

![939_18_image-20231101213809-18_950x807](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/939_18_image-20231101213809-18_950x807.webp)

## Final Thoughts

In this document you learned how to target the FF23 AppSet to your older CSEs and the FF115 AppSet
to your newer CSEs. You also learned how to export the FF23 settings and migrate them over to the
FF115 AppSet.


