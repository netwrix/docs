---
description: >-
  This article addresses whether the "Uninstall Attempt" event confirms the removal of the agent from the client machine.
keywords:
  - Uninstall Attempt
  - agent removal
  - Endpoint Protector Server
products:
  - endpoint-protector
sidebar_label: Uninstall Attempt Event Confirmation
tags:
  - content-aware-protection-and-dpi
title: Does the "Uninstall Attempt" Event Confirm Agent Removal from the Client Machine?
knowledge_article_id: kA0Qk0000002B2kKAE
---

# Does the "Uninstall Attempt" Event Confirm Agent Removal from the Client Machine?

## Question

Does the **Uninstall Attempt** event confirm that the agent was removed from the client machine?

## Answer

No, the **Uninstall Attempt** event does not confirm successful agent removal. There is no confirmation of the final result of an attempted agent removal because if the removal is successful, the agent is no longer present to communicate back to the Endpoint Protector Server.

> **NOTE:** If the agent still "PINGs" the server after an **Uninstall Attempt** event, this indicates that the agent removal process failed.