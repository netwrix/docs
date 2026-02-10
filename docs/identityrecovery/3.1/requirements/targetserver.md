---
title: "Target Server Considerations"
description: "Target Server Considerations"
sidebar_position: 50
---

# Target Server Considerations

This topic lists the requirements for the target servers where you want to restore the domain
controllers for performing a forest recovery. See the [Recover a Forest](/docs/identityrecovery/3.1/admin/forest/recover.md)
topic for additional information.

:::tip
Remember, target server refers to a server where you intent to restore a domain controller.
:::


## Target Server and Operating System Requirements

Consider the following when restoring domain controllers.

- The target servers must be isolated from the environment in such a way that they cannot
  name-resolve the domain that is restored. The process of restoring a domain will fail if the
  server is able to see that a domain of that name already exists. Typically, DNS in the target
  environment used for forest recovery should be configured in a way that allows each server in that
  environment to see each other.
- The target server must be a base installation of the Windows Server operating system (OS).
- The target server OS version should be the same version as the source domain controllers from
  which the backups were created. For example, a backup from a Windows Server 2022 domain controller
  would need to be restored to a Windows Server 2022 target server.
- While restoring a domain controller, things such as the ADDS role and configuration are done with
  the product, so there is no requirement to have those in place.

### When the Target Server is a Virtual Machine

Following are some considerations when the target server is a virtual machine.

- Memory and storage configuration for the virtual machine should match the hardware configuration
  of the domain controller where the backup was performed.
- The virtual machine should be in an isolated environment (i.e., should not be able to contact the
  source forest or domains).
- The virtual machines should allow File and Print Sharing through the firewall as well as Remote
  Management, if possible.

## Network Bandwidth Requirement for the Restore Operation

Network bandwidth should be as fast as available but can operate efficiently with 100 Mbps. Slower
bandwidth will result in a longer setup stage for the restore as the backup container has to be
copied to the target server.
