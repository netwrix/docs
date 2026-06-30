---
description: >-
  This article explains how to resolve the "AgentTaskRunner - task execution
  failed for task 11 - TrackerPollTask-Baseline-processtracker-88" error in
  the Rolling Log by adjusting the configuration template in Netwrix Change
  Tracker.
keywords:
  - rolling log
  - AgentTaskRunner
  - TrackerPollTask
  - processtracker
  - Netwrix Change Tracker
  - configuration template
  - process tracker
  - agent error
  - task execution failed
  - data collector
  - baseline
  - troubleshooting
knowledge_article_id:
products:
  - change-tracker
sidebar_label: AgentTaskRunner ProcessTracker Error
tags: [kb, troubleshooting-and-errors]
title: >-
  Rolling-Log Fix: "AgentTaskRunner - Task Execution Failed for Task 11 -
  TrackerPollTask-Baseline-processtracker-88"
---

This article explains how to clear the following error from the Rolling Log in Netwrix Change Tracker.

## Symptom

The following error appears in the agent Rolling Log:

```text
2018-04-10 10:56:26,887 [7] ERROR AgentTaskRunner - task execution failed for task 11 - TrackerPollTask-Baseline-processtracker-88
NNT.Agent.Tracking.TrackerException: no data collector registered for: processtracker-local
      at NNT.Agent.Core.Tracking.TrackerBase.GetDataCollector (System.String collectorName, System.Boolean throwException) [0x0002e] in :0
      at NNT.Agent.Core.Tracking.TrackerBase.PollInternal (NNT.Agent.Core.Tracking.PollControl pollControl, NNT.Agent.Core.Interfaces.IDevice device, NNT.Agent.Core.Interfaces.ITrackerConfiguration
            configuration, NNT.Agent.Core.Interfaces.IItemStoragePipeline queue, NNT.Agent.Core.Tracking.PollType pollType, System.DateTime pollStartTimeUtc) [0x0004c] in:0
      at NNT.Agent.Core.Tracking.TrackerBase.Poll (NNT.Agent.Core.Tracking.PollControl pollControl, NNT.Agent.Core.Interfaces.IDevice device, NNT.Agent.Core.Interfaces.IItemStoragePipeline queue,
            NNT.Agent.Core.Tracking.PollType pollType, System.DateTime pollStartTimeUtc) [0x00075] in :0
      at NNT.Agent.Core.Tasks.TrackerPollTask.Execute (NNT.Agent.Core.Queue.AgentTaskQueue queueContext) [0x00279] in :0
      at NNT.Agent.Core.Application.AgentTaskRunner.ExecuteTask (System.Int32 runnerId, NNT.Agent.Core.Interfaces.IAgentTask task, System.DateTime nowUtc, NNT.Agent.Core.Queue.AgentTaskQueue queue)
            [0x00050] in :0
```

## Cause

This error occurs because the process tracker in Netwrix Change Tracker is enabled in the configuration template, but no specific processes are configured for tracking. The agent cannot execute the tracker poll task without at least one process defined.

## Resolution

Edit the configuration template assigned to the affected device and either add processes to track or disable the process tracker.

1. Log into Netwrix Change Tracker and navigate to **Devices** > select the device experiencing the error > select the configuration template that is causing the issue.
2. Either uncheck the **"Track processes and services in this template"** box, or add at least one service to be tracked.

<!-- Image removed: Screenshot showing the process tracker configuration with the "Track processes and services in this template" checkbox -->

<!-- Image removed: Screenshot showing an example of services added to the process tracker configuration -->
