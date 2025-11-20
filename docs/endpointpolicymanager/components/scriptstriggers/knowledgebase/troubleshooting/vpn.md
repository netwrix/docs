---
title: "How to use Scripts Manager Triggers to Map Network Drives when a VPN is Connected"
description: "How to use Scripts Manager Triggers to Map Network Drives when a VPN is Connected"
sidebar_position: 50
---

# How to use Scripts Manager Triggers to Map Network Drives when a VPN is Connected

## Prerequisites:

- VPN used must be in the list of supported VPNs in the article below.

  [Which VPN Solutions are currently supported for use with Scripts Manager VPN Triggers?](/docs/endpointpolicymanager/components/scriptstriggers/knowledgebase/troubleshooting/vpnsolutions.md)

**Step 1 –** Create a new policy (Set Launch Folder Windows in a Separate Process to Enabled) using
Scripts & Triggers on the computer side, choose switched-mode like in the screenshot below.

![639_1_image-20210424015614-1](/images/endpointpolicymanager/scriptstriggers/579_1_image-20190918135807-1.webp)

**Step 2 –** At the "On apply action" screen select "PowerShell script" from the dropdown, then in
the main text window, paste in the script below, check the option "Run script as user, then click
"Next".

```
# Set Launch Folder Windows in a Separate Process to Enabled
if((Test-Path -LiteralPath "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced") -ne $true) {
    New-Item "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -force -ea SilentlyContinue 
};
New-ItemProperty -LiteralPath 'HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced' -Name 'SeparateProcess' -Value 1 -PropertyType DWord -Force -ea SilentlyContinue; 

```

![639_2_image-20210424015614-2](/images/endpointpolicymanager/scriptstriggers/mappeddrives/639_2_image-20210424015614-2.webp)

**Step 3 –** Then click "Next" at the "On revert action" screen to skip that screen, then at the
"Specify process mode" screen choose the "Once" option.

![639_3_image-20210424015614-3](/images/endpointpolicymanager/scriptstriggers/mappeddrives/639_3_image-20210424015614-3.webp)

**Step 4 –** At the "Policy settings" screen give the policy a descriptive name then click "Finish.

![639_4_image-20210424015614-4](/images/endpointpolicymanager/scriptstriggers/mappeddrives/639_4_image-20210424015614-4.webp)

**Step 5 –** Now create another policy (Map drives when VPN connects) using Scripts & Triggers on
the computer side, choose switched-mode like in the screenshot below.

![639_5_image-20210424015614-5](/images/endpointpolicymanager/scriptstriggers/579_1_image-20190918135807-1.webp)

**Step 6 –** At the "On apply action" screen select "PowerShell script" from the dropdown, then in
the main text window, paste in the script below then change the drive mappings to match the settings
needed for your environment, check the option "Run script as user, then click "Next".

```
# Wait for DNS to settle after VPN connects
Start-Sleep -s 10
# Map G Drive
if (-not(get-psdrive -name "G" -ErrorAction SilentlyContinue)) {
    New-PSDrive -name "G" -PSProvider FileSystem -Root \\Server\share1 -Persist
}
# Map H Drive
if (-not(get-psdrive -name "H" -ErrorAction SilentlyContinue)) {
    New-PSDrive -name "H" -PSProvider FileSystem -Root \\Server\Share2 -Persist
} 

```

![639_6_image-20210424015614-6](/images/endpointpolicymanager/scriptstriggers/mappeddrives/639_6_image-20210424015614-6.webp)

**Step 7 –** Click "Next" at the "On revert action" screen to skip that screen, then at the "specify
process mode" screen choose the "On trigger" option, then choose "VPN connect" from the drop down
before clicking "Next" to continue.

![639_7_image-20210424015614-7](/images/endpointpolicymanager/scriptstriggers/mappeddrives/639_7_image-20210424015614-7.webp)

**Step 8 –** At the "Trigger settings" screen enter an asterisk (wildcard, etc.) for the server
name, then click "Next".

![639_8_image-20210424015614-8](/images/endpointpolicymanager/scriptstriggers/mappeddrives/639_8_image-20210424015614-8.webp)

**Step 9 –** At the "Policy settings" screen give the policy a descriptive name then click "Finish.

![639_9_image-20210424015614-9](/images/endpointpolicymanager/scriptstriggers/mappeddrives/639_9_image-20210424015614-9.webp)

:::note
You should have two policies now:
:::


![639_10_image-20210424015614-10](/images/endpointpolicymanager/scriptstriggers/mappeddrives/639_10_image-20210424015614-10.webp)

**Step 10 –** Lastly, test the policy by logging into a computer, (or run `gpupdate `if already
logged in) and then connect to a VPN as a user that should receive the policy. If everything works
you should see the network drives show up in File Explorer, you may need to click refresh if you had
File Explorer already open to update the window contents.

![639_11_image-20210424015614-11](/images/endpointpolicymanager/scriptstriggers/mappeddrives/639_11_image-20210424015614-11.webp)

**Step 11 –** Optionally, create a new Scripts and Triggers policy that disconnects the drives when
the VPN disconnects by using the script below and also changing the trigger to "VPN disconnect".

![639_12_image-20210424015614-12](/images/endpointpolicymanager/scriptstriggers/mappeddrives/639_12_image-20210424015614-12.webp)

![639_13_image-20210424015614-13](/images/endpointpolicymanager/scriptstriggers/mappeddrives/639_13_image-20210424015614-13.webp)

**Step 12 –** "On trigger" does not work with Revert action script which is why you need to create a
new policy to disconnect the drives.


