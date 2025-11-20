---
title: "How do I user Endpoint Policy Manager to set the screensaver to a custom slideshow?"
description: "How do I user Endpoint Policy Manager to set the screensaver to a custom slideshow?"
sidebar_position: 160
---

# How do I user Endpoint Policy Manager to set the screensaver to a custom slideshow?

Group policy can be used to assign screensaver configurations where desired. However, if you want to
implement a custom slideshow, i.e. dictate the images to be used for the screensaver, a bit of extra
work and a reference computer is needed to accomplish the task.

The tasks involved are:

**Step 1 –** Implement a script to download the images to each user's computer

**Step 2 –** Use a reference computer to configure and save image storage location

**Step 3 –** Configure Group Policy Screensaver options

## Prerequisites

The following is assumed:

- The images are located on a share accessible to necessary users
- A workstation is available to use to extract encrypted registry information

## Create script to copy images

Netwrix Endpoint Policy Manager (formerly PolicyPak) Script Manager can be used to copy the images
from a network share to the user's computer. Although they can be accessed by the screen saver on a
network share, thereby eliminating the need for this script, they would not be accessible if the
computer were away from the network.

In this example the source directory is `\\dccore\share\SSImages\*` and the destination is
`%userprofile%\Pictures\SSImages\.`

**Step 1 –** Create new Group Policy Object were required

**Step 2 –** Expand Computer Configuration -> Endpoint Policy Manager and click on Scripts Manager

**Step 3 –** Add a new Collection, giving it a descriptive name (e.g. Screensaver scripts or Houston
Screensaver…) and click OK

![207_1_image-20200819181623-1](/images/endpointpolicymanager/scriptstriggers/207_1_image-20200819181623-1.webp)

![207_3_image-20200819181623-2](/images/endpointpolicymanager/scriptstriggers/207_3_image-20200819181623-2.webp)

:::note
If rolling out different images for different sets of users, ILT may be set on collection
to specified different groups of users or computers.
:::


**Step 4 –** Double-click to enter Collection

**Step 5 –** Click on "Add New Policy" and NEXT on first page

![207_5_image-20200819181623-3](/images/endpointpolicymanager/scriptstriggers/207_5_image-20200819181623-3.webp)

**Step 6 –** On the "On apply action" screen, either click File -> Open and browse for a
preconfigured script or click down-arrow by "(None)", select the appropriate type of script and
either paste or type in the script to copy the image files.

![207_7_image-20200819181623-4](/images/endpointpolicymanager/scriptstriggers/207_7_image-20200819181623-4.webp) 
OR
![207_9_image-20200819181623-5](/images/endpointpolicymanager/scriptstriggers/207_9_image-20200819181623-5.webp)

Sample script using powershell that will 1; check for the existence of the destination, 2; Create
the destination if it does not exist and 3; copy the files over.

![207_11_image-20200819181623-6](/images/endpointpolicymanager/scriptstriggers/207_11_image-20200819181623-6.webp)

```
if (!(Test-Path -Path $env:userprofile\pictures\SSImages\))    {    New-item -path $env:userprofile\pictures\ -Name SSImages -Itemtype directory    }    
Copy-Item \\dccore\share\SSImages\* -Destination $env:userprofile\pictures\SSImages
```

**Step 7 –** On "On revert action" screen, leave as-is and click NEXT

**Step 8 –** Ensure "Always" is selected and click NEXT

![207_13_image-20200819181623-7](/images/endpointpolicymanager/scriptstriggers/207_13_image-20200819181623-7.webp)

**Step 9 –** Give a descriptive name to the policy, set item-level targeting if required and click
FINISH

## Get Custom Location Information

The path to the image location is saved in the Registry as an encrypted value. Use the steps below
to create the path, export the value, and make it usable.

**Step 1 –** On your reference computer, set the screensaver to use "Photos", click on Settings and
Browse to the location of the Screensaver images

![207_15_image-20200819181623-8](/images/endpointpolicymanager/scriptstriggers/207_15_image-20200819181623-8.webp)

**Step 2 –** Click SAVE to close the Photo Screen Saver settings window and then OK to finish

**Step 3 –** Open Regedit and search HKCU Values for "EncryptedPIDL"

**Step 4 –** Export "Screensaver" registry key

**Step 5 –** Open the `.REG` file in text editor (I recommend something like Notepad++ that has a
larger maximum line size) and edit the following:

- Delete lines for "Speed" and "Shuffle" configuration
- Remove all line-breaks for `"EncryptedPIDL"` – data must be on one line

  ![207_17_image-20200819181623-9](/images/endpointpolicymanager/scriptstriggers/207_17_image-20200819181623-9.webp)

It will end up looking something like this…

![207_19_image-20200819181623-10](/images/endpointpolicymanager/scriptstriggers/207_19_image-20200819181623-10.webp)

## Create Group Policy Object

Once the prep-work is completed, we can create the Group Policy Object to 1; Import the .REG
settings and 2; set the Screensaver configuration options as per your requirements.

### Enable and configure The Screen Saver

Here we are configuring the Screensaver options to your requirements.

**Step 1 –** Open your existing Group Policy Object

**Step 2 –** Expand Computer Configuration -> Endpoint Policy Manager and click on Administrative
Templates Manager

![207_21_image-20200819181623-11](/images/endpointpolicymanager/scriptstriggers/207_21_image-20200819181623-11.webp)

**Step 3 –** Add a new Collection, giving it a descriptive name (e.g. Screensaver scripts or Houston
Screensaver…) and click OK

![207_23_image-20200819181623-12](/images/endpointpolicymanager/scriptstriggers/207_23_image-20200819181623-12.webp)

:::note
If rolling out different images for different sets of users, ILT may be set on collection
to specified different groups of users or computers.
:::


**Step 4 –** Double-click to enter the Collection

**Step 5 –** Add new policy

![207_25_image-20200819181623-13](/images/endpointpolicymanager/scriptstriggers/207_25_image-20200819181623-13.webp)

**Step 6 –** Set the Scope Filter to "User Policy" or "All Policy"

![207_27_image-20200819181623-14](/images/endpointpolicymanager/scriptstriggers/207_27_image-20200819181623-14.webp)

**Step 7 –** Create required policies – Screensaver Policies are kept under Users -> Admin Templates
-> Control Panel -> Personalization.

Setting Policies in Endpoint Policy Manager land is the same as Group Policy

- Double-click open the setting
- Enable, set any configuration Options
- OK to close

![207_29_image-20200819181623-15](/images/endpointpolicymanager/scriptstriggers/207_29_image-20200819181623-15.webp)

The following are the minimum policies required

- Enable Screen Saver - Enable
- Force Specific screen saver – Enable and set executable name to
  `"%systemroot%\system32\PhotoScreensaver.scr"`
- Password protect the screen saver – Enabled
- Screen Saver timeout – Enabled, set timeout value to desired length in Seconds (default is 900
  (15min), 300 is 5 min)

**Step 8 –** Once all policies have been enabled and configured, click CLOSE in the bottom-right
corner

### Configure the Custom Path

**Step 1 –** Expand Computer`Configuration -> Policypak-> Scripts Manager`and click on the
collection created earlier

**Step 2 –** Add a new policy and NEXT on first window

**Step 3 –** Select "Apply this policy to all users who log on to the computer (switched Mode)" and
click NEXT

![207_31_image-20200819181623-16](/images/endpointpolicymanager/scriptstriggers/207_31_image-20200819181623-16.webp)

**Step 4 –** Select "Batch script" from the drop-down menu and either type in or copy the script
below to import the .REG file, replacing the /D value (LongEncryptedText…) with the very long
encrypted path value from the exported .REG key.

Command to import the registry data using` REG.EXE`:

```
reg add HKCU\Software\Microsoft\Windows Photo Viewer\Slideshow\Screensaver /v EncryptedPIDL /t REG_SZ /D LongEncryptedText…
```

**Step 5 –** Select "Run Script as user" and "With elevated rights" and click NEXT

![207_33_image-20200819181623-17](/images/endpointpolicymanager/scriptstriggers/207_33_image-20200819181623-17.webp)

**Step 6 –** NEXT again

**Step 7 –** Select "Once" and click NEXT

![207_35_image-20200819181623-18](/images/endpointpolicymanager/scriptstriggers/207_35_image-20200819181623-18.webp)

**Step 8 –** Give it a descriptive name (e.g. "Screensaver Path"), ensure it is enabled and click
FINISH

![207_37_image-20200819181623-19](/images/endpointpolicymanager/scriptstriggers/207_37_image-20200819181623-19.webp)


