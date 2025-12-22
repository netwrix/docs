---
title: "How to Set the Password for a Local Account using Scripts Manager"
description: "How to Set the Password for a Local Account using Scripts Manager"
sidebar_position: 140
---

# How to Set the Password for a Local Account using Scripts Manager

As of
[https://support.microsoft.com/en-us/topic/ms14-025-vulnerability-in-group-policy-preferences-could-allow-elevation-of-privilege-may-13-2014-60734e15-af79-26ca-ea53-8cd617073c30](https://support.microsoft.com/en-us/topic/ms14-025-vulnerability-in-group-policy-preferences-could-allow-elevation-of-privilege-may-13-2014-60734e15-af79-26ca-ea53-8cd617073c30)
Microsoft has blocked the ability to configure local passwords using Group Policy Preferences. 
However, you can still workaround this by using a PowerShell script within Netwrix Endpoint Policy
Manager (formerly PolicyPak) Scripts and Triggers Manager (PPScripts).

How this works is that you first define your own Security Key to use for encrypting the clear text
password, (see $key below for example).

Create the password file:

```
$key = (1,2,3,4,5,1,2,3,4,5,11,12,13,14,15,20,30,40,50,5,4,3,2,1)
read-host -assecurestring | convertfrom-securestring -key $key | out-file \\server\share\file.txt
```

:::note
The PowerShell Script above was borrowed from:
[https://community.spiceworks.com/topic/584947-local-users-and-groups-group-policy-update](https://community.spiceworks.com/topic/584947-local-users-and-groups-group-policy-update))
:::


:::warning
The targeted endpoint must have rights to read the share and file used above (i.e.,
`\\server\share\file.txt` ).
:::


Then use that Security Key to encrypt the clear text password that you enter on the screen, i.e.,
"Password!"

If using PowerShell ISE:

Enter the password in the window that appears when the script above is run.

![923_1_image-20221221103111-1](/images/endpointpolicymanager/scriptstriggers/923_1_image-20221221103111-1.webp)

If running PowerShell from CMD:

![923_2_image-20221221103111-2](/images/endpointpolicymanager/scriptstriggers/923_2_image-20221221103111-2.webp)

The resulting encrypted password is then stored at a secure location that is accessible from the
endpoints (in this case a file on a secure network share `(\\server\share\file.txt)`.

![923_3_image-20221221103111-3](/images/endpointpolicymanager/scriptstriggers/923_3_image-20221221103111-3.webp)

The next step is to create a computer side PowerShell policy in Endpoint Policy Manager Scripts &
Triggers.

![923_4_image-20221221103111-4](/images/endpointpolicymanager/scriptstriggers/923_4_image-20221221103111-4.webp)

Then at the "On Apply action" screen choose PowerShell script for the type of script from the
dropdown, and then paste in the script below after editing it to reflect your Security Key, and the
corresponding local username on the endpoints in your environment that you wish to update.

```
$key = (1,2,3,4,5,1,2,3,4,5,11,12,13,14,15,20,30,40,50,5,4,3,2,1)
$pwd = get-content \\server\share\file.txt | convertto-securestring -key $key
$user = "EastSalesUser1"
$cred = new-object -typename System.Management.Automation.PSCredential -argumentlist $user,$pwd
$pw = $cred.GetNetworkCredential().Password
$cmd = "net user $user $pw"
Invoke-Expression $cmd
```

This script will read the` file.txt` from the secure network share and then use that information to
update any local user account you have defined in your script.

In the example below we are setting the password for a local user called "EastSalesUser1", see $user
below).

![923_5_image-20221221103111-5](/images/endpointpolicymanager/scriptstriggers/923_5_image-20221221103111-5.webp)

:::warning
The targeted endpoint must have rights to read the share and file used above (i.e.,
`\\server\share\file.txt`).
:::


Lastly, apply the policy to any endpoints as needed and you are good to go.


