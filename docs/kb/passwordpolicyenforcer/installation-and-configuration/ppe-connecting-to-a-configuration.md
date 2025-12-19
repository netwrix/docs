---
description: >-
  Describes how to connect the Netwrix Password Policy Enforcer (PPE) management
  console to domain and local configurations stored in Active Directory or the
  registry.
keywords:
  - password policy
  - PPE
  - domain configuration
  - local configuration
  - Active Directory
  - registry
  - domain controller
  - HKLM
  - CN=Password Policy Enforcer
products:
  - password-policy-enforcer
sidebar_label: 'PPE: Connecting to a Configuration'
tags: []
title: 'PPE: Connecting to a Configuration'
knowledge_article_id: kA04u000000Pd7BCAS
---

# PPE: Connecting to a Configuration

## Connecting to a Configuration

Netwrix Password Policy Enforcer (PPE)'s configuration settings are stored in Active Directory or the registry. An Active Directory configuration is called a domain configuration, and it defines the password policies for domain user accounts. A registry configuration is called a local configuration, and it defines the password policies for local user accounts.

## Connecting to a Domain Configuration

A domain configuration exists on every domain controller. Changes to the configuration replicate to all the domain controllers in the domain, so you only need to configure one domain controller in each domain. If you are using PPE in more than one domain, then you will need to configure each domain separately. To connect to a domain configuration:

1. Click the **Password Policy Enforcer** item to display the **PPE view**.
2. Click **Connect To** in the right pane of the management console.
3. Select the **Domain** option.
4. Type the name or IP address of a domain controller, and then click **OK**.

You cannot make changes to the PPE configuration while the management console is connected to a read-only domain controller.

## Connecting to a Local Configuration

A local configuration is used by only one computer, so it does not replicate to any other computers. You can copy a local configuration to another computer by exporting the configuration from the registry, and then importing it into the registry of the other computer. You can also use Group Policy to distribute a local configuration to many computers. To connect to a computer's local configuration:

1. Click the **Password Policy Enforcer** item to display the **PPE view**.
2. Click **Connect To** in the right pane of the management console.
3. Select the **Local** option, and then click **OK**.

Domain configurations are stored in the `CN=Password Policy Enforcer 9.0,CN=System` object.  
Local configurations are stored in the `HKLM\SOFTWARE\ANIXIS\Password Policy Enforcer 9.0\` registry key.  
Users with write permission to these objects can configure PPE.
