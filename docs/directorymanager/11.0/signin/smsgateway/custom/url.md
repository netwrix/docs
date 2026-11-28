---
title: "ISmsGateway.Url Property for Custom SMS Gateways"
description: "Use the ISmsGateway.Url property to get or set the web service address that a custom SMS gateway uses to send text messages."
keywords:
  - ISmsGateway.Url
  - custom SMS gateway
  - Custom Gateway API
  - Imanami.PublicInterfaces
sidebar_position: 130
---

# ISmsGateway.Url Property for Custom SMS Gateways

Gets or sets the URL that the SMS gateway provides for sending messages.

**Namespace:** Imanami.PublicInterfaces

**Assembly:** Imanami.PublicInterfaces.dll

**Syntax**

```
string Url { get; set; }
```

**Return Value**

Type: [System.String](http://msdn.microsoft.com/en-us/library/system.string.aspx)

The address for sending messages.

**Remarks**

Some SMS gateways provide URLs to which you send your message parameters. The web component
(typically a web service) deployed at that URL then transmits the message to the intended
recipients. If this is the case with your SMS gateway provider, use this property to specify that
URL.

**See Also**

- [Implement and Deploy a Custom SMS Gateway in GroupID](/docs/directorymanager/11.0/signin/smsgateway/implementcustom.md)
