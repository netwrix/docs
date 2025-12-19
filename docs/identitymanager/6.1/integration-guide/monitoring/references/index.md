---
title: "References: Logs"
description: "References: Logs"
sidebar_position: 20
---

# References: Logs

## Definition

This section provides descriptions for logs which are meant to be sent to other systems like SIEMs,
for example QRadar.

The description will use this template for each log:

**EventId id: int**

EventId name: string

**LogLevel: Trace||Verbose||Debug||Information||Warning||Error||Critical**

Arguments:

- argument1 (string): description1 (string)
- argument2 (string): description2 (string)
- argument3 (string): description3 (string)

The EventId id must be unique so we could use it to filter the logs we send, see
[QRadar's example](/docs/identitymanager/6.1/integration-guide/monitoring/index.md)

#### 500

**EventId id: 500**

EventId name: Workflow.StartWorkflowInstance

**LogLevel: Information**

Arguments:

- WorkflowId: Request number, which includes the workflow instance's id
- Transition: Activity template name
- Perfomer: Usercube's login or id of the performer
- WorkflowIdentifier: Workflow's identifier
- Subject: Action performed, with the person's name in modifying permission case

#### 501

**EventId id: 501**

EventId name: Workflow.ResumeWorkflowInstance

**LogLevel: Information**

Arguments:

- WorkflowId: Request number, which includes the workflow instance's id
- Transition: Activity template name
- Perfomer: Usercube's login or id of the performer
- WorkflowIdentifier: Workflow's identifier
- Subject: Action performed, with the person's name in modifying permission case

#### 502

**EventId id: 502**

EventId name: SelectEntityByIdQueryHandler.Handle

**LogLevel: Information**

Arguments:

- Perfomer: Usercube's login or id of the performer
- Subject: Usercube's id of the readed resource
- EntityType: Usercube's type of the readed resource

#### 503

**EventId id: 503**

EventId name: SelectEntityByIdQueryHandler.Handle

**LogLevel: Error**

Arguments:

- Perfomer: Usercube's login or id of the performer
- Subject: Usercube's id of the readed resource
- EntityType: Usercube's type of the readed resource
- ExceptionMessage: Exception's message
