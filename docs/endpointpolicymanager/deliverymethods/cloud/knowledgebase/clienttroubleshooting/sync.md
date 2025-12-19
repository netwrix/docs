---
title: "How to resolve error message \"Could not sync with cloud…\" caused by disabling TLS 1.0"
description: "How to resolve error message \"Could not sync with cloud…\" caused by disabling TLS 1.0"
sidebar_position: 60
---

# How to resolve error message "Could not sync with cloud…" caused by disabling TLS 1.0

If you disable TLS 1.0 on your Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud Client
machines you may receive one or more of the following error messages:

## Unable to register with the cloud during the installation of the client

One or more errors occurred during registration in Endpoint Policy Manager Cloud:

The client and server cannot communicate, because they do not possess a common algorithm.

## Could not sync with the cloud

A communication error occurred during sending Sync to
[https://cloudsvc.policypak.com/Services/Synchronization](https://cloudsvc.policypak.com/Services/Synchronization):

An error occurred while making the HTTP request to
[https://cloudsvc.policypak.com/Services/Synchronization](https://cloudsvc.policypak.com/Services/Synchronization).
This could be due to the fact that the server certificate is not configured properly with HTTP.SYS
in the HTTPS case. This could also be caused by a mismatch of the security binding between the
client and the server.

A communication error occurred during sending Sync to
[https://cloudsvc.policypak.com/Services/Synchronization](https://cloudsvc.policypak.com/Services/Synchronization):

An error occurred while making the HTTP request to
[https://cloudsvc.policypak.com/Services/Synchronization](https://cloudsvc.policypak.com/Services/Synchronization).
This could be due to the fact that the server certificate is not configured properly with HTTP.SYS
in the HTTPS case. This could also be caused by a mismatch of the security binding between the
client and the server.

A security error occurred during sending Sync to
[https://cloudsvc.policypak.com/Services/Synchronization](http://cloudsvc.policypak.com/Services/Synchronization):

The token provider cannot get tokens for target
'[https://cloudsvc.policypak.com/Services/Synchronization](http://cloudsvc.policypak.com/Services/Synchronization)'.

To resolve this issue, you need to edit the registry on any computers experiencing this issue to add
a DWORD = "SchUseStrongCrypto" with a value of "1", under the following two registry keys:

`[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\.NETFramework\v4.0.30319]`

`[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\.NETFramework\v4.0.30319]`

Then REBOOT the computer(s), after the REBOOT the sync should be working again.

Please see below for examples:

`[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\.NETFramework\v4.0.30319] `

![189_1_image-20190913212621-1](/images/endpointpolicymanager/troubleshooting/error/cloud/189_1_image-20190913212621-1.webp)

`[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\.NETFramework\v4.0.30319]`

![189_2_image-20190913212621-2](/images/endpointpolicymanager/troubleshooting/error/cloud/189_2_image-20190913212621-2.webp)

If you prefer you can create a .REG file using the text below, then import the script on any
computers experiencing the issue. Then REBOOT the computer(s). After the REBOOT the sync should be
working again.

Windows Registry Editor Version 5.00

`[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\.NETFramework\v4.0.30319]`

```
"SchUseStrongCrypto"=dword:00000001
```

`[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\.NETFramework\v4.0.30319]`

```
"SchUseStrongCrypto"=dword:00000001
```


