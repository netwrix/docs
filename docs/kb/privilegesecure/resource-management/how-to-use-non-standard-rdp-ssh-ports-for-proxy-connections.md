---
description: >-
  Shows how to configure Privilege Secure Proxy Service to use non-standard RDP
  and SSH ports by editing sbpam_rdp.json and sbpam_ssh.json.
keywords:
  - Privilege Secure
  - SbPAM
  - proxy
  - RDP
  - SSH
  - sbpam_rdp.json
  - sbpam_ssh.json
  - non-standard ports
products:
  - privilege-secure-access-management
sidebar_label: 'How to Use Non-Standard RDP & SSH Ports for Proxy '
tags: []
title: "How to Use Non-Standard RDP & SSH Ports for Proxy Connections"
knowledge_article_id: kA04u0000000HhKCAU
---

# How to Use Non-Standard RDP & SSH Ports for Proxy Connections

> **IMPORTANT:** This guidance is applicable to Privilege Secure **v3.5** and prior! In the latest release, you can configure ports directly from the Host Details Page. Explore further details in the following article: https://docs.netwrix.com/docs/privilegesecure/4_2

## Summary

The Privilege Secure Proxy Service can be customized to connect to specific target resources using non-standard ports for both RDP and SSH. By default, the Proxy Service uses standard ports for these communications.

## Instructions

Each Privilege Secure Proxy Service can be individually customized to connect to specific target resources via specific RDP and SSH ports, rather than the standard `TCP/3389` (RDP) and `TCP/22` (SSH).

To do so, you need to modify the following files on the server where each Proxy Service is installed:

- `sbpam_rdp.json`
- `sbpam_ssh.json`

These files are located in:

```text
%ProgramData%\Stealthbits\PAM\ProxyService
```

If the files are not present, run the following commands to create them. First, open Command Prompt and change directory to:

```text
%Program Files%\Stealthbits\PAM\ProxyService
```

Then run the following two commands to create each JSON file respectively:

```powershell
.\sbpam-proxy.exe cfg -c sbpam_rdp
.\sbpam-proxy.exe cfg -c sbpam_ssh
```

You should receive confirmations such as, "Default configuration for sbpam_rdp created". The files will now exist in the aforementioned ProgramData path.

Open the file you want to customize the protocol port for. In the JSON, add the following key/value pair:

```json
"OverridePort": ["example.host.com:<custom_port>"]
```

Replace `example.host.com` with the target resource for which you want to customize the port. This can include wildcards for several hosts, such as `"*.host.com"`. You can also add multiple values to the array, for example:

```json
"OverridePort": ["example1.host.com:<custom_port>", "example2.host.com:<custom_port>"]
```

Replace `<custom_port>` with the desired port for the protocol's communication.

Once you finish your customizations, save the file. Subsequent Privilege Secure proxy connections to the specified target resources will use the custom port(s).

As an example of proper JSON syntax, here is a basic, customized `sbpam_rdp.json`. All RDP connections to `example.host.com` will now use port `5589`:

```json
{
    "listenaddress" : "0.0.0.0:4489",
    "OverridePort" : ["example.host.com:5589"],
    "startuptimeout" : "30s",
    "twofactorseparator" : ","
}
```
