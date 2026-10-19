---
description: >-
  This article addresses whether the "Uninstall Attempt" event confirms the removal of the agent from the client machine.
keywords:
  - Uninstall Attempt
  - agent removal
  - Endpoint Protector Server
products:
  - endpointprotector
sidebar_label: Uninstall Attempt Event Confirmation
tags:
  - content-aware-protection-and-dpi
  - kb
title: Does the "Uninstall Attempt" Event Confirm Agent Removal from the Client Machine?
knowledge_article_id: kA0Qk0000002B2kKAE
---

# Does the "Uninstall Attempt" Event Confirm Agent Removal from the Client Machine?

## Question

Does the **Uninstall Attempt** event confirm that the agent was removed from the client machine?

## Answer

No, the **Uninstall Attempt** event does not confirm successful agent removal. There is no confirmation of the final result of an attempted agent removal because if the removal is successful, the agent is no longer present to communicate back to the Endpoint Protector Server.

:::note
If the agent still "PINGs" the server after an **Uninstall Attempt** event, this indicates that the agent removal process failed.
:::

### How Endpoint Protector Classifies Uninstall Events

If the EPP Client service isn't stopped cleanly, the client evaluates the state of its files, registry keys, and drivers to determine what happened, and reports one of three event types:

| Event Type | Condition & Meaning |
|---|---|
| **Unplanned Client Termination** | All files, registry keys, and drivers are intact. The service was stopped or killed unexpectedly, with no signs of tampering or removal. |
| **Forced Uninstall Attempt** | The service was stopped or killed, and one or more files, registry keys, or drivers were found in an unexpected state — indicating a partial or unauthorized removal attempt. |
| **Uninstall Attempt** | A deliberate uninstall was initiated — either directly on the endpoint (for example, via Add/Remove Programs) or remotely from the EPP Server using the **Uninstall Client** action. |

Each of these classifications is based on evaluating file, registry, and driver state, not on confirmation of a completed removal — which is why none of them guarantee the outcome of the uninstall attempt. See [Client Termination Event Types](/docs/endpointprotector/admin/agent#client-termination-event-types) for the full explanation.

:::tip
If your organization has a Security Password for Uninstall Protection configured globally, an **Uninstall Attempt** without the correct password fails, and the agent continues running and communicating with the server. See [Security Password for Uninstall Protection](/docs/endpointprotector/admin/systemconfiguration/systemsecurity#security-password-for-uninstall-protection) to configure this setting.
:::