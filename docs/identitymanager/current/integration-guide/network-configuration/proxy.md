---
title: "Proxy Server"
description: "Proxy Server"
sidebar_position: 30
---

# Proxy Server

Identity Manager server or agent can be configured to go through a proxy server to access internal or external web resources.

## Introduction

A Identity Manager agent often needs to access internal or external systems using the HTTP protocol. It may easily be configured to use a proxy server through which all or part of the HTTP traffic will be routed.

## Proxy Related Environment Variables

The proxy configuration is based on a set of standard dotnet environment variables:

- `HTTPS_PROXY`: the proxy server used on HTTPS requests.
- `NO_PROXY`: a comma-separated list of hostnames that should be excluded from proxying.

The dotnet environment does not rely on the OS-wide proxy configuration. It is mandatory to use the above-mentioned environment variables to configure the proxy.

### HTTPS_PROXY

The `HTTPS_PROXY` environment variable may be the hostname or IP address, optionally followed by a colon and port number, or it may be an http URL, optionally including a username and password for Proxy Server authentication.

The URL must start with `http`, **not https**, and cannot include any text after the hostname, IP, or port.

This example shows various ways to properly configure a proxy server using Powershell:

```
# <b>A hostname with port (recommended syntax)</b>
$env:HTTPS_PROXY="proxy.contoso.com:6060"
# A hostname without port
$env:HTTPS_PROXY="proxy.contoso.com"
# An IP address with port
$env:HTTPS_PROXY="10.65.1.1:6060"
# A URL with port:
# <b>Warning: Even if we want to route HTTPS traffic, we MUST give a URL with http scheme</b>.
# <b>Warning: Do not add trailing slash</b>.
$env:HTTPS_PROXY="http://proxy.contoso.com:6060"
```

We recommend using the `<hostname>:<port>` syntax since it is not misleading. We discourage using the `http://<hostname>:<port>` syntax since it is not intuitive to indicate the `http` scheme to route `https` traffic. However, if you decide to use this syntax, do not forget to include a comment stating that `http` scheme is mandatory at the configuration level, even if it will not be used at runtime.

#### Do not do

This example shows the wrong ways to initialize the `HTTPS_PROXY` environment variable. The environment variable will be **silently ignored** and the traffic will not be routed through the proxy.

```
# WRONG: A URL with https scheme
$env:HTTPS_PROXY="https://proxy.contoso.com:6060"
# WRONG: A URL with text after the port number
$env:HTTPS_PROXY="http://proxy.contoso.com:6060/"
# WRONG: A URL with text after the hostname
$env:HTTPS_PROXY="http://proxy.contoso.com/"
```

#### Authenticated proxy

When the proxy server needs the user to be authenticated, the `HTTPS_PROXY` environment variable can include the username and password as follows:

```
# A URL to authenticate to the proxy with login=mylogin and password=mypassword
$env:HTTPS_PROXY="http://mylogin:mypassword@proxy.contoso.com:6060"
```

### NO_PROXY

The `NO_PROXY` environment variable is a comma-separated list of hostnames that should be excluded from proxying. To exclude all subdomains ("wildcard" exclusion), domains in the `NO_PROXY` list need to be prefixed with a dot (`.`), which is standard, but not particularly well documented. **Do not use the star (`*`) prefix !!!**

This example shows various ways to exclude domains from proxying:

```
# Exclude only www.google.com:
# www.google.com: will not go through the proxy
# maps.google.com: will go through the proxy
$env:NO_PROXY="www.google.com"
# Exclude only www.google.com and www.microsoft.com:
$env:NO_PROXY="www.google.com,www.microsoft.com"
# Exclude all google.com and all microsoft.com subdomains:
# <b>Do not prepend the domain name with a '*'</b>
# www.google.com: will not go through the proxy
# maps.google.com: will not go through the proxy
# www.microsoft.com: will not go through the proxy
$env:NO_PROXY=".google.com,.microsoft.com"
```

#### Do not do

This example shows the wrong ways to initialize the `NO_PROXY` environment variable.

```
# WRONG: starting with '*' to indicate a wildcard exclusion
# Only the domain exactly named *.contoso.com will be excluded from proxying,
# which means there is no exclusion configured.
$env:NO_PROXY="*.contoso.com"
```

## Where to Define Proxy Environment Variables

The proxy configuration is based on a set of standard dotnet environment variables, they can be defined in various places according to the practices in place in your organization:

- At OS level
- At user level: for the user running the Identity Manager server or agent
- At IIS level: in the application `web.config` file

Note that when creating an environment variable in IIS `web.config` file, all child processes created by the IIS application will inherit from this environment variables. For example, while running the Identity Manager agent all tasks started by the agent will inherit the proxy environment variables.

This example shows how to configure the proxy in the IIS `web.config` file:

```
<configuration>  <system.webServer>    <aspNetCore processPath="dotnet" arguments="./Usercube-Server.dll" stdoutLogEnabled="false" stdoutLogFile="../Temp/stdout-server.log" hostingModel="inprocess">      <environmentVariables>
        <environmentVariable name="HTTPS_PROXY" value="proxy.contoso.com:6060"/>        <environmentVariable name="NO_PROXY" value=".google.com"/>
      </environmentVariables>...
    </aspNetCore>  </system.webServer></configuration>
```

## Testing the Proxy Configuration

To test the proxy configuration for the dotnet environment, it is advised to use Powershell 5 or Powershell Core.

In the following examples, you may adapt the proxy hostname/port and the URL to test.

### Using Powershell 5

To test that a Identity Manager agent using a proxy server can reach the Identity Manager server: Go to the `<USERCUBE_HOME>/Runtime` directory.

```
$env:HTTPS_PROXY="proxy.contoso.com"
./Usercube-Invoke-Job.exe --api-url https://contoso.usercube.com/ --api-client-id Job --api-secret secret -j UnknownJob

# Given the credentials are valid, you should get an exception as follows:
# ---> System.Exception: Job: UnknownJob is not found
# This exception shows that the server has been reached and that the job identifier is not known.
# The proxy is properly configured !!!
```

**Do not use** Invoke-WebRequest or Test-NetConnection to test the proxy configuration. In Powershell 5, these tools are using a different network stack from dotnet environment and are using the OS-wide proxy settings. They will ignore the `HTTPS_PROXY` environment variable

### Using Powershell Core

Powershell Core is based on the same network stack as dotnet environment. The proxy configuration can be tested using the Invoke-WebRequest and Test-NetConnection tools. If tests are successful using Invoke-WebRequest, they will be successful too if the same environment variables are provided to the Identity Manager server or agent.

Powershell Core will only take the `HTTPS_PROXY` environment variable into account if it was created before the Powershell Core process was started.

```
# Create the environment variable in this Powershell Core process.
# This variable will not alter the proxy configuration of this process.
$env:HTTPS_PROXY="proxy.contoso.com"
# Start a child Powershell Core process which will inherit from the HTTPS_PROXY environment variable.
# This variable will alter the proxy configuration of this child process.
pwsh
Invoke-WebRequest https://contoso.usercube.com/
# The result should display an HTTP 200 response from the Identity Manager server.

# Go back to the parent Powershell parent process.
exit
```

### Known errors when proxy is not properly configured

When the proxy environment variables does not match the expected format, they will be **silently** ignored.

- If `HTTPS_PROXY` is ignored, the network stack will try to directly access public URL's without
going through the proxy.
- If `NO_PROXY` is ignored, the internal traffic will be routed through the proxy.

When testing the proxy configuration, if you get one of the following error message:

- ` No such host is known.`
- `Hote inconnu`

It means that the `HTTPS_PROXY` is not set or does not match the expected format. The HTTP client tries to directly resolve the public hostname instead of resolving the proxy hostname.

Review the `HTTPS_PROXY` value, check that it does not:

- use the `https` scheme
- include trailing slashes or characters after the hostname:port

## Reference Documentation

- [HttpClient.DefaultProxy](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpclient.defaultproxy?view=net-8.0&viewFallbackFrom=netcore-8.0#httpclientdefaultproxy):
reference for environment variables.
- NO_PROXY: [unofficial documentation](https://stackoverflow.com/a/62663469) for wildcard domain
exclusion
