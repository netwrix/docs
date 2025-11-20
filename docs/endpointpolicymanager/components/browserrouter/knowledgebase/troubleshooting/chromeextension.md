---
title: "How can I use the only remaining Endpoint Policy Manager published Chrome Extension with my older CSE? (CSE 18.7.1779.937 - 19.12.2283.849)"
description: "How can I use the only remaining Endpoint Policy Manager published Chrome Extension with my older CSE? (CSE 18.7.1779.937 - 19.12.2283.849)"
sidebar_position: 210
---

# How can I use the only remaining Endpoint Policy Manager published Chrome Extension with my older CSE? (CSE 18.7.1779.937 - 19.12.2283.849)

**Step 1 –** Copy the contents below.

```
{    "name": "com.endpointpolicymanager.ppbragent",    "description": "Chrome Native Messaging implementation",    "path": "PPBRAgent.exe",    "type": "stdio",    
"allowed_origins": [        "chrome-extension://kndjicdjdanehpnonfmdekhinhdcdnbo/",        "chrome-extension://mdmkjmbojjnnhlohmjhaapalpbbhkdcg/",        
"chrome-extension://fmbfiodledfjldlhiemaadmgppoeklbn/"    ]}
```

**Step 2 –** Save in a file named

`com.endpointpolicymanager.chromehost.json`

**Step 3 –** The goal is to copy that file to

```
C:\Program Files\PolicyPak\Browser Router\Client
```

On machines with the CSE (CSE 18.7.1779.937 - 19.12.2283.849)That you CANNOT upgrade to latest CSE
for now.

![774_1_img-01](/images/endpointpolicymanager/troubleshooting/browserrouter/clientsideextension/774_1_img-01.webp)

You can use a variety of methods to get the file copied. Options include:

- Group Policy Preferences Files
- Endpoint Policy Manager Remote Work Delivery Manager
- Endpoint Policy Manager Scripts
- SCCM
- Any other way you want to copy a file down to the machine

To show one example, using Group Policy Preferences Files…

Here's the `Com.endpointpolicymanager.chromehost.json` file stored in the file in the share called
`\\dc2016\share`

![774_3_img-02_950x542](/images/endpointpolicymanager/troubleshooting/browserrouter/clientsideextension/774_3_img-02_950x542.webp)

Using Group Policy Preferences Files, on the Computer side…

![774_5_img-03_950x650](/images/endpointpolicymanager/troubleshooting/browserrouter/clientsideextension/774_5_img-03_950x650.webp)

#### Specify:

Source:

```
\\dc2016\SHARE\com.endpointpolicymanager.chromehost.json
```

Destination (must include the path and file name):

```
C:\Program Files\PolicyPak\Browser Router\Client\com.endpointpolicymanager.chromehost.json
```

Run `GPupdate `on the client, and here's the result.

Note that upgrading to modern CSE versions will have a SIMIILARLY named file in this folder.

These two files can sit side by side without issue if you need to use an OLDER CSE for now, then
UPGRADE to latest CSE later.

![774_7_img-05_950x675](/images/endpointpolicymanager/troubleshooting/browserrouter/clientsideextension/774_7_img-05_950x675.webp)


