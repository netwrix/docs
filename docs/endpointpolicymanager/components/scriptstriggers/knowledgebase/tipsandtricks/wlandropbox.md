---
title: "How to import a WLAN / 802.11 / Wireless profile from Dropbox using Endpoint Policy Scripts Manager"
description: "How to import a WLAN / 802.11 / Wireless profile from Dropbox using Endpoint Policy Scripts Manager"
sidebar_position: 20
---

# How to import a WLAN / 802.11 / Wireless profile from Dropbox using Endpoint Policy Scripts Manager

**Step 1 –** From an elevated PowerShell prompt on a machine where the WiFi profile is setup and
working run the following to show all WLAN profiles on the PC:

`netsh wlan show profiles`

**Step 2 –** Export the profile you need by running the command below - substituting values relevant
to your WiFi `settings/Environment`
netsh wlan export profile name="Company WiFi " key=clear folder=c:\temp

:::note
This means the XML file will contain your WiFi password in clear text, this KB uses
Dropbox for demonstration purposes only. It is NOT recommended to store your WLAN profile on the
internet.
:::


**Step 3 –** Copy the `C:\temp\"Company WiFi.xml"` to Dropbox, then create a Share link. Copy the
link address, then replace the [www.dropbox.com](http://www.dropbox.com/) in your shared link with

[dl.dropboxusercontent.com](http://dl.dropboxusercontent.com/) to get a direct download link. Link
should look similar to below:

"[https://dl.dropboxusercontent.com/s/giyj5ei7b3ggyt2/CompanyWiFi.xml?dl=0](https://dl.dropboxusercontent.com/s/giyj5ei7b3ggyt2/CompanyWiFi.xml?dl=0)"

**Step 4 –** Create the WLAN GPO and apply it to the OU where the Computers live, next use Netwrix
Endpoint Policy Manager (formerly PolicyPak) Scripts Manager > on the Computer side to create a new
policy it

![658_1_img-1](/images/endpointpolicymanager/scriptstriggers/497_1_img-1.webp)

**Step 5 –** At the "Specify policy target screen be sure to use switched mode for the policy.

![658_2_img-2](/images/endpointpolicymanager/scriptstriggers/497_2_img-2.webp)

**Step 6 –** For the Apply action use the script below (remember to use the PowerShell Script option
from the drop down).

`start-transcript -path "c:\temp\wlan\install.log"`

# Set Download variables

`$WLANDownloadFolder = "c:\temp\wlan"`

#To get a direct download link replace the www.dropbox.com in your shared link with
dl.dropboxusercontent.com

`$WLANDownloadURL = "https://dl.dropboxusercontent.com/s/giyj5ei7b3ggyt2/CompanyWiFi.xml?dl=0"$WLANLocalDownloadLocation = "c:\temp\wlan"$WLANLocalDownloadFile = "c:\temp\wlan\CompanyWiFi.xml"`

# Create WLAN folder if not already there

`New-Item -ItemType directory -Path $WLANDownloadFolder `

`start-transcript -path "c:\temp\wlan\install.log" -appen`

# Download WLAN Profile XML File

`If ((Test-Path $WLANLocalDownloadFile -PathType Leaf) -eq $False) { Invoke-WebRequest -Uri $WLANDownloadURL -OutFile $WLANLocalDownloadFile }`

#Apply WLAN profile

`netsh wlan add profile filename="c:\temp\wlan\CompanyWiFi.xml"`

` user=all stop-transcript`

**Step 7 –** Verify that "Run script as user" check box is checked, then click next.

![658_3_img-3_950x601](/images/endpointpolicymanager/scriptstriggers/658_3_img-3_950x601.webp)

**Step 8 –** For the "Policy process mode configuration" screen specify "Once or when forced", then
click save.

![658_4_img-4](/images/endpointpolicymanager/scriptstriggers/658_4_img-4.webp)

:::note
The same policy will work if applied to user side and user OU as well.
:::


:::note
If needed you can delete this WLAN profile from a computer using an elevated PowerShell
command prompt.
:::


`netsh wlan delete profile name="Company WiFi"`


