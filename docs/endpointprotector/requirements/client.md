---
title: "Client"
description: "Client"
sidebar_position: 20
---

# Client

The Endpoint Protector Client has one of the smallest footprints of any similar solution on the
market. The resources it consumes or the bandwidth it uses is insignificant. The processing power
consumed, and bandwidth used by the Client depends on the functions, settings, policies used, and
the endpoint’s hardware configuration. In an idle state, the base requirements are:

- CPU: At least 1 GHz dual-core CPU
- RAM: 30 MB
- Bandwidth: Less than 1 Kbs (Kilobit per second) when idle. This may increase depending on usage
  when sending logs or uploading shadow files.

:::note
For Content Aware Protection and eDiscovery scanning, more CPU and RAM are required.
:::

Below is a closer look at the resource consumption when all modules are enabled , function are
active, and policies are configured for a stress test:

| Module    | Device Control                                                            | Content Aware Protection                                                  | eDiscovery                                                                |
| --------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| CPU       | 1 GHz                                                                     | 1 GHz (in general) > 1 GHz (during scanning)                              | 1 GHz (in general) > 1 GHz (during scanning)                              |
| RAM       | 30 MB                                                                     | 30 MB (in general) > 30 MB (during scanning)                              | 30 MB (in general) > 30 MB (during scanning)                              |
| Bandwidth | < 1 Kbs (when idle) > 1 Kbs (when sending logs or uploading shadow files) | < 1 Kbs (when idle) > 1 Kbs (when sending logs or uploading shadow files) | < 1 Kbs (when idle) > 1 Kbs (when sending logs or uploading shadow files) |

## Security Exclusions

To maintain the optimal performance and stability of the Endpoint Protector Client, configure
security exclusions within third-party security software, such as antivirus, EDR, and HIPS
solutions. The Endpoint Protector Client is designed to be lightweight, but certain antivirus
programs may scan its files and processes intensively, which can impact performance.

### Importance of Exclusions

The Endpoint Protector Client logs data in small, frequent increments. Antivirus software may
attempt to scan each entry as it is written, which can lead to:

- Timeouts on larger files due to extended antivirus scanning.
- Increased RAM and CPU usage, as both Endpoint Protector and antivirus processes compete for system
  resources.
- Potential client stability issues, as well as reduced Deep Packet Inspection visibility and
  performance.

To prevent these conflicts and allow the Endpoint Protector Client to function without interference,
add exclusions for specific files, folders, and processes on Windows, macOS, and Linux, as outlined
below.

#### Recommended Exclusions for Windows





**Folder Level Exclusions**
```
/Applications/EndpointProtectorClient.app/*
/private/etc/epp/*
/private/var/tmp/epp/*
```


**File Level Exclusions**
```
/Applications/EndpointProtectorClient.app/Contents/MacOS/EppClient
/Applications/EndpointProtectorClient.app/Contents/MacOS/sslsplit
/Applications/EndpointProtectorClient.app/Contents/MacOS/netdlp_setup
/Applications/EndpointProtectorClient.app/Contents/Applications/EppNotifier.app/Contents
/MacOS/EppNotifier
/var/log/eppclient.log
/var/log/eppsslsplit.log
```


**Process Level Exclusions**
```
EppClient
sslsplit
netdlp_setup
EppNotifier
```

#### Recommended Exclusions for Linux


**Folder Level Exclusions**
```
/opt/cososys/*
/var/log/epp-client/*
```


**File Level Exclusions**
```
/opt/cososys/sbin/epp-client-daemon
/opt/cososys/sbin/epp_sslsplit
/opt/cososys/sbin/epp_netdlp_setup
/opt/cososys/sbin/netdlp_scripts/linux_install_certicates.sh
/opt/cososys/bin/epp-client
/var/log/epp-client/epp_client_daemon.log
/var/log/epp-client/eppsslsplit.log
```


**Process Level Exclusions**
```
epp-client-daemon
epp-client
epp_sslsplit
epp_netdlp_setup
linux_install_certicates.sh
```


**Folder Level Exclusions**
```
/opt/cososys/*
/var/log/epp-client/*
```

**File Level Exclusions**
```
/opt/cososys/sbin/epp-client-daemon
/opt/cososys/sbin/epp_sslsplit
/opt/cososys/sbin/epp_netdlp_setup
/opt/cososys/sbin/netdlp_scripts/linux_install_certicates.sh
/opt/cososys/bin/epp-client
/var/log/epp-client/epp_client_daemon.log
/var/log/epp-client/eppsslsplit.log
```

**Process Level Exclusions**
```
epp-client-daemon
epp-client
epp_sslsplit
epp_netdlp_setup
linux_install_certicates.sh
```

**File Level Exclusions**
```
/MacOS/EppNotifier
/var/log/eppclient.log
/var/log/eppsslsplit.log
```

**Process Level Exclusions**
```
EppClient
sslsplit
netdlp_setup
EppNotifier
```

#### Recommended Exclusions for Linux

**Folder Level Exclusions**
```
/opt/cososys/*
/var/log/epp-client/*
```

**File Level Exclusions**
```
/opt/cososys/sbin/epp-client-daemon
/opt/cososys/sbin/epp_sslsplit
/opt/cososys/sbin/epp_netdlp_setup
/opt/cososys/sbin/netdlp_scripts/linux_install_certicates.sh
/opt/cososys/bin/epp-client
/var/log/epp-client/epp_client_daemon.log
/var/log/epp-client/eppsslsplit.log
```

**Process Level Exclusions**
```
epp-client-daemon
epp-client
epp_sslsplit
epp_netdlp_setup
linux_install_certicates.sh
```

By applying these exclusions, you will allow the Endpoint Protector Client to operate smoothly
alongside other security products, ensuring both functionality and protection across endpoints.