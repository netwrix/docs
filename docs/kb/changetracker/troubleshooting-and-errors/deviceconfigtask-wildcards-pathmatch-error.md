---
description: >-
  Explains the cause and resolution for a Rolling-Log error where
  AgentTaskRunner fails due to a mismatched path-match type in a configuration
  template in Netwrix Change Tracker.
keywords:
  - AgentTaskRunner
  - DeviceConfigTask
  - ContainerItemMatchException
  - path match
  - wildcards
  - regex
  - configuration template
  - rolling log
  - Netwrix Change Tracker
  - agent error
  - custom path match
  - troubleshooting
knowledge_article_id:
products:
  - change-tracker
sidebar_label: DeviceConfigTask Wildcards PathMatch Error
tags: [kb, troubleshooting-and-errors]
title: >-
  Rolling-Log Fix: "ERROR AgentTaskRunner - Task Execution Failed for Task -
  DeviceConfigTask. Item Wildcards Match Text Must Not Contain Separator"
---

This article explains how to resolve a Rolling-Log error caused by a misconfigured custom path-match definition in a Netwrix Change Tracker configuration template.

## Symptom

The following error appears in the agent Rolling Log:

```text
2018-08-25 12:04:35,780 [9] ERROR AgentTaskRunner - task execution failed for task 2 - DeviceConfigTask-1869
NNT.Agent.Utils.ContainerItemMatch+ContainerItemMatchException: item wildcards match text must not contain separator '\' for MatchType.Wildcards unless ContainerMatchAppliesToWholePath is true.
   at NNT.Agent.Utils.ContainerItemMatch.ValidateMatchPattern(String element, String matchPattern, MatchType matchType, String separator, Boolean containerMatchAppliesToWholePath)
   at NNT.Agent.Utils.ContainerItemMatch..ctor(String rootContainer, Boolean skipRootContainer, String separator, Boolean caseSensitive, Nullable`1 recursionLevels, MatchType containerMatchType, String containerMatchPattern, Boolean containerMatchAppliesToWholePath, MatchType itemMatchType, String itemMatchPattern)
   at NNT.Agent.Core.Tracking.FileSystem.FileSystemTrackerConfigurationCreator.ProcessDeviceConfiguration(DeviceConfiguration deviceConfiguration, IDevice device, String trackerName)
   at NNT.Agent.Core.Tasks.DeviceConfigTask.ApplyDeviceConfigAction(ILifetimeScope scope, IDevice device, DeviceConfiguration configuration, Nullable`1 latestConfigDateUtc)
   at NNT.Agent.Core.Tasks.DeviceConfigTask.Execute(AgentTaskQueue queueContext)
   at NNT.Agent.Core.Application.AgentTaskRunner.ExecuteTask(Int32 runnerId, IAgentTask task, DateTime nowUtc, AgentTaskQueue queue)
```

## Cause

The agent cannot process an item within the advanced custom path-match definition because the match type is set to **Wildcards** but the match pattern contains regex syntax (or vice versa). For example, a path-match definition may contain regex code but the match type is set to **Wildcards** instead of **Regex**.

<!-- Image removed: Screenshot showing a custom path-match definition with regex code but the match type incorrectly set to Wildcards -->

## Resolution

If you are receiving this error, the agent is potentially NOT reporting to your hub. This is a critical error and monitoring will not continue until it is resolved.

1. Log into the **Netwrix Change Tracker console**.
2. Locate the agent presenting this error and go into each of the configuration templates assigned to that agent. Inspect the custom path matches for misconfiguration.
3. Once you have identified the problem template, modify or remove the custom path-match definition that is causing the issue. For example, change the match type from **Wildcards** to **Regex** if the pattern contains regex syntax.
4. Save the configuration template.
5. Check the agent to confirm it has received the new configuration.
