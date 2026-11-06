---
sidebar_position: 2
sidebar_label: PingCastle Enterprise API
description: Understand that the PingCastle report API endpoint is the PingCastle Enterprise upload interface, not a general-purpose API.
---
# PingCastle Enterprise API

:::warning
This API is for PingCastle Enterprise. It isn't a general-purpose API. The `--api-endpoint` and `--api-key` options upload reports to a PingCastle Enterprise server, and no other endpoint is supported. PingCastle Community has no web server and doesn't provide an API of its own.
:::

PingCastle.exe can send reports in XML format (encrypted or not) to a PingCastle Enterprise server using the `--api-endpoint` and `--api-key` command line options. In this "agent" mode, PingCastle.exe automatically performs scans and sends the reports to the Enterprise web UI. You typically schedule scans using Windows Task Scheduler. For setup steps, see [Deploy agents](/docs/pingcastleenterprise/4_1/configuration/agent-deployment).

![https://www.pingcastle.com/wp/wp-content/uploads/2018/09/pingcastle-swagger.webp](/images/pingcastlecommunity/4.1/image26.webp)

## API specification

The Enterprise API specification is available in Swagger format via the [Swagger Editor](https://editor.swagger.io/?url=https://gist.githubusercontent.com/vletoux/c6c565c8af07b4df5df65ed01ffeb917/raw/fca7a288050b7b17ba6024f2a23ef8c4d46fd813/pingcastle-swagger.json) or as a [direct download](https://gist.githubusercontent.com/vletoux/c6c565c8af07b4df5df65ed01ffeb917/raw/fca7a288050b7b17ba6024f2a23ef8c4d46fd813/pingcastle-swagger.json).
