---
title: "Usercube-New-OpenIDSecret"
description: "Usercube-New-OpenIDSecret"
sidebar_position: 270
---

# Usercube-New-OpenIDSecret

This tools generates an hash. In practice, we hash a client secret but the tool can generate
randomly a hash without an input string. The name of the executable is:
Usercube-New-OpenIDSecret.exe'.

## Examples

                    ```

    ./identitymanager-New-OpenIDSecret.exe --client-secret
    Shared secret for 'secret' is 'K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols='

````


The output shows the client secret and its hashed version. It must be entered in the [OpenIdClient](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/access-control/openidclient/index.md) configuration.

## Arguments

| Argument Name | Details |
| --- | --- |
| --client-secret   optional | __Type__    String   __Description__ OpenID client secret that will be hashed by the program. |
|  |  |
| --- | --- |
| --log-level   optional | __Type__    LogLevel   __Description__ Level of log information among: ```Verbose```; ```Debug```; ```Information```; ```Warning```; ```Error```; ```Fatal```. |
````
