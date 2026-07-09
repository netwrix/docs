---
description: >-
  Describes how to resolve a rolling-log error where the Netwrix Change Tracker
  agent fails to start because the local UI port is already in use; includes
  steps to check ports, change the conflicting application port, disable the
  local UI port in the agent config, and restart the agent.
keywords:
  - TraceLogger
  - SocketException
  - Address already in use
  - port 8095
  - port 8096
  - NNTAgentService.exe.config
  - Netwrix Change Tracker
  - agent
  - rolling-log
products:
  - changetracker
knowledge_article_id: ka0Qk000000Dlh3IAC
sidebar_label: 'Rolling-Log Fix: TraceLogger Address Already In Use'
tags: [kb, troubleshooting-and-errors]
title: >-
  Rolling-Log Fix: "FATAL TraceLogger - AplicationInstance.Start() Fatal error,
  Application shutting down. Error: Address already in use
  System.Net.Sockets.SocketException: Address already in use"
---

# Rolling-Log Fix: "FATAL TraceLogger - AplicationInstance.Start() Fatal error, Application shutting down. Error: Address already in use System.Net.Sockets.SocketException: Address already in use"

## Symptom

The Netwrix Change Tracker agent fails to start, and the rolling log contains a fatal `TraceLogger` error indicating the address is already in use.

### Example Error Message

```
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#                                                          Example Message:												        #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 

2018-03-26 10:31:37,607 [AgentService.WorkerThread] FATAL TraceLogger - ApplicationInstance.Start() 
Fatal error, Application shutting down. Error: Address already in use 
System.Net.Sockets.SocketException: Address already in use
  at System.Net.Sockets.Socket.Bind (System.Net.EndPoint local_end)  
  in :0 
  at System.Net.EndPointListener..ctor (System.Net.IPAddress addr, Int32 port, Boolean secure)  
  in :0 
  at System.Net.EndPointManager.GetEPListener (System.String host, Int32 port, System.Net.HttpListener listener, Boolean secure) 
   in :0 
  at System.Net.EndPointManager.AddPrefixInternal (System.String p, System.Net.HttpListener listener)  
  in :0 
  at System.Net.EndPointManager.AddListener (System.Net.HttpListener listener)  
  in :0 

```

## Cause

Another application is using the local agent UI port (6.5 Agent - Port `8095` or Gen7 Agent - Port `8096`).

## Resolution

If you receive this error, the Netwrix Change Tracker agent is NOT reporting to the hub. This is a critical error; monitoring does not continue until you resolve it.

To resolve this error:

1. Check whether anything is using Port `8095` or `8096`.
2. Determine whether that port number can be changed.
3. Change the port of the conflicting application, or if you cannot change it, disable the local UI port altogether:
   1. Modify the `NNTAgentService.exe.config` file (`C:\Program Files\NNT Change Tracker Suite\Agent\NNTAgentService.exe.config` or `/opt/nnt/agent/bin/NNTAgentService.exe.config`).
   2. Change the value to `0` to disable the port, or assign a new, available port.
   <!-- SME: config snippet needed here — what exact XML lines should the user add to NNTAgentService.exe.config to disable the local UI port? -->
4. Restart the Netwrix Change Tracker agent service.
