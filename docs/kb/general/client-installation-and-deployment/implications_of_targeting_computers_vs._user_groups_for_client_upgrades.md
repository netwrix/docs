---
description: >-
  This article discusses the implications of targeting computer groups versus user groups for client upgrades, highlighting the benefits and limitations of each approach.
keywords:
  - client upgrades
  - computer groups
  - user groups
sidebar_label: Targeting Computers vs. User Groups
tags:
  - client-installation-and-deployment
title: "Implications of Targeting Computers vs. User Groups for Client Upgrades"
knowledge_article_id: kA0Qk0000002Vm5KAE
products:
  - general
---

# Implications of Targeting Computers vs. User Groups for Client Upgrades

## Question

What are the implications of targeting computer groups versus user groups for client upgrades?

## Answer

Targeting computers ensures that all devices within a specified group receive the upgrade, regardless of the user logged in. This approach is beneficial for maintaining consistent security across all endpoints.

Targeting users allows for more personalized upgrades based on user roles or needs but may not cover all computers if users switch between multiple devices.

### Targeting Computers

- **Consistency Across Computers:** Upgrading by targeting computers ensures that every device within the specified group receives the upgrade. This is crucial for maintaining a uniform security posture across all endpoints, as every computer will have the latest protection features regardless of who is using it.
- **Simplified Management:** This method simplifies the management process, as administrators can apply upgrades to all devices in a network or group without needing to consider individual user settings or roles.
- **Applicability:** This approach is particularly useful in environments where computers are shared among multiple users, ensuring that security measures are consistently applied to all computers.

### Targeting Users

- **Flexibility:** Targeting users provides flexibility in managing upgrades, as administrators can apply different policies or upgrades to different user groups based on their specific requirements.
- **Limitations:** This method may not ensure that all computers are upgraded if users frequently switch between multiple computers, potentially leaving some devices with outdated security measures.

### Considerations

- **Mixed Environments:** In environments with both shared and personal computers, a combination of both strategies might be necessary to ensure comprehensive coverage.
- **Policy Management:** Administrators should carefully plan and manage policies to ensure that the right upgrades are applied to the right targets, whether they are users or computers.