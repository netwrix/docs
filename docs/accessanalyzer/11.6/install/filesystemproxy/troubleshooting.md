---
title: "Troubleshooting Proxy Service"
description: "Troubleshooting Proxy Service"
sidebar_position: 60
---

# Troubleshooting Proxy Service

The following are potential errors that may occur during installation and how to resolve each.

| Error Message                                                                                                                                            | Resolution                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Service ‘Enterprise Auditor FSAA Proxy Scanner’ (StealthAUDITFSAA) failed to start. Verify that you have sufficient privileges to start system services. | The domain account used during setup doesn't have sufficient privileges to start the service. Open Local Security Policies on the proxy server. In User Rights Assignment under Local policies, add the user you want to the Log on as a service policy. After the user has this privilege, retry the installation. |

The following are potential errors that may occur during File System scans and how to resolve each.

| Error Message                                                                                             | Resolution                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Failed to launch SDD client (2): The system can't find the file specified.                               | This indicates the Sensitive Data Discovery Add-On isn't installed on the proxy server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Error creating DLP components. Error:Error initializing DLP communications, received invalid pipe handle. | This indicates the Sensitive Data Discovery Add-On isn't installed on the proxy server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Unable to start scan: Couldn't initialize scan session with any proxy host supplied                      | This can indicate a few things and is a broad error: <ul><li>The Enterprise Auditor Console can't reach the proxy server via the network.</li><li>The Windows Firewall on the Enterprise Auditor Console server or proxy server, or another firewall in the network, might block network communications for TCP on port 8766 (you can customize this port through the FSAA Data Collector query configuration).</li><li>The Netwrix Enterprise Auditor FSAA Proxy Scanner service isn't running or isn't installed on the target proxy server.</li></ul> |


## Verbose Logging

Sometimes you need to enable verbose logging to troubleshoot a problem with the
proxy server.

Run the following command in the directory where the installer lives (to prompt the install):

```
msiexec /i FileSystemProxy.msi /l*v install.log
```

Run the following command in the directory where the installer lives (to prompt the removal):

```
msiexec /x FileSystemProxy.msi /l*v install.log
```
