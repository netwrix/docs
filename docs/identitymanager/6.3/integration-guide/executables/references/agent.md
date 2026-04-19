---
title: "Usercube-Agent"
description: "Usercube-Agent"
sidebar_position: 10
---

# Usercube-Agent

This tool runs the Agent on a separate server instance. The Agent is able to communicate with the [Usercube-Server ](../../../integration-guide/executables/references/server).

## Examples

With a properly configured environment, the following command runs the agent. It listens on two different ports:

```shell
./Usercube-Agent.exe --urls "http://localhost:6001;http://localhost:6002"
```

When the Agent starts, the following log should be displayed (if the log level is set to _Information_):

```json
[xx:xx:xx INF] Now listening on: http://localhost:6001
[xx:xx:xx INF] Now listening on: http://localhost:6002
```

## Arguments

 | Argument Name | Details | 
 | --- | --- | 
 | --urls required | **Type** String **Description** URL(s) that the agent is listening to. | 

