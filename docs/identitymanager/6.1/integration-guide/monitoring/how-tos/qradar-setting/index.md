---
title: "Export Logs to a Log Management System"
description: "Export Logs to a Log Management System"
sidebar_position: 10
---

# Export Logs to a Log Management System

This guide shows how to use the logging configuration (Serilog) to send Usercube's logs into a log
management system, potentially using specific plug-ins to parse the logs.

Supported log management systems are:

- [QRadar](https://www.ibm.com/fr-fr/products/qradar-siem);
- [Splunk](https://docs.splunk.com/Documentation/Splunk);
- DataDog.

## Overview

Typically, a Serilog configuration includes three parts: **MinimumLevel**, **Using** and
**WriteTo**. For more details, see
[Monitoring](/docs/identitymanager/6.1/integration-guide/monitoring/index.md).

### Usercube's DSM in QRadar

Usercube's Device Support Module is a plug-in that allows your QRadar system to parse Usercube's
logs, when producing a JSON output.

Logs can be sent into QRadar without using Usercube's DSM in QRadar, but the logs just won't be
parsed. Not all Usercube's logs can be sent to QRadar,
[see which logs can be sent](/docs/identitymanager/6.1/integration-guide/monitoring/references/index.md).

In order to get Usercube's DSM, import from QRadar the `Usercube_1.0.0.zip` file, accessible in the
`Runtime` folder. Usercube's DSM is set to automatically detect the source. This means that, once
Serilog is configured to send logs to QRadar, performing a few actions in Usercube should make the
detection possible.

## Export Logs to a Log Management System

Export logs to a log management system by proceeding as follows:

1. In
   [`appsettings.json`](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md),
   make sure to have a **Serilog** section:

```json
{
  ...
  "Serilog": {
    ...
  }
  ...
}
```

2. In the **Serilog** section, add a **Using** section to contain the used sink which depends on the
   logs' destination, output format, etc.
   [See the list of supported sinks](/docs/identitymanager/6.1/integration-guide/monitoring/index.md).

    Concerning QRadar, NETWRIX strongly recommends using the JSON format, as it can be parsed by
    Usercube's DSM or easily by a homemade parser.

    For example, to produce a JSON output for QRadar (in `appsettings.json`):

```json
{
  ...
  "Serilog": {
    "Using": [
      "Serilog.Sinks.Network"
    ],
    ...
  }
  ...
}
```

    For example, to produce an output for Splunk (in `appsettings.json`):

```json
{
  ...
  "Serilog": {
    "Using": [
      "Serilog.Sinks.Console",
      "Serilog.Sinks.Splunk.Durable"
    ],
    ...
  }
  ...
}
```

3. Add a **MinimumLevel** section to define which logs are to be sent to the log management system.
   [See more details](/docs/identitymanager/6.1/integration-guide/monitoring/index.md).

    In order to be sent to any system, Usercube's logs must be configured with **MinimumLevel** set
    to `Information`, or lower.

    For example, we can define the logs' minimum level to `Information` (in `appsettings.json`):

```json
{
  ...
  "Serilog": {
    "Using": [
      "Serilog.Sinks.Network"
    ],
    "MinimumLevel": {
      "Default": "Error",
      "Override": {
        "Usercube": "Information"
      }
    },
    ...
  }
  ...
}
```

4. Add a **WriteTo** section to specify the expected output.

    While **uri**/**host**/**splunkHost** specifies the IP address of the machine hosting your log
    management system, the rest of **Args** configuration must be set just like the examples below.

    For example, to produce a JSON output for QRadar (in `appsettings.json`):

```json
{
  ...
  "Serilog": {
    "Using": [
      "Serilog.Sinks.Network"
    ],
    "MinimumLevel": {
      "Default": "Error",
      "Override": {
        "Usercube": "Information"
      }
    },
    "WriteTo": [
      {
        "Name": "UDPSink",
        "Args": {
          "uri": "192.168.13.110",
          "port": "514",
          "textFormatter": "Serilog.Formatting.Compact.CompactJsonFormatter, Serilog.Formatting.Compact"
        }
      }
    ]
  }
}
```

    For example, to produce an RFC5424 output for QRadar (in `appsettings.json`):

```json
{
  ...
  "Serilog": {
    "Using": [
      "Serilog.Sinks.Network"
    ],
    "MinimumLevel": {
      "Default": "Error",
      "Override": {
        "Usercube": "Information"
      }
    },
    "WriteTo": [
      {
        "Name": "UdpSyslog",
        "Args": {
          "host": "192.168.13.110",
          "port": "514",
          "appName": "Usercube",
          "format": "RFC5424",
          "facility": "Local0",
          "secureProtocols": "SecureProtocols.None",
          "outputTemplate": "[{Timestamp:HH:mm:ss} {Level:u3}] {Message:lj} <s:{SourceContext}>{NewLine}{Exception}"
        }
      }
    ]
  }
}
```

    For example, to produce an output for Splunk (in `appsettings.json`):

```json
{
  ...
  "Serilog": {
    "Using": [
      "Serilog.Sinks.Network"
    ],
    "MinimumLevel": {
      "Default": "Error",
      "Override": {
        "Usercube": "Information"
      }
    },
    "WriteTo": [
      {
        "Name": "SplunkEventCollector",
        "Args": {
          "splunkHost": "<Host>",
          "eventCollectorToken": "",
          "bufferFileFullName": "log-buffer.txt"
        }
      }
    ]
  }
}
```

5. When needing to restrict the logs sent to the system, add a filter and wrap all **WriteTo**
   configuration into a sub-logger, in which case the **Name** at **WriteTo**'s root must be
   `Logger`.
   [See more details](/docs/identitymanager/6.1/integration-guide/monitoring/index.md).

    For all formats, in order to send only the right logs using the specified filter, the
    **WriteTo** part must contain a sub-logger with its own filter. Otherwise, the filter will be
    applied to all sinks.

    For example, among Usercube's logs, only the logs described in the
    [log references](/docs/identitymanager/6.1/integration-guide/monitoring/references/index.md)
    can be parsed by QRadar's DSM and should be used by a SIEM system. Hence the importance of
    having a filter and a sub-logger.

    Never include logs with event ids inferior to 500, in order not to be overwhelmed with logs
    improper to be used by SIEM systems like QRadar.

    For example, to filter out any log whose event id is lower than 500 (in `appsettings.json`):

```json
{
  ...
  "Serilog": {
    "Using": [
      "Serilog.Sinks.Network"
    ],
    "MinimumLevel": {
      "Default": "Error",
      "Override": {
        "Usercube": "Information"
      }
    },
    "WriteTo": [
      {
        "Name": "Logger",
        "Args": {
          "configureLogger": {
            "WriteTo": [
              {
                "Name": "UDPSink",
                "Args": {
                  "uri": "192.168.13.110",
                  "port": "514",
                  "textFormatter": "Serilog.Formatting.Compact.CompactJsonFormatter, Serilog.Formatting.Compact"
                }
              }
            ],
            "Filter": [
              {
                "Name": "ByIncludingOnly",
                "Args": { "expression": "StartsWith(SourceContext, 'Usercube') and EventId.Id >= 500" }
              }
            ]
          }
        }
      }
    ]
  }
}
```

    You could want to filter out the logs whose event ids are 500 too, by replacing
    `EventId.Id >= 500` with `EventId.Id >= 501` in the filter. Or you could want to filter out
    only the logs whose event ids are 502, by replacing `EventId.Id >= 500` with
    `EventId.Id >= 500 and EventId.Id <> 502` in the filter.

6. When needing to override the log level for this particular sub-logger, add an additional
   **MinimalLevel** section in the **WriteTo** section.

    For example, to override the log level for this particular sub-logger (in `appsettings.json`):

```json
{
  ...
  "Serilog": {
    "Using": [
      "Serilog.Sinks.Network"
    ],
    "MinimumLevel": {
      "Default": "Error",
      "Override": {
        "Usercube": "Information"
      }
    },
    "WriteTo": [
      {
        "Name": "Logger",
        "Args": {
          "configureLogger": {
            "MinimumLevel": {
              "Default": "Warning"
            },
            "WriteTo": [
              {
                "Name": "UDPSink",
                "Args": {
                  "uri": "192.168.13.110",
                  "port": "514",
                  "textFormatter": "Serilog.Formatting.Compact.CompactJsonFormatter, Serilog.Formatting.Compact"
                }
              }
            ],
            "Filter": [
              {
                "Name": "ByIncludingOnly",
                "Args": { "expression": "StartsWith(SourceContext, 'Usercube') and EventId.Id >= 500" }
              }
            ]
          }
        }
      }
    ]
  }
}
```
