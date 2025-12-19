---
title: "How to Reset Secure Channel for computers that have fallen out of sync with domain while working remotely by using Scripts Manager in Endpoint Policy Manager Cloud"
description: "How to Reset Secure Channel for computers that have fallen out of sync with domain while working remotely by using Scripts Manager in Endpoint Policy Manager Cloud"
sidebar_position: 70
---

# How to Reset Secure Channel for computers that have fallen out of sync with domain while working remotely by using Scripts Manager in Endpoint Policy Manager Cloud

Symptoms:

![300_1_image-20200623000029-1](/images/endpointpolicymanager/scriptstriggers/300_1_image-20200623000029-1.webp)

![300_2_image-20200623000029-2](/images/endpointpolicymanager/scriptstriggers/300_2_image-20200623000029-2.webp)

Prerequisite:

Users need to have the "Reset password" right on the computer objects they will be resetting the
Secure Channel for.

![300_3_image-20200623000029-3](/images/endpointpolicymanager/scriptstriggers/300_3_image-20200623000029-3.webp)

:::note
If the user does not have the right to "Reset password" on the computer object then they
will receive the following error when they attempt to reset the Secure Channel:
:::


![300_4_image-20200623000029-4_950x67](/images/endpointpolicymanager/scriptstriggers/300_4_image-20200623000029-4_950x67.webp)

Once the "Reset password" right is in place for the user on the computer object the only remaining
issue will be to run the reset Secure Channel command with elevated rights and that is where Netwrix
Endpoint Policy Manager (formerly PolicyPak) Scripts Manager comes in.

If a domain user (who has been granted the "Reset password" right) tries to reset the Secure Channel
for a computer previously joined to the domain and they do not run the command elevated then they
will receive the error below:

![300_5_image-20200623000029-5](/images/endpointpolicymanager/scriptstriggers/300_5_image-20200623000029-5.webp)

To work around this, we are going to use Endpoint Policy Manager Scripts Manager (PPSM).

**Step 1 –** Using an instance of the Microsoft Group Policy Management Console (GPMC) with the
Endpoint Policy Manager Admin console installed, create a new PPSM policy on the user side and set
the "Apply action" to run the following PowerShell Script as the user and elevated:

```
#Script starts here    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force 
#Create temp folder if not present    $tempfolder = "C:\temp"    if (-not (Test-Path $tempfolder -PathType Container) )    {        New-Item -ItemType directory -Path $tempfolder    } 
# Turn on logging    start-transcript -path "c:\temp\SecureChannel_PS.log" -append 
# Optionally check current state of Secure Channel 
#Test-ComputerSecureChannel -verbose    #Repair Secure Channel regardless of state    $VerbosePreference = "Continue"    Write-Verbose "Running Test-ComputerSecureChannel -Repair"    Test-ComputerSecureChannel -Repair 
#End of Script
```

![300_6_image-20200623000029-6_950x698](/images/endpointpolicymanager/scriptstriggers/300_6_image-20200623000029-6_950x698.webp)

**Step 2 –** Skip the "Revert action" screen, then for "Policy process mode configuration" choose
either "Once" or the "Once or when forced" radio button then click "Save" to save the policy.

**Step 3 –** Export the policy as XML then upload and link the policy to the Computer group in
Endpoint Policy Manager Cloud that needs to receive the policy.

![300_7_image-20200623000029-7_950x162](/images/endpointpolicymanager/scriptstriggers/300_7_image-20200623000029-7_950x162.webp)

Should look similar to below after import:

![300_8_image-20200623000029-8_950x274](/images/endpointpolicymanager/scriptstriggers/300_8_image-20200623000029-8_950x274.webp)

**Step 4 –** For testing, you can either wait for the policy to process on its own automatically, or
manually test from a computer that is currently connected to the company network via VPN and is
experiencing this issue by running "ppcloud /sync" followed by ‘'ppupdate" from a CMD prompt.

:::note
Check the log file in `C:\Temp folder or run "Test-ComputerSecureChannel -verbose"` from
PowerShell to verify the Secure Channel is working again.
:::


Example of successful result in log file (`c:\temp\SecureChannel_PS.log` ) is below:

![300_9_image-20200623000029-9_950x181](/images/endpointpolicymanager/scriptstriggers/300_9_image-20200623000029-9_950x181.webp)


