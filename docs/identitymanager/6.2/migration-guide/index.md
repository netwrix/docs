---
title: "Migration Guide"
description: "Migration Guide"
sidebar_position: 50
---

# Migration Guide

This guide is designed to provide step-by-step procedures in order to migrate Identity Manager from
your current version to the latest one.

:::note
For the latest SaaS versions, if you are using the administrator scaffolding the necessary
permissions for the update are added to the administrator scaffolding and they will be taken into
account the next time the configuration is deployed.
:::


## General Upgrade Instructions for the Server with Integrated Agent

**Step 1 –** Download the `usercube-server-runtime` from the expected version from
[](https://extranet.usercube.com/)[Netwrix Portal](https://www.netwrix.com/sign_in.html?rf=my_products.html).

**Step 2 –** Stop the existing server.

**Step 3 –** Rename the `Runtime` folder to create a backup, for example `RuntimeOld`.

**Step 4 –** Extract the content of the new `Runtime`to the same folder as `RuntimeOld`, inside a
new `Runtime` folder.

**Step 5 –** Copy the original `appsettings.json` and `appsettings-agent.json` files from
`RuntimeOld` to the new `Runtime`.

**Step 6 –** Restart the server.

## General Upgrade Instructions for the Agent

**Step 1 –** Download the `usercube-agent-runtime` from the expected version from
[](https://extranet.usercube.com/)[Netwrix Portal](https://www.netwrix.com/sign_in.html?rf=my_products.html).

**Step 2 –** Stop the existing agent.

**Step 3 –** Rename the `Runtime` folder to create a backup, for example `RuntimeOld`.

**Step 4 –** Extract the content of the new `Runtime`to the same folder as `RuntimeOld`, inside a
new `Runtime` folder.

**Step 5 –** Copy the original `web.config, appsettings.json` and `appsettings-agent.json` files
from `RuntimeOld` to the new `Runtime`.

**Step 6 –** Restart the agent.

## Specific Information to Migrate from v6.1 to v6.2

If you are looking to upgrade the Netwrix Identity Manager version from 6.1 to 6.2 you will not need
to take any action because the database will automatically be upgraded. If you have problems
importing your configuration into 6.2 related to C# expressions, please run the Identity
Manager-Check-ExpressionsConsistency tool. See the
[Usercube-Check-ExpressionsConsistency](/docs/identitymanager/6.2/integration-guide/executables/references/check-expressionsconsistency/index.md)
topic for additional information.

## Specific Information to Migrate from v6.0 to v6.1

If you are looking to upgrade the Netwrix Identity Manager version from 6.0 to 6.1 you will not need
to take any action because the database will automatically be upgraded.
