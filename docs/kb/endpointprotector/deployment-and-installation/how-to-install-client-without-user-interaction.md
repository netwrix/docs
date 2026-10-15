---
description: >-
  Learn how to install the Netwrix Endpoint Protector client silently from the
  command line without user interaction or a system restart.
keywords:
  - endpoint protector
  - Netwrix Endpoint Protector
  - silent install
  - msiexec
  - MSI
  - client installation
  - /qn
  - /norestart
products:
  - endpointprotector
sidebar_label: How to Install Client Without User Interaction
tags:
  - deployment-and-installation
  - kb
title: "How to Install Client Without User Interaction"
knowledge_article_id: kA0Qk0000002Ay3KAE
---

# How to Install Client Without User Interaction

## Question
Can you install the Netwrix Endpoint Protector client, without user interaction?

## Answer
Yes, you can install the Netwrix Endpoint Protector client via the command line interface with administrative privileges. This method installs the client without user interaction and does not require a system restart.

Run the following command:

```batch
msiexec /i "C:\Users\eppuser1\Desktop\EPP Client\EPPClientSetup.6.2.4.2000_x86_64_[a=epp.example.com].msi" /norestart /qn /l*v "C:\EPP_inst.log"
```

- `/qn` performs a silent installation.
- `/norestart` prevents a computer restart after installation is complete.
- `/l*v "C:\EPP_inst.log"` writes a verbose installation log to the specified path — useful for troubleshooting a failed silent install.

> **NOTE:** To customize the installation (server address, department code, proxy settings, and more), add the relevant MSI properties to the command. Use the server's fully qualified domain name (FQDN) as the server address instead of an IP address. See the Appendix in [Deploying the Windows Agent](/docs/kb/endpointprotector/deployment-and-installation/how-to-deploy-the-windows-endpoint-protector-agent) for the full property list.

For the full reference, see [Agent Installation](/docs/endpointprotector/admin/agent#agent-installation) and [Agent Install Parameters](/docs/endpointprotector/admin/agent#agent-install-parameters) in the Agent documentation. For the full list of MSI properties (server address, department code, proxy settings, and more) and GPO deployment steps, see [Deploying the Windows Agent](/docs/kb/endpointprotector/deployment-and-installation/how-to-deploy-the-windows-endpoint-protector-agent).

## Related Links

- [Agent Installation](/docs/endpointprotector/admin/agent#agent-installation)
- [Agent Install Parameters](/docs/endpointprotector/admin/agent#agent-install-parameters)
- [Deploying the Windows Agent](/docs/kb/endpointprotector/deployment-and-installation/how-to-deploy-the-windows-endpoint-protector-agent)
