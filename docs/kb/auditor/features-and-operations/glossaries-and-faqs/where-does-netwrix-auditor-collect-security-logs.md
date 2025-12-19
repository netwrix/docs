---
description: >-
  Explains where Netwrix Auditor collects security logs and what the Lightweight
  Agents do, including how to enable them and how to configure the agent.ini
  file with an example.
keywords:
  - security logs
  - Lightweight Agents
  - agent.ini
  - domain controllers
  - Netwrix Auditor
  - log collection
  - agent configuration
products:
  - auditor
sidebar_label: Where does Netwrix Auditor collect security logs?
tags: []
title: "Where does Netwrix Auditor collect security logs?"
knowledge_article_id: kA00g000000H9TUCA0
---

# Where does Netwrix Auditor collect security logs?

Where does Netwrix Auditor collect security logs? What are the Lightweight Agents designed for?

Security logs are automatically collected from all domain controllers. The Agents can also be enabled to improve and speed up this process in highly loaded networks. An agent is a lightweight executable that runs on domain controllers, collects data, pre-filters it and then sends it to Netwrix Auditor in a highly compressed format.

To enable Agents, navigate to **Netwrix Auditor -> `<your_Managed_object>` -> Active Directory** and check **"Enable Lightweight Agents"** option. By default, this option will enable agents on all domain controllers. You can also enable agent during the Managed Object creation.

The `agent.ini` file in the program installation folder provides for more specific and granular control over the agent behavior. This file can be used to specify the domain controllers to be processed by the agents with the following options:

- `Remote`: process a domain controller without agent
- `Agent`: process a domain controller with agent
- `Skip`: do not process a domain controller

**Example**:  
You have 6 domain controllers; 5 of them are located in New York and 1  in Seattle. You do not need to use agents in the New York domain controllers since they have fast network connections while the one loocated in Seattle is slow due to its distance from the main office. You can enable Lightweight Agents in Netwrix Auditor, open `agent.ini` and specify the agent monitoring as follows:

```
[NY1.acme.com](http://NY1.acme.com)=remote
[NY2.acme.com](http://NY2.acme.com)=remote
[NY3.acme.com](http://NY3.acme.com)=remote
[NY4.acme.com](http://NY4.acme.com)=remote
[NY5.acme.com](http://NY5.acme.com)=remote
[Seattle.acme.com](http://Seattle.acme.com)=agent
```
