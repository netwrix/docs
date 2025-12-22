---
title: "Monitoring"
description: "Monitoring"
sidebar_position: 150
---

# Monitoring

Identity Manager uses [Serilog](https://github.com/serilog/), a highly customizable logging tool, to
provide monitoring capabilities.

See the [References: Logs](/docs/identitymanager/6.2/integration-guide/monitoring/references/index.md) topic for additional information on the list of
existing logs.

## Introduction

Serilog configuration is written to both _Agent_'s and _Server_'s `appsettings` sets. The relevant
top-level section is `Serilog`.

A full description of Serilog's configuration capabilities is available in
[Serilog's official documentation](https://github.com/serilog/serilog-settings-configuration#serilogs-official-documentation).

Identity Manager-specific configuration is detailed here.

## Log Level and Namespaces

### Priority

Logs can be filtered according to a _log level_.

A priority order between the log levels is established.

From low priority to high priority, available log levels are:

- `Verbose`
- `Debug`
- `Information`
- `Warning`
- `Error`
- `Fatal`

Every log message is associated with a log level and a user-defined _namespace_. Identity Manager
provides the Identity Manager namespace, associated with logs relevant to the user.

### MinimumLevel

The `MinimumLevel` section sets the lowest priority log level that will be displayed. Every log
message associated with a log level of priority strictly lower than the minimum level is ignored.

`MinimumLevel` value can either be a log level or an object with the following attributes and
subsections:

- **Default** sets the minimum log level.
- `Override` allows the user to set a different minimum log level for logs from a specific
  namespace. See the Monitoring topic for additional information.

    Within Identity Manager, the following example is a good practice: default logs with a priority
    lower than `Error` are filtered out, except for log messages from the Identity Manager
    namespace.

```
appsettings.json
{
  ...
  "Serilog": {
    ...
    "MinimumLevel": {
      "Default": "Error",
      "Override": {
        "Usercube": "Information"
      }
    }
  }
}
```

### Custom namespaces

Here is a table giving some namespace that you could add in the `Override` section, in order to
monitor the associated module.

| Module                  | Namespace                      |
| ----------------------- | ------------------------------ |
| Identity Manager        | Identity Manager               |
| Scheduler (server side) | Usercube.Jobs.Scheduler.Server |
| Scheduler (agent side)  | Usercube.Jobs.Scheduler        |

## Log Properties

Each log has a specific set of log properties, defined using the context of the server when
generating the log (see
[Formatting](https://github.com/serilog/serilog/wiki/Formatting-Output#formatting)).

It is possible to modify the format message of the log displayed by overriding the `outputTemplate`
of the logs:

```
appsettings.json
{
  ...
  "Serilog": {
    "MinimumLevel": {
      "Default": "Verbose",
    },
    "WriteTo": [
      {
        "Name": "Console",
        "Args": {
          "outputTemplate": "[{Timestamp:HH:mm:ss} {Level:u3}] ClientId:{ClientId} {Message:lj}{NewLine}{Exception}"
        }
      }
    ]
  }
}
```

Among all default properties, Identity Manager adds the ClientId log property which can be displayed
when using the previous `outputTemplate` format.

## Filters

In addition to the Microsoft log levels, Serilog provides a
[Filters](https://github.com/serilog/serilog-filters-expressions) feature to build more advanced
filter queries on log messages.

## Sinks

Serilog allows the user to route log messages to a variety of logging destinations. Every
destination is referred to as a sink.
[Sinks](https://github.com/serilog/serilog/wiki/Provided-Sinks) allows logs to be routed to
destination such as standard consoles, files and logging services. See the Monitoring topic for
additional information.

Identity Manager's supported sinks are:

- `Serilog.Sinks.ApplicationInsights`;
- `Serilog.Sinks.Async`;
- `Serilog.Sinks.Console` to write to the console;
- `Serilog.Sinks.Datadog.Logs`;
- `Serilog.Sinks.File` to write to a file;
- `Serilog.Sinks.Map`;
- `Serilog.Sinks.Network` to write to another network;

    > For example, this sink can be used when producing a JSON output for QRadar.

- `Serilog.Sinks.PeriodicBatching`;
- `Serilog.Sinks.Splunk.Durable` to send logs to Splunk;
- `Serilog.Sinks.Syslog`.

    > For example, this sink can be used when producing an
    > [RFC3164](https://tools.ietf.org/html/rfc3164) or
    > [RFC5424](https://tools.ietf.org/html/rfc5424) output for QRadar.

The log messages can be routed to several logging destinations simultaneously. These destinations
are described in the **WriteTo** attribute.

```
appsettings.json
{
  ...
"Serilog": {
    "Using": ["Serilog.Sinks.Network"],
    "MinimumLevel": {
      "Default": "Error",
      "Override": {
          "Usercube": "Information"
      }
    },
    "WriteTo": [{
        "Name": "Destination1",
        "Args": {
          "uri": "192.168.13.110",
          "port": "514",
          "textFormatter": "Serilog.Formatting.Compact.CompactJsonFormatter, Serilog.Formatting.Compact"
        }
      },
      {
        "Name": "Destination2",
        "Args": {
          "uri": "192.168.13.227",
          "port": "514",
          "textFormatter": "Serilog.Formatting.Compact.CompactJsonFormatter, Serilog.Formatting.Compact"
        }
      }],
    "Filter": [{
        "Name": "ByIncludingOnly",
        "Args": { "expression": "StartsWith(SourceContext, 'Usercube') and EventId.Id >= 500" }
      }]
  }
}
```

There can only be one **Filter** attribute associated with a **WriteTo** attribute. Therefore, the
filter defined in the **Filter** attribute is applied to all the destinations contained in the
**WriteTo** attribute. To filter only one destination at a time, sub-loggers can be used.

```
appsettings.json
{
  ...
"Serilog": {
    "Using": ["Serilog.Sinks.Network"],
    "MinimumLevel": {
      "Default": "Error",
      "Override": {
          "Usercube": "Information"
      }
    },
    "WriteTo": [{
        "Name": "Logger1",
        "Args": {
          "configureLogger": {
            "MinimumLevel": {
                "Default": "Information"
            },
            "WriteTo": [
              {
                "Name": "Destination1",
                "Args": {
                  "uri": "192.168.13.127",
                  "port": "514",
                  "textFormatter": "Serilog.Formatting.Compact.CompactJsonFormatter, Serilog.Formatting.Compact"
                }
              }],
            "Filter": [{
                "Name": "ByIncludingOnly",
                "Args": { "expression": "StartsWith(SourceContext, 'Usercube') and EventId.Id >= 500" }
              }]
          }
        }
      },
      {
        "Name": "Logger2",
        "Args": {
          "configureLogger": {
            "MinimumLevel": {
                "Default": "Information"
            },
            "WriteTo": [{
                "Name": "Destination2",
                "Args": {
                  "uri": "192.168.13.100",
                  "port": "514",
                  "textFormatter": "Serilog.Formatting.Compact.CompactJsonFormatter, Serilog.Formatting.Compact"
                }
              },
              {
                "Name": "Destination3",
                "Args": {
                  "uri": "192.168.13.408",
                  "port": "514",
                  "textFormatter": "Serilog.Formatting.Compact.CompactJsonFormatter, Serilog.Formatting.Compact"
                }
              }],
            "Filter": [{
                "Name": "ByIncludingOnly",
                "Args": { "expression": "StartsWith(SourceContext, 'Test') and EventId.Id >= 800" }
              }]
          }
        }
      }
    ]
  }
}
```

In the example above, the filter defined in **Logger1** will only apply to **Destination1**, and the
filter defined in **Logger2** will only apply to **Destination2** and **Destination3**.

When using `Serilog.Sinks.File`, the setting `shared` should be set to `true` in the `Args` section
to enable Identity Manager's **Monitoring** screen functionality.

As this `shared` setting allows several systems to interact with the log file simultaneously, so we
can have both Serilog writing to the log file and Identity Manager reading it to display its content
on the **Monitoring** screen.

```

{
  ...
  "Serilog": {
    "WriteTo": [{
          "Name": "File",
          "Args": {
            "path": "../Temp/Server/identitymanager-log.txt",
            "shared": true,
          }
        }]
  }
}
```

## QRadar

QRadar is a supported destination for Identity Manager's logs.

See the [Export Logs to a Log Management System](/docs/identitymanager/6.2/integration-guide/monitoring/qradar-setting/index.md) topic to learn
how to send Identity Manager's logs to your QRadar system.

Three output formats are available for QRadar-routed logs:

- JSON
- RFC3164
- RFC5424

#### JSON output

JSON output uses _Serilog.Sinks.Network_ sink.

The following configures a QRadar JSON output for a QRadar server located at `192.168.13.110`.

```
appsettings.json
{
  ...
"Serilog": {
    "Using": ["Serilog.Sinks.Network"],
    "MinimumLevel": {
      "Default": "Error",
      "Override": {
          "Usercube": "Information"
      }
    },
    "WriteTo": [{
        "Name": "Logger",
        "Args": {
          "configureLogger": {
            "MinimumLevel": {
                "Default": "Information"
            },
            "WriteTo": [
              {
                "Name": "UDPSink",
                "Args": {
                  "uri": "192.168.13.110",
                  "port": "514",
                  "textFormatter": "Serilog.Formatting.Compact.CompactJsonFormatter, Serilog.Formatting.Compact"
                }
              }],
            "Filter": [{
                "Name": "ByIncludingOnly",
                "Args": { "expression": "StartsWith(SourceContext, 'Usercube') and EventId.Id >= 500" }
              }]
          }
        }
      }
    ]
  }
}
```

#### RFC3164 or RFC5424 output

Using `Serilog.Sinks.SyslogMessages`_Sink_, the **Serilog.writeTo.configureLogger.Args.format**
attribute is set to `RFC3164` or `RFC5424`.

The following configures a QRadar RFC5424 output for a QRadar server located at `192.168.13.110`.

```
appsettings.json
{
  ...
"Serilog": {
    "Using": ["Serilog.Sinks.Syslog"],
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
                "Default": "Information"
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
                  "outputTemplate": "[{Timestamp:HH:mm:ss} {Level:u3}] {Message:lj}
```

## Application Insights

Identity Manager supports the
[Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)
integration. It means that you can monitor the lifecycle of the application through a dedicated
interface, which can be useful to measure performance, observe how the application is used or detect
performance anomalies.

### Configuration

Both the server and the agent support the Application Insights integration. To set it up, you need
to create your own Application Insights instance (see
[Create New Resource](https://docs.microsoft.com/en-us/azure/azure-monitor/app/create-new-resource)).
Once done, you should have an instrumentation key. To plug the server or the agent into the
Application Insights instance, you simply have to set the key at the root of the appsettings file:

```
appsettings.json
{
  ...
  "ApplicationInsights": {
    "InstrumentationKey": "YOUR-INSTRUMENTATION-KEY"
  }
}
```

This configuration will automatically add a `Serilog.Sinks.ApplicationInsights` to the Serilog
configuration. Thus, declaring explicitly an ApplicationInsights _sink_ in the Serilog configuration
is useless. The `ApplicationInsights` section does not only affect the logging system, but also
sends metrics periodically such as the percentage of CPU usage.

## Logs Monitoring via User Interface

Identity Manager offers the ability to download the application logs directly through the User
Interface (UI) via the **Monitoring** screen in the **Administration** section on the Dashboard.

SaaS installations support this feature automatically while on-premises installations support this
in two ways. The first one is to leverage the path to the logs from the Serilog configuration when
writing application logs into a single file. See the example below. The second option is described
in the following subsection.

```
appsettings.json
{
  ...
  "Serilog": {
    "WriteTo": [{
          "Name": "File",
          "Args": {
            "path": "../Temp/Server/identitymanager-log.txt",
            "shared": true,
          }
        }]
  }
}
```

### `LogsPath`

if you store Identity Manager logs thanks to an external mechanism (the web server, etc), then you
have to use the second option in order to enable this feature which is via an ad hoc parameter at
the root of the appsettings called `LogsPath` indicating the path where the application logs are
located:

```
appsettings.json
{
  ...
  "Serilog": {
    "WriteTo": ["Console"],
    },
  "LogsPath": "C:/inetpub/logs/LogFiles"
}
```

If logs are all stored in one file, provide the path to the file. If they are stored in multiple
separate files within a directory, provide the path to the directory and Identity Manager will
handle providing the most recent logs.

## Default Configuration

```
appsettings.json
{
  ...
"Serilog": {
  "WriteTo": ["Console"],
  "Using": ["Serilog.Sinks.File"],
  "MinimumLevel": "Error",
  "WriteTo": [{
        "Name": "File",
        "Args": {
          "path": "../Temp/Server/identitymanager-log.txt",
          "shared": true
        }
      }]
}
}
```

## Configuration Examples

### Write log messages

This example configures _Serilog_ to write log messages to the `../Temp/Server/identitymanager-log.txt`
file.

```
appsettings.json
{
  ...
"Serilog": {
  "WriteTo": ["Console"],
  "Using": ["Serilog.Sinks.File"],
  "MinimumLevel": "Error",
  "WriteTo": [{
        "Name": "File",
        "Args": {
          "path": "../Temp/Server/identitymanager-log.txt",
          "shared": true
        }
      }]
}
}
```

### Reduce logging process overhead

This example shows how to reduce the overhead of the logging process for Identity Manager's main
thread by delegating work to a background thread, using the _Async\_\_Sink_.

```
appsettings.json
{
  ...
"Serilog": {
    "MinimumLevel": {
      "Default": "Error",
      "Override": {
        "Usercube": "Debug"
      }
    },
    "WriteTo": [{
        "Name": "Async",
        "Args": {
          "configure": [
            {
              "Name": "File",
              "Args": {
                "path": "C:/Projects/LogTest/identitymanager-test.txt",
                "shared: true,
                "buffered": "true"
              }
            }]
        }
      },
      {
        "Name": "Console"
      }
    ]
  }
}
```
