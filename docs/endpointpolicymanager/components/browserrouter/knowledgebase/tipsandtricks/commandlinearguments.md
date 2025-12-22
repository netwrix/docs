---
title: "Does Endpoint Policy Manager Manage Chrome or Edge \"Flags\"?"
description: "Does Endpoint Policy Manager Manage Chrome or Edge \"Flags\"?"
sidebar_position: 100
---

# Does Endpoint Policy Manager Manage Chrome or Edge "Flags"?

Chrome supports command-line switches, also called flags. They allow you to run Chrome with special
options that allow you to enable or disable a particular feature by modifying the default
functionality.

In this topic we show how to use flags or a command-line switch for Google Chrome with Netwrix
Endpoint Policy Manager (formerly PolicyPak) Browser Router.

For a complete list of Chromium command-line switches, see
[https://peter.sh/experiments/chromium-command-line-switches/](https://peter.sh/experiments/chromium-command-line-switches/).

## Launching a URL in Incognito mode:

For example, if you want to launch a specific URL under an incognito mode, you need to configure the
PPBR rule as shown below.

:::note
Please note that the syntax `%url%` is case sensitive.
:::


![881_1_image-20221228073914-1](/images/endpointpolicymanager/browserrouter/editpolicytemplate/881_1_image-20221228073914-1.webp)

:::note
Please note that Chromium often removes a flag's support or replaces it with ADMX
settings.
:::


For example, a command-line to disable Google Translate `--disable-translate` is not supported
anymore and it is replaced with
[https://chromeenterprise.google/policies/#TranslateEnabled](https://chromeenterprise.google/policies/#httpschromeenterprisegooglepoliciestranslateenabled).

:::warning
Command line arguments don't work when the source and target browsers are the same.

:::


