---
title: "Deploy the Configuration"
description: "Deploy the Configuration"
sidebar_position: 10
---

# Deploy the Configuration

This guide shows how to deploy the XML configuration, in order to build and use the Usercube
application.

## Overview

The process for configuration deployment varies according to the situation:

- when working on-premise, the configuration must be deployed locally;
- when working SaaS, the configuration must be deployed remotely.

## Deploy the Configuration Locally

Deploy a local XML configuration by using the
[`Deploy-Configuration` executable](/docs/identitymanager/6.1/integration-guide/executables/references/deploy-configuration/index.md)
and declaring at least:

- the configuration directory;
- the connection string of the database.

> ```
>
> ./identitymanager-Deploy-Configuration.exe -d "C:\Usercube\Conf" --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"
>
> ```

## Deploy the Configuration Remotely

Deploy a SaaS XML configuration by proceeding as follows:

1. Log in for configuration deployment/export with the
   [`Login` executable](/docs/identitymanager/6.1/integration-guide/executables/references/login/index.md).

    Usercube provides an Open Id Connect (OIDC) authentication process in order to ensure strong
    security, visibility and ease of use.

    NETWRIX recommends using Usercube's dedicated in-house OIDC Identity Provider (IDP), but you can
    also use your own IDP if you want to manage authentication yourself.

    When using your own IDP, make sure that the IDP implements a valid OIDC protocol and serves id
    tokens.

    > For example, when using Usercube's IDP:
    >
    > ```
    >
    > ./identitymanager-Login.exe
    >
    > ```

    > For example, when using another IDP:
    >
    > ```
    >
    > Usercube-Login.exe --authority https://my_oidc_authentication_server.com --client-id 34b3c-fb45da-3ed32
    >
    > ```

    Either method will open your default browser to `http://localhost:5005` where you will be
    redirected to the specified IDP and will be prompted to log in.

    Specify `--port <port>` if you want the login page to use another local port.

    If you have already successfully deployed or exported your SaaS configuration at least once,
    then there is no need to communicate the authentication information again. Go directly to
    step 4.

    However, if, since then, there has been a change in the identity deploying/exporting the
    configuration or in the Identity Provider used to log in at step 1, then go through the whole
    process again.

2. Log in to the IDP to be redirected back to this screen:

    ![Usercube-Login.exe Success Screen](/images/identitymanager/6.1/integration-guide/toolkit/how-tos/export-configuration/identitymanager-login_success_v602.webp)

    Once authenticated, an identification token is stored on your local machine for the
    authentication to Usercube's deployment and export processes.

3. Copy the entire text within the blue square and send it to your Usercube administrator.

    The administrator will add the identity information to the configuration of your Usercube
    instance, to allow the configuration deployment/export.

4. Deploy the configuration by using the
   [`Deploy-Configuration` executable](/docs/identitymanager/6.1/integration-guide/executables/references/deploy-configuration/index.md)
   and declaring at least:

    - the configuration directory;
    - the deployment environment;
    - the API URL of your Usercube instance.
        > ```
        >
        > ./identitymanager-Deploy-Configuration.exe -d "C:\Usercube\Conf" --api-url https://my_usercube_instance.com --deployment-slot Development
        >
        > ```

    You can deploy the configuration by launching only the `Deploy-Configuration` executable until
    the authentication token expires. Then, the token must be refreshed via the `Login` executable
    before deploying again.

    The token served by Usercube's IDP expires after one hour.
