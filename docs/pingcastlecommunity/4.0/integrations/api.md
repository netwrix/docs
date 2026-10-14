---
sidebar_position: 2
sidebar_label: API
description: Send PingCastle reports to an API endpoint and find the API specification.
---
# API

PingCastle can send reports in XML format (encrypted or not) to an API endpoint using the `--api-endpoint` and `--api-key` command line options. You primarily use this with PingCastle Enterprise, where PingCastle.exe runs in "agent" mode to automatically perform scans and send reports to the Enterprise web UI. You typically schedule scans using Windows Task Scheduler.

![https://www.pingcastle.com/wp/wp-content/uploads/2018/09/pingcastle-swagger.webp](/images/pingcastlecommunity/4.0/image26.webp)

For custom integrations, the API specification is available in Swagger format via the [Swagger Editor](https://editor.swagger.io/?url=https://gist.githubusercontent.com/vletoux/c6c565c8af07b4df5df65ed01ffeb917/raw/fca7a288050b7b17ba6024f2a23ef8c4d46fd813/pingcastle-swagger.json) or as a [direct download](https://gist.githubusercontent.com/vletoux/c6c565c8af07b4df5df65ed01ffeb917/raw/fca7a288050b7b17ba6024f2a23ef8c4d46fd813/pingcastle-swagger.json).
