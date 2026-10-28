---
title: "ISmsGateway.Url"
description: "ISmsGateway.Url"
sidebar_position: 130
---

# ISmsGateway.Url

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

Some SMS gateways provide URLs for you to send your message parameters. The web component (typically
a web service) deployed at that URL then transmits the message to the intended recipients. If this
is the case with your SMS gateway provider, you can use this property to specify that URL.