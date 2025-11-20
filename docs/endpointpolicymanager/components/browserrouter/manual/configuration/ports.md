---
title: "Routing Using Ports"
description: "Routing Using Ports"
sidebar_position: 70
---

# Routing Using Ports

Endpoint Policy Manager Browser Router can open a specific website when a particular website needs a
specific port. In the example below we have `www.portquiz.net:1001` being used for a specific Google
Chrome website.

![about_policypak_browser_router_23](/images/endpointpolicymanager/browserrouter/about_endpointpolicymanager_browser_router_23.webp)

:::note
For a video on using Endpoint Policy Manager Browser Router and ports, see
[Endpoint Policy Manager Browser Router and Ports](/docs/endpointpolicymanager/components/browserrouter/videolearningcenter/gettingstarted/ports.md).
:::


In this way, you can have granular control over which browser is opened for which website.
Additionally, for Internet Explorer 11, Endpoint Policy Manager Browser Router will automatically
insert the port into Internet Explorer 11 Enterprise Mode v2 site lists. All you need to do is add a
route similar to the one shown below.

![about_policypak_browser_router_24](/images/endpointpolicymanager/browserrouter/about_endpointpolicymanager_browser_router_24.webp)

:::note
Not every version of Internet Explorer 11 is ready to receive v2 site lists. For a list of
which versions of Internet Explorer 11 use v1 vs v2, see
[When does Endpoint Policy Manager Browser Router write v1 or v2 Enterprise Mode site lists?](/docs/endpointpolicymanager/components/browserrouter/knowledgebase/troubleshooting/versions.md).

:::


