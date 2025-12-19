---
title: "Performance Monitoring"
description: "Performance Monitoring"
sidebar_position: 40
---

# Performance Monitoring

This topic provides a list of Activity Monitor performance counters and standard system-wide
performance counters (Memory and CPU usage, TCP disconnections, etc) that are recommended for
Activity Monitor performance monitoring. These performance counters can help diagnose performance
issues.

## Performance Counters

The following performance counters are provided by Activity Monitor.

| Category           | Recommended | Counter                                              | Description                                                                                                                                                                                                                                                                                                                                                        |
| ------------------ | ----------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| NetApp             | ✔          | Activity Monitor - NetApp\Events Received            | Number of events received from NetApp                                                                                                                                                                                                                                                                                                                              |
| NetApp             | ✔          | Activity Monitor - NetApp\Events Received/sec        | Rate at which events are received from NetApp                                                                                                                                                                                                                                                                                                                      |
| NetApp             | ✔          | Activity Monitor - NetApp\Events Reported            | Number of events passed the filters and being reported to outputs                                                                                                                                                                                                                                                                                                  |
| NetApp             | ✔          | Activity Monitor - NetApp\Events Reported/sec        | Rate at which events are reported to outputs                                                                                                                                                                                                                                                                                                                       |
| NetApp             | ✔          | Activity Monitor - NetApp\Session Negotiated         | Number of connections established with ONTAP cluster nodes                                                                                                                                                                                                                                                                                                         |
| NetApp             | ✔          | Activity Monitor - NetApp\Active Connections         | Number of active connections with ONTAP cluster nodes                                                                                                                                                                                                                                                                                                              |
| NetApp             |             | Activity Monitor - NetApp\Outage Files               | Number of outage (resilience) files processed                                                                                                                                                                                                                                                                                                                      |
| NetApp             | ✔          | Activity Monitor - NetApp\Overloaded                 | Number of times the agent was overloaded and had to limit the rate of events. This counter may increase from time to time when processing large batches of events. But if it keeps increasing, it is a sure sign that the agent is not coping with the load. Consider moving some SVMs to another agent or spreading the load from one SVM across multiple agents. |
| VNX, Isilon, Unity | ✔          | Activity Monitor - Dell\Events Received              | Number of events received from CEE                                                                                                                                                                                                                                                                                                                                 |
| VNX, Isilon, Unity | ✔          | Activity Monitor - Dell\Events Received/sec          | Rate at which events are received from CEE                                                                                                                                                                                                                                                                                                                         |
| VNX, Isilon, Unity | ✔          | Activity Monitor - Dell\Events Reported              | Number of events passed the filters and being reported to outputs                                                                                                                                                                                                                                                                                                  |
| VNX, Isilon, Unity | ✔          | Activity Monitor - Dell\Events Reported/sec          | Rate at which events are reported to outputs                                                                                                                                                                                                                                                                                                                       |
| VNX, Isilon, Unity | ✔          | Activity Monitor - Dell\Queue Size                   | Number of events received from CEE and waiting in queue to be processed                                                                                                                                                                                                                                                                                            |
| VNX, Isilon, Unity | ✔          | Activity Monitor - Dell\Receive Throttling           | Delay, in milliseconds, introduced to manage the queue                                                                                                                                                                                                                                                                                                             |
| Outputs            | ✔          | Activity Monitor - Outputs\Events Reported           | Total number of events reported                                                                                                                                                                                                                                                                                                                                    |
| Outputs            | ✔          | Activity Monitor - Outputs\Events Reported/sec       | Rate at which events are reported                                                                                                                                                                                                                                                                                                                                  |
| Outputs            |             | Activity Monitor - Outputs\Events Reported to Files  | Total number of events reported to log files                                                                                                                                                                                                                                                                                                                       |
| Outputs            |             | Activity Monitor - Outputs\Events Reported to Syslog | Total number of events reported to syslog servers                                                                                                                                                                                                                                                                                                                  |
| Outputs            |             | Activity Monitor - Outputs\Events Reported to AMQP   | Total number of events reported to AMQP servers (not used currently)                                                                                                                                                                                                                                                                                               |
| Outputs            | ✔          | Activity Monitor - Outputs\Resolved SIDs             | Number of attempts, both successful and failed, to resolve SIDs to names                                                                                                                                                                                                                                                                                           |
| Outputs            | ✔          | Activity Monitor - Outputs\Resolved SIDs/sec         | Rate at which SIDs are resolved to names                                                                                                                                                                                                                                                                                                                           |
| Outputs            | ✔          | Activity Monitor - Outputs\Resolved SIDs Failures    | Number of failed attempts to resolve SIDs to names                                                                                                                                                                                                                                                                                                                 |
| Outputs            | ✔          | Activity Monitor - Outputs\Resolved SIDs Avg Time    | The moving average length of time, in microseconds, per a SID to name translation                                                                                                                                                                                                                                                                                  |
| Outputs            | ✔          | Activity Monitor - Outputs\Resolved SIDs Max Time    | The moving maximum length of time, in microseconds, per a SID to name translation                                                                                                                                                                                                                                                                                  |
| Outputs            |             | Activity Monitor - Outputs\Translated UIDs           | Number of attempts, both successful and failed, to translate UIDs to SIDs                                                                                                                                                                                                                                                                                          |
| Outputs            |             | Activity Monitor - Outputs\Translated UIDs/sec       | Rate at which UIDs are translated to SIDs                                                                                                                                                                                                                                                                                                                          |
| Outputs            |             | Activity Monitor - Outputs\Translated UIDs Failures  | Number of failed attempts to translate UIDs to SIDs                                                                                                                                                                                                                                                                                                                |
| Outputs            |             | Activity Monitor - Outputs\Translated UIDs Avg Time  | The moving average length of time, in microseconds, per a UID to SID translation                                                                                                                                                                                                                                                                                   |
| Outputs            |             | Activity Monitor - Outputs\Translated UIDs Max Time  | The moving maximum length of time, in microseconds, per a UID to SID translation                                                                                                                                                                                                                                                                                   |
| Outputs            | ✔          | Activity Monitor - Outputs\DNS Queries               | Number of DNS queries, both successful and failed                                                                                                                                                                                                                                                                                                                  |
| Outputs            | ✔          | Activity Monitor - Outputs\DNS Queries/sec           | Rate at which DNS queries are executed                                                                                                                                                                                                                                                                                                                             |
| Outputs            | ✔          | Activity Monitor - Outputs\DNS Queries Failures      | Number of failed DNS queries                                                                                                                                                                                                                                                                                                                                       |
| Outputs            | ✔          | Activity Monitor - Outputs\DNS Queries Avg Time      | The moving average length of time, in microseconds, per a DNS query                                                                                                                                                                                                                                                                                                |
| Outputs            | ✔          | Activity Monitor - Outputs\DNS Queries Max Time      | The moving maximum length of time, in microseconds, per a DNS query                                                                                                                                                                                                                                                                                                |

:::note
DNS and AD queries typically contribute the most to the processing time. Since the
resolution occurs in real time, slow responses can affect throughput (A 100ms DNS response limits
the throughput to 10 events per second). Observing average and maximum values of DNS Queries Time,
Resolved SIDs Time, and Translated UIDs Time allows you to estimate the response time.
:::


## Recommended System Performance Counters

In addition to the Activity Monitor performance counters, it is recommended to use the following
performance counters:

| Counter                                                | Notes                                                                                                                                                                                            |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Processor(_Total)\% Processor Time                    | The percentage of elapsed time that the processor spends to execute a non-Idle thread.                                                                                                           |
| Memory\Available MBytes                                | The amount of physical memory, in Megabytes, immediately available for allocation to a process or for system use.                                                                                |
| Paging File(_Total)\% Usage                           | The percentage of the paging file that is currently in use.                                                                                                                                      |
| TCPv4\Connections Reset                                | The rate of reset TCPv4 connections                                                                                                                                                              |
| TCPv4\Segments Received/sec                            | The quantity of segments received via TCPv4 per second.                                                                                                                                          |
| TCPv4\Segments Retransmitted/Sec                       | Quantity of segments retransmitted via TCPv4 per second.                                                                                                                                         |
| TCPv6\Segments Received/sec                            | The quantity of segments received via TCPv6 per second.                                                                                                                                          |
| TCPv6\Segments Retransmitted/Sec                       | Quantity of segments retransmitted via TCPv6 per second.                                                                                                                                         |
| Network Interface(\*)\Bytes Received/sec               | From all network adapters: The rate at which bytes are received.                                                                                                                                 |
| Network Interface(\*)\Bytes Sent/sec                   | From all network adapters: The rate at which bytes are sent.                                                                                                                                     |
| Network Interface(\*)\Output Queue Length              | From all network adapters: The length of the output packet queue (in packets).                                                                                                                   |
| Network Interface(\*)\Packets Received Discarded       | From all network adapters: The number of inbound packets that were chosen to be discarded even though no errors had been detected to prevent their being deliverable to a higher-layer protocol. |
| Network Interface(\*)\Packets Received Errors          | From all network adapters: The number of inbound packets that contained errors. As a result, the errored packets were not delivered to a higher-layer protocol.                                  |
| Process(ConfigurationAgent.Grpc.Host)\% Processor Time | For Agent: The percentage of elapsed time that all of process threads used the processor to execution instructions.                                                                              |
| Process(ConfigurationAgent.Grpc.Host)\Elapsed Time     | For Agent: The duration from when the process was started until the time it terminated.                                                                                                          |
| Process(ConfigurationAgent.Grpc.Host)\Handle Count     | For Agent: The number of operating system handles the process has opened.                                                                                                                        |
| Process(ConfigurationAgent.Grpc.Host)\Thread Count     | For Agent: The set of threads that are running in the associated process.                                                                                                                        |
| Process(ConfigurationAgent.Grpc.Host)\Private Bytes    | For Agent: The total amount of memory that a process has allocated, not including memory shared with other processes.                                                                            |
| Process(ConfigurationAgent.Grpc.Host)\Working Set      | For Agent: The associated process's physical memory usage, in bytes.                                                                                                                             |
| Process(ConfigurationAgent)\% Processor Time           | For Agent &lt;= 6.0: The percentage of elapsed time that all of process threads used the processor to execution instructions.                                                                    |
| Process(ConfigurationAgent)\Elapsed Time               | For Agent &lt;= 6.0: The duration from when the process was started until the time it terminated.                                                                                                |
| Process(ConfigurationAgent)\Handle Count               | For Agent &lt;= 6.0: The number of operating system handles the process has opened.                                                                                                              |
| Process(ConfigurationAgent)\Thread Count               | For Agent &lt;= 6.0: The set of threads that are running in the associated process.                                                                                                              |
| Process(ConfigurationAgent)\Private Bytes              | For Agent &lt;= 6.0: The total amount of memory that a process has allocated, not including memory shared with other processes.                                                                  |
| Process(ConfigurationAgent)\Working Set                | For Agent &lt;= 6.0: The associated process's physical memory usage, in bytes.                                                                                                                   |
| Process(SBTService)\% Processor Time                   | For Windows Monitoring: The percentage of elapsed time that all of process threads used the processor to execution instructions.                                                                 |
| Process(SBTService)\Elapsed Time                       | For Windows Monitoring: The duration from when the process was started until the time it terminated.                                                                                             |
| Process(SBTService)\Handle Count                       | For Windows Monitoring: The number of operating system handles the process has opened.                                                                                                           |
| Process(SBTService)\Thread Count                       | For Windows Monitoring: The set of threads that are running in the associated process.                                                                                                           |
| Process(SBTService)\Private Bytes                      | For Windows Monitoring: The total amount of memory that a process has allocated, not including memory shared with other processes.                                                               |
| Process(SBTService)\Working Set                        | For Windows Monitoring: The associated process's physical memory usage, in bytes.                                                                                                                |
| Process(FPolicyServerSvc)\% Processor Time             | For NetApp Monitoring: The percentage of elapsed time that all of process threads used the processor to execution instructions.                                                                  |
| Process(FPolicyServerSvc)\Elapsed Time                 | For NetApp Monitoring: The duration from when the process was started until the time it terminated.                                                                                              |
| Process(FPolicyServerSvc)\Handle Count                 | For NetApp Monitoring: The number of operating system handles the process has opened.                                                                                                            |
| Process(FPolicyServerSvc)\Thread Count                 | For NetApp Monitoring: The set of threads that are running in the associated process.                                                                                                            |
| Process(FPolicyServerSvc)\Private Bytes                | For NetApp Monitoring: The total amount of memory that a process has allocated, not including memory shared with other processes.                                                                |
| Process(FPolicyServerSvc)\Working Set                  | For NetApp Monitoring: The associated process's physical memory usage, in bytes.                                                                                                                 |
| Process(HitachiService)\% Processor Time               | For Hitachi Monitoring: The percentage of elapsed time that all of process threads used the processor to execution instructions.                                                                 |
| Process(HitachiService)\Elapsed Time                   | For Hitachi Monitoring: The duration from when the process was started until the time it terminated.                                                                                             |
| Process(HitachiService)\Handle Count                   | For Hitachi Monitoring: The number of operating system handles the process has opened.                                                                                                           |
| Process(HitachiService)\Thread Count                   | For Hitachi Monitoring: The set of threads that are running in the associated process.                                                                                                           |
| Process(HitachiService)\Private Bytes                  | For Hitachi Monitoring: The total amount of memory that a process has allocated, not including memory shared with other processes.                                                               |
| Process(HitachiService)\Working Set                    | For Hitachi Monitoring: The associated process's physical memory usage, in bytes.                                                                                                                |
| Process(CelerraServerSvc)\% Processor Time             | For Dell Monitoring: The percentage of elapsed time that all of process threads used the processor to execution instructions.                                                                    |
| Process(CelerraServerSvc)\Elapsed Time                 | For Dell Monitoring: The duration from when the process was started until the time it terminated.                                                                                                |
| Process(CelerraServerSvc)\Handle Count                 | For Dell Monitoring: The number of operating system handles the process has opened.                                                                                                              |
| Process(CelerraServerSvc)\Thread Count                 | For Dell Monitoring: The set of threads that are running in the associated process.                                                                                                              |
| Process(CelerraServerSvc)\Private Bytes                | For Dell Monitoring: The total amount of memory that a process has allocated, not including memory shared with other processes.                                                                  |
| Process(CelerraServerSvc)\Working Set                  | For Dell Monitoring: The associated process's physical memory usage, in bytes.                                                                                                                   |
| Process(FSACLoggingSvc)\% Processor Time               | For Logging Service: The percentage of elapsed time that all of process threads used the processor to execution instructions.                                                                    |
| Process(FSACLoggingSvc)\Elapsed Time                   | For Logging Service: The duration from when the process was started until the time it terminated.                                                                                                |
| Process(FSACLoggingSvc)\Handle Count                   | For Logging Service: The number of operating system handles the process has opened.                                                                                                              |
| Process(FSACLoggingSvc)\Thread Count                   | For Logging Service: The set of threads that are running in the associated process.                                                                                                              |
| Process(FSACLoggingSvc)\Private Bytes                  | For Logging Service: The total amount of memory that a process has allocated, not including memory shared with other processes.                                                                  |
| Process(FSACLoggingSvc)\Working Set                    | For Logging Service: The associated process's physical memory usage, in bytes.                                                                                                                   |
| Process(MonitorService)\% Processor Time               | For Other, Different Device Monitoring: The percentage of elapsed time that all of process threads used the processor to execution instructions.                                                 |
| Process(MonitorService)\Elapsed Time                   | For Other, Different Device Monitoring: The duration from when the process was started until the time it terminated.                                                                             |
| Process(MonitorService)\Handle Count                   | For Other, Different Device Monitoring: The number of operating system handles the process has opened.                                                                                           |
| Process(MonitorService)\Thread Count                   | For Other, Different Device Monitoring: The set of threads that are running in the associated process.                                                                                           |
| Process(MonitorService)\Private Bytes                  | For Other, Different Device Monitoring: The total amount of memory that a process has allocated, not including memory shared with other processes.                                               |
| Process(MonitorService)\Working Set                    | For Other, Different Device Monitoring: The associated process's physical memory usage, in bytes.                                                                                                |

## Register Performance Counters

The Activity Monitor performance counters are not registered by default and must be registered
manually.

Follow the steps to register the Activity Monitor performance counters on each SAM Agent server.

**Step 1 –** Run `cmd.exe` as Administrator.

**Step 2 –** Change current directory to the agent installation folder
(`C:\Program Files\Netwrix\Activity Monitor\Agent`).

**cd "C:\Program Files\Netwrix\Activity Monitor\Agent"**

**Step 3 –** Register the performance counters manifest file.

**lodctr /M:PerfCounters.man**

Expected output: Info: Successfully installed performance counters in
`C:\Program Files\Netwrix\Activity Monitor\Agent\PerfCounters.man`

**Step 4 –** Restart the services:

**sc stop SBFileMonAgentSvc**

sc stop FPolicyServerSvc

**sc stop CelerraServerSvc**

sc stop SBTLoggingSvc

**sc start SBFileMonAgentSvc**

## Collect Performance Data

The performance data can be observed or saved using any tool capable of collecting performance
counters. For example, Performance Monitor.

:::note
The following script is only compatible with PowerShell 5.X and previous versions. Using
PowerShell 7.X requires Windows Performance Monitor to be configured to collect performance
counters.
:::


Below is a PowerShell script that collects the counters every second and stores them in
`perfcounters_SERVERNAME_TIMESTAMP.csv` files. The expected file size per day is about 50MB.

Run the script on each agent server using the following command:

**powershell -file AM.PerfCollect.ps1**

To stop the script press **Ctrl+C**.

Script (save it to AM.PerfCollect.ps1):

```powershell
$sampleInterval = 1

**$maxSamples = 0**

$outputFile = "perfcounters_$($env:COMPUTERNAME)_$(Get-Date -Format "yyyy_MM_dd_HH_mm_ss").csv"

**$counters =**

@(`

"\Processor(_Total)\% Processor Time" `

,"\Memory\Available MBytes" `

,"\Paging File(_Total)\% Usage" `

,"\TCPv4\Connections Reset" `

,"\TCPv4\Segments Received/sec" `

,"\TCPv4\Segments Retransmitted/Sec" `

,"\TCPv6\Connections Reset" `

,"\TCPv6\Segments Received/sec" `

,"\TCPv6\Segments Retransmitted/Sec" `

,"\Network Interface(\*)\Bytes Received/sec" `

,"\Network Interface(\*)\Bytes Sent/sec" `

,"\Network Interface(\*)\Output Queue Length" `

,"\Network Interface(\*)\Packets Received Discarded" `

,"\Network Interface(\*)\Packets Received Errors" `

,"\Activity Monitor - NetApp\Events Received" `

,"\Activity Monitor - NetApp\Events Received/sec" `

,"\Activity Monitor - NetApp\Events Reported" `

,"\Activity Monitor - NetApp\Events Reported/sec" `

,"\Activity Monitor - NetApp\Session Negotiated" `

,"\Activity Monitor - NetApp\Active Connections" `

,"\Activity Monitor - NetApp\Outage Files" `

,"\Activity Monitor - Dell\Events Received" `

,"\Activity Monitor - Dell\Events Received/sec" `

,"\Activity Monitor - Dell\Events Reported" `

,"\Activity Monitor - Dell\Events Reported/sec" `

,"\Activity Monitor - Dell\Queue Size" `

,"\Activity Monitor - Dell\Receive Throttling" `

,"\Process(FPolicyServerSvc)\% Processor Time" `

,"\Process(FPolicyServerSvc)\Elapsed Time" `

,"\Process(FPolicyServerSvc)\Handle Count" `

,"\Process(FPolicyServerSvc)\Thread Count" `

,"\Process(FPolicyServerSvc)\Private Bytes" `

,"\Process(FPolicyServerSvc)\Working Set" `

,"\Process(FSACLoggingSvc)\% Processor Time" `

,"\Process(FSACLoggingSvc)\Elapsed Time" `

,"\Process(FSACLoggingSvc)\Handle Count" `

,"\Process(FSACLoggingSvc)\Thread Count" `

,"\Process(FSACLoggingSvc)\Private Bytes" `

,"\Process(FSACLoggingSvc)\Working Set" `

,"\Process(CelerraServerSvc)\% Processor Time" `

,"\Process(CelerraServerSvc)\Elapsed Time" `

,"\Process(CelerraServerSvc)\Handle Count" `

,"\Process(CelerraServerSvc)\Thread Count" `

,"\Process(CelerraServerSvc)\Private Bytes" `

,"\Process(CelerraServerSvc)\Working Set" `

**)**

$variables = @{

**SampleInterval = $sampleInterval**

Counter = $counters

**}**

if ($maxSamples -eq 0) {

**$variables.Add("Continuous", 1)}**

else {

**$variables.Add("MaxSamples", "$maxSamples")**

}

Write-Host "Collecting performance counters to $outputFile... Press Ctrl+C to stop."

Get-Counter @variables | Export-Counter -FileFormat csv -Path $outputFile -Force
```

## Unregister Performance Counters

When performance monitoring is not needed anymore, unregister the Activity Monitor performance
counters.

Follow the steps to unregister the Activity Monitor performance counters on each SAM Agent server.

**Step 1 –** Run `cmd.exe` as Administrator.

**Step 2 –** Change current directory to the agent installation folder.

**cd "C:\Program Files\Netwrix\Activity Monitor\Agent"**

**Step 3 –** Unregister the performance counters manifest file.

**unlodctr /M:PerfCounters.man**

Expected output: Info: Successfully uninstalled the performance counters from the counter definition
XML file PerfCounters.man.

**Step 4 –** Restart the services:

**sc stop SBFileMonAgentSvc**

sc stop FPolicyServerSvc

**sc stop CelerraServerSvc**

sc stop SBTLoggingSvc

**sc start SBFileMonAgentSvc**

Once the services have been restarted, the Activity Monitor performance counters are unregistered.
